<template>
  <main class="main">
    <Steps />
    <PersonalInfo v-if="state.step === 0" />
    <SelectPlan v-if="state.step === 1" />
    <PickAddons v-if="state.step === 2" />
    <FinishingUp v-if="state.step === 3" />
    <ThankYou v-if="state.step === 4" />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useStore } from './stores/plan'

import Steps from './components/StepsComponent.vue'

import PersonalInfo from './components/forms/PersonalInfo.vue'
import SelectPlan from './components/forms/SelectPlan.vue'
import PickAddons from './components/forms/PickAddons.vue'
import FinishingUp from './components/forms/FinishingUp.vue'
import ThankYou from './components/forms/ThankYou.vue'

const store = useStore()
const { state } = storeToRefs(store)
</script>
