/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 14:18:43
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 14:18:53
 * @FilePath: \vue-admin\src\uitls\auth.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
export interface DataInfo<T> {
    /** token */
    accessToken: string;
    /** `accessToken`的过期时间（时间戳） */
    expires: T;
    /** 用于调用刷新accessToken的接口时所需的token */
    refreshToken: string;
    /** 用户名 */
    username?: string;
    /** 当前登陆用户的角色 */
    roles?: Array<string>;
  }
  