<template>
  <div
    class="c-list-container scroll-style"
    :type="type"
    :scrollAble="scrollAble"
  >
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
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
.c-list-container {
  &[type="normal"] {
    height: 100%;
    overflow: hidden;

    &[scrollAble="true"] {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  &[type="row"] {
    white-space: nowrap;
    overflow: hidden;

    &[scrollAble="true"] {
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
}
</style>
