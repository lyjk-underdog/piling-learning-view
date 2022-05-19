<template>
  <div class="p-ranking">
    <div class="p-ranking_header">排行榜</div>
    <div class="p-ranking_body">
      <ListContainer :scrollAble="true">
        <div
          class="c-rank-item"
          v-for="(item, index) in rankList"
          :key="index"
        >
          <div class="c-rank-item_order">{{ index + 1 }}</div>
          <div class="c-rank-item_body">
            <div class="c-rank-item_user-info">
              <img class="c-rank-item_avatar" :src="item.avatar" />
              <span class="c-rank-item_username">{{ item.username }}</span>
            </div>
            <div class="c-rank-item_score">{{ item.score }}分</div>
          </div>
        </div>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import rankingApi from "@/api/ranking";
import ListContainer from "@/component/list-container.vue";

export default {
  components: {
    ListContainer,
  },
  data() {
    return {
      rankList: [],
    };
  },
  methods: {
    async getRankList() {
      try {
        this.rankList = await rankingApi.get();
      } catch (e) {
        console.error(e);
      }
    },
  },
  created() {
    this.getRankList();
  },
};
</script>

<style lang="scss" scoped>
.p-ranking {
  width: 44.270833rem /* 850/19.2 */;
  margin: 3.645833rem /* 70/19.2 */ auto 0;
  padding: 0 5.46875rem /* 105/19.2 */ 3.4375rem /* 66/19.2 */;
  background: rgba(41, 68, 42, 0.39);

  &_header {
    text-align: center;
    font-size: 1.875rem /* 36/19.2 */;
    line-height: 7.291667rem /* 140/19.2 */;
  }

  &_body {
    height: 29.375rem /* 564/19.2 */;
    overflow: auto;
  }

  .c-rank-item {
    display: flex;
    margin-bottom: 0.625rem /* 12/19.2 */;

    &:last-child {
      margin-bottom: 0;
    }

    &_order {
      width: 4.6875rem /* 90/19.2 */;
      line-height: 3.125rem /* 60/19.2 */;
      background: url("~@/assets/img/order-bac.svg");
      background-size: 100% 100%;
      text-align: center;
      font-size: 1.40625rem /* 27/19.2 */;
      text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
      font-weight: 800;
      margin-right: 0.9375rem /* 18/19.2 */;
    }

    &_body {
      flex: 1 1 auto;
      background: rgba(41, 68, 42, 0.39);
      border: 0.104167rem /* 2/19.2 */ solid #62c977;
      height: 3.125rem /* 60/19.2 */;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.302083rem /* 25/19.2 */;
    }

    &_avatar {
      width: 1.875rem /* 36/19.2 */;
      margin-right: 0.625rem /* 12/19.2 */;
      vertical-align: middle;
      border-radius: 50%;
    }

    &_username {
      font-weight: 800;
      font-size: 0.9375rem /* 18/19.2 */;
    }

    &_score {
      font-weight: 800;
      font-size: 0.9375rem /* 18/19.2 */;
      color: #fa7d31;
    }
  }
}
</style>