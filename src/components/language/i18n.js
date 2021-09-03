import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "HOME": "Home",
      "ABOUT": "About us",
      "EVENTS": "Events",
      "PARTNERS": "Partners",
      "CONTACT": "Contact",
      "READMORE": "Read More",
      "DISCOVERMORE": "Discover More",
      "CAROUSELTEXT": "Establishment of Psychological Counselling Centers at",
      "CAROUSELTEXT2": "Georgian HEIs for Students"
    }
  },
  ge: {
    translation: {
      "HOME": "მთავარი",
      "ABOUT": "პროექტის შესახებ",
      "EVENTS": "ღონისძიებები",
      "PARTNERS": "პარტნიორები",
      "CONTACT": "კონტაქტი",
      "READMORE": "დაწვრილებით",
      "DISCOVERMORE": "აღმოაჩინე მეტი",
      "CAROUSELTEXT": "ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში",
      "CAROUSELTEXT2": "საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში"
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