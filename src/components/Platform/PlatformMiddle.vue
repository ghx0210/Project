<template>
  <div class="PlatformMiddle">
    <div class="Leftpart">
      <div class="leftright">
        <div class="Parttitle">用户比例</div>
        <div class="Partmain">
          <div
            class="Mainleft"
            v-for="Progress in ProgressData"
            :key="Progress.id"
          >
            <el-progress
              :stroke-width="13"
              :percentage="
                (Progress.tage /
                  (PersonData.student_num + PersonData.teacher_num)) *
                100
              "
              :show-text="false"
              :color="Progress.color"
              v-if="
                parseInt(
                  (Progress.tage /
                    (PersonData.student_num + PersonData.teacher_num)) *
                    100
                )
              "
            ></el-progress>
            <div class="Parttext">
              <span>{{ Progress.name }}</span>
              <span
                >{{
                  ((Progress.tage /
                    (PersonData.student_num + PersonData.teacher_num)) *
                    100)
                    | numFilter
                }}%</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="Mainright" ref="myechart"></div>
    </div>
    <div class="Rightpart" ref="myechart1"></div>
  </div>
</template>

<script>
import { getPlatformOverview } from "@/apis/platform";
export default {
  mounted() {
    this.getPeopleNum();
    // this.setChart();
    this.setChart1();
  },
  methods: {
    setChart1() {
      var myChart = this.$echarts.init(this.$refs.myechart1);
      window.onresize = function () {
        myChart.resize();
      };
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        title: {
          text: "访问量",
          top: "5%",
          left: "5%",
          textStyle: {
            fontSize: 20,
            color: "#393939",
            fontWeight: "normal",
            fontFamily: "Source Han Serif CN",
          },
        },
        legend: {
          top: "5%",
          left: "center",
          itemGap: 50,
        },
        grid: {
          top: "30%",
        },
        dataZoom: [
          {
            type: "inside",
            zoomLock: true,
            maxSpan: 50,
          },
        ],
        xAxis: {
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
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "访问量",
            type: "bar",
            barWidth: 10,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 7, 5, 4, 5],
            itemStyle: {
              color: "#F73A0B",
            },
          },
          {
            name: "课程数",
            type: "bar",
            barWidth: 10,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 8],
          },
        ],
      };
      myChart.setOption(option);
    },
    async getPeopleNum() {
      let result = await getPlatformOverview();
      this.ProgressData.forEach((item, index, self) => {
        self[index].tage = result.platform[item.key] || 0;
      });
      this.PersonData = result.platform;
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
            name: "用户比例",
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
              },
            },
            data: [
              {
                value: this.PersonData.student_num,
                name: "学生",
                itemStyle: {
                  color: "#F6AD2E",
                },
              },
              {
                value: this.PersonData.teacher_num,
                name: "老师",
                itemStyle: {
                  color: "#F93A0B",
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(0);
      return realVal;
    },
  },
  data() {
    return {
      ProgressData: [
        {
          id: 1,
          name: "学生",
          tage: 70,
          color: "#F6AD2E",
          key: "student_num",
        },
        {
          id: 2,
          name: "老师",
          tage: 30,
          color: "#F93A0B",
          key: "teacher_num",
        },
      ],
      PersonData: [],
    };
  },
};
</script>

<style scoped lang="scss">
.PlatformMiddle {
  display: flex;
  justify-content: space-between;
  .Leftpart {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    background-color: #ffffff;
    flex-grow: 1;
    .leftright {
      .Parttitle {
        font-size: 22px;
        margin: 16px 0 60px 40px;
      }

      .Partmain {
        width: 290px;
        margin: 0px 0 20px 40px;

        .Mainleft {
          margin-top: 35px;
          .Parttext {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }

    .Mainright {
      flex-grow: 1;
      width: 226px;
      margin-left: 30px;
    }
  }
  .Rightpart {
    margin-left: 30px;
    padding: 20px 20px 0;
    width: 718px;
    height: 338px;
    border-radius: 20px;
    background-color: #ffffff;
  }
}
</style>
