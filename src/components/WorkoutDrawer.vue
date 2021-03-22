<template>
  <div class="new-workout-drawer" :class="{ minimal: isMinimal }">
    <div class="new-workout-drawer__head">
      <svg
        class="btn-minify-drawer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 492.004 492.004"
        @click="toggleDrawer"
      >
        <path
          d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
        />
      </svg>
      <button class="btn btn-primary btn-save-workout" @click="finishWorkout">
        完成訓練
      </button>
      <h3>訓練中：{{ workoutName }}</h3>
    </div>
    <div class="new-workout-drawer__body">
      <div class="workout-card">
        <div class="workout-card__head">
          <h3 class="workout-card__name">{{ workoutName }}</h3>
        </div>
        <div class="workout-card__body">
          <div
            class="exercise"
            v-for="(exercise, index) in exercises"
            :key="index"
          >
            <div class="exercise__head">
              <h4>{{ exercise.name }}</h4>
              <svg
                height="30px"
                viewBox="-40 0 427 427.00131"
                xmlns="http://www.w3.org/2000/svg"
                @click="deleteExercise(index)"
              >
                <path
                  d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
                />
                <path
                  d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
                />
                <path
                  d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"
                />
                <path
                  d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
                />
              </svg>
            </div>

            <div class="exercise__body">
              <div class="exercise__body-title">
                <span>SET</span>
                <span>KG</span>
                <span>REPS</span>
              </div>
              <ul class="exercise__body-list">
                <li v-for="(set, i) in exercise.sets" :key="i">
                  <span>{{ i + 1 }}</span>
                  <span>{{ set.weight }}</span>
                  <span>{{ set.reps }}</span>
                  <span class="delete-set" @click="deleteSet(index, i)"
                    >❌</span
                  >
                </li>
              </ul>
            </div>
            <form class="exercise__add" @submit.prevent="addNewSet(index)">
              <span>new</span>
              <input
                type="number"
                class="weight"
                step="0.01"
                min="0"
                required
                v-model="newSet[index].weight"
              />
              <input
                type="number"
                class="reps"
                step="0.1"
                min="1"
                required
                v-model="newSet[index].reps"
              />
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>
      </div>
      <form @submit.prevent="addNewExercise" class="new-exercise-form">
        <input
          type="text"
          placeholder="請輸入動作名稱"
          required
          v-model="newExercise"
        />
        <input class="btn btn-primary" type="submit" value="加入" />
      </form>
      <button class="btn btn-warning btn-cancel-workout" @click="cancelWorkout">
        取消本次訓練
      </button>
    </div>
  </div>
</template>

<script>
import { auth, db } from "@/firebase/db.js";

export default {
  name: "WorkoutDrawer",
  props: {
    workoutName: String,
    startTime: String
  },
  data() {
    return {
      isMinimal: false,
      newExercise: "",
      exercises: [],
      newSet: []
    };
  },
  methods: {
    toggleDrawer() {
      this.isMinimal = !this.isMinimal;
    },
    addNewSet(exerciseIndex) {
      this.exercises[exerciseIndex].sets.push({
        reps: this.newSet[exerciseIndex].reps,
        weight: this.newSet[exerciseIndex].weight
      });
      this.newSet[exerciseIndex] = {
        reps: null,
        weight: null
      };
    },
    addNewExercise() {
      this.exercises.push({
        name: this.newExercise,
        unit: "kg",
        sets: []
      });
      this.newSet.push({
        reps: null,
        weight: null
      });
      this.newExercise = "";
    },
    deleteSet(exerciseIndex, setIndex) {
      this.exercises[exerciseIndex].sets.splice(setIndex, 1);
    },
    deleteExercise(exerciseIndex) {
      this.exercises.splice(exerciseIndex, 1);
      this.newSet.splice(exerciseIndex, 1);
    },
    resetWorkout() {
      this.$emit("reset-workout");
      this.isMinimal = false;
      this.newExercise = "";
      this.exercises.length = 0;
      this.newSet = [];
    },
    cancelWorkout() {
      const isLeaving = window.confirm("即將離開訓練，確定嗎？");
      if (!isLeaving) return;
      this.resetWorkout();
    },
    async finishWorkout() {
      const isFinished = window.confirm("即將完成訓練，確定嗎？");
      if (!isFinished) return;
      const date = new Date(+new Date() + 8 * 3600 * 1000)
        .toISOString()
        .substr(0, 10);
      const userid = auth.currentUser.uid;
      const workoutData = {
        name: this.workoutName,
        time: this.startTime,
        exercises: this.exercises
      };

      await db.doc(`Users/${userid}/Days/${date}`).set({});
      await db
        .collection(`Users/${userid}/Days/${date}/Workouts`)
        .add(workoutData);
      this.resetWorkout();
      this.$router.push({ name: "Diary" });
    }
  }
};
</script>

<style lang="scss" scoped>
.new-workout-drawer {
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  transition: all var(--transition-duration);
}
.new-workout-drawer.active {
  top: 0;
}
.new-workout-drawer.active.minimal {
  top: calc(100% - 60px);
}
.new-workout-drawer.active.minimal .btn-save-workout {
  display: none;
}
.new-workout-drawer.active.minimal .btn-minify-drawer {
  transform: rotate(-90deg);
}
.btn-minify-drawer {
  width: 30px;
  cursor: pointer;
  transform: rotate(90deg);
  transition: transform var(--transition-duration);
  fill: var(--primary-color);
}
.new-workout-drawer {
  display: grid;
  grid-template-rows: auto 1fr;
}
.new-workout-drawer__head {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  box-shadow: 0 3px 5px -5px #0008;
}
.new-workout-drawer__head h3 {
  display: none;
}
.new-workout-drawer.active.minimal .new-workout-drawer__head h3 {
  display: block;
}
.new-workout-drawer__body {
  padding: 15px;
  overflow: auto;
}
.new-workout-drawer__body::-webkit-scrollbar {
  display: none;
}
.new-exercise-form {
  display: flex;
  height: 40px;
  margin-bottom: 10px;
}
.new-exercise-form input[type="text"] {
  padding: 0 15px;
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.new-exercise-form input[type="submit"] {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  line-height: 20px;
}
.btn-cancel-workout {
  height: 40px;
  width: 100%;
}
</style>
