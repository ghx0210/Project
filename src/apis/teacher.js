// 平台统计
import request from "@/utils/request";

// 获取教师列表数据
export function getMtuTeacher() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_teacher_list",
      pagesize: 64,
      role: 1,
      user: 480,
    },
  });
}
// 获取教师详情数据
export function getSetClass() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_teacher_detail",
    },
  });
}

// 获取下拉框选择学期
export function getTermData(catid) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      catid,
      wsfunction: "block_data_screen_academic_statistics",
    },
  });
}
// 获取下拉框选择学院
export function getCollegeData() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_get_college",
    },
  });
}
// 获取college_detail
export function getCollegeDetail() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_college_detail ",
      catid: 12,
    },
  });
}
