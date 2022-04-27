<template>
  <div>
    <div class="c-mask-layer" v-if="visible"></div>
    <transition name="t-dialog">
      <div class="c-dialog" v-if="visible">
        <img
          v-if="hasClose"
          class="c-dialog_close-btn"
          src="@/assets/img/close-icon.png"
          @click="$emit('close')"
        />
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    hasClose: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-dialog {
  background: #29442a;
  width: 56.041667rem;
  padding: 1.041667rem;
  position: fixed;
  z-index: 99999;
  margin: 0 auto;
  top: 13.59375rem;
  left: 0;
  right: 0;

  &_close-btn {
    cursor: pointer;
    width: 1.25rem;
    position: absolute;
    top: 0.833333rem;
    right: 0.833333rem;
    z-index: 2;
  }
}

.t-dialog-enter-active,
.t-dialog-leave-active {
  transition: all 0.5s;
}

.t-dialog-enter,
.t-dialog-leave-to {
  transform: scale(0);
  transform-origin: 0 ;
}
</style>