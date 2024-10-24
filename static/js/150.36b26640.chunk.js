"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[150],{9862:function(e,t,n){n.d(t,{s:function(){return h}});var r=n(9439),a=n(2791),s=n(3439),l=n(646),c=n(1413),i=n(887),o=n(8007),u=n(4695),x=n(5113),d=n(184),p=o.Ry().shape({fullName:o.Z_().required("Full name is required").min(3,"Full name must be at least 3 characters").max(50,"Full name must be less than 50 characters"),email:o.Z_().required("Email is required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email format"),phone:o.Z_().required("Phone number is required").matches(/^\+[0-9]+$/,"Please enter phone number in +380 format")}),m=function(e){var t,n,r,a=e.onClose,l=e.avatar_url,o=e.name,m=(0,i.cI)({resolver:(0,u.X)(p)}),f=m.register,h=m.handleSubmit,v=m.formState.errors;return(0,d.jsxs)("div",{className:"relative text-text w-[600px] p-4 md:p-8 lg:p-16",children:[(0,d.jsx)("button",{type:"button",className:"absolute flex justify-center items-center top-5 right-5",onClick:a,children:(0,d.jsx)("svg",{className:"stroke-text fill-transparent size-8",children:(0,d.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_close_btn")})})}),(0,d.jsx)("h2",{className:" text-[40px]/[1.2] tracking-[-0.8px] font-medium mb-5",children:"Book trial lesson"}),(0,d.jsx)("p",{className:"text-base/[1.37] mb-5",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),(0,d.jsxs)("div",{className:" flex flex-row  items-center gap-[14px] mb-10",children:[(0,d.jsx)("img",{src:l,alt:"avatar",className:"size-11 rounded-full"}),(0,d.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,d.jsx)("p",{className:"text-lightGray text-xs font-medium ",children:"Your teacher"}),(0,d.jsx)("p",{className:"text-base font-medium",children:o})]})]}),(0,d.jsx)("p",{className:"text-2xl font-medium mb-5",children:"What is your main reason for learning English?"}),(0,d.jsxs)("form",{onSubmit:h((function(e){var t=e.fullName,n=e.email,r=e.phone,s=e.reason;console.log(t,n,r,s),a()})),className:"text-text ",children:[(0,d.jsxs)("div",{className:"flex flex-col justify-center gap-[18px] text-base/[1.37] font-normal mb-10",children:[(0,d.jsxs)("label",{className:"flex items-center",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Career and business"},f("reason")),{},{className:"radio-input",defaultChecked:!0})),(0,d.jsx)("span",{className:"radio-indicator"}),"Career and business"]}),(0,d.jsxs)("label",{className:"flex items-center",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Lesson for kids"},f("reason")),{},{className:"radio-input"})),(0,d.jsx)("span",{className:"radio-indicator"}),"Lesson for kids"]}),(0,d.jsxs)("label",{className:"flex items-center",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Living abroad"},f("reason")),{},{className:"radio-input"})),(0,d.jsx)("span",{className:"radio-indicator"}),"Living abroad"]}),(0,d.jsxs)("label",{className:"flex items-center",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Exams and coursework"},f("reason")),{},{className:"radio-input"})),(0,d.jsx)("span",{className:"radio-indicator"}),"Exams and coursework"]}),(0,d.jsxs)("label",{className:"flex items-center",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Culture, travel or hobby"},f("reason")),{},{className:"radio-input"})),(0,d.jsx)("span",{className:"radio-indicator"}),"Culture, travel or hobby"]})]}),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({},f("fullName")),{},{placeholder:"Full Name",className:" w-full py-4 px-[18px] text-md  border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),v&&(0,d.jsx)("p",{className:" absolute text-accent text-xs -bottom-0 left-2 ",children:null===(t=v.email)||void 0===t?void 0:t.message})]}),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({},f("email")),{},{placeholder:"Email",className:" w-full py-4 px-[18px] text-md  border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),v&&(0,d.jsx)("p",{className:" absolute text-accent text-xs  -bottom-0 left-2",children:null===(n=v.email)||void 0===n?void 0:n.message})]}),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("input",(0,c.Z)((0,c.Z)({placeholder:"Phone number"},f("phone")),{},{className:"w-full py-4 px-[18px] text-md  border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),v&&(0,d.jsx)("p",{className:" absolute text-accent text-xs  -bottom-0 left-2",children:null===(r=v.phone)||void 0===r?void 0:r.message})]}),(0,d.jsx)(x.z,{text:"Book",className:"mt-[32px]"})]})]})},f=function(e){var t=e.teacher,n=e.isFavorite,c=e.handleFavorite,i=t.id,o=t.avatar_url,u=t.name,x=t.surname,p=t.lessons_done,f=t.rating,h=t.price_per_hour,v=t.languages,g=t.lesson_info,b=t.conditions,j=t.experience,N=t.reviews,w=t.levels,k=(0,a.useState)(!1),Z=(0,r.Z)(k,2),y=Z[0],_=Z[1],C=(0,a.useState)(!1),L=(0,r.Z)(C,2),P=L[0],E=L[1],S=function(e,t){return e.map((function(n,r){return(0,d.jsxs)("span",{className:"text-text ".concat("languages"===t?"underline":""," "),children:[n,r!==e.length-1&&", "]},n)}))},F=function(){E(!1)};return(0,d.jsxs)("div",{className:"relative p-2 md:p-3 lg:p-6 flex flex-col items-center lg:items-start lg:flex-row gap-3 md:gap-6 lg:gap-12 bg-white rounded-3xl text-text font-medium",children:[(0,d.jsx)("div",{className:"min-w-[120px] h-[120px] rounded-full border-[3px] border-background flex justify-center items-center ",children:(0,d.jsx)("img",{src:o,alt:"avatar",className:"size-[96px] rounded-full"})}),(0,d.jsxs)("div",{className:" flex flex-col  gap-3 md:gap-6 lg:gap-8  w-full",children:[(0,d.jsxs)("div",{className:" flex flex-col  lg:flex-row justify-between items-center lg:justify-between lg:items-start w-full gap-2",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-2 ",children:[(0,d.jsx)("p",{className:" text-center lg:text-left text-lightGray",children:"Teacher"}),(0,d.jsx)("h2",{className:"text-2xl ",children:u+" "+x})]}),(0,d.jsxs)("ul",{className:"flex flex-row text-sm md:text-base items-center gap-2 flex-wrap lg:gap-4 lg:mr-16",children:[(0,d.jsxs)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2]",children:[(0,d.jsx)("svg",{className:"stroke-black fill-transparent size-4",children:(0,d.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_book_open")})}),(0,d.jsx)("p",{children:"Lessons online"})]}),(0,d.jsx)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2]",children:(0,d.jsxs)("p",{children:["Lessons done: ",p]})}),(0,d.jsxs)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2]",children:[(0,d.jsx)("svg",{className:"  size-4",children:(0,d.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_star")})}),(0,d.jsxs)("p",{children:["Rating: ",f]})]}),(0,d.jsx)("li",{className:"inline-flex flex-row gap-2 items-center",children:(0,d.jsxs)("p",{children:["Price / 1 hour:"," ",(0,d.jsxs)("span",{className:"text-green",children:[h," $"]})]})})]}),(0,d.jsx)("button",{type:"button",className:"absolute flex justify-center items-center  top-2 right-2 md:top-3 md:right-3 lg:top-6 lg:right-6",onClick:function(){return c(i)},children:(0,d.jsx)("svg",{className:"  size-[24px]  ".concat(n?"fill-accent stroke-accent":"fill-transparent stroke-text"),children:(0,d.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_heart")})})})]}),(0,d.jsxs)("div",{className:"flex flex-col items-start gap-2 text-lightGray ",children:[(0,d.jsxs)("p",{children:["Speaks: ",S(v,"languages")]}),(0,d.jsxs)("p",{children:["Lesson Info: ",(0,d.jsx)("span",{className:"text-text",children:g})]}),(0,d.jsxs)("p",{children:["Conditions: ",S(b)]}),y&&(0,d.jsxs)("div",{className:"flex flex-col items-start gap-3 md:gap-6 lg:gap-8 text-text mb-2",children:[(0,d.jsx)("p",{className:"max-w-full break-words",children:j}),(0,d.jsx)("ul",{className:"flex flex-col gap-3 md:gap-6 lg:gap-8",children:N.map((function(e){var t=e.reviewer_name,n=e.reviewer_rating,r=e.comment;return(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{className:"text-lightGray",children:t})," ",(0,d.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,d.jsx)("svg",{className:"size-4",children:(0,d.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_star")})}),(0,d.jsx)("p",{children:n})]}),(0,d.jsx)("p",{children:r})]},t)}))})]}),(0,d.jsx)("button",{type:"button",className:"underline mt-2 text-text",onClick:function(){_(!y)},children:y?"Read less":"Read more"})]}),(0,d.jsx)("ul",{className:"flex flex-row flex-wrap gap-2 text-text text-sm md:text-base ",children:w.map((function(e,t){return(0,d.jsx)("li",{children:(0,d.jsx)("button",{type:"button",className:" rounded-[35px] border border-text/[0.2] px-3 py-2 ".concat(0===t?"bg-accent":""),children:e})},e)}))}),y&&(0,d.jsx)("button",{type:"button",className:" w-full md:w-[232px] py-2 md:py-4 text-text bg-accent rounded-xl",onClick:function(){P||E(!0)},children:"Book trial lesson"})]}),P&&(0,d.jsx)(l.P,{isOpen:P,onClose:F,children:(0,d.jsx)(m,{avatar_url:o,name:u+" "+x,onClose:F})})]})},h=function(e){var t=e.teachers,n=e.favorites,r=e.handleFavorite;return(0,d.jsx)("ul",{className:"flex flex-col gap-2 md:gap-4 lg:gap-8 md:flex-col items-center mb-5 md:mb-11 mx-auto",children:t.map((function(e){return(0,d.jsx)("li",{className:"w-full",children:(0,d.jsx)(f,{teacher:e,isFavorite:n.includes(e.id),handleFavorite:r})},e.id)}))})}},1256:function(e,t,n){n.d(t,{OT:function(){return m},Os:function(){return x},TC:function(){return d},id:function(){return p},mN:function(){return f}});var r=n(4942),a=n(1413),s=n(5861),l=n(7757),c=n.n(l),i=n(2685),o=n(8986),u=function(){var e=(0,s.Z)(c().mark((function e(t){var n,r,a,s,l,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:4,r=(0,i.iH)(o.db,"teachers"),a=t?(0,i.IO)(r,(0,i.R)(),(0,i.e0)(t),(0,i.Kk)(n+1)):(0,i.IO)(r,(0,i.R)("id"),(0,i.Kk)(n)),e.prev=3,e.next=6,(0,i.U2)(a);case 6:return s=e.sent,l=[],s.forEach((function(e){var t=e.val();l.push(t)})),e.abrupt("return",t?l.slice(1):l);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(c().mark((function e(){var t,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:4,e.abrupt("return",u(null,t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.Z)(c().mark((function e(t){var n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:4,e.abrupt("return",u(t,n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.iH)(o.db,"teachers/".concat(t)),e.prev=1,e.next=4,(0,i.U2)(n);case 4:if(!(r=e.sent).exists()){e.next=9;break}return e.abrupt("return",(0,a.Z)({id:t},r.val()));case 9:return console.log("No teacher found for ID: ".concat(t)),e.abrupt("return",null);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(1),console.error("Error fetching teacher with ID: ".concat(t),e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,s.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.iH)(o.db,"users/".concat(t,"/favorites")),e.prev=1,e.next=4,(0,i.U2)(n);case 4:if(!(r=e.sent).exists()){e.next=9;break}return e.abrupt("return",r.val());case 9:return e.abrupt("return",[]);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)(c().mark((function e(t,n,a){var s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(0,i.iH)(o.db,"users/".concat(t,"/favorites")),!a){e.next=6;break}return e.next=4,(0,i.Vx)(s,(0,r.Z)({},n,null));case 4:e.next=8;break;case 6:return e.next=8,(0,i.Vx)(s,(0,r.Z)({},n,!0));case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},8150:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(3433),a=n(5861),s=n(9439),l=n(7757),c=n.n(l),i=n(2791),o=n(1087),u=n(5218),x=n(8986),d=n(1256),p=n(9862),m=[{label:"All languages",value:"all_languages"},{label:"English",value:"english"},{label:"Spanish",value:"spanish"},{label:"French",value:"french"},{label:"Portuguese",value:"portuguese"},{label:"German",value:"german"},{label:"Mandarin Chinese",value:"mandarin_chinese"},{label:"Italian",value:"italian"},{label:"Korean",value:"korean"},{label:"Vietnamese",value:"vietnamese"}],f=[{label:"A1 Beginner",value:"a1_beginner"},{label:"A2 Elementary",value:"a2_elementary"},{label:"B1 Intermediate",value:"b1_intermediate"},{label:"B2 Upper-Intermediate",value:"b2_upper_intermediate"},{label:"C1 Advanced",value:"c1_advanced"},{label:"C2 Proficient",value:"c2_proficient"}],h=[{label:"10 $",value:10},{label:"20 $",value:20},{label:"30 $",value:30},{label:"40 $",value:40}],v=n(184),g=function(e){var t=e.options,n=e.label,r=e.value,a=e.onChange;return(0,v.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,v.jsx)("label",{htmlFor:n,className:"text-lightGray text-xs md:text-sm font-medium",children:n}),(0,v.jsx)("select",{name:n,id:n,value:r,onChange:a,className:"text-text text-sm md:text-lg font-medium px-4 py-3 md:px-[18px] md:py-[14px] rounded-xl focus:outline-none",children:t.map((function(e,t){var n=e.label,r=e.value;return(0,v.jsx)("option",{value:r,className:"text-sm md:text-lg font-medium text-lightGray focus:bg-white focus:text-text",children:n},t)}))})]})},b=function(){var e,t,n,a=(0,o.lr)(),l=(0,s.Z)(a,2),c=l[0],i=l[1],u=Math.max.apply(Math,(0,r.Z)(h.map((function(e){return e.value})))),x=null!==(e=c.get("language"))&&void 0!==e?e:"all_languages",d=null!==(t=c.get("level"))&&void 0!==t?t:"a1_beginner",p=null!==(n=c.get("price"))&&void 0!==n?n:String(u),b=function(e,t){c.set(t,e.target.value),i(c)};return(0,v.jsxs)("ul",{className:"flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-5 mb-5 lg:mb-11",children:[(0,v.jsx)("li",{className:"md:w-[220px]",children:(0,v.jsx)(g,{label:"Languages",name:"Languages",options:m,value:x,onChange:function(e){return b(e,"language")}})}),(0,v.jsx)("li",{className:"md:w-[200px]",children:(0,v.jsx)(g,{label:"Level of knowledge",name:"Levels",options:f,value:d,onChange:function(e){return b(e,"level")}})}),(0,v.jsx)("li",{className:"md:w-[124px]",children:(0,v.jsx)(g,{label:"Prices",name:"Prices",options:h,value:p,onChange:function(e){return b(e,"price")}})})]})};function j(){var e,t,n,l=(0,i.useState)([]),m=(0,s.Z)(l,2),f=m[0],h=m[1],g=(0,i.useState)([]),j=(0,s.Z)(g,2),N=j[0],w=j[1],k=(0,i.useState)(!0),Z=(0,s.Z)(k,2),y=Z[0],_=Z[1],C=(0,i.useState)(null),L=(0,s.Z)(C,2),P=L[0],E=L[1],S=(0,o.lr)(),F=(0,s.Z)(S,1)[0],z=null!==(e=F.get("language"))&&void 0!==e?e:"all_languages",I=null!==(t=F.get("level"))&&void 0!==t?t:"a1_beginner",H=null!==(n=F.get("price"))&&void 0!==n?n:"40 $",O=f.length<30,$=x.I.currentUser;(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,d.Os)();case 4:t=e.sent,h(t),t.length>0&&(n=t[t.length-1].id,E(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u.ZP.error("Error fetching teachers");case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,d.OT)($.uid);case 5:t=e.sent,n=Object.keys(t).filter((function(e){return t[e]})),w(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),u.ZP.error("Error fetching favorite teachers");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[$]);var A=function(){var e=(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.length&&P){e.next=2;break}return e.abrupt("return");case 2:return _(!0),e.prev=3,e.next=6,(0,d.TC)(P);case 6:t=e.sent,h((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))})),t.length>0&&(n=t[t.length-1].id,E(n)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),u.ZP.error("Error fetching more teachers");case 14:return e.prev=14,_(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($){e.next=2;break}return e.abrupt("return",u.ZP.error("Please register or sign in to favorite a teacher"));case 2:return e.prev=2,n=N.includes(t),e.next=6,(0,d.mN)($.uid,t,n);case 6:w((function(e){return n?e.filter((function(e){return e!==t})):[].concat((0,r.Z)(e),[t])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u.ZP.error("Error toggling favorite");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),q=(0,i.useMemo)((function(){return f.filter((function(e){var t=e.languages,n=e.levels,r=e.price_per_hour,a="all_languages"===z||t.some((function(e){return e.toLowerCase().replace(/[\s-]+/g,"_")===z})),s=n.some((function(e){return e.toLowerCase().replace(/[\s-]+/g,"_")===I}));return a&&s&&(""===H||r<=H)}))}),[z,I,H,f]);return(0,v.jsxs)("div",{className:" teachers-container",children:[(0,v.jsx)(b,{}),0!==q.length?(0,v.jsx)(p.s,{teachers:q,favorites:N,handleFavorite:G}):(0,v.jsx)("p",{className:"mb-5 md:mb-11 text-base md:text-lg text-center",children:"Sorry, no teachers found for your search criteria"}),f.length>0&&O&&(0,v.jsx)("button",{type:"button",className:"block text-center w-[184px] text-lg font-bold text-text bg-accent hover:bg-accentLight py-2 md:py-4 rounded-xl ",onClick:A,disabled:y,children:"Load more"})]})}function N(){return(0,v.jsx)(j,{})}}}]);
//# sourceMappingURL=150.36b26640.chunk.js.map