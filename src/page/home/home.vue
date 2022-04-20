<template>
  <div class="p-home">
    <div class="p-home_title">首页</div>
    <div class="p-home_body">
      <section class="l-navlist">
        <Navlist />
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Navlist } from "@/component/navlist";

export default Vue.extend({
  components: {
    Navlist
  },
  created(){
    console.log(1)
  }
});
</script>

<style lang="scss" scoped>
@import "./style/home.scss";
</style>