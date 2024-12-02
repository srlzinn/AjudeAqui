<template>
  <v-tabs
    v-model="tab"
    bg-color="primary"
  >
    <RouterLink to="/">
      <v-tab value="users"> Usuários </v-tab>
    </RouterLink>
    <RouterLink to="/servicos">
     <v-tab value="services"> Serviços </v-tab>
    </RouterLink>
    <RouterLink to="/contratacoes">
      <v-tab value="contraties"> Contratações </v-tab>
    </RouterLink>
  </v-tabs>
  <RouterView/> 
</template>

<script setup lang="ts">
import {VTab, VTabs} from 'vuetify/components'
import {RouterLink, RouterView} from "vue-router"
import {ref} from 'vue'
const tab = ref(null)
</script>

<style>
a {
  color: white;
}
</style>
