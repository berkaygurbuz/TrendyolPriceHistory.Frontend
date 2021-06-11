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
            await this.$axios.get('http://localhost:5000/api/savePriceHistory').then(function(response){
                console.log("response : ",response)
            })
        }
    }
})
</script>
<style scoped>

</style>