export const CONTACT_INFO = {
  company: "Uenal Immobilien GmbH",
  address: {
    street: "Carl-Benz-Str. 5",
    zipCity: "26655 Westerstede",
    full: "Carl-Benz-Str. 5, 26655 Westerstede",
  },
  phone: {
    display: "+49 1520 1347425",
    telHref: "tel:+4915201347425",
    raw: "+4915201347425",
    whatsapp: "4915201347425",
  },
  email: "info@uenal-immobilien.de",
  web: "www.uenal-immobilien.de",
  websiteUrl: "https://uenal-immobilien.de",
  managingDirector: "Alparslan Ünal",
  registerCourt: "Amtsgericht Oldenburg, HRB 218496",
} as const;

export const PHONE_NUMBER = CONTACT_INFO.phone.display;
export const PHONE_HREF = CONTACT_INFO.phone.telHref;
