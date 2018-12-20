//>>built
define("dojox/charting/plot2d/Pie","dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/dom-geometry dojo/_base/Color ./Base ./_PlotEvents ./common dojox/gfx dojox/gfx/matrix dojox/lang/functional dojox/lang/utils dojo/has".split(" "),function(J,C,M,U,aa,N,O,ba,E,V,k,K,W){return M("dojox.charting.plot2d.Pie",[N,O],{defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:20,labelStyle:"default",htmlLabels:!0,radGrad:"native",fanSize:5,startAngle:0,innerRadius:0,minWidth:0,zeroDataMessage:""},
optionalParams:{radius:0,omitLabels:!1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(g,a){this.opt=J.clone(this.defaultParams);K.updateWithObject(this.opt,a);K.updateWithPattern(this.opt,a,this.optionalParams);this.axes=[];this.run=null;this.dyn=[];this.runFilter=[];a&&a.hasOwnProperty("innerRadius")&&(this._plotSetInnerRadius=!0)},clear:function(){this.inherited(arguments);this.dyn=[];this.run=null;return this},setAxis:function(g){return this},
addSeries:function(g){this.run=g;return this},getSeriesStats:function(){return J.delegate(ba.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},render:function(g,a){if(!this.dirty)return this;this.resetEvents();this.dirty=!1;this._eventSeries={};this.cleanGroup();var f=this.group,e=this.chart.theme;!this._plotSetInnerRadius&&e&&e.pieInnerRadius&&(this.opt.innerRadius=e.pieInnerRadius);var l=(g.width-a.l-a.r)/2,h=(g.height-a.t-a.b)/2,c=Math.min(l,h),H="font"in this.opt?
this.opt.font:e.axis.tick.titleFont||"",p=H?E.normalizedLength(E.splitFontString(H).size):0,v=this.opt.hasOwnProperty("fontColor")?this.opt.fontColor:e.axis.tick.fontColor,x=V._degToRad(this.opt.startAngle),u=x,n,w,B,P,F=this.run.data,Q=this.events(),G=J.hitch(this,function(){var b=e.clone(),z=k.map(F,function(a){var d=[this.opt,this.run];null!==a&&"number"!=typeof a&&d.push(a);this.opt.styleFunc&&d.push(this.opt.styleFunc(a));return b.next("slice",d,!0)},this);"radius"in this.opt&&(c=this.opt.radius<
c?this.opt.radius:c);var d={cx:a.l+l,cy:a.t+h,r:c},R=new aa(v);this.opt.innerRadius&&(R.a=.1);var m=this._createRing(f,d).setStroke(R);this.opt.innerRadius&&m.setFill(R);this.opt.zeroDataMessage&&this.renderLabel(f,d.cx,d.cy+p/3,this.opt.zeroDataMessage,{series:{font:H,fontColor:v}},null,"middle");this.dyn=[];C.forEach(F,function(d,b){this.dyn.push({fill:this._plotFill(z[b].series.fill,g,a),stroke:z[b].series.stroke})},this)});if(!this.run&&!this.run.data.ength)return G(),this;if("number"==typeof F[0]){n=
k.map(F,"x ? Math.max(x, 0) : 0");if(k.every(n,"\x3c\x3d 0"))return G(),this;w=k.map(n,"/this",k.foldl(n,"+",0));this.opt.labels&&(B=C.map(w,function(a){return 0<a?this._getLabel(100*a)+"%":""},this))}else{n=k.map(F,"x ? Math.max(x.y, 0) : 0");if(!n.length||k.every(n,"\x3c\x3d 0"))return G(),this;w=k.map(n,"/this",k.foldl(n,"+",0));this.opt.labels&&(B=C.map(w,function(a,b){if(0>=a)return"";var d=F[b];return d.hasOwnProperty("text")?d.text:this._getLabel(100*a)+"%"},this))}var I=k.map(F,function(a){var b=
[this.opt,this.run];null!==a&&"number"!=typeof a&&b.push(a);this.opt.styleFunc&&b.push(this.opt.styleFunc(a));return e.next("slice",b,!0)},this);this.opt.labels&&(n=k.foldl1(k.map(B,function(a,b){return E._base._getTextBox(a,{font:I[b].series.font}).w},this),"Math.max(a, b)")/2,0>this.opt.labelOffset&&(c=Math.min(l-2*n,h-p)+this.opt.labelOffset));this.opt.hasOwnProperty("radius")&&(c=this.opt.radius<.9*c?this.opt.radius:.9*c);this.opt.labels&&"columns"==this.opt.labelStyle?(c/=2,l>h&&l>2*c&&(c*=l/
(2*c)),c>=.8*h&&(c=.8*h)):c>=.9*h&&(c=.9*h);P=c-this.opt.labelOffset;var b={cx:a.l+l,cy:a.t+h,r:c};this.dyn=[];var L=Array(w.length),q=[],r=u,S=this.opt.minWidth;C.forEach(w,function(a,b){if(0===a)q[b]={step:0,end:r,start:r,weak:!1};else{var d=r+2*a*Math.PI;b===w.length-1&&(d=x+2*Math.PI);var f=d-r;q[b]={step:f,start:r,end:d,weak:f*c<S};r=d}});if(0<S){n=0;var y=S/c,G=0,m;for(m=q.length-1;0<=m;m--)q[m].weak&&(++n,G+=q[m].step,q[m].step=y);y*=n;if(y>Math.PI){y=Math.PI/n;for(m=0;m<q.length;++m)q[m].weak&&
(q[m].step=y);y=Math.PI}if(0<n)for(y=1-(y-G)/2/Math.PI,m=0;m<q.length;++m)q[m].weak||(q[m].step*=y);for(m=0;m<q.length;++m)q[m].start=m?q[m].end:r,q[m].end=q[m].start+q[m].step;for(m=q.length-1;0<=m;--m)if(0!==q[m].step){q[m].end=r+2*Math.PI;break}}var r=u,D,t;C.some(w,function(m,z){var d,A=F[z],e=I[z];if(1<=m){t=this._plotFill(e.series.fill,g,a);t=this._shapeFill(t,{x:b.cx-b.r,y:b.cy-b.r,width:2*b.r,height:2*b.r});t=this._pseudoRadialFill(t,{x:b.cx,y:b.cy},b.r);d=this._createRing(f,b).setFill(t).setStroke(e.series.stroke);
this.dyn.push({fill:t,stroke:e.series.stroke});Q&&(D={element:"slice",index:z,run:this.run,shape:d,x:z,y:"number"==typeof A?A:A.y,cx:b.cx,cy:b.cy,cr:c},this._connectEvents(D),L[z]=D);for(A=z+1;A<w.length;A++)e=I[A],this.dyn.push({fill:e.series.fill,stroke:e.series.stroke});return!0}if(0===q[z].step)return this.dyn.push({fill:e.series.fill,stroke:e.series.stroke}),!1;var h=q[z].step;d=b.cx+c*Math.cos(r);var l=b.cy+c*Math.sin(r),n=b.cx+c*Math.cos(r+h),H=b.cy+c*Math.sin(r+h),p=V._degToRad(this.opt.fanSize);
if(e.series.fill&&"radial"===e.series.fill.type&&"fan"===this.opt.radGrad&&h>p){var v=f.createGroup(),p=Math.ceil(h/p),u=h/p;t=this._shapeFill(e.series.fill,{x:b.cx-b.r,y:b.cy-b.r,width:2*b.r,height:2*b.r});var k,y,x,B,C,G;for(k=0;k<p;++k)y=r+(k-.2)*u,x=r+(k+1+.2)*u,B=0==k?d:b.cx+c*Math.cos(y),C=0==k?l:b.cy+c*Math.sin(y),G=k==p-1?n:b.cx+c*Math.cos(x),x=k==p-1?H:b.cy+c*Math.sin(x),this._createSlice(v,b,c,B,C,G,x,y,u).setFill(this._pseudoRadialFill(t,{x:b.cx,y:b.cy},c,r+(k+.5)*u,r+(k+.5)*u));p=e.series.stroke;
this._createSlice(v,b,c,d,l,n,H,r,h).setStroke(p);d=v}else{p=e.series.stroke;d=this._createSlice(f,b,c,d,l,n,H,r,h).setStroke(p);if((t=e.series.fill)&&"radial"===t.type)t=this._shapeFill(t,{x:b.cx-b.r,y:b.cy-b.r,width:2*b.r,height:2*b.r}),"linear"===this.opt.radGrad&&(t=this._pseudoRadialFill(t,{x:b.cx,y:b.cy},c,r,r+h));else if(t&&"linear"===t.type){l=J.clone(d.getBoundingBox());if("svg"===E.renderer){n={w:0,h:0};try{n=U.position(d.rawNode)}catch(ca){}n.h>l.height&&(l.height=n.h);n.w>l.width&&(l.width=
n.w)}t=this._plotFill(t,g,a);t=this._shapeFill(t,l)}d.setFill(t)}this.dyn.push({fill:t,stroke:e.series.stroke});Q&&(D={element:"slice",index:z,run:this.run,shape:d,x:z,y:"number"==typeof A?A:A.y,cx:b.cx,cy:b.cy,cr:c},this._connectEvents(D),L[z]=D);r+=h;return!1},this);if(this.opt.labels){var K=W("dojo-bidi")&&this.chart.isRightToLeft();if("default"==this.opt.labelStyle)r=u=x,C.some(w,function(a,c){if(0>=a&&!this.opt.minWidth)return!1;var d=I[c];if(1<=a)return this.renderLabel(f,b.cx,b.cy+p/2,B[c],
d,0<this.opt.labelOffset),!0;var e=u+2*a*Math.PI;c+1==w.length&&(e=x+2*Math.PI);if(this.opt.omitLabels&&.001>e-u)return!1;var A=r+q[c].step/2,h=b.cx+P*Math.cos(A);this.renderLabel(f,K?g.width-h:h,b.cy+P*Math.sin(A)+p/2,B[c],d,0<this.opt.labelOffset);r+=q[c].step;u=e;return!1},this);else if("columns"==this.opt.labelStyle){var M=this.opt.omitLabels,r=u=x,T=[],X=0;for(n=w.length-1;0<=n;--n)w[n]&&++X;C.forEach(w,function(a,b){var d=u+2*a*Math.PI;b+1==w.length&&(d=x+2*Math.PI);if(0===this.minWidth?.001<=
d-u:0!==a){var c=r+q[b].step/2;1!==X||this.opt.minWidth||(c=(u+d)/2);T.push({angle:c,left:0>Math.cos(c),theme:I[b],index:b,omit:M?.001>d-u:!1})}u=d;r+=q[b].step},this);var Y=E._base._getTextBox("a",{font:H,whiteSpace:"nowrap"}).h;this._getProperLabelRadius(T,Y,1.1*b.r);var Z=b.cx-2*b.r,N=b.cx+2*b.r;C.forEach(T,function(a){if(!a.omit){var c=I[a.index],d=0;c&&c.axis&&c.axis.tick&&c.axis.tick.labelGap&&(d=c.axis.tick.labelGap);var e=E._base._getTextBox(B[a.index],{font:c.series.font,whiteSpace:"nowrap",
paddingLeft:d+"px"}).w,h=b.cx+a.labelR*Math.cos(a.angle),g=b.cy+a.labelR*Math.sin(a.angle),m=a.left?Z+e:N-e,d=a.left?Z:m+d,l=b.r,l=f.createPath().moveTo(b.cx+l*Math.cos(a.angle),b.cy+l*Math.sin(a.angle));Math.abs(a.labelR*Math.cos(a.angle))<2*b.r-e&&l.lineTo(h,g);l.lineTo(m,g).setStroke(a.theme.series.labelWiring);l.moveToBack();h=this.renderLabel(f,d,Y/3+g||0,B[a.index],c,!1,"left");Q&&!this.opt.htmlLabels&&(c=E._base._getTextBox(B[a.index],{font:a.theme.series.font}).w||0,e=E.normalizedLength(E.splitFontString(a.theme.series.font).size),
D={element:"labels",index:a.index,run:this.run,shape:h,x:d,y:g,label:B[a.index]},d=h.getShape(),g=U.position(this.chart.node,!0),d=J.mixin({type:"rect"},{x:d.x,y:d.y-2*e}),d.x+=g.x,d.y+=g.y,d.x=Math.round(d.x),d.y=Math.round(d.y),d.width=Math.ceil(c),d.height=Math.ceil(e),D.aroundRect=d,this._connectEvents(D),L[w.length+a.index]=D)}},this)}}var O=0;this._eventSeries[this.run.name]=k.map(F,function(a){return 0>=a?null:L[O++]});W("dojo-bidi")&&this._checkOrientation(this.group,g,a);return this},_getProperLabelRadius:function(g,
a,f){if(1==g.length)g[0].labelR=f;else{var e={},l={},h=2,c=2,k,p;for(k=0;k<g.length;++k)p=Math.abs(Math.sin(g[k].angle)),g[k].left?h>p&&(h=p,e=g[k]):c>p&&(c=p,l=g[k]);e.labelR=l.labelR=f;this._caculateLabelR(e,g,a);this._caculateLabelR(l,g,a)}},_caculateLabelR:function(g,a,f){var e,l,h=a.length,c=g.labelR,k=a[g.index].left?-f:f;l=0;f=g.index;for(e=(f+1)%h;l<h&&a[f].left===a[e].left;++l)c=(Math.sin(a[f].angle)*c+k)/Math.sin(a[e].angle),c=Math.max(g.labelR,c),a[e].labelR=c,f=(f+1)%h,e=(e+1)%h;l>=h&&
(a[0].labelR=g.labelR);l=0;f=g.index;for(e=(f||h)-1;l<h&&a[f].left===a[e].left;++l)c=(Math.sin(a[f].angle)*c-k)/Math.sin(a[e].angle),c=Math.max(g.labelR,c),a[e].labelR=c,f=(f||h)-1,e=(e||h)-1},_createRing:function(g,a){var f=this.opt.innerRadius;0<f?f=f/100*a.r:0>f&&(f=-f);return f?g.createPath({}).setAbsoluteMode(!0).moveTo(a.cx,a.cy-a.r).arcTo(a.r,a.r,0,!1,!0,a.cx+a.r,a.cy).arcTo(a.r,a.r,0,!0,!0,a.cx,a.cy-a.r).closePath().moveTo(a.cx,a.cy-f).arcTo(f,f,0,!1,!0,a.cx+f,a.cy).arcTo(f,f,0,!0,!0,a.cx,
a.cy-f).closePath():g.createCircle(a)},_createSlice:function(g,a,f,e,l,h,c,k,p){var v=this.opt.innerRadius;0<v?v=v/100*a.r:0>v&&(v=-v);if(v){var x=a.cx+v*Math.cos(k),u=a.cy+v*Math.sin(k),n=a.cx+v*Math.cos(k+p);a=a.cy+v*Math.sin(k+p);return g.createPath({}).setAbsoluteMode(!0).moveTo(x,u).lineTo(e,l).arcTo(f,f,0,p>Math.PI,!0,h,c).lineTo(n,a).arcTo(v,v,0,p>Math.PI,!1,x,u).closePath()}return g.createPath({}).setAbsoluteMode(!0).moveTo(a.cx,a.cy).lineTo(e,l).arcTo(f,f,0,p>Math.PI,!0,h,c).lineTo(a.cx,
a.cy).closePath()}})});