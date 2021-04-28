<template>
  <div id="app">
    <router-view></router-view>
    <div class="routing" v-if="this.$route.path !== '/'">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "./pages/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.routing {
  position: absolute;
  bottom:0px;
  width:100%;
}
</style>
