import axios from "axios";
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
export const apis = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  headers: {
    // "Access-Control-Allow-Origin": "*",
  },
});

const token = localStorage.getItem("token");
export const apis_token = axios.create({
  baseURL: `${BACKEND_SERVER}`,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

apis_token.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  config.headers["authorization"] = `${token}`;
  return config;
});

apis_token.interceptors.response.use(
  (response) => {
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem("token", token);
    }
    //else if()
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apis_token.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 로컬스토리지에서 토큰 값 가져오기
    if (token) {
      config.headers.authorization = `Bearer ${token}`; // HTTP 요청의 Authorization 헤더에 토큰 값 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const api = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: api,
});

export default instance;
