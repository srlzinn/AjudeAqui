import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import supabase from "./plugins/supabase"
import GerenciadorDeRepositorios from "./composables/data/repositories/GerenciadorDeRepositorios"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(supabase)
  .provide("$banco", new GerenciadorDeRepositorios())
  .mount('#app')
