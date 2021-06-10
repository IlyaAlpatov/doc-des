<template>
    <header class="header page-header">
        <router-link to="/">
            <b-button type="is-primary is-light" size="is-medium">Список документаций</b-button>
        </router-link>
        <router-link to="/constructor">
            <b-button type="is-primary is-light" size="is-medium">Конструктор</b-button>
        </router-link>
    </header>
</template>

<script>

export default {
    name: 'headerPage',
    props: {
    },
}
</script>

<style scoped>

</style>