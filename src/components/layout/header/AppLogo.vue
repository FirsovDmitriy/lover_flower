<template>
  <div class="logo">
    <p class="logo__text">
      <span class="logo__l">l</span>
      <span class="logo__f">f</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppLogo'
}
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: rem(32);
}
.logo__text {
  font-family: Cormorant;
  font-weight: 300;
  text-transform: uppercase;
}
.logo__l {
  font-size: rem(60);
  letter-spacing: 1.2px;
  color: #8A8686;
}
.logo__f {
  position: absolute;
  top: rem(15);
  right: 0;
  font-size: rem(50);
  letter-spacing: 1px;
}
</style>
