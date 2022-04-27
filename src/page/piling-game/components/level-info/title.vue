<template>
  <div class="c-cur-level-title">
    <Card mainTitle="当前关卡" subTitle="The current level">
      <div class="c-cur-level-title_title">{{ levelInfo.title }}</div>
    </Card>
  </div>
</template>

<script>
import Card from "@/component/card.vue";
import { mapState } from "vuex";

export default {
  components: {
    Card,
  },
  computed: {
    ...mapState("game", ["levelInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.c-cur-level-title {
  &_title {
    text-align: center;
    font-size: 1.666667rem;
    line-height: 6.25rem;
    text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
    font-weight: 800;
  }
}
</style>