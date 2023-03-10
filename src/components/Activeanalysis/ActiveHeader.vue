<template>
  <div class="ActiveHeader">
    <div class="DatePicker">
      <div class="title">活跃分析</div>
      <div class="datepinpurt">
        <span class="demonstration">时间选择</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
    <el-row :gutter="12" class="el-row">
      <el-col
        :sm="24"
        :md="8"
        :lg="4"
        v-for="(HeadCount, index) in TotalCount"
        :key="HeadCount.id"
        class="el-col"
      >
        <el-card
          :key="index"
          onclick=""
          class="el-card"
          :body-style="{ padding: '0px' }"
        >
          <div class="platform-totalcount">
            <div class="display">
              <div class="discussion-total">{{ HeadCount.title }}</div>
              <div class="discussion-total1">{{ HeadCount.num }}</div>
            </div>
            <div
              calss="line"
              style="
                width: 91%;
                height: 1.64px;
                background-color: #d9d9d9;
                margin-top: 4.5%;
              "
            ></div>
            <div class="bottom">
              <div class="Daily-average">{{ HeadCount.title1 }}</div>
              <div class="Daily-average1">{{ HeadCount.num1 }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      TotalCount: [
        {
          id: 1,
          title: "讨论参与总数",
          num: "168,700",
          title1: "日均参与",
          num1: "12,768",
        },
        {
          id: 2,
          title: "测试参与总数",
          num: 391,
          title1: "日均参与",
          num1: "12,768",
        },
        {
          id: 3,
          title: "作业参与总数",
          num: "168,700",
          title1: "日均参与",
          num1: "较上月下降3名",
        },
        {
          id: 4,
          title: "活动参与总数",
          num: 457,
          title1: "旧活动 新活动",
          num1: "409 20",
        },
        {
          id: 5,
          title: "课程参与总数",
          num: "200,890",
          title1: "课程参与",
          num1: "较上月下降20%",
        },
        {
          id: 6,
          title: "签到总数",
          num: 674,
          title1: "签到人数",
          num1: "较上月减少14%",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.ActiveHeader {
  .DatePicker {
    display: flex;
    justify-content: space-between;
    .title {
      padding: 5px;
      display: flex;
      align-items: center;
      border-left: 5px solid #386fff;
    }
    .datepinpurt {
      .demonstration {
        margin-right: 10px;
      }
      .el-input__inner {
        width: 274px;
      }
    }
  }
  .el-row {
    margin-top: 27.23px;
    .el-card {
      background: #ffffff;
      // height: 165px;
      .platform-totalcount {
        display: flex;
        flex-direction: column;
        opacity: 1;
        padding-left: 12px;
        .display {
          .discussion-total {
            // width: 88px;
            margin-top: 30%;
            // height: 12px;
            opacity: 1;
            font-family: SourceHanSerifCN-ExtraLight;
            transform: scale(0.67);
            transform-origin: 0 0;
            font-size: 8px;
            letter-spacing: 0px;
            color: #8c8c8c;
          }
          .discussion-total1 {
            margin-top: 2.5%;
            // width: 88px;
            // height: 24px;
            opacity: 1;
            font-family: SourceHanSerifCN-Regular;
            font-size: 14px;
            transform: scale(1.17);
            transform-origin: 0 0;
            font-weight: normal;
            // line-height: 24px;
            letter-spacing: 0px;
            color: #262626;
          }
        }
        .bottom {
          display: flex;
          // flex-direction: column;
          margin-top: 0.6%;
          margin-bottom: 25%;
          .Daily-average {
            // width: 60px;
            opacity: 1;
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 9px;
            transform: scale(0.75);
            transform-origin: 0 0;
            font-weight: 250;
            letter-spacing: 0px;
            color: #8c8c8c;
          }
          .Daily-average1 {
            // width: 41.4%;
            // margin-left: 5%;
            opacity: 1;
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 9px;
            transform: scale(0.75);
            transform-origin: 0 0;
            font-weight: 250;
            letter-spacing: 0px;
            color: #333333;
          }
        }
      }
    }
  }
  // .Table {
  //   margin-top: 23px;
  // }
}
</style>
