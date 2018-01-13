<template>
  <div id="app">
    <header-content></header-content>
    <main-content></main-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
  import HeaderContent from './components/HeaderContent.vue'
  import MainContent from './components/MainContent.vue'
  import FooterContent from './components/FooterContent.vue' 

  export default {
    name: 'app',

    data () {
      return {
        
      }
    },

    components: {
      HeaderContent,
      MainContent,
      FooterContent
    }
  }
</script>

<style>

</style>
