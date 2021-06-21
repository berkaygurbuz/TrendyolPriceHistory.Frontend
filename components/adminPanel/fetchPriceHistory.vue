<template>
    <div class="text-center">
    <b-button variant="primary" class="mt-5" @click="fetchPriceHistory"><i class="fas fa-hand-paper mr-3"></i>Fetch Price of Products</b-button>
    <Toast />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Toast from 'primevue/toast';
export default Vue.extend({
    components:{
        Toast
    },
    methods:{
        async fetchPriceHistory(){
            await this.$axios.get('/savePriceHistory').then(res=>{
                console.log("response : ",res)
                if(res.status==200){
                    this.$toast.add({severity:'success', summary: 'Success', detail:'Manuel Fetching is successed.', life: 3000});
                }
            }).catch(e=>{
                this.$toast.add({severity:'error', summary: 'Error', detail:e, life: 3000});
                
            })
            
        }
    }
})
</script>
<style scoped>
.fa-hand-paper{
    font-size:3rem;
}
.btn-primary{
    font-size:3rem;
}
</style>