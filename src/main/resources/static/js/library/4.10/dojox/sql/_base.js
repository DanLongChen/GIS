//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/sql/_crypto"],function(k,n,f){k.provide("dojox.sql._base");k.require("dojox.sql._crypto");k.mixin(f.sql,{dbName:null,debug:k.exists("dojox.sql.debug")?f.sql.debug:!1,open:function(a){if(!this._dbOpen||a&&a!=this.dbName){this.dbName||(this.dbName="dot_store_"+window.location.href.replace(/[^0-9A-Za-z_]/g,"_"),63<this.dbName.length&&(this.dbName=this.dbName.substring(0,63)));a||(a=this.dbName);try{this._initDb(),this.db.open(a),this._dbOpen=!0}catch(b){throw b.message||
b;}}},close:function(a){if(!k.isIE&&(this._dbOpen||a&&a!=this.dbName)){a||(a=this.dbName);try{this.db.close(a),this._dbOpen=!1}catch(b){throw b.message||b;}}},_exec:function(a){try{this._initDb();this._dbOpen||(this.open(),this._autoClose=!0);var b=null,c=null,d=null,e=k._toArray(a),b=e.splice(0,1)[0];if(this._needsEncrypt(b)||this._needsDecrypt(b))c=e.splice(e.length-1,1)[0],d=e.splice(e.length-1,1)[0];this.debug&&this._printDebugSQL(b,e);if(this._needsEncrypt(b))return new f.sql._SQLCrypto("encrypt",
b,d,e,c),null;if(this._needsDecrypt(b))return new f.sql._SQLCrypto("decrypt",b,d,e,c),null;var g=this.db.execute(b,e),g=this._normalizeResults(g);this._autoClose&&this.close();return g}catch(h){h=h.message||h;console.debug("SQL Exception: "+h);if(this._autoClose)try{this.close()}catch(l){console.debug("Error closing database: "+l.message||l)}throw h;}},_initDb:function(){if(!this.db)try{this.db=google.gears.factory.create("beta.database","1.0")}catch(a){k.setObject("google.gears.denied",!0);if(f.off)f.off.onFrameworkEvent("coreOperationFailed");
throw"Google Gears must be allowed to run";}},_printDebugSQL:function(a,b){a='dojox.sql("'+a+'"';for(var c=0;c<b.length;c++)a="string"==typeof b[c]?a+(', "'+b[c]+'"'):a+(", "+b[c]);console.debug(a+")")},_normalizeResults:function(a){var b=[];if(!a)return[];for(;a.isValidRow();){for(var c={},d=0;d<a.fieldCount();d++){var e=a.fieldName(d),f=a.field(d);c[e]=f}b.push(c);a.next()}a.close();return b},_needsEncrypt:function(a){return/encrypt\([^\)]*\)/i.test(a)},_needsDecrypt:function(a){return/decrypt\([^\)]*\)/i.test(a)}});
k.declare("dojox.sql._SQLCrypto",null,{constructor:function(a,b,c,d,e){"encrypt"==a?this._execEncryptSQL(b,c,d,e):this._execDecryptSQL(b,c,d,e)},_execEncryptSQL:function(a,b,c,d){var e=this._stripCryptoSQL(a),g=this._flagEncryptedArgs(a,c),h=this;this._encrypt(e,b,c,g,function(c){var g=[],k=null;try{g=f.sql.db.execute(e,c)}catch(m){k=m.message||m}if(null!=k){if(f.sql._autoClose)try{f.sql.close()}catch(m){}d(null,!0,k.toString())}else g=f.sql._normalizeResults(g),f.sql._autoClose&&f.sql.close(),f.sql._needsDecrypt(a)?
(c=h._determineDecryptedColumns(a),h._decrypt(g,c,b,function(a){d(a,!1,null)})):d(g,!1,null)})},_execDecryptSQL:function(a,b,c,d){var e=this._stripCryptoSQL(a);a=this._determineDecryptedColumns(a);var g=[],h=null;try{g=f.sql.db.execute(e,c)}catch(l){h=l.message||l}if(null!=h){if(f.sql._autoClose)try{f.sql.close()}catch(l){}d(g,!0,h.toString())}else g=f.sql._normalizeResults(g),f.sql._autoClose&&f.sql.close(),this._decrypt(g,a,b,function(a){d(a,!1,null)})},_encrypt:function(a,b,c,d,e){this._finishedCrypto=
this._totalCrypto=0;this._finishedSpawningCrypto=!1;this._finalArgs=c;for(a=0;a<c.length;a++)if(d[a]){var g=c[a],h=a;this._totalCrypto++;f.sql._crypto.encrypt(g,b,k.hitch(this,function(a){this._finalArgs[h]=a;this._finishedCrypto++;this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&e(this._finalArgs)}))}this._finishedSpawningCrypto=!0},_decrypt:function(a,b,c,d){this._finishedCrypto=this._totalCrypto=0;this._finishedSpawningCrypto=!1;this._finalResultSet=a;for(var e=0;e<a.length;e++){var f=
a[e],h;for(h in f)if("*"==b||b[h])this._totalCrypto++,this._decryptSingleColumn(h,f[h],c,e,function(a){d(a)})}this._finishedSpawningCrypto=!0},_stripCryptoSQL:function(a){a=a.replace(/DECRYPT\(\*\)/ig,"*");var b=a.match(/ENCRYPT\([^\)]*\)/ig);if(null!=b)for(var c=0;c<b.length;c++){var d=b[c],e=d.match(/ENCRYPT\(([^\)]*)\)/i)[1];a=a.replace(d,e)}b=a.match(/DECRYPT\([^\)]*\)/ig);if(null!=b)for(c=0;c<b.length;c++)d=b[c],e=d.match(/DECRYPT\(([^\)]*)\)/i)[1],a=a.replace(d,e);return a},_flagEncryptedArgs:function(a,
b){b=new RegExp(/([\"][^\"]*\?[^\"]*[\"])|([\'][^\']*\?[^\']*[\'])|(\?)/ig);for(var c=0,d=[];null!=b.exec(a);)if(!/^[\"\']/.test(RegExp.lastMatch+"")){var e=!1;/ENCRYPT\([^\)]*$/i.test(RegExp.leftContext)&&(e=!0);d[c]=e;c++}return d},_determineDecryptedColumns:function(a){var b={};if(/DECRYPT\(\*\)/i.test(a))b="*";else for(var c=/DECRYPT\((?:\s*\w*\s*\,?)*\)/ig,d=c.exec(a);d;)d=(new String(RegExp.lastMatch)).replace(/DECRYPT\(/i,""),d=d.replace(/\)/,""),d=d.split(/\s*,\s*/),k.forEach(d,function(a){/\s*\w* AS (\w*)/i.test(a)&&
(a=a.match(/\s*\w* AS (\w*)/i)[1]);b[a]=!0}),d=c.exec(a);return b},_decryptSingleColumn:function(a,b,c,d,e){f.sql._crypto.decrypt(b,c,k.hitch(this,function(b){this._finalResultSet[d][a]=b;this._finishedCrypto++;this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&e(this._finalResultSet)}))}});(function(){var a=f.sql;f.sql=new Function("return dojox.sql._exec(arguments);");k.mixin(f.sql,a)})()});