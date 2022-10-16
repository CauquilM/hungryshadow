<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="username"
        :counter="10"
        :rules="nameRules"
        label="Nom d'utilisateur"
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
  name: "LoginComponent",
  data() {
    return {
      valid: true,
      username: "",
      nameRules: [(v) => !!v || "Un nom d'utilisateur est requis"],
      password: "",
      passwordRules: [(v) => !!v || "Un mot de passe est requis"],
    };
  },
  computed: {
    ...mapState(["isAuth"]),
  },
  methods: {
    ...mapActions(["userConnection"]),
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.userConnection({
          username: this.username,
          password: this.password,
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
