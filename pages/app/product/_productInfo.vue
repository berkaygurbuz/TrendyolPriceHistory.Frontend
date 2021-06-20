<template>
  <b-container class="my-container">
    <div class="wrapper">
      <div class="col-1-2">
        <div class="product-wrap">
          <div class="product-shot">
            <img
              :src="product.imageUrl"
              alt=""
              style="width: 350px; height: 524px"
            />
          </div>
        </div>
      </div>

      <div class="col-1-2">
        <div class="product-info">
          <h2>{{ product.brand }}</h2>
          <div class="desc">
            {{ product.model }}
          </div>
          <h3 class="mt-4">₺{{ product.price }}</h3>
          <a href="" class="button">Buy Product</a>
        </div>
      </div>
    </div>
    <b-container class="price-container">
      <h2 class="text-center">Price History</h2>
      <Chart  class="mt-5" type="line" :data="basicData" />
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  data() {
    return {
      data: [],
      manuelLabels: [],
      basicData: {
        labels: [],
        datasets: [
          {
            label: 'Price',
            backgroundColor: '#42A5F5',
            data: [],
          },
        ],
      },
      product: {},
    }
  },
  async mounted() {
    console.log('route : ', this.$route.params.productInfo)
    await this.$axios
      .get('getProduct?id=' + this.$route.params.productInfo, {})
      .then((res) => {
        console.log('response : ', res)
        this.product = res.data
      })

    await this.$axios
      .get(
        'price/getPriceHistoryById?productId=' + this.$route.params.productInfo,
        {}
      )
      .then((res) => {
        console.log('res', res)
        res.data.forEach((item) => {
          this.manuelLabels.push(item.date)
          console.log('item pricce: ', item.price)
          this.data.push(item.price)
        })
      })




    this.fillData()
  },
  methods: {
    fillData() {
      this.basicData = {
        labels: this.manuelLabels,
        datasets: [
          {
            data: this.data,
            label: 'Price',
            backgroundColor: '#42A5F5',
          },
        ],
      }
    },
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
  font-family: 'Lato', sans-serif;
}
img {
  max-width: 100%;
}

.my-container {
  padding-top: 90px;
  padding-bottom: 30px;
}

.col-1-2 {
  float: left;
  width: 50%;
}

.product-wrap {
  margin: 0 auto;
  width: 350px;
}

.product-wrap .product-shot {
  transition: all 0.5s ease;
}

.product-wrap .product-shot:hover {
  transform: scale(1.1);
}

.product-info h2 {
  padding-bottom: 15px;
  font-size: 32px;
  border-bottom: 1px solid #d9d9d9;
}

.price-container h2 {
  padding-bottom: 15px;
  font-size: 32px;
  margin-top: 38rem !important;
  border-bottom: 1px solid #d9d9d9;
}
.price-container {
  padding-bottom: 90px;
}

.product-info .desc {
  margin-top: 25px;
  font-size: 16px;
  line-height: 1.6;
}

.product-info .sizing-list {
  margin-top: 25px;
  padding: 0px;
  list-style-type: none;
}

.product-info .size {
  display: inline;
  margin-right: 10px;
  padding: 10px 15px;
  color: rgb(194, 194, 194);
  border: 1px solid rgb(194, 194, 194);
  cursor: pointer;
}

.button {
  display: inline-block;
  margin-top: 35px;
  padding: 12px 25px;
  font-size: 16px;
  text-decoration: none;
  background-color: #505050;
  color: white;
  transition: 0.25s ease;
}

.button:hover {
  background-color: #323232;
}
</style>