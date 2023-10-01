<template>
  <section class="hero">
    <app-container>
      <p class="hero__title title title--level-1">lover</p>
    </app-container>
    <div class="hero__bg"></div>
    <div class="hero__content">
      <p class="hero__title title title--level-1">flower</p>
      <basic-button class="basic-button--primary">
        смотреть каталог
      </basic-button>
    </div>
  </section>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer'
import BasicButton from '@/components/UI/BasicButton'

export default {
  name: 'HeroSection',

  components: {
    AppContainer,
    BasicButton
  }
}
</script>

<style lang="scss">
.hero {
  position: relative;
  padding: 100px 0 0 0;
  height: rem(975);
}
.hero__title {
  text-align: center;
}
.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/main_bg.png') center / cover;
}
.hero__content {
  position: absolute;
  top: rem(250);
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
}
</style>
