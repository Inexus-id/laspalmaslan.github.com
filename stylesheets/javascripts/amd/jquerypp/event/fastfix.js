/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){if(Object.defineProperties){var t=function(e,t,n){return n!==undefined&&Object.defineProperty(e,t,{value:n}),n},n={pageX:function(e){if(!e)return;var t=this.target.ownerDocument||document;return doc=t.documentElement,body=t.body,e.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0)},pageY:function(e){if(!e)return;var t=this.target.ownerDocument||document;return doc=t.documentElement,body=t.body,e.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)},relatedTarget:function(e){if(!e)return;return e.fromElement===this.target?e.toElement:e.fromElement},metaKey:function(e){if(!e)return;return e.ctrlKey},which:function(e){if(!e)return;return e.charCode!=null?e.charCode:e.keyCode}};jQuery.each(jQuery.event.keyHooks.props.concat(jQuery.event.mouseHooks.props).concat(jQuery.event.props),function(e,r){r!=="target"&&function(){Object.defineProperty(jQuery.Event.prototype,r,{get:function(){var e=this.originalEvent&&this.originalEvent[r];return this["_"+r]!==undefined?this["_"+r]:t(this,r,n[r]&&e===undefined?n[r].call(this,this.originalEvent):e)},set:function(e){this["_"+r]=e}})}()}),jQuery.event.fix=function(e){if(e[jQuery.expando])return e;var t=e,e=jQuery.Event(t);return e.target=t.target,e.target||(e.target=t.srcElement||document),e.target.nodeType===3&&(e.target=e.target.parentNode),e}}return e});