<template>
  <button class="summary">
    <font-awesome-icon icon="shopping-cart" />
    <slot name="total-price"></slot>
  </button>
</template>

<script>
  export default {
    name: "Summary"
  }
</script>

<style scoped>
  .summary {
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
  }

  .summary:focus {
    outline: none;
  }

  .summary:hover {
    color: #999999;
  }
</style>
