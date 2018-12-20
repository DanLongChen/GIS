// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/compilerUtils ../../geometry/ScreenPoint ../3d/support/mathUtils ./InputHandler".split(" "),function(h,k,n,p,q,r,t){function l(g){return!!u[g]}function v(g){for(var f=0;f<g.length;f++)if(!l(g[f]))return!1;return!0}Object.defineProperty(k,"__esModule",{value:!0});var u={click:!0,"double-click":!0,"immediate-click":!0,hold:!0,drag:!0,"key-down":!0,"key-up":!0,"pointer-down":!0,"pointer-move":!0,"pointer-up":!0,"pointer-drag":!0,"mouse-wheel":!0,
"pointer-enter":!0,"pointer-leave":!0,gamepad:!0,focus:!0,blur:!0},m;(function(g){g[g.Left=0]="Left";g[g.Middle=1]="Middle";g[g.Right=2]="Right"})(m||(m={}));h=function(){function g(f){this.handlers=new Map;this.counter=0;this.handlerCounts=new Map;this.view=f;this.inputManager=null}g.prototype.connect=function(f){var b=this;f&&this.disconnect();this.inputManager=f;this.handlers.forEach(function(a,c){return b.inputManager.installHandlers(c,[a])})};g.prototype.disconnect=function(){var f=this;this.inputManager&&
this.handlers.forEach(function(b,a){return f.inputManager.uninstallHandlers(a)});this.inputManager=null};g.prototype.destroy=function(){this.disconnect();this.handlers.clear();this.view=null};g.prototype.register=function(f,b,a){var c=this,e=Array.isArray(f)?f:f.split(",");if(!v(e))return e.some(l)&&console.error("Error: registering input events and other events on the view at the same time is not supported."),null;f=Array.isArray(b)?b:[];a=Array.isArray(b)?a:b;var d=this.createUniqueGroupName();
b=new w(this.view,e,f,a);this.handlers.set(d,b);for(a=0;a<e.length;a++){f=e[a];var g=this.handlerCounts.get(f)||0;this.handlerCounts.set(f,g+1)}this.inputManager&&this.inputManager.installHandlers(d,[b]);return{remove:function(){return c.removeHandler(d,e)}}};g.prototype.hasHandler=function(f){return!!this.handlerCounts.get(f)};g.prototype.removeHandler=function(f,b){if(this.handlers.has(f)){this.handlers.delete(f);for(var a=0;a<b.length;a++){var c=b[a],e=this.handlerCounts.get(c);void 0===e?console.error("Trying to remove handler for event that has no handlers registered: ",
c):1===e?this.handlerCounts.delete(c):this.handlerCounts.set(c,e-1)}}this.inputManager&&this.inputManager.uninstallHandlers(f)};g.prototype.createUniqueGroupName=function(){this.counter+=1;return"viewEvents_"+this.counter};return g}();k.ViewEvents=h;var w=function(g){function f(b,a,c,e){var d=g.call(this,!0)||this;d.view=b;for(b=0;b<a.length;b++){var f=a[b];switch(f){case "click":d.registerIncoming("click",c,function(a){return e(d.wrapClick(a))});break;case "double-click":d.registerIncoming("double-click",
c,function(a){return e(d.wrapDoubleClick(a))});break;case "immediate-click":d.registerIncoming("immediate-click",c,function(a){return e(d.wrapImmediateClick(a))});break;case "hold":d.registerIncoming("hold",c,function(a){return e(d.wrapHold(a))});break;case "drag":d.registerIncoming("drag",c,function(a){(a=d.wrapDrag(a))&&e(a)});break;case "key-down":d.registerIncoming("key-down",c,function(a){return e(d.wrapKeyDown(a))});break;case "key-up":d.registerIncoming("key-up",c,function(a){return e(d.wrapKeyUp(a))});
break;case "pointer-down":d.registerIncoming("pointer-down",c,function(a){return e(d.wrapPointer(a,"pointer-down"))});break;case "pointer-move":d.registerIncoming("pointer-move",c,function(a){return e(d.wrapPointer(a,"pointer-move"))});break;case "pointer-up":d.registerIncoming("pointer-up",c,function(a){return e(d.wrapPointer(a,"pointer-up"))});break;case "pointer-drag":d.registerIncoming("pointer-drag",c,function(a){return e(d.wrapPointerDrag(a))});break;case "mouse-wheel":d.registerIncoming("mouse-wheel",
c,function(a){return e(d.wrapMouseWheel(a))});break;case "pointer-enter":d.registerIncoming("pointer-enter",c,function(a){return e(d.wrapPointer(a,"pointer-enter"))});break;case "pointer-leave":d.registerIncoming("pointer-leave",c,function(a){return e(d.wrapPointer(a,"pointer-leave"))});break;case "gamepad":d.registerIncoming("gamepad",c,function(a){e(d.wrapGamepad(a))});break;case "focus":d.registerIncoming("focus",c,function(a){e(d.wrapFocus(a))});break;case "blur":d.registerIncoming("blur",c,function(a){e(d.wrapBlur(a))});
break;default:p.neverReached(f)}}return d}n(f,g);f.prototype.wrapFocus=function(b){return{type:"focus",timestamp:b.timestamp,native:b.data.native,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapBlur=function(b){return{type:"blur",timestamp:b.timestamp,native:b.data.native,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapClick=function(b){var a=b.data,c=a.x,e=a.y,d=a.eventId;return{type:"click",pointerType:a.pointerType,button:a.button,buttons:a.buttons,
x:c,y:e,native:a.native,timestamp:b.timestamp,screenPoint:new q(c,e),mapPoint:this.view.toMap(c,e),eventId:d,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapDoubleClick=function(b){var a=b.data,c=a.x,e=a.y,d=a.eventId;return{type:"double-click",pointerType:a.pointerType,button:a.button,buttons:a.buttons,x:c,y:e,native:a.native,timestamp:b.timestamp,mapPoint:this.view.toMap(c,e),eventId:d,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapImmediateClick=
function(b){var a=b.data,c=a.x,e=a.y,d=a.eventId;return{type:"immediate-click",pointerType:a.pointerType,button:a.button,buttons:a.buttons,x:c,y:e,native:a.native,timestamp:b.timestamp,mapPoint:this.view.toMap(c,e),eventId:d,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapHold=function(b){var a=b.data,c=a.x,e=a.y;return{type:"hold",pointerType:a.pointerType,button:a.button,buttons:a.buttons,x:c,y:e,native:a.native,timestamp:b.timestamp,mapPoint:this.view.toMap(c,e),stopPropagation:function(){return b.stopPropagation()}}};
f.prototype.wrapDrag=function(b){var a=b.data,c=a.center,e=c.x,c=c.y,d=a.action,f=a.pointerType,g=a.button;"start"===d&&(this.latestDragStart=a);if(this.latestDragStart){var h=a.pointer.native,k=a.buttons,l=b.timestamp,m={x:this.latestDragStart.center.x,y:this.latestDragStart.center.y};"end"===d&&(this.latestDragStart=void 0);return{type:"drag",action:d,x:e,y:c,origin:m,pointerType:f,button:g,buttons:k,radius:a.radius,angle:r.rad2deg(a.angle),native:h,timestamp:l,stopPropagation:function(){return b.stopPropagation()}}}};
f.prototype.wrapKeyDown=function(b){var a=b.data;return{type:"key-down",key:a.key,repeat:a.repeat,native:a.native,timestamp:b.timestamp,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapKeyUp=function(b){var a=b.data;return{type:"key-up",key:a.key,native:a.native,timestamp:b.timestamp,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapPointer=function(b,a){var c=b.data,e=c.native;return{type:a,x:c.x,y:c.y,pointerId:e.pointerId,pointerType:e.pointerType,
button:c.button,buttons:c.buttons,native:e,timestamp:b.timestamp,eventId:c.eventId,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapPointerDrag=function(b){var a=b.data.currentEvent;return{type:"pointer-drag",x:a.x,y:a.y,pointerId:b.data.startEvent.native.pointerId,pointerType:b.data.startEvent.native.pointerType,button:b.data.startEvent.button,buttons:a.buttons,action:b.data.action,origin:{x:b.data.startEvent.x,y:b.data.startEvent.y},native:a.native,timestamp:b.timestamp,
eventId:a.eventId,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapMouseWheel=function(b){var a=b.data;return{type:"mouse-wheel",x:a.x,y:a.y,deltaY:a.deltaY,native:a.native,timestamp:b.timestamp,stopPropagation:function(){return b.stopPropagation()}}};f.prototype.wrapGamepad=function(b){var a=b.data,c=a.state;return{type:"gamepad",device:a.device,timestamp:b.timestamp,action:a.action,buttons:c.buttons,axes:c.axes,stopPropagation:function(){return b.stopPropagation()}}};return f}(t.InputHandler)});