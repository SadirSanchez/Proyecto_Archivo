<template>
  <h1 class="text-success text-center mt-3">Cambiar contraseña</h1>

  <form>
    <div class="row mt-4 justify-content-center">
      <div class="col-md-3 col-sm-3">
        <div class="mb-3">
          <label for="oldPassword" class="form-label">Contraseña anterior</label>
          <input type="password" class="form-control" id="oldPassword">
        </div>
        <div class="mb-3">
          <label for="newPassword" class="form-label">Nueva contraseña</label>
          <input type="password" class="form-control" id="newPassword">
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" id="confirmPassword">
        </div>
        <button type="submit" class="btn btn-primary">Cambiar</button>
      </div>
    </div>
  </form>
</template>
     
   
<script>


export default {

  name: "ChangePasswordView",

  components: {
  },

  data() {
    return {

    };
  },

  methods: {

  },
};
</script>
     
<style scoped></style>