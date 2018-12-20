// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/compilerUtils ../../../../core/libs/gl-matrix-2/gl-matrix ../../camera/constraintUtils ../Constraints ./InteractiveController ../utils/navigationUtils ../utils/viewUtils ../../../3d/support/earthUtils ../../support/cameraUtils ../../support/cameraUtilsInternal ../../support/geometryUtils ../../support/mathUtils ../../support/stack ../../webgl-engine/lib/Camera ../../../navigation/gamepadUtils".split(" "),function(y,
z,E,F,d,m,p,G,q,A,B,H,I,u,n,h,J,v){Object.defineProperty(z,"__esModule",{value:!0});y=function(w){function e(b,a){var c=w.call(this)||this;c.view=b;c.device=a;c.transformation={translation:[0,0,0],heading:0,tilt:0};c.constraintOptions={selection:15,interactionType:0,interactionStartCamera:new J,interactionFactor:0,interactionDirection:null,tiltMode:1};return c}E(e,w);e.prototype.handleEvent=function(b){var a=v.extractTransformation(b,this.view.navigation.gamepad,this.transformation);("end"===b.action||
v.isZeroTransformation(a))&&this.finishController()};e.prototype.onControllerStart=function(b){this.filteredSurfaceElevation=this.view.pointsOfInterest.cameraOnSurface.location.z;w.prototype.onControllerStart.call(this,b)};e.prototype.updateFilteredSurfaceElevation=function(b){this.filteredSurfaceElevation+=1*(this.view.pointsOfInterest.cameraOnSurface.location.z-this.filteredSurfaceElevation)*b};e.prototype.stepController=function(b,a){this.updateFilteredSurfaceElevation(b);this.currentCamera.copyViewFrom(a);
this.updateCameraCenter();this.constraintOptions.interactionStartCamera.copyFrom(this.currentCamera);this.calculateControlTransformation(b,this.currentCamera,r);this.applyPan(r.pan);this.applyRotate(r.rotate);this.applyZoom(r.zoom);this.applyAscend(r.ascend);this.constraintOptions.interactionType=0;this.constraintOptions.selection=8;m.applyAll(this.view,this.currentCamera,this.constraintOptions);w.prototype.stepController.call(this,b,a)};e.prototype.applyRotate=function(b){if(b.enabled){var a=this.currentCamera,
c=a.center,k=a.up,f=a.eye;d.vec3.subtract(c,c,f);d.vec3.transformMat4(c,c,b.matrix);d.vec3.add(c,c,f);d.vec3.transformMat4(k,k,b.matrix);a.markViewDirty();this.constraintOptions.interactionType=3;this.constraintOptions.selection=7;m.applyAll(this.view,a,this.constraintOptions)}};e.prototype.applyPan=function(b){if(b.enabled){var a=this.currentCamera,c=a.center,k=a.eye,f=a.up;d.vec3.transformMat4(k,k,b.matrix);d.vec3.transformMat4(c,c,b.matrix);this.view.state.isGlobal&&d.vec3.transformMat4(f,f,b.matrix);
a.markViewDirty();this.constraintOptions.interactionType=4;this.constraintOptions.selection=15;m.applyAll(this.view,a,this.constraintOptions)}};e.prototype.applyZoom=function(b){if(b){var a=this.currentCamera,c=a.eye,a=a.viewForward;d.vec3.add(c,c,d.vec3.scale(h.sv3d.get(),a,b));this.currentCamera.markViewDirty();d.vec3.copy(t,a);d.vec3.negate(t,t);this.constraintOptions.interactionDirection=t;this.constraintOptions.interactionType=1;this.constraintOptions.selection=7;m.applyAll(this.view,this.currentCamera,
this.constraintOptions);this.constraintOptions.interactionDirection=null}};e.prototype.applyAscend=function(b){if(b){var a=this.currentCamera,c=a.center,a=a.eye,k=this.view.renderCoordsHelper.worldUpAtPosition(a,h.sv3d.get());this.constraintOptions.interactionDirection=d.vec3.copy(t,k);this.view.state.isGlobal?(k=d.vec3.length(a),b=(k+b)/k,d.vec3.scale(a,a,b),d.vec3.scale(c,c,b)):(b=d.vec3.scale(h.sv3d.get(),k,b),d.vec3.add(a,a,b),d.vec3.add(c,c,b));this.currentCamera.markViewDirty();this.updateCameraCenter();
this.constraintOptions.interactionType=5;this.constraintOptions.selection=8;m.applyAll(this.view,this.currentCamera,this.constraintOptions)&&this.updateCameraCenter();this.constraintOptions.selection=7;m.applyAll(this.view,this.currentCamera,this.constraintOptions);this.constraintOptions.interactionDirection=null}};e.prototype.calculateControlTransformation=function(b,a,c){c.zoom=0;c.ascend=0;c.pan.enabled=!1;d.mat4.identity(c.pan.matrix);c.rotate.enabled=!1;d.mat4.identity(c.rotate.matrix);b=this.computeVelocities(b);
this.view.state.isLocal?this.calculateControlTransformationLocal(b,a,c):this.calculateControlTransformationGlobal(b,a,c)};e.prototype.updateCameraCenter=function(){var b=this.currentCamera;this.view.renderCoordsHelper.intersectManifoldClosestSilhouette(b.ray,this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,b.center);this.currentCamera.markViewDirty()};e.prototype.calculateControlTransformationLocal=function(b,a,c){var k=a.viewRight,f=a.viewForward,e=this.transformation,
g=this.view.navigation.gamepad,f=d.vec3.set(h.sv3d.get(),f[0],f[1],0);d.vec3.normalize(f,f);var l=e.translation[0]*b.pan;0!==l&&(l=d.vec3.scale(h.sv3d.get(),k,l),d.mat4.translate(c.pan.matrix,c.pan.matrix,l),c.pan.enabled=!0);switch(g.mode){case "pan":g=-e.translation[1]*b.pan;0!==g&&(g=d.vec3.scale(h.sv3d.get(),f,g),d.mat4.translate(c.pan.matrix,c.pan.matrix,g),c.pan.enabled=!0);break;case "zoom":c.zoom=-e.translation[1]*b.zoom;break;default:F.neverReached(g.mode)}c.ascend=e.translation[2]*b.ascend;
g=-e.heading*b.rotate;0!==g&&(d.mat4.rotate(c.rotate.matrix,c.rotate.matrix,g,this.view.renderCoordsHelper.worldUpAtPosition(a.eye,h.sv3d.get())),c.rotate.enabled=!0);b=e.tilt*b.rotate;a=A.viewAngle(this.view.renderCoordsHelper,a.center,a.eye);if(a=n.clamp(a+b,p.TiltDefault.min,p.TiltDefault.max)-a)d.mat4.rotate(c.rotate.matrix,c.rotate.matrix,a,k),c.rotate.enabled=!0};e.prototype.calculateControlTransformationGlobal=function(b,a,c){var k=a.eye,f=a.viewRight,e=this.transformation,g=this.view.navigation.gamepad,
l=d.vec3.cross(h.sv3d.get(),f,k);d.vec3.normalize(l,l);d.vec3.negate(l,l);var n=e.translation[0]*b.pan;0!==n&&(d.mat4.rotate(c.pan.matrix,c.pan.matrix,n,l),c.pan.enabled=!0);switch(g.mode){case "pan":g=e.translation[1]*b.pan;0!==g&&(d.mat4.rotate(c.pan.matrix,c.pan.matrix,g,f),c.pan.enabled=!0);break;case "zoom":c.zoom=-e.translation[1]*b.zoom}g=this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude;c.ascend=e.translation[2]*b.ascend;l=-e.heading*b.rotate;0!==l&&(d.mat4.rotate(c.rotate.matrix,
c.rotate.matrix,l,k),c.rotate.enabled=!0);b=this.clampTiltDeltaGlobalToValidRange(e.tilt*b.rotate,a.ray,g);0!==b&&(d.mat4.rotate(c.rotate.matrix,c.rotate.matrix,b,f),c.rotate.enabled=!0)};e.prototype.clampTiltDeltaGlobalToValidRange=function(b,a,c){var e=q.onSurfaceTiltToEyeTiltGlobal(p.TiltDefault.min,a.origin,c),f=0,x=0,f=h.sv3d.get();this.view.renderCoordsHelper.intersectManifold(a,c,f)?(f=A.viewAngle(this.view.renderCoordsHelper,f,a.origin),f=q.onSurfaceTiltToEyeTiltGlobal(f,a.origin,c),x=q.onSurfaceTiltToEyeTiltGlobal(p.TiltDefault.max,
a.origin,c)):(u.sphere.closestPointOnSilhouette(u.sphere.wrap(c+B.earthRadius),a,f),f=n.acos(-d.vec3.dot(a.direction,d.vec3.normalize(f,f))),f=q.offSurfaceTiltToEyeTiltGlobal(f,a.origin,c),x=q.offSurfaceTiltToEyeTiltGlobal(p.TiltDefault.max,a.origin,c));return n.clamp(f+b,e,x)-f};e.prototype.getPointAbsoluteSurfaceElevation=function(b,a,c){var e=this.view.renderCoordsHelper,f=e.getAltitude(b);a+=Math.abs(f-a);d.vec3.copy(c,b);e.setAltitude(a,c);return a};e.prototype.clampedDistanceToSurface=function(b,
a){var c=this.view.renderCoordsHelper,e=this.view.state.camera,f=H.headingTiltToDirectionUp(this.view,a,0,C,K).direction,f=c.intersectManifoldClosestSilhouette(u.ray.wrap(a,f),b,h.sv3d.get()),f=d.vec3.distance(a,f);b=c.intersectManifoldClosestSilhouette(u.ray.wrap(a,n.directionFromTo(h.sv3d.get(),a,e.center)),b,h.sv3d.get());a=d.vec3.distance(a,b);return Math.min(f,a)};e.prototype.computeHeadingRotateRadius=function(b){var a=this.view,c=a.renderCoordsHelper,e=a.state,a=e.isGlobal,e=c.intersectManifoldClosestSilhouette(e.camera.ray,
this.filteredSurfaceElevation,h.sv3d.get());if(a)return a=d.vec3.subtract(h.sv3d.get(),b,e),c=d.vec3.length(a),d.vec3.scale(a,a,1/c),b=d.vec3.normalize(h.sv3d.get(),b),b=n.acos(d.vec3.dot(b,a)),c*Math.sin(Math.min(L,b));b=d.vec3.copy(h.sv3d.get(),b);c.setAltitude(this.filteredSurfaceElevation,b);return d.vec3.distance(e,b)};e.prototype.minimumAscendVelocity=function(){return this.view.state.constraints.collision.enabled?0:M};e.prototype.computeVelocities=function(b){var a=this.filteredSurfaceElevation,
c=a+B.earthRadius,d=this.view.state,f=d.camera,e=d.isGlobal,g=h.sv3d.get(),l=this.getPointAbsoluteSurfaceElevation(f.eye,a,g),m=this.clampedDistanceToSurface(a,g),p=f.width/2,q=D*f.width,d=D*f.width,f=m*Math.tan(.5*f.fovX)/p,r=f/c,c=f/this.computeHeadingRotateRadius(g),e=(e?r:f)*q*b,a=l-a,a=Math.max(this.minimumAscendVelocity()*b,Math.pow(2,q*b/p)*a-a),m=Math.pow(2,q*b/p)*m-m;b*=n.clamp(c*d,N,O);return{pan:e,ascend:a,zoom:m,rotate:b}};e.activatesFor=function(b,a){b=v.extractTransformation(a,b.navigation.gamepad,
P);return!("end"===a.action||v.isZeroTransformation(b))};return e}(G.InteractiveController);z.GamepadController=y;var P={translation:[0,0,0],heading:0,tilt:0},C=80,L=n.deg2rad(C),D=.75,M=5,N=n.deg2rad(30),O=n.deg2rad(80),r={zoom:0,ascend:0,pan:{enabled:!1,matrix:d.mat4f64.create()},rotate:{enabled:!1,matrix:d.mat4f64.create()}},t=d.vec3f64.create(),K=I.createDirectionUp()});