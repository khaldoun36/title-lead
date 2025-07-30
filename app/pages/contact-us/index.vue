<template>
  <div class="mt-20 grid gap-8 md:mt-24 xl:mt-32 xl:grid-cols-[1fr_1.25fr]">
    <main>
      <h1 class="title-xl md:title-2xl 2xl:title-3xl !font-semibold">
        Sell, Buy, or Rent with Title Lead
      </h1>
      <p class="paragraph-md mt-4">
        Whether you're looking to sell, buy, or rent, Title Lead is your trusted
        partner in real estate. Our expert team is dedicated to maximizing your
        property's exposure and helping you make confident, value-driven
        decisions at every step.
      </p>
      <div class="mt-10 grid gap-8 md:mt-12 xl:mt-16">
        <div
          v-for="item in contactInfo"
          :key="item.link"
          class="group relative grid grid-cols-[5rem_1fr] items-center gap-3 md:grid-cols-[4rem_1fr]"
        >
          <div
            class="rounded-base ds-border group-hover:bg-primary-background grid aspect-square h-auto w-full place-content-center bg-white transition-colors"
          >
            <Icon
              :name="item.icon"
              size="24px"
              class="group-hover:text-primary-text text-secondary-text transition-colors"
            />
          </div>
          <div>
            <h3 class="title-base">{{ item.sectionTitle }}</h3>
            <a
              :href="item.link"
              class="text-secondary-text label-md rounded-base hover:text-primary-text flex items-center transition-colors"
            >
              <span class="absolute inset-0" />
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </main>
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from "./components/ContactForm.vue";

const contactInfo = [
  {
    sectionTitle: "Email address",
    icon: "lucide:mail",
    title: "Info@titlelead.ae",
    link: "mailto:info@titlelead.ae",
  },
  {
    sectionTitle: "Phone number",
    icon: "lucide:phone",
    title: "+971 56 667 7782",
    link: "tel:00971566677782",
  },
  {
    sectionTitle: "Our location",
    icon: "lucide:map-pin",
    title: "204 Building 6, Gold and Diamond Park, Al Quoz, Dubai, UAE",
    link: "https://www.google.com/maps/dir//Sheikh+Zayed+Rd+-+Al+Quoz+-+Al+Quoz+Industrial+Area+3+-+Dubai/@25.1263642,55.1275954,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6bc672b8fc7f:0x250fe8f16e1b1804!2m2!1d55.2099969!2d25.126387?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
  },
];
</script>
