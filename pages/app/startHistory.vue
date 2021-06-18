<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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

