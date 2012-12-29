/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){var t=document.defaultView&&document.defaultView.getComputedStyle,n=/([A-Z])/g,r=/-([a-z])/ig,i=function(e,t){return t.toUpperCase()},s=function(e){if(t)return t(e,null);if(e.currentStyle)return e.currentStyle},o=/float/i,u=/^-?\d+(?:px)?$/i,a=/^-?\d/;return e.styles=function(e,f){if(!e)return null;var l=s(e),c,h,p=e.style,d={},v=0,m,g,y,b;for(;v<f.length;v++)b=f[v],c=b.replace(r,i),o.test(b)&&(b=jQuery.support.cssFloat?"float":"styleFloat",c="cssFloat"),t?(b=b.replace(n,"-$1").toLowerCase(),h=l.getPropertyValue(b),b==="opacity"&&h===""&&(h="1"),d[c]=h):(y=b.replace(r,i),d[c]=l[b]||l[y],!u.test(d[c])&&a.test(d[c])&&(m=p.left,g=e.runtimeStyle.left,e.runtimeStyle.left=e.currentStyle.left,p.left=y==="fontSize"?"1em":d[c]||0,d[c]=p.pixelLeft+"px",p.left=m,e.runtimeStyle.left=g));return d},e.fn.styles=function(){return e.styles(this[0],e.makeArray(arguments))},e});