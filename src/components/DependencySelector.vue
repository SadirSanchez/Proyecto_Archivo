<template>
    <div class="mb-3">
        <select id="productionUnit" class="form-select" v-model="selectedDependency" @change="selectDependency">
            <option disabled value="" selected>Seleccionar</option>
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
            selectedDependency: "" // Inicializa el valor seleccionado
        };
    },
    methods: {
        selectDependency() {
            this.$emit('input', this.selectedDependency); // Emite el evento 'input'
            this.$emit('selected', this.selectedDependency); // Emite el evento 'selected'
        },
        reset() {
            this.selectedDependency = ""; // Restablece el valor del selector
        },
    }
};
</script>
  
<style scoped></style>
