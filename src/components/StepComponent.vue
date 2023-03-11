<script setup lang="ts">
defineProps<{ step: number }>()
</script>

<template>
  <div class="step">
    <span class="step__count">{{ step }}</span>
  </div>
</template>

<style>
.step {
  color: var(--clr-neutral-100);
  font-family: 'Ubuntu Bold';
}

.step__count {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid var(--clr-neutral-100);
  border-radius: 50%;
}

.step.active > .step__count {
  color: var(--clr-primary-700);
  background-color: var(--clr-primary-300);
  border-color: var(--clr-primary-300);
}
</style>
