!function(f){var r={};function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return f[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=f,u.c=r,u.d=function(f,r,t){u.o(f,r)||Object.defineProperty(f,r,{enumerable:!0,get:t})},u.r=function(f){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},u.t=function(f,r){if(1&r&&(f=u(f)),8&r)return f;if(4&r&&"object"==typeof f&&f&&f.__esModule)return f;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:f}),2&r&&"string"!=typeof f)for(var a in f)u.d(t,a,function(r){return f[r]}.bind(null,a));return t},u.n=function(f){var r=f&&f.__esModule?function(){return f.default}:function(){return f};return u.d(r,"a",r),r},u.o=function(f,r){return Object.prototype.hasOwnProperty.call(f,r)},u.p="",u(u.s=1)}([function(f,r){var u;u=function(){return this}();try{u=u||new Function("return this")()}catch(f){"object"==typeof window&&(u=window)}f.exports=u},function(f,r,u){var t=u(2),a=u(6);t.route(document.getElementById("pockethold"),"/init",{"/init":a}),u(7),getStatus()},function(f,r,u){(function(r,u){!function(){"use strict";function t(f,r,u,t,a,i){return{tag:f,key:r,attrs:u,children:t,text:a,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}t.normalize=function(f){return Array.isArray(f)?t("[",void 0,void 0,t.normalizeChildren(f),void 0,void 0):null!=f&&"object"!=typeof f?t("#",void 0,void 0,!1===f?"":f,void 0,void 0):f},t.normalizeChildren=function(f){for(var r=0;r<f.length;r++)f[r]=t.normalize(f[r]);return f};var a=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},w={}.hasOwnProperty;function m(f){for(var r in f)if(w.call(f,r))return!1;return!0}function c(f){var r,u=arguments[1],c=2;if(null==f||"string"!=typeof f&&"function"!=typeof f&&"function"!=typeof f.view)throw Error("The selector must be either a string or a component.");if("string"==typeof f)var T=i[f]||function(f){for(var r,u="div",t=[],w={};r=a.exec(f);){var m=r[1],c=r[2];if(""===m&&""!==c)u=c;else if("#"===m)w.id=c;else if("."===m)t.push(c);else if("["===r[3][0]){var T=r[6];T&&(T=T.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===r[4]?t.push(T):w[r[4]]=""===T?T:T||!0}}return t.length>0&&(w.className=t.join(" ")),i[f]={tag:u,attrs:w}}(f);if(null==u?u={}:("object"!=typeof u||null!=u.tag||Array.isArray(u))&&(u={},c=1),arguments.length===c+1)r=arguments[c],Array.isArray(r)||(r=[r]);else for(r=[];c<arguments.length;)r.push(arguments[c++]);var h=t.normalizeChildren(r);return"string"==typeof f?function(f,r,u){var a,i,c=!1,T=r.className||r.class;if(!m(f.attrs)&&!m(r)){var h={};for(var _ in r)w.call(r,_)&&(h[_]=r[_]);r=h}for(var _ in f.attrs)w.call(f.attrs,_)&&(r[_]=f.attrs[_]);for(var _ in void 0!==T&&(void 0!==r.class&&(r.class=void 0,r.className=T),null!=f.attrs.className&&(r.className=f.attrs.className+" "+T)),r)if(w.call(r,_)&&"key"!==_){c=!0;break}return Array.isArray(u)&&1===u.length&&null!=u[0]&&"#"===u[0].tag?i=u[0].children:a=u,t(f.tag,r.key,c?r:void 0,a,i)}(T,u,h):t(f,u.key,u,h)}c.trust=function(f){return null==f&&(f=""),t("<",void 0,void 0,f,void 0,void 0)},c.fragment=function(f,r){return t("[",f.key,f,t.normalizeChildren(r),void 0,void 0)};var T=c;if((h=function(f){if(!(this instanceof h))throw new Error("Promise must be called with `new`");if("function"!=typeof f)throw new TypeError("executor must be a function");var u=this,t=[],a=[],i=T(t,!0),w=T(a,!1),m=u._instance={resolvers:t,rejectors:a},c="function"==typeof r?r:setTimeout;function T(f,r){return function i(T){var h;try{if(!r||null==T||"object"!=typeof T&&"function"!=typeof T||"function"!=typeof(h=T.then))c(function(){r||0!==f.length||console.error("Possible unhandled promise rejection:",T);for(var u=0;u<f.length;u++)f[u](T);t.length=0,a.length=0,m.state=r,m.retry=function(){i(T)}});else{if(T===u)throw new TypeError("Promise can't be resolved w/ itself");_(h.bind(T))}}catch(f){w(f)}}}function _(f){var r=0;function u(f){return function(u){r++>0||f(u)}}var t=u(w);try{f(u(i),t)}catch(f){t(f)}}_(f)}).prototype.then=function(f,r){var u,t,a=this._instance;function i(f,r,i,w){r.push(function(r){if("function"!=typeof f)i(r);else try{u(f(r))}catch(f){t&&t(f)}}),"function"==typeof a.retry&&w===a.state&&a.retry()}var w=new h(function(f,r){u=f,t=r});return i(f,a.resolvers,u,!0),i(r,a.rejectors,t,!1),w},h.prototype.catch=function(f){return this.then(null,f)},h.resolve=function(f){return f instanceof h?f:new h(function(r){r(f)})},h.reject=function(f){return new h(function(r,u){u(f)})},h.all=function(f){return new h(function(r,u){var t=f.length,a=0,i=[];if(0===f.length)r([]);else for(var w=0;w<f.length;w++)!function(w){function m(f){a++,i[w]=f,a===t&&r(i)}null==f[w]||"object"!=typeof f[w]&&"function"!=typeof f[w]||"function"!=typeof f[w].then?m(f[w]):f[w].then(m,u)}(w)})},h.race=function(f){return new h(function(r,u){for(var t=0;t<f.length;t++)f[t].then(r,u)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=h);var h=window.Promise}else if(void 0!==u){void 0===u.Promise&&(u.Promise=h);h=u.Promise}var _=function(f){if("[object Object]"!==Object.prototype.toString.call(f))return"";var r=[];for(var u in f)t(u,f[u]);return r.join("&");function t(f,u){if(Array.isArray(u))for(var a=0;a<u.length;a++)t(f+"["+a+"]",u[a]);else if("[object Object]"===Object.prototype.toString.call(u))for(var a in u)t(f+"["+a+"]",u[a]);else r.push(encodeURIComponent(f)+(null!=u&&""!==u?"="+encodeURIComponent(u):""))}},O=new RegExp("^file://","i"),j=function(f,r){var u,t=0;function a(){var f=0;function r(){0==--f&&"function"==typeof u&&u()}return function u(t){var a=t.then;return t.then=function(){f++;var i=a.apply(t,arguments);return i.then(r,function(u){if(r(),0===f)throw u}),u(i)},t}}function i(f,r){if("string"==typeof f){var u=f;null==(f=r||{}).url&&(f.url=u)}return f}function w(f,r){if(null==r)return f;for(var u=f.match(/:[^\/]+/gi)||[],t=0;t<u.length;t++){var a=u[t].slice(1);null!=r[a]&&(f=f.replace(u[t],r[a]))}return f}function m(f,r){var u=_(r);if(""!==u){var t=f.indexOf("?")<0?"?":"&";f+=t+u}return f}function c(f){try{return""!==f?JSON.parse(f):null}catch(r){throw new Error(f)}}function T(f){return f.responseText}function h(f,r){if("function"==typeof f){if(!Array.isArray(r))return new f(r);for(var u=0;u<r.length;u++)r[u]=new f(r[u])}return r}return{request:function(u,t){var _=a();u=i(u,t);var j=new r(function(r,t){null==u.method&&(u.method="GET"),u.method=u.method.toUpperCase();var a="GET"!==u.method&&"TRACE"!==u.method&&("boolean"!=typeof u.useBody||u.useBody);"function"!=typeof u.serialize&&(u.serialize="undefined"!=typeof FormData&&u.data instanceof FormData?function(f){return f}:JSON.stringify),"function"!=typeof u.deserialize&&(u.deserialize=c),"function"!=typeof u.extract&&(u.extract=T),u.url=w(u.url,u.data),a?u.data=u.serialize(u.data):u.url=m(u.url,u.data);var i=new f.XMLHttpRequest,_=!1,j=i.abort;for(var A in i.abort=function(){_=!0,j.call(i)},i.open(u.method,u.url,"boolean"!=typeof u.async||u.async,"string"==typeof u.user?u.user:void 0,"string"==typeof u.password?u.password:void 0),u.serialize!==JSON.stringify||!a||u.headers&&u.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),u.deserialize!==c||u.headers&&u.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(i.withCredentials=u.withCredentials),u.headers)({}).hasOwnProperty.call(u.headers,A)&&i.setRequestHeader(A,u.headers[A]);"function"==typeof u.config&&(i=u.config(i,u)||i),i.onreadystatechange=function(){if(!_&&4===i.readyState)try{var f=u.extract!==T?u.extract(i,u):u.deserialize(u.extract(i,u));if(i.status>=200&&i.status<300||304===i.status||O.test(u.url))r(h(u.type,f));else{var a=new Error(i.responseText);for(var w in f)a[w]=f[w];t(a)}}catch(f){t(f)}},a&&null!=u.data?i.send(u.data):i.send()});return!0===u.background?j:_(j)},jsonp:function(u,c){var T=a();u=i(u,c);var _=new r(function(r,a){var i=u.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+t++,c=f.document.createElement("script");f[i]=function(t){c.parentNode.removeChild(c),r(h(u.type,t)),delete f[i]},c.onerror=function(){c.parentNode.removeChild(c),a(new Error("JSONP request failed")),delete f[i]},null==u.data&&(u.data={}),u.url=w(u.url,u.data),u.data[u.callbackKey||"callback"]=i,c.src=m(u.url,u.data),f.document.documentElement.appendChild(c)});return!0===u.background?_:T(_)},setCompletionCallback:function(f){u=f}}}(window,h),A=function(f){var r,u=f.document,a=u.createDocumentFragment(),i={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function w(f){return f.attrs&&f.attrs.xmlns||i[f.tag]}function m(f,r,u,t,a,i,w){for(var m=u;m<t;m++){var T=r[m];null!=T&&c(f,T,a,w,i)}}function c(f,r,i,_,O){var j=r.tag;if("string"!=typeof j)return function(f,r,u,t,i){if(h(r,u),null!=r.instance){var w=c(f,r.instance,u,t,i);return r.dom=r.instance.dom,r.domSize=null!=r.dom?r.instance.domSize:0,C(f,w,i),w}return r.domSize=0,a}(f,r,i,_,O);switch(r.state={},null!=r.attrs&&I(r.attrs,r,i),j){case"#":return function(f,r,t){return r.dom=u.createTextNode(r.children),C(f,r.dom,t),r.dom}(f,r,O);case"<":return T(f,r,O);case"[":return function(f,r,t,a,i){var w=u.createDocumentFragment();if(null!=r.children){var c=r.children;m(w,c,0,c.length,t,null,a)}return r.dom=w.firstChild,r.domSize=w.childNodes.length,C(f,w,i),w}(f,r,i,_,O);default:return function(f,r,a,i,c){var T=r.tag,h=r.attrs,_=h&&h.is,O=(i=w(r)||i)?_?u.createElementNS(i,T,{is:_}):u.createElementNS(i,T):_?u.createElement(T,{is:_}):u.createElement(T);r.dom=O,null!=h&&function(f,r,u){for(var t in r)B(f,t,null,r[t],u)}(r,h,i);if(C(f,O,c),null!=r.attrs&&null!=r.attrs.contenteditable)P(r);else if(null!=r.text&&(""!==r.text?O.textContent=r.text:r.children=[t("#",void 0,void 0,r.text,void 0,void 0)]),null!=r.children){var j=r.children;m(O,j,0,j.length,a,null,i),function(f){var r=f.attrs;"select"===f.tag&&null!=r&&("value"in r&&B(f,"value",null,r.value,void 0),"selectedIndex"in r&&B(f,"selectedIndex",null,r.selectedIndex,void 0))}(r)}return O}(f,r,i,_,O)}}function T(f,r,t){var a={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(r.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=u.createElement(a);i.innerHTML=r.children,r.dom=i.firstChild,r.domSize=i.childNodes.length;for(var w,m=u.createDocumentFragment();w=i.firstChild;)m.appendChild(w);return C(f,m,t),m}function h(f,r){var u;if("function"==typeof f.tag.view){if(f.state=Object.create(f.tag),null!=(u=f.state.view).$$reentrantLock$$)return a;u.$$reentrantLock$$=!0}else{if(f.state=void 0,null!=(u=f.tag).$$reentrantLock$$)return a;u.$$reentrantLock$$=!0,f.state=null!=f.tag.prototype&&"function"==typeof f.tag.prototype.view?new f.tag(f):f.tag(f)}if(f._state=f.state,null!=f.attrs&&I(f.attrs,f,r),I(f._state,f,r),f.instance=t.normalize(f._state.view.call(f.state,f)),f.instance===f)throw Error("A view cannot return the vnode it received as argument");u.$$reentrantLock$$=null}function _(f,r,u,t,a,i,w){if(r!==u&&(null!=r||null!=u))if(null==r)m(f,u,0,u.length,a,i,w);else if(null==u)D(r,0,r.length,u);else{if(r.length===u.length){for(var T=!1,h=0;h<u.length;h++)if(null!=u[h]&&null!=r[h]){T=null==u[h].key&&null==r[h].key;break}if(T){for(h=0;h<r.length;h++)r[h]!==u[h]&&(null==r[h]&&null!=u[h]?c(f,u[h],a,w,s(r,h+1,i)):null==u[h]?D(r,h,h+1,u):O(f,r[h],u[h],a,s(r,h+1,i),t,w));return}}if(t=t||function(f,r){if(null!=f.pool&&Math.abs(f.pool.length-r.length)<=Math.abs(f.length-r.length)){var u=f[0]&&f[0].children&&f[0].children.length||0,t=f.pool[0]&&f.pool[0].children&&f.pool[0].children.length||0,a=r[0]&&r[0].children&&r[0].children.length||0;if(Math.abs(t-a)<=Math.abs(u-a))return!0}return!1}(r,u)){var _=r.pool;r=r.concat(r.pool)}for(var P,q=0,M=0,B=r.length-1,J=u.length-1;B>=q&&J>=M;){if((I=r[q])!==(G=u[M])||t)if(null==I)q++;else if(null==G)M++;else if(I.key===G.key){var $=null!=_&&q>=r.length-_.length||null==_&&t;M++,O(f,I,G,a,s(r,++q,i),$,w),t&&I.tag===G.tag&&C(f,A(I),i)}else{if((I=r[B])!==G||t)if(null==I)B--;else if(null==G)M++;else{if(I.key!==G.key)break;$=null!=_&&B>=r.length-_.length||null==_&&t;O(f,I,G,a,s(r,B+1,i),$,w),(t||M<J)&&C(f,A(I),s(r,q,i)),B--,M++}else B--,M++}else q++,M++}for(;B>=q&&J>=M;){var I,G;if((I=r[B])!==(G=u[J])||t)if(null==I)B--;else if(null==G)J--;else if(I.key===G.key){$=null!=_&&B>=r.length-_.length||null==_&&t;O(f,I,G,a,s(r,B+1,i),$,w),t&&I.tag===G.tag&&C(f,A(I),i),null!=I.dom&&(i=I.dom),B--,J--}else{if(P||(P=j(r,B)),null!=G){var K=P[G.key];if(null!=K){var Q=r[K];$=null!=_&&K>=r.length-_.length||null==_&&t;O(f,Q,G,a,s(r,B+1,i),t,w),C(f,A(Q),i),r[K].skip=!0,null!=Q.dom&&(i=Q.dom)}else{i=c(f,G,a,w,i)}}J--}else B--,J--;if(J<M)break}m(f,u,M,J+1,a,i,w),D(r,q,B+1,u)}}function O(f,r,u,a,i,m,j){var s=r.tag;if(s===u.tag){if(u.state=r.state,u._state=r._state,u.events=r.events,!m&&function(f,r){var u,t;null!=f.attrs&&"function"==typeof f.attrs.onbeforeupdate&&(u=f.attrs.onbeforeupdate.call(f.state,f,r));"string"!=typeof f.tag&&"function"==typeof f._state.onbeforeupdate&&(t=f._state.onbeforeupdate.call(f.state,f,r));if(!(void 0===u&&void 0===t||u||t))return f.dom=r.dom,f.domSize=r.domSize,f.instance=r.instance,!0;return!1}(u,r))return;if("string"==typeof s)switch(null!=u.attrs&&(m?(u.state={},I(u.attrs,u,a)):G(u.attrs,u,a)),s){case"#":!function(f,r){f.children.toString()!==r.children.toString()&&(f.dom.nodeValue=r.children);r.dom=f.dom}(r,u);break;case"<":!function(f,r,u,t){r.children!==u.children?(A(r),T(f,u,t)):(u.dom=r.dom,u.domSize=r.domSize)}(f,r,u,i);break;case"[":!function(f,r,u,t,a,i,w){_(f,r.children,u.children,t,a,i,w);var m=0,c=u.children;if(u.dom=null,null!=c){for(var T=0;T<c.length;T++){var h=c[T];null!=h&&null!=h.dom&&(null==u.dom&&(u.dom=h.dom),m+=h.domSize||1)}1!==m&&(u.domSize=m)}}(f,r,u,m,a,i,j);break;default:!function(f,r,u,a,i){var m=r.dom=f.dom;i=w(r)||i,"textarea"===r.tag&&(null==r.attrs&&(r.attrs={}),null!=r.text&&(r.attrs.value=r.text,r.text=void 0));(function(f,r,u,t){if(null!=u)for(var a in u)B(f,a,r&&r[a],u[a],t);if(null!=r)for(var a in r)null!=u&&a in u||("className"===a&&(a="class"),"o"!==a[0]||"n"!==a[1]||J(a)?"key"!==a&&f.dom.removeAttribute(a):$(f,a,void 0))})(r,f.attrs,r.attrs,i),null!=r.attrs&&null!=r.attrs.contenteditable?P(r):null!=f.text&&null!=r.text&&""!==r.text?f.text.toString()!==r.text.toString()&&(f.dom.firstChild.nodeValue=r.text):(null!=f.text&&(f.children=[t("#",void 0,void 0,f.text,void 0,f.dom.firstChild)]),null!=r.text&&(r.children=[t("#",void 0,void 0,r.text,void 0,void 0)]),_(m,f.children,r.children,u,a,null,i))}(r,u,m,a,j)}else!function(f,r,u,a,i,w,m){if(w)h(u,a);else{if(u.instance=t.normalize(u._state.view.call(u.state,u)),u.instance===u)throw Error("A view cannot return the vnode it received as argument");null!=u.attrs&&G(u.attrs,u,a),G(u._state,u,a)}null!=u.instance?(null==r.instance?c(f,u.instance,a,m,i):O(f,r.instance,u.instance,a,i,w,m),u.dom=u.instance.dom,u.domSize=u.instance.domSize):null!=r.instance?(q(r.instance,null),u.dom=void 0,u.domSize=0):(u.dom=r.dom,u.domSize=r.domSize)}(f,r,u,a,i,m,j)}else q(r,null),c(f,u,a,j,i)}function j(f,r){var u={},t=0;for(t=0;t<r;t++){var a=f[t];if(null!=a){var i=a.key;null!=i&&(u[i]=t)}}return u}function A(f){var r=f.domSize;if(null!=r||null==f.dom){var t=u.createDocumentFragment();if(r>0){for(var a=f.dom;--r;)t.appendChild(a.nextSibling);t.insertBefore(a,t.firstChild)}return t}return f.dom}function s(f,r,u){for(;r<f.length;r++)if(null!=f[r]&&null!=f[r].dom)return f[r].dom;return u}function C(f,r,u){u&&u.parentNode?f.insertBefore(r,u):f.appendChild(r)}function P(f){var r=f.children;if(null!=r&&1===r.length&&"<"===r[0].tag){var u=r[0].children;f.dom.innerHTML!==u&&(f.dom.innerHTML=u)}else if(null!=f.text||null!=r&&0!==r.length)throw new Error("Child node of a contenteditable must be trusted")}function D(f,r,u,t){for(var a=r;a<u;a++){var i=f[a];null!=i&&(i.skip?i.skip=!1:q(i,t))}}function q(f,r){var u,t=1,a=0;f.attrs&&"function"==typeof f.attrs.onbeforeremove&&(null!=(u=f.attrs.onbeforeremove.call(f.state,f))&&"function"==typeof u.then&&(t++,u.then(i,i)));"string"!=typeof f.tag&&"function"==typeof f._state.onbeforeremove&&(null!=(u=f._state.onbeforeremove.call(f.state,f))&&"function"==typeof u.then&&(t++,u.then(i,i)));function i(){if(++a===t&&(function f(r){r.attrs&&"function"==typeof r.attrs.onremove&&r.attrs.onremove.call(r.state,r);if("string"!=typeof r.tag)"function"==typeof r._state.onremove&&r._state.onremove.call(r.state,r),null!=r.instance&&f(r.instance);else{var u=r.children;if(Array.isArray(u))for(var t=0;t<u.length;t++){var a=u[t];null!=a&&f(a)}}}(f),f.dom)){var u=f.domSize||1;if(u>1)for(var i=f.dom;--u;)M(i.nextSibling);M(f.dom),null==r||null!=f.domSize||null!=(w=f.attrs)&&(w.oncreate||w.onupdate||w.onbeforeremove||w.onremove)||"string"!=typeof f.tag||(r.pool?r.pool.push(f):r.pool=[f])}var w}i()}function M(f){var r=f.parentNode;null!=r&&r.removeChild(f)}function B(f,r,t,a,i){var w=f.dom;if("key"!==r&&"is"!==r&&(t!==a||function(f,r){return"value"===r||"checked"===r||"selectedIndex"===r||"selected"===r&&f.dom===u.activeElement}(f,r)||"object"==typeof a)&&void 0!==a&&!J(r)){var m,c=r.indexOf(":");if(c>-1&&"xlink"===r.substr(0,c))w.setAttributeNS("http://www.w3.org/1999/xlink",r.slice(c+1),a);else if("o"===r[0]&&"n"===r[1]&&"function"==typeof a)$(f,r,a);else if("style"===r)!function(f,r,u){r===u&&(f.style.cssText="",r=null);if(null==u)f.style.cssText="";else if("string"==typeof u)f.style.cssText=u;else{for(var t in"string"==typeof r&&(f.style.cssText=""),u)f.style[t]=u[t];if(null!=r&&"string"!=typeof r)for(var t in r)t in u||(f.style[t]="")}}(w,t,a);else if(r in w&&("href"!==(m=r)&&"list"!==m&&"form"!==m&&"width"!==m&&"height"!==m)&&void 0===i&&!function(f){return f.attrs.is||f.tag.indexOf("-")>-1}(f)){if("value"===r){var T=""+a;if(("input"===f.tag||"textarea"===f.tag)&&f.dom.value===T&&f.dom===u.activeElement)return;if("select"===f.tag)if(null===a){if(-1===f.dom.selectedIndex&&f.dom===u.activeElement)return}else if(null!==t&&f.dom.value===T&&f.dom===u.activeElement)return;if("option"===f.tag&&null!=t&&f.dom.value===T)return}if("input"===f.tag&&"type"===r)return void w.setAttribute(r,a);w[r]=a}else"boolean"==typeof a?a?w.setAttribute(r,""):w.removeAttribute(r):w.setAttribute("className"===r?"class":r,a)}}function J(f){return"oninit"===f||"oncreate"===f||"onupdate"===f||"onremove"===f||"onbeforeremove"===f||"onbeforeupdate"===f}function $(f,u,t){var a=f.dom,i="function"!=typeof r?t:function(f){var u=t.call(a,f);return r.call(a,f),u};if(u in a)a[u]="function"==typeof t?i:null;else{var w=u.slice(2);if(void 0===f.events&&(f.events={}),f.events[u]===i)return;null!=f.events[u]&&a.removeEventListener(w,f.events[u],!1),"function"==typeof t&&(f.events[u]=i,a.addEventListener(w,f.events[u],!1))}}function I(f,r,u){"function"==typeof f.oninit&&f.oninit.call(r.state,r),"function"==typeof f.oncreate&&u.push(f.oncreate.bind(r.state,r))}function G(f,r,u){"function"==typeof f.onupdate&&u.push(f.onupdate.bind(r.state,r))}return{render:function(f,r){if(!f)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var a=[],i=u.activeElement,w=f.namespaceURI;null==f.vnodes&&(f.textContent=""),Array.isArray(r)||(r=[r]),_(f,f.vnodes,t.normalizeChildren(r),!1,a,null,"http://www.w3.org/1999/xhtml"===w?void 0:w),f.vnodes=r,null!=i&&u.activeElement!==i&&i.focus();for(var m=0;m<a.length;m++)a[m]()},setEventCallback:function(f){return r=f}}};var s=function(f){var r=A(f);r.setEventCallback(function(f){!1===f.redraw?f.redraw=void 0:a()});var u=[];function t(f){var r=u.indexOf(f);r>-1&&u.splice(r,2)}function a(){for(var f=1;f<u.length;f+=2)u[f]()}return{subscribe:function(f,r){t(f),u.push(f,function(f){var r=0,u=null,t="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var a=Date.now();0===r||a-r>=16?(r=a,f()):null===u&&(u=t(function(){u=null,f(),r=Date.now()},16-(a-r)))}}(r))},unsubscribe:t,redraw:a,render:r.render}}(window);j.setCompletionCallback(s.redraw);var C;T.mount=(C=s,function(f,r){if(null===r)return C.render(f,[]),void C.unsubscribe(f);if(null==r.view&&"function"!=typeof r)throw new Error("m.mount(element, component) expects a component, not a vnode");C.subscribe(f,function(){C.render(f,t(r))}),C.redraw()});var P=h,D=function(f){if(""===f||null==f)return{};"?"===f.charAt(0)&&(f=f.slice(1));for(var r=f.split("&"),u={},t={},a=0;a<r.length;a++){var i=r[a].split("="),w=decodeURIComponent(i[0]),m=2===i.length?decodeURIComponent(i[1]):"";"true"===m?m=!0:"false"===m&&(m=!1);var c=w.split(/\]\[?|\[/),T=u;w.indexOf("[")>-1&&c.pop();for(var h=0;h<c.length;h++){var _=c[h],O=c[h+1],j=""==O||!isNaN(parseInt(O,10)),A=h===c.length-1;if(""===_)null==t[w=c.slice(0,h).join()]&&(t[w]=0),_=t[w]++;null==T[_]&&(T[_]=A?m:j?[]:{}),T=T[_]}}return u},q=function(f){var u,t="function"==typeof f.history.pushState,a="function"==typeof r?r:setTimeout;function i(r){var u=f.location[r].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===r&&"/"!==u[0]&&(u="/"+u),u}function w(f,r,u){var t=f.indexOf("?"),a=f.indexOf("#"),i=t>-1?t:a>-1?a:f.length;if(t>-1){var w=a>-1?a:f.length,m=D(f.slice(t+1,w));for(var c in m)r[c]=m[c]}if(a>-1){var T=D(f.slice(a+1));for(var c in T)u[c]=T[c]}return f.slice(0,i)}var m={prefix:"#!",getPath:function(){switch(m.prefix.charAt(0)){case"#":return i("hash").slice(m.prefix.length);case"?":return i("search").slice(m.prefix.length)+i("hash");default:return i("pathname").slice(m.prefix.length)+i("search")+i("hash")}},setPath:function(r,u,a){var i={},c={};if(r=w(r,i,c),null!=u){for(var T in u)i[T]=u[T];r=r.replace(/:([^\/]+)/g,function(f,r){return delete i[r],u[r]})}var h=_(i);h&&(r+="?"+h);var O=_(c);if(O&&(r+="#"+O),t){var j=a?a.state:null,A=a?a.title:null;f.onpopstate(),a&&a.replace?f.history.replaceState(j,A,m.prefix+r):f.history.pushState(j,A,m.prefix+r)}else f.location.href=m.prefix+r}};return m.defineRoutes=function(r,i,c){function T(){var u=m.getPath(),t={},a=w(u,t,t),T=f.history.state;if(null!=T)for(var h in T)t[h]=T[h];for(var _ in r){var O=new RegExp("^"+_.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(O.test(a))return void a.replace(O,function(){for(var f=_.match(/:[^\/]+/g)||[],a=[].slice.call(arguments,1,-2),w=0;w<f.length;w++)t[f[w].replace(/:|\./g,"")]=decodeURIComponent(a[w]);i(r[_],t,u,_)})}c(u,t)}var h;t?f.onpopstate=(h=T,function(){null==u&&(u=a(function(){u=null,h()}))}):"#"===m.prefix.charAt(0)&&(f.onhashchange=T),T()},m};T.route=function(f,r){var u,a,i,w,m,c=q(f),T=function(f,T,h){if(null==f)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var _=function(){null!=u&&r.render(f,u(t(a,i.key,i)))},O=function(f){if(f===T)throw new Error("Could not resolve default route "+T);c.setPath(T,null,{replace:!0})};c.defineRoutes(h,function(f,r,t){var c=m=function(f,T){c===m&&(a=null==T||"function"!=typeof T.view&&"function"!=typeof T?"div":T,i=r,w=t,m=null,u=(f.render||function(f){return f}).bind(f),_())};f.view||"function"==typeof f?c({},f):f.onmatch?P.resolve(f.onmatch(r,t)).then(function(r){c(f,r)},O):c(f,"div")},O),r.subscribe(f,_)};return T.set=function(f,r,u){null!=m&&((u=u||{}).replace=!0),m=null,c.setPath(f,r,u)},T.get=function(){return w},T.prefix=function(f){c.prefix=f},T.link=function(f){f.dom.setAttribute("href",c.prefix+f.attrs.href),f.dom.onclick=function(f){if(!(f.ctrlKey||f.metaKey||f.shiftKey||2===f.which)){f.preventDefault(),f.redraw=!1;var r=this.getAttribute("href");0===r.indexOf(c.prefix)&&(r=r.slice(c.prefix.length)),T.set(r,void 0,void 0)}}},T.param=function(f){return void 0!==i&&void 0!==f?i[f]:i},T}(window,s),T.withAttr=function(f,r,u){return function(t){r.call(u||this,f in t.currentTarget?t.currentTarget[f]:t.currentTarget.getAttribute(f))}};var M=A(window);T.render=M.render,T.redraw=s.redraw,T.request=j.request,T.jsonp=j.jsonp,T.parseQueryString=D,T.buildQueryString=_,T.version="1.1.6",T.vnode=t,f.exports=T}()}).call(this,u(3).setImmediate,u(0))},function(f,r,u){(function(f){var t=void 0!==f&&f||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function i(f,r){this._id=f,this._clearFn=r}r.setTimeout=function(){return new i(a.call(setTimeout,t,arguments),clearTimeout)},r.setInterval=function(){return new i(a.call(setInterval,t,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(f){f&&f.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(t,this._id)},r.enroll=function(f,r){clearTimeout(f._idleTimeoutId),f._idleTimeout=r},r.unenroll=function(f){clearTimeout(f._idleTimeoutId),f._idleTimeout=-1},r._unrefActive=r.active=function(f){clearTimeout(f._idleTimeoutId);var r=f._idleTimeout;r>=0&&(f._idleTimeoutId=setTimeout(function(){f._onTimeout&&f._onTimeout()},r))},u(4),r.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==f&&f.setImmediate||this&&this.setImmediate,r.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==f&&f.clearImmediate||this&&this.clearImmediate}).call(this,u(0))},function(f,r,u){(function(f,r){!function(f,u){"use strict";if(!f.setImmediate){var t,a,i,w,m,c=1,T={},h=!1,_=f.document,O=Object.getPrototypeOf&&Object.getPrototypeOf(f);O=O&&O.setTimeout?O:f,"[object process]"==={}.toString.call(f.process)?t=function(f){r.nextTick(function(){A(f)})}:!function(){if(f.postMessage&&!f.importScripts){var r=!0,u=f.onmessage;return f.onmessage=function(){r=!1},f.postMessage("","*"),f.onmessage=u,r}}()?f.MessageChannel?((i=new MessageChannel).port1.onmessage=function(f){A(f.data)},t=function(f){i.port2.postMessage(f)}):_&&"onreadystatechange"in _.createElement("script")?(a=_.documentElement,t=function(f){var r=_.createElement("script");r.onreadystatechange=function(){A(f),r.onreadystatechange=null,a.removeChild(r),r=null},a.appendChild(r)}):t=function(f){setTimeout(A,0,f)}:(w="setImmediate$"+Math.random()+"$",m=function(r){r.source===f&&"string"==typeof r.data&&0===r.data.indexOf(w)&&A(+r.data.slice(w.length))},f.addEventListener?f.addEventListener("message",m,!1):f.attachEvent("onmessage",m),t=function(r){f.postMessage(w+r,"*")}),O.setImmediate=function(f){"function"!=typeof f&&(f=new Function(""+f));for(var r=new Array(arguments.length-1),u=0;u<r.length;u++)r[u]=arguments[u+1];var a={callback:f,args:r};return T[c]=a,t(c),c++},O.clearImmediate=j}function j(f){delete T[f]}function A(f){if(h)setTimeout(A,0,f);else{var r=T[f];if(r){h=!0;try{!function(f){var r=f.callback,t=f.args;switch(t.length){case 0:r();break;case 1:r(t[0]);break;case 2:r(t[0],t[1]);break;case 3:r(t[0],t[1],t[2]);break;default:r.apply(u,t)}}(r)}finally{j(f),h=!1}}}}}("undefined"==typeof self?void 0===f?this:f:self)}).call(this,u(0),u(5))},function(f,r){var u,t,a=f.exports={};function i(){throw new Error("setTimeout has not been defined")}function w(){throw new Error("clearTimeout has not been defined")}function m(f){if(u===setTimeout)return setTimeout(f,0);if((u===i||!u)&&setTimeout)return u=setTimeout,setTimeout(f,0);try{return u(f,0)}catch(r){try{return u.call(null,f,0)}catch(r){return u.call(this,f,0)}}}!function(){try{u="function"==typeof setTimeout?setTimeout:i}catch(f){u=i}try{t="function"==typeof clearTimeout?clearTimeout:w}catch(f){t=w}}();var c,T=[],h=!1,_=-1;function O(){h&&c&&(h=!1,c.length?T=c.concat(T):_=-1,T.length&&j())}function j(){if(!h){var f=m(O);h=!0;for(var r=T.length;r;){for(c=T,T=[];++_<r;)c&&c[_].run();_=-1,r=T.length}c=null,h=!1,function(f){if(t===clearTimeout)return clearTimeout(f);if((t===w||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(f);try{t(f)}catch(r){try{return t.call(null,f)}catch(r){return t.call(this,f)}}}(f)}}function A(f,r){this.fun=f,this.array=r}function s(){}a.nextTick=function(f){var r=new Array(arguments.length-1);if(arguments.length>1)for(var u=1;u<arguments.length;u++)r[u-1]=arguments[u];T.push(new A(f,r)),1!==T.length||h||m(j)},A.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=s,a.addListener=s,a.once=s,a.off=s,a.removeListener=s,a.removeAllListeners=s,a.emit=s,a.prependListener=s,a.prependOnceListener=s,a.listeners=function(f){return[]},a.binding=function(f){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(f){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(f,r,u){u(2)},function(f,r,u){u(2)}]);