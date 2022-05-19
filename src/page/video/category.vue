<template>
  <div class="p-video-category">
    <div class="p-video-category_title">视频类目</div>
    <div class="p-video-category_body">
      <ListContainer>
        <section
          class="l-category-item t-list-item--active"
          v-for="(item, index) in categoryList"
          :style="{ 'animation-delay': index / 10 + 's' }"
          :key="index"
          @click="() => navigateToVideoPage(item.id)"
        >
          <div class="c-category-item">{{ item.name }}</div>
        </section>
      </ListContainer>
    </div>
  </div>
</template>

<script>
import ListContainer from "@/component/list-container.vue";
import videoApi from "@/api/video";

export default {
  components: {
    ListContainer,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  methods: {
    async getCategoryList() {
      try {
        this.categoryList = await videoApi.getCategory();
      } catch (e) {
        console.error(e);
      }
    },
    navigateToVideoPage(categoryId) {
      this.$router.push({ name: "VideoPage", query: { categoryId } });
    },
  },
  created(){
    this.getCategoryList();
  }
};
</script>

<style lang="scss" scoped>
.p-video-category {
  &_title {
    font-size: 2.083333rem;
    text-align: center;
    margin-top: 1.979167rem;
    margin-bottom: 3.125rem;
  }

  &_body {
    margin: 0 4.6875rem 0;
    height: 38.697917rem;
  }

  .l-category-item {
    display: inline-block;
    margin-right: 2.9688rem;
    margin-bottom: 2.083333rem;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(4n + 1):nth-last-child(-n + 4),
    &:nth-child(4n + 1):nth-last-child(-n + 4) ~ .l-category-item {
      margin-bottom: 0;
    }
  }

  .c-category-item {
    cursor: pointer;
    text-align: center;
    width: 20.1rem;
    line-height: 5rem;
    display: inline-block;
    color: #fff;
    font-size: 1.5625rem /* 30/19.2 */;
    background: rgba(41, 68, 42, 0.39);
    border: 0.1563rem solid #62c977;
  }
}
</style>