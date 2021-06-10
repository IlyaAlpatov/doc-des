import Vue from 'vue'
import Vuex from 'vuex'
import documentarion from './modules/documentation';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        documentarion,
    },
})