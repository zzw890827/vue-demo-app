<template>
  <div class="empty">
    <h2>Please wait for a while.</h2>
    <h3>The todo list page is building.</h3>
  </div>
</template>

<script>
  export default {
    name: "index"
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