<template>
  <div class="co-header">
    <router-link :to="{ name: 'Article' }">
      <h1>CHALENGE FOLHA DIRIGIDA</h1>
    </router-link>
    <div class="card-container" v-on:click="toggleCard()">
      <i class="el-icon-s-goods card-icon"></i>
      <card :toggle="cToggle" />
    </div>
  </div>
</template>

<script>
import Card from "./StoreCard.vue";
export default {
  name: "CoHeader",
  components: {
    Card
  },
  data() {
    return {
      cToggle: false
    };
  },
  methods: {
    toggleCard() {
      this.cToggle = !this.cToggle;
      return this.cToggle;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.co-header {
  height: 100px;
  width: 100%;
  border: 1px solid red;
  position: relative;
  margin-bottom: 20px;
}
.co-header h1 {
  width: 90%;
  font-size: 1.8rem;
}
.co-header .card-container {
  position: absolute;
  /* height: 50px;
  width: 60px; */
  height: 620px;
  width: 500px;
  right: 1%;
  top: 10px;
  transition: height 0.15s ease-out;
  overflow: hidden;
}
.co-header .card-container:hover {
  /* height: 620px;
  width: 500px;
  transition: height 0.25s ease-in; */
}
.co-header .card-icon {
  font-size: 50px;
  position: absolute;
  right: 1%;
  top: 10px;
}
.co-header .card-icon:hover {
  cursor: pointer;
}
.co-header .card-container .card {
  top: 60px;
}
@media only screen and (max-width: 500px) {
  .co-header .card-container:hover {
    width: 90%;
  }
}
</style>
