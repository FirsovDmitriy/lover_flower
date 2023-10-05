<template>
  <section class="hero">
    <app-container>
      <p class="hero__title title title--level-1">lover</p>
    </app-container>
    <div class="hero__bg"></div>
    <div class="hero__main">
      <p class="hero__title title title--level-1">flower</p>
      <basic-button class="basic-button--primary">
        смотреть каталог
      </basic-button>
    </div>
  </section>
  <div class="gradient"></div>
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

<style lang="scss" scoped>
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
.hero__main {
  position: absolute;
  top: rem(250);
  left: 50%;
  z-index: 2;
  display: grid;
  justify-items: center;
  transform: translateX(-50%);
}
.gradient {
  position: relative;
  top: -90px;
  height: 100px;
  width: 100%;
  background: linear-gradient(180deg, rgba(4, 10, 10, 0.00) 0%, #040A0A 100%);
}
</style>
