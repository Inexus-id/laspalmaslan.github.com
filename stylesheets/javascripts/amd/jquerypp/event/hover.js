/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery","jquerypp/event/livehack"],function(e){e.Hover=function(){this._delay=e.Hover.delay,this._distance=e.Hover.distance,this._leave=e.Hover.leave},e.extend(e.Hover,{delay:100,distance:10,leave:0}),e.extend(e.Hover.prototype,{delay:function(e){return this._delay=e,this},distance:function(e){return this._distance=e,this},leave:function(e){return this._leave=e,this}});var t=e.event,n=t.handle,r=function(n){var r=n.delegateTarget||n.currentTarget,i=n.handleObj.selector;if(e.data(r,"_hover"+i))return;e.data(r,"_hover"+i,!0);var s={pageX:n.pageX,pageY:n.pageY},o=0,u,a=this,f=!1,l=n,c=new e.Hover,h,p=function(){e.each(t.find(r,["hoverleave"],i),function(){this.call(a,n,c)}),m()},d=function(e){clearTimeout(h),o+=Math.pow(e.pageX-s.pageX,2)+Math.pow(e.pageY-s.pageY,2),s={pageX:e.pageX,pageY:e.pageY},l=e},v=function(e){clearTimeout(u),f?c._leave===0?p():(clearTimeout(h),h=setTimeout(function(){p()},c._leave)):m()},m=function(){e(a).unbind("mouseleave",v),e(a).unbind("mousemove",d),e.removeData(r,"_hover"+i)},g=function(){e.each(t.find(r,["hoverenter"],i),function(){this.call(a,l,c)}),f=!0};e(a).bind("mousemove",d).bind("mouseleave",v),e.each(t.find(r,["hoverinit"],i),function(){this.call(a,n,c)}),c._delay===0?g():u=setTimeout(function(){if(o<c._distance&&e(a).queue().length==0){g();return}o=0,u=setTimeout(arguments.callee,c._delay)},c._delay)};return t.setupHelper(["hoverinit","hoverenter","hoverleave","hovermove"],"mouseenter",r),e});