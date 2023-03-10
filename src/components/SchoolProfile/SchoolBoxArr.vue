<template>
  <div>
    <div v-show="num == 1" class="bottom-big">
      <div
        class="news-box-student"
        v-for="s in filSchoolCards.slice(
          (currentPages - 1) * pageSize,
          currentPages * pageSize
        )"
        :key="s.id"
      >
        <div class="box-upper">
          <router-link
            :to="{
              path: '/SchoolDetails',
              query: {
                id: s.id,
                name: s.name,
                school: s.school,
                url: s.url,
              },
            }"
          >
            <img :src="url" alt="" />
          </router-link>
          <div class="name">
            <span>{{ s.name.substr(0, 10) }}</span>
          </div>
        </div>
        <div class="box-down-teacher">
          <div class="offering-courses">
            <div class="upper">
              <svg-icon icon-file-name="Mother-L3" />
              <p>学生数</p>
            </div>
            <div class="down">
              <p>{{ s.student_num }}</p>
            </div>
          </div>
          <div class="offering-courses">
            <div class="upper">
              <svg-icon icon-file-name="Mother-L4" />
              <p>教师数</p>
            </div>
            <div class="down">
              <p>{{ s.teacher_num }}</p>
            </div>
          </div>
          <div class="offering-courses">
            <div class="upper">
              <svg-icon icon-file-name="SB2" />
              <p>课程数</p>
            </div>
            <div class="down">
              <p>{{ s.course_num }}</p>
            </div>
          </div>
          <div class="offering-courses">
            <div class="upper">
              <svg-icon icon-file-name="FW-1" />
              <p>访问数</p>
            </div>
            <div class="down"><p>123</p></div>
          </div>
        </div>
      </div>
    </div>

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
</template>

<script>
export default {
  name: "SchoolBoxArr",
  props: ["inputschool", "inputname"],
  data() {
    return {
      currentPages: 1,
      pageSize: 15,
      KeyTeacherName: "",
      url: require("@/assets/img/GDQY.webp"),
      SchoolCards: [],
      // 1是代表全部学生
      num: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPages = val;
      console.log("收到的val为", val);
    },
    getMtuSchool() {
      this.$bus.$on("getMtuSchool", (MtuSchool) => {
        console.log("我是List组件,收到测试数据cs:", MtuSchool);
        this.SchoolCards = MtuSchool.college_list;
      });
    },
  },
  computed: {
    filSchoolCards() {
      return this.SchoolCards.filter((s) => {
        return s.name.indexOf(this.inputname) !== -1;
      });
    },
  },
  beforeMount() {
    // this.SchoolCards = this.$store.state.TBA;
  },
  mounted() {
    this.getMtuSchool();
  },
};
</script>

<style scoped lang="scss">
.bottom-big {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;

  // .news-box-student:nth-child(5),
  // .news-box-student:nth-child(10) {
  //   // background-color: #bfa;
  //   margin-right: 0px;
  // }
  .box-down-teacher {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .offering-courses {
      width: 100px;
      margin: 4px 10px;
      .upper {
        display: flex;
        margin-left: 8px;
        .svg-icon {
          width: 14px;
          height: 14px;
        }
        p {
          margin-left: 8px;
          font-size: 14px;
          font-weight: 100;
          line-height: 14px;
          color: #474747;
        }
      }
      .down {
        p {
          margin-left: 28px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 100;
          line-height: 14px;
          color: #3d3d3d;
        }
      }
    }
  }
  .news-box-student:nth-child(1),
  .news-box-student:nth-child(6),
  .news-box-student:nth-child(11) {
    // background-color: #bfa;
    margin-left: 0px;
  }
  .news-box-student:nth-child(5),
  .news-box-student:nth-child(10) {
    // background-color: #bfa;
    margin-right: 0px;
  }
  .news-box-student {
    width: 251px;
    height: 280px;
    border-radius: 20px;
    opacity: 1;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
    margin-top: 36px;
    margin-right: 27px;
    margin-left: 26px;
    .box-upper {
      text-align: center;
      img {
        margin: 16px 0px 32px 0px;
        width: 71px;
        height: 71px;
        opacity: 1;
        border-radius: 12px;
      }
      img:hover {
        box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.2);
      }
      .name {
        opacity: 1;
        font-family: Poppins-Medium;
        font-weight: 100;
        font-size: 20px;
        color: #000000;
        margin-bottom: 42px;
      }
      .college {
        font-family: Poppins-Regular;
        font-size: 14px;
        font-weight: normal;
        margin-top: 12px;
        /* margin-bottom: 24px; */
        color: #f93a0b;
      }
    }
  }
}
.page-change {
  display: flex;
  justify-content: flex-end;
  margin: 64px 0px 50px 50px;
}
@media screen and (max-width: 1180px) {
  .bottom-big {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-down-teacher {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .offering-courses {
        width: 140px;
        margin: 4px 0px 15px 10px;
        .upper {
          display: flex;
          margin-left: 8px;
          margin-bottom: 15px;
          .svg-icon {
            width: 14px;
            height: 14px;
          }
          p {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 100;
            line-height: 14px;
            color: #474747;
          }
        }
        .down {
          p {
            margin-left: 28px;
            margin-top: 8px;
            font-size: 14px;
            font-weight: 100;
            line-height: 14px;
            color: #3d3d3d;
          }
        }
      }
    }
    .news-box-student:nth-child(1),
    .news-box-student:nth-child(2),
    .news-box-student:nth-child(3),
    .news-box-student:nth-child(4),
    .news-box-student:nth-child(5),
    .news-box-student:nth-child(6),
    .news-box-student:nth-child(7),
    .news-box-student:nth-child(8),
    .news-box-student:nth-child(9),
    .news-box-student:nth-child(10),
    .news-box-student:nth-child(11),
    .news-box-student:nth-child(12) {
      background-color: #ffffff;
      // margin-top: 36px;
      // margin: 0px;
      // background-color: red;
      margin-right: 27px;
      margin-left: 26px;
    }
    .news-box-student {
      width: 300px;
      // width: 251px;
      height: 320px;
      // height: 280px;
      border-radius: 20px;
      opacity: 1;
      background-color: #fff;
      box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
      margin-top: 36px;
      // margin-right: 27px;
      // margin-left: 26px;
      .box-upper {
        text-align: center;
        img {
          margin: 16px 0px 32px 0px;
          width: 71px;
          height: 71px;
          opacity: 1;
          border-radius: 12px;
        }
        img:hover {
          box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.2);
        }
        .name {
          opacity: 1;
          font-family: Poppins-Medium;
          font-weight: 100;
          font-size: 20px;
          color: #000000;
          margin-bottom: 42px;
        }
        .college {
          font-family: Poppins-Regular;
          font-size: 14px;
          font-weight: normal;
          margin-top: 12px;
          /* margin-bottom: 24px; */
          color: #f93a0b;
        }
      }
    }
  }
}
</style>
