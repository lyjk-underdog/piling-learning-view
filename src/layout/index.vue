<template>
  <div class="p-main">
    <header class="p-main_header"></header>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.p-main {
  &_header {
    height: 5.7292rem;
    background: url("~@/assets/img/main-header.png");
    background-size: 100% 100%;
  }
}
</style>