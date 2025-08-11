<!-- eslint-disable vue/html-self-closing -->
<template>
  <form class="ds-border card-padding space-y-8 rounded-lg bg-white">
    <FormInput
      v-model="location"
      label="Location"
      placeholder="City, community, or building"
      :required="true"
    />

    <FormSelect
      v-model="selectedHelpOption"
      title="What do you need our help with?"
      name="listing-type"
      :options="helpOptions"
      :required="true"
    />

    <FormSelect
      v-if="selectedHelpOption !== 'rent'"
      v-model="selectedPropertyStatus"
      title="Property Status"
      name="property-status"
      :options="propertyStatus"
      :required="true"
      class="grid-cols-1 md:grid-cols-2"
    />

    <FormSelect
      v-model="selectedPropertyType"
      title="Property type"
      name="property-type"
      :options="propertyType"
      :required="true"
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
      :required="true"
      class="grid-cols-3"
    />
    <FormInput
      v-if="selectedHelpOption !== 'sell'"
      v-model="budget"
      label="Budget"
      placeholder="1,000,000 AED"
      type="number"
      :required="true"
    />
    <FormInput
      v-model="name"
      label="Your name"
      placeholder="Mohammed Ahmed"
      type="text"
      :required="true"
    />
    <FormInput
      v-model="phoneNumber"
      label="Your phone number"
      placeholder="+971 50 000 0000"
      type="text"
      :required="true"
    />
    <FormInput
      v-model="email"
      label="Your email"
      placeholder="mohammed@yahoo.com"
      type="email"
    />
    <FormMessage
      v-model="message"
      label="Add any extra details here"
      placeholder="Additional details"
    />
    <PrimaryButton type="submit" class="min-w-full justify-center text-center">
      Send
    </PrimaryButton>
  </form>
</template>

<script setup>
import FormInput from "~/components/FormInput.vue";
import FormSelect from "~/components/FormSelect.vue";
import FormMessage from "~/components/FormMessage.vue";

import PrimaryButton from "~/components/PrimaryButton.vue";

// form control

const location = ref(null);
const budget = ref(null);
const name = ref(null);
const phoneNumber = ref(null);
const message = ref(null);
const email = ref(null);

const helpOptions = [
  { value: "sell", label: "Sell" },
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
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6+" },
];
const selectedNumberOfRooms = ref(null);
</script>
