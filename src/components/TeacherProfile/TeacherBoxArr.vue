<template>
  <div>
    <div class="bottom-big">
      <div
        class="news-box-teacher"
        v-for="t in filmtu.slice(
          (currentPages - 1) * pageSize,
          currentPages * pageSize
        )"
        :key="t.teacher_id"
      >
        <div class="box-upper">
          <router-link
            :to="{
              path: '/TeacherDetails',
              query: {
                id: t.teacher_id,
                name: t.name,
                url: t.url,
                dept: t.dept,
              },
            }"
          >
            <img :src="t.url" alt="" />
          </router-link>
          <div class="name">
            <span>{{ t.name }}</span>
          </div>
          <div class="college">
            <span>{{ t.dept.substr(0, 10) }}</span>
          </div>
        </div>
        <div class="box-down-teacher">
          <div class="offering-courses">
            <svg-icon icon-file-name="KSKC" />
            <p>开设教程数</p>
            <p>{{ t.course_num }}</p>
          </div>
          <div class="offering-courses Average-access">
            <svg-icon icon-file-name="PJFW" />
            <p>平均访问数</p>
            <p>{{ t.student_num }}</p>
          </div>
          <div class="offering-courses">
            <svg-icon icon-file-name="ZYHD" />
            <p>资源活动数</p>
            <p>{{ t.res_avt_num }}</p>
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
  name: "TeacherBoxArr",
  props: ["inputschool", "inputname"],
  data() {
    return {
      currentPages: 1,
      pageSize: 15,
      KeyTeacherName: "",
      TeacherCards: "",
      mtu: [],
      // 2是代表全部教师
      num: 2,
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
    getmtu() {
      this.$bus.$on("getmtu", (mtu) => {
        console.log("我是List组件,收到测试数据cs:", mtu.teacher_list);
        this.mtu = mtu.teacher_list;
        this.mtu.forEach((item, index, self) => {
          if (self[index].dept == "") {
            self[index].dept = "暂未填写学院";
          }
        });
      });
    },
  },
  mounted() {
    this.getmtu();
  },
  computed: {
    filmtu() {
      return this.mtu.filter((t) => {
        return t.name.indexOf(this.inputname) !== -1;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.bottom-big {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // margin-right: 50px;
  // margin-left: 50px;
  .box-down-teacher {
    margin-top: 24px;
    .offering-courses {
      display: flex;
      .svg-icon {
        width: 14px;
        height: 14px;
        margin-left: 42px;
      }
      p:nth-child(2) {
        margin-left: 8px;
        font-size: 14px;
        font-weight: 100;
        line-height: 14px;
        color: #474747;
      }
      p:nth-child(3) {
        margin-left: 47px;
        font-size: 14px;
        font-weight: 100;
        line-height: 14px;
        color: #3d3d3d;
      }
    }
    .Average-access {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}
.news-box-teacher {
  width: 251px;
  height: 272px;
  border-radius: 20px;
  opacity: 1;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
  margin-top: 36px;
}
// .news-box-school {
//   width: 251px;
//   height: 272px;
//   border-radius: 20px;
//   opacity: 1;
//   background-color: #fff;
//   box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
//   margin-top: 36px;
// }
// .news-box-student {
//   width: 251px;
//   height: 313px;
//   border-radius: 20px;
//   opacity: 1;
//   background-color: #fff;
//   box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
//   margin-top: 36px;
// }
.news-box:hover {
  box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.6);
}
.box-upper {
  text-align: center;
}
.box-upper img {
  margin: 16px 0px 24px 0px;
  width: 71px;
  height: 71px;
  opacity: 1;
  border-radius: 12px;
}
.box-upper img:hover {
  box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.2);
}
.name {
  opacity: 1;
  font-family: Poppins-Medium;
  font-weight: 100;
  font-size: 20px;
  color: #000000;
}
.college {
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  margin-top: 12px;
  /* margin-bottom: 24px; */
  color: #f93a0b;
}

.page-change {
  display: flex;
  justify-content: flex-end;
  margin: 64px 0px 50px 50px;
}

@media screen and (max-width: 1180px) {
  .news-box-teacher {
    width: 281px;
    height: 322px;
    border-radius: 20px;
    opacity: 1;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
    margin-top: 36px;
  }
}
</style>
