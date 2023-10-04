<template>
  <h1 class="text-success text-center mt-3">Recepción de Documentos</h1>

  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-6">
        <div class="mb-3">

          <div class="mb-3">
            <label for="productionUnit" class="form-label">Dependencia Productora</label>
            <DependencySelector></DependencySelector>
          </div>

          <label for="documentType" class="form-label">Tipo de documento</label>
          <DocumentTypes></DocumentTypes>
        </div>
        <div class="mb-3">
          <label for="documentName" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="documentName">
        </div>
        <div class="mb-3">
          <label for="documentCode" class="form-label">Código</label>
          <input type="text" class="form-control" id="documentCode">
        </div>

        <div>
          <label class="form-label">Fecha de elaboración</label>
          <date-picker class="my-3"></date-picker>
        </div>

        <div class="mb-3">
          <label for="documentInventory" class="form-label">Inventario documental</label>
          <input type="text" class="form-control" id="documentInventory">
        </div>

        <div class="mb-3">
          <label for="physicalLocation" class="form-label">Ubicación en físico</label>
          <input type="text" class="form-control" id="physicalLocation">
        </div>
      </div>
      <div class="col-6">

        <!--Este boton es una imagen que represente la subida de los documentos a la nube-->
        <button type="submit" class="btn btn-success mt-5">Cargar documento</button>

        <h1>Vista previa de los documentos</h1>

        <button type="submit" class="btn btn-success ReceiveButton">Archivar</button>
        <button type="submit" class="btn btn-success ReceiveButton mx-3">Cancelar</button>
        <button type="submit" class="btn btn-success ReceiveButton mx-3">Inicio</button>

      </div>
    </div>
  </div>


  <!--
    <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Nombre</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" v-model="form.name" >
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Código</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.code"></textarea>

          <button class="btn btn-primary" @click="saveReceive()">Guardar</button>
        </div>
      </div>
    </div>
  </div>
  -->
</template>

<script>


import receiveService from "@/services/receiveService.js";

export default {

  name: "ReceiveView",

  components: {
  },

  data() {
    return {
      form: {
        name: "",
        code: "",
      }
    };
  },

  methods: {

    saveReceive() {
      receiveService.saveReceive(this.form)
    }

  },
};
</script>

<style scoped></style>
