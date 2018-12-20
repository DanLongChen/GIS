// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Graphic ../../../core/Collection ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./LayerView3D ./graphics/Graphics3DFrustumVisibility ./graphics/Graphics3DGraphicLikeLayerView ./graphics/Graphics3DHighlights ./graphics/graphicUtils ./support/popupUtils3D ./support/projectExtentUtils".split(" "),function(v,w,k,d,g,l,e,h,c,m,n,p,q,r,t,u){return function(f){function a(){var b=
null!==f&&f.apply(this,arguments)||this;b.highlights=new q;b.frustumVisibility=new n;b.slicePlaneEnabled=!1;b.supportsDraping=!0;b.overlayUpdating=!1;b.suspendResumeExtent=null;b.fullExtentInLocalViewSpatialReference=null;b.frameWorker=null;return b}k(a,f);a.prototype.initialize=function(){var b=this;this._set("graphics3d",new p({owner:this,layer:this.layer,scaleVisibilityEnabled:!0}));this.graphics3d.setup();this.frustumVisibility.setup(this);this.highlights.setup(this.graphics3d.graphicsCore);this.setupSuspendResumeExtent();
this.handles.add(this.watch("fullOpacity",function(){return b.graphics3d.graphicsCore.opacityChange()}));this.handles.add(this.layer.on("graphic-update",function(a){return b.graphics3d.graphicsCore.graphicUpdateHandler(a)}));this.frameWorker=this.view.resourceController.registerIdleFrameWorker({needsUpdate:function(){return b.frustumVisibility.needsIdleUpdate()},idleFrame:function(a){return b.frustumVisibility.idleUpdate(a)}});var a=u.toViewIfLocal(this).then(function(a){b.fullExtentInLocalViewSpatialReference=
a});a&&this.addResolvingPromise(a);this.drawingOrder=this.view.getDrawingOrder(this.layer.uid);this.handles.add(h.whenTrueOnce(this.view,"basemapTerrain.ready",function(){return b.notifyChange("updating")}))};a.prototype.destroy=function(){this.frameWorker&&(this.frameWorker.remove(),this.frameWorker=null);this.frustumVisibility&&(this.frustumVisibility.destroy(),this._set("frustumVisibility",null));this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));this.highlights&&(this.highlights.destroy(),
this.highlights=null)};Object.defineProperty(a.prototype,"drawingOrder",{set:function(b){this.graphics3d.graphicsCore.setDrawingOrder(b);this._set("drawingOrder",b)},enumerable:!0,configurable:!0});a.prototype.fetchPopupFeatures=function(b,a){return b?e.resolve(t.queryDrapedGraphics({view:this.view,loadedGraphics:this.loadedGraphics,layer:this.layer,area:b,clientGraphics:a})):e.resolve(a)};Object.defineProperty(a.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"graphics3DGraphicsByObjectID",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},enumerable:!0,configurable:!0});a.prototype.getRenderingInfo=function(b){return{symbol:b.symbol||null}};a.prototype.getGraphicFromGraphicUid=function(b){return this.graphics3d.getGraphicFromGraphicUid(b)};
a.prototype.whenGraphicBounds=function(b,a){return this.graphics3d.whenGraphicBounds(b,a)};a.prototype.queryGraphics=function(){return e.resolve(this.loadedGraphics)};a.prototype.highlight=function(a,c){void 0===c&&(c={});if(a instanceof g)return this.highlight([a],c);a instanceof l&&(a=a.toArray());if(Array.isArray(a)&&0<a.length&&a[0]instanceof g){a=a.map(function(a){return a.uid});c=this.highlights.acquireSet(c,null);var b=c.handle;this.highlights.setUids(c.set,a);return b}return{remove:function(){}}};
a.prototype.getStats=function(){return{features:this.loadedGraphics.length,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}};a.prototype.canResume=function(){return!this.inherited(arguments)||this.frustumVisibility&&this.frustumVisibility.suspended||this.graphics3d.suspended?!1:!0};a.prototype.isUpdating=function(){return!(!(this.overlayUpdating||this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&
this.frustumVisibility.updating)&&this.view.basemapTerrain&&this.view.basemapTerrain.ready)};a.prototype.setupSuspendResumeExtent=function(){var a=this;h.init(this.graphics3d.graphicsCore,"computedExtent",function(b){a.suspendResumeExtent=r.enlargeExtent(b,a.suspendResumeExtent,1.2);a.frustumVisibility.setExtent(a.suspendResumeExtent)},!0)};d([c.property({aliasOf:"layer.graphics"})],a.prototype,"loadedGraphics",void 0);d([c.property({dependsOn:["frustumVisibility.suspended","graphics3d.suspended"]})],
a.prototype,"suspended",void 0);d([c.property({dependsOn:["frustumVisibility.updating","graphics3d.updating","overlayUpdating"]})],a.prototype,"updating",void 0);d([c.property()],a.prototype,"layer",void 0);d([c.property()],a.prototype,"highlights",void 0);d([c.property({readOnly:!0})],a.prototype,"frustumVisibility",void 0);d([c.property({readOnly:!0})],a.prototype,"graphics3d",void 0);d([c.property({type:Boolean})],a.prototype,"slicePlaneEnabled",void 0);d([c.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],
a.prototype,"hasDraped",void 0);d([c.property({type:Boolean})],a.prototype,"supportsDraping",void 0);d([c.property({type:Boolean})],a.prototype,"overlayUpdating",void 0);d([c.property()],a.prototype,"drawingOrder",null);return a=d([c.subclass("esri.views.3d.layers.GraphicsLayerView3D")],a)}(c.declared(m))});