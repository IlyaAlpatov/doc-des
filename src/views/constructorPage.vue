<template>
    <section class="constructor-page constructor">
        <h2 class="constructor__title">Конструктор документации</h2>
        <div class="constructor__wrapper">
            <menu-component
            @addElem="addElem"
            @deleteDoc="deleteDoc"
            @addDoc="saveDoc">       
            </menu-component>
            <form class="form-constructor" action="form-constructor">
                <b-field label="Название">
                    <b-input
                    v-model="doc.docName"></b-input>
                </b-field>
                <div class="form-group" v-for="(elem, index) in doc.elems" :key="index">
                    <component
                    v-model="elem.value"
                    :is="elem.type">
                    </component>

                    <b-button class="form-btn" type="is-danger is-light" @click="deleteElem(index)">Удалить</b-button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import titleInput from '../components/elemsComponents/titleInput.vue';
import subtitleInput from '../components/elemsComponents/subtitleInput.vue';
import descInput from '../components/elemsComponents/descInput.vue';
import codeInput from '../components/elemsComponents/codeInput.vue';
import menuComponent from '../components/menuComponent.vue';

import {mapActions} from 'vuex';

export default {
    name: 'constructorPage',
    components: {
        titleInput,
        subtitleInput,
        descInput,
        codeInput,
        menuComponent,
    },
    data() {
        return {
            doc: {
                docName: '',
                elems: [
                ],
            },
        }
    },
    props: {
    },
    methods: {
        addElem(type) {
            this.doc.elems.push({
                type,
                value: '',
            });
        },
        deleteElem(index) {
            this.doc.elems.splice(index, 1);
        },
        deleteDoc() {
            this.doc.elems = [];
            this.doc.docName = '';
        },
        saveDoc() {
            this.addDoc(this.doc);
            this.deleteDoc();
        },
        ...mapActions([
            'addDoc',
        ]),
    },
}
</script>

<style scoped>
</style>
