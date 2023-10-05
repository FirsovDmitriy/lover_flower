<template>
  <section class="carousel">
    <app-container class="carousel__container">
      <h2 class="title title--level-2">
        популярные букеты
      </h2>
      <p class="carousel__subtitle">
        Самые любимые композиции наших клиентов
      </p>
      <!-- <swiper>
        <swiper-slide>
          <basic-card />
        </swiper-slide>
      </swiper> -->
    </app-container>
  </section>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer'
// import BasicCard from '@/components/UI/BasicCard'
// import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
// import 'swiper/css'

export default {
  name: 'CarouselSection',

  components: {
    AppContainer
    // BasicCard,
    // Swiper,
    // SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  padding-bottom: 160px;
}
</style>
