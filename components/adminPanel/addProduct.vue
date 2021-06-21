<template>
  <b-container>
    <div>
      <h2 class="text-center">Add New Product</h2>
      <form class="mt-5">
        <h5 class="mt-2">Product Link</h5>
        <b-input
          class="mx-auto"
          placeholder="Product Link"
          v-model="data.urlLink"
        ></b-input>
        <h5 class="mt-2">Brand</h5>
        <b-input
          class="mx-auto"
          placeholder="Brand"
          v-model="data.brand"
        ></b-input>
        <h5 class="mt-2">Model</h5>
        <b-input
          class="mx-auto"
          placeholder="Model"
          v-model="data.model"
        ></b-input>
        <h5 class="mt-2">Category</h5>
        <b-input
          class="mx-auto"
          placeholder="Category"
          v-model="data.category"
        ></b-input>
                <h5 class="mt-2">Gender</h5>
        <b-input
          class="mx-auto"
          placeholder="Gender"
          v-model="data.gender"
        ></b-input>
        <h5 class="mt-2">Image URL</h5>
        <b-input
          class="mx-auto"
          placeholder="Image URL"
          v-model="data.imgUrl"
        ></b-input>

        <div class="text-center">
          <b-button class="mt-3" @click="addNewProduct" variant="success"
            >Add New Product</b-button
          >
        </div>
      </form>
    </div>
    <Toast />
    
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Toast from 'primevue/toast';
export default Vue.extend({
  components:{
    Toast
  },
  data() {
    return {
      data: {
        urlLink: '',
        brand: '',
        model: '',
        category: '',
        gender:'',
        imgUrl: '',
      },
    }
  },
  methods: {
    async addNewProduct() {
      await this.$axios.post('createProduct', {
          linkUrl:this.data.urlLink,
        brand: this.data.brand,
        model:this.data.model,
        category:this.data.category,
        gender:this.data.gender,
        imageUrl:this.data.imgUrl
      }).then(res=>{
                    this.$toast.add({severity:'success', summary: 'Success', detail:'Product Added.', life: 3000});
      }).catch(e=>{
                this.$toast.add({severity:'error', summary: 'Error', detail:e, life: 3000});
      })
    },
  },
})
</script>

<style scoped>
.container {
  width: 50% !important;
}
</style>