// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/sniff",["dojo/_base/sniff","./kernel"],function(a,c){var e=function(){return this}(),d=a("ff"),g=a("ie"),p=void 0===g&&7<=a("trident"),m=a("edge"),l=a("webkit"),h=a("opera"),n=a("chrome"),q=a("safari"),k=navigator.userAgent,f;(f=k.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i))&&a.add("esri-iphone",parseFloat(f[2].replace("_",".")));(f=k.match(/Android\s+(\d+(\.\d+)*)/i))&&a.add("esri-android",parseFloat(f[1]));(f=k.match(/Fennec\/(\d+\.\d+)/i))&&a.add("esri-fennec",parseFloat(f[1]));
0<=k.indexOf("BlackBerry")&&0<=k.indexOf("WebKit")&&a.add("esri-blackberry",1);a.add("esri-touch",a("esri-iphone")||a("esri-android")||a("esri-blackberry")||6<=a("esri-fennec")||(d||l)&&(document.createTouch||"ontouchstart"in e||e.TouchEvent&&0<navigator.maxTouchPoints)?!0:!1);(f=k.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i))&&a.add("esri-mobile",!!f);a.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled||!(!m||!e.PointerEvent));c._getDOMAccessor=function(a){var b=
"";d?b="Moz":l?b="Webkit":g?b="ms":h&&(b="O");return b+a.charAt(0).toUpperCase()+a.substr(1)};a.add("esri-phonegap",!!e.cordova);a.add("esri-cors",a("esri-phonegap")||e.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest);a.add("esri-file-upload",e.FormData&&e.FileList?!0:!1);a.add("esri-workers",e.Worker?!0:!1);a.add("esri-transforms",p||m||9<=g||3.5<=d||4<=n||3.1<=q||10.5<=h||3.2<=a("esri-iphone")||2.1<=a("esri-android"));a.add("esri-transitions",p||m||10<=g||4<=d||4<=n||3.1<=q||10.5<=h||3.2<=
a("esri-iphone")||2.1<=a("esri-android"));a.add("esri-transforms3d",p||m||10<=d||12<=n||4<=q||3.2<=a("esri-iphone")||3<=a("esri-android"));a.add("esri-url-encodes-apostrophe",function(){if(e.document)return!1;var a=e.document.createElement("a");a.href="?'";return-1<a.href.indexOf("?%27")});3>a("esri-android")&&(a.add("esri-transforms",!1,!1,!0),a.add("esri-transitions",!1,!1,!0),a.add("esri-transforms3d",!1,!1,!0));a.add("esri-will-change",a("esri-transforms")&&(52<=n||9.1<=q));c._css=function(c){var b=
a("esri-transforms3d");void 0!==c&&null!==c?b=c:b&&(n||q&&!a("esri-iphone"))&&(b=!1);var e=b?"translate3d(":"translate(",f=b?n?",-1px)":",0px)":")",k=b?"scale3d(":"scale(",m=b?",1)":")",p=b?"rotate3d(0,0,1,":"rotate(",r=b?"matrix3d(":"matrix(",t=b?",0,0,":",",u=b?",0,0,0,0,1,0,":",",v=b?",0,1)":")";return{names:{transition:l&&"-webkit-transition"||d&&"MozTransition"||h&&"OTransition"||g&&"msTransition"||"transition",transform:l&&"-webkit-transform"||d&&"MozTransform"||h&&"OTransform"||g&&"msTransform"||
"transform",transformName:l&&"-webkit-transform"||d&&"-moz-transform"||h&&"-o-transform"||g&&"-ms-transform"||"transform",origin:l&&"-webkit-transform-origin"||d&&"MozTransformOrigin"||h&&"OTransformOrigin"||g&&"msTransformOrigin"||"transformOrigin",endEvent:l&&"webkitTransitionEnd"||d&&"transitionend"||h&&"oTransitionEnd"||g&&"MSTransitionEnd"||"transitionend"},translate:function(a,b){return e+a+"px,"+b+"px"+f},scale:function(a){return k+a+","+a+m},rotate:function(a){return p+a+"deg)"},matrix:function(a){return r+
a.xx+","+a.xy+t+a.yx+","+a.yy+u+a.dx.toFixed(10)+(d&&59>=d?"px,":",")+a.dy.toFixed(10)+(d&&59>=d?"px":"")+v},getScaleFromMatrix:function(a){if(!a)return 1;a=a.toLowerCase();var b=-1<a.indexOf("matrix3d")?"matrix3d(":"matrix(";return Number(a.substring(b.length,a.indexOf(",")))}}};a("extend-esri")&&(c.isiPhone=a("esri-iphone"),c.isAndroid=a("esri-android"),c.isFennec=a("esri-fennec"),c.isBlackBerry=a("esri-blackberry"),c.isTouchEnabled=a("esri-touch"),c.isPointerEnabled=a("esri-pointer"),c._hasCors=
a("esri-cors"),c._hasFileUpload=a("esri-file-upload"),c._hasTransforms=a("esri-transforms"),c._hasTransitions=a("esri-transitions"),c._has3DTransforms=a("esri-transforms3d"));return a});