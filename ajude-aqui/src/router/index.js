import { createRouter, createWebHistory } from 'vue-router'
import Usuarios from '../views/Usuarios.vue'
import Servicos from '../views/Servicos.vue'
import Contratacoes from '../views/Contratacoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usuarios',
      component: Usuarios,
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: Servicos,
    },
    {
      path: '/contratacoes',
      name: 'contratacoes',
      component: Contratacoes,
    },
  ],
})

export default router
