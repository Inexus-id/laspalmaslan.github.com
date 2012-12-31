/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery","jquerypp/event/drag","jquerypp/dom/styles"],function(e){e.Drag.prototype.limit=function(t,n){var r=t.styles("borderTopWidth","paddingTop","borderLeftWidth","paddingLeft"),i=new e.Vector(parseInt(r.borderLeftWidth,10)+parseInt(r.paddingLeft,10)||0,parseInt(r.borderTopWidth,10)+parseInt(r.paddingTop,10)||0);return this._limit={offset:t.offsetv().plus(i),size:t.dimensionsv(),center:n===!0?"both":n},this};var t=e.Drag.prototype.position;return e.Drag.prototype.position=function(e){if(this._limit){var n=this._limit,r=n.center&&n.center.toLowerCase(),i=this.movingElement.dimensionsv("outer"),s=r&&r!="x"?i.height()/2:0,o=r&&r!="y"?i.width()/2:0,u=n.offset.top(),a=n.offset.left(),f=n.size.height(),l=n.size.width();e.top()+s<u&&e.top(u-s),e.top()+i.height()-s>u+f&&e.top(u+f-i.height()+s),e.left()+o<a&&e.left(a-o),e.left()+i.width()-o>a+l&&e.left(a+l-i.left()+o)}t.call(this,e)},e});