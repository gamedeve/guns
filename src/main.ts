import "vant/lib/index.css";
import "./assets/styles/main.scss";
// import eruda from "eruda";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

const telegram = window.Telegram.WebApp;
telegram.isClosingConfirmationEnabled = true;
telegram.expand();

app.provide("tg", telegram);
app.provide("eruda", eruda);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.tg = telegram;
});
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
// app.config.globalProperties.tg = window.Telegram.WebApp;

app.axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
app.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

app.mount("#app");

// eruda.init();
// eruda.remove();

// const backButton = Telegram.WebApp.BackButton;

// // Показывать кнопку только если есть GET параметры
// // Показывать кнопку только если есть параметры
// // и страница не главная
// if (window.location.pathname !== "/") {
//   backButton.show();
//   console.log("backButton.show()", window.location.pathname);
// } else {
//   backButton.hide();
//   console.log(
//     "backButton.hide()",
//     window.location.pathname,
//     window.location.search
//   );
// }
// backButton.onClick(() => {
//   history.back();
// });
