(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),c=n(645),a=n.n(c),i=n(667),s=n.n(i),d=new URL(n(82),n.b),u=a()(r()),l=s()(d);u.push([e.id,"body {\n    background-color: #83cffc;\n    background-image: url("+l+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n#content {\n    display: grid;\n}\n\nbutton {\n    width: 100px;\n}\n\n.button-active {\n    text-align: right;\n}\n\n.header{\n    display: grid;\n    align-content: center;\n}\n\n.nav {\n    display: grid;\n    align-content: center;\n    grid-template-columns: auto 100px 100px 100px auto;\n    justify-items: end;\n}\n\n.center_content {\n    height: 10px;\n    outline-color: red;\n}\n\n.footer{\n\n}",""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=c[d]||0,l="".concat(d," ").concat(u);c[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),d=0;d<c.length;d++){var u=n(c[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},82:(e,t,n)=>{e.exports=n.p+"15fb778e00aaeb1c483c.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{const e=function(){const e=document.getElementById("center_content");let t;void 0===t&&(t=document.createElement("homeContent")),e.appendChild(t),console.log("Home loaded")};var t,o,r=n(379),c=n.n(r),a=n(795),i=n.n(a),s=n(569),d=n.n(s),u=n(565),l=n.n(u),p=n(216),f=n.n(p),m=n(589),v=n.n(m),h=n(426),g={};function b(n){var r;(r=n.target.id)!=t&&(t=r,function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.getElementById("center_content")),document.getElementsByClassName("button-active")[0].classList.remove("button-active"),"home_btn"==r?(o[0].classList.add("button-active"),e()):"menu_btn"==r?(o[1].classList.add("button-active"),function(){const e=document.getElementById("center_content");let t;void 0===t&&(t=document.createElement("menuContent")),e.appendChild(t),console.log("Menu loaded")}()):"contact_btn"==r&&(o[2].classList.add("button-active"),function(){const e=document.getElementById("center_content");let t;void 0===t&&(t=document.createElement("contactContent")),e.appendChild(t),console.log("Contact loaded")}()))}g.styleTagTransform=v(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),c()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");return e.classList.add("header"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("nav");const t=document.createElement("button");t.innerHTML="Home",t.id="home_btn";const n=document.createElement("button");n.innerHTML="Menu",n.id="menu_btn";const o=document.createElement("button");return o.innerHTML="Contact",o.id="contact_btn",e.appendChild(t),e.appendChild(n),e.appendChild(o),e}()),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="center_content",e.classList.add("center_content"),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e}())}(),function(){const t=document.getElementById("content");(o=Array.from(t.getElementsByTagName("button"))).forEach((e=>{e.addEventListener("click",b)})),e(),o[0].classList.add("button-active")}()})()})();