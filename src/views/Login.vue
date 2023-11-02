<template>
  <div class="backgroundLogin-container">
    <div class="justify-content-center align-items-center" style="height: 70vh;">
      <div class="col-md-12 col-sm-12">
        <h1 class="text-success text-center mb-4">INICIAR SESIÓN</h1>
        <div class="mb-3">
          <label for="userLogin" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="userLogin" v-model="form.nameUser">
        </div>
        <div class="mb-3">
          <label for="passwordLogin" class="form-label">Contraseña</label>
          <input type="password" id="passwordLogin" class="form-control" v-model="form.password">
        </div>
        <button type="submit" class="btn btn-primary btn-block" @click="login()">Ingresar</button>
      </div>
    </div>
  </div>
</template>
  
<script>

import loginService from "@/services/loginService.js";
import axios from 'axios';


export default {

  name: "Login",

  components: {
  },

  data() {
    return {

      form: {
        nameUser: "",
        password: "",

      }

    };

  },

  methods: {

    login() {
      loginService.login(this.form)
        .then(res => {
          // Con la conexión exitosa se redirige al usuario a la página de inicio
          this.$router.push({ name: 'home' });
        })
        .catch(error => {
          console.error(error); // Maneja errores de la solicitud
        });
    },

  },
};
</script>
  
<style scoped></style>