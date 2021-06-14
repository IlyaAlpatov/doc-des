import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "@mdi/font/css/materialdesignicons.min.css";
import router from './router'

import hljs from 'highlight.js';
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import vuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/androidstudio.css';

// hljs.registerLanguage('javascript', javascript);

require('./assets/app.css')

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.use(Vuex);
// Vue.use(vuePlugin);
Vue.use(hljs);

window.hljs = hljs;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



