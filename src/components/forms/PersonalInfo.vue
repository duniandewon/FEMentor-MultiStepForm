<template>
  <Form @onSubmit="handleSumbit">
    <template #formHeader>
      <h1 class="form__title">Personal Info</h1>
      <p class="form__description">Please provide your name, email address, and phone number.</p>
    </template>

    <section class="personal-info">
      <Input
        id="name"
        name="name"
        v-model="state.name"
        label="name"
        placeholder="e.g Stephan King"
        @onChange="handleChange"
        :error="errorState.name"
      />
      <Input
        id="email"
        name="email"
        v-model="state.email"
        label="email address"
        placeholder="e.g stephanking@lorem.com"
        @onChange="handleChange"
        :error="errorState.email"
      />
      <Input
        id="phone-number"
        name="phoneNumber"
        v-model="state.phoneNumber"
        label="Phone Number"
        placeholder="e.g +1 234 567 890"
        @onChange="handleChange"
        :error="errorState.phoneNumber"
      />
    </section>

    <template #formFooter>
      <Button type="submit">Next Step</Button>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'

import { useStore } from '../../stores/plan'

import Form from '../FormComponent.vue'
import Input from '../InputComponent.vue'
import Button from '../ButtonComponent.vue'

interface ErrorState {
  name: string
  email: string
  phoneNumber: string
}

const store = useStore()

const { state } = storeToRefs(store)

const { handleSteps } = store

const errorState: ErrorState = reactive({
  name: '',
  email: '',
  phoneNumber: ''
})

const handleChange = (event: Event) => {
  const { name, value } = event.target as HTMLInputElement

  state.value[name] = value

  errorState[name] = ''
}

function handleSumbit() {
  const {
    value: { name, email, phoneNumber }
  } = state

  if (!name) return (errorState.name = 'Name is required')

  if (!email) return (errorState.email = 'Email is required')

  if (!phoneNumber) return (errorState.phoneNumber = 'Phone number is required')

  return handleSteps('next')
}
</script>

<style scoped>
.personal-info {
  margin-top: 1rem;
  display: grid;
  gap: 2rem;
}
</style>
