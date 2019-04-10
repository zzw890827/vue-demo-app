<template>
  <div class="shopping-site">
    <nav-bar/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    name: "index",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .empty {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .empty h2, h3 {
    align-self: center;
  }

  .shopping-site {
    max-width: 800px;
    margin: 0 auto;
  }
</style>