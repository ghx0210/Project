<template>
  <div class="basic-matter">
    <div class="subject">
      <router-view></router-view>
      <MatterRight :id="ID" :Matter="MatterData"></MatterRight>
    </div>
  </div>
</template>

<script>
import MatterRight from "@/components/CourseProfile/MatterRight";
export default {
  components: { MatterRight },
  data() {
    return {
      ID: "",
      MatterData: [],
    };
  },
  mounted() {
    this.getId();
  },
  methods: {
    getId() {
      this.ID = this.$route.query.id;
      this.MatterData = this.$route.query;
    },
  },
};
</script>

<style scoped lang="scss">
.basic-matter {
  display: flex;
  flex-direction: column;

  .subject {
    display: flex;
    flex-direction: row;
  }
}
</style>
