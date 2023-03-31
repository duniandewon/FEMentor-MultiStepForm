<template>
  <main class="main">
    <Steps />
    <PersonalInfo v-if="state.step === 0" />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useStore } from './stores/plan'

import Steps from './components/StepsComponent.vue'

import PersonalInfo from './components/forms/PersonalInfo.vue'

const store = useStore()
const { state } = storeToRefs(store)
</script>
