<template>
  <div class="page diary">
    <Calendar @selecte-date="selectDate" :selectedDate="selectedDate" />
    <WorkoutCard
      v-for="workout in workouts"
      :key="workout.name"
      :workout="workout"
    />
  </div>
</template>

<script>
import { db } from "@/firebase/db.js";
import WorkoutCard from "@/components/WorkoutCard";
import Calendar from "@/components/Calendar";

export default {
  name: "Diary",
  data() {
    return {
      documents: [],
      test: [],
      workouts: [],
      selectedDate: new Date(+new Date() + 8 * 3600 * 1000)
        .toISOString()
        .substr(0, 10)
    };
  },
  components: {
    WorkoutCard,
    Calendar
  },
  methods: {
    selectDate(dateStr) {
      this.selectedDate = dateStr;
    }
  },
  computed: {
    days() {
      return this.documents.map(doc => doc.id);
    }
  },
  firestore: {
    documents: db.collection("Users/vfcJGxRkLJNzDYXmB1gc66UCnXh2/Days")
  },
  watch: {
    selectedDate: {
      immediate: true,
      handler(selectedDate) {
        this.$bind(
          "workouts",
          db.collection(
            `Users/vfcJGxRkLJNzDYXmB1gc66UCnXh2/Days/${selectedDate}/Workouts`
          )
        );
      }
    }
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
