<template>
  <div class="c-cur-level-describe">
    <Card mainTitle="动作描述" subTitle="The acrion describe">
      <div class="c-cur-level-describe_body">{{ levelInfo.describes }}</div>
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
.c-cur-level-describe {
  &_body {
    box-sizing: border-box;
    height: 27.75rem;
    padding: 1.5625rem;
    font-size: 0.729167rem;
    white-space: pre-line;
    line-height: 1.822917rem;
  }
}
</style>