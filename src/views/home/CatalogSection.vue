<template>
  <div class="catalog">
    <app-container>
      <h2 class="title title--level-2">
        каталог
      </h2>
      <div class="catalog__main">
        <p class="catalog__text">
          У нас самый большой выбор цветов, букетов, открыток и подарков. Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором
        </p>

        <div class="catalog-card">
          <p class="catalog-card__title">
            Цветы
          </p>
          <ul class="catalog-card__list">
            <li class="catalog-card__item">Сборные букеты</li>
            <li class="catalog-card__item">Монобукеты</li>
            <li class="catalog-card__item">Композиции из цветов</li>
            <li class="catalog-card__item">розы</li>
            <li class="catalog-card__item">свадебные</li>
          </ul>
        </div>

        <div class="catalog-card">
          <p class="catalog-card__title">
            готовые букеты из сухоцветов
          </p>
          <ul class="catalog-card__list">
            <li class="catalog-card__item">букеты</li>
            <li class="catalog-card__item">для интерьера</li>
            <li class="catalog-card__item">Композиции</li>
          </ul>
          <p class="catalog__frame">букеты</p>
        </div>

        <div class="catalog-card">
          <p class="catalog-card__title">
            дополнительно
          </p>
          <ul class="catalog-card__list">
            <li class="catalog-card__item">шары</li>
            <li class="catalog-card__item">игрушки</li>
            <li class="catalog-card__item">открытки</li>
            <li class="catalog-card__item">упаковка</li>
          </ul>
        </div>
      </div>
    </app-container>
    <img class="img" src="../../assets/img/frame.png" alt="">
  </div>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer'

export default {
  name: 'CatalogSection',

  components: {
    AppContainer
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  position: relative;
  background: $primary-bg-color;
  z-index: 2;
}
.catalog__main {
  display: flex;
  flex-wrap: wrap;
}
.catalog__text {
  width: 540px;
}
.catalog__frame {
  position: absolute;
  top: -10px;
  left: -20px;
  z-index: -2;
  font-size: 200px;
  font-weight: 700;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: #0A1717;
}

.catalog-card {
  position: relative;
  width: 540px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.20);
  backdrop-filter: blur(10px);
}
.catalog-card__title {
  font: {
    size: rem(30);
    weight: 700;
  }
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: $primary-color;
}
.catalog-card__list {
  padding: 0;
  margin: 0;
}
.catalog-card__item {
  font: {
    size: 18px;
    weight: 400;
  };
  letter-spacing: 0.72px;
  text-transform: uppercase;
}

.img {
  position: absolute;
  right: -131px;
  bottom: -199px;
  z-index: -1;
  transform: rotate(32.828deg);
}
</style>
