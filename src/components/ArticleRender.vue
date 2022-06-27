<template>
  <!-- Render container -->
  <div class="article_display" v-if="article">
    <h2 class="article_title">{{ article.title }}</h2>

    <v-progress-circular
      v-if="article.isLoading"
      indeterminate
      color="primary"
    ></v-progress-circular>

    <template v-for="(subject, id) in article.subjects">
      <div :key="id" class="article_subject">
        <h3>{{ subject.title }}</h3>
        <template v-for="(subjectLine, index) of subject.content.split('\n')">
          <p :key="`subject_${id}_line_${index}`">{{ subjectLine }}</p>
        </template>
        <v-progress-circular
          v-if="subject.isLoading"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ApiSettings from "@/components/ApiSettings.vue";
import { readArticle } from "@/store/main/getters";

@Component({
  components: {
    ApiSettings,
  },
})
export default class ArticleRender extends Vue {
  get article() {
    return readArticle(this.$store);
  }
}
</script>

<style scoped>
.article_display {
  background-color: rgba(0, 0, 0, 0.05);
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  min-height: 100%;
  min-width: 100%;
  padding: 25px;
}

.article_title {
  padding: 20px 0;
}

.article_subject {
  padding: 10px 0;
}
</style>