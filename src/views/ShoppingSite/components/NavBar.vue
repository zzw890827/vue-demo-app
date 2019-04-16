<template>
  <nav class="nav-bar">
    <ul>
      <li :class="[navItem, activeTab === 0 ? 'selected' : '']">
        <nav-item :tab-index="0" @click="getClickIndex">Items</nav-item>
      </li>
      <li :class="[navItem, activeTab === 1 ? 'selected' : '']">
        <nav-item :tab-index="1" @click="getClickIndex">Cart</nav-item>
      </li>
      <li class="nav-summary" @click="handleClick(1)">
        <Summary>
          <template v-slot:total-price>
            <span> {{totalQuantity}} items (${{totalPrice}})</span>
          </template>
        </Summary>
      </li>
    </ul>
  </nav>
</template>

<script>
  import NavItem from './NavItem.vue';
  import Summary from "./Summary";

  export default {
    name: "NavBar",
    components: {
      Summary,
      NavItem,
    },
    props: {
      activeTab: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        default: 0,
      },
      quantity: {
        type: Number,
        default: 0,
      },
      totalPrice: {
        type: String,
        default: '0.00',
      },
      totalQuantity: {
        type: Number,
        default: 0,
      },
      setTabIndex: {
        type: Function,
        default: () => {
        },
      }
    },
    data() {
      return {
        navItem: 'nav-item',
        selected: 'selected',

      }
    },
    methods: {
      getClickIndex(idx) {
        this.$emit('click', idx);
      },
      handleClick(idx){
        this.setTabIndex(idx);
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    margin: 20px;
    padding: 10px;
    border-bottom: 2px solid #508FCA;
  }

  .nav-bar ul {
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

  .nav-item.selected {
    border-bottom: 4px solid #FFAA3F;
  }

  .nav-summary {
    list-style: none;
    display: inline-block;
    float: right;
    padding-top: 20px;
  }

</style>
