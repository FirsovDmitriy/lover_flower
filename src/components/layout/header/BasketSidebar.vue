<template>
  <div class="basket">
    <button class="basket__button button">
      <svg-icon
        name="handbag"
        width="30"
        height="30"
      />
    </button>
  </div>
</template>

<script>
import SvgIcon from '@/components/UI/SvgIcon'

export default {
  name: 'BasketSidebar',

  components: {
    SvgIcon
  }
}
</script>

<style lang="scss">
.basket {
  /* display: flex; */
}
.basket__button {
  @include hover() {
    color: $secondary-color;
  }
}
</style>
