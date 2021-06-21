<template>
  <div v-if="!this.update">
    <DataTable
      :value="customers"
      :lazy="true"
      :paginator="true"
      dataKey="id"
      :rows="10"
      ref="dt"
      :totalRecords="totalRecords"
      :loading="loading"
      @page="onPage($event)"
      @sort="onSort($event)"
    >
      <Column
        field="id"
        header="ID"
        filterMatchMode="startsWith"
        ref="id"
        :sortable="false"
      >
      </Column>
      <Column
        field="brand"
        header="Brand"
        filterMatchMode="startsWith"
        ref="brand"
        :sortable="false"
      >
      </Column>
      <Column
        field="model"
        header="Model"
        filterMatchMode="startsWith"
        ref="model"
        :sortable="false"
      >
      </Column>
      <Column
        field="category"
        header="Category"
        filterMatchMode="startsWith"
        ref="category"
        :sortable="false"
      >
      </Column>
      <Column
        field="gender"
        header="Gender"
        filterMatchMode="startsWith"
        ref="gender"
        :sortable="false"
      >
      </Column>
      <Column
        field="price"
        header="Price"
        filterField="price"
        filterMatchMode="contains"
        ref="price"
        :sortable="false"
      >
      </Column>
      <Column
        field="isApprove"
        header="isApprove"
        filterMatchMode="contains"
        ref="isApprove"
        :sortable="false"
      >
      </Column>
      <Column ref="accept" header="Actions">
        <template #body="slotProps">
          <b-button
            type="button"
            variant="warning"
            @click="acceptById(slotProps.data)"
            ><i class="fas fa-hammer" style="font-size: 1.5rem"></i
          ></b-button>
          <b-button
            type="button"
            variant="success"
            @click="changeTrueById(slotProps.data)"
            ><i class="fas fa-check-circle" style="font-size: 1.5rem"></i
          ></b-button>
          <b-button
            type="button"
            variant="danger"
            @click="changeFalseById(slotProps.data)"
            ><i class="fas fa-times-circle" style="font-size: 1.5rem"></i
          ></b-button>
        </template>
      </Column>
    </DataTable>
    <Toast />
  </div>

  <div v-else>
    <b-container>
      <form>
        <h5 class="mt-2">Product Link</h5>
        <b-input
          class="mx-auto"
          placeholder="Product Link"
          v-model="temporaryData.linkUrl"
        ></b-input>
        <h5 class="mt-2">Brand</h5>
        <b-input
          class="mx-auto"
          placeholder="Brand"
          v-model="temporaryData.brand"
        ></b-input>
        <h5 class="mt-2">Model</h5>
        <b-input
          class="mx-auto"
          placeholder="Model"
          v-model="temporaryData.model"
        ></b-input>
        <h5 class="mt-2">Category</h5>
        <b-input
          class="mx-auto"
          placeholder="Category"
          v-model="temporaryData.category"
        ></b-input>
        <h5 class="mt-2">Gender</h5>
        <b-input
          class="mx-auto"
          placeholder="Gender"
          v-model="temporaryData.gender"
        ></b-input>
        <h5 class="mt-2">Image URL</h5>
        <b-input
          class="mx-auto"
          placeholder="Image URL"
          v-model="temporaryData.imageUrl"
        ></b-input>
        <div class="text-center mt-3">
          <b-button @click="updateProduct" variant="info">Update</b-button>
        </div>
      </form>
    </b-container>
    <Toast />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
export default Vue.extend({
  components: {
    InputText,
    Toast,
  },
  data() {
    return {
      update: false,

      temporaryData: {
        linkUrl: '',
        brand: '',
        model: '',
        category: '',
        gender: '',
        imageUrl: '',
      },
      data: {},
      loading: false,
      totalRecords: 0,
      customers: null,
      filters: {},
      lazyParams: {},
      columns: [
        { field: 'id', header: 'ID' },
        { field: 'brand', header: 'Brand' },
        { field: 'model', header: 'Model' },
        { field: 'category', header: 'Category' },
        { field: 'gender', header: 'Gender' },
        { field: 'price', header: 'Price' },
        { field: 'isApprove', header: 'isApprove' },
      ],
      searchedName: '',
      searchedId: '',
    }
  },

  mounted() {
    this.lazyParams = {
      first: 0,
      rows: this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      filters: this.filters,
    }
    this.onLazyEvent()
  },
  methods: {
    async onLazyEvent() {
      this.loading = true

      await this.$axios.get('/getAllProducts').then((res) => {
        this.customers = res.data
        this.totalRecords = res.data.length
        this.loading = false
        console.log(res.data)
      })
    },
    onPage(event) {
      let endpoint = '/getByPage/'
      let page = event.page
      endpoint = endpoint + page
      this.$axios.get(endpoint).then((res) => {
        this.customers = res.data
      })
      console.log('event', event)
      this.lazyParams = event
    },
    async acceptById(data) {
      this.loading = true
      this.update = true
      this.temporaryData = data
      console.log('temporary data = ', this.temporaryData)
    },
    async changeTrueById(data) {
      this.loading = true
      console.log('data : ', data)
      if (data.isApprove == false) {
        let endpoint = '/acceptRequest/' + data.id
        await this.$axios.put(endpoint, {}).then((res) => {
          this.$toast.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Changed approve true',
            life: 3000,
          })
          this.onLazyEvent()
        })
        console.log('toasts ', this.$toast)
      } else {
        this.$toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Approve is false.',
          life: 3000,
        })
        this.loading = false
      }
    },
    async changeFalseById(data) {
      this.loading = true
      console.log('data : ', data)
      if (data.isApprove == true) {
        let endpoint = '/acceptRequest/' + data.id
        await this.$axios.put(endpoint, {}).then((res) => {
          this.$toast.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Changed approve true',
            life: 3000,
          })
          this.onLazyEvent()
        })
      } else {
        this.$toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Approve is true.',
          life: 3000,
        })

        this.loading = false
      }
    },
    async updateProduct() {
      console.log('update içi : ', this.temporaryData.name)
      await this.$axios
        .put('/updateProduct', {
          id: this.temporaryData.id,
          linkUrl: this.temporaryData.linkUrl,
          brand: this.temporaryData.brand,
          model: this.temporaryData.model,
          category: this.temporaryData.category,
          gender: this.temporaryData.gender,
          imageUrl: this.temporaryData.imageUrl,
        })
        .then((res) => {
          this.update = false
                    this.$toast.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Updated',
            life: 3000,
          })
          this.onLazyEvent()
        }).catch(e=>{
                  this.$toast.add({
          severity: 'error',
          summary: 'Error',
          detail: e,
          life: 3000,
        })
        })
    },
  },
})
</script>

<style scoped>
.container {
  width: 50% !important;
}
.btn-info {
  width: 40% !important;
}
</style>