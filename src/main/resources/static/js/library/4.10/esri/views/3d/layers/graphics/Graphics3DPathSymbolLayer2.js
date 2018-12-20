// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/lang ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../geometry/Point ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./symbolComplexity ../support/FastSymbolUpdates ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/pathGeometryUtils ../../webgl-engine/lib/Util ../../webgl-engine/materials/PathMaterial".split(" "),
function(y,Y,J,C,u,K,L,v,M,N,O,D,P,E,Q,R,S,z,T,U){function V(e,c,a,b){e=e.stageObject;var f=e.getMetadata().pathGeometryBuilder;if(!f)throw Error("pathgeometry metadata expected");var F=e.getGeometryRecords(),G=F.length;w.spatialReference=a.spatialReference;for(var H="absolute-height"!==c.mode,h=0,l=0;l<G;l++){for(var k=F[l].geometry,n=f[k.id],q=n.path.offset,m=k.data.getVertexAttr()[W.POSITION].data,u=0,d=0;d<n.path.vertices.length;d++){var r=n.path.vertices[d];w.x=r.mapPos[0];w.y=r.mapPos[1];w.z=
r.mapPos[2];r.elevation=v.computeElevation(a,w,c,b,H?I:null);H&&(u+=I.terrainElevation)}for(d=0;d<n.numVerticesTotal;++d)r=n.path.vertices[n.pathVertexData[d]],t[0]=m[3*d+0]+q[0],t[1]=m[3*d+1]+q[1],t[2]=m[3*d+2]+q[2],b.setAltitude(r.elevation,t),m[3*d+0]=t[0]-q[0],m[3*d+1]=t[1]-q[1],m[3*d+2]=t[2]-q[2];k.invalidateBoundingInfo();e.geometryVertexAttrsUpdated(l);h+=u/n.path.vertices.length}return h/G}y=function(e){function c(){return null!==e&&e.apply(this,arguments)||this}J(c,e);c.prototype._prepareResources=
function(){if(!this._isPropertyDriven("size")){var a=N.validateSymbolLayerSize(this._getSymbolSize());if(a){this._logWarning(a);this.reject();return}}var a=this._getStageIdHint(),b=this._getMaterialOpacityAndColor(),f=u.vec3f32.fromValues(b[0],b[1],b[2]),b=b[3],f={diffuse:f,ambient:f,opacity:b,transparent:1>b||this._isPropertyDriven("opacity"),vertexColors:this._isPropertyDriven("color")||this._isPropertyDriven("opacity"),slicePlaneEnabled:this._context.slicePlaneEnabled};this._vvConvertOptions={modelSize:[1,
1,1],symbolSize:[1,1,1],unitInMeters:this._context.renderCoordsHelper.unitInMeters,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,rotation:!1}};this._fastUpdates=D.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions);C.mixin(f,this._fastUpdates.materialParameters);this._pathMaterial=new U(f,a+"_pathmat");this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?this._pathMaterial.setParameterValues({size:1}):this._pathMaterial.setParameterValues({size:this._getSymbolSize()/
this._context.renderCoordsHelper.unitInMeters});this._context.stage.add(E.ModelContentType.MATERIAL,this._pathMaterial);this._profile=z.Profile.tube(X);this._extruder=new z.SimpleExtruder;this.resolve()};c.prototype.destroy=function(){e.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._pathMaterial&&(this._context.stage.remove(E.ModelContentType.MATERIAL,this._pathMaterial.id),this._pathMaterial=null)};c.prototype.createGraphics3DGraphic=function(a){var b=a.graphic;if("polyline"!==
b.geometry.type)return this._logWarning("unsupported geometry type for path symbol: "+b.geometry.type),null;if(!this._validateGeometry(b.geometry))return null;var f="graphic"+b.uid,c=this.getGraphicElevationContext(b);return this._createAs3DShape(b,a.renderingInfo,c,f,b.uid)};c.prototype.layerOpacityChanged=function(){var a=this._getMaterialOpacity(),b=1>a||this._isPropertyDriven("opacity");this._pathMaterial.setParameterValues({opacity:a,transparent:b});return!0};c.prototype.layerElevationInfoChanged=
function(a,b,c){var f=this;a.forEach(function(a){var c=b(a);c&&(a=f.getGraphicElevationContext(a.graphic),c.needsElevationUpdates=v.needsElevationUpdates3D(a.mode),c.elevationContext.set(a))});return!0};c.prototype.slicePlaneEnabledChanged=function(a,b){this._pathMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};c.prototype.applyRendererDiff=function(a,b){for(var c in a.diff)switch(c){case "visualVariables":if(D.updateFastSymbolUpdatesState(this._fastUpdates,
b,this._vvConvertOptions))a={},C.mixin(a,this._fastUpdates.materialParameters),this._pathMaterial.setParameterValues(a);else return!1;break;default:return!1}return!0};c.prototype.computeComplexity=function(){var a=this._profile.vertices.length/3,b=O.defaultSymbolLayerMemoryComplexity(this.symbolContainer,this.symbol);return{primitivesPerFeature:-4,primitivesPerCoordinate:2*a,memory:b}};c.prototype._getSymbolSize=function(){return this.symbol.size||1};c.prototype._createAs3DShape=function(a,b,c,e,
t){var f={},h=a.geometry,l=h.paths,k=[],n=[],q=[],m=u.vec3f32.create(),w=this._context.renderSpatialReference===P.SphericalECEFSpatialReference,d=Array(6),h=v.getGeometryVertexData3D(l,h.hasZ,h.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,this._context.renderCoordsHelper,c);this._logGeometryCreationWarnings(h,l,"paths","PathSymbol3DLayer");if(0<l.length){for(var l=h.geometryData.outlines,r=h.eleVertexData,B=h.vertexData,A=0;A<l.length;++A){var x=l[A],p=x.index,
g=x.count;if(!(2>g)){if(this._context.clippingExtent&&(v.computeBoundingBox(r,p,g,d),v.boundingBoxClipped(d,this._context.clippingExtent)))continue;v.chooseOrigin(B,p,g,m);v.subtractCoordinates(B,p,g,m);x=u.mat4f64.create();u.mat4.translate(x,x,m);p=new z.Path(B,r,p,g,w,m);p=new z.Builder(p,this._profile,this._extruder);this._fastUpdates.enabled&&p.setVisualVariableValue(this.getFastUpdateAttrValues(a));g=p.createGeometryData();if(this._pathMaterial.getParams().vertexColors)var y=this._getVertexOpacityAndColor(b),
g=R.addVertexColors(g,y);g=new Q(g,e+"path"+A);f[g.id]=p;g.singleUse=!0;k.push(g);n.push(this._pathMaterial);q.push(x)}}a={layerUid:this._context.layer.uid,graphicUid:t,pathGeometryBuilder:f};if(0<k.length)return e=new S({geometries:k,materials:n,transformations:q,castShadow:!0,metadata:a,idHint:e}),k=new L(this,e,k,null,null,V,c),k.alignedTerrainElevation=h.terrainElevation,k.needsElevationUpdates=v.needsElevationUpdates3D(c.mode),k}return null};return c}(M);var W=T.VertexAttrConstants,t=u.vec3f64.create(),
w=new K,I={verticalDistanceToGround:0,terrainElevation:0},X=10;return y});