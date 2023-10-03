<template>
    <div>
      <input type="date" v-model="selectedDate">
    </div>
  </template>
  
  <script>
  export default {
    name: 'DatePicker',
    data() {
      return {
        selectedDate: '',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos CSS específicos del componente si es necesario */
  </style>
  