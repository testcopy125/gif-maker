/*! Cropper.js v1.5.12 || Copyright 2015-present Chen Fengyuan || Released under the MIT license */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Cropper=e()}(this,function(){"use strict";function e(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function B(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(t){var e,i;e=a,t=n[i=t],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function T(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(i="Object"===i&&t.constructor?t.constructor.name:i)||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var t="undefined"!=typeof window&&void 0!==window.document,h=t?window:{},o=!(!t||!h.document.documentElement)&&"ontouchstart"in h.document.documentElement,r=t&&"PointerEvent"in h,c="cropper",k="all",O="crop",E="move",W="zoom",H="e",N="w",L="s",z="n",Y="ne",X="nw",R="se",S="sw",s="".concat(c,"-crop"),d="".concat(c,"-disabled"),A="".concat(c,"-hidden"),l="".concat(c,"-hide"),p="".concat(c,"-invisible"),m="".concat(c,"-modal"),u="".concat(c,"-move"),g="".concat(c,"Action"),f="".concat(c,"Preview"),v="crop",w="move",b="none",y="crop",x="cropend",M="cropmove",C="cropstart",D="dblclick",j=r?"pointerdown":o?"touchstart":"mousedown",I=r?"pointermove":o?"touchmove":"mousemove",P=r?"pointerup pointercancel":o?"touchend touchcancel":"mouseup",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,G={viewMode:0,dragMode:v,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},V=Number.isNaN||h.isNaN;function F(t){return"number"==typeof t&&!V(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===i(t)&&null!==t}var et=Object.prototype.hasOwnProperty;function it(t){if(!tt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&et.call(i,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function ht(i,a){return i&&at(a)&&(Array.isArray(i)||F(i.length)?ot(i).forEach(function(t,e){a.call(i,t,e,i)}):tt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var rt=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return tt(i)&&0<e.length&&e.forEach(function(e){tt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,e){e=1<arguments.length&&void 0!==e?e:1e11;return st.test(t)?Math.round(t*e)/e:t}var dt=/^width|height|left|top|marginLeft|marginTop$/;function lt(t,e){var i=t.style;ht(e,function(t,e){dt.test(e)&&F(t)&&(t="".concat(t,"px")),i[e]=t})}function pt(t,e){var i;e&&(F(t.length)?ht(t,function(t){pt(t,e)}):t.classList?t.classList.add(e):(i=t.className.trim())?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e)}function mt(t,e){e&&(F(t.length)?ht(t,function(t){mt(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function ut(t,e,i){e&&(F(t.length)?ht(t,function(t){ut(t,e,i)}):(i?pt:mt)(t,e))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,e){return tt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ft(e)))}function wt(t,e,i){tt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ft(e)),i)}var bt,yt,xt=/\s\s*/,Mt=(yt=!1,t&&(bt=!1,At=function(){},It=Object.defineProperty({},"once",{get:function(){return yt=!0,bt},set:function(t){bt=t}}),h.addEventListener("test",At,It),h.removeEventListener("test",At,It)),yt);function Ct(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(xt).forEach(function(t){var e;Mt||(e=i.listeners)&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners),i.removeEventListener(t,o,n)})}function Dt(o,t,h,e){var r=3<arguments.length&&void 0!==e?e:{},s=h;t.trim().split(xt).forEach(function(a){var t,n;r.once&&!Mt&&(t=o.listeners,s=function(){delete n[a][h],o.removeEventListener(a,s,r);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];h.apply(o,e)},(n=void 0===t?{}:t)[a]||(n[a]={}),n[a][h]&&o.removeEventListener(a,n[a][h],r),n[a][h]=s,o.listeners=n),o.addEventListener(a,s,r)})}function Bt(t,e,i){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function kt(t){t=t.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ot=h.location,Tt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Et(t){t=t.match(Tt);return null!==t&&(t[1]!==Ot.protocol||t[2]!==Ot.hostname||t[3]!==Ot.port)}function Wt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Ht(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,t=[];F(n)&&0!==n&&t.push("translateX(".concat(n,"px)")),F(o)&&0!==o&&t.push("translateY(".concat(o,"px)")),F(e)&&0!==e&&t.push("rotate(".concat(e,"deg)")),F(i)&&1!==i&&t.push("scaleX(".concat(i,")")),F(a)&&1!==a&&t.push("scaleY(".concat(a,")"));t=t.length?t.join(" "):"none";return{WebkitTransform:t,msTransform:t,transform:t}}function Nt(t,e){var i=t.pageX,a=t.pageY,t={endX:i,endY:a};return e?t:B({startX:i,startY:a},t)}function Lt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",h=J(n),t=J(a);return h&&t?(e=a*i,"contain"===o&&n<e||"cover"===o&&e<n?a=n/i:n=a*i):h?a=n/i:t&&(n=a*i),{width:n,height:a}}var zt=String.fromCharCode;var Yt=/^data:.*,/;function Xt(t){var e,i,a,n,o,h,r,s=new DataView(t);try{if(255===s.getUint8(0)&&216===s.getUint8(1))for(var c=s.byteLength,d=2;d+1<c;){if(255===s.getUint8(d)&&225===s.getUint8(d+1)){i=d;break}d+=1}if(i&&(n=i+10,"Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=zt(t.getUint8(n));return a}(s,i+4,4)&&(!(r=18761===(o=s.getUint16(n)))&&19789!==o||42!==s.getUint16(n+2,r)||8<=(h=s.getUint32(n+4,r))&&(a=n+h))),a)for(var l,p=s.getUint16(a,r),m=0;m<p;m+=1)if(l=a+12*m+2,274===s.getUint16(l,r)){l+=8,e=s.getUint16(l,r),s.setUint16(l,1,r);break}}catch(t){e=1}return e}var Rt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),e=Number(e.minContainerHeight);pt(a,A),mt(t,A);e={width:Math.max(i.offsetWidth,0<=n?n:200),height:Math.max(i.offsetHeight,0<=e?e:100)};lt(a,{width:(this.containerData=e).width,height:e.height}),pt(t,A),mt(a,A)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,h=n/o,a=t.width,e=t.height;t.height*h>t.width?3===i?a=t.height*h:e=t.width/h:3===i?e=t.width/h:a=t.height*h;e={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:a,height:e};this.canvasData=e,this.limited=1===i||2===i,this.limitCanvas(!0,!0),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),e.left=(t.width-e.width)/2,e.top=(t.height-e.height)/2,e.oldLeft=e.left,e.oldTop=e.top,this.initialCanvasData=rt({},e)},limitCanvas:function(t,e){var i,a=this.options,n=this.containerData,o=this.canvasData,h=this.cropBoxData,r=a.viewMode,s=o.aspectRatio,c=this.cropped&&h;t&&(t=Number(a.minCanvasWidth)||0,i=Number(a.minCanvasHeight)||0,1<r?(t=Math.max(t,n.width),i=Math.max(i,n.height),3===r&&(t<i*s?t=i*s:i=t/s)):0<r&&(t?t=Math.max(t,c?h.width:0):i?i=Math.max(i,c?h.height:0):c&&((t=h.width)<(i=h.height)*s?t=i*s:i=t/s)),t=(s=Lt({aspectRatio:s,width:t,height:i})).width,i=s.height,o.minWidth=t,o.minHeight=i,o.maxWidth=1/0,o.maxHeight=1/0),e&&((c?0:1)<r?(i=n.width-o.width,e=n.height-o.height,o.minLeft=Math.min(0,i),o.minTop=Math.min(0,e),o.maxLeft=Math.max(0,i),o.maxTop=Math.max(0,e),c&&this.limited&&(o.minLeft=Math.min(h.left,h.left+(h.width-o.width)),o.minTop=Math.min(h.top,h.top+(h.height-o.height)),o.maxLeft=h.left,o.maxTop=h.top,2===r&&(o.width>=n.width&&(o.minLeft=Math.min(0,i),o.maxLeft=Math.max(0,i)),o.height>=n.height&&(o.minTop=Math.min(0,e),o.maxTop=Math.max(0,e))))):(o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=n.width,o.maxTop=n.height))},renderCanvas:function(t,e){var i,a,n=this.canvasData,o=this.imageData;e&&(i=(a=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),t=Math.cos(n),n=e*t+i*o,t=e*o+i*t;return 90<a?{width:t,height:n}:{width:n,height:t}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0})).width,e=a.height,o=n.width*(i/n.naturalWidth),a=n.height*(e/n.naturalHeight),n.left-=(o-n.width)/2,n.top-=(a-n.height)/2,n.width=o,n.height=a,n.aspectRatio=i/e,n.naturalWidth=i,n.naturalHeight=e,this.limitCanvas(!0,!1)),(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,lt(this.canvas,rt({width:n.width,height:n.height},Ht({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);rt(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),lt(this.image,rt({width:i.width,height:i.height},Ht(rt({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,t={width:e.width,height:e.height};i&&(e.height*i>e.width?t.height=t.width/i:t.width=t.height*i),this.cropBoxData=t,this.limitCropBox(!0,!0),t.width=Math.min(Math.max(t.width,t.minWidth),t.maxWidth),t.height=Math.min(Math.max(t.height,t.minHeight),t.maxHeight),t.width=Math.max(t.minWidth,t.width*a),t.height=Math.max(t.minHeight,t.height*a),t.left=e.left+(e.width-t.width)/2,t.top=e.top+(e.height-t.height)/2,t.oldLeft=t.left,t.oldTop=t.top,this.initialCropBoxData=rt({},t)},limitCropBox:function(t,e){var i,a,n=this.options,o=this.containerData,h=this.canvasData,r=this.cropBoxData,s=this.limited,c=n.aspectRatio;t&&(i=Number(n.minCropBoxWidth)||0,a=Number(n.minCropBoxHeight)||0,t=s?Math.min(o.width,h.width,h.width+h.left,o.width-h.left):o.width,n=s?Math.min(o.height,h.height,h.height+h.top,o.height-h.top):o.height,i=Math.min(i,o.width),a=Math.min(a,o.height),c&&(i&&a?i<a*c?a=i/c:i=a*c:i?a=i/c:a&&(i=a*c),t<n*c?n=t/c:t=n*c),r.minWidth=Math.min(i,t),r.minHeight=Math.min(a,n),r.maxWidth=t,r.maxHeight=n),e&&(s?(r.minLeft=Math.max(0,h.left),r.minTop=Math.max(0,h.top),r.maxLeft=Math.min(o.width,h.left+h.width)-r.width,r.maxTop=Math.min(o.height,h.top+h.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=o.width-r.width,r.maxTop=o.height-r.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&wt(this.face,g,i.width>=e.width&&i.height>=e.height?E:k),lt(this.cropBox,rt({width:i.width,height:i.height},Ht({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Bt(this.element,y,this.getData())}},St={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e&&("string"==typeof(o=e)?o=t.ownerDocument.querySelectorAll(e):e.querySelector&&(o=[e]),ht(this.previews=o,function(t){var e=document.createElement("img");wt(t,f,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)}))},resetPreview:function(){ht(this.previews,function(t){var e=vt(t,f);lt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(tt(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(ft(i)))}(t,f)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,r=e.width,s=e.height,c=h.width,d=h.height,l=e.left-t.left-h.left,p=e.top-t.top-h.top;this.cropped&&!this.disabled&&(lt(this.viewBoxImage,rt({width:c,height:d},Ht(rt({translateX:-l,translateY:-p},h)))),ht(this.previews,function(t){var e=vt(t,f),i=e.width,a=e.height,n=i,o=a,e=1;r&&(o=s*(e=i/r)),s&&a<o&&(n=r*(e=a/s),o=a),lt(t,{width:n,height:o}),lt(t.getElementsByTagName("img")[0],rt({width:c*e,height:d*e},Ht(rt({translateX:-l*e,translateY:-p*e},h))))}))}},r={bind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Dt(t,C,e.cropstart),at(e.cropmove)&&Dt(t,M,e.cropmove),at(e.cropend)&&Dt(t,x,e.cropend),at(e.crop)&&Dt(t,y,e.crop),at(e.zoom)&&Dt(t,U,e.zoom),Dt(i,j,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Dt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Dt(i,D,this.onDblclick=this.dblclick.bind(this)),Dt(t.ownerDocument,I,this.onCropMove=this.cropMove.bind(this)),Dt(t.ownerDocument,P,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Dt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Ct(t,C,e.cropstart),at(e.cropmove)&&Ct(t,M,e.cropmove),at(e.cropend)&&Ct(t,x,e.cropend),at(e.crop)&&Ct(t,y,e.crop),at(e.zoom)&&Ct(t,U,e.zoom),Ct(i,j,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Ct(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ct(i,D,this.onDblclick),Ct(t.ownerDocument,I,this.onCropMove),Ct(t.ownerDocument,P,this.onCropEnd),e.responsive&&Ct(window,"resize",this.onResize)}},o={resize:function(){var t,e,i,a,n,o,h;this.disabled||(t=this.options,e=this.container,a=this.containerData,i=e.offsetWidth/a.width,a=e.offsetHeight/a.height,1!=(n=Math.abs(i-1)>Math.abs(a-1)?i:a)&&(t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ht(o,function(t,e){o[e]=t*n})),this.setCropBoxData(ht(h,function(t,e){h[e]=t*n})))))},dblclick:function(){var t,e;this.disabled||this.options.dragMode===b||this.setDragMode((t=this.dragBox,e=s,(t.classList?t.classList.contains(e):-1<t.className.indexOf(e))?w:v))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e,i=t.buttons,a=t.button;this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(F(i)&&1!==i||F(a)&&0!==a||t.ctrlKey)||(a=this.options,e=this.pointers,t.changedTouches?ht(t.changedTouches,function(t){e[t.identifier]=Nt(t)}):e[t.pointerId||0]=Nt(t),a=1<Object.keys(e).length&&a.zoomable&&a.zoomOnTouch?W:vt(t.target,g),$.test(a)&&!1!==Bt(this.element,C,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===O&&(this.cropping=!0,pt(this.dragBox,m))))},cropMove:function(t){var e,i=this.action;!this.disabled&&i&&(e=this.pointers,t.preventDefault(),!1!==Bt(this.element,M,{originalEvent:t,action:i})&&(t.changedTouches?ht(t.changedTouches,function(t){rt(e[t.identifier]||{},Nt(t,!0))}):rt(e[t.pointerId||0]||{},Nt(t,!0)),this.change(t)))},cropEnd:function(t){var e,i;this.disabled||(e=this.action,i=this.pointers,t.changedTouches?ht(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,ut(this.dragBox,m,this.cropped&&this.options.modal)),Bt(this.element,x,{originalEvent:t,action:e})))}},t={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,h=this.action,r=e.aspectRatio,s=n.left,c=n.top,d=n.width,l=n.height,p=s+d,m=c+l,u=0,g=0,f=a.width,v=a.height,w=!0;!r&&t.shiftKey&&(r=d&&l?d/l:1),this.limited&&(u=n.minLeft,g=n.minTop,f=u+Math.min(a.width,i.width,i.left+i.width),v=g+Math.min(a.height,i.height,i.top+i.height));function b(t){switch(t){case H:p+D.x>f&&(D.x=f-p);break;case N:s+D.x<u&&(D.x=u-s);break;case z:c+D.y<g&&(D.y=g-c);break;case L:m+D.y>v&&(D.y=v-m)}}var y,x,M,C=o[Object.keys(o)[0]],D={x:C.endX-C.startX,y:C.endY-C.startY};switch(h){case k:s+=D.x,c+=D.y;break;case H:if(0<=D.x&&(f<=p||r&&(c<=g||v<=m))){w=!1;break}b(H),(d+=D.x)<0&&(h=N,s-=d=-d),r&&(c+=(n.height-(l=d/r))/2);break;case z:if(D.y<=0&&(c<=g||r&&(s<=u||f<=p))){w=!1;break}b(z),l-=D.y,c+=D.y,l<0&&(h=L,c-=l=-l),r&&(s+=(n.width-(d=l*r))/2);break;case N:if(D.x<=0&&(s<=u||r&&(c<=g||v<=m))){w=!1;break}b(N),d-=D.x,s+=D.x,d<0&&(h=H,s-=d=-d),r&&(c+=(n.height-(l=d/r))/2);break;case L:if(0<=D.y&&(v<=m||r&&(s<=u||f<=p))){w=!1;break}b(L),(l+=D.y)<0&&(h=z,c-=l=-l),r&&(s+=(n.width-(d=l*r))/2);break;case Y:if(r){if(D.y<=0&&(c<=g||f<=p)){w=!1;break}b(z),l-=D.y,c+=D.y,d=l*r}else b(z),b(H),!(0<=D.x)||p<f?d+=D.x:D.y<=0&&c<=g&&(w=!1),D.y<=0&&!(g<c)||(l-=D.y,c+=D.y);d<0&&l<0?(h=S,c-=l=-l,s-=d=-d):d<0?(h=X,s-=d=-d):l<0&&(h=R,c-=l=-l);break;case X:if(r){if(D.y<=0&&(c<=g||s<=u)){w=!1;break}b(z),l-=D.y,c+=D.y,s+=n.width-(d=l*r)}else b(z),b(N),!(D.x<=0)||u<s?(d-=D.x,s+=D.x):D.y<=0&&c<=g&&(w=!1),D.y<=0&&!(g<c)||(l-=D.y,c+=D.y);d<0&&l<0?(h=R,c-=l=-l,s-=d=-d):d<0?(h=Y,s-=d=-d):l<0&&(h=S,c-=l=-l);break;case S:if(r){if(D.x<=0&&(s<=u||v<=m)){w=!1;break}b(N),d-=D.x,s+=D.x,l=d/r}else b(L),b(N),!(D.x<=0)||u<s?(d-=D.x,s+=D.x):0<=D.y&&v<=m&&(w=!1),0<=D.y&&!(m<v)||(l+=D.y);d<0&&l<0?(h=Y,c-=l=-l,s-=d=-d):d<0?(h=R,s-=d=-d):l<0&&(h=X,c-=l=-l);break;case R:if(r){if(0<=D.x&&(f<=p||v<=m)){w=!1;break}b(H),l=(d+=D.x)/r}else b(L),b(H),!(0<=D.x)||p<f?d+=D.x:0<=D.y&&v<=m&&(w=!1),0<=D.y&&!(m<v)||(l+=D.y);d<0&&l<0?(h=X,c-=l=-l,s-=d=-d):d<0?(h=S,s-=d=-d):l<0&&(h=Y,c-=l=-l);break;case E:this.move(D.x,D.y),w=!1;break;case W:this.zoom((x=B({},y=o),M=0,ht(y,function(n,t){delete x[t],ht(x,function(t){var e=Math.abs(n.startX-t.startX),i=Math.abs(n.startY-t.startY),a=Math.abs(n.endX-t.endX),t=Math.abs(n.endY-t.endY),i=Math.sqrt(e*e+i*i),i=(Math.sqrt(a*a+t*t)-i)/i;Math.abs(i)>Math.abs(M)&&(M=i)})}),M),t),w=!1;break;case O:if(!D.x||!D.y){w=!1;break}y=kt(this.cropper),s=C.startX-y.left,c=C.startY-y.top,d=n.minWidth,l=n.minHeight,0<D.x?h=0<D.y?R:Y:D.x<0&&(s-=d,h=0<D.y?S:X),D.y<0&&(c-=l),this.cropped||(mt(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}w&&(n.width=d,n.height=l,n.left=s,n.top=c,this.action=h,this.renderCropBox()),ht(o,function(t){t.startX=t.endX,t.startY=t.endY})}},At={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,m),mt(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=rt({},this.initialImageData),this.canvasData=rt({},this.initialCanvasData),this.cropBoxData=rt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(rt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),mt(this.dragBox,m),pt(this.cropBox,A)),this},replace:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,ht(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,mt(this.cropper,d)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,d)),this},destroy:function(){var t=this.element;return t[c]&&(t[c]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,i=i.top;return this.moveTo(_(t)?t:a+Number(t),_(e)?e:i+Number(e))},moveTo:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(F(t)&&(i.left=t,a=!0),F(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=Number(t),this.zoomTo(i.width*(t=t<0?1/(1-t):1+t)/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a,n,o,h=this.options,r=this.canvasData,s=r.width,c=r.height,d=r.naturalWidth,l=r.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&h.zoomable){h=d*t,l=l*t;if(!1===Bt(this.element,U,{ratio:t,oldRatio:s/d,originalEvent:i}))return this;i?(t=this.pointers,d=kt(this.cropper),i=t&&Object.keys(t).length?(o=n=a=0,ht(t,function(t){var e=t.startX,t=t.startY;a+=e,n+=t,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:i.pageX,pageY:i.pageY},r.left-=(h-s)*((i.pageX-d.left-r.left)/s),r.top-=(l-c)*((i.pageY-d.top-r.top)/c)):it(e)&&F(e.x)&&F(e.y)?(r.left-=(h-s)*((e.x-r.left)/s),r.top-=(l-c)*((e.y-r.top)/c)):(r.left-=(h-s)/2,r.top-=(l-c)/2),r.width=h,r.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return F(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,F(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(F(e)?e:1,t)},scale:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(F(t)&&(i.scaleX=t,a=!0),F(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var i,a,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=this.options,n=this.imageData,o=this.canvasData,h=this.cropBoxData;return this.ready&&this.cropped?(i={x:h.left-o.left,y:h.top-o.top,width:h.width,height:h.height},a=n.width/n.naturalWidth,ht(i,function(t,e){i[e]=t/a}),t&&(h=Math.round(i.y+i.height),t=Math.round(i.x+i.width),i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=t-i.x,i.height=h-i.y)):i={x:0,y:0,width:0,height:0},e.rotatable&&(i.rotate=n.rotate||0),e.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e,i=this.options,a=this.imageData,n=this.canvasData,o={};return this.ready&&!this.disabled&&it(t)&&(e=!1,i.rotatable&&F(t.rotate)&&t.rotate!==a.rotate&&(a.rotate=t.rotate,e=!0),i.scalable&&(F(t.scaleX)&&t.scaleX!==a.scaleX&&(a.scaleX=t.scaleX,e=!0),F(t.scaleY)&&t.scaleY!==a.scaleY&&(a.scaleY=t.scaleY,e=!0)),e&&this.renderCanvas(!0,!0),a=a.width/a.naturalWidth,F(t.x)&&(o.left=t.x*a+n.left),F(t.y)&&(o.top=t.y*a+n.top),F(t.width)&&(o.width=t.width*a),F(t.height)&&(o.height=t.height*a),this.setCropBoxData(o)),this},getContainerData:function(){return this.ready?rt({},this.containerData):{}},getImageData:function(){return this.sized?rt({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&ht(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&it(t)&&(F(t.left)&&(e.left=t.left),F(t.top)&&(e.top=t.top),F(t.width)?(e.width=t.width,e.height=t.width/i):F(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return(t=this.ready&&this.cropped?{left:e.left,top:e.top,width:e.width,height:e.height}:t)||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&it(t)&&(F(t.left)&&(a.left=t.left),F(t.top)&&(a.top=t.top),F(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),F(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e,i,a,n,o,h,r,s,c,d,l,p,m,u=this.canvasData,h=(w=this.image,e=this.imageData,i=u,y=t,a=e.aspectRatio,n=e.naturalWidth,b=e.naturalHeight,o=void 0===(m=e.rotate)?0:m,h=void 0===(v=e.scaleX)?1:v,g=void 0===(l=e.scaleY)?1:l,r=i.aspectRatio,s=i.naturalWidth,c=i.naturalHeight,d=void 0===(p=y.fillColor)?"transparent":p,x=y.imageSmoothingEnabled,f=void 0===x||x,v=void 0===(m=y.imageSmoothingQuality)?"low":m,l=void 0===(e=y.maxWidth)?1/0:e,p=void 0===(i=y.maxHeight)?1/0:i,m=void 0===(x=y.minWidth)?0:x,i=void 0===(e=y.minHeight)?0:e,y=(x=document.createElement("canvas")).getContext("2d"),e=Lt({aspectRatio:r,width:l,height:p}),r=Lt({aspectRatio:r,width:m,height:i},"cover"),s=Math.min(e.width,Math.max(r.width,s)),c=Math.min(e.height,Math.max(r.height,c)),p=Lt({aspectRatio:a,width:l,height:p}),i=Lt({aspectRatio:a,width:m,height:i},"cover"),n=Math.min(p.width,Math.max(i.width,n)),b=Math.min(p.height,Math.max(i.height,b)),b=[-n/2,-b/2,n,b],x.width=ct(s),x.height=ct(c),y.fillStyle=d,y.fillRect(0,0,s,c),y.save(),y.translate(s/2,c/2),y.rotate(o*Math.PI/180),y.scale(h,g),y.imageSmoothingEnabled=f,y.imageSmoothingQuality=v,y.drawImage.apply(y,[w].concat(T(b.map(function(t){return Math.floor(ct(t))})))),y.restore(),x);if(!this.cropped)return h;var g=this.getData(),f=g.x,v=g.y,w=g.width,b=g.height,y=h.width/Math.floor(u.naturalWidth);1!=y&&(f*=y,v*=y,w*=y,b*=y);var x=w/b,g=Lt({aspectRatio:x,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),u=Lt({aspectRatio:x,width:t.minWidth||0,height:t.minHeight||0},"cover"),x=Lt({aspectRatio:x,width:t.width||(1!=y?h.width:w),height:t.height||(1!=y?h.height:b)}),y=x.width,x=x.height,y=Math.min(g.width,Math.max(u.width,y)),x=Math.min(g.height,Math.max(u.height,x)),g=document.createElement("canvas"),u=g.getContext("2d");g.width=ct(y),g.height=ct(x),u.fillStyle=t.fillColor||"transparent",u.fillRect(0,0,y,x);x=t.imageSmoothingEnabled,t=t.imageSmoothingQuality;u.imageSmoothingEnabled=void 0===x||x,t&&(u.imageSmoothingQuality=t);var M,C,D,B,k,x=h.width,t=h.height,f=f,v=v;f<=-w||x<f?B=C=M=f=0:f<=0?(C=-f,f=0,B=M=Math.min(x,w+f)):f<=x&&(C=0,B=M=Math.min(w,x-f)),M<=0||v<=-b||t<v?k=D=O=v=0:v<=0?(D=-v,v=0,k=O=Math.min(t,b+v)):v<=t&&(D=0,k=O=Math.min(b,t-v));var O=[f,v,M,O];return 0<B&&0<k&&O.push(C*(w=y/w),D*w,B*w,k*w),u.drawImage.apply(u,[h].concat(T(O.map(function(t){return Math.floor(ct(t))})))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||_(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e,i,a=this.options,n=this.dragBox,o=this.face;return this.ready&&!this.disabled&&(i=a.movable&&t===w,a.dragMode=t=(e=t===v)||i?t:b,wt(n,g,t),ut(n,s,e),ut(n,u,i),a.cropBoxMovable||(wt(o,g,t),ut(o,s,e),ut(o,u,i))),this}},jt=h.Cropper,It=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=rt({},G,it(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,e,a;return t=i,a=[{key:"noConflict",value:function(){return window.Cropper=jt,i}},{key:"setDefaults",value:function(t){rt(G,it(t)&&t)}}],(e=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[c]){if(e[c]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o,h,r=this;t&&(this.url=t,this.imageData={},e=this.element,(i=this.options).rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer?Q.test(t)?K.test(t)?this.read((h=(h=t).replace(Yt,""),a=atob(h),h=new ArrayBuffer(a.length),ht(n=new Uint8Array(h),function(t,e){n[e]=a.charCodeAt(e)}),h)):this.clone():(o=new XMLHttpRequest,h=this.clone.bind(this),this.reloading=!0,(this.xhr=o).onabort=h,o.onerror=h,o.ontimeout=h,o.onprogress=function(){o.getResponseHeader("content-type")!==q&&o.abort()},o.onload=function(){r.read(o.response)},o.onloadend=function(){r.reloading=!1,r.xhr=null},i.checkCrossOrigin&&Et(t)&&e.crossOrigin&&(t=Wt(t)),o.open("GET",t,!0),o.responseType="arraybuffer",o.withCredentials="use-credentials"===e.crossOrigin,o.send()):this.clone())}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=Xt(t),n=0,o=1,h=1;1<a&&(this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(zt.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q),n=(a=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a)).rotate,o=a.scaleX,h=a.scaleY),e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=h),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Et(e)&&(i=i||"anonymous",a=Wt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){rt(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.initialImageData=rt({},i.imageData),i.sizing=!1,i.sized=!0,i.build()}var a,n,o=h.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(h.navigator.userAgent);!t.naturalWidth||o?(a=document.createElement("img"),n=document.body||document.documentElement,(this.sizingImage=a).onload=function(){e(a.width,a.height),o||n.removeChild(a)},a.src=t.src,o||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(a))):e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t,e,i,a,n,o,h,r,s;this.sized&&!this.ready&&(t=this.element,e=this.options,i=this.image,a=t.parentNode,(s=document.createElement("div")).innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',o=(n=s.querySelector(".".concat(c,"-container"))).querySelector(".".concat(c,"-canvas")),h=n.querySelector(".".concat(c,"-drag-box")),s=(r=n.querySelector(".".concat(c,"-crop-box"))).querySelector(".".concat(c,"-face")),this.container=a,this.cropper=n,this.canvas=o,this.dragBox=h,this.cropBox=r,this.viewBox=n.querySelector(".".concat(c,"-view-box")),this.face=s,o.appendChild(i),pt(t,A),a.insertBefore(n,t.nextSibling),this.isImg||mt(i,l),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,pt(r,A),e.guides||pt(r.getElementsByClassName("".concat(c,"-dashed")),A),e.center||pt(r.getElementsByClassName("".concat(c,"-center")),A),e.background&&pt(n,"".concat(c,"-bg")),e.highlight||pt(s,p),e.cropBoxMovable&&(pt(s,u),wt(s,g,k)),e.cropBoxResizable||(pt(r.getElementsByClassName("".concat(c,"-line")),A),pt(r.getElementsByClassName("".concat(c,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),at(e.ready)&&Dt(t,"ready",e.ready,{once:!0}),Bt(t,"ready"))}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),mt(this.element,A))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(t.prototype,e),a&&n(t,a),i}();return rt(It.prototype,Rt,St,r,o,t,At),It});
