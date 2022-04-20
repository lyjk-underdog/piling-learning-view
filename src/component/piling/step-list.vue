<template>
  <div class="c-step-list">
    <div class="c-step-list_body">
      <ListContainer :list="stepList" type="row" :scrollAble="false">
        <template v-slot:default="{ item }">
          <section class="l-step-item" :key="item.id">
            <StepItem :title="item.name" />
          </section>
        </template>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import StepItem from "./step-item.vue";
import { ListContainer } from "@/component/common/list";

export default Vue.extend({
  components: {
    ListContainer,
    StepItem,
  },
  data() {
    return {
      stepList: [
        {
          id: "0",
          name: "右手",
          coordinate: { x: 0, y: 0 },
        },
        {
          id: "1",
          name: "左手",
          coordinate: { x: 0, y: 0 },
        },
        {
          id: "2",
          name: "右手",
          coordinate: { x: 0, y: 0 },
        },
        {
          id: "3",
          name: "左脚",
          coordinate: { x: 0, y: 0 },
        },
        {
          id: "4",
          name: "右脚",
          coordinate: { x: 0, y: 0 },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/step-list.scss";
</style>
