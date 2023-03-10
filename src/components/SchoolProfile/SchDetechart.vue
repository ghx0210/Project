<template>
  <div class="SchDetechart">
    <div class="Leftechart">
      <div class="Leftpart">
        <div class="Parttitle">活动资源</div>
        <div
          class="Mainleft"
          v-for="Progress in ProgressData"
          :key="Progress.id"
        >
          <el-progress
            :stroke-width="13"
            :percentage="parseInt((Progress.tage / Alldata) * 100) || 0"
            :show-text="false"
            :color="Progress.color"
          ></el-progress>
          <div class="Parttext">
            <span>{{ Progress.name }}</span>
            <span>{{ ((Progress.tage / Alldata) * 100) | numFilter }}%</span>
          </div>
        </div>
      </div>
      <div class="Rightpart"><div class="Mainright" ref="myechart"></div></div>
    </div>
    <div class="Rightechart"><div class="BarEchart" ref="myechart1"></div></div>
  </div>
</template>

<script>
import { getTermData } from "@/apis/teacher";
export default {
  filters: {
    numFilter(value) {
      if (isNaN(value) == true) {
        return 0;
      }
      // 截取当前数据到小数点后两位{
      let realVal = parseFloat(value).toFixed(0);
      return realVal;
    },
  },
  data() {
    return {
      Alldata: "",
      ProgressData: [
        {
          id: 1,
          name: "资源数",
          tage: 90,
          color: "#F93A0B",
          key: "resource_num",
        },
        {
          id: 2,
          name: "讨论区数",
          tage: 90,
          color: "#1D92DF",
          key: "activity_num",
        },
        {
          id: 3,
          name: "作业数",
          tage: 68,
          color: "#D653C1",
          key: "assigns_num",
        },
        {
          id: 4,
          name: "测验数",
          tage: 85,
          color: "#3D4BCB",
          key: "quizs_num",
        },
      ],
      ActivityData: [],
      CountsData: [],
      PvData: [],
      TitleData: [],
    };
  },
  mounted() {
    this.getActivityData();
    this.setChart();
  },
  methods: {
    async getActivityData() {
      let result = await getTermData(this.$route.query.id);
      this.ProgressData.forEach((item, index, self) => {
        self[index].tage = result.college_data[item.key] || 0;
      });
      this.Alldata =
        result.college_data.resource_num +
        result.college_data.activity_num +
        result.college_data.assigns_num +
        result.college_data.quizs_num;
      this.ActivityData = result.college_data;
      var myChart = this.$echarts.init(this.$refs.myechart);
      window.onresize = function () {
        myChart.resize();
      };
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              scaleSize: 20,
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
              },
              labelLine: {
                show: false,
              },
            },
            data: [
              {
                value: this.ActivityData.resource_num,
                name: "资源数",
                itemStyle: {
                  color: "#F93A0B",
                },
              },
              {
                value: this.ActivityData.activity_num,
                name: "讨论区数",
                itemStyle: {
                  color: "#1D92DF",
                },
              },
              {
                value: this.ActivityData.assigns_num,
                name: "作业数",
                itemStyle: {
                  color: "#D653C1",
                },
              },
              {
                value: this.ActivityData.quizs_num,
                name: "测验数",
                itemStyle: {
                  color: "#3D4BCB",
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    async setChart() {
      let result = await getTermData(this.$route.query.id);
      result.effective.forEach((item) => {
        this.CountsData.push(item.counts);
        this.PvData.push(item.pv);
        this.TitleData.push(item.title);
      });
      var myChart = this.$echarts.init(this.$refs.myechart1);
      window.onresize = function () {
        myChart.resize();
      };
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "学生教师数据",
          top: "5%",
          left: "5%",
          textStyle: {
            fontSize: 20,
            color: "#393939",
            fontWeight: "normal",
            fontFamily: "Source Han Serif CN",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          left: "center",
          top: "6%",
          itemGap: 50,
        },
        grid: {
          show: false,
          top: "28%",
        },
        xAxis: {
          type: "category",
          splitLine: { show: true },
          data: this.TitleData,
        },
        yAxis: [
          {
            name: "课程数",
            type: "value",
            min: 0,
            interval: 1,
          },
          {
            name: "访问量",
            type: "value",
            min: 0,
          },
        ],
        series: [
          {
            name: "课程数",
            data: this.CountsData,
            type: "bar",
            barWidth: 80,
          },
          {
            name: "访问量",
            data: this.PvData,
            type: "line",
            yAxisIndex: 1,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="scss">
.SchDetechart {
  display: flex;
  justify-content: space-between;
  .Leftechart {
    width: 718px;
    height: 556px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    background-color: #ffffff;
    .Leftpart {
      margin-left: 40px;
      .Parttitle {
        font-size: 26px;
        color: #3d3d3d;
        margin: 36px 0 80px;
      }

      .Mainleft {
        width: 274px;
        .Parttext {
          margin: 20px 0 35px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .Rightpart {
      flex-grow: 1;
      height: 100%;
      .Mainright {
        width: 100%;
        height: 100%;
      }
    }
  }
  .Rightechart {
    width: 718px;
    height: 556px;
    border-radius: 20px;
    background-color: #ffffff;
    .BarEchart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
