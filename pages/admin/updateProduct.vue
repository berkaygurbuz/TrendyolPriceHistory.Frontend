<template>
<div>
    <h2>Update Product</h2>
    <UpdateTable></UpdateTable>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import UpdateTable from "../../components/adminPanel/table/update-table.vue"
export default Vue.extend({
    layout:"adminLayout",
    components:{
        UpdateTable
    }
})
</script>