"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6981],{34067:(A,e,t)=>{t.d(e,{A:()=>L});var r=t(31738),i=function(){return(i=Object.assign||function(A){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(A[i]=e[i]);return A}).apply(this,arguments)};function n(A,e){var t={};for(i in A)Object.prototype.hasOwnProperty.call(A,i)&&e.indexOf(i)<0&&(t[i]=A[i]);if(null!=A&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(A);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(A,i[r])&&(t[i[r]]=A[i[r]]);return t}function o(A,e,t,r){return new(t=t||Promise)((function(i,n){function o(A){try{c(r.next(A))}catch(A){n(A)}}function a(A){try{c(r.throw(A))}catch(A){n(A)}}function c(A){var e;A.done?i(A.value):((e=A.value)instanceof t?e:new t((function(A){A(e)}))).then(o,a)}c((r=r.apply(A,e||[])).next())}))}function a(A,e){var t,r,i,n={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o={next:a(0),throw:a(1),return:a(2)};return"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){var l=[a,c];if(t)throw new TypeError("Generator is already executing.");for(;n=o&&l[o=0]?0:n;)try{if(t=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,(l=i?[2&l[0],i.value]:l)[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,r=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(!(i=0<(i=n.trys).length&&i[i.length-1])&&(6===l[0]||2===l[0])){n=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3]))n.label=l[1];else if(6===l[0]&&n.label<i[1])n.label=i[1],i=l;else{if(!(i&&n.label<i[2])){i[2]&&n.ops.pop(),n.trys.pop();continue}n.label=i[2],n.ops.push(l)}}l=e.call(A,n)}catch(c){l=[6,c],r=0}finally{t=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}}var c,l={formats:["webp"],imageSizes:[480,750,1080,1366,1920],quality:75,loading:"lazy",lazyBoundary:"200px",placeholder:"empty"},s={webp:"awebp",heic:"heif",avif:"avis",jpeg:"jpeg",png:"png"},u={protocol:"http://",domain:"",src:"",search:""},d={protocol:"http://",domain:"",src:"",search:"",template:"",suffix:"",templateWithoutParams:"",params:[]},g=function(A){return void 0!==A.default},m=/^(.+)~(tplv-[a-zA-Z0-9]{2,10}-.+)\.([a-zA-Z]+)\??(.*)$/,p=function(){return"undefined"==typeof window},h=function(){return"undefined"!=typeof localStorage};function f(A){if(p()||!h())return null;var e=localStorage.getItem(A);if(!e)return null;try{return JSON.parse(e)}catch(e){return console.error("imagex get localStorage key [".concat(A,"] failed"),e),null}}function y(A,e){if(p()||!h())return!1;try{var t=JSON.stringify(e);return localStorage.setItem(A,t),!0}catch(e){return console.error("imagex set localStorage key [".concat(A,"] failed"),e),!1}}var w=p()||"undefined"==typeof navigator?"":(null!=(c=navigator.userAgent)?c:"").toLocaleLowerCase(),I=function(A){return void 0!==A?0<=A.toLocaleLowerCase().indexOf("safari")&&A.toLocaleLowerCase().indexOf("chrome")<0:!p()&&0<=w.indexOf("safari")&&w.indexOf("chrome")<0},v=function(A){return void 0!==A?0<=A.toLocaleLowerCase().indexOf("firefox"):!p()&&0<=w.indexOf("firefox")},b=function(){return"undefined"!=typeof IntersectionObserver},E=new Map,z=[],x={"imagex-type":"react","imagex-version":"0.3.10"},M=new Set,D="undefined"==typeof window?r.useEffect:r.useLayoutEffect,S=function(A,e,t,r){var i;!A||null!=(i=A.src)&&i.startsWith("data:image")||A["loaded-src"]===A.src||(A["loaded-src"]=A.src,("decode"in A?A.decode():Promise.resolve()).catch((function(){})).then((function(){var i,n;A.parentNode&&(M.add(A.src),"empty"!==t&&e(!0),null!=r)&&r.current&&(i=A.naturalWidth,n=A.naturalHeight,r.current({naturalWidth:i,naturalHeight:n}))})))},G={},B=function(A){var e=A.imgStyle,t=A.errorDataURL,n=A.alt;return(A=A.error)?r.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}},A):r.createElement("div",{style:i(i({},e||{}),{color:"#C9CDD4",backgroundColor:"#F7F8FA",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"})},r.createElement("div",{style:{maxWidth:"100%",maxHeight:"100%",width:"100%",lineHeight:0,fontSize:0,textAlign:"center"}},r.createElement("img",{style:{maxWidth:"60%",verticalAlign:"middle"},src:t||"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBzdHJva2U9IiNDOUNERDQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgc3Ryb2tlLXdpZHRoPSI0IiB2aWV3Qm94PSIwIDAgNDggNDgiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDEgMjZWOWEyIDIgMCAwIDAtMi0ySDlhMiAyIDAgMCAwLTIgMnYzMGEyIDIgMCAwIDAgMiAyaDE3Ij48L3BhdGg+PHBhdGggZD0ibTI0IDMzIDktOC41VjI3cy0yIDEtMy41IDIuNUMyNy44NDEgMzEuMTU5IDI3IDMzIDI3IDMzaC0zWm0wIDAtMy41LTQuNUwxNyAzM2g3WiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNDOUNERDQiIHN0cm9rZT0ibm9uZSIgZD0iTTIwLjUgMjguNSAxNyAzM2g3bC0zLjUtNC41Wk0zMyAyNC41IDI0IDMzaDNzLjg0MS0xLjg0MSAyLjUtMy41QzMxIDI4IDMzIDI3IDMzIDI3di0yLjVaIj48L3BhdGg+PHBhdGggZmlsbD0iI0M5Q0RENCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIGQ9Ik00NiAzOGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTQuOTUtNC43ODIgMS43NCAxLjc0LTMuMDQ1IDMuMDQ2IDMuMDQ2IDMuMDQ2LTEuNzQgMS43NC0zLjA0Ny0zLjA0NS0zLjA0NiAzLjA0Ni0xLjc0LTEuNzQgMy4wNDYtMy4wNDctMy4wNDYtMy4wNDYgMS43NC0xLjc0IDMuMDQ2IDMuMDQ2IDMuMDQ2LTMuMDQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZD0iTTE3IDE1aC0ydjJoMnYtMloiPjwvcGF0aD48L3N2Zz4="})),n&&r.createElement("div",{style:{fontSize:"12px",lineHeight:1.667,textAlign:"center",padding:"8px 16px",width:"100%",overflow:"hidden",textOverflow:"ellipsis"}},n))},C=function(A){function e(A){var e=A.format||"image";return F.current[e]||(F.current[e]=function(A){var e,t,r,n,o,a,c,l,s,g,p,h,f,y,w,I,v,b,E=A.src,z=A.unoptimized,x=A.layout,M=A.quality,D=A.sizes,S=A.loader,G=A.imageSizes,B=void 0===(C=A.format)?"image":C,C=A.width,W=A.wrapperElement;return A=A.ssr,E?z?{src:E}:(G=(z=function(A,e,t,r,i,n){var o;return n?{widths:[0],kind:"x"}:i?{widths:A,kind:"w"}:"fill"===t?(o=(null==(i=null==(n=r.current)?void 0:n.parentElement)?void 0:i.clientWidth)||0,{widths:Array.from(new Set([o,2*o].map((function(e){return 0<A.length?A.find((function(A){return e<=A}))||A[A.length-1]:e})))),kind:"x"}):"responsive"===t?(o=(null==(i=null==(n=r.current)?void 0:n.parentElement)?void 0:i.clientWidth)||0,r=parseInt((null==(i=null==(n=null==(t=r.current)?void 0:t.parentElement)?void 0:n.style)?void 0:i.paddingLeft)||"0")+parseInt((null==(i=null==(n=null==(t=r.current)?void 0:t.parentElement)?void 0:n.style)?void 0:i.paddingRight)||"0"),t=Math.max(o-r,0),{widths:Array.from(new Set([t,2*t].map((function(e){return 0<A.length?A.find((function(A){return e<=A}))||A[A.length-1]:e})))),kind:"x"}):void 0!==e?{widths:Array.from(new Set([e,2*e].map((function(e){return 0<A.length?A.find((function(A){return e<=A}))||A[A.length-1]:e})))),kind:"x"}:{widths:[0],kind:"x"}}(G,C,x,W,D,A)).widths,e=z.kind,function(A){return m.test(A)}(E)?(C=function(A){try{var e=A.startsWith("http")?A:(A.startsWith("//")?"https:":"http://").concat(A),t=new URL(e),r=m.exec(t.pathname.slice(1)),n={protocol:t.protocol,domain:t.hostname,src:r[1],template:r[2],suffix:r[3],search:t.search},o=(n.template||"").split(":");return i(i({},n),{templateWithoutParams:o.shift()||"",params:o})}catch(A){return console.error(A),d}}(E),t=C.src,r=C.protocol,n=C.domain,o=C.suffix,a=C.template,c=C.search,l=C.templateWithoutParams,s=C.params,G.length<=1?{srcSet:v=S({src:t,width:G[0]||0,quality:M,format:B,extra:{suffix:o,template:a,templateWithoutParams:l,params:s,search:c,protocol:r,domain:n,origin:E}}),src:v}:(g=G.map((function(A){return S({src:t,width:A,quality:M,format:B,extra:{suffix:o,template:a,templateWithoutParams:l,params:s,search:c,protocol:r,domain:n,origin:E}})})),{srcSet:G.map((function(A,t){return"".concat(g[t]," ").concat("w"===e?A:t+1).concat(e)})).join(", "),sizes:"w"===e?D:void 0,src:g[g.length-1]})):function(A){return A.startsWith("tos://")||A.startsWith("TOS://")}(E)?(p=E.slice(6),G.length<=1?{srcSet:v=S({src:p,width:G[0]||0,quality:M,format:B,extra:{origin:E}}),src:v}:(h=G.map((function(A){return S({src:p,width:A,quality:M,format:B,extra:{origin:E}})})),{srcSet:G.map((function(A,t){return"".concat(h[t]," ").concat("w"===e?A:t+1).concat(e)})).join(", "),sizes:"w"===e?D:void 0,src:h[h.length-1]})):(x=function(A){try{var e=A.startsWith("http")?A:(A.startsWith("//")?"https:":"http://").concat(A),t=new URL(e);return{protocol:t.protocol,domain:t.hostname,src:t.pathname.slice(1),search:t.search}}catch(A){return u}}(E),f=x.src,y=x.protocol,w=x.domain,I=x.search,G.length<=1?{srcSet:v=S({src:f,width:G[0]||0,quality:M,format:B,extra:{protocol:y,domain:w,search:I,origin:E}}),src:v}:(b=G.map((function(A){return S({src:f,width:A,quality:M,format:B,extra:{protocol:y,domain:w,search:I,origin:E}})})),{srcSet:G.map((function(A,t){return"".concat(b[t]," ").concat("w"===e?A:t+1).concat(e)})).join(", "),sizes:"w"===e?D:void 0,src:b[b.length-1]}))):{src:""}}(A)),F.current[e]}var t,o=A.formats,a=A.src,c=A.srcString,l=A.unoptimized,g=A.layout,p=A.loader,h=A.imageSizes,f=void 0===(w=A.quality)?75:w,y=A.sizes,w=A.placeholderStyle,b=A.imgStyle,E=A.isVisible,z=A.width,M=A.height,D=A.setPlaceholderComplete,G=A.placeholder,C=A.setTarget,W=A.onLoadingCompleteRef,L=A.onLoad,N=A.onError,Z=A.wrapperElement,Q=A.errorDataURL,R=A.error,j=A.supportWebP,k=A.supportAVIF,P=A.ssr,H=A.ua,Y=n(A,["formats","src","srcString","unoptimized","layout","loader","imageSizes","quality","sizes","placeholderStyle","imgStyle","isVisible","width","height","setPlaceholderComplete","placeholder","setTarget","onLoadingCompleteRef","onLoad","onError","wrapperElement","errorDataURL","error","supportWebP","supportAVIF","ssr","ua"]),U=(T=(0,r.useState)(!1))[0],O=T[1],F=(0,r.useRef)({}),T=((0,r.useEffect)((function(){F.current={}}),[c,l,g,f,y,p,h,z,Z]),(0,r.useCallback)((function(A){C(A),null!=A&&A.complete&&S(A,D,G,W)}),[D,G,C,W]));return l?r.createElement(r.Fragment,null,r.createElement("img",i({},Y,{ref:T,decoding:"async",style:i(i({},b),w),width:z,height:M},E?e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,quality:f,sizes:y,wrapperElement:Z}):{src:a},{onLoad:function(A){O(!1);var e=A.currentTarget;S(e,D,G,W),L&&L(A)},onError:function(A){c&&("empty"!==G&&D(!0),O(!0)),N&&N(A)}},x)),U&&"raw"!==g&&B({imgStyle:b,alt:A.alt,errorDataURL:Q,error:R})):c?(t=o||[],v(H)&&(t=t.filter((function(A){return"avif"!==A||!P&&k}))),P?I(H)||"empty"===H?r.createElement(r.Fragment,null,r.createElement("img",i({},Y,{ref:T,decoding:"async",style:i(i({},b),w),width:z,height:M,src:e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,quality:f,sizes:y,wrapperElement:Z,ssr:P}).src,onLoad:function(A){O(!1);var e=A.currentTarget;S(e,D,G,W),L&&L(A)},onError:function(A){c&&("empty"!==G&&D(!0),O(!0)),N&&N(A)}},x)),U&&"raw"!==g&&B({imgStyle:b,alt:A.alt,errorDataURL:Q,error:R})):r.createElement("picture",null,Array.isArray(t)&&0<(null==t?void 0:t.length)&&t.map((function(A){return r.createElement("source",{key:A,type:"image/".concat(A),srcSet:e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,format:s[A],quality:f,sizes:y,wrapperElement:Z,ssr:P}).srcSet})})),r.createElement("img",i({},Y,{ref:T,decoding:"async",style:i(i({},b),w),width:z,height:M},e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,quality:f,sizes:y,wrapperElement:Z,ssr:P}),{onLoad:function(A){O(!1);var e=A.currentTarget;S(e,D,G,W),L&&L(A)},onError:function(A){c&&("empty"!==G&&D(!0),O(!0)),N&&N(A)}},x))):r.createElement(r.Fragment,null,I()?r.createElement("img",i({},Y,{ref:T,decoding:"async",style:i(i({},b),w),width:z,height:M},E?e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,quality:f,sizes:y,wrapperElement:Z,format:null!=o&&o.includes("webp")&&j?s.webp:void 0}):{src:a},{onLoad:function(A){O(!1);var e=A.currentTarget;S(e,D,G,W),L&&L(A)},onError:function(A){c&&("empty"!==G&&D(!0),O(!0)),N&&N(A)}},x)):r.createElement("picture",null,E&&Array.isArray(t)&&0<(null==t?void 0:t.length)&&t.map((function(A){return r.createElement("source",i({key:A,type:"image/".concat(A)},e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,format:s[A],quality:f,sizes:y,wrapperElement:Z})))})),r.createElement("img",i({},Y,{ref:T,decoding:"async",style:i(i({},b),w),width:z,height:M},E?e({src:c,unoptimized:l,width:z,height:M,layout:g,loader:p,imageSizes:h,quality:f,sizes:y,wrapperElement:Z}):{src:a},{onLoad:function(A){O(!1);var e=A.currentTarget;S(e,D,G,W),L&&L(A)},onError:function(A){c&&("empty"!==G&&D(!0),O(!0)),N&&N(A)}},x))),U&&"raw"!==g&&B({imgStyle:b,alt:A.alt,errorDataURL:Q,error:R}))):r.createElement("img",i({},Y,{style:i(i({},b),w),width:z,height:M,src:a},x))},W=function(A){return A.src},L=function(A){var e,t=(c=(0,r.useState)(!1))[0],c=c[1],s=(0,r.useRef)(null),u=function(A){void 0===A&&(A=!1),p()||(e="boolean"==typeof window.imagex_support_webp?window.imagex_support_webp:"boolean"==typeof(e=f("imagex_support_webp"))&&f("imagex_ua")===w?e:void 0);var e,t=(A=(0,r.useState)(!A&&e))[0],i=A[1];return(0,r.useEffect)((function(){void 0===t&&o(void 0,void 0,void 0,(function(){var A;return a(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(A){var e=new Image;e.onload=function(){var t=160===(null==e?void 0:e.height);A(t)},e.onerror=function(){A(!1)},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvn8AnAAdQiUpUov+BiOh/AAA="}))];case 1:return A=e.sent(),p()||(window.imagex_support_webp=A),i(A),y("imagex_support_webp",A),y("imagex_ua",w),[2]}}))})).catch(console.error)}),[t]),[t]}(!I())[0],d=function(A){void 0===A&&(A=!1),p()||(e="boolean"==typeof window.imagex_support_avif?window.imagex_support_avif:"boolean"==typeof(e=f("imagex_support_avif"))&&f("imagex_ua")===w?e:void 0);var e,t=(A=(0,r.useState)(!A&&e))[0],i=A[1];return(0,r.useEffect)((function(){void 0===t&&o(void 0,void 0,void 0,(function(){var A;return a(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(A){var e=new Image;e.onload=function(){var t=1===(null==e?void 0:e.width);A(t)},e.onerror=function(){A(!1)},e.src="data:image/avif;base64,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"}))];case 1:return A=e.sent(),p()||(window.imagex_support_avif=A),i(A),y("imagex_support_avif",A),y("imagex_ua",w),[2]}}))})).catch(console.error)}),[t]),[t]}(!v())[0],m=void 0!==A.width&&void 0!==A.height?"data:image/svg+xml;base64,".concat(function(A){return"undefined"!=typeof btoa?btoa(A):"undefined"!=typeof Buffer?Buffer.from(A,"base64").toString():""}('<svg width="'.concat(A.width,'" height="').concat(A.height,'" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>'))):"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",h=(A=function(A){return i(i({},A||{}),{formats:Array.isArray(A.formats)?Array.from(new Set(A.formats)):void 0})}(i(i(i({},l),G),A))).lazyBoundary,x=A.lazyRoot,S=A.onLoadingComplete,B=void 0!==(B=A.unoptimized)&&B,L=void 0===(N=A.src)?"":N,N=A.objectFit,Z=A.objectPosition,Q=A.loading,R=n(A,["lazyBoundary","lazyRoot","onLoadingComplete","unoptimized","src","objectFit","objectPosition","loading"]),j=function(A){return function(A){return"object"==typeof A&&(g(A)||function(A){return void 0!==A.src}(A))}(A)?(g(A)?A.default:A).src:A}(A.src),k=(Q="lazy"===Q||void 0===Q,((L="string"==typeof L?L:j).startsWith("data:")||L.startsWith("blob:"))&&(Q=!(B=!0)),"undefined"!=typeof window&&M.has(L)&&(Q=!1),A.ssr&&(Q=!1),x=function(A){var e=A.rootRef,t=A.rootMargin,i=(A=A.disabled)||!b(),n=(0,r.useRef)(),o=(A=(0,r.useState)(A||!1))[0],a=A[1],c=(A=(0,r.useState)(e?e.current:null))[0],l=A[1],s=((0,r.useEffect)((function(){b()||o||a(!0)}),[o]),(0,r.useEffect)((function(){e&&l(e.current)}),[e]),A=(0,r.useCallback)((function(A){n.current&&(n.current(),n.current=void 0),i||o||A&&A.tagName&&(n.current=function(A,e,t){t=function(A){var e,t={root:A.root||null,margin:A.rootMargin||""},r=z.find((function(A){return A.root===t.root&&A.margin===t.margin}));return r?E.get(r):(e=new Map,r=new IntersectionObserver((function(A){A.forEach((function(A){var t=e.get(A.target);A=A.isIntersecting||0<A.intersectionRatio,t&&A&&t(A)}))}),A),A={id:t,observer:r,elements:e},z.push(t),E.set(t,A),A)}(t);var r=t.id,i=t.observer,n=t.elements;return n.set(A,e),i.observe(A),function(){var e;n.delete(A),i.unobserve(A),0===n.size&&(i.disconnect(),E.delete(r),-1<(e=z.findIndex((function(A){return A.root===r.root&&A.margin===r.margin}))))&&z.splice(e,1)}}(A,(function(A){return A&&a(A)}),{root:c,rootMargin:t}))}),[i,c,t,o]),(0,r.useCallback)((function(){a(!1)}),[]));return[A,o,s]}({rootRef:x||null,rootMargin:h,disabled:!Q}),h=x[0],x[1]),P=x[2],H=(x=!1,x=!!A.ssr||(!Q||k)&&!!L&&(!I()||void 0!==u)&&(!v()||void 0!==d),(0,r.useRef)(S)),Y=((0,r.useEffect)((function(){H.current=S}),[S]),(0,r.useRef)(L)),U=(D((function(){Y.current!==L&&(P(),Y.current=L)}),[P,L]),Q=A.layout||(A.sizes?"responsive":"intrinsic"),k={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},{boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0}),O="raw"===A.layout?{}:{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:Z};return t="empty"===A.placeholder||t?{}:{backgroundSize:N||"cover",backgroundImage:'url("'.concat("skeleton"===A.placeholder?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwLDAsMjAlLDEwMCUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjJGM0Y1IiBvZmZzZXQ9IjI1JSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U1RTZFQiIgb2Zmc2V0PSIzNyUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMkYzRjUiIG9mZnNldD0iNjMlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiIC8+CiAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0zMDAlIiB0bz0iMCUiIGR1cj0iMS41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgo8L3N2Zz4=":A.placeholder,'")'),backgroundPosition:Z||"0% 0%"},N=!1,"fill"===Q?(k.display="block",k.position="absolute",k.top=0,k.left=0,k.bottom=0,k.right=0):void 0!==A.width&&void 0!==A.height&&("intrinsic"===Q?(k.display="inline-block",k.position="relative",N=!0,U.maxWidth=k.maxWidth="100%",e="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(A.width,"%27%20height=%27").concat(A.height,"%27/%3e")):"responsive"===Q?(Z=A.height/A.width,Z=isNaN(Z)?"100%":"".concat(100*Z,"%"),k.display="block",k.position="relative",N=!0,U.paddingTop=Z):"fixed"===Q&&(k.display="inline-block",k.position="relative",k.width=A.width,k.height=A.height)),Z=i(i({},R),{src:m,srcString:j,loader:A.loader||W,imageSizes:A.imageSizes,placeholderStyle:t,isVisible:x,unoptimized:B,setPlaceholderComplete:c,setTarget:h,imgStyle:Object.assign({},A.style,O),onLoadingCompleteRef:H,wrapperElement:s,supportWebP:u,supportAVIF:d}),r.createElement(r.Fragment,null,"raw"===A.layout?r.createElement(C,i({},Z)):r.createElement("span",{ref:s,style:k},N&&r.createElement("span",{style:U},e&&r.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:e})),r.createElement(C,i({},Z))))}}}]);