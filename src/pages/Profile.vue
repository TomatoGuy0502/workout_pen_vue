<template>
  <div class="page profile">
    <template v-if="user">
      <img class="profile__avatar" :src="user.photoURL" alt="avatar" />
      <h3>{{ user.displayName }}</h3>
      <button @click="logout()">登出</button>
    </template>
    <template v-else>
      <button class="google-login">
        <img src="@/assets/btn_google_signin.png" @click="login()" alt="" />
      </button>
    </template>
  </div>
</template>

<script>
import { firebase, auth, db } from "@/firebase/db.js";

export default {
  name: "Profile",
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        const user = result.user;
        db.collection("Users")
          .doc(user.uid)
          .get()
          .then(doc => {
            if (!doc.data())
              db.collection("Users")
                .doc(user.uid)
                .set({ name: user.displayName });
          });
      });
    },
    logout() {
      auth.signOut();
    }
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$attrs.user;
    }
  }
};
</script>

<style lang="scss" scoped>
/* profile */
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
}
.google-login {
  background: none;
  border: none;
  padding: 0;
}
.google-login img {
  height: 60px;
}
</style>
