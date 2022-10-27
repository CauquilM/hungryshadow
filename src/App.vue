<template>
  <v-app v-resize="modifyWindowSize">
    <v-app-bar app color="white" dark :prominent="windowSize < 768">
      <v-row>
        <v-col>
          <v-row no-gutters class="align-center">
            <v-col cols="auto">
              <v-btn icon :href="`/${$i18n.locale}`" class="ml-sm-5 mt-sm-1 mt-2">
                <v-img
                  alt="Vuetify Logo"
                  href="/"
                  class="shrink mr-2"
                  contain
                  src="./assets/shadow_bg.webp"
                  transition="scale-transition"
                  width="40"
                />
              </v-btn>
            </v-col>
            <v-spacer />
            <v-col cols="auto">
              <v-btn
                text
                v-if="windowSize > 767 && isAuth"
                class="black--text"
                @click="userDisconnection()"
                >{{ $t("nav.loginBtn.disconnect") }}</v-btn
              >
              <v-btn
                :href="`/${$i18n.locale}/login`"
                text
                v-else-if="windowSize > 767 && !isAuth"
                class="black--text"
                >{{ $t("nav.loginBtn.connect") }}</v-btn
              >
              <v-btn
                text
                v-else-if="windowSize < 767 && isAuth"
                class="black--text mt-sm-5 mt-8 pr-0"
                @click="userDisconnection()"
                >{{ $t("nav.loginBtn.disconnect") }}</v-btn
              >
              <v-btn
                href="/login"
                text
                v-else
                class="black--text mt-sm-5 mt-8 pr-0"
                >{{ $t("nav.loginBtn.connect") }}</v-btn
              >
            </v-col>
          </v-row>

          <v-row v-if="windowSize < 768">
            <v-spacer />
            <v-col cols="auto">
              <DisplayHungerComponent />
            </v-col>
            <v-spacer />
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view />
      <LanguageSwitch />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DisplayHungerComponent from "./components/DisplayHungerComponent.vue";
import LanguageSwitch from "./components/LanguageSwitch.vue";
export default {
  name: "App",
  data() {
    return {
      connectionBtnTxt: "Se connecter",
      select: { state: "Français" },
      items: [{ state: "Français" }, { state: "English" }],
    };
  },
  watch: {
    accessToken() {
      this.getAuthState();
      this.getAccessToken();
    },
  },
  mounted() {
    this.modifyWindowSize();
    this.getAuthState();
    this.getAccessToken();
    this.getUsername();
  },
  computed: {
    ...mapState(["windowSize", "isAuth", "accessToken"]),
  },
  methods: {
    ...mapActions([
      "modifyWindowSize",
      "getAuthState",
      "userDisconnection",
      "getAccessToken",
      "getUsername",
    ]),
    logout() {
      sessionStorage.clear();
    },
  },
  components: { DisplayHungerComponent, LanguageSwitch },
};
</script>
<style>
.v-select__selection {
  color: black !important;
}
</style>
