<template>
  <section
    class="ds-border bg-primary relative isolate mt-20 overflow-clip rounded-lg px-[var(--card-padding)] py-20 md:mt-24 md:py-24 xl:mt-32 xl:py-32"
  >
    <Icon
      name="ph:house-thin"
      size="200px"
      class="absolute -bottom-10 -left-5 text-white/15"
    />
    <Icon
      name="ph:buildings-thin"
      size="200px"
      class="absolute top-0 -right-5 text-white/15"
    />
    <Icon
      name="ph:key-thin"
      size="200px"
      class="absolute top-5 right-[75%] !hidden text-white/15 md:!block"
    />
    <div class="relative z-1 flex flex-col gap-8">
      <h2
        class="title-xl md:title-2xl mx-auto max-w-4xl text-center text-balance !text-white"
      >
        Unlock Exclusive Opportunities to Buy, Sell, and Rent in Dubai’s Most
        Coveted Locations
      </h2>
      <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
        <SecondaryButton
          href="/contact-us"
          class="min-w-full justify-center text-center md:min-w-fit"
        >
          <Icon name="logos:whatsapp-icon" class="label-xl md:label-lg" />
          <span>WhatsApp</span>
        </SecondaryButton>
        <PrimaryButton
          href="/contact-us"
          class="min-w-full justify-center text-center md:min-w-fit"
        >
          <Icon name="lucide:mail" class="label-xl md:label-lg" />
          <span>Contact us</span>
        </PrimaryButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import PrimaryButton from "~/components/PrimaryButton.vue";
import SecondaryButton from "~/components/SecondaryButton.vue";
</script>
