<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="outside">
    <!-- <MainHeader title="学生详情" :a="a" /> -->
    <!-- 设置50px外边距 -->
    <div class="contain">
      <div class="top">
        <div class="top-left-one"><img :src="AcceptPicture" alt="" /></div>
        <div class="top-left-two">
          <div class="name">
            <p>姓名:{{ $route.query.name }}</p>
          </div>
          <div class="student-ID">
            <p>学号:2023610201013{{ $route.query.id }}</p>
          </div>
          <div class="college">
            <p>学院:{{ $route.query.school }}</p>
          </div>
        </div>
      </div>
      <div class="middle-one">
        <div class="middle-one-left" ref="barChart">1</div>
        <div class="middle-one-right">
          <div class="first">
            <div class="upper"><p>参与课程</p></div>
            <div class="down"><p>187/200次</p></div>
          </div>
          <div class="second">
            <div class="upper"><p>学习时长</p></div>
            <div class="down"><p>187h</p></div>
          </div>
          <div class="third">
            <div class="upper"><p>参与作业数</p></div>
            <div class="down"><p>187/200次</p></div>
          </div>
          <div class="fourth">
            <div class="upper"><p>资源浏览数</p></div>
            <div class="down"><p>187个</p></div>
          </div>
        </div>
      </div>
      <div class="middle-two">
        <div class="one">
          <div class="discuss"><p>讨论</p></div>
          <div class="TotalPosts">
            <div class="TotalPosts-up"><p>0贴</p></div>
            <div><p>发帖</p></div>
          </div>
          <div class="TotalPosts">
            <div class="TotalPosts-up"><p>0贴</p></div>
            <div><p>回帖</p></div>
          </div>
        </div>
        <div class="two">
          <div class="upper"><p>参与测验数</p></div>
          <div class="down"><p>187次</p></div>
        </div>
        <div class="three">
          <div class="upper"><p>数据下载量</p></div>
          <div class="down"><p>187次</p></div>
        </div>
      </div>
      <div class="down_part">
        <div class="down_part_first">
          <div class="Offering_courses"><span>参与课程</span></div>
          <div class="View_course">
            <router-link
              :to="{
                path: '/CourseSurvey',
              }"
            >
              <p>查看更多课程</p>
            </router-link>
          </div>
        </div>
        <div>
          <ul class="down_part_second">
            <li><a href="#">全部</a></li>
            <li><a href="#">未开始</a></li>
            <li><a href="#">进行中</a></li>
            <li><a href="#">已结束</a></li>
          </ul>
        </div>
        <div class="down_part_third">
          <!-- 1 -->
          <div class="Course_introduction_card">
            <div class="classItem">
              <div class="coursePicture">
                <router-link to="/CourseSurvey"
                  ><img src="@/assets/img/kecheng.png" alt=""
                /></router-link>
              </div>
              <div class="itemText">
                <p><a href="#">英语课</a></p>
                <p>xx学院</p>
                <p>
                  <el-progress :percentage="66" :format="format"></el-progress>
                </p>
                <p>2022-12-03结束</p>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="Course_introduction_card">
            <div class="classItem">
              <div class="coursePicture">
                <router-link to="/CourseSurvey"
                  ><img src="@/assets/img/kecheng.png" alt=""
                /></router-link>
              </div>
              <div class="itemText">
                <p><a href="#">英语课</a></p>
                <p>xx学院</p>
                <p>
                  <el-progress :percentage="66" :format="format"></el-progress>
                </p>
                <p>2022-12-03结束</p>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="Course_introduction_card">
            <div class="classItem">
              <div class="coursePicture">
                <router-link to="/CourseSurvey"
                  ><img src="@/assets/img/kecheng.png" alt=""
                /></router-link>
              </div>
              <div class="itemText">
                <p><a href="#">英语课</a></p>
                <p>xx学院</p>
                <p>
                  <el-progress :percentage="66" :format="format"></el-progress>
                </p>
                <p>2022-12-03结束</p>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="Course_introduction_card">
            <div class="classItem">
              <div class="coursePicture">
                <router-link to="/CourseSurvey"
                  ><img src="@/assets/img/kecheng.png" alt=""
                /></router-link>
              </div>
              <div class="itemText">
                <p><a href="#">英语课</a></p>
                <p>xx学院</p>
                <p>
                  <el-progress :percentage="66" :format="format"></el-progress>
                </p>
                <p>2022-12-03结束</p>
              </div>
            </div>
          </div>
          <!-- 5 -->
          <div class="Course_introduction_card">
            <div class="classItem">
              <div class="coursePicture">
                <router-link to="/CourseSurvey"
                  ><img src="@/assets/img/kecheng.png" alt=""
                /></router-link>
              </div>
              <div class="itemText">
                <p><a href="#">英语课</a></p>
                <p>xx学院</p>
                <p>
                  <el-progress :percentage="66" :format="format"></el-progress>
                </p>
                <p>2022-12-03结束</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="page-change">
            <el-pagination
              background
              layout="sizes, prev, pager, next, jumper"
              :total="40"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentDetails",
  data() {
    return {
      AcceptPicture: "",
    };
  },
  props: ["a"],
  mounted() {
    this.AcceptPicture = this.$route.query.url;
    this.initBarChart();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPages = val;
      console.log("收到的val为", val);
    },
    format(percentage) {
      return percentage === 100 ? "√" : `${percentage}%`;
    },
    initBarChart() {
      let myChart = this.$echarts.init(this.$refs.barChart);
      // total 和 salary的数据就是各个环的数据
      let total = 100;
      let salayry1 = 64;
      let salayry2 = 73;
      let salayry3 = 48;
      let option = {
        color: ["#2769EE", "#0095FF", "#8EC6ED"],
        title: {
          text: "数据",
          top: "30",
          left: "30",
          textStyle: {
            fontSize: 24,
            color: "rgb(0,0,0,.6)", // 单独设置某一个图列的颜色
          },
        },
        legend: {
          orient: "vertical",
          right: "25%",
          top: "20%",
          itemHeight: 30, //图例的高度
          itemWidth: 8, //图例的高度
          itemGap: 45, //图例之间的间距
          data: [
            {
              name: "课程数",
              icon: "rectangle",
              textStyle: {
                fontSize: 30,
                color: "rgb(0,0,0,.7)", // 单独设置某一个图列的颜色
              },
            },
            {
              name: "作业数",
              icon: "rectangle",
              textStyle: {
                fontSize: 30,
                color: "rgb(0,0,0,.7)", // 单独设置某一个图列的颜色
              },
            },
            {
              name: "测验数",
              icon: "rectangle",
              textStyle: {
                fontSize: 30,
                color: "rgb(0,0,0,.7)", // 单独设置某一个图列的颜色
              },
            },
          ],
          //图例的名字需要和饼图的name一致，才会显示图例
        },
        series: [
          // 课程数
          {
            name: "课程数",
            type: "pie",
            radius: ["60%", "65%"],
            center: ["25%", "50%"],
            //环的位置
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            data: [
              {
                value: 80, //需要显示的数据
                name: 80 + "%",
                itemStyle: {
                  normal: {
                    color: "#2769EE",
                  },
                },
              },
              {
                value: total - salayry1,
                //不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: "#ffffff",
                  },
                },
              },
            ],
          },
          // 作业数
          {
            name: "作业数",
            type: "pie",
            radius: ["50%", "55%"],
            center: ["25%", "50%"],
            //环的位置
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "500",
              },
            },
            data: [
              {
                value: salayry2, //需要显示的数据
                name: salayry2 + "%",
                itemStyle: {
                  normal: {
                    color: "#0095FF",
                  },
                },
              },
              {
                value: total - salayry2,
                //不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: "#ffffff",
                  },
                },
              },
            ],
          },
          // 测验数
          {
            name: "测验数",
            type: "pie",
            radius: ["40%", "45%"],
            center: ["25%", "50%"],
            //环的位置
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
              itemStyle: {
                normal: {
                  color: "#FFC000",
                },
              },
            },
            data: [
              {
                value: salayry3, //需要显示的数据
                name: salayry3 + "%",
                itemStyle: {
                  normal: {
                    color: "#8EC6ED",
                  },
                },
              },
              {
                value: total - salayry3,
                //不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: "#ffffff",
                  },
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped lang="scss">
.outside {
  background-color: #f9f9f9;
  .contain {
    .top {
      display: flex;
      justify-content: flex-start;
      width: 1475px;
      height: 200px;
      border-radius: 20px;
      opacity: 1;
      background: #ffffff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
      margin-bottom: 36px;
      .top-left-one img {
        width: 94px;
        height: 94px;
        background-color: #c4c4c4;
        border-radius: 20px;
        margin: 53px 60px 53px 80px;
      }
      .top-left-two {
        height: 94px;
        margin-top: 51px;
        .name p {
          font-size: 32px;
          font-weight: 250;
          margin-bottom: 24px;
        }
        .student-ID p {
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 18px;
          font-weight: 250;
          margin-bottom: 8px;
        }
        .college p {
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 18px;
          font-weight: 250;
        }
      }
    }
    .middle-one {
      display: flex;
      justify-content: space-between;
      width: 1475px;
      height: 436px;
      border-radius: 20px;
      margin-bottom: 36px;
      .middle-one-left {
        width: 741px;
        height: 436px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
      }
      .middle-one-right {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 694px;
        height: 436px;
        border-radius: 20px;
        // background: #ffffff;
        .second,
        .third,
        .fourth,
        .first {
          width: 328px;
          height: 200px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
          .upper p {
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 24px;
            font-weight: 250;
            margin: 30px 0px 60px 30px;
          }
          .down p {
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 36px;
            font-weight: 250;
            margin-left: 30px;
          }
        }
        .second,
        .first {
          margin-bottom: 36px;
        }
      }
    }
    .middle-two {
      display: flex;
      justify-content: space-between;
      width: 1475px;
      height: 200px;
      border-radius: 20px;
      margin-bottom: 36px;
      .one {
        display: flex;
        justify-items: center;
        width: 741px;
        height: 200px;
        border-radius: 20px;
        background: #ffffff;

        .discuss {
          margin-top: 30px;
          margin-left: 30px;
          p {
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 24px;
            font-weight: 250;
          }
        }
        .TotalPosts {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-left: 150px;
          .TotalPosts-up {
            margin-bottom: 16px;
          }
          p {
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 32px;
            font-weight: 250;
          }
        }
      }
      .three,
      .two {
        width: 328px;
        height: 200px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
        .upper p {
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 24px;
          font-weight: 250;
          margin: 30px 0px 60px 30px;
        }
        .down p {
          font-family: SourceHanSerifCN-ExtraLight;
          font-size: 36px;
          font-weight: 250;
          margin-left: 30px;
        }
      }
    }
    .down_part {
      /* width: 1476px; */
      height: 660px;
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;
      .down_part_first {
        margin: 40px 36px 46px 36px;
        display: flex;
        justify-content: space-between;
        .Offering_courses {
          font-family: MicrosoftYaHei;
          font-size: 24px;
          line-height: 58px;
          color: #3d3d3d;
        }
        .View_course {
          width: 184px;
          height: 58px;
          border-radius: 20px;
          overflow: hidden;
          background: #0095ff;
          a {
            font-family: SourceHanSerifCN-ExtraLight;
            font-size: 20px;
            line-height: 58px;
            letter-spacing: 0em;
            text-align: center;
            opacity: 1;
            color: #f8f8f8;
          }
        }
      }
      .down_part_second {
        display: flex;
        justify-content: flex-start;
        margin: 0px 36px;
        margin-bottom: 30px;
        li {
          width: 80px;
          height: 30px;
          margin-right: 32px;
          border-radius: 8px;
          background: #eff4fa;
          text-align: center;
          /* background: #0095FF; */
          a {
            font-family: MicrosoftYaHei;
            font-size: 16px;
            line-height: 30px;
            color: #3d3d3d;
          }
        }
      }
      .down_part_third {
        display: flex;
        margin: 0px 36px;
        justify-content: space-between;
        .Course_introduction_card {
          width: 251px;
          height: 352px;
          /* border: 2px solid black; */
          /* margin-right: 36px; */
          .classItem {
            .coursePicture {
              img {
                width: 249px;
                height: 176px;
                border-radius: 8px 8px 0px 0px;
              }
            }
            .itemText {
              p {
                font-family: SourceHanSerifCN-ExtraLight;
                font-size: 14px;
                font-weight: 250;
                line-height: 18px;
                letter-spacing: 0px;
                color: #3d3d3d;
                margin: 16px 20px;
              }
              p:nth-child(3) {
                margin: 28px 20px 34px 20px;
              }
              p:nth-child(4) {
                font-size: 12px;
              }
            }
          }
        }
      }
      .bottom {
        .page-change {
          display: flex;
          justify-content: flex-end;
          margin: 36px 50px 50px 50px;
        }
      }
    }
  }
}
</style>
