/*
* jQuery++ - 1.0.0 (2012-11-23)
* http://jquerypp.com
* Copyright (c) 2012 Bitovi
* Licensed MIT
*/
define(["jquerypp/event/reverse"],function(e){var t=e(window),n=0,r=0,i;return e(function(){n=t.width(),r=t.height()}),e.event.reverse("resize",{handler:function(e,s){var o=this===window;if(o&&e.originalEvent){var u=t.width(),a=t.height();if(u!=n||a!=r)n=u,r=a,clearTimeout(i),i=setTimeout(function(){t.trigger("resize")},1);return!0}}}),e});