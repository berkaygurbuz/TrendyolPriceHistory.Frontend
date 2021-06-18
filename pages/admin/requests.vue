<template>
        <!-- <b-form>
      <b-form-input
        id="input-1"
        v-model="id"
        type="text"
        placeholder="Enter ID"
        required
      ></b-form-input>
      <b-button @click="acceptRequest" variant="success"> Accept </b-button>
    </b-form> -->
    <b-container fluid>
        <h2>Request</h2>
        <AcceptTable></AcceptTable>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AcceptTable from "../../components/adminPanel/table/accept-table.vue"
export default Vue.extend({
    layout:"adminLayout",
    components:{
        AcceptTable
    },
    data(){
        return{
            id:"",
        }
    },
    methods:{
        // async acceptRequest(){
        //     var myId=this.id;
        //     var endpoint="http://localhost:5000/api/acceptRequest/" + myId
        //     await this.$axios.put(endpoint,{
        //         id:this.id
        //     }).then(res=>{
        //         console.log("success",res)
        //     })
        // }
    }
})
</script>