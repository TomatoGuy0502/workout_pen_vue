<template>
  <div class="page diary"></div>
</template>

<script>
import { db } from "@/firebase/db.js";

export default {
  name: "Diary",
  data() {
    return {
      documents: [],
      test: []
    };
  },
  computed: {
    days() {
      return this.documents.map(doc => doc.id);
    }
  },
  firestore: {
    documents: db.collection("Users/vfcJGxRkLJNzDYXmB1gc66UCnXh2/Days")
  }
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
