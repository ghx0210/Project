<template>
  <div class="CourseMiddle">
    <div class="leftpart">
      <div class="text"><span>课程完成比例</span></div>
      <div class="chart" ref="myechart"></div>
    </div>
    <div class="rightpart">
      <div class="title">
        <p class="p1">活跃数据</p>
        <p class="p2">Secondary text</p>
      </div>
      <div class="Separator"></div>
      <div class="chart1" ref="myechart1"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setChart();
    this.setChart1();
  },
  methods: {
    setChart() {
      var myChart = this.$echarts.init(this.$refs.myechart);
      window.onresize = function () {
        myChart.resize();
      };
      var option = {
        color: ["#40E0D0", "#5CB3FF"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "85%",
          left: "center",
        },

        series: [
          {
            type: "pie",
            radius: ["0%", "75%"],
            center: ["50%", "40%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },

            data: [
              { value: 35, name: "已完成课程" },
              { value: 65, name: "全部课程" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    setChart1() {
      var myChart = this.$echarts.init(this.$refs.myechart1);
      window.onresize = function () {
        myChart.resize();
      };
      var option = {
        color: ["#FF0000", "#FFA500"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "3%",
          itemGap: 40,
          itemWidth: 10,
          data: ["本周活跃", "上周活跃"],
          textStyle: {
            fontfamily: "SourceHanSerifCN-ExtraLight",
            fontsize: 12,
            fontweight: "normal",
          },
          top: "bottom",
        },
        grid: {
          left: "3%",
          right: "5.6%",
          top: "16%",
          bottom: "13%",
          containLabel: true,
          show: true,
        },
        toolbox: {
          feature: {
            magicType: {
              type: ["tiled"],
            },
          },
        },
        xAxis: {
          type: "category",
          name: "天数",
          axisLabel: {
            fontWeight: "normal",
            fontFamily: "SourceHanSerifCN-ExtraLight",
            fontSize: 12,
          },
          // nameGap: 18,
          nameTextStyle: {
            fontWeight: "normal",
            fontFamily: "SourceHanSerifCN-ExtraLight",
            fontSize: 12,
          },
          boundaryGap: false,
          minorTick: {
            show: true,
          },
          splitLine: {
            show: true,
          },
          data: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        yAxis: {
          type: "value",
          name: "人数",
          axisLabel: {
            fontWeight: "normal",
            fontFamily: "SourceHanSerifCN-ExtraLight",
            fontSize: 9,
            align: "right",
            verticalAlign: "middle",
          },
          nameTextStyle: {
            fontWeight: "normal",
            fontFamily: "SourceHanSerifCN-ExtraLight",
            fontSize: 12,
          },
        },
        series: [
          {
            areaStyle: {
              opacity: 0.1,
            },
            name: "本周活跃",
            type: "line",
            smooth: true,
            symbolSize: 8,
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
              width: 5,
            },
          },
          {
            areaStyle: {
              opacity: 0.1,
            },
            name: "上周活跃",
            type: "line",
            smooth: true,
            symbolSize: 8,
            data: [220, 182, 191, 234, 290, 330, 310],
            lineStyle: {
              width: 5,
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="scss">
.CourseMiddle {
  display: flex;
  flex-direction: row;
  margin-top: 38px;
  .leftpart {
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 360px;
    background-color: #ffffff;
    .text {
      margin-top: 39px;
      margin-left: 24px;
      opacity: 1;
      font-family: Inter-Medium;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.54px;
      color: #000000;
    }
    .chart {
      margin-top: 36px;
      height: 250px;
    }
  }
  .rightpart {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    width: 1122px;
    height: 360px;
    opacity: 1;
    background: #ffffff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    .title {
      display: flex;
      flex-direction: column;
      margin-top: 25.85px;
      margin-left: 47.26px;
      .p1 {
        opacity: 1;
        font-family: Inter-Medium;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        color: #000000;
      }
      .p2 {
        opacity: 1;
        margin-top: 10px;
        font-family: Inter-Regular;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #4f4f4f;
      }
    }
    .Separator {
      width: 100%;
      height: 1.85px;
      margin-top: 16px;
      opacity: 1;
      background: #f0f0f0;
    }
    .chart1 {
      width: 100%;
      height: 245px;
    }
  }
}
</style>
