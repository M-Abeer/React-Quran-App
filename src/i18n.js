import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ENG from './language/eng/translationENG.json'
import AR from './language/ar/translationAR.json'

const resources = {
    eng: {
        translation: ENG
    },
    ar: {
        translation: AR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') ||'ar',
        fallbackLng: 'ar',

        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;