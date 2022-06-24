<template>
  <v-container fluid>
    <v-row>
      <!-- Configuration container -->
      <v-col class="configuration_panel">
        <div class="box">
          <v-text-field
            label="Title"
            v-model="currentArticle.title"
            :disabled="isLoading"
            hide-details
          ></v-text-field>
        </div>

        <template v-for="(subject, id) in currentArticle.subjects">
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
              :disabled="isLoading || subject.isLoading"
              hide-details
            ></v-text-field>
            <v-textarea
              label="Content"
              v-model="subject.content"
              :disabled="isLoading || subject.isLoading"
              hide-details
              auto-grow
            ></v-textarea>
          </div>
        </template>

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
          {{ JSON.stringify(currentArticle, null, 2) }}
        </pre>
      </v-col>

      <!-- Render container -->
      <v-col class="article_display">
        <h2>{{ currentArticle.title }}</h2>

        <v-progress-circular
          v-if="isLoading"
          indeterminate
          color="primary"
        ></v-progress-circular>

        <template v-for="(subject, id) in currentArticle.subjects">
          <div :key="id">
            <h3>{{ subject.title }}</h3>
            <template
              v-for="(subjectLine, index) of subject.content.split('\n')"
            >
              <p :key="`subject_${id}_line_${index}`">{{ subjectLine }}</p>
            </template>
            <v-progress-circular
              v-if="subject.isLoading"
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
interface Article {
  title: string;
  _summary: string;
  subjects: ArticleSubject[];
  lastTitleUpdate: number;
  lastSummaryUpdate: number;
}

interface ArticleSubject {
  last_refresh: number;
  title: string;
  content: string;
  isLoading: boolean;
  lastEdit: number;
}

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld extends Vue {
  public currentArticle: Article = {} as Article;
  public lastArticleEdition: number = Date.now();
  public isLoading = false;

  public customSettings = {
    max_length: 100,
    end_sequence: ".",
    remove_input: true,
    top_k: 40,
    top_p: 0.9,
    temperature: 0.5,
  };

  get computedArticle() {
    return Object.assign({}, this.currentArticle);
  }

  @Watch("computedArticle", { deep: true })
  public onArticleChange(after: Article, before: Article) {
    this.lastArticleEdition = Date.now();

    setTimeout(async () => {
      if (Date.now() - this.lastArticleEdition > 1000) {
        // Title changed
        if (
          after.title &&
          before.title !== after.title &&
          after.title.length > 0 &&
          Date.now() - this.currentArticle.lastTitleUpdate > 1000
        ) {
          this.isLoading = true;

          this.currentArticle.subjects = [];

          const request = await this.requestSummary(after.title);
          if (request) {
            const summary = this.parseSummary(
              request["data"]["generated_text"]
            );

            this.currentArticle.lastSummaryUpdate = Date.now();
            this.currentArticle._summary = request["data"]["generated_text"]
              .split("\n")
              .filter((x: string) => x && x.length > 0)
              .map((x: string) => x.trim())
              .join("\n");

            summary.forEach(async (x: string) => {
              const subject = await this.addNewSubject();
              subject.title = x;
            });

            this.isLoading = false;
            this.lastArticleEdition = Date.now();
            this.currentArticle.lastTitleUpdate = Date.now();
          }
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
    } as ArticleSubject;

    this.currentArticle.subjects.push(subject);

    const index = this.currentArticle.subjects.indexOf(subject);

    // Add a watcher on the new subject
    this.$watch(
      `currentArticle.subjects.${index}.title`,
      async (after, before) => {
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
      }
    );

    return subject;
  }

  public async deleteSubject(subject: ArticleSubject) {
    this.currentArticle.subjects = this.currentArticle.subjects.filter(
      (x) => x.title !== subject.title
    );
  }

  public async refreshSubjectContent(subject: ArticleSubject, reset = true) {
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

  public async requestSummary(title: string) {
    return await axios(
      "http://localhost:8100/https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",
      {
        method: "POST",
        data: {
          text: `titre: ${title}\nsommaire:`,
          ...this.customSettings,
        },
        headers: {
          Authorization: process.env.VUE_APP_API_KEY,
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  public async requestSubjectContent(summary: string) {
    return await axios(
      "http://localhost:8100/https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",
      {
        method: "POST",
        data: {
          ...this.customSettings,
          text: `sujet: ${summary}\ncontenu:`,
        },
        headers: {
          Authorization: process.env.VUE_APP_API_KEY,
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  public mounted() {
    console.log(process.env);

    setTimeout(() => {
      this.currentArticle = {
        title: "Comment devenir data scientist ?",
        subjects: [],
        _summary: "",
        lastTitleUpdate: Date.now(),
        lastSummaryUpdate: Date.now(),
      } as Article;
    }, 500);
  }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(178, 178, 178);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(147, 147, 147);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray;
}

.configuration_panel {
  background-color: #34495e;
  min-height: 100vh;
  height: 100vh;
  overflow-y: scroll;
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

.article_display {
  background-color: rgba(0, 0, 0, 0.05);
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  margin-top: 30px;
}

.buttons > * {
  flex-grow: 1;
}
</style>