<template>
    <section class="list-page">
        <h2 class="list-page__title">Список документаций</h2>
        <div>
            <b-table
                :data="allDocs"
                focusable>
                <b-table-column field="docName" label="Название" width="40" centered v-slot="props">
                    {{ props.row.docName }}
                </b-table-column>
                <b-table-column width="40" centered v-slot="props">
                <router-link :to="{ name: 'documentPage', params: { docName: props.row.docName, doc: props.row }}">
                    <b-button type="is-primary is-light">Открыть</b-button>
                </router-link>
                </b-table-column>
            </b-table>
        </div>
    </section>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'listPage',
    props: {
    },
    data() {
            return {
            }
    },
    methods: {
        ...mapActions([
            'receiveDocs',
        ]),
    },
    computed: {
        ...mapGetters([
            'allDocs',
            ]),
    },
    created() {
        this.receiveDocs();
    }
}
</script>

<style scoped>

</style>