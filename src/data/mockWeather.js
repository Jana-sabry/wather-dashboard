export const mockWeather = {
  Cairo: {
    city: "Cairo",
    country: "Egypt",
    current: { temp: 24, feelsLike: 23, humidity: 58, wind: 14, rainChance: 20, code: 3 },
    daily: [
      { date: "2026-11-17", max: 25, min: 17, code: 3 },
      { date: "2026-11-18", max: 26, min: 18, code: 0 },
      { date: "2026-11-19", max: 27, min: 18, code: 0 },
      { date: "2026-11-20", max: 22, min: 16, code: 61 },
      { date: "2026-11-21", max: 23, min: 16, code: 3 },
    ],
  },
  London: {
    city: "London",
    country: "United Kingdom",
    current: { temp: 9, feelsLike: 6, humidity: 84, wind: 21, rainChance: 70, code: 61 },
    daily: [
      { date: "2026-11-17", max: 10, min: 6, code: 61 },
      { date: "2026-11-18", max: 11, min: 7, code: 3 },
      { date: "2026-11-19", max: 9, min: 5, code: 3 },
      { date: "2026-11-20", max: 8, min: 3, code: 0 },
      { date: "2026-11-21", max: 9, min: 4, code: 61 },
    ],
  },
  Tokyo: {
    city: "Tokyo",
    country: "Japan",
    current: { temp: 16, feelsLike: 15, humidity: 46, wind: 9, rainChance: 5, code: 0 },
    daily: [
      { date: "2026-11-17", max: 17, min: 10, code: 0 },
      { date: "2026-11-18", max: 18, min: 11, code: 0 },
      { date: "2026-11-19", max: 16, min: 12, code: 3 },
      { date: "2026-11-20", max: 14, min: 11, code: 61 },
      { date: "2026-11-21", max: 17, min: 9, code: 0 },
    ],
  },
};