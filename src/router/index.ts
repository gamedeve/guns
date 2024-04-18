import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import LoginView from "../views/LoginView.vue";
// import middlewarePipeline from "./middlewarePipeline";
// import guest from "./middleware/guest";
// import auth from "./middleware/auth";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createMemoryHistory,
  routes: [
    // {
    //   path: "/login",
    //   name: "login",
    //   component: LoginView,
    // },
    {
      path: "/",
      name: "home",
      component: HomeView,
      // meta: {
      //   middleware: [auth],
      // },
    },
    {
      path: "/mining",
      name: "mining",
      component: () => import("@/views/MiningView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("@/views/ShopView.vue"),
    },
    {
      path: "/inventory",
      name: "inventory",
      component: () => import("@/views/InventoryView.vue"),
    },
    {
      path: "/missions",
      name: "missions",
      component: () => import("@/views/MissionsView.vue"),
    },
    {
      path: "/boost",
      name: "boost",
      component: () => import("@/views/BoostView.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (!to.meta.middleware) {
//     return next();
//   }
//   const middleware: any = to.meta.middleware;

//   const context = {
//     to,
//     from,
//     next,
//   };

//   return middleware[0]({
//     ...context,
//     next: middlewarePipeline(context, middleware, 1),
//   });
// });

export default router;
