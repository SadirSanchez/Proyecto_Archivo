<template>
    <div class="mb-3">
        <select id="productionUnit" class="form-select" @change="selectDependency">
            <option selected>Seleccionar</option>
            <option value="despacho">Despacho</option>
            <option value="gobierno">Gobierno</option>
            <option value="secGeneral">Secretaria General</option>
            <option value="hacienda">Hacienda</option>
            <option value="planeacion">Planeación</option>
            <option value="educacion">Educación</option>
            <option value="salud">Salud</option>
            <option value="transito">Tránsito</option>
        </select>
    </div>
</template>
  
<script>
export default {
    name: 'DependencySelector',
    data() {
        return {
            selectedDependency: null // Inicializar el valor seleccionado
        };
    },
    methods: {
        selectDependency() {
            this.selectedDependency = event.target.value; // Guardar el valor seleccionado
            this.$emit('selected', this.selectedDependency); // Emitir el evento 'selected'
        }
    }
};
</script>
  
<style scoped></style>
