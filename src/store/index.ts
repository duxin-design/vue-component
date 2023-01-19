import type { App } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    info: {
      name: "duxin",
    },
  },
  mutations: {
    updateInfo(state, payload) {
      state.info = payload;
    },
  },
  actions: {
    updateInfo(context,payload){
      context.commit("updateInfo",payload);
    }
  },
  getters: {
    formatInfo(state){
      return state.info
    }
  },
  modules: {},
});
