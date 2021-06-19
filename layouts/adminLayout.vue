<template>
<div>


<left-navbar></left-navbar>

<div class="content-container">
  <div class="container-fluid">

<!-- <my-table></my-table> 
    <h1>Hello world!</h1>
    <b-form>
       <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          placeholder="Enter product name"
          required
        ></b-form-input>
<b-button @click="onClickSave"> Save </b-button>
    </b-form> -->
    <Nuxt />
  </div>
</div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import leftNavbar from "../components/adminPanel/leftNavbar.vue";
import table from "../components/adminPanel/table/table.vue";
export default Vue.extend({
    middleware: ["auth"],
    components:{
      leftNavbar,
      "my-table":table
    },

    data(){
      return{
        name:"",
        price:"",
      }
    },
    methods:{
      async onClickSave(){
        await this.$axios.post('/createProduct',{
          name:this.name,
          
        }).then(function (response){
          console.log("succes");

        })
      }
    }
})

</script>

<style scoped>
.content-container{
  padding-left:220px!important ;
}
</style>
