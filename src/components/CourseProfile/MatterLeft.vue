<template>
  <div class="left">
    <div class="title1"><span class="pa">课程基本情况</span></div>
    <div class="head">
      <div class="title">
        <span class="p"
          ><a href="#"><svg-icon icon-file-name="basic" /></a
        ></span>
        <span class="p1">课程信息</span>
      </div>
      <div class="course-box">
        <div class="tu">
          <img :src="CourseData.img" alt="" />
        </div>
        <div class="name">
          <span class="p2">Course</span>
          <span class="p3">{{ CourseData.fullname }}</span>
        </div>
        <div class="box">
          <div class="bar">
            <span class="p4">课程进度</span>
            <el-progress :percentage="50"></el-progress>
          </div>
          <div class="time">
            <span>课程时间：</span>
            <span
              >{{ $route.query.start_time }}-{{ $route.query.end_time }}</span
            >
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="teacher">
        <div class="touxiang">
          <span
            ><a href="#"><svg-icon icon-file-name="headportrait" /></a
          ></span>
        </div>
        <div class="name">
          <span class="p5">授课教师</span>
          <span class="p6" v-for="item in Teacher" :key="item.id">
            {{ item.name }}
          </span>
        </div>
        <div class="school">
          <span class="dept">{{ dept }}</span>
        </div>
        <div class="introduction">
          <span class="p7">课程简介：</span>
          <span class="p8">{{ CourseData.summary }}</span>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="title">
        <span class="p"
          ><a href="#"><svg-icon icon-file-name="basic" /></a
        ></span>
        <span class="p1">基本统计</span>
      </div>
      <div class="box">
        <el-row :gutter="12" class="el-row">
          <el-col
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            v-for="basicstat in stat"
            :key="basicstat.id"
            class="el-col"
          >
            <div class="count">
              <div class="img">
                <svg-icon :icon-file-name="basicstat.url"></svg-icon>
              </div>
              <div class="count-name">
                <span class="p">{{ basicstat.name }}</span>
                <span class="p1">{{ basicstat.num }}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        <span class="p"
          ><a href="#"><svg-icon icon-file-name="basic" /></a
        ></span>
        <span class="p1">课程活跃</span>
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
      <div class="chart" ref="myechart"></div>
    </div>
  </div>
</template>

<script>
import { getCourseBasic } from "@/apis/course";
import { getcourseOverview } from "@/apis/course";
// import { getcourseOverview } from "@/apis/course";
export default {
  data() {
    return {
      CourseData: [],
      Teacher: [],
      // fullname: "计算机应用",
      // img: "",
      dept: "广东砺云教育科技有限公司",
      // summary: "暂无",
      stat: [
        {
          url: "matter-1",
          name: "教辅材料数",
          num: 32,
          key: "resource_num",
        },
        {
          url: "matter-2",
          name: "作业数",
          num: 8,
          key: "assigns_num",
        },
        {
          url: "matter-3",
          name: "学生数",
          num: 119,
          key: "students_num",
        },
        {
          url: "matter-4",
          name: "测验数",
          num: 4,
          key: "quizs_num",
        },
        {
          url: "matter-5",
          name: "随堂问答数",
          num: 24,
          key: "activity_num",
        },
        {
          url: "matter-6",
          name: "课程签到次数",
          num: 11,
          key: "qiandao",
        },
        {
          url: "matter-7",
          name: "讨论数",
          num: 24,
          key: "forums_num",
        },
        {
          url: "matter-8",
          name: "访问数",
          num: 11,
          key: "access_num",
        },
      ],
      AcceptPicture: "",
      CourseBasicList: [],
      // teacherlist: [],
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
      Time: [],
    };
  },
  mounted() {
    this.setChart();
    this.getBasicData();
    this.getcourseData();
    // this.getcourseData();
    // this.AcceptPicture = this.$route.query.url;
    // console.log("Accept Picture", this.AcceptPicture);
  },
  methods: {
    setChart() {
      var myChart = this.$echarts.init(this.$refs.myechart);
      window.onresize = function () {
        myChart.resize();
      };
      var option = {
        color: ["#4169E1", "#FF8C00"],
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#4E5969",
            fontFamily: "SourceHanSerifCN-ExtraLight",
            fontWeight: 250,
            fontSize: 13,
          },
          backgroundColor: "#F4F7FC",
          axisPointer: {
            type: "line",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        toolbox: {},
        grid: {
          top: "11%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 14.38,
              fontFamily: "SourceHanSerifCN-ExtraLight",
              fontSize: 12,
              fontWeight: 250,
              lineHeight: 20,
              width: 89.8,
              height: 17.48,
              color: "#4E5969",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            minInterval: 1000,
            axisLabel: {
              margin: 14.38,
              fontFamily: "SourceHanSerifCN-ExtraLight",
              fontSize: 12,
              fontWeight: 250,
              lineHeight: 20,
              width: 31.49,
              height: 15.92,
              color: "#4E5969",
            },
          },
        ],
        series: [
          {
            name: "学生活跃",
            type: "line",
            smooth: true,
            lineStyle: {
              width: 2,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.1,
            },
            data: [1800, 2800, 2310, 1340, 1900, 2300, 1200],
          },
          {
            name: "教师活跃",
            type: "line",
            smooth: true,
            lineStyle: {
              width: 2,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.1,
            },
            data: [1100, 1200, 1810, 2340, 2100, 2900, 1500],
          },
        ],
      };
      myChart.setOption(option);
    },
    async getcourseData() {
      let result = await getcourseOverview();
      this.Time = result.data;
      console.log("!!!", this.Time);
    },
    async getBasicData() {
      let result = await getCourseBasic(this.$route.query.id);
      // this.teacherlist = result.teacher_list;
      // this.stat.forEach((item, index, self) => {
      //   self[index].num = result.course[item.key] || 0;
      // });
      this.CourseData = result.course;
      this.Teacher = result.teacher_list;
      this.stat.forEach((item, index, self) => {
        self[index].num = result.course[item.key] || 0;
      });
    },

    // async getcourseData() {
    //   let result = await getcourseOverview();
    //   this.tableData = result.data;
    //   console.log("请求成功", result);
    // },
  },
};
</script>

<style scoped lang="scss">
.left {
  display: flex;
  flex-direction: column;
  width: 1163px;
  .title1 {
    padding: 5px;
    display: flex;
    align-items: center;
    border-left: 5px solid #386fff;
    .pa {
      display: flex;
      height: 22px;
      opacity: 1;
      font-family: SourceHanSerifCN-ExtraLight;
      font-size: 16px;
      font-weight: 250;
      line-height: 22px;
      letter-spacing: 0px;
      color: #262626;
    }
  }
  .head {
    display: flex;
    flex-direction: column;
    margin-top: 17px;
    background-color: #ffffff;
    .title {
      display: flex;
      font-size: 14px;
      margin-left: 20px;
      .p {
        display: flex;
        margin-top: 20px;
      }
      .p1 {
        margin-left: 9.75px;
        margin-top: 20px;
        opacity: 1;
        font-family: HarmonyOS_Sans_SC;
        font-weight: normal;
        letter-spacing: 0px;
        color: #131414;
      }
    }
    .course-box {
      display: flex;
      margin-top: 22.11px;
      margin-left: 20px;
      .tu {
        width: 113px;
        height: 59px;
        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        margin-left: 32.06px;
        .p2 {
          display: flex;
          opacity: 1;
          font-family: HarmonyOS_Sans_SC_Bold;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0px;
          color: #606266;
        }
        .p3 {
          display: flex;
          opacity: 1;
          width: 306px;
          font-family: HarmonyOS_Sans_SC_Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0px;
          color: #131414;
        }
      }
      .box {
        display: flex;
        flex-direction: column;
        margin-left: 336.94px;
        .bar {
          display: flex;
          flex-direction: column;
          width: 345px;
          .p4 {
            display: flex;
            opacity: 1;
            font-family: HarmonyOS_Sans_SC;
            font-size: 14px;
            font-weight: normal;
            line-height: 24px;
            letter-spacing: 0px;
            color: #606266;
          }
          .el-progress {
            display: flex;
            width: 100%;
            margin-top: 9px;
          }
        }
        .time {
          display: flex;
          opacity: 1;
          font-family: SourceHanSerifCN-Regular;
          font-size: 14px;
          font-weight: normal;
          line-height: 22px;
          letter-spacing: -0.07px;
          color: #3d3d3d;
        }
      }
    }
    .line {
      display: flex;
      margin-left: 20px;
      margin-top: 39.89px;
      width: 511.5px;
      height: 1px;
      opacity: 1;
      background: #e4e7ed;
    }
    .teacher {
      display: flex;
      margin-top: 32px;
      margin-left: 20px;
      margin-bottom: 32px;
      .touxiang {
        display: flex;
        .svg-icon {
          width: 48px;
          height: 48px;
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        margin-left: 17px;
        .p5 {
          display: flex;
          opacity: 1;
          width: 60px;
          font-family: HarmonyOS_Sans_SC_Bold;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0px;
          color: #606266;
        }
        .p6 {
          display: flex;
          opacity: 1;
          font-family: HarmonyOS_Sans_SC_Bold;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0px;
          color: #131414;
        }
      }
      .school {
        display: flex;
        margin-top: 14px;
        margin-left: 17px;
        opacity: 1;
        font-family: HarmonyOS_Sans_SC;
        font-size: 12px;
        font-weight: normal;
        line-height: 20px;
        letter-spacing: 0px;
        color: #9b9b9b;
        .dept {
          width: 180px;
        }
      }
      .introduction {
        display: flex;
        flex-direction: column;
        margin-left: 280px;
        .p7 {
          display: flex;
          opacity: 1;
          font-family: HarmonyOS_Sans_SC;
          font-size: 12px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: 0px;
          color: #c0c4cc;
        }
        .p8 {
          display: flex;
          opacity: 1;
          font-family: HarmonyOS_Sans_SC_Medium;
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0px;
          color: #000000;
        }
      }
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #ffffff;
    .title {
      display: flex;
      font-size: 14px;
      margin-left: 20px;
      .p {
        display: flex;
        margin-top: 20px;
      }
      .p1 {
        margin-left: 9.75px;
        margin-top: 20px;
        opacity: 1;
        font-family: HarmonyOS_Sans_SC;
        font-weight: normal;
        letter-spacing: 0px;
        color: #131414;
      }
    }
    .box {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 24px;
      margin-bottom: 20px;
      .el-row {
        .el-col {
          .count {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            border-radius: 4px;
            height: 81px;
            background: #f5f7fa;
            .img {
              display: flex;
              margin-left: 16px;
              .svg-icon {
                width: 24px;
                height: 24px;
              }
            }
            .count-name {
              display: flex;
              flex-direction: column;
              margin-left: 20px;
              .p {
                display: flex;
                opacity: 1;
                font-family: HarmonyOS_Sans_SC;
                font-size: 12px;
                font-weight: normal;
                line-height: 20px;
                color: #606266;
              }
              .p1 {
                display: flex;
                opacity: 1;
                font-family: HarmonyOS_Sans_SC_Bold;
                font-size: 18px;
                font-weight: bold;
                line-height: 24px;
                color: #131414;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 319px;
    background-color: #ffffff;
    .title {
      display: flex;
      font-size: 14px;
      margin-left: 20px;
      margin-top: 20px;
      .p {
        display: flex;
        margin-top: 13.5px;
      }
      .p1 {
        margin-left: 9.75px;
        margin-top: 8.5px;
        opacity: 1;
        font-family: HarmonyOS_Sans_SC;
        font-weight: normal;
        letter-spacing: 0px;
        line-height: 24px;
        color: #131414;
      }
      .week {
        margin-left: 8.5px;
        width: 198px;
        height: 41px;
        border-radius: 10px;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
        ::v-deep .el-input__inner {
          border-radius: 10px;
          text-align: center;
          opacity: 1;
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 14px;
          font-weight: 250;
          line-height: 16px;
          letter-spacing: 0.14px;
          color: #555555;
          height: 41px;
        }
        ::v-deep .el-input__icon {
          line-height: 0px;
          color: #000000;
        }
      }
    }
    .chart {
      display: flex;
      height: 250px;
    }
  }
}
</style>
