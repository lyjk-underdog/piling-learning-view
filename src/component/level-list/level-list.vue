<template>
  <div class="c-level-list">
    <ListContainer :list="list">
      <template v-slot:default="{ item }">
        <section class="l-list-item" :key="item.levelId">
          <ListItem
            @click.native="
              $router.push({ name: 'LearningPage', params: {levelId:item.levelId} })
            "
          />
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
        {
          levelId: "1",
        },
        {
          levelId: "2",
        },
        {
          levelId: "3",
        },
        {
          levelId: "4",
        },
        {
          levelId: "5",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/level-list.scss";
</style>
