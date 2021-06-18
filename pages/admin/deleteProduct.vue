<template>
    <delete-table></delete-table>
</template>

<script lang="ts">
import Vue from 'vue'
import deleteTable from "../../components/adminPanel/table/delete-table.vue";
export default Vue.extend({
    layout:"adminLayout",
    components:{
        deleteTable
    }
})
</script>