<template>
  <div class="fighter col-3 border rounded spacing" @click="viewFighter()">
    <p>{{fighterProp.name}}</p>
    <!-- <img :src="fighterProp.imgUrl" /> -->
    <p>{{fighterProp.health}}</p>
    <p>{{fighterProp.hits}}</p>
    <p>{{fighterProp.attacks}}</p>
  </div>
</template>

<script>
export default {
  name: "fighter",
  props: ["fighterProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewFighter() {
      this.$router.push({
        name: "fighter",
        params: { fighterId: this.fighterProp._id }
      });
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 200px;
}
.spacing {
  padding-top: 15px;
}
</style>
