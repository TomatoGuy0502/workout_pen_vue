import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./scss/style.scss";
import { firestorePlugin } from "vuefire";
import router from "./router";
import { auth } from "@/firebase/db.js";

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

let hasInited = false;

auth.onAuthStateChanged(() => {
  if (!hasInited) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

    hasInited = true;
  }
});
