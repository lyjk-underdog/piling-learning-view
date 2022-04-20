<template>
  <div class="c-sublist-item">
    <div class="c-sublist-item_body">
      <div class="c-sublist-item_button" @click="startEvaluate">
        开始测评
      </div>
    </div>
    <div class="c-sublist-item_footer">{{subLevel.name}}</div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    subLevel: {
      type: Object,
      required: true,
    },
  },
  methods: {
    startEvaluate() {
      this.$router.replace({
        name: "LearningPage",
        params: { subLevelId: this.subLevel.id },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/sublist-item.scss";
</style>
