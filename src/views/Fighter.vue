<template>
  <div class="fighter">
    Fighter Deets
    <h1>{{fighter.name}}</h1>
    <img :src="fighter.imgUrl" alt />
    <h5>{{fighter.health}}</h5>
    <h5>{{fighter.hits}}</h5>
    <h5>{{fighter.attacks}}</h5>
    <!-- <button class="btn btn-danger" @click="delete">Delete</button> -->
  </div>
</template>


<script>
export default {
  name: "fighter",
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


<style scoped>
img {
  height: 500px;
}
</style>