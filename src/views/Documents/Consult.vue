<template>
    <h1 class="text-success text-center mt-3">Consultar Documentos</h1>

    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">Tipo de documento</label>
                    <DocumentTypes @selected="updateDocumentType"></DocumentTypes>
                </div>
                <div class="mb-3">
                    <label for="documentNameConsult" class="form-label">Nombre</label>
                    <input v-model="form.documentName" type="text" class="form-control" id="documentNameConsult">
                </div>

                <div class="mb-3">
                    <label class="form-label">Dependencia Productora</label>
                    <DependencySelector @selected="updateDependency"></DependencySelector>
                </div>

                <div>
                    <label class="form-label">Fecha de elaboración</label>
                    <date-picker class="my-3" @selected="updateselectDatePicker"></date-picker>
                </div>

                <button type="button" @click="consultDocuments" class="btn btn-primary">Consultar</button>
                <button type="button" class="btn btn-danger mx-3">Cancelar</button>

                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo de documento</th>
                            <th>Fecha de elaboración</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="document in documents" :key="document.DocumentName">
                            <td>{{ document.DocumentName }}</td>
                            <td>{{ document.DocumentType }}</td>
                            <td>{{ document.DateElaboration }}</td>
                        </tr>
                    </tbody>
                </table>

                <DocumentModel :visible="false" variant="primary"></DocumentModel>

            </div>
        </div>
    </div>
</template>
     
   
<script>

import DocumentModel from '@/components/DocumentModel.vue';
import axios from 'axios';
import consultDocService from "@/services/consultDocService.js";

export default {

    name: "ConsultView",

    components: {
        DocumentModel
    },

    data() {
        return {
            form: {
                documentName: "",
                documentType: "",
                originDependency: "",
                dateElaboration: "",
            },
            documents: [], // Agregamos un array para almacenar los documentos obtenidos

        };
    },

    methods: {

        updateDependency(selectedDependency) {
            this.form.originDependency = selectedDependency; // Actualizar form.originDependency
        },

        updateDocumentType(selectedDocumentType) {
            this.form.documentType = selectedDocumentType; // Actualizar form.documentType
        },

        updateselectDatePicker(selectedDatePicker) {
            this.form.dateElaboration = selectedDatePicker; // Actualizar form.dateElaboration
        },

        consultDocuments() {
            // se crea un objeto con los datos del formulario
            const formData = {
                documentName: this.form.documentName,
                documentType: this.form.documentType,
                originDependency: this.form.originDependency,
                dateElaboration: this.form.dateElaboration,
            };

            //Se utiliza el servicio para realizar la consulta
            consultDocService.consultDoc(formData)
                .then(response => {

                    this.documents = response;
                })
                .catch(error => {
                    // Maneja los errores del servicio
                    console.error(error);
                });
        },





    },
};
</script>
     
<style scoped></style>
  