<template>
  <div class="c-hint">
    <img
      v-for="(item, index) in hintList"
      :class="item.className"
      :key="index"
      :src="item.imgSrc"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import likeIcon from "@/assets/img/like-icon.svg";
import errIcon from "@/assets/img/err-icon.svg";

export default {
  computed: {
    ...mapState("game", ["hint"]),
  },
  data() {
    return {
      hintList: [],
    };
  },
  watch: {
    hint(newVal) {
      if (newVal === "init") {
        this.hintList = [];
      } else {
        this.hintList.push(
          newVal.valueOf()
            ? { imgSrc: likeIcon, className: ["t-hint--success"] }
            : { imgSrc: errIcon, className: ["t-hint--err"] }
        );
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.c-hint {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 15.625rem;
  height: 15.625rem;
  margin: auto;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.t-hint--err {
  animation: t-hint--err 0.5s;
  animation-fill-mode: forwards;
}

.t-hint--success {
  animation: t-hint--success 0.5s;
  animation-fill-mode: forwards;
}

@keyframes t-hint--err {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(+2px, 0, 0);
  }
  30%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(+4px, 0, 0);
  }
  50% {
    transform: translate3d(-4px, 0, 0);
  }
  100% {
    visibility: hidden;
  }
}

@keyframes t-hint--success {
  0% {
    transform: rotate(-25deg);
  }
  100% {
    visibility: hidden;
    transform: rotate(0);
  }
}
</style>