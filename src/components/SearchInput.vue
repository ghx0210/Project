<template>
  <div class="search-input">
    <div class="top">
      <el-select v-model="term" placeholder="选择学期">
        <el-option
          v-for="item in termOptions"
          :key="item.value"
          :label="item.title"
          :value="item.title"
        >
        </el-option>
      </el-select>
      <el-select v-model="college" placeholder="选择学院">
        <el-option
          v-for="item in collegeOptions"
          :key="item.value"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <!-- <div class="select-college"><span>选择学院</span><svg-icon icon-file-name="XB"/><svg-icon icon-file-name="line"/></div> -->
      <div class="search">
        <input
          class="input"
          type="text"
          placeholder="搜索......"
          v-model="mingzi"
        />
        <button class="search-button" @click="sendInput">
          <svg-icon icon-file-name="S1" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getTermData } from "@/apis/teacher";
import { getCollegeData } from "@/apis/teacher";
import { getCollegeDetail } from "@/apis/teacher";
export default {
  name: "SearchInput",
  props: ["getInput"],
  data() {
    return {
      mingzi: "",
      xuexiao: "",
      name: "zi",
      age: "18",
      termOptions: [],
      collegeOptions: [],
      term: [],
      college: [],
    };
  },
  mounted() {
    this.getPlatformTermlist();
    this.getPlatformCollegelist();
    this.getCollegeDetail();
  },
  beforeDestroy() {
    this.$bus.$off("getTermData");
  },
  methods: {
    sendInput() {
      this.getInput(this.mingzi, this.xuexiao);
    },
    async getPlatformTermlist() {
      let res = await getTermData();
      console.log("res", res);
      this.$bus.$emit("sendTermData", res.college_data);
      res.effective.forEach((item) => {
        this.termOptions.push(item);
        // console.log("termOptions", this.termOptions);
      });
    },
    async getPlatformCollegelist() {
      let result = await getCollegeData();
      // console.log("result", result);
      this.$bus.$emit("getCollegeData", result.college);
      result.college.forEach((item) => {
        this.collegeOptions.push(item);
        // console.log("collegeOptions", this.collegeOptions);
      });
    },
    async getCollegeDetail() {
      let results = await getCollegeDetail();
      console.log("results66", results);
    },
  },
};
</script>

<style scoped lang="scss">
.search-input {
  display: flex;
  justify-content: flex-end;
  .top {
    height: 58px;
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    background-color: #ffffff;
    border-radius: 40px;
    .search {
      display: flex;
      .input {
        height: 18px;
        border: none;
        margin: auto 0px auto 44px;
        outline: transparent;
      }
      .search-button {
        width: 110px;
        height: 58px;
        border-radius: 40px;
        background: #0095ff;
        border: none;
      }
    }
  }
}
@media screen and (max-width: 1180px) {
  .search-input {
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    .top {
      width: 800px;
      height: 58px;
      margin-top: 6px;
      display: flex;
      justify-content: flex-start;
      background-color: #ffffff;
      border-radius: 40px;
      .search {
        display: flex;
        .input {
          width: 170px;
          height: 18px;
          border: none;
          margin: auto 0px auto 0px;
          outline: transparent;
        }
        .search-button {
          width: 110px;
          height: 58px;
          border-radius: 40px;
          background: #0095ff;
          border: none;
        }
      }
    }
  }
}
</style>
