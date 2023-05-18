(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(7),n=c.n(s),i=(c(13),c(14),c(8)),r=c(4),l=c(6),d=(c(15),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),o=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],j=c(0),h=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=o.find((function(t){return t.id===e.categoryId})),c=d.find((function(e){return e.id===t.ownerId}));return Object(l.a)(Object(l.a)({},e),{},{category:t,user:c})})),b=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),b=l[0],u=l[1],m=Object(a.useState)([]),x=Object(r.a)(m,2),O=x[0],f=x[1],p=h;return c&&(p=p.filter((function(e){var t=c.toLowerCase();return e.name.toLowerCase().includes(t)}))),b&&(p=p.filter((function(e){return e.user.name===b.name}))),O.length&&(p=p.filter((function(e){return O.includes(e.category.title)}))),Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Product Categories"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(j.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:!b&&"is-active",onClick:function(){return u("")},children:"All"}),d.map((function(e){var t=e.name;return Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:b&&b.name===t&&"is-active",onClick:function(){return u(e)},children:t})}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:c,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),c&&Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){s("")}})})]})}),Object(j.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(j.jsx)("a",{href:"#/","data-cy":"AllCategories",className:O.length?"button is-success mr-6 is-outlined":"button is-success mr-6",onClick:function(){return f([])},children:"All"}),o.map((function(e){var t=e.title;return Object(j.jsx)("a",{"data-cy":"Category",className:O.includes(e.title)?"button mr-2 my-1 is-info":"button mr-2 my-1",href:"#/",onClick:function(){var t;return O.includes(e.title)?t=O.filter((function(t){return t!==e.title})):(t=Object(i.a)(O)).push(e.title),f(t)},children:t})}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(""),u(""),f([])},children:"Reset all filters"})})]})}),Object(j.jsx)("div",{className:"box table-container",children:p.length?Object(j.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(j.jsx)("tbody",{children:p.map((function(e){var t=e.id,c=e.name,a=e.category,s=e.user;return Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t}),Object(j.jsx)("td",{"data-cy":"ProductName",children:c}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(a.icon," - ").concat(a.title)}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"m"===s.sex?"has-text-link":"has-text-danger",children:s.name})]})}))})]}):Object(j.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7021cbd8.chunk.js.map