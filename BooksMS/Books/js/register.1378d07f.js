(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={register:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Books/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([2,"chunk-vendors"]),a()})({"0400":function(t,e,a){t.exports=a.p+"img/007.175a3bf1.jpg"},"0eb0":function(t,e,a){t.exports=a.p+"img/006.7e5fdb4e.jpg"},2:function(t,e,a){t.exports=a("8fa2")},"28fe":function(t,e,a){t.exports=a.p+"img/002.627c8eb8.jpg"},"3b77":function(t,e,a){t.exports=a.p+"img/003.715534c0.jpg"},"6b95":function(t,e,a){t.exports=a.p+"img/email.cd549b35.png"},"7c04":function(t,e,a){t.exports=a.p+"img/logo.d6a9af2d.png"},"8fa2":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("5c96"),a("0fae"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{staticClass:"clear",attrs:{id:"main"}},[r("div",{staticClass:"main_left l"},[r("div",[r("a",{attrs:{href:"#"},on:{click:t.changeAvatar}},[r("img",{attrs:{src:t.avatar}})]),r("h1",[t._v("默认头像")])])]),r("div",{staticClass:"main_right l"},[r("h2",[t._v("用户注册")]),r("div",{staticClass:"main_input"},[r("div",[r("img",{attrs:{src:a("a2c8"),alt:"用户名"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("div",[r("img",{attrs:{src:a("b655"),alt:"密码"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",[r("img",{attrs:{src:a("9ae9"),alt:"电话"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",placeholder:"tel"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),r("div",[r("img",{attrs:{src:a("f79c"),alt:"QQ号码"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.qq,expression:"qq"}],attrs:{type:"text",placeholder:"qq"},domProps:{value:t.qq},on:{input:function(e){e.target.composing||(t.qq=e.target.value)}}})]),r("div",[r("img",{attrs:{src:a("6b95"),alt:"邮箱"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"button"},[r("input",{attrs:{type:"button",value:"注册"},on:{click:t.register}})])])])]),t.isShow?r("div",{staticClass:"avatarBase"},[r("h3",{staticStyle:{"text-align":"center"}},[t._v("系统备选头像")]),r("ul",[r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/002.627c8eb8.jpg"}}},[r("img",{attrs:{src:a("28fe")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/003.715534c0.jpg"}}},[r("img",{attrs:{src:a("3b77")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/004.c1c08fab.jpg"}}},[r("img",{attrs:{src:a("d1b8")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/005.a3dd2691.jpg"}}},[r("img",{attrs:{src:a("e0b4")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/006.7e5fdb4e.jpg"}}},[r("img",{attrs:{src:a("0eb0")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/007.175a3bf1.jpg"}}},[r("img",{attrs:{src:a("0400")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/008.196d6127.jpg"}}},[r("img",{attrs:{src:a("c4d2")}})])]),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.avatar="../../img/icon.jpg"}}},[r("img",{attrs:{src:"/img/icon.jpg"}})])])])]):t._e()])}),i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[r("img",{staticClass:"logo1",attrs:{src:a("7c04")}}),t._v("图书管")])])}],o=(a("ac1f"),a("5319"),{data:function(){return{username:"",password:"",tel:"",qq:"",email:"",avatar:"../../img/icon.jpg",isShow:!1}},methods:{changeAvatar:function(){this.isShow=!0},register:function(){var t=this;""==this.username||""==this.password||""==this.tel||""==this.qq||""==this.email?alert("请您确保完整填写信息再注册！"):this.$axios.post("/BooksMS/api/queryUsername",{username:this.username}).then((function(e){var a=e.data[2];console.log(a),1==a?t.$axios.post("/BooksMS/api/regist",{username:t.username,password:t.password,user_tel:t.tel,user_qq:t.qq,user_mail:t.email,user_avatar:t.avatar}).then((function(t){var e=t.data[2];console.log(e),1==e?(alert("恭喜您注册成功！立即前往登录。"),window.location.replace("login.html")):alert("由于系统繁忙，请您稍后注册！")})).catch((function(t){console.log(t)})):alert("该用户名已被注册，请另起用户名！")})).catch((function(t){alert("请求失败！"),console.log(t)}))}}}),s=o,c=(a("b93f"),a("2877")),l=Object(c["a"])(s,n,i,!1,null,null,null),u=l.exports,p=a("bc3a"),f=a.n(p);r["default"].prototype.$axios=f.a,r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(u)}}).$mount("#register")},"9ae9":function(t,e,a){t.exports=a.p+"img/dianhua.24eb7de6.png"},a2c8:function(t,e,a){t.exports=a.p+"img/yonghu1.2daaa502.png"},b655:function(t,e,a){t.exports=a.p+"img/suo1.29c5ede8.png"},b93f:function(t,e,a){"use strict";var r=a("e582"),n=a.n(r);n.a},c4d2:function(t,e,a){t.exports=a.p+"img/008.196d6127.jpg"},d1b8:function(t,e,a){t.exports=a.p+"img/004.c1c08fab.jpg"},e0b4:function(t,e,a){t.exports=a.p+"img/005.a3dd2691.jpg"},e582:function(t,e,a){},f79c:function(t,e,a){t.exports=a.p+"img/qie.d7315e8d.png"}});
//# sourceMappingURL=register.1378d07f.js.map