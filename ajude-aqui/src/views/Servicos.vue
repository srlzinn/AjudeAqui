<template>
  <div>
    <v-list :items="servicos.map(it => it.titulo)" class="mb-4"></v-list>
    <div class="d-flex w-100 justify-end">
      <v-btn size="64" icon="mdi-plus" color="primary" @click="modalCriarServico = true"></v-btn>
    </div>
    <v-dialog v-model="modalCriarServico" width="auto">
      <v-card min-width="400" class="pa-4">
        <v-form ref="formServico">
          <v-text-field label="Nome do Serviço" v-model="novoServico.titulo" variant="outlined"
            :rules="[v => !!v || 'Obrigatório']"></v-text-field>
          <v-text-field label="Descrição" v-model="novoServico.descricao" variant="outlined"></v-text-field>
          <v-text-field label="Preço" v-model="novoServico.preco" variant="outlined" type="number"></v-text-field>
          <v-text-field label="Nome do contratante" v-model="novoServico.contratante" variant="outlined"></v-text-field>
          <v-text-field label="Categoria" v-model="novoServico.categoria" variant="outlined"></v-text-field>
          <div class="d-flex gap-4 justify-end">
            <v-btn @click="fecharModalCriarServico" color="error" variant="plain">Cancelar</v-btn>
            <v-btn @click="criarServico" color="green">Salvar</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, inject } from "vue";
import { VList, VBtn, VDialog, VCard, VForm, VTextField } from "vuetify/components"

const banco = inject("$banco");
const servicos = reactive([]);
const novoServico = reactive(
  {
    titulo: "",
    descricao: "",
    preco: "",
    contratante: "",
    disponivel: true,
    categoria: "",
  }
);
const modalCriarServico = ref(false);
const formServico = ref(null);

function fecharModalCriarServico() {
  modalCriarServico.value = false;
  Object.assign(novoServico, {});
}

function criarServico() {
  formServico.value.validate().then((res) => {
    if (res) {
      banco.repositorioDeServicos.criar(
        {
          titulo: novoServico.titulo,
          descricao: novoServico.descricao,
          preco: novoServico.preco,
          contratante: novoServico.contratante,
          disponivel: novoServico.disponivel,
          categoria: novoServico.categoria,
        },
        (servico) => {
          servicos.push(servico);
          fecharModalCriarServico();
        });
    }
  });
}

onMounted(() => {
  banco.repositorioDeServicos.getLista((items) => {
    servicos.splice(0, servicos.length, ...items);
  });
});
</script>
