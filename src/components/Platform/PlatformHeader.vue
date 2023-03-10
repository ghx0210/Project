<template>
  <div class="Platformheader">
    <el-row>
      <el-col :md="8" :lg="4" v-for="HeadCard in CardData" :key="HeadCard.id">
        <div class="headcard">
          <div class="cardtop">
            <svg-icon :icon-file-name="HeadCard.url"></svg-icon>
          </div>
          <div class="cardbottom">
            <div class="cardtitle">{{ HeadCard.num }}</div>
            <div class="cardtitle1">{{ HeadCard.title }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["CardData"],
};
</script>

<style scoped lang="scss">
.Platformheader {
  padding: 5px;
  .headcard {
    display: flex;
    flex-direction: column;
    align-items: center;
    .cardtop {
      margin: 42px auto 16px;
      font-size: 48px;
    }
    .cardbottom {
      text-align: center;
      .cardtitle {
        margin: 18px auto;
      }
      .cardtitle1 {
        margin: 0 auto 24px;
      }
    }
  }
}
</style>
