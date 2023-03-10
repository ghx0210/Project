<template>
  <div class="PlatformSurvey">
    <div class="Headpart">
      <PlatformHeader :CardData="PlatformCard"></PlatformHeader>
    </div>
    <div class="Middlepart">
      <PlatformMiddle></PlatformMiddle>
    </div>
    <div class="Bottompart">
      <div class="Bottomechart" ref="myechart"></div>
    </div>
  </div>
</template>

<script>
import PlatformHeader from "@/components/Platform/PlatformHeader.vue";
import PlatformMiddle from "@/components/Platform/PlatformMiddle.vue";
import { getPlatformOverview } from "@/apis/platform";
export default {
  components: {
    PlatformHeader,
    PlatformMiddle,
  },
  mounted() {
    this.getPlatformData();
    this.setChart();
  },
  data() {
    return {
      PlatformCard: [
        {
          id: 1,
          url: "Platform-H1",
          num: 0,
          title: "用户总数",
          key: "user_total",
        },
        {
          id: 2,
          url: "Platform-H2",
          num: 1,
          title: "总课程数",
          key: "course_num",
        },
        {
          id: 3,
          url: "Platform-H3",
          num: 2,
          title: "人均选课",
          key: "percourse_num",
        },
        {
          id: 4,
          url: "Platform-H4",
          num: 8,
          title: "月访问量",
          key: "pv_num",
        },
        {
          id: 5,
          url: "Platform-H5",
          num: 3,
          title: "实时在线课程",
          key: "realclass_num",
        },
        {
          id: 6,
          url: "Platform-H6",
          num: 94,
          title: "实时在线人数",
          key: "realstudent_num",
        },
      ],
    };
  },
  methods: {
    setChart() {
      var myChart = this.$echarts.init(this.$refs.myechart);
      window.onresize = function () {
        myChart.resize();
      };
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        title: {
          text: "实时在线数据",
        },
        legend: {
          top: "5%",
          left: "center",
          itemGap: 50,
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "实时在线人数",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
          {
            name: "实时在线课程",
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            smooth: true,
          },
        ],
      };
      myChart.setOption(option);
    },
    async getPlatformData() {
      let result = await getPlatformOverview();
      this.PlatformCard.forEach((item, index, self) => {
        self[index].num = result.platform[item.key] || 0;
      });
      this.PlatformCard[0].num =
        result.platform.student_num + result.platform.teacher_num;
    },
  },
};
</script>

<style scoped lang="scss">
.PlatformSurvey {
  .Headpart {
    border-radius: 20px;
    background-color: #ffffff;
  }
  .Middlepart {
    margin-top: 36px;
  }
  .Bottompart {
    margin-top: 36px;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 20px 20px 0;
    .Bottomechart {
      width: 100%;
      height: 461px;
    }
  }
}
// @media screen and (max-width: 1200px) {
//   .Headpart {
//     width: 825px !important;
//   }
// }
</style>
