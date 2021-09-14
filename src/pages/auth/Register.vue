<template>
  <div class="login-section">
    <div class="tork-col-lg-6 tork-offset-lg-3">
      <div class="login-form">
        <h3 class="login-form__title">Fill Up Registration Form</h3>
        <form @submit.prevent="handleRegister">
          <BaseInput
            color="#1ba591"
            id="name"
            label="Name"
            v-model="formData.name"
            :required="true"
          />
          <span class="error__message">{{ errors ? errors.name[0] : "" }}</span>
          <BaseInput
            color="#1ba591"
            id="username"
            :min="6"
            label="username"
            v-model="formData.username"
          />
          <span class="error__message">{{ errors ? errors.username[0] : "" }}</span>
          <BaseInput
            color="#1ba591"
            id="email"
            type="email"
            label="Email"
            v-model="formData.email"
          />
          <span class="error__message">{{ errors ? errors.email[0] : "" }}</span>
          <BaseInput
            color="#1ba591"
            id="phone"
            label="Phone"
            v-model="formData.phone"
          />
          <span class="error__message">{{ errors ? errors.phone[0] : "" }}</span>
          <BaseInput
            color="#1ba591"
            id="password"
            type="password"
            label="Password"
            v-model="formData.password"
          />          
          <BaseInput
            color="#1ba591"
            id="cPassword"
            type="password"
            label="Confirm Password"
            v-model="formData.passwordConfirmation"
          />
          <span class="error__message">{{ errors ? errors.password[0] : "" }}</span>
          
          <div class="login-form__related-links tork-form-group">
            <p>
              If you have a account
              <router-link to="/login">Go to Login</router-link>
            </p>
          </div>
          <button class="login-form__btn tork-btn">
            {{ loading ? "Loading..." : "Registration" }}
          </button>
        </form>
        <div class="login-form__login-with">
          <router-link
            to="#"
            class="tork-btn tork-btn-block tork-btn-light tork-my-3"
          >
            <svg class="icon icon-google">
              <use xlink:href="#icon-google">
                <symbol id="icon-google" viewBox="0 0 31 32">
                  <path
                    d="M30.5 16.363c0 8.844-6.056 15.137-15 15.137-8.575 0-15.5-6.925-15.5-15.5s6.925-15.5 15.5-15.5c4.175 0 7.688 1.531 10.394 4.056l-4.219 4.056c-5.519-5.325-15.781-1.325-15.781 7.387 0 5.406 4.319 9.788 9.606 9.788 6.137 0 8.438-4.4 8.8-6.681h-8.8v-5.331h14.756c0.144 0.794 0.244 1.556 0.244 2.587z"
                  ></path>
                </symbol>
              </use>
            </svg>
            sign up with Google
          </router-link>
          <router-link to="#" class="tork-btn tork-btn-block tork-btn-white">
            <svg class="icon icon-facebook-f">
              <use xlink:href="#icon-facebook-f">
                <symbol id="icon-facebook-f" viewBox="0 0 20 32">
                  <path
                    d="M17.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.931s-2.293-0.391-4.484-0.391c-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.261v-14z"
                  ></path>
                </symbol>
              </use>
            </svg>
            sign up with Facebook
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        phone: ""
      },
      loading: false,
      errors: null
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister() {
      this.loading = true;

      this.$store.dispatch("auth/register", this.formData).then(
        data => {
          this.loading = false;

          console.log(data.response.status);

          this.$store.commit("notification/add", {
            type: "success",
            view: "top center",
            text: data.message
          });

          this.$router.push("/login");
        },
        error => {
          this.errors = error.response.data.errors;

          this.loading = false;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.login-section {
  padding: 5rem 0;
  width: 100%;

  @include responsiveMax(768px) {
    padding: 2rem 0;
  }

  .login-form {
    padding: 4rem 2rem;
    background: $white-color;
    border-radius: 0.75rem;
    text-align: center;
    border: 1px solid $primary-color;
    margin: 0 4rem;

    @include responsiveMax(768px) {
      margin: 0 2rem;
    }
    @include responsiveMax(576px) {
      margin: 0;
    }

    &__title {
      text-align: center;
      color: $primary-color;
      margin-bottom: 2rem;
      font-size: 1.7rem;
      font-weight: 500;
      text-transform: capitalize;

      @include responsiveMax(576px) {
        font-size: 1.4rem;
      }
    }

    .error__message {
      font-size: 0.875rem;
      font-weight: 400;
      text-align: left;
      display: block;
      margin-top: 0.5rem;
      color: $danger-color;
    }

    .tork-form-group {
      text-align: left;
      label {
        color: $primary-color !important;
        font-size: 0.985rem;
        margin-left: 0.3rem;
        display: block;
      }

      .tork-form-control {
        border-radius: 1rem;
        padding: 8px 20px;
        color: $dark-color;
        font-family: $primary-font;
      }
    }

    &__btn {
      background-color: $primary-color;
      border-radius: 5px;
      margin: 1.5rem 0;
      color: $white-color;
      font-size: 1rem;
      padding: 0.5rem 4rem;

      @include responsiveMax(576px) {
        width: 100%;
      }

      &:hover {
        box-shadow: 0 0 10px $shadow-color;
      }
    }

    &__related-links {
      margin: 1rem 0.3rem;
      color: $primary-color;

      a {
        font-size: 0.985rem;
        font-weight: 500;
        color: $dark-color;
      }
    }

    &__login-with a {
      border-radius: 5px;
      &:hover {
        box-shadow: 0 0 10px $shadow-color;
        opacity: 1;
      }
    }
  }
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
