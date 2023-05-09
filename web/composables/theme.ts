const secondsPerYear = 60 * 60 * 24 * 365;
export const themeCookie = () => useCookie<"light_theme"|"dark_theme">("theme", {
  default: () => "light_theme", maxAge: secondsPerYear, path: "", secure: false, httpOnly: false,
});