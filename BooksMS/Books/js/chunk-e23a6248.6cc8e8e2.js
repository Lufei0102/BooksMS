(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e23a6248"],{"4cca":function(e,t,r){},"7be3":function(e,t,r){"use strict";var a=r("4cca"),n=r.n(a);n.a},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,o=Function.prototype,s=o.toString,l=/^\s*function ([^ (]*)/,i="name";!a||i in o||n(o,i,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},fc80:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"adminLogin"},[r("el-row",{staticStyle:{"margin-top":"100px"}},[r("el-col",{attrs:{span:8}}),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card content-margin"},[r("div",{staticStyle:{background:"#417690"},attrs:{slot:"header"},slot:"header"},[e._v(" BooksMS后台管理系统 ")]),r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[r("el-form-item",{attrs:{label:"用户名:",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"密码:",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{staticStyle:{"text-align":"center"}},[r("el-button",{staticStyle:{background:"#609ab6",border:"none"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登陆")])],1)],1)],1)],1),r("el-col",{attrs:{span:8}})],1)],1)},n=[],o=(r("b0c0"),{data:function(){return{ruleForm:{name:"",password:""},rules:{name:[{required:!0,message:"请输入用户名 ",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{onSubmit:function(){var e=this;this.$axios.post("/api/adminlogin",{admin_number:this.ruleForm.name,admin_pwd:this.ruleForm.password}).then((function(t){var r=t.data[2];console.log(r),1==r?e.$router.push({name:"adminHome",query:{getAdmin:e.ruleForm.name}}):alert("密码错误！请重新登录")})).catch((function(e){console.log(e),alert("请求失败！")}))}}}),s=o,l=(r("7be3"),r("2877")),i=Object(l["a"])(s,a,n,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-e23a6248.6cc8e8e2.js.map