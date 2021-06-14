<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.name }} -- {{ item.isApprove }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      data: {},
    }
  },
  async created() {
    await this.$axios
      .get('http://localhost:5000/api/getAllProducts')
      .then((res) => {
        console.log('product data : ', res)
        this.data = res.data
      })
  },
})
</script>