<template>
    <section class="constructor-page constructor">
        <h2 class="constructor__title">Конструктор документации</h2>
        <div class="constructor__wrapper">
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
        </div>
    </section>
</template>

<script>
import titleInput from '../components/elemsComponents/titleInput.vue';
import subtitleInput from '../components/elemsComponents/subtitleInput.vue';
import descInput from '../components/elemsComponents/descInput.vue';
import codeInput from '../components/elemsComponents/codeInput.vue';
import menuComponent from '../components/menuComponent.vue';

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
