<template>
  <div class="c-during-score">
    <Card mainTitle="我的得分" subTitle="My score">
      <div class="c-during-score_body">
        <section class="l-cur-score">
          <div class="c-cur-score">
            <div class="c-cur-score_header">
              <img src="@/assets/img/score-icon.png" />
              <span>当前得分</span>
            </div>
            <div class="c-cur-score_score-font">{{ score }}</div>
          </div>
        </section>
        <section class="l-score-info">
          <div class="c-during-score-info">
            <div class="c-during-score-info_row">
              <i></i>
              <span class="c-during-score-info_key">用时：</span>
              <span class="c-during-score-info_value">{{ time }}s</span>
            </div>
            <div class="c-during-score-info_row">
              <i></i>
              <span class="c-during-score-info_key">错误次数：</span>
              <span class="c-during-score-info_value">{{ errNums }}</span>
            </div>
            <div class="c-during-score-info_row">
              <i></i>
              <span class="c-during-score-info_key">正确次数：</span>
              <span class="c-during-score-info_value">{{ successNums }}</span>
            </div>
          </div>
        </section>
      </div>
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
    ...mapState("game", ["errNums", "successNums", "time", "score"]),
  },
};
</script>

<style lang="scss" scoped>
.c-during-score {
  &_body {
    padding: 0.520833rem;
  }

  .l-cur-score,
  .l-score-info {
    display: inline-block;
  }

  .l-cur-score {
    margin-right: 1.25rem;
  }

  .l-score-info {
    vertical-align: top;
    width: 6.25rem;
  }

  .c-cur-score {
    &_header {
      margin-bottom: 0.625rem;

      img {
        width: 1rem;
        margin-right: 0.208333rem;
        vertical-align: middle;
      }

      span {
        font-size: 0.625rem;
      }
    }

    &_score-font {
      text-align: center;
      font-size: 2.604167rem;
      text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
      font-family: initial;
      font-weight: 800;
    }
  }

  .c-during-score-info {
    font-size: 0.729167rem;
    font-family: initial;
    font-weight: bold;

    &_row {
      margin-bottom: 0.625rem;

      &:first-child {
        margin-top: 0.3125rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      i {
        display: inline-block;
        width: 0.208333rem;
        height: 0.520833rem;
        border-radius: 0.104167rem;
        box-shadow: 0px 0px 4px #67bd7a;
        background: #67bd7a;
        margin-right: 0.416667rem;
        vertical-align: middle;
      }
    }

    &_key {
      color: #67bd7a;
    }

    &_value {
      float: right;
    }
  }
}
</style>