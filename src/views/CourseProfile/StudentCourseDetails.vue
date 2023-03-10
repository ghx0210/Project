<template>
  <div class="StudentCourseDetails">
    <div class="HeaderPart">
      <div class="LeftPart">
        <div class="HeadPng">
          <el-avatar :size="100" :src="User.avatar"></el-avatar>
        </div>
        <div class="Imformation">
          <div class="Text">
            <div class="TextContent">
              <div class="LeftText">姓名：</div>
              <div class="RightText">{{ User.name }}</div>
            </div>
            <div class="TextContent">
              <div class="LeftText">学号：</div>
              <div class="RightText">2023610201</div>
            </div>
            <div class="TextContent">
              <div class="LeftText">学校：</div>
              <div class="RightText">信息学院</div>
            </div>
          </div>
        </div>
      </div>
      <div class="RightPart">
        <div class="leftpart">
          <div class="TopTitle">
            <span class="Title1">Course</span>
            <span class="Title2">{{ User.course_name }}</span>
          </div>
          <div class="BottomProgress">
            <div
              class="Progress"
              v-for="Progress in ProgressData.slice(
                (currentPages - 1) * pageSize,
                currentPages * pageSize
              )"
              :key="Progress.id"
            >
              <div class="Parttext">
                <span>{{ Progress.name }}</span>
              </div>
              <el-progress
                :stroke-width="8"
                :percentage="Progress.tage"
                :show-text="true"
                :color="Progress.color"
              ></el-progress>
            </div>
          </div>
        </div>
        <div class="rightpart">
          <div class="StudyTimeBox">
            <div class="TimeBoxTop">
              <span class="Timeicon">
                <svg-icon icon-file-name="CouDetTime"></svg-icon>
              </span>
              <span class="Timenum">{{ User.spendtime }}</span>
            </div>
            <span class="Timetitle">视频学习时长</span>
          </div>
          <div class="PersonalData">
            <div class="Sta">
              <div class="sta">
                <span class="statitle">课程访问次数</span>
                <span>12</span>
              </div>
              <div class="sta">
                <span class="statitle">参与课程作业数</span>
                <span>24</span>
              </div>
            </div>
            <div class="Sta">
              <div class="sta">
                <span class="statitle">参与课程测验数</span>
                <span>8</span>
              </div>
              <div class="sta">
                <span class="statitle">参与课程讨论数</span>
                <span>44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="BottomPart">
      <div class="title">学生课程完成详情</div>
      <CouDetTable
        class="Table1"
        :CardData="ChapterData1"
        :tableData="TableData1"
      ></CouDetTable>
      <CouDetTable
        class="Table2"
        :CardData="ChapterData2"
        :tableData="TableData2"
      ></CouDetTable>
    </div>
  </div>
</template>

<script>
import CouDetTable from "@/components/Course/CouDetTable.vue";
import { getStudentDetail } from "@/apis/course";
export default {
  components: {
    CouDetTable,
  },
  mounted() {
    this.getStudentUser();
  },
  methods: {
    async getStudentUser() {
      let result = await getStudentDetail(
        this.$route.query.course,
        this.$route.query.id
      );

      this.User = result.user;
    },
  },
  data() {
    return {
      User: [],
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      ProgressData: [
        {
          id: 1,
          name: "课程进度",
          tage: 56,
        },
        {
          id: 2,
          name: "测验完成",
          tage: 56,
        },
      ],
      ChapterData1: [
        {
          id: 1,
          chapter_title: "一",
          video_num: 12,
          task_num1: 4,
          finish_num1: 4,
          task_num2: 4,
          finish_num2: 4,
          task_num3: 4,
          finish_num3: 4,
          chapter_num: 9,
          progress_num: 75,
        },
      ],
      ChapterData2: [
        {
          id: 1,
          chapter_title: "二",
          video_num: 12,
          task_num1: 4,
          finish_num1: 4,
          task_num2: 4,
          finish_num2: 4,
          task_num3: 4,
          finish_num3: 4,
          chapter_num: 9,
          progress_num: 75,
        },
      ],
      TableData1: [
        {
          a: 1.1,
          b: "章节",
          c: "图文",
          d: "2021-02-28 10:30",
          e: "完成",
          f: 44,
        },
      ],
      TableData2: [
        {
          a: 1.1,
          b: "章节",
          c: "图文",
          d: "2021-02-28 10:30",
          e: "完成",
          f: 44,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.StudentCourseDetails {
  .HeaderPart {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 213px;
    .LeftPart {
      width: 527px;
      background-color: #fff;
      margin-right: 32px;
      display: flex;
      justify-content: space-between;
      padding: 20px;
      .HeadPng {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
      }
      .Imformation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .TextContent {
          display: flex;
          margin: 33px;
          padding: 5px;
          font-size: 18px;
          .LeftText {
            margin: 0 30px;
            color: #4e5969;
          }
          .RightText {
            color: #1d2129;
          }
        }
      }
    }
    .RightPart {
      width: 942px;
      background-color: #fff;
      display: flex;
      justify-content: space-betweene;
      padding: 14px 0 0 50px;
      .leftpart {
        display: flex;

        flex-direction: column;
        flex-grow: 1;

        .TopTitle {
          display: flex;
          flex-direction: column;

          .Title1 {
            font-size: 12px;
            font-weight: bold;
            color: #606266;
            margin-bottom: 6px;
          }
          .Title2 {
            font-size: 24px;
            font-weight: bold;
            color: #131414;
          }
        }
        .BottomProgress {
          margin-top: 7px;
          .Progress {
            width: 307px;
          }
          .Parttext {
            color: #86909c;
            font-size: 14px;
            margin: 17px 0 9px;
          }
        }
      }
      .rightpart {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin-top: 18px;
        padding-left: 40px;
        .StudyTimeBox {
          display: flex;
          flex-direction: column;
          .TimeBoxTop {
            display: flex;
            .Timeicon {
              font-size: 32px;
            }
            .Timenum {
              margin-left: 18px;
              font-size: 24px;
              color: #1d2129;
              display: flex;
              align-items: center;
            }
          }
          .Timetitle {
            margin-top: 8px;
            color: #86909c;
            font-size: 14px;
          }
        }
        .PersonalData {
          display: flex;
          flex-direction: column;
          margin-top: 29px;
          color: #4e5969;
          font-size: 18px;
          .Sta {
            display: flex;
            margin-bottom: 20px;
            .sta {
              margin-right: 25px;
              .statitle {
                color: #86909c;
                font-size: 14px;
              }
              span {
                margin-right: 14px;
              }
            }
          }
        }
      }
    }
  }

  .BottomPart {
    margin-top: 24px;
    width: 100%;
    height: 854px;
    background-color: #fff;
    // padding: 23px 10px 0px 33px;
    border: 1px solid #fff;
    .title {
      margin: 23px 0 0 33px;
    }
    .Table1 {
      margin: 16px 23px 0 33px;
    }
    .Table2 {
      margin: 40px 23px 0 33px;
    }
  }
}
</style>
