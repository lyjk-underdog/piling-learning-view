<template>
  <div class="p-main">
    <header class="p-main_header"></header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "./style/main.scss";
</style>