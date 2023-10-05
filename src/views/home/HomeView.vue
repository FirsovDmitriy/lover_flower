<template>
  <hero-section />
  <!-- <catalog-section /> -->
  <carousel-section />

  <order-section />
  <feedback-section />
</template>

<script>
import HeroSection from './HeroSection'
// import CatalogSection from './CatalogSection'
import CarouselSection from './CarouselSection'
import OrderSection from './OrderSection'
import FeedbackSection from './FeedbackSection'

export default {
  name: 'HomeView',

  components: {
    HeroSection,
    // CatalogSection
    CarouselSection,
    OrderSection,
    FeedbackSection
  }
}
</script>
