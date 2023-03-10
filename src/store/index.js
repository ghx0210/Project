import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const actions = {
  // add(context,value){
  //     context.commit('ADD',value)
  // },
  // dele(context,value){
  //     context.commit('DELE',value)
  // },
  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500);
  },
  jia(context, value) {
    if (context.state.pages == 0) {
      console.log("hello", value);
    } else {
      context.commit("JIA", value);
    }
  },
};
// 准备mutation-用于操作数据（state）
const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  DELE(state, value) {
    state.sum -= value;
  },
  JIA(state, value) {
    state.pages += value;
  },
};
// 准备state-用于储存数据
const state = {
  sum: 0,
  school: "尚硅谷",
  subject: "前端",
  pages: 1,
  TBA: [
    {
      id: "1",
      name: "陈小瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/1.webp"),
    },
    {
      id: "2",
      name: "陈中瓜",
      sex: "女",
      school: "广东清洁工大学",
      url: require("@/assets/img/2.webp"),
    },
    {
      id: "3",
      name: "陈大瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/3.webp"),
    },
    {
      id: "4",
      name: "陈瓜瓜",
      sex: "女",
      school: "集美大学",
      url: require("@/assets/img/4.webp"),
    },
    {
      id: "5",
      name: "陈阿瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/5.webp"),
    },
    {
      id: "6",
      name: "许小瓜",
      sex: "女",
      school: "广东清洁工大学",
      url: require("@/assets/img/6.webp"),
    },
    {
      id: "7",
      name: "许中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/7.webp"),
    },
    {
      id: "8",
      name: "许大瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/8.webp"),
    },
    {
      id: "9",
      name: "许瓜瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/9.webp"),
    },
    {
      id: "10",
      name: "卢小瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/10.webp"),
    },
    {
      id: "11",
      name: "卢中瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/11.webp"),
    },
    {
      id: "12",
      name: "卢大瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/12.webp"),
    },
    {
      id: "13",
      name: "卢瓜瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/13.webp"),
    },
    {
      id: "14",
      name: "许瓜瓜",
      sex: "女",
      school: "集美大学",
      url: require("@/assets/img/14.webp"),
    },
    {
      id: "15",
      name: "林小瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/15.webp"),
    },
    {
      id: "16",
      name: "林中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/16.webp"),
    },
    {
      id: "17",
      name: "林大瓜",
      sex: "男",
      school: "广东清洁工大学",
      url: require("@/assets/img/17.webp"),
    },
    {
      id: "18",
      name: "林瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/18.webp"),
    },
    {
      id: "19",
      name: "林瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/19.webp"),
    },
    {
      id: "20",
      name: "林瓜瓜",
      sex: "男",
      school: "广东清洁工大学",
      url: require("@/assets/img/20.webp"),
    },
    {
      id: "21",
      name: "陈小瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/21.webp"),
    },
    {
      id: "22",
      name: "陈中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/22.webp"),
    },
    {
      id: "23",
      name: "陈大瓜",
      sex: "男",
      school: "广东清洁工大学",
      url: require("@/assets/img/23.webp"),
    },
    {
      id: "24",
      name: "陈瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/24.webp"),
    },
    {
      id: "25",
      name: "陈阿瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/25.webp"),
    },
    {
      id: "26",
      name: "许小瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/26.webp"),
    },
    {
      id: "27",
      name: "许中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/27.webp"),
    },
    {
      id: "28",
      name: "许大瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/28.webp"),
    },
    {
      id: "29",
      name: "许瓜瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/29.webp"),
    },
    {
      id: "30",
      name: "卢小瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/30.webp"),
    },
    {
      id: "31",
      name: "卢中瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/31.webp"),
    },
    {
      id: "32",
      name: "卢大瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/32.webp"),
    },
    {
      id: "33",
      name: "卢瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/33.webp"),
    },
    {
      id: "34",
      name: "许瓜瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/34.webp"),
    },
    {
      id: "35",
      name: "林小瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/35.webp"),
    },
    {
      id: "36",
      name: "林中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/36.webp"),
    },
    {
      id: "37",
      name: "林大瓜",
      sex: "男",
      school: "广东清洁工大学",
      url: require("@/assets/img/37.webp"),
    },
    {
      id: "38",
      name: "林瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/38.webp"),
    },
    {
      id: "39",
      name: "林瓜瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/39.webp"),
    },
    {
      id: "40",
      name: "林瓜瓜",
      sex: "男",
      school: "广东清洁工大学",
      url: require("@/assets/img/40.webp"),
    },
    {
      id: "41",
      name: "林瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/20.webp"),
    },
    {
      id: "42",
      name: "陈小瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/21.webp"),
    },
    {
      id: "43",
      name: "陈中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/22.webp"),
    },
    {
      id: "44",
      name: "陈大瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/23.webp"),
    },
    {
      id: "45",
      name: "陈瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/24.webp"),
    },
    {
      id: "46",
      name: "陈阿瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/25.webp"),
    },
    {
      id: "47",
      name: "许小瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/26.webp"),
    },
    {
      id: "48",
      name: "许中瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/27.webp"),
    },
    {
      id: "49",
      name: "许大瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/28.webp"),
    },
    {
      id: "50",
      name: "许瓜瓜",
      sex: "女",
      school: "广东清洁工大学",
      url: require("@/assets/img/29.webp"),
    },
    {
      id: "51",
      name: "卢小瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/30.webp"),
    },
    {
      id: "52",
      name: "卢中瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/31.webp"),
    },
    {
      id: "53",
      name: "卢大瓜",
      sex: "女",
      school: "江海大学",
      url: require("@/assets/img/32.webp"),
    },
    {
      id: "54",
      name: "卢瓜瓜",
      sex: "男",
      school: "江海大学",
      url: require("@/assets/img/33.webp"),
    },
    {
      id: "55",
      name: "许瓜瓜",
      sex: "女",
      school: "广东清洁工大学",
      url: require("@/assets/img/34.webp"),
    },
    {
      id: "56",
      name: "林小瓜",
      sex: "男",
      school: "集美大学",
      url: require("@/assets/img/35.webp"),
    },
  ],
};
const getters = {
  tenSum(state) {
    return state.sum * 10;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
