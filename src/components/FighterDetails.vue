<template>
  <div class="fighter-details col-12 justify-content-around spacing" v-if="fighter">
    <p>{{fighter.name}}</p>
    <img :src="fighter.imgUrl" />
    <p>{{fighter.health}}</p>
    <p>{{fighter.hits}}</p>
    <p>{{fighter.attacks}}</p>
  </div>
</template>

<script>
export default {
  name: "fighterDetails",
  data() {
    return {};
  },
  computed: {
    fighter() {
      return this.$store.state.activeFighter;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 300px;
}
.spacing {
  padding-top: 15px;
}
</style>
