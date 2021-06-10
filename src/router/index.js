import Vue from 'vue'
import VueRouter from 'vue-router'
import listPage from '../views/listPage.vue'
import constructorPage from '../views/constructorPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'listPage',
    component: listPage
  },
  {
    path: '/constructor',
    name: 'constructorPage',
    component: constructorPage
  }
]

const router = new VueRouter({
  routes
})

export default router
