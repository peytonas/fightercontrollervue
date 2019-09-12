<template>
  <div class="fighter spacing">
    <p>{{fighter.name}}</p>
    <img :src="fighter.imgUrl" />
    <p>{{fighter.health}}</p>
    <p>{{fighter.hits}}</p>
    <p>{{fighter.attacks}}</p>
    <button class="btn btn-danger">punch</button>
  </div>
</template>

<script>
export default {
  name: "fighterDetails",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      fighterId: this.$route.params.fighterId
    };
    this.$store.dispatch("getFighterById", payload);
  },
  computed: {
    fighter() {
      return this.$store.state.activeFighter;
    }
  },
  methods: {
    delete() {
      this.$store.dispatch("deleteFighter", this.fighter._id);
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
