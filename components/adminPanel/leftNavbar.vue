<template>
  <div class="sidebar-container">
    <div class="sidebar-logo">Price History</div>
    <ul class="sidebar-navigation">
      <li class="header">Navigation</li>
      <li>
        <nuxt-link to="/admin/adminPanel" href="#">
          <i class="fa fa-home" aria-hidden="true"></i> Homepage
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/requests" href="#">
          <i class="fa fa-file-alt" aria-hidden="true"></i> Requests
        </nuxt-link>
      </li>

 <li class="header">Price History</li>
       <li>
        <nuxt-link to="/admin/manuelSave">
          <i class="fa fa-hand-paper" aria-hidden="true"></i> Manuel Fetching
        </nuxt-link>
      </li>
             <li>
        <nuxt-link to="/admin/showHistory">
          <i class="fa fa-history" aria-hidden="true"></i> Show History
        </nuxt-link>
      </li>
      <li class="header">Products</li>
      <li>
        <nuxt-link to="/admin/showProduct">
          <i class="fa fa-list-ul" aria-hidden="true"></i>Show Product
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/addProduct">
          <i class="fa fa-edit" aria-hidden="true"></i> Add New Product
        </nuxt-link>
      </li>
            <li>
        <nuxt-link to="/admin/updateProduct">
          <i class="fa fa-hammer" aria-hidden="true"></i> Update Product
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/deleteProduct">
          <i class="fa fa-trash-alt" aria-hidden="true"></i> Delete Product
        </nuxt-link>
      </li>


    </ul>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
      crossorigin="anonymous"
    />
  </div>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/mark-pro');
.sidebar-container {
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #1a1a1a;
  color: #fff;
  font-family: 'Mark Pro', sans-serif;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #25178f;
}

.sidebar-navigation {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #25178f;
  position: absolute;
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}
</style>
