<template>
  <nav class="navbar">
    <ul class="nav-links">
      <router-link to="/" tag="li">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/diary" tag="li">
        <i class="fas fa-calendar-alt"></i>
      </router-link>
      <router-link to="/profile" tag="li">
        <i class="fas fa-user-circle"></i>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.navbar {
  border-top: solid 2px #5db07599;
  box-shadow: 0px -3px 5px 0px #4a4a4a2b;
  z-index: 1;
}
.nav-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.nav-links li {
  position: relative;
  padding: 10px;
  text-align: center;
  font-size: 22px;
  color: var(--primary-color);
  cursor: pointer;
  transition: all var(--transition-duration);
}
.nav-links li.active {
  background-color: var(--primary-color);
  color: #fff;
}
.nav-links li:hover:not(.active) {
  background-color: var(--secondary-color);
  color: #fff;
}
</style>
