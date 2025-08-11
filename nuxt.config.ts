import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/strapi",
  ],

  strapi: {
    url:
      process.env.STRAPI_URL ||
      "https://attractive-trust-fd0dbc016d.strapiapp.com",
    prefix: "/api",
    version: "v5",
  },
  image: {
    strapi: {
      baseURL: "https://attractive-trust-fd0dbc016d.strapiapp.com",
    },
  },

  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
