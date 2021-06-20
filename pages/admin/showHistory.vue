<template>
    <HistoryTable></HistoryTable>
</template>

<script lang="ts">
import Vue from 'vue'
import HistoryTable from "../../components/adminPanel/table/history-table.vue"
export default Vue.extend({
    layout:'adminLayout',
    components:{
        HistoryTable
    }
})
</script>