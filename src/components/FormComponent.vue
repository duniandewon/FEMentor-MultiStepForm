<template>
  <form class="form" @submit.prevent="$emit('onSubmit', $event)">
    <main class="form__content">
      <header class="form__header">
        <slot name="formHeader"></slot>
      </header>
      <slot></slot>
    </main>
    <footer class="form__footer">
      <slot name="formFooter"></slot>
    </footer>
  </form>
</template>

<style>
.form {
  width: 100%;
  height: 100%;
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
  width: 100%;
  background-color: var(--clr-neutral-100);
  align-self: flex-end;
}

.form__footer > .btn:last-child {
  margin-left: auto;
}
</style>
