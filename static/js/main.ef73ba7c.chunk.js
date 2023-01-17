(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o}));var r=function(e){return fetch("https://smartbrainapi-u3ff.onrender.com/api/profile",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},o=function(e){return fetch("https://smartbrainapi-u3ff.onrender.com/api/logout",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},i=function(e){e&&window&&window.sessionStorage&&window.sessionStorage.setItem("token",e)},a=function(){window&&window.sessionStorage&&window.sessionStorage.removeItem("token")},c=function(){return window&&window.sessionStorage&&window.sessionStorage.getItem("token")}},20:function(e,t,n){"use strict";n(10),n(322);var r=n(3);t.a=function(){return Object(r.jsx)("div",{id:"loading"})}},319:function(e,t,n){},320:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),i=n(37),a=n.n(i),c=(n(65),n(38)),s=n(39),u=n(58),l=n(57),d=n(59),h=n.n(d),f=(n(319),n(56)),j=n(14),p=n(20),b=(n(323),n(3)),g=o.a.lazy((function(){return n.e(5).then(n.bind(null,334))})),m=function(e){var t=e.onRouteChange,n=e.route,r=e.updateUserState,i=e.user;return Object(b.jsx)("div",{style:{marginBottom:"20px"},children:Object(b.jsx)("nav",{className:"navlink",children:"home"===n?Object(b.jsx)(o.a.Suspense,{fallback:Object(p.a)(),children:Object(b.jsx)(g,{user:i,updateUserState:r,signoutHandler:function(){Object(j.e)(Object(j.b)()),Object(j.c)(),r({error:"",user:{},route:"login"})}})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"route",onClick:function(){return t("login")},children:"Sign in"}),Object(b.jsx)("p",{className:"route",onClick:function(){return t("register")},children:"Register"})]})})})},O=n(23),v=(n(60),function(e){var t=e.onRouteChange,n=e.updateUserState,o=Object(r.useState)(""),i=Object(O.a)(o,2),a=i[0],c=i[1],s=Object(r.useState)(""),u=Object(O.a)(s,2),l=u[0],d=u[1],h=function(e){var t=e.target.name,n=e.target.value;"email"===t?c(n):"password"===t&&d(n)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Sign In"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&l&&function(e,t){fetch("https://smartbrainapi-u3ff.onrender.com/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.error)return n({error:e.error,user:{},route:"login"});var t=e.token;c(""),d(""),Object(j.d)(t),Object(j.a)(t).then((function(e){return e.error?n({error:e.error,user:{},route:"login"}):n({error:"",user:e.user,route:"home"})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}(a,l)},children:[Object(b.jsxs)("div",{className:"form-item",children:[Object(b.jsx)("label",{htmlFor:"email",children:Object(b.jsx)("h4",{children:"Email"})}),Object(b.jsx)("input",{onChange:h,type:"email",name:"email",id:"email",value:a})]}),Object(b.jsxs)("div",{className:"form-item",children:[Object(b.jsx)("label",{htmlFor:"password",children:Object(b.jsx)("h4",{children:"Password"})}),Object(b.jsx)("input",{onChange:h,type:"password",name:"password",id:"password",value:l})]}),Object(b.jsx)("div",{className:"form-item",children:Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)("h4",{children:"Sign in"})})})]}),Object(b.jsx)("p",{className:"route",onClick:function(){return t("register")},children:"Register"})]})}),w=o.a.lazy((function(){return n.e(9).then(n.bind(null,333))})),x=o.a.lazy((function(){return n.e(3).then(n.bind(null,336))})),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={route:"login",error:"",user:{name:"",entries:"",id:"",joined:"",email:"",age:"",pet:""}},e.options={particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,value_area:800},value:80}}},e.onRouteChange=function(t){e.state.route!==t&&e.setState({route:t,error:""})},e.updateUserState=function(t){var n=t.error,r=t.user,o=t.route;e.setState({error:n,user:r,route:o})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Object(j.b)();t&&Object(j.a)(t).then((function(t){return t.error?e.updateUserState({error:t.error,user:{},route:"login"}):e.updateUserState({error:"",user:t.user,route:"home"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{className:"particles",options:this.options}),Object(b.jsx)(m,{updateUserState:this.updateUserState,route:this.state.route,user:this.state.user,onRouteChange:this.onRouteChange}),"home"===this.state.route?Object(b.jsx)(o.a.Suspense,{fallback:Object(p.a)(),children:Object(b.jsx)(x,{user:this.state.user})}):Object(b.jsx)(f.a,{children:"login"===this.state.route?Object(b.jsx)(v,{updateUserState:this.updateUserState,onRouteChange:this.onRouteChange}):Object(b.jsx)(o.a.Suspense,{fallback:Object(p.a)(),children:Object(b.jsx)(w,{updateUserState:this.updateUserState,onRouteChange:this.onRouteChange})})}),this.state.error&&Object(b.jsx)("p",{style:{color:"red",textAlign:"center",fontSize:"2rem"},children:this.state.error})]})}}]),n}(o.a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/smart-brain",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/smart-brain","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(t,e)}))}}()},56:function(e,t,n){"use strict";n(10),n(320);var r=n(3);t.a=function(e){var t=e.children,n=e.classnames;return Object(r.jsx)("div",{className:"card ".concat(n),children:t})}},60:function(e,t,n){},65:function(e,t,n){}},[[324,1,2]]]);
//# sourceMappingURL=main.ef73ba7c.chunk.js.map