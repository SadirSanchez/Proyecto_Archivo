<template>
    <select id="documentType" class="form-select" v-model="selectedDocumentType" @change="selectDocumentType">
        <option disabled value="" selected>Seleccionar</option>
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
            selectedDocumentType: ""
        };
    },

    methods: {
        selectDocumentType()
        {
            this.$emit('input', this.selectedDocumentType); // Emite el evento 'input'
            this.$emit('selected', this.selectedDocumentType); // Emite el evento 'selected'
        },
        reset() {
            this.selectedDocumentType = ""; // Restablece el valor del selector
        }
    }
};

</script>


<Style scoped></Style>