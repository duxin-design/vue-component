/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 11:53:45
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 14:53:44
 * @FilePath: \vue-admin\vite.config.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { loadEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dayjs from "dayjs";
import { resolve } from "path";
import pkg from "./package.json";
import { warpperEnv } from "./build";
import { include, exclude } from "./build/optimize";

const root: string = process.cwd();
console.log("process", warpperEnv(loadEnv("mode", root)));
const {  VITE_PORT, VITE_PUBLIC_PATH } = warpperEnv(
  loadEnv("mode", root)
);
// 查找路径
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// 别名
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build"),
};

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { devDependencies, dependencies, name, version },
  lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_PUBLIC_PATH,
  root,
  plugins: [vue(), vueJsx()],
  resolve: {
    alias,
  },
  server: {
    https: false,
    port: VITE_PORT,
    host: "0.0.0.0",
    proxy: {},
  },
  optimizeDeps: {
    include,
    exclude,
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve("index.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].ext",
      },
    },
  },
  define: {
    __INTLIFY_PROD_DEVTOOLS__: false,
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
});
