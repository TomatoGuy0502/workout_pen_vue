<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li
        data-to="home"
        :class="{ active: nowPage === 'home' }"
        @click="changePage"
      >
        <i class="fas fa-home"></i>
      </li>
      <li
        data-to="diary"
        :class="{ active: nowPage === 'diary' }"
        @click="changePage"
      >
        <i class="fas fa-calendar-alt"></i>
      </li>
      <li
        data-to="profile"
        :class="{ active: nowPage === 'profile' }"
        @click="changePage"
      >
        <i class="fas fa-user-circle"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      nowPage: "home"
    };
  },
  methods: {
    changePage(e) {
      const toPage = e.currentTarget.dataset.to;
      document.querySelector(`.${toPage}`).scrollIntoView();
      if (this.nowPage === toPage) return;
      this.nowPage = toPage;
    }
  }
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
