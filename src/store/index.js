import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    windowSize: 0,
    isAuth: false,
  },
  mutations: {
    SET_POST(state, payload) {
      state.posts = [];
      state.posts = state.posts.concat(payload);
    },
    SET_WINDOW_SIZE(state) {
      state.windowSize = window.innerWidth;
    },
    SET_AUTH_STATE(state) {
      state.isAuth = sessionStorage.getItem("auth");
    },
  },
  actions: {
    createPost({ dispatch }, amount) {
      axios
        .post("http://localhost:3000/", amount)
        .then((res) => {
          console.log("STORE", res);
          dispatch("getPosts");
        })
        .catch((error) => console.log("STORE", error));
    },
    getPosts(context) {
      axios
        .get("http://localhost:3000/")
        .then((res) => {
          context.commit("SET_POST", res.data);
          console.log("GET SUCCESS", res.data);
        })
        .catch((error) => console.log("GET SUCCESS", error));
    },
    deletePost({ dispatch }, amount) {
      axios
        .delete(`http://localhost:3000/${amount}`)
        .then((res) => {
          dispatch("getPosts");
          console.log("GET SUCCESS", res.data);
        })
        .catch((error) => console.log("GET SUCCESS", error));
    },

    modifyWindowSize(context) {
      context.commit("SET_WINDOW_SIZE");
    },

    getAuthState(context) {
      context.commit("SET_AUTH_STATE");
      console.log("here", sessionStorage.getItem("auth"));
    },
  },
});
