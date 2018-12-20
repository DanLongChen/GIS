//>>built
(function(k,c){"function"===typeof define&&define.amd?define(["cldr","../globalize","./number","cldr/event","cldr/supplemental"],c):"object"===typeof exports?module.exports=c(require("cldrjs"),require("../globalize")):c(k.Cldr,k.Globalize)})(this,function(k,c){function n(b,a){x(b,a,{skip:[/supplemental\/currencyData\/fractions\/[A-Za-z]{3}$/]})}var y=c._alwaysArray,z=c._formatMessage,l=c._numberNumberingSystem,A=c._numberPattern,p=c._runtimeBind,B=c._stringPad,x=c._validateCldr,C=c._validateDefaultLocale,
m=c._validateParameterPresence,D=c._validateParameterType,q=c._validateParameterTypeNumber,E=c._validateParameterTypePlainObject,r=function(b,a,d){var e="";d=d.supplemental(["currencyData/fractions",b])||d.supplemental("currencyData/fractions/DEFAULT");(b=+d._digits)&&(e="."+B("0",b).slice(0,-1)+d._rounding);return a.replace(/\.(#+|0*[0-9]|0+[0-9]?)/g,e)},t=function(b,a){var d,e={};for(d in b)a.test(d)&&(e[d]=b[d]);return e},u=function(b,a){var d=A("decimal",a),d=r(b,d,a);return{currency:b,pattern:d,
unitPatterns:t(a.main(["numbers","currencyFormats-numberSystem-"+l(a)]),/^unitPattern/)}},v=function(b,a,d){return a&&d?function(e){m(e,"value");q(e,"value");var c=b(e);e=a(e);var f=d.displayNames||{},h=d.unitPatterns;return z(h["unitPattern-count-"+e]||h["unitPattern-count-other"],[c,f["displayName-count-"+e]||f["displayName-count-other"]||f.displayName||d.currency])}:function(a){return b(a)}},F=function(b,a){var d=u(b,a);d.displayNames=t(a.main(["numbers/currencies",b]),/^displayName/);return d},
G=/[\0-#%-\*,-;\?-\]_a-\{\}\x7F-\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF-\u2043\u2045-\u2051\u2053-\u2079\u207D-\u2089\u208D-\u209F\u20BE-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u218F\u2308-\u230B\u2329\u232A\u23FB-\u23FF\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2CE4\u2CEB-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u32FF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uD7FF\uDC00-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8D-\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803-\uD819\uD81B-\uD82E\uD830-\uD833\uD836-\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDDE-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD83B[\uDC00-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0F\uDD2F\uDD6C-\uDD6F\uDD9B-\uDDE5\uDE03-\uDE0F\uDE3B-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF\uDF2D-\uDF2F\uDF7E\uDF7F\uDFCF-\uDFD3\uDFF8-\uDFFF]|\uD83D[\uDCFF\uDD4B-\uDD4F\uDD7A\uDDA4\uDE43\uDE44\uDED0-\uDEDF\uDEED-\uDEEF\uDEF4-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDFFF]|[\uD800-\uDBFF]/,
w=function(b,a,d){var c,g={"[:digit:]":/\d/,"[:^S:]":G},f=a.main(["numbers/currencies",b,"symbol"]);c=["beforeCurrency","afterCurrency"].map(function(b){return a.main(["numbers","currencyFormats-numberSystem-"+l(a),"currencySpacing",b])});d=a.main(["numbers","currencyFormats-numberSystem-"+l(a),"accounting"===d.style?"accounting":"standard"]);d=r(b,d,a).split(";").map(function(a){return a.split("\u00a4").map(function(a,b){var d=g[c[b].currencyMatch],e=g[c[b].surroundingMatch],h="",d=d.test(f.charAt(b?
f.length-1:0)),e=e.test(a.charAt(b?0:a.length-1).replace(/[#@,.]/g,"0"));d&&a&&e&&(h=c[b].insertBetween);return(b?h:"")+a+(b?"":h)}).join("'"+f+"'")}).join(";");return{pattern:d}};c.currencyFormatter=c.prototype.currencyFormatter=function(b,a){var d,c,g,f;m(b,"currency");D(b,"currency",void 0===b||"string"===typeof b&&/^[A-Za-z]{3}$/.test(b),"3-letter currency code string as defined by ISO 4217");E(a,"options");c=this.cldr;a=a||{};d=[b,a];g=a.style||"symbol";C(c);c.on("get",n);b={accounting:w,code:u,
name:F,symbol:w}[g](b,c,a);c.off("get",n);var h,k={};h=y("style");for(f in a)-1===h.indexOf(f)&&(k[f]=a[f]);a=k;a.raw=b.pattern;"symbol"===g||"accounting"===g?(g=this.numberFormatter(a),a=v(g),p(d,c,a,[g])):(g=this.numberFormatter(a),f=this.pluralGenerator(),a=v(g,f,b),p(d,c,a,[g,f,b]));return a};c.currencyParser=c.prototype.currencyParser=function(){};c.formatCurrency=c.prototype.formatCurrency=function(b,a,c){m(b,"value");q(b,"value");return this.currencyFormatter(a,c)(b)};c.parseCurrency=c.prototype.parseCurrency=
function(){};return c});