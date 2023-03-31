import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface State {
  name: string
  email: string
  phoneNumber: string
  plan: string
  addOns: string[]
  isYearly: boolean
  step: number
}

type Action = 'next' | 'prev'

export const useStore = defineStore('regis-form', () => {
  const state: State = reactive({
    name: '',
    email: '',
    phoneNumber: '',
    plan: 'arcade',
    addOns: [],
    isYearly: false,
    step: 0
  })

  const handleSteps = (action: Action) => {
    const { step } = state
    if (action === 'next' && step < 3) return state.step++
    if (action === 'prev' && step > 0) return state.step--
  }

  const jumpToStep = (step: number) => (state.step = step)

  return { state, handleSteps, jumpToStep }
})
