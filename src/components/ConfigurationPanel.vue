<template>
  <!-- Configuration container -->
  <div class="configuration_panel" v-if="article">
    <ApiSettings :article="article" class="article_settings" />

    <div class="box article_title">
      <v-text-field
        label="Title"
        v-model="article.title"
        :disabled="article.isLoading"
        hide-details
      ></v-text-field>
    </div>

    <div class="article_subjects">
      <div class="d-flex justify-center">
        <v-progress-circular
        v-if="article.isLoading"
        indeterminate
        color="primary"
      ></v-progress-circular>
      </div>
      

      <template v-for="(subject, id) in article.subjects">
        <div class="box" :key="id">
          <div class="subject_toolbox">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  dense
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="deleteSubject(subject)"
                >
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Delete this subject</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  dense
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="refreshSubjectContent(subject)"
                >
                  <v-icon> mdi-refresh </v-icon>
                </v-btn>
              </template>
              <span>Reset the content</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  dense
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="refreshSubjectContent(subject, false)"
                >
                  <v-icon> mdi-plus </v-icon>
                </v-btn>
              </template>
              <span>Add more content</span>
            </v-tooltip>
          </div>
          <v-text-field
            label="Subject"
            v-model="subject.title"
            :disabled="article.isLoading || subject.isLoading"
            hide-details
          ></v-text-field>
          <v-textarea
            label="Content"
            v-model="subject.content"
            :disabled="article.isLoading || subject.isLoading"
            hide-details
            auto-grow
          ></v-textarea>
        </div>
      </template>
    </div>

    <div class="d-flex buttons">
      <v-btn color="success" @click="addNewSubject()">
        <v-icon>mdi-plus</v-icon>
        New subject
      </v-btn>

      <v-btn color="info" @click="addNewSubject()" :disabled="true">
        <v-icon>mdi-download</v-icon>
        Download as JSON
      </v-btn>
    </div>

    <pre wrap v-if="false">
          {{ JSON.stringify(article, null, 2) }}
        </pre
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

import {
  IArticle,
  IArticleMetadataSetting,
  IArticleSubject,
} from "@/interfaces/";
import ApiSettings from "@/components/ApiSettings.vue";
import { readArticle } from "@/store/main/getters";

@Component({
  components: {
    ApiSettings,
  },
})
export default class ConfigurationPanel extends Vue {
  public lastArticleEdition: number = Date.now();

  get computedArticle() {
    return Object.assign({}, this.article);
  }
  
  get article() {
    return readArticle(this.$store);
  }

  @Watch("computedArticle", { deep: true })
  public onArticleChange(after: IArticle, before: IArticle) {
    this.lastArticleEdition = Date.now();

    setTimeout(async () => {
      if (Date.now() - this.lastArticleEdition > 1000) {
        // Title changed
        if (
          after.title &&
          before.title !== after.title &&
          after.title.length > 0 &&
          Date.now() - this.article.lastTitleUpdate > 1000
        ) {
          this.article.isLoading = true;
          this.article.subjects = [];

          const request = await this.requestSummary(after.title);
          if (request) {
            const summary = this.parseSummary(
              request["data"]["generated_text"]
            );

            this.article.lastSummaryUpdate = Date.now();
            this.article._summary = request["data"][
              "generated_text"
            ]
              .split("\n")
              .filter((x: string) => x && x.length > 0)
              .map((x: string) => x.trim())
              .join("\n");

            summary.forEach(async (x: string) => {
              const subject = await this.addNewSubject();
              subject.title = x;
            });
          }
          this.article.isLoading = false;
          this.lastArticleEdition = Date.now();
          this.article.lastTitleUpdate = Date.now();
        }
      }
    }, 1000);
  }

  public parseSummary(summary: string) {
    if (!summary) {
      return [];
    }
    return summary
      .split("\n")
      .filter((x: string) => x && x.length > 0)
      .map((x: string) => x.trim());
  }

  public async addNewSubject() {
    const subject = {
      title: "",
      content: "",
      isLoading: false,
      last_refresh: Date.now(),
      lastEdit: Date.now() - 50000,
    } as IArticleSubject;

    this.article.subjects.push(subject);

    const index = this.article.subjects.indexOf(subject);

    // Add a watcher on the new subject
    this.$watch(`article.subjects.${index}.title`, async (after, before) => {
      subject.lastEdit = Date.now();

      setTimeout(async () => {
        if (
          after &&
          before !== after &&
          after.length > 0 &&
          Date.now() - subject.lastEdit > 1000
        ) {
          await this.refreshSubjectContent(subject);
        }
      }, 1000);
    });

    return subject;
  }

  public async deleteSubject(subject: IArticleSubject) {
    this.article.subjects =
      this.article.subjects.filter(
        (x: IArticleSubject) => x.title !== subject.title
      );
  }

  public async refreshSubjectContent(subject: IArticleSubject, reset = true) {
    subject.isLoading = true;

    const subjectContent = await this.requestSubjectContent(subject.title);

    if (subjectContent) {
      if (reset) {
        subject.content = subjectContent["data"]["generated_text"];
      } else {
        subject.content += `\n${subjectContent["data"]["generated_text"]}`;
      }
    }

    subject.isLoading = false;
  }

  public getCustomSettings() {
    const settings: Record<string, any> = {};
    this.article._metadata.api_settings.forEach(
      (x: IArticleMetadataSetting) => {
        settings[x.key] = x.value;
      }
    );
    return settings;
  }

  public async requestSummary(title: string) {
    return await axios(`${process.env.PROXY}${this.article._metadata.api_url}`, {
      method: "POST",
      data: {
        text: `titre: ${title}\nsommaire:`,
        ...this.getCustomSettings(),
      },
      withCredentials: false,
      headers: {
        Authorization: process.env.VUE_APP_API_KEY,
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  public async requestSubjectContent(summary: string) {
    return await axios(`${process.env.PROXY}${this.article._metadata.api_url}`, {
      method: "POST",
      data: {
        ...this.getCustomSettings(),
        text: `sujet: ${summary}\ncontenu:`,
      },
      withCredentials: false,
      headers: {
        Authorization: process.env.VUE_APP_API_KEY,
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
</script>

<style scoped>
.configuration_panel {
  background-color: #34495e;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  max-height: 100%;
}

.configuration_panel pre {
  color: white;
}

.box {
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding-top: 30px;
  position: relative;
}

.box .v-input {
  background-color: white;
  padding: 20px 8px;
  padding-bottom: 0;
  border-radius: 10px;
  border: #2c3e50 solid 2px;
}

.subject_toolbox {
  background-color: rgb(230, 230, 230);
  border-radius: 15px;
  display: flex;
  gap: 2px;
  padding: 0 4px;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  max-width: 80%;
  position: absolute;
  top: 16px;
  right: 14px;
}

.buttons {
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  height: 50px;
  align-items: center;
}

.buttons > * {
  flex-grow: 1;
}

.article_subjects {
  overflow-y: scroll;
  flex-grow: 1;
  height: calc(100vh - 50px - 150px);
  max-height: calc(100vh - 50px - 150px);
}

.article_settings {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
}

.article_title {
  height: 100px;
}
</style>