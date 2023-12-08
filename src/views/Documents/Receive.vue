<template>
  <h1 class="text-success text-center mt-3">Recepción de Documentos</h1>

  <form enctype="multipart/form-data">
    <div class="container">
      <div class="row mt-3 justify-content-center">
        <div class="col-md-6 col-sm-12">
          <div class="mb-3">

            <div class="mb-3">
              <label for="productionUnit" class="form-label">Dependencia Productora</label>
              <DependencySelector @selected="updateDependency"></DependencySelector>
            </div>

            <label for="documentType" class="form-label">Tipo de documento</label>
            <DocumentTypes @selected="updateDocumentType"></DocumentTypes>
          </div>
          <div class="mb-3">
            <label for="documentNameReceive" class="form-label">Nombre</label>
            <input v-model="form.name" type="text" class="form-control" id="documentNameReceive">
          </div>
          <div class="mb-3">
            <label for="documentTimeReceive" class="form-label">Tiempo de retención</label>
            <input type="text" class="form-control" id="documentTimeReceive" v-model="form.time">
          </div>

          <div>
            <label class="form-label">Fecha de elaboración</label>
            <date-picker @selected="updateselectDatePicker"></date-picker>
          </div>

          <div class="mb-3 mt-3">
            <label for="DocumentInventoryReceive" class="form-label">Inventario documental</label>
            <input type="text" class="form-control" id="DocumentInventoryReceive" v-model="form.inventory">
          </div>

          <div class="mb-3">
            <label for="physicalLocation" class="form-label">Ubicación en físico</label>
            <input type="text" class="form-control" id="physicalLocation" v-model="form.location">
          </div>

          <div class="mb-3">
            <label for="loadDocument" class="form-label">Cargar documento</label>
            <input ref="imputFile" type="file" multiple class="form-control" id="loadDocument" @change="processFile">
          </div>

          <div class="progress mb-3" role="progressbar" aria-label="Example with label" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 25%">25%</div>
          </div>

          <div v-show="showSuccess" class="alert alert-success" role="alert">
            Registro exitoso!
          </div>

          <button type="button" class="btn btn-primary ReceiveButton" @click="saveReceive()">Archivar</button>
          <button type="button" class="btn btn-danger ReceiveButton">Cancelar</button>

        </div>
      </div>
    </div>
  </form>
</template>

<script>

import receiveService from "@/services/receiveService.js";
import axios from 'axios';

export default {

  name: "ReceiveView",

  components: {
  },

  data() {
    return {
      form: {
        dependency: "",
        documentType: "",
        name: "",
        time: "",
        selectedDatePicker: "",
        inventory: "",
        location: "",
      },

      fileSucces:false,

      showSuccess: false,

    };
  },

  methods: {

    processFile() {

      const file = this.$refs.imputFile.files[0]

      const validExtensions = ['.pdf']
      const validTamaño = [1000000]
      const fileExtension = file.name.slice(file.name.lastIndexOf('.'));
      if (!validExtensions.includes(fileExtension.toLowerCase())) {
        alert ('Archivo no permitido')
        this.fileSucces = false
      }else {
        this.fileSucces = true
      }
      const fileSize = file.size
      if (fileSize > validTamaño ){
        alert ('Archivo muy grande ')
        this.fileSucces = false
      }else{
        this.fileSucces = true
      }
      console.log(file)

    },

    resetForm() {
      this.form.dependency = "";
      this.form.documentType = "";
      this.form.name = "";
      this.form.time = "";
      this.form.selectedDatePicker = "";
      this.form.inventory = "";
      this.form.location = "";
    },

    updateDependency(selectedDependency) {
      this.form.dependency = selectedDependency; // Actualizar form.dependency
    },

    updateDocumentType(selectedDocumentType) {
      this.form.documentType = selectedDocumentType; // Actualizar form.documentType
    },
    saveReceive() {
      let formData = new FormData()
      formData.append('data',JSON.stringify(this.form))
      formData.append('file', this.fileSucces?this.$refs.imputFile.files[0]:null)
      receiveService.saveReceive(formData)
        .then(res => {
          if (res === "Registro insertado correctamente") {
            this.showSuccess = true;
            this.resetForm();
          }
        })
    },
    updateselectDatePicker(selectedDatePicker) {
      this.form.selectedDatePicker = selectedDatePicker; // Actualizar form.selectedDate
    },

  },
};
</script>

<style scoped></style>
