import axios from "axios";

const API_URL = process.env.VUE_APP_ROOT_API_URL + 'auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        username_or_email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "register", {
      name: user.name,
      user_name: user.username,
      email: user.email,
      phone: user.phone,
      password: user.password,
      password_confirmation: user.passwordConfirmation
    });
  }

  reset(user) {
    console.log(user);
    return axios.post(API_URL + "sendPasswordResetLink", {
      email: user.email,
    });
  }
}

export default new AuthService();
