"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[177],{822:function(e,t,s){s.d(t,{Z:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-input"},[t("div",{staticClass:"top"},[t("el-select",{attrs:{placeholder:"选择学期"},model:{value:e.term,callback:function(t){e.term=t},expression:"term"}},e._l(e.termOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.title,value:e.title}})})),1),t("el-select",{attrs:{placeholder:"选择学院"},model:{value:e.college,callback:function(t){e.college=t},expression:"college"}},e._l(e.collegeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.name,value:e.name}})})),1),t("div",{staticClass:"search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mingzi,expression:"mingzi"}],staticClass:"input",attrs:{type:"text",placeholder:"搜索......"},domProps:{value:e.mingzi},on:{input:function(t){t.target.composing||(e.mingzi=t.target.value)}}}),t("button",{staticClass:"search-button",on:{click:e.sendInput}},[t("svg-icon",{attrs:{"icon-file-name":"S1"}})],1)])],1)])},n=[],i=(s(7658),s(6440)),r={name:"SearchInput",props:["getInput"],data(){return{mingzi:"",xuexiao:"",name:"zi",age:"18",termOptions:[],collegeOptions:[],term:[],college:[]}},mounted(){this.getPlatformTermlist(),this.getPlatformCollegelist(),this.getCollegeDetail()},beforeDestroy(){this.$bus.$off("getTermData")},methods:{sendInput(){this.getInput(this.mingzi,this.xuexiao)},async getPlatformTermlist(){let e=await(0,i.ef)();console.log("res",e),this.$bus.$emit("sendTermData",e.college_data),e.effective.forEach((e=>{this.termOptions.push(e)}))},async getPlatformCollegelist(){let e=await(0,i.Wl)();this.$bus.$emit("getCollegeData",e.college),e.college.forEach((e=>{this.collegeOptions.push(e)}))},async getCollegeDetail(){let e=await(0,i.aj)();console.log("results66",e)}}},l=r,o=s(1001),c=(0,o.Z)(l,a,n,!1,null,"dbbe7e3e",null),u=c.exports},4177:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"top-frist"},[t("SearchInput",{staticClass:"allteacher-SearchInput",attrs:{getInput:e.getInput}})],1),t("div",{staticClass:"bottom"},[t("TeacherBoxArr",{attrs:{inputname:e.inputname,inputschool:e.inputschool}})],1)])},n=[],i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"bottom-big"},e._l(e.filmtu.slice((e.currentPages-1)*e.pageSize,e.currentPages*e.pageSize),(function(s){return t("div",{key:s.teacher_id,staticClass:"news-box-teacher"},[t("div",{staticClass:"box-upper"},[t("router-link",{attrs:{to:{path:"/TeacherDetails",query:{id:s.teacher_id,name:s.name,url:s.url,dept:s.dept}}}},[t("img",{attrs:{src:s.url,alt:""}})]),t("div",{staticClass:"name"},[t("span",[e._v(e._s(s.name))])]),t("div",{staticClass:"college"},[t("span",[e._v(e._s(s.dept.substr(0,10)))])])],1),t("div",{staticClass:"box-down-teacher"},[t("div",{staticClass:"offering-courses"},[t("svg-icon",{attrs:{"icon-file-name":"KSKC"}}),t("p",[e._v("开设教程数")]),t("p",[e._v(e._s(s.course_num))])],1),t("div",{staticClass:"offering-courses Average-access"},[t("svg-icon",{attrs:{"icon-file-name":"PJFW"}}),t("p",[e._v("平均访问数")]),t("p",[e._v(e._s(s.student_num))])],1),t("div",{staticClass:"offering-courses"},[t("svg-icon",{attrs:{"icon-file-name":"ZYHD"}}),t("p",[e._v("资源活动数")]),t("p",[e._v(e._s(s.res_avt_num))])],1)])])})),0),t("div",{staticClass:"page-change"},[t("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper",total:40},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},r=[],l={name:"TeacherBoxArr",props:["inputschool","inputname"],data(){return{currentPages:1,pageSize:15,KeyTeacherName:"",TeacherCards:"",mtu:[],num:2}},methods:{handleSizeChange(e){this.pageSize=e},handleCurrentChange(e){this.currentPages=e,console.log("收到的val为",e)},getmtu(){this.$bus.$on("getmtu",(e=>{console.log("我是List组件,收到测试数据cs:",e.teacher_list),this.mtu=e.teacher_list,this.mtu.forEach(((e,t,s)=>{""==s[t].dept&&(s[t].dept="暂未填写学院")}))}))}},mounted(){this.getmtu()},computed:{filmtu(){return this.mtu.filter((e=>-1!==e.name.indexOf(this.inputname)))}}},o=l,c=s(1001),u=(0,c.Z)(o,i,r,!1,null,"95d3360c",null),p=u.exports,h=s(822),m=s(6440),g={name:"AllTeacher",data(){return{inputname:"",inputschool:""}},methods:{getInput(e,t){console.log("收到的inputname为",e),console.log("收到的inputschool为",t),this.inputname=e,this.inputschool=t},async getMtuTeacher(){let e=await(0,m.A6)();console.log("result11",e),this.$bus.$emit("getmtu",e)}},mounted(){this.getMtuTeacher()},components:{SearchInput:h.Z,TeacherBoxArr:p}},d=g,f=(0,c.Z)(d,a,n,!1,null,"4db99aec",null),v=f.exports},6440:function(e,t,s){s.d(t,{A6:function(){return n},Wl:function(){return r},aj:function(){return l},ef:function(){return i}});var a=s(4471);function n(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_teacher_list",pagesize:64,role:1,user:480}})}function i(e){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{catid:e,wsfunction:"block_data_screen_academic_statistics"}})}function r(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_get_college"}})}function l(){return(0,a.Z)({url:"/webservice/rest/server.php",method:"post",data:{wsfunction:"block_data_screen_college_detail ",catid:12}})}}}]);
//# sourceMappingURL=177.3f9516d3.js.map