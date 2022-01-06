(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{29:function(t,e,o){},30:function(t,e,o){"use strict";o.r(e);var n=o(2),i=o.n(n),a=o(11),r=o.n(a),c=o(17),d=o(10),s=o(12),l=o(13),u=o(4),h=o(18),p=o(16),j=o(14),b=o(15),m=o(0);var v=function(t){var e=t.item.date.toLocaleString("en-US",{month:"short"}),o=t.item.date.toLocaleString("en-US",{day:"2-digit"}),n=t.item.date.getFullYear();return Object(m.jsxs)("div",{className:"todo-item",children:[Object(m.jsxs)("div",{className:"todo-item_description",children:[Object(m.jsx)("input",{type:"checkbox",checked:t.item.completed,onChange:function(){return t.handleChange(t.item.id)}}),Object(m.jsx)("h5",{style:t.item.completed?{fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null,children:t.item.text})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{style:t.item.priority?{color:"#f2e35c",height:"32px",fontSize:"20px",cursor:"pointer"}:{color:"#ccc",cursor:"pointer"},onClick:function(){return t.handlePriority(t.item.id)},children:"\u2605"}),Object(m.jsx)(j.a,{icon:b.a,style:{cursor:"pointer"},className:"delete",type:"submit",value:"delete",onClick:function(){return t.handledel(t.item.id)}})]}),Object(m.jsxs)("div",{className:"todo-date",children:[Object(m.jsx)("div",{className:"todo-date__month",children:e}),Object(m.jsx)("div",{className:"todo-date__year",children:n}),Object(m.jsx)("div",{className:"todo-date__day",children:o})]})]})},y=[{id:1,text:"Take out the trash",date:new Date("2021,12,12 00:00"),completed:!0,priority:!0},{id:2,text:"Grocery shopping",date:new Date("2021,12,13 00:00"),completed:!1,priority:!0},{id:3,text:"Clean gecko tank",date:new Date("2021,12,10 00:00"),completed:!1,priority:!0},{id:4,text:"Mow lawn",date:new Date("2021,12,22 00:00"),completed:!0,priority:!1},{id:5,text:"Catch up on Arrested Development",date:new Date("2021,12,31 00:00"),completed:!1,priority:!0}],O=o(9),f=function(t){var e=new Date,o=e.getMonth()+1,i=e.getFullYear()+"-"+o+"-"+e.getDate(),a=Object(n.useState)(""),r=Object(O.a)(a,2),c=r[0],d=r[1],s=Object(n.useState)(i),l=Object(O.a)(s,2),u=l[0],h=l[1];return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o={text:c,date:new Date("".concat(u," 00:00"))};t.onSaveTodo(o),d(""),h(i)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Add a to-do",value:c,onChange:function(t){d(t.target.value)},required:!0}),Object(m.jsx)("input",{type:"date",value:u,min:"2021-01-01",onChange:function(t){h(t.target.value),console.log(u)}}),Object(m.jsx)("button",{type:"submit",children:" + "})]})},x=(o(29),function(t){Object(h.a)(o,t);var e=Object(p.a)(o);function o(){var t;return Object(s.a)(this,o),(t=e.call(this)).handleselect=function(e){"date"===e.target.value?t.setState((function(t){return{todos:t.todos.sort((function(t,e){return new Date(t.date)-new Date(e.date)})),optionsState:e.target.value}})):"priority"===e.target.value?t.setState((function(t){return{todos:t.todos.sort((function(t,e){return e.priority-t.priority})),optionsState:e.target.value}})):t.setState((function(t){return{todos:t.todos,optionsState:e.target.value}}))},t.saveNewTodo=function(e){var o=Object(d.a)(Object(d.a)({},e),{},{id:Math.random().toString(),completed:!1,priority:!1});t.setState((function(t){return{todos:[].concat(Object(c.a)(t.todos),[o]),optionsState:""}}))},t.handledel=function(e){var o=t.state.todos.filter((function(t){return t.id!==e}));t.setState((function(t){return{todos:o,optionsState:t.optionsState}}))},t.state={todos:y,optionsState:""},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handlePriority=t.handlePriority.bind(Object(u.a)(t)),t}return Object(l.a)(o,[{key:"handleChange",value:function(t){this.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e})),optionsState:e.optionsState}}))}},{key:"handlePriority",value:function(t){this.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t&&(e.priority=!e.priority),e})),optionsState:e.optionsState}}))}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(m.jsx)(v,{item:e,handleChange:t.handleChange,handledel:t.handledel,handlePriority:t.handlePriority},e.id)}));return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"todo-list",children:[Object(m.jsxs)("div",{className:"upperP",children:[Object(m.jsx)(f,{onSaveTodo:this.saveNewTodo}),Object(m.jsxs)("select",{className:"sortList",value:this.state.optionsState,onChange:this.handleselect,children:[Object(m.jsx)("option",{value:"",children:"Sort by"}),Object(m.jsx)("option",{value:"date",children:"By Date"}),Object(m.jsx)("option",{value:"priority",children:"By Priority"})]})]}),e]})})}}]),o}(i.a.Component));r.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a385f083.chunk.js.map