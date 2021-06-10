import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "@mdi/font/css/materialdesignicons.min.css";
import router from './router'

require('./assets/app.css')

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



