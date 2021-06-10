<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <ProductList></ProductList>
    <Chart></Chart>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/dashboard/navbar.vue'
import Header from '../components/dashboard/header.vue'
import ProductList from "../components/dashboard/product-list.vue"
import Chart from "../components/dashboard/chart.vue"
export default Vue.extend({
  
  components: {
    Navbar,
    Header,
    ProductList,
    Chart
  },
});
</script>

<style>

</style>
