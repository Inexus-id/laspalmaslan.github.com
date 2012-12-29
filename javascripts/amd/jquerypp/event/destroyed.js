/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){var t=jQuery.cleanData;return e.cleanData=function(n){for(var r=0,i;(i=n[r])!==undefined;r++)e(i).triggerHandler("destroyed");t(n)},e});