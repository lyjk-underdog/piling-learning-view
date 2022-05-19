<template>
  <div class="p-video">
    <div class="p-video_title">全部视频</div>
    <div class="p-video_body">
      <ListContainer>
        <section
          class="l-video-item t-list-item--active"
          v-for="(item, index) in videoList"
          :style="{ 'animation-delay': index / 10 + 's' }"
          :key="index"
          @click="targetVideoSrc = item.videoSrc"
        >
          <div class="c-video-item">
            <img :src="item.videoCover" />
            <div class="c-video-item_footer">{{ item.videoTitle }}</div>
          </div>
        </section>
      </ListContainer>
    </div>

    <!-- 视频播放 -->
    <Dialog :visible="!!targetVideoSrc" @close="targetVideoSrc = ''">
      <video :src="targetVideoSrc" controls style="width: 100%"></video>
    </Dialog>
  </div>
</template>

<script>
import Vue from "vue";
import ListContainer from "@/component/list-container.vue";
import videoApi from "@/api/video";
import Dialog from "@/component/dialog.vue";

export default Vue.extend({
  components: {
    ListContainer,
    Dialog,
  },
  data() {
    return {
      videoList: [],
      targetVideoSrc: "",
    };
  },
  methods: {
    async updateVideoList() {
      try {
        let {categoryId} = this.$route.query;

        this.videoList = await videoApi.getList(categoryId);
      } catch (e) {
        console.error(e);
      }
    },
  },
  created() {
    this.updateVideoList();
  },
});
</script>

<style lang="scss" scoped>
.p-video {
  &_title {
    font-size: 2.083333rem;
    text-align: center;
    margin-top: 1.979167rem;
    margin-bottom: 3.125rem;
  }

  &_body {
    margin: 0 4.6875rem 0;
    height: 38.697917rem;
  }

  .l-video-item {
    display: inline-block;
    margin-right: 2.9688rem;
    margin-bottom: 2.083333rem;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(4n + 1):nth-last-child(-n + 4),
    &:nth-child(4n + 1):nth-last-child(-n + 4) ~ .l-video-item {
      margin-bottom: 0;
    }
  }

  .c-video-item {
    cursor: pointer;
    width: 20.1rem;
    height: 11.510417rem;
    display: inline-block;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    &_footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 0.625rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 2.291667rem;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      font-size: 0.729167rem;
    }
  }
}
</style>