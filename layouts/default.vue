<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <ProductList></ProductList>
    <no-ssr>
<b-card title="Line">
    <b-form-group>
      <b-form-radio
        v-for="(item, index) in btn"
        :key="index"
        v-model="radio"
        :name="item.label"
        :value="item.value"
        @change="updateChart"
      >
        {{ item.label }}
      </b-form-radio>
    </b-form-group>

    <b-card img-bottom>
      <ChartLineBase :chart-data="chartData" />
    </b-card>
  </b-card>
  </no-ssr>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/navbar.vue'
import Header from '../components/header.vue'
import ProductList from '../components/product-list.vue';
import ChartLineBase from "../plugins/ChartLineBase";
export default Vue.extend({
  
  components: {
    Navbar,
    Header,
    ProductList,
    ChartLineBase,
  },
data() {
    return {
      btn: [
        { label: "Today", value: "day" },
        { label: "This Week", value: "week" }
      ],
      chartData:"",
      data: {
        day: [1, 3, 5, 3, 1],
        week: [12, 14, 16, 18, 11, 13, 15]
      },
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      radio: "day"
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: this.labels[this.radio],
        datasets: [
          {
            borderColor: "#81894e",
            data: this.data[this.radio],
            label: "Foo"
          }
        ]
      };
    },
    updateChart() {
      this.$nextTick(() => {
        this.fillData();
      });
    }
  }
});
</script>

<style>

</style>
