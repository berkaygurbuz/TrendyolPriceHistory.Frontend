<template>
  <b-container>
    <b-row>
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-home" aria-hidden="true"></i>
              <h3>Homepage</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>It is to homepage. You can access all menu.</p>
              <nuxt-link to="/admin/adminPanel">Go Homepage</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-file-alt" aria-hidden="true"></i>
              <h3>Requests</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                You can go request page to see requests. You can also accept
                requests in this page.
              </p>
              <nuxt-link to="/admin/requests">Go Requests</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-hand-paper" aria-hidden="true"></i>
              <h3>Manuel Fetching</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                You can go manuel fetching page to fetch price history manually.
              </p>
              <nuxt-link to="/admin/manuelSave">Go Manuel Fetching</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-history" aria-hidden="true"></i>
              <h3>Show History</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>You can go show history page to see price history products.</p>
              <nuxt-link to="/admin/showHistory">Go Show History</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-list-ul" aria-hidden="true"></i>
              <h3>Show Products</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>You can go show products page to see products.</p>
              <nuxt-link to="/admin/showProduct">Go Show Products</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-edit" aria-hidden="true"></i>
              <h3>Add New Product</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>You can go add products page to add new products.</p>
              <nuxt-link to="/admin/addProduct">Go Add Product</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-5 justify-content-md-center">
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-hammer" aria-hidden="true"></i>
              <h3>Update Product</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                You can go update products page to update products. You can also
                accept requests or decline requests.
              </p>
              <nuxt-link to="/admin/updateProduct">Go Update Product</nuxt-link>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" class="ml-5">
        <div class="card">
          <div class="face face1">
            <div class="content text-center">
              <i class="fa fa-trash-alt" aria-hidden="true"></i>
              <h3>Delete Product</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>You can go delete products page to delete products.</p>
              <nuxt-link to="/admin/deleteProduct"
                >Go Delete Products</nuxt-link
              >
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // middleware: ["auth"],
  layout: 'adminLayout',
})
</script>
<style scoped>
.fa {
  font-size: 60px;
  color: white;
}
.card {
  position: relative;
}
.face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}
.face1 {
  position: relative;
  background: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
}
.card:hover .face1 {
  background: #fff;
}
.face1 .content {
  opacity: 1;
  transition: 0.5s;
}
.card:hover .face1 .content {
  opacity: 1;
}
.face1 .content ion-icon {
  font-size: 96px;
  display: block;
  width: auto;
  fill: #fff;
}
.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}
.face2 {
  position: absolute;
  background: #1a1a1a;
  bottom: 0;
  height: 0;
  box-sizing: border-box;
  transition: 0.5s ease;
  overflow: hidden;
  color: white;
}
.card:hover .face2 {
  height: 100%;
}
.face2 .content {
  padding: 20px;
}
.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: white;
  padding: 5px;
  border: 1px solid white;
}
.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>
