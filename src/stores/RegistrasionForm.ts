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
}

export const useAlertsStore = defineStore('regis-form', () => {
  const state: State = reactive({
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
    addOns: [],
    isMonthly: true,
    step: 1
  })

  return { state }
})
