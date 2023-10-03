<template>
    <h1 class="text-success text-center mt-3">Consultar Documentos</h1>

    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-6">
                <div class="mb-3">
                    <label for="documentType" class="form-label">Tipo de documento</label>
                    <select id="documentType" class="form-select">
                        <option selected>Seleccionar</option>
                        <option value="actas">Actas</option>
                        <option value="resoluciones">Resoluciones</option>
                        <option value="decretos">Decretos</option>
                        <option value="contratos">Contratos</option>
                        <option value="historia-laboral">Historia Laboral</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="documentName" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="documentName">
                </div>
                <div class="mb-3">
                    <label for="documentCode" class="form-label">Código</label>
                    <input type="text" class="form-control" id="documentCode">
                </div>

                <div class="mb-3">
                    <label for="productionUnit" class="form-label">Dependencia Productora</label>
                    <select id="productionUnit" class="form-select">
                        <option selected>Seleccionar</option>
                        <option value="despacho">Despacho</option>
                        <option value="gobierno">Gobierno</option>
                        <option value="secGeneral">Secretaria General</option>
                        <option value="hacienda">Hacienda</option>
                        <option value="planeacion">Planeación</option>
                        <option value="educacion">Educación</option>
                        <option value="salud">Salud</option>
                        <option value="transito">Transito</option>
                    </select>
                </div>

                <div>
                    <label class="form-label">Fecha de elaboración</label>
                    <date-picker class="my-3"></date-picker>
                </div>

                <button type="submit" class="btn btn-success">Consultar</button>
                <button type="submit" class="btn btn-success mx-3">Regresar</button>

                <ul class="list-group mt-4">
                    <li class="list-group-item">Documento 1</li>
                    <li class="list-group-item">Documento 2</li>
                    <li class="list-group-item">Documento 3</li>
                    <li class="list-group-item">Documento 4</li>
                    <li class="list-group-item">Documento ...</li>
                </ul>

            </div>
        </div>
    </div>
</template>
     
   
<script>



export default {

    name: "ConsultView",

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
  