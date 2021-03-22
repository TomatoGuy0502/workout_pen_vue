<template>
  <div class="page profile">
    <img src="@/assets/gym-with-cat.png" alt="gym-with-cat" />
    <template v-if="user">
      <div class="profile__user">
        <p class="profile__user__title">使用者資訊</p>
        <img class="profile__avatar" :src="user.photoURL" alt="avatar" />
        <h3>{{ user.displayName }}</h3>
      </div>
      <button class="profile__logout" @click="logout()">登出</button>
    </template>
    <template v-else>
      <div class="profile__welcome-text">
        <h2>Welcome</h2>
        <p>登入後即可開始紀錄您的運動</p>
      </div>
      <div class="profile__welcome-login">
        <p class="profile__welcome-login__title">使用以下方法登入</p>
        <button class="google-login">
          <img src="@/assets/btn_google_signin.png" @click="login()" alt="" />
        </button>
      </div>
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
      const isLogout = window.confirm("即將登出，確定嗎？");
      if (!isLogout) return;
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
  align-items: center;
}
.profile__user {
  position: relative;
  width: 100%;
  padding: 20px;
  border: 4px solid var(--primary-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  &__title {
    top: -20px;
    left: 5px;
    padding: 10px;
    background-color: #fff;
    position: absolute;
    white-space: nowrap;
    color: var(--primary-color);
  }
}
.profile__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #e0e0e0;
}
.profile__logout {
  margin-top: auto;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 50px;
  background-color: var(--warning-color);
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all var(--transition-duration);
  &:hover {
    background-color: #f3827d;
  }
}
.profile__welcome-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 2;
  h2 {
    color: var(--primary-color);
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  p {
    color: var(--primary-color);
  }
}
.profile__welcome-login {
  position: relative;
  padding: 20px;
  border: 4px solid var(--primary-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  &__title {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    background-color: #fff;
    position: absolute;
    white-space: nowrap;
    color: var(--primary-color);
  }
}
.google-login {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}
.google-login img {
  height: 60px;
}
</style>
