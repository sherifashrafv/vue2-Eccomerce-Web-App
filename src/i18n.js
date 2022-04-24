import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../src/locales/English.json";
import ar from "../src/locales/Arabic.json";
Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: {
    ar: ar,
    en: en,
  },
});
