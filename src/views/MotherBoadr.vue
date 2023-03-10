<template>
  <el-container class="container">
    <el-aside>
      <div class="aside">
        <div class="logo">
          <el-image :src="require('@/assets/Logo1.png')" class="tu"></el-image>
          <el-image :src="require('@/assets/Logo2.png')" class="tu1"></el-image>
        </div>
        <el-menu
          router
          default-active="this.$route.index"
          class="el-menu-vertical-demo"
        >
          <el-menu-item
            v-for="item in RouteData"
            :key="item.index"
            :index="item.index"
          >
            <svg-icon :icon-file-name="item.url"></svg-icon>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header"><MainHeader></MainHeader></div>
      </el-header>
      <el-main class="main-router" ref="mainRouter">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MainHeader from "@/components/Gonggong/MainHeader.vue";
export default {
  name: "MotherBoadr",
  components: {
    MainHeader,
  },
  updated() {
    this.handleScrollTop();
  },
  methods: {
    handleScrollTop() {
      this.$nextTick(() => {
        this.$refs.mainRouter.$el.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  },
  data() {
    return {
      RouteData: [
        {
          id: 1,
          name: "平台总况",
          index: "/PlatformSurvey",
          url: "Mother-L1",
        },
        {
          id: 2,
          name: "学院概况",
          index: "/schoolprofile",
          url: "Mother-L2",
        },
        {
          id: 3,
          name: "学生概况",
          index: "/studentprofile",
          url: "Mother-L3",
        },
        {
          id: 4,
          name: "教师概况",
          index: "/teacherProfile",
          url: "Mother-L4",
        },
        {
          id: 5,
          name: "课程概况",
          index: "/CourseSurvey",
          url: "Mother-L5",
        },
        {
          id: 6,
          name: "访问分析",
          index: "/VisitAnalysis",
          url: "Mother-L6",
        },
        {
          id: 7,
          name: "活跃分析",
          index: "/ActivityAnalysis",
          url: "Mother-L7",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  .el-aside {
    width: 345px !important;
    overflow-y: hidden;
  }
  .el-header {
    height: 120px !important;
  }
  .el-main {
    padding: 30px 50px;
    background: #f9f9f9;
  }
  .aside {
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      border-bottom: 1px solid #eeeeee;
      .tu {
        width: 48px;
        height: 48px;
        margin: 0 15px;
      }
      .tu1 {
        width: 70px;
        height: 24px;
        margin: 0 15px;
      }
    }
    .el-menu {
      border: 0;
    }
    .el-menu-vertical-demo {
      margin-top: 34px;
      .el-menu-item {
        margin-top: 16px;
        line-height: 60px;
        height: 60px;
        font-size: 18px;
        transition: background-color 0.3s, color 0.3s;
      }
      .el-menu-item.is-active {
        border-right: 5px solid #0095ff;
        border-radius: 2px;
      }
      .svg-icon {
        font-size: 24px;
        margin: 0 23px 0 75px;
      }
    }
  }
}
</style>
