// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/PluginTarget","require dojo/aspect dojo/_base/array dojo/_base/lang dojo/Deferred dojo/when".split(" "),function(h,k,l,p,m,n){function g(){k.after(this.constructor._meta,"ctor",this._pluginsHandler,!0);this._plugins={}}g.prototype={addPlugin:function(b,a){var d=this,e=this._plugins,c=new m;try{h([b],function(f){b in e?c.resolve({id:e[b].declaredId||b.replace(/\//g,".")}):(e[b]=f,n(f.add(d,a),function(){var a={id:f.declaredId||b.replace(/\//g,".")};d.emit("plugin-add",a);c.resolve(a)},
function(a){c.reject(a)}))})}catch(f){c.reject(f)}return c.promise},removePlugin:function(b){if(b in this._plugins){var a=this._plugins[b];a.remove(this);delete this._plugins[b];this.emit("plugin-remove",{id:a.declaredId||b.replace(/\//g,".")})}},_pluginsHandler:function(){var b=this;l.some(arguments,function(a){if(a&&a.plugins&&a.plugins instanceof Array){a=a.plugins;var d,e,c;for(c=0;c<a.length;c++)d=a[c],e=d instanceof Object?d.id:d,b.addPlugin(e,d.options);return!0}})}};return g});