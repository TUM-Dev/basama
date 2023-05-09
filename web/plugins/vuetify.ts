import { createVuetify } from "vuetify";
import { md3 } from 'vuetify/blueprints'
import { themeCookie } from "~/composables/theme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    theme: {
      defaultTheme: themeCookie().value,
      themes: {
        light_theme,
        dark_theme,
      },
      // add color variations
      variations: {
        colors: ["primary", "secondary"],
        lighten: 3,
        darken: 3,
      },
    },
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },
    blueprint: md3,
  });

  app.vueApp.use(vuetify);
});
