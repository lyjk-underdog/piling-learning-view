<template>
  <div class="c-game-progress">
    <Progress title="进度条" :gridNums="43" :percentage="progress" />
  </div>
</template>

<script>
import Vue from "vue";
import Progress from '@/component/progress.vue';
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    Progress,
  },
  computed: {
    ...mapGetters("game", ["progress"]),
  },
});
</script>
