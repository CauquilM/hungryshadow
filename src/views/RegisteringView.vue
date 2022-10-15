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
import { mapActions, mapState } from "vuex";

export default {
  name: "RegisteringView",
  data() {
    return {
      auth: false,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Un nom d'utilisateur est requis",
        (v) =>
          (v && v.length <= 10) || "La longueur doit-être max 10 caractères",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Un mot de passe est requis",
        (v) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            v
          ) ||
          "La longueur doit-être d'au moins 8 caractères dont 1 majuscule, 1 minuscule, 1 caractère numérique.",
      ],
    };
  },
  mounted() {},
  computed: {
    ...mapState(["windowSize", "isAuth"]),
  },
  methods: {
    ...mapActions(["modifyAuthState"]),
    changeAuth() {
      sessionStorage.setItem("auth", true);
      var auth = sessionStorage.getItem("auth");
      this.auth = auth;
      // if (auth) {
      // }
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
