import Cookies from "js-cookie";
export interface DataInfo<T> {
  accessToken: string; // token
  expires: T; // token过期时间
  refreshToken: string; // 更新token
  username?: string; //当前登录用户名
  roles?: Array<string>; //当前用户角色
}

export const sessionKey = "user-info";
export const tokenKey = "authorized-token";

export function getToken() {
  return Cookies.get(tokenKey)
    ? JSON.parse(Cookies.get(tokenKey))
    : sessionStorage.get(sessionKey);
}

export function setToken(data: DataInfo<Date>) {
  let expires = 0;
  const { accessToken, refreshToken } = data;
  expires = new Date(data.expires).getTime();
  const cookieString = JSON.stringify({ accessToken, expires });
  // 更新token
  expires > 0
    ? Cookies.set(tokenKey, cookieString, {
        expires: (expires - Date.now()) / 86400000,
      })
    : Cookies.set(tokenKey, cookieString);
}

export function removeToken() {
  Cookies.remove(tokenKey);
  sessionStorage.clear();
}

export const formatToken = (token: string) => "Bearer" + token;
