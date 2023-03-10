<template>
  <div class="beijing">
    <!-- <MainHeader title="教师概况" /> -->
    <!-- 用于设置50外边距 -->
    <div class="contain">
      <div class="Top-D">
        <TopIconIntroduction
          class="top-Icon-container"
          :TeacherTopList="TeacherTopList"
        />
        <TopGoList :num="num" />
      </div>
      <div class="Middle_echart">
        <div class="Middle_left_echart">
          <SectorEchart idPie="idpie1" :dataPie="WeeklyTeachingTeachers" />
        </div>
        <div class="Middle_right_echart">
          <SectorEchart idPie="idpie2" :dataPie="TeachersOfferCourses" />
        </div>
      </div>
      <div class="Bottom_echart" id="platform_bottom_echart"></div>
    </div>
  </div>
</template>

<script>
import TopIconIntroduction from "@/components/TopIconIntroduction.vue";
import TopGoList from "@/components/TopGoList.vue";
import SectorEchart from "@/components/TeacherProfile/SectorEchart.vue";
import { getPlatformOverview } from "@/apis/platform";
export default {
  data() {
    return {
      num: 2,
      TeacherTopList: [
        {
          id: "001",
          title: "教师总数",
          num: 94,
          url: "TII-1",
          key: "teacher_num",
        },
        {
          id: "002",
          title: "平均教学时长",
          num: 94,
          url: "TII-2",
          key: "",
        },
        {
          id: "003",
          title: "教授课程",
          num: 94,
          url: "TII-3",
          key: "course_num",
        },
        {
          id: "004",
          title: "添加测验数",
          num: 94,
          url: "TII-4",
          key: "realclass_add",
        },
        {
          id: "005",
          title: "添加活动数",
          num: 94,
          url: "TII-5",
          key: "realclass_add",
        },
        {
          id: "006",
          title: "添加资源数",
          num: 94,
          url: "TII-6",
          key: "realstudent_add",
        },
        {
          id: "007",
          title: "添加作业数",
          num: 94,
          url: "TII-7",
          key: "teacher_add",
        },
        {
          id: "008",
          title: "添加讨论数",
          num: 94,
          url: "TII-8",
          key: "pv_num",
        },
      ],
      WeeklyTeachingTeachers: {
        description: "教师每周教学时长",
        Dblue: "<=5小时",
        green: "5-8小时",
        orange: "8-10小时",
        red: "10-15小时",
        blue: ">=15小时",
        num: 120,
      },
      TeachersOfferCourses: {
        description: "教师开设课程",
        Dblue: "1-5门",
        green: "6-10门",
        orange: "10-12门",
        red: "12-15门",
        blue: ">=15门",
        num: 400,
      },
    };
  },
  components: {
    TopIconIntroduction,
    // MainHeader,
    TopGoList,
    SectorEchart,
  },
  methods: {
    async getPlatformData() {
      let result = await getPlatformOverview();
      console.log("result", result);
      this.TeacherTopList.forEach((item, index, self) => {
        self[index].num = result.platform[item.key] || 94;
      });
      console.log("this.TeacherTopList", this.TeacherTopList);
    },
    getEChartsbottom() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("platform_bottom_echart"),
        null
      );
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: [
            "参与讨论数",
            "添加作业总数",
            "添加测验总数",
            "添加活动总数",
            "添加资源总数",
            "教师活跃度",
          ],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "数量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            name: "教师活跃度",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} ",
            },
          },
        ],
        color: ["#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE"],
        series: [
          {
            name: "参与讨论数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              55.0, 44.9, 127.0, 163.2, 135.6, 176.7, 35.6, 32.2, 142.6, 150.0,
              156.4, 178.3,
            ],
          },
          {
            name: "添加作业总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              42.6, 45.9, 129.0, 126.4, 128.7, 70.7, 35.6, 12.2, 148.7, 121.8,
              126.0, 112.3,
            ],
          },
          {
            name: "添加测验总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              42.6, 55.9, 149.0, 126.4, 128.7, 70.7, 45.6, 28.2, 132.7, 99.8,
              132.0, 102.3,
            ],
          },
          {
            name: "添加活动总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              32.6, 25.9, 119.0, 126.4, 78.7, 70.7, 65.6, 42.2, 122.7, 109.8,
              120.0, 132.3,
            ],
          },
          {
            name: "添加资源总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              62.6, 45.9, 129.0, 126.4, 98.7, 70.7, 35.6, 32.2, 128.7, 118.8,
              116.0, 102.3,
            ],
          },
          {
            name: "教师活跃度",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              2.0, 2.2, 8.3, 14.5, 16.3, 21.2, 6.3, 4.4, 13.0, 16.5, 12.0, 16.2,
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
    this.getEChartsbottom();
    this.getPlatformData();
  },
};
</script>

<style scoped lang="scss">
.beijing {
  background-color: #f9f9f9;
  .contain {
    background-color: #f9f9f9;
    .Top-D {
      display: flex;
      justify-content: space-between;
      .top-Icon-container {
        width: 1307px;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        overflow: hidden;
        background-color: #fff;
      }
    }
    .Middle_echart {
      display: flex;
      justify-content: space-between;
      margin-top: 36px;
      margin-bottom: 36px;
      .Middle_right_echart {
        width: 718px;
        height: 338px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
      }
      .Middle_left_echart {
        width: 718px;
        height: 338px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
      }
    }
    .Bottom_echart {
      /* width: 1475px; */
      height: 460px;
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;
    }
  }
}
</style>
