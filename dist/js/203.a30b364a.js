"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[203],{822:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-input"},[e("div",{staticClass:"top"},[e("el-select",{attrs:{placeholder:"选择学期"},model:{value:t.term,callback:function(e){t.term=e},expression:"term"}},t._l(t.termOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.title,value:t.title}})})),1),e("el-select",{attrs:{placeholder:"选择学院"},model:{value:t.college,callback:function(e){t.college=e},expression:"college"}},t._l(t.collegeOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.name,value:t.name}})})),1),e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mingzi,expression:"mingzi"}],staticClass:"input",attrs:{type:"text",placeholder:"搜索......"},domProps:{value:t.mingzi},on:{input:function(e){e.target.composing||(t.mingzi=e.target.value)}}}),e("button",{staticClass:"search-button",on:{click:t.sendInput}},[e("svg-icon",{attrs:{"icon-file-name":"S1"}})],1)])],1)])},i=[],o=(s(7658),s(6440)),n={name:"SearchInput",props:["getInput"],data(){return{mingzi:"",xuexiao:"",name:"zi",age:"18",termOptions:[],collegeOptions:[],term:[],college:[]}},mounted(){this.getPlatformTermlist(),this.getPlatformCollegelist(),this.getCollegeDetail()},beforeDestroy(){this.$bus.$off("getTermData")},methods:{sendInput(){this.getInput(this.mingzi,this.xuexiao)},async getPlatformTermlist(){let t=await(0,o.ef)();console.log("res",t),this.$bus.$emit("sendTermData",t.college_data),t.effective.forEach((t=>{this.termOptions.push(t)}))},async getPlatformCollegelist(){let t=await(0,o.Wl)();this.$bus.$emit("getCollegeData",t.college),t.college.forEach((t=>{this.collegeOptions.push(t)}))},async getCollegeDetail(){let t=await(0,o.aj)();console.log("results66",t)}}},r=n,l=s(1001),c=(0,l.Z)(r,a,i,!1,null,"dbbe7e3e",null),u=c.exports},9203:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"beijing"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"upper"},[e("SearchInput",{attrs:{getInput:t.getInput}}),e("div",{staticClass:"Top-D-right"},[e("div",{staticClass:"school_list"},[e("router-link",{attrs:{to:{path:"/AllSchool"}}},[t._v(" 全部学院 ")])],1),e("div",{staticClass:"bottom_to_icons"},[e("router-link",{attrs:{to:{path:"/AllSchool"}}},[e("svg-icon",{attrs:{"icon-file-name":"TGL-2"}})],1)],1),e("div",{staticClass:"bottom_to_wenzi"},[e("router-link",{attrs:{to:{path:"/AllSchool"}}},[t._v(" 前往 ")])],1)])],1),e("div",{staticClass:"Main-content"},[t._m(0),e("div",{staticClass:"Main-content-right"},[e("div",{staticClass:"one"},[e("div",{staticClass:"one-center"},[e("div",[e("div",{staticClass:"one-center-Top-Left"},[e("div",[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.student_num))]),e("div",{staticClass:"introduction"},[t._v("学生数")])]),e("div",{staticClass:"LeftBox"},[e("svg-icon",{attrs:{"icon-file-name":"XYGK1"}})],1)]),e("div",{staticClass:"one-center-Bottom-Left"},[e("div",[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.access_num))]),e("div",{staticClass:"introduction"},[t._v("访问数")])]),e("div",{staticClass:"LeftBox"},[e("svg-icon",{attrs:{"icon-file-name":"XYGK3"}})],1)])]),e("div",[e("div",{staticClass:"one-center-Top-Right"},[e("div",{staticClass:"RightBox"},[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.teacher_num))]),e("div",{staticClass:"introduction"},[t._v("教师数")])]),e("div",[e("svg-icon",{attrs:{"icon-file-name":"XYGK2"}})],1)]),e("div",{staticClass:"one-center-Bottom-Right"},[e("div",{staticClass:"RightBox"},[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.course_num))]),e("div",{staticClass:"introduction"},[t._v("课程数")])]),e("div",[e("svg-icon",{attrs:{"icon-file-name":"XYGK4"}})],1)])])])]),e("SchoolActivityResourcesEchart"),e("div",{staticClass:"three"},[e("div",{staticClass:"one-center"},[e("div",[e("div",{staticClass:"one-center-Top-Left"},[e("div",[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.resource_num))]),e("div",{staticClass:"introduction"},[t._v("资源数")])]),e("div",{staticClass:"LeftBox"},[e("svg-icon",{attrs:{"icon-file-name":"TII-6"}})],1)]),e("div",{staticClass:"one-center-Bottom-Left"},[e("div",[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.activity_num))]),e("div",{staticClass:"introduction"},[t._v("评论区数")])]),e("div",{staticClass:"LeftBox"},[e("svg-icon",{attrs:{"icon-file-name":"TII-8"}})],1)])]),e("div",[e("div",{staticClass:"one-center-Top-Right"},[e("div",{staticClass:"RightBox"},[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.assigns_num))]),e("div",{staticClass:"introduction"},[t._v("作业数")])]),e("div",[e("svg-icon",{attrs:{"icon-file-name":"TII-7"}})],1)]),e("div",{staticClass:"one-center-Bottom-Right"},[e("div",{staticClass:"RightBox"},[e("div",{staticClass:"number"},[t._v(t._s(t.college_data.quizs_num))]),e("div",{staticClass:"introduction"},[t._v("测验数")])]),e("div",[e("svg-icon",{attrs:{"icon-file-name":"TII-4"}})],1)])])])])],1)])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"Main-content-left"},[e("div",{staticClass:"up"},[e("div",{staticClass:"up-inner",attrs:{id:"platform_top_echart"}})]),e("div",{staticClass:"down"},[e("div",{staticClass:"down-inner",attrs:{id:"platform_bottom_echart"}})])])}],o=s(822),n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"two"},[t._m(0),e("div",{staticClass:"two-echart"},[e("div",{staticClass:"farther-two-Left-progress"},t._l(t.ProgressData,(function(s){return e("div",{key:s.name,staticClass:"two-Left-progress"},[e("el-progress",{attrs:{"stroke-width":13,percentage:s.tage,"show-text":!1}}),e("div",{staticClass:"Parttext"},[e("span",[t._v(t._s(s.name))]),e("span",[t._v(t._s(10*s.tage))])])],1)})),0),e("div",{staticClass:"two-right-echart",attrs:{id:"two-right-echart"}})])])])},r=[function(){var t=this,e=t._self._c;return e("div",[e("span",[t._v("活动资源")])])}],l=s(5114),c={name:"SchoolActivityResourcesEchart",data(){return{ProgressData:[{name:"资源数",tage:25,key:"resource_num"},{name:"讨论区数",tage:15,key:"activity_num"},{name:"作业数",tage:30,key:"assigns_num"},{name:"测验数",tage:30,key:"quizs_num"}],sectorData:[],ceshi:2}},methods:{getTwoRightECharts(){},async getSectorData(){let t=await(0,l.A)();this.sectorData=t.college_data,console.log("result",t),console.log("sectorData",this.sectorData),this.$nextTick((function(){this.getTwoRightECharts()})),this.ProgressData.forEach(((e,s,a)=>{a[s].tage=t.college_data[e.key]/10||0}));var e=this.$echarts.init(document.getElementById("two-right-echart"),null);e.setOption({tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},color:["#F93A0B","#1D92DF","#D653C1","#3D4BCB"],series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:this.sectorData.resource_num},{value:this.sectorData.activity_num},{value:this.sectorData.assigns_num},{value:this.sectorData.quizs_num}]}]}),window.addEventListener("resize",(function(){e.resize()}))}},mounted(){this.getSectorData()}},u=c,d=s(1001),v=(0,d.Z)(u,n,r,!1,null,"77b35ef8",null),m=v.exports,h={name:"SchoolProfile",data(){return{num:3,inputname:"",inputschool:"",college_data:[]}},components:{SearchInput:o.Z,SchoolActivityResourcesEchart:m},mounted(){this.getEChartsbottom(),this.getEChartstop(),this.$bus.$on("sendTermData",(t=>{this.college_data=t,console.log("sendTermData",this.college_data)}))},methods:{getInput(t,e){console.log("收到的inputname为",t),this.inputname=t,this.inputschool=e},getEChartstop(){var t=this.$echarts.init(document.getElementById("platform_top_echart"),null);let e;t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["教师活跃度","学生活跃度"]},xAxis:[{type:"category",data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],splitLine:{show:!0},axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"数量",min:0,max:60,interval:5,axisLabel:{formatter:"{value} "}},{axisLabel:{formatter:""}}],color:["#86BC93","#8EC6ED"],series:[{name:"教师活跃度",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(t){return t}},data:[39,46.9,58,30.2,55.6,38.7,28.6,52.2,15.6,19,26.4,42.3],smooth:!0,itemStyle:{lineStyle:{color:"#86BC93",width:6}}},{name:"学生活跃度",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(t){return t}},data:[34,41.9,48,20.2,50.6,35.7,23.6,56.2,17.6,29,46.4,32.3],smooth:!0,itemStyle:{lineStyle:{color:"#8EC6ED",width:6}}}]}),window.onresize=function(){e&&clearTimeout(e),e=setTimeout((()=>{t.resize()}),500)}},getEChartsbottom(){var t=this.$echarts.init(document.getElementById("platform_bottom_echart"),null);t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["教师人数","学生人数","教师活跃度","学生活跃度"]},xAxis:[{type:"category",data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],splitLine:{show:!0},axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"人数",min:0,max:60,interval:5,axisLabel:{formatter:"{value} "}},{type:"value",name:"活跃度",min:0,max:60,interval:5,axisLabel:{formatter:""}}],color:["#0095FF","#5470C6","#86BC93","#8EC6ED"],series:[{name:"教师人数",type:"bar",tooltip:{valueFormatter:function(t){return t}},data:[39,46.9,58,30.2,55.6,38.7,28.6,52.2,15.6,19,26.4,42.3]},{name:"学生人数",type:"bar",tooltip:{valueFormatter:function(t){return t}},data:[34,41.9,48,20.2,50.6,35.7,23.6,56.2,17.6,29,46.4,32.3]},{name:"教师活跃度",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(t){return t}},data:[39,46.9,58,30.2,55.6,38.7,28.6,52.2,15.6,19,26.4,42.3],smooth:!0,itemStyle:{lineStyle:{color:"#86BC93",width:6}}},{name:"学生活跃度",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(t){return t}},data:[34,41.9,48,20.2,50.6,35.7,23.6,56.2,17.6,29,46.4,32.3],smooth:!0,itemStyle:{lineStyle:{color:"#8EC6ED",width:6}}}]}),window.addEventListener("resize",(function(){t.resize()}))}}},p=h,g=(0,d.Z)(p,a,i,!1,null,"63f2b60e",null),_=g.exports},5114:function(t,e,s){s.d(e,{A:function(){return o},U:function(){return i}});var a=s(4471);function i(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_platform_overview"}})}function o(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_academic_statistics"}})}},6440:function(t,e,s){s.d(e,{A6:function(){return i},Wl:function(){return n},aj:function(){return r},ef:function(){return o}});var a=s(4471);function i(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_teacher_list",pagesize:64,role:1,user:480}})}function o(t){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{catid:t,wsfunction:"block_data_screen_academic_statistics"}})}function n(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_get_college"}})}function r(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_college_detail ",catid:12}})}}}]);
//# sourceMappingURL=203.a30b364a.js.map