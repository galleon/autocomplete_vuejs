<template>
  <div>
    <v-dialog v-model="isOpen" width="600px" persistent scrollable>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon color="white">mdi-cog</v-icon>
        </v-btn>
      </template>

      <v-card class="api_settings_dialog">
        <v-card-title class="text-h5 grey lighten-2 api_settings_titlebar">
          API Settings

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                large
                color="success"
                v-bind="attrs"
                v-on="on"
                @click="addNewSetting()"
              >
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add a new setting</span>
          </v-tooltip>
        </v-card-title>

        <v-card-text id="api_settings" v-if="article && article._metadata">

          <v-text-field
            v-model="article._metadata.api_proxy"
            label="API Proxy"
            class="api_setting"
            hide-details
          ></v-text-field>

          <v-text-field
            v-model="article._metadata.api_url"
            label="API Url"
            class="api_setting"
            hide-details
          ></v-text-field>

          <template v-for="(setting, id) in article._metadata.api_settings">
            <div :key="id" class="api_setting">
              <div class="api_setting_title">
                <h3
                  v-html="
                    setting.key.toUpperCase() ||
                    `<em class='red--text'>UNDEFINED</em>`
                  "
                ></h3>
                <div class="api_setting_actions">
                  <v-btn icon @click="deleteSetting(id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </div>

              <v-select
                :items="['text', 'number', 'checkbox']"
                v-model="setting.type"
                hide-details
                label="Setting type"
              ></v-select>

              <div class="api_setting_data">
                <v-text-field
                  v-model="setting.key"
                  label="Key"
                  hide-details
                ></v-text-field>

                <v-checkbox
                  v-if="setting.type === 'checkbox'"
                  v-model="setting.value"
                  label="Value"
                  hide-details
                ></v-checkbox>

                <v-text-field
                  v-else
                  v-model="setting.value"
                  label="Value"
                  hide-details
                  :type="setting.type"
                ></v-text-field>
              </div>
            </div>
          </template>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="saveAndClose"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { IArticleMetadataSetting } from "@/interfaces";
import { Component, Vue } from "vue-property-decorator";
import { readArticle } from "@/store/main/getters";

@Component({
  components: {},
})
export default class ApiSettings extends Vue {
  public isOpen = false;

  get article() {
    return readArticle(this.$store);
  }

  public saveAndClose() {
    this.isOpen = false;
  }

  public addNewSetting() {
    this.article._metadata.api_settings.push({
      type: "text",
      key: "",
      value: "",
    } as IArticleMetadataSetting);

    setTimeout(() => {
      const settings = document.getElementById("api_settings");
      if (settings) {
        settings.scrollTop = settings.scrollHeight;
      }
    }, 50);
  }

  public deleteSetting(id: number) {
    const settingToRemove =
      this.article._metadata.api_settings.splice(id, 1)[0];
    this.article._metadata.api_settings =
      this.article._metadata.api_settings.filter(
        (x: IArticleMetadataSetting) => x !== settingToRemove
      );
  }
}
</script>

<style scoped>
.api_settings_dialog {
  display: flex;
  flex-direction: column;
}

.api_settings_titlebar {
  display: flex;
  justify-content: space-between;
}

#api_settings {
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex-grow: 1;
}
.api_setting {
  display: flex;
  border: solid transparent 2px;
  padding: 16px 8px;
  padding-bottom: 0;
  flex-direction: column;
}

.api_setting_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.api_setting_actions {
  border-radius: 20px;
}

.api_setting:hover {
  border-color: rgba(0, 0, 0, 0.05);
}

.api_setting_data {
  flex-direction: row;
}
</style>