<template>
  <Form @onSubmit="handleSumbit">
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
        :error="errorState.nameError"
      />
      <Input
        id="email"
        v-model="state.email"
        label="email address"
        placeholder="e.g stephanking@lorem.com"
        :error="errorState.emailError"
      />
      <Input
        id="phone-number"
        v-model="state.phoneNumber"
        label="Phone Number"
        placeholder="e.g +1 234 567 890"
        :error="errorState.phoneError"
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
  nameError: string
  emailError: string
  phoneError: string
}

const store = useStore()

const { state } = storeToRefs(store)

const { handleSteps } = store

const errorState: ErrorState = reactive({
  nameError: '',
  emailError: '',
  phoneError: ''
})

function handleSumbit() {  
  /** TODO: Add validation before submit */
  handleSteps('next')
}
</script>

<style scoped>
.personal-info {
  margin-top: 1rem;
  display: grid;
  gap: 2rem;
}
</style>
