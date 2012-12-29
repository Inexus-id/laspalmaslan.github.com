/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){e.fn.triggerAsync=function(e,t,n,r){typeof t=="function"&&(r=n,n=t,t=undefined);if(this.length){var i=this;setTimeout(function(){i.trigger({type:e,_success:n,_prevented:r},t)},0)}else n&&n.call(this);return this};var t={},n=/\.(.*)$/,r=e.event;r.special["default"]={add:function(e){t[e.namespace.replace(n,"")]=!0},setup:function(){return!0}};var i=r.trigger;return r.trigger=function(n,r,s,o){var u=n.type||n,n=typeof n=="object"?n[jQuery.expando]?n:new jQuery.Event(u,n):new jQuery.Event(u),a=i.call(e.event,n,r,s,o),f=n.isPaused&&n.isPaused();return!o&&!n.isDefaultPrevented()&&n.type.indexOf("default")!==0&&(i("default."+n.type,r,s),n._success&&n._success(n)),!o&&n.isDefaultPrevented()&&n.type.indexOf("default")!==0&&!f&&n._prevented&&n._prevented(n),f&&(n.isDefaultPrevented=n.pausedState.isDefaultPrevented,n.isPropagationStopped=n.pausedState.isPropagationStopped),a},e});