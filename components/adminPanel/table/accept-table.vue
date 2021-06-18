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
        field="name"
        header="Name"
        filterMatchMode="startsWith"
        ref="name"
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
      <Column ref="accept"
      header="Accept">
        <template #body="slotProps">
          <b-button
            type="button"
            variant="success"
            @click="acceptById(slotProps.data.id)"
            ><i class="fas fa-check-circle" style="font-size:1.5rem"></i></b-button
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

      await this.$axios.get('/getRequests').then((res) => {
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
   async acceptById(id) {
       this.loading=true;
      let endpoint="/acceptRequest/"+id;
    await this.$axios.put(endpoint,{}).then(res=>{
        this.onLazyEvent();
    })
    },

  },
})
</script>