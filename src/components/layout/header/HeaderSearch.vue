<template>
  <div>
    <button class="header-search button">
      <svg-icon
        name="search"
      />
      поиск
    </button>
    <form action="#"></form>
  </div>
</template>

<script>
import SvgIcon from '@/components/UI/SvgIcon'

export default {
  name: 'HeaderSearch',

  components: {
    SvgIcon
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: $text-lg;
  font-weight: 400;
  letter-spacing: 0.56px;
  gap: rem(10);
  @include hover() {
    color: $primary-color;
  }
}
</style>
