<template>
  <main>
    <Home />
    <Diary />
    <Profile />
  </main>
</template>

<script>
import Home from "@/pages/Home.vue";
import Diary from "@/pages/Diary.vue";
import Profile from "@/pages/Profile.vue";

export default {
  name: "Main",
  components: {
    Home,
    Diary,
    Profile
  }
};
</script>

<style lang="scss">
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
