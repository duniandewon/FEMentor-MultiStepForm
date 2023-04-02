<template>
  <Form @onSubmit="handleSumbit">
    <template #formHeader>
      <h1 class="form__title">Finishing up</h1>
      <p class="form__description">Double check everything looks OK before confirming.</p>
    </template>

    <div class="finishing-up">
      <table class="summary" cellspacing="0">
        <thead class="summary__header">
          <tr>
            <td width="100%">
              <p>{{ state.plan }} ({{ state.isYearly ? 'yearly' : 'monthly' }})</p>
              <Button class="link" @click="handleSteps">change</Button>
            </td>
            <td>${{ state.isYearly ? `${state.price * 10}/yr` : `${state.price}/mo` }}</td>
          </tr>
        </thead>
        <tbody class="summary__body">
          <tr v-for="addon in state.addOns" :key="addon.addon">
            <td>{{ addon.addon }}</td>
            <td>+${{ state.isYearly ? `${addon.price * 10}/yr` : `${addon.price}/mo` }}</td>
          </tr>
        </tbody>
      </table>
      <div class="summary__total">
        <p>Total (per {{ state.isYearly ? 'year' : 'month' }})</p>
        <p>${{ calcTotal() }}/{{ state.isYearly ? 'yr' : 'mo' }}</p>
      </div>
    </div>

    <template #formFooter>
      <Button type="button" class="link" @click="handleGoBack">go back</Button>
      <Button type="submit" class="primary">Confirm</Button>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import Form from '../FormComponent.vue'
import Button from '../ButtonComponent.vue'

import { useStore } from '../../stores/plan'

const store = useStore()

const { state } = storeToRefs(store)

const { handleSteps } = store

function handleSumbit() {
  handleSteps('next')
}

function handleGoBack() {
  handleSteps('prev')
}

function calcTotal() {
  let addonTotal = 0

  if (state.value.addOns)
    addonTotal = state.value.addOns.reduce((tot, cur) => tot + cur.price, addonTotal)

  const total = addonTotal + state.value.price

  return state.value.isYearly ? total * 10 : total
}
</script>

<style scoped>
.summary {
  width: 100%;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: var(--clr-neutral-400);
  padding: 1rem;
}

.summary__header {
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Bold';
}

.summary__header td {
  padding-bottom: 1rem;
  margin: 1.4rem;
}

.summary__header td:first-child,
.summary__body td:first-child {
  text-transform: capitalize;
}

.summary__body td {
  padding-bottom: 0.5rem;
}

.summary__body td:last-child {
  color: var(--clr-primary-700);
}

.summary__body tr:first-child td {
  padding-top: 1rem;
  border-top: 1px solid #000;
}

.summary__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Ubuntu Medium';
  padding: 1rem;
}

.summary__total p:last-child {
  color: var(--clr-primary-400);
  font-family: 'Ubuntu Bold';
  font-size: 1.4rem;
}
</style>
