import axios from 'axios';
import lodash from 'lodash';

const state = () => ({
    docs: [],

})

  // getters
const getters = {
    allDocs(state) {
        return state.docs;
    },
}

  // actions
const actions = {
    async receiveDocs(ctx) {
        try {
            let res = await axios.get('http://localhost:3000/docs');
            const docs = res.data;
            ctx.commit('updateDocs', docs);
        } catch (error) {
            console.log(error);
        }
    },
    async addDoc(ctx, doc) {
        try {
            let copiedDoc = lodash.cloneDeep(doc);
            let res = await axios.post('http://localhost:3000/docs', copiedDoc);
            console.log(res.status);
            ctx.commit('addDocInDocs', copiedDoc);
        } catch (error) {
            console.log(error.response);
        }
    }
}

  // mutations
const mutations = {
    updateDocs(state, docs) {
        state.docs = docs;
    },
    addDocInDocs(state, doc) {
        state.docs.push(doc);
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}