(this.webpackJsonpmesharefront=this.webpackJsonpmesharefront||[]).push([[0],{123:function(e,t,n){},144:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var a,r=n(0),s=n.n(r),c=n(9),i=n.n(c),o=(n(123),n(15)),l=n(10),d=n(267),u=n(277),j=n(273),p=n(272),m=n(11),b=n.n(m),h=n(21),x=n(279),g=n(274),f=n(240),O=n(278),v=n(239),w=n(271),y=n(108),S=n(35),k=n.n(S),C=function(){return k.a.get("".concat("http://13.126.37.93:5540/","doc/api/get_all_files"))},N=function(e){return k.a.post("".concat("http://13.126.37.93:5540/","doc/api/upload"),e)},F=n(1),I=Object(r.createContext)(),P=function(e,t){switch(t.type){case"GET_ALL_FILES":return{files:t.payload};default:return e}},E={files:[]},L=function(e){var t=e.children,n=Object(r.useReducer)(P,E),a=Object(l.a)(n,2),s=a[0],c=a[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(I.Provider,{value:{files:s.files,dispatch:c},children:t})})},_=function(){return Object(r.useContext)(I)},M=n(14),z=n(99),B=n(100),T=n.n(B),D=n(69),R=(n(144),Object(D.css)(a||(a=Object(z.a)(["\n  display : block\n"])))),A=function(e){var t=e.loading;return Object(F.jsx)("div",{className:t?"loader":"hide",children:Object(F.jsx)(T.a,{size:80,loading:t,css:R,color:"#131921"})})},U=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",border:"none"},textArea:{width:"330px",padding:"15px",borderRadius:"2px"},text:{marginTop:"4px",width:"100%",WebkitBoxSizing:"border-box",padding:"0.2rem",resize:"none",border:"none",fontWeight:400,letterSpacing:"0.04rem","&:focus":{outline:"none !important"},borderBottom:"1px solid black"},menuButton:{display:"flex",justifyContent:"flex-end",marginTop:"10px",marginBottom:0},close:{position:"absolute",right:"8px",top:"5px",zIndex:2},info:{padding:"15px",width:"350px"},listStyle:{textDecoration:"none",listStyle:"none",fontSize:"1rem"}}})),G=function(e){var t=e.open,n=e.handleClose,a=e.type,s=U(),c=Object(r.useState)(),i=Object(l.a)(c,2),o=i[0],d=i[1],u=_().dispatch,j=Object(r.useState)(!1),m=Object(l.a)(j,2),x=m[0],g=m[1],f=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:"success"===(t=e.sent).data.status&&u({type:"GET_ALL_FILES",payload:t.data.data}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,a={text:o},k.a.post("".concat("http://13.126.37.93:5540/","doc/api/add_text"),a);case 4:"success"===(t=e.sent).data.status&&(M.b.success(t.data.message),f()),g(!1),n(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g(!1);case 13:case"end":return e.stop()}var a}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{children:[Object(F.jsx)(O.a,{open:t,onClose:n,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:s.modal,style:{border:"none"},children:Object(F.jsx)("div",{children:"text"===a?Object(F.jsx)("div",{style:{position:"relative"},children:Object(F.jsxs)(v.a,{elevation:4,className:s.textArea,children:[Object(F.jsx)("div",{className:s.close,onClick:n,children:Object(F.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer"}})}),Object(F.jsx)("h5",{children:"Text Message"}),Object(F.jsx)(y.a,{className:s.text,onChange:function(e){d(e.target.value)}}),Object(F.jsx)("div",{className:s.menuButton,children:Object(F.jsx)(w.a,{size:"small",variant:"contained",color:"primary",onClick:S,children:"Send"})})]})}):Object(F.jsx)("div",{children:Object(F.jsxs)(v.a,{className:s.info,children:[Object(F.jsx)(p.a,{style:{textAlign:"center"},variant:"h4",children:"MeShare"}),Object(F.jsx)("li",{className:s.listStyle,children:"1)  Main puprpose of Meshare is to make it easy for sharing links and files across your own devices without the need of sharing with other people."}),Object(F.jsx)("li",{className:s.listStyle,children:"2)  You can use MeShare for sharing file and text/url across your devices."}),Object(F.jsx)("li",{className:s.listStyle,children:"3)  You can download image and docs by clicking on download icon."}),Object(F.jsx)("li",{className:s.listStyle,children:"4)  You can add text/url by using write icon in the sidebar."}),Object(F.jsx)("li",{className:s.listStyle,children:"5)  You can share file upto 1 Mb."}),Object(F.jsxs)("li",{className:s.listStyle,children:[Object(F.jsx)("strong",{children:"Note:"})," All the documents will be deleted after 1 hour."]})]})})})}),x&&Object(F.jsx)(A,{loading:x})]})},W=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:70,flexShrink:0,border:"none"},drawerPaper:{width:70,backgroundColor:"white",border:"none"},drawerContainer:{display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center",overflow:"hidden",border:"none"},iconArea:{display:"flex",justifyContent:"center",alignItems:"center"},iconText:{marginLeft:"0.2rem",fontSize:"1.2rem"}}})),J=function(){var e=W(),t=_().dispatch,n=Object(r.useState)(!1),a=Object(l.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)("text"),o=Object(l.a)(i,2),d=o[0],u=o[1],p=Object(r.useState)(!1),m=Object(l.a)(p,2),O=m[0],v=m[1],w=function(e){c(!s),u(e)},y=function(){var e=Object(h.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:"success"===(n=e.sent).data.status&&t({type:"GET_ALL_FILES",payload:n.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),M.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,console.log("files",t),v(!0),n=new FormData,a=1048576,r=0,s=0;s<t.length;s++)n.append("doc",t[s]),r+=t[s].size;if(console.log("size",r),r>a&&M.b.error("File size should be less than 1 Mb"),!(r<a)){e.next=14;break}return e.next=12,N(n);case 12:"success"===e.sent.data.status&&y();case 14:v(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),v(!1),M.b.error("Something went wrong!");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{children:[Object(F.jsxs)(x.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:[Object(F.jsx)(j.a,{}),Object(F.jsxs)("div",{className:e.drawerContainer,children:[Object(F.jsx)(g.a,{children:Object(F.jsx)(f.a,{children:Object(F.jsxs)("label",{children:[Object(F.jsx)("i",{className:"far fa-images fa-2x"}),Object(F.jsx)("input",{style:{postion:"absolute",visibility:"hidden",zIndex:5,width:"1px",height:"1px"},multiple:!0,type:"file",accept:"image/*,.pdf,text/*",onChange:function(e){S(e.target.files)}})]})})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(f.a,{children:Object(F.jsx)("i",{onClick:function(){w("text")},className:"fas fa-pencil-alt fa-2x"})})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(f.a,{children:Object(F.jsx)("i",{onClick:function(){w("info")},className:"fas fa-info-circle fa-2x"})})})]})]}),s&&Object(F.jsx)(G,{open:s,setOpen:c,handleClose:function(){c(!1)},type:d}),O&&Object(F.jsx)(A,{loading:O})]})},H=n(281),Y=n(280),V=n(276),q=Object(r.createContext)(),K=function(e,t){switch(t.type){case"LOGIN_SUCCESS":return{email:t.payload.email,token:t.payload.token};case"LOGOUT_SUCCESS":return{email:"",token:!1};default:return e}},Q={email:"",token:""},X=function(e){var t=e.children,n=JSON.parse(localStorage.getItem("meShare"))||{email:"",token:""};n&&(Q.token=n.token,Q.email=n.email);var a=Object(r.useReducer)(K,Q),s=Object(l.a)(a,2),c=s[0],i=s[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(q.Provider,{value:{user:c,userDispatch:i},children:t})})},Z=function(){return Object(r.useContext)(q)},$=n(20),ee=function(e){var t=e.anchorEl,n=(e.handleClick,e.handleClose),a=Z().userDispatch,r=Object(o.g)();return Object(F.jsx)("div",{children:Object(F.jsxs)(Y.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:n,children:[Object(F.jsx)(V.a,{onClick:function(){n()},children:Object(F.jsx)($.b,{to:"/change-password",children:"ChangePassword"})}),Object(F.jsx)(V.a,{onClick:function(){n(),localStorage.removeItem("meShare"),a({type:"LOGOUT_SUCCESS"}),r.push("/login")},children:"Logout"})]})})},te=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,letterSpacing:"0.2rem"},navLink:{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center"},navItem:{fontSize:"1.2rem"}}})),ne=function(){var e=te(),t=Object(r.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1],c=Z().user,i=Object(o.h)("/home"),d=function(e){s(e.currentTarget)};return Object(F.jsxs)("div",{className:e.root,children:[Object(F.jsx)(u.a,{position:"fixed",style:{zIndex:1300,background:"white"},color:"transparent",children:Object(F.jsxs)(j.a,{className:e.navContainer,children:[Object(F.jsx)(p.a,{variant:"h4",className:e.title,children:"MeShare"}),Object(F.jsx)("div",{children:Object(F.jsxs)("ul",{className:e.navLink,children:[!c.token&&Object(F.jsx)("li",{className:e.navItem,children:Object(F.jsx)($.b,{to:"/login",children:"Login"})}),!c.token&&Object(F.jsx)("li",{className:e.navItem,children:Object(F.jsx)($.b,{to:"/signup",children:"Signup"})}),c.token&&Object(F.jsx)("li",{className:e.navItem,children:Object(F.jsx)($.b,{to:"/home",children:"Home"})}),c.token&&Object(F.jsx)("span",{style:{cursor:"pointer"},onClick:d,children:Object(F.jsx)(H.a,{children:c.email.charAt(0).toUpperCase()+c.email.charAt(1).toUpperCase()})})]})})]})}),Object(F.jsx)(ee,{anchorEl:a,handleClick:d,handleClose:function(){s(null)}}),c.token&&i&&Object(F.jsx)(J,{})]})},ae=n(17),re=n(64),se=n.n(re),ce=Object(d.a)((function(e){return{loginContainer:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},loginFormContainer:{width:"350px",padding:"10px"},loginForm:{width:"340px",padding:"2.5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid black"},input:{marginBottom:"15px"},loginBtn:{background:"blue"},signup:{fontSize:"0.9rem",marginTop:"0.5rem"},err:{color:"red",margin:0,fontSize:"0.8rem"}}})),ie=function(){var e=ce(),t=Object(o.g)(),n=Z().userDispatch,a=Object(r.useState)({email:"",err:!1,errMsg:""}),s=Object(l.a)(a,2),c=s[0],i=s[1],d=Object(r.useState)(""),u=Object(l.a)(d,2),j=u[0],m=u[1],x=Object(r.useState)(!1),g=Object(l.a)(x,2),f=g[0],O=g[1],v=function(){var e=Object(h.a)(b.a.mark((function e(){var a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=!0,se.a.isEmail(c.email)||(a=!1,i(Object(ae.a)(Object(ae.a)({},c),{},{err:!0,errMsg:"Email is not valid."}))),!a){e.next=14;break}return O(!0),e.next=7,o={email:c.email,password:j},k.a.post("".concat("http://13.126.37.93:5540/","user/auth/login"),o);case 7:r=e.sent,s={email:r.data.data.email,token:r.data.data.token},n({type:"LOGIN_SUCCESS",payload:s}),localStorage.setItem("meShare",JSON.stringify(s)),M.b.success(r.data.message,{position:"top-right",duration:1500}),O(!1),t.push("/home");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),O(!1),M.b.error(e.t0.response.data.message,{position:"top-right",duration:1500});case 20:case"end":return e.stop()}var o}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),y=function(e,t){"email"===e?i({email:t,err:!1,errMsg:""}):m(t)};return Object(F.jsxs)("div",{className:e.loginContainer,children:[Object(F.jsxs)("form",{className:e.loginForm,children:[Object(F.jsx)(p.a,{variant:"h4",children:"Login"}),Object(F.jsxs)("div",{className:e.input,children:[Object(F.jsx)("label",{htmlFor:"email",children:"Email"}),Object(F.jsx)("input",{id:"email",type:"email",placeholder:"Enter email",value:c.email,onChange:function(e){y("email",e.target.value)}}),c.err?Object(F.jsx)("span",{className:e.err,children:c.errMsg}):""]}),Object(F.jsxs)("div",{className:e.input,children:[Object(F.jsx)("label",{htmlFor:"password",children:"Password"}),Object(F.jsx)("input",{type:"password",id:"password",placeholder:"Enter Password",onChange:function(e){y("password",e.target.value)}})]}),Object(F.jsx)(w.a,{color:"primary",size:"large",variant:"contained",onClick:v,children:"Login"}),Object(F.jsx)("div",{className:e.signup,children:Object(F.jsxs)("span",{children:["Don't have an account ? ",Object(F.jsx)($.b,{style:{color:"#3f51b5"},to:"/signup",children:"Signup"})]})})]}),f&&Object(F.jsx)(A,{loading:f})]})},oe=Object(d.a)((function(e){return{loginContainer:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},loginFormContainer:{width:"350px",padding:"10px"},loginForm:{width:"340px",padding:"2.5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid black"},input:{marginBottom:"15px"},loginBtn:{background:"blue"},signup:{fontSize:"0.9rem",marginTop:"0.5rem"},err:{color:"red",margin:0,fontSize:"0.8rem"}}})),le=function(){var e=oe(),t=Object(o.g)(),n=Object(r.useState)({email:"",err:!1,errMsg:""}),a=Object(l.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)({password:"",err:!1,errMsg:""}),d=Object(l.a)(i,2),u=d[0],j=d[1],m=Object(r.useState)(!1),x=Object(l.a)(m,2),g=x[0],f=x[1],O=function(){var e=Object(h.a)(b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=!0,se.a.isEmail(s.email)||(n=!1,c(Object(ae.a)(Object(ae.a)({},s),{},{err:!0,errMsg:"Email is not valid."}))),u.password.length<6&&(n=!1,j(Object(ae.a)(Object(ae.a)({},u),{},{err:!0,errMsg:"Password legnth mustbe atleast 6"}))),!n){e.next=12;break}return f(!0),e.next=8,r={email:s.email,password:u.password},k.a.post("".concat("http://13.126.37.93:5540/","user/auth/register"),r);case 8:a=e.sent,M.b.success(a.data.message,{position:"top-right",duration:1500}),f(!1),t.push("/login");case 12:e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),f(!1),console.log("error",e.t0),M.b.error(e.t0.response.data.message,{position:"top-right",duration:1500});case 19:case"end":return e.stop()}var r}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),v=function(e,t){"email"===e?c({email:t,err:!1,errMsg:""}):j({password:t,err:!1,errMsg:""})};return Object(F.jsxs)("div",{className:e.loginContainer,children:[Object(F.jsxs)("form",{className:e.loginForm,children:[Object(F.jsx)(p.a,{variant:"h4",children:"Signup"}),Object(F.jsxs)("div",{className:e.input,children:[Object(F.jsx)("label",{htmlFor:"email",children:"Email"}),Object(F.jsx)("input",{id:"email",type:"email",placeholder:"Enter email",value:s.email,onChange:function(e){v("email",e.target.value)}}),s.err?Object(F.jsx)("span",{className:e.err,children:s.errMsg}):""]}),Object(F.jsxs)("div",{className:e.input,children:[Object(F.jsx)("label",{htmlFor:"password",children:"Password"}),Object(F.jsx)("input",{type:"password",id:"password",placeholder:"Enter Password",value:u.password,onChange:function(e){v("password",e.target.value)}}),u.err?Object(F.jsx)("span",{className:e.err,children:u.errMsg}):""]}),Object(F.jsx)(w.a,{color:"primary",size:"large",variant:"contained",onClick:O,children:"Signup"}),Object(F.jsx)("div",{className:e.signup,children:Object(F.jsxs)("span",{children:["Already have an account? ",Object(F.jsx)($.b,{style:{color:"#3f51b5"},to:"/login",children:"Login"})]})})]}),g&&Object(F.jsx)(A,{loading:g})]})},de=n(37),ue=n(107),je=Object(d.a)((function(e){return{drag:Object(de.a)({border:"2px dashed black",textAlign:"center",padding:"15px",borderRadius:"8px",backgroundColor:"#fafafa"},e.breakpoints.up("md"),{padding:"20px"})}})),pe=function(e){var t=e.uploadFiles,n=je();return Object(F.jsx)("div",{className:n.drag,children:Object(F.jsx)(ue.a,{maxSize:1048576,accept:"image/*,.pdf,text/*",onDrop:function(e){e.length>0&&function(e){t(e)}(e)},multiple:!0,maxFiles:2,onDropRejected:function(e){M.b.error("File size must less than 1 MB")},children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(F.jsx)("section",{children:Object(F.jsxs)("div",Object(ae.a)(Object(ae.a)({},t()),{},{children:[Object(F.jsx)("input",Object(ae.a)({},n())),Object(F.jsx)("p",{children:"Drag 'n' drop"})]}))})}})})},me=n(282),be=n(72),he=n.n(be),xe=Object(d.a)((function(e){return{root:{marginTop:"1.5rem"},title:{marginBottom:"1rem"},name:{marginBottom:"0.8rem"},imageView:{display:"flex",flexWrap:"wrap"},imageContainer:{maxWidth:"200px",marginBottom:"0.8rem",marginRight:"1rem",borderRadius:"2px"},image:{maxWidth:"100%",objectFit:"contain"},fileContainer:{display:"flex",flexDirection:"column",marginRight:"0.9rem",marginBottom:"1rem",padding:"1.6rem",flexWrap:"wrap",border:"1px solid grey",borderRadius:"5px",position:"relative"},fileName:{width:"180px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",margin:"0"},userImg:{height:"200px",width:"200px",marginBottom:"0.4rem"},download:{position:"absolute",right:"5px",top:"4px",cursor:"pointer"},textUrl:{border:"1px solid black",marginBottom:"0.6rem",padding:"10px",borderRadius:"6px",fontSize:"1.2rem",letterSpacing:"0.1rem",wordWrap:"wrap"}}})),ge=function(e){var t=e.userFiles,n=xe(),a=t.filter((function(e){return"image"===e.type})),r=t.filter((function(e){return"doc"===e.type})),s=t.filter((function(e){return"text"===e.type||"url"===e.type})),c=function(e,t){fetch(e).then((function(e){e.blob().then((function(e){var n=window.URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,a.click()}))}))};return Object(F.jsxs)("div",{className:n.root,children:[Object(F.jsx)(p.a,{className:n.title,variant:"h4",children:"Recents"}),a.length>0&&Object(F.jsx)(p.a,{className:n.name,variant:"h5",children:"Images"}),a.length>0&&Object(F.jsx)("div",{className:n.imageView,children:a.map((function(e,t){return Object(F.jsx)(me.a,{title:e.original_name,children:Object(F.jsxs)("div",{className:n.fileContainer,children:[Object(F.jsx)("div",{className:n.imgContainer,children:Object(F.jsx)("img",{className:n.userImg,src:e.file_name,alt:"photos"})}),Object(F.jsx)("div",{className:n.fileName,children:e.original_name}),Object(F.jsx)(he.a,{className:n.download,onClick:function(){return c(e.file_name,e.original_name)}})]},t)},t)}))}),r.length>0&&Object(F.jsx)(p.a,{className:n.name,variant:"h5",children:"Documents"}),Object(F.jsx)("div",{className:n.imageView,children:r.map((function(e,t){var a="pdf"===e.original_name.split(".")[1]?"http://13.126.37.93:5540/uploads/document/1633186955262pdf.png":"http://13.126.37.93:5540/uploads/document/1633187229308doc.png";return Object(F.jsx)(me.a,{title:e.original_name,children:Object(F.jsxs)("div",{className:n.fileContainer,children:[Object(F.jsx)("div",{className:n.imgContainer,children:Object(F.jsx)("img",{className:n.userImg,src:a,alt:"files"})}),Object(F.jsx)("div",{className:n.fileName,children:e.original_name}),Object(F.jsx)(he.a,{className:n.download,onClick:function(){c(e.file_name,e.original_name)}})]})},t)}))}),s.length>0&&Object(F.jsx)(p.a,{className:n.name,variant:"h5",children:"Texts / Urls"}),s.map((function(e,t){return Object(F.jsx)("div",{className:n.textUrl,children:"text"===e.type?Object(F.jsx)("span",{children:e.text}):Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(e.text),style:{color:"blue",overflowWrap:"break-word"},children:e.text})},t)}))]})},fe=Object(d.a)((function(e){return{container:{marginLeft:"70px",marginTop:"1rem"},root:Object(de.a)({marginTop:"2rem",margin:"0 auto",width:"85%"},e.breakpoints.up("md"),{width:"75%"}),menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Oe=function(){var e=fe(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],c=_(),i=c.files,o=c.dispatch,d=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:"success"===(t=e.sent).data.status&&o({type:"GET_ALL_FILES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),M.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,s(!0),n=new FormData,a=0;a<t.length;a++)n.append("doc",t[a]);return e.next=6,N(n);case 6:"success"===e.sent.data.status&&d(),s(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),s(!1),M.b.error("Something went wrong!");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),Object(F.jsxs)("div",{className:e.container,children:[Object(F.jsxs)("div",{className:e.root,children:[Object(F.jsx)(j.a,{}),Object(F.jsx)(pe,{uploadFiles:u}),Object(F.jsx)(ge,{userFiles:i})]}),a&&Object(F.jsx)(A,{loading:a})]})},ve=Object(d.a)((function(e){return{changePasswordContainer:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},changePasswordForm:{width:"320px",padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid black"},input:{marginBottom:"15px"},err:{color:"red",margin:0,fontSize:"0.8rem"}}})),we=function(){var e=ve(),t=Object(o.g)(),n=Object(r.useState)(!1),a=Object(l.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(),d=Object(l.a)(i,2),u=d[0],j=d[1],m=Object(r.useState)({password:"",err:!1,errMsg:""}),x=Object(l.a)(m,2),g=x[0],f=x[1],O=function(){var e=Object(h.a)(b.a.mark((function e(){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c(!0),n=!0,a=g.password.trim(),console.log("password",g),a.length<6&&(f(Object(ae.a)(Object(ae.a)({},g),{},{err:!0,errMsg:"Password length must be greater than 5"})),n=!1),!n){e.next=12;break}return e.next=9,s={password:u,newPassword:a},k.a.put("".concat("http://13.126.37.93:5540/","user/api/change_password"),s);case 9:r=e.sent,M.c.success(r.data.message),t.push("/home");case 12:c(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),c(!1),M.c.error(e.t0.response.data.message);case 19:case"end":return e.stop()}var s}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:e.changePasswordContainer,children:[Object(F.jsxs)("form",{className:e.changePasswordForm,children:[Object(F.jsx)(p.a,{variant:"h5",children:"Change Password"}),Object(F.jsxs)("div",{className:e.input,children:[Object(F.jsx)("label",{htmlFor:"currentPassword",children:"Current Password"}),Object(F.jsx)("input",{id:"currentPassword",type:"password",placeholder:"Enter current password",onChange:function(e){j(e.target.value)}})]}),Object(F.jsxs)("div",{className:e.input,children:[Object(F.jsx)("label",{htmlFor:"newPassword",children:"New Password"}),Object(F.jsx)("input",{type:"password",id:"newPassword",placeholder:"Enter new password",onChange:function(e){f({password:e.target.value,err:!1,errMsg:""})}}),g.err?Object(F.jsx)("span",{className:e.err,children:g.errMsg}):""]}),Object(F.jsx)(w.a,{color:"primary",size:"large",variant:"contained",onClick:O,children:"Update"})]}),s&&Object(F.jsx)(A,{loading:s})]})};!function(e){e.interceptors.request.use((function(e){if(e.url.includes("api")){var t=JSON.parse(localStorage.getItem("meShare"));e.headers.token=t.token}return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use(null,(function(e){if(e.response)return 401===e.response.status?(localStorage.removeItem("meShare"),window.location.href="/login",Promise.reject(e)):Promise.reject(e);if(e.request){return Promise.reject({response:{data:{message:"Something went wrong,Please try again later!!!"}}})}}))}(k.a);var ye=n(109),Se=["path"],ke=function(e){var t=e.path,n=Object(ye.a)(e,Se);return Z().user.token?Object(F.jsx)(o.b,Object(ae.a)(Object(ae.a)({},n),{},{path:t})):Object(F.jsx)(o.a,{to:"/login"})};n(236);var Ce=function(){return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(ne,{}),Object(F.jsx)(M.a,{}),Object(F.jsxs)(o.d,{children:[Object(F.jsx)(o.b,{path:"/login",component:ie,exact:!0}),Object(F.jsx)(o.b,{path:"/signup",component:le,exact:!0}),Object(F.jsx)(ke,{path:"/home",component:Oe,exact:!0}),Object(F.jsx)(ke,{path:"/",component:Oe,exact:!0}),Object(F.jsx)(ke,{path:"/change-password",component:we,exact:!0})]})]})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,283)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)($.a,{children:Object(F.jsx)(X,{children:Object(F.jsx)(L,{children:Object(F.jsx)(Ce,{})})})})}),document.getElementById("root")),Ne()}},[[237,1,2]]]);
//# sourceMappingURL=main.4650a3d1.chunk.js.map