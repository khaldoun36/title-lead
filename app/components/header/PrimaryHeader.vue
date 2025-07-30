<template>
  <header
    :class="
      twMerge(
        'bg-primary-background full-bleed border-b-secondary-background/0 wrapper sticky top-0 z-100 border-b transition-all',
        y > 75 ? 'border-b-secondary-background shadow' : '',
      )
    "
  >
    <div class="flex items-center justify-between py-[var(--card-padding)]">
      <NuxtLink to="/">
        <h1>Title Lead</h1>
      </NuxtLink>
      <div class="grid grid-cols-2 gap-4">
        <SecondaryButton
          href="/contact-us"
          class="aspect-square md:aspect-auto"
        >
          <Icon name="logos:whatsapp-icon" class="label-xl md:label-lg" />
          <span class="hidden md:inline-block">WhatsApp</span>
        </SecondaryButton>
        <PrimaryButton href="/contact-us" class="aspect-square md:aspect-auto">
          <Icon name="lucide:mail" class="label-xl md:label-lg" />
          <span class="hidden md:inline-block">Contact us</span>
        </PrimaryButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import PrimaryButton from "../PrimaryButton.vue";
import SecondaryButton from "../SecondaryButton.vue";

import { twMerge } from "tailwind-merge";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
</script>

<style scoped></style>
