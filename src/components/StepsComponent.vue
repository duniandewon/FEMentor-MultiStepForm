<template>
  <aside class="aside">
    <div class="steps">
      <div class="step" v-for="(step, i) in steps" :key="step.id">
        <div class="step__number" :class="{ active: i === state.step }">{{ i + 1 }}</div>
        <div class="step__label">
          <p>step {{ i + 1 }}</p>
          <p>{{ step.label }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'

import { useStore } from '../stores/plan'

const store = useStore()

const { state } = storeToRefs(store)

const steps = reactive([
  {
    id: 'info',
    label: 'your info'
  },
  {
    id: 'plan',
    label: 'select plan'
  },
  {
    id: 'add-ons',
    label: 'add-ons'
  },
  {
    id: 'summary',
    label: 'summary'
  }
])
</script>

<style scoped>
.aside {
  width: 100%;
  min-height: 14.7rem;
  background: url('/images/bg-sidebar-mobile.svg') no-repeat;
  background-size: cover;
  position: relative;
}

.steps {
  display: flex;
  gap: 1.5rem;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step__number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--clr-neutral-200);
  color: var(--clr-neutral-200);
  display: flex;
  align-items: center;
  justify-content: center;
}

.step__number.active {
  background-color: var(--clr-primary-200);
  border-color: var(--clr-primary-200);
}

.step__label {
  display: none;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.step__label > p:last-child {
  color: var(--clr-neutral-200);
  font-family: 'Ubuntu Medium';
  font-size: 0.75rem;
}

@media (min-width: 930px) {
  .aside {
    width: 275px;
    padding: 2rem;
    background: url('/images/bg-sidebar-desktop.svg') no-repeat;
    border-radius: 10px;
  }

  .steps {
    flex-direction: column;
    position: revert;
    transform: translateX(0);
  }

  .step__label {
    display: block;
  }
}
</style>
