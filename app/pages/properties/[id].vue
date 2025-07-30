<template>
  <div v-if="pending" class="flex h-screen items-center justify-center">
    <p class="title-lg">Loading property details...</p>
  </div>

  <article
    v-else-if="property && property.data"
    class="mt-20 grid gap-8 md:mt-24 xl:mt-32 xl:grid-cols-[1.5fr_1fr] xl:gap-16"
  >
    <section
      class="top-32 xl:sticky xl:col-start-2 xl:row-start-1 xl:self-start"
    >
      <p
        class="title-xl md:title-2xl 2xl:title-3xl mb-6 flex items-center gap-1.5 !font-semibold"
      >
        <DirhamIcon class="size-10" />
        <span>{{ formatCurrency(Number(property.data.price)) }}</span>
        <span
          v-if="property.data.listingType === 'Rent'"
          class="text-secondary-text"
          >PA</span
        >
      </p>

      <h1 class="title-lg">
        {{ property.data.title }}
      </h1>
      <p class="mt-[calc(var(--card-padding)/2)] flex items-center gap-4">
        <span class="label-lg text-trim">{{ property.data.location }}</span>
      </p>

      <p class="paragraph-md mt-6">{{ property.data.description }}</p>

      <ul class="mt-6 grid grid-cols-2 gap-4 xl:gap-6">
        <li
          class="ds-border rounded-base card-padding paragraph-md bg-white text-center"
        >
          <span class="text-primary-text !font-semibold">
            {{ property.data.propertySize }}
          </span>
          <span> sqft </span>
        </li>
        <li
          class="ds-border rounded-base card-padding paragraph-md bg-white text-center"
        >
          <span class="text-primary-text !font-semibold">
            {{ property.data.numberOfBedrooms }}
          </span>
          <span v-if="property.data.numberOfBedrooms > 1"> Bedrooms </span>
          <span v-else> Bedroom </span>
        </li>
        <li
          class="ds-border rounded-base card-padding paragraph-md bg-white text-center"
        >
          <span class="text-primary-text !font-semibold">
            {{ property.data.numberOfBathrooms }}
          </span>
          <span v-if="property.data.numberOfBathrooms > 1"> Bathrooms </span>
          <span v-else> Bathroom </span>
        </li>
        <li
          class="ds-border rounded-base card-padding paragraph-md bg-white text-center"
        >
          <span> {{ property.data.propertyType }} </span>
        </li>
      </ul>
    </section>

    <div class="space-y-6 xl:col-start-1 xl:row-start-1">
      <figure
        v-for="(image, index) in property.data.images"
        :key="image.documentId"
        class="rounded-base relative aspect-[5/3] h-auto w-full overflow-clip shadow-xs"
      >
        <NuxtImg
          :src="useStrapiMedia(image.url)"
          :alt="`View ${index + 1} of ${property.data.title}`"
          class="absolute inset-0 min-h-full min-w-full object-cover"
          :width="image.width"
          :height="image.height"
        />
      </figure>
    </div>
  </article>
</template>

<script setup>
import DirhamIcon from "~/components/DirhamIcon.vue";
const route = useRoute();

const { findOne } = useStrapi();

const formatCurrency = (value) => {
  if (typeof value !== "number") return value;
  return new Intl.NumberFormat("en-US").format(value);
};

const { data: property, pending } = await useAsyncData("property", () =>
  findOne("properties", route.params.id, {
    populate: "images",
  }),
);
</script>
