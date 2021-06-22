<template>
    <div>
        <product-woman></product-woman>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import productWoman from '~/components/dashboard/product-woman.vue'
export default Vue.extend({
  components: { productWoman },
    
})
</script>