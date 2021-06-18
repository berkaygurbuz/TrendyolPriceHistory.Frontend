<template>
  <b-container fluid class="products-list mt-5 my-padding">
    <h2 class="heading-line text-center">What We Offers?</h2>
    <b-container class="justify-content-center">
      <b-row class="text-center">
        <b-col md="4">
          <i class="fas fa-hand-holding-usd mb-5" style="font-size:7rem;color:#E1306C"></i>
          <h2>Save Your Money</h2>
        </b-col>
        <b-col md="4">
          <i class="fas fa-chart-bar mb-5" style="font-size:7rem;color:#E1306C"></i>
          <h2>See Price History</h2>
        </b-col>
        <b-col md="4">
          <i class="fas fa-tags mb-5" style="font-size:7rem;color:#E1306C"></i>
          <h2>Be Aware Of Discounts</h2>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('http://fonts.cdnfonts.com/css/mark-pro');

.products-list {
  background-color: #f3f6fa;
  /* padding: 60px 0 !important; */
  margin-top: 8em !important;
}

.col-md-4 h2{
  font-family: "Lato",sans-serif;

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
.my-padding{
    padding-top:90px;
    padding-bottom: 90px;
}
</style>