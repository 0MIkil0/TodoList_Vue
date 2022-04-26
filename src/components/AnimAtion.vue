<template>
  <div id="demo">
    <div class="d-grid gap-2">
      <button class="btn btn-secondary me-md-2" v-on:click="show = !show">
        Переключить
      </button>
    </div>
    <transition name="bounce">
      <p v-if="show">Привет</p>
    </transition>
  </div>
 <div id="demo">
  <transition name="fade">
    <p v-if="show">Я Миша</p>
  </transition>
</div>

</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};


</script>


<style scoped>
/*параметры для старта анимации*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
/*параметры для конца анимации*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>