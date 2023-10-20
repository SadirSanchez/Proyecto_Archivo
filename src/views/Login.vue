<template>
    <div class="backgroundLogin-container">
      <div class="justify-content-center align-items-center" style="height: 70vh;">
        <div class="col-md-12 col-sm-12">
          <h1 class="text-success text-center mb-4">INICIAR SESIÓN</h1>
          <form @submit="login">
            <div class="mb-3">
              <label for="userLogin" class="form-label">Usuario</label>
              <input type="text" class="form-control" id="userLogin" v-model="username">
            </div>
            <div class="mb-3">
              <label for="passwordLogin" class="form-label">Contraseña</label>
              <input type="password" id="passwordLogin" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Lógica de autenticación, como enviar los datos al servidor.
        console.log('Usuario: ', this.username);
        console.log('Contraseña: ', this.password);
        // Resto de la lógica de autenticación
      }
    }
  };
  </script>
  