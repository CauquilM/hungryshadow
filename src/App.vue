<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
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
      <v-container fluid class="grey lighten-5">
        <v-row no-gutters class="justify-center">
          <v-col cols="6">
            <DisplayHungerComponent/>
          </v-col>
          <v-col cols="6">
            <p>Test</p>
          </v-col>
        </v-row>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DisplayHungerComponent from './components/DisplayHungerComponent.vue';
export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { DisplayHungerComponent }
};
</script>
