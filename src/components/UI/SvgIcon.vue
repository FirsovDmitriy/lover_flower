<template>
  <svg
    class="svg-icon"
    :width="width"
    :height="height"
  >
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    }
  },

  computed: {
    iconPath () {
      let icon = require(`@/assets/icons/${this.name}.svg`)
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }

      return icon.url
    },

    className () {
      return 'svg-icon'
    }
  }
}
</script>

<style lang="scss">
  .svg-icon {
    fill: currentColor;
  }
</style>
