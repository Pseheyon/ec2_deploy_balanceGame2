import axios from "axios";
import { getCookie, setCookie } from "../cookie/cookie";

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
//req 쿠키는 알아서 감,  헤더에 set-cookie 알아서 생김 백인드?
//요청헤더에 쿠키 생기게 하기

export const cookie_instance = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    //authorization: `Bearer ${localStorage.getItem("localAccessToken")}`,
  },
  withCredentials: true, // 요청과 응답에 쿠키를 사용하기 위해 withCredentials 설정
});

cookie_instance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  const refreshToken = setCookie("refreshToken"); // refreshToken을 쿠키에서 가져오기
  const accessToken = localStorage.getItem("localAccessToken");
  //인터셉터로 하면 null값이 가니깐 if하고 해야함
  // if (accessToken) {
  //   config.headers.authorization = `Bearer ${accessToken}`; // 요청 헤더에 refreshToken을 추가
  // }
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  } else {
  }
  if (refreshToken) {
    config.headers.cookie = `${refreshToken}`; // 요청 헤더에 refreshToken을 추가
  }
  return config;
});

cookie_instance.interceptors.response.use(
  (response) => {
    const refreshToken = getCookie("refreshToken");
    const accessToken = response.accessToken;
    const accessToken2 = response.headers.authorization;
    console.log(accessToken, "accessToken 응답");
    console.log(accessToken2, "accessToken2 응답");

    if (accessToken) {
      response.headers.authorization = `Bearer ${accessToken}`; // 요청 헤더에 refreshToken을 추가
    }
    if (refreshToken) {
      const refreshToken = setCookie("refreshToken");
      response.headers.cookie = `${refreshToken}`; // 요청 헤더에 refreshToken을 추가
      response.headers.authorization = `Bearer ${accessToken}`; //
    }
    return response;
  },
  (error) => {
    alert(error.message);
    return Promise.reject(error);
  }
);
