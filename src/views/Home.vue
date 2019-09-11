<template>
  <div class="home">
    <img alt="fight" src="../assets/stickeroid_5bf5459e293ac.png" class="img" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
.img {
  height: 150px;
}
</style>
