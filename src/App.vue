<script >
//Importamos los componentes RouterView, NavBar y Footer desde sus respectivas ubicaciones
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import moment from 'moment';

export default {
  components: {
    RouterView, // El componente RouteView para mostrar las vistas según la ruta
    NavBar, // La barra de navegación de la aplicación
    Footer, // El pie de página de la aplicación
  },
  data() {
    return {
      timeSessionActive: true
    };
  },

  methods: {
    validateTimeSesion() {
      const sessionInfo = JSON.parse(localStorage.getItem('userSesion'));

      if (sessionInfo) {
        const createAt = moment(sessionInfo.createat, 'YYYYMMDD HH:mm:ss'); // Parsea la fecha almacenada en localStorage
        const actualDateTime = moment(); // Obtiene la fecha y hora actual

        const diffInMinutes = actualDateTime.diff(createAt, 'minutes'); // Calcula la diferencia en minutos
        
        if(diffInMinutes >= 60){
          this.timeSessionActive = false
        }else {
          const sesion = {
            email: sessionInfo.email,
            createat: moment().format('YYYYMMDD HH:mm:ss'),
          };

          localStorage.setItem('userSesion', JSON.stringify(sesion))
        }
        
      
      }
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

      if (localStorage.getItem('userSesion') && this.timeSessionActive) {
        if (newValue === 'Login') this.$router.push({ name: 'home' });
      }

      else if (!this.timeSessionActive) {
        localStorage.removeItem('userSesion')
        this.timeSessionActive = true
        this.$router.push({ name: 'Login' })
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
