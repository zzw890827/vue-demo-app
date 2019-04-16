<template>
  <div class="item">
    <div class="item-left">
      <div class="image"></div>
      <div class="tittle">
        {{name}}
      </div>
      <div>{{description}}</div>
    </div>
    <div class="item-right">
      <div class="price">${{price}}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      name: String,
      description: String,
      price: Number,
    }
  }
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CCCCCC;
    padding: 10px;
  }

  .image {
    width: 64px;
    height: 64px;
    border: 1px solid #CCCCCC;
    margin-right: 10px;
    float: left;
  }

  .tittle {
    font-weight: bold;
    margin-bottom: 0.4em;
  }

  .price {
    text-align: right;
    font-size: 18px;
    color: #555555;
  }

  .item-left {
    flex: 1;
  }

  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
