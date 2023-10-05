<template>
  <basic-layout />
</template>

<script>
import BasicLayout from '@/components/layout/BasicLayout'

export default {
  name: 'App',

  components: {
    BasicLayout
  }
}
</script>

<style lang="scss">
.page,
.page__body {
  width: 100%;
  height: 100%;
}
.page__body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: {
    family: Oswald;
    weight: 300;
    size: $text-base;
  }
  line-height: normal;
  color: $primary-text-color;
  overflow-x: hidden;
}
.page__wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $primary-bg-color;
}
.page__content {
  flex: auto;
}
</style>
