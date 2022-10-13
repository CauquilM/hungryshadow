import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    SET_POST(state, payload) {
      state.posts.push(payload);
    },
  },
  actions: {
    createPost(context, amount) {
      context.commit("SET_POST", amount);
    },
  },
});
