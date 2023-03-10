<template>
  <div class="course">
    <div class="paihang">
      <div class="course-head">
        <div><span>排行榜</span></div>
        <div><span>姓名</span></div>
        <div><span>访问次数</span></div>
        <div><span>讨论数</span></div>
        <div><span>活跃指数</span></div>
      </div>
      <div v-for="(item, id) in lister" :key="id" class="course-list">
        <!-- <div v-if="id === 0">
          <img src="../../assets/img/list1.png" />
        </div>
        <div v-else-if="id === 1">
          <img src="../../assets/img/list2.png" />
        </div>
        <div v-else-if="id === 2">
          <img src="../../assets/img/list3.png" />
        </div> -->
        <div class="icon">{{ item.rank }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.visit }}</div>
        <div>{{ item.talk }}</div>
        <div>{{ item.active }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lister: [
        {
          rank: 1,
          name: "茅艺",
          visit: 1323,
          talk: 981,
          active: 1212,
        },
        {
          rank: 2,
          name: "松雅",
          visit: 1223,
          talk: 961,
          active: 1210,
        },
        {
          rank: 3,
          name: "嘉祺",
          visit: 1123,
          talk: 941,
          active: 1212,
        },
        {
          rank: 4,
          name: "叶子",
          visit: 1123,
          talk: 981,
          active: 1212,
        },
        {
          rank: 5,
          name: "艺术",
          visit: 1123,
          talk: 981,
          active: 1212,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.paihang {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 450px;
  .course-head {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    opacity: 1;
    font-family: SourceHanSerifCN-ExtraLight;
    font-size: 16px;
    font-weight: 250;
    letter-spacing: 0px;
    color: #262626;
  }
  .course-list {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 18px;
    opacity: 1;
    font-family: SourceHanSerifCN-ExtraLight;
    font-size: 14px;
    font-weight: 250;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 0.65);

    .icon {
      width: 25px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: 25px 24px;
      background-image: url(../../assets/img/list4.png);
    }
    // .icon0 {
    //   background-image: url(../../assets/img/list1.png);
    // }
    // .icon1 {
    //   background-image: url(../../assets/img/list2.png);
    // }
    // .icon2 {
    //   background-image: url(../../assets/img/list3.png);
    // }
  }
}
</style>
