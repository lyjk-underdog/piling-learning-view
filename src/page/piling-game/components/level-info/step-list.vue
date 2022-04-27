<template>
  <div class="c-cur-level-step-list">
    <div class="c-cur-level-step-list_body">
      <ListContainer type="row" :scrollAble="false">
        <transition-group name="t-step-list" tag="div">
          <section
            class="l-step-item"
            v-for="item in curSteps"
            :key="item.stepindex"
          >
            <div class="c-step-item">
              <div
                class="c-step-item_body"
                :class="
                  [
                    'c-step-item--red',
                    'c-step-item--orange',
                    'c-step-item--blue',
                    'c-step-item--purple',
                  ][Math.floor(Math.random() * 4)]
                "
              ></div>
              <div class="c-step-item_footer">{{ item.label }}</div>
            </div>
          </section>
        </transition-group>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "@/component/list-container.vue";

export default {
  components: {
    ListContainer,
  },
  computed: {
    ...mapState("game", ["curSteps"]),
  },
};
</script>

<style lang="scss" scoped>
.c-cur-level-step-list {
  background: rgba(16, 31, 25, 0.8);
  padding: 1.5625rem 1.354167rem;

  &_body {
    padding: 1.302083rem 1.5625rem;
    min-height: 6.041667rem;
    background: linear-gradient(
      87deg,
      rgba(37, 74, 59, 0.6) 0%,
      rgba(59, 117, 94, 0.6) 54%,
      rgba(35, 70, 56, 0.6) 100%
    );
  }

  .l-step-item {
    display: inline-block;
    margin-right: 4.166667rem;
  }

  .c-step-item {
    display: inline-block;

    &_body {
      width: 2.864583rem;
      height: 2.864583rem;
      border-radius: 50%;
      border: 0.520833rem solid rgba($color: #fff, $alpha: 0.3);
      margin-bottom: 1rem;
      background: content-box;
    }

    &_footer {
      text-align: center;
      text-shadow: 0px 0px 10px rgba(250, 211, 49, 0.8);
      font-size: 0.833333rem;
    }

    &--red {
      background-color: #c24752;
    }

    &--blue {
      background-color: #7bdeff;
    }

    &--orange {
      background-color: #fa7d31;
    }

    &--purple {
      background-color: #c390ff;
    }
  }

  .t-step-list-leave-active {
    transition: all 1s;
  }

  .t-step-list-leave-to {
    opacity: 0;
    position: absolute;
    transform: translateY(-100px);
  }
}
</style>