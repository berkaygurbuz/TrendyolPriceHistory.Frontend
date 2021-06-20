<template>
  <div>
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
        field="productId"
        header="Product ID"
        filterMatchMode="startsWith"
        ref="product ID"
        :sortable="false"
      >
      </Column>
      <Column
        field="date"
        header="Date"
        filterMatchMode="startsWith"
        ref="date"
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
        { field: 'productId', header: 'Product ID' },
        { field: 'date', header: 'Date' },
        { field: 'price', header: 'Price' },
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

      await this.$axios.get('/getPriceHistory').then((res) => {
          console.log("res data:",res.data)
        this.customers = res.data
        this.totalRecords = res.data.length
        this.loading = false
        console.log(res.data)
      })
    },
    onPage(event) {
      let endpoint = 'price/getByPage/'
      let page = event.page
      endpoint = endpoint + page
      this.$axios.get(endpoint).then((res) => {
        this.customers = res.data
      })
      console.log('event', event)
      this.lazyParams = event
    },
  },
})
</script>

<style scoped>

</style>