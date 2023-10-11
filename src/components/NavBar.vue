<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">

          <!-- Documents-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Documentos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <RouterLink to="/documentos/recepcionar" class="dropdown-item" href="#">Recepcionar</RouterLink>
              </li>
              <li>
                <RouterLink to="/documentos/consultar" class="dropdown-item" href="#">Consultar</RouterLink>
              </li>

              <li>
                <RouterLink to="/documentos/prestar" class="dropdown-item" href="#">Prestar</RouterLink>
              </li>

              <li>
                <RouterLink to="/documentos/devolucion" class="dropdown-item" href="#">Devolución</RouterLink>
              </li>

            </ul>
          </li>

          <!--Users-->
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Usuarios
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <RouterLink to="/usuarios/registrar" class="dropdown-item" href="#">Registrar</RouterLink>
              </li>

              <li>
                <RouterLink to="/usuarios/consultarUsuarios" class="dropdown-item" href="#">Consultar usuarios
                </RouterLink>
              </li>
            </ul>
          </li>

          <!--Alerts And Statistics-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Alertas y estadisticas
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <RouterLink to="/alertasyestadisticas/documentnotifications" class="dropdown-item" href="#">Notificaciones
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/alertasyestadisticas/estadisticas" class="dropdown-item" href="#">Estadisticas
                </RouterLink>
              </li>

            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Manual</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="ml-auto" style="margin-right: 60px;">
      <div class="input-group">
        <div class="input-group-append">
          <button class="btn btn text-white-50 dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">Opciones</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Cambiar contraseña</a>
            <router-link to="/login" class="nav-link" @click="logout">Cerrar Sesión</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",

  components: {
    RouterLink,
  },
  methods: {
    logout() {
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>
