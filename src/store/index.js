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
      axios.post("http://localhost:3000/", amount).then(() => {
        // console.log("STORE", res);
        dispatch("getPosts");
      });
      // .catch((error) => console.log("STORE", error));
    },
    getPosts(context) {
      axios
        .get("http://localhost:3000/posts", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          context.commit("SET_POST", res.data);
          console.log("GET SUCCESS", res);
        })
        .catch((error) => {
          console.log("GET Error", error);
          console.log("ERROR TOKEN", this.state.accessToken);
        });
    },
    deletePost({ dispatch }, amount) {
      axios
        .delete(`http://localhost:3000/posts/${amount}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          dispatch("getPosts");
          console.log("SUCCESS DELETE", res);
        })
        .catch((err) => {
          console.log("ERROR DELETE", err);
        });
    },

    userRegistering(_, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/auth/register", credentials)
          .then((res) => {
            resolve(res);
            console.log("register => ", res);
          })
          .catch((err) => {
            reject(err);
            console.log("register => ", err);
          });
      });
    },

    // Users
    userConnection(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/auth/login", credentials)
          .then((res) => {
            context.commit("SET_ACCESS_TOKEN_STATE", res.data.accessToken);
            context.commit("SET_USERNAME_IN_STATE", credentials.username);
            console.log(this.state.accessToken);
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
          "http://localhost:3000/auth/token",
          { username: this.state.username },
          {
            headers: {
              Authorization: "Bearer " + this.state.accessToken,
            },
          }
        )
        .then((res) => {
          console.log("put ok => ", res);
          sessionStorage.clear();
          location.reload();
        })
        .catch((err) => {
          console.log("put fail => ", err);
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
