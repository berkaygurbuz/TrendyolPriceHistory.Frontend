<template>
  <div>
    <Navbar></Navbar>

    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/dashboard/navbar.vue'

import Footer from "../components/dashboard/footer.vue";
export default Vue.extend({
  
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style>

</style>
