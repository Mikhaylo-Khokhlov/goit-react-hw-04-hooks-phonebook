(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"Filter_input__2bSUC",label:"Filter_label__2ptmx"}},12:function(e,t,n){e.exports={list:"ContactList_list__3jmRu"}},13:function(e,t,n){e.exports={container:"Section_container__2JiXP",title:"Section_title__uLhhq"}},19:function(e,t,n){},2:function(e,t,n){e.exports={form:"ContactForm_form__3nsHI",block:"ContactForm_block__2d5bC",input:"ContactForm_input__2xO23",btnBlock:"ContactForm_btnBlock__1cxcf",btn:"ContactForm_btn__10mPN",label:"ContactForm_label__qdJ49"}},29:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(11),o=n.n(r),i=(n(19),n(14)),s=n(3),l=n(5),u=n.n(l),b=n(2),m=n.n(b),j=n(0);function d(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),b=l[0],d=l[1],h=u.a.generate(),f=u.a.generate(),O=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":o(c);break;case"number":d(c);break;default:return}},_=function(){o(""),d("")};return Object(j.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:b}),_()},children:[Object(j.jsxs)("div",{className:m.a.block,children:[Object(j.jsx)("div",{className:m.a.label,children:Object(j.jsx)("label",{htmlFor:h,children:"Name"})}),Object(j.jsx)("input",{type:"text",name:"name",value:r,onChange:O,id:h,className:m.a.input})]}),Object(j.jsxs)("div",{className:m.a.block,children:[Object(j.jsx)("div",{className:m.a.label,children:Object(j.jsx)("label",{htmlFor:f,children:"Number"})}),Object(j.jsx)("input",{type:"tel",name:"number",value:b,onChange:O,placeholder:"+380 (00) 000-00-00",id:h,className:m.a.input})]}),Object(j.jsx)("div",{className:m.a.btnBlock,children:Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:m.a.btn,type:"submit",children:"Add contact"})})})]})}var h=n(6),f=n.n(h),O=function(e){var t=e.name,n=e.number,c=e.id,a=e.onDeleteContact;return Object(j.jsxs)("li",{className:f.a.listItem,children:[Object(j.jsxs)("p",{className:f.a.itemDesc,children:[t,":"]}),Object(j.jsx)("p",{className:f.a.itemDesc,children:n}),Object(j.jsx)("button",{className:f.a.btn,type:"button",onClick:function(){return a(c)},children:"Delete"})]})},_=n(12),x=n.n(_),p=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.list,children:t.map((function(e){return Object(j.jsx)(O,{id:e.id,name:e.name,number:e.number,onDeleteContact:n},e.id)}))})},v=n(10),C=n.n(v),N=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:C.a.label,htmlFor:"filter",children:"Find contacts by name"})}),Object(j.jsx)("input",{type:"text",id:"filter",name:"filter",value:t,onChange:n,className:C.a.input})]})},g=n(13),k=n.n(g),S=function(e){var t=e.children;return Object(j.jsx)("section",{className:k.a.container,children:t})};function F(){var e=function(e,t){var n=Object(c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]}("contacts",[]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],b=o[1],m=function(e){for(var t=!1,c=0;c<n.length;c+=1){if(n[c].name.toLowerCase()===e.toLowerCase())return!0;t=!1}return t},h=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)(S,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(e){var t=e.name,n=e.number,c={id:u.a.generate(),name:t,number:n};!1===m(t)?a((function(e){return[c].concat(Object(i.a)(e))})):alert(t+" is already in contacts")}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(N,{value:l,onChange:function(e){b(e.currentTarget.value)}}),Object(j.jsx)(p,{contacts:h,onDeleteContact:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={listItem:"ContactListItem_listItem__3_Az5",itemDesc:"ContactListItem_itemDesc__NvHlJ",btn:"ContactListItem_btn__3LFg7"}}},[[29,1,2]]]);
//# sourceMappingURL=main.58ce44c0.chunk.js.map