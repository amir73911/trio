
window.Epoc = {
    Cache: {},
    isolang: 'fr-be',
    language: 'fre',
    here: '/'
};
Epoc.isolang = 'fr-be';
Epoc.language = 'fre';
Epoc.here = '/';

/* -- json2.js */
var JSON;JSON||(JSON={});
(function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
    e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
        "}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("",
    {"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();

/* -- jquery-1.7.1.js */
(function(p,l){function cb(a){var b=ka[a]={},c,e,a=a.split(/\s+/);c=0;for(e=a.length;c<e;c++)b[a[c]]=!0;return b}function la(a,b,d){if(d===l&&a.nodeType===1)if(d="data-"+b.replace(db,"-$1").toLowerCase(),d=a.getAttribute(d),typeof d==="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:c.isNumeric(d)?parseFloat(d):eb.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=l;return d}function Z(a){for(var b in a)if(!(b==="data"&&c.isEmptyObject(a[b]))&&b!=="toJSON")return!1;return!0}function ma(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,d){var e=b+"defer",f=b+"queue",g=b+"mark",h=c._data(a,e);h&&(d==="queue"||!c._data(a,f))&&(d==="mark"||!c._data(a,g))&&setTimeout(function(){!c._data(a,f)&&!c._data(a,g)&&(c.removeData(a,e,!0),h.fire())},0)}function E(){return!1}function L(){return!0}function na(a,b,d){b=b||0;if(c.isFunction(b))return c.grep(a,function(a,c){return!!b.call(a,c,a)===d});else if(b.nodeType)return c.grep(a,function(a){return a===b===d});else if(typeof b==="string"){var e=c.grep(a,function(a){return a.nodeType===1});
    if(fb.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(a){return c.inArray(a,b)>=0===d})}function oa(a){var b=pa.split("|"),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function qa(a,b){if(b.nodeType===1&&c.hasData(a)){var d,e,f;e=c._data(a);var g=c._data(b,e),h=e.events;if(h)for(d in delete g.handle,g.events={},h){e=0;for(f=h[d].length;e<f;e++)c.event.add(b,d+(h[d][e].namespace?".":"")+h[d][e].namespace,h[d][e],h[d][e].data)}if(g.data)g.data=
    c.extend({},g.data)}}function ra(a,b){var d;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes();b.mergeAttributes&&b.mergeAttributes(a);d=b.nodeName.toLowerCase();if(d==="object")b.outerHTML=a.outerHTML;else if(d==="input"&&(a.type==="checkbox"||a.type==="radio")){if(a.checked)b.defaultChecked=b.checked=a.checked;if(b.value!==a.value)b.value=a.value}else if(d==="option")b.selected=a.defaultSelected;else if(d==="input"||d==="textarea")b.defaultValue=a.defaultValue;b.removeAttribute(c.expando)}}
    function R(a){return typeof a.getElementsByTagName!=="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!=="undefined"?a.querySelectorAll("*"):[]}function sa(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function ta(a){var b=(a.nodeName||"").toLowerCase();b==="input"?sa(a):b!=="script"&&typeof a.getElementsByTagName!=="undefined"&&c.grep(a.getElementsByTagName("input"),sa)}function gb(a,b){b.src?c.ajax({url:b.src,async:!1,dataType:"script"}):c.globalEval((b.text||
        b.textContent||b.innerHTML||"").replace(hb,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)}function ua(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight,f=b==="width"?ib:jb,g=0,h=f.length;if(e>0){if(d!=="border")for(;g<h;g++)d||(e-=parseFloat(c.css(a,"padding"+f[g]))||0),d==="margin"?e+=parseFloat(c.css(a,d+f[g]))||0:e-=parseFloat(c.css(a,"border"+f[g]+"Width"))||0;return e+"px"}e=G(a,b,b);if(e<0||e==null)e=a.style[b]||0;e=parseFloat(e)||0;if(d)for(;g<h;g++)e+=parseFloat(c.css(a,"padding"+
        f[g]))||0,d!=="padding"&&(e+=parseFloat(c.css(a,"border"+f[g]+"Width"))||0),d==="margin"&&(e+=parseFloat(c.css(a,d+f[g]))||0);return e+"px"}function va(a){return function(b,d){var j;typeof b!=="string"&&(d=b,b="*");if(c.isFunction(d))for(var e=b.toLowerCase().split(wa),f=0,g=e.length,h,i;f<g;f++)h=e[f],(i=/^\+/.test(h))&&(h=h.substr(1)||"*"),j=a[h]=a[h]||[],h=j,h[i?"unshift":"push"](d)}}function U(a,b,c,e,f,g){f=f||b.dataTypes[0];g=g||{};g[f]=!0;for(var f=a[f],h=0,i=f?f.length:0,j=a===$,m;h<i&&(j||
        !m);h++)m=f[h](b,c,e),typeof m==="string"&&(!j||g[m]?m=l:(b.dataTypes.unshift(m),m=U(a,b,c,e,m,g)));if((j||!m)&&!g["*"])m=U(a,b,c,e,"*",g);return m}function xa(a,b){var d,e,f=c.ajaxSettings.flatOptions||{};for(d in b)b[d]!==l&&((f[d]?a:e||(e={}))[d]=b[d]);e&&c.extend(!0,a,e)}function aa(a,b,d,e){if(c.isArray(b))c.each(b,function(b,f){d||kb.test(a)?e(a,f):aa(a+"["+(typeof f==="object"||c.isArray(f)?b:"")+"]",f,d,e)});else if(!d&&b!=null&&typeof b==="object")for(var f in b)aa(a+"["+f+"]",b[f],d,e);
    else e(a,b)}function ya(){try{return new p.XMLHttpRequest}catch(a){}}function za(){setTimeout(lb,0);return V=c.now()}function lb(){V=l}function M(a,b){var d={};c.each(Aa.concat.apply([],Aa.slice(0,b)),function(){d[this]=a});return d}function Ba(a){if(!ba[a]){var b=k.body,d=c("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){if(!A)A=k.createElement("iframe"),A.frameBorder=A.width=A.height=0;b.appendChild(A);if(!H||!A.createElement)H=(A.contentWindow||A.contentDocument).document,
        H.write((k.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),H.close();d=H.createElement(a);H.body.appendChild(d);e=c.css(d,"display");b.removeChild(A)}ba[a]=e}return ba[a]}function ca(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var k=p.document,mb=p.navigator,nb=p.location,c=function(){function a(){if(!b.isReady){try{k.documentElement.doScroll("left")}catch(c){setTimeout(a,1);return}b.ready()}}var b=function(a,c){return new b.fn.init(a,c,f)},c=p.jQuery,
        e=p.$,f,g=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,h=/\S/,i=/^\s+/,j=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,u=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,y=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,n=/(?:^|:|,)(?:\s*\[)+/g,ob=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,v=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,s=/-([a-z]|[0-9])/ig,B=/^-ms-/,q=function(a,b){return(b+"").toUpperCase()},x=mb.userAgent,r,K,pb=Object.prototype.toString,
        da=Object.prototype.hasOwnProperty,ea=Array.prototype.push,T=Array.prototype.slice,Ca=String.prototype.trim,Da=Array.prototype.indexOf,Ea={};b.fn=b.prototype={constructor:b,init:function(a,c,d){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(a==="body"&&!c&&k.body)return this.context=k,this[0]=k.body,this.selector=a,this.length=1,this;if(typeof a==="string")if((e=a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?[null,a,null]:g.exec(a))&&(e[1]||!c))if(e[1])return d=
        (c=c instanceof b?c[0]:c)?c.ownerDocument||c:k,(a=m.exec(a))?b.isPlainObject(c)?(a=[k.createElement(a[1])],b.fn.attr.call(a,c,!0)):a=[d.createElement(a[1])]:(a=b.buildFragment([e[1]],[d]),a=(a.cacheable?b.clone(a.fragment):a.fragment).childNodes),b.merge(this,a);else{if((c=k.getElementById(e[2]))&&c.parentNode){if(c.id!==e[2])return d.find(a);this.length=1;this[0]=c}this.context=k;this.selector=a;return this}else return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);else if(b.isFunction(a))return d.ready(a);
        if(a.selector!==l)this.selector=a.selector,this.context=a.context;return b.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return T.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,c,d){var e=this.constructor();b.isArray(a)?ea.apply(e,a):b.merge(e,a);e.prevObject=this;e.context=this.context;if(c==="find")e.selector=this.selector+(this.selector?" ":"")+d;else if(c)e.selector=
        this.selector+"."+c+"("+d+")";return e},each:function(a,c){return b.each(this,a,c)},ready:function(a){b.bindReady();r.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(T.apply(this,arguments),"slice",T.call(arguments).join(","))},map:function(a){return this.pushStack(b.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||
        this.constructor(null)},push:ea,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var a,c,d,e,f,g=arguments[0]||{},r=1,h=arguments.length,K=!1;typeof g==="boolean"&&(K=g,g=arguments[1]||{},r=2);typeof g!=="object"&&!b.isFunction(g)&&(g={});h===r&&(g=this,--r);for(;r<h;r++)if((a=arguments[r])!=null)for(c in a)d=g[c],e=a[c],g!==e&&(K&&e&&(b.isPlainObject(e)||(f=b.isArray(e)))?(f?(f=!1,d=d&&b.isArray(d)?d:[]):d=d&&b.isPlainObject(d)?d:{},g[c]=b.extend(K,d,e)):e!==
        l&&(g[c]=e));return g};b.extend({noConflict:function(a){if(p.$===b)p.$=e;if(a&&p.jQuery===b)p.jQuery=c;return b},isReady:!1,readyWait:1,holdReady:function(a){a?b.readyWait++:b.ready(!0)},ready:function(a){if(a===!0&&!--b.readyWait||a!==!0&&!b.isReady){if(!k.body)return setTimeout(b.ready,1);b.isReady=!0;a!==!0&&--b.readyWait>0||(r.fireWith(k,[b]),b.fn.trigger&&b(k).trigger("ready").off("ready"))}},bindReady:function(){if(!r){r=b.Callbacks("once memory");if(k.readyState==="complete")return setTimeout(b.ready,
        1);if(k.addEventListener)k.addEventListener("DOMContentLoaded",K,!1),p.addEventListener("load",b.ready,!1);else if(k.attachEvent){k.attachEvent("onreadystatechange",K);p.attachEvent("onload",b.ready);var c=!1;try{c=p.frameElement==null}catch(d){}k.documentElement.doScroll&&c&&a()}}},isFunction:function(a){return b.type(a)==="function"},isArray:Array.isArray||function(a){return b.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&
        isFinite(a)},type:function(a){return a==null?String(a):Ea[pb.call(a)]||"object"},isPlainObject:function(a){if(!a||b.type(a)!=="object"||a.nodeType||b.isWindow(a))return!1;try{if(a.constructor&&!da.call(a,"constructor")&&!da.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var d in a);return d===l||da.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=b.trim(a);
        if(p.JSON&&p.JSON.parse)return p.JSON.parse(a);if(u.test(a.replace(o,"@").replace(y,"]").replace(n,"")))return(new Function("return "+a))();b.error("Invalid JSON: "+a)},parseXML:function(a){var c,d;try{p.DOMParser?(d=new DOMParser,c=d.parseFromString(a,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(a))}catch(e){c=l}(!c||!c.documentElement||c.getElementsByTagName("parsererror").length)&&b.error("Invalid XML: "+a);return c},noop:function(){},globalEval:function(a){a&&
        h.test(a)&&(p.execScript||function(a){p.eval.call(p,a)})(a)},camelCase:function(a){return a.replace(B,"ms-").replace(s,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,r=g===l||b.isFunction(a);if(d)if(r)for(e in a){if(c.apply(a[e],d)===!1)break}else for(;f<g;){if(c.apply(a[f++],d)===!1)break}else if(r)for(e in a){if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:Ca?
        function(a){return a==null?"":Ca.call(a)}:function(a){return a==null?"":a.toString().replace(i,"").replace(j,"")},makeArray:function(a,c){var d=c||[];if(a!=null){var e=b.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||b.isWindow(a)?ea.call(d,a):b.merge(d,a)}return d},inArray:function(a,b,c){var d;if(b){if(Da)return Da.call(b,a,c);d=b.length;for(c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=a.length,d=0;if(typeof b.length===
        "number")for(var e=b.length;d<e;d++)a[c++]=b[d];else for(;b[d]!==l;)a[c++]=b[d++];a.length=c;return a},grep:function(a,b,c){for(var d=[],e,c=!!c,f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var e,f,g=[],r=0,h=a.length;if(a instanceof b||h!==l&&typeof h==="number"&&(h>0&&a[0]&&a[h-1]||h===0||b.isArray(a)))for(;r<h;r++)e=c(a[r],r,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  c){if(typeof c==="string")var d=a[c],c=a,a=d;if(!b.isFunction(a))return l;var e=T.call(arguments,2),d=function(){return a.apply(c,e.concat(T.call(arguments)))};d.guid=a.guid=a.guid||d.guid||b.guid++;return d},access:function(a,c,d,e,f,g){var r=a.length;if(typeof c==="object"){for(var h in c)b.access(a,h,c[h],e,f,d);return a}if(d!==l){e=!g&&e&&b.isFunction(d);for(h=0;h<r;h++)f(a[h],c,e?d.call(a[h],h,f(a[h],c)):d,g);return a}return r?f(a[0],c):l},now:function(){return(new Date).getTime()},uaMatch:function(a){a=
        a.toLowerCase();a=ob.exec(a)||t.exec(a)||v.exec(a)||a.indexOf("compatible")<0&&w.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}b.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(d,e){e&&e instanceof b&&!(e instanceof a)&&(e=a(e));return b.fn.init.call(this,d,e,c)};a.fn.init.prototype=a.fn;var c=a(k);return a},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a,b){Ea["[object "+b+"]"]=b.toLowerCase()});x=b.uaMatch(x);if(x.browser)b.browser[x.browser]=!0,b.browser.version=x.version;if(b.browser.webkit)b.browser.safari=!0;h.test("\u00a0")&&(i=/^[\s\xA0]+/,j=/[\s\xA0]+$/);f=b(k);k.addEventListener?K=function(){k.removeEventListener("DOMContentLoaded",K,!1);b.ready()}:k.attachEvent&&(K=function(){k.readyState==="complete"&&(k.detachEvent("onreadystatechange",K),b.ready())});return b}(),ka={};c.Callbacks=function(a){var a=a?ka[a]||cb(a):{},b=[],d=
        [],e,f,g,h,i,j=function(d){var e,f,g,h;e=0;for(f=d.length;e<f;e++)g=d[e],h=c.type(g),h==="array"?j(g):h==="function"&&(!a.unique||!u.has(g))&&b.push(g)},m=function(c,j){j=j||[];e=!a.memory||[c,j];f=!0;i=g||0;g=0;for(h=b.length;b&&i<h;i++)if(b[i].apply(c,j)===!1&&a.stopOnFalse){e=!0;break}f=!1;b&&(a.once?e===!0?u.disable():b=[]:d&&d.length&&(e=d.shift(),u.fireWith(e[0],e[1])))},u={add:function(){if(b){var a=b.length;j(arguments);f?h=b.length:e&&e!==!0&&(g=a,m(e[0],e[1]))}return this},remove:function(){if(b)for(var c=
        arguments,d=0,e=c.length;d<e;d++)for(var g=0;g<b.length;g++)if(c[d]===b[g]&&(f&&g<=h&&(h--,g<=i&&i--),b.splice(g--,1),a.unique))break;return this},has:function(a){if(b)for(var c=0,d=b.length;c<d;c++)if(a===b[c])return!0;return!1},empty:function(){b=[];return this},disable:function(){b=d=e=l;return this},disabled:function(){return!b},lock:function(){d=l;(!e||e===!0)&&u.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(f?a.once||d.push([b,c]):(!a.once||!e)&&m(b,c));return this},
        fire:function(){u.fireWith(this,arguments);return this},fired:function(){return!!e}};return u};var fa=[].slice;c.extend({Deferred:function(a){var b=c.Callbacks("once memory"),d=c.Callbacks("once memory"),e=c.Callbacks("memory"),f="pending",g={resolve:b,reject:d,notify:e},h={done:b.add,fail:d.add,progress:e.add,state:function(){return f},isResolved:b.fired,isRejected:d.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);
        return this},pipe:function(a,b,d){return c.Deferred(function(e){c.each({done:[a,"resolve"],fail:[b,"reject"],progress:[d,"notify"]},function(a,b){var d=b[0],f=b[1],g;if(c.isFunction(d))i[a](function(){if((g=d.apply(this,arguments))&&c.isFunction(g.promise))g.promise().then(e.resolve,e.reject,e.notify);else e[f+"With"](this===i?e:this,[g])});else i[a](e[f])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=
        g[j].fireWith;i.done(function(){f="resolved"},d.disable,e.lock).fail(function(){f="rejected"},b.disable,e.lock);a&&a.call(i,i);return i},when:function(a){function b(a){return function(b){e[a]=arguments.length>1?fa.call(arguments,0):b;--i||j.resolveWith(j,e)}}function d(a){return function(b){h[a]=arguments.length>1?fa.call(arguments,0):b;j.notifyWith(m,h)}}var e=fa.call(arguments,0),f=0,g=e.length,h=Array(g),i=g,j=g<=1&&a&&c.isFunction(a.promise)?a:c.Deferred(),m=j.promise();if(g>1){for(;f<g;f++)e[f]&&
        e[f].promise&&c.isFunction(e[f].promise)?e[f].promise().then(b(f),j.reject,d(f)):--i;i||j.resolveWith(j,e)}else j!==a&&j.resolveWith(j,g?[a]:[]);return m}});c.support=function(){var a,b,d,e,f,g,h,i,j=k.createElement("div");j.setAttribute("className","t");j.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";b=j.getElementsByTagName("*");d=j.getElementsByTagName("a")[0];if(!b||!b.length||!d)return{};e=k.createElement("select");f=e.appendChild(k.createElement("option"));
        b=j.getElementsByTagName("input")[0];a={leadingWhitespace:j.firstChild.nodeType===3,tbody:!j.getElementsByTagName("tbody").length,htmlSerialize:!!j.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.55/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:b.value==="on",optSelected:f.selected,getSetAttribute:j.className!=="t",enctype:!!k.createElement("form").enctype,html5Clone:k.createElement("nav").cloneNode(!0).outerHTML!==
            "<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0};b.checked=!0;a.noCloneChecked=b.cloneNode(!0).checked;e.disabled=!0;a.optDisabled=!f.disabled;try{delete j.test}catch(m){a.deleteExpando=!1}!j.addEventListener&&j.attachEvent&&j.fireEvent&&(j.attachEvent("onclick",function(){a.noCloneEvent=!1}),j.cloneNode(!0).fireEvent("onclick"));b=k.createElement("input");b.value="t";b.setAttribute("type",
            "radio");a.radioValue=b.value==="t";b.setAttribute("checked","checked");j.appendChild(b);d=k.createDocumentFragment();d.appendChild(j.lastChild);a.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked;a.appendChecked=b.checked;d.removeChild(b);d.appendChild(j);j.innerHTML="";if(p.getComputedStyle)b=k.createElement("div"),b.style.width="0",b.style.marginRight="0",j.style.width="2px",j.appendChild(b),a.reliableMarginRight=(parseInt((p.getComputedStyle(b,null)||{marginRight:0}).marginRight,10)||
            0)===0;if(j.attachEvent)for(h in{submit:1,change:1,focusin:1})b="on"+h,i=b in j,i||(j.setAttribute(b,"return;"),i=typeof j[b]==="function"),a[h+"Bubbles"]=i;d.removeChild(j);d=e=f=b=j=b=null;c(function(){var b,d,e,f,h=k.getElementsByTagName("body")[0];if(h){b=k.createElement("div");b.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";h.insertBefore(b,h.firstChild);j=k.createElement("div");b.appendChild(j);j.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            g=j.getElementsByTagName("td");i=g[0].offsetHeight===0;g[0].style.display="";g[1].style.display="none";a.reliableHiddenOffsets=i&&g[0].offsetHeight===0;j.innerHTML="";j.style.width=j.style.paddingLeft="1px";c.boxModel=a.boxModel=j.offsetWidth===2;if(typeof j.style.zoom!=="undefined")j.style.display="inline",j.style.zoom=1,a.inlineBlockNeedsLayout=j.offsetWidth===2,j.style.display="",j.innerHTML="<div style='width:4px;'></div>",a.shrinkWrapBlocks=j.offsetWidth!==2;j.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";
            j.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d=j.firstChild;e=d.firstChild;f={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:d.nextSibling.firstChild.firstChild.offsetTop===5};e.style.position="fixed";e.style.top="20px";f.fixedPosition=
                e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";f.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;f.doesNotIncludeMarginInBodyOffset=h.offsetTop!==1;h.removeChild(b);j=null;c.extend(a,f)}});return a}();var eb=/^(?:\{.*\}|\[.*\])$/,db=/([A-Z])/g;c.extend({cache:{},uuid:0,expando:"jQuery"+(c.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=
        a.nodeType?c.cache[a[c.expando]]:a[c.expando];return!!a&&!Z(a)},data:function(a,b,d,e){if(c.acceptData(a)){var f;f=c.expando;var g=typeof b==="string",h=a.nodeType,i=h?c.cache:a,j=h?a[f]:a[f]&&f,m=b==="events";if(j&&i[j]&&(m||e||i[j].data)||!(g&&d===l)){j||(h?a[f]=j=++c.uuid:j=f);if(!i[j]&&(i[j]={},!h))i[j].toJSON=c.noop;if(typeof b==="object"||typeof b==="function")e?i[j]=c.extend(i[j],b):i[j].data=c.extend(i[j].data,b);f=a=i[j];if(!e){if(!a.data)a.data={};a=a.data}d!==l&&(a[c.camelCase(b)]=d);if(m&&
        !a[b])return f.events;g?(d=a[b],d==null&&(d=a[c.camelCase(b)])):d=a;return d}}},removeData:function(a,b,d){if(c.acceptData(a)){var e,f,g,h=c.expando,i=a.nodeType,j=i?c.cache:a,m=i?a[h]:h;if(j[m]){if(b&&(e=d?j[m]:j[m].data)){c.isArray(b)||(b in e?b=[b]:(b=c.camelCase(b),b=b in e?[b]:b.split(" ")));f=0;for(g=b.length;f<g;f++)delete e[b[f]];if(!(d?Z:c.isEmptyObject)(e))return}if(!d&&(delete j[m].data,!Z(j[m])))return;c.support.deleteExpando||!j.setInterval?delete j[m]:j[m]=null;i&&(c.support.deleteExpando?
        delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}}},_data:function(a,b,d){return c.data(a,b,d,!0)},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===!0||a.getAttribute("classid")!==b)}return!0}});c.fn.extend({data:function(a,b){var d,e,f,g=null;if(typeof a==="undefined"){if(this.length&&(g=c.data(this[0]),this[0].nodeType===1&&!c._data(this[0],"parsedAttrs"))){e=this[0].attributes;for(var h=0,i=e.length;h<i;h++)f=e[h].name,f.indexOf("data-")===
        0&&(f=c.camelCase(f.substring(5)),la(this[0],f,g[f]));c._data(this[0],"parsedAttrs",!0)}return g}else if(typeof a==="object")return this.each(function(){c.data(this,a)});d=a.split(".");d[1]=d[1]?"."+d[1]:"";return b===l?(g=this.triggerHandler("getData"+d[1]+"!",[d[0]]),g===l&&this.length&&(g=c.data(this[0],a),g=la(this[0],a,g)),g===l&&d[1]?this.data(d[0]):g):this.each(function(){var e=c(this),f=[d[0],b];e.triggerHandler("setData"+d[1]+"!",f);c.data(this,a,b);e.triggerHandler("changeData"+d[1]+"!",
        f)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",c._data(a,b,(c._data(a,b)||0)+1))},_unmark:function(a,b,d){a!==!0&&(d=b,b=a,a=!1);if(b){var d=d||"fx",e=d+"mark";(a=a?0:(c._data(b,e)||1)-1)?c._data(b,e,a):(c.removeData(b,e,!0),ma(b,d,"mark"))}},queue:function(a,b,d){var e;if(a)return b=(b||"fx")+"queue",e=c._data(a,b),d&&(!e||c.isArray(d)?e=c._data(a,b,c.makeArray(d)):e.push(d)),e||[]},dequeue:function(a,b){var b=
        b||"fx",d=c.queue(a,b),e=d.shift(),f={};e==="inprogress"&&(e=d.shift());e&&(b==="fx"&&d.unshift("inprogress"),c._data(a,b+".run",f),e.call(a,function(){c.dequeue(a,b)},f));d.length||(c.removeData(a,b+"queue "+b+".run",!0),ma(a,b,"queue"))}});c.fn.extend({queue:function(a,b){typeof a!=="string"&&(b=a,a="fx");if(b===l)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
        a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,c){var f=setTimeout(b,a);c.stop=function(){clearTimeout(f)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a){function b(){--g||d.resolveWith(e,[e])}typeof a!=="string"&&(a=l);var a=a||"fx",d=c.Deferred(),e=this,f=e.length,g=1,h=a+"defer",i=a+"queue";a+="mark";for(var j;f--;)if(j=c.data(e[f],h,l,!0)||(c.data(e[f],i,l,!0)||c.data(e[f],a,l,!0))&&c.data(e[f],h,c.Callbacks("once memory"),
        !0))g++,j.add(b);b();return d.promise()}});var Fa=/[\n\t\r]/g,W=/\s+/,qb=/\r/g,rb=/^(?:button|input)$/i,sb=/^(?:button|input|object|select|textarea)$/i,tb=/^a(?:rea)?$/i,Ga=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Ha=c.support.getSetAttribute,F,Ia,Ja;c.fn.extend({attr:function(a,b){return c.access(this,a,b,!0,c.attr)},removeAttr:function(a){return this.each(function(){c.removeAttr(this,a)})},prop:function(a,b){return c.access(this,
        a,b,!0,c.prop)},removeProp:function(a){a=c.propFix[a]||a;return this.each(function(){try{this[a]=l,delete this[a]}catch(b){}})},addClass:function(a){var b,d,e,f,g,h,i;if(c.isFunction(a))return this.each(function(b){c(this).addClass(a.call(this,b,this.className))});if(a&&typeof a==="string"){b=a.split(W);d=0;for(e=this.length;d<e;d++)if(f=this[d],f.nodeType===1)if(!f.className&&b.length===1)f.className=a;else{g=" "+f.className+" ";h=0;for(i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");
        f.className=c.trim(g)}}return this},removeClass:function(a){var b,d,e,f,g,h,i;if(c.isFunction(a))return this.each(function(b){c(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a==="string"||a===l){b=(a||"").split(W);d=0;for(e=this.length;d<e;d++)if(f=this[d],f.nodeType===1&&f.className)if(a){g=(" "+f.className+" ").replace(Fa," ");h=0;for(i=b.length;h<i;h++)g=g.replace(" "+b[h]+" "," ");f.className=c.trim(g)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,
        e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(d){c(this).toggleClass(a.call(this,d,this.className,b),b)});return this.each(function(){if(d==="string")for(var f,g=0,h=c(this),i=b,j=a.split(W);f=j[g++];)i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f);else if(d==="undefined"||d==="boolean")this.className&&c._data(this,"__className__",this.className),this.className=this.className||a===!1?"":c._data(this,"__className__")||""})},hasClass:function(a){for(var a=" "+a+" ",b=0,c=
        this.length;b<c;b++)if(this[b].nodeType===1&&(" "+this[b].className+" ").replace(Fa," ").indexOf(a)>-1)return!0;return!1},val:function(a){var b,d,e,f=this[0];if(arguments.length)return e=c.isFunction(a),this.each(function(d){var f=c(this);if(this.nodeType===1&&(d=e?a.call(this,d,f.val()):a,d==null?d="":typeof d==="number"?d+="":c.isArray(d)&&(d=c.map(d,function(a){return a==null?"":a+""})),b=c.valHooks[this.nodeName.toLowerCase()]||c.valHooks[this.type],!b||!("set"in b)||b.set(this,d,"value")===l))this.value=
        d});else if(f){if((b=c.valHooks[f.nodeName.toLowerCase()]||c.valHooks[f.type])&&"get"in b&&(d=b.get(f,"value"))!==l)return d;d=f.value;return typeof d==="string"?d.replace(qb,""):d==null?"":d}}});c.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,d,e=a.selectedIndex,f=[],g=a.options,h=a.type==="select-one";if(e<0)return null;a=h?e:0;for(d=h?e+1:g.length;a<d;a++)if(b=g[a],b.selected&&(c.support.optDisabled?!b.disabled:
        b.getAttribute("disabled")===null)&&(!b.parentNode.disabled||!c.nodeName(b.parentNode,"optgroup"))){b=c(b).val();if(h)return b;f.push(b)}if(h&&!f.length&&g.length)return c(g[e]).val();return f},set:function(a,b){var d=c.makeArray(b);c(a).find("option").each(function(){this.selected=c.inArray(c(this).val(),d)>=0});if(!d.length)a.selectedIndex=-1;return d}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,d,e){var f,g,h=a.nodeType;if(a&&!(h===3||h===8||
        h===2)){if(e&&b in c.attrFn)return c(a)[b](d);if(typeof a.getAttribute==="undefined")return c.prop(a,b,d);if(e=h!==1||!c.isXMLDoc(a))b=b.toLowerCase(),g=c.attrHooks[b]||(Ga.test(b)?Ia:F);if(d!==l)if(d===null)c.removeAttr(a,b);else return g&&"set"in g&&e&&(f=g.set(a,d,b))!==l?f:(a.setAttribute(b,""+d),d);else return g&&"get"in g&&e&&(f=g.get(a,b))!==null?f:(f=a.getAttribute(b),f===null?l:f)}},removeAttr:function(a,b){var d,e,f,g,h=0;if(b&&a.nodeType===1){e=b.toLowerCase().split(W);for(g=e.length;h<
        g;h++)if(f=e[h])d=c.propFix[f]||f,c.attr(a,f,""),a.removeAttribute(Ha?f:d),Ga.test(f)&&d in a&&(a[d]=!1)}},attrHooks:{type:{set:function(a,b){if(rb.test(a.nodeName)&&a.parentNode)c.error("type property can't be changed");else if(!c.support.radioValue&&b==="radio"&&c.nodeName(a,"input")){var d=a.value;a.setAttribute("type",b);if(d)a.value=d;return b}}},value:{get:function(a,b){if(F&&c.nodeName(a,"button"))return F.get(a,b);return b in a?a.value:null},set:function(a,b,d){if(F&&c.nodeName(a,"button"))return F.set(a,
        b,d);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,b,d){var e,f,g=a.nodeType;if(a&&!(g===3||g===8||g===2)){if(g!==1||!c.isXMLDoc(a))b=c.propFix[b]||b,f=c.propHooks[b];return d!==l?f&&"set"in f&&(e=f.set(a,d,b))!==l?e:a[b]=d:f&&"get"in f&&(e=f.get(a,
        b))!==null?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:l}}}});c.attrHooks.tabindex=c.propHooks.tabIndex;Ia={get:function(a,b){var d,e=c.prop(a,b);return e===!0||typeof e!=="boolean"&&(d=a.getAttributeNode(b))&&d.nodeValue!==!1?b.toLowerCase():l},set:function(a,b,d){b===!1?c.removeAttr(a,d):(b=c.propFix[d]||d,b in a&&(a[b]=!0),a.setAttribute(d,d.toLowerCase()));return d}};
    if(!Ha)Ja={name:!0,id:!0},F=c.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(Ja[b]?c.nodeValue!=="":c.specified)?c.nodeValue:l},set:function(a,b,c){var e=a.getAttributeNode(c);e||(e=k.createAttribute(c),a.setAttributeNode(e));return e.nodeValue=b+""}},c.attrHooks.tabindex.set=F.set,c.each(["width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),c.attrHooks.contenteditable={get:F.get,set:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b,c){b===""&&(b="false");F.set(a,b,c)}};c.support.hrefNormalized||c.each(["href","src","width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return a===null?l:a}})});if(!c.support.style)c.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||l},set:function(a,b){return a.style.cssText=""+b}};if(!c.support.optSelected)c.propHooks.selected=c.extend(c.propHooks.selected,{get:function(){return null}});if(!c.support.enctype)c.propFix.enctype=
        "encoding";c.support.checkOn||c.each(["radio","checkbox"],function(){c.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}});c.each(["radio","checkbox"],function(){c.valHooks[this]=c.extend(c.valHooks[this],{set:function(a,b){if(c.isArray(b))return a.checked=c.inArray(c(a).val(),b)>=0}})});var ga=/^(?:textarea|input|select)$/i,Ka=/^([^\.]*)?(?:\.(.+))?$/,ub=/\bhover(\.\S+)?\b/,vb=/^key/,wb=/^(?:mouse|contextmenu)|click/,La=/^(?:focusinfocus|focusoutblur)$/,xb=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        yb=function(a){if(a=xb.exec(a))a[1]=(a[1]||"").toLowerCase(),a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)");return a},Ma=function(a){return c.event.special.hover?a:a.replace(ub,"mouseenter$1 mouseleave$1")};c.event={add:function(a,b,d,e,f){var g,h,i,j,m,k,o,y,n;if(!(a.nodeType===3||a.nodeType===8||!b||!d||!(g=c._data(a)))){if(d.handler)o=d,d=o.handler;if(!d.guid)d.guid=c.guid++;i=g.events;if(!i)g.events=i={};h=g.handle;if(!h)g.handle=h=function(a){return typeof c!=="undefined"&&(!a||c.event.triggered!==
        a.type)?c.event.dispatch.apply(h.elem,arguments):l},h.elem=a;b=c.trim(Ma(b)).split(" ");for(g=0;g<b.length;g++){j=Ka.exec(b[g])||[];m=j[1];k=(j[2]||"").split(".").sort();n=c.event.special[m]||{};m=(f?n.delegateType:n.bindType)||m;n=c.event.special[m]||{};j=c.extend({type:m,origType:j[1],data:e,handler:d,guid:d.guid,selector:f,quick:yb(f),namespace:k.join(".")},o);y=i[m];if(!y&&(y=i[m]=[],y.delegateCount=0,!n.setup||n.setup.call(a,e,k,h)===!1))a.addEventListener?a.addEventListener(m,h,!1):a.attachEvent&&
        a.attachEvent("on"+m,h);if(n.add&&(n.add.call(a,j),!j.handler.guid))j.handler.guid=d.guid;f?y.splice(y.delegateCount++,0,j):y.push(j);c.event.global[m]=!0}a=null}},global:{},remove:function(a,b,d,e,f){var g=c.hasData(a)&&c._data(a),h,i,j,m,l,o,k,n,p,t;if(g&&(k=g.events)){b=c.trim(Ma(b||"")).split(" ");for(h=0;h<b.length;h++)if(i=Ka.exec(b[h])||[],j=m=i[1],i=i[2],j){n=c.event.special[j]||{};j=(e?n.delegateType:n.bindType)||j;p=k[j]||[];l=p.length;i=i?RegExp("(^|\\.)"+i.split(".").sort().join("\\.(?:.*\\.)?")+
        "(\\.|$)"):null;for(o=0;o<p.length;o++)if(t=p[o],(f||m===t.origType)&&(!d||d.guid===t.guid)&&(!i||i.test(t.namespace))&&(!e||e===t.selector||e==="**"&&t.selector))p.splice(o--,1),t.selector&&p.delegateCount--,n.remove&&n.remove.call(a,t);p.length===0&&l!==p.length&&((!n.teardown||n.teardown.call(a,i)===!1)&&c.removeEvent(a,j,g.handle),delete k[j])}else for(j in k)c.event.remove(a,j+b[h],d,e,!0);if(c.isEmptyObject(k)){if(b=g.handle)b.elem=null;c.removeData(a,["events","handle"],!0)}}},customEvent:{getData:!0,
        setData:!0,changeData:!0},trigger:function(a,b,d,e){if(!d||!(d.nodeType===3||d.nodeType===8)){var f=a.type||a,g=[],h,i,j,m,k;if(!La.test(f+c.event.triggered)&&(f.indexOf("!")>=0&&(f=f.slice(0,-1),h=!0),f.indexOf(".")>=0&&(g=f.split("."),f=g.shift(),g.sort()),d&&!c.event.customEvent[f]||c.event.global[f]))if(a=typeof a==="object"?a[c.expando]?a:new c.Event(f,a):new c.Event(f),a.type=f,a.isTrigger=!0,a.exclusive=h,a.namespace=g.join("."),a.namespace_re=a.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+
        "(\\.|$)"):null,h=f.indexOf(":")<0?"on"+f:"",d){a.result=l;if(!a.target)a.target=d;b=b!=null?c.makeArray(b):[];b.unshift(a);j=c.event.special[f]||{};if(!(j.trigger&&j.trigger.apply(d,b)===!1)){k=[[d,j.bindType||f]];if(!e&&!j.noBubble&&!c.isWindow(d)){m=j.delegateType||f;g=La.test(m+f)?d:d.parentNode;for(i=null;g;g=g.parentNode)k.push([g,m]),i=g;i&&i===d.ownerDocument&&k.push([i.defaultView||i.parentWindow||p,m])}for(i=0;i<k.length&&!a.isPropagationStopped();i++)g=k[i][0],a.type=k[i][1],(m=(c._data(g,
        "events")||{})[a.type]&&c._data(g,"handle"))&&m.apply(g,b),(m=h&&g[h])&&c.acceptData(g)&&m.apply(g,b)===!1&&a.preventDefault();a.type=f;if(!e&&!a.isDefaultPrevented()&&(!j._default||j._default.apply(d.ownerDocument,b)===!1)&&!(f==="click"&&c.nodeName(d,"a"))&&c.acceptData(d))if(h&&d[f]&&(f!=="focus"&&f!=="blur"||a.target.offsetWidth!==0)&&!c.isWindow(d))(i=d[h])&&(d[h]=null),c.event.triggered=f,d[f](),c.event.triggered=l,i&&(d[h]=i);return a.result}}else for(i in d=c.cache,d)d[i].events&&d[i].events[f]&&
    c.event.trigger(a,b,d[i].handle.elem,!0)}},dispatch:function(a){var a=c.event.fix(a||p.event),b=(c._data(this,"events")||{})[a.type]||[],d=b.delegateCount,e=[].slice.call(arguments,0),f=!a.exclusive&&!a.namespace,g=[],h,i,j,m,k,o,y;e[0]=a;a.delegateTarget=this;if(d&&!a.target.disabled&&!(a.button&&a.type==="click")){j=c(this);j.context=this.ownerDocument||this;for(i=a.target;i!=this;i=i.parentNode||this){k={};o=[];j[0]=i;for(h=0;h<d;h++){m=b[h];y=m.selector;if(k[y]===l){var n=k,s=y,t;if(m.quick){t=
        m.quick;var v=i.attributes||{};t=(!t[1]||i.nodeName.toLowerCase()===t[1])&&(!t[2]||(v.id||{}).value===t[2])&&(!t[3]||t[3].test((v["class"]||{}).value))}else t=j.is(y);n[s]=t}k[y]&&o.push(m)}o.length&&g.push({elem:i,matches:o})}}b.length>d&&g.push({elem:this,matches:b.slice(d)});for(h=0;h<g.length&&!a.isPropagationStopped();h++){d=g[h];a.currentTarget=d.elem;for(b=0;b<d.matches.length&&!a.isImmediatePropagationStopped();b++)if(m=d.matches[b],f||!a.namespace&&!m.namespace||a.namespace_re&&a.namespace_re.test(m.namespace))if(a.data=
        m.data,a.handleObj=m,m=((c.event.special[m.origType]||{}).handle||m.handler).apply(d.elem,e),m!==l)a.result=m,m===!1&&(a.preventDefault(),a.stopPropagation())}return a.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){if(a.which==null)a.which=b.charCode!=null?b.charCode:b.keyCode;
        return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f=b.button,g=b.fromElement;if(a.pageX==null&&b.clientX!=null)c=a.target.ownerDocument||k,e=c.documentElement,c=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0);if(!a.relatedTarget&&g)a.relatedTarget=
        g===a.target?b.toElement:g;if(!a.which&&f!==l)a.which=f&1?1:f&2?3:f&4?2:0;return a}},fix:function(a){if(a[c.expando])return a;var b,d,e=a,f=c.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props,a=c.Event(e);for(b=g.length;b;)d=g[--b],a[d]=e[d];if(!a.target)a.target=e.srcElement||k;if(a.target.nodeType===3)a.target=a.target.parentNode;if(a.metaKey===l)a.metaKey=a.ctrlKey;return f.filter?f.filter(a,e):a},special:{ready:{setup:c.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},
        blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}},simulate:function(a,b,d,e){a=c.extend(new c.Event,d,{type:a,isSimulated:!0,originalEvent:{}});e?c.event.trigger(a,null,b):c.event.dispatch.call(b,a);a.isDefaultPrevented()&&d.preventDefault()}};c.event.handle=c.event.dispatch;c.removeEvent=k.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,
        c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};c.Event=function(a,b){if(!(this instanceof c.Event))return new c.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?L:E):this.type=a;b&&c.extend(this,b);this.timeStamp=a&&a.timeStamp||c.now();this[c.expando]=!0};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=L;var a=this.originalEvent;if(a)a.preventDefault?
        a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=L;var a=this.originalEvent;if(a)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=L;this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={delegateType:b,bindType:b,handle:function(a){var e=a.relatedTarget,
        f=a.handleObj,g;if(!e||e!==this&&!c.contains(this,e))a.type=f.origType,g=f.handler.apply(this,arguments),a.type=b;return g}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(c.nodeName(this,"form"))return!1;c.event.add(this,"click._submit keypress._submit",function(a){a=a.target;if((a=c.nodeName(a,"input")||c.nodeName(a,"button")?a.form:l)&&!a._submit_attached)c.event.add(a,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&c.event.simulate("submit",this.parentNode,
        a,!0)}),a._submit_attached=!0})},teardown:function(){if(c.nodeName(this,"form"))return!1;c.event.remove(this,"._submit")}};if(!c.support.changeBubbles)c.event.special.change={setup:function(){if(ga.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")c.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked")this._just_changed=!0}),c.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger)this._just_changed=!1,c.event.simulate("change",
        this,a,!0)});return!1}c.event.add(this,"beforeactivate._change",function(a){a=a.target;if(ga.test(a.nodeName)&&!a._change_attached)c.event.add(a,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&c.event.simulate("change",this.parentNode,a,!0)}),a._change_attached=!0})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){c.event.remove(this,"._change");
        return ga.test(this.nodeName)}};c.support.focusinBubbles||c.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){c.event.simulate(b,a.target,c.event.fix(a),!0)};c.event.special[b]={setup:function(){d++===0&&k.addEventListener(a,e,!0)},teardown:function(){--d===0&&k.removeEventListener(a,e,!0)}}});c.fn.extend({on:function(a,b,d,e,f){var g,h;if(typeof a==="object"){typeof b!=="string"&&(d=b,b=l);for(h in a)this.on(h,b,d,a[h],f);return this}d==null&&e==null?(e=b,d=b=l):e==null&&
        (typeof b==="string"?(e=d,d=l):(e=d,d=b,b=l));if(e===!1)e=E;else if(!e)return this;if(f===1)g=e,e=function(a){c().off(a);return g.apply(this,arguments)},e.guid=g.guid||(g.guid=c.guid++);return this.each(function(){c.event.add(this,a,e,d,b)})},one:function(a,b,c,e){return this.on.call(this,a,b,c,e,1)},off:function(a,b,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;c(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a==="object"){for(e in a)this.off(e,
        b,a[e]);return this}if(b===!1||typeof b==="function")d=b,b=l;d===!1&&(d=E);return this.each(function(){c.event.remove(this,a,d,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,d){c(this.context).on(a,this.selector,b,d);return this},die:function(a,b){c(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,e){return this.on(b,a,c,e)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):
        this.off(b,a,c)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return c.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,d=a.guid||c.guid++,e=0,f=function(d){var f=(c._data(this,"lastToggle"+a.guid)||0)%e;c._data(this,"lastToggle"+a.guid,f+1);d.preventDefault();return b[f].apply(this,arguments)||!1};for(f.guid=d;e<b.length;)b[e++].guid=d;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||
        a)}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){c.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)};c.attrFn&&(c.attrFn[b]=!0);if(vb.test(b))c.event.fixHooks[b]=c.event.keyHooks;if(wb.test(b))c.event.fixHooks[b]=c.event.mouseHooks});(function(){function a(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,c,d,f,g){for(var f=0,h=d.length;f<h;f++){var i=d[f];if(i){for(var j=!1,i=i[a];i;){if(i[e]===c){j=d[i.sizset];break}if(i.nodeType===1&&!g)i[e]=c,i.sizset=f;if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[f]=j}}}function b(a,b,c,d,f,g){for(var f=0,h=d.length;f<h;f++){var i=d[f];if(i){for(var j=!1,i=i[a];i;){if(i[e]===c){j=d[i.sizset];break}if(i.nodeType===1){if(!g)i[e]=c,i.sizset=f;if(typeof b!=="string"){if(i===b){j=!0;break}}else if(o.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[f]=j}}}var d=
        /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,m=/\r\n/g,u=/\W/;[0,0].sort(function(){i=!1;return 0});var o=function(a,b,c,e){var c=c||[],f=b=b||k;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;var h,i,j,m,l,u=!0,p=o.isXML(b),q=[],y=a;do if(d.exec(""),h=d.exec(y))if(y=h[3],q.push(h[1]),
        h[2]){m=h[3];break}while(h);if(q.length>1&&s.exec(a))if(q.length===2&&n.relative[q[0]])i=x(q[0]+q[1],b,e);else for(i=n.relative[q[0]]?[b]:o(q.shift(),b);q.length;)a=q.shift(),n.relative[a]&&(a+=q.shift()),i=x(a,i,e);else if(!e&&q.length>1&&b.nodeType===9&&!p&&n.match.ID.test(q[0])&&!n.match.ID.test(q[q.length-1])&&(h=o.find(q.shift(),b,p),b=h.expr?o.filter(h.expr,h.set)[0]:h.set[0]),b){h=e?{expr:q.pop(),set:w(e)}:o.find(q.pop(),q.length===1&&(q[0]==="~"||q[0]==="+")&&b.parentNode?b.parentNode:b,p);
        i=h.expr?o.filter(h.expr,h.set):h.set;for(q.length>0?j=w(i):u=!1;q.length;)h=l=q.pop(),n.relative[l]?h=q.pop():l="",h==null&&(h=b),n.relative[l](j,h,p)}else j=[];j||(j=i);j||o.error(l||a);if(g.call(j)==="[object Array]")if(u)if(b&&b.nodeType===1)for(a=0;j[a]!=null;a++)j[a]&&(j[a]===!0||j[a].nodeType===1&&o.contains(b,j[a]))&&c.push(i[a]);else for(a=0;j[a]!=null;a++)j[a]&&j[a].nodeType===1&&c.push(i[a]);else c.push.apply(c,j);else w(j,c);m&&(o(m,f,c,e),o.uniqueSort(c));return c};o.uniqueSort=function(a){if(B&&
        (h=i,a.sort(B),h))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a};o.matches=function(a,b){return o(a,null,null,b)};o.matchesSelector=function(a,b){return o(b,null,null,[a]).length>0};o.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];e=0;for(f=n.order.length;e<f;e++)if(h=n.order[e],g=n.leftMatch[h].exec(a))if(i=g[1],g.splice(1,1),i.substr(i.length-1)!=="\\"&&(g[1]=(g[1]||"").replace(j,""),d=n.find[h](g,b,c),d!=null)){a=a.replace(n.match[h],"");break}d||(d=typeof b.getElementsByTagName!==
        "undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}};o.filter=function(a,b,c,d){for(var e,f,g,h,i,j,m,k,q=a,u=[],p=b,y=b&&b[0]&&o.isXML(b[0]);a&&b.length;){for(g in n.filter)if((e=n.leftMatch[g].exec(a))!=null&&e[2])if(j=n.filter[g],i=e[1],f=!1,e.splice(1,1),i.substr(i.length-1)!=="\\"){p===u&&(u=[]);if(n.preFilter[g])if(e=n.preFilter[g](e,p,c,u,d,y)){if(e===!0)continue}else f=h=!0;if(e)for(m=0;(i=p[m])!=null;m++)i&&(h=j(i,e,m,p),k=d^h,c&&h!=null?k?f=!0:p[m]=!1:k&&(u.push(i),f=!0));if(h!==
        l){c||(p=u);a=a.replace(n.match[g],"");if(!f)return[];break}}if(a===q)if(f==null)o.error(a);else break;q=a}return p};o.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};var p=o.getText=function(a){var b,c;b=a.nodeType;var d="";if(b)if(b===1||b===9)if(typeof a.textContent==="string")return a.textContent;else if(typeof a.innerText==="string")return a.innerText.replace(m,"");else for(a=a.firstChild;a;a=a.nextSibling)d+=p(a);else{if(b===3||b===4)return a.nodeValue}else for(b=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 0;c=a[b];b++)c.nodeType!==8&&(d+=p(c));return d},n=o.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!u.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,e=a.length,f;d<e;d++)if(f=a[d]){for(;(f=f.previousSibling)&&f.nodeType!==1;);a[d]=c||f&&f.nodeName.toLowerCase()===b?f||!1:f===b}c&&o.filter(b,
        a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!u.test(b))for(b=b.toLowerCase();e<f;e++){if(c=a[e])c=c.parentNode,a[e]=c.nodeName.toLowerCase()===b?c:!1}else{for(;e<f;e++)(c=a[e])&&(a[e]=d?c.parentNode:c.parentNode===b);d&&o.filter(b,a,!0)}},"":function(c,d,e){var g,h=f++,i=b;typeof d==="string"&&!u.test(d)&&(g=d=d.toLowerCase(),i=a);i("parentNode",d,h,c,g,e)},"~":function(c,d,e){var g,h=f++,i=b;typeof d==="string"&&!u.test(d)&&(g=d=d.toLowerCase(),i=a);i("previousSibling",
        d,h,c,g,e)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){for(var c=[],d=b.getElementsByName(a[1]),e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,
        "")+" ";if(f)return a;for(var f=0,g;(g=b[f])!=null;f++)g&&(e^(g.className&&(" "+g.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(g):c&&(b[f]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||o.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;
        a[3]=b[3]-0}else a[2]&&o.error(a[0]);a[0]=f++;return a},ATTR:function(a,b,c,d,e,f){b=a[1]=a[1].replace(j,"");!f&&n.attrMap[b]&&(a[1]=n.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(j,"");a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,c,e,f){if(a[1]==="not")if((d.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=o(a[3],null,null,b);else return a=o.filter(a[3],b,c,1^f),c||e.push.apply(e,a),!1;else if(n.match.POS.test(a[0])||n.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);
        return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!o(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&
        (b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()===
        "input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=n.filters[e];if(f)return f(a,c,b,d);else if(e==="contains")return(a.textContent||a.innerText||p([a])||"").indexOf(b[3])>=0;else if(e==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else o.error(e)},CHILD:function(a,b){var c,d,f,g,h,i;c=b[1];i=a;switch(c){case "only":case "first":for(;i=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    i.previousSibling;)if(i.nodeType===1)return!1;if(c==="first")return!0;i=a;case "last":for(;i=i.nextSibling;)if(i.nodeType===1)return!1;return!0;case "nth":c=b[2];d=b[3];if(c===1&&d===0)return!0;f=b[0];if((g=a.parentNode)&&(g[e]!==f||!a.nodeIndex)){h=0;for(i=g.firstChild;i;i=i.nextSibling)if(i.nodeType===1)i.nodeIndex=++h;g[e]=f}i=a.nodeIndex-d;return c===0?i===0:i%c===0&&i/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&
        a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=o.attr?o.attr(a,c):n.attrHandle[c]?n.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=c+"",e=b[2],f=b[4];return c==null?e==="!=":!e&&o.attr?c!=null:e==="="?d===f:e==="*="?d.indexOf(f)>=0:e==="~="?(" "+d+" ").indexOf(f)>=0:!f?d&&c!==!1:e==="!="?d!==f:e==="^="?d.indexOf(f)===0:e==="$="?d.substr(d.length-f.length)===f:e==="|="?d===f||d.substr(0,f.length+
        1)===f+"-":!1},POS:function(a,b,c,d){var e=n.setFilters[b[2]];if(e)return e(a,c,b,d)}}},s=n.match.POS,t=function(a,b){return"\\"+(b-0+1)},v;for(v in n.match)n.match[v]=RegExp(n.match[v].source+/(?![^\[]*\])(?![^\(]*\))/.source),n.leftMatch[v]=RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[v].source.replace(/\\(\d+)/g,t));var w=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(k.documentElement.childNodes,0)}catch(A){w=function(a,b){var c=
        0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var B,q;k.documentElement.compareDocumentPosition?B=function(a,b){if(a===b)return h=!0,0;if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(B=function(a,b){if(a===b)return h=!0,0;else if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-
        b.sourceIndex;var c,d,e=[],f=[];c=a.parentNode;d=b.parentNode;var g=c;if(c===d)return q(a,b);else if(c){if(!d)return 1}else return-1;for(;g;)e.unshift(g),g=g.parentNode;for(g=d;g;)f.unshift(g),g=g.parentNode;c=e.length;d=f.length;for(g=0;g<c&&g<d;g++)if(e[g]!==f[g])return q(e[g],f[g]);return g===c?q(a,f[g],-1):q(e[g],b,1)},q=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});(function(){var a=k.createElement("div"),b="script"+(new Date).getTime(),
        c=k.documentElement;a.innerHTML="<a name='"+b+"'/>";c.insertBefore(a,c.firstChild);if(k.getElementById(b))n.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:l:[]},n.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=
        k.createElement("div");a.appendChild(k.createComment(""));if(a.getElementsByTagName("*").length>0)n.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var d=[],e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();k.querySelectorAll&&function(){var a=o,b=k.createElement("div");
        b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){o=function(b,c,d,e){c=c||k;if(!e&&!o.isXML(c)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(f&&(c.nodeType===1||c.nodeType===9))if(f[1])return w(c.getElementsByTagName(b),d);else if(f[2]&&n.find.CLASS&&c.getElementsByClassName)return w(c.getElementsByClassName(f[2]),d);if(c.nodeType===9){if(b==="body"&&c.body)return w([c.body],d);else if(f&&f[3]){var g=c.getElementById(f[3]);if(g&&g.parentNode){if(g.id===
            f[3])return w([g],d)}else return w([],d)}try{return w(c.querySelectorAll(b),d)}catch(h){}}else if(c.nodeType===1&&c.nodeName.toLowerCase()!=="object"){var f=c,i=(g=c.getAttribute("id"))||"__sizzle__",j=c.parentNode,m=/^\s*[+~]/.test(b);g?i=i.replace(/'/g,"\\$&"):c.setAttribute("id",i);if(m&&j)c=c.parentNode;try{if(!m||j)return w(c.querySelectorAll("[id='"+i+"'] "+b),d)}catch(l){}finally{g||f.removeAttribute("id")}}}return a(b,c,d,e)};for(var c in a)o[c]=a[c];b=null}}();(function(){var a=k.documentElement,
        b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(k.createElement("div"),"div"),d=!1;try{b.call(k.documentElement,"[test!='']:sizzle")}catch(e){d=!0}o.matchesSelector=function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!o.isXML(a))try{if(d||!n.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&a.document.nodeType!==11)return f}}catch(g){}return o(e,null,null,[a]).length>0}}})();(function(){var a=k.createElement("div");
        a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))n.order.splice(1,0,"CLASS"),n.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null})();o.contains=k.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:k.documentElement.compareDocumentPosition?
        function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return!1};o.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var x=function(a,b,c){for(var d,e=[],f="",b=b.nodeType?[b]:b;d=n.match.PSEUDO.exec(a);)f+=d[0],a=a.replace(n.match.PSEUDO,"");a=n.relative[a]?a+"*":a;d=0;for(var g=b.length;d<g;d++)o(a,b[d],e,c);return o.filter(f,e)};o.attr=c.attr;o.selectors.attrMap={};c.find=o;c.expr=o.selectors;c.expr[":"]=c.expr.filters;c.unique=o.uniqueSort;
        c.text=o.getText;c.isXMLDoc=o.isXML;c.contains=o.contains})();var zb=/Until$/,Ab=/^(?:parents|prevUntil|prevAll)/,Bb=/,/,fb=/^.[^:#\[\.,]*$/,Cb=Array.prototype.slice,Na=c.expr.match.POS,Db={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({find:function(a){var b=this,d,e;if(typeof a!=="string")return c(a).filter(function(){d=0;for(e=b.length;d<e;d++)if(c.contains(b[d],this))return!0});var f=this.pushStack("","find",a),g,h,i;d=0;for(e=this.length;d<e;d++)if(g=f.length,c.find(a,this[d],f),d>0)for(h=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    g;h<f.length;h++)for(i=0;i<g;i++)if(f[i]===f[h]){f.splice(h--,1);break}return f},has:function(a){var b=c(a);return this.filter(function(){for(var a=0,e=b.length;a<e;a++)if(c.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(na(this,a,!1),"not",a)},filter:function(a){return this.pushStack(na(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a==="string"?Na.test(a)?c(a,this.context).index(this[0])>=0:c.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){var d=[],e,f,g=this[0];if(c.isArray(a)){for(f=1;g&&g.ownerDocument&&g!==b;){for(e=0;e<a.length;e++)c(g).is(a[e])&&d.push({selector:a[e],elem:g,level:f});g=g.parentNode;f++}return d}var h=Na.test(a)||typeof a!=="string"?c(a,b||this.context):0;e=0;for(f=this.length;e<f;e++)for(g=this[e];g;)if(h?h.index(g)>-1:c.find.matchesSelector(g,a)){d.push(g);break}else if(g=g.parentNode,!g||!g.ownerDocument||g===b||g.nodeType===11)break;d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a)return this[0]&&
        this[0].parentNode?this.prevAll().length:-1;if(typeof a==="string")return c.inArray(this[0],c(a));return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b):c.makeArray(a&&a.nodeType?[a]:a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&
        a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,
        a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,e){var f=c.map(this,b,d);zb.test(a)||(e=d);e&&typeof e==="string"&&(f=c.filter(e,f));f=this.length>1&&!Db[a]?c.unique(f):f;if((this.length>1||Bb.test(e))&&Ab.test(a))f=f.reverse();return this.pushStack(f,a,Cb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){d&&(a=":not("+a+
        ")");return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){for(var e=[],a=a[b];a&&a.nodeType!==9&&(d===l||a.nodeType!==1||!c(a).is(d));)a.nodeType===1&&e.push(a),a=a[b];return e},nth:function(a,b,c){for(var b=b||1,e=0;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var pa="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Eb=/ jQuery\d+="(?:\d+|null)"/g,ha=/^\s+/,Oa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Pa=/<([\w:]+)/,Fb=/<tbody/i,Gb=/<|&#?\w+;/,Hb=/<(?:script|style)/i,Ib=/<(?:script|object|embed|option|style)/i,Qa=RegExp("<(?:"+pa+")","i"),Ra=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/\/(java|ecma)script/i,hb=/^\s*<!(?:\[CDATA\[|\-\-)/,s={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>",
            "</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Sa=oa(k);s.optgroup=s.option;s.tbody=s.tfoot=s.colgroup=s.caption=s.thead;s.th=s.td;if(!c.support.htmlSerialize)s._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==l)return this.empty().append((this[0]&&
        this[0].ownerDocument||k).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapAll(a.call(this,b))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});
        return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){var b=c.isFunction(a);return this.each(function(d){c(this).wrapAll(b?a.call(this,d):a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===
        1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});else if(arguments.length){var a=c.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,
        "after",arguments);a.push.apply(a,c.clean(arguments));return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length)!b&&e.nodeType===1&&(c.cleanData(e.getElementsByTagName("*")),c.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=a==null?!1:a;b=b==null?
        a:b;return this.map(function(){return c.clone(this,a,b)})},html:function(a){if(a===l)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Eb,""):null;else if(typeof a==="string"&&!Hb.test(a)&&(c.support.leadingWhitespace||!ha.test(a))&&!s[(Pa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Oa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1)c.cleanData(this[b].getElementsByTagName("*")),this[b].innerHTML=a}catch(e){this.empty().append(a)}}else c.isFunction(a)?
        this.each(function(b){var d=c(this);d.html(a.call(this,b,d.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),e=d.html();d.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=c(a).detach());return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.length?this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",
        a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,b,d){var e,f,g,h=a[0],i=[];if(!c.support.checkClone&&arguments.length===3&&typeof h==="string"&&Ra.test(h))return this.each(function(){c(this).domManip(a,b,d,!0)});if(c.isFunction(h))return this.each(function(e){var f=c(this);a[0]=h.call(this,e,b?f.html():l);f.domManip(a,b,d)});if(this[0]){e=h&&h.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,i);g=
        e.fragment;if(f=g.childNodes.length===1?g=g.firstChild:g.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var j=this.length,m=j-1;f<j;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||j>1&&f<m?c.clone(g,!0,!0):g)}i.length&&c.each(i,gb)}return this}});c.buildFragment=function(a,b,d){var e,f,g,h,i=a[0];b&&b[0]&&(h=b[0].ownerDocument||b[0]);h.createDocumentFragment||(h=k);if(a.length===
        1&&typeof i==="string"&&i.length<512&&h===k&&i.charAt(0)==="<"&&!Ib.test(i)&&(c.support.checkClone||!Ra.test(i))&&(c.support.html5Clone||!Qa.test(i)))f=!0,(g=c.fragments[i])&&g!==1&&(e=g);e||(e=h.createDocumentFragment(),c.clean(a,h,e,d));f&&(c.fragments[i]=g?e:1);return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[],d=c(d),f=this.length===1&&this[0].parentNode;
        if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1)return d[b](this[0]),this;else{for(var f=0,g=d.length;f<g;f++){var h=(f>0?this.clone(!0):this).get();c(d[f])[b](h);e=e.concat(h)}return this.pushStack(e,a,d.selector)}}});c.extend({clone:function(a,b,d){var e,f,g;c.support.html5Clone||!Qa.test("<"+a.nodeName)?e=a.cloneNode(!0):(e=k.createElement("div"),Sa.appendChild(e),e.innerHTML=a.outerHTML,e=e.firstChild);var h=e;if((!c.support.noCloneEvent||!c.support.noCloneChecked)&&(a.nodeType===
        1||a.nodeType===11)&&!c.isXMLDoc(a)){ra(a,h);e=R(a);f=R(h);for(g=0;e[g];++g)f[g]&&ra(e[g],f[g])}if(b&&(qa(a,h),d)){e=R(a);f=R(h);for(g=0;e[g];++g)qa(e[g],f[g])}return h},clean:function(a,b,d,e){b=b||k;typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||k);for(var f=[],g,h=0,i;(i=a[h])!=null;h++)if(typeof i==="number"&&(i+=""),i){if(typeof i==="string")if(Gb.test(i)){i=i.replace(Oa,"<$1></$2>");g=(Pa.exec(i)||["",""])[1].toLowerCase();var j=s[g]||s._default,m=j[0],l=
        b.createElement("div");b===k?Sa.appendChild(l):oa(b).appendChild(l);for(l.innerHTML=j[1]+i+j[2];m--;)l=l.lastChild;if(!c.support.tbody){m=Fb.test(i);j=g==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=j.length-1;g>=0;--g)c.nodeName(j[g],"tbody")&&!j[g].childNodes.length&&j[g].parentNode.removeChild(j[g])}!c.support.leadingWhitespace&&ha.test(i)&&l.insertBefore(b.createTextNode(ha.exec(i)[0]),l.firstChild);i=l.childNodes}else i=b.createTextNode(i);var o;
        if(!c.support.appendChecked)if(i[0]&&typeof(o=i.length)==="number")for(g=0;g<o;g++)ta(i[g]);else ta(i);i.nodeType?f.push(i):f=c.merge(f,i)}if(d){a=function(a){return!a.type||Jb.test(a.type)};for(h=0;f[h];h++)e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript")?e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]):(f[h].nodeType===1&&(b=c.grep(f[h].getElementsByTagName("script"),a),f.splice.apply(f,[h+1,0].concat(b))),d.appendChild(f[h]))}return f},cleanData:function(a){for(var b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      d,e=c.cache,f=c.event.special,g=c.support.deleteExpando,h=0,i;(i=a[h])!=null;h++)if(!i.nodeName||!c.noData[i.nodeName.toLowerCase()])if(d=i[c.expando]){if((b=e[d])&&b.events){for(var j in b.events)f[j]?c.event.remove(i,j):c.removeEvent(i,j,b.handle);if(b.handle)b.handle.elem=null}g?delete i[c.expando]:i.removeAttribute&&i.removeAttribute(c.expando);delete e[d]}}});var ia=/alpha\([^)]*\)/i,Kb=/opacity=([^)]*)/,Lb=/([A-Z]|^ms)/g,Ta=/^-?\d+(?:px)?$/i,Mb=/^-?\d/,Nb=/^([\-+])=([\-+.\de]+)/,Ob={position:"absolute",
        visibility:"hidden",display:"block"},ib=["Left","Right"],jb=["Top","Bottom"],G,Ua,Va;c.fn.css=function(a,b){if(arguments.length===2&&b===l)return this;return c.access(this,a,b,!0,function(a,b,f){return f!==l?c.style(a,b,f):c.css(a,b)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=G(a,"opacity","opacity");return c===""?"1":c}else return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":c.support.cssFloat?
        "cssFloat":"styleFloat"},style:function(a,b,d,e){if(a&&!(a.nodeType===3||a.nodeType===8||!a.style)){var f,g=c.camelCase(b),h=a.style,i=c.cssHooks[g],b=c.cssProps[g]||g;if(d!==l){e=typeof d;if(e==="string"&&(f=Nb.exec(d)))d=+(f[1]+1)*+f[2]+parseFloat(c.css(a,b)),e="number";if(!(d==null||e==="number"&&isNaN(d)))if(e==="number"&&!c.cssNumber[g]&&(d+="px"),!i||!("set"in i)||(d=i.set(a,d))!==l)try{h[b]=d}catch(j){}}else{if(i&&"get"in i&&(f=i.get(a,!1,e))!==l)return f;return h[b]}}},css:function(a,b,d){var e,
        f,b=c.camelCase(b);f=c.cssHooks[b];b=c.cssProps[b]||b;b==="cssFloat"&&(b="float");if(f&&"get"in f&&(e=f.get(a,!0,d))!==l)return e;else if(G)return G(a,b)},swap:function(a,b,c){var e={},f;for(f in b)e[f]=a.style[f],a.style[f]=b[f];c.call(a);for(f in b)a.style[f]=e[f]}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(a,e,f){var g;if(e){if(a.offsetWidth!==0)return ua(a,b,f);else c.swap(a,Ob,function(){g=ua(a,b,f)});return g}},set:function(a,b){if(Ta.test(b)){if(b=
        parseFloat(b),b>=0)return b+"px"}else return b}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return Kb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style,e=a.currentStyle,f=c.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=e&&e.filter||d.filter||"";d.zoom=1;if(b>=1&&c.trim(g.replace(ia,""))===""&&(d.removeAttribute("filter"),e&&!e.filter))return;d.filter=ia.test(g)?g.replace(ia,f):g+" "+f}};c(function(){if(!c.support.reliableMarginRight)c.cssHooks.marginRight=
    {get:function(a,b){var d;c.swap(a,{display:"inline-block"},function(){d=b?G(a,"margin-right","marginRight"):a.style.marginRight});return d}}});k.defaultView&&k.defaultView.getComputedStyle&&(Ua=function(a,b){var d,e,f,b=b.replace(Lb,"-$1").toLowerCase();if((e=a.ownerDocument.defaultView)&&(f=e.getComputedStyle(a,null)))d=f.getPropertyValue(b),d===""&&!c.contains(a.ownerDocument.documentElement,a)&&(d=c.style(a,b));return d});k.documentElement.currentStyle&&(Va=function(a,b){var c,e,f=a.currentStyle&&
        a.currentStyle[b],g=a.style;if(f===null&&g&&(c=g[b]))f=c;if(!Ta.test(f)&&Mb.test(f)){c=g.left;if(e=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;g.left=b==="fontSize"?"1em":f||0;f=g.pixelLeft+"px";g.left=c;if(e)a.runtimeStyle.left=e}return f===""?"auto":f});G=Ua||Va;if(c.expr&&c.expr.filters)c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style&&a.style.display||c.css(a,"display"))==="none"},
        c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)};var Pb=/%20/g,kb=/\[\]$/,Wa=/\r?\n/g,Qb=/#.*$/,Rb=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Sb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Tb=/^(?:GET|HEAD)$/,Ub=/^\/\//,Xa=/\?/,Vb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Wb=/^(?:select|textarea)/i,wa=/\s+/,Xb=/([?&])_=[^&]*/,Ya=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Za=c.fn.load,$={},$a={},I,J,ab=
        ["*/"]+["*"];try{I=nb.href}catch(cc){I=k.createElement("a"),I.href="",I=I.href}J=Ya.exec(I.toLowerCase())||[];c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Za)return Za.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0)var f=a.slice(e,a.length),a=a.slice(0,e);e="GET";b&&(c.isFunction(b)?(d=b,b=l):typeof b==="object"&&(b=c.param(b,c.ajaxSettings.traditional),e="POST"));var g=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText;
        a.isResolved()&&(a.done(function(a){e=a}),g.html(f?c("<div>").append(e.replace(Vb,"")).find(f):e));d&&g.each(d,[e,b,a])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Wb.test(this.nodeName)||Sb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(a){return{name:b.name,
        value:a.replace(Wa,"\r\n")}}):{name:b.name,value:d.replace(Wa,"\r\n")}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(a){return this.on(b,a)}});c.each(["get","post"],function(a,b){c[b]=function(a,e,f,g){c.isFunction(e)&&(g=g||f,f=e,e=l);return c.ajax({type:b,url:a,data:e,success:f,dataType:g})}});c.extend({getScript:function(a,b){return c.get(a,l,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},ajaxSetup:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){b?xa(a,c.ajaxSettings):(b=a,a=c.ajaxSettings);xa(a,b);return a},ajaxSettings:{url:I,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(J[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":ab},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":p.String,
        "text html":!0,"text json":c.parseJSON,"text xml":c.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:va($),ajaxTransport:va($a),ajax:function(a,b){function d(a,b,d,k){if(w!==2){w=2;t&&clearTimeout(t);s=l;p=k||"";q.readyState=a>0?4:0;var o,n,u,k=b;if(d){var r=e,v=q,B=r.contents,x=r.dataTypes,F=r.responseFields,C,z,N,I;for(z in F)z in d&&(v[F[z]]=d[z]);for(;x[0]==="*";)x.shift(),C===l&&(C=r.mimeType||v.getResponseHeader("content-type"));if(C)for(z in B)if(B[z]&&B[z].test(C)){x.unshift(z);break}if(x[0]in
        d)N=x[0];else{for(z in d){if(!x[0]||r.converters[z+" "+x[0]]){N=z;break}I||(I=z)}N=N||I}N?(N!==x[0]&&x.unshift(N),d=d[N]):d=void 0}else d=l;if(a>=200&&a<300||a===304){if(e.ifModified){if(C=q.getResponseHeader("Last-Modified"))c.lastModified[m]=C;if(C=q.getResponseHeader("Etag"))c.etag[m]=C}if(a===304)k="notmodified",o=!0;else try{C=e;C.dataFilter&&(d=C.dataFilter(d,C.dataType));var J=C.dataTypes;z={};var E,G,M=J.length,H,O=J[0],D,L,P,Q,S;for(E=1;E<M;E++){if(E===1)for(G in C.converters)typeof G===
        "string"&&(z[G.toLowerCase()]=C.converters[G]);D=O;O=J[E];if(O==="*")O=D;else if(D!=="*"&&D!==O){L=D+" "+O;P=z[L]||z["* "+O];if(!P)for(Q in S=l,z)if(H=Q.split(" "),H[0]===D||H[0]==="*")if(S=z[H[1]+" "+O]){Q=z[Q];Q===!0?P=S:S===!0&&(P=Q);break}!P&&!S&&c.error("No conversion from "+L.replace(" "," to "));P!==!0&&(d=P?P(d):S(Q(d)))}}n=d;k="success";o=!0}catch(R){k="parsererror",u=R}}else if(u=k,!k||a)k="error",a<0&&(a=0);q.status=a;q.statusText=""+(b||k);o?h.resolveWith(f,[n,k,q]):h.rejectWith(f,[q,
        k,u]);q.statusCode(j);j=l;A&&g.trigger("ajax"+(o?"Success":"Error"),[q,e,o?n:u]);i.fireWith(f,[q,k]);A&&(g.trigger("ajaxComplete",[q,e]),--c.active||c.event.trigger("ajaxStop"))}}typeof a==="object"&&(b=a,a=l);var b=b||{},e=c.ajaxSetup({},b),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof c)?c(f):c.event,h=c.Deferred(),i=c.Callbacks("once memory"),j=e.statusCode||{},m,k={},o={},p,n,s,t,v,w=0,A,B,q={readyState:0,setRequestHeader:function(a,b){if(!w){var c=a.toLowerCase(),a=o[c]=o[c]||a;k[a]=b}return this},
        getAllResponseHeaders:function(){return w===2?p:null},getResponseHeader:function(a){var b;if(w===2){if(!n)for(n={};b=Rb.exec(p);)n[b[1].toLowerCase()]=b[2];b=n[a.toLowerCase()]}return b===l?null:b},overrideMimeType:function(a){if(!w)e.mimeType=a;return this},abort:function(a){a=a||"abort";s&&s.abort(a);d(0,a);return this}};h.promise(q);q.success=q.done;q.error=q.fail;q.complete=i.add;q.statusCode=function(a){if(a){var b;if(w<2)for(b in a)j[b]=[j[b],a[b]];else b=a[q.status],q.then(b,b)}return this};
        e.url=((a||e.url)+"").replace(Qb,"").replace(Ub,J[1]+"//");e.dataTypes=c.trim(e.dataType||"*").toLowerCase().split(wa);if(e.crossDomain==null)v=Ya.exec(e.url.toLowerCase()),e.crossDomain=!(!v||!(v[1]!=J[1]||v[2]!=J[2]||(v[3]||(v[1]==="http:"?80:443))!=(J[3]||(J[1]==="http:"?80:443))));if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);U($,e,b,q);if(w===2)return!1;A=e.global;e.type=e.type.toUpperCase();e.hasContent=!Tb.test(e.type);A&&c.active++===0&&c.event.trigger("ajaxStart");
        if(!e.hasContent&&(e.data&&(e.url+=(Xa.test(e.url)?"&":"?")+e.data,delete e.data),m=e.url,e.cache===!1)){v=c.now();var x=e.url.replace(Xb,"$1_="+v);e.url=x+(x===e.url?(Xa.test(e.url)?"&":"?")+"_="+v:"")}(e.data&&e.hasContent&&e.contentType!==!1||b.contentType)&&q.setRequestHeader("Content-Type",e.contentType);e.ifModified&&(m=m||e.url,c.lastModified[m]&&q.setRequestHeader("If-Modified-Since",c.lastModified[m]),c.etag[m]&&q.setRequestHeader("If-None-Match",c.etag[m]));q.setRequestHeader("Accept",e.dataTypes[0]&&
            e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+ab+"; q=0.01":""):e.accepts["*"]);for(B in e.headers)q.setRequestHeader(B,e.headers[B]);if(e.beforeSend&&(e.beforeSend.call(f,q,e)===!1||w===2))return q.abort(),!1;for(B in{success:1,error:1,complete:1})q[B](e[B]);if(s=U($a,e,b,q)){q.readyState=1;A&&g.trigger("ajaxSend",[q,e]);e.async&&e.timeout>0&&(t=setTimeout(function(){q.abort("timeout")},e.timeout));try{w=1,s.send(k,d)}catch(r){if(w<2)d(-1,r);else throw r;}}else d(-1,
            "No Transport");return q},param:function(a,b){var d=[],e=function(a,b){b=c.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(b===l)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery&&!c.isPlainObject(a))c.each(a,function(){e(this.name,this.value)});else for(var f in a)aa(f,a[f],b,e);return d.join("&").replace(Pb,"+")}});c.extend({active:0,lastModified:{},etag:{}});var Yb=c.now(),X=/(\=)\?(&|$)|\?\?/i;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return c.expando+
        "_"+Yb++}});c.ajaxPrefilter("json jsonp",function(a,b,d){b=a.contentType==="application/x-www-form-urlencoded"&&typeof a.data==="string";if(a.dataTypes[0]==="jsonp"||a.jsonp!==!1&&(X.test(a.url)||b&&X.test(a.data))){var e,f=a.jsonpCallback=c.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,g=p[f],h=a.url,i=a.data,j="$1"+f+"$2";a.jsonp!==!1&&(h=h.replace(X,j),a.url===h&&(b&&(i=i.replace(X,j)),a.data===i&&(h+=(/\?/.test(h)?"&":"?")+a.jsonp+"="+f)));a.url=h;a.data=i;p[f]=function(a){e=[a]};
        d.always(function(){p[f]=g;if(e&&c.isFunction(g))p[f](e[0])});a.converters["script json"]=function(){e||c.error(f+" was not called");return e[0]};a.dataTypes[0]="json";return"script"}});c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){c.globalEval(a);return a}}});c.ajaxPrefilter("script",function(a){if(a.cache===l)a.cache=!1;if(a.crossDomain)a.type=
        "GET",a.global=!1});c.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=k.head||k.getElementsByTagName("head")[0]||k.documentElement;return{send:function(e,f){b=k.createElement("script");b.async="async";if(a.scriptCharset)b.charset=a.scriptCharset;b.src=a.url;b.onload=b.onreadystatechange=function(a,e){if(e||!b.readyState||/loaded|complete/.test(b.readyState))b.onload=b.onreadystatechange=null,c&&b.parentNode&&c.removeChild(b),b=l,e||f(200,"success")};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,
        1)}}}});var ja=p.ActiveXObject?function(){for(var a in D)D[a](0,1)}:!1,Zb=0,D;c.ajaxSettings.xhr=p.ActiveXObject?function(){var a;if(!(a=!this.isLocal&&ya()))a:{try{a=new p.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:ya;(function(a){c.extend(c.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})})(c.ajaxSettings.xhr());c.support.ajax&&c.ajaxTransport(function(a){if(!a.crossDomain||c.support.cors){var b;return{send:function(d,e){var f=a.xhr(),g,h;a.username?f.open(a.type,
        a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(h in a.xhrFields)f[h]=a.xhrFields[h];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType);!a.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");try{for(h in d)f.setRequestHeader(h,d[h])}catch(i){}f.send(a.hasContent&&a.data||null);b=function(d,h){var i,k,p,n,s;try{if(b&&(h||f.readyState===4)){b=l;if(g)f.onreadystatechange=c.noop,ja&&delete D[g];if(h)f.readyState!==4&&f.abort();
    else{i=f.status;p=f.getAllResponseHeaders();n={};if((s=f.responseXML)&&s.documentElement)n.xml=s;n.text=f.responseText;try{k=f.statusText}catch(t){k=""}!i&&a.isLocal&&!a.crossDomain?i=n.text?200:404:i===1223&&(i=204)}}}catch(v){h||e(-1,v)}n&&e(i,k,n,p)};!a.async||f.readyState===4?b():(g=++Zb,ja&&(D||(D={},c(p).unload(ja)),D[g]=b),f.onreadystatechange=b)},abort:function(){b&&b(0,1)}}}});var ba={},A,H,$b=/^(?:toggle|show|hide)$/,ac=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,Y,Aa=[["height","marginTop","marginBottom",
        "paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],V;c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(M("show",3),a,b,d);else{for(var d=0,e=this.length;d<e;d++)if(a=this[d],a.style){b=a.style.display;if(!c._data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c._data(a,"olddisplay",Ba(a.nodeName))}for(d=0;d<e;d++)if(a=this[d],a.style&&(b=a.style.display,b===""||b==="none"))a.style.display=
        c._data(a,"olddisplay")||"";return this}},hide:function(a,b,d){if(a||a===0)return this.animate(M("hide",3),a,b,d);else{for(var d=0,e=this.length;d<e;d++)a=this[d],a.style&&(b=c.css(a,"display"),b!=="none"&&!c._data(a,"olddisplay")&&c._data(a,"olddisplay",b));for(d=0;d<e;d++)if(this[d].style)this[d].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";c.isFunction(a)&&c.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=
        e?a:c(this).is(":hidden");c(this)[b?"show":"hide"]()}):this.animate(M("toggle",3),a,b,d);return this},fadeTo:function(a,b,c,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,e)},animate:function(a,b,d,e){function f(){var h;g.queue===!1&&c._mark(this);var b=c.extend({},g),d=this.nodeType===1,e=d&&c(this).is(":hidden"),f,k,l,p,n;b.animatedProperties={};for(l in a){f=c.camelCase(l);l!==f&&(a[f]=a[l],delete a[l]);k=a[f];c.isArray(k)?(b.animatedProperties[f]=k[1],h=
        a[f]=k[0],k=h):b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing";if(k==="hide"&&e||k==="show"&&!e)return b.complete.call(this);if(d&&(f==="height"||f==="width"))if(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],c.css(this,"display")==="inline"&&c.css(this,"float")==="none")!c.support.inlineBlockNeedsLayout||Ba(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1}if(b.overflow!=null)this.style.overflow="hidden";for(l in a)if(d=
        new c.fx(this,b,l),k=a[l],$b.test(k))if(f=c._data(this,"toggle"+l)||(k==="toggle"?e?"show":"hide":0))c._data(this,"toggle"+l,f==="show"?"hide":"show"),d[f]();else d[k]();else f=ac.exec(k),p=d.cur(),f?(k=parseFloat(f[2]),n=f[3]||(c.cssNumber[l]?"":"px"),n!=="px"&&(c.style(this,l,(k||1)+n),p*=(k||1)/d.cur(),c.style(this,l,p+n)),f[1]&&(k=(f[1]==="-="?-1:1)*k+p),d.custom(p,k,n)):d.custom(p,k,"");return!0}var g=c.speed(b,d,e);if(c.isEmptyObject(a))return this.each(g.complete,[!1]);a=c.extend({},a);return g.queue===
        !1?this.each(f):this.queue(g.queue,f)},stop:function(a,b,d){typeof a!=="string"&&(d=b,b=a,a=l);b&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function b(a,e,f){e=e[f];c.removeData(a,f,!0);e.stop(d)}var f,g=!1,h=c.timers,i=c._data(this);d||c._unmark(!0,this);if(a==null)for(f in i)i[f]&&i[f].stop&&f.indexOf(".run")===f.length-4&&b(this,i,f);else i[f=a+".run"]&&i[f].stop&&b(this,i,f);for(f=h.length;f--;)if(h[f].elem===this&&(a==null||h[f].queue===a)){if(d)h[f](!0);else h[f].saveState();
        g=!0;h.splice(f,1)}(!d||!g)&&c.dequeue(this,a)})}});c.each({slideDown:M("show",1),slideUp:M("hide",1),slideToggle:M("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(a,c,f){return this.animate(b,a,c,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:
        e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;if(e.queue==null||e.queue===!0)e.queue="fx";e.old=e.complete;e.complete=function(a){c.isFunction(e.old)&&e.old.call(this);e.queue?c.dequeue(this,e.queue):a!==!1&&c._unmark(this)};return e},easing:{linear:function(a,b,c,e){return c+e*a},swing:function(a,b,c,e){return(-Math.cos(a*Math.PI)/2+0.5)*e+c}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});c.fx.prototype={update:function(){this.options.step&&
    this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=c.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,d){function e(a){return f.step(a)}var f=this,g=c.fx;this.startTime=V||za();this.end=b;this.now=this.start=a;this.pos=this.state=0;this.unit=d||this.unit||(c.cssNumber[this.prop]?
        "":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){f.options.hide&&c._data(f.elem,"fxshow"+f.prop)===l&&c._data(f.elem,"fxshow"+f.prop,f.start)};e()&&c.timers.push(e)&&!Y&&(Y=setInterval(g.tick,g.interval))},show:function(){var a=c._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||c.style(this.elem,this.prop);this.options.show=!0;a!==l?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=
        c._data(this.elem,"fxshow"+this.prop)||c.style(this.elem,this.prop);this.options.hide=!0;this.custom(this.cur(),0)},step:function(a){var b,d=V||za(),e=!0,f=this.elem,g=this.options;if(a||d>=g.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();g.animatedProperties[this.prop]=!0;for(b in g.animatedProperties)g.animatedProperties[b]!==!0&&(e=!1);if(e){g.overflow!=null&&!c.support.shrinkWrapBlocks&&c.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]});g.hide&&
    c(f).hide();if(g.hide||g.show)for(b in g.animatedProperties)c.style(f,b,g.orig[b]),c.removeData(f,"fxshow"+b,!0),c.removeData(f,"toggle"+b,!0);if(a=g.complete)g.complete=!1,a.call(f)}return!1}else g.duration==Infinity?this.now=d:(a=d-this.startTime,this.state=a/g.duration,this.pos=c.easing[g.animatedProperties[this.prop]](this.state,a,0,1,g.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}};c.extend(c.fx,{tick:function(){for(var a,b=c.timers,d=0;d<b.length;d++)a=
        b[d],!a()&&b[d]===a&&b.splice(d--,1);b.length||c.fx.stop()},interval:13,stop:function(){clearInterval(Y);Y=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});c.each(["width","height"],function(a,b){c.fx.step[b]=function(a){c.style(a.elem,b,Math.max(0,a.now)+a.unit)}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,
        function(b){return a===b.elem}).length};var bc=/^t(?:able|d|h)$/i,bb=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in k.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(b){c.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!d||!c.contains(g,b))return d?{top:d.top,left:d.left}:{top:0,left:0};b=f.body;f=ca(f);
        return{top:d.top+(f.pageYOffset||c.support.boxModel&&g.scrollTop||b.scrollTop)-(g.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&g.scrollLeft||b.scrollLeft)-(g.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(b){c.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d,e=b.offsetParent,f=b.ownerDocument,g=f.documentElement,h=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,
        null):b.currentStyle;for(var i=b.offsetTop,j=b.offsetLeft;(b=b.parentNode)&&b!==h&&b!==g;){if(c.support.fixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;i-=b.scrollTop;j-=b.scrollLeft;if(b===e){i+=b.offsetTop;j+=b.offsetLeft;if(c.support.doesNotAddBorder&&(!c.support.doesAddBorderForTableAndCells||!bc.test(b.nodeName)))i+=parseFloat(d.borderTopWidth)||0,j+=parseFloat(d.borderLeftWidth)||0;e=b.offsetParent}c.support.subtractsBorderForOverflowNotVisible&&d.overflow!==
        "visible"&&(i+=parseFloat(d.borderTopWidth)||0,j+=parseFloat(d.borderLeftWidth)||0)}if(d.position==="relative"||d.position==="static")i+=h.offsetTop,j+=h.offsetLeft;c.support.fixedPosition&&d.position==="fixed"&&(i+=Math.max(g.scrollTop,h.scrollTop),j+=Math.max(g.scrollLeft,h.scrollLeft));return{top:i,left:j}};c.offset={bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(c.css(a,"marginTop"))||0,d+=parseFloat(c.css(a,"marginLeft"))||0);
        return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),g=f.offset(),h=c.css(a,"top"),i=c.css(a,"left"),j={},k={};(e==="absolute"||e==="fixed")&&c.inArray("auto",[h,i])>-1?(k=f.position(),e=k.top,i=k.left):(e=parseFloat(h)||0,i=parseFloat(i)||0);c.isFunction(b)&&(b=b.call(a,d,g));if(b.top!=null)j.top=b.top-g.top+e;if(b.left!=null)j.left=b.left-g.left+i;"using"in b?b.using.call(a,j):f.css(j)}};c.fn.extend({position:function(){if(!this[0])return null;
        var a=this[0],b=this.offsetParent(),d=this.offset(),e=bb.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||k.body;a&&!bb.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});
    c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(b){var f,g;if(b===l){f=this[0];if(!f)return null;return(g=ca(f))?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:f[d]}return this.each(function(){(g=ca(this))?g.scrollTo(!a?b:c(g).scrollLeft(),a?b:c(g).scrollTop()):this[d]=b})}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){var a=this[0];return a?a.style?parseFloat(c.css(a,
        d,"padding")):this[d]():null};c.fn["outer"+b]=function(a){var b=this[0];return b?b.style?parseFloat(c.css(b,d,a?"margin":"border")):this[d]():null};c.fn[d]=function(a){var f=this[0];if(!f)return a==null?null:this;if(c.isFunction(a))return this.each(function(b){var f=c(this);f[d](a.call(this,b,f[d]()))});if(c.isWindow(f)){var g=f.document.documentElement["client"+b],h=f.document.body;return f.document.compatMode==="CSS1Compat"&&g||h&&h["client"+b]||g}else return f.nodeType===9?Math.max(f.documentElement["client"+
        b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]):a===l?(f=c.css(f,d),g=parseFloat(f),c.isNumeric(g)?g:f):this.css(d,typeof a==="string"?a:a+"px")}});p.jQuery=p.$=c;typeof define==="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return c})})(window);

/* -- jquery.easing.1.3.js */
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
    2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
    easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         a,c,b,d){var e=1.70158,f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*
        2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){f==void 0&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){f==void 0&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){f==void 0&&(f=1.70158);if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/
        2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});

/* -- modernizr.min.js */
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-history-video-touch-shiv-mq-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return w("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.history=function(){return!!a.history&&!!history.pushState},q.csstransforms=function(){return!!G("transform")},q.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return G("transition")},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/* -- underscore.min.js */
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","  ":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/* -- backbone.min.js */
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
 //@ sourceMappingURL=backbone-min.map
 */
/* -- chosen.jquery.min.js */
/* Chosen v0.11.1 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
!function(){var SelectParser;SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:a.label,children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},this.SelectParser=SelectParser}.call(this),function(){var AbstractChosen,a;a=this,AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=this.options.single_backstroke_delete||!1,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.dom_id=this.container_id+"_o_"+a.array_index,b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=""!==a.style.cssText?' style="'+a.style+'"':"",'<li id="'+a.dom_id+'" class="'+b.join(" ")+'"'+c+">"+a.html+"</li>"},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.generate_field_id=function(){var a;return a=this.generate_random_id(),this.form_field.id=a,a},AbstractChosen.prototype.generate_random_char=function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",c=Math.floor(Math.random()*a.length),b=a.substring(c,c+1)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.browser_is_supported=function(){var a;return"Microsoft Internet Explorer"===window.navigator.appName?null!==(a=document.documentMode)&&a>=8:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a.AbstractChosen=AbstractChosen}.call(this),function(){var a,Chosen,b,c,d={}.hasOwnProperty,e=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};b=this,a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c;return c=a(this),c.hasClass("chzn-done")?void 0:c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(d){function Chosen(){return c=Chosen.__super__.constructor.apply(this,arguments)}return e(Chosen,d),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},Chosen.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},Chosen.prototype.set_up_html=function(){var b,c;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn",b=["chzn-container"],b.push("chzn-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chzn-rtl"),c={id:this.container_id,"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>'):this.container.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chzn-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.mousedown(function(b){a.container_mousedown(b)}),this.container.mouseup(function(b){a.container_mouseup(b)}),this.container.mouseenter(function(b){a.mouse_enter(b)}),this.container.mouseleave(function(b){a.mouse_leave(b)}),this.search_results.mouseup(function(b){a.search_results_mouseup(b)}),this.search_results.mouseover(function(b){a.search_results_mouseover(b)}),this.search_results.mouseout(function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel DOMMouseScroll",function(b){a.search_results_mousewheel(b)}),this.form_field_jq.bind("liszt:updated",function(b){a.results_update_field(b)}),this.form_field_jq.bind("liszt:activate",function(b){a.activate_field(b)}),this.form_field_jq.bind("liszt:open",function(b){a.container_mousedown(b)}),this.search_field.blur(function(b){a.input_blur(b)}),this.search_field.keyup(function(b){a.keyup_checker(b)}),this.search_field.keydown(function(b){a.keydown_checker(b)}),this.search_field.focus(function(b){a.input_focus(b)}),this.is_multiple?this.search_choices.click(function(b){a.choices_click(b)}):this.container.click(function(a){a.preventDefault()})},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field()):(this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chzn-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).click(this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b,c,d;return b=-(null!=(c=a.originalEvent)?c.wheelDelta:void 0)||(null!=(d=a.originialEvent)?d.detail:void 0),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chzn-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(document).unbind("click",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){return a(b.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){var a,c,d,e,f;for(this.parsing=!0,this.selected_option_count=null,this.results_data=b.SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text(this.default_text),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chzn-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chzn-container-single-nosearch"))),a="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],c.group?a+=this.result_add_group(c):c.empty||(a+=this.result_add_option(c),c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&(this.selected_item.removeClass("chzn-default").find("span").text(c.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(a),this.parsing=!1},Chosen.prototype.result_add_group=function(b){return b.dom_id=this.container_id+"_g_"+b.array_index,'<li id="'+b.dom_id+'" class="group-result">'+a("<div />").text(b.label).html()+"</li>"},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(this.container.addClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field_jq.attr("tabindex")?(a=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.search_field.attr("tabindex",a)):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.click(function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{href:"#","class":"search-choice-close",rel:b.array_index}),d.click(function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a.attr("rel"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.form_field.options[0].selected=!0,this.selected_option_count=null,this.selected_item.find("span").text(this.default_text),this.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c,d,e;return this.result_highlight?(b=this.result_highlight,c=b.attr("id"),this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=b,this.selected_item.removeClass("chzn-default")),b.addClass("result-selected"),e=c.substr(c.lastIndexOf("_")+1),d=this.results_data[e],d.selected=!0,this.form_field.options[d.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(d):(this.selected_item.find("span").first().text(d.text),this.allow_single_deselect&&this.single_deselect_control_build()),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[d.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.result_activate=function(a,b){return b.disabled?a.addClass("disabled-result"):this.is_multiple&&b.selected?a.addClass("result-selected"):a.addClass("active-result")},Chosen.prototype.result_deactivate=function(a){return a.removeClass("active-result result-selected disabled-result")},Chosen.prototype.result_deselect=function(b){var c,d;return d=this.results_data[b],this.form_field.options[d.options_index].disabled?!1:(d.selected=!1,this.form_field.options[d.options_index].selected=!1,this.selected_option_count=null,c=a("#"+this.container_id+"_o_"+b),c.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[d.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chzn-single-with-deselect")):void 0},Chosen.prototype.winnow_results=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;for(this.no_results_clear(),j=0,k=this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html(),g=this.search_contains?"":"^",f=new RegExp(g+k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),n=new RegExp(k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),s=this.results_data,o=0,q=s.length;q>o;o++)if(c=s[o],!c.empty)if(c.group)a("#"+c.dom_id).css("display","none");else{if(b=!1,i=c.dom_id,h=a("#"+i),f.test(c.html))b=!0,j+=1;else if(this.enable_split_word_search&&(c.html.indexOf(" ")>=0||0===c.html.indexOf("["))&&(e=c.html.replace(/\[|\]/g,"").split(" "),e.length))for(p=0,r=e.length;r>p;p++)d=e[p],f.test(d)&&(b=!0,j+=1);b?(k.length?(l=c.html.search(n),m=c.html.substr(0,l+k.length)+"</em>"+c.html.substr(l+k.length),m=m.substr(0,l)+"<em>"+m.substr(l)):m=c.html,h.html(m),this.result_activate(h,c),null!=c.group_array_index&&a("#"+this.results_data[c.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&i===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(h))}return 1>j&&k.length?this.no_results(k):this.winnow_results_set_highlight()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return this.result_highlight||(b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null==a)?void 0:this.result_do_highlight(a)},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i;if(this.is_multiple){for(c=0,g=0,e="position:absolute; left: -1000px; top: -1000px; display:none;",f=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],h=0,i=f.length;i>h;h++)d=f[h],e+=d+":"+this.search_field.css(d)+";";return b=a("<div />",{style:e}),b.text(this.search_field.val()),a("body").append(b),g=b.width()+25,b.remove(),this.f_width||(this.f_width=this.container.outerWidth()),g>this.f_width-10&&(g=this.f_width-10),this.search_field.css({width:g+"px"})}},Chosen.prototype.generate_random_id=function(){var b;for(b="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();a("#"+b).length>0;)b+=this.generate_random_char();return b},Chosen}(AbstractChosen),b.Chosen=Chosen}.call(this);
/* -- tweenmax.min.js */
/*!
 * VERSION: beta 1.9.8
 * DATE: 2013-06-05
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0},n=function(t){return t.jquery||t.length&&t[0]&&t[0].nodeType&&t[0].style&&!t.nodeType},a=r.prototype=i.to({},.1,{}),o=[];r.version="1.9.8",a.constructor=r,a.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},a.updateTo=function(t,e){var s,r=this.ratio;e&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},a.render=function(t,e,i){var s,r,n,a,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._time,f=this._totalTime,c=this._cycle;if(t>=u?(this._totalTime=u,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(r="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===this._duration&&this._rawPrevTime>0)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=this._duration+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(h=this._time/this._duration,l=this._easeType,_=this._easePower,(1===l||3===l&&h>=.5)&&(h=1-h),3===l&&(h*=2),1===_?h*=h:2===_?h*=h*h:3===_?h*=h*h*h:4===_&&(h*=h*h*h*h),this.ratio=1===l?1-h:2===l?h:.5>this._time/this._duration?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/this._duration)),p===this._time&&!i)return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),void 0;if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===f&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),this._cycle!==c&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||o)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||o)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,a,h,l,_,u){h=h||0;var p,f,c,m,d=a.delay||0,g=[],v=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,a.onCompleteParams||o),l.apply(u||this,_||o)};for(t instanceof Array||("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=s.call(t,0))),p=t.length,c=0;p>c;c++){f={};for(m in a)f[m]=a[m];f.delay=d,c===p-1&&l&&(f.onComplete=v),g[c]=new r(t[c],e,f),d+=h}return g},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){for(var e,s=i.getTweensOf(t),r=s.length;--r>-1;)if(e=s[r],e._active||e._startTime===e._timeline._time&&e._timeline._active)return!0;return!1};var h=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(h(n,e)),r=s.length),n=n._next;return s},l=r.getAllTweens=function(e){return h(t._rootTimeline,e).concat(h(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=l(0!=r),_=h.length,u=i&&s&&r;for(o=0;_>o;o++)a=h[o],(u||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var a,o,h,l,_,u=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=s(t,0)),t instanceof Array)for(l=t.length;--l>-1;)r.killChildTweensOf(t[l],e);else{a=[];for(h in u)for(o=u[h].target.parentNode;o;)o===t&&(a=a.concat(u[h].tweens)),o=o.parentNode;for(_=a.length,l=0;_>l;l++)e&&a[l].totalTime(a[l].totalDuration()),a[l]._enabled(!1,!1)}}};var _=function(t,i,s,r){void 0===i&&(i=!0),void 0===s&&(s=!0);for(var n,a,o=l(r),h=i&&s&&r,_=o.length;--_>-1;)a=o[_],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){_(!0,t,e,i)},r.resumeAll=function(t,e,i){_(!1,t,e,i)},a.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},a.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},a.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},a.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},a.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},a.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},a.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},a.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var i,s,n=this.vars,a=r.length;--a>-1;)if(s=n[r[a]])for(i=s.length;--i>-1;)"{self}"===s[i]&&(s=n[r[a]]=s.concat(),s[i]=this);n.tweens instanceof Array&&this.add(n.tweens,0,n.align,n.stagger)},r=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],n=[],a=function(t){var e,i={};for(e in t)i[e]=t[e];return i},o=n.slice,h=s.prototype=new e;return s.version="1.9.8",h.constructor=s,h.kill()._gc=!1,h.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},h.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},h.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},h.staggerTo=function(t,e,r,n,h,l,_,u){var p,f=new s({onComplete:l,onCompleteParams:_,onCompleteScope:u});for("string"==typeof t&&(t=i.selector(t)||t),!(t instanceof Array)&&t.length&&t[0]&&t[0].nodeType&&t[0].style&&(t=o.call(t,0)),n=n||0,p=0;t.length>p;p++)r.startAt&&(r.startAt=a(r.startAt)),f.to(t[p],e,a(r),p*n);return this.add(f,h)},h.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},h.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},h.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},h.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},h.add=function(r,n,a,o){var h,l,_,u,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array){for(a=a||"normal",o=o||0,h=n,l=r.length,_=0;l>_;_++)(u=r[_])instanceof Array&&(u=new s({tweens:u})),this.add(u,h),"string"!=typeof u&&"function"!=typeof u&&("sequence"===a?h=u._startTime+u.totalDuration()/u._timeScale:"start"===a&&(u._startTime-=u.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is neither a tween, timeline, function, nor a string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(p=this;p._gc&&p._timeline;)p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._enabled(!0,!1),p=p._timeline;return this},h.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},h._remove=function(t,i){return e.prototype._remove.call(this,t,i),this._last?this._time>this._last._startTime&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=0,this},h.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},h.insert=h.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},h.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},h.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},h.removeLabel=function(t){return delete this._labels[t],this},h.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},h._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r instanceof Array)for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},h.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(t,e){return this.play(t,e)},h.gotoAndStop=function(t,e){return this.pause(t,e)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var s,r,a,o,h,l=this._dirty?this.totalDuration():this._totalDuration,_=this._time,u=this._startTime,p=this._timeScale,f=this._paused;if(t>=l?(this._totalTime=this._time=l,this._reversed||this._hasPausedChild()||(r=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,t=l+1e-6):1e-7>t?(this._totalTime=this._time=0,(0!==_||0===this._duration&&this._rawPrevTime>0)&&(o="onReverseComplete",r=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(h=!0)):this._initted||(h=!0),this._rawPrevTime=t,t=0):this._totalTime=this._time=this._rawPrevTime=t,this._time!==_&&this._first||i||h){if(this._initted||(this._initted=!0),0===_&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=_)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||_>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),o&&(this._gc||(u===this._startTime||p!==this._timeScale)&&(0===this._time||l>=this.totalDuration())&&(r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||n)))}},h._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},h.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},h.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},h._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},h.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},h._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},h.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},h._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*t,!1):this._time/this.duration()},h.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},h.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=[],n=new i(null,null,1,0),a=function(t){for(;t;){if(t._paused)return!0;t=t._timeline}return!1},o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.9.8",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,a,o={ease:n,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(s in i)o[s]=i[s];return o.time=this._parseTimeOrLabel(t),a=new e(this,Math.abs(Number(o.time)-this._time)/this._timeScale||.001,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||r)},a},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var s,n,a,o,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._duration,p=this._time,f=this._totalTime,c=this._startTime,m=this._timeScale,d=this._rawPrevTime,g=this._paused,v=this._cycle;if(t>=_?(this._locked||(this._totalTime=_,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===u&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=u,t=u+1e-6)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===u&&this._rawPrevTime>0&&!this._locked)&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===u&&this._rawPrevTime>=0&&this._first&&(h=!0)):this._initted||(h=!0),this._rawPrevTime=t,t=0):(this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(l=u+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=u-this._time),this._time>u?(this._time=u,t=u+1e-6):0>this._time?this._time=t=0:t=this._time))),this._cycle!==v&&!this._locked){var y=this._yoyo&&0!==(1&v),T=y===(this._yoyo&&0!==(1&this._cycle)),w=this._totalTime,x=this._cycle,b=this._rawPrevTime,P=this._time;if(this._totalTime=v*u,v>this._cycle?y=!y:this._totalTime+=u,this._time=p,this._rawPrevTime=0===u?d-1e-5:d,this._cycle=v,this._locked=!0,p=y?0:u,this.render(p,e,0===u),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||r),T&&(p=y?u+1e-6:-1e-6,this.render(p,!0,!1)),this._locked=!1,this._paused&&!g)return;this._time=P,this._totalTime=w,this._cycle=x,this._rawPrevTime=b}if(!(this._time!==p&&this._first||i||h))return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),void 0;if(this._initted||(this._initted=!0),0===f&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||r)),this._time>=p)for(s=this._first;s&&(a=s._next,!this._paused||g);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||g);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),o&&(this._locked||this._gc||(c===this._startTime||m!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||r)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],o=this.getChildren(t,e,i),h=0,l=o.length;for(s=0;l>s;s++)r=o[s],r._paused||r._timeline._time>=r._startTime&&r._timeline._time<r._startTime+r._totalDuration/r._timeScale&&(a(r._timeline)||(n[h++]=r));return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=Math.PI/180,i=[],s=[],r=[],n={},a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,f=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,e,n,a,o){var l,_,u,p,f,c,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)f=t[b],_=f.a,u=f.d,p=t[b+1].d,o?(y=i[l],T=s[l],w=.25*(T+y)*e/(a?.5:r[l]||.5),c=u-(u-_)*(a?.5*e:0!==y?w/y:0),m=u+(p-u)*(a?.5*e:0!==T?w/T:0),d=u-(c+((m-c)*(3*y/(y+T)+.5)/4||0))):(c=u-.5*(u-_)*e,m=u+.5*(p-u)*e,d=u-(c+m)/2),c+=d,m+=d,f.c=g=c,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,e,r,n){var o,h,l,_,u,p,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][e])&&"="===p.charAt(1)&&(t[h][e]=n[e]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][e],0,0,t[-1>o?0:1][e]),f;for(h=0;o>h;h++)l=t[h][e],_=t[h+1][e],f[h]=new a(l,0,0,_),r&&(u=t[h+2][e],i[h]=(i[h]||0)+(_-l)*(_-l),s[h]=(s[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][e],0,0,t[h+1][e]),f},u=function(t,e,a,h,u,p){var f,c,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":o,null==e&&(e=1);for(c in t[0])x.push(c);if(t.length>1){for(T=t[t.length-1],y=!0,f=x.length;--f>-1;)if(c=x[f],Math.abs(b[c]-T[c])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(i.length=s.length=r.length=0,f=x.length;--f>-1;)c=x[f],n[c]=-1!==u.indexOf(","+c+","),w[c]=_(t,c,n[c],p);for(f=i.length;--f>-1;)i[f]=Math.sqrt(i[f]),s[f]=Math.sqrt(s[f]);if(!h){for(f=x.length;--f>-1;)if(n[c])for(m=w[x[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/s[d]+m[d].da/i[d],r[d]=(r[d]||0)+g*g;for(f=r.length;--f>-1;)r[f]=Math.sqrt(r[f])}for(f=x.length,d=a?4:1;--f>-1;)c=x[f],m=w[c],l(m,e,a,h,n[c]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},p=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,p,f,c,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(c=t[_][p])&&"="===c.charAt(1)?i[p]+Number(c.charAt(0)+c.substr(2)):Number(c),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=c=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,f,c=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=c*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],p=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:u}},m=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):p(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;)for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,f=this._func,c=this._target;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),f[n]?c[n](h):c[n]=h;if(this._autoRotate){var m,d,g,v,y,T,w,x=this._autoRotate;for(r=x.length;--r>-1;)n=x[r][2],T=x[r][3]||0,w=x[r][4]===!0?1:t,a=this._beziers[x[r][0]],m=this._beziers[x[r][1]],a&&m&&(a=a[i],m=m[i],d=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,d+=(v-d)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=m.a+(m.b-m.a)*o,y=m.b+(m.c-m.b)*o,g+=(y-g)*o,y+=(m.c+(m.d-m.c)*o-y)*o,h=Math.atan2(y-g,v-d)*w+T,f[n]?c[n](h):c[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var i=t._internals,s=i._parseToProxy,r=i._setPluginRatio,n=i.CSSPropTween;i._registerComplexSpecialProp("bezier",{parser:function(t,i,a,o,h,l){i instanceof Array&&(i={values:i}),l=new m;var _,u,p,f=i.values,c=f.length-1,d=[],g={};if(0>c)return h;for(_=0;c>=_;_++)p=s(t,f[_],o,h,l,c!==_),d[_]=p.end;for(u in i)g[u]=i[u];return g.values=d,h=new n(t,"bezier",0,0,p.pt,2),h.data=p,h.plugin=l,h.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(_=g.autoRotate===!0?0:Number(g.autoRotate)*e,g.autoRotate=null!=p.end.left?[["left","top","rotation",_,!0]]:null!=p.end.x?[["x","y","rotation",_,!0]]:!1),g.autoRotate&&(o._transform||o._enableTransforms(!1),p.autoRotate=o._target._gsTransform),l._onInitTween(p.proxy,g,o._tween),h}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)
}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.9.8",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h};var l,_,u,p,f,c,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,k=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,S=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,F={},E=document,N=E.createElement("div"),L=E.createElement("img"),X=a._internals={_specialProps:o},U=navigator.userAgent,z=function(){var t,e=U.indexOf("Android"),i=E.createElement("div");return u=-1!==U.indexOf("Safari")&&-1===U.indexOf("Chrome")&&(-1===e||Number(U.substr(e+8,1))>3),f=u&&6>Number(U.substr(U.indexOf("Version/")+8,1)),p=-1!==U.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",q="",V=function(t,e){e=e||N;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],j="-"+q.toLowerCase()+"-",q+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return z||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,n=i[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=A.test(e),o=t,h=N.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||E.body,h[a?"width":"height"]=i+s),o.appendChild(N),n=parseFloat(N[a?"offsetWidth":"offsetHeight"]),o.removeChild(N),0!==n||r||(n=$(t,e,i,s,!0))),l?-n:n},Q=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},W=function(t,e){var i,s,r={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(k,S)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)r[i.replace(k,S)]=e[i];return z||(r.opacity=Y(t)),s=be(t,e,!1),r.rotation=s.rotation*I,r.skewX=s.skewX*I,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX*I,r.rotationY=s.rotationY*I,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t*M:(r=2*Math.PI,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?M:1)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,_>f--)for(;_>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},f={},c=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:f,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,f,c,g,v,y,T,w,x,P,k,R=i.split(", ").join(",").split(" "),S=s.split(", ").join(",").split(" "),A=R.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),S=S.join(" ").replace(D,", ").split(" "),A=R.length),A!==S.length&&(R=(n||"").split(" "),A=R.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(c=R[u],g=S[u],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))k=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),w=c.length+g.length>6,w&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(S[u]).join("transparent")):(z||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],w?",":k,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,k,!1)));else if(v=c.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],x=c.indexOf(P,f),a.appendXtra(c.substr(f,x-f),Number(P),ie(y[p],P),"",C&&"px"===c.substr(x+P.length,2),0===p),f=x+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(h=pe.prototype,h.l=h.pr=0;--ce>0;)h["xn"+ce]=0,h["xs"+ce]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(B("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=j+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,f,c,m,d,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,w=1e5,x=-Math.PI+1e-4,b=Math.PI-1e-4,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var k=n[8],R=n[9],S=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=k*D-n[12],O=R*D-n[13],D=S*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var M,I,F,E,N,L,X,U=n[0],z=n[1],Y=n[2],B=n[3],j=n[4],q=n[5],V=n[6],Z=n[7],$=n[11],Q=v.rotationX=Math.atan2(V,S),W=x>Q||Q>b;Q&&(E=Math.cos(-Q),N=Math.sin(-Q),M=j*E+k*N,I=q*E+R*N,F=V*E+S*N,k=j*-N+k*E,R=q*-N+R*E,S=V*-N+S*E,$=Z*-N+$*E,j=M,q=I,V=F),Q=v.rotationY=Math.atan2(k,U),Q&&(L=x>Q||Q>b,E=Math.cos(-Q),N=Math.sin(-Q),M=U*E-k*N,I=z*E-R*N,F=Y*E-S*N,R=z*N+R*E,S=Y*N+S*E,$=B*N+$*E,U=M,z=I,Y=F),Q=v.rotation=Math.atan2(z,q),Q&&(X=x>Q||Q>b,E=Math.cos(-Q),N=Math.sin(-Q),U=U*E+j*N,I=z*E+q*N,q=z*-N+q*E,V=Y*-N+V*E,z=I),X&&W?v.rotation=v.rotationX=0:X&&L?v.rotation=v.rotationY=0:L&&W&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+z*z)*w+.5)/w,v.scaleY=(0|Math.sqrt(q*q+R*R)*w+.5)/w,v.scaleZ=(0|Math.sqrt(V*V+S*S)*w+.5)/w,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var H=n.length>=6,K=H?n[0]:1,J=n[1]||0,te=n[2]||0,ee=H?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(K*K+J*J),u=Math.sqrt(ee*ee+te*te),p=K||J?Math.atan2(J,K):v.rotation||0,f=te||ee?Math.atan2(te,ee)+p:v.skewX||0,c=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(f)>Math.PI/2&&Math.abs(f)<1.5*Math.PI&&(y?(_*=-1,f+=0>=p?Math.PI:-Math.PI,p+=0>=p?Math.PI:-Math.PI):(u*=-1,f+=0>=f?Math.PI:-Math.PI)),d=(p-v.rotation)%Math.PI,g=(f-v.skewX)%Math.PI,(void 0===v.skewX||c>T||-T>c||m>T||-T>m||d>x&&b>d&&false|d*w||g>x&&b>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=f),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation,n=r+s.skewX,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var f,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=f-(f*o+m*h),b+=m-(f*l+m*_)),v)f=d/2,m=g/2,w+=", Dx="+(f-(f*o+m*h)+x)+", Dy="+(m-(f*l+m*_)+b)+")";else{var P,k,R,S=8>c?1:-1;for(f=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ce=0;4>ce;ce++)k=J[ce],P=p[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(y,""))||0,R=i!==s[k]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:m-s.ieOffsetY,u[k]=(s[k]=Math.round(i-R*(0===ce||2===ce?1:S)))+"px";w+=", sizingMethod='auto expand')"}u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient(")&&u.removeAttribute("filter"))}},ke=function(){var t,e,i,s,r,n,a,o,h,l=this.data,_=this.t.style,u=l.perspective,f=l.scaleX,c=0,m=0,d=0,g=0,v=l.scaleY,y=0,T=0,w=0,x=0,b=l.scaleZ,P=0,k=0,R=0,S=u?-1/u:0,A=l.rotation,C=l.zOrigin,O=1e5;if(p&&(a=_.top?"top":_.bottom?"bottom":parseFloat(G(this.t,"top",null,!1))?"bottom":"top",i=G(this.t,a,null,!1),o=parseFloat(i)||0,h=i.substr((o+"").length)||"px",l._ffFix=!l._ffFix,_[a]=(l._ffFix?o+.05:o-.05)+h),A||l.skewX)i=f*Math.cos(A),s=v*Math.sin(A),A-=l.skewX,c=f*-Math.sin(A),v*=Math.cos(A),f=i,g=s;else if(!l.rotationY&&!l.rotationX&&1===b)return _[ye]="translate3d("+l.x+"px,"+l.y+"px,"+l.z+"px)"+(1!==f||1!==v?" scale("+f+","+v+")":""),void 0;A=l.rotationY,A&&(t=Math.cos(A),e=Math.sin(A),i=f*t,s=g*t,r=b*-e,n=S*-e,m=f*e,y=g*e,b*=t,S*=t,f=i,g=s,w=r,k=n),A=l.rotationX,A&&(t=Math.cos(A),e=Math.sin(A),i=c*t+m*e,s=v*t+y*e,r=x*t+b*e,n=R*t+S*e,m=c*-e+m*t,y=v*-e+y*t,b=x*-e+b*t,S=R*-e+S*t,c=i,v=s,x=r,R=n),C&&(P-=C,d=m*P,T=y*P,P=b*P+C),d=(i=(d+=l.x)-(d|=0))?(0|i*O+(0>i?-.5:.5))/O+d:d,T=(i=(T+=l.y)-(T|=0))?(0|i*O+(0>i?-.5:.5))/O+T:T,P=(i=(P+=l.z)-(P|=0))?(0|i*O+(0>i?-.5:.5))/O+P:P,_[ye]="matrix3d("+[(0|f*O)/O,(0|g*O)/O,(0|w*O)/O,(0|k*O)/O,(0|c*O)/O,(0|v*O)/O,(0|x*O)/O,(0|R*O)/O,(0|m*O)/O,(0|y*O)/O,(0|b*O)/O,(0|S*O)/O,d,T,P,u?1+-P/u:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,h,l=this.data,_=this.t,u=_.style;p&&(t=u.top?"top":u.bottom?"bottom":parseFloat(G(_,"top",null,!1))?"bottom":"top",e=G(_,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",l._ffFix=!l._ffFix,u[t]=(l._ffFix?i+.05:i-.05)+s),l.rotation||l.skewX?(r=l.rotation,n=r-l.skewX,a=1e5,o=l.scaleX*a,h=l.scaleY*a,u[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-h)/a+","+(0|Math.cos(n)*h)/a+","+l.x+","+l.y+")"):u[ye]="matrix("+l.scaleX+",0,0,"+l.scaleY+","+l.x+","+l.y+")"};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,_,u,p,f,c,m=s._transform=be(t,r,!0,o.parseTransform),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)_=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=_;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(_ in c)y[_]=c[_];else y.rotation=c;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation*I,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX*I||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY*I||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(p=m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],u=h[i]-m[i],(u>g||-g>u||null!=F[i])&&(f=!0,n=new pe(m,i,m[i],u,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return u=y.transformOrigin,(u||xe&&p&&m.zOrigin)&&(ye?(f=!0,u=(u||G(t,i,r,!1,"50% 50%"))+"",i=we,n=new pe(d,i,0,0,n,-1,"transformOrigin"),n.b=d[i],n.plugin=a,xe?(_=m.zOrigin,u=u.split(" "),m.zOrigin=(u.length>2?parseFloat(u[2]):_)||0,n.xs0=n.e=d[i]=u[0]+" "+(u[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=u):ee(u+"",m)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,f,c,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),w=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+c+g,l=parseFloat(_)+c+g)),a=fe(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,f="background-position",m=r||Z(t,null),d=this.format((m?c?m.getPropertyValue(f+"-x")+" "+m.getPropertyValue(f+"-y"):m.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>c?(h=t.currentStyle,l=8>c?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Se=function(t){var e,i=this.t,s=i.filter,r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity=100)"),-1===s.indexOf("opacity")?i.filter+=" alpha(opacity="+r+")":i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o,h=parseFloat(G(t,"opacity",r,!1,"1")),l=t.style;return e=parseFloat(e),"autoAlpha"===i&&(o=G(t,"visibility",r),1===h&&"hidden"===o&&0!==e&&(h=0),n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==h?"visible":"hidden",0===e?"hidden":"visible"),n.xs0="visible",s._overwriteProps.push(n.n)),z?n=new pe(l,"opacity",h,e-h,n):(n=new pe(l,"opacity",100*h,100*(e-h),n),n.xn1="autoAlpha"===i?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Se),n}});var Ae=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ce=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ae(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,f,c=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ce,a.pr=-11,i=!0,a.b=c,_=W(t,r),u=t._gsClassPT){for(p={},f=u.data;f;)p[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,W(t),h,p),t.className=c,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration)for(var e,i="all"===this.e,s=this.t.style,r=i?s.cssText.split(";"):this.e.split(","),n=r.length,a=o.transform.parse;--n>-1;)e=r[n],i&&(e=e.substr(0,e.indexOf(":")).split(" ").join("")),o[e]&&(e=o[e].parse===a?ye:o[e].p),Ae(s,e)};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ce=h.length;ce--;)ge(h[ce]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,p,c,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=W(t,r),x.cssText=m+";"+e,h=H(t,h,W(t)).difs,!z&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),f&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&xe?ke:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=m;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:d)?p._prev._next=p:m=p,(p._next=c)?c._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,f,c,m,d,g,v=t.style;for(a in e)f=e[a],h=o[a],h?i=h.parse(t,f,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(f)?(d||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(_=parseFloat(p),c=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),c="px"):"left"===a||"top"===a?(_=Q(t,a,r),c="px"):(_="opacity"!==a?0:1,c="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(y,"")):(u=parseFloat(f),m=d?f.substr((u+"").length)||"":""),""===m&&(m=s[a]||c),f=u||0===u?(g?u+_:u)+m:e[a],c!==m&&""!==m&&(u||0===u)&&(_||0===_)&&(_=$(t,a,_,c),"%"===m?(_/=$(t,a,100,"%")/100,_>100&&(_=100),e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,f),i.xs0=m)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(W(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,l,u),o.render(i,!0),De(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={};for(i in e)this._addTween(this._proxy,i,parseFloat(t.getAttribute(i)),e[i],i),this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length;--s>-1;)e=i[s],this._target.setAttribute(e,this._proxy[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));
    return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},c=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,c=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=c?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),c?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),f=u;--f>-1;)a=l[f],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),c},!0)}),function(t){"use strict";var e,i,s,r,n,a=t.GreenSockGlobals||t,o=function(t){var e,i=t.split("."),s=a;for(e=0;i.length>e;e++)s[i[e]]=s=s[i[e]]||{};return s},h=o("com.greensock"),l=[].slice,_=function(){},u={},p=function(e,i,s,r){this.sc=u[e]?u[e].sc:[],u[e]=this,this.gsClass=null,this.func=s;var n=[];this.check=function(h){for(var l,_,f,c,m=i.length,d=m;--m>-1;)(l=u[i[m]]||new p(i[m],[])).gsClass?(n[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&s)for(_=("com.greensock."+e).split("."),f=_.pop(),c=o(_.join("."))[f]=this.gsClass=s.apply(s,n),r&&(a[f]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+e.split(".").join("/"),[],function(){return c}):"undefined"!=typeof module&&module.exports&&(module.exports=c)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},f=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},c=h._class=function(t,e,i){return e=e||function(){},f(t,[],function(){return e},i),e};f.globals=a;var m=[0,0,1,1],d=[],g=c("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?m.concat(e):m},!0),v=g.map={},y=g.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?c("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],v[n+"."+o]=v[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(s=g.prototype,s._calcEnd=!1,s.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],i=e.length;--i>-1;)s=e[i]+",Power"+i,y(new g(null,null,1,i),s,"easeOut",!0),y(new g(null,null,2,i),s,"easeIn"+(0===i?",easeNone":"")),y(new g(null,null,3,i),s,"easeInOut");v.linear=h.easing.Linear.easeIn,v.swing=h.easing.Quad.easeInOut;var T=c("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});s=T.prototype,s.addEventListener=function(t,e,i,s,a){a=a||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&a>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:a}),this!==r||n||r.wake()},s.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},s.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var w=t.requestAnimationFrame,x=t.cancelAnimationFrame,b=Date.now||function(){return(new Date).getTime()};for(e=["ms","moz","webkit","o"],i=e.length;--i>-1&&!w;)w=t[e[i]+"RequestAnimationFrame"],x=t[e[i]+"CancelAnimationFrame"]||t[e[i]+"CancelRequestAnimationFrame"];c("Ticker",function(t,e){var i,s,a,o,h,l=this,u=b(),p=e!==!1&&w,f=function(t){l.time=(b()-u)/1e3;var e=a,r=l.time-h;(!i||r>0||t===!0)&&(l.frame++,h+=r+(r>=o?.004:o-r),l.dispatchEvent("tick")),t!==!0&&e===a&&(a=s(f))};T.call(l),this.time=this.frame=0,this.tick=function(){f(!0)},this.sleep=function(){null!=a&&(p&&x?x(a):clearTimeout(a),s=_,a=null,l===r&&(n=!1))},this.wake=function(){null!==a&&l.sleep(),s=0===i?_:p&&w?w:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===r&&(n=!0),f(2)},this.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},this.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!a||5>l.frame)&&l.useRAF(!1)},1500)}),s=h.Ticker.prototype=new h.events.EventDispatcher,s.constructor=h.Ticker;var P=c("core.Animation",function(t,e){if(this.vars=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,N){n||r.wake();var i=this.vars.useFrames?E:N;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});r=P.ticker=new h.Ticker,s=P.prototype,s._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1,s.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},s.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},s.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},s.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},s.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},s.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},s.render=function(){},s.invalidate=function(){return this},s._enabled=function(t,e){return n||r.wake(),this._gc=!t,this._active=t&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},s._kill=function(){return this._enabled(!1,!1)},s.kill=function(t,e){return this._kill(t,e),this},s._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},s.eventCallback=function(t,e,i,s){if(null==t)return null;if("on"===t.substr(0,2)){var r,n=this.vars;if(1===arguments.length)return n[t];if(null==e)delete n[t];else if(n[t]=e,n[t+"Params"]=i,n[t+"Scope"]=s,i)for(r=i.length;--r>-1;)"{self}"===i[r]&&(i=n[t+"Params"]=i.concat(),i[r]=this);"onUpdate"===t&&(this._onUpdate=e)}return this},s.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},s.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},s.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},s.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},s.totalTime=function(t,e,i){if(n||r.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,a=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:a._time)-(this._reversed?s-t:t)/this._timeScale,a._dirty||this._uncache(!1),!a._active)for(;a._timeline;)a.totalTime(a._totalTime,!0),a=a._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==t&&this.render(t,e,!1)}return this},s.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},s.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||1e-6,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},s.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},s.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){n||t||r.wake();var e=this._timeline.rawTime(),i=e-this._pauseTime;!t&&this._timeline.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=!t&&this._totalTime>0&&this._totalTime<this._totalDuration,t||0===i||0===this._duration||this.render(this._totalTime,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var k=c("core.SimpleTimeline",function(t){P.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});s=k.prototype=new P,s.constructor=k,s.kill()._gc=!1,s._first=s._last=null,s._sortChildren=!1,s.add=s.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},s._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},s.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},s.rawTime=function(){return n||r.wake(),this._totalTime};var R=c("TweenLite",function(t,e,i){if(P.call(this,e,i),null==t)throw"Cannot tween a null target.";this.target=t="string"!=typeof t?t:R.selector(t)||t;var s,r,n,a=t.jquery||t.length&&t[0]&&t[0].nodeType&&t[0].style&&!t.nodeType,o=this.vars.overwrite;if(this._overwrite=o=null==o?F[R.defaultOverwrite]:"number"==typeof o?o>>0:F[o],(a||t instanceof Array)&&"number"!=typeof t[0])for(this._targets=n=l.call(t,0),this._propLookup=[],this._siblings=[],s=0;n.length>s;s++)r=n[s],r?"string"!=typeof r?r.length&&r[0]&&r[0].nodeType&&r[0].style&&!r.nodeType?(n.splice(s--,1),this._targets=n=n.concat(l.call(r,0))):(this._siblings[s]=L(r,this,!1),1===o&&this._siblings[s].length>1&&X(r,this,null,1,this._siblings[s])):(r=n[s--]=R.selector(r),"string"==typeof r&&n.splice(s+1,1)):n.splice(s--,1);else this._propLookup={},this._siblings=L(t,this,!1),1===o&&this._siblings.length>1&&X(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),S=function(t){return t.length&&t[0]&&t[0].nodeType&&t[0].style&&!t.nodeType},A=function(t,e){var i,s={};for(i in t)I[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i||!(!O[i]||O[i]&&O[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};s=R.prototype=new P,s.constructor=R,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=!1,R.version="1.9.8",R.defaultEase=s._ease=new g(null,null,1,1),R.defaultOverwrite="auto",R.ticker=r,R.autoSleep=!0,R.selector=t.$||t.jQuery||function(e){return t.$?(R.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var C=R._internals={},O=R._plugins={},D=R._tweenLookup={},M=0,I=C.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},F={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},E=P._rootFramesTimeline=new k,N=P._rootTimeline=new k;N._startTime=r.time,E._startTime=r.frame,N._active=E._active=!0,P._updateRoot=function(){if(N.render((r.time-N._startTime)*N._timeScale,!1,!1),E.render((r.frame-E._startTime)*E._timeScale,!1,!1),!(r.frame%120)){var t,e,i;for(i in D){for(e=D[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete D[i]}if(i=N._first,(!i||i._paused)&&R.autoSleep&&!E._first&&1===r._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||r.sleep()}}},r.addEventListener("tick",P._updateRoot);var L=function(t,e,i){var s,r,n=t._gsTweenID;if(D[n||(t._gsTweenID=n="t"+M++)]||(D[n]={target:t,tweens:[]}),e&&(s=D[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return D[n].tweens},X=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,_=e._startTime+1e-10,u=[],p=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||U(e,0,f),0===U(o,l,f)&&(u[p++]=o)):_>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+1e-10>_&&((f||!o._initted)&&2e-10>=_-o._startTime||(u[p++]=o)));for(n=p;--n>-1;)o=u[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},U=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime,a=1e-10;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*a>n-e?a:(n+=t.totalDuration()/t._timeScale/r)>e+a?0:n-e-a};s._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.ease;if(r.startAt){if(r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=R.to(this.target,0,r.startAt),r.immediateRender&&(this._startAt=null,0===this._time&&0!==a))return}else if(r.runBackwards&&r.immediateRender&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){i={};for(s in r)I[s]&&"autoCSS"!==s||(i[s]=r[s]);return i.overwrite=0,this._startAt=R.to(this.target,0,i),void 0}if(this._ease=o?o instanceof g?r.easeParams instanceof Array?o.config.apply(o,r.easeParams):o:"function"==typeof o?new g(o,r.easeParams):v[o]||R.defaultEase:R.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&R._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},s._initProps=function(t,e,i,s){var r,n,a,o,h,l,_;if(null==t)return!1;this.vars.css||t.style&&t.nodeType&&O.css&&this.vars.autoCSS!==!1&&A(this.vars,t);for(r in this.vars){if(I[r]){if(("onStartParams"===r||"onUpdateParams"===r||"onCompleteParams"===r||"onReverseCompleteParams"===r||"onRepeatParams"===r)&&(h=this.vars[r]))for(n=h.length;--n>-1;)"{self}"===h[n]&&(h=this.vars[r]=h.concat(),h[n]=this)}else if(O[r]&&(o=new O[r])._onInitTween(t,this.vars[r],this)){for(this._firstPT=l={_next:this._firstPT,t:o,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:o._priority},n=o._overwriteProps.length;--n>-1;)e[o._overwriteProps[n]]=this._firstPT;(o._priority||o._onInitAllProps)&&(a=!0),(o._onDisable||o._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=e[r]=l={_next:this._firstPT,t:t,p:r,f:"function"==typeof t[r],n:r,pg:!1,pr:0},l.s=l.f?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),_=this.vars[r],l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return s&&this._kill(s,t)?this._initProps(t,e,i,s):this._overwrite>1&&this._firstPT&&i.length>1&&X(t,this,e,this._overwrite,i)?(this._kill(e,t),this._initProps(t,e,i,s)):a},s.render=function(t,e,i){var s,r,n,a=this._time;if(t>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(r="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===this._duration&&this._rawPrevTime>0)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var o=t/this._duration,h=this._easeType,l=this._easePower;(1===h||3===h&&o>=.5)&&(o=1-o),3===h&&(o*=2),1===l?o*=o:2===l?o*=o*o:3===l?o*=o*o*o:4===l&&(o*=o*o*o*o),this.ratio=1===h?1-o:2===h?o:.5>t/this._duration?o/2:1-o/2}else this.ratio=this._ease.getRatio(t/this._duration);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||d))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||d)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||d)))}},s._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:R.selector(e)||e;var i,s,r,n,a,o,h,l;if((e instanceof Array||S(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&(null==t||t._tempKill!==!0);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},s.invalidate=function(){return this._notifyPluginsOfEnabled&&R._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},s._enabled=function(t,e){if(n||r.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=L(s[i],this,!0);else this._siblings=L(this.target,this,!0)}return P.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?R._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},R.to=function(t,e,i){return new R(t,e,i)},R.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new R(t,e,i)},R.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new R(t,e,s)},R.delayedCall=function(t,e,i,s,r){return new R(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},R.set=function(t,e){return new R(t,0,e)},R.killTweensOf=R.killDelayedCallsTo=function(t,e){for(var i=R.getTweensOf(t),s=i.length;--s>-1;)i[s]._kill(e,t)},R.getTweensOf=function(t){if(null==t)return[];t="string"!=typeof t?t:R.selector(t)||t;var e,i,s,r;if((t instanceof Array||S(t))&&"number"!=typeof t[0]){for(e=t.length,i=[];--e>-1;)i=i.concat(R.getTweensOf(t[e]));for(e=i.length;--e>-1;)for(r=i[e],s=e;--s>-1;)r===i[s]&&i.splice(e,1)}else for(i=L(t).concat(),e=i.length;--e>-1;)i[e]._gc&&i.splice(e,1);return i};var z=c("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=z.prototype},!0);if(s=z.prototype,z.version="1.9.1",z.API=2,s._firstPT=null,s._addTween=function(t,e,i,s,r,n){var a,o;null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))&&(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o))},s.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=e+(e>0?.5:-.5)>>0:s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},s._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},s._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},R._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},z.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===z.API&&(O[(new t[e])._propName]=t[e]);return!0},f.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=c("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){z.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new z(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,z.activate([a]),a},e=t._gsQueue){for(i=0;e.length>i;i++)e[i]();for(s in u)u[s].func||t.console.log("GSAP encountered missing dependency: com.greensock."+s)}n=!1}(window);
/* -- jquery.superslides.min.js */
/*! Superslides - v0.6.2 - 2013-07-10
 * https://github.com/nicinabox/superslides
 * Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(i,t){var n,e="superslides";n=function(n,e){this.options=t.extend({play:!1,animation_speed:600,animation_easing:"swing",animation:"slide",inherit_width_from:i,inherit_height_from:i,pagination:!0,hashchange:!1,scrollable:!0,elements:{preserve:".preserve",nav:".slides-navigation",container:".slides-container",pagination:".slides-pagination"}},e);var s=this,o=t("<div>",{"class":"slides-control"}),a=1;this.$el=t(n),this.$container=this.$el.find(this.options.elements.container);var r=function(){return a=s._findMultiplier(),s.$el.on("click",s.options.elements.nav+" a",function(i){i.preventDefault(),s.stop(),t(this).hasClass("next")?s.animate("next",function(){s.start()}):s.animate("prev",function(){s.start()})}),t(document).on("keyup",function(i){37===i.keyCode&&s.animate("prev"),39===i.keyCode&&s.animate("next")}),t(i).on("resize",function(){setTimeout(function(){var i=s.$container.children();s.width=s._findWidth(),s.height=s._findHeight(),i.css({width:s.width,left:s.width}),s.css.containers(),s.css.images()},10)}),t(i).on("hashchange",function(){var i,t=s._parseHash();i=t&&!isNaN(t)?s._upcomingSlide(t-1):s._upcomingSlide(t),i>=0&&i!==s.current&&s.animate(i)}),s.pagination._events(),s.start(),s},h={containers:function(){s.init?(s.$el.css({height:s.height}),s.$control.css({width:s.width*a,left:-s.width}),s.$container.css({})):(t("body").css({margin:0}),s.$el.css({overflow:"hidden",width:"100%",height:s.height}),s.$control.css({position:"relative",transform:"translate3d(0)",height:"100%",width:s.width*a,left:-s.width}),s.$container.css({display:"none",margin:"0",padding:"0",listStyle:"none",position:"relative",height:"100%"})),1===s.size()&&s.$el.find(s.options.elements.nav).hide()},images:function(){var i=s.$container.find("img").not(s.options.elements.preserve);i.removeAttr("width").removeAttr("height").css({"-webkit-backface-visibility":"hidden","-ms-interpolation-mode":"bicubic",position:"absolute",left:"0",top:"0","z-index":"-1","max-width":"none"}),i.each(function(){var i=s.image._aspectRatio(this),n=this;if(t.data(this,"processed"))s.image._scale(n,i),s.image._center(n,i);else{var e=new Image;e.onload=function(){s.image._scale(n,i),s.image._center(n,i),t.data(n,"processed",!0)},e.src=this.src}})},children:function(){var i=s.$container.children();i.is("img")&&(i.each(function(){if(t(this).is("img")){t(this).wrap("<div>");var i=t(this).attr("id");t(this).removeAttr("id"),t(this).parent().attr("id",i)}}),i=s.$container.children()),s.init||i.css({display:"none",left:2*s.width}),i.css({position:"absolute",overflow:"hidden",height:"100%",width:s.width,top:0,zIndex:0})}},c={slide:function(i,t){var n=s.$container.children(),e=n.eq(i.upcoming_slide);e.css({left:i.upcoming_position,display:"block"}),s.$control.animate({left:i.offset},s.options.animation_speed,s.options.animation_easing,function(){s.size()>1&&(s.$control.css({left:-s.width}),n.eq(i.upcoming_slide).css({left:s.width,zIndex:2}),i.outgoing_slide>=0&&n.eq(i.outgoing_slide).css({left:s.width,display:"none",zIndex:0})),t()})},fade:function(i,t){var n=this,e=n.$container.children(),s=e.eq(i.outgoing_slide),o=e.eq(i.upcoming_slide);o.css({left:this.width,opacity:1,display:"block"}),i.outgoing_slide>=0?s.animate({opacity:0},n.options.animation_speed,n.options.animation_easing,function(){n.size()>1&&(e.eq(i.upcoming_slide).css({zIndex:2}),i.outgoing_slide>=0&&e.eq(i.outgoing_slide).css({opacity:1,display:"none",zIndex:0})),t()}):(o.css({zIndex:2}),t())}};c=t.extend(c,t.fn.superslides.fx);var d={_centerY:function(i){var n=t(i);n.css({top:(s.height-n.height())/2})},_centerX:function(i){var n=t(i);n.css({left:(s.width-n.width())/2})},_center:function(i){s.image._centerX(i),s.image._centerY(i)},_aspectRatio:function(i){if(!i.naturalHeight&&!i.naturalWidth){var t=new Image;t.src=i.src,i.naturalHeight=t.height,i.naturalWidth=t.width}return i.naturalHeight/i.naturalWidth},_scale:function(i,n){n=n||s.image._aspectRatio(i);var e=s.height/s.width,o=t(i);e>n?o.css({height:s.height,width:s.height/n}):o.css({height:s.width*n,width:s.width})}},l={_setCurrent:function(i){if(s.$pagination){var t=s.$pagination.children();t.removeClass("current"),t.eq(i).addClass("current")}},_addItem:function(i){var n=i+1,e=n,o=s.$container.children().eq(i),a=o.attr("id");a&&(e=a);var r=t("<a>",{href:"#"+e,text:e});r.appendTo(s.$pagination)},_setup:function(){if(s.options.pagination&&1!==s.size()){var i=t("<nav>",{"class":s.options.elements.pagination.replace(/^\./,"")});s.$pagination=i.appendTo(s.$el);for(var n=0;s.size()>n;n++)s.pagination._addItem(n)}},_events:function(){s.$el.on("click",s.options.elements.pagination+" a",function(i){i.preventDefault();var t=s._parseHash(this.hash),n=s._upcomingSlide(t-1);n!==s.current&&s.animate(n,function(){s.start()})})}};return this.css=h,this.image=d,this.pagination=l,this.fx=c,this.animation=this.fx[this.options.animation],this.$control=this.$container.wrap(o).parent(".slides-control"),s._findPositions(),s.width=s._findWidth(),s.height=s._findHeight(),this.css.children(),this.css.containers(),this.css.images(),this.pagination._setup(),r()},n.prototype={_findWidth:function(){return t(this.options.inherit_width_from).width()},_findHeight:function(){return t(this.options.inherit_height_from).height()},_findMultiplier:function(){return 1===this.size()?1:3},_upcomingSlide:function(i){if(/next/.test(i))return this._nextInDom();if(/prev/.test(i))return this._prevInDom();if(/\d/.test(i))return+i;if(i&&/\w/.test(i)){var t=this._findSlideById(i);return t>=0?t:0}return 0},_findSlideById:function(i){return this.$container.find("#"+i).index()},_findPositions:function(i,t){t=t||this,void 0===i&&(i=-1),t.current=i,t.next=t._nextInDom(),t.prev=t._prevInDom()},_nextInDom:function(){var i=this.current+1;return i===this.size()&&(i=0),i},_prevInDom:function(){var i=this.current-1;return 0>i&&(i=this.size()-1),i},_parseHash:function(t){return t=t||i.location.hash,t=t.replace(/^#/,""),t&&!isNaN(+t)&&(t=+t),t},size:function(){return this.$container.children().length},destroy:function(){return this.$el.removeData()},update:function(){this.css.children(),this.css.containers(),this.css.images(),this.pagination._addItem(this.size()),this._findPositions(this.current),this.$el.trigger("updated.slides")},stop:function(){clearInterval(this.play_id),delete this.play_id,this.$el.trigger("stopped.slides")},start:function(){var n=this;n.options.hashchange?t(i).trigger("hashchange"):this.animate(),this.options.play&&(this.play_id&&this.stop(),this.play_id=setInterval(function(){n.animate()},this.options.play)),this.$el.trigger("started.slides")},animate:function(t,n){var e=this,s={};if(!(this.animating||(this.animating=!0,void 0===t&&(t="next"),s.upcoming_slide=this._upcomingSlide(t),s.upcoming_slide>=this.size()))){if(s.outgoing_slide=this.current,s.upcoming_position=2*this.width,s.offset=-s.upcoming_position,("prev"===t||s.outgoing_slide>t)&&(s.upcoming_position=0,s.offset=0),e.size()>1&&e.pagination._setCurrent(s.upcoming_slide),e.options.hashchange){var o=s.upcoming_slide+1,a=e.$container.children(":eq("+s.upcoming_slide+")").attr("id");i.location.hash=a?a:o}e.$el.trigger("animating.slides",[s]),e.animation(s,function(){e._findPositions(s.upcoming_slide,e),"function"==typeof n&&n(),e.animating=!1,e.$el.trigger("animated.slides"),e.init||(e.$el.trigger("init.slides"),e.init=!0,e.$container.fadeIn("fast"))})}}},t.fn[e]=function(i,s){var o=[];return this.each(function(){var a,r,h;return a=t(this),r=a.data(e),h="object"==typeof i&&i,r||(o=a.data(e,r=new n(this,h))),"string"==typeof i&&(o=r[i],"function"==typeof o)?o=o.call(r,s):void 0}),o},t.fn[e].fx={}})(this,jQuery);
/* -- jquery.validationEngine.js */
/*
 * Inline Form Validation Engine 2.6, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
(function($) {

    "use strict";

    var methods = {

        /**
         * Kind of the constructor, called before any action
         * @param {Map} user options
         */
        init: function(options) {
            var form = this;
            if (!form.data('jqv') || form.data('jqv') == null ) {
                options = methods._saveOptions(form, options);
                // bind all formError elements to close on click
                $(".formError").live("click", function() {
                    $(this).fadeOut(150, function() {
                        // remove prompt once invisible
                        $(this).parent('.formErrorOuter').remove();
                        $(this).remove();
                    });
                });
            }
            return this;
        },
        /**
         * Attachs jQuery.validationEngine to form.submit and field.blur events
         * Takes an optional params: a list of options
         * ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
         */
        attach: function(userOptions) {

            if(!$(this).is("form")) {
                alert("Sorry, jqv.attach() only applies to a form");
                return this;
            }

            var form = this;
            var options;

            if(userOptions)
                options = methods._saveOptions(form, userOptions);
            else
                options = form.data('jqv');

            options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
            if (options.binded) {

                // bind fields
                form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(options.validationEventTrigger, methods._onFieldEvent);
                form.find("["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]").bind("click", methods._onFieldEvent);
                form.find("["+options.validateAttribute+"*=validate][class*=datepicker]").bind(options.validationEventTrigger,{"delay": 300}, methods._onFieldEvent);
            }
            if (options.autoPositionUpdate) {
                $(window).bind("resize", {
                    "noAnimation": true,
                    "formElem": form
                }, methods.updatePromptsPosition);
            }
            // bind form.submit
            form.bind("submit", methods._onSubmitEvent);
            return this;
        },
        /**
         * Unregisters any bindings that may point to jQuery.validaitonEngine
         */
        detach: function() {

            if(!$(this).is("form")) {
                alert("Sorry, jqv.detach() only applies to a form");
                return this;
            }

            var form = this;
            var options = form.data('jqv');

            // unbind fields
            form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").unbind(options.validationEventTrigger, methods._onFieldEvent);
            form.find("["+options.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click", methods._onFieldEvent);

            // unbind form.submit
            form.unbind("submit", methods.onAjaxFormComplete);

            // unbind live fields (kill)
            form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").die(options.validationEventTrigger, methods._onFieldEvent);
            form.find("["+options.validateAttribute+"*=validate][type=checkbox]").die("click", methods._onFieldEvent);

            // unbind form.submit
            form.die("submit", methods.onAjaxFormComplete);
            form.removeData('jqv');

            if (options.autoPositionUpdate)
                $(window).unbind("resize", methods.updatePromptsPosition);

            return this;
        },
        /**
         * Validates either a form or a list of fields, shows prompts accordingly.
         * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
         *
         * @return true if the form validates, false if it fails
         */
        validate: function() {
            if($(this).is("form"))
                return methods._validateFields(this);
            else {
                // field validation
                var form = $(this).closest('form');
                var options = form.data('jqv');
                var r = methods._validateField($(this), options);

                if (options.onSuccess && options.InvalidFields.length == 0)
                    options.onSuccess();
                else if (options.onFailure && options.InvalidFields.length > 0)
                    options.onFailure();

                return r;
            }
        },
        /**
         *  Redraw prompts position, useful when you change the DOM state when validating
         */
        updatePromptsPosition: function(event) {

            if (event && this == window) {
                var form = event.data.formElem;
                var noAnimation = event.data.noAnimation;
            }
            else
                var form = $(this.closest('form'));

            var options = form.data('jqv');
            // No option, take default one
            form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
                var field = $(this);
                var prompt = methods._getPrompt(field);
                var promptText = $(prompt).find(".formErrorContent").html();

                if(prompt)
                    methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
            });
            return this;
        },
        /**
         * Displays a prompt on a element.
         * Note that the element needs an id!
         *
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
         */
        showPrompt: function(promptText, type, promptPosition, showArrow) {

            var form = this.closest('form');
            var options = form.data('jqv');
            // No option, take default one
            if(!options)
                options = methods._saveOptions(this, options);
            if(promptPosition)
                options.promptPosition=promptPosition;
            options.showArrow = showArrow==true;

            methods._showPrompt(this, promptText, type, false, options);
            return this;
        },
        /**
         * Closes form error prompts, CAN be invidual
         */
        hide: function() {
            var form = $(this).closest('form');
            var options = form.data('jqv');
            var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
            var closingtag;

            if($(this).is("form")) {
                closingtag = "parentForm"+methods._getClassName($(this).attr("id"));
            } else {
                closingtag = methods._getClassName($(this).attr("id")) +"formError";
            }
            $('.'+closingtag).fadeTo(fadeDuration, 0.3, function() {
                $(this).parent('.formErrorOuter').remove();
                $(this).remove();
            });
            return this;
        },
        /**
         * Closes all error prompts on the page
         */
        hideAll: function() {

            var form = this;
            var options = form.data('jqv');
            var duration = options ? options.fadeDuration:0.3;
            $('.formError').fadeTo(duration, 0.3, function() {
                $(this).parent('.formErrorOuter').remove();
                $(this).remove();
            });
            return this;
        },
        /**
         * Typically called when user exists a field using tab or a mouse click, triggers a field
         * validation
         */
        _onFieldEvent: function(event) {
            var field = $(this);
            var form = field.closest('form');
            var options = form.data('jqv');
            options.eventTrigger = "field";
            // validate the current field
            window.setTimeout(function() {
                methods._validateField(field, options);
                if (options.InvalidFields.length == 0 && options.onSuccess) {
                    options.onSuccess();
                } else if (options.InvalidFields.length > 0 && options.onFailure) {
                    options.onFailure();
                }
            }, (event.data) ? event.data.delay : 0);

        },
        /**
         * Called when the form is submited, shows prompts accordingly
         *
         * @param {jqObject}
         *            form
         * @return false if form submission needs to be cancelled
         */
        _onSubmitEvent: function() {
            var form = $(this);
            var options = form.data('jqv');
            options.eventTrigger = "submit";

            // validate each field
            // (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
            var r=methods._validateFields(form);

            if (r && options.ajaxFormValidation) {
                methods._validateFormWithAjax(form, options);
                // cancel form auto-submission - process with async call onAjaxFormComplete
                return false;
            }

            if(options.onValidationComplete) {
                // !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
                return !!options.onValidationComplete(form, r);
            }
            return r;
        },
        /**
         * Return true if the ajax field validations passed so far
         * @param {Object} options
         * @return true, is all ajax validation passed so far (remember ajax is async)
         */
        _checkAjaxStatus: function(options) {
            var status = true;
            $.each(options.ajaxValidCache, function(key, value) {
                if (!value) {
                    status = false;
                    // break the each
                    return false;
                }
            });
            return status;
        },

        /**
         * Return true if the ajax field is validated
         * @param {String} fieldid
         * @param {Object} options
         * @return true, if validation passed, false if false or doesn't exist
         */
        _checkAjaxFieldStatus: function(fieldid, options) {
            return options.ajaxValidCache[fieldid] == true;
        },
        /**
         * Validates form fields, shows prompts accordingly
         *
         * @param {jqObject}
         *            form
         * @param {skipAjaxFieldValidation}
         *            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
         *
         * @return true if form is valid, false if not, undefined if ajax form validation is done
         */
        _validateFields: function(form) {
            var options = form.data('jqv');

            // this variable is set to true if an error is found
            var errorFound = false;

            // Trigger hook, start validation
            form.trigger("jqv.form.validating");
            // first, evaluate status of non ajax fields
            var first_err=null;
            form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
                var field = $(this);
                var names = [];
                if ($.inArray(field.attr('name'), names) < 0) {
                    errorFound |= methods._validateField(field, options);
                    if (errorFound && first_err==null)
                        if (field.is(":hidden") && options.prettySelect)
                            first_err = field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
                        else
                            first_err=field;
                    if (options.doNotShowAllErrosOnSubmit)
                        return false;
                    names.push(field.attr('name'));

                    //if option set, stop checking validation rules after one error is found
                    if(options.showOneMessage == true && errorFound){
                        return false;
                    }
                }
            });

            // second, check to see if all ajax calls completed ok
            // errorFound |= !methods._checkAjaxStatus(options);

            // third, check status and scroll the container accordingly
            form.trigger("jqv.form.result", [errorFound]);

            if (errorFound) {
                if (options.scroll) {
                    var destination=first_err.offset().top;
                    var fixleft = first_err.offset().left;

                    //prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
                    var positionType=options.promptPosition;
                    if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
                        positionType=positionType.substring(0,positionType.indexOf(":"));

                    if (positionType!="bottomRight" && positionType!="bottomLeft") {
                        var prompt_err= methods._getPrompt(first_err);
                        destination=prompt_err.offset().top;
                    }

                    // get the position of the first error, there should be at least one, no need to check this
                    //var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
                    if (options.isOverflown) {
                        var overflowDIV = $(options.overflownDIV);
                        if(!overflowDIV.length) return false;
                        var scrollContainerScroll = overflowDIV.scrollTop();
                        var scrollContainerPos = -parseInt(overflowDIV.offset().top);

                        destination += scrollContainerScroll + scrollContainerPos - 5;
                        var scrollContainer = $(options.overflownDIV + ":not(:animated)");

                        scrollContainer.animate({ scrollTop: destination }, 1100, function(){
                            if(options.focusFirstField) first_err.focus();
                        });
                    } else {
                        $("html:not(:animated),body:not(:animated)").animate({
                            scrollTop: destination,
                            scrollLeft: fixleft
                        }, 1100, function(){
                            if(options.focusFirstField) first_err.focus();
                        });
                    }

                } else if(options.focusFirstField)
                    first_err.focus();
                return false;
            }
            return true;
        },
        /**
         * This method is called to perform an ajax form validation.
         * During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
         *
         * @param {jqObject} form
         * @param {Map} options
         */
        _validateFormWithAjax: function(form, options) {

            var data = form.serialize();
            var type = (options.ajaxmethod) ? options.ajaxmethod : "GET";
            var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
            var dataType = (options.dataType) ? options.dataType : "json";
            $.ajax({
                type: type,
                url: url,
                cache: false,
                dataType: dataType,
                data: data,
                form: form,
                methods: methods,
                options: options,
                beforeSend: function() {
                    return options.onBeforeAjaxFormValidation(form, options);
                },
                error: function(data, transport) {
                    methods._ajaxError(data, transport);
                },
                success: function(json) {
                    if ((dataType == "json") && (json !== true)) {
                        // getting to this case doesn't necessary means that the form is invalid
                        // the server may return green or closing prompt actions
                        // this flag helps figuring it out
                        var errorInForm=false;
                        for (var i = 0; i < json.length; i++) {
                            var value = json[i];

                            var errorFieldId = value[0];
                            var errorField = $($("#" + errorFieldId)[0]);

                            // make sure we found the element
                            if (errorField.length == 1) {

                                // promptText or selector
                                var msg = value[2];
                                // if the field is valid
                                if (value[1] == true) {

                                    if (msg == ""  || !msg){
                                        // if for some reason, status==true and error="", just close the prompt
                                        methods._closePrompt(errorField);
                                    } else {
                                        // the field is valid, but we are displaying a green prompt
                                        if (options.allrules[msg]) {
                                            var txt = options.allrules[msg].alertTextOk;
                                            if (txt)
                                                msg = txt;
                                        }
                                        methods._showPrompt(errorField, msg, "pass", false, options, true);
                                    }
                                } else {
                                    // the field is invalid, show the red error prompt
                                    errorInForm|=true;
                                    if (options.allrules[msg]) {
                                        var txt = options.allrules[msg].alertText;
                                        if (txt)
                                            msg = txt;
                                    }
                                    methods._showPrompt(errorField, msg, "", false, options, true);
                                }
                            }
                        }
                        options.onAjaxFormComplete(!errorInForm, form, json, options);
                    } else
                        options.onAjaxFormComplete(true, form, json, options);

                }
            });

        },
        /**
         * Validates field, shows prompts accordingly
         *
         * @param {jqObject}
         *            field
         * @param {Array[String]}
         *            field's validation rules
         * @param {Map}
         *            user options
         * @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
         */
        _validateField: function(field, options, skipAjaxValidation) {
            if (!field.attr("id")) {
                field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
                ++$.validationEngine.fieldIdCounter;
            }

            if (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden"))
                return false;

            var rulesParsing = field.attr(options.validateAttribute);
            var getRules = /validate\[(.*)\]/.exec(rulesParsing);

            if (!getRules)
                return false;
            var str = getRules[1];
            var rules = str.split(/\[|,|\]/);

            // true if we ran the ajax validation, tells the logic to stop messing with prompts
            var isAjaxValidator = false;
            var fieldName = field.attr("name");
            var promptText = "";
            var promptType = "";
            var required = false;
            options.isError = false;
            options.showArrow = true;

            var form = $(field.closest("form"));

            for (var i = 0; i < rules.length; i++) {
                // Fix for adding spaces in the rules
                rules[i] = rules[i].replace(" ", "");
                var errorMsg = undefined;
                switch (rules[i]) {

                    case "required":
                        required = true;
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
                        break;
                    case "custom":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
                        break;
                    case "groupRequired":
                        // Check is its the first of group, if not, reload validation with first field
                        // AND continue normal validation on present field
                        var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
                        var firstOfGroup = form.find(classGroup).eq(0);
                        if(firstOfGroup[0] != field[0]){
                            methods._validateField(firstOfGroup, options, skipAjaxValidation);
                            options.showArrow = true;
                            continue;
                        }
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
                        if(errorMsg)  required = true;
                        options.showArrow = false;
                        break;
                    case "ajax":
                        // AJAX defaults to returning it's loading message
                        errorMsg = methods._ajax(field, rules, i, options);
                        if (errorMsg) {
                            promptType = "load";
                        }
                        break;
                    case "minSize":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
                        break;
                    case "maxSize":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
                        break;
                    case "min":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
                        break;
                    case "max":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
                        break;
                    case "past":
                        errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
                        break;
                    case "future":
                        errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
                        break;
                    case "dateRange":
                        var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
                        options.firstOfGroup = form.find(classGroup).eq(0);
                        options.secondOfGroup = form.find(classGroup).eq(1);

                        //if one entry out of the pair has value then proceed to run through validation
                        if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
                            errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
                        }
                        if (errorMsg) required = true;
                        options.showArrow = false;
                        break;

                    case "dateTimeRange":
                        var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
                        options.firstOfGroup = form.find(classGroup).eq(0);
                        options.secondOfGroup = form.find(classGroup).eq(1);

                        //if one entry out of the pair has value then proceed to run through validation
                        if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
                            errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
                        }
                        if (errorMsg) required = true;
                        options.showArrow = false;
                        break;
                    case "maxCheckbox":
                        field = $(form.find("input[name='" + fieldName + "']"));
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
                        break;
                    case "minCheckbox":
                        field = $(form.find("input[name='" + fieldName + "']"));
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
                        break;
                    case "equals":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
                        break;
                    case "funcCall":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
                        break;
                    case "creditCard":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
                        break;
                    case "condRequired":
                        errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
                        if (errorMsg !== undefined) {
                            required = true;
                        }
                        break;

                    default:
                }
                if (errorMsg !== undefined) {
                    promptText += errorMsg + "<br/>";
                    options.isError = true;
                }
            }
            // If the rules required is not added, an empty field is not validated
            if(!required && field.val().length < 1) options.isError = false;

            // Hack for radio/checkbox group button, the validation go into the
            // first radio/checkbox of the group
            var fieldType = field.prop("type");

            if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
                field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
                options.showArrow = false;
            }

            if(field.is(":hidden") && options.prettySelect) {
                field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
            }

            if (options.isError){
                methods._showPrompt(field, promptText, promptType, false, options);
            }else{
                if (!isAjaxValidator) methods._closePrompt(field);
            }

            if (!isAjaxValidator) {
                field.trigger("jqv.field.result", [field, options.isError, promptText]);
            }

            /* Record error */
            var errindex = $.inArray(field[0], options.InvalidFields);
            if (errindex == -1) {
                if (options.isError)
                    options.InvalidFields.push(field[0]);
            } else if (!options.isError) {
                options.InvalidFields.splice(errindex, 1);
            }

            return options.isError;
        },
        /********************
         * _getErrorMessage
         *
         * @param form
         * @param field
         * @param rule
         * @param rules
         * @param i
         * @param options
         * @param originalValidationMethod
         * @return {*}
         * @private
         */
        _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
            // If we are using the custon validation type, build the index for the rule.
            // Otherwise if we are doing a function call, make the call and return the object
            // that is passed back.
            var beforeChangeRule = rule;
            if (rule == "custom") {
                var custom_validation_type_index = jQuery.inArray(rule, rules)+ 1;
                var custom_validation_type = rules[custom_validation_type_index];
                rule = "custom[" + custom_validation_type + "]";
            }
            var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
            var element_classes_array = element_classes.split(" ");

            // Call the original validation method. If we are dealing with dates, also pass the form
            var errorMsg;
            if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
                errorMsg = originalValidationMethod(form, field, rules, i, options);
            } else {
                errorMsg = originalValidationMethod(field, rules, i, options);
            }

            // If the original validation method returned an error and we have a custom error message,
            // return the custom message instead. Otherwise return the original error message.
            if (errorMsg != undefined) {
                var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, beforeChangeRule, options);
                if (custom_message) return custom_message;
            }
            return errorMsg;

        },
        _getCustomErrorMessage:function (field, classes, rule, options) {
            var custom_message = false;
            var validityProp = methods._validityProp[rule];
            if (validityProp != undefined) {
                custom_message = field.attr("data-errormessage-"+validityProp);
                if (custom_message != undefined)
                    return custom_message;
            }
            custom_message = field.attr("data-errormessage");
            if (custom_message != undefined)
                return custom_message;
            var id = '#' + field.attr("id");
            // If we have custom messages for the element's id, get the message for the rule from the id.
            // Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
            if (typeof options.custom_error_messages[id] != "undefined" &&
                typeof options.custom_error_messages[id][rule] != "undefined" ) {
                custom_message = options.custom_error_messages[id][rule]['message'];
            } else if (classes.length > 0) {
                for (var i = 0; i < classes.length && classes.length > 0; i++) {
                    var element_class = "." + classes[i];
                    if (typeof options.custom_error_messages[element_class] != "undefined" &&
                        typeof options.custom_error_messages[element_class][rule] != "undefined") {
                        custom_message = options.custom_error_messages[element_class][rule]['message'];
                        break;
                    }
                }
            }
            if (!custom_message &&
                typeof options.custom_error_messages[rule] != "undefined" &&
                typeof options.custom_error_messages[rule]['message'] != "undefined"){
                custom_message = options.custom_error_messages[rule]['message'];
            }
            return custom_message;
        },
        _validityProp: {
            "required": "value-missing",
            "custom": "custom-error",
            "groupRequired": "value-missing",
            "ajax": "custom-error",
            "minSize": "range-underflow",
            "maxSize": "range-overflow",
            "min": "range-underflow",
            "max": "range-overflow",
            "past": "type-mismatch",
            "future": "type-mismatch",
            "dateRange": "type-mismatch",
            "dateTimeRange": "type-mismatch",
            "maxCheckbox": "range-overflow",
            "minCheckbox": "range-underflow",
            "equals": "pattern-mismatch",
            "funcCall": "custom-error",
            "creditCard": "pattern-mismatch",
            "condRequired": "value-missing"
        },
        /**
         * Required validation
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _required: function(field, rules, i, options) {
            switch (field.prop("type")) {
                case "text":
                case "password":
                case "textarea":
                case "file":
                case "select-one":
                case "select-multiple":
                default:

                    if (! $.trim(field.val()) || field.val() == field.attr("data-validation-placeholder") || field.val() == field.attr("placeholder"))
                        return options.allrules[rules[i]].alertText;
                    break;
                case "radio":
                case "checkbox":
                    var form = field.closest("form");
                    var name = field.attr("name");
                    if (form.find("input[name='" + name + "']:checked").size() == 0) {
                        if (form.find("input[name='" + name + "']:visible").size() == 1)
                            return options.allrules[rules[i]].alertTextCheckboxe;
                        else
                            return options.allrules[rules[i]].alertTextCheckboxMultiple;
                    }
                    break;
            }
        },
        /**
         * Validate that 1 from the group field is required
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _groupRequired: function(field, rules, i, options) {
            var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
            var isValid = false;
            // Check all fields from the group
            field.closest("form").find(classGroup).each(function(){
                if(!methods._required($(this), rules, i, options)){
                    isValid = true;
                    return false;
                }
            });

            if(!isValid) {
                return options.allrules[rules[i]].alertText;
            }
        },
        /**
         * Validate rules
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _custom: function(field, rules, i, options) {
            var customRule = rules[i + 1];
            var rule = options.allrules[customRule];
            var fn;
            if(!rule) {
                alert("jqv:custom rule not found - "+customRule);
                return;
            }

            if(rule["regex"]) {
                var ex=rule.regex;
                if(!ex) {
                    alert("jqv:custom regex not found - "+customRule);
                    return;
                }
                var pattern = new RegExp(ex);

                if (!pattern.test(field.val())) return options.allrules[customRule].alertText;

            } else if(rule["func"]) {
                fn = rule["func"];

                if (typeof(fn) !== "function") {
                    alert("jqv:custom parameter 'function' is no function - "+customRule);
                    return;
                }

                if (!fn(field, rules, i, options))
                    return options.allrules[customRule].alertText;
            } else {
                alert("jqv:custom type not allowed "+customRule);
                return;
            }
        },
        /**
         * Validate custom function outside of the engine scope
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _funcCall: function(field, rules, i, options) {
            var functionName = rules[i + 1];
            var fn;
            if(functionName.indexOf('.') >-1)
            {
                var namespaces = functionName.split('.');
                var scope = window;
                while(namespaces.length)
                {
                    scope = scope[namespaces.shift()];
                }
                fn = scope;
            }
            else
                fn = window[functionName] || options.customFunctions[functionName];
            if (typeof(fn) == 'function')
                return fn(field, rules, i, options);

        },
        /**
         * Field match
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _equals: function(field, rules, i, options) {
            var equalsField = rules[i + 1];

            if (field.val() != $("#" + equalsField).val())
                return options.allrules.equals.alertText;
        },
        /**
         * Check the maximum size (in characters)
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _maxSize: function(field, rules, i, options) {
            var max = rules[i + 1];
            var len = field.val().length;

            if (len > max) {
                var rule = options.allrules.maxSize;
                return rule.alertText + max + rule.alertText2;
            }
        },
        /**
         * Check the minimum size (in characters)
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _minSize: function(field, rules, i, options) {
            var min = rules[i + 1];
            var len = field.val().length;

            if (len < min) {
                var rule = options.allrules.minSize;
                return rule.alertText + min + rule.alertText2;
            }
        },
        /**
         * Check number minimum value
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _min: function(field, rules, i, options) {
            var min = parseFloat(rules[i + 1]);
            var len = parseFloat(field.val());

            if (len < min) {
                var rule = options.allrules.min;
                if (rule.alertText2) return rule.alertText + min + rule.alertText2;
                return rule.alertText + min;
            }
        },
        /**
         * Check number maximum value
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _max: function(field, rules, i, options) {
            var max = parseFloat(rules[i + 1]);
            var len = parseFloat(field.val());

            if (len >max ) {
                var rule = options.allrules.max;
                if (rule.alertText2) return rule.alertText + max + rule.alertText2;
                //orefalo: to review, also do the translations
                return rule.alertText + max;
            }
        },
        /**
         * Checks date is in the past
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _past: function(form, field, rules, i, options) {

            var p=rules[i + 1];
            var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
            var pdate;

            if (p.toLowerCase() == "now") {
                pdate = new Date();
            } else if (undefined != fieldAlt.val()) {
                if (fieldAlt.is(":disabled"))
                    return;
                pdate = methods._parseDate(fieldAlt.val());
            } else {
                pdate = methods._parseDate(p);
            }
            var vdate = methods._parseDate(field.val());

            if (vdate > pdate ) {
                var rule = options.allrules.past;
                if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
                return rule.alertText + methods._dateToString(pdate);
            }
        },
        /**
         * Checks date is in the future
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _future: function(form, field, rules, i, options) {

            var p=rules[i + 1];
            var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
            var pdate;

            if (p.toLowerCase() == "now") {
                pdate = new Date();
            } else if (undefined != fieldAlt.val()) {
                if (fieldAlt.is(":disabled"))
                    return;
                pdate = methods._parseDate(fieldAlt.val());
            } else {
                pdate = methods._parseDate(p);
            }
            var vdate = methods._parseDate(field.val());

            if (vdate < pdate ) {
                var rule = options.allrules.future;
                if (rule.alertText2)
                    return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
                return rule.alertText + methods._dateToString(pdate);
            }
        },
        /**
         * Checks if valid date
         *
         * @param {string} date string
         * @return a bool based on determination of valid date
         */
        _isDate: function (value) {
            var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return dateRegEx.test(value);
        },
        /**
         * Checks if valid date time
         *
         * @param {string} date string
         * @return a bool based on determination of valid date time
         */
        _isDateTime: function (value){
            var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return dateTimeRegEx.test(value);
        },
        //Checks if the start date is before the end date
        //returns true if end is later than start
        _dateCompare: function (start, end) {
            return (new Date(start.toString()) < new Date(end.toString()));
        },
        /**
         * Checks date range
         *
         * @param {jqObject} first field name
         * @param {jqObject} second field name
         * @return an error string if validation failed
         */
        _dateRange: function (field, rules, i, options) {
            //are not both populated
            if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }

            //are not both dates
            if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }

            //are both dates but range is off
            if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
        },
        /**
         * Checks date time range
         *
         * @param {jqObject} first field name
         * @param {jqObject} second field name
         * @return an error string if validation failed
         */
        _dateTimeRange: function (field, rules, i, options) {
            //are not both populated
            if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
            //are not both dates
            if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
            //are both dates but range is off
            if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
        },
        /**
         * Max number of checkbox selected
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _maxCheckbox: function(form, field, rules, i, options) {

            var nbCheck = rules[i + 1];
            var groupname = field.attr("name");
            var groupSize = form.find("input[name='" + groupname + "']:checked").size();
            if (groupSize > nbCheck) {
                options.showArrow = false;
                if (options.allrules.maxCheckbox.alertText2)
                    return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
                return options.allrules.maxCheckbox.alertText;
            }
        },
        /**
         * Min number of checkbox selected
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _minCheckbox: function(form, field, rules, i, options) {

            var nbCheck = rules[i + 1];
            var groupname = field.attr("name");
            var groupSize = form.find("input[name='" + groupname + "']:checked").size();
            if (groupSize < nbCheck) {
                options.showArrow = false;
                return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
            }
        },
        /**
         * Checks that it is a valid credit card number according to the
         * Luhn checksum algorithm.
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _creditCard: function(field, rules, i, options) {
            //spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
            var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

            var numDigits = cardNumber.length;
            if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

                var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
                do {
                    digit = parseInt(cardNumber.charAt(i));
                    luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
                } while (--i >= 0)

                for (i = 0; i < luhn.length; i++) {
                    sum += parseInt(luhn.charAt(i));
                }
                valid = sum % 10 == 0;
            }
            if (!valid) return options.allrules.creditCard.alertText;
        },
        /**
         * Ajax field validation
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return nothing! the ajax validator handles the prompts itself
         */
        _ajax: function(field, rules, i, options) {

            var errorSelector = rules[i + 1];
            var rule = options.allrules[errorSelector];
            var extraData = rule.extraData;
            var extraDataDynamic = rule.extraDataDynamic;
            var data = {
                "fieldId" : field.attr("id"),
                "fieldValue" : field.val()
            };

            if (typeof extraData === "object") {
                $.extend(data, extraData);
            } else if (typeof extraData === "string") {
                var tempData = extraData.split("&");
                for(var i = 0; i < tempData.length; i++) {
                    var values = tempData[i].split("=");
                    if (values[0] && values[0]) {
                        data[values[0]] = values[1];
                    }
                }
            }

            if (extraDataDynamic) {
                var tmpData = [];
                var domIds = String(extraDataDynamic).split(",");
                for (var i = 0; i < domIds.length; i++) {
                    var id = domIds[i];
                    if ($(id).length) {
                        var inputValue = field.closest("form").find(id).val();
                        var keyValue = id.replace('#', '') + '=' + escape(inputValue);
                        data[id.replace('#', '')] = inputValue;
                    }
                }
            }

            // If a field change event triggered this we want to clear the cache for this ID
            if (options.eventTrigger == "field") {
                delete(options.ajaxValidCache[field.attr("id")]);
            }

            // If there is an error or if the the field is already validated, do not re-execute AJAX
            if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
                $.ajax({
                    type: options.ajaxFormValidationMethod,
                    url: rule.url,
                    cache: false,
                    dataType: "json",
                    data: data,
                    field: field,
                    rule: rule,
                    methods: methods,
                    options: options,
                    beforeSend: function() {},
                    error: function(data, transport) {
                        methods._ajaxError(data, transport);
                    },
                    success: function(json) {

                        // asynchronously called on success, data is the json answer from the server
                        var errorFieldId = json[0];
                        //var errorField = $($("#" + errorFieldId)[0]);
                        var errorField = $($("input[id='" + errorFieldId +"']")[0]);

                        // make sure we found the element
                        if (errorField.length == 1) {
                            var status = json[1];
                            // read the optional msg from the server
                            var msg = json[2];
                            if (!status) {
                                // Houston we got a problem - display an red prompt
                                options.ajaxValidCache[errorFieldId] = false;
                                options.isError = true;

                                // resolve the msg prompt
                                if(msg) {
                                    if (options.allrules[msg]) {
                                        var txt = options.allrules[msg].alertText;
                                        if (txt) {
                                            msg = txt;
                                        }
                                    }
                                }
                                else
                                    msg = rule.alertText;

                                methods._showPrompt(errorField, msg, "", true, options);
                            } else {
                                options.ajaxValidCache[errorFieldId] = true;

                                // resolves the msg prompt
                                if(msg) {
                                    if (options.allrules[msg]) {
                                        var txt = options.allrules[msg].alertTextOk;
                                        if (txt) {
                                            msg = txt;
                                        }
                                    }
                                }
                                else
                                    msg = rule.alertTextOk;

                                // see if we should display a green prompt
                                if (msg)
                                    methods._showPrompt(errorField, msg, "pass", true, options);
                                else
                                    methods._closePrompt(errorField);

                                // If a submit form triggered this, we want to re-submit the form
                                if (options.eventTrigger == "submit")
                                    field.closest("form").submit();
                            }
                        }
                        errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
                    }
                });

                return rule.alertTextLoad;
            }
        },
        /**
         * Common method to handle ajax errors
         *
         * @param {Object} data
         * @param {Object} transport
         */
        _ajaxError: function(data, transport) {
            if(data.status == 0 && transport == null)
                alert("The page is not served from a server! ajax call failed");
            else if(typeof console != "undefined")
                console.log("Ajax error: " + data.status + " " + transport);
        },
        /**
         * date -> string
         *
         * @param {Object} date
         */
        _dateToString: function(date) {
            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        },
        /**
         * Parses an ISO date
         * @param {String} d
         */
        _parseDate: function(d) {

            var dateParts = d.split("-");
            if(dateParts==d)
                dateParts = d.split("/");
            return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
        },
        /**
         * Builds or updates a prompt with the given information
         *
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
            var prompt = methods._getPrompt(field);
            // The ajax submit errors are not see has an error in the form,
            // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
            // Because no error was found befor submitting
            if(ajaxform) prompt = false;
            if (prompt)
                methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
            else
                methods._buildPrompt(field, promptText, type, ajaxed, options);
        },
        /**
         * Builds and shades a prompt for the given field.
         *
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _buildPrompt: function(field, promptText, type, ajaxed, options) {

            // create the prompt
            var prompt = $('<div>');
            prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
            // add a class name to identify the parent form of the prompt
            prompt.addClass("parentForm"+methods._getClassName(field.parents('form').attr("id")));
            prompt.addClass("formError");

            switch (type) {
                case "pass":
                    prompt.addClass("greenPopup");
                    break;
                case "load":
                    prompt.addClass("blackPopup");
                    break;
                default:
                /* it has error  */
                //alert("unknown popup type:"+type);
            }
            if (ajaxed)
                prompt.addClass("ajaxed");

            // create the prompt content
            var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);
            // create the css arrow pointing at the field
            // note that there is no triangle on max-checkbox and radio
            if (options.showArrow) {
                var arrow = $('<div>').addClass("formErrorArrow");

                //prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
                var positionType=field.data("promptPosition") || options.promptPosition;
                if (typeof(positionType)=='string')
                {
                    var pos=positionType.indexOf(":");
                    if(pos!=-1)
                        positionType=positionType.substring(0,pos);
                }

                switch (positionType) {
                    case "bottomLeft":
                    case "bottomRight":
                        prompt.find(".formErrorContent").before(arrow);
                        arrow.addClass("formErrorArrowBottom");
                        break;
                    case "topLeft":
                    case "topRight":
                        prompt.append(arrow);
                        break;
                }
            }
            // Modify z-indexes  for jquery ui
            if (field.closest('.ui-dialog').length)
                prompt.addClass('formErrorInsideDialog');

            prompt.css({
                "opacity": 0,
                'position':'absolute'
            });
            field.before(prompt);

            var pos = methods._calculatePosition(field, prompt, options);
            prompt.css({
                "top": pos.callerTopPosition,
                "left": pos.callerleftPosition,
                "marginTop": pos.marginTopSize,
                "opacity": 0
            }).data("callerField", field);

            if (options.autoHidePrompt) {
                setTimeout(function(){
                    prompt.animate({
                        "opacity": 0
                    },function(){
                        prompt.closest('.formErrorOuter').remove();
                        prompt.remove();
                    });
                }, options.autoHideDelay);
            }
            return prompt.animate({
                "opacity": 0.87
            });
        },
        /**
         * Updates the prompt text field - the field for which the prompt
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

            if (prompt) {
                if (typeof type !== "undefined") {
                    if (type == "pass")
                        prompt.addClass("greenPopup");
                    else
                        prompt.removeClass("greenPopup");

                    if (type == "load")
                        prompt.addClass("blackPopup");
                    else
                        prompt.removeClass("blackPopup");
                }
                if (ajaxed)
                    prompt.addClass("ajaxed");
                else
                    prompt.removeClass("ajaxed");

                prompt.find(".formErrorContent").html(promptText);

                var pos = methods._calculatePosition(field, prompt, options);
                var css = {"top": pos.callerTopPosition,
                    "left": pos.callerleftPosition,
                    "marginTop": pos.marginTopSize};

                if (noAnimation)
                    prompt.css(css);
                else
                    prompt.animate(css);
            }
        },
        /**
         * Closes the prompt associated with the given field
         *
         * @param {jqObject}
         *            field
         */
        _closePrompt: function(field) {
            var prompt = methods._getPrompt(field);
            if (prompt)
                prompt.fadeTo("fast", 0, function() {
                    prompt.parent('.formErrorOuter').remove();
                    prompt.remove();
                });
        },
        closePrompt: function(field) {
            return methods._closePrompt(field);
        },
        /**
         * Returns the error prompt matching the field if any
         *
         * @param {jqObject}
         *            field
         * @return undefined or the error prompt (jqObject)
         */
        _getPrompt: function(field) {
            var formId = $(field).closest('form').attr('id');
            var className = methods._getClassName(field.attr("id")) + "formError";
            var match = $("." + methods._escapeExpression(className) + '.parentForm' + formId)[0];
            if (match)
                return $(match);
        },
        /**
         * Returns the escapade classname
         *
         * @param {selector}
         *            className
         */
        _escapeExpression: function (selector) {
            return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
        },
        /**
         * returns true if we are in a RTLed document
         *
         * @param {jqObject} field
         */
        isRTL: function(field)
        {
            var $document = $(document);
            var $body = $('body');
            var rtl =
                (field && field.hasClass('rtl')) ||
                    (field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
                    $document.hasClass('rtl') ||
                    ($document.attr('dir') || '').toLowerCase()==='rtl' ||
                    $body.hasClass('rtl') ||
                    ($body.attr('dir') || '').toLowerCase()==='rtl';
            return Boolean(rtl);
        },
        /**
         * Calculates prompt position
         *
         * @param {jqObject}
         *            field
         * @param {jqObject}
         *            the prompt
         * @param {Map}
         *            options
         * @return positions
         */
        _calculatePosition: function (field, promptElmt, options) {

            var promptTopPosition, promptleftPosition, marginTopSize;
            var fieldWidth 	= field.width();
            var fieldLeft 	= field.position().left;
            var fieldTop 	=  field.position().top + 50;
            var fieldHeight 	=  field.height();
            var promptHeight = promptElmt.height();


            // is the form contained in an overflown container?
            promptTopPosition = promptleftPosition = 0;
            // compensation for the arrow
            marginTopSize = -promptHeight;


            //prompt positioning adjustment support
            //now you can adjust prompt position
            //usage: positionType:Xshift,Yshift
            //for example:
            //   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
            //   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
            //You can use +pixels, - pixels. If no sign is provided than + is default.
            var positionType=field.data("promptPosition") || options.promptPosition;
            var shift1="";
            var shift2="";
            var shiftX=0;
            var shiftY=0;
            if (typeof(positionType)=='string') {
                //do we have any position adjustments ?
                if (positionType.indexOf(":")!=-1) {
                    shift1=positionType.substring(positionType.indexOf(":")+1);
                    positionType=positionType.substring(0,positionType.indexOf(":"));

                    //if any advanced positioning will be needed (percents or something else) - parser should be added here
                    //for now we use simple parseInt()

                    //do we have second parameter?
                    if (shift1.indexOf(",") !=-1) {
                        shift2=shift1.substring(shift1.indexOf(",") +1);
                        shift1=shift1.substring(0,shift1.indexOf(","));
                        shiftY=parseInt(shift2);
                        if (isNaN(shiftY)) shiftY=0;
                    };

                    shiftX=parseInt(shift1);
                    if (isNaN(shift1)) shift1=0;

                };
            };


            switch (positionType) {
                default:
                case "topRight":
                    promptleftPosition +=  fieldLeft + fieldWidth - 90;
                    promptTopPosition +=  fieldTop;
                    break;

                case "topLeft":
                    promptTopPosition +=  fieldTop;
                    promptleftPosition += fieldLeft;
                    break;

                case "centerRight":
                    promptTopPosition = fieldTop+4;
                    marginTopSize = 0;
                    promptleftPosition= fieldLeft + field.outerWidth(true)+5;
                    break;
                case "centerLeft":
                    promptleftPosition = fieldLeft - (promptElmt.width() + 2);
                    promptTopPosition = fieldTop+4;
                    marginTopSize = 0;

                    break;

                case "bottomLeft":
                    promptTopPosition = fieldTop + field.height() + 5;
                    marginTopSize = 0;
                    promptleftPosition = fieldLeft;
                    break;
                case "bottomRight":
                    promptleftPosition = fieldLeft + fieldWidth - 30;
                    promptTopPosition =  fieldTop +  field.height() + 5;
                    marginTopSize = 0;
            };



            //apply adjusments if any
            promptleftPosition += shiftX;
            promptTopPosition  += shiftY;

            return {
                "callerTopPosition": promptTopPosition + "px",
                "callerleftPosition": promptleftPosition + "px",
                "marginTopSize": marginTopSize + "px"
            };
        },
        /**
         * Saves the user options and variables in the form.data
         *
         * @param {jqObject}
         *            form - the form where the user option should be saved
         * @param {Map}
         *            options - the user options
         * @return the user options (extended from the defaults)
         */
        _saveOptions: function(form, options) {

            // is there a language localisation ?
            if ($.validationEngineLanguage)
                var allRules = $.validationEngineLanguage.allRules;
            else
                $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            // --- Internals DO NOT TOUCH or OVERLOAD ---
            // validation rules and i18
            $.validationEngine.defaults.allrules = allRules;

            var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

            form.data('jqv', userOptions);
            return userOptions;
        },

        /**
         * Removes forbidden characters from class name
         * @param {String} className
         */
        _getClassName: function(className) {
            if(className)
                return className.replace(/:/g, "_").replace(/\./g, "_");
        },

        /**
         * Conditionally required field
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         * user options
         * @return an error string if validation failed
         */
        _condRequired: function(field, rules, i, options) {
            var idx, dependingField;

            for(idx = (i + 1); idx < rules.length; idx++) {
                dependingField = jQuery("#" + rules[idx]).first();

                /* Use _required for determining wether dependingField has a value.
                 * There is logic there for handling all field types, and default value; so we won't replicate that here
                 */
                if (dependingField.length && methods._required(dependingField, ["required"], 0, options) == undefined) {
                    /* We now know any of the depending fields has a value,
                     * so we can validate this field as per normal required code
                     */
                    return methods._required(field, ["required"], 0, options);
                }
            }
        }
    };

    /**
     * Plugin entry point.
     * You may pass an action as a parameter or a list of options.
     * if none, the init and attach methods are being called.
     * Remember: if you pass options, the attached method is NOT called automatically
     *
     * @param {String}
     *            method (optional) action
     */
    $.fn.validationEngine = function(method) {

        var form = $(this);
        if(!form[0]) return form;  // stop here if the form does not exist

        if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

            // make sure init is called once
            if(method != "showPrompt" && method != "hide" && method != "hideAll")
                methods.init.apply(form);

            return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method == 'object' || !method) {

            // default constructor with or without arguments
            methods.init.apply(form, arguments);
            return methods.attach.apply(form);
        } else {
            $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
        }
    };



    // LEAK GLOBAL OPTIONS
    $.validationEngine= {fieldIdCounter: 0,defaults:{

        // Name of the event triggering field validation
        validationEventTrigger: "blur",
        // Automatically scroll viewport to the first error
        scroll: true,
        // Focus on the first input
        focusFirstField:true,
        // Opening box position, possible locations are: topLeft,
        // topRight, bottomLeft, centerRight, bottomRight
        promptPosition: "topRight",
        bindMethod:"bind",
        // internal, automatically set to true when it parse a _ajax rule
        inlineAjax: false,
        // if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
        ajaxFormValidation: false,
        // The url to send the submit ajax validation (default to action)
        ajaxFormValidationURL: false,
        // HTTP method used for ajax validation
        ajaxFormValidationMethod: 'get',
        // Ajax form validation callback method: boolean onComplete(form, status, errors, options)
        // retuns false if the form.submit event needs to be canceled.
        onAjaxFormComplete: $.noop,
        // called right before the ajax call, may return false to cancel
        onBeforeAjaxFormValidation: $.noop,
        // Stops form from submitting and execute function assiciated with it
        onValidationComplete: false,

        // Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
        doNotShowAllErrosOnSubmit: false,
        // Object where you store custom messages to override the default error messages
        custom_error_messages:{},
        // true if you want to vind the input fields
        binded: true,
        // set to true, when the prompt arrow needs to be displayed
        showArrow: true,
        // did one of the validation fail ? kept global to stop further ajax validations
        isError: false,
        // Caches field validation status, typically only bad status are created.
        // the array is used during ajax form validation to detect issues early and prevent an expensive submit
        ajaxValidCache: {},
        // Auto update prompt position after window resize
        autoPositionUpdate: false,

        InvalidFields: [],
        onSuccess: false,
        onFailure: false,
        // Auto-hide prompt
        autoHidePrompt: false,
        // Delay before auto-hide
        autoHideDelay: 10000,
        // Fade out duration while hiding the validations
        fadeDuration: 0.3,
        // Use Prettify select library
        prettySelect: false,
        // Custom ID uses prefix
        usePrefix: "",
        // Custom ID uses suffix
        useSuffix: "",
        // Only show one message per error prompt
        showOneMessage: false
    }};
    $(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);



/* -- jquery.validationEngine-fr.js */
(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": {
                    "regex": "none",
                    "alertText": "Champ obligatoire",
                    "alertTextCheckboxMultiple": "* Choisir une option",
                    "alertTextCheckboxe": "* Cette option est requise"
                },
                "requiredInFunction": {
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " caractГЁres requis"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* Vous devez remplir un des champs suivant"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " caractГЁres requis"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Valeur minimum requise "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Valeur maximum requise "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date antГ©rieure au "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date postГ©rieure au "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Nombre max de choix excГ©dГ©"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Veuillez choisir ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Votre champ n'est pas identique"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* NumГ©ro de carte bancaire valide"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* NumГ©ro de tГ©lГ©phone invalide"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Adresse email invalide"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Nombre entier invalide"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Nombre flottant invalide"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Date invalide, format YYYY-MM-DD requis"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Adresse IP invalide"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL invalide"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Seuls les chiffres sont acceptГ©s"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\u00C0-\u00D6\u00D9-\u00F6\u00F9-\u00FD\ \']+$/,
                    "alertText": "* Seules les lettres sont acceptГ©es"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z\u00C0-\u00D6\u00D9-\u00F6\u00F9-\u00FD]+$/,
                    "alertText": "* Aucun caractГЁre spГ©cial n'est acceptГ©"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    "extraData": "name=eric",
                    "alertTextLoad": "* Chargement, veuillez attendre",
                    "alertText": "* Ce nom est dГ©jГ  pris"
                },
                "ajaxNameCall": {
                    "url": "ajaxValidateFieldName",
                    "alertText": "* Ce nom est dГ©jГ  pris",
                    "alertTextOk": "*Ce nom est disponible",
                    "alertTextLoad": "* Chargement, veuillez attendre"
                },
                "validate2fields": {
                    "alertText": "Veuillez taper le mot HELLO"
                }
            };
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);
/* -- jquery.form.min.js */
/*
 * jQuery Form Plugin; v20130731
 * http://jquery.malsup.com/form/
 * Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
 * https://github.com/malsup/form#copyright-and-license
 */
;(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=n,l&&l.call(this,e,t)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(D),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",d),u||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(k)},m.timeout));var o=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(e.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(w)[0]));m.iframeTarget||(v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1)),setTimeout(t,15);try{w.submit()}catch(c){var p=document.createElement("form").submit;p.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=D),t===k&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==D&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var l=(m.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(c){var d=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];d?x.responseText=d.textContent?d.textContent:d.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==l&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,l,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),p&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),p&&e.event.trigger("ajaxError",[x,m,r])),p&&e.event.trigger("ajaxComplete",[x,m]),p&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget||v.remove(),x.responseXML=null},100)}}}var l,c,m,p,d,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;h.length>c;c++)l=e(h[c]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,d="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?d=y:v.attr2("name",d)):(v=e('<iframe name="'+d+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),p&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},p=m.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var k=1,D=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var d,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,d=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,p);d&&(g=g?g+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e('input[type=file]:enabled:not([value=""])',this),w=j.length>0,S="multipart/form-data",k=f.attr("enctype")==S||f.attr("encoding")==S,D=n.fileapi&&n.formdata;a("fileAPI :"+D);var A,L=(w||k)&&!D;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||k)&&D?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;h.length>E;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,l,c,f,m,p;for(s=0,m=o.length;m>s;s++)if(f=o[s],l=f.name,l&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:l,value:e(f).val(),type:f.type}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}));else if(c=e.fieldValue(f,!0),c&&c.constructor==Array)for(r&&r.push(f),u=0,p=c.length;p>u;u++)a.push({name:l,value:c[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var d=f.files;if(d.length)for(u=0;d.length>u;u++)a.push({name:l,value:d[u],type:f.type});else a.push({name:l,value:"",type:f.type})}else null!==c&&c!==void 0&&(r&&r.push(f),a.push({name:l,value:c,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];l=v.name,l&&!v.disabled&&"image"==v.type&&(a.push({name:l,value:h.val()}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var p=m.value;if(p||(p=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1})("undefined"!=typeof jQuery?jQuery:window.Zepto);
/* -- scrolltoplugin.min.js */
/*!
 * VERSION: beta 1.7.0
 * DATE: 2013-02-27
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,s){var r="x"===s?"Width":"Height",n="scroll"+r,a="client"+r,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-Math.max(t[a],o[a]):i[n]-i["offset"+r]},s=window._gsDefine.plugin({propName:"scrollTo",API:2,init:function(t,s,r){return this._wdw=t===e,this._target=t,this._tween=r,"object"!=typeof s&&(s={y:s}),this._autoKill=s.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=s.x?this._addTween(this,"x",this.x,"max"===s.x?i(t,"x"):s.x,"scrollTo_x",!0):this.skipX=!0,null!=s.y?this._addTween(this,"y",this.y,"max"===s.y?i(t,"y"):s.y,"scrollTo_y",!0):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var i=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,r=s-this.yPrev,n=i-this.xPrev;this._autoKill&&(!this.skipX&&(n>7||-7>n)&&(this.skipX=!0),!this.skipY&&(r>7||-7>r)&&(this.skipY=!0),this.skipX&&this.skipY&&this._tween.kill()),this._wdw?e.scrollTo(this.skipX?i:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),r=s.prototype;s.max=i,r.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},r.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},r._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),window._gsDefine&&window._gsQueue.pop()();
/* -- utils.js */
(function(){var v,w={}.hasOwnProperty,x=Epoc,c=function(){return v=c.__super__.constructor.apply(this,arguments)},p,q,r,s,k,j,m,n,t,f=c,g=Backbone.View,u=function(){this.constructor=f},l;for(l in g)w.call(g,l)&&(f[l]=g[l]);u.prototype=g.prototype;f.prototype=new u;f.__super__=g.prototype;n=[];m=[];k=!1;t=$("#wrapper");j=$(".rotated.prev, .rotated.next");s=$(".offers.fullscreen_gallery");c.prototype.el="body";c.prototype.events={"click #main_menu a, .toggle_contact, .toggle_achievements, .scroll_to":"navigate_to",
    "click .toggle_offer_pic":"toggle_offer_pic","click .toggle_menu, .toggle_menu i":"toggle_menu","mouseenter #wrapper>section":"wrapper_fade","mouseleave #wrapper>section":"wrapper_fade"};c.prototype.wrapper_fade=function(a){this.$el.find("#video_mask .darken ");return"mouseleave"===a.type?Epoc.video_view.fadein():Epoc.video_view.fadeout()};c.prototype.initialize=function(){var a=this;this.diving=$("#diving");this.diving_depth=$("#depth");this.header=$("#header");this.timer="";this.video_bg=$("#video_bg");
    document.addEventListener?document.addEventListener("touchstart",function(){},!0):document.attachEvent("touchstart",function(){},!0);$.ajaxSetup({cache:!1});this.add_animated_bg_to_btn_input();this.social_share();this.d_height=$(document).height();$(".section_hash").each(function(){var a;a=$(this);n.push(a.attr("id"));return m.push(a.offset().top)});$(window).on("scroll",function(){return a.deep_diving()});return $(window).on("resize",function(){var b,h,d,e;e=$(window).width();d=$(window).height();
        b=$(document).height();h=16/9;t.css({width:e,height:b});Epoc.BaseView.inf_1280=1280>=e;Epoc.BaseView.inf_560=560>=e;$(".section_hash").each(function(){var a;a=$(this);return a.outerHeight()<d-58?a.attr("data-force-scrolling",!0):a.attr("data-force-scrolling",!1)});a.fullscreen_video(d,e,h);return a.sections_fill_height(d)}).triggerHandler("resize")};c.prototype.add_animated_bg_to_btn_input=function(){return $("input.btn").after('<div class="bg_anim">&nbsp;</div><div class="bg_color">&nbsp;</div>')};
    c.prototype.navigate_to=function(a){var b;a.preventDefault();a.stopPropagation();b=$(a.currentTarget);a=b.attr("href").replace(RegExp("[/]+$","g"),"");Epoc.BaseView.inf_560&&Epoc.menu_view.hide_menu();if(b.hasClass("active"))return!1;s.hasClass("active")&&this.toggle_offer_pic();if("#"!==a)return _gaq.push(["_trackPageview",a]),Epoc.app.navigate(a,{trigger:!0})};c.prototype.toggle_offer_pic=function(a){var b=this;a&&(a.preventDefault(),a.stopPropagation());this.offers=$("#offers").show();this.offers_header=
        this.offers.find("header");if(this.offers.hasClass("active"))return TweenMax.to(this.offers_header,0.2,{css:{left:"-130px"},ease:Quart.easeInOut,onComplete:function(){return TweenMax.to(b.offers,0.4,{css:{top:"100%"},ease:Quart.easeInOut,onComplete:function(){return b.offers.removeClass("active")}})}});a="/o/d:main/"+$(a.target).closest("li").attr("data-id");this.offers.css({backgroundImage:"url("+a+")"});return TweenMax.to(this.offers,0.4,{css:{top:"0%"},ease:Quart.easeInOut,onComplete:function(){b.offers.addClass("active");
        return TweenMax.to(b.offers_header,0.2,{css:{left:"280px"},ease:Quart.easeInOut})}})};c.prototype.toggle_menu=function(a){null==a&&(a=!1);a&&a.preventDefault();return this.header.hasClass("shown")?Epoc.menu_view.hide_menu():Epoc.menu_view.show_menu()};c.prototype.hide_menu=function(){var a=this;return TweenMax.to(this.header,0.2,{css:{left:"-300px"},ease:Quart.easeInOut,onComplete:function(){return a.header.removeClass("shown")}})};c.prototype.show_menu=function(){var a=this;return TweenMax.to(this.header,
        0.2,{css:{left:"0"},ease:Quart.easeInOut,onComplete:function(){return a.header.addClass("shown")}})};c.prototype.deep_diving=function(){var a,b;b=$(window).scrollTop();a=parseInt(b/100);0<a?this.diving_depth.text(a):this.diving_depth.text(0);a="0px "+-parseInt(b/25)+"px";return $("#diving").css({backgroundPosition:a})};q=function(a){a=1280<$(window).width()?a.offset().top:a.offset().top-60;return TweenMax.to(window,0.5,{scrollTo:{y:a},ease:Strong.easeInOut,onComplete:function(){return j.removeClass("transparent disabled")}})};
    p=function(a,b,h){var d;d=this;Epoc.BaseView.inf_560||j.addClass("transparent");clearTimeout(this.timer);return this.timer=setTimeout(function(){if(!1===k)return r.call(d,a,b,h);clearTimeout(this.timer);j.removeClass("transparent");return k=!1},150)};r=function(a,b,h){var d,e,c,g,f;e=a.currentTarget.scrollY;e||(e=document.documentElement.scrollTop);k=!0;f=[];a=c=0;for(g=h.length;c<g;a=++c)if(d=h[a],d>e-800&&d<e+this.d_height){"true"===$("#"+b[a]).attr("data-force-scrolling")&&!$("html").hasClass("lt-ie9")?
        q($("#"+b[a])):(j.removeClass("transparent disabled"),"wrapper"===b[a]?$('.rotated.scroll_to[href="/"]').addClass("transparent disabled"):$('.rotated.scroll_to[href="/fre/'+b[a]+'"]').addClass("transparent disabled"));Epoc.video_view.switch_seq(b[a]);$(".section_hash").removeClass("look_hover");$("#"+b[a]).addClass("look_hover");break}else f.push(void 0);return f};c.prototype.select_menu_item=function(a){this.$el.find("#main_menu a.active").removeClass("active");return $("#main_menu a[href="+a.replace(RegExp("[/]",
        "g"),"\\/")+"]").addClass("active")};c.prototype.sections_fill_height=function(a){var b=this;$(window).on("scroll DOMMouseScroll mousewheel keyup",function(a){return p.call(b,a,n,m)});return $("article.section_hash").each(function(){var b,d;d=$(this);if(d.outerHeight()<a-58)return b=a-d.outerHeight(),d.next(".sep_vertical").css({paddingBottom:b}),d.attr("data-force-scrolling",!0);d.next(".sep_vertical").css({paddingBottom:0});return d.attr("data-force-scrolling",!1)})};c.prototype.fullscreen_video=
        function(a,b,c){return b/a<c?this.video_bg.css("top",0).css("left",-(a*c-b)/2).css("width",a*c).css("height",a):this.video_bg.css("width",b+20).css("height",b/c+20).css("top",-(b/c-a)/2).css("left",0)};c.prototype.social_share=function(){var a,b,c,d;c=encodeURIComponent($('meta[property="og:title"]').attr("content"));a=encodeURIComponent($('meta[property="og:description"]').attr("content"));d=encodeURIComponent($('meta[property="og:url"]').attr("content"));b=encodeURIComponent($('meta[property="og:image"]').attr("content"));
        $(".fb").on("click",function(e){e.preventDefault();return window.open("http://www.facebook.com/sharer.php?s=100&p[title]="+c+"&p[summary]="+a+"&p[url]="+d+"&p[images][0]="+b+"&t="+c+"&e="+a,"sharer","toolbar=0,status=0,width=626,height=436")});$(".tw").on("click",function(b){b.preventDefault();return window.open("http://twitter.com/intent/tweet?original_referer=webclient&text="+a+"&url="+d+"","sharer","toolbar=0,status=0,width=626,height=260")});$(".gp").on("click",function(a){a.preventDefault();
            return window.open("https://plusone.google.com/_/+1/confirm?hl=fr&url="+d+"&title="+c,"sharer","toolbar=0,status=0,width=600,height=330")});return $(".in").on("click",function(b){b.preventDefault();return window.open("http://www.linkedin.com/shareArticle?mini=true&url="+d+"&title="+c+"&summary="+a,"sharer","toolbar=0,status=0,width=600,height=410")})};x.BaseView=c}).call(this);

/* -- slideshow.js */
(function(){var q,r={}.hasOwnProperty,s=Epoc,d=function(){return q=d.__super__.constructor.apply(this,arguments)},m,n,j,g,k=d,h=Epoc.BaseView,p=function(){this.constructor=k},l;for(l in h)r.call(h,l)&&(k[l]=h[l]);p.prototype=h.prototype;k.prototype=new p;k.__super__=h.prototype;d.prototype.el="#offers_slideshow";d.prototype.initialize=function(){this.slides=this.$el.find(".slides");this.next=this.$el.find("#offers_nav_next");this.prev=this.$el.find("#offers_nav_prev");this.count_slides=this.slides.find("section").length;
    this.start_slide=1;this.$el.addClass("active");return this.render()};d.prototype.render=function(){this.slides.find("section:lt("+(this.start_slide-1)+")").detach().appendTo(this.slides);this.next.find("li:gt("+(this.start_slide+1)+")").detach().prependTo(this.next.find("ul"));this.prev.find("li:lt("+this.start_slide+")").detach().appendTo(this.prev.find("ul"));return j.call(this)};d.prototype.move=function(a){var c,b=this;c=0<a?"next":"prev";a=Math.abs(a);if("next"===c)return n.call(this,this.slides.find("section:first")),
    m.call(this,this.slides.find("section:eq("+(this.count_slides-a)+")")),this.slides.find("section:gt(0)").detach().prependTo(this.slides),this.slides.find("section:first").css({marginTop:-2E3}),TweenMax.to(this.slides.find("section:first"),1,{css:{marginTop:"+="+500*a},ease:Strong.easeOut,onComplete:function(){b.slides.find("section").css({marginTop:""});b.slides.find("section:lt("+(b.count_slides-a-1)+")").detach().appendTo(b.slides);Epoc.video_view.switch_seq(b.slides.find("section:first").attr("data-target-categ"));
    return j.call(b)}}),this.next.find("li:gt(1)").detach().prependTo(this.next.find("ul")),this.next.find("li:first").css({marginTop:-493}),TweenMax.to(this.next.find("li:first"),1,{css:{marginTop:"+="+165*a},ease:Strong.easeOut,onComplete:function(){b.next.find("li").css({marginTop:""});return b.next.find("li:lt("+(b.count_slides-a-2)+")").detach().appendTo(b.next.find("ul"))}}),this.prev.find("li:gt(1)").detach().prependTo(this.prev.find("ul")),this.prev.find("li:first").css({marginTop:-493}),TweenMax.to(this.prev.find("li:first"),
    1,{css:{marginTop:"+="+164*a},ease:Strong.easeOut,onComplete:function(){b.prev.find("li").css({marginTop:""});return b.prev.find("li:lt("+(b.count_slides-a-2)+")").detach().appendTo(b.prev.find("ul"))}});n.call(this,this.slides.find("section:first"));m.call(this,this.slides.find("section:eq("+a+")"));TweenMax.to(this.slides.find("section:first"),1,{css:{marginTop:"-="+500*a},ease:Strong.easeOut,onComplete:function(){b.slides.find("section").css({marginTop:""});b.slides.find("section:lt("+a+")").detach().appendTo(b.slides);
    Epoc.video_view.switch_seq(b.slides.find("section:first").attr("data-target-categ"));return j.call(b)}});TweenMax.to(this.next.find("li:first"),1,{css:{marginTop:"-="+164*a},ease:Strong.easeOut,onComplete:function(){b.next.find("li").css({marginTop:""});return b.next.find("li:lt("+a+")").detach().appendTo(b.next.find("ul"))}});return TweenMax.to(this.prev.find("li:first"),1,{css:{marginTop:"-="+164*a},ease:Strong.easeOut,onComplete:function(){b.prev.find("li").css({marginTop:""});return b.prev.find("li:lt("+
    a+")").detach().appendTo(b.prev.find("ul"))}})};m=function(a){var c,b,d,e,f;f=a.find(".slide_title_container");e=a.find(".slide_title");c=a.find("p.baseline");b=a.find(".scroll_to .offer_nav_content");d=a.find(".toggle_achievements .offer_nav_content");a=a.find(".offer_nav_links");a.css({height:0,paddingTop:0});b.css({marginLeft:"300px"});d.css({marginLeft:"-300px"});f.css({width:0,marginLeft:"145px"});e.css({paddingTop:"190px"});c.css({marginTop:"-300px"});TweenMax.to(f,1,{css:{width:"290px",marginLeft:0},
    ease:Strong.easeOut,onComplete:function(){return TweenMax.to(e,0.5,{css:{paddingTop:0},ease:Strong.easeOut})}});TweenMax.to(c,1,{css:{marginTop:"5px"},ease:Strong.easeOut,delay:0.5});return TweenMax.to(a,0.4,{css:{height:"50px",paddingTop:"3px"},ease:Strong.easeIn,delay:0.8,onComplete:function(){TweenMax.to(b,0.5,{css:{marginLeft:0},ease:Strong.easeOut});return TweenMax.to(d,0.5,{css:{marginLeft:0},ease:Strong.easeOut})}})};n=function(a){var c,b,d,e,f;f=a.find(".slide_title_container");e=a.find(".slide_title");
    c=a.find("p.baseline");b=a.find(".scroll_to .offer_nav_content");d=a.find(".toggle_achievements .offer_nav_content");a=a.find(".offer_nav_links");TweenMax.to(e,0.4,{css:{paddingTop:"190px"},ease:Strong.easeOut});TweenMax.to(f,0.6,{css:{width:0,marginLeft:"145px"},ease:Strong.easeOut});TweenMax.to(c,0.4,{css:{marginTop:"-300px"},ease:Strong.easeOut});TweenMax.to(b,0.4,{css:{marginLeft:"300px"},ease:Strong.easeOut});TweenMax.to(a,0.6,{css:{height:0},ease:Strong.easeOut});return TweenMax.to(d,0.4,{css:{marginLeft:"-300px"},
        ease:Strong.easeOut})};j=function(){var a=this;this.next.find("li a").on("click",function(c){c.preventDefault();c=$(c.currentTarget).parent().index();g.call(a);return a.move(2-c)});this.prev.find("li a").on("click",function(c){c.preventDefault();c=$(c.currentTarget).parent().index();g.call(a);return a.move(-(c+1))});this.next.find("a.goto").on("click",function(c){c.preventDefault();g.call(a);return a.move(-1)});return this.prev.find("a.goto").on("click",function(c){c.preventDefault();g.call(a);return a.move(1)})};
    g=function(){this.next.find("li a").off("click");this.prev.find("li a").off("click");this.next.find("a.goto").off("click");return this.prev.find("a.goto").off("click")};s.SlideshowView=d}).call(this);

/* -- contact.js */
(function(){var l,m={}.hasOwnProperty,n=Epoc,c=function(){var a=this.showResponse,b=this;this.showResponse=function(){return a.apply(b,arguments)};return l=c.__super__.constructor.apply(this,arguments)},j,h,e,f=c,d=Epoc.BaseView,k=function(){this.constructor=f},g;for(g in d)m.call(d,g)&&(f[g]=d[g]);k.prototype=d.prototype;f.prototype=new k;f.__super__=d.prototype;/iP/.test(navigator.platform)&&/Safari/i.test(navigator.userAgent)&&(h="Safari");c.prototype.el="#contact";c.prototype.initialize=function(){this.width_contact=
    this.$el.width();this.main_menu=$("#main_menu");this.body=$("body");this.header=$("#header");this.header_bg=this.header.find(".bg");this.video_bg=$("#video_bg");this.footer=$("#footer");this.contact_form=$("#contact_form");this.contact_form_article=$("#contact_form_article");this.contact_form_header=$("#contact_form_header");this.contact_link_on_main_menu=this.main_menu.find("a.contact");this.contact_form_submit=$("#form_submit");this.link_toggle_contact=$(".toggle_contact, #main_menu a.contact");
    return this.render()};c.prototype.render=function(){var a=this;this.$el.show();$(".chzn-select").chosen({disable_search:!0});this.contact_form.validationEngine({scroll:!1,prettySelect:!0,useSuffix:"_chzn"});e.call(this);if(this.$el.hasClass("opened"))return this.body.css({overflow:"auto"}).attr("data-from",""),TweenMax.to(this.header,1,{css:{left:0},ease:Quart.easeInOut}),TweenMax.to(this.$el,1,{css:{left:-this.width_contact},ease:Quart.easeInOut,onComplete:function(){a.$el.removeClass("opened").hide();
    a.header.removeClass("active");a.body.addClass("no_scroll");e.call(a);return TweenMax.to(a.header_bg,0.4,{css:{left:0},ease:Quart.easeInOut,onComplete:function(){Modernizr.video&&a.video_bg[0].play();return a.header.css({bottom:"auto"})}})}});this.header.css({bottom:"58px"});this.$el.addClass("opened");this.header.addClass("active");TweenMax.to(this.header_bg,0.5,{css:{left:0},ease:Quart.easeInOut,onComplete:function(){Epoc.BaseView.inf_1280?(Epoc.menu_view.hide_menu(),a.body.css({overflow:"hidden"}).attr("data-from",
    "contact")):TweenMax.to(a.header,1,{css:{left:a.width_contact},ease:Strong.easeInOut,onComplete:function(){return a.body.css({overflow:"hidden"}).attr("data-from","contact")}});return TweenMax.to(a.$el,1,{css:{left:0},ease:Strong.easeInOut})}});return j.call(this)};c.prototype.showResponse=function(a,b){var c,d=this;if("success"===b)return c=new Image(1,1),c.src="http://www.googleadservices.com/pagead/conversion/1070493353/?value=0&label=1rsaCJml7AcQqd25_gM&guid=ON&script=0",_gaq.push(["_trackPageview",
    "/fre/contact/merci"]),c=this.$el.find(".contact_thanks"),c.show(),c.addClass("show"),setTimeout(function(){d.$el.find(".contact_thanks").removeClass("show");return d.contact_form_submit.removeAttr("disabled")},2500),this.contact_form.resetForm()};c.prototype.set_full_height_crossplatform=function(a){var b;if(Epoc.BaseView.inf_1280&&!Epoc.BaseView.inf_560)return a.css({height:"auto"}),b=$(window).height()-this.footer.outerHeight(),"string"===typeof h&&(b+=60),this.$el.css({width:$(window).width()}),
    this.contact_form_article.css({height:b,width:$(window).width()});Epoc.BaseView.inf_560&&this.$el.css({width:"100%"});this.contact_form_article.removeAttr("style");b=$(window).height()-this.contact_form_header.outerHeight()-this.footer.outerHeight();"string"===typeof h&&(b+=60);return a.css({height:b})};j=function(){var a=this;$(".toggle_contact, #wrapper").on("click",function(b){b.preventDefault();e.call(a);a.render();return Epoc.app.scrolling_section=!0});this.contact_form_submit.on("click",function(b){b.preventDefault();
    b.stopPropagation();a.contact_form_submit.attr("disabled","disabled");return a.contact_form.validationEngine("validate")?(b={success:function(b,c,d,e){return a.showResponse(b,c,d,e)}},a.contact_form.ajaxSubmit(b)):a.contact_form_submit.removeAttr("disabled")});return $(window).on("resize",function(){return a.set_full_height_crossplatform(a.contact_form)}).triggerHandler("resize")};e=function(){$(".toggle_contact, #wrapper").off("click");return this.contact_form_submit.off("click")};n.ContactView=
    c}).call(this);

/* -- achievements.js */
(function(){var m,n={}.hasOwnProperty,p=Epoc,c=function(){return m=c.__super__.constructor.apply(this,arguments)},h,j,k,e,f=c,d=Epoc.BaseView,l=function(){this.constructor=f},g;for(g in d)n.call(d,g)&&(f[g]=d[g]);l.prototype=d.prototype;f.prototype=new l;f.__super__=d.prototype;/iP/.test(navigator.platform)&&/Safari/i.test(navigator.userAgent)&&(k="Safari");c.prototype.el="#achievements";c.prototype.initialize=function(){this.width_contact=this.$el.width();this.main_menu=$("#main_menu");this.body=
    $("body");this.header=$("#header");this.header_bg=this.header.find(".bg");this.video_bg=$("#video_bg");this.footer=$("#footer");this.achievements_list=$("#achievements_list");this.achievements_header=this.$el.find("header");this.link_toggle_achievements=$(".toggle_achievements, #main_menu a.achievements");return this.render()};c.prototype.render=function(){var a=this;this.content=$(Epoc.Cache.achievements);this.achievements_list.find("ul").remove();this.content.appendTo(this.achievements_list);this.$el.show();
    this.$el.hasClass("active")&&!this.$el.hasClass("no_scroll")&&!this.$el.hasClass("from_one_achievement")?(this.body.css({overflow:"auto"}).attr("data-from","").removeClass("overlayed"),this.header.removeClass("active"),this.$el.removeClass("active"),TweenMax.to(this.$el,1.2,{css:{right:0},ease:Strong.easeInOut,onComplete:function(){a.header_bg.addClass("no_transition");a.header_bg.removeClass("to_left");a.header.css({bottom:"auto"});return TweenMax.to(a.$el,1,{css:{right:"-100%"},ease:Quart.easeInOut,
        onComplete:function(){a.achievements_list.find("ul").remove();a.body.addClass("no_scroll");a.header_bg.removeClass("no_transition");Modernizr.video&&a.video_bg[0].play();e.call(a);_gaq.push(["_trackPageview","/"]);return Epoc.app.navigate("/",{trigger:!0})}})}})):(this.$el.addClass("cached"),this.body.attr("data-from","achievements"),this.$el.removeClass("from_one_achievement"),this.body.addClass("overlayed").css({overflow:"hidden"}),this.header.css({bottom:"58px"}),this.header_bg.addClass("no_transition to_left"),
        TweenMax.to(this.$el,1.2,{css:{right:0},ease:Strong.easeInOut,onComplete:function(){a.header_bg.removeClass("no_transition");a.header.addClass("active");a.$el.addClass("active");a.$el.removeClass("cached");if(Epoc.BaseView.inf_1280)return Epoc.menu_view.hide_menu()}}));e.call(this);return j.call(this)};h=function(){var a,b;a=this.achievements_list.find("li:first-child");b=Epoc.BaseView.inf_1280?Math.round(a.outerWidth()/2):a.outerWidth();return this.achievements_list.find("li").each(function(){return $(this).height(b)})};
    c.prototype.set_full_height_crossplatform=function(a){var b;b=$(window).height()-this.achievements_header.outerHeight()-this.footer.outerHeight();"string"===typeof k&&(b+=60);return a.css({height:b})};j=function(){var a=this;$(window).on("resize",function(){a.set_full_height_crossplatform(a.achievements_list);h.call(a);return 1280<$(window).width()?(a.achievement_case=$("#achievements_list li:first-child"),a.achievement_case_img=a.achievement_case.find("img"),a.old_width_img=a.achievement_case_img.outerWidth(),
        a.old_height_img=a.achievement_case_img.outerHeight(),a.achievement_case_container=a.achievement_case.find(".thumb_container"),a.old_width_container=a.achievement_case_container.outerWidth(),a.old_height_container=a.achievement_case_container.outerHeight(),$("#achievements_list li").each(function(b,c){var d,e;e=$(c).find("img");d=$(c).find(".thumb_container");return $(c).on("mouseenter",function(){var b,c,f;b=parseInt(0.05*1.1*a.old_height_img);TweenMax.to(e,0.1,{css:{width:parseInt(1.1*a.old_width_img),
        height:parseInt(1.1*a.old_height_img),left:-b,top:-b},ease:Quad.easeOut});f=parseInt(0.9*a.old_width_container);b=parseInt(0.6*a.old_height_container);c=parseInt(0.05*a.old_width_container);return TweenMax.to(d,0.1,{css:{margin:c,width:f,height:b},ease:Quad.easeOut})}).on("mouseleave",function(){TweenMax.to(e,0.1,{css:{width:a.old_width_img,height:a.old_height_img,left:0,top:0},ease:Quad.easeIn,onComplete:function(){return e.attr("style","")}});return TweenMax.to(d,0.1,{css:{margin:0,width:a.old_width_container,
            height:a.old_height_container},ease:Quad.easeIn,onComplete:function(){return d.attr("style","")}})})})):$("#achievements_list li").each(function(a,c){$(c).off("mouseenter");return $(c).off("mouseleave")})}).triggerHandler("resize");return $(".toggle_achievement").on("click",function(b){b.preventDefault();b.stopPropagation();e.call(a);a.header_bg.fadeOut("fast");_gaq.push(["_trackPageview",$(b.target).closest("li").find("a").attr("href")]);return Epoc.app.navigate($(b.target).closest("li").find("a").attr("href"),
        {trigger:!0})})};e=function(){$(".toggle_achievements, #main_menu a.achievements").off("click");return $(".toggle_achievement").off("click")};p.AchievementsView=c}).call(this);

/* -- achievement.js */
(function(){var m,n={}.hasOwnProperty,p=Epoc,c=function(){return m=c.__super__.constructor.apply(this,arguments)},h,j,k,g,e=c,d=Epoc.BaseView,l=function(){this.constructor=e},f;for(f in d)n.call(d,f)&&(e[f]=d[f]);l.prototype=d.prototype;e.prototype=new l;e.__super__=d.prototype;/iP/.test(navigator.platform)&&/Safari/i.test(navigator.userAgent)&&(j="Safari");c.prototype.el="#achievement";c.prototype.events={"click .toggle_achievement_gallery, #main_menu .achievements":"back_to_achievements"};c.prototype.initialize=
    function(){this.slug=this.options.slug;this.body=$("body");this.header_bg=$("#header").find(".bg");this.pics_next=$("#pics_next");this.pics_prev=$("#pics_prev");this.achievements=$("#achievements");return this.render()};c.prototype.render=function(){var a=this;this.content=$(Epoc.Cache["achievement_"+this.slug]);this.$el.find("article").remove();this.content.appendTo(this.$el);this.achievement_header=this.$el.find("header");this.$el.show();if(!this.$el.hasClass("active"))return this.body.addClass("overlayed").css({overflow:"hidden"}).attr("data-from",
    "achievement"),k.call(this),TweenMax.to(this.$el,0.4,{css:{top:"0%"},ease:Quart.easeInOut,onComplete:function(){a.body.scrollTop(1);a.$el.addClass("active");return TweenMax.to(a.achievement_header,0.2,{css:{left:"280px"},ease:Quart.easeInOut})}})};c.prototype.back_to_achievements=function(a){var b=this;a.preventDefault();a.stopPropagation();this.header_bg.fadeIn("fast");this.body.attr("data-from","");return TweenMax.to(this.achievement_header,0.2,{css:{left:"-100%"},ease:Quart.easeInOut,onComplete:function(){return TweenMax.to(b.$el,
    0.4,{css:{top:"100%"},ease:Quart.easeInOut,onComplete:function(){b.$el.find("article").remove();b.$el.removeClass("active");b.body.addClass("no_scroll").css({overflow:"auto"});b.achievements.addClass("from_one_achievement");g.call(b);_gaq.push(["_trackPageview","/fre/realisations"]);return Epoc.app.navigate("/fre/realisations",{trigger:!0})}})}})};c.prototype.set_full_height_crossplatform=function(a){var b;b=$(window).height();"string"===typeof j&&(b+=60);return a.css({height:b})};k=function(){$("#loader").show();
    $(".achievement_gallery").on("init.slides",function(){return setTimeout(function(){return $("#loader").fadeOut("fast")},1E3)});$(".achievement_gallery").superslides({hashchange:!1});g.call(this);return h.call(this)};h=function(){$("#pics_next").on("click",function(a){a.preventDefault();$(".achievement_gallery").superslides("animate","next");return $(".pics_active").text($(".achievement_gallery").superslides("next")+1)});return $("#pics_prev").on("click",function(a){a.preventDefault();$(".achievement_gallery").superslides("animate",
    "prev");return $(".pics_active").html($(".achievement_gallery").superslides("prev")+1)})};g=function(){$(".achievement_gallery").on("init.slides");$("#pics_next").off("click");return $("#pics_prev").off("click")};p.AchievementView=c}).call(this);

/* -- menu.js */
(function(){var p,m=function(a,l){return function(){return a.apply(l,arguments)}},q={}.hasOwnProperty,r=Epoc,b=function(){this.tick=m(this.tick,this);this.on_loaded=m(this.on_loaded,this);this.resize=m(this.resize,this);return p=b.__super__.constructor.apply(this,arguments)},j=b,e=Backbone.View,n=function(){this.constructor=j},k;for(k in e)q.call(e,k)&&(j[k]=e[k]);n.prototype=e.prototype;j.prototype=new n;j.__super__=e.prototype;b.prototype.el="#header";b.prototype.events={};b.prototype.items=[];
    b.prototype.active=1;b.prototype.initialize=function(){var a=this;this.$el.find("#main_menu li a").each(function(l,d){var c,b;c=$(d);b={};b.url=c.attr("href");b.active=c.hasClass("active");b.el=c;b.parent=!1;c.data("index",l);0<c.parents("ul.submenu").length&&(b.parent=c.parents("ul.submenu").siblings("a"));return a.items.push(b)});$(window).load(this.on_loaded);this.w_width=$(window).width();return $(window).on("resize",function(){return a.resize()})};b.prototype.render=function(){var a;this.$el.find("#main_menu li a.active").removeClass("active");
        a=this.items[this.active].el;a.addClass("active");a=a.closest("ul.submenu");a.length?this.open(a.siblings("a")):this.close($("ul.submenu").siblings("a"));_gaq.push(["_trackPageview",this.items[this.active].url]);return Epoc.app.navigate(this.items[this.active].url)};b.prototype.resize=function(){var a;if(this.w_width===$(window).width())return!1;this.w_width=$(window).width();if(1280>=$(window).width())return this.$el.css({left:"-300px"});a=$("#contact");return a.hasClass("active")?this.$el.css({left:a.width()}):
        this.$el.css({left:"0"})};b.prototype.hide_menu=function(){var a=this;return TweenMax.to(this.$el,0.2,{css:{left:"-300px"},ease:Quart.easeInOut,onComplete:function(){return a.$el.removeClass("shown")}})};b.prototype.show_menu=function(){var a=this;return this.$el.hasClass("shown")?!1:TweenMax.to(this.$el,0.2,{css:{left:"0"},ease:Quart.easeInOut,onComplete:function(){return a.$el.addClass("shown")}})};b.prototype.toggle=function(a){return a.hasClass("open")?this.close(a):this.open(a)};b.prototype.open=
        function(a){var b,d;if(!a.hasClass("open")&&(d=a.siblings("ul.submenu"),0<d.length))return b=d.height(),d.css({height:0,display:"block"}),TweenMax.killTweensOf(d),TweenMax.to(d,0.3,{css:{height:b+"px"},ease:Quart.easeOut}),a.addClass("open")};b.prototype.close=function(a){var b;if(a.hasClass("open")&&(b=a.siblings("ul.submenu"),0<b.length))return TweenMax.to(b,0.3,{css:{height:"0px"},ease:Quart.easeOut,onComplete:function(){b.hide();return b.css({height:"inherit"})}}),a.removeClass("open")};b.prototype.get_index=
        function(a){var b,d,c,h,f;f=this.items;b=c=0;for(h=f.length;c<h;b=++c)if(d=f[b],d.url===a)return b};b.prototype.select_menu_item=function(a){a=("/"+a).replace("//","/");this.active=this.get_index(a);a=$("#main_menu a[href="+a.replace(RegExp("[/]","g"),"\\/")+"]");this.$el.find("#main_menu li a.active").removeClass("active");return a.addClass("active")};b.prototype.on_loaded=function(){var a=this;this.d_height=$(document).height();$(".section_hash").each(function(b,d){var c,h,f,g,e;g=a.items;e=[];
        c=h=0;for(f=g.length;h<f;c=++h)if(c=g[c],c.url===$(d).data("url")){c.offset=$(d).offset().top;c.section_el=$(d);a.items[b]=c;break}else e.push(void 0);return e});return window.setInterval(this.tick,250)};b.prototype.tick=function(){var a,b,d,c,e,f,g;if(Epoc.app.scrolling_section){d=window.scrollY;if(d===this.sy)return!1;this.sy=d;f=this.items;g=[];a=c=0;for(e=f.length;c<e;a=++c)if(b=f[a],b.offset>d-800&&b.offset<d+this.d_height){this.active=a;this.render();break}else g.push(void 0);return g}return this.sy=
        -1};r.MenuView=b}).call(this);

/* -- video.js */
(function(){var h,f=function(a,b){return function(){return a.apply(b,arguments)}},j={}.hasOwnProperty,k=Epoc,b=function(){this.tick=f(this.tick,this);this.on_fallback_loaded=f(this.on_fallback_loaded,this);this.start_fadein=f(this.start_fadein,this);return h=b.__super__.constructor.apply(this,arguments)},c=b,d=Backbone.View,g=function(){this.constructor=c},e;for(e in d)j.call(d,e)&&(c[e]=d[e]);g.prototype=d.prototype;c.prototype=new g;c.__super__=d.prototype;b.prototype.el="#video_mask";b.prototype.darken=
    $("#video_mask .darken ");b.prototype.html_tag=$("html");b.prototype.video_bg=$("#video_bg");b.prototype.playing=!1;b.prototype.playing_index="home";b.prototype.initialize=function(){this.time={home:{start:0,end:18},outdoor_pool:{start:0,end:18},indoor_pool:{start:19,end:30},jacuzzi:{start:31.5,end:43},hammam:{start:44,end:54},sauna:{start:44,end:54}};this.fallback=$('<img class="video_default" src="/img/video_bg.jpg"/>');this.$el.append(this.fallback);if(!Epoc.BaseView.inf_560)return this.fallback.load(this.on_fallback_loaded)};
    b.prototype.fadein=function(a){var b=this;null==a&&(a=!1);a&&a.preventDefault();return this.html_tag.hasClass("ie9")||this.html_tag.hasClass("lt-ie9")?this.darken.hide():TweenMax.to(this.darken,1,{css:{opacity:0},onComplete:function(){return b.darken.hide()}})};b.prototype.fadeout=function(a){null==a&&(a=!1);a&&a.preventDefault();this.darken.show();if(!this.html_tag.hasClass("lt-ie9")||!this.html_tag.hasClass("ie9"))return TweenMax.to(this.darken,1,{css:{opacity:0.4}})};b.prototype.start_fadein=function(a){var b=
        this;null==a&&(a=!1);this.darken.show();this.darken.css({opacity:1});return TweenMax.to(this.darken,1,{css:{opacity:0},onComplete:function(){return b.darken.hide()}})};b.prototype.on_fallback_loaded=function(){var a=this;this.start_fadein();return setTimeout(function(){return a.load_video("all_6")},1E3)};b.prototype.load_video=function(a){var b,d,c,e=this;if(Modernizr.video)return this.video_bg.append('<source src="/files/movies/'+a+'.mp4" type="video/mp4"><source src="/files/movies/'+a+'.ogv" type="video/ogg">'),
        this.video_bg.children("source").length||this.video_bg.attr("src","/files/movies/"+a+".mp4").attr("type","video/mp4"),this.video_bg[0].load(),this.video_bg[0].play(),this.playing=!0,c=b=d=0,setInterval(function(){d=b;b=e.video_bg[0].currentTime;if(b===d&&(c++,1<=c))return e.video_bg[0].pause(),e.video_bg[0].play(),c=0},1500),this.video_bg.css("opacity",0),this.video_bg.on("timeupdate",this.tick),this.video_bg.on("canplaythrough",function(){return TweenMax.to(e.video_bg,1,{css:{opacity:1}})})};b.prototype.tick=
        function(){var a;a=this.video_bg[0].currentTime;if(a>=this.time[this.playing_index].end||a<this.time[this.playing_index].start)return this.video_bg[0].currentTime=this.time[this.playing_index].start};b.prototype.play_seq=function(a){if(!(this.playing_index===a||Epoc.BaseView.inf_560))if(this.playing_index=a,Modernizr.video&&this.playing)return this.video_bg[0].currentTime=this.time[a].start};b.prototype.switch_seq=function(a){switch(a){case "wrapper":return this.play_seq("home");case "piscines-exterieures":return this.play_seq("home");
        case "piscines-interieures":return this.play_seq("indoor_pool");case "jacuzzi":return this.play_seq("jacuzzi");case "hammam":return this.play_seq("hammam");case "sauna":return this.play_seq("sauna");case "a-propos":return this.play_seq("indoor_pool")}};k.VideoView=b}).call(this);

/* -- router.js */
(function(){var y,q={}.hasOwnProperty,z=Epoc,a=function(){return y=a.__super__.constructor.apply(this,arguments)},h,k,v,c,l,d,f,j,r,m,e,g,n,p,w,s,t=a;e=Backbone.Router;var x=function(){this.constructor=t},u;for(u in e)q.call(e,u)&&(t[u]=e[u]);x.prototype=e.prototype;t.prototype=new x;t.__super__=e.prototype;m=$("#offers_slideshow");c=$("body");f=$("#header");j=f.find(".bg");p=$("#video_bg");$("#video_mask .darken");l=$("#contact");w=l.width();k=$("#achievements");v=$("#achievements_list");q=m.find("#offers_nav_next");
    e=m.find("#offers_nav_prev");g=!1;n=r=d="";s=$("#wrapper");m.hasClass("active")||(q.find("li a").off("click"),e.find("li a").off("click"),q.find("a.goto").off("click"),e.find("a.goto").off("click"),new Epoc.SlideshowView);a.prototype.routes={"":"home",":lang":"home",accueil:"home",":lang/accueil":"home",":lang/contact":"contact",":lang/a-propos":"about",":lang/notre-offre":"offer",":lang/piscines-interieures":"indoor_pool",":lang/piscines-exterieures":"outdoor_pool",":lang/jacuzzi":"jacuzzi",":lang/hammam":"hammam",
        ":lang/sauna":"sauna",":lang/realisations":"achievements",":lang/realisations/:slug":"achievement"};a.prototype.home=function(b){null==b&&(b=!1);!1===b&&(d="#wrapper",g=!0,this.from());c.hasClass("no_scroll")||h($("#offers_slideshow"));c.removeClass("no_scroll, overlayed");return Epoc.video_view.play_seq("home")};a.prototype.contact=function(){return this.before(!1,"#contact")};a.prototype.about=function(){return this.before(!0,"#a-propos")};a.prototype.offer=function(){return this.before(!0,"#piscines-exterieures")};
    a.prototype.indoor_pool=function(){this.before(!0,"#piscines-interieures");return Epoc.video_view.play_seq("indoor_pool")};a.prototype.outdoor_pool=function(){this.before(!0,"#piscines-exterieures");return Epoc.video_view.play_seq("outdoor_pool")};a.prototype.jacuzzi=function(){this.before(!0,"#jacuzzi");return Epoc.video_view.play_seq("jacuzzi")};a.prototype.hammam=function(){return this.before(!0,"#hammam")};a.prototype.sauna=function(){this.before(!0,"#sauna");return Epoc.video_view.play_seq("sauna")};
    a.prototype.achievements=function(b){return this.before(!1,"#achievements",b)};a.prototype.achievement=function(b,a){return this.before(!1,"#achievement",b,a)};h=function(b){var a;a=1280<$(window).width()?b.offset().top:b.offset().top-60;b=Math.abs(b.offset().top-window.scrollY)/2E3;return TweenMax.to(window,b,{scrollTo:{y:a},ease:Strong.easeInOut,onComplete:function(){return $(".rotated.prev, .rotated.next").removeClass("transparent")}})};a.prototype.close_contact=function(){var b,a=this;c.css({overflow:"auto"});
        b=$(window).width();s.css({width:b});this.scrolling_section=!0;TweenMax.to(f,0.8,{css:{left:0},ease:Quart.easeInOut});return TweenMax.to(l,0.8,{css:{left:-w},ease:Quart.easeInOut,onComplete:function(){l.removeClass("opened").hide();f.removeClass("active");c.addClass("no_scroll").removeClass("overlayed");return TweenMax.to(j,0.4,{css:{left:0},ease:Quart.easeInOut,onComplete:function(){f.css({bottom:"auto"});!0===g&&h($(d));$(".toggle_contact, #wrapper").off("click");c.attr("data-from","");if(d)return a.destination_to()}})}})};
    a.prototype.close_achievements=function(){var b,a=this;c.css({overflow:"auto"});f.removeClass("active");k.removeClass("active");b=$(window).width();s.css({width:b});return TweenMax.to(k,0.4,{css:{right:0},ease:Quart.easeInOut,onComplete:function(){j.addClass("no_transition");j.removeClass("to_left");f.css({bottom:"auto"});return TweenMax.to(k,0.4,{css:{right:"-100%"},ease:Quart.easeInOut,onComplete:function(){Modernizr.video&&p[0].play();v.find("ul").remove();c.addClass("no_scroll").removeClass("overlayed");
        j.removeClass("no_transition");!0===g&&h($(d));$(".toggle_achievements, #main_menu a.achievements").off("click");$(".toggle_achievement").off("click");c.attr("data-from","");if(d)return a.destination_to()}})}})};a.prototype.close_achievement=function(){var b,a,e=this;j.fadeIn("fast");b=$("#achievement");a=b.find("header");return TweenMax.to(a,0.2,{css:{left:"-100%"},ease:Quart.easeInOut,onComplete:function(){return TweenMax.to(b,0.4,{css:{top:"100%"},ease:Quart.easeInOut,onComplete:function(){var a;
        b.find("article").remove();b.removeClass("active");c.addClass("no_scroll").css({overflow:"auto"});a=$(window).width();s.css({width:a});k.addClass("from_one_achievement");$("#pics_next").off("click");$("#pics_prev").off("click");$(".toggle_achievement_gallery, #main_menu .achievements").off("click");"#achievements"!==d&&e.close_achievements(g);!0===g&&h($(d));c.attr("data-from","");if(d&&"#contact"!==d)return e.destination_to()}})}})};a.prototype.from=function(){switch(c.attr("data-from")){case "contact":return this.close_contact();
        case "achievements":return"#achievement"===d?(c.attr("data-from",""),this.destination_to()):this.close_achievements();case "achievement":return this.close_achievement();default:return!0===g&&h($(d)),c.attr("data-from",""),this.destination_to()}};a.prototype.destination_to=function(){this.scrolling_section=!0;switch(d){case "#achievements":return Modernizr.video&&p[0].pause(),$.ajax({url:"/"+r+"/realisations",async:!1,success:function(a){Epoc.Cache.achievements=a;return new Epoc.AchievementsView}}),
        this.scrolling_section=!1;case "#achievement":return $("#main_menu a.achievements").addClass("active"),Modernizr.video&&p[0].pause(),$.ajax({url:"/"+r+"/realisations/"+n,async:!1,success:function(a){Epoc.Cache["achievement_"+n]=a;return new Epoc.AchievementView({slug:n})}}),this.scrolling_section=!1;case "#contact":return Modernizr.video&&p[0].pause(),l.hasClass("opened")||new Epoc.ContactView,this.scrolling_section=!1}};a.prototype.navigate=function(b,c){c&&c.trigger&&Epoc.menu_view.select_menu_item(b);
        return a.__super__.navigate.call(this,b,c)};a.prototype.before=function(a,c,e,f){g=a;d=c;r=e;n=f;m.hasClass("active")||this.home(!0);return this.from()};z.AppRouter=a}).call(this);

/* -- app.js */
(function(){var c,d,e,b,f;e="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" ");c=window.console=window.console||{};b=0;for(f=e.length;b<f;b++)d=e[b],c[d]||(c[d]=function(){});$(function(){var a;Epoc.main_holder=$("#wrapper");Epoc.app_view=new Epoc.BaseView;Epoc.menu_view=new Epoc.MenuView;Epoc.video_view=new Epoc.VideoView;Epoc.app=new Epoc.AppRouter;Backbone.history.start({pushState:Modernizr.history,
    silent:!0});a=RegExp("[/]+$","g");if(Modernizr.history)return a=Backbone.history.getFragment().replace(a,""),Epoc.menu_view.select_menu_item(a),Backbone.history.loadUrl(a);a=window.location.pathname.substr(Backbone.history.options.root.length).replace(a,"");_gaq.push(["_trackPageview",a]);return Epoc.app.navigate(a,{trigger:!0})})}).call(this);
