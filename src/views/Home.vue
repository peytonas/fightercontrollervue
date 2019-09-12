<template>
  <div class="home container-fluid">
    <div class="row">
      <fighterDetails
        v-for="fighterDetails in home"
        :fighterProp="fighterDetails"
        :key="fighterDetails._id"
      />
      <div class="col-12 pt-5">
        <img alt="fight" src="../assets/stickeroid_5bf5459e293ac.png" class="img" />
      </div>
    </div>
    <search />
  </div>
</template>

<script>
// @ is an alias to /src
import FighterDetails from "@/components/FighterDetails.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getFighters");
  },
  methods: {},
  computed: {
    home() {
      return this.$store.state.home;
    }
  },
  components: {
    FighterDetails
  }
};
</script>

<style>
.img {
  height: 100px;
}
</style>
