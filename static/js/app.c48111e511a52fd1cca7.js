webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:{name:"dashboard",params:{}}}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]},n={name:"App",components:{Navbar:a("VU/8")(null,o,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=a("VU/8")(n,s,!1,null,null,null).exports,r=a("/ocq"),p=a("Sazm"),d=a.n(p),c=(a("3VHS"),d.a.initializeApp({apiKey:"AIzaSyBTil23zvJzCe6kvSHnFiVOhTjsC89HMJg",authDomain:"vuefs-tutorial-8f1dc.firebaseapp.com",databaseURL:"https://vuefs-tutorial-8f1dc.firebaseio.com",projectId:"vuefs-tutorial-8f1dc",storageBucket:"vuefs-tutorial-8f1dc.appspot.com",messagingSenderId:"940626997062"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[e._v("\n      Employees\n    ")]),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+":"+e._s(t.name)+"\n\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"new-employee",params:{}}}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[]},v=a("VU/8")(m,u,!1,null,null,null).exports,f={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;c.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(err)})}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{placeholder:"Employee ID#",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name",type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{placeholder:"Department",type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{placeholder:"Position",type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:{name:"dashboard",params:{}}}},[e._v("\n        Cancel\n      ")])],1)])])},staticRenderFns:[]},y=a("VU/8")(f,_,!1,null,null,null).exports,h={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push({name:"dashboard"})})})}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:{name:"dashboard",params:{}}}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")])],1),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)])},staticRenderFns:[]},g=a("VU/8")(h,C,!1,null,null,null).exports,w={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{placeholder:"Employee ID#",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name",type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{placeholder:"Department",type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{placeholder:"Position",type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:{name:"dashboard",params:{}}}},[e._v("\n        Cancel\n      ")])],1)])])},staticRenderFns:[]},E=a("VU/8")(w,b,!1,null,null,null).exports;i.a.use(r.a);var x=new r.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:y},{path:"/edit/:employee_id",name:"edit-employee",component:E},{path:"/:employee_id",name:"view-employee",component:g}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:x,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.c48111e511a52fd1cca7.js.map