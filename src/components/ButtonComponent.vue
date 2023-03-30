<template>
  <button :type="type" class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{ type?: 'button' | 'submit' }>()
</script>

<style scoped>
.btn {
  cursor: pointer;
  background-color: var(--clr-primary-700);
  border: 0;
  color: var(--clr-neutral-100);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
}
.btn.primary {
  background-color: var(--clr-primary-400);
}
.btn.link {
  background: transparent;
  color: var(--clr-neutral-500);
  padding: 0;
}
.btn:active,
.btn:hover {
  opacity: 0.8;
}
.btn.link:active,
.btn.link:hover {
  opacity: 1;
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Medium';
}
</style>
