"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[5461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u987a\u5e8f\u5bb9\u5668/forward_list",id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u987a\u5e8f\u5bb9\u5668/forward_list",title:"forward_list",description:"\u4e00\u3001\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/02-STL/01-\u987a\u5e8f\u5bb9\u5668/01-forward_list.mdx",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/02-STL/01-\u987a\u5e8f\u5bb9\u5668",slug:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u987a\u5e8f\u5bb9\u5668/forward_list",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u987a\u5e8f\u5bb9\u5668/forward_list",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"CPP_Language",previous:{title:"\u987a\u5e8f\u5bb9\u5668",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u987a\u5e8f\u5bb9\u5668/"},next:{title:"string",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/Temp/string/"}},p={},d=[{value:"\u4e00\u3001\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c",id:"\u4e00\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c",level:2}],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c"},"\u4e00\u3001\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lst.before_begin()"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"lst.cbefore_begin()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6307\u5411\u94fe\u8868\u9996\u5143\u7d20\u524d\u7684\u8fed\u4ee3\u5668\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lst.insert_after(p, t)"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"lst.insert_after(p, n, t)"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"lst.insert_after(p, b, e)"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"lst.insert_after(p, il)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u8fed\u4ee3\u5668",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u4e4b\u540e\u7684\u4f4d\u7f6e\u63d2\u5165\u5143\u7d20\u3002",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"t"),"\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"n"),"\u662f\u6570\u91cf\uff1b",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"e"),"\u662f\u8868\u793a\u8303\u56f4\u7684\u4e00\u5bf9\u8fed\u4ee3\u5668\uff08",(0,a.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"e"),"\u4e0d\u80fd\u6307\u5411",(0,a.kt)("inlineCode",{parentName:"td"},"lst"),"\u5185\uff09",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"il"),"\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"td"},"initializer_list"),"\u5217\u8868\u3002",(0,a.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u6700\u540e\u4e00\u4e2a\u63d2\u5165\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u3002\u5982\u679c\u8303\u56f4\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u3002",(0,a.kt)("br",null),"\u82e5",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u4e3a\u5c3e\u540e\u8fed\u4ee3\u5668\uff0c\u5219\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"emplace_after(p, args)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"td"},"args"),"\u5728",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5b9a\u7684\u4f4d\u7f6e\u4e4b\u540e\u521b\u5efa\u4e00\u4e2a\u5143\u7d20\u3002",(0,a.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u8fd9\u4e2a\u65b0\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u3002",(0,a.kt)("br",null),"\u82e5",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u4e3a\u5c3e\u540e\u8fed\u4ee3\u5668\uff0c\u5219\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lst.erase_after(p)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5220\u9664",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411\u7684\u4f4d\u7f6e\u4e4b\u540e\u7684\u5143\u7d20\uff0c\u6216\u5220\u9664\u4ece",(0,a.kt)("inlineCode",{parentName:"td"},"b"),"\u4e4b\u540e\u76f4\u5230\uff08\u4f46\u4e0d\u5305\u542b\uff09",(0,a.kt)("inlineCode",{parentName:"td"},"e"),"\u4e4b\u95f4\u7684\u5143\u7d20\u3002",(0,a.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u88ab\u5220\u5143\u7d20\u4e4b\u540e\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff0c\u82e5\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u5143\u7d20\uff0c\u5219\u8fd4\u56de\u5c3e\u540e\u8fed\u4ee3\u5668\u3002",(0,a.kt)("br",null),"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411",(0,a.kt)("inlineCode",{parentName:"td"},"lst"),"\u7684\u5c3e\u5143\u7d20\u6216\u8005\u662f\u4e00\u4e2a\u5c3e\u540e\u8fed\u4ee3\u5668\uff0c\u5219\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")))))}c.isMDXComponent=!0}}]);