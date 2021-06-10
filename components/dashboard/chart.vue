<template>
    <b-row class="Line">
      <b-col md="6">
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
  </b-col>
  
  
      <b-col md="6">
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
  </b-col>
    </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import ChartLineBase from "../../plugins/ChartLineBase";
export default Vue.extend({
    components:{
        ChartLineBase
    },
    data() {
    return {
      btn: [
        // { label: "Today", value: "day" },
        { label: "This Week", value: "week" }
      ],
      chartData:"",
      data: {
        day: [1,3,2,5,1,3,4,6,2],
        week: [5,3,16,12,18,9,27,20,24]
      },
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      radio: "week"
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
            borderColor: "rgb(0, 183, 179)",
            data: this.data[this.radio],
            label: "Product",
            fill:false,
            backgroundColor:"rgba(0, 183, 179,0.2)",
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