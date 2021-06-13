<template>
  <b-container fluid class="products-list mt-5 my-padding">
    <h2 class="heading-line text-center">Categories</h2>
    <b-container class="justify-content-center">
      <b-row>
        <b-col md="4">
          <div class="snip1174 purple">
            <b-img
              src="https://i.pinimg.com/originals/c2/d6/f7/c2d6f777423a236450acfd917486f095.jpg"
              width="380"
              height="360"
            />
            <figcaption>
              <h2>T-Shirts</h2>
              <a href="#">Explore Price History</a>
            </figcaption>
          </div>
        </b-col>
        <b-col md="4">
          <div class="snip1174 purple">
            <b-img
              src="https://i.pinimg.com/originals/26/95/42/26954282e42634393f7c0764628e7d12.jpg"
              width="380"
              height="360"
            />
            <figcaption>
              <h2>Sweatshirts</h2>
              <a href="#">Explore Price History</a>
            </figcaption>
          </div>
        </b-col>
        <b-col md="4">
          <div class="snip1174 purple">
            <b-img
              src="https://i.pinimg.com/originals/2c/6a/a1/2c6aa17fc7c783cbb3a356632b8fadb8.jpg"
              width="380"
              height="366"
            />
            <figcaption>
              <h2>Jean</h2>
              <a href="#">Explore Price History</a>
            </figcaption>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<style scoped>
.products-list {
  background-color: #f3f6fa;
  /* padding: 60px 0 !important; */
  margin-top: 8em !important;
}


.snip1174 {
  font-family: 'Mark Pro', sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: left;
  border-radius: 10px;
}
.snip1174 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1174 img {
  max-width: 100%;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  vertical-align: top;
  opacity: 0.6;
}
.snip1174 figcaption {
  position: absolute;
  padding: 40px 25px;
  top: 0;
  left: 0;
}
.snip1174 h2,
.snip1174 p {
  margin: 0;
  padding: 0;
}
.snip1174 h2 {
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 700;
  font-size: 1.8em;
}
.snip1174 p {
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.4em;
}
.snip1174 a {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ffffff;
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8em;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  opacity: 0;
}
.snip1174 a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.snip1174.purple {
  background-color:#140B5C ;
}
.snip1174:hover img,
.snip1174.hover img {
  opacity: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.snip1174:hover a,
.snip1174.hover a {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
@media(max-width:768px){
  .purple{
    margin-top:2rem!important;
  }
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