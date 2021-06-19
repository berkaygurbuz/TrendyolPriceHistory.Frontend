<template>
  <div>
    <DataTable
      :value="customers"
      :lazy="true"
      :paginator="true"
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
        <template #filter>
          <InputText
            type="text"
            v-model="searchedName"
            @keydown.enter="onFilter($event)"
            class="p-column-filter"
            placeholder="Search by brand"
          />
        </template>
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

    </DataTable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputText from 'primevue/inputtext'
export default Vue.extend({
  components: {
    InputText,
  },
  data() {
    return {
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

      await this.$axios
        .get('/getAllProducts')
        .then((res) => {
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
    async onFilter() {
      this.lazyParams.first = 0
      this.loading = true
      let endpoint =
        '/getProductBySearch?search=' +
        this.searchedName

      console.log('searched name :', this.searchedName)
      await this.$axios.get(endpoint, {}).then((res) => {
        this.customers = res.data
        this.totalRecords = res.data.length
        this.loading = false
      })
    },
  },
})
</script>