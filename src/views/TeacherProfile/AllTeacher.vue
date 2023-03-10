<template>
  <div>
    <div class="top-frist">
      <SearchInput class="allteacher-SearchInput" :getInput="getInput" />
    </div>
    <div class="bottom">
      <TeacherBoxArr :inputname="inputname" :inputschool="inputschool" />
    </div>
  </div>
</template>

<script>
import TeacherBoxArr from "@/components/TeacherProfile/TeacherBoxArr.vue";
import SearchInput from "@/components/SearchInput.vue";
import { getMtuTeacher } from "@/apis/teacher";

export default {
  name: "AllTeacher",
  data() {
    return {
      inputname: "",
      inputschool: "",
    };
  },
  methods: {
    getInput(inputname, inputschool) {
      console.log("收到的inputname为", inputname);
      console.log("收到的inputschool为", inputschool);
      this.inputname = inputname;
      this.inputschool = inputschool;
    },
    async getMtuTeacher() {
      let result = await getMtuTeacher();
      console.log("result11", result);
      this.$bus.$emit("getmtu", result);
    },
  },
  mounted() {
    this.getMtuTeacher();
  },
  components: {
    SearchInput,
    TeacherBoxArr,
  },
};
</script>

<style scoped lang="scss">
.top-frist {
  background-color: #f9f9f9;
}

.bottom {
  border: none;
}
</style>
