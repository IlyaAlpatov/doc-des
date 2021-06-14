import Vue from 'vue'
import VueRouter from 'vue-router'
import listPage from '../views/listPage.vue'
import constructorPage from '../views/constructorPage.vue'
import documentPage from '../views/documentPage.vue'


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
  },
  {
    path: '/document/:docName',
    name: 'documentPage',
    component: documentPage,
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
