(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/TaskList/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"076e":function(t,e,s){"use strict";s("c857")},"0f92":function(t,e,s){"use strict";s("e5ab")},"28dd":function(t,e,s){"use strict";s("cfbd")},"3fbf":function(t,e,s){t.exports=s.p+"img/logo-header.0ce6e5f4.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i=(s("5c0b"),s("2877")),r={},c=Object(i["a"])(r,o,n,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),s("section",{staticClass:"login"},[s("div",{staticClass:"login__top"}),s("div",{staticClass:"login__bottom _container"},[t._m(0),s("div",{staticClass:"login__bottom-right"},[s("LoginForm",{staticClass:"login-form-p"})],1)])]),s("Footer",{staticClass:"_container"})],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login__bottom-left"},[s("h1",{staticClass:"login__title"},[t._v("Welcome to "),s("br"),t._v(" Business Analytics Online")]),s("p",{staticClass:"login__paragraph"},[s("span",{staticClass:"login__main-word"},[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's ")]),s("ul",{staticClass:"login__list"},[s("li",[s("h3",[t._v("Interactive Reporting")]),s("p",[t._v(" In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities. ")])]),s("li",[s("h3",[t._v("Automated data updates")]),s("p",[t._v(" The application automatically updates and structures the data in just 60 seconds, saving you time and money. ")])]),s("li",[s("h3",[t._v("Data Security")]),s("p",[t._v(" The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality. ")])])])])}],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"loginForm"}},[s("div",{staticClass:"login-form"},[s("label",{staticClass:"login-form__label",attrs:{for:"name"}},[s("span",{staticClass:"login-form__label-text"},[t._v(" Name ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"login-form__input",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),""===t.username?s("span",{staticClass:"login-form__error"},[t._v(" Enter name ")]):t._e()]),s("label",{staticClass:"login-form__label",attrs:{for:"password"}},[s("span",{staticClass:"login-form__label-text"},[t._v(" Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-form__input",attrs:{placeholder:"Enter you password",type:"password"},domProps:{value:t.password},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.authorization()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),""===t.password?s("span",{staticClass:"login-form__error"},[t._v(" Enter password ")]):t._e()]),s("button",{staticClass:"login-form__btn",on:{click:function(e){return t.authorization()}}},[t._v("LOGIN")]),t._m(0),s("button",{staticClass:"login-form__register-btn"},[t._v("Register now")])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:"login-form__forgot-link",attrs:{href:""}},[t._v(" Forgot Password")])])}],h={name:"LoginForm",data:function(){return{password:"",username:"",registeredUsers:{user:"admin",password:"12345"}}},props:{},emits:{},methods:{authorization:function(){this.password===this.registeredUsers.password&&this.username===this.registeredUsers.user&&(this.$router.push("Todo").then((function(){return window.scrollTo(0,0)})),localStorage.isAuthorized=!0,localStorage.username=this.username),this.$router.push("Todo").then((function(){return window.scrollTo(0,0)}))}}},_=h,v=(s("5d31"),Object(i["a"])(_,p,m,!1,null,null,null)),g=v.exports,k={name:"Login",components:{LoginForm:g},data:function(){return{}},computed:{},methods:{}},b=k,y=(s("d58c"),Object(i["a"])(b,d,f,!1,null,"c852bc7e",null)),C=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todolist"},[void 0===t.isAuthorized?a("div",{staticClass:"not-authorized-text"},[a("p",[t._v("You are not authorized. Use the authorization link:")]),t._v(" "),a("router-link",{attrs:{to:{name:"Login",hash:"#loginForm"}}},[t._v(" Login ")])],1):t._e(),"true"===t.isAuthorized?a("div",[a("div",{staticClass:"todolist__top"},[a("img",{staticClass:"todolist__logo",attrs:{src:s("954b"),alt:""}}),a("div",{staticClass:"todolist__list-area"},[a("h1",{staticClass:"todolist__title"},[t._v("Thank you "+t._s(t.username)+" !")]),a("ul",{staticClass:"todolist__taskList"},t._l(this.tasks,(function(e,s){return a("TaskItem",{key:e.key,attrs:{index:s,isLast:Boolean(s===t.tasks.length-1),task:e},on:{addEmptyTask:function(e){t.addEmptyTask()},delTask:function(s){return t.removTask(e)}}})})),1)])]),a("div",{staticClass:"todolist__bottom"},[a("button",{staticClass:"ex-logout",on:{click:function(e){return t.clearLS()}}},[t._v("logout")])])]):t._e()])},x=[],T=(s("b680"),s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"task"},[s("div",{staticClass:"task__row"},[s("span",{staticClass:"task__index"},[t._v(" "+t._s(t.index+1)+" ")]),s("label",{staticClass:"task__text-lable"},[t.isLast?t._e():s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.checked,expression:"task.checked"}],staticClass:"task__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.task.checked)?t._i(t.task.checked,null)>-1:t.task.checked},on:{change:function(e){var s=t.task.checked,a=e.target,o=!!a.checked;if(Array.isArray(s)){var n=null,i=t._i(s,n);a.checked?i<0&&t.$set(t.task,"checked",s.concat([n])):i>-1&&t.$set(t.task,"checked",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.task,"checked",o)}}}),t.isLast?t._e():s("span",{staticClass:"spn-replace-checkbox"}),t.task.isEditing?t._e():s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.task,expression:"task.task"}],staticClass:"task__text-textarea",attrs:{oninput:'this.style.height = "";this.style.height = this.scrollHeight + "px"',type:"text",placeholder:"Enter you task"},domProps:{value:t.task.task},on:{input:[function(e){e.target.composing||t.$set(t.task,"task",e.target.value)},t.addEmptyTaskAfterInput]}}),t.isLast?t._e():s("button",{staticClass:"btn",on:{click:function(e){return t.deleteTask()}}},[t._v("X")])])]),s("hr")])}),E=[],O=(s("a9e3"),{name:"TaskItem",data:function(){return{}},props:{task:Object,index:Number,isLast:Boolean},emits:{delTask:null,addEmptyTask:null},methods:{deleteTask:function(){this.$emit("delTask")},addEmptyTask:function(){this.$emit("addEmptyTask")},addEmptyTaskAfterInput:function(){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.addEmptyTask()}),600)}}}),L=O,A=(s("28dd"),Object(i["a"])(L,T,E,!1,null,"8c903364",null)),$=A.exports,j={components:{TaskItem:$},mounted:function(){this.isAuthorized=localStorage.isAuthorized,this.username=localStorage.username,this.addTask()},data:function(){return{isAuthorized:void 0,username:void 0,newTask:void 0,tasks:[],editedTask:void 0,tasktasktitle:void 0}},methods:{clearLS:function(){localStorage.removeItem("isAuthorized"),localStorage.removeItem("username"),this.$router.push("Login")},addTask:function(){this.tasks.push({key:Math.random().toFixed(10),task:this.newTask,checked:!1}),this.newTask=""},removTask:function(t){this.tasks.splice(this.tasks.indexOf(t),1)},addEmptyTask:function(){void 0!==this.tasks[this.tasks.length-1]&&""!==this.tasks[this.tasks.length-1].task&&this.addTask()}},computed:{},watch:{}},P=j,z=(s("076e"),Object(i["a"])(P,w,x,!1,null,"b03d491e",null)),S=z.exports;a["a"].use(u["a"]);var I=[{path:"/",redirect:{name:"Login"}},{path:"/login",name:"Login",component:C},{path:"/todo",name:"Todo",component:S}],F=new u["a"]({mode:"history",base:"/TaskList/",routes:I,scrollBehavior:function(t){if(t.hash)return{selector:t.hash,behavior:"smooth"}}}),M=F,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header__top "}),a("div",{staticClass:"header__bottom _container"},[a("img",{staticClass:"header__logo",attrs:{src:s("3fbf"),alt:""}})])])}],R=(s("0f92"),{}),U=Object(i["a"])(R,N,B,!1,null,"f5bb599e",null),H=U.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__top"},[a("img",{staticClass:"footer__logo",attrs:{src:s("7a30"),alt:""}}),a("ul",{staticClass:"footer__list-items"},[a("li",[a("a",{attrs:{href:""}},[t._v("Terms & Conditions")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Privacy")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Notice at Collection")])]),a("li",[a("a",{attrs:{href:""}},[t._v("CA Privacy Hub")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Contact Us")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Sitemap")])])])]),a("hr",{staticClass:"footer__line"}),a("p",{staticClass:"footer__copyright-text"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.")])])}],J=(s("ac15"),{}),q=Object(i["a"])(J,D,G,!1,null,"c664169a",null),K=q.exports;a["a"].component("Header",H),a["a"].component("Footer",K),a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"5d31":function(t,e,s){"use strict";s("6c45")},"6c45":function(t,e,s){},"6da5":function(t,e,s){},"7a30":function(t,e,s){t.exports=s.p+"img/logo-footer.7f7bb05b.svg"},"954b":function(t,e,s){t.exports=s.p+"img/logo-todo.afc396c2.svg"},"9c0c":function(t,e,s){},"9d00":function(t,e,s){},ac15:function(t,e,s){"use strict";s("9d00")},c857:function(t,e,s){},cfbd:function(t,e,s){},d58c:function(t,e,s){"use strict";s("6da5")},e5ab:function(t,e,s){}});
//# sourceMappingURL=app.8c9f649f.js.map