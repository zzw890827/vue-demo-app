<template>
  <div class="empty">
      <h2>Your cart is empty.</h2>
      <h3>Why not add some expensive products to it?</h3>
  </div>
</template>

<script>
  export default {
    name: "EmptyPage"
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
</style>