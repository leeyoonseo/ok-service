import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  server: {
    host: "0.0.0.0",
  },
  head: {
    title: "ok-admin",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  dir: {
    layouts: "views/layouts",
    pages: "views/pages",
  },
  css: ["normalize.css/normalize.css", "~assets/styles/common.scss"],
  styleResources: {
    scss: "~/assets/styles/*.scss",
  },

  plugins: [],

  components: [
    {
      path: "~/components/common/",
      prefix: "the",
      extensions: ["vue"],
    },
    {
      path: "~/components/layout/",
      prefix: "layout",
      extensions: ["vue"],
    },
    {
      path: "~/components/template/",
      extensions: ["vue"],
    },
  ],
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/style-resources",
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  build: {
    postcss: false,
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === "production",
          drop_debugger: process.env.NODE_ENV === "production",
        },
      },
    },
    analyze: process.env.NODE_ENV === "production",
    cssSourceMap: true,
    devtools: true,
    extractCSS: process.env.NODE_ENV === "production",
    optimization: {
      splitChunks:
        process.env.NODE_ENV === "production"
          ? {
              cacheGroups: {
                styles: {
                  name: "styles",
                  test: /\.(scss|css)$/,
                  chunks: "all",
                },
              },
            }
          : {},
    },
  },

  typescript: {
    build: true,
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },
};

export default config;
