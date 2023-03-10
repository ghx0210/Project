<template>
  <div class="CourseHeader">
    <div class="search">
      <div class="title">课程概况</div>
      <form class="example" action="/">
        <el-input
          placeholder="搜索课程"
          suffix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
      </form>
    </div>
    <el-row :gutter="12">
      <el-col
        :sm="24"
        :md="8"
        :lg="4"
        v-for="CourseCard in coudata"
        :key="CourseCard.id"
      >
        <el-card onclick="" class="el-card" :body-style="{ padding: '0px' }">
          <div class="coursecard">
            <div class="cardleft">
              <div class="cardtitle1">{{ CourseCard.title }}</div>
              <div class="cardtitle">{{ CourseCard.num }}</div>
            </div>
            <div class="cardright">
              <svg-icon :icon-file-name="CourseCard.url"></svg-icon>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { getPlatformOverview } from "@/apis/platform";
import { getVisitTable } from "@/apis/Visit";
export default {
  data() {
    return {
      search: "",
      coudata: [
        {
          id: 1,
          url: "Course-1",
          num: 320,
          title: "课程总数",
          key: "course_num",
        },
        {
          id: 2,
          url: "course-2",
          num: 209,
          title: "课程活动数",
          key: "activity_num",
        },
        {
          id: 3,
          url: "course-3",
          num: 300,
          title: "课程资源总数",
          key: "resource_num",
        },
        {
          id: 4,
          url: "course-4",
          num: 499,
          title: "课程讨论总数",
          key: "activity_num",
        },
        {
          id: 5,
          url: "course-5",
          num: 66,
          title: "课程总访问量",
          key: "access_num",
        },
        {
          id: 6,
          url: "course-6",
          num: 200,
          title: "课程数据下载数",
          // key: "download_num",
        },
      ],
      coudata1: [],
    };
  },
  mounted() {
    // this.getCouheadData();
    this.getCourheadData();
  },
  methods: {
    // async getCouheadData() {
    //   let result = await getPlatformOverview();
    //   console.log("result", result);
    //   this.coudata.forEach((item, index, self) => {
    //     self[index].num = result.platform[item.key] || 0;
    //   });
    //   console.log("this.coudata", this.coudata);
    // },
    async getCourheadData() {
      let result = await getVisitTable();

      this.coudata.forEach((item, index, self) => {
        self[index].num = result.college_data[item.key] || 0;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.CourseHeader {
  .search {
    display: flex;
    justify-content: space-between;
    width: 1470px;
    .title {
      padding: 5px;
      align-items: center;
      border-left: 5px solid #386fff;
    }
    .example {
      font-family: SourceHanSerifCN-ExtraLight;
      // .input[type="text"] {
      //   padding: 10px;
      //   font-size: 17px;
      //   border: 1px solid #eff4fa;
      //   // float: left;
      //   width: 299px;
      //   height: 42px;
      //   background: #ffffff;
      // }

      // .el-button {
      //   float: right;
      //   width: 20px;
      //   padding: 3px;
      //   background: #ffffff;
      //   color: #d8d8d8;
      //   font-size: 17px;
      //   border: 1px solid grey;
      //   cursor: pointer;
      // }

      // .el-button:hover {
      //   background: #d8d8d8;
      // }

      .example::after {
        content: "";
        clear: both;
        display: table;
      }
    }
  }
  .el-row {
    margin-top: 27.23px;
    .el-card {
      background-color: #ffffff;
      .coursecard {
        display: flex;
        flex-direction: row;
        border-radius: 20px;
        .cardleft {
          display: flex;
          flex-direction: column;
          margin-top: 21px;
          margin-left: 15px;
          margin-bottom: 35px;
          .cardtitle1 {
            opacity: 1;
            font-family: Lato-SemiBold;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.42px;
            color: #849aa9;
          }
          .cardtitle {
            margin-top: 28px;
            opacity: 1;
            font-family: SourceHanSerifCN-Regular;
            font-size: 24px;
            font-weight: normal;
            letter-spacing: 0px;
            color: #555555;
          }
        }
        .cardright {
          margin-top: 31px;
          margin-left: 50px;
          font-size: 32px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
