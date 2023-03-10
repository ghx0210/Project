import request from "@/utils/request";

// 获取教师列表数据
export function getMtuStudent() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_teacher_list",
      pagesize: 64,
      role: 2,
      user: 480,
    },
  });
}
