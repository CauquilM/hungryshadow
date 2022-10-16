<template>
  <p class="text-sm-h5 text-subtitle-1 black--text" v-if="!isHungry">
    😺 Shadow a été nourrie il y a peu
  </p>
  <p class="text-sm-h5 text-subtitle-1 black--text" v-else>
    😾 Shadow peut avoir faim
  </p>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "DisplayHungerComponent",
  data() {
    return {
      isHungry: true,
    };
  },
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    if (this.posts.length !== 0) {
      var lastMeal = this.posts[this.posts.length - 1].time.substring(0, 2);
      var actualHour = new Date().getHours();
      if (actualHour >= 4 && actualHour - lastMeal >= 4) {
        this.isHungry = true;
      } else {
        this.isHungry = false;
      }
    }
  },
  watch: {
    posts() {
      if (this.posts.length !== 0) {
        // var lastMeal = this.posts[this.posts.length - 1].time.substring(0, 2);
        // var actualHour = new Date().getHours();
        // var calc = actualHour - lastMeal;
        console.log("Debug : ");
        // if (actualHour >= 4 && actualHour - lastMeal >= 4) {
        //   this.isHungry = true;
        // } else {
        //   this.isHungry = false;
        // }
      }
    },
  },
};
</script>
<style scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
