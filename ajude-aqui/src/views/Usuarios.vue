<template>
  <v-list :items="usuarios.map(it => it.nome)"></v-list>
  <div class="d-flex w-100 justify-end align-end">
    <v-btn
      size="64"
      icon="mdi-plus"
      color="primary"
      @click="modalCriarUsuario = true"
    ></v-btn>
  </div>
  <v-dialog v-model="modalCriarUsuario" width="auto">
    <v-card min-width="400" class="pa-4">
      <v-form ref="referenciaDoCompoenteForm">
        <v-text-field label="Nome" v-model="formularioNovoUsuario.nome" variant="outlined" :rules="[it => !!it || 'Obrigatorio']"></v-text-field>
        <v-text-field label="Cpf" v-model="formularioNovoUsuario.cpf" variant="outlined"></v-text-field>
        <v-text-field label="Endereço" v-model="formularioNovoUsuario.endereco" variant="outlined"></v-text-field>
        <div class="d-flex ga-4 justify-end">
          <v-btn @click="fecharModalCriarUsuario" color="error" variant="plain"> Cancelar </v-btn>
          <v-btn @click="criarUsuario" color="green"> Salvar </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import {inject, onMounted, reactive, ref} from "vue"
import {VList, VBtn, VDialog, VCard, VForm, VTextField} from "vuetify/components"
const banco = inject("$banco")
const usuarios = reactive([])
const formularioNovoUsuario = reactive({})
const modalCriarUsuario = ref(false)
const referenciaDoCompoenteForm = ref(null)
function fecharModalCriarUsuario() {
    modalCriarUsuario.value = false
    formularioNovoUsuario.nome = ""
    formularioNovoUsuario.cpf = ""
    formularioNovoUsuario.endereco = ""
}
function criarUsuario() {
  referenciaDoCompoenteForm.value.validate().then(
    it => {
      if (it.valid) {
        banco.repositorioDeUsuarios.criar(
          {
            nome: formularioNovoUsuario.nome,
            cpf: formularioNovoUsuario.cpf,
            endereco: formularioNovoUsuario.endereco,
          },
          (item) => {
            usuarios.push(item);
          }
        )
        fecharModalCriarUsuario()
      }
    }
  )
}
onMounted(() => {
  banco.repositorioDeUsuarios.getLista((items) => {
    usuarios.splice(0, usuarios.length, ...items);
  })
})
</script>
