<template>
  <div class="Teachingoverview">
    <div class="title"><span class="pa">教学概况</span></div>
    <div class="box"><span class="p">课程完成情况</span></div>
    <div class="table-1">
      <div class="box1">
        <el-button type="primary" icon="el-icon-plus">新建</el-button>
        <el-button type="table" class="import">批量导入</el-button>
        <form class="example" action="/">
          <el-input placeholder="搜索章节" suffix-icon="el-icon-search">
          </el-input>
        </form>
        <el-button class="download" icon="el-icon-download">下载</el-button>
      </div>
      <div class="box2">
        <div class="num">
          <span>第一章</span>
        </div>
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 100%"
          max-height="300"
          :header-cell-style="{
            height: '40px',
            padding: '0px',
            background: '#EFF4FA',
            fontSize: '14px',
            fontWeight: '250',
          }"
          :row-style="{ height: '41px', textAlign: 'center' }"
        >
          <el-table-column prop="num" label="章节编码" width="80">
          </el-table-column>
          <el-table-column prop="name" label="章节名称"> </el-table-column>
          <el-table-column prop="genre" label="内容体裁"> </el-table-column>
          <el-table-column prop="date" label="创建时间"> </el-table-column>
          <el-table-column prop="completion" label="学生完成情况">
          </el-table-column>
          <el-table-column prop="access" label="浏览次数"> </el-table-column>
        </el-table>
        <div class="num1">
          <span>第二章</span>
        </div>
        <el-table
          :data="
            tableData1.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 100%"
          max-height="300"
          :header-cell-style="{
            height: '40px',
            padding: '0px',
            background: '#EFF4FA',
            fontSize: '14px',
            fontWeight: '250',
          }"
          :row-style="{ height: '41px', textAlign: 'center' }"
        >
          <el-table-column prop="num" label="章节编码" width="80">
          </el-table-column>
          <el-table-column prop="name" label="章节名称"> </el-table-column>
          <el-table-column prop="genre" label="内容体裁"> </el-table-column>
          <el-table-column prop="date" label="创建时间"> </el-table-column>
          <el-table-column prop="completion" label="学生完成情况">
          </el-table-column>
          <el-table-column prop="access" label="浏览次数"> </el-table-column>
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
  </div>
</template>

<script>
import { getTeachView } from "@/apis/course";
export default {
  data() {
    return {
      tableData: [],
      tableData1: [
        {
          num: 1.1,
          name: "章节",
          genre: "图文",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.2,
          name: "资料",
          genre: "模板短视频",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.3,
          name: "章节",
          genre: "PPT",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.4,
          name: "资料",
          genre: "图文",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.5,
          name: "章节",
          genre: "图文",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.6,
          name: "资料",
          genre: "图文",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.7,
          name: "资料",
          genre: "图文",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
        {
          num: 1.8,
          name: "第一章测试",
          genre: "试卷",
          date: "2021.02.28 10:30",
          completion: 12,
          frequency: 44,
        },
      ],
      currentPage: 1, //当前页 刷新后默认显示第一页
      pageSize: 8, //每一页显示的数据量 此处每页显示6条数据
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage; //每次点击分页按钮，当前页发生变化
      // console.log(this.currentPage);
    },
    async getchapterData() {
      let result = await getTeachView(this.$route.query.id);
      this.tableData = result.section[0].item;
      this.tableData1 = result.section[1].item;
    },
  },
  mounted() {
    this.getchapterData();
  },
};
</script>

<style scoped lang="scss">
.Teachingoverview {
  display: flex;
  flex-direction: column;
  .title {
    padding: 5px;
    display: flex;
    align-items: center;
    border-left: 5px solid #386fff;
    .pa {
      display: flex;
      height: 22px;
      opacity: 1;
      font-family: SourceHanSerifCN-ExtraLight;
      font-size: 16px;
      font-weight: 250;
      line-height: 22px;
      letter-spacing: 0px;
      color: #262626;
    }
  }
  .box {
    display: flex;
    margin-top: 17px;
    width: 1163px;
    height: 57px;
    border-radius: 10px;
    background: #ffffff;
    .p {
      display: flex;
      margin-left: 12px;
      margin-top: 14px;
      opacity: 1;
      font-family: Inter-Medium;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.07px;
      color: #3d3d3d;
    }
  }
  .table-1 {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    width: 1163px;
    height: 1020px;
    background-color: #ffffff;
    .box1 {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      margin-left: 20px;
      .el-button {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 88px;
      }
      form.example {
        font-family: SourceHanSerifCN-ExtraLight;
        .input[type="text"] {
          padding: 9px;
          font-size: 14px;
          border: 1px solid #eff4fa;
          background: #ffffff;
        }
        ::v-deep .el-input__inner {
          width: 274px;
          height: 30px;
        }
        ::v-deep .el-input__icon {
          line-height: 15px !important;
        }
        form.example::after {
          content: "";
          clear: both;
          display: table;
        }
      }
      .import {
        margin-left: 10px;
      }
      .example {
        margin-left: 550px;
      }
      .download {
        margin-left: 38px;
      }
    }
    .box2 {
      display: flex;
      flex-direction: column;
      .num {
        display: flex;
        margin-top: 23px;
        margin-left: 39px;
        height: 41px;
        width: 1141px;
        opacity: 1;
        font-family: SourceHanSerifCN-ExtraLight;
        font-size: 14px;
        font-weight: 250;
        line-height: 22px;
        letter-spacing: -0.07px;
        color: #1d2129;
      }
      .el-table {
        // display: flex;
        // flex-direction: column;
        padding-left: 23px;
        padding-right: 12px;
      }
      .num1 {
        display: flex;
        margin-top: 27px;
        margin-left: 39px;
        height: 41px;
        width: 1141px;
        opacity: 1;
        font-family: SourceHanSerifCN-ExtraLight;
        font-size: 14px;
        font-weight: 250;
        line-height: 22px;
        letter-spacing: -0.07px;
        color: #1d2129;
      }

      .block {
        display: flex;
        justify-content: flex-end;
        align-items: baseline;
        margin-top: 31px;
        margin-right: 24px;
        margin-bottom: 27px;
      }
    }
  }
}
</style>
