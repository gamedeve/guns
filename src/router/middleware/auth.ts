import { useUserStore } from "@/stores/user";
export default function auth({ to, next }) {
  if (!useUserStore().isLoggedIn) {
    return next({
      name: "login",
      query: { return_url: to.fullPath },
    });
  }

  return next();
}
