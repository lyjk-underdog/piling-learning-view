<template>
  <div class="c-video-list">
    <ListContainer :list="list">
      <template v-slot:default="{ item }">
        <section class="l-list-item" :key="item.videoId">
          <ListItem @click.native="() => handleClick(item)" />
        </section>
      </template>
    </ListContainer>
  </div>
</template>

<script>
import Vue from "vue";
import { ListContainer, ListItem } from "@/component/common/list";

export default Vue.extend({
  components: {
    ListContainer,
    ListItem,
  },
  data() {
    return {
      list: [
        { videoId: "0" },
        { videoId: "1" },
        { videoId: "2" },
        { videoId: "3" },
        { videoId: "4" },
      ],
    };
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-list.scss";
</style>
