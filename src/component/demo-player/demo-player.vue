<template>
  <div class="c-demo-player">
    <Card mainTitle="教学演示" subTitle="Teaching demonstration">
      <div class="c-demo-player_body">
        <img
          class="c-demo-player_play-icon"
          src="@/assets/img/player-icon.png"
          @click="videoDisplay = true"
        />
      </div>
    </Card>

    <div class="c-mask-layer" v-if="videoDisplay"></div>
    <section class="l-video" v-if="videoDisplay">
      <Video :src="videoSrc" @close="videoDisplay = false"/>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "@/component/common/card";
import { Video } from "@/component/common/video";

import videoSrc from "@/assets/video/test.mp4";

export default Vue.extend({
  components: {
    Card,
    Video,
  },
  data() {
    return {
      videoSrc,
      videoDisplay: false,
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./style/demo-player.scss";
</style>
