import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface State {
  name: string
  email: string
  phoneNumber: string
  plan: string
  price: number
  addOns: { addon: string; desc: string; price: number }[]
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
    price: 9,
    addOns: [],
    isYearly: false,
    step: 0
  })

  const handleSteps = (action: Action, step = 1) => {
    if (action === 'next') return state.step++
    if (action === 'prev') return state.step--

    return (state.step = step)
  }

  return { state, handleSteps }
})
