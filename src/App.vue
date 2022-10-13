<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex">
        <v-btn icon href="/" class="ml-5">
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
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/connection" text>
        <span class="mr-2 black--text">Se connecter</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="grey lighten-5 fill-height">
        <v-row no-gutters class="align-center">
          <v-col cols="6">
            <DisplayHungerComponent class="text-center sticky-component" />
          </v-col>
          <v-col>
            <v-divider vertical class="divider" />
          </v-col>
          <v-col cols="5" class="text-center">
            <div v-if="isConnected">
              <FeedingPostList />
            </div>
            <h1 v-else class="text-lg-h4">
              Bienvenue sur l'application pour nourrir Shadow
            </h1>
          </v-col>
        </v-row>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DisplayHungerComponent from "./components/DisplayHungerComponent.vue";
import FeedingPostList from "./components/FeedingPostList.vue";
export default {
  name: "App",
  data: () => ({
    isConnected: true,
  }),
  components: { DisplayHungerComponent, FeedingPostList },
};
</script>
<style>
.divider {
  border-width: 4px !important;
  border-color: black !important;
  position: fixed;
  top: 0;
}

.sticky-component {
  width: 400px;
  position: fixed;
  top: 50%;
  z-index: 1;
  /* centering */
  left: 25%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
</style>
