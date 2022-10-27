<template>
  <div>
    <h1 v-if="isAuth">{{ $t("register.connected") }}</h1>
    <v-card v-else elevation="2" class="pa-lg-14 pa-md-11 pa-sm-8 pa-5">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="usernameRules"
          :label="$t('register.usernameLabel')"
          required
        />

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          :label="$t('register.passwordLabel')"
          required
        />

        <v-text-field
          v-model="email"
          :rules="emailRules"
          :label="$t('register.emailLabel')"
          required
        />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          {{ $t("register.registerBtn") }}
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          {{ $t("register.resetForm") }}
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "RegisterComponent",
  data() {
    return {
      valid: true,
      showPassword: false,
      username: "",
      usernameRules: [
        (v) => !!v || `${this.$t("register.errors.missingUsername")}`,
        (v) => (v && v.length <= 10) || `${this.$t("register.errors.shortUsername")}`,
      ],
      password: "",
      passwordRules: [
        (v) => !!v || `${this.$t("register.errors.missingPassword")}`,
        (v) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            v
          ) || `${this.$t("register.errors.ilegalPassword")}`,
      ],
      email: "",
      emailRules: [
        (v) => !!v || `${this.$t("register.errors.missingEmail")}`,
        (v) => /.+@.+\..+/.test(v) || `${this.$t("register.errors.illegalEmail")}`,
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
        })
          .then(() => {
            this.$router.push({ path: "/" });
          })
          .catch(() => {
            this.error = "error";
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
