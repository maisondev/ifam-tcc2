<template>
  <transition class="container" name="fade">
  <div class="pax-loading-modal" v-if="visible">
    <div class="pax-loading-modal spinner"></div>
  </div>
</transition>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      isLoading: true
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

$orange: #f18b18;

.container {
  position: relative;
}

.pax-loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);

  &__spinner {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:after {
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% - 20px);
      border: 3px solid #f18b18;
      content: "";
      display: block;
      height: 40px;
      width: 40px;
      border-radius: 290486px;
      border-right-color: transparent;
      border-top-color: transparent;
      animation: spin 0.4s linear infinite;
    }

    .fade-enter &,
    .fade-leave-to & {
      transform: scale(1.1);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
}

</style>