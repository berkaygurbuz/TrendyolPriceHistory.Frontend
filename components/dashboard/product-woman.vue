<template>
  <div>
    <b-container class="my-padding">
      <div class="heading-line">
        <Dropdown
          v-model="selectedGender"
          :options="gender"
          optionLabel="name"
          placeholder="Select a Gender"
          @change="filterByGenderAndCategories"
        />
        <Dropdown
          v-model="selectedCategory"
          :options="categories"
          optionLabel="name"
          :filter="true"
          placeholder="Select a Category"
          :showClear="true"
          @change="filterByGenderAndCategories"
        >
          <template #value="slotProps">
            <div class="country-item country-item-value" v-if="slotProps.value">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
      <b-row>
        <b-col md="4" v-for="item in products" :key="item.id">
          <div class="my-container mt-5">
            <div class="card">
              <h4 class="productBrand mt-3">{{ item.brand }}</h4>
              <p class="productType text-center">{{ item.model }}</p>
              <img
                :src="item.imageUrl"
                :alt="item.model"
                style="width: 190px; height: 240px"
                class="img-fluid"
              />
              <h2 class="price">₺{{ item.price }}</h2>
            </div>
            <button class="cartBtn">SEE PRICE HISTORY</button>
            <button class="wishlistBtn">
              <a :href="item.linkUrl" target="_blank">BUY PRODUCT</a>
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MultiSelect from 'primevue/multiselect'
export default Vue.extend({
  components: {
    MultiSelect,
  },
  data() {
    return {
      selectedGender: {
          name:"Woman",
          value:'Kadın'
      },
      gender: [
        { name: 'Man', value: 'Erkek' },
        { name: 'Woman', value: 'Kadın' },
        { name: 'Kid', value: 'Çocuk' },
      ],
      categories: [
        { name: 'T-Shirts', value: 'T-Shirt' },
        { name: 'Jean', value: 'Jean' },
        { name: 'Shirt', value: 'Gömlek' },
        { name: 'Sweatshirt', value: 'Sweatshirt' },

      ],
      selectedCategory:null,
      products: {},
    }
  },
  async mounted() {
    await this.$axios
      .get('/getFilterByCategoryAndGender?gender=Kadın', {})
      .then((res) => {
        this.products = res.data
      })
  },
  methods: {
    async filterByGenderAndCategories() {
      console.log('selected city: ', this.selectedCars)
      console.log('selected category: ', this.selectedCategory)
      console.log('selected gender: ', this.selectedGender)

      if (this.selectedCategory != null && this.selectedGender != null) {
        await this.$axios
          .get(
            '/getFilterByCategoryAndGender?category=' +
              this.selectedCategory.value +
              '&gender=' +
              this.selectedGender.value,
            {}
          )
          .then((res) => {
            this.products = res.data
          })
      } else if (this.selectedGender == null && this.selectedCategory != null) {
        await this.$axios
          .get(
            '/getFilterByCategoryAndGender?category=' +
              this.selectedCategory.value,
            {}
          )
          .then((res) => {
            this.products = res.data
          })
      } else if (this.selectedCategory == null && this.selectedGender != null) {
        await this.$axios
          .get(
            '/getFilterByCategoryAndGender?gender=' + this.selectedGender.value,
            {}
          )
          .then((res) => {
            this.products = res.data
          })
      } else {
        await this.$axios.get('/getAllProducts', {}).then((res) => {
          this.products = res.data
        })
      }
    },
  },
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
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.cartBtn {
  margin-bottom: 5em;
}

.cartBtn,
.wishlistBtn {
  width: 150px;
  height: 50px;
  background-color: #140b5c;
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
  font-family: 'Lato', sans-serif;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.wishlistBtn {
  background-color: #f5f5f5;
  color: #140b5c;
  /* bottom: 35%; */
  margin-top: 5em;
}

.my-container:hover .cartBtn,
.my-container:hover .wishlistBtn {
  opacity: 1 !important;
  display: inline !important;
}

.wishlistBtn a {
  text-decoration: none;
  color: #140b5c;
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
@media (max-width: 768px) {
  .my-container {
    margin-top: 2rem !important;
  }
}

.my-padding {
  padding-top: 50px;
  padding-bottom: 90px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.heading-line {
  font-family: 'Lato', sans-serif;
  font-size: 2.75rem;
  font-weight: 400;
  color: #140b5c !important;
}

.heading-line:after {
  content: '';
  display: block;
  margin-top: 32px;
  margin-bottom: 50px;
  width: 100%;
  height: 2px;
  background-color: #140b5c;
}

.heading-line:after {
  margin-left: auto;
  margin-right: auto;
}

.productBrand {
  font-family: 'Lato', sans-serif;
  color: #25178f;
  font-weight: bold;
}

.p-multiselect {
  min-width: 15rem;
}

.multiselect-custom .p-multiselect-label:not(.p-placeholder) {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.multiselect-custom .country-item-value {
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  display: inline-flex;
  margin-right: 0.5rem;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
}
</style>