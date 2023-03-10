// 平台统计
import request from "@/utils/request";

// 获取访问分析表格数据
export function getAccessTable(start_time, end_time) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      start_time,
      end_time,
      wsfunction: "block_data_screen_access_table",
    },
  });
}
export function getSchoolTable() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_get_college",
    },
  });
}
export function getVisitTable(catid) {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      catid,
      wsfunction: "block_data_screen_academic_statistics",
    },
  });
}
