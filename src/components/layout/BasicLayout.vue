<template>
  <the-header />
  <main class="page__content">
    <router-view></router-view>
  </main>
  <the-footer />
</template>

<script>
import TheHeader from '@/components/layout/header/TheHeader'
import TheFooter from '@/components/layout/TheFooter'

export default {
  name: 'BasicLayout',

  components: {
    TheHeader,
    TheFooter
  }

}
</script>

<style lang="scss">

</style>
