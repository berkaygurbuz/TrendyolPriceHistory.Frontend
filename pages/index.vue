<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">PriceHistory.Frontend</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{item.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
