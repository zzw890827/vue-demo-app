<template>
  <div class="shopping-site">
    <nav-bar :active-tab="activeTabIndex"
             :total-price="selectedItems.totalPrice"
             :total-quantity="selectedItems.quantity"
             :set-tab-index="handleTabChange"
             @click="handleTabChange"/>
    <main class="shopping-site-content">
      <template v-if="activeTabIndex===0">
        <ItemPage :item-list="itemList" :handle-click="handleAddToCart"/>
      </template>
      <template v-if="activeTabIndex===1">
        <CartPage :selected-items="selectedItems.selectedItemList"
                  :handle-add-click="handleAddToCart"
                  :handle-remove-click="hadleRemoveFromCart"
                  :total-price="selectedItems.totalPrice"/>
      </template>
    </main>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import ItemPage from "./ItemPage.vue";
  import {items} from './static-data';
  import CartPage from "./CartPage";

  export default {
    name: "index",
    components: {
      CartPage,
      ItemPage,
      NavBar,
    },
    data() {
      return {
        activeTabIndex: 0,
        itemList: items,
        cart: [],
      }
    },
    computed: {
      selectedItems: function () {
        let snapShot = {};
        let itemCounts = this.cart.reduce((currentItem, itemID) => {  // カート内各商品の数を算出
          currentItem[itemID] = currentItem[itemID] || 0;
          currentItem[itemID]++;
          return currentItem;
        }, {});

        snapShot.selectedItemList = Object.keys(itemCounts).map(itemId => {  // 選んだ商品を取得
          let item = this.itemList.find(item => (item.id === parseInt(itemId, 10)));
          return {
            ...item,
            count: itemCounts[itemId],
          }
        });

        snapShot.quantity = snapShot.selectedItemList.reduce((sum, item) => {
          return sum + item.count;
        }, 0);

        snapShot.totalPrice = snapShot.selectedItemList.reduce((sum, item) => {
          return sum + item.price * item.count
        }, 0).toFixed(2);

        return snapShot;
      }
    },
    methods: {
      handleTabChange(val) {
        this.activeTabIndex = val;  // 表示中のTAB更新
      },
      handleAddToCart(item) {
        this.cart = [...this.cart, item.id];  // 選んだ商品のID追加
      },
      hadleRemoveFromCart(item) {
        let index = this.cart.indexOf(item.id);
        this.cart = [
          ...this.cart.slice(0, index),
          ...this.cart.slice(index + 1)
        ]
      }
    }
  }
</script>

<style scoped>
  .shopping-site {
    max-width: 800px;
    margin: 0 auto;
  }

  .shopping-site-content {
    margin: 0 20px;
  }
</style>
