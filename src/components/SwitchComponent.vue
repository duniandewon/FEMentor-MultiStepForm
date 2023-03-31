<template>
  <label class="switch">
    <input type="checkbox" :checked="state.checked" @change="handleChange" />
    <span class="switch__slider"></span>
  </label>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
interface Props {
  value: boolean
}
const props = defineProps<Props>()
const state = reactive({ checked: props.value })
const emit = defineEmits(['change'])
function handleChange() {
  state.checked = !state.checked
  emit('change', state.checked)
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.3rem;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--clr-primary-700);
  transition: 0.4s;
  border-radius: 34px;
}
.switch__slider:before {
  position: absolute;
  content: '';
  height: 0.9rem;
  width: 0.9rem;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--clr-neutral-100);
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .switch__slider:before {
  transform: translate(1rem, -50%);
}
</style>
