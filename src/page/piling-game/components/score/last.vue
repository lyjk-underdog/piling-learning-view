<template>
  <Dialog :visible="visible" :hasClose="false">
    <template v-if="status === 'success'">
      <div class="c-last-score--success">
        <div class="c-last-score--success_header">恭喜您闯关成功</div>
        <div class="c-last-score--success_body">
          <div>成绩</div>
          <div class="c-last-score--success_score">{{ score }}</div>
          <div class="c-last-score--success_beyond">超过98.8%的用户</div>
        </div>
        <div class="c-last-score--success_footer">
          <div
            class="c-last-score_button"
            @click="$router.replace({ name: 'LevelPage' })"
          >
            选择关卡
          </div>
          <div
            class="c-last-score_button"
            @click="$router.replace({ name: 'HomePage' })"
          >
            返回首页
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="status === 'over'">
      <div class="c-last-score--over">
        <div class="c-last-score--over_content">
          很遗憾没能闯关成功，再接再厉！
        </div>
        <div class="c-last-score--over_footer">
          <div
            class="c-last-score_button"
            @click="() => gameReload($route.params.levelId)"
          >
            重新挑战
          </div>
          <div
            class="c-last-score_button"
            @click="$router.replace({ name: 'HomePage' })"
          >
            返回首页
          </div>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "@/component/dialog.vue";
import { mapState, mapActions } from "vuex";
import levelApi from "@/api/level";

export default {
  components: {
    Dialog,
  },
  computed: {
    ...mapState("game", ["status", "score"]),
  },
  methods: {
    ...mapActions("game", ["gameReload"]),
  },
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    async status(newStatus) {
      try {
        switch (newStatus) {
          case "success":
            const { levelId } = this.$route.params;

            await levelApi.updateList({
              levelId,
              score: this.score,
            });

            this.visible = true;
            break;

          case "over":
            this.visible = true;
            break;

          default:
            this.visible = false;
        }
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-last-score {
  &_button {
    cursor: pointer;
    background: url("~@/assets/img/cur-level-sublist-button.png");
    background-size: 100% 100%;
    width: 6.5625rem;
    line-height: 2.083333rem;
    font-size: 0.9375rem;
    font-weight: 800;
    text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
    text-align: center;
  }

  &--success {
    padding: 1.041667rem 17.65625rem;

    &_header {
      text-align: center;
      font-size: 2.083333rem;
      margin-bottom: 2.8125rem;
    }

    &_body {
      font-size: 1.666667rem;
      margin-bottom: 3.59375rem;
    }

    &_score {
      color: #fa7d31;
      font-size: 4.166667rem;
      line-height: 8.645833rem;
      text-align: center;
    }

    &_beyond {
      text-align: center;
      font-size: 2.083333rem;
    }

    &_footer {
      display: flex;
      justify-content: space-around;
    }
  }

  &--over {
    padding: 1.041667rem 17.65625rem;
    text-align: center;

    &_content {
      font-size: 2.083333rem;
      margin-bottom: 2.8125rem;
    }

    &_footer {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style> 