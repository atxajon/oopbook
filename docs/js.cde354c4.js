parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"kLSA":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(n,i,r){t(this,e),this._id=e.incrementId(),this._title=n,this._author=i,this._isbn=r}return n(e,[{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"author",get:function(){return this._author}},{key:"isbn",get:function(){return this._isbn}}],[{key:"incrementId",value:function(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}]),e}();exports.default=i;
},{}],"DrAD":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function t(){e(this,t)}return n(t,[{key:"displayMessage",value:function(e,t){var n=document.getElementsByClassName("container"),o=document.createElement("div");o.setAttribute("class",t),o.textContent=e,n[0].insertBefore(o,n[0].firstChild);var r=setInterval(function(){void 0!==document.querySelector(".alert")&&(document.querySelector(".alert").remove(),clearInterval(r))},3e3)}},{key:"addBookToList",value:function(e){var t=document.getElementById("book-list"),n=document.createElement("tr");n.setAttribute("id","book-".concat(e.id));var o="<td>".concat(e.title,"</td><td>").concat(e.author,"</td><td>").concat(e.isbn,'</td><a class="delete-book" href="#">Delete from list</a>');n.innerHTML=o,t.appendChild(n)}},{key:"deleteBook",value:function(e){document.getElementById(e).remove()}}]),t}();exports.default=o;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=d(require("./book")),t=d(require("./ui"));function d(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(e){document.getElementById("book-form").addEventListener("submit",n)});var n=function(d){var n=document.getElementById("title"),u=document.getElementById("author"),a=document.getElementById("isbn"),r=new e.default(n.value,u.value,a.value),l=new t.default;l.displayMessage("Book added","alert success"),l.addBookToList(r);var s=document.querySelector(".delete-book");s&&s.addEventListener("click",o),d.preventDefault()},o=function(e){var d=new t.default,n=event.target.parentNode.id;return d.deleteBook(n),d.displayMessage("Book deleted","alert success"),e.preventDefault(),!1};
},{"./book":"kLSA","./ui":"DrAD"}]},{},["QvaY"], null)
//# sourceMappingURL=js.cde354c4.map