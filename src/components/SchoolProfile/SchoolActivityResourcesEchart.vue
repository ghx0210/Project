<template>
  <div>
    <div class="two">
      <div>
        <span>活动资源</span>
      </div>

      <div class="two-echart">
        <div class="farther-two-Left-progress">
          <div
            class="two-Left-progress"
            v-for="p in ProgressData"
            :key="p.name"
          >
            <el-progress
              :stroke-width="13"
              :percentage="p.tage"
              :show-text="false"
            ></el-progress>
            <div class="Parttext">
              <span>{{ p.name }}</span>
              <span>{{ p.tage * 10 }}</span>
            </div>
          </div>
        </div>

        <div class="two-right-echart" id="two-right-echart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSectorTable } from "@/apis/platform";
export default {
  name: "SchoolActivityResourcesEchart",
  data() {
    return {
      ProgressData: [
        {
          name: "资源数",
          tage: 25,
          key: "resource_num",
        },
        {
          name: "讨论区数",
          tage: 15,
          key: "activity_num",
        },
        {
          name: "作业数",
          tage: 30,
          key: "assigns_num",
        },
        {
          name: "测验数",
          tage: 30,
          key: "quizs_num",
        },
      ],
      sectorData: [],
      ceshi: 2,
    };
  },
  methods: {
    getTwoRightECharts() {
      // // 基于准备好的dom，初始化echarts实例
      // var myChart = this.$echarts.init(
      //   document.getElementById("two-right-echart"),
      //   null
      // );
      // // 绘制图表
      // myChart.setOption({
      //   tooltip: {
      //     trigger: "item",
      //   },
      //   legend: {
      //     top: "5%",
      //     left: "center",
      //   },
      //   color: ["#F93A0B", "#1D92DF", "#D653C1", "#3D4BCB"],
      //   series: [
      //     {
      //       type: "pie",
      //       radius: ["40%", "70%"],
      //       avoidLabelOverlap: false,
      //       label: {
      //         show: false,
      //         position: "center",
      //       },
      //       emphasis: {
      //         label: {
      //           show: true,
      //           fontSize: 40,
      //           fontWeight: "bold",
      //         },
      //       },
      //       labelLine: {
      //         show: false,
      //       },
      //       data: [
      //         { value: this.sectorData.resource_num },
      //         { value: this.sectorData.activity_num },
      //         { value: this.sectorData.assigns_num },
      //         { value: this.sectorData.quizs_num },
      //       ],
      //     },
      //   ],
      // });
      //防抖
      // let timer;
      // window.onresize = function () {
      //   if (timer) {
      //     clearTimeout(timer);
      //   }
      //   timer = setTimeout(() => {
      //     myChart.resize();
      //   }, 500);
      // };
      // this.$nextTick(function () {
      //   this.getTwoRightECharts();
      // });
    },
    async getSectorData() {
      let result = await getSectorTable();
      this.sectorData = result.college_data;
      console.log("result", result);
      console.log("sectorData", this.sectorData);
      this.$nextTick(function () {
        this.getTwoRightECharts();
      });
      this.ProgressData.forEach((item, index, self) => {
        self[index].tage = result.college_data[item.key] / 10 || 0;
      });
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("two-right-echart"),
        null
      );
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        color: ["#F93A0B", "#1D92DF", "#D653C1", "#3D4BCB"],
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: this.sectorData.resource_num },
              { value: this.sectorData.activity_num },
              { value: this.sectorData.assigns_num },
              { value: this.sectorData.quizs_num },
            ],
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    // this.getTwoRightECharts();
    this.getSectorData();
  },
};
</script>

<style scoped lang="scss">
.Main-content-right .two {
  width: 718px;
  height: 470px;
  border-radius: 20px;
  margin-bottom: 34px;
  background-color: #ffffff;
}
.Main-content-right .two span {
  display: inline-block;
  font-family: GenJyuuGothic-ExtraLight;
  font-size: 20px;
  font-weight: 100;
  margin-top: 36px;
  margin-left: 40px;
  margin-bottom: 50px;
}
.two .Parttext span {
  margin: 21px 0px;
}
.Parttext {
  /* margin-top: 20px; */
  display: flex;
  justify-content: space-between;
}
.two-echart {
  display: flex;
}
.two-Left-progress {
  width: 275px;
  margin-left: 40px;
  margin-right: 30px;
}
.two-right-echart {
  width: 358px;
  height: 300px;
}
</style>
