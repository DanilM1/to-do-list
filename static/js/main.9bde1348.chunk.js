(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{23:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(10),r=a(3),o=a(12),i=a(11),l=a(5),k=a(6),u=a(8),b=a(7),d=a(0),h=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={task:""},t.onWriteNewTask=function(e){var a=e.target.value;t.props.onWriteNewTask(a),t.setState({task:a})},t.onAddNewTask=function(){t.props.onAddNewTask(t.state.task),t.setState((function(t){t.task;return{task:""}}))},t}return Object(k.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"form-floating",children:[Object(d.jsx)("textarea",{className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"},value:this.state.task,onChange:this.onWriteNewTask}),Object(d.jsx)("label",{htmlFor:"floatingTextarea2",children:"Write your new task:"})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.onAddNewTask,children:"Add new task"})]})}}]),a}(s.a.Component),j=a(13),p=function(t){var e=t.task,a=t.checked,n=t.pensil,s=t.onWriteChangeTask,c=t.onFixationTask,r=t.onDeleteTask;return Object(d.jsxs)("div",{className:"list-group",children:[Object(d.jsxs)("label",{className:"list-group-item",children:[Object(d.jsx)("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:a,onClick:c}),e]}),Object(d.jsx)("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups",children:Object(d.jsxs)("div",{className:"btn-group me-2",role:"group","aria-label":"Second group",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-secondary",style:{display:n},onClick:s,children:Object(d.jsx)("i",{className:"bi bi-pencil"})}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:r,children:Object(d.jsx)("i",{className:"bi bi-trash"})})]})})]})},f=["key"],x=function(t){var e=t.tasks,a=t.onWriteChangeTask,n=t.onFixationTask,s=t.onDeleteTask,c=e.map((function(t){var e=t.key,c=Object(j.a)(t,f);return Object(d.jsx)(p,{task:c.task,checked:c.checked,pensil:c.pensil,onWriteChangeTask:function(){return a(e)},onFixationTask:function(){return n(e)},onDeleteTask:function(){return s(e)}},e)}));return Object(d.jsx)(d.Fragment,{children:c})},O=(a(23),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={task:"",tasks:[{key:1,task:"one",checked:"checked",pensil:"none"},{key:2,task:"two",checked:"",pensil:""}],max:0},t.onWriteNewTask=function(e){t.setState({task:e})},t.onAddNewTask=function(e){var a=0;if(0===t.state.max){var n,s=Object(i.a)(t.state.tasks);try{for(s.s();!(n=s.n()).done;){var c=n.value;c.key>a&&(a=c.key)}}catch(r){s.e(r)}finally{s.f()}t.setState((function(t){return{max:a+1}}))}t.setState((function(t){var a=t.tasks,n=t.max;return{max:n+1,tasks:[].concat(Object(o.a)(a),[{key:n,task:e,checked:"",pensil:""}])}}))},t.onWriteChangeTask=function(e){t.setState((function(a){return{tasks:a.tasks.map((function(a){return a.key===e?Object(r.a)(Object(r.a)({},a),{},{task:t.state.task}):a}))}}))},t.onFixationTask=function(e){t.setState((function(t){return{tasks:t.tasks.map((function(t){return t.key===e?Object(r.a)(Object(r.a)({},t),{},{checked:""===t.checked?"checked":"",pensil:""===t.pensil?"none":""}):t}))}}))},t.onDeleteTask=function(e){t.setState((function(t){return{tasks:t.tasks.filter((function(t){return t.key!==e}))}}))},t}return Object(k.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onWriteNewTask:this.onWriteNewTask,onAddNewTask:this.onAddNewTask}),Object(d.jsx)("h1",{children:"Your tasks list"}),Object(d.jsx)(x,{tasks:this.state.tasks,onWriteChangeTask:this.onWriteChangeTask,onFixationTask:this.onFixationTask,onDeleteTask:this.onDeleteTask})]})})}}]),a}(s.a.Component)),m=document.getElementById("root");Object(c.createRoot)(m).render(Object(d.jsx)(n.StrictMode,{children:Object(d.jsx)(O,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9bde1348.chunk.js.map