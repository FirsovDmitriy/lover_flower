<template>
  <div class="order">
    <app-container>
      <h2 class="order__title title title--level-2">
        как сделать заказ
      </h2>
      <div class="order__wrapper">
        <div>
          <span class="order__rectangle"></span>
          <ul class="order__list">
            <li class="order-step">
              <p class="order-step__title">
                1 шаг
              </p>
              <p class="order-step__text">
                Выберите какие цветы или подарки вы хотите купить
              </p>
            </li>

            <li class="order-step">
              <p class="order-step__title">
                2 шаг
              </p>
              <p class="order-step__text">
                Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp
              </p>
            </li>

            <li class="order-step">
              <p class="order-step__title">
                3 шаг
              </p>
              <p class="order-step__text">
                Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне
              </p>
            </li>

            <li class="order-step">
              <p class="order-step__title">
                4 шаг
              </p>
              <p class="order-step__text">
                Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен
              </p>
            </li>

            <li class="order-step">
              <p class="order-step__title">
                5 шаг
              </p>
              <p class="order-step__text">
                Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга
              </p>
            </li>

          </ul>
        </div>
      </div>
    </app-container>
    <img class="order__bg" src="../../assets/img/order_bg.png" alt="">
  </div>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer'

export default {
  name: 'OrderSection',

  components: {
    AppContainer
  }
}
</script>

<style lang="scss" scoped>
.order {
  position: relative;
  padding-bottom: rem(140);
}
.order__bg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.order__title {
  max-width: rem(694);
  margin: 0 0 rem(15) 0;
}
.order__wrapper {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.order__rectangle {
  align-self: flex-start;
  display: block;
  margin: 0 0 rem(40) 0;
  width: 65px;
  height: 10px;
  background: $secondary-text-color;
}
.order__list {
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2 265px;
  column-gap: rem(100);
}

.order-step {
  max-width: rem(265);
  margin: 0 0 rem(40) 0;
  break-inside: avoid-column;
  &:nth-child(3) {
    margin: 0;
  }
}
.order-step__title {
  font: {
    size: 30px;
    weight: 700;
  }
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: $secondary-text-color;
  margin: 0 0 rem(12) 0;
}
.order-step__text {
  font: {
    size: 14px;
    weight: 400;
  }
  letter-spacing: 0.56px;
  text-transform: uppercase;
}
</style>
