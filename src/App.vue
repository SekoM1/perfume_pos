<template>
  <Navbar />

  <router-view ></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {Navbar,},
  data(){
    return{
      isLoggedIn: false
    }
  }
};
</script>

<style>

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-size:large;
  font-weight: 700;
  height: 100%;
  background: rgba(245, 245, 220, 0.425);
}

</style>
