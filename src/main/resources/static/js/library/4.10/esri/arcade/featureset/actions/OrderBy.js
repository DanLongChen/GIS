// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper dojo/Deferred ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../support/shared".split(" "),function(t,u,q,k,m,l,r,b){var p=function(n){function f(a){var c=n.call(this,a)||this;c._orderbyclause=null;c.declaredClass="esri.arcade.featureset.actions.OrderBy";c._maxProcessing=100;c._orderbyclause=a.orderbyclause;c._parent=a.parentfeatureset;return c}q(f,n);f.prototype._getSet=function(a){var c=this,g=new k;null===this._wset?
this._ensureLoaded().then(b.callback(function(){c._getFilteredSet("",null,null,c._orderbyclause,a).then(b.callback(function(b){c._checkCancelled(a);c._wset=b;g.resolve(c._wset)},g),b.errback(g))},g),b.errback(g)):g.resolve(this._wset);return g.promise};f.prototype.manualOrderSet=function(a,c){var g=this,e=new k;this.getIdColumnDictionary(a,[],-1,c).then(b.callback(function(a){g._orderbyclause.order(a);for(var c=new l([],[],!0,null),b=0;b<a.length;b++)c._known.push(a[b].id);e.resolve(c)},e),b.errback(e));
return e.promise};f.prototype.getIdColumnDictionary=function(a,c,g,e){var f=this,d=new k;if(g<a._known.length-1){var h=this._maxQueryRate();"GETPAGES"===a._known[g+1]?this._parent._expandPagedSet(a,h,0,0,e).then(b.callback(function(h){f.getIdColumnDictionary(a,c,g,e).then(b.callback(function(a){d.resolve(a)},d),b.errback(d))},d),b.errback(d)):this._parent._getFeature(a,a._known[g+1],e).then(b.callback(function(h){g+=1;f._checkCancelled(e);c.push({id:a._known[g],feature:h});f.getIdColumnDictionary(a,
c,g,e).then(b.callback(function(a){d.resolve(a)},d),b.errback(d))},d),b.errback(d))}else 0<a._candidates.length?this._refineSetBlock(a,this._maxProcessingRate(),e).then(b.callback(function(){f._checkCancelled(e);f.getIdColumnDictionary(a,c,g,e).then(b.callback(function(a){d.resolve(a)},d),b.errback(d))},d),b.errback(d)):d.resolve(c);return d.promise};f.prototype._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};f.prototype._getFeatures=function(a,c,b,e){return this._parent._getFeatures(a,
c,b,e)};f.prototype._featureFromCache=function(a){if(void 0===this._featureCache[a]){var c=this._parent._featureFromCache(a);return void 0===c?void 0:null===c?null:this._featureCache[a]=c}return this._featureCache[a]};f.prototype._fetchAndRefineFeatures=function(a,c,b){a=new k;a.reject(Error("Fetch and Refine should not be called in this featureset"));return a.promise};f.prototype._getFilteredSet=function(a,c,g,e,f){var d=this,h=new k;this._ensureLoaded().then(b.callback(function(){d._parent._getFilteredSet(a,
c,g,null===e?d._orderbyclause:e,f).then(b.callback(function(a){d._checkCancelled(f);var e;e=new l(a._candidates.slice(0),a._known.slice(0),a._ordered,d._clonePageDefinition(a.pagesDefinition));var k=!0;0<a._candidates.length&&(k=!1);!1===e._ordered?d.manualOrderSet(e,f).then(b.callback(function(a){!1!==k||null===c&&null===g||(a=new l(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,d._clonePageDefinition(a.pagesDefinition)));h.resolve(a)},h),b.errback(h)):h.resolve(e)},h),b.errback(h))},
h),b.errback(h));return h.promise};f.prototype.arcadeScriptStep=function(a,c,b){a=this.arcadeAssignNextScriptStepIdentifiers(b);c=this._orderbyclause.constructClause();return"var "+a.newFeatureSet+" \x3d "+this.bigDataCachePipeline("orderby( "+a.currentFeatureSet+',"'+c+'")')+";"};return f}(m);m._featuresetFunctions.orderBy=function(b){return""===b?this:new p({parentfeatureset:this,orderbyclause:new r(b)})};return p});