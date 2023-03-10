<template>
  <div class="ActiveBottom">
    <div class="left-box">
      <div class="header">
        <div class="first-box">
          <div class="title"><p class="p1">活跃数据</p></div>
          <div class="term">
            <el-select
              v-model="value"
              placeholder="选择学年"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.title"
                :value="item.title"
              >
              </el-option>
            </el-select>
          </div>
          <div class="week">
            <el-select
              v-model="value1"
              placeholder="选择周数"
              style="width: 100%"
            >
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="second-box"><p class="p2">本周活跃</p></div>
      </div>
      <div class="Separator"></div>
      <div class="chart1" ref="myechart"></div>
    </div>
    <div class="right-box">
      <div class="trends">
        <div class="subtitle"><p>动态</p></div>
        <div class="tre-bottom">
          <div class="tre-left">
            <div class="tre-icon1">
              <svg-icon icon-file-name="trend1" />
            </div>
            <div class="tre-course">
              <div class="cou-title"><span>新增课程</span></div>
              <div class="cou-data">
                <li v-for="item in courses" :key="item.id">{{ item.num }}</li>
              </div>
              <div class="tongbi">
                <span class="tbi-data">-0.3%</span>
                <span class="tbi-text">同比上月</span>
              </div>
            </div>
          </div>
          <div class="tre-right">
            <div class="tre-icon2">
              <svg-icon icon-file-name="trend2" />
            </div>
            <div class="Offline-courses">
              <div class="off-title"><span>下线课程</span></div>
              <div class="off-data">
                <li v-for="item in courses" :key="item.id">{{ item.num1 }}</li>
              </div>
              <div class="off-tongbi">
                <span class="offtbi-data">-0.3%</span>
                <span class="offtbi-text">同比上月</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ranking-list">
        <div class="btn-switch">
          <el-button class="btn" @click="linkUpdate">课程活跃 </el-button>
          <el-button class="btn" @click="linkUpdate1">教师活跃 </el-button>
          <el-button class="btn" @click="linkUpdate2">学生活跃 </el-button>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { getTermData } from "@/apis/teacher";
export default {
  data() {
    return {
      value: [],
      options: [],
      value1: [],
      options1: [
        {
          value1: "1",
          label: "第19周",
        },
        {
          value1: "2",
          label: "第18周",
        },
        {
          value1: "3",
          label: "第17周",
        },
        {
          value1: "4",
          label: "第16周",
        },
        {
          value1: "5",
          label: "第15周",
        },
        {
          value1: "6",
          label: "第14周",
        },
        {
          value1: "7",
          label: "第13周",
        },
        {
          value1: "8",
          label: "第12周",
        },
        {
          value1: "9",
          label: "第11周",
        },
        {
          value1: "10",
          label: "第10周",
        },
        {
          value1: "11",
          label: "第9周",
        },
        {
          value1: "12",
          label: "第8周",
        },
        {
          value1: "13",
          label: "第7周",
        },
        {
          value1: "14",
          label: "第6周",
        },
        {
          value1: "15",
          label: "第5周",
        },
        {
          value1: "16",
          label: "第4周",
        },
        {
          value1: "17",
          label: "第3周",
        },
        {
          value1: "18",
          label: "第2周",
        },
        {
          value1: "19",
          label: "第1周",
        },
      ],
      id: [],
      courses: [
        {
          num: 9334,
        },
        {
          num1: 62.329,
        },
      ],
    };
  },
  mounted() {
    this.setChart();
    this.getPlatformTermlist();
  },
  beforeDestroy() {
    this.$bus.$off("getTermData");
  },
  methods: {
    linkUpdate() {
      this.$router.push({
        path: "/CourseActive",
      });
    },
    linkUpdate1() {
      this.$router.push({
        path: "/TeacherActive",
      });
    },
    linkUpdate2() {
      this.$router.push({
        path: "/StudentActive",
      });
    },
    setChart() {
      var myChart = this.$echarts.init(this.$refs.myechart);
      window.onresize = function () {
        myChart.resize();
      };
      var option = {
        color: ["#FF8C00", "#9ACD32", "#1E90FF"],
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "shadow",
        //   },
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "15.5%",
          itemGap: 40,
          itemWidth: 10,
          data: ["教师活跃", "学生活跃", "课程活跃"],
          top: "bottom",
        },
        grid: {
          left: "3%",
          right: "5.6%",
          bottom: "16%",
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
          boundaryGap: false,
          minorTick: {
            show: true,
          },
          splitLine: { show: true },
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
        },
        series: [
          {
            name: "教师活跃",
            type: "line",
            smooth: true,
            stack: "Total1",
            symbolSize: 8,
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
              width: 5,
            },
          },
          {
            name: "学生活跃",
            type: "line",
            smooth: true,
            stack: "Total2",
            symbolSize: 8,
            data: [220, 182, 191, 234, 290, 330, 310],
            lineStyle: {
              width: 5,
            },
          },
          {
            name: "课程活跃",
            type: "line",
            smooth: true,
            stack: "Total3",
            symbolSize: 8,
            data: [150, 232, 201, 154, 190, 330, 410],
            lineStyle: {
              width: 5,
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    async getPlatformTermlist() {
      let res = await getTermData();
      // console.log("res", res);
      this.$bus.$emit("sendTermData", res.college_data);
      res.effective.forEach((item) => {
        this.options.push(item);
        // console.log("termOptions", this.termOptions);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.ActiveBottom {
  margin-top: 32.5px;
  display: flex;
  .left-box {
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
    // margin-left: 30px;
    width: 1025px;
    // height: 400px;
    opacity: 1;
    background: #ffffff;
    margin: 0px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    .header {
      margin: 0px;
      width: 100%;
      .first-box {
        display: flex;
        // margin-top: 6.25%;
        .title {
          margin-top: 5.31%;
          // padding-top: 6.25%;
          width: 18.21%;
          height: 6.15%;
          margin-left: 4.4%;
          .p1 {
            opacity: 1;
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 19px;
            font-weight: 250;
            line-height: 28px;
            letter-spacing: 0px;
            color: #000000;
          }
        }
        .term {
          margin-top: 4.5%;
          margin-left: 37.21%;
          width: 197.56px;
          height: 42px;
          border-radius: 10px;
          opacity: 1;
          // background: #ffffff;
          box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
          ::v-deep .el-input__inner {
            border-radius: 10px;
            text-align: center;
            height: 42px;
          }
          ::v-deep .el-input__icon {
            line-height: 0px !important;
            color: #000000;
          }
        }
        .week {
          // margin-left: 839.64px;
          margin-top: 4.5%;
          margin-left: 1%;
          margin-right: 2%;
          width: 197.56px;
          height: 42px;
          border-radius: 10px;
          // background: #ffffff;
          box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
          ::v-deep .el-input__inner {
            border-radius: 10px;
            text-align: center;
            height: 42px;
          }
          ::v-deep .el-input__icon {
            line-height: 0px !important;
            color: #000000;
          }
        }
      }
      .second-box {
        display: flex;
        margin-top: 3.28%;
        width: 11.82%;
        height: 3.86%;
        margin-left: 4.4%;
        .p2 {
          font-family: Inter-Regular;
          font-size: 9px;
          transform: scale(0.75);
          transform-origin: 0 0;
          font-weight: normal;
          letter-spacing: 0px;
          opacity: 1;
          color: #4f4f4f;
        }
      }
    }
    .Separator {
      display: flex;
      width: 100%;
      height: 4px;
      background-color: #f0f0f0;
      margin-top: 5.55%;
    }
    .chart1 {
      display: flex;
      margin-top: 0.53%;
      width: 100%;
      height: 500px;
      // padding-left: 1%;
      padding-right: 2%;
      margin-bottom: 8.21%;
    }
  }
  .right-box {
    display: flex;
    flex-direction: column;
    width: 433px;
    margin-left: 30px;
    .trends {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 220px;
      background: #ffffff;
      margin-top: 0px;
      .subtitle {
        display: flex;
        font-family: SourceHanSerifCN-ExtraLight;
        font-size: 16px;
        font-weight: 250;
        color: #262626;
        margin-top: 12.25%;
        margin-left: 8%;
      }
      .tre-bottom {
        display: flex;
        .tre-left {
          display: flex;
          margin-top: 7%;
          margin-left: 8%;
          .tre-icon1 {
            display: flex;
            .svg-icon {
              margin-top: 38%;
              width: 53px;
              height: 53px;
            }
          }
          .tre-course {
            margin-left: 3%;
            .cou-title {
              margin-top: 0px;
              font-family: SourceHanSerifCN-ExtraLight;
              font-size: 14px;
              font-weight: 250;
              color: #595959;
              opacity: 1;
            }
            .cou-data {
              margin-top: 15%;
              opacity: 1;
              font-family: SourceHanSerifCN-ExtraLight;
              font-size: 18px;
              font-weight: 250;
              color: #262626;
            }
            .tongbi {
              margin-top: 15%;
              width: 120%;
              .tbi-data {
                opacity: 1;
                font-family: D-DIN;
                font-size: 14px;
                font-weight: normal;
                color: #595959;
              }
              .tbi-text {
                opacity: 1;
                font-family: SourceHanSerifCN-ExtraLight;
                font-size: 10px;
                font-weight: 250;
                color: #bfbfbf;
              }
            }
          }
        }
        .tre-right {
          display: flex;
          margin-top: 7%;
          margin-left: 11%;
          .tre-icon2 {
            display: flex;
            .svg-icon {
              margin-top: 38%;
              width: 53px;
              height: 53px;
            }
          }
          .Offline-courses {
            margin-left: 3%;
            .off-title {
              margin-top: 0px;
              font-family: SourceHanSerifCN-ExtraLight;
              font-size: 14px;
              font-weight: 250;
              color: #595959;
              opacity: 1;
            }
            .off-data {
              margin-top: 15%;
              opacity: 1;
              font-family: SourceHanSerifCN-ExtraLight;
              font-size: 18px;
              font-weight: 250;
              color: #262626;
            }
            .off-tongbi {
              margin-top: 15%;
              width: 120%;
              .offtbi-data {
                opacity: 1;
                font-family: D-DIN;
                font-size: 14px;
                font-weight: normal;
                color: #595959;
              }
              .offtbi-text {
                opacity: 1;
                font-family: SourceHanSerifCN-ExtraLight;
                font-size: 10px;
                font-weight: 250;
                color: #bfbfbf;
              }
            }
          }
        }
      }
    }
    .ranking-list {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      .btn-switch {
        margin-top: 20px;
        margin-left: 60px;
        .el-button {
          margin-left: 0px;
          opacity: 1;
          font-family: SourceHanSansCN-ExtraLight;
          font-size: 16px;
          font-weight: 250;
          letter-spacing: 0em;
        }
        .btn:focus,
        .btn:hover {
          background-color: #ffffff;
          color: #000000;
          border-color: #ffffff;
          border-radius: 10px;
        }

        .btn {
          color: #000000;
          background: #f4f5f9;
          border-color: #f4f5f9;
          border-radius: 0px;
        }
      }
    }
  }
}
</style>
