import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Receive from '@/views/Documents/Receive.vue'
import Consult from '@/views/Documents/Consult.vue'
import Lend from '@/views/Documents/Lend.vue'
import Return from '@/views/Documents/Return.vue'
import Register from '@/views/Users/Register.vue'
import ConsultUsers from '@/views/Users/ConsultUsers.vue'
import ChangePassword from '@/views/Users/ChangePassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documentos',
      name: 'document',
      redirect: '/documentos/recepcionar',
      component: Receive, // Cambia el componente del padre a Receive
      children: [
        {
          path: 'recepcionar', // Cambia el camino a 'recepcionar'
          name: 'documentReceive', // Cambia el nombre a 'documentReceive'
          component: Receive,
        },

      ]
    },
    {
      path: '/documentos/consultar',
      name: 'documentConsult',
      component: Consult,
    },

    {
      path: '/documentos/prestar',
      name: 'documentLend',
      component: Lend,
    },

    {
      path: '/documentos/devolucion',
      name: 'documentReturn',
      component: Return,
    },

    {
      path: '/usuarios',
      name: 'users',
      redirect: '/usuarios/registrar',
      component: Register, // Cambia el componente del padre a Register
      children: [
        {
          path: 'registrar', // Cambia el camino a 'registrar'
          name: 'usersRegister', // Cambia el nombre a 'documentRegister'
          component: Register,
        }
      ]
    },

    {
      path: '/usuarios/consultarUsuarios',
      name: 'UsersconsultUsers',
      component:ConsultUsers, 
    },

    {
      path: '/usuarios/cambiarContraseña',
      name: 'UsersChangePassword',
      component:ChangePassword, 
    },

  ]
})

export default router
