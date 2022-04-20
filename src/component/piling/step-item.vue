<template>
  <div class="c-step-item">
    <div
      class="c-step-item_body"
      :class="
        [
          'c-step-item--red',
          'c-step-item--orange',
          'c-step-item--blue',
          'c-step-item--purple',
        ][Math.floor(Math.random() * 4)]
      "
    ></div>
    <div class="c-step-item_footer">{{title}}</div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    props:{
        title:{
            type:String,
            required:true
        }
    }
});
</script>

<style lang="scss" scoped>
@import "./style/step-item.scss";
</style>
