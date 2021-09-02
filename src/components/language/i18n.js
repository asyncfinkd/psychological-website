import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "HOME": "Home",
            "CONTACT": "Contact",
        }
    },
    ge: {
        translation: {
            "HOME": "მთავარი",
            "CONTACT": "კონტაქტი"
        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: `ge`, 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;