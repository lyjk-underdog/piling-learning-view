<template>
  <div class="p-level">
      <div class="p-level_title">全部关卡</div>
      <div class="p-level_body">
          <LevelList />
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { LevelList } from '@/component/level-list';

    export default Vue.extend({
       components:{
           LevelList
       }
    })

</script>

<style lang="scss" scoped>
    @import './style/level.scss';
</style>