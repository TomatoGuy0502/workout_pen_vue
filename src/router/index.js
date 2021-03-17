import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Diary from "@/pages/Diary.vue";
import Profile from "@/pages/Profile.vue";

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

export default router;
