<template>
  <button class="header-search button">
      <svg-icon
        name="search"
      />
      поиск
    </button>
    <Teleport to="body">
      <div
        class="popup"
        v-if="visible"
      >
        <header class="popup__header">
          <form class="search-form" action="#">
            <text-field
              placeholder="Search..."
            />
            <button class="search-form__button" type="submit">
              <svg-icon name="search" />
            </button>
          </form>
        </header>
      </div>
    </Teleport>
</template>

<script>
import SvgIcon from '@/components/UI/SvgIcon'
import TextField from '@/components/UI/TextField'

export default {
  name: 'HeaderSearch',

  components: {
    SvgIcon,
    TextField
  },

  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: $text-lg;
  font-weight: 400;
  letter-spacing: 0.56px;
  gap: rem(10);
  margin-left: 40px;
  @include hover() {
    color: $primary-color;
  }
}

.popup {
  position: fixed;
  top: rem(100);
  left: 50%;
  transform: translateX(-50%);
  width: 560px;
  background: $primary-bg-color;
}
.popup__header {
  padding: rem(12) rem(12) 0 rem(12);
}

.search-form {
  position: relative;
}
.search-form__button {
  position: absolute;
  right: 0;
  height: 100%;
  padding: 0 rem(10);
  color: $primary-color;
}
</style>
