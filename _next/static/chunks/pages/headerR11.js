_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/headerR11"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FheaderR11&absolutePagePath=C%3A%5CUsers%5Ccrl_s%5COneDrive%5CEscritorio%5Cocc%5Crecruiters-atomic-library%5Cpages%5CheaderR11.js!./":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FheaderR11&absolutePagePath=C%3A%5CUsers%5Ccrl_s%5COneDrive%5CEscritorio%5Cocc%5Crecruiters-atomic-library%5Cpages%5CheaderR11.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/headerR11",
        function () {
          return __webpack_require__(/*! ./pages/headerR11.js */ "./pages/headerR11.js");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/HeaderR11.module.css":
/*!*************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/HeaderR11.module.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* .main {\r\n  margin-left: var(--spacing-small);\r\n  border-color: red;\r\n} */\r\n\r\n.HeaderR11_headerContainer__2hNr- {\r\n  margin-top: 0;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 999;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n  transition: 0.3s all;\r\n  display: block;\r\n}\r\n\r\n.HeaderR11_headerStyle__1Lh-F {\r\n  background: #ffffff;\r\n  height: 64px;\r\n  transition: 0.3s all;\r\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%), 0 1px 6px 0 rgb(0 29 124 / 5%);\r\n}\r\n\r\n.HeaderR11_innerHeaderContainer__2c8kk {\r\n  position: relative;\r\n  height: 100%;\r\n  max-width: 100%;\r\n  width: 1464px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  margin-left: auto;\r\n  padding-left: 12px;\r\n  margin-right: auto;\r\n  padding-right: 12px;\r\n}\r\n\r\n.HeaderR11_navElementsContainer__2-xFW {\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n\r\n.HeaderR11_groupContainer__1E9S5 {\r\n  align-items: center;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n}\r\n\r\n.HeaderR11_itemsCenter__3qptd {\r\n  top: 50%;\r\n  left: 50%;\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.HeaderR11_actividadWrap__1PW1E {\r\n  margin-left: 0;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n}\r\n\r\n.HeaderR11_actividadIcon__3G7nr {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik05LjcsMTYuNUgzLjV2NGg2LjN2LTRIOS43eiBNOS43LDE1TDkuNywxNWMwLjgsMCwxLjUsMC43LDEuNSwxLjV2NGMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41QzIuNywyMiwyLDIxLjMsMiwyMC41bDAsMAogICAgICAgIAl2LTRDMiwxNS43LDIuNywxNSwzLjUsMTVIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik05LjcsMy41SDMuNVYxMmg2LjNDOS43LDEyLDkuNywzLjUsOS43LDMuNXogTTkuNywyTDkuNywyYzAuOCwwLDEuNSwwLjcsMS41LDEuNVYxMmMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41CiAgICAgICAgCUMyLjcsMTMuNSwyLDEyLjgsMiwxMlYzLjVDMiwyLjcsMi43LDIsMy41LDJIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMC41LDMuNWgtNi4zdjRoNi4zVjMuNXogTTIwLjUsMkwyMC41LDJDMjEuMywyLDIyLDIuNywyMiwzLjVsMCwwdjRDMjIsOC4zLDIxLjMsOSwyMC41LDlsMCwwaC02LjMKICAgICAgICAJYy0wLjgsMC0xLjUtMC43LTEuNS0xLjV2LTRjMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTIwLjUsMTJoLTYuM3Y4LjVoNi4zVjEyeiBNMjAuNSwxMC41YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC02LjNjLTAuOCwwLTEuNS0wLjctMS41LTEuNVYxMgogICAgICAgIAljMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPC9zdmc+);\r\n}\r\n\r\n.HeaderR11_vacantesWrap__LddBd {\r\n  margin-left: 12px;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n}\r\n\r\n.HeaderR11_vacantesIcon__10_Ky {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMC4yLDIxLjNIMy43Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMTBjMC0wLjgsMC43LTEuNSwxLjUtMS41aDE2LjVjMC44LDAsMS41LDAuNywxLjUsMS41djkuNwogICAgICAgIAlDMjEuNywyMC41LDIxLDIxLjIsMjAuMiwyMS4zQzIwLjIsMjEuMiwyMC4yLDIxLjIsMjAuMiwyMS4zeiBNMy43LDEwdjkuN2gxNi41VjEwSDMuN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMjAsNy4xSDRjMC0wLjgsMC43LTEuNSwxLjUtMS41aDEzQzE5LjMsNS42LDIwLDYuMiwyMCw3LjF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTE4LDRINmMwLTAuOCwwLjctMS41LDEuNS0xLjVoOS4xQzE3LjQsMi41LDE4LDMuMiwxOCw0eiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.HeaderR11_talentoWrap__1kfkr {\r\n  margin-left: 12px;\r\n  margin-right: 0;\r\n  display: inline-block;\r\n}\r\n\r\n.HeaderR11_talentoIcon__3RGCB {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMS45LDIwLjRsLTUuNS01LjVjMS4xLTEuNCwxLjctMy4xLDEuNy00LjljMC00LjQtMy42LTgtOC04cy04LDMuNi04LDhzMy42LDgsOCw4YzEuOCwwLDMuNS0wLjYsNC45LTEuNwogICAgICAgIAlsNS41LDUuNUwyMS45LDIwLjR6IE0xMCwxNmMtMy4zLDAtNi0yLjctNi02czIuNy02LDYtNnM2LDIuNyw2LDZTMTMuMywxNiwxMCwxNnoiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.HeaderR11_icon__MmkCb {\r\n  width: 24px;\r\n  height: 24px;\r\n  transition: 0.3s all;\r\n}\r\n\r\n.HeaderR11_iconSmall__3TDIp {\r\n  width: 14px;\r\n  height: 14px;\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICAgICAJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTExLjUsNC4ybDAuMywwLjRjMC4xLDAuMSwwLjEsMC4yLDAsMC4zTDcuMSw5LjhjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMGMwLDAsMCwwLDAsMEwyLjEsNC44CiAgICAgICAgICAgIAljLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2wwLjMtMC40YzAuMS0wLjEsMC4yLTAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEsNC40YzAuMSwwLjEsMC4yLDAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEtNC40CiAgICAgICAgICAgIAlDMTEuMyw0LjEsMTEuNCw0LjEsMTEuNSw0LjJDMTEuNSw0LjEsMTEuNSw0LjIsMTEuNSw0LjJ6Ii8+CiAgICAgICAgICAgIDwvc3ZnPg==);\r\n  transition: 0.3s all;\r\n  margin-left: 4px;\r\n}\r\n\r\n.HeaderR11_cartWrap__3LkIl {\r\n  margin-left: 32px;\r\n}\r\n\r\n.HeaderR11_cartButton__bVJFr {\r\n  position: relative;\r\n}\r\n\r\n.HeaderR11_cartIcon__1v2rr {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0xOS45LDYuN2wxLjksMC41bC0xLjcsNi42QzIwLDE0LjUsMTkuNCwxNSwxOC43LDE1SDcuOGMtMC43LDAtMS4zLTAuNS0xLjUtMS4xbC0yLTguMUM0LjMsNS4zLDMuOSw1LDMuNCw1SDIKICAgICAgICAJVjNoMS40QzQuOCwzLDYsMy45LDYuMyw1LjNMOC4yLDEzaDEwLjFMMTkuOSw2Ljd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzkuNywyMiw4LDIyeiBNOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVM3LjQsMjAsOCwyMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzE5LjcsMjIsMTgsMjJ6IE0xOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVMxNy40LDIwLDE4LDIweiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.HeaderR11_cartIcon__1v2rr:hover {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0xOS45LDYuN2wxLjksMC41bC0xLjcsNi42QzIwLDE0LjUsMTkuNCwxNSwxOC43LDE1SDcuOGMtMC43LDAtMS4zLTAuNS0xLjUtMS4xbC0yLTguMUM0LjMsNS4zLDMuOSw1LDMuNCw1SDIKICAgICAgICAJVjNoMS40QzQuOCwzLDYsMy45LDYuMyw1LjNMOC4yLDEzaDEwLjFMMTkuOSw2Ljd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzkuNywyMiw4LDIyeiBNOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVM3LjQsMjAsOCwyMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzE5LjcsMjIsMTgsMjJ6IE0xOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVMxNy40LDIwLDE4LDIweiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.HeaderR11_messagesWrap__3_VWw {\r\n  margin-left: 24px;\r\n}\r\n\r\n.HeaderR11_messagesButton__1Lg-v {\r\n  position: relative;\r\n}\r\n\r\n.HeaderR11_messagesIcon__2VOma {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik05LjgsMjIuMWMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjJjLTAuNCwwLTAuNy0wLjQtMC43LTAuOGwtMC4xLTIuNmMwLTAuNS0wLjQtMC45LTAuOS0wLjkKICAgICAgICAJYy0zLDAtNS41LTIuNS01LjUtNS41VjguM2MwLTMuMywyLjctNiw2LTZoOGMzLjMsMCw2LDIuNyw2LDZ2My42YzAsMy4zLTIuNyw2LTYsNmgtMi4yYy0wLjMsMC0wLjYsMC4xLTAuOCwwLjNMOS44LDIyLjF6CiAgICAgICAgCSBNMTAuNCwxOC4zbDEuMS0xLjNjMC42LTAuNywxLjQtMSwyLjMtMUgxNmMyLjIsMCw0LTEuOCw0LTRWOC4zYzAtMi4yLTEuOC00LTQtNEg4Yy0yLjIsMC00LDEuOC00LDR2NC4xYzAsMS45LDEuNiwzLjUsMy41LDMuNQogICAgICAgIAlDOC45LDE1LjksMTAuMSwxNi45LDEwLjQsMTguM3oiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.HeaderR11_messagesIcon__2VOma:hover {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik05LjgsMjIuMWMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjJjLTAuNCwwLTAuNy0wLjQtMC43LTAuOGwtMC4xLTIuNmMwLTAuNS0wLjQtMC45LTAuOS0wLjkKICAgICAgICAJYy0zLDAtNS41LTIuNS01LjUtNS41VjguM2MwLTMuMywyLjctNiw2LTZoOGMzLjMsMCw2LDIuNyw2LDZ2My42YzAsMy4zLTIuNyw2LTYsNmgtMi4yYy0wLjMsMC0wLjYsMC4xLTAuOCwwLjNMOS44LDIyLjF6CiAgICAgICAgCSBNMTAuNCwxOC4zbDEuMS0xLjNjMC42LTAuNywxLjQtMSwyLjMtMUgxNmMyLjIsMCw0LTEuOCw0LTRWOC4zYzAtMi4yLTEuOC00LTQtNEg4Yy0yLjIsMC00LDEuOC00LDR2NC4xYzAsMS45LDEuNiwzLjUsMy41LDMuNQogICAgICAgIAlDOC45LDE1LjksMTAuMSwxNi45LDEwLjQsMTguM3oiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.HeaderR11_accountWrap__2KJnu {\r\n  margin-left: 24px;\r\n}\r\n\r\n.HeaderR11_buttonDropDownDefault__26qbX {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.HeaderR11_buttonDropDownText__2WAp4 {\r\n  cursor: pointer;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.HeaderR11_buttonDropDownFlex__3oObb {\r\n  display: flex;\r\n  cursor: pointer;\r\n  width: auto;\r\n  align-items: center;\r\n}\r\n\r\n.HeaderR11_dropDownIcon__2CRFk {\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICAgICAJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTExLjUsNC4ybDAuMywwLjRjMC4xLDAuMSwwLjEsMC4yLDAsMC4zTDcuMSw5LjhjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMGMwLDAsMCwwLDAsMEwyLjEsNC44CiAgICAgICAgICAgIAljLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2wwLjMtMC40YzAuMS0wLjEsMC4yLTAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEsNC40YzAuMSwwLjEsMC4yLDAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEtNC40CiAgICAgICAgICAgIAlDMTEuMyw0LjEsMTEuNCw0LjEsMTEuNSw0LjJDMTEuNSw0LjEsMTEuNSw0LjIsMTEuNSw0LjJ6Ii8+CiAgICAgICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.HeaderR11_testAccountDiv__Aine3 {\r\n  height: 32px;\r\n}\r\n\r\n.HeaderR11_accountCardActive__3t8VB {\r\n  height: auto;\r\n  max-height: 2000px;\r\n  margin: 16px 0px 0px -46px;\r\n  padding: 0px 0px 46px 46px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  transition: all 0.6s ease, margin-top 0.8s;\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 9999;\r\n  transform: translateZ(0);\r\n  overflow: hidden;\r\n  opacity: 1;\r\n}\r\n\r\n.HeaderR11_accountCardDisable__j3lWM {\r\n  opacity: 0;\r\n  height: auto;\r\n  max-height: 0px;\r\n  margin: 0px 0px 0px -16px;\r\n  padding: 0px 0px 46px 16px;\r\n  overflow: hidden;\r\n  width: auto;\r\n  transition: all 0.3s ease, margin-top 0.5s;\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 9999;\r\n}\r\n\r\n.HeaderR11_accountCard__3evNf {\r\n  z-index: 4;\r\n  box-shadow: 0 12px 9px -5px rgb(0 0 0 / 12%),\r\n    0 10px 32px 0 rgb(0 29 124 / 12%);\r\n  position: relative;\r\n  background: #ffffff;\r\n  transition: 0.3s box-shadow, 0.3s transform;\r\n  border-radius: 6px;\r\n  right: 12px;\r\n  border: 1px solid #dddddd;\r\n  padding: 8px 16px 8px 16px !important;\r\n}\r\n\r\n.HeaderR11_organizationCard__1n2E8 {\r\n  z-index: 4;\r\n  box-shadow: 0 12px 9px -5px rgb(0 0 0 / 12%), 0 10px 32px 0 rgb(0 29 124 / 12%);\r\n  position: relative;\r\n  background: #ffffff;\r\n  transition: 0.3s box-shadow, 0.3s transform;\r\n  border-radius: 6px;\r\n  right: 12px;\r\n  border: 1px solid #dddddd;\r\n  padding: 8px 16px 8px 16px !important;\r\n  width: 200px;\r\n}\r\n\r\n.HeaderR11_menuSeparator__2d4HR {\r\n  height: 1px;\r\n  background: #dddddd;\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.HeaderR11_navIcon__1mw_8 {\r\n  height: 64px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.HeaderR11_navIcon__1mw_8:hover .HeaderR11_navIconText__3BmML {\r\n  color: #222222 !important;\r\n}\r\n\r\n.HeaderR11_navIcon__1mw_8:hover .HeaderR11_actividadIcon__3G7nr {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik05LjcsMTYuNUgzLjV2NGg2LjN2LTRIOS43eiBNOS43LDE1TDkuNywxNWMwLjgsMCwxLjUsMC43LDEuNSwxLjV2NGMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41QzIuNywyMiwyLDIxLjMsMiwyMC41bDAsMAogICAgICAgIAl2LTRDMiwxNS43LDIuNywxNSwzLjUsMTVIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik05LjcsMy41SDMuNVYxMmg2LjNDOS43LDEyLDkuNywzLjUsOS43LDMuNXogTTkuNywyTDkuNywyYzAuOCwwLDEuNSwwLjcsMS41LDEuNVYxMmMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41CiAgICAgICAgCUMyLjcsMTMuNSwyLDEyLjgsMiwxMlYzLjVDMiwyLjcsMi43LDIsMy41LDJIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0yMC41LDMuNWgtNi4zdjRoNi4zVjMuNXogTTIwLjUsMkwyMC41LDJDMjEuMywyLDIyLDIuNywyMiwzLjVsMCwwdjRDMjIsOC4zLDIxLjMsOSwyMC41LDlsMCwwaC02LjMKICAgICAgICAJYy0wLjgsMC0xLjUtMC43LTEuNS0xLjV2LTRjMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTIwLjUsMTJoLTYuM3Y4LjVoNi4zVjEyeiBNMjAuNSwxMC41YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC02LjNjLTAuOCwwLTEuNS0wLjctMS41LTEuNVYxMgogICAgICAgIAljMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPC9zdmc+);\r\n}\r\n\r\n.HeaderR11_navIcon__1mw_8:hover .HeaderR11_vacantesIcon__10_Ky {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0yMC4yLDIxLjNIMy43Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMTBjMC0wLjgsMC43LTEuNSwxLjUtMS41aDE2LjVjMC44LDAsMS41LDAuNywxLjUsMS41djkuNwogICAgICAgIAlDMjEuNywyMC41LDIxLDIxLjIsMjAuMiwyMS4zQzIwLjIsMjEuMiwyMC4yLDIxLjIsMjAuMiwyMS4zeiBNMy43LDEwdjkuN2gxNi41VjEwSDMuN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMjAsNy4xSDRjMC0wLjgsMC43LTEuNSwxLjUtMS41aDEzQzE5LjMsNS42LDIwLDYuMiwyMCw3LjF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTE4LDRINmMwLTAuOCwwLjctMS41LDEuNS0xLjVoOS4xQzE3LjQsMi41LDE4LDMuMiwxOCw0eiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.HeaderR11_navIcon__1mw_8:hover .HeaderR11_talentoIcon__3RGCB {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0yMS45LDIwLjRsLTUuNS01LjVjMS4xLTEuNCwxLjctMy4xLDEuNy00LjljMC00LjQtMy42LTgtOC04cy04LDMuNi04LDhzMy42LDgsOCw4YzEuOCwwLDMuNS0wLjYsNC45LTEuNwogICAgICAgIAlsNS41LDUuNUwyMS45LDIwLjR6IE0xMCwxNmMtMy4zLDAtNi0yLjctNi02czIuNy02LDYtNnM2LDIuNyw2LDZTMTMuMywxNiwxMCwxNnoiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.HeaderR11_flexBox__15cgT {\r\n  height: 64px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.HeaderR11_textHighEmphasis__3U6Pl {\r\n  color: #222222;\r\n}\r\n\r\n.HeaderR11_textSubHeading__HuO7d {\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  font-weight: 600 !important; \r\n}\r\n\r\n.HeaderR11_textNoEmphasis__D4xpd {\r\n  color: #777777;\r\n}\r\n\r\n.HeaderR11_textNoEmphasis__D4xpd:hover {\r\n  color: #222222;\r\n}\r\n\r\n.HeaderR11_textMicro__PpCD9 {\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n\r\n.HeaderR11_textStandard__1muE_ {\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n}\r\n\r\n.HeaderR11_text__2bp7V {\r\n  margin: 0;\r\n  font-style: normal;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n}\r\n\r\n.HeaderR11_textCenter__3JHpq {\r\n  text-align: center;\r\n}\r\n\r\n.HeaderR11_textWhite__2HKeo {\r\n  color: #ffffff;\r\n}\r\n\r\n.HeaderR11_textStrong__1n9uB {\r\n  font-weight: 600;\r\n}\r\n\r\n.HeaderR11_textSmall__2R7Gx {\r\n  font-size: 13px;\r\n  line-height: 16px;\r\n}\r\n\r\n.HeaderR11_menuLogOut__1SqW_ {\r\n  text-decoration: none !important;\r\n  cursor: pointer !important;\r\n  color: #f13465;\r\n}\r\n\r\n.HeaderR11_menuBottomTiny__3Lliz {\r\n  margin-bottom: 8px !important;\r\n}\r\n\r\n.HeaderR11_textSecondary__sKDBC {\r\n  color: #f13465;\r\n}\r\n\r\n.HeaderR11_headerLabelCountShow__1XP3h {\r\n  display: block;\r\n}\r\n\r\n.HeaderR11_headerLabelCount__3ULK7 {\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 12px;\r\n  border-radius: 8px !important;\r\n  background: #f13465;\r\n  border: 1px solid #ffffff;\r\n  max-width: 16px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n\r\n.HeaderR11_navIconText__3BmML {\r\n  color: #777777;\r\n  margin-left: 4px;\r\n  transition: 0.3s all;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.HeaderR11_navIconText__3BmML:focus,\r\n.HeaderR11_navIconText__3BmML:hover {\r\n  color: #000000;\r\n}\r\n\r\n.HeaderR11_navItemLink__21e4H {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n\r\n.HeaderR11_logoContainer__2Wu7j {\r\n  margin-right: 32px;\r\n}\r\n\r\n.HeaderR11_logo__3sMp7 {\r\n  width: 120px;\r\n  height: 28px;\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICB2aWV3Qm94PSIwIDAgMzAwIDcwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDAgNzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik00OSwyMy45bDcuNi0xLjRjMCwwLDEuNS0wLjIsMy4zLTEuNGw2LTQuNmMwLDAsMC45LTEtMS4xLTEuMmwtOC45LTAuNWMwLDAtMC42LDAtMC43LDAuN2MwLDAsMC4yLDEuMS0xLDIuMgogICAgICAgIGwtNS45LDUuOUM0OC4yLDIzLjcsNDguMSwyNCw0OSwyMy45eiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTQ0LjIsMTkuMWwxLjQtNy42YzAsMCwwLjItMS41LDEuNC0zLjNsNC42LTZjMCwwLDEtMC45LDEuMiwxLjFsMC41LDguOWMwLDAsMCwwLjYtMC43LDAuN2MwLDAtMS4xLTAuMi0yLjIsMQogICAgICAgIGwtNiw1LjlDNDQuNCwxOS45LDQ0LjEsMjAsNDQuMiwxOS4xeiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTQ5LjMsMjMuMWMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjNsLTAuNywwLjdsMCwwTDQ2LDI1LjhjLTAuMywwLjMtMC40LDAuOS0wLjEsMS4yYzMuNSw0LjcsNS4yLDEwLjksNCwxNy40CiAgICAgICAgYy0xLjcsOS42LTkuNSwxNy4xLTE5LjMsMTguNEMxNiw2NC43LDMuNiw1Mi41LDUuMSwzNy45YzEtOS41LDkuNy0xOC41LDE5LjEtMTkuOWM2LjMtMC45LDEyLjIsMC43LDE2LjgsNC4xCiAgICAgICAgYzAuNCwwLjMsMC45LDAuMiwxLjMtMC4xbDMtM2wwLDBjLTAuMS0wLjEtMC4zLTAuMi0wLjQtMC4zYy01LjktNC43LTEzLjctNy0yMi4xLTUuNWMtMTEuMywyLTIwLjMsMTAuOS0yMi4zLDIyLjIKICAgICAgICBjLTMuNCwxOS4xLDEzLjEsMzUuNSwzMi4yLDMyLjJjMTEuMy0yLDIwLjMtMTEsMjIuMi0yMi4zQzU2LjQsMzYuOSw1NCwyOSw0OS4zLDIzLjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNNDEuMSwzMC43TDM4LjgsMzNjLTAuMywwLjMtMC40LDAuNy0wLjEsMS4xYzEuMiwyLDEuOCw0LjQsMS43LDdjLTAuMyw2LjMtNS4zLDExLjUtMTEuNiwxMgogICAgICAgIGMtNy45LDAuNy0xNC42LTUuOS0xMy45LTEzLjhDMTUuNiwzMywyMC43LDI4LDI3LDI3LjdjMi41LTAuMSw0LjksMC41LDcsMS43YzAuNCwwLjIsMC44LDAuMSwxLjEtMC4xbDIuMy0yLjMKICAgICAgICBjMC40LTAuNCwwLjQtMS4yLTAuMi0xLjVjLTMtMS45LTYuNS0yLjktMTAuMy0yLjdjLTkuNCwwLjMtMTYuOSw4LjEtMTcsMTcuNWMtMC4xLDkuOCw4LDE3LjgsMTcuOCwxNy44YzkuNCwwLDE3LjItNy41LDE3LjctMTYuOQogICAgICAgIGMwLjItMy44LTAuOS03LjQtMi44LTEwLjRDNDIuMywzMC4zLDQxLjYsMzAuMiw0MS4xLDMwLjd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMzQsMzcuNWwtMi45LDEuM2MtMC40LDAuMi0wLjYsMC42LTAuNiwxLjFjMC4xLDAuNCwwLjEsMC44LDAsMS4yYy0wLjMsMS4yLTEuMiwyLjEtMi40LDIuMwogICAgICAgIGMtMiwwLjMtMy44LTEuNC0zLjQtMy40YzAuMi0xLjIsMS4xLTIuMSwyLjMtMi40YzAuNC0wLjEsMC44LTAuMSwxLjIsMGMwLjQsMC4xLDAuOS0wLjEsMS0wLjVsMS4zLTIuOWMwLjItMC41LDAtMS4xLTAuNi0xLjMKICAgICAgICBjLTEuMi0wLjQtMi40LTAuNS0zLjctMC4yYy0zLjQsMC42LTYuMSwzLjQtNi41LDYuOWMtMC42LDQuOSwzLjMsOSw4LjEsOC45YzQtMC4xLDcuNC0zLjMsNy43LTcuM2MwLjEtMS4xLDAtMi4xLTAuMy0zCiAgICAgICAgQzM1LjEsMzcuNSwzNC41LDM3LjMsMzQsMzcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik04OS44LDQzLjJjMCw2LjQtNC40LDExLjUtMTEuNSwxMS41cy0xMS41LTUuMS0xMS41LTExLjVjMC02LjMsNC40LTExLjUsMTEuNC0xMS41Uzg5LjgsMzYuOCw4OS44LDQzLjJ6CiAgICAgICAgIE03Mi4zLDQzLjJjMCwzLjQsMiw2LjUsNiw2LjVzNi0zLjEsNi02LjVjMC0zLjMtMi4zLTYuNS02LTYuNUM3NC4zLDM2LjYsNzIuMywzOS44LDcyLjMsNDMuMnoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0xMDQsNTQuOGMtNi40LDAtMTEuOC0zLjgtMTEuOC0xMS43czUuMy0xMS43LDExLjgtMTEuN2MzLjEsMCw1LjYsMC45LDgsMy4zbC0zLjUsMy42CiAgICAgICAgYy0xLjMtMS4yLTIuOS0xLjctNC40LTEuN2MtMy43LDAtNi40LDIuNy02LjQsNi41YzAsNC4yLDIuOSw2LjQsNi4zLDYuNGMxLjcsMCwzLjUtMC41LDQuOC0xLjhsMy43LDMuNgogICAgICAgIEMxMTAsNTMuOSwxMDcuMyw1NC44LDEwNCw1NC44eiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTEyNS41LDU0LjhjLTYuNCwwLTExLjgtMy44LTExLjgtMTEuN3M1LjMtMTEuNywxMS44LTExLjdjMy4xLDAsNS42LDAuOSw4LDMuM2wtMy41LDMuNgogICAgICAgIGMtMS4zLTEuMi0yLjktMS43LTQuNC0xLjdjLTMuNywwLTYuNCwyLjctNi40LDYuNWMwLDQuMiwyLjksNi40LDYuMyw2LjRjMS43LDAsMy41LTAuNSw0LjgtMS44bDMuNywzLjYKICAgICAgICBDMTMxLjQsNTMuOSwxMjguNyw1NC44LDEyNS41LDU0Ljh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMTUxLjEsNDIuM2MwLTIuOS0xLjUtNS42LTQuNS01LjZzLTQuNywyLjYtNC43LDUuNnYxMS44aC01LjV2LTIyaDUuMWwwLjQsMi43YzEuMi0yLjIsMy43LTMsNS44LTMKICAgICAgICBjMi42LDAsNS4zLDEuMSw2LjYsNC4xYzItMy4xLDQuNS00LDcuNC00YzYuMywwLDkuNCwzLjgsOS40LDEwLjV2MTEuOWgtNS41di0xMmMwLTIuOS0xLjItNS40LTQuMi01LjRzLTQuOCwyLjYtNC44LDUuNXYxMS44aC01LjUKICAgICAgICBWNDIuM3oiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0xODEuMyw0My42YzAsMy40LDEuOCw1LjksNS4zLDUuOWMzLjQsMCw1LjctMi44LDUuNy02LjJWMzIuMWg1LjR2MjIuMWgtNC45bC0wLjQtM2MtMi4zLDIuMi00LjQsMy4zLTcuNSwzLjMKICAgICAgICBjLTUuMywwLTkuMi00LTkuMi0xMC44VjMyLjFoNS41TDE4MS4zLDQzLjZMMTgxLjMsNDMuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMTguOCw0Mi42YzAtMy40LTEuOC01LjktNS4zLTUuOWMtMy40LDAtNS43LDIuOC01LjcsNi4ydjExLjNoLTUuNFYzMi4xaDQuOWwwLjQsM2MyLjItMi4yLDQuNS0zLjMsNy4zLTMuMwogICAgICAgIGM1LjIsMCw5LjQsMy45LDkuNCwxMC44djExLjZoLTUuNUwyMTguOCw0Mi42TDIxOC44LDQyLjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMjUyLDU0LjJoLTUuMWwtMC40LTNjLTEuNywyLjYtNC40LDMuNS03LjEsMy41Yy02LjUsMC0xMS40LTQuMy0xMS40LTExLjVjMC03LjYsNC44LTExLjUsMTEuMy0xMS41CiAgICAgICAgYzIuMywwLDYsMS4zLDcuMywzLjVWMjIuOWg1LjV2MzEuM0gyNTJ6IE0yMzMuNSw0My4xYzAsMy44LDIuOCw2LjUsNi4zLDYuNXM2LjQtMi41LDYuNC02LjVjMC0zLjgtMy02LjQtNi40LTYuNAogICAgICAgIEMyMzYuMiwzNi43LDIzMy41LDM5LjEsMjMzLjUsNDMuMXoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yNTkuNSwyMi43YzEuNiwwLDMuMiwxLDMuMiwzLjJjMCwyLjEtMS42LDMuMi0zLjIsMy4ycy0zLjItMS4xLTMuMi0zLjJDMjU2LjMsMjMuNywyNTcuOSwyMi43LDI1OS41LDIyLjd6CiAgICAgICAgIE0yNTYuNyw1NC4yaDUuNVYzMmgtNS41VjU0LjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMjg5LjksMzIuMXYyMi4xaC01LjJsLTAuMy0zLjJjLTEuMywyLjYtNC44LDMuOS03LjMsMy45Yy02LjUsMC0xMS4zLTQtMTEuMy0xMS43YzAtNy42LDUtMTEuNSwxMS40LTExLjUKICAgICAgICBjMywwLDUuOSwxLjMsNy4xLDMuNmwwLjItM2g1LjRWMzIuMXogTTI3MS40LDQzLjFjMCw0LjIsMi45LDYuNyw2LjYsNi43YzQuMywwLDYuNS0zLjQsNi41LTYuN3MtMi4yLTYuNy02LjUtNi43CiAgICAgICAgQzI3NC4zLDM2LjQsMjcxLjQsMzguOSwyNzEuNCw0My4xeiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTMwMCw1NC4yaC01LjRWMjIuOWg1LjRWNTQuMnoiLz4KICAgIDwvc3ZnPg==);\r\n  transition: 0.3s all;\r\n}\r\n\r\n.HeaderR11_avatarCircle__2BqiA {\r\n  width: 32px;\r\n  height: 32px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n}\r\n\r\n.HeaderR11_avatarContentWrap__3xfyj {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.HeaderR11_avatarContent__22ytj {\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n}\r\n\r\n.HeaderR11_avatarContentCapital__37j3N {\r\n  color: #afb8c0;\r\n  font-size: 20px;\r\n  background: #dae1e5;\r\n  text-align: center;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n  line-height: 32px;\r\n  font-weight: 600;\r\n}\r\n\r\n.HeaderR11_avatarIcon__3lDOW {\r\n  background: url(https://i.imgur.com/I80W1Q0.png) center center / cover\r\n    no-repeat;\r\n}\r\n\r\n.HeaderR11_divtest__2LQHE {\r\n  height: 2000px;\r\n  background: #957DAD;\r\n  margin-left: 120px;\r\n  margin-right: 120px;\r\n  z-index: 9999;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/HeaderR11.module.css"],"names":[],"mappings":"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","sourcesContent":["/* .main {\r\n  margin-left: var(--spacing-small);\r\n  border-color: red;\r\n} */\r\n\r\n.headerContainer {\r\n  margin-top: 0;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 999;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n  transition: 0.3s all;\r\n  display: block;\r\n}\r\n\r\n.headerStyle {\r\n  background: #ffffff;\r\n  height: 64px;\r\n  transition: 0.3s all;\r\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%), 0 1px 6px 0 rgb(0 29 124 / 5%);\r\n}\r\n\r\n.innerHeaderContainer {\r\n  position: relative;\r\n  height: 100%;\r\n  max-width: 100%;\r\n  width: 1464px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  margin-left: auto;\r\n  padding-left: 12px;\r\n  margin-right: auto;\r\n  padding-right: 12px;\r\n}\r\n\r\n.navElementsContainer {\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n\r\n.groupContainer {\r\n  align-items: center;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n}\r\n\r\n.itemsCenter {\r\n  top: 50%;\r\n  left: 50%;\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.actividadWrap {\r\n  margin-left: 0;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n}\r\n\r\n.actividadIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik05LjcsMTYuNUgzLjV2NGg2LjN2LTRIOS43eiBNOS43LDE1TDkuNywxNWMwLjgsMCwxLjUsMC43LDEuNSwxLjV2NGMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41QzIuNywyMiwyLDIxLjMsMiwyMC41bDAsMAogICAgICAgIAl2LTRDMiwxNS43LDIuNywxNSwzLjUsMTVIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik05LjcsMy41SDMuNVYxMmg2LjNDOS43LDEyLDkuNywzLjUsOS43LDMuNXogTTkuNywyTDkuNywyYzAuOCwwLDEuNSwwLjcsMS41LDEuNVYxMmMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41CiAgICAgICAgCUMyLjcsMTMuNSwyLDEyLjgsMiwxMlYzLjVDMiwyLjcsMi43LDIsMy41LDJIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMC41LDMuNWgtNi4zdjRoNi4zVjMuNXogTTIwLjUsMkwyMC41LDJDMjEuMywyLDIyLDIuNywyMiwzLjVsMCwwdjRDMjIsOC4zLDIxLjMsOSwyMC41LDlsMCwwaC02LjMKICAgICAgICAJYy0wLjgsMC0xLjUtMC43LTEuNS0xLjV2LTRjMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTIwLjUsMTJoLTYuM3Y4LjVoNi4zVjEyeiBNMjAuNSwxMC41YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC02LjNjLTAuOCwwLTEuNS0wLjctMS41LTEuNVYxMgogICAgICAgIAljMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPC9zdmc+);\r\n}\r\n\r\n.vacantesWrap {\r\n  margin-left: 12px;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n}\r\n\r\n.vacantesIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMC4yLDIxLjNIMy43Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMTBjMC0wLjgsMC43LTEuNSwxLjUtMS41aDE2LjVjMC44LDAsMS41LDAuNywxLjUsMS41djkuNwogICAgICAgIAlDMjEuNywyMC41LDIxLDIxLjIsMjAuMiwyMS4zQzIwLjIsMjEuMiwyMC4yLDIxLjIsMjAuMiwyMS4zeiBNMy43LDEwdjkuN2gxNi41VjEwSDMuN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMjAsNy4xSDRjMC0wLjgsMC43LTEuNSwxLjUtMS41aDEzQzE5LjMsNS42LDIwLDYuMiwyMCw3LjF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTE4LDRINmMwLTAuOCwwLjctMS41LDEuNS0xLjVoOS4xQzE3LjQsMi41LDE4LDMuMiwxOCw0eiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.talentoWrap {\r\n  margin-left: 12px;\r\n  margin-right: 0;\r\n  display: inline-block;\r\n}\r\n\r\n.talentoIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMS45LDIwLjRsLTUuNS01LjVjMS4xLTEuNCwxLjctMy4xLDEuNy00LjljMC00LjQtMy42LTgtOC04cy04LDMuNi04LDhzMy42LDgsOCw4YzEuOCwwLDMuNS0wLjYsNC45LTEuNwogICAgICAgIAlsNS41LDUuNUwyMS45LDIwLjR6IE0xMCwxNmMtMy4zLDAtNi0yLjctNi02czIuNy02LDYtNnM2LDIuNyw2LDZTMTMuMywxNiwxMCwxNnoiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.icon {\r\n  width: 24px;\r\n  height: 24px;\r\n  transition: 0.3s all;\r\n}\r\n\r\n.iconSmall {\r\n  width: 14px;\r\n  height: 14px;\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICAgICAJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTExLjUsNC4ybDAuMywwLjRjMC4xLDAuMSwwLjEsMC4yLDAsMC4zTDcuMSw5LjhjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMGMwLDAsMCwwLDAsMEwyLjEsNC44CiAgICAgICAgICAgIAljLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2wwLjMtMC40YzAuMS0wLjEsMC4yLTAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEsNC40YzAuMSwwLjEsMC4yLDAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEtNC40CiAgICAgICAgICAgIAlDMTEuMyw0LjEsMTEuNCw0LjEsMTEuNSw0LjJDMTEuNSw0LjEsMTEuNSw0LjIsMTEuNSw0LjJ6Ii8+CiAgICAgICAgICAgIDwvc3ZnPg==);\r\n  transition: 0.3s all;\r\n  margin-left: 4px;\r\n}\r\n\r\n.cartWrap {\r\n  margin-left: 32px;\r\n}\r\n\r\n.cartButton {\r\n  position: relative;\r\n}\r\n\r\n.cartIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0xOS45LDYuN2wxLjksMC41bC0xLjcsNi42QzIwLDE0LjUsMTkuNCwxNSwxOC43LDE1SDcuOGMtMC43LDAtMS4zLTAuNS0xLjUtMS4xbC0yLTguMUM0LjMsNS4zLDMuOSw1LDMuNCw1SDIKICAgICAgICAJVjNoMS40QzQuOCwzLDYsMy45LDYuMyw1LjNMOC4yLDEzaDEwLjFMMTkuOSw2Ljd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzkuNywyMiw4LDIyeiBNOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVM3LjQsMjAsOCwyMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzE5LjcsMjIsMTgsMjJ6IE0xOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVMxNy40LDIwLDE4LDIweiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.cartIcon:hover {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0xOS45LDYuN2wxLjksMC41bC0xLjcsNi42QzIwLDE0LjUsMTkuNCwxNSwxOC43LDE1SDcuOGMtMC43LDAtMS4zLTAuNS0xLjUtMS4xbC0yLTguMUM0LjMsNS4zLDMuOSw1LDMuNCw1SDIKICAgICAgICAJVjNoMS40QzQuOCwzLDYsMy45LDYuMyw1LjNMOC4yLDEzaDEwLjFMMTkuOSw2Ljd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzkuNywyMiw4LDIyeiBNOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVM3LjQsMjAsOCwyMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMTgsMjJjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzE5LjcsMjIsMTgsMjJ6IE0xOCwyMGMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMXMtMSwwLjQtMSwxCiAgICAgICAgCVMxNy40LDIwLDE4LDIweiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.messagesWrap {\r\n  margin-left: 24px;\r\n}\r\n\r\n.messagesButton {\r\n  position: relative;\r\n}\r\n\r\n.messagesIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik05LjgsMjIuMWMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjJjLTAuNCwwLTAuNy0wLjQtMC43LTAuOGwtMC4xLTIuNmMwLTAuNS0wLjQtMC45LTAuOS0wLjkKICAgICAgICAJYy0zLDAtNS41LTIuNS01LjUtNS41VjguM2MwLTMuMywyLjctNiw2LTZoOGMzLjMsMCw2LDIuNyw2LDZ2My42YzAsMy4zLTIuNyw2LTYsNmgtMi4yYy0wLjMsMC0wLjYsMC4xLTAuOCwwLjNMOS44LDIyLjF6CiAgICAgICAgCSBNMTAuNCwxOC4zbDEuMS0xLjNjMC42LTAuNywxLjQtMSwyLjMtMUgxNmMyLjIsMCw0LTEuOCw0LTRWOC4zYzAtMi4yLTEuOC00LTQtNEg4Yy0yLjIsMC00LDEuOC00LDR2NC4xYzAsMS45LDEuNiwzLjUsMy41LDMuNQogICAgICAgIAlDOC45LDE1LjksMTAuMSwxNi45LDEwLjQsMTguM3oiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.messagesIcon:hover {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik05LjgsMjIuMWMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjJjLTAuNCwwLTAuNy0wLjQtMC43LTAuOGwtMC4xLTIuNmMwLTAuNS0wLjQtMC45LTAuOS0wLjkKICAgICAgICAJYy0zLDAtNS41LTIuNS01LjUtNS41VjguM2MwLTMuMywyLjctNiw2LTZoOGMzLjMsMCw2LDIuNyw2LDZ2My42YzAsMy4zLTIuNyw2LTYsNmgtMi4yYy0wLjMsMC0wLjYsMC4xLTAuOCwwLjNMOS44LDIyLjF6CiAgICAgICAgCSBNMTAuNCwxOC4zbDEuMS0xLjNjMC42LTAuNywxLjQtMSwyLjMtMUgxNmMyLjIsMCw0LTEuOCw0LTRWOC4zYzAtMi4yLTEuOC00LTQtNEg4Yy0yLjIsMC00LDEuOC00LDR2NC4xYzAsMS45LDEuNiwzLjUsMy41LDMuNQogICAgICAgIAlDOC45LDE1LjksMTAuMSwxNi45LDEwLjQsMTguM3oiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.accountWrap {\r\n  margin-left: 24px;\r\n}\r\n\r\n.buttonDropDownDefault {\r\n  width: fit-content;\r\n}\r\n\r\n.buttonDropDownText {\r\n  cursor: pointer;\r\n  width: fit-content;\r\n}\r\n\r\n.buttonDropDownFlex {\r\n  display: flex;\r\n  cursor: pointer;\r\n  width: auto;\r\n  align-items: center;\r\n}\r\n\r\n.dropDownIcon {\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICAgICAJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTExLjUsNC4ybDAuMywwLjRjMC4xLDAuMSwwLjEsMC4yLDAsMC4zTDcuMSw5LjhjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMGMwLDAsMCwwLDAsMEwyLjEsNC44CiAgICAgICAgICAgIAljLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2wwLjMtMC40YzAuMS0wLjEsMC4yLTAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEsNC40YzAuMSwwLjEsMC4yLDAuMSwwLjMsMGMwLDAsMCwwLDAsMGw0LjEtNC40CiAgICAgICAgICAgIAlDMTEuMyw0LjEsMTEuNCw0LjEsMTEuNSw0LjJDMTEuNSw0LjEsMTEuNSw0LjIsMTEuNSw0LjJ6Ii8+CiAgICAgICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.testAccountDiv {\r\n  height: 32px;\r\n}\r\n\r\n.accountCardActive {\r\n  height: auto;\r\n  max-height: 2000px;\r\n  margin: 16px 0px 0px -46px;\r\n  padding: 0px 0px 46px 46px;\r\n  width: fit-content;\r\n  transition: all 0.6s ease, margin-top 0.8s;\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 9999;\r\n  transform: translateZ(0);\r\n  overflow: hidden;\r\n  opacity: 1;\r\n}\r\n\r\n.accountCardDisable {\r\n  opacity: 0;\r\n  height: auto;\r\n  max-height: 0px;\r\n  margin: 0px 0px 0px -16px;\r\n  padding: 0px 0px 46px 16px;\r\n  overflow: hidden;\r\n  width: auto;\r\n  transition: all 0.3s ease, margin-top 0.5s;\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 9999;\r\n}\r\n\r\n.accountCard {\r\n  z-index: 4;\r\n  box-shadow: 0 12px 9px -5px rgb(0 0 0 / 12%),\r\n    0 10px 32px 0 rgb(0 29 124 / 12%);\r\n  position: relative;\r\n  background: #ffffff;\r\n  transition: 0.3s box-shadow, 0.3s transform;\r\n  border-radius: 6px;\r\n  right: 12px;\r\n  border: 1px solid #dddddd;\r\n  padding: 8px 16px 8px 16px !important;\r\n}\r\n\r\n.organizationCard {\r\n  z-index: 4;\r\n  box-shadow: 0 12px 9px -5px rgb(0 0 0 / 12%), 0 10px 32px 0 rgb(0 29 124 / 12%);\r\n  position: relative;\r\n  background: #ffffff;\r\n  transition: 0.3s box-shadow, 0.3s transform;\r\n  border-radius: 6px;\r\n  right: 12px;\r\n  border: 1px solid #dddddd;\r\n  padding: 8px 16px 8px 16px !important;\r\n  width: 200px;\r\n}\r\n\r\n.menuSeparator {\r\n  height: 1px;\r\n  background: #dddddd;\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.navIcon {\r\n  height: 64px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.navIcon:hover .navIconText {\r\n  color: #222222 !important;\r\n}\r\n\r\n.navIcon:hover .actividadIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik05LjcsMTYuNUgzLjV2NGg2LjN2LTRIOS43eiBNOS43LDE1TDkuNywxNWMwLjgsMCwxLjUsMC43LDEuNSwxLjV2NGMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41QzIuNywyMiwyLDIxLjMsMiwyMC41bDAsMAogICAgICAgIAl2LTRDMiwxNS43LDIuNywxNSwzLjUsMTVIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik05LjcsMy41SDMuNVYxMmg2LjNDOS43LDEyLDkuNywzLjUsOS43LDMuNXogTTkuNywyTDkuNywyYzAuOCwwLDEuNSwwLjcsMS41LDEuNVYxMmMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy41CiAgICAgICAgCUMyLjcsMTMuNSwyLDEyLjgsMiwxMlYzLjVDMiwyLjcsMi43LDIsMy41LDJIOS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0yMC41LDMuNWgtNi4zdjRoNi4zVjMuNXogTTIwLjUsMkwyMC41LDJDMjEuMywyLDIyLDIuNywyMiwzLjVsMCwwdjRDMjIsOC4zLDIxLjMsOSwyMC41LDlsMCwwaC02LjMKICAgICAgICAJYy0wLjgsMC0xLjUtMC43LTEuNS0xLjV2LTRjMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTIwLjUsMTJoLTYuM3Y4LjVoNi4zVjEyeiBNMjAuNSwxMC41YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC02LjNjLTAuOCwwLTEuNS0wLjctMS41LTEuNVYxMgogICAgICAgIAljMC0wLjgsMC43LTEuNSwxLjUtMS41SDIwLjV6Ii8+CiAgICAgICAgPC9zdmc+);\r\n}\r\n\r\n.navIcon:hover .vacantesIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0yMC4yLDIxLjNIMy43Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMTBjMC0wLjgsMC43LTEuNSwxLjUtMS41aDE2LjVjMC44LDAsMS41LDAuNywxLjUsMS41djkuNwogICAgICAgIAlDMjEuNywyMC41LDIxLDIxLjIsMjAuMiwyMS4zQzIwLjIsMjEuMiwyMC4yLDIxLjIsMjAuMiwyMS4zeiBNMy43LDEwdjkuN2gxNi41VjEwSDMuN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMjAsNy4xSDRjMC0wLjgsMC43LTEuNSwxLjUtMS41aDEzQzE5LjMsNS42LDIwLDYuMiwyMCw3LjF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIyMjIyMiIgZD0iTTE4LDRINmMwLTAuOCwwLjctMS41LDEuNS0xLjVoOS4xQzE3LjQsMi41LDE4LDMuMiwxOCw0eiIvPgogICAgICAgIDwvc3ZnPg==);\r\n}\r\n\r\n.navIcon:hover .talentoIcon {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgIAkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjIyMjIiIGQ9Ik0yMS45LDIwLjRsLTUuNS01LjVjMS4xLTEuNCwxLjctMy4xLDEuNy00LjljMC00LjQtMy42LTgtOC04cy04LDMuNi04LDhzMy42LDgsOCw4YzEuOCwwLDMuNS0wLjYsNC45LTEuNwogICAgICAgIAlsNS41LDUuNUwyMS45LDIwLjR6IE0xMCwxNmMtMy4zLDAtNi0yLjctNi02czIuNy02LDYtNnM2LDIuNyw2LDZTMTMuMywxNiwxMCwxNnoiLz4KICAgICAgICA8L3N2Zz4=);\r\n}\r\n\r\n.flexBox {\r\n  height: 64px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.textHighEmphasis {\r\n  color: #222222;\r\n}\r\n\r\n.textSubHeading {\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  font-weight: 600 !important; \r\n}\r\n\r\n.textNoEmphasis {\r\n  color: #777777;\r\n}\r\n\r\n.textNoEmphasis:hover {\r\n  color: #222222;\r\n}\r\n\r\n.textMicro {\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n\r\n.textStandard {\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n}\r\n\r\n.text {\r\n  margin: 0;\r\n  font-style: normal;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n}\r\n\r\n.textCenter {\r\n  text-align: center;\r\n}\r\n\r\n.textWhite {\r\n  color: #ffffff;\r\n}\r\n\r\n.textStrong {\r\n  font-weight: 600;\r\n}\r\n\r\n.textSmall {\r\n  font-size: 13px;\r\n  line-height: 16px;\r\n}\r\n\r\n.menuLogOut {\r\n  text-decoration: none !important;\r\n  cursor: pointer !important;\r\n  color: #f13465;\r\n}\r\n\r\n.menuBottomTiny {\r\n  margin-bottom: 8px !important;\r\n}\r\n\r\n.textSecondary {\r\n  color: #f13465;\r\n}\r\n\r\n.headerLabelCountShow {\r\n  display: block;\r\n}\r\n\r\n.headerLabelCount {\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 12px;\r\n  border-radius: 8px !important;\r\n  background: #f13465;\r\n  border: 1px solid #ffffff;\r\n  max-width: 16px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n\r\n.navIconText {\r\n  color: #777777;\r\n  margin-left: 4px;\r\n  transition: 0.3s all;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navIconText:focus,\r\n.navIconText:hover {\r\n  color: #000000;\r\n}\r\n\r\n.navItemLink {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n\r\n.logoContainer {\r\n  margin-right: 32px;\r\n}\r\n\r\n.logo {\r\n  width: 120px;\r\n  height: 28px;\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICB2aWV3Qm94PSIwIDAgMzAwIDcwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDAgNzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik00OSwyMy45bDcuNi0xLjRjMCwwLDEuNS0wLjIsMy4zLTEuNGw2LTQuNmMwLDAsMC45LTEtMS4xLTEuMmwtOC45LTAuNWMwLDAtMC42LDAtMC43LDAuN2MwLDAsMC4yLDEuMS0xLDIuMgogICAgICAgIGwtNS45LDUuOUM0OC4yLDIzLjcsNDguMSwyNCw0OSwyMy45eiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTQ0LjIsMTkuMWwxLjQtNy42YzAsMCwwLjItMS41LDEuNC0zLjNsNC42LTZjMCwwLDEtMC45LDEuMiwxLjFsMC41LDguOWMwLDAsMCwwLjYtMC43LDAuN2MwLDAtMS4xLTAuMi0yLjIsMQogICAgICAgIGwtNiw1LjlDNDQuNCwxOS45LDQ0LjEsMjAsNDQuMiwxOS4xeiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTQ5LjMsMjMuMWMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjNsLTAuNywwLjdsMCwwTDQ2LDI1LjhjLTAuMywwLjMtMC40LDAuOS0wLjEsMS4yYzMuNSw0LjcsNS4yLDEwLjksNCwxNy40CiAgICAgICAgYy0xLjcsOS42LTkuNSwxNy4xLTE5LjMsMTguNEMxNiw2NC43LDMuNiw1Mi41LDUuMSwzNy45YzEtOS41LDkuNy0xOC41LDE5LjEtMTkuOWM2LjMtMC45LDEyLjIsMC43LDE2LjgsNC4xCiAgICAgICAgYzAuNCwwLjMsMC45LDAuMiwxLjMtMC4xbDMtM2wwLDBjLTAuMS0wLjEtMC4zLTAuMi0wLjQtMC4zYy01LjktNC43LTEzLjctNy0yMi4xLTUuNWMtMTEuMywyLTIwLjMsMTAuOS0yMi4zLDIyLjIKICAgICAgICBjLTMuNCwxOS4xLDEzLjEsMzUuNSwzMi4yLDMyLjJjMTEuMy0yLDIwLjMtMTEsMjIuMi0yMi4zQzU2LjQsMzYuOSw1NCwyOSw0OS4zLDIzLjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNNDEuMSwzMC43TDM4LjgsMzNjLTAuMywwLjMtMC40LDAuNy0wLjEsMS4xYzEuMiwyLDEuOCw0LjQsMS43LDdjLTAuMyw2LjMtNS4zLDExLjUtMTEuNiwxMgogICAgICAgIGMtNy45LDAuNy0xNC42LTUuOS0xMy45LTEzLjhDMTUuNiwzMywyMC43LDI4LDI3LDI3LjdjMi41LTAuMSw0LjksMC41LDcsMS43YzAuNCwwLjIsMC44LDAuMSwxLjEtMC4xbDIuMy0yLjMKICAgICAgICBjMC40LTAuNCwwLjQtMS4yLTAuMi0xLjVjLTMtMS45LTYuNS0yLjktMTAuMy0yLjdjLTkuNCwwLjMtMTYuOSw4LjEtMTcsMTcuNWMtMC4xLDkuOCw4LDE3LjgsMTcuOCwxNy44YzkuNCwwLDE3LjItNy41LDE3LjctMTYuOQogICAgICAgIGMwLjItMy44LTAuOS03LjQtMi44LTEwLjRDNDIuMywzMC4zLDQxLjYsMzAuMiw0MS4xLDMwLjd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMzQsMzcuNWwtMi45LDEuM2MtMC40LDAuMi0wLjYsMC42LTAuNiwxLjFjMC4xLDAuNCwwLjEsMC44LDAsMS4yYy0wLjMsMS4yLTEuMiwyLjEtMi40LDIuMwogICAgICAgIGMtMiwwLjMtMy44LTEuNC0zLjQtMy40YzAuMi0xLjIsMS4xLTIuMSwyLjMtMi40YzAuNC0wLjEsMC44LTAuMSwxLjIsMGMwLjQsMC4xLDAuOS0wLjEsMS0wLjVsMS4zLTIuOWMwLjItMC41LDAtMS4xLTAuNi0xLjMKICAgICAgICBjLTEuMi0wLjQtMi40LTAuNS0zLjctMC4yYy0zLjQsMC42LTYuMSwzLjQtNi41LDYuOWMtMC42LDQuOSwzLjMsOSw4LjEsOC45YzQtMC4xLDcuNC0zLjMsNy43LTcuM2MwLjEtMS4xLDAtMi4xLTAuMy0zCiAgICAgICAgQzM1LjEsMzcuNSwzNC41LDM3LjMsMzQsMzcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik04OS44LDQzLjJjMCw2LjQtNC40LDExLjUtMTEuNSwxMS41cy0xMS41LTUuMS0xMS41LTExLjVjMC02LjMsNC40LTExLjUsMTEuNC0xMS41Uzg5LjgsMzYuOCw4OS44LDQzLjJ6CiAgICAgICAgIE03Mi4zLDQzLjJjMCwzLjQsMiw2LjUsNiw2LjVzNi0zLjEsNi02LjVjMC0zLjMtMi4zLTYuNS02LTYuNUM3NC4zLDM2LjYsNzIuMywzOS44LDcyLjMsNDMuMnoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0xMDQsNTQuOGMtNi40LDAtMTEuOC0zLjgtMTEuOC0xMS43czUuMy0xMS43LDExLjgtMTEuN2MzLjEsMCw1LjYsMC45LDgsMy4zbC0zLjUsMy42CiAgICAgICAgYy0xLjMtMS4yLTIuOS0xLjctNC40LTEuN2MtMy43LDAtNi40LDIuNy02LjQsNi41YzAsNC4yLDIuOSw2LjQsNi4zLDYuNGMxLjcsMCwzLjUtMC41LDQuOC0xLjhsMy43LDMuNgogICAgICAgIEMxMTAsNTMuOSwxMDcuMyw1NC44LDEwNCw1NC44eiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTEyNS41LDU0LjhjLTYuNCwwLTExLjgtMy44LTExLjgtMTEuN3M1LjMtMTEuNywxMS44LTExLjdjMy4xLDAsNS42LDAuOSw4LDMuM2wtMy41LDMuNgogICAgICAgIGMtMS4zLTEuMi0yLjktMS43LTQuNC0xLjdjLTMuNywwLTYuNCwyLjctNi40LDYuNWMwLDQuMiwyLjksNi40LDYuMyw2LjRjMS43LDAsMy41LTAuNSw0LjgtMS44bDMuNywzLjYKICAgICAgICBDMTMxLjQsNTMuOSwxMjguNyw1NC44LDEyNS41LDU0Ljh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMTUxLjEsNDIuM2MwLTIuOS0xLjUtNS42LTQuNS01LjZzLTQuNywyLjYtNC43LDUuNnYxMS44aC01LjV2LTIyaDUuMWwwLjQsMi43YzEuMi0yLjIsMy43LTMsNS44LTMKICAgICAgICBjMi42LDAsNS4zLDEuMSw2LjYsNC4xYzItMy4xLDQuNS00LDcuNC00YzYuMywwLDkuNCwzLjgsOS40LDEwLjV2MTEuOWgtNS41di0xMmMwLTIuOS0xLjItNS40LTQuMi01LjRzLTQuOCwyLjYtNC44LDUuNXYxMS44aC01LjUKICAgICAgICBWNDIuM3oiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0xODEuMyw0My42YzAsMy40LDEuOCw1LjksNS4zLDUuOWMzLjQsMCw1LjctMi44LDUuNy02LjJWMzIuMWg1LjR2MjIuMWgtNC45bC0wLjQtM2MtMi4zLDIuMi00LjQsMy4zLTcuNSwzLjMKICAgICAgICBjLTUuMywwLTkuMi00LTkuMi0xMC44VjMyLjFoNS41TDE4MS4zLDQzLjZMMTgxLjMsNDMuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yMTguOCw0Mi42YzAtMy40LTEuOC01LjktNS4zLTUuOWMtMy40LDAtNS43LDIuOC01LjcsNi4ydjExLjNoLTUuNFYzMi4xaDQuOWwwLjQsM2MyLjItMi4yLDQuNS0zLjMsNy4zLTMuMwogICAgICAgIGM1LjIsMCw5LjQsMy45LDkuNCwxMC44djExLjZoLTUuNUwyMTguOCw0Mi42TDIxOC44LDQyLjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMjUyLDU0LjJoLTUuMWwtMC40LTNjLTEuNywyLjYtNC40LDMuNS03LjEsMy41Yy02LjUsMC0xMS40LTQuMy0xMS40LTExLjVjMC03LjYsNC44LTExLjUsMTEuMy0xMS41CiAgICAgICAgYzIuMywwLDYsMS4zLDcuMywzLjVWMjIuOWg1LjV2MzEuM0gyNTJ6IE0yMzMuNSw0My4xYzAsMy44LDIuOCw2LjUsNi4zLDYuNXM2LjQtMi41LDYuNC02LjVjMC0zLjgtMy02LjQtNi40LTYuNAogICAgICAgIEMyMzYuMiwzNi43LDIzMy41LDM5LjEsMjMzLjUsNDMuMXoiLz4KICAgIDxwYXRoIGZpbGw9IiM3Nzc3NzciIGQ9Ik0yNTkuNSwyMi43YzEuNiwwLDMuMiwxLDMuMiwzLjJjMCwyLjEtMS42LDMuMi0zLjIsMy4ycy0zLjItMS4xLTMuMi0zLjJDMjU2LjMsMjMuNywyNTcuOSwyMi43LDI1OS41LDIyLjd6CiAgICAgICAgIE0yNTYuNyw1NC4yaDUuNVYzMmgtNS41VjU0LjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzc3Nzc3IiBkPSJNMjg5LjksMzIuMXYyMi4xaC01LjJsLTAuMy0zLjJjLTEuMywyLjYtNC44LDMuOS03LjMsMy45Yy02LjUsMC0xMS4zLTQtMTEuMy0xMS43YzAtNy42LDUtMTEuNSwxMS40LTExLjUKICAgICAgICBjMywwLDUuOSwxLjMsNy4xLDMuNmwwLjItM2g1LjRWMzIuMXogTTI3MS40LDQzLjFjMCw0LjIsMi45LDYuNyw2LjYsNi43YzQuMywwLDYuNS0zLjQsNi41LTYuN3MtMi4yLTYuNy02LjUtNi43CiAgICAgICAgQzI3NC4zLDM2LjQsMjcxLjQsMzguOSwyNzEuNCw0My4xeiIvPgogICAgPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTMwMCw1NC4yaC01LjRWMjIuOWg1LjRWNTQuMnoiLz4KICAgIDwvc3ZnPg==);\r\n  transition: 0.3s all;\r\n}\r\n\r\n.avatarCircle {\r\n  width: 32px;\r\n  height: 32px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n}\r\n\r\n.avatarContentWrap {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.avatarContent {\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n}\r\n\r\n.avatarContentCapital {\r\n  color: #afb8c0;\r\n  font-size: 20px;\r\n  background: #dae1e5;\r\n  text-align: center;\r\n  font-family: \"HK Grotesk\", sans-serif;\r\n  line-height: 32px;\r\n  font-weight: 600;\r\n}\r\n\r\n.avatarIcon {\r\n  background: url(https://i.imgur.com/I80W1Q0.png) center center / cover\r\n    no-repeat;\r\n}\r\n\r\n.divtest {\r\n  height: 2000px;\r\n  background: #957DAD;\r\n  margin-left: 120px;\r\n  margin-right: 120px;\r\n  z-index: 9999;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"headerContainer": "HeaderR11_headerContainer__2hNr-",
	"headerStyle": "HeaderR11_headerStyle__1Lh-F",
	"innerHeaderContainer": "HeaderR11_innerHeaderContainer__2c8kk",
	"navElementsContainer": "HeaderR11_navElementsContainer__2-xFW",
	"groupContainer": "HeaderR11_groupContainer__1E9S5",
	"itemsCenter": "HeaderR11_itemsCenter__3qptd",
	"actividadWrap": "HeaderR11_actividadWrap__1PW1E",
	"actividadIcon": "HeaderR11_actividadIcon__3G7nr",
	"vacantesWrap": "HeaderR11_vacantesWrap__LddBd",
	"vacantesIcon": "HeaderR11_vacantesIcon__10_Ky",
	"talentoWrap": "HeaderR11_talentoWrap__1kfkr",
	"talentoIcon": "HeaderR11_talentoIcon__3RGCB",
	"icon": "HeaderR11_icon__MmkCb",
	"iconSmall": "HeaderR11_iconSmall__3TDIp",
	"cartWrap": "HeaderR11_cartWrap__3LkIl",
	"cartButton": "HeaderR11_cartButton__bVJFr",
	"cartIcon": "HeaderR11_cartIcon__1v2rr",
	"messagesWrap": "HeaderR11_messagesWrap__3_VWw",
	"messagesButton": "HeaderR11_messagesButton__1Lg-v",
	"messagesIcon": "HeaderR11_messagesIcon__2VOma",
	"accountWrap": "HeaderR11_accountWrap__2KJnu",
	"buttonDropDownDefault": "HeaderR11_buttonDropDownDefault__26qbX",
	"buttonDropDownText": "HeaderR11_buttonDropDownText__2WAp4",
	"buttonDropDownFlex": "HeaderR11_buttonDropDownFlex__3oObb",
	"dropDownIcon": "HeaderR11_dropDownIcon__2CRFk",
	"testAccountDiv": "HeaderR11_testAccountDiv__Aine3",
	"accountCardActive": "HeaderR11_accountCardActive__3t8VB",
	"accountCardDisable": "HeaderR11_accountCardDisable__j3lWM",
	"accountCard": "HeaderR11_accountCard__3evNf",
	"organizationCard": "HeaderR11_organizationCard__1n2E8",
	"menuSeparator": "HeaderR11_menuSeparator__2d4HR",
	"navIcon": "HeaderR11_navIcon__1mw_8",
	"navIconText": "HeaderR11_navIconText__3BmML",
	"flexBox": "HeaderR11_flexBox__15cgT",
	"textHighEmphasis": "HeaderR11_textHighEmphasis__3U6Pl",
	"textSubHeading": "HeaderR11_textSubHeading__HuO7d",
	"textNoEmphasis": "HeaderR11_textNoEmphasis__D4xpd",
	"textMicro": "HeaderR11_textMicro__PpCD9",
	"textStandard": "HeaderR11_textStandard__1muE_",
	"text": "HeaderR11_text__2bp7V",
	"textCenter": "HeaderR11_textCenter__3JHpq",
	"textWhite": "HeaderR11_textWhite__2HKeo",
	"textStrong": "HeaderR11_textStrong__1n9uB",
	"textSmall": "HeaderR11_textSmall__2R7Gx",
	"menuLogOut": "HeaderR11_menuLogOut__1SqW_",
	"menuBottomTiny": "HeaderR11_menuBottomTiny__3Lliz",
	"textSecondary": "HeaderR11_textSecondary__sKDBC",
	"headerLabelCountShow": "HeaderR11_headerLabelCountShow__1XP3h",
	"headerLabelCount": "HeaderR11_headerLabelCount__3ULK7",
	"navItemLink": "HeaderR11_navItemLink__21e4H",
	"logoContainer": "HeaderR11_logoContainer__2Wu7j",
	"logo": "HeaderR11_logo__3sMp7",
	"avatarCircle": "HeaderR11_avatarCircle__2BqiA",
	"avatarContentWrap": "HeaderR11_avatarContentWrap__3xfyj",
	"avatarContent": "HeaderR11_avatarContent__22ytj",
	"avatarContentCapital": "HeaderR11_avatarContentCapital__37j3N",
	"avatarIcon": "HeaderR11_avatarIcon__3lDOW",
	"divtest": "HeaderR11_divtest__2LQHE"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./pages/headerR11.js":
/*!****************************!*\
  !*** ./pages/headerR11.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeaderR11.module.css */ "./styles/HeaderR11.module.css");
/* harmony import */ var _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_HomeR11__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/HomeR11 */ "./scripts/HomeR11.js");


var _jsxFileName = "C:\\Users\\crl_s\\OneDrive\\Escritorio\\occ\\recruiters-atomic-library\\pages\\headerR11.js";


function Home() {
  if (typeof document !== "undefined") {
    document.addEventListener("scroll", _scripts_HomeR11__WEBPACK_IMPORTED_MODULE_2__["handleDocumentScroll"]);
  }

  if (true) {
    window.addEventListener("click", _scripts_HomeR11__WEBPACK_IMPORTED_MODULE_2__["handleWindowClick"]);
    window.addEventListener("scroll", _scripts_HomeR11__WEBPACK_IMPORTED_MODULE_2__["handleWindowScroll"]);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "headerContainer",
      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "headerStyle",
        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.innerHeaderContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navElementsContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.groupContainer,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logoContainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "http://localhost:8029/actividad/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonDropDownDefault,
                  onClick: function onClick(event) {
                    return _scripts_HomeR11__WEBPACK_IMPORTED_MODULE_2__["handleClickOnOrganizationWrap"](event);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonDropDownText,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonDropDownFlex,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textSubHeading, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textHighEmphasis),
                        children: "Nombre de la organi..."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        id: "organizationDropDownButton",
                        className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconSmall)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "organizationCardWrap",
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.accountCardDisable,
                    style: {
                      opacity: 0
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.organizationCard,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                          href: "http://localhost:64660/Vacantes/Clasificaciones/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                            children: "Organizaci\xF3n 1"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 65,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                          href: "http://localhost:64660/Administracion/NotasReclutador/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                            children: "Organizaci\xF3n 2"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 81,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                          href: "http://localhost:64660/Paquetes/EstadoCuenta/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                            children: "Organizaci\xF3n 3"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 97,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 93,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.groupContainer),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cartWrap,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "http://localhost:5002/checkout/?utm_source=sight&utm_medium=referral&utm_campaign=",
                  rel: "nofollow",
                  id: "cart",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cartButton,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textSmall, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textWhite, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textCenter, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStrong, "\n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerLabelCount, "\n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerLabelCountShow),
                      children: "2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIcon,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flexBox,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cartIcon)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.messagesWrap,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.messagesButton,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textSmall, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textWhite, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textCenter, " \n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStrong, "\n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerLabelCount, "\n                        ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerLabelCountShow),
                    children: "2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIcon,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flexBox,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "\n                            ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, "\n                            ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.messagesIcon, "\n                          ")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.accountWrap,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonDropDownDefault,
                    onClick: function onClick(event) {
                      return _scripts_HomeR11__WEBPACK_IMPORTED_MODULE_2__["handleClickOnAccountWrap"](event);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonDropDownText,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonDropDownFlex,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "\n                            ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, " \n                            ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textSubHeading, " \n                            ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textHighEmphasis, "\n                            "),
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarCircle,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarContentWrap,
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarContent, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarContentCapital),
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "MR"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 193,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 190,
                                columnNumber: 33
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarContent, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarIcon)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 195,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 189,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 188,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 181,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          id: "accountDropDownButton",
                          className: "\n                              ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, "\n                              ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dropDownIcon, "\n                            ")
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      id: "accountCardWrap",
                      className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.accountCardDisable,
                      style: {
                        opacity: 0
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.accountCard,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "http://localhost:64660/Vacantes/Clasificaciones/",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                              children: "Clasificaciones de CV's"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 222,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 218,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 217,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "http://localhost:64660/Administracion/NotasReclutador/",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                              children: "Notas de CV's"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 238,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 234,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 233,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuSeparator
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 250,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "http://localhost:64660/Paquetes/EstadoCuenta/",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                              children: "Estado de Cuenta"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 257,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuSeparator
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 268,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "http://localhost:64660/DatosPersonales/",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                              children: "Datos personales"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 276,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "http://localhost:64660/DatosPersonales/CambiarClave/",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                              children: "Cambiar contrase\xF1a"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 292,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 288,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 287,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuSeparator
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 303,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "https://h3.occ.com.mx/Mercer/MisPerfiles",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                  ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                  ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                                "),
                              children: "\xCDndices salariales"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 311,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 307,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 306,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuSeparator
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 323,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 322,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navItemLink,
                            href: "https://occayuda.zendesk.com/hc/es",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "\n                                ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                                ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, "\n                                ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textNoEmphasis, "\n                              "),
                              children: "Ayuda"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 330,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 326,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 325,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuSeparator
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 342,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 341,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textStandard, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textSecondary, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuBottomTiny),
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            role: "presentation",
                            className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuLogOut,
                            children: "Cerrar sesi\xF3n"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 345,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 344,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.groupContainer, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemsCenter),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actividadWrap,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIcon,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flexBox,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "\n                          ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actividadIcon, "\n                        ")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "\n                          ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textMicro, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textHighEmphasis, "\n                        "),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIconText,
                        children: "Actividad"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 372,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vacantesWrap,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIcon,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flexBox,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vacantesIcon)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 381,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "\n                          ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textMicro, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textHighEmphasis, "\n                        "),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIconText,
                        children: "Vacantes"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 391,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 380,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 379,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.talentoWrap,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIcon,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flexBox,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon, " ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.talentoIcon)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 400,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "\n                          ".concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textMicro, "\n                          ").concat(_styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textHighEmphasis, "\n                        "),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: _styles_HeaderR11_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navIconText,
                        children: "Talento"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 410,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 403,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 399,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 397,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./scripts/HomeR11.js":
/*!****************************!*\
  !*** ./scripts/HomeR11.js ***!
  \****************************/
/*! exports provided: handleClickOnAccountWrap, handleWindowClick, handleWindowScroll, handleClickOnOrganizationWrap, handleDocumentScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClickOnAccountWrap", function() { return handleClickOnAccountWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleWindowClick", function() { return handleWindowClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleWindowScroll", function() { return handleWindowScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClickOnOrganizationWrap", function() { return handleClickOnOrganizationWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDocumentScroll", function() { return handleDocumentScroll; });
/* harmony import */ var C_Users_crl_s_OneDrive_Escritorio_occ_recruiters_atomic_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_crl_s_OneDrive_Escritorio_occ_recruiters_atomic_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var cardActive = {
  opacity: 1,
  height: "auto",
  maxHeight: "2000px",
  margin: "16px 0px 0px -46px",
  padding: "0px 0px 46px 46px",
  width: "fit-content",
  transition: "all 0.6s ease, margin-top 0.8s",
  position: "absolute",
  right: "0",
  zIndex: "9999",
  transform: "translateZ(0)",
  overflow: "hidden",
  pointerEvents: "auto"
};
var organizationCardActive = {
  right: "auto"
};
var cardDisable = {
  opacity: 0,
  height: "auto",
  maxHeight: "0px",
  margin: "0px 0px 0px 0px",
  padding: "0px 0px 0px 0px",
  overflow: "hidden",
  width: "auto",
  transition: "all 0.3s ease, margin-top 0.5s",
  position: "absolute",
  right: "0",
  zIndex: "9999",
  pointerEvents: "none"
};
var organizationCardDisable = {
  right: "auto"
};
var buttonDropDownActive = {
  transform: "rotate(180deg)"
};
var previousScrollPosition = {
  scrollY: 0
};

var switchElementStyle = function switchElementStyle(element, style) {
  Object.keys(style).forEach(function (styleKey) {
    element.style[styleKey] = style[styleKey];
  });
};

var handleDropDownButton = function handleDropDownButton(dropDownButton) {
  dropDownButton.style.transform === "" ? switchElementStyle(dropDownButton, buttonDropDownActive) : dropDownButton.style.transform = "";
};

var handleClickOnAccountWrap = function handleClickOnAccountWrap(event) {
  event.stopPropagation(); // Organization

  var organizationDropDownButton = document.getElementById("organizationDropDownButton");
  if (organizationDropDownButton.style.transform !== "") organizationDropDownButton.style.transform = "";
  var organizationCard = document.getElementById("organizationCardWrap");
  if (organizationCard.style.opacity !== "0") switchElementStyle(organizationCard, _objectSpread(_objectSpread({}, cardDisable), organizationCardDisable)); // Account

  var accountDropDownButton = document.getElementById("accountDropDownButton");
  handleDropDownButton(accountDropDownButton);
  var accountCard = document.getElementById("accountCardWrap");
  accountCard.style.opacity !== "0" ? switchElementStyle(accountCard, cardDisable) : switchElementStyle(accountCard, cardActive);
};

var handleClickOnOrganizationWrap = function handleClickOnOrganizationWrap(event) {
  event.stopPropagation(); // Account

  var accountDropDownButton = document.getElementById("accountDropDownButton");
  if (accountDropDownButton.style.transform !== "") accountDropDownButton.style.transform = "";
  var accountCard = document.getElementById("accountCardWrap");
  if (accountCard.style.opacity !== "0") switchElementStyle(accountCard, cardDisable); // Organization

  var organizationDropDownButton = document.getElementById("organizationDropDownButton");
  handleDropDownButton(organizationDropDownButton);
  var organizationCard = document.getElementById("organizationCardWrap");
  organizationCard.style.opacity !== "0" ? switchElementStyle(organizationCard, _objectSpread(_objectSpread({}, cardDisable), organizationCardDisable)) : switchElementStyle(organizationCard, _objectSpread(_objectSpread({}, cardActive), organizationCardActive));
};

var handleWindowClick = function handleWindowClick() {
  // Account
  var accountDropDownButton = document.getElementById("accountDropDownButton");
  if (accountDropDownButton.style.transform !== "") accountDropDownButton.style.transform = "";
  var accountCard = document.getElementById("accountCardWrap");
  if (accountCard.style.opacity !== "0") switchElementStyle(accountCard, cardDisable); // Organization

  var organizationDropDownButton = document.getElementById("organizationDropDownButton");
  if (organizationDropDownButton.style.transform !== "") organizationDropDownButton.style.transform = "";
  var organizationCard = document.getElementById("organizationCardWrap");

  if (organizationCard.style.opacity !== "0") {
    switchElementStyle(organizationCard, _objectSpread(_objectSpread({}, cardDisable), organizationCardDisable));
  }
};

var handleDocumentScroll = function handleDocumentScroll() {
  var header = document.getElementById("headerContainer");
  header.style.marginTop = "64px";
};

var handleWindowScroll = function handleWindowScroll() {
  // Hide account dropdown if visible
  var accountDropDownButton = document.getElementById("accountDropDownButton");
  if (accountDropDownButton.style.transform !== "") accountDropDownButton.style.transform = "";
  var accountCard = document.getElementById("accountCardWrap");

  if (accountCard.style.opacity !== "0") {
    switchElementStyle(accountCard, cardDisable);
  } // Hide organization dropdown if visible


  var organizationDropDownButton = document.getElementById("organizationDropDownButton");
  if (organizationDropDownButton.style.transform !== "") organizationDropDownButton.style.transform = "";
  var organizationCard = document.getElementById("organizationCardWrap");

  if (organizationCard.style.opacity !== "0") {
    switchElementStyle(organizationCard, _objectSpread(_objectSpread({}, cardDisable), organizationCardDisable));
  } // Header


  var scroll = window.pageYOffset;
  var headerStyle = document.getElementById("headerStyle");
  previousScrollPosition.scrollY > 10 ? headerStyle.style.background = "rgba(255, 255, 255, 0.85)" : headerStyle.style.background = "";
  var header = document.getElementById("headerContainer");

  if (scroll > previousScrollPosition.scrollY) {
    header.style.marginTop = "-64px";
  } else {
    header.style.marginTop = "0px";
  }

  previousScrollPosition.scrollY = window.pageYOffset;
};



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/HeaderR11.module.css":
/*!*************************************!*\
  !*** ./styles/HeaderR11.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./HeaderR11.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/HeaderR11.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./HeaderR11.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/HeaderR11.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./HeaderR11.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/HeaderR11.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FheaderR11&absolutePagePath=C%3A%5CUsers%5Ccrl_s%5COneDrive%5CEscritorio%5Cocc%5Crecruiters-atomic-library%5Cpages%5CheaderR11.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvSGVhZGVyUjExLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVhZGVyUjExLmpzIiwid2VicGFjazovL19OX0UvLi9zY3JpcHRzL0hvbWVSMTEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9IZWFkZXJSMTEubW9kdWxlLmNzcz9lNGZjIl0sIm5hbWVzIjpbIkhvbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmdW5jdGlvbnMiLCJ3aW5kb3ciLCJzdHlsZXMiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJTdHlsZSIsImlubmVySGVhZGVyQ29udGFpbmVyIiwibmF2RWxlbWVudHNDb250YWluZXIiLCJncm91cENvbnRhaW5lciIsImxvZ29Db250YWluZXIiLCJsb2dvIiwiYnV0dG9uRHJvcERvd25EZWZhdWx0IiwiZXZlbnQiLCJidXR0b25Ecm9wRG93blRleHQiLCJidXR0b25Ecm9wRG93bkZsZXgiLCJ0ZXh0IiwidGV4dFN1YkhlYWRpbmciLCJ0ZXh0SGlnaEVtcGhhc2lzIiwiaWNvbiIsImljb25TbWFsbCIsImFjY291bnRDYXJkRGlzYWJsZSIsIm9wYWNpdHkiLCJvcmdhbml6YXRpb25DYXJkIiwibmF2SXRlbUxpbmsiLCJ0ZXh0U3RhbmRhcmQiLCJ0ZXh0Tm9FbXBoYXNpcyIsImNhcnRXcmFwIiwiY2FydEJ1dHRvbiIsInRleHRTbWFsbCIsInRleHRXaGl0ZSIsInRleHRDZW50ZXIiLCJ0ZXh0U3Ryb25nIiwiaGVhZGVyTGFiZWxDb3VudCIsImhlYWRlckxhYmVsQ291bnRTaG93IiwibmF2SWNvbiIsImZsZXhCb3giLCJjYXJ0SWNvbiIsIm1lc3NhZ2VzV3JhcCIsIm1lc3NhZ2VzQnV0dG9uIiwibWVzc2FnZXNJY29uIiwiYWNjb3VudFdyYXAiLCJhdmF0YXJDaXJjbGUiLCJhdmF0YXJDb250ZW50V3JhcCIsImF2YXRhckNvbnRlbnQiLCJhdmF0YXJDb250ZW50Q2FwaXRhbCIsImF2YXRhckljb24iLCJkcm9wRG93bkljb24iLCJhY2NvdW50Q2FyZCIsIm1lbnVTZXBhcmF0b3IiLCJ0ZXh0U2Vjb25kYXJ5IiwibWVudUJvdHRvbVRpbnkiLCJtZW51TG9nT3V0IiwiaXRlbXNDZW50ZXIiLCJhY3RpdmlkYWRXcmFwIiwiYWN0aXZpZGFkSWNvbiIsInRleHRNaWNybyIsIm5hdkljb25UZXh0IiwidmFjYW50ZXNXcmFwIiwidmFjYW50ZXNJY29uIiwidGFsZW50b1dyYXAiLCJ0YWxlbnRvSWNvbiIsImNhcmRBY3RpdmUiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwicG9zaXRpb24iLCJyaWdodCIsInpJbmRleCIsInRyYW5zZm9ybSIsIm92ZXJmbG93IiwicG9pbnRlckV2ZW50cyIsIm9yZ2FuaXphdGlvbkNhcmRBY3RpdmUiLCJjYXJkRGlzYWJsZSIsIm9yZ2FuaXphdGlvbkNhcmREaXNhYmxlIiwiYnV0dG9uRHJvcERvd25BY3RpdmUiLCJwcmV2aW91c1Njcm9sbFBvc2l0aW9uIiwic2Nyb2xsWSIsInN3aXRjaEVsZW1lbnRTdHlsZSIsImVsZW1lbnQiLCJzdHlsZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3R5bGVLZXkiLCJoYW5kbGVEcm9wRG93bkJ1dHRvbiIsImRyb3BEb3duQnV0dG9uIiwiaGFuZGxlQ2xpY2tPbkFjY291bnRXcmFwIiwic3RvcFByb3BhZ2F0aW9uIiwib3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImFjY291bnREcm9wRG93bkJ1dHRvbiIsImhhbmRsZUNsaWNrT25Pcmdhbml6YXRpb25XcmFwIiwiaGFuZGxlV2luZG93Q2xpY2siLCJoYW5kbGVEb2N1bWVudFNjcm9sbCIsImhlYWRlciIsIm1hcmdpblRvcCIsImhhbmRsZVdpbmRvd1Njcm9sbCIsInNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiYSxzQ0FBc0Msc0JBQXNCO0FBQ3pFLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxrREFB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QUFLLGNBQWMsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxjQUFjLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksZUFBZSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGNBQWMsUUFBUSxLQUFLLGNBQWMsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGNBQWMsUUFBUSxLQUFLLGNBQWMsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGVBQWUsUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxjQUFjLFFBQVEsS0FBSyxjQUFjLFFBQVEsS0FBSyxjQUFjLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxL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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhNQUE4TTs7QUFFOU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QXhCLENBQWY7O0FBQ0EsTUFBSVEsTUFBTSxHQUFHdEIsc0JBQXNCLENBQUNDLE9BQXBDLEVBQTZDO0FBQzNDa0IsVUFBTSxDQUFDZixLQUFQLENBQWFnQixTQUFiLEdBQXlCLE9BQXpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELFVBQU0sQ0FBQ2YsS0FBUCxDQUFhZ0IsU0FBYixHQUF5QixLQUF6QjtBQUNEOztBQUNEcEIsd0JBQXNCLENBQUNDLE9BQXZCLEdBQWlDN0UsTUFBTSxDQUFDbUcsV0FBeEM7QUFDRCxDQTVDRDs7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01BLFVBQVUsbUJBQU8sQ0FBQyxtTkFBd0c7QUFDMUgsMEJBQTBCLG1CQUFPLENBQUMsOFRBQTRLOztBQUU5TTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSw4VEFBNEs7QUFDbEw7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4VEFBNEs7O0FBRXRNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9oZWFkZXJSMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgICBcIi9oZWFkZXJSMTFcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY3JsX3NcXFxcT25lRHJpdmVcXFxcRXNjcml0b3Jpb1xcXFxvY2NcXFxccmVjcnVpdGVycy1hdG9taWMtbGlicmFyeVxcXFxwYWdlc1xcXFxoZWFkZXJSMTEuanNcIik7XG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgICIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWAke2lkfSAke2NvdW50fWA7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGtleT0+e3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT9gQG1lZGlhICR7b2JqLm1lZGlhfSB7JHtvYmouY3NzfX1gOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9YFxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpfSAqL2A7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9KCk9PntyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz0obGlzdCxvcHRpb25zKT0+e29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAubWFpbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1zbWFsbCk7XFxyXFxuICBib3JkZXItY29sb3I6IHJlZDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLkhlYWRlclIxMV9oZWFkZXJDb250YWluZXJfXzJoTnItIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhLIEdyb3Rlc2tcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9oZWFkZXJTdHlsZV9fMUxoLUYge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMTIlKSwgMCAxcHggNnB4IDAgcmdiKDAgMjkgMTI0IC8gNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2lubmVySGVhZGVyQ29udGFpbmVyX18yYzhrayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB3aWR0aDogMTQ2NHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX25hdkVsZW1lbnRzQ29udGFpbmVyX18yLXhGVyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9ncm91cENvbnRhaW5lcl9fMUU5UzUge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJISyBHcm90ZXNrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9pdGVtc0NlbnRlcl9fM3FwdGQge1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9hY3RpdmlkYWRXcmFwX18xUFcxRSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9hY3RpdmlkYWRJY29uX18zRzduciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKRFlYQmhYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMDVMamNzTVRZdU5VZ3pMalYyTkdnMkxqTjJMVFJJT1M0M2VpQk5PUzQzTERFMVREa3VOeXd4TldNd0xqZ3NNQ3d4TGpVc01DNDNMREV1TlN3eExqVjJOR013TERBdU9DMHdMamNzTVM0MUxURXVOU3d4TGpWSU15NDFRekl1Tnl3eU1pd3lMREl4TGpNc01pd3lNQzQxYkRBc01Bb2dJQ0FnSUNBZ0lBbDJMVFJETWl3eE5TNDNMREl1Tnl3eE5Td3pMalVzTVRWSU9TNDNlaUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazA1TGpjc015NDFTRE11TlZZeE1tZzJMak5ET1M0M0xERXlMRGt1Tnl3ekxqVXNPUzQzTERNdU5Yb2dUVGt1Tnl3eVREa3VOeXd5WXpBdU9Dd3dMREV1TlN3d0xqY3NNUzQxTERFdU5WWXhNbU13TERBdU9DMHdMamNzTVM0MUxURXVOU3d4TGpWSU15NDFDaUFnSUNBZ0lDQWdDVU15TGpjc01UTXVOU3d5TERFeUxqZ3NNaXd4TWxZekxqVkRNaXd5TGpjc01pNDNMRElzTXk0MUxESklPUzQzZWlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWsweU1DNDFMRE11TldndE5pNHpkalJvTmk0elZqTXVOWG9nVFRJd0xqVXNNa3d5TUM0MUxESkRNakV1TXl3eUxESXlMREl1Tnl3eU1pd3pMalZzTUN3d2RqUkRNaklzT0M0ekxESXhMak1zT1N3eU1DNDFMRGxzTUN3d2FDMDJMak1LSUNBZ0lDQWdJQ0FKWXkwd0xqZ3NNQzB4TGpVdE1DNDNMVEV1TlMweExqVjJMVFJqTUMwd0xqZ3NNQzQzTFRFdU5Td3hMalV0TVM0MVNESXdMalY2SWk4K0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJemMzTnpjM055SWdaRDBpVFRJd0xqVXNNVEpvTFRZdU0zWTRMalZvTmk0elZqRXllaUJOTWpBdU5Td3hNQzQxWXpBdU9Dd3dMREV1TlN3d0xqY3NNUzQxTERFdU5YWTRMalZqTUN3d0xqZ3RNQzQzTERFdU5TMHhMalVzTVM0MWFDMDJMak5qTFRBdU9Dd3dMVEV1TlMwd0xqY3RNUzQxTFRFdU5WWXhNZ29nSUNBZ0lDQWdJQWxqTUMwd0xqZ3NNQzQzTFRFdU5Td3hMalV0TVM0MVNESXdMalY2SWk4K0NpQWdJQ0FnSUNBZ1BDOXpkbWMrKTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV92YWNhbnRlc1dyYXBfX0xkZEJkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX3ZhY2FudGVzSWNvbl9fMTBfS3kge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMHlNQzR5TERJeExqTklNeTQzWXkwd0xqZ3NNQzB4TGpVdE1DNDNMVEV1TlMweExqVldNVEJqTUMwd0xqZ3NNQzQzTFRFdU5Td3hMalV0TVM0MWFERTJMalZqTUM0NExEQXNNUzQxTERBdU55d3hMalVzTVM0MWRqa3VOd29nSUNBZ0lDQWdJQWxETWpFdU55d3lNQzQxTERJeExESXhMaklzTWpBdU1pd3lNUzR6UXpJd0xqSXNNakV1TWl3eU1DNHlMREl4TGpJc01qQXVNaXd5TVM0emVpQk5NeTQzTERFd2Rqa3VOMmd4Tmk0MVZqRXdTRE11TjNvaUx6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTnpjM056YzNJaUJrUFNKTk1qQXNOeTR4U0RSak1DMHdMamdzTUM0M0xURXVOU3d4TGpVdE1TNDFhREV6UXpFNUxqTXNOUzQyTERJd0xEWXVNaXd5TUN3M0xqRjZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVEU0TERSSU5tTXdMVEF1T0N3d0xqY3RNUzQxTERFdU5TMHhMalZvT1M0eFF6RTNMalFzTWk0MUxERTRMRE11TWl3eE9DdzBlaUl2UGdvZ0lDQWdJQ0FnSUR3dmMzWm5QZz09KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV90YWxlbnRvV3JhcF9fMWtma3Ige1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfdGFsZW50b0ljb25fXzNSR0NCIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazB5TVM0NUxESXdMalJzTFRVdU5TMDFMalZqTVM0eExURXVOQ3d4TGpjdE15NHhMREV1TnkwMExqbGpNQzAwTGpRdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaHpNeTQyTERnc09DdzRZekV1T0N3d0xETXVOUzB3TGpZc05DNDVMVEV1TndvZ0lDQWdJQ0FnSUFsc05TNDFMRFV1TlV3eU1TNDVMREl3TGpSNklFMHhNQ3d4Tm1NdE15NHpMREF0TmkweUxqY3ROaTAyY3pJdU55MDJMRFl0Tm5NMkxESXVOeXcyTERaVE1UTXVNeXd4Tml3eE1Dd3hObm9pTHo0S0lDQWdJQ0FnSUNBOEwzTjJaejQ9KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9pY29uX19NbWtDYiB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2ljb25TbWFsbF9fM1RESXAge1xcclxcbiAgd2lkdGg6IDE0cHg7XFxyXFxuICBoZWlnaHQ6IDE0cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUNBZ0lDQUpJSFpwWlhkQ2IzZzlJakFnTUNBeE5DQXhOQ0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNVFFnTVRRN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJekl5TWpJeU1pSWdaRDBpVFRFeExqVXNOQzR5YkRBdU15d3dMalJqTUM0eExEQXVNU3d3TGpFc01DNHlMREFzTUM0elREY3VNU3c1TGpoakxUQXVNU3d3TGpFdE1DNHlMREF1TVMwd0xqTXNNR013TERBc01Dd3dMREFzTUV3eUxqRXNOQzQ0Q2lBZ0lDQWdJQ0FnSUNBZ0lBbGpMVEF1TVMwd0xqRXRNQzR4TFRBdU1pd3dMVEF1TTJ3d0xqTXRNQzQwWXpBdU1TMHdMakVzTUM0eUxUQXVNU3d3TGpNc01HTXdMREFzTUN3d0xEQXNNR3cwTGpFc05DNDBZekF1TVN3d0xqRXNNQzR5TERBdU1Td3dMak1zTUdNd0xEQXNNQ3d3TERBc01HdzBMakV0TkM0MENpQWdJQ0FnSUNBZ0lDQWdJQWxETVRFdU15dzBMakVzTVRFdU5DdzBMakVzTVRFdU5TdzBMakpETVRFdU5TdzBMakVzTVRFdU5TdzBMaklzTVRFdU5TdzBMako2SWk4K0NpQWdJQ0FnSUNBZ0lDQWdJRHd2YzNablBnPT0pO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2NhcnRXcmFwX18zTGtJbCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9jYXJ0QnV0dG9uX19iVkpGciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfY2FydEljb25fXzF2MnJyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazB4T1M0NUxEWXVOMnd4TGprc01DNDFiQzB4TGpjc05pNDJRekl3TERFMExqVXNNVGt1TkN3eE5Td3hPQzQzTERFMVNEY3VPR010TUM0M0xEQXRNUzR6TFRBdU5TMHhMalV0TVM0eGJDMHlMVGd1TVVNMExqTXNOUzR6TERNdU9TdzFMRE11TkN3MVNESUtJQ0FnSUNBZ0lDQUpWak5vTVM0MFF6UXVPQ3d6TERZc015NDVMRFl1TXl3MUxqTk1PQzR5TERFemFERXdMakZNTVRrdU9TdzJMamQ2SWk4K0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJemMzTnpjM055SWdaRDBpVFRnc01qSmpMVEV1Tnl3d0xUTXRNUzR6TFRNdE0zTXhMak10TXl3ekxUTnpNeXd4TGpNc015d3pVemt1Tnl3eU1pdzRMREl5ZWlCTk9Dd3lNR013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNWE10TVN3d0xqUXRNU3d4Q2lBZ0lDQWdJQ0FnQ1ZNM0xqUXNNakFzT0N3eU1Ib2lMejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak56YzNOemMzSWlCa1BTSk5NVGdzTWpKakxURXVOeXd3TFRNdE1TNHpMVE10TTNNeExqTXRNeXd6TFROek15d3hMak1zTXl3elV6RTVMamNzTWpJc01UZ3NNako2SUUweE9Dd3lNR013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNWE10TVN3d0xqUXRNU3d4Q2lBZ0lDQWdJQ0FnQ1ZNeE55NDBMREl3TERFNExESXdlaUl2UGdvZ0lDQWdJQ0FnSUR3dmMzWm5QZz09KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9jYXJ0SWNvbl9fMXYycnI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU1qSXlNaklpSUdROUlrMHhPUzQ1TERZdU4yd3hMamtzTUM0MWJDMHhMamNzTmk0MlF6SXdMREUwTGpVc01Ua3VOQ3d4TlN3eE9DNDNMREUxU0RjdU9HTXRNQzQzTERBdE1TNHpMVEF1TlMweExqVXRNUzR4YkMweUxUZ3VNVU0wTGpNc05TNHpMRE11T1N3MUxETXVOQ3cxU0RJS0lDQWdJQ0FnSUNBSlZqTm9NUzQwUXpRdU9Dd3pMRFlzTXk0NUxEWXVNeXcxTGpOTU9DNHlMREV6YURFd0xqRk1NVGt1T1N3MkxqZDZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6SXlNakl5TWlJZ1pEMGlUVGdzTWpKakxURXVOeXd3TFRNdE1TNHpMVE10TTNNeExqTXRNeXd6TFROek15d3hMak1zTXl3elV6a3VOeXd5TWl3NExESXllaUJOT0N3eU1HTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1YTXRNU3d3TGpRdE1Td3hDaUFnSUNBZ0lDQWdDVk0zTGpRc01qQXNPQ3d5TUhvaUx6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTWpJeU1qSXlJaUJrUFNKTk1UZ3NNakpqTFRFdU55d3dMVE10TVM0ekxUTXRNM014TGpNdE15d3pMVE56TXl3eExqTXNNeXd6VXpFNUxqY3NNaklzTVRnc01qSjZJRTB4T0N3eU1HTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1YTXRNU3d3TGpRdE1Td3hDaUFnSUNBZ0lDQWdDVk14Tnk0MExESXdMREU0TERJd2VpSXZQZ29nSUNBZ0lDQWdJRHd2YzNablBnPT0pO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX21lc3NhZ2VzV3JhcF9fM19WV3cge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfbWVzc2FnZXNCdXR0b25fXzFMZy12IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9tZXNzYWdlc0ljb25fXzJWT21hIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazA1TGpnc01qSXVNV010TUM0eUxEQXVNaTB3TGpRc01DNHlMVEF1Tml3d0xqSmpMVEF1TkN3d0xUQXVOeTB3TGpRdE1DNDNMVEF1T0d3dE1DNHhMVEl1Tm1Nd0xUQXVOUzB3TGpRdE1DNDVMVEF1T1Mwd0xqa0tJQ0FnSUNBZ0lDQUpZeTB6TERBdE5TNDFMVEl1TlMwMUxqVXROUzQxVmpndU0yTXdMVE11TXl3eUxqY3ROaXcyTFRab09HTXpMak1zTUN3MkxESXVOeXcyTERaMk15NDJZekFzTXk0ekxUSXVOeXcyTFRZc05tZ3RNaTR5WXkwd0xqTXNNQzB3TGpZc01DNHhMVEF1T0N3d0xqTk1PUzQ0TERJeUxqRjZDaUFnSUNBZ0lDQWdDU0JOTVRBdU5Dd3hPQzR6YkRFdU1TMHhMak5qTUM0MkxUQXVOeXd4TGpRdE1Td3lMak10TVVneE5tTXlMaklzTUN3MExURXVPQ3cwTFRSV09DNHpZekF0TWk0eUxURXVPQzAwTFRRdE5FZzRZeTB5TGpJc01DMDBMREV1T0MwMExEUjJOQzR4WXpBc01TNDVMREV1Tml3ekxqVXNNeTQxTERNdU5Rb2dJQ0FnSUNBZ0lBbERPQzQ1TERFMUxqa3NNVEF1TVN3eE5pNDVMREV3TGpRc01UZ3VNM29pTHo0S0lDQWdJQ0FnSUNBOEwzTjJaejQ9KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9tZXNzYWdlc0ljb25fXzJWT21hOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTXlNakl5TWpJaUlHUTlJazA1TGpnc01qSXVNV010TUM0eUxEQXVNaTB3TGpRc01DNHlMVEF1Tml3d0xqSmpMVEF1TkN3d0xUQXVOeTB3TGpRdE1DNDNMVEF1T0d3dE1DNHhMVEl1Tm1Nd0xUQXVOUzB3TGpRdE1DNDVMVEF1T1Mwd0xqa0tJQ0FnSUNBZ0lDQUpZeTB6TERBdE5TNDFMVEl1TlMwMUxqVXROUzQxVmpndU0yTXdMVE11TXl3eUxqY3ROaXcyTFRab09HTXpMak1zTUN3MkxESXVOeXcyTERaMk15NDJZekFzTXk0ekxUSXVOeXcyTFRZc05tZ3RNaTR5WXkwd0xqTXNNQzB3TGpZc01DNHhMVEF1T0N3d0xqTk1PUzQ0TERJeUxqRjZDaUFnSUNBZ0lDQWdDU0JOTVRBdU5Dd3hPQzR6YkRFdU1TMHhMak5qTUM0MkxUQXVOeXd4TGpRdE1Td3lMak10TVVneE5tTXlMaklzTUN3MExURXVPQ3cwTFRSV09DNHpZekF0TWk0eUxURXVPQzAwTFRRdE5FZzRZeTB5TGpJc01DMDBMREV1T0MwMExEUjJOQzR4WXpBc01TNDVMREV1Tml3ekxqVXNNeTQxTERNdU5Rb2dJQ0FnSUNBZ0lBbERPQzQ1TERFMUxqa3NNVEF1TVN3eE5pNDVMREV3TGpRc01UZ3VNM29pTHo0S0lDQWdJQ0FnSUNBOEwzTjJaejQ9KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9hY2NvdW50V3JhcF9fMktKbnUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYnV0dG9uRHJvcERvd25EZWZhdWx0X18yNnFiWCB7XFxyXFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2J1dHRvbkRyb3BEb3duVGV4dF9fMldBcDQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9idXR0b25Ecm9wRG93bkZsZXhfXzNvT2JiIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfZHJvcERvd25JY29uX18yQ1JGayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUNBZ0lDQUpJSFpwWlhkQ2IzZzlJakFnTUNBeE5DQXhOQ0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNVFFnTVRRN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJekl5TWpJeU1pSWdaRDBpVFRFeExqVXNOQzR5YkRBdU15d3dMalJqTUM0eExEQXVNU3d3TGpFc01DNHlMREFzTUM0elREY3VNU3c1TGpoakxUQXVNU3d3TGpFdE1DNHlMREF1TVMwd0xqTXNNR013TERBc01Dd3dMREFzTUV3eUxqRXNOQzQ0Q2lBZ0lDQWdJQ0FnSUNBZ0lBbGpMVEF1TVMwd0xqRXRNQzR4TFRBdU1pd3dMVEF1TTJ3d0xqTXRNQzQwWXpBdU1TMHdMakVzTUM0eUxUQXVNU3d3TGpNc01HTXdMREFzTUN3d0xEQXNNR3cwTGpFc05DNDBZekF1TVN3d0xqRXNNQzR5TERBdU1Td3dMak1zTUdNd0xEQXNNQ3d3TERBc01HdzBMakV0TkM0MENpQWdJQ0FnSUNBZ0lDQWdJQWxETVRFdU15dzBMakVzTVRFdU5DdzBMakVzTVRFdU5TdzBMakpETVRFdU5TdzBMakVzTVRFdU5TdzBMaklzTVRFdU5TdzBMako2SWk4K0NpQWdJQ0FnSUNBZ0lDQWdJRHd2YzNablBnPT0pO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX3Rlc3RBY2NvdW50RGl2X19BaW5lMyB7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYWNjb3VudENhcmRBY3RpdmVfXzN0OFZCIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcXHJcXG4gIG1hcmdpbjogMTZweCAwcHggMHB4IC00NnB4O1xcclxcbiAgcGFkZGluZzogMHB4IDBweCA0NnB4IDQ2cHg7XFxyXFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZSwgbWFyZ2luLXRvcCAwLjhzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYWNjb3VudENhcmREaXNhYmxlX19qM2xXTSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAtMTZweDtcXHJcXG4gIHBhZGRpbmc6IDBweCAwcHggNDZweCAxNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgbWFyZ2luLXRvcCAwLjVzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2FjY291bnRDYXJkX18zZXZOZiB7XFxyXFxuICB6LWluZGV4OiA0O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMnB4IDlweCAtNXB4IHJnYigwIDAgMCAvIDEyJSksXFxyXFxuICAgIDAgMTBweCAzMnB4IDAgcmdiKDAgMjkgMTI0IC8gMTIlKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGJveC1zaGFkb3csIDAuM3MgdHJhbnNmb3JtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcmlnaHQ6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHggOHB4IDE2cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9vcmdhbml6YXRpb25DYXJkX18xbjJFOCB7XFxyXFxuICB6LWluZGV4OiA0O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMnB4IDlweCAtNXB4IHJnYigwIDAgMCAvIDEyJSksIDAgMTBweCAzMnB4IDAgcmdiKDAgMjkgMTI0IC8gMTIlKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGJveC1zaGFkb3csIDAuM3MgdHJhbnNmb3JtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcmlnaHQ6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHggOHB4IDE2cHggIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9tZW51U2VwYXJhdG9yX18yZDRIUiB7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfbmF2SWNvbl9fMW13Xzgge1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX25hdkljb25fXzFtd184OmhvdmVyIC5IZWFkZXJSMTFfbmF2SWNvblRleHRfXzNCbU1MIHtcXHJcXG4gIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfbmF2SWNvbl9fMW13Xzg6aG92ZXIgLkhlYWRlclIxMV9hY3RpdmlkYWRJY29uX18zRzduciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKRFlYQmhYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU1qSXlNaklpSUdROUlrMDVMamNzTVRZdU5VZ3pMalYyTkdnMkxqTjJMVFJJT1M0M2VpQk5PUzQzTERFMVREa3VOeXd4TldNd0xqZ3NNQ3d4TGpVc01DNDNMREV1TlN3eExqVjJOR013TERBdU9DMHdMamNzTVM0MUxURXVOU3d4TGpWSU15NDFRekl1Tnl3eU1pd3lMREl4TGpNc01pd3lNQzQxYkRBc01Bb2dJQ0FnSUNBZ0lBbDJMVFJETWl3eE5TNDNMREl1Tnl3eE5Td3pMalVzTVRWSU9TNDNlaUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTXlNakl5TWpJaUlHUTlJazA1TGpjc015NDFTRE11TlZZeE1tZzJMak5ET1M0M0xERXlMRGt1Tnl3ekxqVXNPUzQzTERNdU5Yb2dUVGt1Tnl3eVREa3VOeXd5WXpBdU9Dd3dMREV1TlN3d0xqY3NNUzQxTERFdU5WWXhNbU13TERBdU9DMHdMamNzTVM0MUxURXVOU3d4TGpWSU15NDFDaUFnSUNBZ0lDQWdDVU15TGpjc01UTXVOU3d5TERFeUxqZ3NNaXd4TWxZekxqVkRNaXd5TGpjc01pNDNMRElzTXk0MUxESklPUzQzZWlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15TWpJeU1qSWlJR1E5SWsweU1DNDFMRE11TldndE5pNHpkalJvTmk0elZqTXVOWG9nVFRJd0xqVXNNa3d5TUM0MUxESkRNakV1TXl3eUxESXlMREl1Tnl3eU1pd3pMalZzTUN3d2RqUkRNaklzT0M0ekxESXhMak1zT1N3eU1DNDFMRGxzTUN3d2FDMDJMak1LSUNBZ0lDQWdJQ0FKWXkwd0xqZ3NNQzB4TGpVdE1DNDNMVEV1TlMweExqVjJMVFJqTUMwd0xqZ3NNQzQzTFRFdU5Td3hMalV0TVM0MVNESXdMalY2SWk4K0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJekl5TWpJeU1pSWdaRDBpVFRJd0xqVXNNVEpvTFRZdU0zWTRMalZvTmk0elZqRXllaUJOTWpBdU5Td3hNQzQxWXpBdU9Dd3dMREV1TlN3d0xqY3NNUzQxTERFdU5YWTRMalZqTUN3d0xqZ3RNQzQzTERFdU5TMHhMalVzTVM0MWFDMDJMak5qTFRBdU9Dd3dMVEV1TlMwd0xqY3RNUzQxTFRFdU5WWXhNZ29nSUNBZ0lDQWdJQWxqTUMwd0xqZ3NNQzQzTFRFdU5Td3hMalV0TVM0MVNESXdMalY2SWk4K0NpQWdJQ0FnSUNBZ1BDOXpkbWMrKTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9uYXZJY29uX18xbXdfODpob3ZlciAuSGVhZGVyUjExX3ZhY2FudGVzSWNvbl9fMTBfS3kge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU1qSXlNaklpSUdROUlrMHlNQzR5TERJeExqTklNeTQzWXkwd0xqZ3NNQzB4TGpVdE1DNDNMVEV1TlMweExqVldNVEJqTUMwd0xqZ3NNQzQzTFRFdU5Td3hMalV0TVM0MWFERTJMalZqTUM0NExEQXNNUzQxTERBdU55d3hMalVzTVM0MWRqa3VOd29nSUNBZ0lDQWdJQWxETWpFdU55d3lNQzQxTERJeExESXhMaklzTWpBdU1pd3lNUzR6UXpJd0xqSXNNakV1TWl3eU1DNHlMREl4TGpJc01qQXVNaXd5TVM0emVpQk5NeTQzTERFd2Rqa3VOMmd4Tmk0MVZqRXdTRE11TjNvaUx6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTWpJeU1qSXlJaUJrUFNKTk1qQXNOeTR4U0RSak1DMHdMamdzTUM0M0xURXVOU3d4TGpVdE1TNDFhREV6UXpFNUxqTXNOUzQyTERJd0xEWXVNaXd5TUN3M0xqRjZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6SXlNakl5TWlJZ1pEMGlUVEU0TERSSU5tTXdMVEF1T0N3d0xqY3RNUzQxTERFdU5TMHhMalZvT1M0eFF6RTNMalFzTWk0MUxERTRMRE11TWl3eE9DdzBlaUl2UGdvZ0lDQWdJQ0FnSUR3dmMzWm5QZz09KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9uYXZJY29uX18xbXdfODpob3ZlciAuSGVhZGVyUjExX3RhbGVudG9JY29uX18zUkdDQiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUFrZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5DQXlORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15TWpJeU1qSWlJR1E5SWsweU1TNDVMREl3TGpSc0xUVXVOUzAxTGpWak1TNHhMVEV1TkN3eExqY3RNeTR4TERFdU55MDBMamxqTUMwMExqUXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGh6TXk0MkxEZ3NPQ3c0WXpFdU9Dd3dMRE11TlMwd0xqWXNOQzQ1TFRFdU53b2dJQ0FnSUNBZ0lBbHNOUzQxTERVdU5Vd3lNUzQ1TERJd0xqUjZJRTB4TUN3eE5tTXRNeTR6TERBdE5pMHlMamN0TmkwMmN6SXVOeTAyTERZdE5uTTJMREl1Tnl3MkxEWlRNVE11TXl3eE5pd3hNQ3d4Tm5vaUx6NEtJQ0FnSUNBZ0lDQThMM04yWno0PSk7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfZmxleEJveF9fMTVjZ1Qge1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV90ZXh0SGlnaEVtcGhhc2lzX18zVTZQbCB7XFxyXFxuICBjb2xvcjogIzIyMjIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV90ZXh0U3ViSGVhZGluZ19fSHVPN2Qge1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7IFxcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX3RleHROb0VtcGhhc2lzX19ENHhwZCB7XFxyXFxuICBjb2xvcjogIzc3Nzc3NztcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV90ZXh0Tm9FbXBoYXNpc19fRDR4cGQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMyMjIyMjI7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfdGV4dE1pY3JvX19QcENEOSB7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV90ZXh0U3RhbmRhcmRfXzFtdUVfIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX3RleHRfXzJicDdWIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEsgR3JvdGVza1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfdGV4dENlbnRlcl9fM0pIcHEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX3RleHRXaGl0ZV9fMkhLZW8ge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfdGV4dFN0cm9uZ19fMW45dUIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV90ZXh0U21hbGxfXzJSN0d4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX21lbnVMb2dPdXRfXzFTcVdfIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogI2YxMzQ2NTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlclIxMV9tZW51Qm90dG9tVGlueV9fM0xsaXoge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfdGV4dFNlY29uZGFyeV9fc0tEQkMge1xcclxcbiAgY29sb3I6ICNmMTM0NjU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfaGVhZGVyTGFiZWxDb3VudFNob3dfXzFYUDNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2hlYWRlckxhYmVsQ291bnRfXzNVTEs3IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTZweDtcXHJcXG4gIGxlZnQ6IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMTM0NjU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcclxcbiAgbWF4LXdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uSGVhZGVyUjExX25hdkljb25UZXh0X18zQm1NTCB7XFxyXFxuICBjb2xvcjogIzc3Nzc3NztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfbmF2SWNvblRleHRfXzNCbU1MOmZvY3VzLFxcclxcbi5IZWFkZXJSMTFfbmF2SWNvblRleHRfXzNCbU1MOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX25hdkl0ZW1MaW5rX18yMWU0SCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfbG9nb0NvbnRhaW5lcl9fMld1N2oge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2xvZ29fXzNzTXA3IHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQ0IyYVdWM1FtOTRQU0l3SURBZ016QXdJRGN3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F6TURBZ056QTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMDBPU3d5TXk0NWJEY3VOaTB4TGpSak1Dd3dMREV1TlMwd0xqSXNNeTR6TFRFdU5HdzJMVFF1Tm1Nd0xEQXNNQzQ1TFRFdE1TNHhMVEV1TW13dE9DNDVMVEF1TldNd0xEQXRNQzQyTERBdE1DNDNMREF1TjJNd0xEQXNNQzR5TERFdU1TMHhMREl1TWdvZ0lDQWdJQ0FnSUd3dE5TNDVMRFV1T1VNME9DNHlMREl6TGpjc05EZ3VNU3d5TkN3ME9Td3lNeTQ1ZWlJdlBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVFEwTGpJc01Ua3VNV3d4TGpRdE55NDJZekFzTUN3d0xqSXRNUzQxTERFdU5DMHpMak5zTkM0MkxUWmpNQ3d3TERFdE1DNDVMREV1TWl3eExqRnNNQzQxTERndU9XTXdMREFzTUN3d0xqWXRNQzQzTERBdU4yTXdMREF0TVM0eExUQXVNaTB5TGpJc01Rb2dJQ0FnSUNBZ0lHd3ROaXcxTGpsRE5EUXVOQ3d4T1M0NUxEUTBMakVzTWpBc05EUXVNaXd4T1M0eGVpSXZQZ29nSUNBZ1BIQmhkR2dnWm1sc2JEMGlJemMzTnpjM055SWdaRDBpVFRRNUxqTXNNak11TVdNdE1DNHhMVEF1TVMwd0xqSXRNQzR5TFRBdU15MHdMak5zTFRBdU55d3dMamRzTUN3d1REUTJMREkxTGpoakxUQXVNeXd3TGpNdE1DNDBMREF1T1Mwd0xqRXNNUzR5WXpNdU5TdzBMamNzTlM0eUxERXdMamtzTkN3eE55NDBDaUFnSUNBZ0lDQWdZeTB4TGpjc09TNDJMVGt1TlN3eE55NHhMVEU1TGpNc01UZ3VORU14Tml3Mk5DNDNMRE11Tml3MU1pNDFMRFV1TVN3ek55NDVZekV0T1M0MUxEa3VOeTB4T0M0MUxERTVMakV0TVRrdU9XTTJMak10TUM0NUxERXlMaklzTUM0M0xERTJMamdzTkM0eENpQWdJQ0FnSUNBZ1l6QXVOQ3d3TGpNc01DNDVMREF1TWl3eExqTXRNQzR4YkRNdE0yd3dMREJqTFRBdU1TMHdMakV0TUM0ekxUQXVNaTB3TGpRdE1DNHpZeTAxTGprdE5DNDNMVEV6TGpjdE55MHlNaTR4TFRVdU5XTXRNVEV1TXl3eUxUSXdMak1zTVRBdU9TMHlNaTR6TERJeUxqSUtJQ0FnSUNBZ0lDQmpMVE11TkN3eE9TNHhMREV6TGpFc016VXVOU3d6TWk0eUxETXlMakpqTVRFdU15MHlMREl3TGpNdE1URXNNakl1TWkweU1pNHpRelUyTGpRc016WXVPU3cxTkN3eU9TdzBPUzR6TERJekxqRjZJaTgrQ2lBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTnpjM056YzNJaUJrUFNKTk5ERXVNU3d6TUM0M1RETTRMamdzTXpOakxUQXVNeXd3TGpNdE1DNDBMREF1Tnkwd0xqRXNNUzR4WXpFdU1pd3lMREV1T0N3MExqUXNNUzQzTERkakxUQXVNeXcyTGpNdE5TNHpMREV4TGpVdE1URXVOaXd4TWdvZ0lDQWdJQ0FnSUdNdE55NDVMREF1TnkweE5DNDJMVFV1T1MweE15NDVMVEV6TGpoRE1UVXVOaXd6TXl3eU1DNDNMREk0TERJM0xESTNMamRqTWk0MUxUQXVNU3cwTGprc01DNDFMRGNzTVM0M1l6QXVOQ3d3TGpJc01DNDRMREF1TVN3eExqRXRNQzR4YkRJdU15MHlMak1LSUNBZ0lDQWdJQ0JqTUM0MExUQXVOQ3d3TGpRdE1TNHlMVEF1TWkweExqVmpMVE10TVM0NUxUWXVOUzB5TGprdE1UQXVNeTB5TGpkakxUa3VOQ3d3TGpNdE1UWXVPU3c0TGpFdE1UY3NNVGN1TldNdE1DNHhMRGt1T0N3NExERTNMamdzTVRjdU9Dd3hOeTQ0WXprdU5Dd3dMREUzTGpJdE55NDFMREUzTGpjdE1UWXVPUW9nSUNBZ0lDQWdJR013TGpJdE15NDRMVEF1T1MwM0xqUXRNaTQ0TFRFd0xqUkROREl1TXl3ek1DNHpMRFF4TGpZc016QXVNaXcwTVM0eExETXdMamQ2SWk4K0NpQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak56YzNOemMzSWlCa1BTSk5NelFzTXpjdU5Xd3RNaTQ1TERFdU0yTXRNQzQwTERBdU1pMHdMallzTUM0MkxUQXVOaXd4TGpGak1DNHhMREF1TkN3d0xqRXNNQzQ0TERBc01TNHlZeTB3TGpNc01TNHlMVEV1TWl3eUxqRXRNaTQwTERJdU13b2dJQ0FnSUNBZ0lHTXRNaXd3TGpNdE15NDRMVEV1TkMwekxqUXRNeTQwWXpBdU1pMHhMaklzTVM0eExUSXVNU3d5TGpNdE1pNDBZekF1TkMwd0xqRXNNQzQ0TFRBdU1Td3hMaklzTUdNd0xqUXNNQzR4TERBdU9TMHdMakVzTVMwd0xqVnNNUzR6TFRJdU9XTXdMakl0TUM0MUxEQXRNUzR4TFRBdU5pMHhMak1LSUNBZ0lDQWdJQ0JqTFRFdU1pMHdMalF0TWk0MExUQXVOUzB6TGpjdE1DNHlZeTB6TGpRc01DNDJMVFl1TVN3ekxqUXROaTQxTERZdU9XTXRNQzQyTERRdU9Td3pMak1zT1N3NExqRXNPQzQ1WXpRdE1DNHhMRGN1TkMwekxqTXNOeTQzTFRjdU0yTXdMakV0TVM0eExEQXRNaTR4TFRBdU15MHpDaUFnSUNBZ0lDQWdRek0xTGpFc016Y3VOU3d6TkM0MUxETTNMak1zTXpRc016Y3VOWG9pTHo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMDRPUzQ0TERRekxqSmpNQ3cyTGpRdE5DNDBMREV4TGpVdE1URXVOU3d4TVM0MWN5MHhNUzQxTFRVdU1TMHhNUzQxTFRFeExqVmpNQzAyTGpNc05DNDBMVEV4TGpVc01URXVOQzB4TVM0MVV6ZzVMamdzTXpZdU9DdzRPUzQ0TERRekxqSjZDaUFnSUNBZ0lDQWdJRTAzTWk0ekxEUXpMakpqTUN3ekxqUXNNaXcyTGpVc05pdzJMalZ6TmkwekxqRXNOaTAyTGpWak1DMHpMak10TWk0ekxUWXVOUzAyTFRZdU5VTTNOQzR6TERNMkxqWXNOekl1TXl3ek9TNDRMRGN5TGpNc05ETXVNbm9pTHo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMHhNRFFzTlRRdU9HTXROaTQwTERBdE1URXVPQzB6TGpndE1URXVPQzB4TVM0M2N6VXVNeTB4TVM0M0xERXhMamd0TVRFdU4yTXpMakVzTUN3MUxqWXNNQzQ1TERnc015NHpiQzB6TGpVc015NDJDaUFnSUNBZ0lDQWdZeTB4TGpNdE1TNHlMVEl1T1MweExqY3ROQzQwTFRFdU4yTXRNeTQzTERBdE5pNDBMREl1TnkwMkxqUXNOaTQxWXpBc05DNHlMREl1T1N3MkxqUXNOaTR6TERZdU5HTXhMamNzTUN3ekxqVXRNQzQxTERRdU9DMHhMamhzTXk0M0xETXVOZ29nSUNBZ0lDQWdJRU14TVRBc05UTXVPU3d4TURjdU15dzFOQzQ0TERFd05DdzFOQzQ0ZWlJdlBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVEV5TlM0MUxEVTBMamhqTFRZdU5Dd3dMVEV4TGpndE15NDRMVEV4TGpndE1URXVOM00xTGpNdE1URXVOeXd4TVM0NExURXhMamRqTXk0eExEQXNOUzQyTERBdU9TdzRMRE11TTJ3dE15NDFMRE11TmdvZ0lDQWdJQ0FnSUdNdE1TNHpMVEV1TWkweUxqa3RNUzQzTFRRdU5DMHhMamRqTFRNdU55d3dMVFl1TkN3eUxqY3ROaTQwTERZdU5XTXdMRFF1TWl3eUxqa3NOaTQwTERZdU15dzJMalJqTVM0M0xEQXNNeTQxTFRBdU5TdzBMamd0TVM0NGJETXVOeXd6TGpZS0lDQWdJQ0FnSUNCRE1UTXhMalFzTlRNdU9Td3hNamd1Tnl3MU5DNDRMREV5TlM0MUxEVTBMamg2SWk4K0NpQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak56YzNOemMzSWlCa1BTSk5NVFV4TGpFc05ESXVNMk13TFRJdU9TMHhMalV0TlM0MkxUUXVOUzAxTGpaekxUUXVOeXd5TGpZdE5DNDNMRFV1Tm5ZeE1TNDRhQzAxTGpWMkxUSXlhRFV1TVd3d0xqUXNNaTQzWXpFdU1pMHlMaklzTXk0M0xUTXNOUzQ0TFRNS0lDQWdJQ0FnSUNCak1pNDJMREFzTlM0ekxERXVNU3cyTGpZc05DNHhZekl0TXk0eExEUXVOUzAwTERjdU5DMDBZell1TXl3d0xEa3VOQ3d6TGpnc09TNDBMREV3TGpWMk1URXVPV2d0TlM0MWRpMHhNbU13TFRJdU9TMHhMakl0TlM0MExUUXVNaTAxTGpSekxUUXVPQ3d5TGpZdE5DNDRMRFV1TlhZeE1TNDRhQzAxTGpVS0lDQWdJQ0FnSUNCV05ESXVNM29pTHo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMHhPREV1TXl3ME15NDJZekFzTXk0MExERXVPQ3cxTGprc05TNHpMRFV1T1dNekxqUXNNQ3cxTGpjdE1pNDRMRFV1TnkwMkxqSldNekl1TVdnMUxqUjJNakl1TVdndE5DNDViQzB3TGpRdE0yTXRNaTR6TERJdU1pMDBMalFzTXk0ekxUY3VOU3d6TGpNS0lDQWdJQ0FnSUNCakxUVXVNeXd3TFRrdU1pMDBMVGt1TWkweE1DNDRWak15TGpGb05TNDFUREU0TVM0ekxEUXpMalpNTVRneExqTXNORE11Tm5vaUx6NEtJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazB5TVRndU9DdzBNaTQyWXpBdE15NDBMVEV1T0MwMUxqa3ROUzR6TFRVdU9XTXRNeTQwTERBdE5TNDNMREl1T0MwMUxqY3NOaTR5ZGpFeExqTm9MVFV1TkZZek1pNHhhRFF1T1d3d0xqUXNNMk15TGpJdE1pNHlMRFF1TlMwekxqTXNOeTR6TFRNdU13b2dJQ0FnSUNBZ0lHTTFMaklzTUN3NUxqUXNNeTQ1TERrdU5Dd3hNQzQ0ZGpFeExqWm9MVFV1TlV3eU1UZ3VPQ3cwTWk0MlRESXhPQzQ0TERReUxqWjZJaTgrQ2lBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTnpjM056YzNJaUJrUFNKTk1qVXlMRFUwTGpKb0xUVXVNV3d0TUM0MExUTmpMVEV1Tnl3eUxqWXROQzQwTERNdU5TMDNMakVzTXk0MVl5MDJMalVzTUMweE1TNDBMVFF1TXkweE1TNDBMVEV4TGpWak1DMDNMallzTkM0NExURXhMalVzTVRFdU15MHhNUzQxQ2lBZ0lDQWdJQ0FnWXpJdU15d3dMRFlzTVM0ekxEY3VNeXd6TGpWV01qSXVPV2cxTGpWMk16RXVNMGd5TlRKNklFMHlNek11TlN3ME15NHhZekFzTXk0NExESXVPQ3cyTGpVc05pNHpMRFl1TlhNMkxqUXRNaTQxTERZdU5DMDJMalZqTUMwekxqZ3RNeTAyTGpRdE5pNDBMVFl1TkFvZ0lDQWdJQ0FnSUVNeU16WXVNaXd6Tmk0M0xESXpNeTQxTERNNUxqRXNNak16TGpVc05ETXVNWG9pTHo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMHlOVGt1TlN3eU1pNDNZekV1Tml3d0xETXVNaXd4TERNdU1pd3pMakpqTUN3eUxqRXRNUzQyTERNdU1pMHpMaklzTXk0eWN5MHpMakl0TVM0eExUTXVNaTB6TGpKRE1qVTJMak1zTWpNdU55d3lOVGN1T1N3eU1pNDNMREkxT1M0MUxESXlMamQ2Q2lBZ0lDQWdJQ0FnSUUweU5UWXVOeXcxTkM0eWFEVXVOVll6TW1ndE5TNDFWalUwTGpKNklpOCtDaUFnSUNBOGNHRjBhQ0JtYVd4c1BTSWpOemMzTnpjM0lpQmtQU0pOTWpnNUxqa3NNekl1TVhZeU1pNHhhQzAxTGpKc0xUQXVNeTB6TGpKakxURXVNeXd5TGpZdE5DNDRMRE11T1MwM0xqTXNNeTQ1WXkwMkxqVXNNQzB4TVM0ekxUUXRNVEV1TXkweE1TNDNZekF0Tnk0MkxEVXRNVEV1TlN3eE1TNDBMVEV4TGpVS0lDQWdJQ0FnSUNCak15d3dMRFV1T1N3eExqTXNOeTR4TERNdU5td3dMakl0TTJnMUxqUldNekl1TVhvZ1RUSTNNUzQwTERRekxqRmpNQ3cwTGpJc01pNDVMRFl1Tnl3MkxqWXNOaTQzWXpRdU15d3dMRFl1TlMwekxqUXNOaTQxTFRZdU4zTXRNaTR5TFRZdU55MDJMalV0Tmk0M0NpQWdJQ0FnSUNBZ1F6STNOQzR6TERNMkxqUXNNamN4TGpRc016Z3VPU3d5TnpFdU5DdzBNeTR4ZWlJdlBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVE13TUN3MU5DNHlhQzAxTGpSV01qSXVPV2cxTGpSV05UUXVNbm9pTHo0S0lDQWdJRHd2YzNablBnPT0pO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYXZhdGFyQ2lyY2xlX18yQnFpQSB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYXZhdGFyQ29udGVudFdyYXBfXzN4ZnlqIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyUjExX2F2YXRhckNvbnRlbnRfXzIyeXRqIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYXZhdGFyQ29udGVudENhcGl0YWxfXzM3ajNOIHtcXHJcXG4gIGNvbG9yOiAjYWZiOGMwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2RhZTFlNTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEsgR3JvdGVza1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfYXZhdGFySWNvbl9fM2xET1cge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vSTgwVzFRMC5wbmcpIGNlbnRlciBjZW50ZXIgLyBjb3ZlclxcclxcbiAgICBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJSMTFfZGl2dGVzdF9fMkxRSEUge1xcclxcbiAgaGVpZ2h0OiAyMDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjOTU3REFEO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvSGVhZGVyUjExLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrMkNBQSsyQztBQUNqM0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG0zQkFBbTNCO0FBQ3IzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK25CQUErbkI7QUFDam9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFB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QUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOzs7O0FBSUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix1OUtBQXU5SztFQUN2OUssb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7YUFDVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAubWFpbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1zbWFsbCk7XFxyXFxuICBib3JkZXItY29sb3I6IHJlZDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmhlYWRlckNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJISyBHcm90ZXNrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJTdHlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAxMiUpLCAwIDFweCA2cHggMCByZ2IoMCAyOSAxMjQgLyA1JSk7XFxyXFxufVxcclxcblxcclxcbi5pbm5lckhlYWRlckNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB3aWR0aDogMTQ2NHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2RWxlbWVudHNDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncm91cENvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhLIEdyb3Rlc2tcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXNDZW50ZXIge1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2aWRhZFdyYXAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmlkYWRJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pEWVhCaFh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUFrZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5DQXlORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWswNUxqY3NNVFl1TlVnekxqVjJOR2cyTGpOMkxUUklPUzQzZWlCTk9TNDNMREUxVERrdU55d3hOV013TGpnc01Dd3hMalVzTUM0M0xERXVOU3d4TGpWMk5HTXdMREF1T0Mwd0xqY3NNUzQxTFRFdU5Td3hMalZJTXk0MVF6SXVOeXd5TWl3eUxESXhMak1zTWl3eU1DNDFiREFzTUFvZ0lDQWdJQ0FnSUFsMkxUUkRNaXd4TlM0M0xESXVOeXd4TlN3ekxqVXNNVFZJT1M0M2VpSXZQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMDVMamNzTXk0MVNETXVOVll4TW1nMkxqTkRPUzQzTERFeUxEa3VOeXd6TGpVc09TNDNMRE11TlhvZ1RUa3VOeXd5VERrdU55d3lZekF1T0N3d0xERXVOU3d3TGpjc01TNDFMREV1TlZZeE1tTXdMREF1T0Mwd0xqY3NNUzQxTFRFdU5Td3hMalZJTXk0MUNpQWdJQ0FnSUNBZ0NVTXlMamNzTVRNdU5Td3lMREV5TGpnc01pd3hNbFl6TGpWRE1pd3lMamNzTWk0M0xESXNNeTQxTERKSU9TNDNlaUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazB5TUM0MUxETXVOV2d0Tmk0emRqUm9OaTR6VmpNdU5Yb2dUVEl3TGpVc01rd3lNQzQxTERKRE1qRXVNeXd5TERJeUxESXVOeXd5TWl3ekxqVnNNQ3d3ZGpSRE1qSXNPQzR6TERJeExqTXNPU3d5TUM0MUxEbHNNQ3d3YUMwMkxqTUtJQ0FnSUNBZ0lDQUpZeTB3TGpnc01DMHhMalV0TUM0M0xURXVOUzB4TGpWMkxUUmpNQzB3TGpnc01DNDNMVEV1TlN3eExqVXRNUzQxU0RJd0xqVjZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVEl3TGpVc01USm9MVFl1TTNZNExqVm9OaTR6VmpFeWVpQk5NakF1TlN3eE1DNDFZekF1T0N3d0xERXVOU3d3TGpjc01TNDFMREV1TlhZNExqVmpNQ3d3TGpndE1DNDNMREV1TlMweExqVXNNUzQxYUMwMkxqTmpMVEF1T0N3d0xURXVOUzB3TGpjdE1TNDFMVEV1TlZZeE1nb2dJQ0FnSUNBZ0lBbGpNQzB3TGpnc01DNDNMVEV1TlN3eExqVXRNUzQxU0RJd0xqVjZJaTgrQ2lBZ0lDQWdJQ0FnUEM5emRtYyspO1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW50ZXNXcmFwIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW50ZXNJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazB5TUM0eUxESXhMak5JTXk0M1l5MHdMamdzTUMweExqVXRNQzQzTFRFdU5TMHhMalZXTVRCak1DMHdMamdzTUM0M0xURXVOU3d4TGpVdE1TNDFhREUyTGpWak1DNDRMREFzTVM0MUxEQXVOeXd4TGpVc01TNDFkamt1TndvZ0lDQWdJQ0FnSUFsRE1qRXVOeXd5TUM0MUxESXhMREl4TGpJc01qQXVNaXd5TVM0elF6SXdMaklzTWpFdU1pd3lNQzR5TERJeExqSXNNakF1TWl3eU1TNHplaUJOTXk0M0xERXdkamt1TjJneE5pNDFWakV3U0RNdU4zb2lMejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak56YzNOemMzSWlCa1BTSk5NakFzTnk0eFNEUmpNQzB3TGpnc01DNDNMVEV1TlN3eExqVXRNUzQxYURFelF6RTVMak1zTlM0MkxESXdMRFl1TWl3eU1DdzNMakY2SWk4K0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJemMzTnpjM055SWdaRDBpVFRFNExEUklObU13TFRBdU9Dd3dMamN0TVM0MUxERXVOUzB4TGpWb09TNHhRekUzTGpRc01pNDFMREU0TERNdU1pd3hPQ3cwZWlJdlBnb2dJQ0FnSUNBZ0lEd3ZjM1puUGc9PSk7XFxyXFxufVxcclxcblxcclxcbi50YWxlbnRvV3JhcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnRhbGVudG9JY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazB5TVM0NUxESXdMalJzTFRVdU5TMDFMalZqTVM0eExURXVOQ3d4TGpjdE15NHhMREV1TnkwMExqbGpNQzAwTGpRdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaHpNeTQyTERnc09DdzRZekV1T0N3d0xETXVOUzB3TGpZc05DNDVMVEV1TndvZ0lDQWdJQ0FnSUFsc05TNDFMRFV1TlV3eU1TNDVMREl3TGpSNklFMHhNQ3d4Tm1NdE15NHpMREF0TmkweUxqY3ROaTAyY3pJdU55MDJMRFl0Tm5NMkxESXVOeXcyTERaVE1UTXVNeXd4Tml3eE1Dd3hObm9pTHo0S0lDQWdJQ0FnSUNBOEwzTjJaejQ9KTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25TbWFsbCB7XFxyXFxuICB3aWR0aDogMTRweDtcXHJcXG4gIGhlaWdodDogMTRweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQ0FnSUNBSklIWnBaWGRDYjNnOUlqQWdNQ0F4TkNBeE5DSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01UUWdNVFE3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6SXlNakl5TWlJZ1pEMGlUVEV4TGpVc05DNHliREF1TXl3d0xqUmpNQzR4TERBdU1Td3dMakVzTUM0eUxEQXNNQzR6VERjdU1TdzVMamhqTFRBdU1Td3dMakV0TUM0eUxEQXVNUzB3TGpNc01HTXdMREFzTUN3d0xEQXNNRXd5TGpFc05DNDRDaUFnSUNBZ0lDQWdJQ0FnSUFsakxUQXVNUzB3TGpFdE1DNHhMVEF1TWl3d0xUQXVNMnd3TGpNdE1DNDBZekF1TVMwd0xqRXNNQzR5TFRBdU1Td3dMak1zTUdNd0xEQXNNQ3d3TERBc01HdzBMakVzTkM0MFl6QXVNU3d3TGpFc01DNHlMREF1TVN3d0xqTXNNR013TERBc01Dd3dMREFzTUd3MExqRXROQzQwQ2lBZ0lDQWdJQ0FnSUNBZ0lBbERNVEV1TXl3MExqRXNNVEV1TkN3MExqRXNNVEV1TlN3MExqSkRNVEV1TlN3MExqRXNNVEV1TlN3MExqSXNNVEV1TlN3MExqSjZJaTgrQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZjM1puUGc9PSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0V3JhcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydEljb24ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMHhPUzQ1TERZdU4yd3hMamtzTUM0MWJDMHhMamNzTmk0MlF6SXdMREUwTGpVc01Ua3VOQ3d4TlN3eE9DNDNMREUxU0RjdU9HTXRNQzQzTERBdE1TNHpMVEF1TlMweExqVXRNUzR4YkMweUxUZ3VNVU0wTGpNc05TNHpMRE11T1N3MUxETXVOQ3cxU0RJS0lDQWdJQ0FnSUNBSlZqTm9NUzQwUXpRdU9Dd3pMRFlzTXk0NUxEWXVNeXcxTGpOTU9DNHlMREV6YURFd0xqRk1NVGt1T1N3MkxqZDZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVGdzTWpKakxURXVOeXd3TFRNdE1TNHpMVE10TTNNeExqTXRNeXd6TFROek15d3hMak1zTXl3elV6a3VOeXd5TWl3NExESXllaUJOT0N3eU1HTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1YTXRNU3d3TGpRdE1Td3hDaUFnSUNBZ0lDQWdDVk0zTGpRc01qQXNPQ3d5TUhvaUx6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTnpjM056YzNJaUJrUFNKTk1UZ3NNakpqTFRFdU55d3dMVE10TVM0ekxUTXRNM014TGpNdE15d3pMVE56TXl3eExqTXNNeXd6VXpFNUxqY3NNaklzTVRnc01qSjZJRTB4T0N3eU1HTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1YTXRNU3d3TGpRdE1Td3hDaUFnSUNBZ0lDQWdDVk14Tnk0MExESXdMREU0TERJd2VpSXZQZ29nSUNBZ0lDQWdJRHd2YzNablBnPT0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydEljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lBa2dkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOQ0F5TkRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU1qSXlNaklpSUdROUlrMHhPUzQ1TERZdU4yd3hMamtzTUM0MWJDMHhMamNzTmk0MlF6SXdMREUwTGpVc01Ua3VOQ3d4TlN3eE9DNDNMREUxU0RjdU9HTXRNQzQzTERBdE1TNHpMVEF1TlMweExqVXRNUzR4YkMweUxUZ3VNVU0wTGpNc05TNHpMRE11T1N3MUxETXVOQ3cxU0RJS0lDQWdJQ0FnSUNBSlZqTm9NUzQwUXpRdU9Dd3pMRFlzTXk0NUxEWXVNeXcxTGpOTU9DNHlMREV6YURFd0xqRk1NVGt1T1N3MkxqZDZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6SXlNakl5TWlJZ1pEMGlUVGdzTWpKakxURXVOeXd3TFRNdE1TNHpMVE10TTNNeExqTXRNeXd6TFROek15d3hMak1zTXl3elV6a3VOeXd5TWl3NExESXllaUJOT0N3eU1HTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1YTXRNU3d3TGpRdE1Td3hDaUFnSUNBZ0lDQWdDVk0zTGpRc01qQXNPQ3d5TUhvaUx6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTWpJeU1qSXlJaUJrUFNKTk1UZ3NNakpqTFRFdU55d3dMVE10TVM0ekxUTXRNM014TGpNdE15d3pMVE56TXl3eExqTXNNeXd6VXpFNUxqY3NNaklzTVRnc01qSjZJRTB4T0N3eU1HTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1YTXRNU3d3TGpRdE1Td3hDaUFnSUNBZ0lDQWdDVk14Tnk0MExESXdMREU0TERJd2VpSXZQZ29nSUNBZ0lDQWdJRHd2YzNablBnPT0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZXNXcmFwIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZXNCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZXNJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTNOemMzTnpjaUlHUTlJazA1TGpnc01qSXVNV010TUM0eUxEQXVNaTB3TGpRc01DNHlMVEF1Tml3d0xqSmpMVEF1TkN3d0xUQXVOeTB3TGpRdE1DNDNMVEF1T0d3dE1DNHhMVEl1Tm1Nd0xUQXVOUzB3TGpRdE1DNDVMVEF1T1Mwd0xqa0tJQ0FnSUNBZ0lDQUpZeTB6TERBdE5TNDFMVEl1TlMwMUxqVXROUzQxVmpndU0yTXdMVE11TXl3eUxqY3ROaXcyTFRab09HTXpMak1zTUN3MkxESXVOeXcyTERaMk15NDJZekFzTXk0ekxUSXVOeXcyTFRZc05tZ3RNaTR5WXkwd0xqTXNNQzB3TGpZc01DNHhMVEF1T0N3d0xqTk1PUzQ0TERJeUxqRjZDaUFnSUNBZ0lDQWdDU0JOTVRBdU5Dd3hPQzR6YkRFdU1TMHhMak5qTUM0MkxUQXVOeXd4TGpRdE1Td3lMak10TVVneE5tTXlMaklzTUN3MExURXVPQ3cwTFRSV09DNHpZekF0TWk0eUxURXVPQzAwTFRRdE5FZzRZeTB5TGpJc01DMDBMREV1T0MwMExEUjJOQzR4WXpBc01TNDVMREV1Tml3ekxqVXNNeTQxTERNdU5Rb2dJQ0FnSUNBZ0lBbERPQzQ1TERFMUxqa3NNVEF1TVN3eE5pNDVMREV3TGpRc01UZ3VNM29pTHo0S0lDQWdJQ0FnSUNBOEwzTjJaejQ9KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2VzSWNvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUFrZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5DQXlORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15TWpJeU1qSWlJR1E5SWswNUxqZ3NNakl1TVdNdE1DNHlMREF1TWkwd0xqUXNNQzR5TFRBdU5pd3dMakpqTFRBdU5Dd3dMVEF1Tnkwd0xqUXRNQzQzTFRBdU9Hd3RNQzR4TFRJdU5tTXdMVEF1TlMwd0xqUXRNQzQ1TFRBdU9TMHdMamtLSUNBZ0lDQWdJQ0FKWXkwekxEQXROUzQxTFRJdU5TMDFMalV0TlM0MVZqZ3VNMk13TFRNdU15d3lMamN0Tml3MkxUWm9PR016TGpNc01DdzJMREl1Tnl3MkxEWjJNeTQyWXpBc015NHpMVEl1Tnl3MkxUWXNObWd0TWk0eVl5MHdMak1zTUMwd0xqWXNNQzR4TFRBdU9Dd3dMak5NT1M0NExESXlMakY2Q2lBZ0lDQWdJQ0FnQ1NCTk1UQXVOQ3d4T0M0emJERXVNUzB4TGpOak1DNDJMVEF1Tnl3eExqUXRNU3d5TGpNdE1VZ3hObU15TGpJc01DdzBMVEV1T0N3MExUUldPQzR6WXpBdE1pNHlMVEV1T0MwMExUUXRORWc0WXkweUxqSXNNQzAwTERFdU9DMDBMRFIyTkM0eFl6QXNNUzQ1TERFdU5pd3pMalVzTXk0MUxETXVOUW9nSUNBZ0lDQWdJQWxET0M0NUxERTFMamtzTVRBdU1Td3hOaTQ1TERFd0xqUXNNVGd1TTNvaUx6NEtJQ0FnSUNBZ0lDQThMM04yWno0PSk7XFxyXFxufVxcclxcblxcclxcbi5hY2NvdW50V3JhcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkRyb3BEb3duRGVmYXVsdCB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Ecm9wRG93blRleHQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uRHJvcERvd25GbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kcm9wRG93bkljb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lDQWdJQ0FKSUhacFpYZENiM2c5SWpBZ01DQXhOQ0F4TkNJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTVRRZ01UUTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1ptbHNiRDBpSXpJeU1qSXlNaUlnWkQwaVRURXhMalVzTkM0eWJEQXVNeXd3TGpSak1DNHhMREF1TVN3d0xqRXNNQzR5TERBc01DNHpURGN1TVN3NUxqaGpMVEF1TVN3d0xqRXRNQzR5TERBdU1TMHdMak1zTUdNd0xEQXNNQ3d3TERBc01Fd3lMakVzTkM0NENpQWdJQ0FnSUNBZ0lDQWdJQWxqTFRBdU1TMHdMakV0TUM0eExUQXVNaXd3TFRBdU0yd3dMak10TUM0MFl6QXVNUzB3TGpFc01DNHlMVEF1TVN3d0xqTXNNR013TERBc01Dd3dMREFzTUd3MExqRXNOQzQwWXpBdU1Td3dMakVzTUM0eUxEQXVNU3d3TGpNc01HTXdMREFzTUN3d0xEQXNNR3cwTGpFdE5DNDBDaUFnSUNBZ0lDQWdJQ0FnSUFsRE1URXVNeXcwTGpFc01URXVOQ3cwTGpFc01URXVOU3cwTGpKRE1URXVOU3cwTGpFc01URXVOU3cwTGpJc01URXVOU3cwTGpKNklpOCtDaUFnSUNBZ0lDQWdJQ0FnSUR3dmMzWm5QZz09KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RBY2NvdW50RGl2IHtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY291bnRDYXJkQWN0aXZlIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcXHJcXG4gIG1hcmdpbjogMTZweCAwcHggMHB4IC00NnB4O1xcclxcbiAgcGFkZGluZzogMHB4IDBweCA0NnB4IDQ2cHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLCBtYXJnaW4tdG9wIDAuOHM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY291bnRDYXJkRGlzYWJsZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAtMTZweDtcXHJcXG4gIHBhZGRpbmc6IDBweCAwcHggNDZweCAxNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgbWFyZ2luLXRvcCAwLjVzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3VudENhcmQge1xcclxcbiAgei1pbmRleDogNDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA5cHggLTVweCByZ2IoMCAwIDAgLyAxMiUpLFxcclxcbiAgICAwIDEwcHggMzJweCAwIHJnYigwIDI5IDEyNCAvIDEyJSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBib3gtc2hhZG93LCAwLjNzIHRyYW5zZm9ybTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHJpZ2h0OiAxMnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4IDhweCAxNnB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmdhbml6YXRpb25DYXJkIHtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDEycHggOXB4IC01cHggcmdiKDAgMCAwIC8gMTIlKSwgMCAxMHB4IDMycHggMCByZ2IoMCAyOSAxMjQgLyAxMiUpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgYm94LXNoYWRvdywgMC4zcyB0cmFuc2Zvcm07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICByaWdodDogMTJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweCA4cHggMTZweCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlcGFyYXRvciB7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZJY29uIHtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkljb246aG92ZXIgLm5hdkljb25UZXh0IHtcXHJcXG4gIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZJY29uOmhvdmVyIC5hY3RpdmlkYWRJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pEWVhCaFh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUFrZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5DQXlORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15TWpJeU1qSWlJR1E5SWswNUxqY3NNVFl1TlVnekxqVjJOR2cyTGpOMkxUUklPUzQzZWlCTk9TNDNMREUxVERrdU55d3hOV013TGpnc01Dd3hMalVzTUM0M0xERXVOU3d4TGpWMk5HTXdMREF1T0Mwd0xqY3NNUzQxTFRFdU5Td3hMalZJTXk0MVF6SXVOeXd5TWl3eUxESXhMak1zTWl3eU1DNDFiREFzTUFvZ0lDQWdJQ0FnSUFsMkxUUkRNaXd4TlM0M0xESXVOeXd4TlN3ekxqVXNNVFZJT1M0M2VpSXZQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU1qSXlNaklpSUdROUlrMDVMamNzTXk0MVNETXVOVll4TW1nMkxqTkRPUzQzTERFeUxEa3VOeXd6TGpVc09TNDNMRE11TlhvZ1RUa3VOeXd5VERrdU55d3lZekF1T0N3d0xERXVOU3d3TGpjc01TNDFMREV1TlZZeE1tTXdMREF1T0Mwd0xqY3NNUzQxTFRFdU5Td3hMalZJTXk0MUNpQWdJQ0FnSUNBZ0NVTXlMamNzTVRNdU5Td3lMREV5TGpnc01pd3hNbFl6TGpWRE1pd3lMamNzTWk0M0xESXNNeTQxTERKSU9TNDNlaUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTXlNakl5TWpJaUlHUTlJazB5TUM0MUxETXVOV2d0Tmk0emRqUm9OaTR6VmpNdU5Yb2dUVEl3TGpVc01rd3lNQzQxTERKRE1qRXVNeXd5TERJeUxESXVOeXd5TWl3ekxqVnNNQ3d3ZGpSRE1qSXNPQzR6TERJeExqTXNPU3d5TUM0MUxEbHNNQ3d3YUMwMkxqTUtJQ0FnSUNBZ0lDQUpZeTB3TGpnc01DMHhMalV0TUM0M0xURXVOUzB4TGpWMkxUUmpNQzB3TGpnc01DNDNMVEV1TlN3eExqVXRNUzQxU0RJd0xqVjZJaTgrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6SXlNakl5TWlJZ1pEMGlUVEl3TGpVc01USm9MVFl1TTNZNExqVm9OaTR6VmpFeWVpQk5NakF1TlN3eE1DNDFZekF1T0N3d0xERXVOU3d3TGpjc01TNDFMREV1TlhZNExqVmpNQ3d3TGpndE1DNDNMREV1TlMweExqVXNNUzQxYUMwMkxqTmpMVEF1T0N3d0xURXVOUzB3TGpjdE1TNDFMVEV1TlZZeE1nb2dJQ0FnSUNBZ0lBbGpNQzB3TGpnc01DNDNMVEV1TlN3eExqVXRNUzQxU0RJd0xqVjZJaTgrQ2lBZ0lDQWdJQ0FnUEM5emRtYyspO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2SWNvbjpob3ZlciAudmFjYW50ZXNJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29nSUNBZ0lDQWdJQWtnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkNBeU5Ec2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTXlNakl5TWpJaUlHUTlJazB5TUM0eUxESXhMak5JTXk0M1l5MHdMamdzTUMweExqVXRNQzQzTFRFdU5TMHhMalZXTVRCak1DMHdMamdzTUM0M0xURXVOU3d4TGpVdE1TNDFhREUyTGpWak1DNDRMREFzTVM0MUxEQXVOeXd4TGpVc01TNDFkamt1TndvZ0lDQWdJQ0FnSUFsRE1qRXVOeXd5TUM0MUxESXhMREl4TGpJc01qQXVNaXd5TVM0elF6SXdMaklzTWpFdU1pd3lNQzR5TERJeExqSXNNakF1TWl3eU1TNHplaUJOTXk0M0xERXdkamt1TjJneE5pNDFWakV3U0RNdU4zb2lMejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak1qSXlNakl5SWlCa1BTSk5NakFzTnk0eFNEUmpNQzB3TGpnc01DNDNMVEV1TlN3eExqVXRNUzQxYURFelF6RTVMak1zTlM0MkxESXdMRFl1TWl3eU1DdzNMakY2SWk4K0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWm1sc2JEMGlJekl5TWpJeU1pSWdaRDBpVFRFNExEUklObU13TFRBdU9Dd3dMamN0TVM0MUxERXVOUzB4TGpWb09TNHhRekUzTGpRc01pNDFMREU0TERNdU1pd3hPQ3cwZWlJdlBnb2dJQ0FnSUNBZ0lEd3ZjM1puUGc9PSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZJY29uOmhvdmVyIC50YWxlbnRvSWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvZ0lDQWdJQ0FnSUFrZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5DQXlORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15TWpJeU1qSWlJR1E5SWsweU1TNDVMREl3TGpSc0xUVXVOUzAxTGpWak1TNHhMVEV1TkN3eExqY3RNeTR4TERFdU55MDBMamxqTUMwMExqUXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGh6TXk0MkxEZ3NPQ3c0WXpFdU9Dd3dMRE11TlMwd0xqWXNOQzQ1TFRFdU53b2dJQ0FnSUNBZ0lBbHNOUzQxTERVdU5Vd3lNUzQ1TERJd0xqUjZJRTB4TUN3eE5tTXRNeTR6TERBdE5pMHlMamN0TmkwMmN6SXVOeTAyTERZdE5uTTJMREl1Tnl3MkxEWlRNVE11TXl3eE5pd3hNQ3d4Tm5vaUx6NEtJQ0FnSUNBZ0lDQThMM04yWno0PSk7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Qm94IHtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0SGlnaEVtcGhhc2lzIHtcXHJcXG4gIGNvbG9yOiAjMjIyMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dFN1YkhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7IFxcclxcbn1cXHJcXG5cXHJcXG4udGV4dE5vRW1waGFzaXMge1xcclxcbiAgY29sb3I6ICM3Nzc3Nzc7XFxyXFxufVxcclxcblxcclxcbi50ZXh0Tm9FbXBoYXNpczpob3ZlciB7XFxyXFxuICBjb2xvcjogIzIyMjIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRNaWNybyB7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRTdGFuZGFyZCB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJISyBHcm90ZXNrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRDZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dFdoaXRlIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dFN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dFNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxvZ091dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICNmMTM0NjU7XFxyXFxufVxcclxcblxcclxcbi5tZW51Qm90dG9tVGlueSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRTZWNvbmRhcnkge1xcclxcbiAgY29sb3I6ICNmMTM0NjU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJMYWJlbENvdW50U2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckxhYmVsQ291bnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNnB4O1xcclxcbiAgbGVmdDogMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZDogI2YxMzQ2NTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxuICBtYXgtd2lkdGg6IDE2cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5uYXZJY29uVGV4dCB7XFxyXFxuICBjb2xvcjogIzc3Nzc3NztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZJY29uVGV4dDpmb2N1cyxcXHJcXG4ubmF2SWNvblRleHQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZJdGVtTGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvQ29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb2dJQ0FnSUNBZ0lDQjJhV1YzUW05NFBTSXdJREFnTXpBd0lEY3dJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXpNREFnTnpBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWswME9Td3lNeTQ1YkRjdU5pMHhMalJqTUN3d0xERXVOUzB3TGpJc015NHpMVEV1Tkd3MkxUUXVObU13TERBc01DNDVMVEV0TVM0eExURXVNbXd0T0M0NUxUQXVOV013TERBdE1DNDJMREF0TUM0M0xEQXVOMk13TERBc01DNHlMREV1TVMweExESXVNZ29nSUNBZ0lDQWdJR3d0TlM0NUxEVXVPVU0wT0M0eUxESXpMamNzTkRndU1Td3lOQ3cwT1N3eU15NDVlaUl2UGdvZ0lDQWdQSEJoZEdnZ1ptbHNiRDBpSXpjM056YzNOeUlnWkQwaVRUUTBMaklzTVRrdU1Xd3hMalF0Tnk0Mll6QXNNQ3d3TGpJdE1TNDFMREV1TkMwekxqTnNOQzQyTFRaak1Dd3dMREV0TUM0NUxERXVNaXd4TGpGc01DNDFMRGd1T1dNd0xEQXNNQ3d3TGpZdE1DNDNMREF1TjJNd0xEQXRNUzR4TFRBdU1pMHlMaklzTVFvZ0lDQWdJQ0FnSUd3dE5pdzFMamxETkRRdU5Dd3hPUzQ1TERRMExqRXNNakFzTkRRdU1pd3hPUzR4ZWlJdlBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUl6YzNOemMzTnlJZ1pEMGlUVFE1TGpNc01qTXVNV010TUM0eExUQXVNUzB3TGpJdE1DNHlMVEF1TXkwd0xqTnNMVEF1Tnl3d0xqZHNNQ3d3VERRMkxESTFMamhqTFRBdU15d3dMak10TUM0MExEQXVPUzB3TGpFc01TNHlZek11TlN3MExqY3NOUzR5TERFd0xqa3NOQ3d4Tnk0MENpQWdJQ0FnSUNBZ1l5MHhMamNzT1M0MkxUa3VOU3d4Tnk0eExURTVMak1zTVRndU5FTXhOaXcyTkM0M0xETXVOaXcxTWk0MUxEVXVNU3d6Tnk0NVl6RXRPUzQxTERrdU55MHhPQzQxTERFNUxqRXRNVGt1T1dNMkxqTXRNQzQ1TERFeUxqSXNNQzQzTERFMkxqZ3NOQzR4Q2lBZ0lDQWdJQ0FnWXpBdU5Dd3dMak1zTUM0NUxEQXVNaXd4TGpNdE1DNHhiRE10TTJ3d0xEQmpMVEF1TVMwd0xqRXRNQzR6TFRBdU1pMHdMalF0TUM0ell5MDFMamt0TkM0M0xURXpMamN0TnkweU1pNHhMVFV1TldNdE1URXVNeXd5TFRJd0xqTXNNVEF1T1MweU1pNHpMREl5TGpJS0lDQWdJQ0FnSUNCakxUTXVOQ3d4T1M0eExERXpMakVzTXpVdU5Td3pNaTR5TERNeUxqSmpNVEV1TXkweUxESXdMak10TVRFc01qSXVNaTB5TWk0elF6VTJMalFzTXpZdU9TdzFOQ3d5T1N3ME9TNHpMREl6TGpGNklpOCtDaUFnSUNBOGNHRjBhQ0JtYVd4c1BTSWpOemMzTnpjM0lpQmtQU0pOTkRFdU1Td3pNQzQzVERNNExqZ3NNek5qTFRBdU15d3dMak10TUM0MExEQXVOeTB3TGpFc01TNHhZekV1TWl3eUxERXVPQ3cwTGpRc01TNDNMRGRqTFRBdU15dzJMak10TlM0ekxERXhMalV0TVRFdU5pd3hNZ29nSUNBZ0lDQWdJR010Tnk0NUxEQXVOeTB4TkM0MkxUVXVPUzB4TXk0NUxURXpMamhETVRVdU5pd3pNeXd5TUM0M0xESTRMREkzTERJM0xqZGpNaTQxTFRBdU1TdzBMamtzTUM0MUxEY3NNUzQzWXpBdU5Dd3dMaklzTUM0NExEQXVNU3d4TGpFdE1DNHhiREl1TXkweUxqTUtJQ0FnSUNBZ0lDQmpNQzQwTFRBdU5Dd3dMalF0TVM0eUxUQXVNaTB4TGpWakxUTXRNUzQ1TFRZdU5TMHlMamt0TVRBdU15MHlMamRqTFRrdU5Dd3dMak10TVRZdU9TdzRMakV0TVRjc01UY3VOV010TUM0eExEa3VPQ3c0TERFM0xqZ3NNVGN1T0N3eE55NDRZemt1TkN3d0xERTNMakl0Tnk0MUxERTNMamN0TVRZdU9Rb2dJQ0FnSUNBZ0lHTXdMakl0TXk0NExUQXVPUzAzTGpRdE1pNDRMVEV3TGpSRE5ESXVNeXd6TUM0ekxEUXhMallzTXpBdU1pdzBNUzR4TERNd0xqZDZJaTgrQ2lBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTnpjM056YzNJaUJrUFNKTk16UXNNemN1Tld3dE1pNDVMREV1TTJNdE1DNDBMREF1TWkwd0xqWXNNQzQyTFRBdU5pd3hMakZqTUM0eExEQXVOQ3d3TGpFc01DNDRMREFzTVM0eVl5MHdMak1zTVM0eUxURXVNaXd5TGpFdE1pNDBMREl1TXdvZ0lDQWdJQ0FnSUdNdE1pd3dMak10TXk0NExURXVOQzB6TGpRdE15NDBZekF1TWkweExqSXNNUzR4TFRJdU1Td3lMak10TWk0MFl6QXVOQzB3TGpFc01DNDRMVEF1TVN3eExqSXNNR013TGpRc01DNHhMREF1T1Mwd0xqRXNNUzB3TGpWc01TNHpMVEl1T1dNd0xqSXRNQzQxTERBdE1TNHhMVEF1TmkweExqTUtJQ0FnSUNBZ0lDQmpMVEV1TWkwd0xqUXRNaTQwTFRBdU5TMHpMamN0TUM0eVl5MHpMalFzTUM0MkxUWXVNU3d6TGpRdE5pNDFMRFl1T1dNdE1DNDJMRFF1T1N3ekxqTXNPU3c0TGpFc09DNDVZelF0TUM0eExEY3VOQzB6TGpNc055NDNMVGN1TTJNd0xqRXRNUzR4TERBdE1pNHhMVEF1TXkwekNpQWdJQ0FnSUNBZ1F6TTFMakVzTXpjdU5Td3pOQzQxTERNM0xqTXNNelFzTXpjdU5Yb2lMejRLSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWswNE9TNDRMRFF6TGpKak1DdzJMalF0TkM0MExERXhMalV0TVRFdU5Td3hNUzQxY3kweE1TNDFMVFV1TVMweE1TNDFMVEV4TGpWak1DMDJMak1zTkM0MExURXhMalVzTVRFdU5DMHhNUzQxVXpnNUxqZ3NNell1T0N3NE9TNDRMRFF6TGpKNkNpQWdJQ0FnSUNBZ0lFMDNNaTR6TERRekxqSmpNQ3d6TGpRc01pdzJMalVzTml3MkxqVnpOaTB6TGpFc05pMDJMalZqTUMwekxqTXRNaTR6TFRZdU5TMDJMVFl1TlVNM05DNHpMRE0yTGpZc056SXVNeXd6T1M0NExEY3lMak1zTkRNdU1ub2lMejRLSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWsweE1EUXNOVFF1T0dNdE5pNDBMREF0TVRFdU9DMHpMamd0TVRFdU9DMHhNUzQzY3pVdU15MHhNUzQzTERFeExqZ3RNVEV1TjJNekxqRXNNQ3cxTGpZc01DNDVMRGdzTXk0emJDMHpMalVzTXk0MkNpQWdJQ0FnSUNBZ1l5MHhMak10TVM0eUxUSXVPUzB4TGpjdE5DNDBMVEV1TjJNdE15NDNMREF0Tmk0MExESXVOeTAyTGpRc05pNDFZekFzTkM0eUxESXVPU3cyTGpRc05pNHpMRFl1TkdNeExqY3NNQ3d6TGpVdE1DNDFMRFF1T0MweExqaHNNeTQzTERNdU5nb2dJQ0FnSUNBZ0lFTXhNVEFzTlRNdU9Td3hNRGN1TXl3MU5DNDRMREV3TkN3MU5DNDRlaUl2UGdvZ0lDQWdQSEJoZEdnZ1ptbHNiRDBpSXpjM056YzNOeUlnWkQwaVRURXlOUzQxTERVMExqaGpMVFl1TkN3d0xURXhMamd0TXk0NExURXhMamd0TVRFdU4zTTFMak10TVRFdU55d3hNUzQ0TFRFeExqZGpNeTR4TERBc05TNDJMREF1T1N3NExETXVNMnd0TXk0MUxETXVOZ29nSUNBZ0lDQWdJR010TVM0ekxURXVNaTB5TGprdE1TNDNMVFF1TkMweExqZGpMVE11Tnl3d0xUWXVOQ3d5TGpjdE5pNDBMRFl1TldNd0xEUXVNaXd5TGprc05pNDBMRFl1TXl3MkxqUmpNUzQzTERBc015NDFMVEF1TlN3MExqZ3RNUzQ0YkRNdU55d3pMallLSUNBZ0lDQWdJQ0JETVRNeExqUXNOVE11T1N3eE1qZ3VOeXcxTkM0NExERXlOUzQxTERVMExqaDZJaTgrQ2lBZ0lDQThjR0YwYUNCbWFXeHNQU0lqTnpjM056YzNJaUJrUFNKTk1UVXhMakVzTkRJdU0yTXdMVEl1T1MweExqVXROUzQyTFRRdU5TMDFMalp6TFRRdU55d3lMall0TkM0M0xEVXVObll4TVM0NGFDMDFMalYyTFRJeWFEVXVNV3d3TGpRc01pNDNZekV1TWkweUxqSXNNeTQzTFRNc05TNDRMVE1LSUNBZ0lDQWdJQ0JqTWk0MkxEQXNOUzR6TERFdU1TdzJMallzTkM0eFl6SXRNeTR4TERRdU5TMDBMRGN1TkMwMFl6WXVNeXd3TERrdU5Dd3pMamdzT1M0MExERXdMalYyTVRFdU9XZ3ROUzQxZGkweE1tTXdMVEl1T1MweExqSXROUzQwTFRRdU1pMDFMalJ6TFRRdU9Dd3lMall0TkM0NExEVXVOWFl4TVM0NGFDMDFMalVLSUNBZ0lDQWdJQ0JXTkRJdU0zb2lMejRLSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWsweE9ERXVNeXcwTXk0Mll6QXNNeTQwTERFdU9DdzFMamtzTlM0ekxEVXVPV016TGpRc01DdzFMamN0TWk0NExEVXVOeTAyTGpKV016SXVNV2cxTGpSMk1qSXVNV2d0TkM0NWJDMHdMalF0TTJNdE1pNHpMREl1TWkwMExqUXNNeTR6TFRjdU5Td3pMak1LSUNBZ0lDQWdJQ0JqTFRVdU15d3dMVGt1TWkwMExUa3VNaTB4TUM0NFZqTXlMakZvTlM0MVRERTRNUzR6TERRekxqWk1NVGd4TGpNc05ETXVObm9pTHo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNM056YzNOemNpSUdROUlrMHlNVGd1T0N3ME1pNDJZekF0TXk0MExURXVPQzAxTGprdE5TNHpMVFV1T1dNdE15NDBMREF0TlM0M0xESXVPQzAxTGpjc05pNHlkakV4TGpOb0xUVXVORll6TWk0eGFEUXVPV3d3TGpRc00yTXlMakl0TWk0eUxEUXVOUzB6TGpNc055NHpMVE11TXdvZ0lDQWdJQ0FnSUdNMUxqSXNNQ3c1TGpRc015NDVMRGt1TkN3eE1DNDRkakV4TGpab0xUVXVOVXd5TVRndU9DdzBNaTQyVERJeE9DNDRMRFF5TGpaNklpOCtDaUFnSUNBOGNHRjBhQ0JtYVd4c1BTSWpOemMzTnpjM0lpQmtQU0pOTWpVeUxEVTBMakpvTFRVdU1Xd3RNQzQwTFROakxURXVOeXd5TGpZdE5DNDBMRE11TlMwM0xqRXNNeTQxWXkwMkxqVXNNQzB4TVM0MExUUXVNeTB4TVM0MExURXhMalZqTUMwM0xqWXNOQzQ0TFRFeExqVXNNVEV1TXkweE1TNDFDaUFnSUNBZ0lDQWdZekl1TXl3d0xEWXNNUzR6TERjdU15d3pMalZXTWpJdU9XZzFMalYyTXpFdU0wZ3lOVEo2SUUweU16TXVOU3cwTXk0eFl6QXNNeTQ0TERJdU9DdzJMalVzTmk0ekxEWXVOWE0yTGpRdE1pNDFMRFl1TkMwMkxqVmpNQzB6TGpndE15MDJMalF0Tmk0MExUWXVOQW9nSUNBZ0lDQWdJRU15TXpZdU1pd3pOaTQzTERJek15NDFMRE01TGpFc01qTXpMalVzTkRNdU1Yb2lMejRLSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0zTnpjM056Y2lJR1E5SWsweU5Ua3VOU3d5TWk0M1l6RXVOaXd3TERNdU1pd3hMRE11TWl3ekxqSmpNQ3d5TGpFdE1TNDJMRE11TWkwekxqSXNNeTR5Y3kwekxqSXRNUzR4TFRNdU1pMHpMakpETWpVMkxqTXNNak11Tnl3eU5UY3VPU3d5TWk0M0xESTFPUzQxTERJeUxqZDZDaUFnSUNBZ0lDQWdJRTB5TlRZdU55dzFOQzR5YURVdU5WWXpNbWd0TlM0MVZqVTBMako2SWk4K0NpQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak56YzNOemMzSWlCa1BTSk5Namc1TGprc016SXVNWFl5TWk0eGFDMDFMakpzTFRBdU15MHpMakpqTFRFdU15d3lMall0TkM0NExETXVPUzAzTGpNc015NDVZeTAyTGpVc01DMHhNUzR6TFRRdE1URXVNeTB4TVM0M1l6QXROeTQyTERVdE1URXVOU3d4TVM0MExURXhMalVLSUNBZ0lDQWdJQ0JqTXl3d0xEVXVPU3d4TGpNc055NHhMRE11Tm13d0xqSXRNMmcxTGpSV016SXVNWG9nVFRJM01TNDBMRFF6TGpGak1DdzBMaklzTWk0NUxEWXVOeXcyTGpZc05pNDNZelF1TXl3d0xEWXVOUzB6TGpRc05pNDFMVFl1TjNNdE1pNHlMVFl1TnkwMkxqVXROaTQzQ2lBZ0lDQWdJQ0FnUXpJM05DNHpMRE0yTGpRc01qY3hMalFzTXpndU9Td3lOekV1TkN3ME15NHhlaUl2UGdvZ0lDQWdQSEJoZEdnZ1ptbHNiRDBpSXpjM056YzNOeUlnWkQwaVRUTXdNQ3cxTkM0eWFDMDFMalJXTWpJdU9XZzFMalJXTlRRdU1ub2lMejRLSUNBZ0lEd3ZjM1puUGc9PSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmF2YXRhckNpcmNsZSB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hdmF0YXJDb250ZW50V3JhcCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmF2YXRhckNvbnRlbnQge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF2YXRhckNvbnRlbnRDYXBpdGFsIHtcXHJcXG4gIGNvbG9yOiAjYWZiOGMwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2RhZTFlNTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEsgR3JvdGVza1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5hdmF0YXJJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaW1ndXIuY29tL0k4MFcxUTAucG5nKSBjZW50ZXIgY2VudGVyIC8gY292ZXJcXHJcXG4gICAgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2dGVzdCB7XFxyXFxuICBoZWlnaHQ6IDIwMDBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICM5NTdEQUQ7XFxyXFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyQ29udGFpbmVyXCI6IFwiSGVhZGVyUjExX2hlYWRlckNvbnRhaW5lcl9fMmhOci1cIixcblx0XCJoZWFkZXJTdHlsZVwiOiBcIkhlYWRlclIxMV9oZWFkZXJTdHlsZV9fMUxoLUZcIixcblx0XCJpbm5lckhlYWRlckNvbnRhaW5lclwiOiBcIkhlYWRlclIxMV9pbm5lckhlYWRlckNvbnRhaW5lcl9fMmM4a2tcIixcblx0XCJuYXZFbGVtZW50c0NvbnRhaW5lclwiOiBcIkhlYWRlclIxMV9uYXZFbGVtZW50c0NvbnRhaW5lcl9fMi14RldcIixcblx0XCJncm91cENvbnRhaW5lclwiOiBcIkhlYWRlclIxMV9ncm91cENvbnRhaW5lcl9fMUU5UzVcIixcblx0XCJpdGVtc0NlbnRlclwiOiBcIkhlYWRlclIxMV9pdGVtc0NlbnRlcl9fM3FwdGRcIixcblx0XCJhY3RpdmlkYWRXcmFwXCI6IFwiSGVhZGVyUjExX2FjdGl2aWRhZFdyYXBfXzFQVzFFXCIsXG5cdFwiYWN0aXZpZGFkSWNvblwiOiBcIkhlYWRlclIxMV9hY3RpdmlkYWRJY29uX18zRzduclwiLFxuXHRcInZhY2FudGVzV3JhcFwiOiBcIkhlYWRlclIxMV92YWNhbnRlc1dyYXBfX0xkZEJkXCIsXG5cdFwidmFjYW50ZXNJY29uXCI6IFwiSGVhZGVyUjExX3ZhY2FudGVzSWNvbl9fMTBfS3lcIixcblx0XCJ0YWxlbnRvV3JhcFwiOiBcIkhlYWRlclIxMV90YWxlbnRvV3JhcF9fMWtma3JcIixcblx0XCJ0YWxlbnRvSWNvblwiOiBcIkhlYWRlclIxMV90YWxlbnRvSWNvbl9fM1JHQ0JcIixcblx0XCJpY29uXCI6IFwiSGVhZGVyUjExX2ljb25fX01ta0NiXCIsXG5cdFwiaWNvblNtYWxsXCI6IFwiSGVhZGVyUjExX2ljb25TbWFsbF9fM1RESXBcIixcblx0XCJjYXJ0V3JhcFwiOiBcIkhlYWRlclIxMV9jYXJ0V3JhcF9fM0xrSWxcIixcblx0XCJjYXJ0QnV0dG9uXCI6IFwiSGVhZGVyUjExX2NhcnRCdXR0b25fX2JWSkZyXCIsXG5cdFwiY2FydEljb25cIjogXCJIZWFkZXJSMTFfY2FydEljb25fXzF2MnJyXCIsXG5cdFwibWVzc2FnZXNXcmFwXCI6IFwiSGVhZGVyUjExX21lc3NhZ2VzV3JhcF9fM19WV3dcIixcblx0XCJtZXNzYWdlc0J1dHRvblwiOiBcIkhlYWRlclIxMV9tZXNzYWdlc0J1dHRvbl9fMUxnLXZcIixcblx0XCJtZXNzYWdlc0ljb25cIjogXCJIZWFkZXJSMTFfbWVzc2FnZXNJY29uX18yVk9tYVwiLFxuXHRcImFjY291bnRXcmFwXCI6IFwiSGVhZGVyUjExX2FjY291bnRXcmFwX18yS0pudVwiLFxuXHRcImJ1dHRvbkRyb3BEb3duRGVmYXVsdFwiOiBcIkhlYWRlclIxMV9idXR0b25Ecm9wRG93bkRlZmF1bHRfXzI2cWJYXCIsXG5cdFwiYnV0dG9uRHJvcERvd25UZXh0XCI6IFwiSGVhZGVyUjExX2J1dHRvbkRyb3BEb3duVGV4dF9fMldBcDRcIixcblx0XCJidXR0b25Ecm9wRG93bkZsZXhcIjogXCJIZWFkZXJSMTFfYnV0dG9uRHJvcERvd25GbGV4X18zb09iYlwiLFxuXHRcImRyb3BEb3duSWNvblwiOiBcIkhlYWRlclIxMV9kcm9wRG93bkljb25fXzJDUkZrXCIsXG5cdFwidGVzdEFjY291bnREaXZcIjogXCJIZWFkZXJSMTFfdGVzdEFjY291bnREaXZfX0FpbmUzXCIsXG5cdFwiYWNjb3VudENhcmRBY3RpdmVcIjogXCJIZWFkZXJSMTFfYWNjb3VudENhcmRBY3RpdmVfXzN0OFZCXCIsXG5cdFwiYWNjb3VudENhcmREaXNhYmxlXCI6IFwiSGVhZGVyUjExX2FjY291bnRDYXJkRGlzYWJsZV9fajNsV01cIixcblx0XCJhY2NvdW50Q2FyZFwiOiBcIkhlYWRlclIxMV9hY2NvdW50Q2FyZF9fM2V2TmZcIixcblx0XCJvcmdhbml6YXRpb25DYXJkXCI6IFwiSGVhZGVyUjExX29yZ2FuaXphdGlvbkNhcmRfXzFuMkU4XCIsXG5cdFwibWVudVNlcGFyYXRvclwiOiBcIkhlYWRlclIxMV9tZW51U2VwYXJhdG9yX18yZDRIUlwiLFxuXHRcIm5hdkljb25cIjogXCJIZWFkZXJSMTFfbmF2SWNvbl9fMW13XzhcIixcblx0XCJuYXZJY29uVGV4dFwiOiBcIkhlYWRlclIxMV9uYXZJY29uVGV4dF9fM0JtTUxcIixcblx0XCJmbGV4Qm94XCI6IFwiSGVhZGVyUjExX2ZsZXhCb3hfXzE1Y2dUXCIsXG5cdFwidGV4dEhpZ2hFbXBoYXNpc1wiOiBcIkhlYWRlclIxMV90ZXh0SGlnaEVtcGhhc2lzX18zVTZQbFwiLFxuXHRcInRleHRTdWJIZWFkaW5nXCI6IFwiSGVhZGVyUjExX3RleHRTdWJIZWFkaW5nX19IdU83ZFwiLFxuXHRcInRleHROb0VtcGhhc2lzXCI6IFwiSGVhZGVyUjExX3RleHROb0VtcGhhc2lzX19ENHhwZFwiLFxuXHRcInRleHRNaWNyb1wiOiBcIkhlYWRlclIxMV90ZXh0TWljcm9fX1BwQ0Q5XCIsXG5cdFwidGV4dFN0YW5kYXJkXCI6IFwiSGVhZGVyUjExX3RleHRTdGFuZGFyZF9fMW11RV9cIixcblx0XCJ0ZXh0XCI6IFwiSGVhZGVyUjExX3RleHRfXzJicDdWXCIsXG5cdFwidGV4dENlbnRlclwiOiBcIkhlYWRlclIxMV90ZXh0Q2VudGVyX18zSkhwcVwiLFxuXHRcInRleHRXaGl0ZVwiOiBcIkhlYWRlclIxMV90ZXh0V2hpdGVfXzJIS2VvXCIsXG5cdFwidGV4dFN0cm9uZ1wiOiBcIkhlYWRlclIxMV90ZXh0U3Ryb25nX18xbjl1QlwiLFxuXHRcInRleHRTbWFsbFwiOiBcIkhlYWRlclIxMV90ZXh0U21hbGxfXzJSN0d4XCIsXG5cdFwibWVudUxvZ091dFwiOiBcIkhlYWRlclIxMV9tZW51TG9nT3V0X18xU3FXX1wiLFxuXHRcIm1lbnVCb3R0b21UaW55XCI6IFwiSGVhZGVyUjExX21lbnVCb3R0b21UaW55X18zTGxpelwiLFxuXHRcInRleHRTZWNvbmRhcnlcIjogXCJIZWFkZXJSMTFfdGV4dFNlY29uZGFyeV9fc0tEQkNcIixcblx0XCJoZWFkZXJMYWJlbENvdW50U2hvd1wiOiBcIkhlYWRlclIxMV9oZWFkZXJMYWJlbENvdW50U2hvd19fMVhQM2hcIixcblx0XCJoZWFkZXJMYWJlbENvdW50XCI6IFwiSGVhZGVyUjExX2hlYWRlckxhYmVsQ291bnRfXzNVTEs3XCIsXG5cdFwibmF2SXRlbUxpbmtcIjogXCJIZWFkZXJSMTFfbmF2SXRlbUxpbmtfXzIxZTRIXCIsXG5cdFwibG9nb0NvbnRhaW5lclwiOiBcIkhlYWRlclIxMV9sb2dvQ29udGFpbmVyX18yV3U3alwiLFxuXHRcImxvZ29cIjogXCJIZWFkZXJSMTFfbG9nb19fM3NNcDdcIixcblx0XCJhdmF0YXJDaXJjbGVcIjogXCJIZWFkZXJSMTFfYXZhdGFyQ2lyY2xlX18yQnFpQVwiLFxuXHRcImF2YXRhckNvbnRlbnRXcmFwXCI6IFwiSGVhZGVyUjExX2F2YXRhckNvbnRlbnRXcmFwX18zeGZ5alwiLFxuXHRcImF2YXRhckNvbnRlbnRcIjogXCJIZWFkZXJSMTFfYXZhdGFyQ29udGVudF9fMjJ5dGpcIixcblx0XCJhdmF0YXJDb250ZW50Q2FwaXRhbFwiOiBcIkhlYWRlclIxMV9hdmF0YXJDb250ZW50Q2FwaXRhbF9fMzdqM05cIixcblx0XCJhdmF0YXJJY29uXCI6IFwiSGVhZGVyUjExX2F2YXRhckljb25fXzNsRE9XXCIsXG5cdFwiZGl2dGVzdFwiOiBcIkhlYWRlclIxMV9kaXZ0ZXN0X18yTFFIRVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDkzMTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcbi8qKioqKiovIH0pKClcbjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyUjExLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gXCIuLi9zY3JpcHRzL0hvbWVSMTFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbnMuaGFuZGxlRG9jdW1lbnRTY3JvbGwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb25zLmhhbmRsZVdpbmRvd0NsaWNrKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9ucy5oYW5kbGVXaW5kb3dTY3JvbGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8cD5IZWFkZXI8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmdW5jdGlvbnMubXlGdW5jdGlvbigpfT5DbGljayBtZTwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+ICovfVxyXG5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlckNvbnRhaW5lclwiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlclN0eWxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2RWxlbWVudHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdXBDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgey8qKkxvZ28gb2NjbXVuZGlhbCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwMjkvYWN0aXZpZGFkL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyoqTm9tYnJlIGRlIGxhIG9yZ2FuaXphY2nDs24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRHJvcERvd25EZWZhdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5oYW5kbGVDbGlja09uT3JnYW5pemF0aW9uV3JhcChldmVudClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkRyb3BEb3duVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkRyb3BEb3duRmxleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGV4dH0gJHtzdHlsZXMudGV4dFN1YkhlYWRpbmd9ICR7c3R5bGVzLnRleHRIaWdoRW1waGFzaXN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZSBkZSBsYSBvcmdhbmkuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3JnYW5pemF0aW9uRHJvcERvd25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb259ICR7c3R5bGVzLmljb25TbWFsbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qKk9yZ2FuaXphdGlvbiBDYXJkICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3JnYW5pemF0aW9uQ2FyZFdyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudENhcmREaXNhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JnYW5pemF0aW9uQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW1MaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NjQ2NjAvVmFjYW50ZXMvQ2xhc2lmaWNhY2lvbmVzL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFN0YW5kYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dE5vRW1waGFzaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JnYW5pemFjacOzbiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo2NDY2MC9BZG1pbmlzdHJhY2lvbi9Ob3Rhc1JlY2x1dGFkb3IvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0U3RhbmRhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0Tm9FbXBoYXNpc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmdhbml6YWNpw7NuIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjY0NjYwL1BhcXVldGVzL0VzdGFkb0N1ZW50YS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHRTdGFuZGFyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHROb0VtcGhhc2lzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphY2nDs24gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyoqQ2FydCAqTWVzc2FnZXMgKkFjY291bnQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncm91cENvbnRhaW5lcn1gfT5cclxuICAgICAgICAgICAgICAgIHsvKipDYXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0V3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMi9jaGVja291dC8/dXRtX3NvdXJjZT1zaWdodCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jYW1wYWlnbj1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRleHR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0U21hbGx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0V2hpdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0Q2VudGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFN0cm9uZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuaGVhZGVyTGFiZWxDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuaGVhZGVyTGFiZWxDb3VudFNob3d9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pY29ufSAke3N0eWxlcy5jYXJ0SWNvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyoqTWVzc2FnZXMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZXNCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50ZXh0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFNtYWxsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFdoaXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dENlbnRlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHRTdHJvbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmhlYWRlckxhYmVsQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmhlYWRlckxhYmVsQ291bnRTaG93fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLm1lc3NhZ2VzSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKipBY2NvdW50ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50V3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRHJvcERvd25EZWZhdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbnMuaGFuZGxlQ2xpY2tPbkFjY291bnRXcmFwKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRHJvcERvd25UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Ecm9wRG93bkZsZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFN1YkhlYWRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dEhpZ2hFbXBoYXNpc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJDaXJjbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhckNvbnRlbnRXcmFwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5hdmF0YXJDb250ZW50fSAke3N0eWxlcy5hdmF0YXJDb250ZW50Q2FwaXRhbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1SPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmF2YXRhckNvbnRlbnR9ICR7c3R5bGVzLmF2YXRhckljb259YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY291bnREcm9wRG93bkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qKkFjY291bnQgQ2FyZCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50Q2FyZFdyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50Q2FyZERpc2FibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50Q2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW1MaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo2NDY2MC9WYWNhbnRlcy9DbGFzaWZpY2FjaW9uZXMvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0U3RhbmRhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0Tm9FbXBoYXNpc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xhc2lmaWNhY2lvbmVzIGRlIENWJ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NjQ2NjAvQWRtaW5pc3RyYWNpb24vTm90YXNSZWNsdXRhZG9yL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFN0YW5kYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dE5vRW1waGFzaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGFzIGRlIENWJ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVTZXBhcmF0b3J9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NjQ2NjAvUGFxdWV0ZXMvRXN0YWRvQ3VlbnRhL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFN0YW5kYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dE5vRW1waGFzaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGFkbyBkZSBDdWVudGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVTZXBhcmF0b3J9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NjQ2NjAvRGF0b3NQZXJzb25hbGVzL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dFN0YW5kYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dE5vRW1waGFzaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdG9zIHBlcnNvbmFsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NjQ2NjAvRGF0b3NQZXJzb25hbGVzL0NhbWJpYXJDbGF2ZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHRTdGFuZGFyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHROb0VtcGhhc2lzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW1iaWFyIGNvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51U2VwYXJhdG9yfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2gzLm9jYy5jb20ubXgvTWVyY2VyL01pc1BlcmZpbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0U3RhbmRhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0Tm9FbXBoYXNpc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw41uZGljZXMgc2FsYXJpYWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudVNlcGFyYXRvcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW1MaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9vY2NheXVkYS56ZW5kZXNrLmNvbS9oYy9lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0U3RhbmRhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dE5vRW1waGFzaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBeXVkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudVNlcGFyYXRvcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGV4dH0gJHtzdHlsZXMudGV4dFN0YW5kYXJkfSAke3N0eWxlcy50ZXh0U2Vjb25kYXJ5fSAke3N0eWxlcy5tZW51Qm90dG9tVGlueX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e3N0eWxlcy5tZW51TG9nT3V0fT5DZXJyYXIgc2VzacOzbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qKkFjdGl2aWRhZCAqVmFjYW50ZXMgKlRhbGVudG8gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncm91cENvbnRhaW5lcn0gJHtzdHlsZXMuaXRlbXNDZW50ZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICB7LyoqQWN0dmlkYWQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aWRhZFdyYXB9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuYWN0aXZpZGFkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMudGV4dE1pY3JvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHRIaWdoRW1waGFzaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hdkljb25UZXh0fT5BY3RpdmlkYWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyoqVmFjYW50ZXMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhY2FudGVzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaWNvbn0gJHtzdHlsZXMudmFjYW50ZXNJY29ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHRNaWNyb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0SGlnaEVtcGhhc2lzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJY29uVGV4dH0+VmFjYW50ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyoqVGFsZW50byAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFsZW50b1dyYXB9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb259ICR7c3R5bGVzLnRhbGVudG9JY29ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLnRleHRNaWNyb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy50ZXh0SGlnaEVtcGhhc2lzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJY29uVGV4dH0+VGFsZW50bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImNvbnN0IGNhcmRBY3RpdmUgPSB7XHJcbiAgb3BhY2l0eTogMSxcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIG1heEhlaWdodDogXCIyMDAwcHhcIixcclxuICBtYXJnaW46IFwiMTZweCAwcHggMHB4IC00NnB4XCIsXHJcbiAgcGFkZGluZzogXCIwcHggMHB4IDQ2cHggNDZweFwiLFxyXG4gIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC42cyBlYXNlLCBtYXJnaW4tdG9wIDAuOHNcIixcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHJpZ2h0OiBcIjBcIixcclxuICB6SW5kZXg6IFwiOTk5OVwiLFxyXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIsXHJcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgcG9pbnRlckV2ZW50czogXCJhdXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBvcmdhbml6YXRpb25DYXJkQWN0aXZlID0ge1xyXG4gIHJpZ2h0OiBcImF1dG9cIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmREaXNhYmxlID0ge1xyXG4gIG9wYWNpdHk6IDAsXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICBtYXhIZWlnaHQ6IFwiMHB4XCIsXHJcbiAgbWFyZ2luOiBcIjBweCAwcHggMHB4IDBweFwiLFxyXG4gIHBhZGRpbmc6IFwiMHB4IDBweCAwcHggMHB4XCIsXHJcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZSwgbWFyZ2luLXRvcCAwLjVzXCIsXHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICByaWdodDogXCIwXCIsXHJcbiAgekluZGV4OiBcIjk5OTlcIixcclxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxufTtcclxuXHJcbmNvbnN0IG9yZ2FuaXphdGlvbkNhcmREaXNhYmxlID0ge1xyXG4gIHJpZ2h0OiBcImF1dG9cIixcclxufTtcclxuXHJcbmNvbnN0IGJ1dHRvbkRyb3BEb3duQWN0aXZlID0ge1xyXG4gIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxyXG59O1xyXG5cclxuY29uc3QgcHJldmlvdXNTY3JvbGxQb3NpdGlvbiA9IHtcclxuICBzY3JvbGxZOiAwLFxyXG59O1xyXG5cclxuY29uc3Qgc3dpdGNoRWxlbWVudFN0eWxlID0gKGVsZW1lbnQsIHN0eWxlKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goKHN0eWxlS2V5KSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlW3N0eWxlS2V5XSA9IHN0eWxlW3N0eWxlS2V5XTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZURyb3BEb3duQnV0dG9uID0gKGRyb3BEb3duQnV0dG9uKSA9PiB7XHJcbiAgZHJvcERvd25CdXR0b24uc3R5bGUudHJhbnNmb3JtID09PSBcIlwiXHJcbiAgICA/IHN3aXRjaEVsZW1lbnRTdHlsZShkcm9wRG93bkJ1dHRvbiwgYnV0dG9uRHJvcERvd25BY3RpdmUpXHJcbiAgICA6IChkcm9wRG93bkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUNsaWNrT25BY2NvdW50V3JhcCA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAvLyBPcmdhbml6YXRpb25cclxuICBjb25zdCBvcmdhbml6YXRpb25Ecm9wRG93bkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJvcmdhbml6YXRpb25Ecm9wRG93bkJ1dHRvblwiXHJcbiAgKTtcclxuICBpZiAob3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24uc3R5bGUudHJhbnNmb3JtICE9PSBcIlwiKVxyXG4gICAgb3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnYW5pemF0aW9uQ2FyZFdyYXBcIik7XHJcblxyXG4gIGlmIChvcmdhbml6YXRpb25DYXJkLnN0eWxlLm9wYWNpdHkgIT09IFwiMFwiKVxyXG4gICAgc3dpdGNoRWxlbWVudFN0eWxlKG9yZ2FuaXphdGlvbkNhcmQsIHtcclxuICAgICAgLi4uY2FyZERpc2FibGUsXHJcbiAgICAgIC4uLm9yZ2FuaXphdGlvbkNhcmREaXNhYmxlLFxyXG4gICAgfSk7XHJcblxyXG4gIC8vIEFjY291bnRcclxuICBjb25zdCBhY2NvdW50RHJvcERvd25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWNjb3VudERyb3BEb3duQnV0dG9uXCJcclxuICApO1xyXG4gIGhhbmRsZURyb3BEb3duQnV0dG9uKGFjY291bnREcm9wRG93bkJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGFjY291bnRDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50Q2FyZFdyYXBcIik7XHJcblxyXG4gIGFjY291bnRDYXJkLnN0eWxlLm9wYWNpdHkgIT09IFwiMFwiXHJcbiAgICA/IHN3aXRjaEVsZW1lbnRTdHlsZShhY2NvdW50Q2FyZCwgY2FyZERpc2FibGUpXHJcbiAgICA6IHN3aXRjaEVsZW1lbnRTdHlsZShhY2NvdW50Q2FyZCwgY2FyZEFjdGl2ZSk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVDbGlja09uT3JnYW5pemF0aW9uV3JhcCA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAvLyBBY2NvdW50XHJcbiAgY29uc3QgYWNjb3VudERyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnREcm9wRG93bkJ1dHRvblwiXHJcbiAgKTtcclxuICBpZiAoYWNjb3VudERyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSAhPT0gXCJcIilcclxuICAgIGFjY291bnREcm9wRG93bkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xyXG5cclxuICBjb25zdCBhY2NvdW50Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudENhcmRXcmFwXCIpO1xyXG5cclxuICBpZiAoYWNjb3VudENhcmQuc3R5bGUub3BhY2l0eSAhPT0gXCIwXCIpXHJcbiAgICBzd2l0Y2hFbGVtZW50U3R5bGUoYWNjb3VudENhcmQsIGNhcmREaXNhYmxlKTtcclxuXHJcbiAgLy8gT3JnYW5pemF0aW9uXHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwib3JnYW5pemF0aW9uRHJvcERvd25CdXR0b25cIlxyXG4gICk7XHJcbiAgaGFuZGxlRHJvcERvd25CdXR0b24ob3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24pO1xyXG5cclxuICBjb25zdCBvcmdhbml6YXRpb25DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmdhbml6YXRpb25DYXJkV3JhcFwiKTtcclxuXHJcbiAgb3JnYW5pemF0aW9uQ2FyZC5zdHlsZS5vcGFjaXR5ICE9PSBcIjBcIlxyXG4gICAgPyBzd2l0Y2hFbGVtZW50U3R5bGUob3JnYW5pemF0aW9uQ2FyZCwge1xyXG4gICAgICAgIC4uLmNhcmREaXNhYmxlLFxyXG4gICAgICAgIC4uLm9yZ2FuaXphdGlvbkNhcmREaXNhYmxlLFxyXG4gICAgICB9KVxyXG4gICAgOiBzd2l0Y2hFbGVtZW50U3R5bGUob3JnYW5pemF0aW9uQ2FyZCwge1xyXG4gICAgICAgIC4uLmNhcmRBY3RpdmUsXHJcbiAgICAgICAgLi4ub3JnYW5pemF0aW9uQ2FyZEFjdGl2ZSxcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVXaW5kb3dDbGljayA9ICgpID0+IHtcclxuICAvLyBBY2NvdW50XHJcbiAgY29uc3QgYWNjb3VudERyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnREcm9wRG93bkJ1dHRvblwiXHJcbiAgKTtcclxuICBpZiAoYWNjb3VudERyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSAhPT0gXCJcIilcclxuICAgIGFjY291bnREcm9wRG93bkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xyXG5cclxuICBjb25zdCBhY2NvdW50Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudENhcmRXcmFwXCIpO1xyXG5cclxuICBpZiAoYWNjb3VudENhcmQuc3R5bGUub3BhY2l0eSAhPT0gXCIwXCIpXHJcbiAgICBzd2l0Y2hFbGVtZW50U3R5bGUoYWNjb3VudENhcmQsIGNhcmREaXNhYmxlKTtcclxuXHJcbiAgLy8gT3JnYW5pemF0aW9uXHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwib3JnYW5pemF0aW9uRHJvcERvd25CdXR0b25cIlxyXG4gICk7XHJcbiAgaWYgKG9yZ2FuaXphdGlvbkRyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSAhPT0gXCJcIilcclxuICAgIG9yZ2FuaXphdGlvbkRyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IG9yZ2FuaXphdGlvbkNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZ2FuaXphdGlvbkNhcmRXcmFwXCIpO1xyXG5cclxuICBpZiAob3JnYW5pemF0aW9uQ2FyZC5zdHlsZS5vcGFjaXR5ICE9PSBcIjBcIikge1xyXG4gICAgc3dpdGNoRWxlbWVudFN0eWxlKG9yZ2FuaXphdGlvbkNhcmQsIHtcclxuICAgICAgLi4uY2FyZERpc2FibGUsXHJcbiAgICAgIC4uLm9yZ2FuaXphdGlvbkNhcmREaXNhYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlRG9jdW1lbnRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJDb250YWluZXJcIik7XHJcbiAgaGVhZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiNjRweFwiO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlV2luZG93U2Nyb2xsID0gKCkgPT4ge1xyXG4gIC8vIEhpZGUgYWNjb3VudCBkcm9wZG93biBpZiB2aXNpYmxlXHJcbiAgY29uc3QgYWNjb3VudERyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnREcm9wRG93bkJ1dHRvblwiXHJcbiAgKTtcclxuICBpZiAoYWNjb3VudERyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSAhPT0gXCJcIilcclxuICAgIGFjY291bnREcm9wRG93bkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xyXG5cclxuICBjb25zdCBhY2NvdW50Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudENhcmRXcmFwXCIpO1xyXG4gIGlmIChhY2NvdW50Q2FyZC5zdHlsZS5vcGFjaXR5ICE9PSBcIjBcIikge1xyXG4gICAgc3dpdGNoRWxlbWVudFN0eWxlKGFjY291bnRDYXJkLCBjYXJkRGlzYWJsZSk7XHJcbiAgfVxyXG5cclxuICAvLyBIaWRlIG9yZ2FuaXphdGlvbiBkcm9wZG93biBpZiB2aXNpYmxlXHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uRHJvcERvd25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwib3JnYW5pemF0aW9uRHJvcERvd25CdXR0b25cIlxyXG4gICk7XHJcbiAgaWYgKG9yZ2FuaXphdGlvbkRyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSAhPT0gXCJcIilcclxuICAgIG9yZ2FuaXphdGlvbkRyb3BEb3duQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IG9yZ2FuaXphdGlvbkNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZ2FuaXphdGlvbkNhcmRXcmFwXCIpO1xyXG4gIGlmIChvcmdhbml6YXRpb25DYXJkLnN0eWxlLm9wYWNpdHkgIT09IFwiMFwiKSB7XHJcbiAgICBzd2l0Y2hFbGVtZW50U3R5bGUob3JnYW5pemF0aW9uQ2FyZCwge1xyXG4gICAgICAuLi5jYXJkRGlzYWJsZSxcclxuICAgICAgLi4ub3JnYW5pemF0aW9uQ2FyZERpc2FibGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhlYWRlclxyXG4gIHZhciBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gIGNvbnN0IGhlYWRlclN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJTdHlsZVwiKTtcclxuXHJcbiAgcHJldmlvdXNTY3JvbGxQb3NpdGlvbi5zY3JvbGxZID4gMTBcclxuICAgID8gKGhlYWRlclN0eWxlLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcIilcclxuICAgIDogKGhlYWRlclN0eWxlLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJDb250YWluZXJcIik7XHJcbiAgaWYgKHNjcm9sbCA+IHByZXZpb3VzU2Nyb2xsUG9zaXRpb24uc2Nyb2xsWSkge1xyXG4gICAgaGVhZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiLTY0cHhcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMHB4XCI7XHJcbiAgfVxyXG4gIHByZXZpb3VzU2Nyb2xsUG9zaXRpb24uc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGFuZGxlQ2xpY2tPbkFjY291bnRXcmFwLFxyXG4gIGhhbmRsZVdpbmRvd0NsaWNrLFxyXG4gIGhhbmRsZVdpbmRvd1Njcm9sbCxcclxuICBoYW5kbGVDbGlja09uT3JnYW5pemF0aW9uV3JhcCxcclxuICBoYW5kbGVEb2N1bWVudFNjcm9sbCxcclxufTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IZWFkZXJSMTEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSGVhZGVyUjExLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IZWFkZXJSMTEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9