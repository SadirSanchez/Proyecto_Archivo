<template>

<h1 class="text-success text-center mt-3">Consultar usuario</h1>

<div class="container">
  <div class="row mt-5">

    <div class="col-6">
      <div class="mb-3">
        <label for="nameUser" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nameUser">
      </div>
    </div>

    <div class="col-6">
      <div class="mb-3">
        <label for="iDuser" class="form-label">Número de identificación</label>
        <input type="number" class="form-control" id="iDuser">
      </div>
    </div>

  </div>
  <button type="submit" class="btn btn-primary">Consultar usuario</button>
</div>

<div class="container">
  <ul class="list-group mt-3">
  <li class="list-group-item">Usuario 1</li>
  <li class="list-group-item">Usuario 2</li>
  <li class="list-group-item">Usuario 3</li>
  <li class="list-group-item">Usuario 4</li>
  <li class="list-group-item">Usuario..</li>
</ul>

<button type="submit" class="btn btn-info mt-3">Modificar</button>
<button type="submit" class="btn btn-danger mt-3 mx-3">Eliminar</button>
</div>
</template>
     
   
     <script>
     
     
     export default {
     
       name: "ConsultUsersView",
     
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