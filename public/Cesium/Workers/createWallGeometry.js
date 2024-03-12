import{a as nt}from"./chunk-TIY5LK5R.js";import"./chunk-GNAFTO6Q.js";import"./chunk-JXMT2ZQS.js";import{a as _}from"./chunk-GWMEMIDW.js";import"./chunk-EKKRJHD7.js";import"./chunk-KZVVSHMS.js";import"./chunk-EQAHH27B.js";import"./chunk-LWO5EUNN.js";import{a as ot}from"./chunk-SPMRTIBU.js";import{a as it}from"./chunk-U6MIZ4IC.js";import{b as tt,c as et,d as R}from"./chunk-3G4OCZJT.js";import{d as I}from"./chunk-LYPPBP4Q.js";import"./chunk-PCFGFNNQ.js";import"./chunk-V2SDNSQR.js";import"./chunk-S7TTFAYA.js";import{a as S}from"./chunk-TLYHKSDJ.js";import{a as s,d as l}from"./chunk-PYVDHCDQ.js";import{a as J}from"./chunk-JMWWNZHX.js";import"./chunk-DNO4OWAM.js";import"./chunk-XDVDNOI4.js";import{a as w}from"./chunk-Z3SYNMQT.js";import{a as P}from"./chunk-4KGDZUZQ.js";import{e as r}from"./chunk-F3TINEFX.js";var Q=new s,Y=new s,lt=new s,st=new s,pt=new s,ut=new s,ft=new s;function k(t){let e=(t=w(t,w.EMPTY_OBJECT)).positions,i=t.maximumHeights,n=t.minimumHeights;if(!r(e))throw new P("options.positions is required.");if(r(i)&&i.length!==e.length)throw new P("options.positions and options.maximumHeights must have the same length.");if(r(n)&&n.length!==e.length)throw new P("options.positions and options.minimumHeights must have the same length.");let o=w(t.vertexFormat,_.DEFAULT),a=w(t.granularity,J.RADIANS_PER_DEGREE),m=w(t.ellipsoid,l.WGS84);this._positions=e,this._minimumHeights=n,this._maximumHeights=i,this._vertexFormat=_.clone(o),this._granularity=a,this._ellipsoid=l.clone(m),this._workerName="createWallGeometry";let p=1+e.length*s.packedLength+2;r(n)&&(p+=n.length),r(i)&&(p+=i.length),this.packedLength=p+l.packedLength+_.packedLength+1}k.pack=function(t,e,i){if(!r(t))throw new P("value is required");if(!r(e))throw new P("array is required");i=w(i,0);let n,o=t._positions,a=o.length;for(e[i++]=a,n=0;n<a;++n,i+=s.packedLength)s.pack(o[n],e,i);let m=t._minimumHeights;if(a=r(m)?m.length:0,e[i++]=a,r(m))for(n=0;n<a;++n)e[i++]=m[n];let p=t._maximumHeights;if(a=r(p)?p.length:0,e[i++]=a,r(p))for(n=0;n<a;++n)e[i++]=p[n];return l.pack(t._ellipsoid,e,i),i+=l.packedLength,_.pack(t._vertexFormat,e,i),e[i+=_.packedLength]=t._granularity,e};var mt=l.clone(l.UNIT_SPHERE),rt=new _,M={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:mt,vertexFormat:rt,granularity:void 0};k.unpack=function(t,e,i){if(!r(t))throw new P("array is required");e=w(e,0);let n,o,a,m=t[e++],p=new Array(m);for(n=0;n<m;++n,e+=s.packedLength)p[n]=s.unpack(t,e);if(m=t[e++],m>0)for(o=new Array(m),n=0;n<m;++n)o[n]=t[e++];if(m=t[e++],m>0)for(a=new Array(m),n=0;n<m;++n)a[n]=t[e++];let u=l.unpack(t,e,mt);e+=l.packedLength;let h=_.unpack(t,e,rt),c=t[e+=_.packedLength];return r(i)?(i._positions=p,i._minimumHeights=o,i._maximumHeights=a,i._ellipsoid=l.clone(u,i._ellipsoid),i._vertexFormat=_.clone(h,i._vertexFormat),i._granularity=c,i):(M.positions=p,M.minimumHeights=o,M.maximumHeights=a,M.granularity=c,new k(M))},k.fromConstantHeights=function(t){let e=(t=w(t,w.EMPTY_OBJECT)).positions;if(!r(e))throw new P("options.positions is required.");let i,n,o=t.minimumHeight,s=t.maximumHeight,a=r(o),m=r(s);if(a||m){let t=e.length;i=a?new Array(t):void 0,n=m?new Array(t):void 0;for(let e=0;e<t;++e)a&&(i[e]=o),m&&(n[e]=s)}return new k({positions:e,maximumHeights:n,minimumHeights:i,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat})},k.createGeometry=function(t){let e=t._positions,i=t._minimumHeights,n=t._maximumHeights,o=t._vertexFormat,a=t._granularity,m=t._ellipsoid,l=nt.computePositions(m,e,n,i,a,!0);if(!r(l))return;let p=l.bottomPositions,u=l.topPositions,h=l.numCorners,c=u.length,g=2*c,f=o.position?new Float64Array(g):void 0,w=o.normal?new Float32Array(g):void 0,k=o.tangent?new Float32Array(g):void 0,d=o.bitangent?new Float32Array(g):void 0,_=o.st?new Float32Array(g/3*2):void 0,y=0,A=0,v=0,H=0,x=0,P=ft,F=ut,j=pt,E=!0;c/=3;let L,T=0,b=1/(c-h-1);for(L=0;L<c;++L){let t=3*L,e=s.fromArray(u,t,Q),i=s.fromArray(p,t,Y);if(o.position&&(f[y++]=i.x,f[y++]=i.y,f[y++]=i.z,f[y++]=e.x,f[y++]=e.y,f[y++]=e.z),o.st&&(_[x++]=T,_[x++]=0,_[x++]=T,_[x++]=1),o.normal||o.tangent||o.bitangent){let i=s.clone(s.ZERO,st),n=s.subtract(e,m.geodeticSurfaceNormal(e,Y),Y);if(L+1<c&&(i=s.fromArray(u,t+3,st)),E){let t=s.subtract(i,e,lt),r=s.subtract(n,e,Q);P=s.normalize(s.cross(r,t,P),P),E=!1}s.equalsEpsilon(e,i,J.EPSILON10)?E=!0:(T+=b,o.tangent&&(F=s.normalize(s.subtract(i,e,F),F)),o.bitangent&&(j=s.normalize(s.cross(P,F,j),j))),o.normal&&(w[A++]=P.x,w[A++]=P.y,w[A++]=P.z,w[A++]=P.x,w[A++]=P.y,w[A++]=P.z),o.tangent&&(k[H++]=F.x,k[H++]=F.y,k[H++]=F.z,k[H++]=F.x,k[H++]=F.y,k[H++]=F.z),o.bitangent&&(d[v++]=j.x,d[v++]=j.y,d[v++]=j.z,d[v++]=j.x,d[v++]=j.y,d[v++]=j.z)}}let D=new it;o.position&&(D.position=new R({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:f})),o.normal&&(D.normal=new R({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:w})),o.tangent&&(D.tangent=new R({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:k})),o.bitangent&&(D.bitangent=new R({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:d})),o.st&&(D.st=new R({componentDatatype:S.FLOAT,componentsPerAttribute:2,values:_}));let N=g/3;g-=6*(h+1);let O=ot.createTypedArray(N,g),M=0;for(L=0;L<N-2;L+=2){let t=L,e=L+2,i=s.fromArray(f,3*t,Q),n=s.fromArray(f,3*e,Y);if(s.equalsEpsilon(i,n,J.EPSILON10))continue;let r=L+1,o=L+3;O[M++]=r,O[M++]=t,O[M++]=o,O[M++]=o,O[M++]=t,O[M++]=e}return new et({attributes:D,indices:O,primitiveType:tt.TRIANGLES,boundingSphere:new I.fromVertices(f)})};var X=k;function ht(t,e){return r(e)&&(t=X.unpack(t,e)),t._ellipsoid=l.clone(t._ellipsoid),X.createGeometry(t)}var Ot=ht;export{Ot as default};