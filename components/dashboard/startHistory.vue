<template>
<b-container fluid>
  <b-container>
    <h2 class="heading-line text-center mt-5">Let's Start History</h2>
    <div class="text-center my-div">
    <b-form class="my-form">
      <b-form-input
        id="input-1"
        v-model="linkUrl"
        type="text"
        placeholder="Enter product link want to start price history"
        required
      ></b-form-input>
      <b-button class="mt-4" variant="primary" @click="onClickSave"> Start History </b-button>
    </b-form>
    </div>
    <h2 class="heading-line text-center">What is Start History?</h2>
    <p class="text-center px-5 my-text-font" >If the price tracking of the product you are looking for has not yet been started by our site, you can send the link of the product you want to start registration. It starts after the price history of the product controlled by our admins is accepted.</p>
  </b-container>
  </b-container>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
     data(){
      return{
        linkUrl:"",
      }
    },
    methods:{
      async onClickSave(){
        await this.$axios.post('/createProduct',{
          linkUrl:this.linkUrl,
          
        }).then(function (response){
          console.log("succes");

        })
      }
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('http://fonts.cdnfonts.com/css/mark-pro');
.container-fluid{
  background: #f3f6fa!important;
  
}
.container{
  padding-top: 60px!important;
  padding-bottom: 120px!important;

}

.heading-line{
    font-family: 'Lato',sans-serif;
    font-size:2.75rem;
    font-weight: 400;
    color:#140B5C!important;
}

.heading-line:after {
  content: '';
  display: block;
  margin-top: 32px;
  margin-bottom: 50px;
  width: 60px;
  height: 2px;
  background-color: #140B5C;
}

.heading-line:after {
  margin-left: auto;
  margin-right: auto;
}
.my-text-font{
  font-family: 'Mark Pro',sans-serif;
  font-size:1.3rem;
}
form{
  width: 50%!important;
  margin: auto;
}
.form-control{
  font-family: "Mark Pro",sans-serif;
  font-size: 1.2rem;
  height: 3.2rem!important;
}
.my-div{
  margin-bottom: 90px!important;
}
.btn-primary{
  font-family: "Lato",sans-serif;
  font-size: 1.2rem!important;
  background: #2d1ca7!important;
  border-color:#2d1ca7!important;
}

</style>

