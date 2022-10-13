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
        <span v-if="windowSize > 767" class="black--text">Se connecter</span>
        <span v-else class="mr-sm-2 mt-15 black--text">Se connecter</span>
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
  mounted() {
    this.modifyWindowSize();
    this.getPosts();
  },
  computed: {
    ...mapState(["windowSize"]),
  },
  methods: {
    ...mapActions(["modifyWindowSize", "getPosts"]),
  },
  components: { DisplayHungerComponent },
};
</script>
