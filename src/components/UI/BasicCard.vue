<template>
  <div class="card">
    <div class="card-label">
      <span class="card-label__text">sale</span>
    </div>
    <div class="card__img-wrapper">
      <img
        class="card__img"
        src="../../assets/img/img.jpg"
        alt=""
        width="255"
        height="335"
      >
    </div>
    <div class="card__content">
      <p class="card__title">
        лучший день
      </p>
      <p class="card__price">167.000 ₽</p>
      <basic-button class="card__button basic-button basic-button--outlined">
        В корзину
      </basic-button>
    </div>
  </div>
</template>

<script>
import BasicButton from '@/components/UI/BasicButton'

export default {
  name: 'BasicCard',

  components: {
    BasicButton
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 255px;
  position: relative;
}
.card__content {
  display: flex;
  flex-direction: column;
}
.card__title {
  font-weight: 400;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin: rem(10) 0 rem(10) 0;
}
.card__price {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  margin: 0 0 rem(20) 0;
}

.card-label {
  position: absolute;
  top: rem(-10);
  right: rem(-10);
  display: grid;
  width: rem(60);
  height: rem(60);
  background: #31985A;
  border-radius: 50%;
}
.card-label__text {
  place-self: center;
  text-transform: uppercase;
  color: $primary-bg-color;
}
</style>
