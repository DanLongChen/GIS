// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,h){var f=function(){return function(){}}();return function(){function c(a,b,e,d,c){void 0===d&&(d=1);void 0===c&&(c=0);this.classConstructor=a;this.acquireFunctionOrWithConstructor=b;this.releaseFunction=e;this.growthSize=d;!0===b?this.acquireFunction=this._constructorAcquireFunction:"function"===typeof b&&(this.acquireFunction=b);this._pool=Array(c);this._set=new Set;this._initialSize=c;for(a=0;a<c;a++)this._pool[a]=new this.classConstructor;this.growthSize=
Math.max(d,1)}c.prototype.acquire=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b=this.classConstructor||f;if(0===this._pool.length)for(var e=this.growthSize,c=0;c<e;c++)this._pool[c]=new b;b=this._pool.pop();this.acquireFunction?this.acquireFunction.apply(this,[b].concat(a)):b&&b.acquire&&"function"===typeof b.acquire&&b.acquire.apply(b,a);this._set.delete(b);return b};c.prototype.release=function(a){a&&!this._set.has(a)&&(this.releaseFunction?this.releaseFunction(a):a&&a.release&&
"function"===typeof a.release&&a.release(),this._pool.push(a),this._set.add(a))};c.prototype.prune=function(a){void 0===a&&(a=this._initialSize);if(!(a>=this._pool.length)){for(var b=a;b<this._pool.length;++b){var c=this._pool[b];this._set.delete(c);c.dispose&&"function"===typeof c.dispose&&c.dispose()}this._pool.length=a}};c.prototype._constructorAcquireFunction=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];var d;(d=this.classConstructor).call.apply(d,[a].concat(b))};return c}()});