<template>
  <div class="c-progress">
    <span class="c-progress_title">{{ title }}</span>
    <div class="c-progress_body">
      <div
        :class="[
          'c-progress_grid',
          { 'c-progress_grid--active': index <= gridNums * (percentage / 100) },
        ]"
        v-for="index in gridNums"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    //格子数
    gridNums: {
      type: Number,
      required: true,
    },
    //百分比
    percentage: {
      type: Number,
      required: true,
      validator:(val) => {
          return val >= 0 && val <= 100
      }
    },
    //标题
    title: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/progress.scss";
</style>
