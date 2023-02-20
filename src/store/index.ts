/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 15:01:43
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 15:17:47
 * @FilePath: \vue-admin\src\store\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App) {
  app.use(store);
}

export { store };
