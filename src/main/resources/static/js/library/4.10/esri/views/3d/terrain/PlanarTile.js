// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/ObjectPool ../../../core/libs/gl-matrix-2/gl-matrix ../../../geometry/support/aaBoundingBox ../support/geometryUtils ../support/mathUtils ./Tile ./TileGeometryFactory".split(" "),function(g,v,k,l,m,n,p,h,q,r){g=function(c){function a(b,t,d,e){var f=c.call(this,a.NumSubdivisionsAtLevel)||this;f.tileUp=u;void 0!==b&&f.init(b,t,d,e);return f}k(a,c);a.prototype.init=function(b,a,d,e){c.prototype.init.call(this,b,a,d,e);this.edgeLen=
this.extent[2]-this.extent[0];this.edgeLen2=this.edgeLen*this.edgeLen;this.curvatureHeight=0;this.centerAtSeaLevel[0]=h.lerp(this.extent[0],this.extent[2],.5);this.centerAtSeaLevel[1]=h.lerp(this.extent[1],this.extent[3],.5);this.centerAtSeaLevel[2]=0;this.updateRadiusAndCenter()};a.prototype.updateRadiusAndCenter=function(){c.prototype.updateRadiusAndCenter.call(this);var b=(this.extent[2]-this.extent[0])*Math.SQRT1_2,a=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(b*
b+a*a)};a.prototype.isVisible=function(a){return this.intersectsClippingArea?p.frustum.intersectsAABB(a,n.wrap(this.extent[0],this.extent[1],this.elevationBounds[0],this.extent[2],this.extent[3],this.elevationBounds[1])):!1};a.prototype.createGeometry=function(a,c,d){a.needsUpdate=!1;r.createPlanarGlobeTile(a.numVertsPerRow,this.extent,a.samplerData,c,d,a.clippingArea,this.renderData);this.updateMemoryUsed()};a.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2];a.Pool=new l(a);return a}(q);var u=m.vec3f64.fromValues(0,
0,1);return g});