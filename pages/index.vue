<template>
  <div >
        <Header></Header>
    <ProductList></ProductList>
    <!-- <Chart></Chart> -->
    
    <ProductCard></ProductCard>
    <Pros></Pros>
    <NewProduct></NewProduct>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/dashboard/header.vue'
import ProductList from "../components/dashboard/product-list.vue"
import Chart from "../components/dashboard/chart.vue"
import ProductCard from "../components/dashboard/product-card.vue";
import Pros from "../components/dashboard/pros.vue"
import NewProduct from "../components/dashboard/newProduct.vue";
export default Vue.extend({
  components:{
    Header,
    ProductList,
    Chart,
    ProductCard,
    Pros,
    NewProduct
  },
  data() {
    return {
      items: {},
    }
  },
  created(){
    
       this.$axios
        .get('http://localhost:3430/api/Product/getProducts')
        .then(({ data }) => {
          this.items = data
        })

  },
})
</script>

<style>
  
</style>
