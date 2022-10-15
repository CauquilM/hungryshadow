<template>
  <div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "RegisteringView",
  data() {
    return {
      auth: false,
    };
  },
  mounted() {
    
  },
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
  },
};
</script>
