<template>
    <h1 class="text-success text-center mt-3">Prestar Documentos</h1>

    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-6 col-sm-12">

                <div class="mb-3">
                    <label class="form-label">Tipo de documento</label>
                    <DocumentTypes></DocumentTypes>
                </div>

                <div class="mb-3">
                    <label class="form-label">Dependencia Productora</label>
                    <DependencySelector></DependencySelector>
                </div>

                <div class="mb-3">
                    <label for="documentNameLend" class="form-label">Nombre/Código</label>
                    <input type="text" class="form-control" id="documentNameLend">
                </div>

                <div class="mb-3">
                    <label for="DocumentInventoryLend" class="form-label">Inventario documental</label>
                    <input type="text" class="form-control" id="DocumentInventoryLend">
                </div>

                <div class="mb-3">
                    <label for="responsibleLoan" class="form-label">Responsable del prestamo</label>
                    <input type="text" class="form-control" id="responsibleLoan">
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
  