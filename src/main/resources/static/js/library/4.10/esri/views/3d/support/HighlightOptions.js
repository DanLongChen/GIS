// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/Accessor ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/gl-matrix".split(" "),function(l,m,g,d,e,h,c,k){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b.color=new e([0,255,255]);b.haloOpacity=1;b.fillOpacity=.25;return b}g(a,f);a.toEngineOptions=function(b){var a=e.toUnitRGBA(b.color);return{color:k.vec4f32.fromValues(a[0],
a[1],a[2],a[3]),haloOpacity:b.haloOpacity,haloOpacityOccluded:.25*b.haloOpacity,fillOpacity:b.fillOpacity,fillOpacityOccluded:.25*b.fillOpacity}};d([c.property({type:e})],a.prototype,"color",void 0);d([c.property()],a.prototype,"haloOpacity",void 0);d([c.property()],a.prototype,"fillOpacity",void 0);return a=d([c.subclass()],a)}(c.declared(h))});