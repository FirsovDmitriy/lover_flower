<template>
  <footer class="footer">
    <app-container>
      Footer
    </app-container>
  </footer>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer.vue'

export default {
  name: 'TheFooter',

  components: {
    AppContainer
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 100px 0;
}
</style>
