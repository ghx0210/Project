<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import reset from "@/assets/css/reset.css";
export default {
  name: "App",
};
</script>

<style lang="scss">
/* elementui中换页的样式 */
.page-change .el-pagination {
  padding: 0;
}
.bottom .el-pagination button.btn-next,
.bottom .el-pagination button.btn-prev {
  width: 91px;
  height: 52px;
  border-radius: 40px;
  opacity: 1;
  border: 1px solid #0095ff;
  display: inline-block;
}
.el-input.el-input--mini.el-input--suffix {
  background-color: #bfa;
  display: none;
}

.el-pagination button,
.bottom .page-change .el-pagination span:not([class*="suffix"]) {
  display: none;
  // display: block;
  font-size: 13px;
  /* min-width: 35.5px; */
  height: 28px;
  line-height: 28px;
  vertical-align: top;
  /* box-sizing: border-box; */
}
.el-pagination button,
.page-change .el-pagination span:not([class*="suffix"]) {
  display: inline-block;
}
span.el-pagination__jump {
  display: none;
}

button.btn-next ::before {
  content: "下一页";
  opacity: 1;
  color: #0095ff;
}
button.btn-prev ::after {
  content: "上一页";
  color: #0095ff;
}
.btn-prev .el-icon-arrow-left:before {
  content: "";
}
.bottom .el-pagination ul.el-pager {
  position: relative;
  width: 184px;
  height: 52px;
  border-radius: 40px;
  opacity: 1;
  background-color: #f5f5f5;
  margin: 0px 16px;
}
.bottom .el-pagination ul.el-pager li {
  width: 53px;
  height: 52px;
  border-radius: 40px;
  opacity: 1;
  /* background: #ededed; */
  line-height: 52px;
}
.bottom .el-pagination ul.el-pager li:nth-child(1) {
  position: absolute;
  left: -5px;
}
.bottom .el-pagination ul.el-pager li:nth-child(2) {
  position: absolute;
  left: 39px;
}
.bottom .el-pagination ul.el-pager li:nth-child(3) {
  position: absolute;
  left: 83px;
}
.bottom .el-pagination ul.el-pager li:nth-child(4) {
  position: absolute;
  left: 127px;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #f5f5f5;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  width: 52px;
  height: 52px;
  border-radius: 40px;
  opacity: 1;

  background: #0095ff;
  color: #fff;
  z-index: 6;
}

// 进度条的样式
.farther-two-Left-progress
  div:nth-child(1).two-Left-progress
  .el-progress-bar__inner {
  background-color: #f93a0b;
}
.farther-two-Left-progress
  div:nth-child(2).two-Left-progress
  .el-progress-bar__inner {
  background-color: #1d92df;
}
.farther-two-Left-progress
  div:nth-child(3).two-Left-progress
  .el-progress-bar__inner {
  background-color: #d653c1;
}
.farther-two-Left-progress
  div:nth-child(4).two-Left-progress
  .el-progress-bar__inner {
  background-color: #3d4bcb;
}
// 下拉框的样式
.top {
  .el-input.el-input--suffix .el-input__inner {
    width: 260px;
    height: 58px;
    color: #0095ff;
    border-radius: 40px;
    background: #ffffff;
    border: 1px solid transparent;
    text-align: center;
    font-size: 16px;
  }
  // 修改下拉提示文字的样式
  input::-webkit-input-placeholder {
    /*WebKit browsers*/
    font-size: 16px;
    color: #0095ff;
  }
  input::-moz-input-placeholder {
    /*Mozilla Firefox*/
    font-size: 16px;
    color: #0095ff;
  }
  input::-ms-input-placeholder {
    /*Internet Explorer*/
    font-size: 16px;
    color: #0095ff;
  }
  // 修改输入提示文字的样式
  .search input::-webkit-input-placeholder {
    /*WebKit browsers*/
    font-size: 16px;
    color: #a1a1a1;
  }
  .search input::-moz-input-placeholder {
    /*Mozilla Firefox*/
    font-size: 16px;
    color: #a1a1a1;
  }
  .search input::-ms-input-placeholder {
    /*Internet Explorer*/
    font-size: 16px;
    color: #a1a1a1;
  }
}
@media screen and (max-width: 1180px) {
  // 下拉框的样式
  .top {
    .el-input.el-input--suffix .el-input__inner {
      // background-color: red;
      width: 260px;
      height: 58px;
      color: #0095ff;
      border-radius: 40px;
      background: #ffffff;
      border: 1px solid transparent;
      text-align: center;
      font-size: 8px;
    }
    // 修改下拉提示文字的样式
    input::-webkit-input-placeholder {
      /*WebKit browsers*/
      font-size: 16px;
      color: #0095ff;
    }
    input::-moz-input-placeholder {
      /*Mozilla Firefox*/
      font-size: 16px;
      color: #0095ff;
    }
    input::-ms-input-placeholder {
      /*Internet Explorer*/
      font-size: 16px;
      color: #0095ff;
    }
    // 修改输入提示文字的样式
    .search input::-webkit-input-placeholder {
      /*WebKit browsers*/
      font-size: 16px;
      color: #a1a1a1;
    }
    .search input::-moz-input-placeholder {
      /*Mozilla Firefox*/
      font-size: 16px;
      color: #a1a1a1;
    }
    .search input::-ms-input-placeholder {
      /*Internet Explorer*/
      font-size: 16px;
      color: #a1a1a1;
    }
    // 下拉框图标
    .el-input__suffix .el-input__icon {
      // background-color: #bfa;
      line-height: 0px;
    }
  }
}
</style>
