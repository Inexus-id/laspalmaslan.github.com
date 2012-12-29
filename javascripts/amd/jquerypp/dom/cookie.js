/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquery","jquerypp/lang/json"],function(e){return jQuery.cookie=function(e,t,n){if(typeof t=="undefined"){var a=null;if(document.cookie&&document.cookie!=""){var f=document.cookie.split(";");for(var l=0;l<f.length;l++){var c=jQuery.trim(f[l]);if(c.substring(0,e.length+1)==e+"="){a=decodeURIComponent(c.substring(e.length+1));break}}}if(jQuery.evalJSON&&a&&a.match(/^\s*\{/))try{a=jQuery.evalJSON(a)}catch(h){}return a}n=n||{},t===null&&(t="",n.expires=-1),typeof t=="object"&&jQuery.toJSON&&(t=jQuery.toJSON(t));var r="";if(n.expires&&(typeof n.expires=="number"||n.expires.toUTCString)){var i;typeof n.expires=="number"?(i=new Date,i.setTime(i.getTime()+n.expires*24*60*60*1e3)):i=n.expires,r="; expires="+i.toUTCString()}var s=n.path?"; path="+n.path:"",o=n.domain?"; domain="+n.domain:"",u=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),r,s,o,u].join("")},e});