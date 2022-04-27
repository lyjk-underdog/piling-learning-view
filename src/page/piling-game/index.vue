<template>
  <div class="p-piling-game" v-if="status !== 'pending' ">
    <div class="p-piling-game_aside-left">
      <section class="l-level-title">
        <LevelTitle />
      </section>
      <LevelDescribe />
    </div>
    <div class="p-piling-game_main">
      <section class="l-game-progress">
        <GameProgress />
      </section>
      <GameController>
        <section class="l-pile-canvas">
          <PileCanvas />
        </section>
        <LevelStepList />
      </GameController>
    </div>
    <div class="p-piling-game_aside-right">
      <section class="l-during-score">
        <DuringScore />
      </section>
      <LevelVideoPlayer />
    </div>
    
    <LastScore />
    <GameHint />
  </div>
</template>

<script>
import LevelDescribe from "./components/level-info/describe.vue";
import LevelTitle from "./components/level-info/title.vue";
import LevelVideoPlayer from "./components/level-info/video-player.vue";
import LevelStepList from "./components/level-info/step-list.vue";
import PileCanvas from "./components/pile-canvas.vue";
import DuringScore from "./components/score/during.vue";
import LastScore from "./components/score/last.vue";
import GameProgress from "./components/game/progress.vue";
import GameController from "./components/game/controller.vue";
import GameHint from "./components/game/hint.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    LevelDescribe,
    LevelTitle,
    LevelVideoPlayer,
    LevelStepList,
    PileCanvas,
    DuringScore,
    GameProgress,
    GameController,
    GameHint,
    LastScore,
  },
  computed: {
    ...mapState("game", ["status"]),
  },
  methods: {
    ...mapActions("game", ["gameInit", "gameOver"]),
  },
  created() {
    const { levelId } = this.$route.params;
    this.gameInit(levelId);
  },
  beforeDestroy() {
    this.gameOver();
  },
};
</script>

<style lang="scss" scoped>
.p-piling-game {
  padding: 2.604167rem 2.083333rem 0;
  display: flex;

  &_aside-left,
  &_main {
    margin-right: 0.833333rem;
  }

  &_aside-left {
    width: 19.0625rem;
  }

  &_main {
    width: 56.041667rem;
    position: relative;
  }

  &_aside-right {
    width: 19.0625rem;
  }

  .l-level-title,
  .l-during-score {
    margin-bottom: 2.1875rem;
  }

  .l-pile-canvas {
    margin-bottom: 1.614583rem;
  }

  .l-game-progress {
    position: absolute;
    z-index: 1;
    top: 28rem;
    left: 0;
    right: 0;
    width: 45.8rem;
    margin: 0 auto;
  }
}
</style>