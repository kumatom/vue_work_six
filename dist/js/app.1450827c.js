(function(e){function t(t){for(var r,a,u=t[0],d=t[1],i=t[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=d(d.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return d.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c88b29e4","chunk-2d0cf132":"c5eff852","chunk-2d0e5e97":"76eae627","chunk-2d21e30b":"737a94f5","chunk-3b9bea71":"aa808b5d","chunk-3f51adda":"d9166da7","chunk-49a146b1":"2368db88","chunk-fc3f8614":"ceae57c2"}[e]+".js"}function d(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-3b9bea71":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0cf132":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d21e30b":"31d6cfe0","chunk-3b9bea71":"8c953e03","chunk-3f51adda":"31d6cfe0","chunk-49a146b1":"31d6cfe0","chunk-fc3f8614":"31d6cfe0"}[e]+".css",c=d.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=u(e);var s=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=r,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(n,r,function(t){return e[t]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("7bb1"),c=n("3aa8"),o=n("cbdf"),u=n("9457"),d=n("bc3a"),i=n.n(d),l=n("2106"),s=n.n(l);function f(e,t,n,a,c,o){return Object(r["s"])(),Object(r["d"])("div",{class:["alert mt-4",c.alertClass],role:"alert"},Object(r["A"])(n.content),3)}var h={props:["content","customClass"],data:function(){return{alertClass:"alert-danger"}},created:function(){this.alertClass=this.customClass}};h.render=f;var p=h;function b(e,t){var n=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(n)}n("ef81");const m={};m.render=b;var v=m,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),k=[{path:"/",component:n.e("chunk-2d21e30b").then(n.bind(null,"d504")),children:[{path:"products",component:n.e("chunk-fc3f8614").then(n.bind(null,"e6dc"))},{path:"product/:id",component:n.e("chunk-3f51adda").then(n.bind(null,"d2f1"))}]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",component:n.e("chunk-3b9bea71").then(n.bind(null,"a55b"))},{path:"/backend",name:"Backend",component:n.e("chunk-49a146b1").then(n.bind(null,"6a56")),children:[{path:"products",component:n.e("chunk-2d0cf132").then(n.bind(null,"61bc"))}]},{path:"/:pathMatch(.*)*",component:n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}],y=Object(g["a"])({history:Object(g["b"])(),routes:k}),O=y;Object(a["e"])("required",c["c"]),Object(a["e"])("email",c["a"]),Object(a["e"])("min",c["b"]),Object(a["d"])({generateMessage:Object(o["a"])({zh_TW:u}),validateOnInput:!0}),Object(o["b"])("zh_TW");var j=Object(r["c"])(v);j.use(O),j.use(s.a,i.a),j.component("Form",a["c"]),j.component("Field",a["b"]),j.component("ErrorMessage",a["a"]),j.component("Alert",p),j.mount("#app")},"713e":function(e,t,n){},ef81:function(e,t,n){"use strict";n("713e")}});
//# sourceMappingURL=app.1450827c.js.map