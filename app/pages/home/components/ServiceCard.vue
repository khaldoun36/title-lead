<template>
  <article
    class="card-padding relative grid gap-4 rounded-lg md:grid-cols-2 xl:grid-cols-1"
    :class="backgroundColor[index]"
  >
    <div>
      <NuxtLink to="/contact-us">
        <span class="title-lg text-white">{{ title }}</span>
        <span class="absolute inset-0" />
      </NuxtLink>

      <p class="paragraph-md mt-2 text-white/80">
        {{ description }}
      </p>
    </div>

    <NuxtImg
      :src="image"
      class="rounded-base ds-border grid aspect-square h-auto w-full place-content-center bg-white/10 object-cover object-left"
      format="avif"
    />
  </article>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const backgroundColor = {
  0: "bg-primary",
  1: "bg-primary-text",
  2: "bg-primary-light ",
};
</script>
