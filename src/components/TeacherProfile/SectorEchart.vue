<template>
  <div class="Sector_echart" :id="idPie"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["idPie", "dataPie"],

  methods: {
    getECharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById(this.idPie),
        null
      );
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        title: {
          text: this.dataPie.description,
          top: "15%",
          left: "8%",
        },
        legend: {
          orient: "vertical",
          top: "40%",
          left: "8%",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            center: [400, 140],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: this.dataPie.Dblue },
              { value: 735, name: this.dataPie.green },
              { value: 580, name: this.dataPie.orange },
              { value: 484, name: this.dataPie.red },
              { value: 300, name: this.dataPie.blue },
            ],
          },
        ],
      });
      //防抖
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.getECharts();
  },
};
</script>

<style scoped lang="scss">
.Sector_echart {
  width: 718px;
  height: 338px;
}
</style>
