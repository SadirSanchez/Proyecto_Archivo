<template>
    <div>
      <input type="date" v-model="selectedDate" class="form-control">
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
  
  </style>
  