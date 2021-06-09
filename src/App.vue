<template>
  <div id="app">
    <headerPage/>
    <constructorPage/>
  </div>
</template>

<script>
import headerPage from './components/headerPage.vue'
import constructorPage from './components/constructorPage.vue'

export default {
  name: 'App',
  components: {
    headerPage,
    constructorPage,
  }
}
</script>

<style>

</style>
