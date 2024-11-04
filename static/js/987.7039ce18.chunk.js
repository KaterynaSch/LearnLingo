"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[987],{9862:function(e,t,r){r.d(t,{s:function(){return v}});var n=r(9439),s=r(2791),a=r(3439),l=r(646),c=r(1413),i=r(887),o=r(8007),u=r(4695),x=r(5218),d=r(5113),m=r(184),p=o.Ry().shape({fullName:o.Z_().required("Full name is required").min(3,"Full name must be at least 3 characters").max(50,"Full name must be less than 50 characters"),email:o.Z_().required("Email is required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email format"),phone:o.Z_().required("Phone number is required").matches(/^\+[0-9]+$/,"Please enter phone number in +380 format")}),f=function(e){var t,r,n,s=e.onClose,l=e.avatar_url,o=e.name,f=(0,i.cI)({resolver:(0,u.X)(p)}),h=f.register,v=f.handleSubmit,b=f.formState.errors;return(0,m.jsxs)("div",{className:"relative text-text w-[300px] md:w-[600px] p-5 md:p-16",children:[(0,m.jsx)("button",{type:"button",className:"absolute flex justify-center items-center top-4 right-4 md:top-5 md:right-5",onClick:s,children:(0,m.jsx)("svg",{className:"stroke-text fill-transparent size-6 md:size-8",children:(0,m.jsx)("use",{xlinkHref:"".concat(a.Z,"#icon_close_btn")})})}),(0,m.jsx)("h2",{className:" text-[24px] md:text-[40px]/[1.2] tracking-[-0.8px] font-medium mb-5",children:"Book trial lesson"}),(0,m.jsx)("p",{className:"mb-6 md:mb-10 text-sm md:text-base/[1.37]",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),(0,m.jsxs)("div",{className:" flex flex-row  items-center gap-[14px] mb-6 md:mb-10",children:[(0,m.jsx)("img",{src:l,alt:"avatar",className:"size-11 rounded-full"}),(0,m.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,m.jsx)("p",{className:"text-lightGray text-xs font-medium ",children:"Your teacher"}),(0,m.jsx)("p",{className:"text-base font-medium",children:o})]})]}),(0,m.jsx)("p",{className:"text-base md:text-2xl font-medium mb-5",children:"What is your main reason for learning English?"}),(0,m.jsxs)("form",{onSubmit:v((function(){x.ZP.success("You have successfully booked a trial lesson"),s()})),className:"text-text ",children:[(0,m.jsxs)("div",{className:"h-[160px] md:h-[200px] overflow-y-auto overflow-x-hidden scroll-smooth",children:[(0,m.jsxs)("div",{className:"flex flex-col justify-center gap-2 md:gap-[18px] text-xs md:text-base/[1.37] font-normal mb-6 md:mb-10",children:[(0,m.jsxs)("label",{className:"flex items-center",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Career and business"},h("reason")),{},{className:"radio-input",defaultChecked:!0})),(0,m.jsx)("span",{className:"radio-indicator"}),"Career and business"]}),(0,m.jsxs)("label",{className:"flex items-center",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Lesson for kids"},h("reason")),{},{className:"radio-input"})),(0,m.jsx)("span",{className:"radio-indicator"}),"Lesson for kids"]}),(0,m.jsxs)("label",{className:"flex items-center",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Living abroad"},h("reason")),{},{className:"radio-input"})),(0,m.jsx)("span",{className:"radio-indicator"}),"Living abroad"]}),(0,m.jsxs)("label",{className:"flex items-center",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Exams and coursework"},h("reason")),{},{className:"radio-input"})),(0,m.jsx)("span",{className:"radio-indicator"}),"Exams and coursework"]}),(0,m.jsxs)("label",{className:"flex items-center",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio",name:"reason",value:"Culture, travel or hobby"},h("reason")),{},{className:"radio-input"})),(0,m.jsx)("span",{className:"radio-indicator"}),"Culture, travel or hobby"]})]}),(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({},h("fullName")),{},{placeholder:"Full Name",className:" w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base  placeholder:text-text border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),b&&(0,m.jsx)("p",{className:" absolute text-accent text-xs -bottom-0 left-2 ",children:null===(t=b.fullName)||void 0===t?void 0:t.message})]}),(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({},h("email")),{},{placeholder:"Email",className:" w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base placeholder:text-text border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),b&&(0,m.jsx)("p",{className:" absolute text-accent text-xs  -bottom-0 left-2",children:null===(r=b.email)||void 0===r?void 0:r.message})]}),(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsx)("input",(0,c.Z)((0,c.Z)({placeholder:"Phone number"},h("phone")),{},{className:"w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base placeholder:text-text  border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"})),b&&(0,m.jsx)("p",{className:" absolute text-accent text-xs  -bottom-0 left-2",children:null===(n=b.phone)||void 0===n?void 0:n.message})]})]}),(0,m.jsx)(d.z,{text:"Book",className:"mt-6 md:mt-[32px]"})]})]})},h=function(e){var t=e.teacher,r=e.isFavorite,c=e.handleFavorite,i=t.id,o=t.avatar_url,u=t.name,x=t.surname,d=t.lessons_done,p=t.rating,h=t.price_per_hour,v=t.languages,b=t.lesson_info,g=t.conditions,j=t.experience,N=t.reviews,w=t.levels,k=(0,s.useState)(!1),Z=(0,n.Z)(k,2),y=Z[0],_=Z[1],C=(0,s.useState)(!1),z=(0,n.Z)(C,2),E=z[0],P=z[1],S=function(e,t){return e.map((function(r,n){return(0,m.jsxs)("span",{className:"text-text ".concat("languages"===t?"underline":""," "),children:[r,n!==e.length-1&&", "]},r)}))},F=function(){P(!1)};return(0,m.jsxs)("div",{className:"relative p-2 md:p-3 lg:p-6 flex flex-col items-center lg:items-start lg:flex-row gap-3 md:gap-6 lg:gap-12 bg-white rounded-3xl text-text font-medium",children:[(0,m.jsx)("div",{className:"min-w-[120px] h-[120px] rounded-full border-[3px] border-background flex justify-center items-center ",children:(0,m.jsx)("img",{src:o,alt:"avatar",className:"size-[96px] rounded-full"})}),(0,m.jsxs)("div",{className:" flex flex-col  gap-3 md:gap-6 lg:gap-8  w-full",children:[(0,m.jsxs)("div",{className:" flex flex-col  lg:flex-row justify-between items-center lg:justify-between lg:items-start w-full gap-2",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-2 ",children:[(0,m.jsx)("p",{className:" text-center lg:text-left text-lightGray",children:"Teacher"}),(0,m.jsx)("h2",{className:"text-2xl ",children:u+" "+x})]}),(0,m.jsxs)("ul",{className:"flex flex-row text-sm md:text-base items-center gap-2 flex-wrap lg:gap-4 lg:mr-16",children:[(0,m.jsxs)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2]",children:[(0,m.jsx)("svg",{className:"stroke-black fill-transparent size-4",children:(0,m.jsx)("use",{xlinkHref:"".concat(a.Z,"#icon_book_open")})}),(0,m.jsx)("p",{children:"Lessons online"})]}),(0,m.jsx)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2]",children:(0,m.jsxs)("p",{children:["Lessons done: ",d]})}),(0,m.jsxs)("li",{className:"inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2]",children:[(0,m.jsx)("svg",{className:"  size-4",children:(0,m.jsx)("use",{xlinkHref:"".concat(a.Z,"#icon_star")})}),(0,m.jsxs)("p",{children:["Rating: ",p]})]}),(0,m.jsx)("li",{className:"inline-flex flex-row gap-2 items-center",children:(0,m.jsxs)("p",{children:["Price / 1 hour:"," ",(0,m.jsxs)("span",{className:"text-green",children:[h," $"]})]})})]}),(0,m.jsx)("button",{type:"button",className:"absolute flex justify-center items-center  top-2 right-2 md:top-3 md:right-3 lg:top-6 lg:right-6",onClick:function(){return c(i)},children:(0,m.jsx)("svg",{className:"  size-[24px]  ".concat(r?"fill-accent stroke-accent":"fill-transparent stroke-text"),children:(0,m.jsx)("use",{xlinkHref:"".concat(a.Z,"#icon_heart")})})})]}),(0,m.jsxs)("div",{className:"flex flex-col items-start gap-2 text-lightGray ",children:[(0,m.jsxs)("p",{children:["Speaks: ",S(v,"languages")]}),(0,m.jsxs)("p",{children:["Lesson Info: ",(0,m.jsx)("span",{className:"text-text",children:b})]}),(0,m.jsxs)("p",{children:["Conditions: ",S(g)]}),y&&(0,m.jsxs)("div",{className:"flex flex-col items-start gap-3 md:gap-6 lg:gap-8 text-text mb-2",children:[(0,m.jsx)("p",{className:"max-w-full break-words",children:j}),(0,m.jsx)("ul",{className:"flex flex-col gap-3 md:gap-6 lg:gap-8",children:N.map((function(e){var t=e.reviewer_name,r=e.reviewer_rating,n=e.comment;return(0,m.jsxs)("li",{children:[(0,m.jsx)("p",{className:"text-lightGray",children:t})," ",(0,m.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,m.jsx)("svg",{className:"size-4",children:(0,m.jsx)("use",{xlinkHref:"".concat(a.Z,"#icon_star")})}),(0,m.jsx)("p",{children:r})]}),(0,m.jsx)("p",{children:n})]},t)}))})]}),(0,m.jsx)("button",{type:"button",className:"underline mt-2 text-text",onClick:function(){_(!y)},children:y?"Read less":"Read more"})]}),(0,m.jsx)("ul",{className:"flex flex-row flex-wrap gap-2 text-text text-sm md:text-base ",children:w.map((function(e,t){return(0,m.jsx)("li",{children:(0,m.jsx)("button",{type:"button",className:" rounded-[35px] border border-text/[0.2] px-3 py-2 ",children:e})},e)}))}),y&&(0,m.jsx)("button",{type:"button",className:" w-full md:w-[232px] py-2 md:py-4 text-text bg-accent rounded-xl",onClick:function(){E||P(!0)},children:"Book trial lesson"})]}),E&&(0,m.jsx)(l.P,{isOpen:E,onClose:F,styleVariant:"default",children:(0,m.jsx)(f,{avatar_url:o,name:u+" "+x,onClose:F})})]})},v=function(e){var t=e.teachers,r=e.favorites,n=e.handleFavorite;return(0,m.jsx)("ul",{className:"flex flex-col gap-2 md:gap-4 lg:gap-8 md:flex-col items-center mb-5 md:mb-11 mx-auto",children:t.map((function(e){return(0,m.jsx)("li",{className:"w-full",children:(0,m.jsx)(h,{teacher:e,isFavorite:r.includes(e.id),handleFavorite:n})},e.id)}))})}},1256:function(e,t,r){r.d(t,{OT:function(){return p},Os:function(){return x},TC:function(){return d},id:function(){return m},mN:function(){return f}});var n=r(4942),s=r(1413),a=r(5861),l=r(7757),c=r.n(l),i=r(2685),o=r(8986),u=function(){var e=(0,a.Z)(c().mark((function e(t){var r,n,s,a,l,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:4,n=(0,i.iH)(o.db,"teachers"),s=t?(0,i.IO)(n,(0,i.R)(),(0,i.e0)(t),(0,i.Kk)(r+1)):(0,i.IO)(n,(0,i.R)("id"),(0,i.Kk)(r)),e.prev=3,e.next=6,(0,i.U2)(s);case 6:return a=e.sent,l=[],a.forEach((function(e){var t=e.val();l.push(t)})),e.abrupt("return",t?l.slice(1):l);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(c().mark((function e(){var t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:4,e.abrupt("return",u(null,t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(t){var r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:4,e.abrupt("return",u(t,r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.iH)(o.db,"teachers/".concat(t)),e.prev=1,e.next=4,(0,i.U2)(r);case 4:if(!(n=e.sent).exists()){e.next=9;break}return e.abrupt("return",(0,s.Z)({id:t},n.val()));case 9:return console.log("No teacher found for ID: ".concat(t)),e.abrupt("return",null);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(1),console.error("Error fetching teacher with ID: ".concat(t),e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.iH)(o.db,"users/".concat(t,"/favorites")),e.prev=1,e.next=4,(0,i.U2)(r);case 4:if(!(n=e.sent).exists()){e.next=9;break}return e.abrupt("return",n.val());case 9:return e.abrupt("return",[]);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(c().mark((function e(t,r,s){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,i.iH)(o.db,"users/".concat(t,"/favorites")),!s){e.next=6;break}return e.next=4,(0,i.Vx)(a,(0,n.Z)({},r,null));case 4:e.next=8;break;case 6:return e.next=8,(0,i.Vx)(a,(0,n.Z)({},r,!0));case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},7987:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(7762),s=r(5861),a=r(9439),l=r(7757),c=r.n(l),i=r(2791),o=r(1087),u=r(5218),x=r(8986),d=r(1256),m=r(9862),p=r(4642),f=r(184),h=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],l=t[1],h=(0,i.useState)([]),v=(0,a.Z)(h,2),b=v[0],g=v[1],j=(0,i.useState)(!1),N=(0,a.Z)(j,2),w=N[0],k=N[1],Z=(0,i.useState)(!0),y=(0,a.Z)(Z,2),_=y[0],C=y[1],z=x.I.currentUser;(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,d.OT)(z.uid);case 5:t=e.sent,r=Object.keys(t).filter((function(e){return t[e]})),l(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),u.ZP.error("Error fetching favorite teachers");case 13:return e.prev=13,C(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[z]),(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var t,s,a,l,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),t=[],e.prev=2,!(r.length>0)){e.next=26;break}s=(0,n.Z)(r),e.prev=5,s.s();case 7:if((a=s.n()).done){e.next=15;break}return l=a.value,e.next=11,(0,d.id)(l);case 11:(i=e.sent)&&t.push(i);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),s.e(e.t0);case 20:return e.prev=20,s.f(),e.finish(20);case 23:g(t),e.next=27;break;case 26:g([]);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(2),u.ZP.error("Error fetching teacher data");case 32:return e.prev=32,k(!1),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[2,29,32,35],[5,17,20,23]])})));return function(){return e.apply(this,arguments)}}();_||e()}),[r,_]);var E=function(){var e=(0,s.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=3;break}return u.ZP.error("Please, sign in for removing teachers from favorites"),e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,d.mN)(z.uid,t,!0);case 6:l((function(e){return e.filter((function(e){return e!==t}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),u.ZP.error("Error removing from favorites");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsx)("div",{className:" teachers-container",children:w||_?(0,f.jsx)(p.a,{}):b.length>0?(0,f.jsx)(m.s,{teachers:b,favorites:r,handleFavorite:E}):(0,f.jsxs)("p",{className:"mb-5 md:mb-11 text-base md:text-lg text-center",children:["Sorry, there are no favorite teachers yet. You can add some from the"," ",(0,f.jsx)(o.rU,{to:"/teachers",className:"text-accent font-semibold",children:"Teachers page"})]})})};function v(){return(0,f.jsx)(h,{})}}}]);
//# sourceMappingURL=987.7039ce18.chunk.js.map