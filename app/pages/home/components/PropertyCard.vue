<template>
  <article
    class="card-padding ds-border group hover:border-primary/40 relative rounded-lg transition-colors"
  >
    <div
      class="rounded-base relative aspect-[4/3] h-auto w-full overflow-clip shadow"
    >
      <NuxtImg
        :src="thumbnail"
        class="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-110"
        format="avif"
        :alt="`View  of ${title}`"
      />
    </div>

    <p
      class="label-md bg-primary/80 rounded-base mt-[var(--card-padding)] max-w-fit px-2 py-1 text-white backdrop-blur-2xl"
    >
      {{ listingType }}
    </p>

    <NuxtLink
      :to="`/properties/${documentId}`"
      class="title-lg text-primary-text mt-[var(--card-padding)] inline-block"
    >
      <span>{{ truncatedTitle }}</span>
      <span class="absolute inset-0" />
    </NuxtLink>

    <p class="mt-[calc(var(--card-padding)/2)] flex items-center gap-4">
      <span class="label-lg text-trim">{{ location }}</span>
    </p>

    <div class="mt-[calc(var(--card-padding)*2)] grid grid-cols-3 gap-8">
      <p class="grid grid-cols-[1.5rem_1fr] place-items-center gap-2">
        <DirhamIcon class="fill-primary-text size-6" />
        <span class="label-lg text-trim text-primary-text">{{
          formattedPrice
        }}</span>
      </p>
      <p class="flex items-center justify-center gap-2">
        <Icon name="lucide:bed" size="24px" />
        <span class="label-lg text-trim">{{ bedroomText }}</span>
      </p>
      <p class="flex items-center justify-center gap-2">
        <Icon name="lucide:bath" size="24px" />
        <span class="label-lg text-trim">{{ numberOfBathrooms }}</span>
      </p>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import DirhamIcon from "~/components/DirhamIcon.vue";

// Props
const props = defineProps({
  title: { type: String, required: true },
  location: { type: String, required: true },
  listingType: { type: String, required: true },
  propertyType: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  documentId: { type: String, required: true },
});

// Helper Functions
const formatCurrency = (value) => {
  if (typeof value !== "number") return value;
  return new Intl.NumberFormat("en-US").format(value);
};

// Computed Properties
const truncatedTitle = computed(() => props.title.substring(0, 28));
const formattedPrice = computed(() => formatCurrency(props.price));
const bedroomText = computed(() =>
  props.propertyType === "Studio" ? "Studio" : props.numberOfBedrooms,
);
</script>
