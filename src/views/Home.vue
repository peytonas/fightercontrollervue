<template>
  <div class="fighterDetails container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="fight" src="../assets/stickeroid_5bf5459e293ac.png" class="img" />
        </h1>
      </div>
      <search />
    </div>
    <div>
      <FighterDetails />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FighterDetails from "@/components/FighterDetails.vue";
import Search from "@/components/Search.vue";

export default {
  name: "fighterDetails",
  components: {
    Search,
    FighterDetails
  }
};
</script>

<style>
.img {
  height: 150px;
}
</style>
