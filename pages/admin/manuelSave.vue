<template>
    <b-container>
        <FetchPriceHistory></FetchPriceHistory>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import FetchPriceHistory from "../../components/adminPanel/fetchPriceHistory.vue"
export default Vue.extend({
    layout:'adminLayout',
    components:{
        FetchPriceHistory
    }
})
</script>