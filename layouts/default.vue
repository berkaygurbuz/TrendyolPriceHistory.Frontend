<template>
  <div>
    <navbar></navbar>
    <div class="middle-section text-center">
                <div class="section-width">
                <p>It's great to find cheap products!</p>
                <h2>Find a discount product today</h2>
                <div class="most-searches">
                    <h4>En Çok Arananlar</h4>
                    <ul>
                        <li>
                            <a href="#">Villa</a>
                        </li>
                        <li>
                            <a>
                                Daire
                            </a>
                        </li>
                        <li><a>Özel Mülk</a></li>
                    </ul>
                </div>
            </div>
             <input class="my-input" type="arama" name="text" placeholder="Kelime,ilan no ile ara" required="">
                 <button type="submit" class="my-btn">Ara</button>

    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from "../components/navbar.vue"
export default Vue.extend({
  components:{
    Navbar
    }
})
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/mark-pro');

.middle-section {
    padding-top: 10em;
}

    .middle-section p {
        font-size: 24px;
        color: #49267f;
        line-height: 30px;
        margin-bottom: 15px;
        letter-spacing: 0;
        font-family: 'Mark Pro', sans-serif
    }

    .middle-section h2 {
        font-size: 55px !important;
        color: #49267f;
        vertical-align: top;
        line-height: 60px;
        font-weight: 600;
        font-family: 'Mark Pro', sans-serif
    }
.most-searches {
    text-align: left !important;
    max-width: 850px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 90px !important;
    display: grid !important;
    grid-template-columns: auto 1fr !important;
    grid-gap: 30px !important;
    margin-bottom: 10px !important;
}

    .most-searches h4 {
        color: #49267f !important;
        font-size: 20px !important;
        font-weight: 600 !important;
        font-family: 'Mark Pro', sans-serif;
        padding-top: 0.35rem!important;
        }

    .most-searches ul {
        margin-top: 6px !important;
        padding: 0 !important
    }

        .most-searches ul li {
            display: inline-block;
            margin-right: 10px;
            vertical-align: middle;
        }

            .most-searches ul li a {
                font-size: 17px !important;
                color: #49267f !important;
                text-decoration: underline !important;
        font-family: 'Mark Pro', sans-serif

            }

            input[type="arama"] {
    background: #dccbe7;
    padding: 0px 20px;
    font-size: 16px;
    
    outline: none;
    border: none;
    height: 60px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
        font-family: 'Mark Pro', sans-serif

}
.arama {
    display: flex;
    flex-wrap: wrap;
    max-width: 850px;
    margin: auto;
    margin-right: 0px!important;
}
.my-btn {
    text-align: center !important;
    border: none !important;
    outline: none !important;
    color: #fff !important;
    font-size: 16px !important;
    padding: 0;
    height: 60px;
    cursor: pointer;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 20%;
    font-weight: 600;
    background-color: #44297a !important;
    font-family: 'Ubuntu', sans-serif !important;
    margin-left : 0px!important;

}

    .my-btn:hover {
        background-color: #18063b !important;
    }
</style>
