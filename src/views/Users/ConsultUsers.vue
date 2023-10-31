<template>
  <div>
    <h1 class="text-success text-center mt-3">Consultar usuario</h1>

    <div class="container">
      <div class="row mt-5">
        <div class="col-6">
          <div class="mb-3">
            <label for="nameUser" class="form-label">Nombre</label>
            <input v-model="search.nameUser" type="text" class="form-control" id="nameUser">
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="iDuser" class="form-label">Número de identificación</label>
            <input v-model="search.iDuser" type="number" class="form-control" id="iDuser">
          </div>
        </div>
      </div>
      <button @click="fetchUsers" class="btn btn-primary">Consultar usuario</button>
    </div>

    <div class="container mt-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="user in users" :key="user.Id">
          {{ user.NameUser }}
          {{ user.LastName }}
        </li>
      </ul>
    </div>

    <div class="container mt-3">
      <button type="submit" class="btn btn-info">Modificar</button>
      <button type="submit" class="btn btn-danger mx-3">Eliminar</button>
    </div>
  </div>
</template>

<script>
import config from "@/services/config.js";
import axios from 'axios';

export default {
  name: "ConsultUsersView",
  data() {
    return {
      search: {
        nameUser: "",
        iDuser: null,
      },
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      // Realizar una solicitud al servidor para obtener usuarios
      // Usaremos axios para esto
      const apiUrl = config.app_url + 'users/ConsultUsers.php';
      axios.post(apiUrl, this.search).then((response) => {
        this.users = response.data;
      });
    },
  },
};
</script>
<style scoped></style>
