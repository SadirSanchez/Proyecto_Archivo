<template>
    <select id="documentType" class="form-select">
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

        };
    },
};

</script>


<Style scoped></Style>