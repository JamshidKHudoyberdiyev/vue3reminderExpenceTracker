import "./assets/main.css";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(Vue3Toasity);
app.mount("#app");
