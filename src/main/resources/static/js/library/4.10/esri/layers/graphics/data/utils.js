// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../featureConversionUtils","../OptimizedGeometry"],function(m,f,c,g){Object.defineProperty(f,"__esModule",{value:!0});var l=new g.default,h=new g.default,k={esriGeometryPoint:c.convertToPoint,esriGeometryPolyline:c.convertToPolyline,esriGeometryPolygon:c.convertToPolygon,esriGeometryMultipoint:c.convertToMultipoint};f.getCentroid=function(a,b,d){if("esriGeometryPolygon"!==a.geometryType||!b.centroid&&!b.geometry)return null;b.centroid||(b.centroid=c.getCentroidOptimizedGeometry(new g.default,
b.geometry,a.hasZ,a.hasM));return d?(b=c.quantizeOptimizedGeometry(h,b.centroid,a.hasZ,a.hasM,"esriGeometryPoint",d),c.convertToPoint(b,a.hasZ,a.hasM)):c.convertToPoint(b.centroid,a.hasZ,a.hasM)};f.getGeometry=function(a,b,d,e){return b.geometry?d?(b=c.generalizeOptimizedGeometry(l,b.geometry,a.hasZ,a.hasM,a.geometryType,d),e&&(b=c.quantizeOptimizedGeometry(h,b,a.hasZ,a.hasM,a.geometryType,e)),k[a.geometryType](b,a.hasZ,a.hasM)):e?(b=c.quantizeOptimizedGeometry(h,b.geometry,a.hasZ,a.hasM,a.geometryType,
e),k[a.geometryType](b,a.hasZ,a.hasM)):k[a.geometryType](b.geometry,a.hasZ,a.hasM):null}});