import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    windowSize: 0,
    isAuth: false,
    accessToken: false,
    username: "",
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
    SET_ACCESS_TOKEN_STATE(state, payload) {
      state.accessToken = payload;
    },
    SET_USERNAME_IN_STATE(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    // Posts
    createPost({ dispatch }, amount) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://hungry-shadow-api.herokuapp.com/posts", amount, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            resolve(res);
            dispatch("getPosts");
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getPosts(context) {
      axios
        .get("https://hungry-shadow-api.herokuapp.com/posts", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          context.commit("SET_POST", res.data);
        });
    },
    deletePost({ dispatch }, amount) {
      axios
        .delete(`https://hungry-shadow-api.herokuapp.com/posts/${amount}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then(() => {
          dispatch("getPosts");
        });
    },

    userRegistering(_, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://hungry-shadow-api.herokuapp.com/auth/register", credentials)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // Users
    userConnection(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://hungry-shadow-api.herokuapp.com/auth/login", credentials)
          .then((res) => {
            console.log("success");
            context.commit("SET_ACCESS_TOKEN_STATE", res.data.accessToken);
            context.commit("SET_USERNAME_IN_STATE", credentials.username);
            sessionStorage.setItem("auth", true);
            sessionStorage.setItem("token", this.state.accessToken);
            sessionStorage.setItem("username", credentials.username);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
            console.error(
              `Message => ${error.response.data}, Status => ${error.response.status}`
            );
          });
      });
    },

    userDisconnection() {
      axios
        .put(
          "https://hungry-shadow-api.herokuapp.com/auth/token",
          { username: this.state.username },
          {
            headers: {
              Authorization: "Bearer " + this.state.accessToken,
            },
          }
        )
        .then(() => {
          sessionStorage.clear();
          location.reload();
        });
    },

    // Others
    modifyWindowSize(context) {
      context.commit("SET_WINDOW_SIZE");
    },

    getAuthState(context) {
      context.commit("SET_AUTH_STATE");
    },
    getAccessToken(context) {
      context.commit("SET_ACCESS_TOKEN_STATE", sessionStorage.getItem("token"));
    },
    getUsername(context) {
      context.commit(
        "SET_USERNAME_IN_STATE",
        sessionStorage.getItem("username")
      );
    },
  },
});
