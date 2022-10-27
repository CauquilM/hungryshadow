<template>
  <v-container fluid class="grey lighten-5">
    <v-row no-gutters class="justify-center mt-15">
      <v-col cols="auto">
        <v-row no-gutters class="justify-center">
          <v-col cols="auto">
            <h2 class="text-lg-h5 text-h6 mb-15">
              {{ $t("pageNotFound.title") }}
            </h2>
          </v-col>
        </v-row>
        <v-row no-gutters class="justify-center">
          <v-col cols="auto">
            <v-img
              src="../assets/crycat-crying-cat.gif"
              max-height="250"
              max-width="250"
            />
          </v-col>
        </v-row>
        <v-row no-gutters class="justify-center">
          <v-col cols="auto">
            <v-btn color="blue" class="mt-10 white--text" :href="`/${$i18n.locale}`">{{ $t("pageNotFound.btn") }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
