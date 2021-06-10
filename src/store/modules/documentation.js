import axios from 'axios';

const state = () => ({
    docs: []
})

  // getters
const getters = {
    allDosc(state) {
        return state.docs;
    }
}

  // actions
const actions = {
    async receiveDocs(ctx) {
        try {
            let res = await axios.get('http://localhost:3000/docs');
            console.log(res.data);
            const docs = res.data;
            ctx.commit('updateDocs', docs);
        } catch (error) {
            console.log(error);
        }
    },
}

  // mutations
const mutations = {
    updateDocs(state, docs) {
        state.docs = docs;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}