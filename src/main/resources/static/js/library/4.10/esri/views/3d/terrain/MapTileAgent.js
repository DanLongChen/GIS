// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/ObjectPool ./TileAgent ./tileUtils".split(" "),function(h,k,d,e,f,g){return function(c){function b(){var a=c.call(this)||this;a._scaleRangeEnabled=!0;return a}d(b,c);b.prototype.dataArrived=function(a){a===this.tile?(this._unsetUpsamplingTile(),this.tile.updateTexture()):this._setUpsamplingTile(a);this._dataRequested=null;a!==this.tile&&this._requestNext()};b.prototype._desiredMinLevelDelta=function(){return 0};b.prototype._setUpsamplingTile=
function(a){this._tileLayerInfo.upsampleFromTile&&this._tileLayerInfo.upsampleFromTile.tile===a||(this._unsetUpsamplingTile(),this._tileLayerInfo.upsampleFromTile=g.computeUpsampleInfoForAncestor(this.tile,a),this.tile.updateTexture())};b.Pool=new e(b);return b}(f)});