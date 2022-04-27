<template>
  <div class="c-plie-canvas">
    <div class="c-plie-canvas_body">
      <div
        v-if="targetPoint"
        class="c-plie-canvas_point t-pile-point"
        :style="targetPoint.style"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("game", ["curSteps"]),
    targetPoint() {
      const curStep = this.curSteps[0];
      return (
        curStep && this.points.find((point) => point.prop === curStep.prop)
      );
    },
  },
  data() {
    return {
      points: [
        {
          style: {
            backgroundColor: "#C04753",
            top: "7rem",
            left: "17.75rem",
          },
          prop: "left",
        },
        {
          style: {
            backgroundColor: "#7AD9FC",
            top: "10.52rem",
            left: "36.35rem",
          },
          prop: "right",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.c-plie-canvas {
  background: url("~@/assets/img/pile-canvas-background.png");
  background-size: 100% 100%;

  &_body {
    position: relative;
    width: 100%;
    height: 31.510417rem;
    background: url("~@/assets/img/pile.svg") no-repeat;
    background-size: 16.145833rem;
    background-position: 50%;
  }

  &_point {
    position: absolute;
    width: 1.197917rem;
    height: 1.197917rem;
    border-radius: 50%;
    border: 0.520833rem solid rgba($color: #fff, $alpha: 0.3);
    background: content-box;
  }

  .t-pile-point {
    animation: t-pile-point 1s;
    animation-iteration-count: infinite;
  }

  @keyframes t-pile-point {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>