<template>
    <b-menu>
        <b-menu-list label="Меню">
            <b-menu-item icon="settings" :active="isActive">
                <template #label="props">
                    Список элементов
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                </template>
                
                <b-menu-item label="Заголовок"
                @click="addElem('titleInput')">
                </b-menu-item>

                <b-menu-item label="Подзаголовок"
                @click="addElem('subtitleInput')">
                </b-menu-item>

                <b-menu-item label="Описание"
                @click="addElem('descInput')">
                </b-menu-item>

                <b-menu-item label="Код"
                @click="addElem('codeInput')">
                </b-menu-item>
            </b-menu-item>
            <b-menu-item icon="settings" :active="isActive">
                <template #label="props">
                    Действия с документом
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                </template>
                
                <b-menu-item label="Сохранить"
                @click="addDoc">
                </b-menu-item>

                <b-menu-item label="Удалить все элементы"
                @click="deleteDoc">
                </b-menu-item>
            </b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        addElem(type) {
            this.$emit('addElem', type);
        },
        deleteDoc() {
            this.$emit('deleteDoc');
        },
        addDoc() {
            this.$emit('addDoc');
        },
    },
}
</script>

<style>

</style>