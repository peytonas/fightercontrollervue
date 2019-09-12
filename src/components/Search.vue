<template>
  <div class="search col-12">
    <button class="button" @click="getFighters()">
      <span style="color: #ffffff">
        <b>
          <i class="fas fa-dice-d20"></i>
        </b>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    getFighters() {
      //NOTE the first parameter is the name of the action in the store, the second parameter is data we want to send. this.query is the value that we typed into the input stored on the components local data
      this.$store.dispatch("getFighters", this.query);
    }
  },
  components: {}
};
</script>

<style scoped>
.button {
  background-color: #fc0c09;
  display: inline-block;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 9px #c70906;
}
.button:active {
  box-shadow: 0 5px #c70906;
  transform: translateY(4px);
}
</style>