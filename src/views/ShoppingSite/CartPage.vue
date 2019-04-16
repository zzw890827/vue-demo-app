<template>
  <div v-if="selectedItems.length===0">
    <EmptyPage/>
  </div>
  <div v-else>
    <ul class="cart-item">
      <li v-for="item in selectedItems" :key="item.id">
        <Item v-bind="item">
          <div class="cart-control">
            <button class="remove-one" @click="removeFromCart(item)">&ndash;</button>
            <span class="cart-count">{{item.count}}</span>
            <button class="add-one" @click="addToCart(item)">+</button>
          </div>
        </Item>
      </li>
      <li class="total-price">Total: ${{totalPrice}}</li>
    </ul>
  </div>
</template>

<script>
  import EmptyPage from "./components/EmptyPage";
  import Item from "./components/Item";

  export default {
    name: "CartPage",
    components: {Item, EmptyPage},
    props: {
      selectedItems: {
        type: Array,
        default: () => [],
      },
      totalPrice: {
        type: String,
        default: '0.00',
      },
      handleAddClick: {
        type: Function,
        default: () => {
        },
      },
      handleRemoveClick: {
        type: Function,
        default: () => {
        },
      },
    },
    methods: {
      addToCart(item) {
        this.handleAddClick(item);
      },
      removeFromCart(item) {
        this.handleRemoveClick(item);
      }
    }
  }
</script>

<style scoped>
  .cart-item {
    margin: 0;
    padding: 0;
  }

  .cart-item li {
    list-style: none;
  }

  .cart-count {
    padding: 5px 10px;
  }

  .remove-one, .add-one {
    padding: 5px 10px;
    border: 1px solid #CCCCCC;
    cursor: pointer;
    background-color: #FFFFFF;
  }

  .remove-one:hover, .add-one:hover {
    background-color: #CCCCCC;
  }

  .remove-one:active, .add-one:active {
    color: #FFFFFF;
    outline: none;
  }

  .remove-one:focus, .add-one:focus {
    outline: none;
  }

  .total-price {
    text-align: right;
    padding-top: 18px;
    font-weight: bold;
    font-size: 20px;
  }

</style>
