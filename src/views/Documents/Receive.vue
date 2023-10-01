<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Nombre</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" v-model="form.name" >
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Código</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.code"></textarea>

          <button class="btn btn-primary" @click="saveReceive()">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import receiveService from "@/services/receiveService.js";

export default {

  name: "ReceiveView",

  components: {
  },

  data() {
    return {
      form:{
        name:"",
        code:"",
      }
    };
  },

  methods: {

    saveReceive(){
      receiveService.saveReceive(this.form)
    }

  },
};
</script>

<style scoped></style>
