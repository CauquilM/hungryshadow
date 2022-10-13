<template>
  <div>
    <p class="text-lg-h4">Ajouter un repas</p>
    <v-row no-gutters justify="center">
      <v-col cols="6">
        <p>Quelle quantité ?</p>
        <div class="flex-center">
          <v-radio-group class="radio-group">
            <v-radio
              v-for="quantity in quantities"
              :key="quantity.index"
              :label="quantity.size"
              :value="quantity.size"
              :color="quantity.color"
              class="v-label.theme--light"
            ></v-radio>
          </v-radio-group>
        </div>
      </v-col>
      <v-col cols="6">
        <p>A quelle heure ?</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "FeedingCreatePost",
  data() {
    return {
      quantities: [
        { size: "Petite", color: "green darken-4" },
        { size: "Une poignée", color: "orange darken-4" },
        { size: "Beaucoup", color: "red darken-4" },
      ],
    };
  },
};
</script>
<style>
.radio-group{
    border: 2px solid black;
    padding: 15px 15px 0 15px;
}

.v-label.theme--light {
  color: black;
}
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
