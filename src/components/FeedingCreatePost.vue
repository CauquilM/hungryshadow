<template>
  <div>
    <p class="text-h4">Ajouter un repas</p>

    <p>Quelle quantité ?</p>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex-center">
        <v-radio-group
          class="radio-group"
          required
          v-model="portion"
          :rules="[(v) => !!v || 'Vous devez choisir une portion!']"
        >
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
      </div>
      <div>
        <p>Un commentaire ?</p>
        <v-textarea filled rows="3" auto-grow v-model="comment" />
      </div>
      <div>
        <v-chip
          class="mb-7"
          text-color="white"
          v-if="error == 'form-error'"
          color="red"
          >Vérifiez que le formulaire est bien rempli</v-chip
        >
        <v-chip
          class="mb-7"
          text-color="white"
          v-if="error == 'api-error'"
          color="red"
          >Une erreur a eu lieu avec l'api</v-chip
        >
        <v-chip
          class="mb-7"
          text-color="white"
          v-if="error == 'success'"
          color="green"
          >Post crée avec succès</v-chip
        >
      </div>
      <div>
        <v-btn color="blue" class="white--text" @click="validate()">
          Ajouter
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FeedingCreatePost",
  data() {
    return {
      valid: true,
      quantities: [
        { size: "petite", color: "green darken-4" },
        { size: "une poignée", color: "orange darken-4" },
        { size: "beaucoup", color: "red darken-4" },
      ],
      portion: false,
      time: false,
      comment: null,
      error: "",
    };
  },
  computed: {
    ...mapState(["username"]),
  },
  methods: {
    ...mapActions(["createPost"]),
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() && this.time) {
        console.log("ok");
        createPost({
              portion: portion,
              time: time,
              comment: comment,
              person: username,
              date: new Date().toLocaleDateString('fr'),
            })
        this.error = "success";
      } else {
        console.log("no");
        this.error = "form-error";
      }
    },
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
