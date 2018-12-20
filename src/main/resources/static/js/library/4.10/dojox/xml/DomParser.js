//>>built
define(["dojo/_base/kernel","dojo/_base/array"],function(n){n.getObject("xml",!0,dojox);dojox.xml.DomParser=new function(){function D(){return new function(){var a={};this.nodeType=l.DOCUMENT;this.nodeName="#document";this.namespaces={};this._nsPaths={};this.childNodes=[];this.documentElement=null;this._add=function(b){"undefined"!=typeof b.id&&(a[b.id]=b)};this._remove=function(b){a[b]&&delete a[b]};this.byId=this.getElementById=function(b){return a[b]};this.byName=this.getElementsByTagName=r;this.byNameNS=
this.getElementsByTagNameNS=t;this.childrenByName=u;this.childrenByNameNS=v}}function r(a){function b(a,e,c){n.forEach(a.childNodes,function(a){a.nodeType==l.ELEMENT&&("*"==e?c.push(a):a.nodeName==e&&c.push(a),b(a,e,c))})}var c=[];b(this,a,c);return c}function t(a,b){function c(a,b,d,k){n.forEach(a.childNodes,function(a){a.nodeType==l.ELEMENT&&("*"==b&&a.ownerDocument._nsPaths[d]==a.namespace?k.push(a):a.localName==b&&a.ownerDocument._nsPaths[d]==a.namespace&&k.push(a),c(a,b,d,k))})}b||(b="_def_");
var d=[];c(this,a,b,d);return d}function u(a){var b=[];n.forEach(this.childNodes,function(c){c.nodeType==l.ELEMENT&&("*"==a?b.push(c):c.nodeName==a&&b.push(c))});return b}function v(a,b){var c=[];n.forEach(this.childNodes,function(d){d.nodeType==l.ELEMENT&&("*"==a&&d.ownerDocument._nsPaths[b]==d.namespace?c.push(d):d.localName==a&&d.ownerDocument._nsPaths[b]==d.namespace&&c.push(d))});return c}function w(a){return{nodeType:l.TEXT,nodeName:"#text",nodeValue:a.replace(x," ").replace(y,"\x3e").replace(z,
"\x3c").replace(A,"'").replace(B,'"').replace(C,"\x26")}}function E(a){for(var b=0;b<this.attributes.length;b++)if(this.attributes[b].nodeName==a)return this.attributes[b].nodeValue;return null}function F(a,b){for(var c=0;c<this.attributes.length;c++)if(this.ownerDocument._nsPaths[b]==this.attributes[c].namespace&&this.attributes[c].localName==a)return this.attributes[c].nodeValue;return null}function G(a,b){for(var c=null,d=0;d<this.attributes.length;d++)if(this.attributes[d].nodeName==a){c=this.attributes[d].nodeValue;
this.attributes[d].nodeValue=b;break}"id"==a&&(null!=c&&this.ownerDocument._remove(c),this.ownerDocument._add(this))}function H(a,b,c){for(var d=0;d<this.attributes.length;d++)if(this.ownerDocument._nsPaths[c]==this.attributes[d].namespace&&this.attributes[d].localName==a){this.attributes[d].nodeValue=b;break}}function I(){var a=this.parentNode;if(a)for(var b=0;b<a.childNodes.length;b++)if(a.childNodes[b]==this&&0<b)return a.childNodes[b-1];return null}function J(){var a=this.parentNode;if(a)for(var b=
0;b<a.childNodes.length;b++)if(a.childNodes[b]==this&&b+1<a.childNodes.length)return a.childNodes[b+1];return null}var l={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9},K=/<([^>\/\s+]*)([^>]*)>([^<]*)/g,L=/([^=]*)=(("([^"]*)")|('([^']*)'))/g,q=/<!ENTITY\s+([^"]*)\s+"([^"]*)">/g,M=/<!\[CDATA\[([\u0001-\uFFFF]*?)\]\]>/g,N=/\x3c!--([\u0001-\uFFFF]*?)--\x3e/g,p=/^\s+|\s+$/g,x=/\s+/g,y=/\&gt;/g,z=/\&lt;/g,B=/\&quot;/g,A=/\&apos;/g,C=/\&amp;/g;this.parse=function(a){var b=
D();if(null==a||0==a.length)return b;if(0<a.indexOf("\x3c!ENTITY")){var c,d=[];if(q.test(a)){for(q.lastIndex=0;null!=(c=q.exec(a));)d.push({entity:"\x26"+c[1].replace(p,"")+";",expression:c[2]});for(var e=0;e<d.length;e++)a=a.replace(new RegExp(d[e].entity,"g"),d[e].expression)}}for(d=[];null!=(c=M.exec(a));)d.push(c[1]);for(e=0;e<d.length;e++)a=a.replace(d[e],e);for(c=[];null!=(e=N.exec(a));)c.push(e[1]);for(e=0;e<c.length;e++)a=a.replace(c[e],e);for(var g,e=b;null!=(g=K.exec(a));)if("/"==g[2].charAt(0)&&
1<g[2].replace(p,"").length){e.parentNode&&(e=e.parentNode);var h=(g[3]||"").replace(p,"");0<h.length&&e.childNodes.push(w(h))}else if(0<g[1].length)if("?"==g[1].charAt(0))h=g[1].substr(1),g=g[2].substr(0,g[2].length-2),e.childNodes.push({nodeType:l.PROCESSING_INSTRUCTION,nodeName:h,nodeValue:g});else if("!"==g[1].charAt(0))if(0==g[1].indexOf("![CDATA[")){var k=parseInt(g[1].replace("![CDATA[","").replace("]]",""));e.childNodes.push({nodeType:l.CDATA_SECTION,nodeName:"#cdata-section",nodeValue:d[k]})}else"!--"==
g[1].substr(0,3)&&(k=parseInt(g[1].replace("!--","").replace("--","")),e.childNodes.push({nodeType:l.COMMENT,nodeName:"#comment",nodeValue:c[k]}));else{var h=g[1].replace(p,""),f={nodeType:l.ELEMENT,nodeName:h,localName:h,namespace:"_def_",ownerDocument:b,attributes:[],parentNode:null,childNodes:[]};if(-1<h.indexOf(":")){var m=h.split(":");f.namespace=m[0];f.localName=m[1]}f.byName=f.getElementsByTagName=r;f.byNameNS=f.getElementsByTagNameNS=t;f.childrenByName=u;f.childrenByNameNS=v;f.getAttribute=
E;f.getAttributeNS=F;f.setAttribute=G;f.setAttributeNS=H;f.previous=f.previousSibling=I;for(f.next=f.nextSibling=J;null!=(k=L.exec(g[2]));)if(0<k.length)if(h=k[1].replace(p,""),k=(k[4]||k[6]||"").replace(x," ").replace(y,"\x3e").replace(z,"\x3c").replace(A,"'").replace(B,'"').replace(C,"\x26"),0==h.indexOf("xmlns"))0<h.indexOf(":")?(m=h.split(":"),b.namespaces[m[1]]=k,b._nsPaths[k]=m[1]):(b.namespaces._def_=k,b._nsPaths[k]="_def_");else{var n=h,m="_def_";0<h.indexOf(":")&&(m=h.split(":"),n=m[1],m=
m[0]);f.attributes.push({nodeType:l.ATTRIBUTE,nodeName:h,localName:n,namespace:m,nodeValue:k});"id"==n&&(f.id=k)}b._add(f);e&&(e.childNodes.push(f),f.parentNode=e,"/"!=g[2].charAt(g[2].length-1)&&(e=f));h=g[3];0<h.length&&e.childNodes.push(w(h))}for(e=0;e<b.childNodes.length;e++)if(a=b.childNodes[e],a.nodeType==l.ELEMENT){b.documentElement=a;break}return b}};return dojox.xml.DomParser});