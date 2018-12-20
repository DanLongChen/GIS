// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["../../Component","../../Dropdowns/AccordionDropdown/index","dojo/i18n!../../Filters/FolderFilter/nls/resources"],function(h,k,l){return function(e){function b(a){if(c[a])return c[a].exports;var d=c[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,b),d.l=!0,d.exports}var c={};return b.m=e,b.c=c,b.d=function(a,d,c){b.o(a,d)||Object.defineProperty(a,d,{enumerable:!0,get:c})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,d){if((1&d&&(a=b(a)),8&d)||4&d&&"object"==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(b.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&d&&"string"!=typeof a)for(var e in a)b.d(c,e,function(d){return a[d]}.bind(null,e));return c},b.n=function(a){var d=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(d,"a",d),d},b.o=function(a,d){return Object.prototype.hasOwnProperty.call(a,
d)},b.p="",b(b.s=278)}({0:function(e,b,c){function a(a,b){function c(){this.constructor=a}d(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}c.d(b,"b",function(){return a});c.d(b,"a",function(){return g});var d=function(a,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])})(a,b)},g=function(){return(g=Object.assign||function(a){for(var b,d=1,c=arguments.length;d<c;d++)for(var f in b=
arguments[d])Object.prototype.hasOwnProperty.call(b,f)&&(a[f]=b[f]);return a}).apply(this,arguments)}},11:function(e,b){e.exports=k},278:function(e,b,c){c.r(b);var a=c(0),d=c(67);e=c(5);var g=c(11),h=c.n(g),k=c(87);c=function(b){function c(a){a=b.call(this,a)||this;return a.handleToggleKeyDown=Object(k.a)(a.handleToggleFilter.bind(a)),a.state={filterString:""},a.handleFilterStringChange=a.handleFilterStringChange.bind(a),a.handleToggleFilter=a.handleToggleFilter.bind(a),a.handleClearFilter=a.handleClearFilter.bind(a),
a.mapFoldersToLinks=a.mapFoldersToLinks.bind(a),a}return a.b(c,b),c.prototype.render=function(a){return a(h.a,{key:"folder-accordion",title:d.folders,clearable:!!this.props.folderFilter,onClear:this.handleClearFilter,padding:!1},a("div",{class:"ftr-folder__input-area"},a("input",{id:"filter-folder-filters",type:"search",placeholder:d.filterFolders,"aria-label":d.filterFolders,oninput:this.handleFilterStringChange,value:this.state.filterString})),a("ul",{id:"folder-accordion-tree",class:"ftr-folder__list"},
this.mapFoldersToLinks(a)))},c.prototype.handleFilterStringChange=function(a){this.setState({filterString:a.target.value})},c.prototype.handleToggleFilter=function(a){var b=a.target.dataset;a=b.id;b=b.title;this.props.folderFilter&&this.props.folderFilter.id===a||this.props.onFolderSelect({id:a,title:b})},c.prototype.handleClearFilter=function(){this.props.folderFilter&&this.props.onFolderSelect()},c.prototype.preventCloseDropdown=function(a){a.stopPropagation()},c.prototype.mapFoldersToLinks=function(b){var c=
this,e={"ftr-folder__link":!0,"ftr-folder__link--active":!this.props.folderFilter};return this.props.availableFolders?[b("li",{class:"ftr-folder__item",key:"all-user-content"},b("a",{classes:e,"data-id":"all-folder-content","data-title":d.allFolders,onclick:this.handleClearFilter,onkeydown:this.handleToggleKeyDown,tabindex:"0"},d.allFolders))].concat(this.props.availableFolders.filter(function(a){return-1!==a.title.toLowerCase().indexOf(c.state.filterString.toLowerCase())}).map(function(d){var g=
a.a({},e,{"ftr-folder__link--active":c.props.folderFilter&&c.props.folderFilter.id===d.id,"ftr-folder__link--home":"root"===d.id});return b("li",{class:"ftr-folder__item",key:d.id},b("a",{classes:g,"data-id":d.id,"data-title":d.title,onclick:c.handleToggleFilter,onkeydown:c.handleToggleKeyDown,tabindex:"0"},d.title))})):null},c}(e.Component);b.default=c},5:function(e,b){e.exports=h},67:function(e,b){e.exports=l},87:function(e,b,c){c.d(b,"a",function(){return a});var a=function(a){return function(b){13===
b.keyCode&&a(b)}}}})});