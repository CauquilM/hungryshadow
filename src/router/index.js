import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisteringView from "../views/RegisteringView.vue";
import LoginView from "../views/LoginView.vue";
import PageNotFound from "../views/PageNotFound.vue"
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(h) {
        return h("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "*",
        name: "PageNotFound",
        component: PageNotFound,
      },
      {
        path: "login",
        name: "LoginView",
        component: LoginView,
      },
      {
        path: "registering",
        name: "RegisteringView",
        component: RegisteringView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
