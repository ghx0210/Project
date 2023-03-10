<template>
  <div class="CourseBottom">
    <div class="courselist">
      <div class="title"><span>课程列表</span></div>
      <div class="collage">
        <el-select v-model="value" placeholder="选择学院">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="table">
      <el-table
        style="width: 100%"
        ref="multipleTable"
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        :row-key="getRowKeys"
        :header-cell-style="{
          height: '64px',
          padding: '0px',
          background: '#EFF4FA',
        }"
        :row-style="{ height: '64px' }"
      >
        <el-table-column type="selection" :reserve-selection="true" width="55">
        </el-table-column>
        <el-table-column prop="fullname" label="课程名称"> </el-table-column>
        <el-table-column prop="teachers" label="授课老师" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="tags" label="课程类别"> </el-table-column>
        <el-table-column prop="num" label="参与人数"> </el-table-column>
        <el-table-column prop="start_time" label="开始时间"> </el-table-column>
        <el-table-column prop="end_time" label="结束时间"> </el-table-column>
        <el-table-column prop="visit" label="访问量"> </el-table-column>
        <el-table-column prop="college" label="所属学院"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text">
              查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next, ->"
          :total="tableData.length"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          style="text-align: center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getcourseOverview } from "@/apis/course";
export default {
  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage; //每次点击分页按钮，当前页发生变化
      // console.log(this.currentPage);
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },

    handleClick(row) {
      this.$router.push({
        path: "/CourseMatter",
        query: {
          id: row.course_id,
          start_time: row.start_time,
          end_time: row.end_time,
        },
      });
    },
    handleSelectionChange(list) {
      console.log(list);
      this.checkedList = list;
    },
    getRowKeys(row) {
      return row.orderId;
    },

    async getcourseData() {
      let result = await getcourseOverview();
      this.tableData = result.data;
    },
  },
  mounted() {
    this.getcourseData();
  },
  data() {
    return {
      search: "",
      value: [],
      options: [
        {
          value: "1",
          label: "财贸学院",
        },
        {
          value: "2",
          label: "管理学院",
        },
        {
          value: "3",
          label: "机电技术学院",
        },
        {
          value: "4",
          label: "汽车技术学院",
        },
        {
          value: "5",
          label: "轻化工技术学院",
        },
        {
          value: "6",
          label: "生态环境技术学院",
        },
        {
          value: "7",
          label: "食品与生物技术学院",
        },
        {
          value: "8",
          label: "信息技术学院",
        },
        {
          value: "9",
          label: "艺术设计学院",
        },
        {
          value: "10",
          label: "应用外语学院",
        },
      ],

      //假数据
      tableData: [
        {
          fullname: "计算机应用",
          teachers: "dcl",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "dcl",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "dcl",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Rui",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Rui",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Rui",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Wakey",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Wakey",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Wakey",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
        {
          fullname: "计算机应用",
          teachers: "Wakey",
          tags: "巩固提高",
          num: "57",
          start_time: "2020-07-13",
          end_time: "2021-07-15",
          visit: "200",
          college: "信息技术学院",
        },
      ],
      currentPage: 1, //当前页 刷新后默认显示第一页
      pageSize: 4, //每一页显示的数据量 此处每页显示6条数据
    };
  },
};
</script>

<style scoped lang="scss">
.CourseBottom {
  margin-top: 36px;

  .courselist {
    display: flex;
    justify-content: space-between;
    .title {
      opacity: 1;
      font-family: SourceHanSansCN-Regular;
      font-size: 24px;
      font-weight: normal;
      letter-spacing: 0em;
      color: #3d3d3d;
    }
    .collage {
      border-radius: 20px;
      width: 200px;
      height: 42px;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
      ::v-deep .el-input__inner {
        border-radius: 10px;
        text-align: center;
        height: 42px;
        width: 200px;
      }
    }
  }
  .table {
    width: 1470px;
    // height: 485px;
    margin-top: 16px;
    opacity: 1;
    font-family: SourceHanSerifCN-Bold;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0px;
    color: #8f9bb3;
    .block {
      display: flex;
      justify-content: center;
      height: 62px;
      background: #f9fbfd;
      border-bottom: 1px solid #d8d8d8;
      .el-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1271px;
        // .btn-prev {
        // }
        // .el-pager {
        // }
        // .btn-next {
        // }
      }
    }
  }
}
</style>
