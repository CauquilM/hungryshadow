<template>
  <v-speed-dial
    v-model="fab"
    direction="top"
    transition="slide-y-reverse-transition"
    fixed
    bottom
    right
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-1" dark fab>
        <v-icon v-if="fab"> mdi-close </v-icon>
        <v-icon v-else> {{ $i18n.locale }} </v-icon>
      </v-btn>
    </template>
    <v-btn @click="setLocale('fr')" fab color="blue darken-2">
      <v-icon class="white--text">FR</v-icon>
    </v-btn>
    <v-btn
      @click="setLocale('en')"
      fab
      class="white--text"
      color="blue darken-3"
    >
      <v-icon class="white--text">EN</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
export default {
  name: "LanguageSwitch",
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>
