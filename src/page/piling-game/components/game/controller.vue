<template>
  <div class="c-game-controller">
    <div
      class="c-game-controller_mask-layer"
      v-show="status === 'ready' || status === 'stop'"
    ></div>
    <div
      class="c-game-controller_start-btn"
      v-show="status === 'ready'"
      @click="gameStart"
    >
      开始测评
    </div>
    <div
      class="c-game-controller_continue-btn"
      v-show="status === 'stop'"
      @click="gameStart"
    >
      继续测评
    </div>
    <img
      class="c-game-controller_stop-btn"
      v-show="status === 'start'"
      src="@/assets/img/stop.svg"
      @click="gameStop"
    />
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("game", ["status"]),
  },
  methods: {
    ...mapActions("game", ["gameStart", "gameStop"]),
  },
};
</script>

<style lang="scss" scoped>
.c-game-controller {
  position: relative;

  &_mask-layer {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &_start-btn,
  &_continue-btn {
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    background: url("~@/assets/img/cur-level-sublist-button.png");
    background-size: 100% 100%;
    width: 25rem;
    height: 8rem;
    line-height: 8rem;
    font-size: 2.5rem;
    font-weight: 800;
    text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
    text-align: center;
  }

  &_stop-btn {
    cursor: pointer;
    width: 3.166667rem;
    position: absolute;
    z-index: 3;
    left: 2rem;
    top: 3rem;
  }
}
</style>