import { Languages } from "@/types/agencies.type";

export const getLanguage = (language: Languages): string => {
  const languages = {
    es: "Español",
    en: "Inglés",
    fr: "Francés",
    de: "Alemán",
    it: "Italiano",
  };
  return languages[language];
};
