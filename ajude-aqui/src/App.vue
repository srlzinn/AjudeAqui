<template>
  <v-app>
    <v-main>
      <MenuPricipal/>
    </v-main>
  </v-app>
</template>

<script>
import MenuPricipal from "./components/MenuPricipal.vue"
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    MenuPricipal
  }
}
</script>
