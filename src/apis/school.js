import request from "@/utils/request";
// 获取学院列表数据
export function getMtuSchool() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_college_list",
      pagesize: 64,
      role: 1,
      user: 480,
    },
  });
}
// 获取学院详情数据
export function getSchoolDetails(catid) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      catid,
      wsfunction: "block_data_screen_college_detail",
      pagesize: 12,
      role: 1,
      user: 480,
    },
  });
}
