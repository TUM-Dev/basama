import { createVuetify } from "vuetify";
import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    theme: {
      defaultTheme: "light_theme",
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
