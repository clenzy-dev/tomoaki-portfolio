import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import jquery from "jquery";

createApp(App)
  .use(router)
  .use(jquery)
  .mount("#app");