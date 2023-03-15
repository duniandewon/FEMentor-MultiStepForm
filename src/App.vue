<script setup lang="ts">
import StepCompponent from './components/StepComponent.vue'

import PersonalInfoForm from './components/forms/PersonalInfo.vue'
import SelectPlanForm from './components/forms/SelectPlan.vue'
import PickAddonsForm from './components/forms/PickAddon.vue'

import { useStore } from './stores/RegistrasionForm'
import { storeToRefs } from 'pinia'

const store = useStore()

const { state } = storeToRefs(store)

const steps = [1, 2, 3, 4]
</script>

<template>
  <aside class="aside">
    <picture class="aside__background">
      <img src="images/bg-sidebar-mobile.svg" alt="sidebar background" />
    </picture>
    <div class="steps">
      <StepCompponent
        v-for="step in steps"
        :key="step"
        :step="step"
        :class="{ active: step === state.step }"
      />
    </div>
  </aside>
  <PersonalInfoForm v-if="state.step === 1" />
  <SelectPlanForm v-if="state.step === 2" />
  <PickAddonsForm v-if="state.step === 3" />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: baseline;
}

.aside {
  width: 100vw;
  position: relative;
  height: 19rem;
}

.aside__background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.steps {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 4rem auto 0;
}
</style>
