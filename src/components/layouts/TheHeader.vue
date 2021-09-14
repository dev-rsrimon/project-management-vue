<template>
  <header class="header_section">
    <!-- Top navbar -->
    <div class="top_navbar">
      <div class="tork-container">
        <div class="tork-row">
          <div class="tork-col-md-8 tork-col-8">
            <div class="contact_info tork-d-flex">
              <a href="#"
                ><span class="icon-phone-square"></span> +0880 18 44 25 44 10</a
              >
              <a href="#" class="email"
                ><span class="icon-envelope-open"></span> info@domain.com</a
              >
            </div>
          </div>
          <div class="tork-col-md-4 tork-col-4">
            <div class="social_link tork-d-flex tork-justify-end">
              <a href="#"><span class="icon-facebook-square"></span></a>
              <a href="#"><span class="icon-twitter-square"></span></a>
              <a href="#"><span class="icon-linkedin"></span></a>
              <a href="#"><span class="icon-instagram-square"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main nav -->
    <!-- Main nav -->
    <nav class="main_nav">
      <div class="tork-container">
        <div class="tork-row">
          <div class="tork-col-lg-3 tork-col-sm-4 tork-col-8">
            <div class="logo">
              <router-link to="/">
                <img :src="logo" alt="Logo" />
              </router-link>
            </div>
          </div>
          <div class="tork-col-lg-9 tork-col-sm-8 tork-col-4">
            <!-- show togle button -->
            <button class="toggle_menu tork-btn" @click.self="showMobileMenu">
              &#9776;
            </button>

            <!-- Menu items -->
            <div
              :class="
                `menu_items ${activeMobileMenu ? 'activeMobileMenu' : ''}`
              "
            >
              <!-- Close mobile menu toggle-->
              <div class="mobile_menu_close_btn tork-text-right">
                <button class="tork-btn" @click.self="showMobileMenu">
                  &#10006;
                </button>
              </div>
              <ul
                class="menu_items_inner tork-d-flex tork-justify-end tork-items-center"
              >
                <div
                  v-for="(menuItem, index) in menusList"
                  :key="`menu_${index}`"
                >
                  <!-- simple dropdown -->
                  <li
                    v-if="menuItem.isDropdown"
                    class="nav_link dropdown tork-position-relative"
                  >
                    {{ menuItem.title }} <span>&#10010;</span>
                    <ul class="dropdown_menu">
                      <li
                        v-for="(dropdown, index) in menuItem.dropdownItems"
                        :key="`dropdown_${index}`"
                      >
                        <router-link :to="dropdown.url">{{
                          dropdown.title
                        }}</router-link>
                      </li>
                    </ul>
                  </li>

                  <li
                    v-else-if="menuItem.isMegaMenu"
                    class="nav_link mega_dropdown"
                  >
                    {{ menuItem.title }}

                    <span>&#10010;</span>
                    <div class="mega_menu">
                      <div class="tork-row">
                        <div
                          v-for="(megaMenuColumn,
                          index) in menuItem.megaMenuItems"
                          :key="`mega_${index}`"
                          :class="megaMenuColumn.columnSize"
                        >
                          <ul>
                            <h4 v-if="megaMenuColumn.columnTitle">
                              {{ megaMenuColumn.columnTitle }}
                            </h4>
                            <li
                              v-for="(megaMenuItem,
                              index) in megaMenuColumn.columnItems"
                              :key="`mega_item_${index}`"
                              class="mega_menu_item"
                            >
                              <router-link :to="megaMenuItem.url">
                                <div class="tork-d-flex">
                                  <div
                                    v-if="megaMenuItem.badge"
                                    class="icon_inner"
                                  >
                                    <span class="icon">{{
                                      megaMenuItem.badge
                                    }}</span>
                                  </div>
                                  <div class="mega_menu_info">
                                    <span class="mega_title">{{
                                      megaMenuItem.title
                                    }}</span>
                                    <span v-if="megaMenuItem.subTitle">{{
                                      megaMenuItem.subTitle
                                    }}</span>
                                  </div>
                                </div>
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li v-else class="nav_link">
                    <router-link :to="menuItem.url">{{
                      menuItem.title
                    }}</router-link>
                  </li>
                </div>

                <!-- Before login -->
                <li
                  v-if="!$store.state.auth.status.loggedIn"
                  class="nav_link nav_btn"
                >
                  <router-link
                    to="/login"
                    class="user_link tork-btn tork-btn-outline-primary tork-rounded-pill"
                    >Login</router-link
                  >
                </li>

                <!-- After login -->
                <li v-else class="nav_link dropdown tork-position-relative">
                  <div class="nav_btn tork-d-flex tork-items-center">
                    <div class="user_link user_btn tork-btn tork-btn-primary">
                      {{ $store.state.auth.user.user.name }}
                    </div>
                    <div class="user_img">
                      <img
                        v-if="$store.state.auth.user.user.photo"
                        :src="require(`@/assets/images/${$store.state.auth.user.user.photo}`)"
                        class="tork-img-fluid user_img_header"
                        alt=""
                      />
                      <span v-else class="user__character">{{
                        $store.state.auth.user.user.name.charAt(0)
                      }}</span>
                    </div>
                  </div>
                  <ul class="dropdown_menu">
                    <li><router-link to="/profile">Profile</router-link></li>
                    <li>
                      <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <li><router-link to="/setting">Setting</router-link></li>
                    <li @click="logOut">Log Out</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    logo: {
      type: String,
      default: ""
    },
    menusList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeMobileMenu: false,
      menuItems: []
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    showMobileMenu() {
      this.activeMobileMenu = !this.activeMobileMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
}
.header_section {
  // Top nav bar
  .top_navbar {
    background: $light-color + unquote("7d");
    padding: 0;

    .contact_info {
      a {
        color: $dark-color;
        margin-left: 1rem;
        font-size: 0.875rem;
        line-height: 42px;
        font-weight: 400;

        span {
          margin-right: 0.5rem;
          font-size: 1rem;
          color: $primary-color;
        }

        &:first-child {
          margin-left: 0;
        }
        &:hover {
          color: $primary-color;
        }
      }
    }

    .social_link {
      a {
        line-height: 42px;
        font-size: 1.4rem;
        color: $primary-color;
        margin-left: 0.75rem;
        transition: 0.4s ease;

        &:first-child {
          margin-left: 0;
        }

        &:hover {
          color: $muted-color;
        }
      }
    }
  }

  // Main nav
  .main_nav {
    padding: 0.5rem 0;

    .logo {
      img {
        width: auto;
        height: 70px;
        max-width: 100%;
      }
    }

    .toggle_menu {
      font-size: 1.8rem;
      color: $primary-color;
      float: right;
      display: none;
    }

    // menu items
    .menu_items {
      .mobile_menu_close_btn {
        display: none;
      }

      .nav_link {
        padding: 0.625rem 1rem;
        font-weight: 400;
        font-size: 1rem;
        text-transform: capitalize;
        line-height: 1.4;

        a {
          color: $dark-color;

          &:hover {
            color: $primary-color;
          }
        }
      }

      .nav_btn {
        .user_link {
          padding: 0.4rem 2rem;
          font-weight: 400;
          border-radius: 5rem 0 0 5rem;

          &:hover {
            color: $white-color;
          }
        }

        .user_btn {
          color: $white-color;
        }

        .user_img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          margin-left: -0.8rem;
          border: 2px solid $white-color;
          z-index: 5;
          background-color: $primary-color;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          .user__character {
            font-size: 1.5rem;
            line-height: 1.2;
            text-align: center;
            display: block;
            font-weight: 600;
            color: $white-color;
          }

          .user_img_header {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }

      .active {
        a {
          color: $primary-color;
        }
      }

      // dropdown
      .dropdown {
        cursor: pointer;

        &:hover {
          color: $primary-color;

          .dropdown_menu {
            visibility: visible;
            margin-top: 10px;
          }
        }
        .dropdown_menu {
          position: absolute;
          background: $white-color;
          border: 1px solid $light-color;
          z-index: 9;
          margin-top: 30px;
          border-radius: 0.2rem;
          overflow: hidden;
          visibility: hidden;
          width: 12rem;
          transition: 0.3s ease;
          box-shadow: 0px 6px 11px -3px $light-color + unquote("70");

          li {
            padding: 0.2rem 2rem;
            font-size: 0.875rem;
            font-weight: 400;
            transition: background 0.3s;

            &:hover {
              background: $light-color + unquote("ae");

              a {
                color: $primary-color;
              }
            }

            &:first-child {
              padding-top: 0.5rem;
            }
            &:last-child {
              padding-bottom: 0.5rem;
            }
          }
        }
      }
    }

    // Mega Munu
    .mega_dropdown {
      cursor: pointer;

      h4 {
        font-size: 1rem;
        font-weight: 500;
      }

      .mega_menu {
        position: absolute;
        background: $white-color;
        border: 1px solid $light-color;
        z-index: 9;
        margin-top: 0;
        border-radius: 0.2rem;
        overflow: hidden;
        visibility: hidden;
        max-width: 73rem;
        transition: 0.2s ease;
        box-shadow: 0px 6px 11px -3px $light-color + unquote("70");
        left: -19rem;
        top: 6rem;
        width: 73rem;
        padding: 2rem;
        border-radius: 0.8rem;

        &:hover {
          display: block;
        }

        ul {
          .mega_menu_item {
            font-size: 0.85rem;
            font-weight: 400;
            padding: 0.5rem 0.8rem;
            border-radius: 0.4rem;
            transition: background 0.5s;
            background: $light-color;
            margin: 1rem 0;
            display: flex;
            align-items: center;
            min-height: 4rem;

            .icon_inner {
              display: flex;
              align-items: center;

              .icon {
                width: 2.5rem;
                height: 2.5rem;
                background: $primary-color;
                text-align: center;
                justify-content: center;
                display: flex;
                align-items: center;
                font-weight: 500;
                color: $white-color;
                margin-right: 0.6rem;
                border-radius: 50%;
              }
            }
            .mega_title {
              font-weight: 500;
              color: $primary-color;
              line-height: 1.3;
              display: block;
              font-size: 1rem;

              & + span {
                font-size: 0.9rem;
                font-weight: 400;
              }
            }
            .cat_name {
              margin-top: 0.3rem;
              display: block;
              font-weight: 400;

              .ai_score {
                background-color: $danger-color;
                color: $white-color;
                padding: 0 0.65rem;
                border-radius: 0.2rem;
                display: initial;
                font-size: 0.65rem;
              }
            }

            a {
              font-size: 0.875rem;
            }

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }

      &:hover {
        color: $primary-color;

        .mega_menu {
          visibility: visible;
          top: 4.5rem;
        }
      }
    }
  }

  .sticky_navbar {
    position: fixed;
    background: $white-color;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

    .logo {
      width: 3.5rem;
    }

    .menu_items {
      margin: 0.5rem 0;
    }
    .menu_items .nav_link {
      padding: 0 2rem;
    }

    .menu_items .nav_btn .user_img {
      width: 3rem;
      height: 3rem;
    }
  }
  .menu_items .nav_btn .user_link {
    padding: 0.25rem 1rem;
  }
}

@media only screen and (max-width: 768px) {
  .header_section {
    .top_navbar {
      .contact_info {
        .email {
          display: none;
        }
      }
    }

    .main_nav {
      // Mega Munu
      .mega_dropdown {
        cursor: pointer;

        .mega_menu {
          position: relative;
          background: transparent;
          border: none;
          z-index: 9;
          margin-top: 8px;
          border-radius: 0.2rem;
          overflow: hidden;
          display: none;
          visibility: visible;
          transition: 0.3s;
          box-shadow: none;
          left: 0;
          top: 1rem;
          width: 100%;
          padding: 0 1rem;
          border-radius: 0;
        }

        &:hover {
          .mega_menu {
            display: block;
            top: 0;
          }
        }
      }

      .toggle_menu {
        display: block;
      }
      .menu_items {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        background: $white-color + unquote("f2");
        z-index: 9;
        width: 100%;
        height: 100vh;
        left: 0;
        padding: 2rem;
        overflow-y: scroll;

        .mobile_menu_close_btn {
          text-align: end;
          display: block;

          button {
            font-size: 1.5rem;
            color: $primary-color;
          }
        }

        .nav_link {
          display: block;
          width: 100%;
        }

        .menu_items_inner {
          flex-direction: column;
          justify-content: start;
          align-items: start;

          .dropdown {
            .dropdown_menu {
              display: none;
              visibility: visible;
              position: static;
              box-shadow: none;
              border: 0;
              background: none;
              margin-top: 0;
              width: 100%;

              li {
                padding-left: 1rem;

                &:hover {
                  background: none;
                }
              }
            }
            &:hover {
              .dropdown_menu {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}

.activeMobileMenu {
  display: block !important;
}
</style>
