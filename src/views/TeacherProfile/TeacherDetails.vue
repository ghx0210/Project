<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="outside">
    <!-- <MainHeader title="教师详情" :a="a" /> -->
    <!-- 设置50px外边距 -->
    <div class="contain">
      <div class="upper_part">
        <div class="Left_head_portrait_box">
          <div class="Left_inner">
            <div class="Left_detailed_avatar">
              <img :src="AcceptPicture" alt="" />
            </div>
            <div class="Left_detailed_name">
              <span>{{ $route.query.name.substr(0, 8) }}</span>
            </div>
            <div class="Left_detailed_college">
              <span>{{ $route.query.dept.substr(0, 6) }}</span>
            </div>
            <div class="Left_detailed_id">
              <span>202361020101{{ $route.query.id }}</span>
            </div>
          </div>
        </div>
        <div class="right_TopIconIntroduction">
          <TopIconIntroduction
            class="right-TopIconIntroduction-container"
            :TeacherTopList="TeacherTopList"
          />
        </div>
      </div>
      <div class="down_part">
        <div class="down_part_first">
          <div class="Offering_courses"><span>开设课程</span></div>
          <div class="View_course">
            <router-link
              :to="{
                path: '/CourseSurvey',
              }"
            >
              <p>查看更多课程</p>
            </router-link>
          </div>
        </div>
        <div>
          <ul class="down_part_second">
            <li><a href="#">全部</a></li>
            <li><a href="#">未开始</a></li>
            <li><a href="#">进行中</a></li>
            <li><a href="#">已结束</a></li>
          </ul>
        </div>
        <div class="down_part_third">
          <!-- 通过遍历展示卡片数据 -->
          <div
            class="Course_introduction_card"
            v-for="c in SetClassList.slice(
              (currentPages - 1) * pageSize,
              currentPages * pageSize
            )"
            :key="c.id"
          >
            <div class="classItem">
              <div class="coursePicture">
                <router-link
                  :to="{
                    path: '/CourseMatter',
                    query: {
                      id: c.course_id,
                    },
                  }"
                  ><img :src="c.img" alt="课程图片"
                /></router-link>
              </div>
              <div class="itemText">
                <p>
                  <a href="#">{{ c.fullname }}</a>
                </p>
                <p>{{ $route.query.dept }}</p>
                <p>
                  <el-progress :percentage="66" :format="format"></el-progress>
                </p>
                <p>2022-12-03结束</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="page-change">
            <el-pagination
              background
              layout="sizes, prev, pager, next, jumper"
              :total="40"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
// import MainHeader from "@/components/MainHeader.vue";
import TopIconIntroduction from "@/components/TopIconIntroduction.vue";
import { getTermData } from "@/apis/teacher";

export default {
  name: "TeacherDetails",
  data() {
    return {
      TeacherTopList: [
        { id: "001", title: "发帖数", num: 94, url: "TII-8" },
        { id: "002", title: "回帖数", num: 94, url: "TII-8" },
        { id: "003", title: "平均教学时长", num: 94, url: "JSXQ-1" },
        {
          id: "004",
          title: "开设教程数",
          num: 94,
          url: "JSXQ-2",
          key: "course_num",
        },
        {
          id: "005",
          title: "平均访问次数",
          num: 94,
          url: "JSXQ-3",
          key: "access_num",
        },
        {
          id: "006",
          title: "添加作业数",
          num: 94,
          url: "TII-7",
          key: "quizs_num",
        },
        { id: "007", title: "批阅作业数", num: 94, url: "TII-7" },
        {
          id: "008",
          title: "添加活动数",
          num: 94,
          url: "TII-5",
          key: "activity_num",
        },
        {
          id: "009",
          title: "添加资源数",
          num: 94,
          url: "TII-6",
          key: "resource_num",
        },
        {
          id: "010",
          title: "添加测验数",
          num: 94,
          url: "TII-4",
          key: "quizs_num",
        },
      ],
      AcceptPicture: "",
      SetClassList: [],
      currentPages: 1,
      pageSize: 5,
    };
  },
  props: ["a"],
  components: {
    // MainHeader,
    TopIconIntroduction,
  },
  mounted() {
    this.getSetClass();
    this.AcceptPicture = this.$route.query.url;
    console.log("Accept Picture", this.AcceptPicture);
    this.getTermData();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPages = val;
      console.log("收到的val为", val);
    },
    format(percentage) {
      return percentage === 100 ? "√" : `${percentage}%`;
    },
    getSetClass() {
      this.$axios({
        url: "https://www.mtu.plus/webservice/rest/server.php",
        method: "post",
        params: {
          wstoken: "9e3974d26337677fab8ecfb26716a3b4",
          wsfunction: "block_data_screen_teacher_detail",
          moodlewsrestformat: "json",
          id: this.$route.query.id,
          pagesize: 12,
        },
      }).then(
        (response) => {
          console.log("请求成功了,getSetClass", response.data.course_list);
          this.SetClassList = response.data.course_list;
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    async getTermData() {
      let res = await getTermData();
      console.log("res", res);
      this.TeacherTopList.forEach((item, index, self) => {
        self[index].num = res.college_data[item.key] || 0;
      });
      console.log("this.TeacherTopList", this.TeacherTopList);
    },
  },
};
</script>

<style scoped lang="scss">
.outside {
  background-color: #f9f9f9;
  .contain {
    .upper_part {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
      .Left_head_portrait_box {
        width: 340px;
        height: 500px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        border-radius: 20px;
        .Left_inner {
          width: 160px;
          height: 300px;
          display: flex;
          /* background-color: #bfa; */
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
          .Left_detailed_avatar {
            img {
              width: 160px;
              height: 160px;
              border-radius: 50%;
              background-color: #c4c4c4;
            }
          }
          .Left_detailed_name {
            font-size: 18px;
            color: #3e4954;
          }
          .Left_detailed_college {
            width: 98px;
            height: 34px;
            background-color: #0095ff;
            text-align: center;
            line-height: 34px;
            border-radius: 6px;
          }
          .Left_detailed_id {
            font-size: 16px;
            color: #3d3d3d;
          }
        }
      }
      .right_TopIconIntroduction {
        /* display: flex; */
        /* flex-wrap: wrap; */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1098px;
        height: 496px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        .right-TopIconIntroduction-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 50px 90px;
        }
      }
    }
    .down_part {
      /* width: 1476px; */
      height: 660px;
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;
      .down_part_first {
        margin: 40px 36px 46px 36px;
        display: flex;
        justify-content: space-between;
        .Offering_courses {
          font-family: MicrosoftYaHei;
          font-size: 24px;
          line-height: 58px;
          color: #3d3d3d;
        }
        .View_course {
          width: 184px;
          height: 58px;
          border-radius: 20px;
          overflow: hidden;
          background: #0095ff;
          a {
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 20px;
            line-height: 58px;
            letter-spacing: 0em;
            text-align: center;
            opacity: 1;
            color: #f8f8f8;
          }
        }
      }
      .down_part_second {
        display: flex;
        justify-content: flex-start;
        margin: 0px 36px;
        margin-bottom: 30px;
        li {
          width: 80px;
          height: 30px;
          margin-right: 32px;
          border-radius: 8px;
          background: #eff4fa;
          text-align: center;
          /* background: #0095FF; */
          a {
            font-family: MicrosoftYaHei;
            font-size: 16px;
            line-height: 30px;
            color: #3d3d3d;
          }
        }
      }
      .down_part_third {
        display: flex;
        margin: 0px 36px;
        flex-wrap: wrap;
        .Course_introduction_card:nth-child(4) {
          margin-right: 30px;
        }
        .Course_introduction_card:nth-child(5) {
          margin: 0px;
        }
        .Course_introduction_card {
          width: 251px;
          height: 358px;
          margin-right: 36px;
          box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.1);
          .classItem {
            .coursePicture {
              img {
                width: 249px;
                height: 176px;
                border-radius: 8px 8px 0px 0px;
              }
            }
            .itemText {
              p {
                font-family: SourceHanSerifCN-ExtraLight;
                font-size: 14px;
                font-weight: 250;
                line-height: 18px;
                letter-spacing: 0px;
                color: #3d3d3d;
                margin: 16px 20px;
              }
              p:nth-child(3) {
                margin: 28px 20px 24px 20px;
              }
              p:nth-child(4) {
                font-size: 12px;
              }
            }
          }
        }
      }
      .bottom {
        .page-change {
          display: flex;
          justify-content: flex-end;
          margin: 36px 50px 50px 50px;
        }
      }
    }
  }
}
</style>
