<template>
  <div>
    <!-- <MainHeader title="全部学校" :a="a" /> -->
    <div class="top-frist">
      <SearchInput :getInput="getInput" />
    </div>
    <div class="bottom">
      <SchoolBoxArr :inputname="inputname" :inputschool="inputschool" />
    </div>
  </div>
</template>

<script>
import SchoolBoxArr from "@/components/SchoolProfile/SchoolBoxArr.vue";
// import MainHeader from "@/components/MainHeader.vue";
import SearchInput from "@/components/SearchInput.vue";
import { getMtuSchool } from "@/apis/school";

export default {
  name: "AllSchool",
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
    async getMtuSchool() {
      let result = await getMtuSchool();
      // console.log("mtuschook", result);
      this.$bus.$emit("getMtuSchool", result);
    },
    // getMtuTeacher() {
    //   this.$axios({
    //     url: "https://www.mtu.plus/webservice/rest/server.php",
    //     method: "post",
    //     params: {
    //       wstoken: "9e3974d26337677fab8ecfb26716a3b4",
    //       wsfunction: "block_data_screen_teacher_list",
    //       moodlewsrestformat: "json",
    //       // page:2,
    //       pagesize: 64,
    //       role: 1,
    //       user: 480,
    //     },
    //   }).then(
    //     (response) => {
    //       console.log("请求成功了,getMtuTeacher", response.data);
    //       this.$bus.$emit("getmtu", response.data);
    //     },
    //     (error) => {
    //       console.log("请求失败了", error.message);
    //     }
    //   );
    // },
  },
  props: ["a"],
  mounted() {
    // this.getMtuTeacher();
    this.getMtuSchool();
  },
  components: {
    // MainHeader,
    SearchInput,
    SchoolBoxArr,
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
