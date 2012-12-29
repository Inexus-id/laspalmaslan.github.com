/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery","jquerypp/event/default"],function(e){var t,n=/\.(.*)$/,r=function(){return!1},i=function(){return!0};return e.Event.prototype.isPaused=r,e.Event.prototype.pause=function(){this.pausedState={isDefaultPrevented:this.isDefaultPrevented()?i:r,isPropagationStopped:this.isPropagationStopped()?i:r},this.stopImmediatePropagation(),this.preventDefault(),this.isPaused=i},e.Event.prototype.resume=function(){var t=this.handleObj,n=this.currentTarget,i=jQuery.event.special[t.origType],s=i&&i.handle;i||(jQuery.event.special[t.origType]={}),jQuery.event.special[t.origType].handle=function(e){e.handleObj===t&&e.currentTarget===n&&(i?jQuery.event.special[t.origType].handle=s:delete jQuery.event.special[t.origType])},delete this.pausedState,this.isPaused=this.isImmediatePropagationStopped=r,this.isPropagationStopped()||e.event.trigger(this,[],this.target)},e});