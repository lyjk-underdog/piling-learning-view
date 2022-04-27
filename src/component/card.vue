<template>
  <div class="c-card">
    <div class="c-card_header">
      <div class="c-card_main-title">{{ mainTitle }}</div>
      <div class="c-card_sub-title">{{ subTitle }}</div>
    </div>
    <div class="c-card_body">
      <div class="c-card_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["mainTitle", "subTitle"],
});
</script>

<style lang="scss" scoped>
.c-card {
  &_header {
    height: 2.8125rem;
    background: url("~@/assets/img/card-header.png");
    background-size: 100% 100%;
  }

  &_main-title,
  &_sub-title {
    text-align: center;
    text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
  }

  &_main-title {
    font-size: 0.9375rem;
    line-height: 1.71875rem;
  }

  &_sub-title {
    font-size: 0.625rem;
    line-height: 1.09375rem;
  }

  &_body {
    background: linear-gradient(
      270deg,
      rgba(103, 189, 122, 0.1) 0%,
      rgba(103, 189, 122, 0.1) 51%,
      rgba(103, 189, 122, 0.1) 100%
    );
    padding: 0.78125rem 0.9375rem;
  }

  &_content {
    background: url("~@/assets/img/card-body.png");
    background-size: 100% 100%;
  }
}
</style>

