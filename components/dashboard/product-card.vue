<template>
  <div>
    <b-container class="my-padding">
        <h2 class="heading-line text-center">Most Seller Products</h2>
      <b-row>
        <b-col md="4">
          <div class="my-container">
            <div class="card">
              <h4 class="productBrand mt-3">Trendyol Man</h4>
              <p class="productType text-center">Camel Erkek Oversize Fit Eşofman Takımı TMNSS21EM0041 </p>
              <img
                src="https://cdn.dsmcdn.com/ty68/product/media/images/20210216/19/63436002/130033157/1/1_org.jpg"
                alt="black tie"
                style="width: 190px; height: 240px"
                class="img-fluid"
              />
              <h2 class="price">₺89.99</h2>
            </div>
            <button class="cartBtn">SEE PRICE HISTORY</button>
            <button class="wishlistBtn">BUY PRODUCT</button>
          </div>
        </b-col>
        <b-col md="4">
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
        </b-col>
        <b-col md="4">
          <div class="my-container">
            <div class="card">
              <h4 class="productBrand mt-3">Defacto</h4>
              <p class="productType text-center">Diz Üstü Desenli Deniz Şortu M8328AZ21HS</p>
              <img
                src="https://cdn.dsmcdn.com/ty66/product/media/images/20210317/17/73117840/154381410/1/1_org.jpg"
                alt="black tie"
                style="width: 190px; height: 240px"
              />
              <h2 class="price">₺89.99</h2>
            </div>
            <button class="cartBtn">SEE PRICE HISTORY</button>
            <button class="wishlistBtn">BUY PRODUCT</button>
          </div>
        </b-col>
      </b-row>
            <b-row class="mt-5">
        <b-col md="4">
          <div class="my-container">
            <div class="card">
              <h4 class="productBrand mt-3">Trendyol Man</h4>
              <p class="productType text-center">Camel Erkek Oversize Fit Eşofman Takımı TMNSS21EM0041 </p>
              <img
                src="https://cdn.dsmcdn.com/ty68/product/media/images/20210216/19/63436002/130033157/1/1_org.jpg"
                alt="black tie"
                style="width: 190px; height: 240px"
                class="img-fluid"
              />
              <h2 class="price">₺89.99</h2>
            </div>
            <button class="cartBtn">SEE PRICE HISTORY</button>
            <button class="wishlistBtn">BUY PRODUCT</button>
          </div>
        </b-col>
        <b-col md="4">
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
        </b-col>
        <b-col md="4">
          <div class="my-container">
            <div class="card">
              <h4 class="productBrand mt-3">Defacto</h4>
              <p class="productType text-center">Diz Üstü Desenli Deniz Şortu M8328AZ21HS</p>
              <img
                src="https://cdn.dsmcdn.com/ty66/product/media/images/20210317/17/73117840/154381410/1/1_org.jpg"
                alt="black tie"
                style="width: 190px; height: 240px"
              />
              <h2 class="price">₺89.99</h2>
            </div>
            <button class="cartBtn">SEE PRICE HISTORY</button>
            <button class="wishlistBtn">BUY PRODUCT</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

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
  color: #49267f;
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
  background-color: #49267f;
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
  color: black;
  /* bottom: 35%; */
  margin-top: 5em;
}

.my-container:hover .cartBtn,
.my-container:hover .wishlistBtn {
  opacity: 1 !important;
  display: inline !important;
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
    color:#354A53!important;
}

.heading-line:after {
  content: '';
  display: block;
  margin-top: 32px;
  margin-bottom: 50px;
  width: 60px;
  height: 2px;
  background-color: #49267f;
}

.heading-line:after {
  margin-left: auto;
  margin-right: auto;
}

.productBrand{
    font-family: 'Lato',sans-serif;
    color:#49267f;
    font-weight: bold;
}
</style>