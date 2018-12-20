// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Handles ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine/Container ./LayerView2D ./support/GraphicsView2D".split(" "),function(m,n,f,c,g,e,b,h,k,l){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a._handles=new g;a.container=new h.Container;return a}f(a,d);a.prototype.hitTest=function(a,b){return this.suspended||!this.graphicsView?
e.resolve(null):this.graphicsView.hitTest(a,b)};a.prototype.attach=function(){this.graphicsView=new l.default({view:this.view,graphics:this.layer.graphics});this.graphicsView.install(this.container);this._handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))};a.prototype.detach=function(){this.graphicsView.destroy();this._handles.removeAll()};a.prototype.update=function(a){this.graphicsView.update(a)};a.prototype.moveStart=function(){this.requestUpdate()};a.prototype.viewChange=
function(){this.requestUpdate()};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};a.prototype.queryGraphics=function(){return e.resolve(this.graphicsView.graphics)};c([b.property()],a.prototype,"graphicsView",void 0);c([b.property({dependsOn:["graphicsView.updating"]})],a.prototype,"updating",void 0);return a=c([b.subclass("esri.views.2d.layers.GraphicsLayerView2D")],a)}(b.declared(k))});