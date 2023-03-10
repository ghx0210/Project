<template>
  <div class="VisitBottom">
    <div class="headpart">
      <div class="leftpart">
        <div class="echartleft" ref="myechart"></div>
      </div>
      <div class="rightpart">
        <div class="searchinput">
          <el-input
            placeholder="搜索学院"
            suffix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
        <div class="searchtable">
          <el-table
            :data="
              CollegeData.filter(
                (data) =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
            style="width: 100%"
            height="288"
          >
            <el-table-column prop="name" label="学院"></el-table-column>
            <el-table-column prop="peoplenum" label="总人数（/千）">
            </el-table-column>
            <el-table-column prop="access_num" label="访问人数（/千）">
            </el-table-column>
            <el-table-column
              prop="proportion"
              label="访问占比（百分比）"
              width="180"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="bottompart">
      <div class="Bottomechart" ref="myechart1"></div>
    </div>
  </div>
</template>

<script>
import { getSchoolTable } from "@/apis/Visit";
import { getVisitTable } from "@/apis/Visit";
export default {
  mounted() {
    this.setChart();
    this.setChart1();
    this.getCollegedata();
    // this.getPersondata();
  },
  methods: {
    setChart() {
      var myChart = this.$echarts.init(this.$refs.myechart);
      window.onresize = function () {
        myChart.resize();
      };
      // 指定图表的配置项和数据
      var option = {
        legend: {
          orient: "vertical",
          right: "0%",
          top: "middle",
          itemGap: 50,
        },
        title: {
          text: "访问数",
          top: "5%",
          left: "5%",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            left: -100,
            type: "pie",
            radius: ["40%", "70%"],
            roseType: "radius",
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
            labelLine: {
              show: false,
            },
            data: [
              { value: 50, name: "用户访问数" },
              { value: 40, name: "教师访问数" },
              { value: 30, name: "学生访问数" },
              { value: 20, name: "其他" },
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
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        title: {
          text: "历史访问量",
        },

        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            barWidth: 30,
            data: [250, 750, 990, 500, 990, 500, 250, 750, 250, 250, 500, 750],
            type: "bar",
          },
        ],
      };
      myChart.setOption(option);
    },
    async getCollegedata() {
      let result = await getSchoolTable();
      this.CollegeData = result.college;
      this.Catid = result.college.map((item) => {
        return {
          catid: item.cid,
        };
      });
    },

    async getPersondata() {
      let result = await getVisitTable(1);
      console.log("请求成功", result);
    },
  },
  data() {
    return {
      search: "",
      CollegeData: [],
      Catid: [],
    };
  },
};
</script>

<style scoped lang="scss">
.VisitBottom {
  .headpart {
    display: flex;
    justify-content: space-between;
    .leftpart {
      flex-grow: 1;
      padding: 5px;
      border-right: 1px dashed;
      margin-top: 20px;
      .echartleft {
        width: 450px;
        height: 366px;
      }
    }
    .rightpart {
      flex-grow: 1;
      width: 556px;
      padding: 10px;
      .searchinput {
        margin: 20px 0;
        display: flex;
        justify-content: flex-end;
        .el-input {
          width: 296px;
          margin-right: 20px;
        }
      }
    }
  }
  .bottompart {
    margin-top: 36px;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 20px 20px 0;
    .Bottomechart {
      width: 100%;
      height: 322px;
    }
  }
}
</style>
