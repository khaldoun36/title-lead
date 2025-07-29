<!-- eslint-disable vue/html-self-closing -->
<template>
  <form class="ds-border card-padding space-y-8 rounded-lg bg-white">
    <p class="title-lg text-secondary-text ds-border-b pb-2">
      Help me locate my ideal property
    </p>
    <FormInput
      v-model="location"
      label="Location"
      placeholder="City, community, or building"
    />

    <FormSelect
      v-model="selectedHelpOption"
      title="What do you need our help with?"
      name="listing-type"
      :options="helpOptions"
      class="grid-cols-2"
    />

    <FormSelect
      v-if="selectedHelpOption !== 'rent'"
      v-model="selectedPropertyStatus"
      title="Property Status"
      name="property-status"
      :options="propertyStatus"
      class="grid-cols-1 md:grid-cols-2"
    />

    <FormSelect
      v-model="selectedPropertyType"
      title="Property type"
      name="property-type"
      :options="propertyType"
      class="grid-cols-2"
    />

    <FormSelect
      v-if="
        selectedPropertyType !== 'studio' &&
        selectedPropertyType !== 'commercial'
      "
      v-model="selectedNumberOfRooms"
      title="Number of rooms"
      name="number-of-rooms"
      :options="numberOfRooms"
      class="grid-cols-2"
    />
    <FormInput
      v-model="budget"
      label="Budget"
      placeholder="1,000,000 AED"
      type="number"
    />

    <PrimaryButton type="submit" class="min-w-full justify-center text-center">
      Search
    </PrimaryButton>
  </form>
</template>

<script setup>
import FormInput from "~/components/FormInput.vue";
import FormSelect from "~/components/FormSelect.vue";

import PrimaryButton from "~/components/PrimaryButton.vue";

// form control

const location = ref(null);
const budget = ref(null);

const helpOptions = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
];
const selectedHelpOption = ref(null);

const propertyStatus = [
  { value: "Completed", label: "Completed properties" },
  { value: "OffPlan", label: "Off plan" },
];
const selectedPropertyStatus = ref(null);

const propertyType = [
  { value: "studio", label: "Studio", icon: "lucide:bed" },
  { value: "apartment", label: "Apartment", icon: "lucide:building" },
  { value: "villa", label: "Villa", icon: "lucide:house" },
  { value: "commercial", label: "Commercial", icon: "lucide:store" },
];
const selectedPropertyType = ref(null);

const numberOfRooms = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4+" },
];
const selectedNumberOfRooms = ref(null);
</script>
