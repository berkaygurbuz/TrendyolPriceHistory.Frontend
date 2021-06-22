<template>
<div>


<left-navbar></left-navbar>
<div class="content-container">
  <div class="container-fluid">


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
    // middleware: ["auth"],
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
