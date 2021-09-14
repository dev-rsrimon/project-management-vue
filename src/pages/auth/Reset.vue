<template>
  <div class="login_inneer">
    <div class="login_card tork-mt-5">
      <h2>Enter your email for reset your passowrd</h2>
      <form @submit.prevent="userRegistration">
        <BaseInput
          class="base-input"
          color="#1ba591"
          id="email"
          type="email"
          label="Email"
          v-model="formData.email"
        />

        <div class="tork-form-group tork-d-flex tork-justify-space-between">
          <span> Don't want to reset your password</span>
          <router-link to="/login">Go to Login</router-link>
        </div>
        <button
          type="submit"
          class="tork-btn tork-btn-block tork-btn-primary tork-mt-4"
        >
          {{ loading ? "Loading..." : "Reset Password" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: ""
      },
      loading: false
    };
  },
  methods: {
    userRegistration() {
      this.loading = true;

      this.$store.dispatch("auth/reset", this.formData).then(
        (response) => {
          this.loading = false;
          this.$store.commit("notification/add", {
            type: "success",
            view: "top right",
            text: response.data
          });

        //   this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.$store.commit("notification/add", {
            type: "error",
            view: "top right",
            text: error.response.data.error
          });
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4;
  text-transform: capitalize;
  margin-bottom: 2rem;
  text-align: center;
}

.login_inneer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
}

button {
  margin-top: 2rem;
}

a,
span {
  font-size: 1rem;
}

.login_card {
  background: $white-color;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 10px $light-color;
  width: 40%;
}
</style>
