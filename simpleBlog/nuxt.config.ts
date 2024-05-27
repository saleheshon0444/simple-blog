export default defineNuxtConfig({
  css: ["assets/css/index.css", "assets/css/Webfonts/style.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-aos"],
  imports: {
    dirs: ["./stores"],
  },
});
