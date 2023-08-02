export const fallbackLng = "en";
export const languages = [fallbackLng, "ru"];
export const defaultNS = "translation";

export const getOptions = (
  lng: string = fallbackLng,
  ns: string = defaultNS
) => {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng: "ru",
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};
