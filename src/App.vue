<template>
  <div id="app">
    <co-header />
    <router-view></router-view>
  </div>
</template>

<script>
import CoHeader from "./components/CoHeader.vue";

export default {
  name: "App",
  components: {
    CoHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
