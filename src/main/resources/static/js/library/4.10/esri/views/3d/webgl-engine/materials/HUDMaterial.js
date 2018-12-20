// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../core/libs/gl-matrix-2/types/mat4 ../../../../geometry/support/aaBoundingRect ../../support/buffer/InterleavedLayout ../lib/ComponentUtils ../lib/GLMaterialTexture ../lib/Material ../lib/screenSizePerspectiveUtils ../lib/Util ./internal/bufferWriters ./internal/MaterialUtil ../shaders/HUDPrograms".split(" "),function(K,fa,C,d,S,T,U,V,D,W,G,b,u,k,H){function I(b,a){void 0===a&&(a=
L);if(b.textureIsSignedDistanceField){var c=b.anchorPos;b=b.distanceFieldBoundingBox;var e=a;e[0]=c[0]*(b[2]-b[0])+b[0];e[1]=c[1]*(b[3]-b[1])+b[1]}else d.vec2.copy(a,b.anchorPos);return a}var M={"bottom-left":d.vec2f64.fromValues(0,0),bottom:d.vec2f64.fromValues(.5,0),"bottom-right":d.vec2f64.fromValues(1,0),left:d.vec2f64.fromValues(0,.5),center:d.vec2f64.fromValues(.5,.5),right:d.vec2f64.fromValues(1,.5),"top-left":d.vec2f64.fromValues(0,1),top:d.vec2f64.fromValues(.5,1),"top-right":d.vec2f64.fromValues(1,
1)};K=function(m){function a(c,a){a=m.call(this,a)||this;a._textureDirty=!1;a.params=k.copyParameters(c,X);"string"===typeof a.params.anchorPos&&(a.params.anchorPos=M[a.params.anchorPos]);a.bufferWriter=new Y(a);return a}C(a,m);a.prototype.dispose=function(){};a.prototype.getParameterValues=function(){return this.params};a.prototype.setParameterValues=function(c){for(var a in c)"textureId"===a&&b.assert(!!this.params.textureId,"Can only change texture of material that already has a texture"),this.params[a]=
c[a];this.notifyDirty("matChanged")};a.prototype.getParams=function(){return this.params};a.prototype.intersect=function(c,a,g,h,B,w,Z,f){if(h.isSelection&&h.enableHUDSelection&&!V.isAllHidden(a.componentVisibilities,c.data.componentOffsets)){var e=c.data;c=this.params;B=a=1;d.mat3.fromMat4(E,g);if(f){B=f(N);a=B[0];B=B[5];f=E;w=f[0];var n=f[1],m=f[2],k=f[3],v=f[4],l=f[5],t=f[6],q=f[7],z=f[8],x=1/Math.sqrt(w*w+n*n+m*m),y=1/Math.sqrt(k*k+v*v+l*l),u=1/Math.sqrt(t*t+q*q+z*z);f[0]=w*x;f[1]=n*x;f[2]=m*
x;f[3]=k*y;f[4]=v*y;f[5]=l*y;f[6]=t*u;f[7]=q*u;f[8]=z*u}f=e.getVertexAttr()[b.VertexAttrConstants.POSITION];w=e.getVertexAttr()[b.VertexAttrConstants.SIZE];e=e.getVertexAttr()[b.VertexAttrConstants.NORMAL];b.assert(3<=f.size);n=h.point;m=h.camera;k=I(c);for(v=0;v<f.data.length/f.size;v++)l=v*f.size,d.vec3.set(r,f.data[l],f.data[l+1],f.data[l+2]),d.vec3.transformMat4(r,r,g),l=v*w.size,p[0]=w.data[l]*a,p[1]=w.data[l+1]*B,d.vec3.transformMat4(r,r,m.viewMatrix),l=v*e.size,d.vec3.set(O,e.data[l],e.data[l+
1],e.data[l+2]),this.applyVerticalOffsetTransformation(r,O,E,m,P),m.applyProjection(r,A),-1<A[0]&&(l=Math.floor(A[0]),q=Math.floor(A[1]),G.applyPrecomputedScaleFactorVec2(p,P.factor,p),l=l-F-(0<k[0]?p[0]*k[0]:0),t=l+p[0]+2*F,q=q-F-(0<k[1]?p[1]*k[1]:0),z=q+p[1]+2*F,c.textureIsSignedDistanceField&&(x=c.outlineSize/2,y=c.distanceFieldBoundingBox,l+=p[0]*y[0],q+=p[1]*y[1],t-=p[0]*(1-y[2]),z-=p[1]*(1-y[3]),l-=x,t+=x,q-=x,z+=x),n[0]>l&&n[0]<t&&n[1]>q&&n[1]<z&&(t=h.p0,q=h.p1,d.vec3.transformMat4(Q,r,d.mat4.invert(aa,
m.viewMatrix)),A[0]=n[0],A[1]=n[1],m.unprojectPoint(A,r),l=d.vec3f64.create(),d.vec3.subtract(l,q,t),q=1/d.vec3.length(l),d.vec3.scale(l,l,q),t=d.vec3.distance(t,r)*q,Z(t,l,-1,1,!0,Q)))}};a.prototype.normalAndViewAngle=function(c,a,g,h){void 0===h&&(h=J);d.vec3.transformMat3(h.normal,c,a);d.vec3.transformMat4(h.normal,h.normal,g.viewInverseTransposeMatrix);h.cosAngle=d.vec3.dot(R,ba);return h};a.prototype.updateScaleInfo=function(c,a,g){a=this.params;a.screenSizePerspective?c.factor=G.precomputeScaleFactor(J.cosAngle,
g,a.screenSizePerspective,c.factor):(c.factor.scale=1,c.factor.factor=0,c.factor.minPixelSize=0,c.factor.paddingPixels=0);a.screenSizePerspectiveAlignment?(c.scaleAlignment=G.precomputeScale(J.cosAngle,g,a.screenSizePerspectiveAlignment),c.minPixelSizeAlignment=a.screenSizePerspectiveAlignment.parameters.minPixelSize):(c.scaleAlignment=c.factor.scale,c.minPixelSizeAlignment=c.factor.minPixelSize)};a.prototype.applyVerticalOffsetTransformation=function(c,a,g,h,b,m){var e=this.params;S.isMat4(g)&&(g=
d.mat3.fromMat4(E,g));if(!e.verticalOffset||!e.verticalOffset.screenLength)return b&&(e.screenSizePerspective||e.screenSizePerspectiveAlignment)?(h=this.normalAndViewAngle(a,g,h),e=d.vec3.length(c),this.updateScaleInfo(b,h.cosAngle,e)):b&&(b.factor.scale=1,b.scaleAlignment=1),m?d.vec3.copy(m,c):c;a=this.normalAndViewAngle(a,g,h);g=d.vec3.length(c);h=k.verticalOffsetAtDistance(h,g,e.verticalOffset,a.cosAngle,e.screenSizePerspectiveAlignment||e.screenSizePerspective);b&&this.updateScaleInfo(b,a.cosAngle,
g);return d.vec3.add(m||c,c,d.vec3.scale(a.normal,a.normal,h))};a.prototype.getGLMaterials=function(){return{color:ca,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:da}};a.prototype.getAllTextureIds=function(){return[this.params.textureId]};a.prototype.setTextureDirty=function(){this._textureDirty=!0};a.prototype.calculateRelativeScreenBounds=function(c,a,g){void 0===g&&(g=T.create());var e=this.params,b=g;void 0===b&&(b=L);d.vec2.copy(b,e.anchorPos);b[0]*=-c[0];b[1]*=-c[1];b[0]+=e.screenOffset[0]*
a;b[1]+=e.screenOffset[1]*a;g[2]=g[0]+c[0];g[3]=g[1]+c[1];return g};a.prototype.calculateAnchorPosForRendering=function(c){return I(this.params,c)};a.shouldRenderVisibilityDuringRenderPass=function(c){return 0===c||4};return a}(W);D=function(b){function a(c,a,g){a=b.call(this,c,a,g,c.getParams().textureId)||this;a.params=k.copyParameters(c.getParams());a.selectProgram();a.selectSlot();return a}C(a,b);a.prototype.selectSlot=function(){this.mainSlot=this.params.drawInSecondSlot?20:19};a.prototype.beginSlot=
function(c){return c===this.mainSlot};a.prototype.getProgram=function(){return this.program};a.prototype.updateParameters=function(){this.params=k.copyParameters(this.material.getParameterValues());this.updateTexture(this.params.textureId);this.selectProgram();this.selectSlot()};a.prototype.bindRender=function(c,a){var b=this.params,e=this.getProgram();this.bindTexture(c,e);e.setUniform1i("hudVisibilityTexture",1);c.bindTexture(a.hudVisibilityTexture,1);c.setActiveTexture(0);e.setUniform1f("uRenderTransparentlyOccludedHUD",
"occluded"===a.renderTransparentlyOccludedHUD?1:"notOccluded"===a.renderTransparentlyOccludedHUD?0:.75);a=a.pixelRatio||1;e.setUniform4fv("overrideColor",b.color);e.setUniform1f("pixelRatio",a);b.textureIsSignedDistanceField&&(e.setUniform4fv("outlineColor",b.outlineColor),e.setUniform1f("outlineSize",b.outlineSize*a));b.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",b.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",b.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",b.vvSizeOffset),e.setUniform3fv("vvSizeFactor",
b.vvSizeFactor));b.vvColorEnabled&&(e.setUniform1fv("vvColorValues",b.vvColorValues),e.setUniform4fv("vvColorColors",b.vvColorColors));e.setUniform2fv("texScale",b.texCoordScale);e.setUniform2f("screenOffset",2*b.screenOffset[0]*a,2*b.screenOffset[1]*a);e.setUniform2fv("anchorPos",I(b));b.polygonOffset&&(c.setPolygonOffsetFillEnabled(!0),c.setPolygonOffset(0,-4));c.setBlendingEnabled(!0);c.setBlendFunction(1,771)};a.prototype.bindProjection=function(a,b){this.material._textureDirty&&(this.renderTexture(a),
this.material._textureDirty=!1);var c=b.cameraAboveGround?1:-1,e=this.getProgram(),d=this.params;a.bindProgram(e);e.setUniform1f("cameraGroundRelative",c);e.setUniform1f("polygonOffset",d.shaderPolygonOffset);e.setUniform4fv("viewport",b.viewport);k.bindVerticalOffset(d.verticalOffset,b,e);e.setUniformMatrix4fv("viewNormal",b.viewInvTransp);d.screenSizePerspective&&(k.bindScreenSizePerspective(d.screenSizePerspective,b,e,"screenSizePerspective"),k.bindScreenSizePerspective(d.screenSizePerspectiveAlignment||
d.screenSizePerspective,b,e,"screenSizePerspectiveAlignment"))};a.prototype.releaseRender=function(a){a.setPolygonOffsetFillEnabled(!1);a.setBlendFunction(770,771);a.setBlendingEnabled(!1)};a.prototype.bindView=function(a,b){a=b.origin;var c=this.getProgram();k.bindView(a,b.view,c);k.bindCamPos(a,b.viewInvTransp,c);this.params.slicePlaneEnabled&&k.bindSlicePlane(b.origin,b.slicePlane,c)};a.prototype.bindInstance=function(a,b){a=this.getProgram();a.setUniformMatrix4fv("model",b.transformation);a.setUniformMatrix4fv("modelNormal",
b.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(D);var ca=function(b){function a(a,e,d){a=b.call(this,a,e,d)||this;a.isOcclusionSlot=!1;return a}C(a,b);a.prototype.selectProgram=function(){var a=this.params;this.programOcclusionTestPixel=this.programRep.getProgram(H.occlusionPass,{verticalOffset:!!a.verticalOffset,screenSizePerspective:!!a.screenSizePerspective,centerOffsetUnitsScreen:"screen"===a.centerOffsetUnits,slice:a.slicePlaneEnabled});this.program=this.programRep.getProgram(H.colorPass,
{occlTest:a.occlusionTest,sdf:a.textureIsSignedDistanceField,vvSize:!!a.vvSizeEnabled,vvColor:!!a.vvColorEnabled,verticalOffset:!!a.verticalOffset,screenSizePerspective:!!a.screenSizePerspective,centerOffsetUnitsScreen:"screen"===a.centerOffsetUnits,debugDrawBorder:!!a.debugDrawBorder,slice:a.slicePlaneEnabled})};a.prototype.getDrawMode=function(){return this.isOcclusionSlot?0:4};a.prototype.release=function(a){a.setDepthFunction(513);this.isOcclusionSlot||this.releaseRender(a)};a.prototype.bind=
function(a,b){this.bindProjection(a,b);var c=this.getProgram();a.setDepthTestEnabled(!0);a.setDepthFunction(515);this.isOcclusionSlot?(c.setUniform4f("color",1,1,1,1),c.setUniform1f("pixelRatio",b.pixelRatio||1)):(this.bindRender(a,b),this.bindTexture(a,c))};a.prototype.getProgram=function(){return this.isOcclusionSlot?this.programOcclusionTestPixel:this.program};a.prototype.getPrograms=function(){return[this.programOcclusionTestPixel,this.program]};a.prototype.beginSlot=function(a){if(this.params.occlusionTest)return this.isOcclusionSlot=
14===a,14===a||a===this.mainSlot;this.isOcclusionSlot=!1;return a===this.mainSlot};return a}(D),da=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}C(a,b);a.prototype.selectProgram=function(){var a=this.params;this.program=this.programRep.getProgram(H.highlightPass,{occlTest:a.occlusionTest,sdf:a.textureIsSignedDistanceField,vvSize:!!a.vvSizeEnabled,vvColor:!!a.vvColorEnabled,verticalOffset:!!a.verticalOffset,screenSizePerspective:!!a.screenSizePerspective,centerOffsetUnitsScreen:"screen"===
a.centerOffsetUnits,binaryHighlightOcclusion:a.binaryHighlightOcclusion,slice:a.slicePlaneEnabled})};a.prototype.bind=function(a,b){this.bindProjection(a,b);this.bindRender(a,b)};a.prototype.release=function(a){this.releaseRender(a)};return a}(D),P={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},scaleAlignment:0,minPixelSizeAlignment:0},L=d.vec2f64.create(),r=d.vec3f64.create(),O=d.vec3f64.create(),A=d.vec3f64.create(),R=d.vec3f64.create(),Q=d.vec3f64.create(),E=d.mat3f64.create(),aa=d.mat4f64.create(),
J={normal:R,cosAngle:0},N=d.mat4f64.create();d.mat4.identity(N);var F=1,p=[0,0],ba=d.vec3f64.fromValues(0,0,1),X={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,
0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:M.center,shaderPolygonOffset:1E-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",debugDrawBorder:!1},ea=U.newLayout().vec3f(b.VertexAttrConstants.POSITION).vec3f(b.VertexAttrConstants.NORMAL).vec2f(b.VertexAttrConstants.UV0).vec4u8(b.VertexAttrConstants.COLOR).vec2f(b.VertexAttrConstants.SIZE).vec4f(b.VertexAttrConstants.AUXPOS1).vec4f(b.VertexAttrConstants.AUXPOS2),
Y=function(){function d(a){this.material=a;this.vertexBufferLayout=ea}d.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};d.prototype.elementCount=function(a){return 6*a.indices[b.VertexAttrConstants.POSITION].length};d.prototype.write=function(a,c,e,d,h){u.writePosition(c.indices[b.VertexAttrConstants.POSITION],c.vertexAttr[b.VertexAttrConstants.POSITION].data,a.transformation,d.position,h,6);u.writeNormal(c.indices[b.VertexAttrConstants.NORMAL],c.vertexAttr[b.VertexAttrConstants.NORMAL].data,
a.invTranspTransformation,d.normal,h,6);a=c.vertexAttr[b.VertexAttrConstants.UV0].data;var g=void 0,k=void 0,m=void 0,f=void 0;null==a||4>a.length?(a=this.material.getParameterValues(),k=g=0,m=a.texCoordScale[0],f=a.texCoordScale[1]):(g=a[0],k=a[1],m=a[2],f=a[3]);var m=Math.min(1.99999,m+1),f=Math.min(1.99999,f+1),p=c.indices[b.VertexAttrConstants.POSITION].length,n=d.uv0;a=h;for(e=0;e<p;++e)n.set(a,0,g),n.set(a,1,k),a+=1,n.set(a,0,m),n.set(a,1,k),a+=1,n.set(a,0,m),n.set(a,1,f),a+=1,n.set(a,0,m),
n.set(a,1,f),a+=1,n.set(a,0,g),n.set(a,1,f),a+=1,n.set(a,0,g),n.set(a,1,k),a+=1;u.writeColor(c.indices[b.VertexAttrConstants.COLOR],c.vertexAttr[b.VertexAttrConstants.COLOR].data,4,d.color,h,6);g=c.indices[b.VertexAttrConstants.SIZE];k=c.vertexAttr[b.VertexAttrConstants.SIZE].data;m=g.length;f=d.size;a=h;for(e=0;e<m;++e)for(var p=k[2*g[e]],n=k[2*g[e]+1],r=0;6>r;++r)f.set(a,0,p),f.set(a,1,n),a+=1;c.indices[b.VertexAttrConstants.AUXPOS1]&&c.vertexAttr[b.VertexAttrConstants.AUXPOS1]&&u.writeBufferVec4(c.indices[b.VertexAttrConstants.AUXPOS1],
c.vertexAttr[b.VertexAttrConstants.AUXPOS1].data,d.auxpos1,h,6);c.indices[b.VertexAttrConstants.AUXPOS2]&&c.vertexAttr[b.VertexAttrConstants.AUXPOS2]&&u.writeBufferVec4(c.indices[b.VertexAttrConstants.AUXPOS2],c.vertexAttr[b.VertexAttrConstants.AUXPOS2].data,d.auxpos2,h,6)};return d}();return K});