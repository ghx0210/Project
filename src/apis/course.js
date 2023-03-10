// 平台统计
import request from "@/utils/request";

// 获取平台统计数据
export function getMtuCourse() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      role: 1,
      user: "480",
      wsfunction: "block_data_screen_get_semester",
    },
  });
}
// 获取平台统计数据
export function getcourseOverview() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      pagesize: "1000",
      wsfunction: "block_data_screen_attribute_course",
    },
  });
}
//获取课程基本情况
export function getCourseBasic(id) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      id,
      wsfunction: "block_data_screen_course_detail",
    },
  });
}
//教学概况
export function getTeachView(id) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      id,
      wsfunction: "block_data_screen_course_teachinfo",
    },
  });
}
//获取课程学生列表
export function getStudentList(course) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      course,
      role: 5,
      wsfunction: "block_data_screen_personal_analysis",
    },
  });
}
//获取课程学生详情数据
export function getStudentDetail(course, id) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      course,
      id,
      role: 5,
      wsfunction: "block_data_screen_personal_detail",
    },
  });
}
//获取课程活动分析列表
export function getActivityAnalysis(id) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      id,
      wsfunction: "block_data_screen_activity_analysis",
    },
  });
}
