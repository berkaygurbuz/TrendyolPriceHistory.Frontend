<template>
  <div >
    <div>
      <Logo />
      <h1 class="title">PriceHistory.Frontend</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
        <div>
      <Logo />
      <h1 class="title">PriceHistory.Frontend</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
        <div>
      <Logo />
      <h1 class="title">PriceHistory.Frontend</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
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
  
</style>
