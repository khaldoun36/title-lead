<template>
  <footer
    class="ds-border-t mt-20 space-y-8 py-[var(--card-padding)] md:mt-24 xl:mt-32"
  >
    <div class="flex flex-col items-start justify-between gap-8 md:flex-row">
      <h1>Title Lead</h1>
      <div class="flex items-start gap-16">
        <div class="flex flex-col items-start gap-2">
          <p class="label-md text-primary-text mb-2 font-semibold">
            Navigation
          </p>
          <NuxtLink
            v-for="navItem in navData"
            :key="navItem.link"
            :to="navItem.link"
            class="label-md hover:text-primary-text transition-colors"
            >{{ navItem.label }}</NuxtLink
          >
        </div>
        <div class="flex max-w-3xs flex-col items-start gap-2">
          <p class="label-md text-primary-text mb-2 font-semibold">
            Contact us
          </p>
          <NuxtLink
            v-for="navItem in contactUs"
            :key="navItem.link"
            :to="navItem.link"
            class="label-md hover:text-primary-text transition-colors"
            >{{ navItem.label }}</NuxtLink
          >
        </div>
      </div>
    </div>
    <p
      class="label-md flex items-center justify-start gap-0.75 text-center md:justify-center"
    >
      <span class="text-trim">All right reserved</span>
      <Icon name="ph:copyright" size="22px" />
      <span class="text-trim">{{ new Date().getFullYear() }}</span>
    </p>
  </footer>
</template>

<script setup>
const navData = [
  {
    link: "/",
    label: "Sell",
  },
  {
    link: "/",
    label: "Buy",
  },
  {
    link: "/",
    label: "Rent",
  },
];
const contactUs = [
  {
    link: "mailto:info@titlelead.ae",
    label: "Info@titlelead.ae",
  },
  {
    link: "tel:00971566677782",
    label: "+971 56 667 7782",
  },
  {
    link: "https://www.google.com/maps/dir//Sheikh+Zayed+Rd+-+Al+Quoz+-+Al+Quoz+Industrial+Area+3+-+Dubai/@25.1263642,55.1275954,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6bc672b8fc7f:0x250fe8f16e1b1804!2m2!1d55.2099969!2d25.126387?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
    label: "204 Building 6, Gold and Diamond Park, Al Quoz, Dubai, UAE",
  },
];
</script>
