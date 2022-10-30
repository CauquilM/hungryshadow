<template>
  <p class="text-sm-h5 text-subtitle-1 black--text" v-if="!isHungry">
    😺 {{ $t("home.hunger.notHungry") }}
  </p>
  <p class="text-sm-h5 text-subtitle-1 black--text" v-else>
    😾 {{ $t("home.hunger.hungry") }}
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
  watch: {
    posts() {
      this.calculateHunger();
    },
  },
  mounted() {
    this.calculateHunger();
  },
  methods: {
    calculateHunger() {
      if (this.posts.length === 0) {
        return (this.isHungry = true);
      }

      var date = new Date().toLocaleDateString("fr");
      var dateToCompare = this.posts[this.posts.length - 1].date;
      if (dateToCompare === date) {
        var lastMeal = this.posts[this.posts.length - 1].time.substring(0, 2);
        var lastPortion = this.posts[this.posts.length - 1].portion;
        var portionTime;
        switch (lastPortion) {
          case "petite":
            portionTime = 2;
            break;
          case "une poignée":
            portionTime = 4;
            break;
          case "beaucoup":
            portionTime = 4;
            break;

          default:
            break;
        }
        var actualHour = new Date().getHours();
        if (actualHour >= portionTime && actualHour - lastMeal >= portionTime) {
          this.isHungry = true;
        } else {
          this.isHungry = false;
        }
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
