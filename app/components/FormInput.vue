<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="flex flex-col gap-2">
    <label :for="inputId" class="label-md text-primary-text pl-0.75">
      {{ label }}
      <span v-if="required" class="text-warning">*</span>
    </label>
    <input
      :id="inputId"
      v-model="inputValue"
      class="rounded-base ds-border card-padding label-md text-secondary-text focus-visible:outline-primary/40"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
  </div>
</template>

<script setup>
import { computed, useId } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "blur", "focus"]);

// Generate unique ID if not provided
const inputId = computed(() => props.id || useId());

// Two-way binding for v-model
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
