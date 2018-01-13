import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter);

import MainSection from './components/sections/MainSection.vue'
import NewsSection from './components/sections/NewsSection.vue'
import TimetableSection from './components/sections/TimetableSection.vue'
import GallerySection from './components/sections/GallerySection.vue'
import SchoolCollectiveSection from './components/sections/SchoolCollectiveSection.vue'
import ChildrenAndParents from './components/sections/ChildrenAndParentsSection.vue'
import ProudSection from './components/sections/ProudSection.vue'

const routes = [
  {path: '/', component: MainSection},
  {path: '/news', component: NewsSection},
  {path: '/timetable', component: TimetableSection},
  {path: '/gallery', component: GallerySection},
  {path: '/collective', component: SchoolCollectiveSection},
  {path: '/children-and-parents', component: ChildrenAndParents},
  {path: '/proud', component: ProudSection},
]

const router = new VueRouter({
	routes
})
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});