<template>
  <div>
    <!-- 传进来的num是2是展示全部教师 -->
    <div v-show="num == 2" class="Top-D-right">
      <div class="teacher_List">
        <router-link
          :to="{
            path: '/AllTeacher',
          }"
        >
          <p>教师列表</p>
        </router-link>
      </div>
      <div class="line_segment">
        <svg-icon icon-file-name="TGL-1" />
      </div>
      <div class="bottom_to">
        <svg-icon icon-file-name="TGL-2" />
        <router-link
          :to="{
            path: '/AllTeacher',
          }"
        >
          前往
        </router-link>
      </div>
    </div>
    <!-- 传进来的num是1是展示全部学生 -->
    <div v-show="num == 1" class="Top-D-right">
      <div class="teacher_List">
        <router-link
          :to="{
            path: '/AllStudent',
          }"
        >
          <p>学生列表</p>
        </router-link>
      </div>
      <div class="line_segment">
        <svg-icon icon-file-name="TGL-1" />
      </div>
      <div class="bottom_to">
        <svg-icon icon-file-name="TGL-2" />
        <router-link
          :to="{
            path: '/AllStudent',
          }"
        >
          前往
        </router-link>
      </div>
    </div>
    <!-- 传进来的num是3是展示全部学生 -->
    <div v-show="num == 3" class="Top-D-right">
      <div class="teacher_List">
        <router-link
          :to="{
            path: '/AllSchool',
          }"
        >
          <p>学校列表</p>
        </router-link>
      </div>
      <div class="line_segment">
        <svg-icon icon-file-name="TGL-1" />
      </div>
      <div class="bottom_to">
        <svg-icon icon-file-name="TGL-2" />
        <router-link
          :to="{
            path: '/allSchool',
          }"
        >
          前往
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["num"],
};
</script>
<style scoped lang="scss">
.Top-D-right {
  display: flex;
  /* justify-content:space-between; */
  flex-direction: column;
  /* align-content: center; */
  width: 134px;
  height: 210px;
  background-color: #0095ff;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  .teacher_List {
    width: 26px;
    margin: 28px auto;
    a {
      font-size: 24px;
      color: #f8f8f8;
    }
  }
  .line_segment {
    .svg-icon {
      width: 94px;
    }
  }
  .bottom_to {
    display: flex;
    justify-content: center;
    /* margin: 18px; */
    .svg-icon {
      width: 24px;
      height: 24px;
      margin: 6px;
    }
    a {
      font-size: 16px;
      color: #f8f8f8;
      font-weight: 400;
      line-height: 36px;
    }
  }
}
</style>
