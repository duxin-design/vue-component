/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 20:38:05
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 20:44:05
 * @FilePath: \vue-admin\src\layout\hooks\useBoolean.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { ref } from "vue";
export function useBoolean(initValue = false) {
  const bool = ref(initValue);
  function setBool(value: boolean) {
    bool.value = value;
  }
  function setTrue() {
    setBool(true);
  }
  function setFalse() {
    setBool(false);
  }
  function toggle() {
    setBool(!bool.value);
  }

  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle,
  };
}
