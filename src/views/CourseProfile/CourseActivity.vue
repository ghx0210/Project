<template>
  <div class="CourseActivity">
    <div class="toppart">
      <span>课程概况</span>
    </div>
    <div class="title">
      <span>资源活动统计</span>
    </div>
    <div class="cardbox">
      <div
        class="ActivityCard"
        v-for="item in CardData.slice(
          (currentPages - 1) * pageSize,
          currentPages * pageSize
        )"
        :key="item.id"
      >
        <div class="Theme">
          <span>{{ item.name }}</span>
          <svg-icon icon-file-name="CouAct_more"></svg-icon>
        </div>
        <div class="carddata">
          <div class="LeftPart">
            <div class="topdata">
              <div class="resources_num">资源数:{{ item.resource.counts }}</div>
              <div class="resources">
                <svg-icon icon-file-name="CouAct_start"></svg-icon>
                <div class="resourcesdata">
                  <span class="file_num"
                    >文件数:{{ item.resource.resource }}</span
                  >
                  <span class="page_num">网页数:{{ item.resource.page }}</span>
                </div>
              </div>
            </div>
            <div class="bottomdata">
              <div class="task_all">作业总数:{{ item.assign.counts }}</div>
              <div class="tast_all">测验总数:{{ item.quiz.counts }}</div>
            </div>
          </div>
          <div class="RightPart">
            <div class="talk_all">
              <svg-icon icon-file-name="CouAct_talk"></svg-icon>
              <span>讨论总数:{{ item.forum.counts }}</span>
            </div>
            <div class="talk_all">
              <svg-icon icon-file-name="CouAct_visit"></svg-icon>
              <span>访问量:{{ item.forum.counts }}</span>
            </div>
            <div class="talk_all">
              <svg-icon icon-file-name="CouAct_other"></svg-icon>
              <span>其他:{{ item.other }}</span>
            </div>
            <div class="talk_all">
              <svg-icon icon-file-name="CouAct_download"></svg-icon>
              <span>hvp:{{ item.hvp.counts }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="page-change">
        <el-pagination
          background
          layout="sizes, prev, pager, next, jumper"
          :total="40"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <div class="BottomPart">
      <div class="tabletitle">
        <span>测验资源统计</span>
        <el-button @click="handleAdd">添加</el-button>
      </div>
      <div class="table">
        <el-table
          :data="
            tableData.filter(
              (data) =>
                handleAdd ||
                data.name.toLowerCase().includes(handleAdd.toLowerCase())
            )
          "
          style="width: 100%"
          :header-cell-style="{
            background: '#EFF4FA',
            'text-align': 'center',
            color: '#5F6868',
            height: '50px',
          }"
          :row-style="{ height: '80px' }"
        >
          <el-table-column label="主题" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.editing"
                v-model="scope.row.name"
                placeholder="请输入内容"
              ></el-input>
              <span v-else>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="测验名称" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.editing"
                v-model="scope.row.name1"
                placeholder="请输入内容"
              ></el-input>
              <span v-else>{{ scope.row.name1 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="测验人数  " align="center">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.editing"
                v-model="scope.row.test_num"
                placeholder="请输入内容"
              ></el-input>
              <span v-else>{{ scope.row.test_num }}</span>
            </template>
          </el-table-column>
          <el-table-column label="学生人数" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.editing"
                v-model="scope.row.stu_num"
                placeholder="请输入内容"
              ></el-input>
              <span v-else>{{ scope.row.stu_num }}</span>
            </template>
          </el-table-column>
          <el-table-column label="学生成绩" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.editing"
                v-model="scope.row.stu_mark"
                placeholder="请输入内容"
              ></el-input>
              <span v-else>{{ scope.row.stu_mark }}</span>
            </template>
          </el-table-column>
          <el-table-column label="修改" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                v-if="!scope.row.editing"
                @click="handleEdit(scope.$index, scope.row)"
              >
                <svg-icon icon-file-name="CouAct_Vector"></svg-icon>
              </el-button>
              <el-button
                size="small"
                v-if="scope.row.editing"
                @click="handleSave(scope.$index, scope.row)"
                >保存</el-button
              >
              <el-button
                type="text"
                size="small"
                v-if="scope.row.editing"
                @click="handleCancel(scope.$index, scope.row)"
                >取消</el-button
              >
              <el-button
                size="mini"
                v-if="!scope.row.editing"
                @click="handleDelete(scope.$index, scope.row)"
              >
                <svg-icon icon-file-name="CouAct_del"></svg-icon>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getActivityAnalysis } from "@/apis/course";
export default {
  mounted() {
    this.getResourceData();
  },
  methods: {
    async getResourceData() {
      let result = await getActivityAnalysis(this.$route.query.id);

      result.resource_statistics.forEach((item, index) => {
        this.CardData.push(item.item);
        this.CardData[index].name = item.name;
      });
      // result.assign_quiz_statistics.forEach((item, index) => {
      //   this.tableData.push(item.item);
      //   this.tableData[index].name = item.name;
      // });

      this.tableData = result.assign_quiz_statistics;
    },

    handleAdd() {
      let row = {
        name: "",
        name1: "",
        test_num: "",
        stu_num: "",
        stu_mark: "",
      };
      this.tableData.push(row);
    },

    handleEdit($index) {
      console.log($index);
      this.$set(this.tableData[$index], "editing", true);
    },
    // 条目保存按钮
    handleSave($index) {
      this.$set(this.tableData[$index], "editing", false);
    },
    // 条目取消按钮
    handleCancel($index) {
      this.$set(this.tableData[$index], "editing", false);
    },

    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPages = val;
    },
  },
  data() {
    return {
      currentPages: 1,
      pageSize: 3,
      CardData: [],
      tableData: [],
    };
  },
};
</script>

<style scoped lang="scss">
.page-change {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.CourseActivity {
  display: flex;
  flex-direction: column;
  .toppart {
    padding: 5px;
    border-left: 5px solid #386fff;
    font-size: 16px;
    color: #262626;
    margin-bottom: 26px;
  }
  .title {
    width: 1120px;
    height: 62px;
    background-color: #ffffff;
    font-size: 18px;
    border-radius: 10px;
    color: #191635;
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    span {
      margin-left: 10px;
      font-weight: bold;
    }
  }
  .cardbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .ActivityCard {
      width: 282px;
      height: 276px;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      .Theme {
        display: flex;
        justify-content: space-between;
        color: #182524;
        font-size: 20px;
        span {
          font-weight: bold;
        }
        .svg-icon {
          font-size: 19px;
        }
      }
      .carddata {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        margin-top: 18px;
        .LeftPart {
          display: flex;
          flex-direction: column;
          .topdata {
            display: flex;
            flex-direction: column;

            .resources_num {
              color: #6b7373;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 18px;
            }
            .resources {
              display: flex;
              align-items: center;
              .svg-icon {
                font-size: 20px;
              }
              .resourcesdata {
                display: flex;
                flex-direction: column;
                font-size: 12px;
                color: #6b7373;
                margin-left: 10px;
                .page_num {
                  margin-top: 5px;
                }
              }
            }
          }
          .bottomdata {
            margin-top: 60px;
            display: flex;
            flex-direction: column;
            color: #6b7373;
            font-size: 15px;
            letter-spacing: 4px;
            .tast_all {
              margin-top: 20px;
            }
          }
        }
        .RightPart {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #6b7373;
          font-size: 12px;
          .talk_all {
            margin-top: 15px;
            .svg-icon {
              font-size: 20px;
              margin: 0 8px 0 18px;
            }
          }
        }
      }
    }
  }
  .BottomPart {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 14px;
    padding: 40px 30px;
    .tabletitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #191635;
        font-size: 18px;
        font-weight: bold;
      }
      .el-button {
        width: 156px;
        height: 48px;
        background: #8146ff;
        color: #ffffff;
      }
    }
    .table {
      margin-top: 26px;
      .el-button {
        .svg-icon {
          font-size: 19px;
        }
      }
    }
  }
}
</style>
