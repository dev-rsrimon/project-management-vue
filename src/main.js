import { createApp } from "vue";
import App from "./App.vue";
import BaseInput from "./components/base/BaseInput";
import BaseModal from "./components/base/BaseModal";
import BaseSiniper from "./components/base/BaseSiniper";
import router from "./router";
import store from "./store";
import "./styles/tork-design-lib/tork-design-library.scss";

const app = createApp(App);

// Base components (It's available in global)
app.component("BaseInput", BaseInput);
app.component("BaseModal", BaseModal);
app.component("BaseSiniper", BaseSiniper);

app.use(store);
app.use(router);
app.mount("#app");
