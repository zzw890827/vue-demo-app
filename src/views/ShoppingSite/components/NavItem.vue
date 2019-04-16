<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "NavItem",
    props: {
      tabIndex: Number,
    },
    methods: {
      handleClick(){
         this.$emit('click', this.tabIndex);
      }
    }
  }
</script>

<style scoped>
  button {
    cursor: pointer;
    font-size: 24px;
    background: #FFFFFF;
    border: none;
  }

  button:hover {
    color: #999999;
  }

  button:focus {
    outline: none;
  }
</style>