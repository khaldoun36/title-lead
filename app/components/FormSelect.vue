<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="space-y-2">
    <h3 class="label-md text-primary-text pl-0.75">
      {{ title }}
      <span v-if="required" class="text-warning">*</span>
    </h3>
    <ul :class="twMerge('grid grid-cols-3 gap-4', $attrs.class)">
      <li v-for="option in options" :key="option.value">
        <input
          :id="option.value"
          :name="name"
          :value="option.value"
          type="radio"
          class="peer hidden"
          :required="required"
          :checked="modelValue === option.value"
          @change="handleChange"
        />
        <label
          :for="option.value"
          class="ds-border rounded-base card-padding label-md text-secondary-text peer-checked:bg-secondary-background hover:bg-primary-background active:bg-secondary-background peer-checked:border-primary/40 inline-flex min-w-full cursor-pointer flex-col items-center justify-center gap-2 text-center transition-colors"
        >
          <Icon v-if="option.icon" :name="option.icon" size="24px" />
          <span>{{ option.label }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { twMerge } from "tailwind-merge";

// I need more control to assign the attributes not to the root elemnt
defineOptions({
  inheritAttrs: false,
});
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
    default: "What do you need our help with?",
  },
  options: {
    type: Array,
    required: true,
    validator: (options) => {
      return options.every(
        (option) => typeof option === "object" && option.value && option.label,
      );
    },
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emit = defineEmits(["update:modelValue"]);

// Methods
const handleChange = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped></style>
