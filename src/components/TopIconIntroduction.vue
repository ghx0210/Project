<template>
  <div>
    <div class="Main" v-for="l in TeacherTopList" :key="l.id">
      <div class="top"><svg-icon :icon-file-name="l.url" /></div>
      <div class="M-and-B">
        <div class="middle">
          <span>{{ l.num }}</span>
        </div>
        <div class="bottom">
          <p>{{ l.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["TeacherTopList"],
};
</script>
<style scoped lang="scss">
/* .Main-B {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
} */
/* .Top-D-left {
  border-radius: 20px;
  overflow: hidden;
} */
.Main {
  background-color: #fff;
  width: 160px;
  height: 210px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: space-around;
  text-align: center;
  /* border-right: 2px solid #eeeeee; */
  .top {
    .svg-icon {
      font-size: 48px;
      margin-bottom: -16px;
    }
  }
  .M-and-B {
    .middle {
      span {
        font-size: 28px;
        color: #01111c;
        font-weight: bold;
        /* margin-top: 10px; */

        /* width: 40px;
             height: 28px; */
      }
    }
    .bottom {
      p {
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
}
.Main-B .Main:last-child {
  /* background-color: red; */
  border: none;
}
</style>
