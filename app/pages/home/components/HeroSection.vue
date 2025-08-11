<template>
  <main
    class="card-padding bg-secondary-background relative isolate grid gap-8 overflow-clip rounded-xl xl:grid-cols-2"
  >
    <NuxtImg
      :src="useStrapiMedia('/uploads/hero_image_b9fac767cd.jpg')"
      class="absolute inset-0 min-h-full min-w-full object-cover brightness-80"
      format="avif"
      width="6441"
      height="4296"
    />
    <div class="relative z-1 mt-20 space-y-8 md:mt-24 xl:mt-64">
      <h1 class="title-xl md:title-2xl 2xl:title-3xl !font-semibold">
        Your Hassle-Free Path to Buying and Selling a Property in Dubai
      </h1>

      <div class="flex flex-col gap-6 md:flex-row md:gap-8">
        <PrimaryButton class="hero-button">
          <span class="text-1">Sell your property</span>
          <span class="text-2">Get an offer now</span>
        </PrimaryButton>
        <SecondaryButton class="justify-center text-center">
          Contact us
        </SecondaryButton>
      </div>
    </div>
    <HeroSearchForm class="relative z-1" />
  </main>
</template>

<script setup>
import HeroSearchForm from "./HeroSearchForm.vue";
import PrimaryButton from "~/components/PrimaryButton.vue";
import SecondaryButton from "~/components/SecondaryButton.vue";
</script>

<style scoped>
.hero-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: clip; /* Changed from overflow: hidden for better performance */
}

.hero-button .text-1,
.hero-button .text-2 {
  white-space: nowrap;
}

.hero-button .text-1 {
  animation: text1-slide 5s infinite;
}

.hero-button .text-2 {
  position: absolute;
  animation: text2-slide 5s infinite;
}

/* Vertical Slide Up Animation */
@keyframes text1-slide {
  0%,
  70% {
    transform: translateY(0);
  }
  85%,
  100% {
    transform: translateY(-150%);
  }
}

@keyframes text2-slide {
  0%,
  70% {
    transform: translateY(150%);
  }
  85%,
  100% {
    transform: translateY(0);
  }
}
</style>
