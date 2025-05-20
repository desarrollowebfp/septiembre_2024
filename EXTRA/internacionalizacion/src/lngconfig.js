import { en, es, fr } from "./languages";

const config = {
  lng: navigator.languages[1],
  debug: true,
  fallbackLng: "en",
  resources: { en, es, fr },
};

export default config;
