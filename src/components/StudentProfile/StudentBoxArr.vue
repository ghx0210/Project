<template>
  <div>
    <DetailedCard
      :inputschool="inputschool"
      :inputname="inputname"
      :currentPages="currentPages"
      :pageSize="pageSize"
      :num="num"
    >
      <div class="box-down-teacher">
        <div class="offering-courses">
          <div class="upper">
            <svg-icon icon-file-name="SB1" />
            <p>参与课程数</p>
          </div>
          <div class="down"><p>123</p></div>
        </div>
        <div class="offering-courses">
          <div class="upper">
            <svg-icon icon-file-name="SB2" />
            <p>参与作业数</p>
          </div>
          <div class="down"><p>123</p></div>
        </div>
        <div class="offering-courses">
          <div class="upper">
            <svg-icon icon-file-name="SB3" />
            <p>参与测验数</p>
          </div>
          <div class="down"><p>123</p></div>
        </div>
        <div class="offering-courses">
          <div class="upper">
            <svg-icon icon-file-name="SB4" />
            <p>参与讨论数</p>
          </div>
          <div class="down"><p>123</p></div>
        </div>
        <div class="offering-courses">
          <div class="upper">
            <svg-icon icon-file-name="SB5" />
            <p>学习时长</p>
          </div>
          <div class="down"><p>123</p></div>
        </div>
      </div>
    </DetailedCard>

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
</template>

<script>
import DetailedCard from "@/components/DetailedCard.vue";
export default {
  name: "StudentBoxArr",
  props: ["inputschool", "inputname"],
  data() {
    return {
      currentPages: 1,
      pageSize: 15,
      KeyTeacherName: "",
      TeacherCards: "",
      // 1是代表全部学生
      num: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPages = val;
      console.log("收到的val为", val);
    },
  },
  components: {
    DetailedCard,
  },
};
</script>

<style scoped lang="scss">
.box-down-teacher {
  display: flex;
  flex-wrap: wrap;
  .offering-courses {
    width: 100px;
    margin: 4px 11px;
    // border: 1px solid red;
    .upper {
      display: flex;
      .svg-icon {
        width: 14px;
        height: 14px;
      }
      p {
        margin-left: 8px;
        font-size: 14px;
        font-weight: 100;
        line-height: 14px;
        color: #474747;
      }
    }
    .down {
      p {
        margin-left: 20px;
        margin-top: 6px;
        font-size: 14px;
        font-weight: 100;
        line-height: 14px;
        color: #474747;
      }
    }
  }
}

.page-change {
  display: flex;
  justify-content: flex-end;
  margin: 64px 0px 50px 50px;
}
</style>
