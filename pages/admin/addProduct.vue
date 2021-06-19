<template>
    <AddProduct></AddProduct>
</template>

<script lang="ts">
import Vue from 'vue'
import AddProduct from "../../components/adminPanel/addProduct.vue"
export default Vue.extend({
    layout:"adminLayout",
    components:{
        AddProduct
    }
})
</script>