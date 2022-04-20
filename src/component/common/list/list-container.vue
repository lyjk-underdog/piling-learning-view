<template>
  <div
    class="c-list-container scroll-style"
    :type="type"
    :scrollAble="scrollAble"
  >
    <slot :item="item" v-for="item in list"></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    type: {
      //列表呈现类型，有2值：normal , row
      type: String,
      default: "normal",
    },
    scrollAble: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/list-container.scss";
</style>
