import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // Idioma por defecto
    debug: true,
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    resources: {
      es: {
        translation: {
          title: "Frases de Game of Thrones",
          default_message: "Haz click para ver un nuevo mensaje",
          no_messages: "No ingresaron mensajes",
          show_message: "Mostrar mensaje",
          clear_message: "Limpiar mensaje",
          language_es: "Español",
          language_en: "Inglés",
        }
      },
      en: {
        translation: {
          title: "Game of Thrones Sentences",
          default_message: "Click to see a new message",
          no_messages: "No messages entered",
          show_message: "Show Message",
          clear_message: "Clear Message",
          language_es: "Spanish",
          language_en: "English",
        }
      }
    }
  });

export default i18n;
