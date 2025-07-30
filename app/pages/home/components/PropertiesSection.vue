<template>
  <section class="mt-20 md:mt-24 xl:mt-32">
    <h2 class="title-xl md:title-2xl">Selected properties</h2>

    <div v-if="!pending" class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <PropertyCard
        v-for="property in properties"
        :key="property.documentId"
        :document-id="property.documentId"
        :title="property.title"
        :location="property.location"
        :listing-type="property.listingType"
        :property-type="property.propertyType"
        :price="Number(property.price)"
        :number-of-bathrooms="Number(property.numberOfBathrooms)"
        :number-of-bedrooms="Number(property.numberOfBedrooms)"
        :thumbnail="useStrapiMedia(property.thumbnail.url)"
      />
    </div>
  </section>
</template>

<script setup>
// components
import PropertyCard from "./PropertyCard.vue";

const { find } = useStrapi();
const { data: properties, pending } = await find("properties", {
  populate: ["thumbnail"],
});
</script>
