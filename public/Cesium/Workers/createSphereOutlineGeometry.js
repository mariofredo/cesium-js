import{a as t}from"./chunk-V4NXUOJY.js";import"./chunk-4VIV3K4J.js";import"./chunk-SPMRTIBU.js";import"./chunk-U6MIZ4IC.js";import"./chunk-3G4OCZJT.js";import"./chunk-LYPPBP4Q.js";import"./chunk-PCFGFNNQ.js";import"./chunk-V2SDNSQR.js";import"./chunk-S7TTFAYA.js";import"./chunk-TLYHKSDJ.js";import{a as d}from"./chunk-PYVDHCDQ.js";import"./chunk-JMWWNZHX.js";import"./chunk-DNO4OWAM.js";import"./chunk-XDVDNOI4.js";import{a as l}from"./chunk-Z3SYNMQT.js";import{b as u}from"./chunk-4KGDZUZQ.js";import{e as a}from"./chunk-F3TINEFX.js";function s(i){let s=l(i.radius,1),n={radii:new d(s,s,s),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,subdivisions:i.subdivisions};this._ellipsoidGeometry=new t(n),this._workerName="createSphereOutlineGeometry"}s.packedLength=t.packedLength,s.pack=function(i,s,n){return u.typeOf.object("value",i),t.pack(i._ellipsoidGeometry,s,n)};var m=new t,n={radius:void 0,radii:new d,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};s.unpack=function(i,r,o){let e=t.unpack(i,r,m);return n.stackPartitions=e._stackPartitions,n.slicePartitions=e._slicePartitions,n.subdivisions=e._subdivisions,a(o)?(d.clone(e._radii,n.radii),o._ellipsoidGeometry=new t(n),o):(n.radius=e._radii.x,new s(n))},s.createGeometry=function(i){return t.createGeometry(i._ellipsoidGeometry)};var c=s;function p(i,t){return a(t)&&(i=c.unpack(i,t)),c.createGeometry(i)}var w=p;export{w as default};