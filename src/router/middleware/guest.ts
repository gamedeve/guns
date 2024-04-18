import { useUserStore } from "@/stores/user";
export default function guest({ next }) {
  if (useUserStore().isLoggedIn) {
    // console.log("sdasd", store.getters['auth/loggedIn']);
    return next({
      name: "home",
    });
  }

  return next();
}
