<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <ProductList></ProductList>
    <!-- <Chart></Chart> -->
    
    <ProductCard></ProductCard>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/dashboard/navbar.vue'
import Header from '../components/dashboard/header.vue'
import ProductList from "../components/dashboard/product-list.vue"
import Chart from "../components/dashboard/chart.vue"
import ProductCard from "../components/dashboard/product-card.vue";
import Footer from "../components/dashboard/footer.vue";
export default Vue.extend({
  
  components: {
    Navbar,
    Header,
    ProductList,
    Chart,
    ProductCard,
    Footer,
  },
});
</script>

<style>

</style>
