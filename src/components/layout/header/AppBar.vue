<template>
  <nav class="nav">
    <div class="nav__body">
      <ul class="nav__list">
        <li
          class="nav__item"
          v-for="link in $content.links"
          :key="link.text"
        >
          <a class="nav__link" href="#">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<style lang="scss">
.nav {}
.nav__list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav__item {
  display: flex;
  margin: 0 rem(50) 0 0;
  &:last-child {
    margin: 0;
  }
}
.nav__link {
  font: {
    size: $text-lg;
    weight: 400;
  }
  letter-spacing: 0.56px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  @include hover() {
    color: $primary-color;
    text-decoration: underline;
  }
}
</style>
