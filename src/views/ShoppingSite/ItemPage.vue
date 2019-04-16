<template>
  <ul class="items">
    <li v-for="item in itemList" :key="item.id">
      <Item v-bind="item">
        <button class="add-to-cart" @click="addToCart(item)">Add to Cart</button>
      </Item>
    </li>
  </ul>
</template>

<script>
  import Item from './components/Item.vue';

  export default {
    name: "ItemPage",
    components: {
      Item
    },
    props: {
      itemList: {
        type: Array,
        default: () => [],
      },
      handleClick :{
        type: Function,
        default: () => {},
      }
    },
    methods: {
      addToCart(item) {
        this.handleClick(item);
      }
    }
  }
</script>

<style scoped>
  .items {
    margin: 0;
    padding: 0;
  }

  .items li {
    list-style: none;
    margin-bottom: 20px;
  }

  .add-to-cart {
    margin-bottom: 5px;
    font-size: 14px;
    border: 2px solid #FFAA3F;
    background-color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
  }

  .add-to-cart:hover {
    background-color: #FFDD82;
  }

  .add-to-cart:active {
    background-color: #ED8400;
    color: #FFFFFF;
    outline: none;
  }

  .add-to-cart:focus {
    outline: none;
  }
</style>
