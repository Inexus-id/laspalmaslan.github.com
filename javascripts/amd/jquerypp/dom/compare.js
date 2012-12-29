/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){return jQuery.fn.compare=function(e){try{e=e.jquery?e[0]:e}catch(t){return null}if(window.HTMLElement){var n=HTMLElement.prototype.toString.call(e);if(n=="[xpconnect wrapped native prototype]"||n=="[object XULElement]"||n==="[object Window]")return null}if(this[0].compareDocumentPosition)return this[0].compareDocumentPosition(e);if(this[0]==document&&e!=document)return 8;var r=(this[0]!==e&&this[0].contains(e)&&16)+(this[0]!=e&&e.contains(this[0])&&8),i=document.documentElement;return this[0].sourceIndex&&(r+=this[0].sourceIndex<e.sourceIndex&&4,r+=this[0].sourceIndex>e.sourceIndex&&2,r+=(this[0].ownerDocument!==e.ownerDocument||this[0]!=i&&this[0].sourceIndex<=0||e!=i&&e.sourceIndex<=0)&&1),r},e});