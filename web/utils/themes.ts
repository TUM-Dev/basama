import { ThemeDefinition } from "vuetify";

export const light_theme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: twColors.yellow[400],
    secondary: twColors.yellow[200],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
};

export const dark_theme: ThemeDefinition = {
  dark: true,
  colors: {
    background: twColors.slate[950],
    surface: twColors.slate[900],
    primary: twColors.yellow[400],
    secondary: twColors.yellow[600],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
};
