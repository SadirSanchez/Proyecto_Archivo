<template>
    <h1 class="text-success text-center mt-3">Consultar Documentos</h1>

    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">Tipo de documento</label>
                    <DocumentTypes ref="DocumentTypes" @selected="updateDocumentType"></DocumentTypes>
                </div>
                <div class="mb-3">
                    <label for="documentNameConsult" class="form-label">Nombre</label>
                    <input v-model="form.documentName" type="text" class="form-control" id="documentNameConsult">
                </div>

                <div class="mb-3">
                    <label class="form-label">Dependencia Productora</label>
                    <DependencySelector ref="dependencySelector" @input="updateDependency" @selected="updateDependency">
                    </DependencySelector>
                </div>

                <div>
                    <label class="form-label">Fecha de elaboración</label>
                    <date-picker ref="datePicker" class="my-3" @selected="updateselectDatePicker"></date-picker>
                </div>

                <button type="button" @click="consultDocuments" class="btn btn-primary">Consultar</button>
                <button type="button" @click="resetForm" class="btn btn-danger mx-3">Nueva consulta</button>
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
            this.form.originDependency = selectedDependency; // Actualiza form.originDependency
        },

        updateDocumentType(selectedDocumentType) {
            this.form.documentType = selectedDocumentType; // Actualiza form.documentType
        },

        updateselectDatePicker(selectedDatePicker) {
            this.form.dateElaboration = selectedDatePicker; // Actualiza form.dateElaboration
        },

        consultDocuments() {

            // Reiniciamos el array de documentos antes de realizar una nueva consulta
            this.documents = [];
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

        resetForm() {
            // Restablece los valores del formulario a su estado inicial
            this.form = {
                documentName: "",
                documentType: "",
                originDependency: "",
                dateElaboration: "",
            };

            // Limpia el array de documentos
            this.documents = [];

            // Se llama al método reset de cada componente
            this.$refs.DocumentTypes.reset();
            this.$refs.dependencySelector.reset();
            this.$refs.datePicker.reset();

        },

    },
};
</script>
     
<style scoped></style>
  