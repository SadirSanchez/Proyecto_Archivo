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
      currentPage: null, // Inicializamos la variable currenPage como nula
    };
  },
  created() {
    // En el ciclo de vida "created", accedemos a la información de la ruta actual y actualizamos currentPage 
    // despúes de un retraso de 100 milisegundos
    setTimeout(() => {
      this.currentPage = this.$route.name; // Actualizamos currenPage con el nombre de la ruta actual
    }, 100)
  }
};
</script>

<template>
  <div>
    <!-- Mostramos la barra de navegación solo si currentPage tiene un valor y si la página actual no es 'Login'-->
    <NavBar v-if="currentPage && currentPage != 'Login'" />
    
    <!-- Usamos RouterView para mostrar la vista de la página actual-->
    <RouterView />

    <!-- Mostramos el pie de página sólo si la página actual no es 'Login'-->
    <Footer v-if="currentPage != 'Login'" />

  </div>
</template>

<style scoped></style>
