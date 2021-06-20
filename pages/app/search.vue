<template>
    <div>
<Search></Search>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Search from "../../components/dashboard/search.vue"
export default Vue.extend({
    components:{
        Search,
    }
})
</script>