// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Evented ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/ScreenPoint ./DrawAction ./input/DrawEvents".split(" "),function(m,n,p,k,q,r,t,h,e,u,v){Object.defineProperty(n,"__esModule",{value:!0});var w=function(){function e(c,a,b){this.view=c;this.native=a;this.vertices=b;this.defaultPrevented=!1;this.type="rectangle-cursor-update"}
e.prototype.preventDefault=function(){this.defaultPrevented=!0};return e}();m=function(l){function c(){var a=null!==l&&l.apply(this,arguments)||this;a._cursorMoved=!1;a._startPoint=null;a._viewHandles=new t;a._dragEnabled=!0;a.vertices=[];a.view=null;return a}p(c,l);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};c.prototype.complete=function(){4===this.vertices.length&&this._drawCompleteHandler(null)};
c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("pointer-down",function(b){a._startPoint=new e({x:b.x,y:b.y})}),this.view.on("pointer-move",function(b){if(a._startPoint){var f=new e({x:b.x,y:b.y});a._cursorMoved=!0;a._cursorUpdateHandler(b.native,f)}}),this.view.on("pointer-up",function(b){if(!a._cursorMoved){var f=b.x,c=b.y,g=a.view.toMap(new e(f-48,c+48)),f=a.view.toMap(new e(f+48,c-48));a._set("vertices",[[g.x,f.y],[f.x,f.y],[f.x,
g.y],[g.x,g.y]])}a._drawCompleteHandler(b.native)}),this.view.on("drag",function(b){a._dragEnabled&&a._startPoint&&b.stopPropagation()})])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._cursorUpdateHandler=function(a,b){var c=b.x,d=b.y;b=Math.min(c,this._startPoint.x);var g=Math.min(d,this._startPoint.y),c=Math.abs(c-this._startPoint.x),d=Math.abs(d-this._startPoint.y);c&&d?(d=this.view.toMap(new e({x:b,y:g+d})),b=this.view.toMap(new e({x:b+c,y:g})),this._set("vertices",
[[d.x,b.y],[b.x,b.y],[b.x,d.y],[d.x,d.y]]),a=new w(this.view,a,this.vertices),this.emit("cursor-update",a)):this._set("vertices",[])};c.prototype._drawCompleteHandler=function(a){a=new v.DrawCompleteEvent(a,this.vertices);this.emit("draw-complete",a);a.defaultPrevented?(this._cursorMoved=!1,this._startPoint=null,this._set("vertices",[])):this._removeViewHandles()};k([h.property({readOnly:!0})],c.prototype,"vertices",void 0);k([h.property()],c.prototype,"view",void 0);return c=k([h.subclass("esri/views/2d/engine/markup/RectangleDrawAction")],
c)}(h.declared(u,q,r));n.RectangleDrawAction=m});