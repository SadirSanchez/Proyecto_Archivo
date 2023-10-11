<template>
  <h1 class="text-success text-center mt-3">Registrar usuario</h1>

  <div class="container">
    <div class="row mt-5">

      <div class="col-6">
        <div class="mb-3">
          <label for="nameUser" class="form-label">Nombres</label>
          <input type="text" class="form-control" id="nameUser">
        </div>
        <div class="mb-3">
          <label for="tipoIdentificacion" class="form-label">Tipo de identificación</label>
          <select id="tipoIdentificacion" class="form-select">
            <option selected>Seleccionar</option>
            <option value="actas">CC</option>
            <option value="resoluciones">TI</option>
            <option value="contratos">CE</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="EmailUser" class="form-label">Correo Electronico</label>
          <input type="text" class="form-control" id="EmailUser">
        </div>
        <div class="mb-3">
          <label class="form-label">Dependencia</label>
          <DependencySelector></DependencySelector>
        </div>

      </div>

      <div class="col-6">
        <div class="mb-3">
          <label for="lastNameUser" class="form-label">Apellidos</label>
          <input type="text" class="form-control" id="lastNameUser">
        </div>
        <div class="mb-3">
          <label for="iDuser" class="form-label">Número de identificación</label>
          <input type="number" class="form-control" id="iDuser">
        </div>
        <div class="mb-3">
          <label for="phoneUser" class="form-label">Teléfono</label>
          <input type="number" class="form-control" id="phoneUser">
        </div>
        <div class="mb-3">
          <label for="rolUser" class="form-label">Rol</label>
          <select id="rolUser" class="form-select">
            <option selected>Seleccionar</option>
            <option value="actas">Administrador</option>
            <option value="resoluciones">Consultor</option>
          </select>
        </div>
      </div>

    </div>
    <button type="submit" class="btn btn-primary">Registrar usuario</button>
  </div>
</template>

  

<script>


export default {

  name: "RegisterView",

  components: {
  },

  data() {
    return {

    };
  },

  methods: {

  },
};
</script>
  
<style scoped></style>