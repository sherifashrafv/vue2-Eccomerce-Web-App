import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "../public/Styles/main.css";
import Extend from "./layouts/custome.vue";
import Default from "./layouts/default.vue";
import VueImg from "v-img";
import Vuelidate from "vuelidate";
import axios from "axios";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import VuePaginate from "vue-paginate";
import VueMeta from "vue-meta";
// document.documentElement.lang = lang;
let lang = localStorage.getItem("lang") || "en";
if (lang === "en") {
  import("../public/Styles/English/en.css");
  // / baseUrl For Axios Get Products
  axios.defaults.baseURL = `http://localhost:5000/`;
} else {
  import("../public/Styles/Arabic/ar.css");
  // / baseUrl For Axios Get Products
  axios.defaults.baseURL = `http://localhost:7000/`;
}
axios.defaults.headers["Accept-Language"] = lang;
// components&plugins
Vue.component("custome-layout", Extend);
Vue.component("default-layout", Default);
Vue.use(VueImg);
Vue.use(Vuelidate);
Vue.use(PerfectScrollbar);
Vue.use(VueMeta);
Vue.use(VuePaginate);
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
