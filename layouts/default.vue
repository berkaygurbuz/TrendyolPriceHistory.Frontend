<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>

    <b-container fluid class="products mt-5">
      <b-container class="justify-content-center">
        <b-row>
          <b-col md="3">
            <h2>Product 1</h2>
          </b-col>
          <b-col md="3">
            <h2>Product 2</h2>
          </b-col>
          <b-col md="3">
            <h2>Product 3</h2>
          </b-col>
          <b-col md="3">
            <h2>Product 4</h2>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/navbar.vue'
import Header from '../components/header.vue'
export default Vue.extend({
  components: {
    Navbar,
    Header,
  },
})
</script>

<style>
.products {
  background-color: #f3f6fa;
  padding: 60px 0 !important;
  margin-top: 8em !important;
}
</style>
