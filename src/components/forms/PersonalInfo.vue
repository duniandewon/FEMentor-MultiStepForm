<template>
  <Form>
    <template #formHeader>
      <h1 class="form__title">Personal Info</h1>
      <p class="form__description">Please provide your name, email address, and phone number.</p>
    </template>

    <section class="personal-info">
      <Input
        id="name"
        v-model="state.name"
        label="name"
        placeholder="e.g Stephan King"
        :error="state.error?.nameError"
      />
      <Input
        id="email"
        v-model="state.email"
        label="email address"
        placeholder="e.g stephanking@lorem.com"
        :error="state.error?.emailError"
      />
      <Input
        id="phone-number"
        v-model="state.phoneNumber"
        label="Phone Number"
        placeholder="e.g +1 234 567 890"
        :error="state.error?.phoneError"
      />
    </section>

    <template #formFooter>
      <Button type="submit">Next Step</Button>
    </template>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import Form from '../FormComponent.vue'
import Input from '../InputComponent.vue'
import Button from '../ButtonComponent.vue'

interface State {
  name: string
  email: string
  phoneNumber: string
  plan: string
  addOns: string[]
  isYearly: boolean
  step: number
  error?: {
    nameError?: string
    emailError?: string
    phoneError?: string
  }
}

const state: State = reactive({
  name: '',
  email: '',
  phoneNumber: '',
  plan: 'arcade',
  addOns: [],
  isYearly: false,
  step: 1
})
</script>

<style scoped>
.personal-info {
  margin-top: 1rem;
  display: grid;
  gap: 2rem;
}
</style>
