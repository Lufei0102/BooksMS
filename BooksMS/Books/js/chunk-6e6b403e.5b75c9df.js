(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6b403e"],{"316e":function(t,a,n){"use strict";var e=n("458d"),i=n.n(e);i.a},"458d":function(t,a,n){},a82f:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"admin"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.adminList}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{prop:"admin_number",label:"管理员账号"}}),n("el-table-column",{attrs:{prop:"admin_pwd",label:"管理员密码"}}),n("el-table-column",{attrs:{prop:"admin_job",label:"管理员工作"}})],1)],1)},i=[],l={data:function(){return{adminList:[]}},created:function(){this.showadminList()},methods:{showadminList:function(){var t=this;this.$axios.get("/api/owAdmin").then((function(a){var n=a.data;console.log(n),t.adminList=n})).catch((function(t){console.log(t)}))}}},o=l,s=(n("316e"),n("2877")),c=Object(s["a"])(o,e,i,!1,null,"7596b7dc",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-6e6b403e.5b75c9df.js.map