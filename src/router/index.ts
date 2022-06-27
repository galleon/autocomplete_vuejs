import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Article',
    component: Article
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
