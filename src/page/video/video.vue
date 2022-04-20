<template>
  <div class="p-video">
      <div class="p-video_title">全部视频</div>
      <div class="p-video_body">
          <VideoList />
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { VideoList } from '@/component/video-list'

    export default Vue.extend({
        components:{
            VideoList
        }
    })

</script>

<style lang="scss" scoped>
    @import './style/video.scss';
</style>