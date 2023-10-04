<template>
    <div class="mb-3">
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
</template>
  
<script>
export default {
    name: 'DependencySelector',
    data() {
        return {

        };
    },
};
</script>
  
<style scoped></style>