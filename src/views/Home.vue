<template>
  <v-container fluid class="grey lighten-5 fill-height">
    <v-row no-gutters class="align-center">
      <v-col v-if="windowSize > 769" cols="sm-6">
        <DisplayHungerComponent
          v-if="windowSize > 768"
          class="text-center sticky-component"
        />
      </v-col>
      <v-col cols="auto">
        <v-divider v-if="windowSize > 769" vertical class="divider" />
      </v-col>
      <v-spacer />
      <v-col :cols="windowSize < 768 ? 10 : 5">
        <div v-if="isAuth">
          <FeedingCreatePost :class="windowSize < 768 ? 'text-center' : ''" />
          <div v-if="posts.length > 0">
            <FeedingPostList class="text-center mt-15" />
          </div>
        </div>
        <div v-else>
          <h1 class="text-lg-h4 mb-15">
            Bienvenue sur l'application pour nourrir Shadow
          </h1>
          <h2 class="text-lg-h5 mb-15">
            Inscrivez vous dès maintenant pour pouvoir ajouter du contenu
          </h2>
          <v-btn color="blue" href="/registering" class="white--text"
            >S'inscrire</v-btn
          >
        </div>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import DisplayHungerComponent from "@/components/DisplayHungerComponent.vue";
import FeedingPostList from "@/components/FeedingPostList.vue";
import { mapActions, mapState } from "vuex";
import FeedingCreatePost from "../components/FeedingCreatePost.vue";
export default {
  name: "Home",
  components: { DisplayHungerComponent, FeedingPostList, FeedingCreatePost },
  data: () => ({
    isConnected: true,
  }),
  mounted() {
    this.getPosts();
  },
  computed: {
    ...mapState(["posts", "windowSize", "isAuth"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
};
</script>
<style>
.divider {
  border-width: 4px !important;
  border-color: black !important;
  position: fixed;
  top: 0;
}

.sticky-component {
  width: 400px;
  position: fixed;
  top: 50%;
  z-index: 1;
  /* centering */
  left: 25%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
</style>
