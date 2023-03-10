<template>
  <div>
    <!-- 传进来的num是1是展示全部学生 -->
    <div v-show="num == 1" class="bottom-big">
      <div
        class="news-box-student"
        v-for="t in filTeacherBoxs.slice(
          (currentPages - 1) * pageSize,
          currentPages * pageSize
        )"
        :key="t.id"
      >
        <div class="box-upper">
          <router-link
            :to="{
              path: '/StudentDetails',
              query: {
                id: t.id,
                name: t.name,
                school: t.school,
                url: t.url,
              },
            }"
          >
            <img :src="t.url" alt="" />
          </router-link>
          <div class="name">
            <span>{{ t.name }}</span>
          </div>
          <div class="college">
            <span>{{ t.sex }}</span>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedCard",
  props: ["inputschool", "inputname", "currentPages", "pageSize", "num"],

  data() {
    return {
      TeacherCards: "",
      StudentCards: "",
    };
  },
  computed: {
    filTeacherBoxs() {
      return this.TeacherCards.filter((t) => {
        return (
          t.name.indexOf(this.inputname) !== -1 &&
          t.school.indexOf(this.inputschool) !== -1
        );
      });
    },
  },
  // 在挂载之前拿this.TeacherCards接来自vuex中的数据
  beforeMount() {
    this.TeacherCards = this.$store.state.TBA;
    this.StudentCards = this.$store.state.TBA;
  },
};
</script>

<style scoped lang="scss">
.bottom-big {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .news-box-student {
    width: 251px;
    height: 313px;
    border-radius: 20px;
    opacity: 1;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(62, 73, 84, 0.04);
    margin-top: 36px;
    .box-upper {
      text-align: center;
      img {
        margin: 16px 0px 24px 0px;
        width: 71px;
        height: 71px;
        opacity: 1;
        border-radius: 12px;
      }
      img:hover {
        box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.2);
      }
      .name {
        opacity: 1;
        font-family: Poppins-Medium;
        font-weight: 100;
        font-size: 20px;
        color: #000000;
      }
      .college {
        font-family: Poppins-Regular;
        font-size: 14px;
        font-weight: normal;
        margin-top: 12px;
        margin-bottom: 24px;
        /* margin-bottom: 24px; */
        color: #f93a0b;
      }
    }
  }
  .news-box:hover {
    box-shadow: 0px 0px 15px rgba(62, 73, 84, 0.6);
  }
}
</style>
