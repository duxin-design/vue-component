/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 13:48:46
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 13:48:56
 * @FilePath: \vue-admin\build\index.ts
 * @Description: 环境变量配置
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

const warpperEnv = (envConf: Recordable): ViteEnv => {
    /** 此处为默认值 */
    const ret: ViteEnv = {
      VITE_PORT: 8848,
      VITE_PUBLIC_PATH: "",
      VITE_ROUTER_HISTORY: "",
      VITE_CDN: false,
      VITE_COMPRESSION: "none"
    };
  
    for (const envName of Object.keys(envConf)) {
      let realName = envConf[envName].replace(/\\n/g, "\n");
      realName =
        realName === "true" ? true : realName === "false" ? false : realName;
  
      if (envName === "VITE_PORT") {
        realName = Number(realName);
      }
      ret[envName] = realName;
      if (typeof realName === "string") {
        process.env[envName] = realName;
      } else if (typeof realName === "object") {
        process.env[envName] = JSON.stringify(realName);
      }
    }
    return ret;
  };
  
  export { warpperEnv };
  