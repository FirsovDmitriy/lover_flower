<template>
  <button class="basic-button button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BasicButton'
}
</script>

<style lang="scss" scoped>
.basic-button {
  font-size: $text-sm;
  font-weight: 700;
  letter-spacing: 1.2px;
  padding: rem(16) rem(50);
  transition: all $transition-duration $timing-function;
  &--primary {
    background-color: $primary-color;
    color: $primary-bg-color;
    @include hover() {
      background-color: $secondary-color;
      color: $primary-text-color;
    }
  }
  &--outlined {
    color: $primary-text-color;
    border: 1px solid $primary-text-color;
    @include hover() {
      background-color: $primary-color;
      color: $primary-bg-color;
      border-color: $primary-color;
    }
  }
}
</style>
