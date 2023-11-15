import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../cookie/cookie";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
export const apis_token = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: true,
});

export const cookie_instance = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    //authorization: `Bearer ${localStorage.getItem("localAccessToken")}`,
  },
  withCredentials: true, // 요청과 응답에 쿠키를 사용하기 위해 withCredentials 설정
});

// 요청 인터셉터
cookie_instance.interceptors.request.use(async (config) => {
  try {
    const refreshToken = await getCookie("refreshToken"); // 비동기로 쿠키 가져오기
    const accessToken = await localStorage.getItem("localAccessToken");

    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }

    if (refreshToken && refreshToken !== "undefined") {
      config.headers.cookie = `refreshToken=${refreshToken}`;
    }
    alert(`성공: ${config}`);
    return config;
  } catch (error) {
    console.error("요청 오류:", error);
    return Promise.reject(error);
  }
});

// 응답 인터셉터
cookie_instance.interceptors.response.use(
  async (response) => {
    try {
      console.log(response.data);

      const refreshToken = await getCookie("refreshToken"); // 비동기로 쿠키 가져오기
      const accessToken = await response.data.accessToken;
      const nickname = await response.data.nickname;
      console.log(accessToken, "accessToken 응답");

      if (accessToken) {
        localStorage.setItem("localAccessToken", accessToken);
      }

      if (refreshToken && refreshToken !== "undefined") {
        response.headers.cookie = `refreshToken=${refreshToken}`;
      } else if (refreshToken === "undefined") {
        alert("리프레쉬 쿠키 삭제");
        removeCookie("refreshToken");
      }

      if (nickname && nickname !== "undefined") {
        localStorage.setItem("localNickName", nickname);
      } else if (localStorage.getItem("localNickName") === "undefined") {
        localStorage.removeItem("localNickName");
      } else {
      }

      alert(`성공: ${response.data.message},데이타${response.data}`);
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
