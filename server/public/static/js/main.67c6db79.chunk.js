(this["webpackJsonpnasa-fe"]=this["webpackJsonpnasa-fe"]||[]).push([[0],{207:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(31),a=n.n(r),s=n(18),i=n(3),l=n(19),o=n(6),u=n(7),d=n.n(u),h=n(14),j="http://localhost:8000/v1";function b(){return m.apply(this,arguments)}function m(){return(m=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/planets"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/launches"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.sort((function(e,t){return e.flightNumber-t.flightNumber})));case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function O(e){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/launches"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{ok:!1,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/launches/").concat(t),{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({flightNumber:t})});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{ok:!1,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useCallback)(Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){a()}),[a]),n};var k=function(e,t,n){var r=Object(c.useState)([]),a=Object(l.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(!1),u=Object(l.a)(o,2),j=u[0],b=u[1],m=Object(c.useCallback)(Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){m()}),[m]),{launches:s,isPendingLaunch:j,submitLaunch:Object(c.useCallback)(function(){var t=Object(h.a)(d.a.mark((function t(c){var r,a,s,i,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),r=new FormData(c.target),a=new Date(r.get("launch-day")),s=r.get("mission-name"),i=r.get("rocket-name"),l=r.get("planets-selector"),t.next=8,O({launchDate:a,mission:s,rocket:i,target:l});case 8:o=t.sent,o.ok?(m(),setTimeout((function(){b(!1),e()}),800)):n();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[m,e,n]),abortLaunch:Object(c.useCallback)(function(){var e=Object(h.a)(d.a.mark((function e(c){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c);case 2:r=e.sent,r.ok?(m(),t()):n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,t,n])}},w=n(16),N=n(23),S=n(0),L=Object(i.withStyles)((function(){return{root:{margin:"0 auto",maxWidth:800},"@media (max-width: 800px)":{root:{margin:"0 12px"}}}}))((function(e){var t=e.classes,n=e.className,c=e.children,r=Object(N.a)(e,["classes","className","children"]);return Object(S.jsx)("div",Object(w.a)(Object(w.a)({className:"".concat(t.root," ").concat(n)},r),{},{children:c}))})),T=Object(i.withSounds)()((function(e){var t=e.children,n=e.sounds,c=e.onClick,r=Object(N.a)(e,["children","sounds","onClick"]);return Object(S.jsx)("span",Object(w.a)(Object(w.a)({},r),{},{onClick:function(e){n.click&&n.click.play(),c&&c(e)},children:t}))})),A=Object(i.withStyles)((function(e){return{root:{display:"flex",flexDirection:"row",lineHeight:"80px"},logo:{display:"inherit",marginTop:"15px"},nav:{display:"inherit"},banner:{display:"inherit",fontWeight:"bold",marginLeft:"10px",marginRight:"15px",fontSize:28},clickable:{fontSize:21,"& i":{marginRight:e.padding/2,fontSize:24}},link:{color:e.color.content,textDecoration:"none"},button:{padding:[0,e.padding/2]},"@media (max-width: 800px)":{logo:{display:"none"},img:{display:"none"},banner:{display:"none"},button:{padding:[0,8]},clickable:{fontSize:16}}}}))((function(e){var t=e.classes,n=e.onNav,c=Object(N.a)(e,["classes","onNav"]);return Object(S.jsx)(i.Header,{animate:!0,children:Object(S.jsxs)(L,Object(w.a)(Object(w.a)({className:t.root},c),{},{children:[Object(S.jsx)("img",{src:"/favicon.png",alt:"",className:t.img,style:{margin:"15px 10px 15px 0",height:"50px",width:"auto"}}),Object(S.jsx)(i.Logo,{animate:!0,size:50,className:t.logo,layer:"header"}),Object(S.jsx)(i.Words,{animate:!0,className:t.banner,children:"NASA Mission Control"}),Object(S.jsxs)("nav",{className:"".concat(t.nav),children:[Object(S.jsx)(T,{className:t.clickable,onClick:n,children:Object(S.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(S.jsxs)(s.b,{className:t.link,to:"/launch",children:[Object(S.jsx)("i",{className:"material-icons",children:"check_circle_outline"}),"Launch"]})})}),Object(S.jsx)(T,{className:t.clickable,onClick:n,children:Object(S.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(S.jsxs)(s.b,{className:t.link,to:"/upcoming",children:[Object(S.jsx)("i",{className:"material-icons",children:"update"}),"Upcoming"]})})}),Object(S.jsx)(T,{className:t.clickable,onClick:n,children:Object(S.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(S.jsxs)(s.b,{className:t.link,to:"/history",children:[Object(S.jsx)("i",{className:"material-icons",children:"history"}),"History"]})})})]})]}))})})),D=function(){return Object(S.jsx)(i.Footer,{animate:!0,children:Object(S.jsx)(L,{children:Object(S.jsx)(i.Paragraph,{style:{fontSize:14,margin:"10px 0"},children:"This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only."})})})},C=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.planets)||void 0===t?void 0:t.map((function(e){return Object(S.jsx)("option",{value:e.kepler_name,children:e.kepler_name},e.kepler_name)}))}),[e.planets]),n=(new Date).toISOString().split("T")[0];return Object(S.jsxs)(i.Appear,{id:"launch",animate:!0,show:e.entered,children:[Object(S.jsx)(i.Paragraph,{children:"Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets."}),Object(S.jsx)(i.Paragraph,{children:"Only confirmed planets matching the following criteria are available for the earliest scheduled missions:"}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Planetary radius < 1.6 times Earth's radius"}),Object(S.jsx)("li",{children:"Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value"})]}),Object(S.jsxs)("form",{onSubmit:e.submitLaunch,style:{display:"inline-grid",gridTemplateColumns:"auto auto",gridGap:"10px 20px"},children:[Object(S.jsx)("label",{htmlFor:"launch-day",children:"Launch Date"}),Object(S.jsx)("input",{type:"date",id:"launch-day",name:"launch-day",min:n,max:"2040-12-31",defaultValue:n}),Object(S.jsx)("label",{htmlFor:"mission-name",children:"Mission Name"}),Object(S.jsx)("input",{type:"text",id:"mission-name",name:"mission-name"}),Object(S.jsx)("label",{htmlFor:"rocket-name",children:"Rocket Type"}),Object(S.jsx)("input",{type:"text",id:"rocket-name",name:"rocket-name",defaultValue:"Explorer IS1"}),Object(S.jsx)("label",{htmlFor:"planets-selector",children:"Destination Exoplanet"}),Object(S.jsx)("select",{id:"planets-selector",name:"planets-selector",children:t}),Object(S.jsx)(T,{children:Object(S.jsx)(i.Button,{animate:!0,show:e.entered,type:"submit",layer:"success",disabled:e.isPendingLaunch,children:"Launch Mission \u2714"})}),e.isPendingLaunch&&Object(S.jsx)(i.Loading,{animate:!0,small:!0})]})]})},P=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.launches)||void 0===t?void 0:t.filter((function(e){return!e.upcoming})).map((function(e){var t;return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(S.jsx)("span",{style:{color:e.success?"greenyellow":"red"},children:"\u2588"})}),Object(S.jsx)("td",{children:e.flightNumber}),Object(S.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(S.jsx)("td",{children:e.mission}),Object(S.jsx)("td",{children:e.rocket}),Object(S.jsx)("td",{children:null===(t=e.customers)||void 0===t?void 0:t.join(", ")})]},String(e.flightNumber))}))}),[e.launches]);return Object(S.jsx)("article",{id:"history",children:Object(S.jsxs)(i.Appear,{animate:!0,show:e.entered,children:[Object(S.jsx)(i.Paragraph,{children:"History of mission launches including SpaceX launches starting from the year 2006."}),Object(S.jsx)(i.Table,{animate:!0,children:Object(S.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{style:{width:"2rem"}}),Object(S.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(S.jsx)("th",{style:{width:"9rem"},children:"Date"}),Object(S.jsx)("th",{children:"Mission"}),Object(S.jsx)("th",{style:{width:"7rem"},children:"Rocket"}),Object(S.jsx)("th",{children:"Customers"})]})}),Object(S.jsx)("tbody",{children:t})]})})]})})},E=Object(i.withStyles)((function(){return{link:{color:"red",textDecoration:"none"}}}))((function(e){var t=e.entered,n=e.launches,r=e.classes,a=e.abortLaunch,s=Object(c.useMemo)((function(){return null===n||void 0===n?void 0:n.filter((function(e){return e.upcoming})).map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(S.jsx)(T,{style:{color:"red"},children:Object(S.jsx)(i.Link,{className:r.link,onClick:function(){return a(e.flightNumber)},children:"\u2716"})})}),Object(S.jsx)("td",{children:e.flightNumber}),Object(S.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(S.jsx)("td",{children:e.mission}),Object(S.jsx)("td",{children:e.rocket}),Object(S.jsx)("td",{children:e.target})]},String(e.flightNumber))}))}),[n,a,r.link]);return Object(S.jsxs)(i.Appear,{id:"upcoming",animate:!0,show:t,children:[Object(S.jsx)(i.Paragraph,{children:"Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets."}),Object(S.jsx)(i.Words,{animate:!0,children:"Warning! Clicking on the \u2716 aborts the mission."}),Object(S.jsx)(i.Table,{animate:!0,show:t,children:Object(S.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{style:{width:"3rem"}}),Object(S.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(S.jsx)("th",{style:{width:"10rem"},children:"Date"}),Object(S.jsx)("th",{style:{width:"11rem"},children:"Mission"}),Object(S.jsx)("th",{style:{width:"11rem"},children:"Rocket"}),Object(S.jsx)("th",{children:"Destination"})]})}),Object(S.jsx)("tbody",{children:s})]})})]})})),F=Object(i.withSounds)()(Object(i.withStyles)((function(){return{content:{display:"flex",flexDirection:"column",height:"100vh",margin:"auto"},centered:{flex:1,paddingTop:"20px",paddingBottom:"10px"}}}))((function(e){var t=e.sounds,n=e.classes,r=Object(c.useState)(!0),a=Object(l.a)(r,2),s=a[0],u=a[1],d=k((function(){return t.success&&t.success.play()}),(function(){return t.abort&&t.abort.play()}),(function(){return t.warning&&t.warning.play()})),h=d.launches,j=d.isPendingLaunch,b=d.submitLaunch,m=d.abortLaunch,p=v();return Object(S.jsxs)("div",{className:n.content,children:[Object(S.jsx)(A,{onNav:function(){u(!1),setTimeout((function(){u(!0)}),600)}}),Object(S.jsx)(L,{className:n.centered,children:Object(S.jsx)(i.Frame,{animate:!0,show:s,corners:4,style:{visibility:s?"visible":"hidden"},children:function(e){return Object(S.jsx)("div",{style:{padding:"20px"},children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",children:Object(S.jsx)(C,{entered:e.entered,planets:p,submitLaunch:b,isPendingLaunch:j})}),Object(S.jsx)(o.a,{exact:!0,path:"/launch",children:Object(S.jsx)(C,{entered:e.entered,planets:p,submitLaunch:b,isPendingLaunch:j})}),Object(S.jsx)(o.a,{exact:!0,path:"/upcoming",children:Object(S.jsx)(E,{entered:e.entered,launches:h,abortLaunch:m})}),Object(S.jsx)(o.a,{exact:!0,path:"/history",children:Object(S.jsx)(P,{entered:e.entered,launches:h})})]})})}})}),Object(S.jsx)(D,{})]})}))),M={small:"/img/background-small.jpg",medium:"/img/background-medium.jpg",large:"/img/background-large.jpg"},H="/img/glow.png",z={shared:{volume:.5},players:{click:{sound:{src:["/sound/click.mp3"]},settings:{oneAtATime:!0}},typing:{sound:{src:["/sound/typing.mp3"]},settings:{oneAtATime:!0}},deploy:{sound:{src:["/sound/deploy.mp3"]},settings:{oneAtATime:!0}},success:{sound:{src:["/sound/success.mp3"],volume:.2},settings:{oneAtATime:!0}},abort:{sound:{src:["/sound/abort.mp3"]},settings:{oneAtATime:!0}},warning:{sound:{src:["/sound/warning.mp3"]},settings:{oneAtATime:!0}}}},W={color:{content:"#a1ecfb"},padding:20,responsive:{small:600,medium:800,large:1200},typography:{headerFontFamily:'"Titillium Web", "sans-serif"'}},R=function(){return Object(S.jsx)(i.ThemeProvider,{theme:Object(i.createTheme)(W),children:Object(S.jsx)(i.SoundsProvider,{sounds:Object(i.createSounds)(z),children:Object(S.jsx)(i.Arwes,{animate:!0,background:M.large,pattern:H,children:function(e){return Object(S.jsx)(s.a,{children:Object(S.jsx)(F,{show:e.entered})})}})})})};a.a.render(Object(S.jsx)(R,{}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.67c6db79.chunk.js.map