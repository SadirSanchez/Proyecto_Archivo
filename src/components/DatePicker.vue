<template>
  <div>
    <!-- <input type="date" v-model="selectedDate" class="form-control" @change="selectDate"> -->
    <VueDatePicker
      :range="true"
      utc
      auto-apply
      v-model="selectedDate"
      locale="es"
      :enable-time-picker="false"
    ></VueDatePicker>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "DatePicker",
  components: {
    VueDatePicker,
  },
  data() {
    return {
      selectedDate: "",
    };
  },
  methods: {
    selectDate(value) {
      this.$emit("selected", value); // Emite el evento 'selected'
    },
    reset() {
      this.selectedDate = ""; // Restablecemos el valor del selector de fechas
    },
  },
  watch: {
    selectedDate(newvalue){
      this.selectDate(newvalue)
    }
  }
};
</script>

<style scoped></style>
