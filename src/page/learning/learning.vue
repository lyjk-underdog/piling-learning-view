<template>
  <div class="p-learning">
      <div class="p-learning_aside-left">
          <CurLevelSublist />
      </div>
      <div class="p-learning_body">
          <Piling />
      </div>
      <div class="p-learning_aside-right">
          <section class="l-score">
              <Score />
          </section>
          <section class="l-demo-player">
              <DemoPlayer />
          </section>
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { CurLevelSublist } from '@/component/current-level-sublist';
    import { Piling } from '@/component/piling';
    import { Score } from '@/component/score';
    import { DemoPlayer } from '@/component/demo-player';

    export default Vue.extend({
        components:{
            CurLevelSublist,
            Piling,
            Score,
            DemoPlayer
        }
    })

</script>

<style lang="scss" scoped>
    @import './style/learning.scss';
</style>