<template>
        <b-form>
      <b-form-input
        id="input-1"
        v-model="id"
        type="text"
        placeholder="Enter ID"
        required
      ></b-form-input>
      <b-button @click="acceptRequest" variant="success"> Accept </b-button>
    </b-form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    layout:"adminLayout",
    data(){
        return{
            id:"",
        }
    },
    methods:{
        async acceptRequest(){
            await this.$axios.post('http://localhost:5000/api/acceptRequest',{
                id:this.id
            }).then(function(response){
                console.log("success",response)
            })
        }
    }
})
</script>