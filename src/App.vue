<template>
  <div id="app">
    <headerPage/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import headerPage from './views/headerPage.vue'
import store from './store'


export default {
  name: 'App',
  store,
  components: {
    headerPage,
  },
}
</script>

<style>
</style> 
