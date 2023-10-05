<template>
    <h1 class="text-success text-center mt-3">Devolución de Documentos</h1>

    <div class="container-fluid">
        <div class="row mt-3 justify-content-center">
            <div class="col-6  ">

                <div class="mb-3">
                    <label for="documentNameReturn" class="form-label">Nombre/Código</label>
                    <input type="text" class="form-control" id="documentNameReturn">
                </div>

                <div>
                    <label class="form-label">Fecha de devolución</label>
                    <date-picker class="my-3"></date-picker>
                </div>

                <div class="mb-3">
                    <label for="DocumentaryInventoryReturn" class="form-label">Inventario documental entregado</label>
                    <input type="text" class="form-control" id="DocumentaryInventoryReturn">
                </div>

                <div class="mb-3">
                    <label for="responsibleReturn" class="form-label">Responsable de la devolución</label>
                    <input type="text" class="form-control" id="responsibleReturn">
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        Inventario documental completo
                    </label>
                </div>

                <div class="form-check mb-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Inventario documental incompleto
                    </label>
                </div>

                <button type="submit" class="btn btn-success">Recibir</button>

            </div>
        </div>
    </div>
</template>
     
   
<script>


export default {

    name: "ReturnView",

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