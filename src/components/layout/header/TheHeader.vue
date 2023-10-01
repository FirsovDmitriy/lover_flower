<template>
  <header class="header">
    <app-container class="header__content">
      <a class="header__logo" href="#">
        <app-logo />
      </a>
      <app-bar />
      <header-search class="header__search" />
      <div class="header__actions">
        <a class="header__contact" href="tel:+375291136969">
          <svg-icon name="phone"/>
          +375 (29) 113-69-69
        </a>
        <basket-sidebar />
      </div>
    </app-container>
  </header>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer'
import AppBar from './AppBar'
import AppLogo from './AppLogo'
import HeaderSearch from './HeaderSearch'
import SvgIcon from '@/components/UI/SvgIcon'
import BasketSidebar from './BasketSidebar'

export default {
  name: 'TheHeader',

  components: {
    AppContainer,
    AppBar,
    AppLogo,
    HeaderSearch,
    SvgIcon,
    BasketSidebar
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: rem(10) 0;
}
.header__content {
  display: flex;
  align-items: center;
}
.header__logo {
  margin: 0 rem(65) 0 0;
}
.header__search {
  margin-left: rem(50);
}
.header__actions {
  display: flex;
  align-items: center;
  gap: rem(20);
  margin-left: auto;
}
.header__contact {
  font-size: $text-lg;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: $primary-color;
  display: flex;
  align-items: center;
  gap: rem(10);
  @include hover() {
    color: $secondary-color;
  }
}
</style>
