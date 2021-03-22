import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Diary from "@/pages/Diary.vue";
import Profile from "@/pages/Profile.vue";
import { auth } from "@/firebase/db.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/diary",
    name: "Diary",
    component: Diary
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Profile" && !auth.currentUser) next({ name: "Profile" });
  else next();
});

export default router;
