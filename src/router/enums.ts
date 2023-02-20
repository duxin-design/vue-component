/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 16:17:13
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 16:17:13
 * @FilePath: \vue-admin\src\router\enums.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
// 完整版菜单比较多，将 rank 抽离出来，在此方便维护

const home = 0, // 平台规定只有 home 路由的 rank 才能为 0 ，所以后端在返回 rank 的时候需要从 1 开始哦
  doc = 1,
  utils = 2,
  table = 3,
  components = 4,
  able = 5,
  frame = 6,
  nested = 7,
  result = 8,
  error = 9,
  list = 10,
  permission = 11,
  system = 12,
  tabs = 13,
  formdesign = 14,
  flowchart = 15,
  ppt = 16,
  editor = 17,
  guide = 18,
  menuoverflow = 19,
  about = 20;

export {
  home,
  doc,
  utils,
  table,
  components,
  able,
  frame,
  nested,
  result,
  error,
  list,
  permission,
  system,
  tabs,
  formdesign,
  flowchart,
  ppt,
  editor,
  guide,
  menuoverflow,
  about
};
