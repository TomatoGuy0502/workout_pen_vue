<template>
  <div id="app" class="container">
    <Header />
    <Main />
    <Navbar />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Main from "./layout/Main.vue";
import Navbar from "./layout/Navbar.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Navbar
  }
};
</script>

<style lang="scss">
.container {
  max-width: 425px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #fff;
}
</style>
