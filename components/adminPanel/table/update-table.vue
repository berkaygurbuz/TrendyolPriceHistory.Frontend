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
  </div>

  <div v-else>
    <b-container>
      <form>
        <h5>Name</h5>
        <b-input
          v-model="temporaryData.name"
          placeholder="Name"
          :value="this.temporaryData.name"
        ></b-input>
        <div class="text-center mt-3">
          <b-button @click="updateProduct" variant="info">Update</b-button>
        </div>
      </form>
    </b-container>
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
      update: false,

      temporaryData: {
        name: '',
      },
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
      //   let endpoint = '/acceptRequest/' + id
      //   await this.$axios.put(endpoint, {}).then((res) => {
      //     this.onLazyEvent()
      //   })
    },
    async changeTrueById(data){
        this.loading=true;
        console.log("data : ",data);
        if(data.isApprove==false){
            let endpoint="/acceptRequest/"+data.id
            await this.$axios.put(endpoint,{}).then(res=>{
                this.onLazyEvent();
                
            })
        }
    },
    async changeFalseById(data){
        this.loading=true;
        console.log("data : ",data);
        if(data.isApprove==true){
            let endpoint="/acceptRequest/"+data.id
            await this.$axios.put(endpoint,{}).then(res=>{
                this.onLazyEvent();
                
            })
        }
    },
    async updateProduct() {
      console.log('update içi : ', this.temporaryData.name)
      await this.$axios
        .put('/updateProduct', {
          id: this.temporaryData.id,
          name: this.temporaryData.name,
        })
        .then((res) => {
          this.update = false
          this.onLazyEvent()
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