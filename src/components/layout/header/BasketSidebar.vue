<template>
  <button
    class="cart-button button"
    @click="open = true"
  >
    <svg-icon
      name="handbag"
      width="30"
      height="30"
    />
    </button>

    <Teleport to="body">
      <div
        class="cart"
        :class="{
          'cart--hide': !open,
          'cart--show': open
        }"
      >
        <div class="cart__header">
          <p class="cart__title">Ваша корзина</p>
          <button class="cart__close button" @click="open = false">
            <svg-icon
              name="close"
              width="30"
              height="30"
            />
          </button>
        </div>
      </div>
    </Teleport>

</template>

<script>
import SvgIcon from '@/components/UI/SvgIcon'

export default {
  name: 'BasketSidebar',

  components: {
    SvgIcon
  },

  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-button {
  @include hover() {
    color: $secondary-color;
  }
}

.cart {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: rem(420);
  height: 100%;
  padding: rem(20) rem(30);
  background: $primary-bg-color;
  transition: transform $transition-duration $timing-function;
  &--hide {
    transform: translateX(100%);
  }
  &--show {
    transform: translateX(0);
  }
}
.cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart__title {
  font: {
    size: rem(30);
    weight: 700;
  }
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: $primary-color;
}
.cart__close {
  color: $primary-color;
  @include hover() {
    color: $secondary-color;
  }
}
</style>
