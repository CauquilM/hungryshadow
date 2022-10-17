<template>
  <v-row no-gutters class="align-center fill-height">
    <v-spacer />
    <v-col cols="auto">
      <LoginComponent />
    </v-col>
    <v-spacer />
  </v-row>
</template>
<script>
import LoginComponent from "../components/LoginComponent.vue";
export default {
  name: "LoginView",
  components: { LoginComponent },
};
</script>
