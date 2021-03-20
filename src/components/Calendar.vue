<template>
  <div class="calendar">
    <div class="calendar__head">
      <button class="btn_last" @click="changeMonth(-1)">🡄</button>
      <div class="calendar__month">{{ year }} {{ month + 1 }}</div>
      <button class="btn_next" @click="changeMonth(1)">🡆</button>
    </div>
    <div class="calendar__day">
      <span>SUN</span>
      <span>MON</span>
      <span>TUE</span>
      <span>WED</span>
      <span>THU</span>
      <span>FRI</span>
      <span>SAT</span>
    </div>
    <div class="calendar__date">
      <span
        v-for="(day, index) in new Array(days)"
        :key="index"
        class="date_cell"
        :class="{
          today: isThisMonth && index === new Date().getDate() - 1,
          selected: isSelectedDate(index + 1)
        }"
        :style="{ gridColumn: index === 0 ? firstDay : '' }"
        @click="selectDate(index + 1)"
        >{{ index + 1 }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedDate: String
  },
  data() {
    return {
      year: null,
      month: null
    };
  },
  created() {
    const date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
  },
  methods: {
    selectDate(date) {
      const dateStr = `${this.year}-${(this.month + 1)
        .toString()
        .padStart(2, 0)}-${date}`;
      this.$emit("selecte-date", dateStr);
    },
    changeMonth(n) {
      this.month += n;
      if (this.month >= 12) {
        this.year++;
        this.month = 0;
      } else if (this.month < 0) {
        this.year--;
        this.month = 11;
      }
    },
    isSelectedDate(date) {
      return (
        this.isSelectedMonth &&
        parseInt(this.selectedDate.substr(8), 10) === date
      );
    }
  },
  computed: {
    days() {
      // 下一個月的0號 也就是這月的最後一天
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    firstDay() {
      // 本月第一天是星期幾(0~6 = 日~六)
      // 0放在column_1、1放在column_2...
      return new Date(this.year, this.month, 1).getDay() + 1;
    },
    isThisMonth() {
      return (
        this.year === new Date().getFullYear() &&
        this.month === new Date().getMonth()
      );
    },
    isSelectedMonth() {
      return (
        this.year === new Date(this.selectedDate).getFullYear() &&
        this.month === new Date(this.selectedDate).getMonth()
      );
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  padding: 5px 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: var(--primary-color);
}
.calendar {
  background-color: #fff;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  &__head {
    display: flex;
    font-size: 28px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-family: Pacifico, sans-serif;
  }
  &__day {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  &__date {
    font-family: Pacifico, sans-serif;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 36px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      cursor: pointer;
      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }
}

.today {
  background-color: var(--primary-color);
}
.selected {
  border: 2px solid var(--secondary-color);
}
</style>
