import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface State {
  name: string
  email: string
  phoneNumber: string
  plan: string
  addOns: string[]
  isMonthly: boolean
  step: number
  error?: {
    nameError?: string
    emailError?: string
    phoneError?: string
  }
}

type Action = 'next' | 'prev'

export const useStore = defineStore('regis-form', () => {
  const state: State = reactive({
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
    addOns: [],
    isMonthly: true,
    step: 1
  })

  const handleSteps = (action: Action) => {
    const { step } = state
    if (action === 'next' && step < 4) return state.step++
    if (action === 'prev' && step > 1) return state.step--
  }

  const jumpToStep = (step: number) => (state.step = step)

  return { state, handleSteps, jumpToStep }
})
