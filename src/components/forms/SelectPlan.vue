<script setup lang="ts">
import { ref } from 'vue'

import Form from '../FormComponent.vue'
import Button from '../ButtonComponent.vue'
import Plan from '../PlanComponent.vue'

import { useStore } from '../../stores/RegistrasionForm'
import { storeToRefs } from 'pinia'

const store = useStore()

const { state } = storeToRefs(store)

const { handleSteps } = store

const plans = ref([
  { plan: 'arcade', price: 9 },
  { plan: 'advanced', price: 12 },
  { plan: 'pro', price: 15 }
])

function handleSumbit() {
  /** TODO: Add validation before submit */
  handleSteps('next')
}

function handleGoBack() {
  handleSteps('prev')
}

function handleChange(e: string) {
  state.value.plan = e
}
</script>

<template>
  <Form @onSubmit="handleSumbit">
    <template #formHeader>
      <h1 class="form__title">Select Your Plan</h1>
      <p class="form__description">You have the optin of monthly or yearly bulling.</p>
    </template>

    <div class="plans">
      <Plan
        v-for="plan in plans"
        :key="plan.plan"
        :id="plan.plan"
        v-model="state.plan"
        :value="plan.plan"
        name="plan"
        @change="handleChange"
        :class="{ active: state.plan === plan.plan }"
      >
        <template #planTitle>{{ plan.plan }}</template>
        <template #planPrice>${{ plan.price }}/mo</template>
      </Plan>
    </div>

    <template #formFooter>
      <Button type="button" class="link" @click="handleGoBack">go back</Button>
      <Button type="submit">Next Step</Button>
    </template>
  </Form>
</template>

<style>
.plans {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}
</style>
