<template>
  <v-app v-resize="modifyWindowSize">
    <v-app-bar app color="white" dark :prominent="windowSize < 768">
      <v-row no-gutters class="align-center">
        <v-col cols="auto">
          <v-btn icon href="/" class="ml-sm-5">
            <v-img
              alt="Vuetify Logo"
              href="/"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
          </v-btn>
          <div v-if="windowSize < 768">
            <DisplayHungerComponent class="mt-sm-5 ml-sm-6 mt-3 ml-2" />
          </div>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn href="/connection" text>
        <v-btn text v-if="windowSize > 767 && isAuth" class="black--text"
          >Déconnexion</v-btn
        >
        <v-btn text v-else-if="windowSize > 767 && !isAuth" class="black--text"
          >Se connecter</v-btn
        >
        <v-btn text v-else-if="windowSize < 767 && isAuth" class="black--text mt-sm-5 mt-16 pr-0"
          >Déconnexion</v-btn
        >
        <v-btn text v-else class="black--text mt-sm-5 mt-16 pr-0">Se connecter</v-btn>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DisplayHungerComponent from "./components/DisplayHungerComponent.vue";
export default {
  name: "App",
  data() {
    return {
      connectionBtnTxt: "Se connecter",
    };
  },
  mounted() {
    this.modifyWindowSize();
  },
  computed: {
    ...mapState(["windowSize", "isAuth"]),
  },
  methods: {
    ...mapActions(["modifyWindowSize"]),
  },
  components: { DisplayHungerComponent },
};
</script>
