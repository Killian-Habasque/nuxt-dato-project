// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    public: {
      isProd: process.env.NETLIFY_ENV ===
        'production',
      datoToken: process.env.NUXT_DATO_TOKEN
    }
  },
  apollo: {
    clients: {
      default: './config/apollo.ts'
    }
  }
})
