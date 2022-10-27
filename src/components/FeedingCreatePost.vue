<template>
  <div>
    <p class="text-h4 text-center mt-10">{{$t('home.createAPost.title')}}</p>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="my-5">
        <v-col>
          <p>{{$t('home.createAPost.quantity')}}</p>
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
              class="v-label.theme--light mb-7"
            />
          </v-radio-group>
        </v-col>
        <v-col>
          <div>
            <p>{{$t('home.createAPost.time')}}</p>
            <v-time-picker format="24hr" v-model="time"></v-time-picker>
          </div>
        </v-col>
      </v-row>
      <div>
        <p>{{$t('home.createAPost.comment')}}</p>
        <v-textarea filled rows="3" auto-grow v-model="comment" />
      </div>
      <div>
        <v-chip
          class="mb-7"
          text-color="white"
          v-if="error == 'form-error'"
          color="red"
          >{{$t('home.createAPost.errors.formError')}}</v-chip
        >
        <v-chip
          class="mb-7"
          text-color="white"
          v-if="error == 'api-error'"
          color="red"
          >{{$t('home.createAPost.apiError')}}</v-chip
        >
        <v-chip
          class="mb-7"
          text-color="white"
          v-if="error == 'success'"
          color="green"
          >{{$t('home.createAPost.success')}}</v-chip
        >
      </div>
      <div>
        <v-btn color="blue" class="white--text" @click="validate()">
          {{$t('home.createAPost.btnAdd')}}
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
      time: null,
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
        this.createPost({
          portion: this.portion,
          time: this.time,
          comment: this.comment,
          person: this.username,
          date: new Date().toLocaleDateString("fr"),
        })
          .then(() => {
            this.error = "success";
          })
          .catch(() => {
            this.error = "api-error";
          });
      } else {
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
