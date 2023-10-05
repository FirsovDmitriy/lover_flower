<template>
  <input class="input" type="text" />
</template>

<script>
export default {
  name: 'TextField'
}
</script>

<style lang="scss" scoped>
.input {
  font: {
    size: 14px;
  }
  width: 100%;
  padding: rem(20);
  border: 1px solid $primary-color;
  background: transparent;
  color: inherit;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font: {
      family: Oswald;
      size: 14px;
      weight: 400;
    }
    letter-spacing: 0.56px;
    text-transform: uppercase;
    color: #395959;
  }
}
</style>
