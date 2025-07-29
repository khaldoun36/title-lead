<template>
  <component
    :is="tag"
    :to="href"
    :class="
      twMerge(
        'label-md bg-primary-light rounded-base border-primary/60 shadow-primary/60 inline-flex transform-gpu cursor-pointer items-center gap-2 border px-5 py-2.5 text-white shadow inset-shadow-sm inset-shadow-white/10 transition-all text-shadow-sm hover:-translate-y-0.25 hover:shadow-md active:scale-95 active:shadow-none',
        $attrs.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { NuxtLink } from "#components";
import { twMerge } from "tailwind-merge";

// Makes the component polymorphic: renders as a NuxtLink if 'href' is provided, otherwise a 'button'.
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  iconName: {
    type: String,
    default: null,
  },
});

const tag = computed(() => (props.href ? NuxtLink : "button"));
</script>
