<template>
  <div class="PlatformSurvey">
    <div class="Headpart">
      <PlatformHeader :CardData="SchoolDetailsCard"></PlatformHeader>
    </div>
    <div class="Middlepart">
      <SchDetechart></SchDetechart>
    </div>
    <div class="Bottompart">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="444"
        :header-cell-style="{ background: '#EFF4FA', 'text-align': 'center' }"
        :cell-style="columnStyle"
      >
        <el-table-column label="课程名" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.fullname }}</span>
          </template>
        </el-table-column>
        <el-table-column label="授课老师" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.teachers }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程类别" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="学生人数" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.student_num }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="访问量" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="所属学院" align="center">
          <template>
            <span>{{ $route.query.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="学院课程列表" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="mini"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import PlatformHeader from "@/components/Platform/PlatformHeader.vue";
import SchDetechart from "@/components/SchoolProfile/SchDetechart.vue";
import { getSchoolDetails } from "@/apis/school";

export default {
  components: {
    PlatformHeader,
    SchDetechart,
  },
  mounted() {
    this.getDetailsData();
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path: "/CourseMatter",
        query: { id: row.course_id },
      });
    },
    async getDetailsData() {
      let result = await getSchoolDetails(this.$route.query.id);

      this.SchoolDetailsCard.forEach((item, index, self) => {
        self[index].num = result.college[item.key] || 0;
      });
      this.tableData = result.course_list;
    },
    columnStyle({ columnIndex }) {
      if (columnIndex == 8) {
        return "background:#F9FBFD";
      }
    },
  },
  data() {
    return {
      SchoolDetailsCard: [
        {
          id: 1,
          url: "SchDet-H1",
          num: 0,
          title: "学生数",
          key: "student_num",
        },
        {
          id: 2,
          url: "SchDet-H2",
          num: 1,
          title: "教师数",
          key: "teacher_num",
        },
        {
          id: 3,
          url: "SchDet-H3",
          num: 2,
          title: "课程数",
          key: "student_num",
        },
        {
          id: 4,
          url: "SchDet-H4",
          num: 8,
          title: "访问量",
          key: "access_num",
        },
        {
          id: 5,
          url: "SchDet-H5",
          num: 3,
          title: "资源数",
          key: "resource_num",
        },
        {
          id: 6,
          url: "SchDet-H6",
          num: 4,
          title: "活动数",
          key: "activity_num",
        },
      ],
      tableData: [],
    };
  },
};
</script>

<style scoped lang="scss">
.PlatformSurvey {
  .Headpart {
    border-radius: 20px;
    background-color: #ffffff;
  }
  .Middlepart {
    margin-top: 36px;
  }
  .Bottompart {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 36px;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 20px 20px 0;
    height: 444px;
    .el-button {
      background: #f9fbfd;
      border: 1px solid #f9fbfd;
    }
  }
}
</style>
