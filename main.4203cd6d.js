parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var c=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),a=document.querySelector(".remove-column"),u=document.querySelector(".field tbody"),m=10,s=2;function f(){u.append(u.lastElementChild.cloneNode(!0)),d.disabled=!1,u.childElementCount===m&&(c.disabled=!0)}function y(){u.lastElementChild.remove(),c.disabled=!1,u.childElementCount===s&&(d.disabled=!0)}function b(){e(u.children).forEach(function(e){return e.append(e.children[0].cloneNode(!0))}),a.disabled=!1,u.children[0].childElementCount===m&&(l.disabled=!0)}function h(){e(u.children).forEach(function(e){return e.children[0].remove()}),l.disabled=!1,u.children[0].childElementCount===s&&(a.disabled=!0)}c.addEventListener("click",f),d.addEventListener("click",y),l.addEventListener("click",b),a.addEventListener("click",h);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4203cd6d.js.map