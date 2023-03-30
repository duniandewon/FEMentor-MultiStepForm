<script setup lang="ts">
interface Props {
  id: string
  modelValue: any
  label: string
  placeholder: string
  type?: 'text' | 'email' | 'number'
  error?: string
  isRequired?: boolean
}
defineProps<Props>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="textfield">
    <label class="textfield__label" :for="id">{{ label }}</label>
    <span v-if="error" class="textfield__error">{{ error }}</span>
    <input
      type="text"
      class="textfield__input"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :required="isRequired"
    />
  </div>
</template>

<style>
.textfield {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.textfield__label {
  color: var(--clr-primary-700);
  text-transform: capitalize;
  font-family: 'Ubuntu Medium';
}
.textfield__input {
  border-radius: 5px;
  border: 1px solid var(--clr-neutral-400);
  font-family: 'Ubuntu Medium';
  padding: 0.5rem 0.8rem;
  width: 100%;
}
.textfield__input:active,
.textfield__input:focus {
  border-color: var(--clr-primary-700);
}
.textfield__input.error {
  border-color: var(--clr-primary-500);
}
.textfield__error {
  color: var(--clr-primary-500);
  font-family: 'Ubuntu Bold';
  font-size: 0.857em;
}
</style>
