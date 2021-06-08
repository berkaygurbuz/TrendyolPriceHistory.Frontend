<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <ProductList></ProductList>

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/navbar.vue'
import Header from '../components/header.vue'
import productList from "../components/product-list.vue";
import ProductList from '../components/product-list.vue';
export default Vue.extend({
  components: {
    Navbar,
    Header,
    ProductList,
  },
})
</script>

<style>

</style>
