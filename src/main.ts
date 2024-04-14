import "vant/lib/index.css";
import "./assets/main.scss";
import eruda from "eruda";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.tg = window.Telegram.WebApp;
app.mount("#app");
eruda.init();
