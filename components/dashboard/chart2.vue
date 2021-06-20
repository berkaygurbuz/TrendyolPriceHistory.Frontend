<template>
    <b-container>
        <Chart type="line" :data="basicData" />
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
		return {
			basicData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','December','Mart','aralık','January', 'February', 'March', 'April', 'May', 'June', 'July','December','Mart','aralık'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56, 55, 40,20,80,65,65, 59, 80, 81, 56, 55, 40,20,80,65]
					},
				]
			},
            
		}
	},
    
})
</script>