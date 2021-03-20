<template>
  <div class="page diary">
    <ul>
      <li v-for="day in days" :key="day" @click="selectedDay = day">
        {{ day }}
      </li>
    </ul>
    <div>
      <ul>
        <li v-for="workout in workouts" :key="workout.time">
          <h3>{{ workout.name }}</h3>
          <div v-for="exercise in workout.exercises" :key="exercise.name">
            <h4>{{ exercise.name }}</h4>
            <div v-for="(set, index) in exercise.sets" :key="index">
              {{ set.weight }} - {{ set.reps }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/db.js";

export default {
  name: "Diary",
  data() {
    return {
      documents: [],
      test: [],
      workouts: [],
      selectedDay: ""
    };
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
    selectedDay: {
      handler(selectedDay) {
        console.log(selectedDay);
        this.$bind(
          "workouts",
          db.collection(
            `Users/vfcJGxRkLJNzDYXmB1gc66UCnXh2/Days/${selectedDay}/Workouts`
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
