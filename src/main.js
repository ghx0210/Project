import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from "echarts";
import "./assets/icons/index";
import axios from "axios";
import "lib-flexible";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
  render: (h) => h(App),
}).$mount("#app");
