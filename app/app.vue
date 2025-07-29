<template>
  <div class="wrapper min-h-dvh grid-rows-[auto_1fr_auto]">
    <!-- <NuxtRouteAnnouncer /> -->
    <PrimaryHeader />
    <NuxtPage />
    <PrimaryFooter />
  </div>
</template>

<script setup>
import PrimaryHeader from "./components/header/PrimaryHeader.vue";
import PrimaryFooter from "./components/footer/PrimaryFooter.vue";
</script>

<style>
html,
body,
#__nuxt {
  font-family: "figtree", "system-ui", "sans-serif";
  color: var(--color-secondary-text);
  background-color: var(--color-primary-background);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-primary-text);
}
</style>
