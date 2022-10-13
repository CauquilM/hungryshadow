import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    windowSize: 0,
  },
  mutations: {
    SET_POST(state, payload) {
      state.posts.push(payload);
    },
    SET_WINDOW_SIZE(state) {
      state.windowSize = window.innerWidth;
    },
  },
  actions: {
    createPost(context, amount) {
      context.commit("SET_POST", amount);
    },
    modifyWindowSize(context) {
      context.commit("SET_WINDOW_SIZE");
    },
  },
});
