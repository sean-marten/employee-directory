(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a(10),r=a.n(n),i=a(6),s=a(0),l=a(157),o=a(160);a(86);function u(){return Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(o.a,{className:"header",children:"Employee Directory"})})})}var d=a(64),j=a(165),f=(a(92),a(49)),h=a.n(f),b=a(66),m=a(94),O="https://randomuser.me/api/?results=100&nat=us";function p(){return(p=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(O);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=[{field:"id",headerName:"ID",width:50},{field:"firstName",headerName:"First name",width:150},{field:"lastName",headerName:"Last name",width:150},{field:"location",headerName:"Location",width:150},{field:"email",headerName:"E-mail",width:300},{field:"cell",headerName:"Cell Phone Number",width:200}];function N(){var e=Object(s.useState)(),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(),l=Object(i.a)(r,2),o=l[0],u=l[1],f=Object(s.useState)(),h=Object(i.a)(f,2),b=h[0],m=h[1];Object(s.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){var t=e.data.results,a=[],c=0;t.forEach((function(e){c++;var t=e.name,n=e.email,r=e.cell,i=e.location;a.push({id:c,firstName:t.first,lastName:t.last,location:i.city,email:n,cell:r})})),n(a),u(a)}))}),[]),Object(s.useEffect)((function(){if(a){var e=a.filter((function(e){return e.firstName.toLowerCase().includes(b)}));u(e)}}),[b]);return a?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"searchInput",children:Object(c.jsx)(j.a,{onChange:function(e){var t=e.target.value;m(t)},placeholder:"Search by First Name",label:"Search by First Name",variant:"outlined"})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(d.a,{rows:o,columns:v})}),"atata"]}):Object(c.jsx)("div",{children:"Loading..."})}function x(){var e=Object(s.useState)(),t=Object(i.a)(e,2);t[0],t[1];return Object(s.useEffect)((function(){}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)(o.a,{}),Object(c.jsx)(N,{})]})}r.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))},86:function(e,t,a){},92:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.c38dfbf6.chunk.js.map