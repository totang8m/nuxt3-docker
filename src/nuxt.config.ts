// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})
