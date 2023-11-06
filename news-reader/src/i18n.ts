import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import en from "./locales/en.json"
import pl from "./locales/pl.json"

// Translations
const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
}

i18n.use(detector).use(initReactI18next).init({
  resources,

  fallbackLng: "en",
})

export default i18n
