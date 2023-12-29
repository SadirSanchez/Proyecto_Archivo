<template>
  <div>
    <input type="date" v-model="selectedDate" class="form-control" @change="selectDate">
  </div>
</template>
  
<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      selectedDate: '',
      selectedDatePicker: '',
    };
  },
  methods: {
    selectDate() {
      this.selectedDatePicker = event.target.value; // Guardar el valor seleccionado
      this.$emit('selected', this.selectedDatePicker); // Emite el evento 'selected'
    },
    reset() {
      this.selectedDate = ''; // Restablecemos el valor del selector de fechas
      this.selectedDatePicker = ''; // Restablece el valor seleccionado
    }
  }
};
</script>
  
<style scoped></style>
  