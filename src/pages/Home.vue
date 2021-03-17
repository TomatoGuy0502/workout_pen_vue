<template>
  <div class="page home">
    <form @submit.prevent="startWorkout" class="new-workout-form">
      <input
        class="new-workout-form__input"
        type="text"
        placeholder="EX：晚間訓練"
        v-model.trim="workoutName"
        required
        :disabled="isTraining"
      />
      <input
        class="btn btn-primary new-workout-form__add"
        type="submit"
        :value="isTraining ? '訓練中' : '開始新的訓練'"
      />
    </form>
    <WorkoutDrawer
      :workout-name="workoutName"
      :start-time="startTime"
      :class="{ active: isTraining }"
      @cancel-workout="cancelWorkout"
    />
  </div>
</template>

<script>
import WorkoutDrawer from "@/components/WorkoutDrawer";
import { db } from "@/db.js";

export default {
  name: "Home",
  components: {
    WorkoutDrawer
  },
  data() {
    return {
      isTraining: false,
      workoutName: "",
      startTime: "",
      documents: []
    };
  },
  methods: {
    startWorkout() {
      if (this.isTraining) return;
      this.isTraining = true;
      this.startTime = new Date().toISOString();
    },
    cancelWorkout() {
      this.isTraining = false;
      this.workoutName = "";
    }
  },
  firestore: {
    documents: db.collection(
      "Users/vfcJGxRkLJNzDYXmB1gc66UCnXh2/Days/2020-07-26/Workouts"
    )
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-workout-form {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  width: 360px;
}
.new-workout-form > * {
  width: 100%;
}
.new-workout-form__input {
  height: 40px;
  margin-bottom: 15px;
  padding: 0 15px;
}
</style>
