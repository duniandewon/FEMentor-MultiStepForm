<template>
  <Form @onSubmit="handleSumbit">
    <template #formHeader>
      <h1 class="form__title">Select Your Plan</h1>
      <p class="form__description">You have the optin of monthly or yearly bulling.</p>
    </template>

    <section class="plans">
      <Plan
        v-for="plan in plans"
        :key="plan.plan"
        :id="plan.plan"
        v-model="state.plan"
        :value="plan.plan"
        :title="plan.plan"
        :price="plan.price"
        :is-yearly="state.isYearly"
        name="plan"
        @change="handleChangePlan"
        :class="{ active: state.plan === plan.plan }"
      />
    </section>

    <section class="payment-plan">
      <span :class="{ 'payment-plan__yearly': !state.isYearly }">Monthly</span>
      <Switch :value="state.isYearly" :checked="state.isYearly" @change="handleChangeSwitch" />
      <span :class="{ 'payment-plan__yearly': state.isYearly }">Yearly</span>
    </section>

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
import Plan from '../PlanComponent.vue'
import Switch from '../SwitchComponent.vue'

import { useStore } from '../../stores/plan'

const store = useStore()

const { state } = storeToRefs(store)

const { handleSteps } = store

const plans = ref([
  { plan: 'arcade', price: 9 },
  { plan: 'advanced', price: 12 },
  { plan: 'pro', price: 15 }
])

function handleSumbit() {
  handleSteps('next')
}

function handleGoBack() {
  handleSteps('prev')
}

function handleChangePlan(e: string) {
  state.value.plan = e
}

function handleChangeSwitch(e: boolean) {
  state.value.isYearly = e
}
</script>

<style scoped>
.plans {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 1rem;
}
.payment-plan {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--clr-neutral-300);
  padding: 0.8rem;
  border-radius: 10px;
}
.payment-plan__yearly {
  color: var(--clr-primary-700);
  font-family: 'Ubuntu Bold';
}

@media (min-width: 930px) {
  .plans {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
