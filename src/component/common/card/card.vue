<template>
  <div class="c-card">
      <div class="c-card_header">
          <div class="c-card_main-title">{{mainTitle}}</div>
          <div class="c-card_sub-title">{{subTitle}}</div>
      </div>
      <div class="c-card_body">
          <div class="c-card_content">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        props:['mainTitle','subTitle']
    })

</script>

<style lang="scss" scoped>
    @import './style/card.scss';
</style>

