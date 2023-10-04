<template>
    <h1 class="text-success text-center mt-3">Prestar Documentos</h1>

    <div class="container-fluid">
        <div class="row mt-3 justify-content-center">
            <div class="col-6  ">

                <div class="mb-3">
                    <label for="documentType" class="form-label">Tipo de documento</label>
                    <DocumentTypes></DocumentTypes>
                </div>

                <div class="mb-3">
                    <label for="productionUnit" class="form-label">Dependencia Productora</label>
                    <DependencySelector></DependencySelector>
                </div>

                <div class="mb-3">
                    <label for="documentName" class="form-label">Nombre/Código</label>
                    <input type="text" class="form-control" id="documentName">
                </div>

                <div class="mb-3">
                    <label for="documentCode" class="form-label">Inventario documental</label>
                    <input type="text" class="form-control" id="documentCode">
                </div>

                <div class="mb-3">
                    <label for="documentCode" class="form-label">Responsable del prestamo</label>
                    <input type="text" class="form-control" id="documentCode">
                </div>

                <div>
                    <label class="form-label">Fecha de prestamo</label>
                    <date-picker class="my-3"></date-picker>
                </div>

                <button type="submit" class="btn btn-success">Prestar</button>

            </div>
        </div>
    </div>
</template>
     
   
<script>


export default {

    name: "LendtView",

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
  