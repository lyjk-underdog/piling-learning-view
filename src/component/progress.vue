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
      validator: (val) => {
        return val >= 0 && val <= 100;
      },
    },
    //标题
    title: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.c-progress {
  &_title {
    font-size: 0.729167rem;
    margin-right: 0.625rem;
  }

  &_body {
    display: inline-block;
  }

  &_grid {
    width: 0.729167rem;
    height: 0.729167rem;
    display: inline-block;
    transform: skew(-30deg);
    margin-right: 0.260417rem;
    background: rgba($color: #313131, $alpha: 0.39);
    vertical-align: middle;

    &--active {
      animation: t-grid--active 0.5s;
      animation-fill-mode: forwards;
    }

    @keyframes t-grid--active {
      100% {
        background: #e27541;
      }
    }
  }
}
</style>
