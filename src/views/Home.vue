<template>
  <v-container fluid class="grey lighten-5 fill-height">
    <v-row no-gutters class="align-center">
      <v-col cols="6">
        <DisplayHungerComponent class="text-center sticky-component" />
      </v-col>
      <v-col>
        <v-divider vertical class="divider" />
      </v-col>
      <v-col cols="5" class="text-center">
        <div v-if="isConnected">
          <FeedingCreatePost />
          <div v-if="posts.length > 0">
            <FeedingPostList />
          </div>
        </div>
        <h1 v-else class="text-lg-h4">
          Bienvenue sur l'application pour nourrir Shadow
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DisplayHungerComponent from "@/components/DisplayHungerComponent.vue";
import FeedingPostList from "@/components/FeedingPostList.vue";
import { mapState } from "vuex";
import FeedingCreatePost from "../components/FeedingCreatePost.vue";
export default {
  name: "Home",
  components: { DisplayHungerComponent, FeedingPostList, FeedingCreatePost },
  data: () => ({
    isConnected: true,
  }),
  computed: {
    ...mapState(["posts"]),
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
