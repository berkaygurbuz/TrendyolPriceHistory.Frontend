<template>
  <b-container>
    <Products></Products>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Products from "../../components/dashboard/products.vue"
export default Vue.extend({
    components:{
      Products
    }
})
</script>