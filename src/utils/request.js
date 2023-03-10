import axios from "axios";
import Vue from "vue";
import qs from "qs";
import { baseUrl } from "@/config";

// 创建实例时配置默认值
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 180 * 1000, // 设置超时3分钟
  headers: { "Content-Type": "application/json" },
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    let wstoken = "d3cca44cd2464379890c1982a71d3941"; //9e3974d26337677fab8ecfb26716a3b4
    if (config.data) {
      config.data.wstoken = wstoken;
      if (wstoken) {
        config.data.moodlewsrestformat = "json";
      }
      config.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8";
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // console.log("response", response.data);
    let { errorcode, error, message } = response.data;
    if (errorcode) {
      let resData = {
        message: message || error,
        code: errorcode,
      };
      Vue.prototype.$message.error(resData.message);
      return Promise.reject(resData);
    } else {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response.data;
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
