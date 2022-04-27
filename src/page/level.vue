<template>
  <div class="p-level">
    <div class="p-level_title">全部关卡</div>
    <div class="p-level_body">
      <ListContainer>
        <section
          class="t-list-item--active l-level-item"
          v-for="(item , index) in levelList"
          :style="{'animation-delay':index / 10 + 's'}"
          :key="item.id"
          @click="
            () =>
              $router.replace({
                name: 'PilingGamePage',
                params: { levelId: item.id },
              })
          "
        >
          <div class="c-level-item">
            <div class="c-level-item_header">{{ item.title }}</div>
            <div class="c-level-item_row">
              <div>
                状态：<span :style="{ color: item.pass ? 'green' : 'red' }">{{
                  item.pass ? "已通过" : "未通过"
                }}</span>
              </div>
              <span>限时：{{ item.timeLimit }}s</span>
            </div>
            <div class="c-level-item_row">
              <span>得分：{{ item.score }}</span>
              <span>难度：{{ getDifficultyName(item.difficulty) }}</span>
            </div>
          </div>
        </section>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ListContainer from "@/component/list-container.vue";
import levelApi from "@/api/level";

export default Vue.extend({
  components: {
    ListContainer,
  },
  data() {
    return {
      levelList: [],
    };
  },
  methods: {
    async updateLevelList() {
      try {
        this.levelList = await levelApi.getList();
      } catch (e) {
        throw e;
      }
    },
    getDifficultyName(arg){
      let strategy = {
        "0":"简单",
        "1":"普通",
        "2":"困难"
      }

      return strategy[arg]
    }
  },
  created() {
    this.updateLevelList();
  },
});
</script>

<style lang="scss" scoped>
.p-level {
  &_title {
    font-size: 2.0833rem;
    text-align: center;
    margin-top: 1.9792rem;
    margin-bottom: 3.125rem;
  }

  &_body {
    margin: 0 4.6875rem;
    height: 39.0625rem;
  }

  .l-level-item {
    display: inline-block;
    margin-right: 2.9688rem;
    margin-bottom: 2.083333rem;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(4n + 1):nth-last-child(-n + 4),
    &:nth-child(4n + 1):nth-last-child(-n + 4) ~ .l-level-item {
      margin-bottom: 0;
    }
  }

  .c-level-item {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20.1rem;
    height: 11.5104rem;
    box-sizing: border-box;
    cursor: pointer;
    background: rgba(41, 68, 42, 1);
    padding: 1.5625rem;

    &_header {
      text-align: center;
      font-size: 1.5625rem;
      color: #fa7d31;
    }

    &_row {
      display: flex;
      justify-content: space-between;
    }
  }

}
</style>