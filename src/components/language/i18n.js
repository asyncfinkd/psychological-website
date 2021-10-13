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
      PSYCHOLOGICALTHIRDPURPOSE:
        "Elaboration of recommendations and legislation documentation for policy makers and governmental agencies of Georgia.gh",
      PSYCHOLOGICALFOURPURPOSE:
        "Raising mental health awareness among students and wider audience.",
      PSYCHOLOGICALFIVEPURPOSE:
        "Creation of Association of University Psychological Counselling Centers of Georgia.",
      PSYCHOLOGICALPROJECTREVIEW:
        "With the aim of raising mental health awareness among the students, academic and administrative staff of the partner universities, and wider audience, in general, it is planned to hold public information campaigns in the following regions of Georgia: Shida Kartli, Kakheti, Imereti, Samegrelo, Adjara, and Samtskhe-Javakheti. As a result of the campaigns, the students and the wider audience will become better informed about the importance of psychological couselling and mental health.",
      PSYCHOLOGICALPROJECTREVIEWSECOND:
        "With the establishment of psychological counselling centers, the students of the partner higher education institutions will receive psychological counselling and assistance upon their request. The psychologists and counsellors will undergo special training at the Universities of Economy in Bydgoszcz and Transylvania University of Brasov, as well as participate in the workshops and seminars organized by Georgian and European specialists. By the end of the project, the consortium will develop specific recommendations and legislative documentation for policy makers. To ensure the sustainability of the project, an Association of University Psychological Counselling Centers of Georgia will be established.",
      HELMET__ABOUT:
        "About us - For students of psychological counseling centers",
      HELMET__EVENTS:
        "Events - For students of psychological counseling centers",
      HELMET__PARTNERS:
        "Partners - For students of psychological counseling centers",
      PHONE: "Phone:",
      EMAIL: "E-Mail:",
      ADDRESS: "Address:",
      HELMET__CONTACT:
        "Contact - For students of psychological counseling centers",
      LETUSKNOW: "Let us know",
      FULLNAME: "Full name",
      EMAIL: "Email Address",
      PHONEINPUT: "Phone",
      MESSAGE: "Message",
      SENT: "Sent",
      REQUIREDINPUT: "Required",
      WRONGVALIDATION: "Wrong Validation",
      WRITETOUS: "Write to us",
      SENTMESSAGEERROR: "If you have a problem, write to us about the problem",
      INPUTINFORMATION: "Enter the information",
      INPUTINFORMATIONSECOND:
        "It is necessary to fill in all the fields in order to send us your message",
      INPUTINFORMATIONTHIRD:
        "Enter a problem description in the message so we can fix it",
      FOOTER:
        "All Rights Reserved © 2021 - Batumi Shota Rustaveli State University",
      GALLERY: "Gallery",
      HELMET__GALLERY:
        "Gallery - For students of psychological counseling centers",
      PHOTO_GALLERY: "Photo gallery",
      RESOURCES__TITLE:
        "Resources - For students of psychological counseling centers",
      RESOURCES__ADD__TITLE:
        "Add Resources - For students of psychological counseling centers",
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
      PSYCHOLOGICALSECONDPURPOSE: "პერსონალის მომზადება და გადამზადება.",
      PSYCHOLOGICALTHIRDPURPOSE:
        "რეკომენდაციებისა  და საკანონმდებლო დოკუმენტაციების შემუშავება.",
      PSYCHOLOGICALFOURPURPOSE:
        "ფსიქიკური ჯანმრთელობის შესახებ სტუდენტებისა და, საერთოდ, ფართო აუდიტორიის ცნობიერების ამაღლება.",
      PSYCHOLOGICALFIVEPURPOSE:
        "საქართველოს უნივერსიტეტების ფსიქოლოგიური კონსულტაციის ცენტრების ასოციაციის შექმნა.",
      PSYCHOLOGICALPROJECTREVIEW:
        "პროექტის განხორციელების პერიოდში, პროექტით გათვალისწინებული აქტივობების შედეგად, პარტნიორ უმაღლეს სასწავლებლებში და, შესაბამისად, მათი განთავსების რეგიონებში (შიდა ქართლში, კახეთში, იმერეთში, სამეგრელოში, აჭარაში, სამცხე-ჯავახეთში) გაიზრდება არა მხოლოდ სტუდენტთა, აკადემიური და ადმინისტრაციული პერსონალის, არამედ უფრო ფართო აუდიტორიის ინფორმირებულობა ფსიქოლოგიური მხარდაჭერისა და კონსულტაციის მნიშვნელობის შესახებ (ჩატარდება საინფორმაციო კამპანიები, პრესაში გამოქვეყნდება მასალები, დაიბეჭდება ფლაერები, შეიქმნება ვებგვერდი და ა.შ.).",
      PSYCHOLOGICALPROJECTREVIEWSECOND:
        "ფსიქოლოგიური კონსულტაციის ცენტრების დაფუძნებით, პროექტში მონაწილე უმაღლესი საგანმანათლებლო დაწესებულების სტუდენტები მიიღებენ ფსიქოლოგიურ კონსულტაციასა და დახმარებას მათი მოთხოვნის შესაბამისად. ამ დახმარებას მათ გაუწევენ ფსიქოლოგები, რომლებიც სპეციალიზირებულ ტრენინგებს გაივლიან ბიდგოშისა და ბრაშოვის უნივერსიტეტებში, მონაწილეობას მიიღებენ ქართველი და ევროპელი სპეციალისტების მიერ ორგანიზებულ ვორქშოფებსა და სემინარებში. ასევე, შემუშავდება რეკომენდაციები და საკანონმდებლო დოკუმენტაცია, შეიქმნება უნივერსიტეტების ფსიქოლოგიური კონსულტაციის ცენტრების ასოციაცია, რაც ხელს შეუწყობს პროექტის შედეგების მდგრადობასა და მის სიცოცხლისუნარიანობას.",
      HELMET__ABOUT:
        "პროექტის შესახებ - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      HELMET__EVENTS:
        "ღონისძიებები - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      HELMET__PARTNERS:
        "პარტნიორები - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      PHONE: "ტელეფონი:",
      EMAIL: "ელ.ფოსტა:",
      ADDRESS: "მისამართი:",
      HELMET__CONTACT:
        "კონტაქტი - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      LETUSKNOW: "შეგვეხმიანეთ",
      FULLNAME: "სახელი გვარი",
      EMAIL: "ელექტრონული ფოსტა",
      PHONEINPUT: "ტელეფონი",
      MESSAGE: "შეტყობინება",
      SENT: "გაგზავნა",
      REQUIREDINPUT: "სავალდებულო ველი",
      WRONGVALIDATION: "არასწორი ვალიდაცია",
      WRITETOUS: "მოგვწერეთ",
      SENTMESSAGEERROR: "თუ გაქვთ პრობლემა, მოგვწერეთ პრობლემის შესახებ",
      INPUTINFORMATION: "შეიყვანეთ ინფორმაცია",
      INPUTINFORMATIONSECOND:
        "აუცილებელია ყველა ველის შევსება რათა გამოიგზავნოს ჩვენთან თქვენი შეტყობინება",
      INPUTINFORMATIONTHIRD:
        "შეიყვანეთ შეტყობინებაში პრობლემის აღწერა რათა შევძლოთ აღმოფხვრა",
      FOOTER:
        "ყველა უფლება დაცულია © 2021 - ბათუმის შოთა რუსთაველის სახელმწიფო უნივერსიტეტი",
      GALLERY: "გალერია",
      HELMET__GALLERY:
        "გალერია - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      PHOTO_GALLERY: "ფოტო გალერეა",
      RESOURCES__TITLE:
        "რესურსები - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
      RESOURCES__ADD__TITLE:
        "რესურსების დამატება - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის",
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
