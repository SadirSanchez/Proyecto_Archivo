<script >
//Importamos los componentes RouterView, NavBar y Footer desde sus respectivas ubicaciones
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    RouterView, // El componente RouteView para mostrar las vistas según la ruta
    NavBar, // La barra de navegación de la aplicación
    Footer, // El pie de página de la aplicación
  },
  data() {
    return {
    };
  },
  computed: {
    
      currentPage() {
       return this.$route.name; // Se retorna el nombre de la ruta actual
      } 
  },
  watch:{
    currentPage(newValue){
      
      if(localStorage.getItem('userSesion') && newValue === 'Login'){
        this.$router.push({ name: 'home' });
      }

      if(newValue !== 'Login' && !localStorage.getItem('userSesion')) {
        this.$router.push({ name: 'Login' });
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
