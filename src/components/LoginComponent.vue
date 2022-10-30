<template>
  <div>
    <h1 v-if="isAuth">{{ $t("login.connected") }}</h1>
    <v-card v-else elevation="4" class="pa-lg-14 pa-md-11 pa-8">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="usernameRules"
          :label="$t('login.usernameLabel')"
          required
        />

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          :label="$t('login.passwordLabel')"
          required
        />

        <div>
          <v-chip
            class="mb-7"
            text-color="white"
            v-if="error == 'error'"
            color="red"
            >{{ $t("login.errors.wrongCredential") }}</v-chip
          >
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          {{ $t("login.loginBtn") }}
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> {{ $t("login.resetForm") }} </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginComponent",
  data() {
    return {
      error: "",
      showPassword: false,
      valid: true,
      username: "",
      usernameRules: [
        (v) => !!v || `${this.$t("login.errors.missingUsername")}`,
      ],
      password: "",
      passwordRules: [
        (v) => !!v || `${this.$t("login.errors.missingPassword")}`,
      ],
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
        console.log("err => ", {
          user: this.username,
          pass: this.password,
        });
        this.userConnection({
          username: this.username,
          password: this.password,
        })
          .then(() => {
            this.$router.push({ path: `/${this.$i18n.locale}` });
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
