import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "HOME": "Home",
      "ABOUT": "About us"
    }
  },
  ge: {
    translation: {
      "HOME": "მთავარი",
      "ABOUT": "პროექტის შესახებ"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem("lang") || "ge"}`,
  interpolation: {
    escapeValue: false
  }
})

export default i18n;