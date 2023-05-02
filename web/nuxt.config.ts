import vuetify from "vite-plugin-vuetify";
import { twColors } from "./utils/tw-colors";

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
    '@nuxt/devtools',
    '@nuxt/content',
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
        { rel:"apple-touch-icon", sizes:"180x180", href:"/favicons/apple-touch-icon.png"},
        { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicons/favicon-32x32.png"},
        { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicons/favicon-16x16.png"},
        { rel:"manifest", href:"/favicons/site.webmanifest"},
        { rel:"mask-icon", href:"/favicons/safari-pinned-tab.svg", color:"#facc15"},
        { rel: "canonical", href: url },
      ],
      meta: [
        {key:"msapplication-TileColor",name:"msapplication-TileColor", content:"#ffc40d"},
        {key:"theme-color",name:"theme-color", content:"#facc15"},
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
