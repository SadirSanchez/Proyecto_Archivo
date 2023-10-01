<template>
  <nav>
    <div class="nav-wrapper blue lighten-1">
      <a class="NavInicio" href="pantallaprincipal.html">Inicio</a>
      <ul class="right hide-on-med-and-down">
        <li><RouterLink to="/documentos">Documentos</RouterLink></li>
        <ul id="dropdown-menu" class="dropdown-content">
            <li><a href="#!">Opción 1</a></li>
            <li><a href="#!">Opción 2</a></li>
            <li class="divider"></li>
            <li><a href="#!">Opción 3</a></li>
        </ul>
        <li><a href="Usuarios.html">Usuarios</a></li>
        <li><a href="Alertasyestadistica.html">Alertas y estadisticas</a></li>
        <li><a href="Manual.html">Manual</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink }  from 'vue-router'
export default {
  name: "NavBar",
  components: {
    RouterLink
  }
};
</script>
