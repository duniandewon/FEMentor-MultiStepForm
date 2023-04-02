<template>
  <label class="plan">
    <input type="radio" :name="name" v-on="listener" v-bind="$attrs" />
    <picture class="plan__image">
      <img :src="image" :alt="id" />
    </picture>
    <div class="plan__main">
      <p class="plan__title">
        {{ title }}
      </p>
      <p class="plan__price">${{ isYearly ? `${price * 10}/yr` : `${price}/mo` }}</p>
      <p class="plan__free" v-if="isYearly">2 months free</p>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Prop {
  id: string
  name: string
  title: string
  price: number
  isYearly: boolean
}
interface InputEvent extends Event {
  target: HTMLInputElement
}
const props = defineProps<Prop>()

const emit = defineEmits(['change', 'update:modelValue'])

const image = ref(`/images/icon-${props.id}.svg`)

const listener = computed(() => ({
  change: (event: InputEvent) => {
    emit('change', event.target.value, props.price)
    emit('update:modelValue', event.target.value, props.price)
  }
}))
</script>

<style scoped>
.plan {
  border: 1px solid var(--clr-neutral-400);
  border-radius: 10px;
  display: flex;
  padding: 0.8rem;
  cursor: pointer;
  gap: 1.5rem;
}
.plan > input {
  display: none;
}
.plan.active {
  border-color: var(--clr-primary-400);
  background-color: var(--clr-neutral-200);
}
.plan__image {
  width: 15%;
}

.plan__title {
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Medium';
  font-size: 1.12em;
  text-transform: capitalize;
}

.plan__free {
  color: var(--clr-primary-400);
  font-family: 'Ubuntu Medium';
}

@media (min-width: 930px) {
  .plan {
    flex-direction: column;
    gap: 2.5rem;
  }

  .plan__image {
    width: 30%;
  }
}
</style>
