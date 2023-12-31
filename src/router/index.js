import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/Login.vue'

// Import document
import Receive from '@/views/Documents/Receive.vue'
import Consult from '@/views/Documents/Consult.vue'
import Lend from '@/views/Documents/Lend.vue'
import Return from '@/views/Documents/Return.vue'
// Import users
import Register from '@/views/Users/Register.vue'
import ConsultUsers from '@/views/Users/ConsultUsers.vue'
import ChangePassword from '@/views/Users/ChangePassword.vue'
//Import alertsandstatistics
import DocumentNotifications from '@/views/alertsandstatistics/DocumentNotifications.vue'
import Statistics from '@/views/alertsandstatistics/Statistics.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/ChangePassword',
      name: 'ChangePassword',
      component: ChangePassword
    },

    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },

    //Router document

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

    //Router users

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
      component: ConsultUsers,
    },

    //Router alertsandstatistics

    {
      path: '/alertasyestadisticas',
      name: 'alertsandstatistics',
      redirect: '/alertasyestadisticas/documentnotifications',
      component: DocumentNotifications, // Cambia el componente del padre a Alerts
      children: [
        {
          path: '/alertasyestadisticas/documentnotifications', // Cambia el camino a 'alertas'
          name: 'documentnotifications', // Cambia el nombre a 'alerts'
          component: DocumentNotifications,
        }
      ]
    },

    {
      path: '/alertasyestadisticas/estadisticas',
      name: 'Statistics',
      component: Statistics,
    },

  ],



})

export default router
