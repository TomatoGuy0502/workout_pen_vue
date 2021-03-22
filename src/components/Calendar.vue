<template>
  <div class="calendar">
    <div class="calendar__head">
      <button class="btn_last" @click="changeMonth(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">
          <path
            d="M487.912,115.343H269.116V38.831c0-1.48-0.952-2.82-2.276-3.456c-1.324-0.64-2.952-0.464-4.116,0.448L1.464,242.991
			C0.548,243.719,0,244.827,0,245.999c0,1.176,0.528,2.284,1.444,3.012l261.224,207.164c0.7,0.548,1.54,0.832,2.392,0.832
			c0.568,0,1.248-0.124,1.78-0.38c1.324-0.64,2.276-1.988,2.276-3.464v-76.508h218.908c2.116,0,3.976-1.536,3.976-3.664v-253.46
			C492,117.407,490.032,115.343,487.912,115.343z"
          />
        </svg>
      </button>
      <div class="calendar__month">{{ year }} {{ month + 1 }}</div>
      <button class="btn_next" @click="changeMonth(1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004">
          <path
            d="M490.544,242.989L229.188,35.717c-1.16-0.916-2.708-1.088-4.04-0.448c-1.332,0.644-2.152,1.984-2.152,3.46v76.552H3.72
			c-2.124,0-3.72,2.064-3.72,4.184v253.592c0,2.128,1.592,3.664,3.72,3.664h219.276v76.552c0,1.476,0.82,2.824,2.152,3.464
			c0.528,0.252,1.092,0.38,1.664,0.38c0.848,0,1.692-0.284,2.384-0.832l261.36-207.268c0.916-0.728,1.448-1.836,1.448-3.016
			C492,244.833,491.468,243.717,490.544,242.989z"
          />
        </svg>
      </button>
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
.btn_last,
.btn_next {
  position: relative;
  padding: 5px 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  svg {
    display: flex;
    width: 16px;
    fill: #fff;
  }
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
