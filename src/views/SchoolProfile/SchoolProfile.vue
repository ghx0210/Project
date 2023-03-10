<template>
  <div class="beijing">
    <!-- <MainHeader title="学校概况" /> -->
    <!-- 用于设置50外边距 -->
    <div class="contain">
      <div class="upper">
        <SearchInput :getInput="getInput" />
        <div class="Top-D-right">
          <div class="school_list">
            <router-link
              :to="{
                path: '/AllSchool',
              }"
            >
              全部学院
            </router-link>
          </div>
          <div class="bottom_to_icons">
            <router-link
              :to="{
                path: '/AllSchool',
              }"
            >
              <svg-icon icon-file-name="TGL-2" />
            </router-link>
          </div>
          <div class="bottom_to_wenzi">
            <router-link
              :to="{
                path: '/AllSchool',
              }"
            >
              前往
            </router-link>
          </div>
        </div>
      </div>
      <div class="Main-content">
        <div class="Main-content-left">
          <div class="up">
            <div class="up-inner" id="platform_top_echart"></div>
          </div>
          <div class="down">
            <div class="down-inner" id="platform_bottom_echart"></div>
          </div>
        </div>
        <div class="Main-content-right">
          <div class="one">
            <!-- 居中 -->
            <div class="one-center">
              <div>
                <div class="one-center-Top-Left">
                  <div>
                    <div class="number">{{ college_data.student_num }}</div>
                    <div class="introduction">学生数</div>
                  </div>
                  <!-- LeftBox为了设置一个右边距 -->
                  <div class="LeftBox"><svg-icon icon-file-name="XYGK1" /></div>
                </div>
                <div class="one-center-Bottom-Left">
                  <div>
                    <div class="number">{{ college_data.access_num }}</div>
                    <div class="introduction">访问数</div>
                  </div>
                  <div class="LeftBox"><svg-icon icon-file-name="XYGK3" /></div>
                </div>
              </div>
              <div>
                <div class="one-center-Top-Right">
                  <!-- RightBox为了设一个左边距 -->
                  <div class="RightBox">
                    <div class="number">{{ college_data.teacher_num }}</div>
                    <div class="introduction">教师数</div>
                  </div>
                  <div><svg-icon icon-file-name="XYGK2" /></div>
                </div>
                <div class="one-center-Bottom-Right">
                  <div class="RightBox">
                    <div class="number">{{ college_data.course_num }}</div>
                    <div class="introduction">课程数</div>
                  </div>
                  <div><svg-icon icon-file-name="XYGK4" /></div>
                </div>
              </div>
            </div>
          </div>
          <SchoolActivityResourcesEchart />

          <div class="three">
            <div class="one-center">
              <div>
                <div class="one-center-Top-Left">
                  <div>
                    <div class="number">{{ college_data.resource_num }}</div>
                    <div class="introduction">资源数</div>
                  </div>
                  <!-- LeftBox为了设置一个右边距 -->
                  <div class="LeftBox"><svg-icon icon-file-name="TII-6" /></div>
                </div>
                <div class="one-center-Bottom-Left">
                  <div>
                    <div class="number">{{ college_data.activity_num }}</div>
                    <div class="introduction">评论区数</div>
                  </div>
                  <div class="LeftBox"><svg-icon icon-file-name="TII-8" /></div>
                </div>
              </div>
              <div>
                <div class="one-center-Top-Right">
                  <!-- RightBox为了设一个左边距 -->
                  <div class="RightBox">
                    <div class="number">{{ college_data.assigns_num }}</div>
                    <div class="introduction">作业数</div>
                  </div>
                  <div><svg-icon icon-file-name="TII-7" /></div>
                </div>
                <div class="one-center-Bottom-Right">
                  <div class="RightBox">
                    <div class="number">{{ college_data.quizs_num }}</div>
                    <div class="introduction">测验数</div>
                  </div>
                  <div><svg-icon icon-file-name="TII-4" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";

import SchoolActivityResourcesEchart from "@/components/SchoolProfile/SchoolActivityResourcesEchart.vue";
export default {
  name: "SchoolProfile",
  data() {
    return {
      num: 3,
      inputname: "",
      inputschool: "",
      college_data: [],
    };
  },
  components: {
    SearchInput,
    SchoolActivityResourcesEchart,
  },
  mounted() {
    this.getEChartsbottom();
    this.getEChartstop();
    this.$bus.$on("sendTermData", (college_data) => {
      this.college_data = college_data;
      console.log("sendTermData", this.college_data);
    });
  },
  methods: {
    getInput(inputname, inputschool) {
      console.log("收到的inputname为", inputname);
      this.inputname = inputname;
      this.inputschool = inputschool;
    },
    getEChartstop() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("platform_top_echart"),
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
          data: ["教师活跃度", "学生活跃度"],
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
            splitLine: {
              show: true,
            },
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
            max: 60,
            interval: 5,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            axisLabel: {
              formatter: "",
            },
          },
        ],
        color: ["#86BC93", "#8EC6ED"],
        series: [
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
              39.0, 46.9, 58.0, 30.2, 55.6, 38.7, 28.6, 52.2, 15.6, 19.0, 26.4,
              42.3,
            ],
            smooth: true,
            itemStyle: {
              lineStyle: {
                color: "#86BC93", //注意这样颜色设置的位置
                width: 6, //设置线条宽度
              },
            },
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
              34.0, 41.9, 48.0, 20.2, 50.6, 35.7, 23.6, 56.2, 17.6, 29.0, 46.4,
              32.3,
            ],
            smooth: true,
            itemStyle: {
              lineStyle: {
                color: "#8EC6ED", //注意这样颜色设置的位置
                width: 6, //设置线条宽度
              },
            },
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
          data: ["教师人数", "学生人数", "教师活跃度", "学生活跃度"],
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
            splitLine: { show: true },
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数",
            min: 0,
            max: 60,
            interval: 5,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            name: "活跃度",
            min: 0,
            max: 60,
            interval: 5,
            axisLabel: {
              formatter: "",
            },
          },
        ],
        color: ["#0095FF", "#5470C6", "#86BC93", "#8EC6ED"],
        series: [
          {
            name: "教师人数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              39.0, 46.9, 58.0, 30.2, 55.6, 38.7, 28.6, 52.2, 15.6, 19.0, 26.4,
              42.3,
            ],
          },
          {
            name: "学生人数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              34.0, 41.9, 48.0, 20.2, 50.6, 35.7, 23.6, 56.2, 17.6, 29.0, 46.4,
              32.3,
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
              39.0, 46.9, 58.0, 30.2, 55.6, 38.7, 28.6, 52.2, 15.6, 19.0, 26.4,
              42.3,
            ],
            smooth: true,
            itemStyle: {
              lineStyle: {
                color: "#86BC93", //注意这样颜色设置的位置
                width: 6, //设置线条宽度
              },
            },
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
              34.0, 41.9, 48.0, 20.2, 50.6, 35.7, 23.6, 56.2, 17.6, 29.0, 46.4,
              32.3,
            ],
            smooth: true,
            itemStyle: {
              lineStyle: {
                color: "#8EC6ED", //注意这样颜色设置的位置
                width: 6, //设置线条宽度
              },
            },
          },
        ],
      });
      //防抖
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped lang="scss">
.beijing {
  background-color: #f9f9f9;
  .contain {
    background-color: #f9f9f9;
    .upper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 36px;
      .Top-D-right {
        display: flex;
        justify-content: space-between;
        line-height: 67px;
        width: 287px;
        height: 67px;
        background-color: #0095ff;
        border-radius: 20px;
        overflow: hidden;
      }
    }
  }
}
.school_list a {
  font-size: 24px;
  color: #f8f8f8;
  margin-left: 29px;
  margin-right: 60px;
}
.bottom_to {
  display: flex;
}
.bottom_to .svg-icon {
  width: 24px;
  height: 24px;
  margin: 6px;
}
.bottom_to_wenzi a {
  margin-left: 19px;
  margin-right: 24px;
  font-size: 16px;
  color: #ffffff;
}
.Main-content {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
}
.Main-content-left {
  .up {
    width: 718px;
    height: 510px;
    border-radius: 20px;
    background-color: #ffffff;
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    .up-inner {
      width: 718px;
      height: 510px;
      border-radius: 20px;
      margin-top: 46px;
    }
  }
  .down {
    width: 718px;
    height: 510px;
    border-radius: 20px;
    background-color: #ffffff;
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    .down-inner {
      width: 718px;
      height: 510px;
      border-radius: 20px;
      margin-top: 46px;
    }
  }
}

.Main-content-right .one {
  width: 718px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 35px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.02);
}
.one-center {
  display: flex;
}

.one-center-Top-Left,
.one-center-Top-Right {
  width: 312px;
  height: 105px;
  border: 1px solid #ececec;
  display: flex;
  justify-content: space-between;
}
.one-center-Bottom-Left,
.one-center-Bottom-Right {
  width: 312px;
  height: 69px;
  border: 1px solid #ececec;
  display: flex;
  justify-content: space-between;
}
.one-center-Bottom-Left {
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  padding-top: 36px;
}
.one-center-Bottom-Right {
  border-bottom: 1px solid transparent;
  border-right: 1px solid transparent;
  padding-top: 36px;
}
.one-center-Top-Right {
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
}
.one-center-Top-Left {
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
}
.LeftBox {
  margin-right: 39px;
}
.RightBox {
  margin-left: 36px;
}
.number {
  font-size: 30px;
}
.introduction {
  font-family: GenJyuuGothic-ExtraLight;
  font-size: 14px;
  margin-top: 16px;
}
.one-center-Bottom-Left .svg-icon,
.one-center-Bottom-Right .svg-icon,
.one-center-Top-Left .svg-icon,
.one-center-Top-Right .svg-icon {
  width: 48px;
  height: 48px;
  /* background-color: #bfa; */
  /* color: red; */
}

.Main-content-right .three {
  width: 718px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 32px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.02);
}
</style>
