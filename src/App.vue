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

    <main>
      <div class="row mt-3">
        <div class="col-sm-12 col-md-6">
          <div class="card text-success mx-3 " >
            <div class="card-body ">
              <h5 class="card-title">Plan Institucional de archivos PINAR</h5>
            </div>
            <div class="card-footer">
              <a href="../public/entityFiles/58558_7plan-institucional-de-archivo-pinar-2023.pdf" target="_blank"
                class="text-black">Pinar 2023</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="card text-success mx-3">
            <div class="card-body">
              <h5 class="card-title">Tabla de Retención Documental TRD</h5>
            </div>
            <div class="card-footer">
              <a href="../public/entityFiles/TRD DE LA ALCALDIA DE PLANETA RICA (1).xlsx" target="_blank"
                class="text-black">TRD
                2023</a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Mostramos el pie de página sólo si la página actual no es 'Login'-->
    <Footer v-if="currentPage != 'Login'" />

  </div>
</template>

<style scoped></style>
