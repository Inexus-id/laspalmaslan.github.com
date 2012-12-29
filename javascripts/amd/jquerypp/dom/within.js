/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery"],function(e){var t=function(e,t,n,r,i,s){return t>=r&&t<r+s&&e>=n&&e<n+i};return e.fn.within=function(e,n,r){var i=[];return this.each(function(){var s=jQuery(this);if(this==document.documentElement)return i.push(this);var o=r?jQuery.data(this,"offsetCache")||jQuery.data(this,"offsetCache",s.offset()):s.offset(),u=t(e,n,o.left,o.top,this.offsetWidth,this.offsetHeight);u&&i.push(this)}),this.pushStack(jQuery.unique(i),"within",e+","+n)},e.fn.withinBox=function(e,t,n,r,i){var s=[];return this.each(function(){var o=jQuery(this);if(this==document.documentElement)return s.push(this);var u=i?jQuery.data(this,"offset")||jQuery.data(this,"offset",o.offset()):o.offset(),a=o.width(),f=o.height(),l=!(u.top>t+r||u.top+f<t||u.left>e+n||u.left+a<e);l&&s.push(this)}),this.pushStack(jQuery.unique(s),"withinBox",jQuery.makeArray(arguments).join(","))},e});