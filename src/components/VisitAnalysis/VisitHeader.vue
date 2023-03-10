<template>
  <div class="VisitHeader">
    <div class="DatePicker">
      <div class="title">访问分析</div>
      <div class="datepinpurt">
        <span class="demonstration">时间选择</span>
        <el-date-picker
          v-model="getDate.date"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="getTabledata"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="Table">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{ background: '#EDF1F2' }"
        :row-style="columnStyle"
        :cell-style="columnStyle"
      >
        <el-table-column prop="date" label="时间"></el-table-column>
        <el-table-column prop="pv" label="浏览次数"> </el-table-column>
        <el-table-column prop="uv" label="独立访客"> </el-table-column>
        <el-table-column prop="ip" label="IP"> </el-table-column>
        <el-table-column prop="access_num" label="访问量"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAccessTable } from "@/apis/Visit";
export default {
  data() {
    return {
      getDate: {
        start_time: "",
        end_time: "",
        date: "",
      },
      tableData: [],
    };
  },
  mounted() {
    this.getTabledata();
  },
  methods: {
    async getTabledata() {
      if (this.getDate.date != null) {
        this.getDate.start_time = this.getDate.date[0];
        this.getDate.end_time = this.getDate.date[1];
      } else {
        this.getDate.start_time = "";
        this.getDate.end_time = "";
      }
      let result = await getAccessTable(
        this.getDate.start_time,
        this.getDate.end_time
      );
      let strList = {
        today: "今日",
        yesterday: "昨日",
        top: "历史最高",
        total: "历史累计",
      };
      this.tableData = Object.keys(result).map((key) => {
        return {
          date: strList[key],
          ...result[key],
        };
      });
    },
    columnStyle({ rowIndex, columnIndex }) {
      if (columnIndex == 0 && rowIndex == 0) {
        return "background:#FCEAB7";
      }
      if (columnIndex == 0 && rowIndex == 1) {
        return "background:#A2E6F4";
      }
      if (columnIndex == 0 && rowIndex == 2) {
        return "background:#F5B6B3";
      }
      if (columnIndex == 0 && rowIndex == 3) {
        return "background:#FFA375";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.VisitHeader {
  .DatePicker {
    display: flex;
    justify-content: space-between;
    .title {
      padding: 5px;
      display: flex;
      align-items: center;
      border-left: 5px solid #386fff;
    }
    .datepinpurt {
      .demonstration {
        margin-right: 10px;
      }
      .el-input__inner {
        width: 280px;
      }
    }
  }
  .Table {
    margin-top: 23px;
  }
}
</style>
