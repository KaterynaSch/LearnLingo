"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[121],{9862:function(e,t,r){r.d(t,{s:function(){return v}});var n=r(9439),a=r(2791),s=r(3439),l=r(5291),i=r(1413),c=r(1134),o=r(8007),u=r(4695),x=r(5218),d=r(5113),p=r(184),f=o.Ry().shape({fullName:o.Z_().required("Full name is required").min(3,"Full name must be at least 3 characters").max(50,"Full name must be less than 50 characters"),email:o.Z_().required("Email is required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email format"),phone:o.Z_().required("Phone number is required").matches(/^\+[0-9]+$/,"Please enter phone number in +380 format")}),m=function(e){var t,r,n,a=e.onClose,l=e.avatar_url,o=e.name,m=(0,c.cI)({resolver:(0,u.X)(f)}),h=m.register,g=m.handleSubmit,v=m.formState.errors;return(0,p.jsxs)("div",{className:"relative text-text w-[300px] md:w-[600px] p-5 md:p-16",children:[(0,p.jsx)("button",{type:"button",className:"absolute flex justify-center items-center top-4 right-4 md:top-5 md:right-5",onClick:a,children:(0,p.jsx)("svg",{className:"stroke-text fill-transparent size-6 md:size-8",children:(0,p.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_close_btn")})})}),(0,p.jsx)("h2",{className:" text-[24px] md:text-[40px]/[1.2] tracking-[-0.8px] font-medium mb-5",children:"Book trial lesson"}),(0,p.jsx)("p",{className:"mb-6 md:mb-10 text-sm md:text-base/[1.37]",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),(0,p.jsxs)("div",{className:" flex flex-row  items-center gap-[14px] mb-6 md:mb-10",children:[(0,p.jsx)("img",{src:l,alt:"avatar",className:"size-11 rounded-full"}),(0,p.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,p.jsx)("p",{className:"text-lightGray text-xs font-medium ",children:"Your teacher"}),(0,p.jsx)("p",{className:"text-base font-medium",children:o})]})]}),(0,p.jsx)("p",{className:"text-base md:text-2xl font-medium mb-5",children:"What is your main reason for learning English?"}),(0,p.jsxs)("form",{onSubmit:g((function(){x.ZP.success("You have successfully booked a trial lesson"),a()})),className:"text-text ",children:[(0,p.jsxs)("div",{className:"h-[160px] md:h-[200px] overflow-y-auto overflow-x-hidden scroll-smooth",children:[(0,p.jsxs)("div",{className:"flex flex-col justify-center gap-2 md:gap-[18px] text-xs md:text-base/[1.37] font-normal mb-6 md:mb-10",children:[(0,p.jsxs)("label",{className:"flex items-center",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"radio",name:"reason",value:"Career and business"},h("reason")),{},{className:"radio-input",defaultChecked:!0})),(0,p.jsx)("span",{className:"radio-indicator"}),"Career and business"]}),(0,p.jsxs)("label",{className:"flex items-center",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"radio",name:"reason",value:"Lesson for kids"},h("reason")),{},{className:"radio-input"})),(0,p.jsx)("span",{className:"radio-indicator"}),"Lesson for kids"]}),(0,p.jsxs)("label",{className:"flex items-center",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"radio",name:"reason",value:"Living abroad"},h("reason")),{},{className:"radio-input"})),(0,p.jsx)("span",{className:"radio-indicator"}),"Living abroad"]}),(0,p.jsxs)("label",{className:"flex items-center",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"radio",name:"reason",value:"Exams and coursework"},h("reason")),{},{className:"radio-input"})),(0,p.jsx)("span",{className:"radio-indicator"}),"Exams and coursework"]}),(0,p.jsxs)("label",{className:"flex items-center",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"radio",name:"reason",value:"Culture, travel or hobby"},h("reason")),{},{className:"radio-input"})),(0,p.jsx)("span",{className:"radio-indicator"}),"Culture, travel or hobby"]})]}),(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({},h("fullName")),{},{placeholder:"Full Name",className:" w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base  placeholder:text-text border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),v&&(0,p.jsx)("p",{className:" absolute text-accent text-xs -bottom-0 left-2 ",children:null===(t=v.fullName)||void 0===t?void 0:t.message})]}),(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({},h("email")),{},{placeholder:"Email",className:" w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base placeholder:text-text border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),v&&(0,p.jsx)("p",{className:" absolute text-accent text-xs  -bottom-0 left-2",children:null===(r=v.email)||void 0===r?void 0:r.message})]}),(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)("input",(0,i.Z)((0,i.Z)({placeholder:"Phone number"},h("phone")),{},{className:"w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base placeholder:text-text  border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),v&&(0,p.jsx)("p",{className:" absolute text-accent text-xs  -bottom-0 left-2",children:null===(n=v.phone)||void 0===n?void 0:n.message})]})]}),(0,p.jsx)(d.o,{text:"Book",className:"mt-6 md:mt-[32px]"})]})]})},h=r(1087),g=function(e){var t,r=e.teacher,i=e.isFavorite,c=e.handleFavorite,o=r.id,u=r.avatar_url,x=r.name,d=r.surname,f=r.lessons_done,g=r.rating,v=r.price_per_hour,b=r.languages,j=r.lesson_info,w=r.conditions,N=r.experience,Z=r.reviews,k=r.levels,y=(0,a.useState)(!1),_=(0,n.Z)(y,2),C=_[0],S=_[1],z=(0,a.useState)(!1),L=(0,n.Z)(z,2),P=L[0],F=L[1],H=(0,h.lr)(),E=null===(t=(0,n.Z)(H,1)[0].get("level"))||void 0===t?void 0:t.toLowerCase(),R=function(e,t){return e.map((function(r,n){return(0,p.jsxs)("span",{className:"text-text ".concat("languages"===t?"underline":""," "),children:[r,n!==e.length-1&&", "]},r)}))},I=function(){F(!1)};return(0,p.jsxs)("div",{className:"relative p-2 md:p-3 lg:p-6 flex flex-col items-center lg:items-start lg:flex-row gap-3 md:gap-6 lg:gap-12 bg-white rounded-3xl text-text font-medium",children:[(0,p.jsxs)("div",{className:" relative min-w-[120px] h-[120px] rounded-full border-[3px] border-background flex justify-center items-center ",children:[(0,p.jsx)("img",{src:u,alt:"avatar",className:"size-[96px] rounded-full"}),(0,p.jsx)("svg",{className:"absolute top-[18px] right-[18px] size-3",children:(0,p.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_online")})})]}),(0,p.jsxs)("div",{className:" flex flex-col  gap-3 md:gap-6 lg:gap-8  w-full",children:[(0,p.jsxs)("div",{className:" flex flex-col  lg:flex-row justify-between items-center lg:justify-between lg:items-start w-full gap-2",children:[(0,p.jsxs)("div",{className:"flex flex-col gap-2 ",children:[(0,p.jsx)("p",{className:" text-center lg:text-left text-lightGray",children:"Teacher"}),(0,p.jsx)("h2",{className:"text-2xl ",children:x+" "+d})]}),(0,p.jsxs)("ul",{className:"flex flex-row text-sm md:text-base items-center gap-2 flex-wrap  lg:mr-16",children:[(0,p.jsxs)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2] after:mx-4",children:[(0,p.jsx)("svg",{className:"stroke-black fill-transparent size-4",children:(0,p.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_book_open")})}),(0,p.jsx)("p",{children:"Lessons online"})]}),(0,p.jsx)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2] after:mx-4",children:(0,p.jsxs)("p",{children:["Lessons done: ",f]})}),(0,p.jsxs)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2] after:mx-4",children:[(0,p.jsx)("svg",{className:"  size-4",children:(0,p.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_star")})}),(0,p.jsxs)("p",{children:["Rating: ",g]})]}),(0,p.jsx)("li",{className:"inline-flex flex-row gap-2 items-center",children:(0,p.jsxs)("p",{children:["Price / 1 hour:"," ",(0,p.jsxs)("span",{className:"text-green",children:[v," $"]})]})})]}),(0,p.jsx)("button",{type:"button",className:"absolute flex justify-center items-center  top-2 right-2 md:top-3 md:right-3 lg:top-6 lg:right-6",onClick:function(){return c(o)},children:(0,p.jsx)("svg",{className:"  size-[24px]  ".concat(i?"fill-accent stroke-accent":"fill-transparent stroke-text"),children:(0,p.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_heart")})})})]}),(0,p.jsxs)("div",{className:"flex flex-col items-start gap-2 text-lightGray ",children:[(0,p.jsxs)("p",{children:["Speaks: ",R(b,"languages")]}),(0,p.jsxs)("p",{children:["Lesson Info: ",(0,p.jsx)("span",{className:"text-text",children:j})]}),(0,p.jsxs)("p",{children:["Conditions: ",R(w)]}),C&&(0,p.jsxs)("div",{className:"flex flex-col items-start gap-3 md:gap-6 lg:gap-8 text-text mb-2",children:[(0,p.jsx)("p",{className:"max-w-full break-words",children:N}),(0,p.jsx)("ul",{className:"flex flex-col gap-3 md:gap-6 lg:gap-8",children:Z.map((function(e){var t=e.reviewer_name,r=e.reviewer_rating,n=e.comment;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{className:"text-lightGray",children:t})," ",(0,p.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,p.jsx)("svg",{className:"size-4",children:(0,p.jsx)("use",{xlinkHref:"".concat(s.Z,"#icon_star")})}),(0,p.jsx)("p",{children:r})]}),(0,p.jsx)("p",{children:n})]},t)}))})]}),(0,p.jsx)("button",{type:"button",className:"underline mt-2 text-text",onClick:function(){S(!C)},children:C?"Read less":"Read more"})]}),(0,p.jsx)("ul",{className:"flex flex-row flex-wrap gap-2 text-text text-sm md:text-base ",children:k.map((function(e){var t=function(e){return e.toLowerCase().replace(/\s+/g,"_")}(e)===E;return(0,p.jsx)("li",{children:(0,p.jsx)("button",{type:"button",className:"rounded-[35px] border border-text/[0.2] px-3 py-2 ".concat(t?"bg-accent":"bg-transparent"),children:e})},e)}))}),C&&(0,p.jsx)("button",{type:"button",className:" w-full md:w-[232px] py-2 md:py-4 text-text bg-accent rounded-xl",onClick:function(){P||F(!0)},children:"Book trial lesson"})]}),P&&(0,p.jsx)(l.P,{isOpen:P,onClose:I,styleVariant:"default",children:(0,p.jsx)(m,{avatar_url:u,name:x+" "+d,onClose:I})})]})},v=function(e){var t=e.teachers,r=e.favorites,n=e.handleFavorite;return(0,p.jsx)("ul",{className:"flex flex-col gap-2 md:gap-4 lg:gap-8 md:flex-col items-center mb-5 md:mb-11 mx-auto",children:t.map((function(e){return(0,p.jsx)("li",{className:"w-full",children:(0,p.jsx)(g,{teacher:e,isFavorite:r.includes(e.id),handleFavorite:n})},e.id)}))})}},1256:function(e,t,r){r.d(t,{OT:function(){return f},Os:function(){return x},TC:function(){return d},id:function(){return p},mN:function(){return m}});var n=r(4942),a=r(1413),s=r(5861),l=r(4687),i=r.n(l),c=r(2685),o=r(8986),u=function(){var e=(0,s.Z)(i().mark((function e(t){var r,n,a,s,l,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:4,n=(0,c.iH)(o.db,"teachers"),a=t?(0,c.IO)(n,(0,c.R)(),(0,c.e0)(t),(0,c.Kk)(r+1)):(0,c.IO)(n,(0,c.R)("id"),(0,c.Kk)(r)),e.prev=3,e.next=6,(0,c.U2)(a);case 6:return s=e.sent,l=[],s.forEach((function(e){var t=e.val();l.push(t)})),e.abrupt("return",t?l.slice(1):l);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(i().mark((function e(){var t,r=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:4,e.abrupt("return",u(null,t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.Z)(i().mark((function e(t){var r,n=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:4,e.abrupt("return",u(t,r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,c.iH)(o.db,"teachers/".concat(t)),e.prev=1,e.next=4,(0,c.U2)(r);case 4:if(!(n=e.sent).exists()){e.next=9;break}return e.abrupt("return",(0,a.Z)({id:t},n.val()));case 9:return console.log("No teacher found for ID: ".concat(t)),e.abrupt("return",null);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(1),console.error("Error fetching teacher with ID: ".concat(t),e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,c.iH)(o.db,"users/".concat(t,"/favorites")),e.prev=1,e.next=4,(0,c.U2)(r);case 4:if(!(n=e.sent).exists()){e.next=9;break}return e.abrupt("return",n.val());case 9:return e.abrupt("return",[]);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,s.Z)(i().mark((function e(t,r,a){var s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(0,c.iH)(o.db,"users/".concat(t,"/favorites")),!a){e.next=6;break}return e.next=4,(0,c.Vx)(s,(0,n.Z)({},r,null));case 4:e.next=8;break;case 6:return e.next=8,(0,c.Vx)(s,(0,n.Z)({},r,!0));case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},8121:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(3433),a=r(5861),s=r(9439),l=r(4687),i=r.n(l),c=r(2791),o=r(1087),u=r(5218),x=r(1256),d=r(9862),p=r(7113),f=r(1413),m=r(7281),h=r(184),g=function(e){return{control:function(t,r){return(0,f.Z)((0,f.Z)({},t),{},{borderRadius:"14px",border:"none",outline:"none",padding:"0 14px 0 18px",backgroundColor:"#fff",width:e.width||"220px",height:e.height||"48px",fontFamily:"Roboto, sans-serif",fontSize:"18px",fontWeight:500,color:"#121417",boxShadow:"none",borderColor:r.isFocused&&"transparent"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e){return(0,f.Z)((0,f.Z)({},e),{},{color:"#121417",":hover":{color:"#121417"}})},menu:function(e){return(0,f.Z)((0,f.Z)({},e),{},{border:"none",boxShadow:"none",borderRadius:"12px",padding:"14px 18px"})},option:function(e,t){return(0,f.Z)((0,f.Z)({},e),{},{fontFamily:"Roboto, sans-serif",fontSize:"18px",fontWeight:500,color:t.isSelected?"#121417":"#12141733",backgroundColor:"#fff",padding:0,margin:0,marginBottom:"8px"})},singleValue:function(e){return(0,f.Z)((0,f.Z)({},e),{},{color:"#121417",margin:0,padding:0})},menuList:function(e){return(0,f.Z)((0,f.Z)({},e),{},{maxHeight:"160px",border:"none",overflowY:"auto","::-webkit-scrollbar":{width:"6px"},"::-webkit-scrollbar-thumb":{backgroundColor:"#12141733",borderRadius:"3px"}})}}},v=function(e){var t=e.options,r=e.value,n=e.label,a=e.inputSize,s=e.onChange;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)("div",{className:"mb-2",children:(0,h.jsx)("label",{className:"text-lightGray ",children:n})}),(0,h.jsx)(m.ZP,{styles:g(a),options:t,value:r,onChange:s})]})},b=function(){var e=(0,o.lr)(),t=(0,s.Z)(e,2),r=t[0],a=t[1],l=r.get("language")||"all_languages",i=r.get("level")||"a1_beginner",c=parseInt(r.get("price"),10)||Math.max.apply(Math,(0,n.Z)(p.Hj.map((function(e){return e.value})))),u=function(e,t){var n=new URLSearchParams(r);n.set(t,e.value),a(n)};return(0,h.jsxs)("ul",{className:"flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-5 mb-5 lg:mb-11",children:[(0,h.jsx)("li",{children:(0,h.jsx)(v,{label:"Languages",options:p.Mj,inputSize:{width:"220px"},value:p.Mj.find((function(e){return e.value===l})),onChange:function(e){return u(e,"language")}})}),(0,h.jsx)("li",{children:(0,h.jsx)(v,{label:"Level of knowledge",options:p.gr,inputSize:{width:"198px"},value:p.gr.find((function(e){return e.value===i})),onChange:function(e){return u(e,"level")}})}),(0,h.jsx)("li",{children:(0,h.jsx)(v,{label:"Prices",options:p.Hj,inputSize:{width:"124px"},value:p.Hj.find((function(e){return e.value===c})),onChange:function(e){return u(e,"price")}})})]})},j=r(4642),w=r(5322);function N(){var e,t,r,l=(0,c.useState)([]),p=(0,s.Z)(l,2),f=p[0],m=p[1],g=(0,c.useState)([]),v=(0,s.Z)(g,2),N=v[0],Z=v[1],k=(0,c.useState)(!1),y=(0,s.Z)(k,2),_=y[0],C=y[1],S=(0,c.useState)(null),z=(0,s.Z)(S,2),L=z[0],P=z[1],F=(0,w.a)().authUser,H=(0,o.lr)(),E=(0,s.Z)(H,1)[0],R=null!==(e=E.get("language"))&&void 0!==e?e:"all_languages",I=null!==(t=E.get("level"))&&void 0!==t?t:"a1_beginner",O=null!==(r=E.get("price"))&&void 0!==r?r:"",q=f.length<30;(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,(0,x.Os)();case 4:t=e.sent,m(t),t.length>0&&(r=t[t.length-1].id,P(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u.ZP.error("Error fetching teachers");case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,x.OT)(F.uid);case 5:t=e.sent,r=Object.keys(t).filter((function(e){return t[e]})),Z(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),u.ZP.error("Error fetching favorite teachers");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[F]);var G=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.length&&L){e.next=2;break}return e.abrupt("return");case 2:return C(!0),e.prev=3,e.next=6,(0,x.TC)(L);case 6:t=e.sent,m((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))})),t.length>0&&(r=t[t.length-1].id,P(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),u.ZP.error("Error fetching more teachers");case 14:return e.prev=14,C(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return",u.ZP.error("Please register or sign in to select your favorite teachers"));case 2:return e.prev=2,r=N.includes(t),e.next=6,(0,x.mN)(F.uid,t,r);case 6:Z((function(e){return r?e.filter((function(e){return e!==t})):[].concat((0,n.Z)(e),[t])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u.ZP.error("Error toggling favorite");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),T=(0,c.useMemo)((function(){return f.filter((function(e){var t=e.languages,r=e.levels,n=e.price_per_hour,a="all_languages"===R||t.some((function(e){return e.toLowerCase().replace(/[\s-]+/g,"_")===R})),s=r.some((function(e){return e.toLowerCase().replace(/[\s-]+/g,"_")===I}));return a&&s&&(""===O||n<=O)}))}),[R,I,O,f]);return(0,h.jsxs)("div",{className:" teachers-container",children:[(0,h.jsx)(b,{}),_?(0,h.jsx)(j.a,{}):T.length>0?(0,h.jsx)(d.s,{teachers:T,favorites:N,handleFavorite:M}):(0,h.jsx)("p",{className:"mb-5 md:mb-11 text-base md:text-lg text-center",children:"Sorry, no teachers found for your search criteria"}),f.length>0&&q&&(0,h.jsx)("button",{type:"button",className:"block text-center w-[184px] text-lg font-bold text-text bg-accent hover:bg-background py-2 md:py-4 rounded-xl ",onClick:G,disabled:_,children:"Load more"})]})}function Z(){return(0,h.jsx)(N,{})}}}]);
//# sourceMappingURL=121.093feb10.chunk.js.map