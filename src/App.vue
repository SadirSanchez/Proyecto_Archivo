<script >
//Importamos los componentes RouterView, NavBar y Footer desde sus respectivas ubicaciones
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import moment from 'moment';
import loginService from './services/loginService';

export default {
  components: {
    RouterView, // El componente RouteView para mostrar las vistas según la ruta
    NavBar, // La barra de navegación de la aplicación
    Footer, // El pie de página de la aplicación
  },
  data() {
    return {
      isValidSesionTime: true,
      isValidSesionTimeServer: false
    };
  },

  methods: {
    validateTimeSesion() {
      const sessionInfo = JSON.parse(localStorage.getItem('userSesion'));

      if (sessionInfo) {
        const createAt = moment(sessionInfo.createat, 'YYYY-MM-DD HH:mm:ss'); // Parsea la fecha almacenada en localStorage
        const actualDateTime = moment(); // Obtiene la fecha y hora actual

        const diffInMinutes = actualDateTime.diff(createAt, 'minutes'); // Calcula la diferencia en minutos

        if (diffInMinutes >= 60) {
          this.isValidSesionTime = false
        } else {
          const sesion = {
            email: sessionInfo.email,
            createat: moment().format('YYYY-MM-DD HH:mm:ss'),
          };
          this.validateSesionServer(sesion);

        }


      }
    },
    validateSesionServer(sesion) {
      const dataSesion = JSON.parse(localStorage.getItem('userSesion'))
      loginService.validateSesion(dataSesion)
      .then(res => {
        if (res === 'Ok') {
          this.isValidSesionTimeServer = true;
          loginService.upDateSesion(sesion)
          localStorage.setItem('userSesion', JSON.stringify(sesion))
        } else {
          this.isValidSesionTimeServer = false;
          this.deleteSesion(sesion);
        }
      })
    },

    deleteSesion(sesion){
      loginService.deleteSesion(sesion).then(res=>{
        localStorage.removeItem('userSesion')
        this.isValidSesionTime = true
        this.$router.push({ name: 'Login' })
      })
    }

  },

  computed: {
    currentPage() {
      return this.$route.name; // Se retorna el nombre de la ruta actual
    }
  },
  watch: {
    currentPage(newValue) {
      this.validateTimeSesion()

      if (!localStorage.getItem('userSesion')) {
        if (newValue !== 'Login') this.$router.push({ name: 'Login' });
      }

      if (localStorage.getItem('userSesion') && this.isValidSesionTime) {
        if (newValue === 'Login') this.$router.push({ name: 'home' });
      }

      else if (!this.isValidSesionTime) {
        this.deleteSesion(JSON.parse(localStorage.getItem('userSesion')));
      }

    }
  }
};

</script>


<template>
  <div>
    <!-- Mostramos la barra de navegación solo si currentPage tiene un valor y si la página actual no es 'Login'-->
    <NavBar v-if="currentPage && currentPage !== 'Login'" />

    <!-- Usamos RouterView para mostrar la vista de la página actual-->
    <RouterView />

    <!-- Mostramos el pie de página sólo si la página actual no es 'Login'-->
    <Footer v-if="currentPage !== 'Login'" />

  </div>
</template>

<style scoped></style>
