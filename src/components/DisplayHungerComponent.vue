<template>
  <p class="text-sm-h5 black--text" v-if="!isHungry">😺 Shadow a été nourrie il y a peu</p>
  <p class="text-sm-h5 text-subtitle-1 black--text" v-else >😾 Shadow peut avoir faim</p>
</template>
<script>
export default {
  name: "DisplayHungerComponent",
  data() {
    return {
      isHungry: true,
    };
  },
};
</script>
<style scoped >
  .v-application p{
    margin-bottom: 0;
  }
</style>
