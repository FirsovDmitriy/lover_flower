<template>
  <section class="feedback">

    <div class="feedback__main">
      <div class="feedback__content">
        <app-container class="feedback__container">
          <div class="feedback__header">
            <h2 class="feedback__title title title--level-2">
              остались <span>вопросы?</span>
            </h2>
            <p class="feedback__text">
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.
            </p>
          </div>
          <div class="feedback__wrapper">
            <form class="feedback-form" action="#">
              <text-field class="feedback-form__input" placeholder="Ваше имя" />
              <text-field class="feedback-form__input" placeholder="+7 (977) 777-77-77" />
              <basic-textarea placeholder="Ваш комментарий"></basic-textarea>
              <basic-button
                class="feedback-form__button basic-button basic-button--primary"
              >
                отправить
              </basic-button>
              <p class="feedback-agreement">
                Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с
                <a class="feedback-agreement__link" href="#">Политикой конфиденциальности</a>
              </p>
            </form>
          </div>
          <!-- /.feedback__wrapper -->
        </app-container>
      </div>
      <!-- /.feedback__content -->
      <img class="feedback__bg" src="./img/picture_2.png" alt="">
    </div>
    <!-- /.feedback__main -->

    <div class="feedback__row">
      <app-container>
        Row
      </app-container>
    </div>
  </section>
</template>

<script>
import AppContainer from '@/components/UI/AppContainer'
import BasicButton from '@/components/UI/BasicButton'
import TextField from '@/components/UI/TextField'
import BasicTextarea from '@/components/UI/BasicTextarea'

export default {
  name: 'FeedbackSection',

  components: {
    AppContainer,
    BasicButton,
    TextField,
    BasicTextarea
  }
}
</script>

<style lang="scss" scoped>
.feedback {
  //
}
.feedback__main {
  position: relative;
  padding: 0 0 rem(190) 0;
}
.feedback__content {
  padding: rem(20) 0;
  background: #0F2222;
}
.feedback__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.feedback__title {
  span {
    margin-left: rem(90);
  }
}
.feedback__text {
  flex: 1 0 auto;
  width: rem(255);
  font: {
    size: 14px;
    weight: 400;
  }
  letter-spacing: 0.56px;
  text-transform: uppercase;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: $primary-color;
    margin: 0 0 rem(50) 0;
  }
}
.feedback__wrapper {
  display: flex;
  justify-content: flex-end;
}
.feedback__bg {
  position: absolute;
  top: rem(100);
  left: 0;
  height: 100%;
  transform: rotate(-46.961deg);
}
.feedback__row {
  padding: 0 0 rem(84) 0;
}

.feedback-form {
  width: rem(445);
}
.feedback-form__input {
  margin: 0 0 rem(10) 0;
  &:last-child {
    margin: 0;
  }
}
.feedback-form__button {
  width: 255px;
  margin-top: rem(20);
}

.feedback-agreement {
  font: {
    size: 14px;
    weight: 400;
  };
  letter-spacing: 0.2px;
  margin-top: rem(10);
}
.feedback-agreement__link {
  color: $secondary-text-color;
  text-decoration-line: underline;
}
</style>
