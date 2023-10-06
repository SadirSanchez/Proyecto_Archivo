<script >
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default { 
  components: {
    RouterView,
    NavBar,
    Footer
  }
}
</script>

<template>
  <NavBar/>
  <RouterView/>
  <Footer/>
</template>

<style scoped>

</style>
