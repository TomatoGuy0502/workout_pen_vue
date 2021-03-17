<template>
  <div class="page diary"></div>
</template>

<script>
export default {
  name: "Diary"
};
</script>

<style lang="scss" scoped>
.diary {
  overflow: auto;
}
.diary::-webkit-scrollbar {
  display: none;
}
</style>
