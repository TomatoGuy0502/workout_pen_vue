<template>
  <div class="page profile">
    <img class="profile__avatar" src="#" alt="avatar" />
    <button class="google-login">
      <!-- <img src="./img/btn_google_signin.png" alt="" /> -->
    </button>
  </div>
</template>

<script>
export default {
  name: "Profile"
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
