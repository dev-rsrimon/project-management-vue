<template>
  <div class="d-header">
    <div class="d-header__search-bar">
      <input
        type="text"
        class="d-header__search-bar-input tork-form-control"
        placeholder="Search"
      />
      <span class="d-header__search-bar-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </span>
    </div>
    <div class="d-header__right-nav">
      <div class="d-header__notifications">
        <button
          class="tork-btn tork-p-0"
          :class="notificationStatus ? 'active' : ''"
          @click="showNotification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
            />
          </svg>
        </button>
        <!-- Notification list -->
        <ul
          :class="notificationStatus ? 'active' : ''"
          class="d-header__notifications__list"
        >
          <li class="d-header__notifications__list-item">
            <div class="d-header__notifications__list-item__contents">
              <h5 class="title">Project Alice</h5>
              <span class="sub-title">Phase 1 development</span>
            </div>
            <span class="d-header__notifications__list-item__date">
              10 min
            </span>
          </li>
          <li class="d-header__notifications__list-item">
            <div class="d-header__notifications__list-item__contents">
              <h5 class="title">Project Alice</h5>
              <span class="sub-title">Phase 1 development</span>
            </div>
            <span class="d-header__notifications__list-item__date">
              2 hrs
            </span>
          </li>
          <li class="d-header__notifications__list-item">
            <div class="d-header__notifications__list-item__contents">
              <h5 class="title">Project Alice</h5>
              <span class="sub-title">Phase 3 development</span>
            </div>
            <span class="d-header__notifications__list-item__date">
              2.5 hrs
            </span>
          </li>
        </ul>
      </div>
      <div class="d-header__user-nav">
        <div @click="showProfileMenu" class="d-header__user-nav-img">
          <img src="@/assets/images/user.png" alt="user" />
        </div>
        <ul
          :class="profileStatus ? 'active' : ''"
          class="d-header__notifications__list"
        >
          <li class="d-header__user-profile d-header__notifications__list-item">
            <div class="d-header__user-nav-img">
              <img src="@/assets/images/user.png" alt="user" />
            </div>
            <div class="info">
              <h5 class="title">Nahiya Khan</h5>
              <span class="sub-title">nahiyankhan@gmail.com</span>
            </div>
          </li>
          <li class="d-header__notifications__list-item">
            <router-link to="/profile">My Profile</router-link>
          </li>
          <li class="d-header__notifications__list-item">
            <router-link to="/profile">
              My Projects
              <span class="badge">05</span>
            </router-link>
          </li>
          <li class="d-header__notifications__list-item">
            <router-link to="/profile">My Subscriptions</router-link>
          </li>
          <li class="d-header__notifications__list-item">
            <router-link to="/profile">My Statement</router-link>
          </li>
          <li class="d-header__notifications__list-item">
            <router-link to="/profile">Account Settings</router-link>
          </li>
          <li class="d-header__notifications__list-item">
            <router-link to="/profile">Log Out</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const notificationStatus = ref(false);
    const profileStatus = ref(false);

    function showNotification() {
      notificationStatus.value = !notificationStatus.value;
      profileStatus.value = false;
    }

    function showProfileMenu() {
      notificationStatus.value = false;
      profileStatus.value = !profileStatus.value;
    }

    return {
      notificationStatus,
      showNotification,
      showProfileMenu,
      profileStatus
    };
  }
};
</script>

<style lang="scss" scoped>
.d-header {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: $white-color;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 20px $shadow-color;

  &__right-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__search-bar {
    position: relative;

    &-input {
      padding: 7px 20px 7px 50px;
      border-color: transparent;
      background-color: $light-color;
      border-radius: 30px;
      width: 180px;
      transition: 0.2s ease-in;

      &:focus {
        width: 100%;
      }
    }

    &-icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;

      svg {
        width: 16px;
        height: auto;
        fill: $secondary-color;
      }
    }
  }

  &__notifications {
    position: relative;
    .tork-btn {
      margin: 0 20px;
      display: flex;
      align-items: center;

      svg {
        width: 22px;
        height: auto;
        transition: 0.1s ease-in;
        pointer-events: none;
      }

      &:hover svg,
      &.active svg {
        fill: $primary-color;
      }
    }

    &__list {
      position: absolute;
      width: 280px;
      right: 0;
      top: 70px;
      background: $white-color;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 7px 24px $shadow-color-2;
      transition: 0.3s ease-in;
      visibility: hidden;
      z-index: 999;

      &::before {
        content: "";
        width: 15px;
        height: 15px;
        background-color: $white-color;
        position: absolute;
        right: 25px;
        top: -7px;
        transform: rotate(-45deg);
      }

      &.active {
        top: 40px;
        visibility: visible;
      }

      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: transparent;
        border-radius: 5px;
        margin: 2px 0;
        cursor: pointer;
        transition: 0.1s ease-in-out;

        .title {
          font-size: 0.875rem;
          font-weight: 500;
          color: $dark-color;
        }

        a {
          font-size: 0.875rem;
          font-weight: 400;
          color: $secondary-color;
          text-transform: capitalize;

          .badge {
            background-color: $primary-color;
            color: $white-color;
            font-size: 0.7rem;
            padding: 0 4px;
            border-radius: 4px;
            margin-left: 5px;
          }
        }

        .sub-title,
        &__date {
          font-size: 0.75rem;
          font-weight: 400;
          color: $secondary-color;
        }

        &__date {
          background-color: $light-color;
          padding: 0 5px;
          border-radius: 3px;
        }

        &:hover {
          background-color: $light-color;

          a {
            color: $primary-color;
          }
        }
      }
    }
  }

  &__user-nav {
    position: relative;

    .d-header__notifications__list {
      right: -14px;
      top: 80px;

      .d-header__user-profile {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: $light-color;
        overflow: hidden;

        .info {
          width: calc(100% - 50px);
          margin-left: 5px;
        }

        .d-header__user-nav-img {
          border-color: $primary-color;
        }
      }

      &.active {
        top: 60px;
        visibility: visible;
      }
    }
  }

  &__user-nav-img {
    width: 45px;
    height: 45px;
    border: 1px solid transparent;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 1px solid $white-color;
      border-radius: 50%;
    }

    &:hover {
      border-color: $primary-color;
    }
  }
}
</style>
