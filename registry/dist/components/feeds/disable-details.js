!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/disable-details"]=e():t["feeds/disable-details"]=e()}(self,(function(){return function(){var t,e,n={840:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,"[data-module=desc],\n.card[data-did] .content {\n  cursor: text;\n}\n[data-module=desc] .details,\n.card[data-did] .content .details {\n  color: #222;\n  font-size: 12px;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n  line-height: 22px;\n}\nbody.dark [data-module=desc] .details,\nbody.dark .card[data-did] .content .details {\n  color: #eee;\n}",""]),t.exports=o},274:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".card[data-did] .content .details {\n  display: none;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},94:function(t,e,n){var o=n(840);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},377:function(t,e,n){var o=n(274);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},799:function(t){"use strict";t.exports=coreApis.componentApis.feeds.api},356:function(t){"use strict";t.exports=coreApis.style}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return s}});var t=r(799),e=coreApis.utils.urls;let n=!0;const o="disable-feeds-details-style",a=async()=>{const{addImportantStyle:t}=await Promise.resolve().then(r.t.bind(r,356,23)),{default:e}=await Promise.resolve().then(r.t.bind(r,94,23));t(e,o)},s={name:"disableFeedsDetails",displayName:"禁止跳转动态详情",tags:[componentsTags.feeds],urlInclude:e.feedsUrls,description:{"zh-CN":"禁止动态点击后跳转详情页, 方便选择其中的文字."},entry:async()=>{const{addImportantStyle:e}=await Promise.resolve().then(r.t.bind(r,356,23)),{forEachFeedsCard:o}=await Promise.resolve().then(r.t.bind(r,799,23)),{default:i}=await Promise.resolve().then(r.t.bind(r,377,23));e(i,"disable-feeds-details-init-style"),a();o({added:e=>{const{element:o}=e;o.addEventListener("click",(t=>{if(t.ctrlKey||!n)return;const e=dqa(o,'.content, .bili-dyn-content [data-module="desc"] .bili-rich-text'),r=t.target;if(r.hasAttribute("click-title"))return;dqa(o,".im-popup").some((t=>t.contains(r)))||e.some((t=>t===r||t.contains(r)))&&t.stopImmediatePropagation()}),{capture:!0});const r=dq(o,".post-content, .bili-dyn-content");if(!r)return;if(![".video-container",".bangumi-container",".media-list",".article-container"].some((t=>dq(r,t)))&&!dq(r,".details")&&(r.classList.contains("repost")||e.type===t.feedsCardTypes.repost)){const t=dq(r,".content, .bili-dyn-content__orig__desc");if(!t)return;const e=document.createElement("div");e.classList.add("details"),e.setAttribute("click-title","详情"),e.innerHTML='\n        详情<i class="mdi mdi-chevron-right" click-title></i>\n      ',t.insertAdjacentElement("beforeend",e)}}})},unload:()=>{var t;null===(t=document.getElementById(o))||void 0===t||t.remove(),n=!1},reload:()=>{a(),n=!0},commitHash:"73fa9af28753b2618111f03f5b8f37ef7a4f6281",coreVersion:"2.1.10"}}(),i=i.component}()}));