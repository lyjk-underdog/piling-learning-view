<template>
  <div class="c-navlist">
    <ListContainer :list="navList" type="row">
      <template v-slot:default="{ item }">
        <section class="l-nav-item" :key="item.id">
          <NavItem
            :title="item.name"
            @click.native="$router.push(item.route)"
          />
        </section>
      </template>
    </ListContainer>
  </div>
</template>

<script>
import Vue from "vue";
import { nanoid } from "nanoid";
import { ListContainer } from "@/component/common/list";
import NavItem from "./navitem.vue";

export default Vue.extend({
  components: {
    NavItem,
    ListContainer,
  },
  data() {
    return {
      navList: [
        {
          id: nanoid(),
          name: "闯关模式",
          route: {
            name: "LevelPage",
          },
        },
        {
          id: nanoid(),
          name: "练习模式",
          route: {
            name: "LearningPage",
            params: {
              levelId: 0,
            },
          },
        },
        {
          id: nanoid(),
          name: "观看视频",
          route: {
            name: "VideoPage",
          },
        },
        {
          id: nanoid(),
          name: "排行榜",
          route: "",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/navlist.scss";
</style>
