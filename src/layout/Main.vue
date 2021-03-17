<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "Main"
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
