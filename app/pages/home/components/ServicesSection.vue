<template>
  <section class="mt-20 md:mt-24 xl:mt-32">
    <h2 class="title-xl md:title-2xl">Our Services</h2>
    <div class="mt-8 grid gap-6 xl:grid-cols-3">
      <ServiceCard
        v-for="(service, index) in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :image="service.img"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup>
// data
import services from "@/data/services.json";

// components
import ServiceCard from "./ServiceCard.vue";
</script>

<style scoped></style>
