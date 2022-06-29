<template>
  <div class="article">
    <aside class="configuration_panel">
      <ConfigurationPanel />
    </aside>
    <section class="article_render">
      <ArticleRender />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ArticleRender from "@/components/ArticleRender.vue";
import ConfigurationPanel from "@/components/ConfigurationPanel.vue";
import { IArticle } from "@/interfaces";

import { commitSetArticle } from "@/store/main/mutations";

@Component({
  components: {
    ArticleRender,
    ConfigurationPanel,
  },
})
export default class Article extends Vue {
  public mounted() {
    commitSetArticle(this.$store, {
      title: "",
      subjects: [],
      _summary: "",
      lastTitleUpdate: Date.now(),
      lastSummaryUpdate: Date.now(),
      _metadata: {
        api_proxy: "https://aqsone-reverse-proxy.herokuapp.com/",
        api_url: "https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",
        api_settings: [
          { type: "number", key: "max_length", value: 100 },
          { type: "text", key: "end_sequence", value: "." },
          { type: "checkbox", key: "remove_input", value: true },
          { type: "number", key: "top_k", value: 40 },
          { type: "number", key: "top_p", value: 0.9 },
          { type: "number", key: "temperature", value: 0.5 },
        ],
      },
      isLoading: false,
    } as IArticle);
  }
  
}
</script>

<style scoped>
.article {
  display: flex;
}

.configuration_panel {
  min-width: 400px;
  z-index: 15;
  box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.2);
  max-height: 100vh;
  overflow: hidden;
}

.article_render {
  flex-grow: 1;
}
</style>
