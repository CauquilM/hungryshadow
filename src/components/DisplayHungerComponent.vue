<template>
  <p class="text-lg-h5" v-if="!isHungry">😺 Shadow a été nourrie il y a peu</p>
  <p v-else>😾 Shadow peut avoir faim</p>
</template>
<script>
export default {
  name: "DisplayHungerComponent",
  data() {
    return {
      isHungry: false,
    };
  },
};
</script>
