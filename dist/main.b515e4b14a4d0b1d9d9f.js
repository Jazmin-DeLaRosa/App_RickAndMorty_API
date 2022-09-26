/*! For license information please see main.b515e4b14a4d0b1d9d9f.js.LICENSE.txt */
!function(){"use strict";var r,e={5926:function(r,e,n){var t=n(7294),o=n(3935),i=n(3379),a=n.n(i),A=n(7795),c=n.n(A),s=n(569),u=n.n(s),d=n(3565),l=n.n(d),h=n(9216),f=n.n(h),m=n(4589),C=n.n(m),p=n(8358),g={};g.styleTagTransform=C(),g.setAttributes=l(),g.insert=u().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),a()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals,n(1539),n(8674),n(7327),n(6699),n(2023),n(1249),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(7042),n(1038),n(4916),n(7601),n(2443),n(9341),n(3706),n(2703),n(9070),n(489),n(4747),n(8304);var b=n.p+"4e5a640d5924b95cae98.gif",v=n(5893),y=function(r){var e=r.filter,n=r.setFilter;return(0,v.jsx)("section",{className:"filtrar",children:(0,v.jsx)("input",{type:"text",placeholder:"Nombre del personaje",name:"buscar",onChange:function(r){var e=r.target;n(e.value)},value:e})})},w=n(2836),x=n.n(w),E=function(r){var e=r.personaje;return(0,v.jsx)("section",{className:"personaje",children:(0,v.jsxs)(x(),{children:[(0,v.jsx)("figure",{children:(0,v.jsx)("img",{src:e.image,alt:e.name})}),(0,v.jsxs)("div",{className:"card",children:[(0,v.jsxs)("div",{className:"estado",children:[(0,v.jsx)("span",{className:e.status}),(0,v.jsx)("h4",{children:e.status})]}),(0,v.jsx)("figure",{children:(0,v.jsx)("img",{src:e.image,alt:e.name})}),(0,v.jsx)("h2",{children:e.name}),(0,v.jsxs)("p",{children:[e.species," ",(0,v.jsx)("span",{children:"-"})," ",e.gender]})]})]})})};function j(r){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},j(r)}function k(){k=function(){return r};var r={},e=Object.prototype,n=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",i=t.asyncIterator||"@@asyncIterator",a=t.toStringTag||"@@toStringTag";function A(r,e,n){return Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{A({},"")}catch(r){A=function(r,e,n){return r[e]=n}}function c(r,e,n,t){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new x(t||[]);return i._invoke=function(r,e,n){var t="suspendedStart";return function(o,i){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var A=v(a,n);if(A){if(A===u)continue;return A}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===t)throw t="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);t="executing";var c=s(r,e,n);if("normal"===c.type){if(t=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(t="completed",n.method="throw",n.arg=c.arg)}}}(r,n,a),i}function s(r,e,n){try{return{type:"normal",arg:r.call(e,n)}}catch(r){return{type:"throw",arg:r}}}r.wrap=c;var u={};function d(){}function l(){}function h(){}var f={};A(f,o,(function(){return this}));var m=Object.getPrototypeOf,C=m&&m(m(E([])));C&&C!==e&&n.call(C,o)&&(f=C);var p=h.prototype=d.prototype=Object.create(f);function g(r){["next","throw","return"].forEach((function(e){A(r,e,(function(r){return this._invoke(e,r)}))}))}function b(r,e){function t(o,i,a,A){var c=s(r[o],r,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==j(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(r){t("next",r,a,A)}),(function(r){t("throw",r,a,A)})):e.resolve(d).then((function(r){u.value=r,a(u)}),(function(r){return t("throw",r,a,A)}))}A(c.arg)}var o;this._invoke=function(r,n){function i(){return new e((function(e,o){t(r,n,e,o)}))}return o=o?o.then(i,i):i()}}function v(r,e){var n=r.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=void 0,v(r,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var t=s(n,r.iterator,e.arg);if("throw"===t.type)return e.method="throw",e.arg=t.arg,e.delegate=null,u;var o=t.arg;return o?o.done?(e[r.resultName]=o.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function y(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function w(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function x(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(y,this),this.reset(!0)}function E(r){if(r){var e=r[o];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var t=-1,i=function e(){for(;++t<r.length;)if(n.call(r,t))return e.value=r[t],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:B}}function B(){return{value:void 0,done:!0}}return l.prototype=h,A(p,"constructor",h),A(h,"constructor",l),l.displayName=A(h,a,"GeneratorFunction"),r.isGeneratorFunction=function(r){var e="function"==typeof r&&r.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,h):(r.__proto__=h,A(r,a,"GeneratorFunction")),r.prototype=Object.create(p),r},r.awrap=function(r){return{__await:r}},g(b.prototype),A(b.prototype,i,(function(){return this})),r.AsyncIterator=b,r.async=function(e,n,t,o,i){void 0===i&&(i=Promise);var a=new b(c(e,n,t,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(r){return r.done?r.value:a.next()}))},g(p),A(p,a,"Generator"),A(p,o,(function(){return this})),A(p,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var e=[];for(var n in r)e.push(n);return e.reverse(),function n(){for(;e.length;){var t=e.pop();if(t in r)return n.value=t,n.done=!1,n}return n.done=!0,n}},r.values=E,x.prototype={constructor:x,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function t(n,t){return a.type="throw",a.arg=r,e.next=n,t&&(e.method="next",e.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var A=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(A&&c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(A){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(r,e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===r||"continue"===r)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=r,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(r,e){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&e&&(this.next=e),u},finish:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===r)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===r){var t=n.completion;if("throw"===t.type){var o=t.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:E(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},r}function B(r,e,n,t,o,i,a){try{var A=r[i](a),c=A.value}catch(r){return void n(r)}A.done?e(c):Promise.resolve(c).then(t,o)}function S(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,i=[],a=!0,A=!1;try{for(n=n.call(r);!(a=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(r){A=!0,o=r}finally{try{a||null==n.return||n.return()}finally{if(A)throw o}}return i}}(r,e)||function(r,e){if(r){if("string"==typeof r)return F(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}var L=function(){var r=S((0,t.useState)([]),2),e=r[0],n=r[1],o=S((0,t.useState)(!0),2),i=o[0],a=o[1],A=S((0,t.useState)(""),2),c=A[0],s=A[1];(0,t.useEffect)((function(){var r=function(){var r,e=(r=k().mark((function r(){var e,t;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://rickandmortyapi.com/api/character");case 3:return e=r.sent,r.next=6,e.json();case 6:t=r.sent,n(t.results),a(!1),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(t,o){var i=r.apply(e,n);function a(r){B(i,t,o,a,A,"next",r)}function A(r){B(i,t,o,a,A,"throw",r)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();r()}),[]);var u=e.filter((function(r){return r.name.toLocaleLowerCase().includes(c.toLocaleLowerCase())}));return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("figure",{className:"logo",children:(0,v.jsx)("img",{src:b,alt:"Logo de Rick & Morty"})}),(0,v.jsx)(y,{filter:c,setFilter:s}),(0,v.jsx)("section",{className:"lista-personajes",children:i?(0,v.jsx)("p",{children:"Cargando..."}):u.length>0?u.map((function(r){return(0,v.jsx)(E,{personaje:r},r.id)})):(0,v.jsxs)("p",{children:["No se a encontrado el personaje "," ",(0,v.jsxs)("strong",{children:['"',c,'"']}),"."]})})]})};o.render((0,v.jsx)(t.StrictMode,{children:(0,v.jsx)(L,{})}),document.getElementById("root"))},8358:function(r,e,n){var t=n(7537),o=n.n(t),i=n(3645),a=n.n(i)()(o());a.push([r.id,'*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%}body{font-size:1.6rem;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;background:linear-gradient(160deg, #4888b9, #45bd79, #61c362, #a4d02a, #fec600);background-attachment:fixed;color:rgba(0,0,0,.25)}.container{width:90%;max-width:120rem;padding:0 2rem;margin:0 auto}.logo{width:15rem;margin:2rem auto}.logo img{width:100%}.filtrar{width:100%;max-width:60rem;margin:0 auto;margin-bottom:4rem}input{height:4rem;border:none;border-radius:.5rem;padding:0 1rem;outline:#bde6eb;width:100%}.lista-personajes{width:100%;display:grid;grid-template:auto/1fr;gap:4rem}.personaje{background:#cdf267;border-radius:.3rem;box-shadow:0 0 1rem 0 rgba(0,0,0,.1);display:grid;grid-template:15rem auto/1fr;overflow:hidden;animation:showCard .5s linear;width:265px;height:325px}.personaje:hover{cursor:pointer;background:#000;color:#cdf267;border-radius:.7em}.personaje figure{position:absolute;display:block;width:25rem;height:25rem;border-radius:50%;left:50%;margin:.7rem;margin-top:4rem;box-shadow:0 0 1rem 0 rgba(0,0,0,.25);overflow:hidden}.personaje figure img{height:100%;width:100%;object-fit:cover}@keyframes showCard{from{opacity:0}}.card{padding:5.2rem;text-align:right}.estado{background:#28527a;display:inline-flex;color:#dbf6e9;padding:.5rem 1rem;border-radius:2.5rem;font-size:1.7 rem;width:auto;justify-content:space-between;align-items:center;column-gap:1rem;margin:1.5rem auto}.estado span{display:block;height:1.5rem;width:1.5rem;border-radius:50%}.Alive{background:#31a703}.Dead{background:#d34b4b}.unknown{background:#afafaf}.card{padding:8rem 2rem 4rem;position:relative;margin:6rem;margin-top:6rem}.card figure{width:12rem;height:12rem;border-radius:50%;top:-5rem;left:50%;transform:translateX(-50%);box-shadow:0 0 1rem 0 rgba(0,0,0,.25);overflow:hidden;margin:auto}.card figure img{height:100%;width:100%;object-fit:cover}.card h2{width:100%;background:#dbf6e9;color:#000;border-radius:.5rem;height:4.5rem;margin-top:1rem;line-height:2rem;text-align:center;transition-property:background,color;font-size:1.8rem;font-weight:bold}.card p{width:100%;background:#dbf6e9;color:rgba(0,0,0,.25);border-radius:.5rem;height:4rem;margin-top:2rem;line-height:4rem;text-align:center}.card p span{font-weight:bold}@media screen and (min-width: 600px){.lista-personajes{grid-template:auto/repeat(2, 1fr)}}@media screen and (min-width: 1000px){.lista-personajes{grid-template:auto/repeat(3, 1fr)}}',"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,KACE,eAAA,CAGF,KACE,gBAAA,CACA,wEAAA,CACA,+EAAA,CAQA,2BAAA,CACA,qBAAA,CAGF,WACE,SAAA,CACA,gBAAA,CACA,cAAA,CACA,aAAA,CAGF,MACE,WAAA,CACA,gBAAA,CAEF,UACE,UAAA,CAGF,SACE,UAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CAEF,MACE,WAAA,CACA,WAAA,CACA,mBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CAGF,kBACE,UAAA,CACA,YAAA,CACA,sBAAA,CACA,QAAA,CAGF,WACE,kBAAA,CACA,mBAAA,CACA,oCAAA,CACA,YAAA,CACA,4BAAA,CACA,eAAA,CACA,6BAAA,CACA,WAAA,CACA,YAAA,CAEF,iBACE,cAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CAEF,kBACE,iBAAA,CACA,aAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,YAAA,CACA,eAAA,CACA,qCAAA,CACA,eAAA,CAEF,sBACE,WAAA,CACA,UAAA,CACA,gBAAA,CAEF,oBACE,KACE,SAAA,CAAA,CAGJ,MACE,cAAA,CACA,gBAAA,CAEF,QACE,kBAAA,CACA,mBAAA,CACA,aAAA,CACA,kBAAA,CACA,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,6BAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CAGF,aACE,aAAA,CACA,aAAA,CACA,YAAA,CACA,iBAAA,CAEF,OACE,kBAAA,CAEF,MACE,kBAAA,CAEF,SACE,kBAAA,CAEF,MACE,sBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CAEF,aAGE,WAAA,CACA,YAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,0BAAA,CACA,qCAAA,CACA,eAAA,CACA,WAAA,CAEF,iBACE,WAAA,CACA,UAAA,CACA,gBAAA,CAEF,SACE,UAAA,CACA,kBAAA,CACA,UAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,oCAAA,CACA,gBAAA,CACA,gBAAA,CAEF,QACE,UAAA,CACA,kBAAA,CACA,qBAAA,CACA,mBAAA,CACA,WAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CAEF,aACE,gBAAA,CAGF,qCACE,kBACE,iCAAA,CAAA,CAIJ,sCACE,kBACE,iCAAA,CAAA",sourcesContent:['* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-size: 1.6rem;\r\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\r\n  background: linear-gradient(\r\n    160deg,\r\n    #4888b9,\r\n    #45bd79,\r\n    #61c362,\r\n    #a4d02a,\r\n    #fec600\r\n  );\r\n  background-attachment: fixed;\r\n  color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.container {\r\n  width: 90%;\r\n  max-width: 120rem;\r\n  padding: 0 2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.logo {\r\n  width: 15rem;\r\n  margin: 2rem auto;\r\n}\r\n.logo img {\r\n  width: 100%;\r\n}\r\n\r\n.filtrar {\r\n  width: 100%;\r\n  max-width: 60rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 4rem;\r\n}\r\ninput {\r\n  height: 4rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  padding: 0 1rem;\r\n  outline: #bde6eb;\r\n  width: 100%;\r\n}\r\n\r\n.lista-personajes {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template: auto / 1fr;\r\n  gap: 4rem;\r\n}\r\n\r\n.personaje {\r\n  background: #cdf267;\r\n  border-radius: 0.3rem;\r\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);\r\n  display: grid;\r\n  grid-template: 15rem auto / 1fr;\r\n  overflow: hidden;\r\n  animation: showCard 0.5s linear;\r\n  width: 265px;\r\n  height: 325px;\r\n}\r\n.personaje:hover {\r\n  cursor: pointer;\r\n  background: black;\r\n  color: #cdf267;\r\n  border-radius: 0.7em;\r\n}\r\n.personaje figure {\r\n  position: absolute;\r\n  display: block;\r\n  width: 25rem;\r\n  height: 25rem;\r\n  border-radius: 50%;\r\n  left: 50%;\r\n  margin: 0.7rem;\r\n  margin-top: 4rem;\r\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);\r\n  overflow: hidden;\r\n}\r\n.personaje figure img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n@keyframes showCard {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n}\r\n.card {\r\n  padding: 5.2rem;\r\n  text-align: right;\r\n}\r\n.estado {\r\n  background: #28527a;\r\n  display: inline-flex;\r\n  color: #dbf6e9;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 2.5rem;\r\n  font-size: 1.7 rem;\r\n  width: auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  column-gap: 1rem;\r\n  margin: 1.5rem auto;\r\n  \r\n}\r\n.estado span {\r\n  display: block;\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  border-radius: 50%;\r\n}\r\n.Alive {\r\n  background: #31a703;\r\n}\r\n.Dead {\r\n  background: #d34b4b;\r\n}\r\n.unknown {\r\n  background: #afafaf;\r\n}\r\n.card{\r\n  padding: 8rem 2rem 4rem;\r\n  position: relative;\r\n  margin: 6rem;\r\n  margin-top: 6rem;\r\n}\r\n.card figure {\r\n  /* position: absolute; */\r\n  /* display: block; */\r\n  width: 12rem;\r\n  height: 12rem;\r\n  border-radius: 50%;\r\n  top: -5rem;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);\r\n  overflow: hidden;\r\n  margin: auto; \r\n}\r\n.card figure img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n.card h2 {\r\n  width: 100%;\r\n  background: #dbf6e9;\r\n  color: #000000;\r\n  border-radius: 0.5rem;\r\n  height: 4.5rem;\r\n  margin-top: 1rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  transition-property: background, color;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n}\r\n.card p {\r\n  width: 100%;\r\n  background: #dbf6e9;\r\n  color: rgba(0, 0, 0, 0.25);\r\n  border-radius: 0.5rem;\r\n  height: 4rem;\r\n  margin-top: 2rem;\r\n  line-height: 4rem;\r\n  text-align: center;\r\n}\r\n.card p span {\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .lista-personajes {\r\n    grid-template: auto / repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .lista-personajes {\r\n    grid-template: auto / repeat(3, 1fr);\r\n  }\r\n}\r\n'],sourceRoot:""}]),e.Z=a}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,r=[],t.O=function(e,n,o,i){if(!n){var a=1/0;for(u=0;u<r.length;u++){n=r[u][0],o=r[u][1],i=r[u][2];for(var A=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(r){return t.O[r](n[c])}))?n.splice(c--,1):(A=!1,i<a&&(a=i));if(A){r.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var u=r.length;u>0&&r[u-1][2]>i;u--)r[u]=r[u-1];r[u]=[n,o,i]},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,{a:e}),e},t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",function(){var r={179:0};t.O.j=function(e){return 0===r[e]};var e=function(e,n){var o,i,a=n[0],A=n[1],c=n[2],s=0;if(a.some((function(e){return 0!==r[e]}))){for(o in A)t.o(A,o)&&(t.m[o]=A[o]);if(c)var u=c(t)}for(e&&e(n);s<a.length;s++)i=a[s],t.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return t.O(u)},n=self.webpackChunkreact_clase_api=self.webpackChunkreact_clase_api||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),t.nc=void 0;var o=t.O(void 0,[959],(function(){return t(5926)}));o=t.O(o)}();
//# sourceMappingURL=main.b515e4b14a4d0b1d9d9f.js.map