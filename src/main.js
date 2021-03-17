import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./scss/style.scss";
import { firestorePlugin } from "vuefire";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
