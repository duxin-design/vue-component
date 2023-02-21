/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 13:54:27
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 13:54:48
 * @FilePath: \vue-admin\tailwind.config.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    corePlugins: {
      preflight: false
    },
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          bg_color: "var(--el-bg-color)",
          primary: "var(--el-color-primary)",
          primary_light_9: "var(--el-color-primary-light-9)",
          text_color_primary: "var(--el-text-color-primary)",
          text_color_regular: "var(--el-text-color-regular)",
          text_color_disabled: "var(--el-text-color-disabled)"
        }
      }
    }
  };
  