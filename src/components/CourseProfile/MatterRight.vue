<template>
  <div class="right-part">
    <div class="first-box">
      <div class="title"><span>快捷入口</span></div>
      <div class="quick">
        <div class="quick-1" @click="basic">
          <div class="icon"><svg-icon icon-file-name="matter-9" /></div>
          <div class="text">
            <span>基本情况</span>
          </div>
        </div>

        <div class="quick-2" @click="teach">
          <div class="icon">
            <svg-icon icon-file-name="matter-10" />
          </div>
          <div class="text">
            <span>教学概况</span>
          </div>
        </div>

        <div class="quick-3" @click="active">
          <div class="icon">
            <svg-icon icon-file-name="matter-11" />
          </div>
          <div class="text">
            <span>活动分析</span>
          </div>
        </div>
      </div>
    </div>
    <div class="second-box">
      <div class="top">
        <span class="p">课程学生</span>
        <div class="anniu">
          <el-row>
            <el-button type="primary" size="mini" round @click="allstudent"
              >查看全部学生</el-button
            >
          </el-row>
        </div>
      </div>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
        <li
          v-for="student in count"
          :key="student.id"
          class="infinite-list-item"
          @click="details(student)"
        >
          <el-card class="el-card" :body-style="{ padding: '0px' }">
            <div class="card">
              <div class="svg">
                <svg-icon icon-file-name="matter-12"></svg-icon>
              </div>
              <div class="le">
                <div class="head">
                  <span class="name">{{ student.name }}</span>
                  <span class="college">{{ student.dept }}</span>
                </div>
                <div class="bottom">
                  <span class="number">{{ student.idnumber }}</span>
                </div>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getStudentList } from "@/apis/course";
export default {
  props: ["id", "Matter"],
  data() {
    return {
      load: "",
      count: [
        {
          url: "matter-12",
          name: "XXX",
          num: "202361020102",
          col: "信息技术学院",
        },
      ],
    };
  },
  mounted() {
    this.getStudentData();
  },
  methods: {
    async getStudentData() {
      let result = await getStudentList(this.$route.query.id);
      this.count = result.course_list;
    },
    allstudent() {
      this.$router.push({
        path: "/allStudent",
      });
    },
    basic() {
      this.$router.push({
        path: "/CourseMatter",
        query: {
          id: this.id,
          start_time: this.Matter.start_time,
          end_time: this.Matter.end_time,
        },
      });
    },
    teach() {
      this.$router.push({
        path: "/TeachView",
        query: { id: this.id },
      });
    },
    active() {
      this.$router.push({
        path: "/CourseActivity",
        query: { id: this.id },
      });
    },
    details(student) {
      this.$router.push({
        path: "/StudentCourseDetails",
        query: { course: this.id, id: student.id },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.right-part {
  display: flex;
  flex-direction: column;
  margin-top: 49px;
  margin-left: 21px;
  .first-box {
    display: flex;
    flex-direction: column;
    width: 323px;
    height: 153px;
    background-color: #ffffff;
    .title {
      display: flex;
      margin-left: 20px;
      margin-top: 20px;
      opacity: 1;
      font-family: SourceHanSerifCN-ExtraLight;
      font-size: 16px;
      font-weight: 250;
      line-height: 24px;
      color: #000000;
    }
    .quick {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 20px;
      .quick-1 {
        display: flex;
        flex-direction: column;
        text-align: center;
        .svg-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          opacity: 1;
        }
        .text {
          display: flex;
          margin-top: 4px;
          opacity: 1;
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 12px;
          font-weight: 250;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0px;
        }
      }
      .quick-2 {
        display: flex;
        flex-direction: column;
        text-align: center;
        .svg-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          opacity: 1;
        }
        .text {
          display: flex;
          margin-top: 4px;
          opacity: 1;
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 12px;
          font-weight: 250;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0px;
        }
      }
      .quick-3 {
        display: flex;
        flex-direction: column;
        text-align: center;
        .svg-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          opacity: 1;
        }
        .text {
          display: flex;
          margin-top: 4px;
          opacity: 1;
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 12px;
          font-weight: 250;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0px;
        }
      }
    }
  }
  .second-box {
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    width: 323px;
    height: 905.5px;
    background-color: #ffffff;
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 15px;
      padding-right: 16px;
      .p {
        display: flex;
        margin-top: 18px;
        opacity: 1;
        font-family: SourceHanSerifCN-ExtraLight;
        font-size: 18px;
        font-weight: 250;
        line-height: 21px;
        letter-spacing: 0px;
        color: #3d3d3d;
      }
      .anniu {
        display: flex;
        margin-top: 9px;
        .el-button--primary {
          color: #ffffff;
          background-color: #0095ff;
          border-color: #0095ff;
        }
      }
    }
    .infinite-list {
      display: flex;
      flex-direction: column;
      margin-top: 11px;
      .infinite-list-item {
        display: flex;
        .el-card {
          display: flex;
          width: 100%;
          border-radius: 0px;

          .card {
            display: flex;
            flex-direction: row;
            margin-top: 26px;
            .svg-icon {
              margin-left: 41px;
              width: 36px;
              height: 36px;
            }
            .le {
              display: flex;
              flex-direction: column;
              margin-left: 32px;
              .head {
                display: flex;
                .name {
                  display: flex;
                  margin-left: 9px;
                  opacity: 1;
                  font-family: SourceHanSerifCN-ExtraLight;
                  font-size: 20px;
                  font-weight: 250;
                  line-height: 21px;
                  letter-spacing: 0px;
                  color: #3d3d3d;
                }
                .college {
                  display: flex;
                  opacity: 1;
                  font-family: GenJyuuGothic-ExtraLight;
                  font-size: 12px;
                  font-weight: 100;
                  line-height: 14px;
                  letter-spacing: 0em;
                  color: #0095ff;
                }
              }

              .number {
                display: flex;
                margin-top: 12px;
                margin-bottom: 16px;
                height: 21px;
                opacity: 1;
                font-family: SourceHanSerifCN-ExtraLight;
                font-size: 14px;
                font-weight: 250;
                line-height: 21px;
                letter-spacing: 0px;
                color: #3d3d3d;
              }
            }
          }
        }
        .el-card.is-always-shadow,
        .el-card.is-hover-shadow:focus,
        .el-card.is-hover-shadow:hover {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
