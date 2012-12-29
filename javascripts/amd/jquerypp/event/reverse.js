/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){return e.event.reverse=function(t,n){var r=e(),i=0;return e.event.special[t]={setup:function(){return this!==window&&(r.push(this),e.unique(r)),this!==window},teardown:function(){return r=r.not(this),this!==window},add:function(t){var s=t.handler;t.origHandler=s,t.handler=function(s,o){var u=this===window;if(n&&n.handler){var a=n.handler.apply(this,arguments);if(a===!0)return}if(i===0){i++;var f=o===!1?s.target:this;e.event.handle.call(f,s,o);if(s.isPropagationStopped()){i--;return}var l=r.index(this),c=r.length,h,p;while(++l<c&&(h=r[l])&&(u||e.contains(f,h))){e.event.handle.call(h,s,o);if(s.isPropagationStopped())while(++l<c&&(p=r[l]))if(!e.contains(h,p)){l--;break}}s.stopImmediatePropagation(),i--}else t.origHandler.call(this,s,o)}}},e([document,window]).bind(t,function(){}),e.event.special[t]},e});