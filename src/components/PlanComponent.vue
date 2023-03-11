<script setup lang="ts">
import { computed, ref } from 'vue'

interface Prop {
  id: string
  name: string
}

interface InputEvent extends Event {
  target: HTMLInputElement
}

const props = defineProps<Prop>()

const emit = defineEmits(['change', 'update:modelValue'])

const image = ref(`/images/icon-${props.id}.svg`)

const listener = computed(() => ({
  change: (event: InputEvent) => {
    emit('change', event.target.value)
    emit('update:modelValue', event.target.value)
  }
}))
</script>

<template>
  <label class="plan">
    <input type="radio" :name="name" v-on="listener" v-bind="$attrs" />
    <picture class="plan__image">
      <img :src="image" :alt="id" />
    </picture>
    <div class="plan__main">
      <p class="plan__title">
        <slot name="planTitle"></slot>
      </p>
      <p class="plan__price">
        <slot name="planPrice"></slot>
      </p>
    </div>
  </label>
</template>

<style>
.plan {
  border: 1px solid var(--clr-neutral-400);
  border-radius: 10px;
  display: flex;
  padding: 0.8rem 0;
  cursor: pointer;
}

.plan > input {
  display: none;
}

.plan.active {
  border-color: var(--clr-primary-400);
  background-color: var(--clr-neutral-200);
}

.plan__image {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plan__image > img {
  width: 60%;
}

.plan__title {
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Medium';
  font-size: 1.12em;
  text-transform: capitalize;
}
</style>
