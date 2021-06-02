import axios from "axios";

const instance = axios.create();

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const token = "ccc";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
