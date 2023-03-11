<script setup lang="ts">
import Form from '../FormComponent.vue'
import Button from '../ButtonComponent.vue'

import { useStore } from '../../stores/RegistrasionForm'

const store = useStore()

const { handleSteps } = store

function handleSumbit() {
  /** TODO: Add validation before submit */
  handleSteps('next')
}

function handleGoBack() {
  handleSteps('prev')
}
</script>

<template>
  <Form @onSubmit="handleSumbit">
    <template #formHeader>
      <h1 class="form__title">Select Your Plan</h1>
      <p class="form__description">You have the optin of monthly or yearly bulling.</p>
    </template>
    <template #formFooter>
      <Button type="button" class="link" @click="handleGoBack">go back</Button>
      <Button type="submit">Next Step</Button>
    </template>
  </Form>
</template>
