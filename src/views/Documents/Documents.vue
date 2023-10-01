<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3" style="cursor: pointer">
          <a
            :class="tabSelected === 'recepcionar' ? 'active-tab' : ''"
            @click="selectTab('recepcionar')"
            >Recepcionar</a
          >
        </li>
        <li class="tab col s3" style="cursor: pointer">
          <a
            @click="selectTab('consulta')"
            :class="tabSelected === 'consulta' ? 'active-tab' : ''"
            >Consulta</a
          >
        </li>
        <li class="tab col s3" style="cursor: pointer">
          <a
            @click="selectTab('prestamo')"
            :class="tabSelected === 'prestamo' ? 'active-tab' : ''"
            >Préstamo</a
          >
        </li>
        <li class="tab col s3" style="cursor: pointer">
          <a
            @click="selectTab('devolucion')"
            :class="tabSelected === 'devolucion' ? 'active-tab' : ''"
            >Devolución</a
          >
        </li>
      </ul>
    </div>
  
    <div v-if="tabSelected === 'recepcionar'">
        <Recepcionar />
    </div>
    <div v-if="tabSelected === 'consulta'">
        Consulta
    </div>
    <div v-if="tabSelected === 'prestamo'">
        Prestamo
    </div>
    <div v-if="tabSelected === 'devolucion'">
        Devolución
    </div>
  </div>
</template>

<script>
import Recepcionar from './Partials/Recepcionar.vue';
export default {
  name: "DocumentsView",

  components: {
    Recepcionar
  },

  data() {
    return {
      tabSelected: "",
    };
  },

  methods: {
    selectTab(step) {
      this.tabSelected = step;
    },
  },
};
</script>

<style scoped>
.active-tab {
  background-color: #42a5f6;
  color: white !important;
}
</style>
