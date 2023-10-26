<template>
  <h1 class="text-success text-center mt-3">Registrar usuario</h1>

  <div class="container">
    <div class="row mt-5">

      <div class="col-6">
        <div class="mb-3">
          <label for="nameUser" class="form-label">Nombres</label>
          <input v-model="form.nameUser" type="text" class="form-control" id="nameUser">
        </div>
        <div class="mb-3">
          <label for="tipoIdentificacion" class="form-label">Tipo de identificación</label>
          <select id="tipoIdentificacion" class="form-select" v-model="form.typeId">
            <option selected>Seleccionar</option>
            <option value="CC">CC</option>
            <option value="TI">TI</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="EmailUser" class="form-label">Correo Electronico</label>
          <input type="text" class="form-control" id="EmailUser" v-model="form.eMail">
        </div>
        <div class="mb-3">
          <label class="form-label">Dependencia</label>
          <DependencySelector @selected="updateDependency" ></DependencySelector>
        </div>

      </div>

      <div class="col-6">
        <div class="mb-3">
          <label for="lastNameUser" class="form-label">Apellidos</label>
          <input type="text" class="form-control" id="lastNameUser" v-model="form.lastName">
        </div>
        <div class="mb-3">
          <label for="iDuser" class="form-label">Número de identificación</label>
          <input type="number" class="form-control" id="iDuser" v-model="form.iDuser">
        </div>
        <div class="mb-3">
          <label for="phoneUser" class="form-label">Teléfono</label>
          <input type="number" class="form-control" id="phoneUser" v-model="form.phone">
        </div>
        <div class="mb-3">
          <label for="rolUser" class="form-label">Rol</label>
          <select id="rolUser" class="form-select" v-model="form.role">
            <option selected>Seleccionar</option>
            <option value="Administrador">Administrador</option>
            <option value="Consultor">Consultor</option>
          </select>
        </div>
      </div>

    </div>
    <button type="submit" class="btn btn-primary" @click="saveUsers()">Registrar usuario</button>
  </div>
</template>

  

<script>

import usersService from "@/services/usersService.js";
import axios from 'axios';


export default {

  name: "RegisterView",

  components: {
  },

  data() {
    return {

      form: {
        nameUser: "",
        lastName:"",
        iDuser:"",
        dependency:"",
        eMail:"",
        phone:"",
        typeId:"",
        role:"",
       
      }

    };
    
  },

  methods: {

    saveUsers() {
      usersService.saveUsers(this.form)
        .then(res => {
        })
    },

    updateDependency(selectedDependency) {
      this.form.dependency = selectedDependency; // Actualizar form.dependency
    },

  },
};
</script>
  
<style scoped></style>