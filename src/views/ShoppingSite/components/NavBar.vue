<template>
  <nav class="shopping-site-nav">
    <ul>
      <li class="nav-item">Items</li>
      <li class="nav-item">Cart</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      activeTab: Number,
      type: {
        validator: function (val) {
          return [0, 1].includes(val);
        }
      }
    }
  }
</script>

<style scoped>
  .shopping-site-nav {
    margin: 20px;
    padding: 10px;
    border-bottom: 2px solid #508FCA;
  }

  .shopping-site-nav ul {
    padding: 0;
    margin: 0;
  }
  .nav-item {
    list-style: none;
    display: inline-block;
    margin-right: 32px;
    font-size: 24px;
    border-bottom: 4px solid transparent;
  }
</style>
