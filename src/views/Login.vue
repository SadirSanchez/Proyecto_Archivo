<template>
    
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height: 70vh;">
            <div class="col-md-3">
                <h1 class="text-success text-center mb-4">ARCHIVO</h1>
                <form>
                    <div class="mb-3">
                        <label for="userLogin" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="userLogin">
                    </div>
                    <div class="mb-3">
                        <label for="passwordLogin" class="form-label">Contraseña</label>
                        <input type="password" id="passwordLogin" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>

export default {

    name: 'LoginView',

    components: {

    },

    data() {
        return {

        };

    },

    methods: {

    }
};
</script>

<style scoped></style>