<template>
  <div>
    <h1 v-if="isAuth">Vous êtes déjà connecté</h1>
    <v-form v-else ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="username"
        :counter="10"
        :rules="usernameRules"
        label="Nom d'utilisateur"
        required
      />

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Mot de passe"
        required
      />

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

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
  name: "RegisterComponent",
  data() {
    return {
      valid: true,
      username: "",
      usernameRules: [
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
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  computed: {
    ...mapState(["windowSize", "isAuth"]),
  },
  methods: {
    ...mapActions(["userRegistering"]),
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.userRegistering({
          username: this.username,
          password: this.password,
          email: this.email,
        }).then((res) => {
          console.log("promise login", res);
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
