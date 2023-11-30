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

// 요청 인터셉터
cookie_instance.interceptors.request.use(async (config) => {
  try {
    const refreshToken = await getCookie("refreshToken"); // 비동기로 쿠키 가져오기
    const accessToken = localStorage.getItem("accessToken");
    if (refreshToken && refreshToken !== "undefined" && refreshToken !== null) {
      config.headers.cookie = `refreshToken=${refreshToken}`;
    }

    //alert(`요청 성공: ${config}  accessToken--->${accessToken}`);
    return config;
  } catch (error) {
    console.error("요청 오류:", error);
    return Promise.reject(error);
  }
});

// 응답 인터셉터
cookie_instance.interceptors.response.use(
  (response) => {
    try {
      const refreshToken = getCookie("refreshToken"); // 비동기로
      const accessToken = response.data.accessToken;
      if (refreshToken && refreshToken !== "undefined") {
        response.headers.cookie = `refreshToken=${refreshToken}`;
      } else if (refreshToken === "undefined") {
        alert("리프레쉬 쿠키 삭제");
        removeCookie("refreshToken");
      }
      if (accessToken && accessToken !== "undefined" && accessToken !== null) {
        localStorage.setItem("accessToken", accessToken);
      }
      // alert(
      //   `응답 성공: ${response.data.message},refreshTokenTest2 ${response.data.accessToken}`
      // );
      return response;
    } catch (error) {
      console.error("응답 오류:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error(error);
    alert(error.response.data.message);
    return Promise.reject(error);
  }
);
