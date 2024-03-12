import{a as j}from"./chunk-PCFGFNNQ.js";import{a as E}from"./chunk-JMWWNZHX.js";import{a as C}from"./chunk-Z3SYNMQT.js";import{b as n}from"./chunk-4KGDZUZQ.js";import{e as O}from"./chunk-F3TINEFX.js";function l(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),6*t<1?e+6*(r-e)*t:2*t<1?r:3*t<2?e+(r-e)*(2/3-t)*6:e}function e(e,r,t,o){this.red=C(e,1),this.green=C(r,1),this.blue=C(t,1),this.alpha=C(o,1)}var A,g,m;e.fromCartesian4=function(r,t){return n.typeOf.object("cartesian",r),O(t)?(t.red=r.x,t.green=r.y,t.blue=r.z,t.alpha=r.w,t):new e(r.x,r.y,r.z,r.w)},e.fromBytes=function(r,t,o,n,s){return r=e.byteToFloat(C(r,255)),t=e.byteToFloat(C(t,255)),o=e.byteToFloat(C(o,255)),n=e.byteToFloat(C(n,255)),O(s)?(s.red=r,s.green=t,s.blue=o,s.alpha=n,s):new e(r,t,o,n)},e.fromAlpha=function(r,t,o){return n.typeOf.object("color",r),n.typeOf.number("alpha",t),O(o)?(o.red=r.red,o.green=r.green,o.blue=r.blue,o.alpha=t,o):new e(r.red,r.green,r.blue,t)},j.supportsTypedArrays()&&(A=new ArrayBuffer(4),g=new Uint32Array(A),m=new Uint8Array(A)),e.fromRgba=function(r,t){return g[0]=r,e.fromBytes(m[0],m[1],m[2],m[3],t)},e.fromHsl=function(r,t,o,n,s){r=C(r,0)%1,t=C(t,0),o=C(o,0),n=C(n,1);let f=o,i=o,a=o;if(0!==t){let e;e=o<.5?o*(1+t):o+t-o*t;let n=2*o-e;f=l(n,e,r+1/3),i=l(n,e,r),a=l(n,e,r-1/3)}return O(s)?(s.red=f,s.green=i,s.blue=a,s.alpha=n,s):new e(f,i,a,n)},e.fromRandom=function(r,t){let o=(r=C(r,C.EMPTY_OBJECT)).red;if(!O(o)){let e=C(r.minimumRed,0),t=C(r.maximumRed,1);n.typeOf.number.lessThanOrEquals("minimumRed",e,t),o=e+E.nextRandomNumber()*(t-e)}let s=r.green;if(!O(s)){let e=C(r.minimumGreen,0),t=C(r.maximumGreen,1);n.typeOf.number.lessThanOrEquals("minimumGreen",e,t),s=e+E.nextRandomNumber()*(t-e)}let f=r.blue;if(!O(f)){let e=C(r.minimumBlue,0),t=C(r.maximumBlue,1);n.typeOf.number.lessThanOrEquals("minimumBlue",e,t),f=e+E.nextRandomNumber()*(t-e)}let l=r.alpha;if(!O(l)){let e=C(r.minimumAlpha,0),t=C(r.maximumAlpha,1);n.typeOf.number.lessThanOrEquals("minumumAlpha",e,t),l=e+E.nextRandomNumber()*(t-e)}return O(t)?(t.red=o,t.green=s,t.blue=f,t.alpha=l,t):new e(o,s,f,l)};var a=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,z=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,p=/^rgba?\s*\(\s*([0-9.]+%?)\s*[,\s]+\s*([0-9.]+%?)\s*[,\s]+\s*([0-9.]+%?)(?:\s*[,\s/]+\s*([0-9.]+))?\s*\)$/i,R=/^hsla?\s*\(\s*([0-9.]+)\s*[,\s]+\s*([0-9.]+%)\s*[,\s]+\s*([0-9.]+%)(?:\s*[,\s/]+\s*([0-9.]+))?\s*\)$/i;e.fromCssColorString=function(r,t){n.typeOf.string("color",r),O(t)||(t=new e);let o=e[(r=r.trim()).toUpperCase()];if(O(o))return e.clone(o,t),t;let s=a.exec(r);return null!==s?(t.red=parseInt(s[1],16)/15,t.green=parseInt(s[2],16)/15,t.blue=parseInt(s[3],16)/15,t.alpha=parseInt(C(s[4],"f"),16)/15,t):(s=z.exec(r),null!==s?(t.red=parseInt(s[1],16)/255,t.green=parseInt(s[2],16)/255,t.blue=parseInt(s[3],16)/255,t.alpha=parseInt(C(s[4],"ff"),16)/255,t):(s=p.exec(r),null!==s?(t.red=parseFloat(s[1])/("%"===s[1].substr(-1)?100:255),t.green=parseFloat(s[2])/("%"===s[2].substr(-1)?100:255),t.blue=parseFloat(s[3])/("%"===s[3].substr(-1)?100:255),t.alpha=parseFloat(C(s[4],"1.0")),t):(s=R.exec(r),null!==s?e.fromHsl(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,parseFloat(C(s[4],"1.0")),t):t=void 0)))},e.packedLength=4,e.pack=function(e,r,t){return n.typeOf.object("value",e),n.defined("array",r),t=C(t,0),r[t++]=e.red,r[t++]=e.green,r[t++]=e.blue,r[t]=e.alpha,r},e.unpack=function(r,t,o){return n.defined("array",r),t=C(t,0),O(o)||(o=new e),o.red=r[t++],o.green=r[t++],o.blue=r[t++],o.alpha=r[t],o},e.byteToFloat=function(e){return e/255},e.floatToByte=function(e){return 1===e?255:256*e|0},e.clone=function(r,t){if(O(r))return O(t)?(t.red=r.red,t.green=r.green,t.blue=r.blue,t.alpha=r.alpha,t):new e(r.red,r.green,r.blue,r.alpha)},e.equals=function(e,r){return e===r||O(e)&&O(r)&&e.red===r.red&&e.green===r.green&&e.blue===r.blue&&e.alpha===r.alpha},e.equalsArray=function(e,r,t){return e.red===r[t]&&e.green===r[t+1]&&e.blue===r[t+2]&&e.alpha===r[t+3]},e.prototype.clone=function(r){return e.clone(this,r)},e.prototype.equals=function(r){return e.equals(this,r)},e.prototype.equalsEpsilon=function(e,r){return this===e||O(e)&&Math.abs(this.red-e.red)<=r&&Math.abs(this.green-e.green)<=r&&Math.abs(this.blue-e.blue)<=r&&Math.abs(this.alpha-e.alpha)<=r},e.prototype.toString=function(){return`(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`},e.prototype.toCssColorString=function(){let r=e.floatToByte(this.red),t=e.floatToByte(this.green),o=e.floatToByte(this.blue);return 1===this.alpha?`rgb(${r},${t},${o})`:`rgba(${r},${t},${o},${this.alpha})`},e.prototype.toCssHexString=function(){let r=e.floatToByte(this.red).toString(16);r.length<2&&(r=`0${r}`);let t=e.floatToByte(this.green).toString(16);t.length<2&&(t=`0${t}`);let o=e.floatToByte(this.blue).toString(16);if(o.length<2&&(o=`0${o}`),this.alpha<1){let n=e.floatToByte(this.alpha).toString(16);return n.length<2&&(n=`0${n}`),`#${r}${t}${o}${n}`}return`#${r}${t}${o}`},e.prototype.toBytes=function(r){let t=e.floatToByte(this.red),o=e.floatToByte(this.green),n=e.floatToByte(this.blue),s=e.floatToByte(this.alpha);return O(r)?(r[0]=t,r[1]=o,r[2]=n,r[3]=s,r):[t,o,n,s]},e.prototype.toRgba=function(){return m[0]=e.floatToByte(this.red),m[1]=e.floatToByte(this.green),m[2]=e.floatToByte(this.blue),m[3]=e.floatToByte(this.alpha),g[0]},e.prototype.brighten=function(e,r){return n.typeOf.number("magnitude",e),n.typeOf.number.greaterThanOrEquals("magnitude",e,0),n.typeOf.object("result",r),e=1-e,r.red=1-(1-this.red)*e,r.green=1-(1-this.green)*e,r.blue=1-(1-this.blue)*e,r.alpha=this.alpha,r},e.prototype.darken=function(e,r){return n.typeOf.number("magnitude",e),n.typeOf.number.greaterThanOrEquals("magnitude",e,0),n.typeOf.object("result",r),e=1-e,r.red=this.red*e,r.green=this.green*e,r.blue=this.blue*e,r.alpha=this.alpha,r},e.prototype.withAlpha=function(r,t){return e.fromAlpha(this,r,t)},e.add=function(e,r,t){return n.typeOf.object("left",e),n.typeOf.object("right",r),n.typeOf.object("result",t),t.red=e.red+r.red,t.green=e.green+r.green,t.blue=e.blue+r.blue,t.alpha=e.alpha+r.alpha,t},e.subtract=function(e,r,t){return n.typeOf.object("left",e),n.typeOf.object("right",r),n.typeOf.object("result",t),t.red=e.red-r.red,t.green=e.green-r.green,t.blue=e.blue-r.blue,t.alpha=e.alpha-r.alpha,t},e.multiply=function(e,r,t){return n.typeOf.object("left",e),n.typeOf.object("right",r),n.typeOf.object("result",t),t.red=e.red*r.red,t.green=e.green*r.green,t.blue=e.blue*r.blue,t.alpha=e.alpha*r.alpha,t},e.divide=function(e,r,t){return n.typeOf.object("left",e),n.typeOf.object("right",r),n.typeOf.object("result",t),t.red=e.red/r.red,t.green=e.green/r.green,t.blue=e.blue/r.blue,t.alpha=e.alpha/r.alpha,t},e.mod=function(e,r,t){return n.typeOf.object("left",e),n.typeOf.object("right",r),n.typeOf.object("result",t),t.red=e.red%r.red,t.green=e.green%r.green,t.blue=e.blue%r.blue,t.alpha=e.alpha%r.alpha,t},e.lerp=function(e,r,t,o){return n.typeOf.object("start",e),n.typeOf.object("end",r),n.typeOf.number("t",t),n.typeOf.object("result",o),o.red=E.lerp(e.red,r.red,t),o.green=E.lerp(e.green,r.green,t),o.blue=E.lerp(e.blue,r.blue,t),o.alpha=E.lerp(e.alpha,r.alpha,t),o},e.multiplyByScalar=function(e,r,t){return n.typeOf.object("color",e),n.typeOf.number("scalar",r),n.typeOf.object("result",t),t.red=e.red*r,t.green=e.green*r,t.blue=e.blue*r,t.alpha=e.alpha*r,t},e.divideByScalar=function(e,r,t){return n.typeOf.object("color",e),n.typeOf.number("scalar",r),n.typeOf.object("result",t),t.red=e.red/r,t.green=e.green/r,t.blue=e.blue/r,t.alpha=e.alpha/r,t},e.ALICEBLUE=Object.freeze(e.fromCssColorString("#F0F8FF")),e.ANTIQUEWHITE=Object.freeze(e.fromCssColorString("#FAEBD7")),e.AQUA=Object.freeze(e.fromCssColorString("#00FFFF")),e.AQUAMARINE=Object.freeze(e.fromCssColorString("#7FFFD4")),e.AZURE=Object.freeze(e.fromCssColorString("#F0FFFF")),e.BEIGE=Object.freeze(e.fromCssColorString("#F5F5DC")),e.BISQUE=Object.freeze(e.fromCssColorString("#FFE4C4")),e.BLACK=Object.freeze(e.fromCssColorString("#000000")),e.BLANCHEDALMOND=Object.freeze(e.fromCssColorString("#FFEBCD")),e.BLUE=Object.freeze(e.fromCssColorString("#0000FF")),e.BLUEVIOLET=Object.freeze(e.fromCssColorString("#8A2BE2")),e.BROWN=Object.freeze(e.fromCssColorString("#A52A2A")),e.BURLYWOOD=Object.freeze(e.fromCssColorString("#DEB887")),e.CADETBLUE=Object.freeze(e.fromCssColorString("#5F9EA0")),e.CHARTREUSE=Object.freeze(e.fromCssColorString("#7FFF00")),e.CHOCOLATE=Object.freeze(e.fromCssColorString("#D2691E")),e.CORAL=Object.freeze(e.fromCssColorString("#FF7F50")),e.CORNFLOWERBLUE=Object.freeze(e.fromCssColorString("#6495ED")),e.CORNSILK=Object.freeze(e.fromCssColorString("#FFF8DC")),e.CRIMSON=Object.freeze(e.fromCssColorString("#DC143C")),e.CYAN=Object.freeze(e.fromCssColorString("#00FFFF")),e.DARKBLUE=Object.freeze(e.fromCssColorString("#00008B")),e.DARKCYAN=Object.freeze(e.fromCssColorString("#008B8B")),e.DARKGOLDENROD=Object.freeze(e.fromCssColorString("#B8860B")),e.DARKGRAY=Object.freeze(e.fromCssColorString("#A9A9A9")),e.DARKGREEN=Object.freeze(e.fromCssColorString("#006400")),e.DARKGREY=e.DARKGRAY,e.DARKKHAKI=Object.freeze(e.fromCssColorString("#BDB76B")),e.DARKMAGENTA=Object.freeze(e.fromCssColorString("#8B008B")),e.DARKOLIVEGREEN=Object.freeze(e.fromCssColorString("#556B2F")),e.DARKORANGE=Object.freeze(e.fromCssColorString("#FF8C00")),e.DARKORCHID=Object.freeze(e.fromCssColorString("#9932CC")),e.DARKRED=Object.freeze(e.fromCssColorString("#8B0000")),e.DARKSALMON=Object.freeze(e.fromCssColorString("#E9967A")),e.DARKSEAGREEN=Object.freeze(e.fromCssColorString("#8FBC8F")),e.DARKSLATEBLUE=Object.freeze(e.fromCssColorString("#483D8B")),e.DARKSLATEGRAY=Object.freeze(e.fromCssColorString("#2F4F4F")),e.DARKSLATEGREY=e.DARKSLATEGRAY,e.DARKTURQUOISE=Object.freeze(e.fromCssColorString("#00CED1")),e.DARKVIOLET=Object.freeze(e.fromCssColorString("#9400D3")),e.DEEPPINK=Object.freeze(e.fromCssColorString("#FF1493")),e.DEEPSKYBLUE=Object.freeze(e.fromCssColorString("#00BFFF")),e.DIMGRAY=Object.freeze(e.fromCssColorString("#696969")),e.DIMGREY=e.DIMGRAY,e.DODGERBLUE=Object.freeze(e.fromCssColorString("#1E90FF")),e.FIREBRICK=Object.freeze(e.fromCssColorString("#B22222")),e.FLORALWHITE=Object.freeze(e.fromCssColorString("#FFFAF0")),e.FORESTGREEN=Object.freeze(e.fromCssColorString("#228B22")),e.FUCHSIA=Object.freeze(e.fromCssColorString("#FF00FF")),e.GAINSBORO=Object.freeze(e.fromCssColorString("#DCDCDC")),e.GHOSTWHITE=Object.freeze(e.fromCssColorString("#F8F8FF")),e.GOLD=Object.freeze(e.fromCssColorString("#FFD700")),e.GOLDENROD=Object.freeze(e.fromCssColorString("#DAA520")),e.GRAY=Object.freeze(e.fromCssColorString("#808080")),e.GREEN=Object.freeze(e.fromCssColorString("#008000")),e.GREENYELLOW=Object.freeze(e.fromCssColorString("#ADFF2F")),e.GREY=e.GRAY,e.HONEYDEW=Object.freeze(e.fromCssColorString("#F0FFF0")),e.HOTPINK=Object.freeze(e.fromCssColorString("#FF69B4")),e.INDIANRED=Object.freeze(e.fromCssColorString("#CD5C5C")),e.INDIGO=Object.freeze(e.fromCssColorString("#4B0082")),e.IVORY=Object.freeze(e.fromCssColorString("#FFFFF0")),e.KHAKI=Object.freeze(e.fromCssColorString("#F0E68C")),e.LAVENDER=Object.freeze(e.fromCssColorString("#E6E6FA")),e.LAVENDAR_BLUSH=Object.freeze(e.fromCssColorString("#FFF0F5")),e.LAWNGREEN=Object.freeze(e.fromCssColorString("#7CFC00")),e.LEMONCHIFFON=Object.freeze(e.fromCssColorString("#FFFACD")),e.LIGHTBLUE=Object.freeze(e.fromCssColorString("#ADD8E6")),e.LIGHTCORAL=Object.freeze(e.fromCssColorString("#F08080")),e.LIGHTCYAN=Object.freeze(e.fromCssColorString("#E0FFFF")),e.LIGHTGOLDENRODYELLOW=Object.freeze(e.fromCssColorString("#FAFAD2")),e.LIGHTGRAY=Object.freeze(e.fromCssColorString("#D3D3D3")),e.LIGHTGREEN=Object.freeze(e.fromCssColorString("#90EE90")),e.LIGHTGREY=e.LIGHTGRAY,e.LIGHTPINK=Object.freeze(e.fromCssColorString("#FFB6C1")),e.LIGHTSEAGREEN=Object.freeze(e.fromCssColorString("#20B2AA")),e.LIGHTSKYBLUE=Object.freeze(e.fromCssColorString("#87CEFA")),e.LIGHTSLATEGRAY=Object.freeze(e.fromCssColorString("#778899")),e.LIGHTSLATEGREY=e.LIGHTSLATEGRAY,e.LIGHTSTEELBLUE=Object.freeze(e.fromCssColorString("#B0C4DE")),e.LIGHTYELLOW=Object.freeze(e.fromCssColorString("#FFFFE0")),e.LIME=Object.freeze(e.fromCssColorString("#00FF00")),e.LIMEGREEN=Object.freeze(e.fromCssColorString("#32CD32")),e.LINEN=Object.freeze(e.fromCssColorString("#FAF0E6")),e.MAGENTA=Object.freeze(e.fromCssColorString("#FF00FF")),e.MAROON=Object.freeze(e.fromCssColorString("#800000")),e.MEDIUMAQUAMARINE=Object.freeze(e.fromCssColorString("#66CDAA")),e.MEDIUMBLUE=Object.freeze(e.fromCssColorString("#0000CD")),e.MEDIUMORCHID=Object.freeze(e.fromCssColorString("#BA55D3")),e.MEDIUMPURPLE=Object.freeze(e.fromCssColorString("#9370DB")),e.MEDIUMSEAGREEN=Object.freeze(e.fromCssColorString("#3CB371")),e.MEDIUMSLATEBLUE=Object.freeze(e.fromCssColorString("#7B68EE")),e.MEDIUMSPRINGGREEN=Object.freeze(e.fromCssColorString("#00FA9A")),e.MEDIUMTURQUOISE=Object.freeze(e.fromCssColorString("#48D1CC")),e.MEDIUMVIOLETRED=Object.freeze(e.fromCssColorString("#C71585")),e.MIDNIGHTBLUE=Object.freeze(e.fromCssColorString("#191970")),e.MINTCREAM=Object.freeze(e.fromCssColorString("#F5FFFA")),e.MISTYROSE=Object.freeze(e.fromCssColorString("#FFE4E1")),e.MOCCASIN=Object.freeze(e.fromCssColorString("#FFE4B5")),e.NAVAJOWHITE=Object.freeze(e.fromCssColorString("#FFDEAD")),e.NAVY=Object.freeze(e.fromCssColorString("#000080")),e.OLDLACE=Object.freeze(e.fromCssColorString("#FDF5E6")),e.OLIVE=Object.freeze(e.fromCssColorString("#808000")),e.OLIVEDRAB=Object.freeze(e.fromCssColorString("#6B8E23")),e.ORANGE=Object.freeze(e.fromCssColorString("#FFA500")),e.ORANGERED=Object.freeze(e.fromCssColorString("#FF4500")),e.ORCHID=Object.freeze(e.fromCssColorString("#DA70D6")),e.PALEGOLDENROD=Object.freeze(e.fromCssColorString("#EEE8AA")),e.PALEGREEN=Object.freeze(e.fromCssColorString("#98FB98")),e.PALETURQUOISE=Object.freeze(e.fromCssColorString("#AFEEEE")),e.PALEVIOLETRED=Object.freeze(e.fromCssColorString("#DB7093")),e.PAPAYAWHIP=Object.freeze(e.fromCssColorString("#FFEFD5")),e.PEACHPUFF=Object.freeze(e.fromCssColorString("#FFDAB9")),e.PERU=Object.freeze(e.fromCssColorString("#CD853F")),e.PINK=Object.freeze(e.fromCssColorString("#FFC0CB")),e.PLUM=Object.freeze(e.fromCssColorString("#DDA0DD")),e.POWDERBLUE=Object.freeze(e.fromCssColorString("#B0E0E6")),e.PURPLE=Object.freeze(e.fromCssColorString("#800080")),e.RED=Object.freeze(e.fromCssColorString("#FF0000")),e.ROSYBROWN=Object.freeze(e.fromCssColorString("#BC8F8F")),e.ROYALBLUE=Object.freeze(e.fromCssColorString("#4169E1")),e.SADDLEBROWN=Object.freeze(e.fromCssColorString("#8B4513")),e.SALMON=Object.freeze(e.fromCssColorString("#FA8072")),e.SANDYBROWN=Object.freeze(e.fromCssColorString("#F4A460")),e.SEAGREEN=Object.freeze(e.fromCssColorString("#2E8B57")),e.SEASHELL=Object.freeze(e.fromCssColorString("#FFF5EE")),e.SIENNA=Object.freeze(e.fromCssColorString("#A0522D")),e.SILVER=Object.freeze(e.fromCssColorString("#C0C0C0")),e.SKYBLUE=Object.freeze(e.fromCssColorString("#87CEEB")),e.SLATEBLUE=Object.freeze(e.fromCssColorString("#6A5ACD")),e.SLATEGRAY=Object.freeze(e.fromCssColorString("#708090")),e.SLATEGREY=e.SLATEGRAY,e.SNOW=Object.freeze(e.fromCssColorString("#FFFAFA")),e.SPRINGGREEN=Object.freeze(e.fromCssColorString("#00FF7F")),e.STEELBLUE=Object.freeze(e.fromCssColorString("#4682B4")),e.TAN=Object.freeze(e.fromCssColorString("#D2B48C")),e.TEAL=Object.freeze(e.fromCssColorString("#008080")),e.THISTLE=Object.freeze(e.fromCssColorString("#D8BFD8")),e.TOMATO=Object.freeze(e.fromCssColorString("#FF6347")),e.TURQUOISE=Object.freeze(e.fromCssColorString("#40E0D0")),e.VIOLET=Object.freeze(e.fromCssColorString("#EE82EE")),e.WHEAT=Object.freeze(e.fromCssColorString("#F5DEB3")),e.WHITE=Object.freeze(e.fromCssColorString("#FFFFFF")),e.WHITESMOKE=Object.freeze(e.fromCssColorString("#F5F5F5")),e.YELLOW=Object.freeze(e.fromCssColorString("#FFFF00")),e.YELLOWGREEN=Object.freeze(e.fromCssColorString("#9ACD32")),e.TRANSPARENT=Object.freeze(new e(0,0,0,0));var h=e;export{h as a};