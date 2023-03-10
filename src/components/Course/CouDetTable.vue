<template>
  <div class="CouDetTable">
    <div class="LeftPart" v-for="ChapterData in CardData" :key="ChapterData.id">
      <div class="Statistics">
        <div class="Title">
          <span class="title">第{{ ChapterData.chapter_title }}章</span>
          <div class="video">
            <span>章节视频</span>
            <span class="videonum">{{ ChapterData.video_num }}个</span>
          </div>
        </div>
        <div class="TaskData">
          <div class="TaskOne">
            <div class="Task">
              <span>章节作业数</span>
              <span class="Tasknum">{{ ChapterData.task_num1 }}</span>
            </div>
            <div class="Finish">
              <span>章节作业数</span>
              <span class="Finishnum">{{ ChapterData.finish_num1 }}</span>
            </div>
          </div>
          <div class="TaskTwo">
            <div class="Task">
              <span>章节作业数</span>
              <span class="Tasknum">{{ ChapterData.task_num2 }}</span>
            </div>
            <div class="Finish">
              <span>章节作业数</span>
              <span class="Finishnum">{{ ChapterData.finish_num2 }}</span>
            </div>
          </div>
          <div class="TaskTwo">
            <div class="Task">
              <span>章节作业数</span>
              <span class="Tasknum">{{ ChapterData.task_num3 }}</span>
            </div>
            <div class="Finish">
              <span>章节作业数</span>
              <span class="Finishnum">{{ ChapterData.finish_num3 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Progress">
        <span>已完成章节{{ ChapterData.chapter_num }}个</span>
        <el-progress
          type="circle"
          :percentage="ChapterData.progress_num"
          :width="80"
        ></el-progress>
      </div>
    </div>
    <div class="RightPart">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#EFF4FA', 'text-align': 'center' }"
        :row-style="{ height: '41px' }"
      >
        <el-table-column label="章节编号" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.a }}</span>
          </template>
        </el-table-column>
        <el-table-column label="章节名称" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.b }}</span>
          </template>
        </el-table-column>
        <el-table-column label="内容体裁" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.c }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.d }}</span>
          </template>
        </el-table-column>
        <el-table-column label="完成情况" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.e }}</span>
          </template>
        </el-table-column>
        <el-table-column label="完成次数" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.f }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["CardData", "tableData"],
};
</script>

<style scoped lang="scss">
.CouDetTable {
  display: flex;
  justify-content: space-between;
  .LeftPart {
    border: 1px solid #e5e8ef;
    width: 396px;
    height: 246px;
    display: flex;
    justify-content: space-between;
    .Statistics {
      display: flex;
      flex-direction: column;
      margin: 16px 0 0 16px;
      .Title {
        display: flex;
        flex-direction: column;
        .title {
          font-size: 18px;
          color: #1d2129;
        }
        .video {
          margin-top: 22px;
          font-size: 12px;
          color: #86909c;
          .videonum {
            margin-left: 22px;
            color: #4e5969;
          }
        }
      }
      .TaskData {
        display: flex;
        flex-direction: column;
        margin-top: 52px;
        .TaskOne {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #86909c;
          .Task {
            display: flex;
            margin-right: 38px;
            .Tasknum {
              margin-left: 12px;
              color: #4e5969;
            }
          }
          .Finish {
            display: flex;
            .Finishnum {
              margin-left: 12px;
              color: #4e5969;
            }
          }
        }
        .TaskTwo {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          font-size: 12px;
          color: #86909c;
          .Task {
            display: flex;
            margin-right: 38px;
            .Tasknum {
              margin-left: 12px;
              color: #4e5969;
            }
          }
          .Finish {
            display: flex;
            .Finishnum {
              margin-left: 12px;
              color: #4e5969;
            }
          }
        }
      }
    }

    .Progress {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 25px;
      margin-right: 33px;
      .el-progress {
        margin-top: 10px;
      }
    }
  }
  .RightPart {
    width: 1000px;
    height: 369px;
  }
}
</style>
