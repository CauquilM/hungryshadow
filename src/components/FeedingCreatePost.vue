<template>
  <div>
    <p class="text-lg-h4">Ajouter un repas</p>

    <p>Quelle quantité ?</p>
    <div class="flex-center">
      <v-radio-group class="radio-group" v-model="portion">
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
    <div>
      <p>A quelle heure ?</p>
      <v-time-picker format="24hr" v-model="time"></v-time-picker>
      <p>Heure : {{ time }}</p>
    </div>
    <div>
      <p>Un commentaire ?</p>
      <v-textarea filled rows="3" auto-grow v-model="comment" />
    </div>
    <div>
      <v-btn @click="createPost({portion: portion, time: time, comment: comment, person: person})"> Ajouter </v-btn>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "FeedingCreatePost",
  data() {
    return {
      quantities: [
        { size: "petite", color: "green darken-4" },
        { size: "une poignée", color: "orange darken-4" },
        { size: "beaucoup", color: "red darken-4" },
      ],
      portion: null,
      person: "maman",
      time: null,
      comment: null
    };
  },
  methods: {
    ...mapActions(["createPost"]),
  },
};
</script>
<style>
.radio-group {
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
