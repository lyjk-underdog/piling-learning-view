<template>
  <div class="c-video">
    <img
      class="c-video_close-btn"
      src="@/assets/img/close-icon.png"
      @click="$emit('close')"
    />
    <video controls :src="src"></video>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video.scss";
</style>