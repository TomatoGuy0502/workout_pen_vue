<template>
  <div id="app" class="container">
    <Header />
    <main>
      <router-view :user="user" />
    </main>
    <Navbar />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Navbar from "./layout/Navbar.vue";
import { auth } from "./firebase/db.js";

export default {
  name: "App",
  components: {
    Header,
    Navbar
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    // listen for auth status changes
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("user logged in: ", user);
      } else {
        console.log("user logged out", user);
      }
      this.user = user;
    });
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
main {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  scroll-behavior: smooth;
}
main::-webkit-scrollbar {
  display: none;
}
.page {
  position: relative;
  width: 100%;
  flex-shrink: 0;
  padding: 15px;
}
</style>
