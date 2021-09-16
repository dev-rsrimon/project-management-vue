<template>
  <div class="calendar">
    <div class="calendar__header">
      <h5 class="calendar__header-title">Jan 2021</h5>
      <div class="calendar__header__nav">
          <button class="calendar__header__nav-btn tork-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
          <button class="calendar__header__nav-btn tork-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="calendar__nav-btnevenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
          </button>
      </div>
    </div>

    <div class="calendar__inner">
      <div class="calendar__row">
        <div class="col day">Mon</div>
        <div class="col day">Tue</div>
        <div class="col day">Wed</div>
        <div class="col day">Thu</div>
        <div class="col day">Fri</div>
        <div class="col day">Sat</div>
        <div class="col day">Sun</div>
      </div>
      <div class="calendar__row">
        <div class="col date empty-day">29</div>
        <div class="col date empty-day">30</div>
        <div class="col date empty-day">31</div>
        <div class="col date">1</div>
        <div class="col date">2</div>
        <div class="col date">3</div>
        <div class="col date">4</div>
      </div>
      <div class="calendar__row">
        <div class="col date">5</div>
        <div class="col date">6</div>
        <div class="col date">7</div>
        <div class="col date">8</div>
        <div class="col date">9</div>
        <div class="col date">10</div>
        <div class="col date">11</div>
      </div>
      <div class="calendar__row">
        <div class="col date">12</div>
        <div class="col date">13</div>
        <div class="col date active">14</div>
        <div class="col date">15</div>
        <div class="col date">16</div>
        <div class="col date">17</div>
        <div class="col date">18</div>
      </div>
      <div class="calendar__row">
        <div class="col date">19</div>
        <div class="col date">20</div>
        <div class="col date">21</div>
        <div class="col date">22</div>
        <div class="col date booked">23</div>
        <div class="col date">24</div>
        <div class="col date">25</div>
      </div>
      <div class="calendar__row">
        <div class="col date">26</div>
        <div class="col date">27</div>
        <div class="col date">28</div>
        <div class="col date">29</div>
        <div class="col date">30</div>
        <div class="col date empty-day">1</div>
        <div class="col date empty-day">2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  padding: 20px;
  background-color: $white-color;
  border-radius: 15px;
  box-shadow: 0 0 20px $shadow-color;
  margin-top: 30px;

  &__header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-title {
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: capitalize;
      color: $dark-color;

      span {
        color: $dark-color + unquote("a6");
        font-size: 0.875rem;
        font-weight: 500;
        margin-left: 5px;
      }
    }

    &__nav-btn {
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: $primary-color;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: .2s;

        &:hover {
            box-shadow: 0 0 10px $shadow-color-2;
        }

        &:not(:first-child) {
            margin-left: 20px;
        }
        
        svg {
            fill: $white-color;
        }
    }
    
  }

  //   calendar

  &__row {
    width: 100%;

    .col {
      display: inline-flex;
      width: calc(100% / 7 - 10px);
      justify-content: center;
      align-items: center;
      margin: 5px;
      font-size: 0.875rem;
    }

    .day {
      font-weight: 500;
      text-transform: uppercase;
    }

    .date {
      border-radius: 5px;
      padding: 8px 0;
      cursor: pointer;
      transition: 0.1s;
      position: relative;

      &:hover,
      &.active {
        background-color: $primary-color;
        color: $white-color;
      }
    }

    .empty-day {
      color: $dark-color + unquote("80");
      pointer-events: none;
    }

    .date.booked::after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      display: block;
      background: $primary-color;
      bottom: 0;
      border-radius: 50%;
    }
  }
}
</style>
