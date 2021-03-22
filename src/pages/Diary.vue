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
      workouts: [],
      selectedDate: ""
    };
  },
  components: {
    WorkoutCard,
    Calendar
  },
  created() {
    this.selectedDate = new Date(+new Date() + 8 * 3600 * 1000)
      .toISOString()
      .substr(0, 10);
  },
  computed: {
    dbStr() {
      return `Users/${this.$attrs.user.uid}/Days/${this.selectedDate}/Workouts`;
    }
  },
  methods: {
    selectDate(dateStr) {
      this.selectedDate = dateStr;
    }
  },
  watch: {
    dbStr: {
      handler(dbStr) {
        this.$bind("workouts", db.collection(dbStr));
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
