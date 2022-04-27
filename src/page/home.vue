<template>
  <div class="p-home">
    <div class="p-home_title">首页</div>
    <div class="p-home_body">
      <ListContainer type="row">
        <section
          class="l-navitem"
          v-for="(item, index) in navList"
          :key="index"
        >
          <div class="c-navitem" @click="$router.push(item.route)">
            <div class="c-navitem_body"></div>
            <div class="c-navitem_title">{{ item.name }}</div>
          </div>
        </section>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ListContainer from "@/component/list-container.vue";

export default Vue.extend({
  components: {
    ListContainer,
  },
  data() {
    return {
      navList: [
        {
          name: "闯关模式",
          route: {
            name: "LevelPage",
          },
        },
        {
          name: "观看视频",
          route: {
            name: "VideoPage",
          },
        },
        {
          name: "排行榜",
          route: "",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.p-home {
  &_title {
    font-size: 2.0833rem;
    text-align: center;
    margin-top: 1.9792rem;
    margin-bottom: 12.5rem;
  }

  &_body {
    margin: 0 14.3229rem 0;
  }

  .l-navitem {
    margin-right: 3.3333rem;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
  }

  .c-navitem {
    cursor: pointer;
    width: 21.5625rem;
    display: inline-block;

    &_body {
      height: 12.1354rem;
      background: rgba(41, 68, 42, 0.39);
      border: 0.1563rem solid #62c977;
    }

    &_title {
      font-size: 32px;
      line-height: 5.2083rem;
      text-align: center;
    }
  }
}
</style>