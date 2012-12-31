/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery","jquerypp/event/drag","jquerypp/dom/styles"],function(e){var t=function(e,t){return Math.round(e/t)*t};return e.Drag.prototype.step=function(t,n,r){typeof t=="number"&&(t={x:t,y:t}),n=n||e(document.body),this._step=t;var i=n.styles("borderTopWidth","paddingTop","borderLeftWidth","paddingLeft"),s=parseInt(i.borderTopWidth)+parseInt(i.paddingTop),o=parseInt(i.borderLeftWidth)+parseInt(i.paddingLeft);return this._step.offset=n.offsetv().plus(o,s),this._step.center=r,this},function(){var n=e.Drag.prototype.position;e.Drag.prototype.position=function(e){if(this._step){var r=this._step,i=r.center&&r.center.toLowerCase(),s=this.movingElement.dimensionsv("outer"),o=r.offset.top()-(i&&i!="x"?s.height()/2:0),u=r.offset.left()-(i&&i!="y"?s.width()/2:0);this._step.x&&e.left(Math.round(u+t(e.left()-u,this._step.x))),this._step.y&&e.top(Math.round(o+t(e.top()-o,this._step.y)))}n.call(this,e)}}(),e});