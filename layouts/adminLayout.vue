<template>
<div>


<left-navbar></left-navbar>


<div class="content-container">
  <div class="container-fluid">

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
    </b-form>
    <Nuxt />
  </div>
</div>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import leftNavbar from "../components/adminPanel/leftNavbar.vue";
export default Vue.extend({
    components:{
      leftNavbar
    },

    data(){
      return{
        name:"",
        price:"",
      }
    },
    methods:{
      async onClickSave(){
        await this.$axios.post('http://localhost:5000/api/createProduct',{
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
