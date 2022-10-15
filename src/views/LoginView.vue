<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      />

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Mot de passe"
        required
      />

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Un nom d'utilisateur est requis"],
      password: "",
      passwordRules: [(v) => !!v || "Un mot de passe est requis"],
    };
  },
  computed: {
    ...mapState(["isAuth"]),
  },
  methods: {
    changeAuth() {
      sessionStorage.setItem("auth", true);
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
