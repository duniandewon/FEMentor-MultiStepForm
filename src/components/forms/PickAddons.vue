<template>
  <Form @onSubmit="handleSumbit">
    <template #formHeader>
      <h1 class="form__title">Pick add-ons</h1>
      <p class="form__description">Add-ons helo enhance your gaming experience.</p>
    </template>

    <div class="addons">
      <label class="addon" v-for="addon in addons" :key="addon.addon">
        <input type="checkbox" name="addon" :value="addon" v-model="state.addOns" />
        <span class="addon__checkbox"></span>
        <div class="addon__main">
          <p class="addon__title">
            {{ addon.addon }}
          </p>
          <p class="addon__description">
            {{ addon.desc }}
          </p>
        </div>
        <p class="addon__price">+${{ state.isYearly ? `${addon.price * 10}/yr` : `${addon.price}/mo` }}</p>
      </label>
    </div>

    <template #formFooter>
      <Button type="button" class="link" @click="handleGoBack">go back</Button>
      <Button type="submit">Next Step</Button>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import Form from '../FormComponent.vue'
import Button from '../ButtonComponent.vue'

import { useStore } from '../../stores/plan'

const store = useStore()

const { state } = storeToRefs(store)

const { handleSteps } = store

const addons = ref([
  { addon: 'online service', desc: 'Access to multiple games', price: 1 },
  { addon: 'large storage', desc: 'Extra 1TB cloud save', price: 2 },
  { addon: 'customizable profile', desc: 'Custom theme on your profile', price: 2 }
])

function handleSumbit() {
  /** TODO: Add validation before submit */
  handleSteps('next')
}
function handleGoBack() {
  handleSteps('prev')
}
</script>

<style scoped>
.addons {
  margin-top: 2rem;
}
.addon {
  border: 1px solid var(--clr-neutral-400);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  cursor: pointer;
  padding: 0.8rem;
}
.addon + .addon {
  margin-top: 1rem;
}
.addon.active {
  border-color: var(--clr-primary-400);
  background-color: var(--clr-neutral-200);
}
.addon > input {
  display: none;
}
.addon__main {
  flex: 1;
}
.addon__title {
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Medium';
  font-size: 1.12em;
  text-transform: capitalize;
}
.addon__price {
  color: var(--clr-primary-400);
}
.addon__checkbox {
  position: relative;
  height: 20px;
  width: 20px;
  border: 1px solid var(--clr-neutral-400);
  border-radius: 5px;
}
.addon__checkbox:after {
  content: '';
  display: none;
  position: absolute;
  left: 3px;
  left: 7px;
  top: 5px;
  width: 5px;
  height: 8px;
  border: solid var(--clr-neutral-100);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.addon input:checked ~ .addon__checkbox {
  background-color: var(--clr-primary-400);
  border-color: var(--clr-primary-400);
}
.addon input:checked ~ .addon__checkbox::after {
  display: block;
}
</style>
