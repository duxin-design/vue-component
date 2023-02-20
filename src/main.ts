/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 11:53:45
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 21:24:17
 * @FilePath: \vue-admin\src\main.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "./assets/main.css";
import "./style/tailwind.css";
import "element-plus/dist/index.css";
import { setupStore } from "@/store";
import { getServerConfig } from "./config";
import { injectResponsiveStorage } from "@/uitls/responsive";
const app = createApp(App);
getServerConfig(app).then(async (config) => {
    console.log("config",config)
  app.use(router);
  await router.isReady();
  injectResponsiveStorage(app,config)
  setupStore(app);
  app.use(ElementPlus);
  app.mount("#app");
});
