<template>
  <div>
    <!-- <MainHeader title="全部学生" :a="a" /> -->
    <div class="top-frist">
      <SearchInput :getInput="getInput" />
    </div>
    <div class="bottom">
      <StudentBoxArr :inputname="inputname" :inputschool="inputschool" />
    </div>
  </div>
</template>

<script>
import StudentBoxArr from "@/components/StudentProfile/StudentBoxArr.vue";
// import MainHeader from "@/components/MainHeader.vue";
import SearchInput from "@/components/SearchInput.vue";
import { getMtuStudent } from "@/apis/student";

export default {
  name: "AllStudent",
  data() {
    return {
      inputname: "",
      inputschool: "",
    };
  },
  mounted() {
    this.getMtuStudent();
  },
  methods: {
    getInput(inputname, inputschool) {
      console.log("收到的inputname为", inputname);
      console.log("收到的inputschool为", inputschool);
      this.inputname = inputname;
      this.inputschool = inputschool;
    },
    async getMtuStudent() {
      let result = await getMtuStudent();
      console.log("resultStudent", result);
      this.$bus.$emit("getmtu", result);
    },
  },
  props: ["a"],

  components: {
    // MainHeader,
    SearchInput,
    StudentBoxArr,
  },
};
</script>

<style scoped lang="scss">
.top-frist {
  background-color: #f9f9f9;
}

.bottom {
  /* background-color: #f4f4f4; */
  border: none;
}
</style>
