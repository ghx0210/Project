// 平台统计
import request from "@/utils/request";

// 获取平台统计数据
export function getPlatformOverview() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_platform_overview",
    },
  });
}
// 获取平台统计扇形数据
export function getSectorTable() {
  return request({
    url: "/webservice/rest/server.php",
    method: "post",
    data: {
      wsfunction: "block_data_screen_academic_statistics",
    },
  });
}
