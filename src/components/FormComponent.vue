<template>
  <form class="form" @submit.prevent="$emit('onSubmit', $event)">
    <section class="form__content">
      <section class="form__header">
        <slot name="formHeader"></slot>
      </section>
      <slot></slot>
    </section>
    <footer class="form__footer">
      <slot name="formFooter"></slot>
    </footer>
  </form>
</template>

<style>
.form {
  height: calc(100% - 14.7rem);
  display: flex;
  flex-wrap: wrap;
}
.form__content {
  width: 90%;
  margin: -6rem auto 0;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  background-color: var(--clr-neutral-100);
  align-self: flex-start;
  z-index: 2;
}
.form__title {
  color: var(--clr-primary-700);
  font-size: 1.4em;
  font-family: 'Ubuntu Medium';
}
.form__footer {
  display: flex;
  padding: 1.2rem;
  margin-top: 2.5rem;
  width: 100%;
  background-color: var(--clr-neutral-100);
  align-self: flex-end;
}
.form__footer > .btn:last-child {
  margin-left: auto;
}

@media (min-width: 930px) {
  .form {
    width: 70%;
  }

  .form__content {
    width: 100%;
    margin: 1.5rem 0 0;
    padding: 0;
  }

  .form__footer {
    padding: 0;
    margin-top: 8.5rem;
  }
}
</style>
