import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "@mdi/font/css/materialdesignicons.min.css";

require('./assets/app.css')

Vue.use(VueRouter);
Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



