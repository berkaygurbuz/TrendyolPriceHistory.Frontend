<template>
  <div class="wrapper">
    <b-navbar toggleable="lg" class="navbar-fixed-top py-md-3" type="dark">
      <b-container>
        <b-navbar-brand class="navbar-brand" href="#"
          >Trendyol Price History</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav> </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#" class="ml-md-3">Discounts</b-nav-item>
            <b-nav-item href="#" class="ml-md-3">Products</b-nav-item>
            <b-nav-item href="#" class="ml-md-3">About us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/mark-pro');
.container {
  min-height: auto !important;
}
.wrapper {
  top: 0 !important;
  position: sticky !important;
    z-index: 9999;
}
.navbar {
  margin-bottom: 0;
  background-color: #49267f;

  border: 0;
  font-size: 15px !important;
  /* line-height: 1.42857143 !important; */
  /* letter-spacing: 4px; */
  border-radius: 0;
  font-family: 'Mark Pro', sans-serif;
}

.navbar li a,
.navbar .navbar-brand {
  color: #fff !important;
  border-radius: 0.25rem!important;
  font-size:18px!important;
}

.navbar-nav li a:hover,
.navbar-nav li.active a {
  color: #49267f !important;
  background-color: #fff !important;
}

.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #fff !important;
}
</style>