import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../cookie/cookie";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
export const apis_token = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const cookie_instance = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
});

cookie_instance.interceptors.request.use(async (config) => {
  try {
    const refreshToken = await getCookie("refreshToken");
    const accessToken = localStorage.getItem("accessToken");
    if (refreshToken && refreshToken !== "undefined" && refreshToken !== null) {
      setCookie("refreshToken", refreshToken, {
        path: "/",
        secure: "/",
        expires: new Date(new Date().getTime() + 1 * 60 * 1000),
      });
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

cookie_instance.interceptors.response.use(
  (response) => {
    try {
      const refreshToken = getCookie("refreshToken"); // 비동기로
      const accessToken = response.data.accessToken;

      if (accessToken && accessToken !== "undefined" && accessToken !== null) {
        localStorage.setItem("accessToken", accessToken);
      }
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    alert(error.response.data.message);
    return Promise.reject(error);
  }
);
