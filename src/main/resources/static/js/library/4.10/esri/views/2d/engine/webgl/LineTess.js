// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(K,p){function R(d){var a={items:[],count:0},b;for(b=0;b<d;++b)a.items.push(void 0);return a}function S(d,a){z.vector[0]=d.vector[0];z.vector[1]=d.vector[1];z.texCoords[0]=d.texCoords[0];z.texCoords[1]=d.texCoords[1];z.direction[0]=d.direction[0];z.direction[1]=d.direction[1];z.base=d.base;d.vector[0]=a.vector[0];d.vector[1]=a.vector[1];d.texCoords[0]=a.texCoords[0];d.texCoords[1]=a.texCoords[1];d.direction[0]=a.direction[0];d.direction[1]=a.direction[1];d.base=
a.base;a.vector[0]=z.vector[0];a.vector[1]=z.vector[1];a.texCoords[0]=z.texCoords[0];a.texCoords[1]=z.texCoords[1];a.direction[0]=z.direction[0];a.direction[1]=z.direction[1];a.base=z.base}function L(d,a){return d[0]*a[0]+d[1]*a[1]}function T(d){return Math.sqrt(L(d,d))}function P(d,a){var b=T(a);d[0]=a[0]/b;d[1]=a[1]/b;return d}function y(d,a){d[0]=-a[1];d[1]=a[0];return d}function M(d,a){return d[0]*a[1]-d[1]*a[0]}function t(d,a){d[0]=-a[0];d[1]=-a[1];return d}function x(d,a,b){d[0]=a[0]*b;d[1]=
a[1]*b;return d}function B(d,a,b){d[0]=a[0]+b[0];d[1]=a[1]+b[1];return d}function V(d,a){d=L(d,a);return.999<d?0:-.999>d?Math.PI:Math.acos(d)}function U(d,a,b,c,f){if(0===c)d.count=0;else{var l=T(a),g=x(k[0],a,1/l);b=x(k[1],b,1/l);g=V(g,b);g=(f?-1:1)*g/c;f=Math.cos(g);g=Math.sin(g);b=a[0];var e=a[1];for(a=0;a<c-1;++a)l=b,b=f*l-g*e,e=g*l+f*e,d.items[a][0]=b,d.items[a][1]=e;d.count=c-1}}function G(d){var a=d.count,b=Math.floor(a/2),c;for(c=0;c<b;++c){var f=d.items[c];d.items[c]=d.items[a-c-1];d.items[a-
c-1]=f}}Object.defineProperty(p,"__esModule",{value:!0});var h;(function(d){d[d.ENTRY=1]="ENTRY";d[d.EXIT=2]="EXIT";d[d.CAP=3]="CAP"})(h=p.VectorRole||(p.VectorRole={}));var H;(function(d){d[d.START=1]="START";d[d.END=2]="END"})(H=p.CapPosition||(p.CapPosition={}));p.SYSTEM_MAG_LIMIT=3.8;p.MITER_SAFE_RADS=2*Math.acos(1/p.SYSTEM_MAG_LIMIT);var Q=p.SYSTEM_MAG_LIMIT*p.SYSTEM_MAG_LIMIT,W=8/(2*Math.PI);p.allocTriangles=function(d){var a={items:[],count:0},b;for(b=0;b<d;++b)a.items.push({v1:{vector:[void 0,
void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v3:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]}});return a};p.allocExtrudeVectors=function(){var d={items:[],count:0},a;for(a=0;30>a;++a)d.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]});a={};a[h.ENTRY]=R(20);a[h.EXIT]=R(20);a[h.CAP]=R(20);return{vectors:d,lists:a}};p.copyExtrudeVectors=
function(d,a){var b;for(b=0;b<a.vectors.count;++b)d.vectors.items[b].vector[0]=a.vectors.items[b].vector[0],d.vectors.items[b].vector[1]=a.vectors.items[b].vector[1],d.vectors.items[b].texCoords[0]=a.vectors.items[b].texCoords[0],d.vectors.items[b].texCoords[1]=a.vectors.items[b].texCoords[1],d.vectors.items[b].direction[0]=a.vectors.items[b].direction[0],d.vectors.items[b].direction[1]=a.vectors.items[b].direction[1],d.vectors.items[b].base=a.vectors.items[b].base;d.vectors.count=a.vectors.count;
var c=a.lists[h.ENTRY],f=d.lists[h.ENTRY],l=a.lists[h.EXIT],g=d.lists[h.EXIT],e=a.lists[h.CAP],m=d.lists[h.CAP];for(b=0;b<c.count;++b)f.items[b]=c.items[b];f.count=c.count;for(b=0;b<l.count;++b)g.items[b]=l.items[b];g.count=l.count;for(b=0;b<e.count;++b)m.items[b]=e.items[b];m.count=e.count;d.capCenter=a.capCenter};var z={vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0],base:void 0};p.swapExtrudeVectors=S;var k=[];for(K=0;32>K;++K)k.push([void 0,void 0]);var u=function(d){var a=
{items:[],count:0},b;for(b=0;b<d;++b)a.items.push([void 0,void 0]);return a}(8);p.length=T;p.normalize=P;p.getNumberOfSlices=function(d){return Math.max(Math.round(d*W),1)};p.getRads=V;p.reverse=G;var N=[void 0,void 0],O=[void 0,void 0],I=[0,0],A=[0,0],D=[0,0],E=[0,0],r=Math.cos(Math.PI/4),v=Math.sin(Math.PI/4),C=Math.sqrt(2);K=function(){function d(a){this._distanceAlongCorrection=a.distanceAlongCorrection}d.prototype.bridge=function(a,b,c){var f=b.vectors;b=b.lists[h.EXIT];var l=c.vectors,d=c.lists[h.ENTRY],
e,m;if(b.count===d.count+1)c=b.items,e=f.items,m=d.items,l=l.items;else if(d.count===b.count+1)c=d.items,e=l.items,m=b.items,l=f.items;else if(b.count===d.count)c=d.items,e=l.items,m=b.items,l=f.items;else{console.error("Cannot bridge "+b.count+" to "+d.count+".");a.count=0;return}f=b.count+d.count-2;a.count=f;N[0]=c;N[1]=m;O[0]=e;O[1]=l;for(b=0;b<f;++b)c=a.items[b],e=(b+0)%2,e=O[e][N[e][Math.floor((b+0)/2)]],c.v1.vector[0]=e.vector[0],c.v1.vector[1]=e.vector[1],c.v1.texCoords[0]=e.texCoords[0],c.v1.texCoords[1]=
e.texCoords[1],c.v1.direction[0]=e.direction[0],c.v1.direction[1]=e.direction[1],c.v1.base=e.base,e=(b+1)%2,e=O[e][N[e][Math.floor((b+1)/2)]],c.v2.vector[0]=e.vector[0],c.v2.vector[1]=e.vector[1],c.v2.texCoords[0]=e.texCoords[0],c.v2.texCoords[1]=e.texCoords[1],c.v2.direction[0]=e.direction[0],c.v2.direction[1]=e.direction[1],c.v2.base=e.base,e=(b+2)%2,e=O[e][N[e][Math.floor((b+2)/2)]],c.v3.vector[0]=e.vector[0],c.v3.vector[1]=e.vector[1],c.v3.texCoords[0]=e.texCoords[0],c.v3.texCoords[1]=e.texCoords[1],
c.v3.direction[0]=e.direction[0],c.v3.direction[1]=e.direction[1],c.v3.base=e.base,e=c.v1.base&&c.v1.base.point||I,m=c.v2.base&&c.v2.base.point||I,l=c.v3.base&&c.v3.base.point||I,A[0]=e[0]+c.v1.vector[0],A[1]=e[1]+c.v1.vector[1],D[0]=m[0]+c.v2.vector[0],D[1]=m[1]+c.v2.vector[1],E[0]=l[0]+c.v3.vector[0],E[1]=l[1]+c.v3.vector[1],0>(D[0]-A[0])*(E[1]-A[1])-(E[0]-A[0])*(D[1]-A[1])||S(c.v2,c.v3)};d.prototype.pie=function(a,b){if(0===b.lists[h.CAP].count)a.count=0;else if(1===b.lists[h.CAP].count)console.error("A single vector is not enough to define a pie."),
a.count=0;else{a.count=b.lists[h.CAP].count-1;var c;for(c=0;c<a.count;++c){var f=a.items[c],l=b.vectors.items[b.lists[h.CAP].items[c]];f.v1.vector[0]=l.vector[0];f.v1.vector[1]=l.vector[1];f.v1.texCoords[0]=l.texCoords[0];f.v1.texCoords[1]=l.texCoords[1];f.v1.direction[0]=l.direction[0];f.v1.direction[1]=l.direction[1];f.v1.base=l.base;l=b.vectors.items[b.lists[h.CAP].items[c+1]];f.v2.vector[0]=l.vector[0];f.v2.vector[1]=l.vector[1];f.v2.texCoords[0]=l.texCoords[0];f.v2.texCoords[1]=l.texCoords[1];
f.v2.direction[0]=l.direction[0];f.v2.direction[1]=l.direction[1];f.v2.base=l.base;l=b.vectors.items[b.capCenter];f.v3.vector[0]=l.vector[0];f.v3.vector[1]=l.vector[1];f.v3.texCoords[0]=l.texCoords[0];f.v3.texCoords[1]=l.texCoords[1];f.v3.direction[0]=l.direction[0];f.v3.direction[1]=l.direction[1];f.v3.base=l.base;var l=f.v1.base&&f.v1.base.point||I,d=f.v2.base&&f.v2.base.point||I,e=f.v3.base&&f.v3.base.point||I;A[0]=l[0]+f.v1.vector[0];A[1]=l[1]+f.v1.vector[1];D[0]=d[0]+f.v2.vector[0];D[1]=d[1]+
f.v2.vector[1];E[0]=e[0]+f.v3.vector[0];E[1]=e[1]+f.v3.vector[1];0>(D[0]-A[0])*(E[1]-A[1])-(E[0]-A[0])*(D[1]-A[1])||S(f.v2,f.v3)}}};d.prototype.buttCap=function(a,b,c){this.fastMiterJoin(a,b,c)};d.prototype.roundCap=function(a,b,c,f,l,d){void 0===d&&(d=0);this.fastMiterJoin(a,b,c);c=f===H.START?0:1;f=f===H.START?1:0;a.capCenter=a.vectors.count;b=a.vectors.items[a.capCenter];b.vector[0]=0;b.vector[1]=0;b.texCoords[0]=0;b.texCoords[1]=0;b.direction[0]=0;b.direction[1]=0;++a.vectors.count;U(u,a.vectors.items[c].vector,
a.vectors.items[f].vector,l,!1);l=a.vectors.count;b=a.lists[h.CAP];b.items[0]=c;c=a.vectors.items[c].texCoords[1];var e=a.vectors.items[f].texCoords[1],g;for(g=0;g<u.count;++g){var k=d*(1-Math.abs(u.count/2-g)/(u.count/2)),t=c+g/(u.count-1)*(e-c),F=u.items[g],q=a.vectors.items[l+g];q.vector[0]=F[0];q.vector[1]=F[1];q.texCoords[0]=k;q.texCoords[1]=t;q.direction[0]=0;q.direction[1]=0;b.items[g+1]=l+g}b.items[u.count+1]=f;b.count=u.count+2;a.vectors.count=l+u.count};d.prototype.squareCap=function(a,
b,c,f){this.fastMiterJoin(a,b,c);b=f===H.START?0:1;c=f===H.START?1:0;var l=k[0],d=k[1],e=k[2],h=k[3];f=k[4];var t=a.vectors.items[b].vector;l[0]=r*t[0]-v*t[1];l[1]=v*t[0]+r*t[1];x(h,l,C);d[0]=r*l[0]-v*l[1];d[1]=v*l[0]+r*l[1];e[0]=r*d[0]-v*d[1];e[1]=v*d[0]+r*d[1];x(f,e,C);b=a.vectors.items[b];b.vector[0]=h[0];b.vector[1]=h[1];a=a.vectors.items[c];a.vector[0]=f[0];a.vector[1]=f[1]};d.prototype.squareCapForDashedLines=function(a,b,c,f){if(f===H.START){b=y(k[0],c);c=t(k[4],b);f=k[1];var d=k[2],g=k[3];
f[0]=r*b[0]-v*b[1];f[1]=v*b[0]+r*b[1];d[0]=r*f[0]-v*f[1];d[1]=v*f[0]+r*f[1];g[0]=r*d[0]-v*d[1];g[1]=v*d[0]+r*d[1];d=k[5];d[0]=0;d[1]=0;a.capCenter=0;var e=a.vectors.items;e[0].vector[0]=d[0];e[0].vector[1]=d[1];e[0].direction[0]=0;e[0].direction[1]=0;e[0].texCoords[0]=0;e[0].texCoords[1]=0;e[1].vector[0]=b[0];e[1].vector[1]=b[1];e[1].direction[0]=0;e[1].direction[1]=0;e[1].texCoords[0]=0;e[1].texCoords[1]=-1;e[2].vector[0]=f[0]*C;e[2].vector[1]=f[1]*C;e[2].direction[0]=0;e[2].direction[1]=0;e[2].texCoords[0]=
-1;e[2].texCoords[1]=-1;e[3].vector[0]=g[0]*C;e[3].vector[1]=g[1]*C;e[3].direction[0]=0;e[3].direction[1]=0;e[3].texCoords[0]=-1;e[3].texCoords[1]=1;e[4].vector[0]=c[0];e[4].vector[1]=c[1];e[4].direction[0]=0;e[4].direction[1]=0;e[4].texCoords[0]=0;e[4].texCoords[1]=1;a.vectors.count=5;a.lists[h.CAP].count=4;a.lists[h.CAP].items[0]=1;a.lists[h.CAP].items[1]=2;a.lists[h.CAP].items[2]=3;a.lists[h.CAP].items[3]=4;a.lists[h.ENTRY].count=0;a.lists[h.EXIT].count=3;a.lists[h.EXIT].items[0]=1;a.lists[h.EXIT].items[1]=
0;a.lists[h.EXIT].items[2]=4}else b=y(k[0],c),c=t(k[4],b),f=k[1],d=k[2],g=k[3],f[0]=r*c[0]-v*c[1],f[1]=v*c[0]+r*c[1],d[0]=r*f[0]-v*f[1],d[1]=v*f[0]+r*f[1],g[0]=r*d[0]-v*d[1],g[1]=v*d[0]+r*d[1],d=k[5],d[0]=0,d[1]=0,a.capCenter=0,e=a.vectors.items,e[0].vector[0]=d[0],e[0].vector[1]=d[1],e[0].direction[0]=0,e[0].direction[1]=0,e[0].texCoords[0]=0,e[0].texCoords[1]=0,e[1].vector[0]=c[0],e[1].vector[1]=c[1],e[1].direction[0]=0,e[1].direction[1]=0,e[1].texCoords[0]=0,e[1].texCoords[1]=1,e[2].vector[0]=
f[0]*C,e[2].vector[1]=f[1]*C,e[2].direction[0]=0,e[2].direction[1]=0,e[2].texCoords[0]=1,e[2].texCoords[1]=1,e[3].vector[0]=g[0]*C,e[3].vector[1]=g[1]*C,e[3].direction[0]=0,e[3].direction[1]=0,e[3].texCoords[0]=1,e[3].texCoords[1]=-1,e[4].vector[0]=b[0],e[4].vector[1]=b[1],e[4].direction[0]=0,e[4].direction[1]=0,e[4].texCoords[0]=0,e[4].texCoords[1]=-1,a.vectors.count=5,a.lists[h.CAP].count=4,a.lists[h.CAP].items[0]=1,a.lists[h.CAP].items[1]=2,a.lists[h.CAP].items[2]=3,a.lists[h.CAP].items[3]=4,a.lists[h.ENTRY].count=
3,a.lists[h.ENTRY].items[0]=4,a.lists[h.ENTRY].items[1]=0,a.lists[h.ENTRY].items[2]=1,a.lists[h.EXIT].count=0};d.prototype.fastMiterJoin=function(a,b,c){c=y(k[0],c);b=t(k[1],c);var d=a.vectors.items[0];d.vector[0]=c[0];d.vector[1]=c[1];d.texCoords[0]=0;d.texCoords[1]=-1;d.direction[0]=0;d.direction[1]=0;c=a.vectors.items[1];c.vector[0]=b[0];c.vector[1]=b[1];c.texCoords[0]=0;c.texCoords[1]=1;c.direction[0]=0;c.direction[1]=0;a.vectors.count=2;b=a.lists[h.ENTRY];b.items[0]=0;b.items[1]=1;b.count=2;
b=a.lists[h.EXIT];b.items[0]=0;b.items[1]=1;b.count=2;a.lists[h.CAP].count=0;a.capCenter=void 0};d.prototype.miterJoin=function(a,b,c){var d=y(k[0],b),l=y(k[1],c),g=k[2];g[0]=d[0]+l[0];g[1]=d[1]+l[1];l=P(k[3],g);d=L(l,d);l=x(k[4],l,1/d);d=t(k[5],l);this._distanceAlongCorrection?(g=a.vectors.items[0],g.vector[0]=l[0],g.vector[1]=l[1],g.texCoords[0]=0,g.texCoords[1]=-1,g.direction[0]=b[0],g.direction[1]=b[1],g=a.vectors.items[1],g.vector[0]=d[0],g.vector[1]=d[1],g.texCoords[0]=0,g.texCoords[1]=1,g.direction[0]=
b[0],g.direction[1]=b[1],b=a.vectors.items[2],b.vector[0]=l[0],b.vector[1]=l[1],b.texCoords[0]=0,b.texCoords[1]=-1,b.direction[0]=c[0],b.direction[1]=c[1],b=a.vectors.items[3],b.vector[0]=d[0],b.vector[1]=d[1],b.texCoords[0]=0,b.texCoords[1]=1,b.direction[0]=c[0],b.direction[1]=c[1],a.vectors.count=4,c=a.lists[h.ENTRY],c.items[0]=0,c.items[1]=1,c.count=2,c=a.lists[h.EXIT],c.items[0]=2,c.items[1]=3):(g=a.vectors.items[0],g.vector[0]=l[0],g.vector[1]=l[1],g.texCoords[0]=0,g.texCoords[1]=-1,g.direction[0]=
0,g.direction[1]=0,g=a.vectors.items[1],g.vector[0]=d[0],g.vector[1]=d[1],g.texCoords[0]=0,g.texCoords[1]=1,g.direction[0]=0,g.direction[1]=0,a.vectors.count=2,c=a.lists[h.ENTRY],c.items[0]=0,c.items[1]=1,c.count=2,c=a.lists[h.EXIT],c.items[0]=0,c.items[1]=1);c.count=2;a.lists[h.CAP].count=0;a.capCenter=void 0};d.prototype.bevelJoin=function(a,b,c,d){var f=d*d;d=M(b,c);var g=0<d?[-1,1]:[1,-1],e=g[0],g=g[1],m=0<d?t(k[0],y(k[1],b)):y(k[2],b),J=0<d?t(k[3],y(k[4],c)):y(k[5],c),u=k[6];u[0]=m[0]+J[0];u[1]=
m[1]+J[1];var F=P(k[7],u),q=t(k[8],F),n=L(F,m),u=M(F,m),p=Math.abs(u/n),u=1+p*p,w=u<Q?[p,this._distanceAlongCorrection]:[Math.sqrt(Q-1),!0],r=w[0],w=w[1],v=u<f?[p,this._distanceAlongCorrection]:[Math.sqrt(f-1),!0],p=v[0];(v=v[1])&&w?(w=a.vectors.items[0],B(w.vector,t(k[9],m),x(k[10],t(k[11],b),r)),w.texCoords[0]=0,w.texCoords[1]=e,w.direction[0]=this._distanceAlongCorrection?b[0]:0,w.direction[1]=this._distanceAlongCorrection?b[1]:0,q=a.vectors.items[1],B(q.vector,t(k[12],J),x(k[13],c,r)),q.texCoords[0]=
0,q.texCoords[1]=e,q.direction[0]=this._distanceAlongCorrection?c[0]:0,q.direction[1]=this._distanceAlongCorrection?c[1]:0,e=a.vectors.items[2],e.vector[0]=0,e.vector[1]=0,e.texCoords[0]=0,e.texCoords[1]=0,e.direction[0]=0,e.direction[1]=0,e=a.vectors.items[3],B(e.vector,m,x(k[14],b,p)),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=this._distanceAlongCorrection?b[0]:0,e.direction[1]=this._distanceAlongCorrection?b[1]:0,b=a.vectors.items[4],B(b.vector,J,x(k[15],t(k[16],c),p)),b.texCoords[0]=0,b.texCoords[1]=
g,b.direction[0]=this._distanceAlongCorrection?c[0]:0,b.direction[1]=this._distanceAlongCorrection?c[1]:0,a.vectors.count=5,c=a.lists[h.ENTRY],c.items[0]=0,c.items[1]=2,c.items[2]=3,c.count=3,c=a.lists[h.EXIT],c.items[0]=1,c.items[1]=2,c.items[2]=4,c.count=3,u<f?(f=a.lists[h.CAP],f.count=0,a.capCenter=void 0):(f=a.lists[h.CAP],f.items[0]=3,f.items[1]=4,f.count=2,a.capCenter=2)):!v&&w?(w=a.vectors.items[0],B(w.vector,t(k[9],m),x(k[10],t(k[11],b),r)),w.texCoords[0]=0,w.texCoords[1]=e,w.direction[0]=
this._distanceAlongCorrection?b[0]:0,w.direction[1]=this._distanceAlongCorrection?b[1]:0,q=a.vectors.items[1],B(q.vector,t(k[12],J),x(k[13],c,r)),q.texCoords[0]=0,q.texCoords[1]=e,q.direction[0]=this._distanceAlongCorrection?c[0]:0,q.direction[1]=this._distanceAlongCorrection?c[1]:0,e=a.vectors.items[2],e.vector[0]=0,e.vector[1]=0,e.texCoords[0]=0,e.texCoords[1]=0,e.direction[0]=0,e.direction[1]=0,e=a.vectors.items[3],x(e.vector,F,1/n),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=0,e.direction[1]=
0,a.vectors.count=4,c=a.lists[h.ENTRY],c.items[0]=0,c.items[1]=2,c.items[2]=3,c.count=3,c=a.lists[h.EXIT],c.items[0]=1,c.items[1]=2,c.items[2]=3,c.count=3,a.lists[h.CAP].count=0,a.capCenter=void 0):v&&!w?(w=a.vectors.items[0],x(w.vector,q,1/n),w.texCoords[0]=0,w.texCoords[1]=e,w.direction[0]=0,w.direction[1]=0,q=a.vectors.items[1],q.vector[0]=0,q.vector[1]=0,q.texCoords[0]=0,q.texCoords[1]=0,q.direction[0]=0,q.direction[1]=0,e=a.vectors.items[2],B(e.vector,m,x(k[9],b,p)),e.texCoords[0]=0,e.texCoords[1]=
g,e.direction[0]=this._distanceAlongCorrection?b[0]:0,e.direction[1]=this._distanceAlongCorrection?b[1]:0,e=a.vectors.items[3],B(e.vector,J,x(k[10],t(k[11],c),p)),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=this._distanceAlongCorrection?c[0]:0,e.direction[1]=this._distanceAlongCorrection?c[1]:0,a.vectors.count=4,c=a.lists[h.ENTRY],c.items[0]=0,c.items[1]=1,c.items[2]=2,c.count=3,c=a.lists[h.EXIT],c.items[0]=0,c.items[1]=1,c.items[2]=3,c.count=3,u<f?(f=a.lists[h.CAP],f.count=0,a.capCenter=void 0):
(f=a.lists[h.CAP],f.items[0]=2,f.items[1]=3,f.count=2,a.capCenter=1)):v||w||(w=a.vectors.items[0],x(w.vector,q,1/n),w.texCoords[0]=0,w.texCoords[1]=e,w.direction[0]=0,w.direction[1]=0,q=a.vectors.items[1],x(q.vector,F,1/n),q.texCoords[0]=0,q.texCoords[1]=g,q.direction[0]=0,q.direction[1]=0,a.vectors.count=2,c=a.lists[h.ENTRY],c.items[0]=0,c.items[1]=1,c.count=2,c=a.lists[h.EXIT],c.items[0]=0,c.items[1]=1,c.count=2,a.lists[h.CAP].count=0,a.capCenter=void 0);0>d&&(G(a.lists[h.ENTRY]),G(a.lists[h.EXIT]))};
d.prototype.roundJoin=function(a,b,c,d){var f=M(b,c),g=0<f?[-1,1]:[1,-1],e=g[0],g=g[1],m=0<f?t(k[0],y(k[1],b)):y(k[2],b),p=0<f?t(k[3],y(k[4],c)):y(k[5],c),v=k[6];v[0]=m[0]+p[0];v[1]=m[1]+p[1];var r=P(k[7],v),v=t(k[8],r),q=L(r,m),r=M(r,m),r=Math.abs(r/q),n=1+r*r<Q?[r,this._distanceAlongCorrection]:[Math.sqrt(Q-1),!0],r=n[0];n[1]?(n=a.vectors.items[0],n.vector[0]=m[0],n.vector[1]=m[1],n.texCoords[0]=0,n.texCoords[1]=g,n.direction[0]=0,n.direction[1]=0,n=a.vectors.items[1],n.vector[0]=p[0],n.vector[1]=
p[1],n.texCoords[0]=0,n.texCoords[1]=g,n.direction[0]=0,n.direction[1]=0,n=a.vectors.items[2],B(n.vector,t(k[9],m),x(k[10],t(k[11],b),r)),n.texCoords[0]=0,n.texCoords[1]=e,n.direction[0]=this._distanceAlongCorrection?b[0]:0,n.direction[1]=this._distanceAlongCorrection?b[1]:0,b=a.vectors.items[3],B(b.vector,t(k[12],p),x(k[13],c,r)),b.texCoords[0]=0,b.texCoords[1]=e,b.direction[0]=this._distanceAlongCorrection?c[0]:0,b.direction[1]=this._distanceAlongCorrection?c[1]:0,c=a.vectors.items[4],c.vector[0]=
0,c.vector[1]=0,c.texCoords[0]=0,c.texCoords[1]=0,c.direction[0]=0,c.direction[1]=0,a.vectors.count=5,c=a.lists[h.ENTRY],c.items[0]=2,c.items[1]=4,c.items[2]=0,c.count=3,c=a.lists[h.EXIT],c.items[0]=3,c.items[1]=4,c.items[2]=1,c.count=3,a.capCenter=4):(n=a.vectors.items[0],n.vector[0]=m[0],n.vector[1]=m[1],n.texCoords[0]=0,n.texCoords[1]=g,n.direction[0]=0,n.direction[1]=0,n=a.vectors.items[1],n.vector[0]=p[0],n.vector[1]=p[1],n.texCoords[0]=0,n.texCoords[1]=g,n.direction[0]=0,n.direction[1]=0,n=
a.vectors.items[2],x(n.vector,v,1/q),n.texCoords[0]=0,n.texCoords[1]=e,n.direction[0]=0,n.direction[1]=0,b=a.vectors.items[3],b.vector[0]=0,b.vector[1]=0,b.texCoords[0]=0,b.texCoords[1]=0,b.direction[0]=0,b.direction[1]=0,a.vectors.count=4,c=a.lists[h.ENTRY],c.items[0]=2,c.items[1]=3,c.items[2]=0,c.count=3,c=a.lists[h.EXIT],c.items[0]=2,c.items[1]=3,c.items[2]=1,c.count=3,a.capCenter=3);U(u,m,p,d,0>f);d=a.vectors.count;m=a.lists[h.CAP];for(p=m.items[0]=0;p<u.count;++p)c=u.items[p],e=a.vectors.items[d+
p],e.vector[0]=c[0],e.vector[1]=c[1],e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=0,e.direction[1]=0,m.items[p+1]=d+p;m.items[u.count+1]=1;m.count=u.count+2;a.vectors.count=d+u.count;0>f&&(G(a.lists[h.ENTRY]),G(a.lists[h.EXIT]))};d.prototype.unitRoundJoin=function(a,b,c,d){var f=M(b,c),g=0<f?[-1,1]:[1,-1],e=g[0],g=g[1];b=0<f?t(k[0],y(k[1],b)):y(k[2],b);c=0<f?t(k[3],y(k[4],c)):y(k[5],c);var m=a.vectors.items[0];m.vector[0]=b[0];m.vector[1]=b[1];m.texCoords[0]=0;m.texCoords[1]=g;m.direction[0]=
0;m.direction[1]=0;m=a.vectors.items[1];m.vector[0]=c[0];m.vector[1]=c[1];m.texCoords[0]=0;m.texCoords[1]=g;m.direction[0]=0;m.direction[1]=0;m=a.vectors.items[2];t(m.vector,b);m.texCoords[0]=0;m.texCoords[1]=e;m.direction[0]=0;m.direction[1]=0;m=a.vectors.items[3];t(m.vector,c);m.texCoords[0]=0;m.texCoords[1]=e;m.direction[0]=0;m.direction[1]=0;e=a.vectors.items[4];e.vector[0]=0;e.vector[1]=0;e.texCoords[0]=0;e.texCoords[1]=0;e.direction[0]=0;e.direction[1]=0;a.vectors.count=5;e=a.lists[h.ENTRY];
e.items[0]=2;e.items[1]=0;e.count=2;e=a.lists[h.EXIT];e.items[0]=3;e.items[1]=1;e.count=2;a.capCenter=4;U(u,b,c,d,0>f);d=a.vectors.count;b=a.lists[h.CAP];for(e=b.items[0]=0;e<u.count;++e)c=u.items[e],m=a.vectors.items[d+e],m.vector[0]=c[0],m.vector[1]=c[1],m.texCoords[0]=0,m.texCoords[1]=g,m.direction[0]=0,m.direction[1]=0,b.items[e+1]=d+e;b.items[u.count+1]=1;b.count=u.count+2;a.vectors.count=d+u.count;0>f&&(G(a.lists[h.ENTRY]),G(a.lists[h.EXIT]))};d.prototype.rectJoin=function(a,b,c){b=y(k[0],b);
c=y(k[1],c);var d=a.vectors.items[0];d.vector[0]=b[0];d.vector[1]=b[1];d.texCoords[0]=0;d.texCoords[1]=-1;d.direction[0]=0;d.direction[1]=0;d=a.vectors.items[1];d.vector[0]=c[0];d.vector[1]=c[1];d.texCoords[0]=0;d.texCoords[1]=-1;d.direction[0]=0;d.direction[1]=0;d=a.vectors.items[2];t(d.vector,b);d.texCoords[0]=0;d.texCoords[1]=1;d.direction[0]=0;d.direction[1]=0;b=a.vectors.items[3];t(b.vector,c);b.texCoords[0]=0;b.texCoords[1]=1;b.direction[0]=0;b.direction[1]=0;a.vectors.count=4;b=a.lists[h.ENTRY];
b.items[0]=0;b.items[1]=2;b.count=2;b=a.lists[h.EXIT];b.items[0]=1;b.items[1]=3;b.count=2;a.capCenter=void 0};return d}();p.Tessellator=K});