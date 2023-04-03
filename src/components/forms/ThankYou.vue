<template>
  <Form :noFooter="true">
    <div class="thankyou">
      <picture class="thankyou__image">
        <img src="/images/icon-thank-you.svg" alt="" />
      </picture>
      <div class="thankyou__content">
        <h1>Thank You!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import Form from '../FormComponent.vue'
</script>

<style scoped>
.thankyou {
  text-align: center;
}

.thankyou__image {
  width: 15%;
  margin: 0 auto;
}

.thankyou__content {
  margin-top: 1.5rem;
}

.thankyou__content h1 {
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Bold';
}

.thankyou__content p {
  max-width: 50ch;
  margin: 0.5rem auto 0;
}

@media (min-width: 930px) {
  .thankyou {
    text-align: center;
    margin-top: 9rem;
    margin-bottom: 9rem;
  }

  /* .thankyou__content p {
    max-width: 50ch;
  } */
}
</style>
