<template>
    <div>
    <b-button variant="primary" class="mt-5" @click="fetchPriceHistory">Fetch Price of Products</b-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods:{
        async fetchPriceHistory(){
            await this.$axios.get('/savePriceHistory').then(res=>{
                console.log("response : ",res)
            })
        }
    }
})
</script>
<style scoped>

</style>