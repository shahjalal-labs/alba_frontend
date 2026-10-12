export const CITY_NAMES: Record<string, string> = {
  apen: "Apen",
  "bad-zwischenahn": "Bad Zwischenahn",
  bockhorn: "Bockhorn",
  brake: "Brake",
  butjadingen: "Butjadingen",
  edewecht: "Edewecht",
  elsfleth: "Elsfleth",
  grossenkneten: "Großenkneten",
  hatten: "Hatten",
  hude: "Hude",
  jever: "Jever",
  nordenham: "Nordenham",
  oldenburg: "Oldenburg",
  ovelgoenne: "Ovelgönne",
  "ovelgönne": "Ovelgönne",
  rastede: "Rastede",
  sande: "Sande",
  schortens: "Schortens",
  stadland: "Stadland",
  varel: "Varel",
  wangerland: "Wangerland",
  wangerooge: "Wangerooge",
  wardenburg: "Wardenburg",
  westerstede: "Westerstede",
  wiefelstede: "Wiefelstede",
  wilhelmshaven: "Wilhelmshaven",
  zetel: "Zetel",
};

export function getCityName(slug?: string): string {
  if (!slug) return "";
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  if (CITY_NAMES[normalized]) {
    return CITY_NAMES[normalized];
  }
  return normalized
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
