<template>
  <p class="" v-if="!isHungry">😺 Shadow a été nourrie il y a peu</p>
  <p v-else>😾 Shadow peut avoir faim</p>
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
