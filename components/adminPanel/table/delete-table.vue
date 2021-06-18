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
        <template #filter>
          <InputText
            type="text"
            v-model="searchedName"
            @keydown.enter="onFilter($event)"
            class="p-column-filter"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column
        field="name"
        header="Name"
        filterMatchMode="startsWith"
        ref="name"
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
      <Column ref="delete">
        <template #body="slotProps">
          <b-button
            type="button"
            variant="danger"
            @click="deleteById(slotProps.data.id)"
            >Delete</b-button
          >
        </template>
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
        { field: 'name', header: 'Name' },
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
   async deleteById(id) {
       this.loading=true;
      let endpoint="/deleteById?id="+id;
    await this.$axios.delete(endpoint,{}).then(res=>{
        this.onLazyEvent();
    })
    },
    async onFilter() {
      this.lazyParams.first = 0
      this.loading = true
      let endpoint = '/getProductBySearch?search=' + this.searchedName

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