/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 20:19:47
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 20:29:56
 * @FilePath: \vue-admin\src\config\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import type { App } from "vue";
import axios from "axios";

let config: object = {};

const { VITE_PUBLIC_PATH } = import.meta.env;

const setConfig = (cfg?: unknown) => {
  config = Object.assign(config, cfg);
};

const getConfig = (key?: string) => {
  if (typeof key === "string") {
    const arr = key.split(".");
    if (arr && arr.length) {
      let data: any = config;
      arr.forEach((v) => {
        if (data && typeof data[v] !== "undefined") {
          data = data[v];
        } else {
          data = null;
        }
      });
      return data;
    }
  }
  return config;
};

export const getServerConfig = async (app: App): Promise<undefined> => {
  app.config.globalProperties.$config = getConfig();
  return axios({
    method: "get",
    url: `${VITE_PUBLIC_PATH}serverConfig.json`,
  })
    .then(({ data: config }) => {
      let $config = app.config.globalProperties.$config;
      if (app && $config && typeof config === "object") {
        $config = Object.assign($config, config);
        app.config.globalProperties.$config = $config;
        setConfig($config);
      }
      return $config;
    })
    .catch(() => {
      throw "请在public目录配置serverConfig.json文件";
    });
};

export { getConfig, setConfig };
