(this["webpackJsonpdiary-app"]=this["webpackJsonpdiary-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(31)},20:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(20),a(5)),i=(a(26),a(13)),l=function(e){var t=e.width,a=e.height,n=e.color;return r.a.createElement("div",{style:{position:"absolute",backgroundColor:n,height:a,width:t,margin:"0 0 0 -18px"}})},m=(a(27),function(e){var t=e.text,a=e.color;return r.a.createElement("div",{className:"commentBlock"},r.a.createElement("div",{className:"comment"},r.a.createElement(l,{width:"50px",height:"50px",color:a}),r.a.createElement("p",null,t)))}),u=function(e){var t=e.color,a=e.width;return r.a.createElement("hr",{style:{backgroundColor:t,height:.5,width:a,marginTop:0,marginBottom:0}})},d=(a(28),function(e){var t=e.comments,a=e.taskNumber,c=e.addComment,o={},s=["#FF8A00","#47568D"],i=Object(n.useRef)(null);return Object(n.useEffect)((function(){i.current.scrollIntoView({behavior:"smooth"})}),[t]),r.a.createElement("div",{className:"commentsContainer"},r.a.createElement("h2",null,r.a.createElement("i",null,"Comments ",r.a.createElement("span",{id:"commentsNumber"},"#",a))),t.map((function(e,t){return r.a.createElement("div",{key:t},t>0&&r.a.createElement(u,{width:"92%"}),r.a.createElement(m,{text:e,color:s[t%2]}))})),r.a.createElement("div",{className:"newCommentBlock"},r.a.createElement("div",{className:"comment",ref:i},r.a.createElement(l,{width:"50px",height:"50px",color:"#E6E6E6"}),r.a.createElement("textarea",{name:"textarea",rows:"3",autoFocus:"autofocus",onKeyDown:function(e){var t=e.target.value;13===e.keyCode&&e.ctrlKey&&t&&(c(t),o.textarea.value="")},onChange:function(e){o[e.target.name]=e.target}}))))}),p=(a(29),function(e){var t=e.id,a=e.taskName,n=e.isFocused,c=e.commentsNumber,o=e.deleteTask,s=e.setActiveTask;return r.a.createElement("div",{className:"itemBlock"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{id:"redFocus"},n&&r.a.createElement(l,{width:"5px",height:"55px",color:"#FF2C5F"})),r.a.createElement("h6",{onClick:function(){return s(t)}},a,c>0&&r.a.createElement("p",{id:"comments",className:"badge badge-pill"},c)),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(t)}},"Delete")))}),f="TaskList@addTask",k=(a(30),Object(s.b)((function(e){return{tasks:e}}),(function(e){return{addTask:function(t){e({type:f,payload:t})},deleteTask:function(t){e({type:"TaskList@deleteTask",payload:t})},setActiveTask:function(t){e({type:"TaskList@setActiveTask",payload:t})},addComment:function(t){e({type:"TaskList@addComment",payload:t})},addTasksFromLocalStorage:function(t){e({type:"TaskList@addTasksFromLocalStorage",payload:t})}}}))((function(e){var t=e.addTask,a=e.addTasksFromLocalStorage,c=e.deleteTask,o=e.setActiveTask,s=e.addComment,l=e.tasks,m=Object(n.useState)(""),f=Object(i.a)(m,2),k=f[0],E=f[1];Object(n.useEffect)((function(){var e=localStorage.getItem("tasks");e&&a(JSON.parse(e))}),[a]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(l))}));return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,r.a.createElement("i",null,"Items")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),k.length){var a={id:Date.now(),taskName:k};t(a),E("")}}},r.a.createElement("input",{className:"form-control",onChange:function(e){var t=e.target.value;E(t)},value:k,placeholder:"Type name here..."}),r.a.createElement("button",{className:"btn btn-success"},"Add new")),l&&l.map((function(e,t){var a=e.id,n=e.taskName,i=e.isFocused,l=e.comments;return r.a.createElement("div",{key:a},r.a.createElement(p,{id:a,taskName:n,isFocused:i,commentsNumber:l.length,deleteTask:c,setActiveTask:o}),r.a.createElement(u,{width:"90%"}),i&&r.a.createElement(d,{comments:l,taskNumber:t+1,addComment:s}))}))))}))),E=a(3),h=a(11),v=a(14),b=a(12);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=Object(E.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case f:return e.concat({id:n.id,taskName:n.taskName,isFocused:!1,comments:[]});case"TaskList@deleteTask":return e.filter((function(e){return e.id!==n}));case"TaskList@setActiveTask":return e.map((function(e){return e=e.id===n?y({},e,{isFocused:!0}):y({},e,{isFocused:!1})}));case"TaskList@addComment":return e.map((function(e){return e.isFocused&&(e=y({},e,{comments:[].concat(Object(v.a)(e.comments),[n])})),e}));case"TaskList@addTasksFromLocalStorage":return n;default:return e}}),[],Object(h.composeWithDevTools)(Object(E.applyMiddleware)())),O=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},"DIARY APP",r.a.createElement("p",null,"Keep your tasks here")),r.a.createElement(s.a,{store:T},r.a.createElement(k,null)))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3c464ad3.chunk.js.map