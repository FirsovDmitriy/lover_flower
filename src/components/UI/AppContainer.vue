<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppContainer'
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: content-box;
  max-width: rem(1110);
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
