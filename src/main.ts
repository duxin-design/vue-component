import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";
import store from "./store";

import "./style/tailwind.css";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
await router.isReady();
app.use(store);
app.use(ElementPlus);
app.mount("#app");
