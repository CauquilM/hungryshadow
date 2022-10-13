<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div>
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
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  
};
</script>
