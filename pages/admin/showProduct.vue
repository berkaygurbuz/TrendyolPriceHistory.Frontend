<template>
    <my-table></my-table>
</template>

<script lang="ts">
import Vue from 'vue'
import table from "../../components/adminPanel/table/table.vue";
export default Vue.extend({
    layout:"adminLayout",
    components:{
        "my-table":table
    }
})
</script>