<template>
    <section class="list-page">
        <h2 class="list-page__title">Список документаций</h2>
        <div>
            <b-table
                :data="allDosc"
                :columns="columns"
                focusable>
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
                columns: [
                    {
                        field: '_id',
                        label: 'ID',
                    },
                    {
                        field: 'docName',
                        label: 'Название',
                    }
                ],
            }
    },
    methods: {
        ...mapActions([
            'receiveDocs',
        ]),
    },
    computed: {
        ...mapGetters([
            'allDosc',
            ]),
    },
    created() {
        this.receiveDocs();
    }
}
</script>

<style scoped>

</style>