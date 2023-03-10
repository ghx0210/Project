import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/MotherBoadr.vue"),
    meta: { title: "首页" },
    children: [
      {
        path: "/",
        component: () => import("@/views/PlatformSurvey.vue"),
        meta: { title: "平台总况" },
      },
      {
        path: "PlatformSurvey",
        name: "PlatformSurvey",
        component: () => import("@/views/PlatformSurvey.vue"),
        meta: { title: "平台总况" },
      },
      {
        path: "studentprofile",
        name: "studentprofile",
        component: () => import("@/views/StudentProfile/StudentProfile.vue"),
        meta: { title: "学生概况", c: 1, judge: true },
      },
      {
        path: "allStudent",
        name: "allStudent",
        component: () => import("@/views/StudentProfile/AllStudent.vue"),
        meta: { title: "学生概况", c: 1, a: 2, judge: true },
      },
      {
        path: "studentDetails",
        name: "studentDetails",
        component: () => import("@/views/StudentProfile/StudentDetails.vue"),
        meta: { title: "学生概况", c: 1, a: 2, b: 3, judge: true },
      },
      {
        path: "CourseSurvey",
        name: "CourseSurvey",
        component: () => import("@/views/CourseProfile/CourseSurvey.vue"),
        meta: { title: "课程概况", c: 3, judge: true },
      },
      {
        path: "StudentCourseDetails",
        name: "StudentCourseDetails",
        component: () =>
          import("@/views/CourseProfile/StudentCourseDetails.vue"),
        meta: { title: "课程概况", c: 3, a: 7, judge: true },
      },
      {
        path: "CourseMatter",
        component: () => import("@/views/CourseProfile/CourseMatter.vue"),
        meta: { title: "课程概况", c: 3, a: 4, judge: true },
        children: [
          {
            path: "/",
            component: () =>
              import("@/components/CourseProfile/MatterLeft.vue"),
            meta: { title: "课程概况", c: 3, a: 4, judge: true },
          },
          {
            path: "/MatterLeft",
            //基本情况
            name: "MatterLeft",
            component: () =>
              import("@/components/CourseProfile/MatterLeft.vue"),
            meta: { title: "课程概况", c: 3, a: 4, judge: true },
          },
          {
            path: "/TeachView",
            //教学概况
            name: "TeachView",
            component: () => import("@/views/CourseProfile/TeachView.vue"),
            meta: { title: "课程概况", c: 3, a: 5, judge: true },
          },
          {
            path: "/CourseActivity",
            //活动分析
            name: "CourseActivity",
            component: () => import("@/views/CourseProfile/CourseActivity.vue"),
            meta: { title: "课程概况", c: 3, a: 6, judge: true },
          },
        ],
      },
      {
        path: "teacherProfile",
        name: "teacherProfile",
        component: () => import("@/views/TeacherProfile/TeacherProfile.vue"),
        meta: { title: "教师概况", c: 0, judge: true },
      },
      {
        path: "allTeacher",
        name: "allTeacher",
        component: () => import("@/views/TeacherProfile/AllTeacher.vue"),
        meta: { title: "教师概况", a: 1, c: 0, judge: true },
      },
      {
        path: "teacherDetails",
        name: "teacherDetails",
        component: () => import("@/views/TeacherProfile/TeacherDetails.vue"),
        meta: { title: "教师概况", a: 1, b: 2, c: 0, judge: true },
      },
      {
        path: "schoolprofile",
        name: "schoolprofile",
        component: () => import("@/views/SchoolProfile/SchoolProfile.vue"),
        meta: { title: "学院概况", c: 2, judge: true },
      },
      {
        path: "allSchool",
        name: "allSchool",
        component: () => import("@/views/SchoolProfile/AllSchool.vue"),
        meta: { title: "学院概况", c: 2, a: 3, judge: true },
      },
      {
        path: "schoolDetails",
        name: "schoolDetails",
        component: () => import("@/views/SchoolProfile/SchoolDetails.vue"),
        meta: { title: "学院概况", c: 2, a: 3, b: 4, judge: true },
      },
      {
        path: "VisitAnalysis",
        name: "VisitAnalysis",
        component: () => import("@/views/VisitAnalysis.vue"),
        meta: { title: "访问分析" },
      },
      {
        path: "ActivityAnalysis",
        component: () => import("@/views/ActivityAnalysis.vue"),
        meta: { title: "活跃分析" },
        children: [
          {
            path: "/",
            component: () => import("@/views/ActiveAnalysis/CourseActive.vue"),
            meta: { title: "活跃分析" },
          },
          {
            path: "/CourseActive",
            name: "CourseActive",
            component: () => import("@/views/ActiveAnalysis/CourseActive.vue"),
            meta: { title: "活跃分析" },
          },
          {
            path: "/TeacherActive",
            name: "TeacherActive",
            component: () => import("@/views/ActiveAnalysis/TeacherActive.vue"),
            meta: { title: "活跃分析" },
          },
          {
            path: "/StudentActive",
            name: "StudentActive",
            component: () => import("@/views/ActiveAnalysis/StudentActive.vue"),
            meta: { title: "活跃分析" },
          },
        ],
      },
    ],
  },
];

// 防止路由重复点击报错
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
  base: "/four",
});

export default router;
