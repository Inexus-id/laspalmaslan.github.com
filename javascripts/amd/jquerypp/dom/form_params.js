/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){var t=/[^\[\]]+/g,n=function(t){return e.isNumeric(t)?parseFloat(t):t==="true"?!0:t==="false"?!1:t===""||t===null?undefined:t},r=function(t,n,i,s,o,u,a){var f=s.shift();a=a?a+"."+f:f;if(s.length)i[f]||(i[f]={}),r(t,n,i[f],s,o,u,a);else{a in u&&n!="radio"&&!e.isArray(i[f])?f in i?i[f]=[i[f]]:i[f]=[]:u[a]=!0;if((n=="radio"||n=="checkbox")&&!t.is(":checked"))return;i[f]?i[f].push(o):i[f]=o}};return e.fn.extend({formParams:function(e){var t;return!!e===e&&(t=e,e=null),e?this.setParams(e):this.getParams(t)},setParams:function(t){this.find("[name]").each(function(){var n=e(this),r=t[n.attr("name")];r!==undefined&&(n.is(":radio")?n.val()==r&&n.attr("checked",!0):n.is(":checkbox")?(r=e.isArray(r)?r:[r],e.inArray(n.val(),r)>-1&&n.attr("checked",!0)):n.val(r))})},getParams:function(i){var s={},o={},u;return this.find("[name]:not(:disabled)").each(function(){var u=e(this),a=u.attr("type"),f=u.attr("name"),l=u.val(),c;if(a=="submit"||!f)return;c=f.match(t),c.length||(c=[f]),i&&(l=n(l)),r(u,a,s,c,l,o)}),s}}),e});