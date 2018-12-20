//>>built
define("dojox/geo/openlayers/GreatCircle",["dojo/_base/lang","./_base","./GeometryFeature"],function(n,k,l){return k.GreatCircle={toPointArray:function(a,b,f){var g=a.x,e=b.x,d=Math.min(g,e),h=Math.max(g,e),c=this.DEG2RAD,g=a.y*c;a=a.x*c;e=b.y*c;b=b.x*c;Math.abs(a-b)<=this.TOLERANCE&&(b=Math.min(a,b)+Math.PI);Math.abs(b-a)==Math.PI&&0==g+e&&(e+=Math.PI/18E7);d*=c;h*=c;f*=c;for(var c=[],k=0,m=this.RAD2DEG;d<=h;){lat=Math.atan((Math.sin(g)*Math.cos(e)*Math.sin(d-b)-Math.sin(e)*Math.cos(g)*Math.sin(d-
a))/(Math.cos(g)*Math.cos(e)*Math.sin(a-b)));var l={x:d*m,y:lat*m};c[k++]=l;d=d<h&&d+f>=h?h:d+f}return c},toLineString:function(a,b,f){a=this.toPointArray(a,b,f);return new OpenLayers.Geometry.LineString(a)},toGeometryFeature:function(a,b,f){a=this.toLineString(a,b,f);return new l(a)},DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,TOLERANCE:1E-5}});