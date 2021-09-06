import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      HOME: "Home",
      ABOUT: "About us",
      EVENTS: "Events",
      PARTNERS: "Partners",
      CONTACT: "Contact",
      READMORE: "Read More",
      DISCOVERMORE: "Discover More",
      CAROUSELTEXT: "Establishment of Psychological Counselling Centers at",
      CAROUSELTEXT2: "Georgian HEIs for Students",
      HELMET__HOME: "For students of psychological counseling centers",
      NEWS: "News",
      NEWSERROR: "News Has Not Found.",
      PSYCHOLOGICALTITLE: "PSYCHOLOGICAL COUNSELING CENTERS FOR STUDENTS",
      PSYCHOLOGICALSUBTITLE:
        "Establishment of Psychological Counselling Centers at Georgian HEIs for Students E-PSY",
      PSYCHOLOGICALCODE:
        "Establishment of Psychological Counselling Centers at Georgian HEIs for Students E-PSY (617980-EPP-1-2020-1-GE-EPPKA2-CBHE-SP)",
      PSYCHOLOGICALPURPOSE:
        "The overall aim of the E-PSY project (implementation period - 2021-2023) is improvement of student services at Georgian HEIs by means of establishing psychological counselling centers for students at target partner universities in all regions of Georgia. Specific objectives of the project are:",
      PSYCHOLOGICALFIRSTPURPOSE:
        "Establishment of psychological counselling centers at target partner HEIs for students.",
      PSYCHOLOGICALSECONDPURPOSE:
        "Preparing and retraining staff to work at psychological counselling centers.",
    },
  },
  ge: {
    translation: {
      HOME: "მთავარი",
      ABOUT: "პროექტის შესახებ",
      EVENTS: "ღონისძიებები",
      PARTNERS: "პარტნიორები",
      CONTACT: "კონტაქტი",
      READMORE: "დაწვრილებით",
      DISCOVERMORE: "აღმოაჩინე მეტი",
      CAROUSELTEXT:
        "ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის",
      CAROUSELTEXT2: "საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში",
      HELMET__HOME: "ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      NEWS: "სიახლეები",
      NEWSERROR: "სიახლეები არ არსებობს.",
      PSYCHOLOGICALTITLE: "ფსიქოლოგიური საკონსულტაციო ცენტრები სტუდენტებისთვის",
      PSYCHOLOGICALSUBTITLE:
        "ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY",
      PSYCHOLOGICALCODE:
        "ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY (617980-EPP-1-2020-1-GE-EPPKA2-CBHE-SP)",
      PSYCHOLOGICALPURPOSE:
        "E-PSY პროექტის (განხორციელების პერიოდი – 2021-2023 წწ.) ზოგადი მიზანია სტუდენტებისთვის სოციალური და ფსიქოლოგიური დახმარების გაწევა საქართველოს უმაღლეს სასწავლებლებში ფსიქოლოგიური კონსულტაციების ცენტრების შექმნის გზით. ზოგადი მიზნიდან გამომდინარეობს ხუთი კონკრეტული მიზანი:",
      PSYCHOLOGICALFIRSTPURPOSE:
        "ფსიქოლოგიური ცენტრების შექმნა სტუდენტებისთვის პარტნიორ უმაღლეს სასწავლებლებში.",
      PSYCHOLOGICALSECONDPURPOSE: "პერსონალის მომზადება და გადამზადება",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem("lang") || "ge"}`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
