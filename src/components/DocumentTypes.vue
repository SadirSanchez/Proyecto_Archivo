<template>
    <select id="documentType" class="form-select" @change="selectDocumentType">
        <option selected>Seleccionar</option>
        <option value="actas">Actas</option>
        <option value="resoluciones">Resoluciones</option>
        <option value="decretos">Decretos</option>
        <option value="contratos">Contratos</option>
        <option value="historia-laboral">Historia Laboral</option>
    </select>
</template>

<script>

export default {

    name: 'DocumentTypes',

    data() {
        return {
            selectedDocumentType: null
        };
    },

    methods: {
        selectDocumentType() {
            this.selectedDocumentType = event.target.value; // Guardar el valor seleccionado
            this.$emit('selected', this.selectedDocumentType); // Emitir el evento 'selected'
        }
    }
};

</script>


<Style scoped></Style>