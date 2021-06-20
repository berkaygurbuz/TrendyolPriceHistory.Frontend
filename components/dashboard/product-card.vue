<template>
  <div>
    <b-container class="my-padding">
        <h2 class="heading-line text-center">Most Seller Products</h2>
      <b-row>
        <b-col md="4" v-for="item in products" :key="item.id">
          <div class="my-container mt-5">
            <div class="card">
              <h4 class="productBrand mt-3">{{item.brand}}</h4>
              <p class="productType text-center">{{item.model}} </p>
              <img
                :src="item.imageUrl"
                :alt="item.model"
                style="width: 190px; height: 240px"
                class="img-fluid"
              />
              <h2 class="price">₺{{item.price}}</h2>
            </div>
            <button class="cartBtn"><nuxt-link :to="`/app/product/${item.id}`"> PRICE HISTORY</nuxt-link></button>
            <button class="wishlistBtn"><a :href="item.linkUrl" target="_blank">BUY PRODUCT</a></button>
          </div>
        </b-col>
        <!-- <b-col md="4">
          <div class="my-container">
            <div class="card">
              <h4 class="productBrand mt-3">TRENDYOL MAN</h4>
              <p class="productType text-center">Beyaz Basic Erkek Oversize Bisiklet Yaka Kısa Kollu T-Shirt TMNSS21TS0811</p>
              <img
                src="https://cdn.dsmcdn.com/ty64/product/media/images/20210128/20/58099823/135399562/1/1_org.jpg"
                alt="black tie"
                style="width: 190px; height: 240px"
              />
              <h2 class="price">₺89.99</h2>
            </div>
            <button class="cartBtn">SEE PRICE HISTORY</button>
            <button class="wishlistBtn">BUY PRODUCT</button>
          </div>
        </b-col> -->
        
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return{
      products:{},
    }
  },
  async mounted(){
    await this.$axios.get('getAllProducts',{}).then(res=>{
      console.log("res : ",res.data);
      this.products=res.data
      this.products=this.products.slice(0,6)
    })
  }
})
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/mark-pro');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.card {
  width: 300px;
  height: 430px;
  background-color: #f5f5f5;
  border-radius: 25px;
  box-shadow: 0px 25px 36px 12px rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.2s ease;
}

.my-container:hover .card {
  transform: scale(1.1);
  filter: brightness(50%);
}

.productType {
  color: grey;
  transform: translateY(-10px);
}

.price {
  font-size: 24px;
  color: #25178f;
  font-family: 'Lato',sans-serif;
  font-weight: bold
}

.cartBtn {
  margin-bottom: 5em;
}

.cartBtn,
.wishlistBtn {
  width: 150px;
  height: 50px;
  background-color: #140B5C;
  color: white;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  outline: none;
  font-weight: bold;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  /* padding-bottom: 60px; */
  font-family: 'Lato',sans-serif;
  font-size:0.85rem;
  transition: all 0.2s ease;
}

.wishlistBtn {
  background-color: #f5f5f5;
  color: #140B5C;
  /* bottom: 35%; */
  margin-top: 5em;
}

.my-container:hover .cartBtn,
.my-container:hover .wishlistBtn {
  opacity: 1 !important;
  display: inline !important;
}

.cartBtn a{
  text-decoration: none;
  background-color: #140B5C;
  color: white;
}

.wishlistBtn a{
  text-decoration: none;
  color:#140B5C;
}
.cartBtn:active,
.wishlistBtn:active {
  transform: scale(0.9);
}
.my-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media(max-width:768px){
  .my-container{
    margin-top:2rem!important;
  }
}

.my-padding{
    padding-top:90px;
    padding-bottom: 90px;
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

.productBrand{
    font-family: 'Lato',sans-serif;
    color:#25178f;
    font-weight: bold;
}

</style>