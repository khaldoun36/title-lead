import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    {
      path: "/", // Set the root path
      component: () => import("@/pages/home/index.vue"), // Point it to your desired component
    },
    ..._routes.filter((route) => route.path !== "/"), // Include all other Nuxt-generated routes, excluding the original index route
  ],
};
