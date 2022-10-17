<template>
  <v-row no-gutters class="align-center fill-height">
    <v-spacer />
    <v-col cols="auto">
      <RegisterComponent />
    </v-col>
    <v-spacer />
  </v-row>
</template>
<script>
import RegisterComponent from "../components/RegisterComponent.vue";

export default {
  name: "RegisteringView",
  components: { RegisterComponent },
};
</script>
