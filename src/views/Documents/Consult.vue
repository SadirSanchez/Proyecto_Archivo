<template>
    <h1 class="text-success text-center mt-3">Consultar Documentos</h1>

    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">Tipo de documento</label>
                    <DocumentTypes></DocumentTypes>
                </div>
                <div class="mb-3">
                    <label for="documentNameConsult" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="documentNameConsult">
                </div>
                <div class="mb-3">
                    <label for="documentCodeConsult" class="form-label">Código</label>
                    <input type="text" class="form-control" id="documentCodeConsult">
                </div>

                <div class="mb-3">
                    <label class="form-label">Dependencia Productora</label>
                    <DependencySelector></DependencySelector>
                </div>

                <div>
                    <label class="form-label">Fecha de elaboración</label>
                    <date-picker class="my-3"></date-picker>
                </div>

                <button type="submit" class="btn btn-primary">Consultar</button>
                <button type="submit" class="btn btn-danger mx-3">Cancelar</button>

                <ul class="list-group mt-4">
                    <li class="list-group-item">Documento 1</li>
                    <li class="list-group-item">Documento 2</li>
                    <li class="list-group-item">Documento 3</li>
                    <li class="list-group-item">Documento 4</li>
                    <li class="list-group-item">Documento ...</li>
                </ul>

                <DocumentModel :visible="false" variant="primary"></DocumentModel>

            </div>
        </div>
    </div>
</template>
     
   
<script>

import DocumentModel from '@/components/DocumentModel.vue';

export default {

    name: "ConsultView",

    components: {
        DocumentModel
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
  