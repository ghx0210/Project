<template>
  <div class="H-contain">
    <div class="header-main">
      <div class="header-main-one">
        <div class="main-head">
          <span class="head1"><svg-icon icon-file-name="Mother-H1" /></span>
          <span class="titlename" v-show="$route.meta.judge != true"
            >{{ $route.meta.title }}
          </span>
          <div class="breadcrumb">
            <!-- 教师面包屑 -->
            <router-link
              class="titlename"
              v-show="$route.meta.c == 0"
              :to="{
                path: '/teacherProfile',
              }"
            >
              教师概况
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 1"
              :to="{
                path: '/allTeacher',
              }"
            >
              >全部教师
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.b == 2"
              :to="{
                path: '/teacherDetails',
              }"
            >
              >教师详情
            </router-link>
            <!-- 学生面包屑 -->
            <router-link
              class="titlename"
              v-show="$route.meta.c == 1"
              :to="{
                path: '/studentProfile',
              }"
            >
              学生概况
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 2"
              :to="{
                path: '/allStudent',
              }"
            >
              >全部学生
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.b == 3"
              :to="{
                path: '/studentDetails',
              }"
            >
              >学生详情
            </router-link>
            <!-- 学院面包屑 -->
            <router-link
              class="titlename"
              v-show="$route.meta.c == 2"
              :to="{
                path: '/schoolProfile',
              }"
            >
              学院概况
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 3"
              :to="{
                path: '/allSchool',
              }"
            >
              >全部学院
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.b == 4"
              :to="{
                path: '/schoolDetails',
              }"
            >
              >学院详情
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.c == 3"
              :to="{
                path: '/CourseSurvey',
              }"
            >
              课程概况
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 4"
              :to="{
                path: '/CourseMatter',
              }"
            >
              >课程基本情况
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 5"
              :to="{
                path: '/TeachView',
              }"
            >
              >教学概况
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 6"
              :to="{
                path: '/CourseMatter',
              }"
            >
              >活动分析
            </router-link>
            <router-link
              class="titlename"
              v-show="$route.meta.a == 7"
              :to="{
                path: '/StudentCourseDetails',
              }"
            >
              >学生课程详情
            </router-link>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="right-icon">
          <!-- <svg-icon icon-file-name="Mother-H4" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.H-contain {
  background-color: #fff;
  .header-main {
    display: flex;
    height: 120px;
    /* background-color: #bfa; */
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    .header-main-one {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      .main-head {
        display: flex;
        justify-content: space-between;
        .head1 {
          .svg-icon {
            width: 46px;
            height: 46px;
          }
        }
        .titlename {
          font-size: 28px;
          color: #000000;
          line-height: 50px;
          text-decoration: none;
        }
      }
    }

    .main-right {
      display: flex;
      .right-icon {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .svg-icon {
          font-size: 100px;
        }
      }
    }
  }
}

// .head1 .svg-icon {
//   width: 46px;
//   height: 46px;
// }
</style>
