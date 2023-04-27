import vuetify from "vite-plugin-vuetify";
import { twColors } from "~/utils/tw-colors";

// PWA Config
const title = "BaSaMa";
const shortTitle = "BaSaMa";
const description = "A Thesisfinder to find the right bachelor, semester or master thesis for you.";
const image = "https://basama.de/og_image.png";
const url = "https://basama.de/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // import styles
  css: ["@/assets/main.scss"],
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  modules: [
    "@kevinmarrec/nuxt-pwa",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],

  app: {
    head: {
      title: "BaSaMa - the Thesisfinder",
      titleTemplate: "%s | BaSaMa",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
      meta: [
        {
          key: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { key: "og:type", property: "og:type", content: "website" },
        {
          key: "og:url",
          property: "og:url",
          content: url,
        },
        {
          key: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: description,
        },
        {
          key: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          key: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },

  pwa: {
    meta: {
      name: shortTitle,
      title: title,
      author: "@CommanderStorm and @twihno",
      theme_color: twColors.yellow[400],
      description: description,
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      lang: "en",
      theme_color: twColors.yellow[400],
      description: description,
    },
  },
});
