<template>
  <div class="beijing">
    <!-- <MainHeader title="学生概况" /> -->
    <!-- 用于设置50外边距 -->
    <div class="contain">
      <div class="Top-D">
        <TopIconIntroduction
          class="top-Icon-container"
          :TeacherTopList="TeacherTopList"
        />
        <TopGoList :num="num" />
      </div>
      <div class="Bottom_echart" id="platform_middle_echart"></div>
      <div class="Bottom_echart" id="platform_bottom_echar"></div>
    </div>
  </div>
</template>

<script>
import TopIconIntroduction from "@/components/TopIconIntroduction.vue";
// import MainHeader from "@/components/MainHeader.vue";
import TopGoList from "@/components/TopGoList.vue";
import { getPlatformOverview } from "@/apis/platform";
export default {
  data() {
    return {
      num: 1,
      TeacherTopList: [
        {
          id: "001",
          title: "学生总数",
          num: 94,
          url: "TII-1",
          key: "student_num",
        },
        {
          id: "002",
          title: "平均学习时长",
          num: 94,
          url: "TII-2",
          key: "course_num",
        },
        {
          id: "003",
          title: "参与作业总数",
          num: 94,
          url: "TII-7",
          key: "teacher_add",
        },
        { id: "004", title: "参与测验数", num: 94, url: "TII-4" },
        {
          id: "005",
          title: "参与讨论总数",
          num: 94,
          url: "TII-8",
          key: "pv_num",
        },
        { id: "006", title: "浏览资源总数", num: 94, url: "TII-6" },
        {
          id: "007",
          title: "数据下载总数",
          num: 94,
          url: "STII-1",
          key: "pv_add",
        },
      ],
    };
  },
  components: {
    TopIconIntroduction,
    // MainHeader,
    TopGoList,
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
    getEChartsmiddle() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("platform_middle_echart"),
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
        grid: {
          show: false,
          top: "25%",
          right: "10%",
          bottom: "10%",
          left: "10%",
        },
        title: {
          text: "学生参与数据",
          top: "6%",
          left: "2%",
        },
        legend: {
          top: 15,
          data: [
            "参与作业总数",
            "参与讨论总数",
            "参与测验总数",
            "浏览资源总数",
            "数据下载总数",
            "学生活跃度",
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
            name: "学生活跃度",
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
            name: "参与作业总数",
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
            name: "参与讨论总数",
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
            name: "参与测验总数",
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
            name: "浏览资源总数",
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
            name: "数据下载总数",
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
            name: "学生活跃度",
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
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getEChartsbottom() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("platform_bottom_echar"),
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
        grid: {
          show: false,
          top: "25%",
          right: "10%",
          bottom: "10%",
          left: "10%",
        },
        title: {
          text: "每周学生学习时长",
          top: "6%",
          left: "2%",
        },
        legend: {
          top: 15,
          data: ["每个时间段学习人数"],
        },

        xAxis: [
          {
            type: "category",
            data: ["0-5时", "5-10时", "10-15时", "15-20时", "20时以上"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],

        yAxis: [
          {
            type: "value",
            name: "学生数量",
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
              formatter: "{value} ",
            },
          },
        ],

        color: ["#73C0DE"],
        series: [
          {
            name: "每个时间段学习人数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [10, 25.9, 29.0, 16.4, 8.7],
            barWidth: 40,
          },
        ],
      });
      //防抖
      let timer;
      window.onresize = function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          myChart.resize();
        }, 500);
      };
    },
  },
  mounted() {
    this.getEChartsmiddle();
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
    .Bottom_echart {
      height: 460px;
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;
      margin-top: 50px;
    }
  }
}
</style>
