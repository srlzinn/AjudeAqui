<template>
  <div>
    <v-list :items="contratacoes.map(c=>c.servicos)" class="mb-4"></v-list>
    <div class="d-flex w-100 justify-end">
      <v-btn
        size="64"
        icon="mdi-plus"
        color="primary"
        @click="modalContratar = true"
      ></v-btn>
    </div>
    <v-dialog v-model="modalContratar" width="auto">
      <v-card min-width="400" class="pa-4">
        <v-form ref="formContratacao">
          <v-select 
            label="Usuário" 
            :items="usuarios" 
            v-model="novaContratacao.usuario" 
            item-text="nome" 
            item-value="id" 
            variant="outlined" 
            :rules="[v => !!v || 'Obrigatório']"
          ></v-select>
          <v-select 
            label="Serviço" 
            :items="servicos" 
            v-model="novaContratacao.servico" 
            item-text="nome" 
            item-value="id" 
            variant="outlined" 
            :rules="[v => !!v || 'Obrigatório']"
          ></v-select>
          <div class="d-flex gap-4 justify-end">
            <v-btn @click="fecharModalContratar" color="error" variant="plain">Cancelar</v-btn>
            <v-btn @click="criarContratacao" color="green">Salvar</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, inject } from "vue";
import {VList, VBtn, VDialog, VCard, VForm, VTextField} from "vuetify/components"
const banco = inject("$banco");
const contratacoes = reactive([]);
const novaContratacao = reactive({ usuario: null, servico: null });
const modalContratar = ref(false);
const formContratacao = ref(null);

function fecharModalContratar() {
  modalContratar.value = false;
  Object.assign(novaContratacao, { usuario: null, servico: null });
}

function criarContratacao() {
  formContratacao.value.validate().then((res) => {
    if (res) {
      banco.repositorioDeContratos.criar(novaContratacao, (contratacao) => {
        contratacoes.push(contratacao);
        fecharModalContratar();
      });
    }
  });
}

onMounted(() => {
  banco.repositorioDeContratos.getLista((items) => {
    contratacoes.splice(0, contratacoes.length, ...items);
  });
});
</script>
