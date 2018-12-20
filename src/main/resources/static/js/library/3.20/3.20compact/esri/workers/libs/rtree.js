// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
var RTree=function(a){var c=3,r=6;isNaN(a)||(c=Math.floor(a/2),r=a);this.min_width=c;this.max_width=r;var n={x:0,y:0,w:0,h:0,id:"root",nodes:[]};(function(){var a={};return function(p){var b=0;p in a?b=a[p]++:a[p]=0;return p+"_"+b}})();var u=function(a,g,b){var f=[],p=[],d=[];if(!a||!RTree.Rectangle.overlap_rectangle(a,b))return d;a={x:a.x,y:a.y,w:a.w,h:a.h,target:g};p.push(b.nodes.length);f.push(b);do if(b=f.pop(),g=p.pop()-1,"target"in a)for(;0<=g;){var e=b.nodes[g];if(RTree.Rectangle.overlap_rectangle(a,
e))if(a.target&&"leaf"in e&&e.leaf===a.target||!a.target&&("leaf"in e||RTree.Rectangle.contains_rectangle(e,a))){"nodes"in e?(d=w(e,!0,[],e),b.nodes.splice(g,1)):d=b.nodes.splice(g,1);RTree.Rectangle.make_MBR(b.nodes,b);delete a.target;b.nodes.length<c&&(a.nodes=w(b,!0,[],b));break}else"nodes"in e&&(p.push(g),f.push(b),b=e,g=e.nodes.length);--g}else if("nodes"in a){b.nodes.splice(g+1,1);0<b.nodes.length&&RTree.Rectangle.make_MBR(b.nodes,b);for(g=0;g<a.nodes.length;g++)v(a.nodes[g],b);a.nodes.length=
0;0===f.length&&1>=b.nodes.length?(a.nodes=w(b,!0,a.nodes,b),b.nodes.length=0,f.push(b),p.push(1)):0<f.length&&b.nodes.length<c?(a.nodes=w(b,!0,a.nodes,b),b.nodes.length=0):delete a.nodes}else RTree.Rectangle.make_MBR(b.nodes,b);while(0<f.length);return d},w=function(a,c,b,f){var g=[];if(!RTree.Rectangle.overlap_rectangle(a,f))return b;g.push(f.nodes);do{f=g.pop();for(var d=f.length-1;0<=d;d--){var e=f[d];RTree.Rectangle.overlap_rectangle(a,e)&&("nodes"in e?g.push(e.nodes):"leaf"in e&&(c?b.push(e):
b.push(e.leaf)))}}while(0<g.length);return b},v=function(a,g){var b;if(0===g.nodes.length)g.x=a.x,g.y=a.y,g.w=a.w,g.h=a.h,g.nodes.push(a);else{var f=-1,p=[],d;p.push(g);var e=g.nodes;do{-1!==f&&(p.push(e[f]),e=e[f].nodes,f=-1);for(var h=e.length-1;0<=h;h--){var m=e[h];if("leaf"in m){f=-1;break}var k=RTree.Rectangle.squarified_ratio(m.w,m.h,m.nodes.length+1),m=RTree.Rectangle.squarified_ratio(Math.max(m.x+m.w,a.x+a.w)-Math.min(m.x,a.x),Math.max(m.y+m.h,a.y+a.h)-Math.min(m.y,a.y),m.nodes.length+2);
if(0>f||Math.abs(m-k)<d)d=Math.abs(m-k),f=h}}while(-1!==f);f=a;do{if(b&&"nodes"in b&&0===b.nodes.length)for(d=b,b=p.pop(),e=0;e<b.nodes.length;e++){if(b.nodes[e]===d||0===b.nodes[e].nodes.length){b.nodes.splice(e,1);break}}else b=p.pop();if("leaf"in f||"nodes"in f||Array.isArray(f)){if(Array.isArray(f)){for(d=0;d<f.length;d++)RTree.Rectangle.expand_rectangle(b,f[d]);b.nodes=b.nodes.concat(f)}else RTree.Rectangle.expand_rectangle(b,f),b.nodes.push(f);if(b.nodes.length<=r)f={x:b.x,y:b.y,w:b.w,h:b.h};
else{d=f=b.nodes;for(var e=d.length-1,h=0,k=d.length-1,m=0,l=void 0,q=void 0,l=d.length-2;0<=l;l--)q=d[l],q.x>d[h].x?h=l:q.x+q.w<d[e].x+d[e].w&&(e=l),q.y>d[m].y?m=l:q.y+q.h<d[k].y+d[k].h&&(k=l);Math.abs(d[e].x+d[e].w-d[h].x)>Math.abs(d[k].y+d[k].h-d[m].y)?e>h?(l=d.splice(e,1)[0],q=d.splice(h,1)[0]):(q=d.splice(h,1)[0],l=d.splice(e,1)[0]):k>m?(l=d.splice(k,1)[0],q=d.splice(m,1)[0]):(q=d.splice(m,1)[0],l=d.splice(k,1)[0]);for(d=[{x:l.x,y:l.y,w:l.w,h:l.h,nodes:[l]},{x:q.x,y:q.y,w:q.w,h:q.h,nodes:[q]}];0<
f.length;){for(var e=f,h=d[0],k=d[1],l=RTree.Rectangle.squarified_ratio(h.w,h.h,h.nodes.length+1),q=RTree.Rectangle.squarified_ratio(k.w,k.h,k.nodes.length+1),n=void 0,v=void 0,m=void 0,u=e.length-1;0<=u;u--){var t=e[u],w=Math.abs(RTree.Rectangle.squarified_ratio(Math.max(h.x+h.w,t.x+t.w)-Math.min(h.x,t.x),Math.max(h.y+h.h,t.y+t.h)-Math.min(h.y,t.y),h.nodes.length+2)-l),t=Math.abs(RTree.Rectangle.squarified_ratio(Math.max(k.x+k.w,t.x+t.w)-Math.min(k.x,t.x),Math.max(k.y+k.h,t.y+t.h)-Math.min(k.y,t.y),
k.nodes.length+2)-q);if(!v||!n||Math.abs(t-w)<n)v=u,n=Math.abs(t-w),m=t<w?k:h}l=e.splice(v,1)[0];h.nodes.length+e.length+1<=c?(h.nodes.push(l),RTree.Rectangle.expand_rectangle(h,l)):k.nodes.length+e.length+1<=c?(k.nodes.push(l),RTree.Rectangle.expand_rectangle(k,l)):(m.nodes.push(l),RTree.Rectangle.expand_rectangle(m,l))}f=d;1>p.length&&(b.nodes.push(d[0]),p.push(b),f=d[1])}}else RTree.Rectangle.expand_rectangle(b,f),f={x:b.x,y:b.y,w:b.w,h:b.h}}while(0<p.length)}};this.serialize=function(){return JSON.stringify(n)};
this.deserialize=function(a,c){var b=c=c||n;b.nodes=a.nodes;b.x=a.x;b.y=a.y;b.w=a.w;b.h=a.h;return c};this.search=function(a,c){var b=[a,!!c,[],n];if(void 0===a)throw"Wrong number of arguments. RT.Search requires at least a bounding rectangle.";return w.apply(this,b)};this.remove=function(a,c){var b=Array.prototype.slice.call(arguments);1===b.length&&b.push(!1);b.push(n);if(!1===c){var f=0,g=[];do f=g.length,g=g.concat(u.apply(this,b));while(f!==g.length);return g}return u.apply(this,b)};this.insert=
function(a,c){if(2>arguments.length)throw"Wrong number of arguments. RT.Insert requires at least a bounding rectangle and an object.";v({x:a.x,y:a.y,w:a.w,h:a.h,leaf:c},n);return n}};
RTree.Rectangle=function(a,c,r,n){var u,w,v,p,g,b;a.x?(u=a.x,v=a.y,0!==a.w&&!a.w&&a.x2?(g=a.x2-a.x,b=a.y2-a.y):(g=a.w,b=a.h)):(u=a,v=c,g=r,b=n);w=u+g;p=v+b;this.x1=this.x=function(){return u};this.y1=this.y=function(){return v};this.x2=function(){return w};this.y2=function(){return p};this.w=function(){return g};this.h=function(){return b};this.toJSON=function(){return'{"x":'+u.toString()+', "y":'+v.toString()+', "w":'+g.toString()+', "h":'+b.toString()+"}"};this.overlap=function(a){return this.x()<
a.x2()&&this.x2()>a.x()&&this.y()<a.y2()&&this.y2()>a.y()};this.expand=function(a){var c=Math.min(this.x(),a.x()),d=Math.min(this.y(),a.y());g=Math.max(this.x2(),a.x2())-c;b=Math.max(this.y2(),a.y2())-d;u=c;v=d;return this};this.setRect=function(a,b,c,e){}};RTree.Rectangle.overlap_rectangle=function(a,c){return a.x<c.x+c.w&&a.x+a.w>c.x&&a.y<c.y+c.h&&a.y+a.h>c.y};RTree.Rectangle.contains_rectangle=function(a,c){return a.x+a.w<=c.x+c.w&&a.x>=c.x&&a.y+a.h<=c.y+c.h&&a.y>=c.y};
RTree.Rectangle.expand_rectangle=function(a,c){var r,n;r=a.x<c.x?a.x:c.x;n=a.y<c.y?a.y:c.y;a.w=a.x+a.w>c.x+c.w?a.x+a.w-r:c.x+c.w-r;a.h=a.y+a.h>c.y+c.h?a.y+a.h-n:c.y+c.h-n;a.x=r;a.y=n;return a};RTree.Rectangle.make_MBR=function(a,c){if(1>a.length)return{x:0,y:0,w:0,h:0};c?(c.x=a[0].x,c.y=a[0].y,c.w=a[0].w,c.h=a[0].h):c={x:a[0].x,y:a[0].y,w:a[0].w,h:a[0].h};for(var r=a.length-1;0<r;r--)RTree.Rectangle.expand_rectangle(c,a[r]);return c};
RTree.Rectangle.squarified_ratio=function(a,c,r){var n=(a+c)/2;a*=c;return a*r/(a/(n*n))};