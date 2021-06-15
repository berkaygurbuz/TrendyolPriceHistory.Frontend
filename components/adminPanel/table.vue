<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.name }} -- {{ item.isApprove }}
      </li>
    </ul>
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
        :sortable="true"
      >
        <template #filter>
          <InputText
            type="text"
            v-model="filters['id']"
            @keydown.enter="onFilter($event)"
            class="p-column-filter"
            placeholder="Search by ID"
          />
        </template>
      </Column>
      <Column
        field="name"
        header="Name"
        filterMatchMode="startsWith"
        ref="name"
        :sortable="true"
      >
        <template #filter>
          <InputText
            type="text"
            v-model="filters['name']"
            @keydown.enter="onFilter($event)"
            class="p-column-filter"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column
        field="price"
        header="Price"
        filterField="price"
        filterMatchMode="contains"
        ref="price"
        :sortable="true"
      >
        tl
        <template #filter>
          <InputText
            type="text"
            v-model="filters['price']"
            @keydown.enter="onFilter($event)"
            class="p-column-filter"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column
        field="isApprove"
        header="isApprove"
        filterMatchMode="contains"
        ref="isApprove"
        :sortable="true"
      >
        <template #filter>
          <InputText
            type="text"
            v-model="filters['isApprove']"
            @keydown.enter="onFilter($event)"
            class="p-column-filter"
            placeholder="Search by name"
          />
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
    }
  },

  // this.$axios.get('http://localhost:5000/api/getAllProducts').then((res) => {
  //   this.customers = res.data
  //   this.loading = false
  //   console.warn(res.data)
  // })

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
        .get('http://localhost:5000/api/getAllProducts')
        .then((res) => {
          this.customers = res.data
          this.totalRecords = res.data.length
          this.loading = false
          console.log(res.data)
        })
    },
    onPage(event) {
      let endpoint = 'http://localhost:5000/api/getByPage/'
      let page = event.page
      endpoint = endpoint + page
      this.$axios.get(endpoint).then((res) => {
        this.customers = res.data
      })
      console.log('event', event)
      this.lazyParams = event
    },
    onSort(event) {
      this.lazyParams = event
      this.onLazyEvent()
    },
    onFilter() {
      this.lazyParams.first = 0
      this.onLazyEvent()
    },
  },
})
</script>