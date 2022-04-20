<template>
  <div class="c-cur-level-sublist">
    <div class="c-cur-level-sublist_header">
      <Card mainTitle="当前关卡" subTitle="The current level">
        <div class="c-cur-level-sublist_title">{{ curLevel.name }}</div>
      </Card>
    </div>

    <div class="c-cur-level-sublist_body">
      <ListContainer :list="curLevel.sublist">
        <template v-slot:default="{ item }">
          <section class="l-sublist-item" :key="item.id">
            <SublistItem :subLevel="item" />
          </section>
        </template>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "@/component/common/card";
import { ListContainer } from "@/component/common/list";
import SublistItem from "./sublist-item.vue";

export default Vue.extend({
  components: {
    Card,
    ListContainer,
    SublistItem,
  },
  data() {
    return {
      curLevel: {
        name: "基础动作练习",
        sublist: [
          {
            id: "0",
            name: "基本动作1：白鹤亮翅",
          },
          {
            id: "1",
            name: "基本动作1：白鹤亮翅",
          },
          {
            id: "2",
            name: "基本动作1：白鹤亮翅",
          },
        ],
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/current-level-sublist.scss";
</style>