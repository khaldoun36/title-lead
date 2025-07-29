<template>
  <component
    :is="tag"
    :to="href"
    :class="
      twMerge(
        'label-md rounded-base text-secondary-text border-primary-text/25 inline-flex transform-gpu cursor-pointer items-center gap-2 border bg-white px-5 py-2.5 shadow transition-all hover:-translate-y-0.25 hover:shadow-md active:scale-95 active:shadow-none',
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
