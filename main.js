(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(82),t.b),u=c()(r()),l=s()(d);u.push([n.id,"body {\n    background-color: #83cffc;\n    background-image: url("+l+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 100px auto 50px;\n}\n\nbutton {\n    width: 120px;\n    background-color: #fdb273;\n    padding: 3px;\n    margin:10px 30px;\n    border:0.16em solid rgba(255,255,255,0);\n    border-radius:2em;\n    box-sizing: border-box;\n    text-decoration:none;\n    font-family:'Roboto',sans-serif;\n    font-size: large;\n    font-weight:300;\n    color:#FFFFFF;\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\n    text-align:center;\n    transition: all 0.2s;\n}\n\nbutton:hover {\n    border-color: rgba(255,255,255,1);\n}\n\n.button-active {\n    color: #373661;\n}\n\n.bouncy{\n    animation:bouncy 5s infinite linear;\n    position:relative;\n}\n@keyframes bouncy {\n    0%{top:0em}\n    40%{top:0em}\n    43%{top:-0.9em}\n    46%{top:0em}\n    48%{top:-0.4em}\n    50%{top:0em}\n    100%{top:0em;}\n} \n\n.header{\n    display: grid;\n    align-content: center;\n}\n\n.nav {\n    display: grid;\n    align-content: center;\n    grid-template-columns: auto 150px 150px 150px auto;\n    justify-items: end;\n}\n\n.center_content {\n    display: grid;\n    background-color: springgreen;\n}\n\n.footer{\n    background-color: springgreen;\n}",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=o(n,r),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},82:(n,e,t)=>{n.exports=t.p+"15fb778e00aaeb1c483c.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{const n=function(){const n=document.getElementById("center_content");let e;void 0===e&&(e=function(n){(n=document.createElement("div")).id="homeContent";const e=document.createElement("h1");return e.innerText="Welcome to Bluely's Burgers!",n.appendChild(e),n}(e)),n.appendChild(e),console.log("Home loaded")};var e,o,r=t(379),a=t.n(r),c=t(795),i=t.n(c),s=t(569),d=t.n(s),u=t(565),l=t.n(u),p=t(216),m=t.n(p),f=t(589),v=t.n(f),g=t(426),b={};function h(t){var r;(r=t.target.id)!=e&&(e=r,function(n){for(;n.firstChild;)n.removeChild(n.firstChild)}(document.getElementById("center_content")),document.getElementsByClassName("button-active")[0].classList.remove("button-active"),"home_btn"==r?(o[0].classList.add("button-active"),n()):"menu_btn"==r?(o[1].classList.add("button-active"),function(){const n=document.getElementById("center_content");let e;void 0===e&&(e=function(n){return(n=document.createElement("div")).id="menuContent",n}(e)),n.appendChild(e),console.log("Menu loaded")}()):"contact_btn"==r&&(o[2].classList.add("button-active"),function(){const n=document.getElementById("center_content");let e;void 0===e&&(e=function(n){return(n=document.createElement("div")).id="contactContent",n}(e)),n.appendChild(e),console.log("Contact loaded")}()))}b.styleTagTransform=v(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=m(),a()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("div");return n.classList.add("header"),n.appendChild(function(){const n=document.createElement("div");n.classList.add("nav");const e=document.createElement("button");e.innerHTML="Home",e.id="home_btn",e.classList.add("bouncy");const t=document.createElement("button");t.innerHTML="Menu",t.id="menu_btn",t.classList.add("bouncy"),t.style.animationDelay="0.07s";const o=document.createElement("button");return o.innerHTML="Contact",o.id="contact_btn",o.classList.add("bouncy"),o.style.animationDelay="0.14s",n.appendChild(e),n.appendChild(t),n.appendChild(o),n}()),n}()),n.appendChild(function(){const n=document.createElement("div");return n.id="center_content",n.classList.add("center_content"),n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("footer"),n}())}(),function(){const e=document.getElementById("content");(o=Array.from(e.getElementsByTagName("button"))).forEach((n=>{n.addEventListener("click",h)})),n(),o[0].classList.add("button-active")}()})()})();