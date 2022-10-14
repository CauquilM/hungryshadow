import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisteringView from "../views/RegisteringView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/connection",
    name: "Home",
    component: Home,
  },
  {
    path: "/registering",
    name: "RegisteringView",
    component: RegisteringView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
