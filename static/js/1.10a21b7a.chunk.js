(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{107:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(e);var a=n(3),o=n.n(a),c=n(9),u=n(6),s=n(0),i=n.n(s),f=n(1),p=n(5),l=n(8),g=n(2),m=n(70),b=n.n(m);var h=function(t){var e=t.tags;return i.a.createElement("div",{className:b.a.TagIndexPage},i.a.createElement("h1",null,"Tags"),i.a.createElement("ul",null,e.map(function(t){return i.a.createElement("li",{key:t.href},i.a.createElement(g.Link,{href:t.href},t.name," (",t.count,")"))})))},w=n(23),d=n(72),v=n.n(d);var j=function(t){var e=t.blogRoot,n=t.name,r=t.routes;return i.a.createElement("div",{className:v.a.TagPage},i.a.createElement("h1",null,n," posts"),i.a.createElement("ul",null,r.map(function(t){return i.a.createElement("li",{key:t.url.href},i.a.createElement(w.a,{blogRoot:e,route:t}))})))},x=n(17);function E(t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(E.cache[e]){t.next=8;break}return t.next=3,Object(f.d)({context:{crawlingRoutes:!0},root:e,routes:x.a});case 3:return n=t.sent,r=n.paths,t.next=7,Object(f.m)({method:"HEAD",routes:x.a,urls:r});case 7:E.cache[e]=t.sent;case 8:return t.abrupt("return",E.cache[e]);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}E.cache={};var y=Object(f.c)(Object(f.o)(function(t,e){return Object(c.a)({},e,{tagsRoot:t.mountpath})}),Object(f.p)({"/:tag":function(){var t=Object(u.a)(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.crawlingRoutes){t.next=7;break}return t.t0=k,t.next=4,E(n.blogRoot);case 4:return t.t1=t.sent,t.t2=function(t){return"/"+t},t.abrupt("return",(0,t.t0)(t.t1).map(t.t2));case 7:return t.abrupt("return",[]);case 8:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}),Object(f.k)({"/":Object(f.n)({title:"Tags",getView:function(){var t=Object(u.a)(o.a.mark(function t(e,n){var r,a,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n.blogRoot);case 2:return r=t.sent,a=k(r),c=Object(l.fromPairs)(a.map(function(t){return[t.toLowerCase(),[]]})),r.forEach(function(t){var e=t.data;e&&e.tags&&e.tags.forEach(function(e){e=e.toLowerCase(),c[e]&&c[e].push(t)})}),t.abrupt("return",i.a.createElement(h,{tags:a.map(function(t){return{name:t,href:Object(p.join)(e.mountpath,t.toLowerCase()),count:(c[t]||[]).length}})}));case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}),"/:tag":Object(f.n)({getTitle:function(t){return t.params.tag},getView:function(){var t=Object(u.a)(o.a.mark(function t(e,n){var r,a,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params.tag.toLowerCase(),t.next=3,E(n.blogRoot);case 3:return a=t.sent,c=[],a.forEach(function(t){(t.data&&t.data.tags||[]).find(function(t){return t.toLowerCase()===r})&&c.push(t)}),t.abrupt("return",i.a.createElement(j,{blogRoot:n.blogRoot,name:e.params.tag,routes:c}));case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()})}));function k(t){var e;return Array.from(new Set((e=[]).concat.apply(e,r(t.map(function(t){return t.data&&t.data.tags||[]})))))}e.default=y},70:function(t,e,n){t.exports={TagIndexPage:"TagIndexPage_TagIndexPage__UFDwg"}},72:function(t,e,n){t.exports={TagPage:"TagPage_TagPage__2JzFG"}}}]);
//# sourceMappingURL=1.10a21b7a.chunk.js.map