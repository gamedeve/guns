import "vant/lib/index.css";
import "./assets/styles/main.scss";
import eruda from "eruda";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.config.globalProperties.tg = window.Telegram.WebApp;

app.axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
app.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

app.mount("#app");

eruda.init();
