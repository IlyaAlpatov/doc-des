<template>
    <section class="constructor-page">
        <menu-component
        @addElem="addElem"
        @deleteList="deleteList">       
        </menu-component>
        <form class="form-constructor" action="form-constructor">
        <div class="form-group" v-for="(elem, index) in elems" :key="index">
            <component
            v-model="elem.value"
            :is="elem.type">
            </component>

            <b-button class="form-btn" type="is-danger is-light" @click="deleteElem(index)">Удалить</b-button>
        </div>
        </form>
    </section>
</template>

<script>
import titleInput from './elemsComponents/titleInput.vue';
import subtitleInput from './elemsComponents/subtitleInput.vue';
import descInput from './elemsComponents/descInput.vue';
import codeInput from './elemsComponents/codeInput.vue';
import menuComponent from './menuComponent.vue';

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
            elems: [

            ],
        }
    },
    props: {
    },
    methods: {
        addElem(type) {
            this.elems.push({
                type,
                value: '',
            });
        },
        deleteElem(index) {
            this.elems.splice(index, 1);
        },
        deleteList() {
            this.elems = [];
        },
    },
}
</script>

<style scoped>
</style>
