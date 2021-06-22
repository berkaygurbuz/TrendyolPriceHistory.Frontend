<template>
    <div>
        <product-man></product-man>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductMan from "../../components/dashboard/product-man.vue"
export default Vue.extend({
    components:{
        ProductMan
    }
})
</script>