// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","./symbolComplexity","../../support/PromiseLightweight"],function(h,k,e,f,g){return function(d){function a(a,c){var b=d.call(this)||this;b.symbol=a;b.graphics3DSymbol=null;b.referenced=0;a.fetchSymbol().then(function(a){if(b.isRejected())throw Error();a.id=b.symbol.id;b.graphics3DSymbol=c(a)}).then(function(){if(b.isRejected())throw Error();b.graphics3DSymbol.then(function(){b.isRejected()||b.resolve()},function(a){b.isRejected()||
b.reject(a)})}).catch(function(a){b.isRejected()||b.reject(a)});return b}e(a,d);a.prototype.createGraphics3DGraphic=function(a){return this.graphics3DSymbol.createGraphics3DGraphic(a,this)};Object.defineProperty(a.prototype,"complexity",{get:function(){return this.graphics3DSymbol?this.graphics3DSymbol.complexity:f.emptySymbolComplexity},enumerable:!0,configurable:!0});a.prototype.layerPropertyChanged=function(a,c){return this.graphics3DSymbol.layerPropertyChanged(a,c)};a.prototype.applyRendererDiff=
function(a,c){return this.graphics3DSymbol.applyRendererDiff(a,c)};a.prototype.getFastUpdateStatus=function(){return this.graphics3DSymbol?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}};a.prototype.setDrawOrder=function(a,c){this.graphics3DSymbol&&this.graphics3DSymbol.setDrawOrder(a,c)};a.prototype.destroy=function(){this.isFulfilled()||this.reject();this.graphics3DSymbol&&this.graphics3DSymbol.destroy();this.graphics3DSymbol=void 0};Object.defineProperty(a.prototype,"destroyed",
{get:function(){return void 0===this.graphics3DSymbol},enumerable:!0,configurable:!0});return a}(g.Promise)});