(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c.n(a),n=c(2),l=c(1),i=c.n(l),o=(c(10),c(11),c(5)),d=c.n(o),r=c(0),j=function(e,t){return t.filter((function(t){return t.title.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase())}))},u=function(e){var t=e.todos,c=e.quary,a=e.option,s=e.showTodoModal,n=e.activeTaskId,l=[];return l=null===a?j(c,t):a?j(c,t).filter((function(e){return!0===e.completed})):j(c,t).filter((function(e){return!1===e.completed})),Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:l.map((function(e){return Object(r.jsx)(i.a.Fragment,{children:Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:(t=e.completed,d()({"has-text-danger":!t,"has-text-success":t})),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:n===e.id?Object(r.jsx)("i",{className:"far fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]})},e.id);var t}))})]})},b=function(e){var t=e.handleQuery,c=e.handleOption,a=Object(l.useState)(""),s=Object(n.a)(a,2),i=s[0],o=s[1],d=Object(l.useState)("all"),j=Object(n.a)(d,2),u=j[0],b=j[1];return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:u,onChange:function(e){var t=e.target.value;b(t);var a=null;switch(t){case"all":default:a=null;break;case"active":a=!1;break;case"completed":a=!0}c(a)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){var c=e.target.value.trim();o(c),t(c)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:i&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){o(""),t("")}})})]})]})},h=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.closeTodoModal,a=Object(l.useState)(null),s=Object(n.a)(a,2),i=s[0],o=s[1];return Object(l.useEffect)((function(){var e;(e=t.userId,m("/users/".concat(e))).then(o)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),i?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===t||void 0===t?void 0:t.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(r.jsx)(h,{})]})},x=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(!1),i=Object(n.a)(s,2),o=i[0],d=i[1],j=Object(l.useState)(""),x=Object(n.a)(j,2),f=x[0],v=x[1],p=Object(l.useState)(null),N=Object(n.a)(p,2),y=N[0],g=N[1],k=Object(l.useState)(null),w=Object(n.a)(k,2),S=w[0],T=w[1];Object(l.useEffect)((function(){d(!0),m("/todos").then((function(e){a(e)})).catch((function(){return a([])})).finally((function(){return d(!1)}))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{handleQuery:function(e){v(e)},handleOption:function(e){T(e)}})}),Object(r.jsxs)("div",{className:"block",children:[o&&Object(r.jsx)(h,{}),Object(r.jsx)(u,{todos:c,quary:f,option:S,showTodoModal:function(e){return function(e){g(e)}(e)},activeTaskId:(null===y||void 0===y?void 0:y.id)||null})]})]})})}),y&&Object(r.jsx)(O,{todo:y,closeTodoModal:function(){g(null)}})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a226bd6e.chunk.js.map