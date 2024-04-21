"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[7138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>C});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),k=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(d.Provider,{value:t},e.children)},o="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=k(n),s=l,C=o["".concat(d,".").concat(s)]||o[s]||N[s]||r;return n?a.createElement(C,i(i({ref:t},m),{},{components:n})):a.createElement(C,i({ref:t},m))}));function C(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const r={},i=void 0,p={unversionedId:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/string",id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/string",title:"string",description:"\u4e00\u3001\u6784\u9020 string \u7684\u5176\u4ed6\u65b9\u6cd5",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/02-STL/02-\u5bb9\u5668/01-\u987a\u5e8f\u5bb9\u5668/02-string.mdx",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/02-STL/02-\u5bb9\u5668/01-\u987a\u5e8f\u5bb9\u5668",slug:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/string",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/string",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"CPP_Language",previous:{title:"forward_list",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/forward_list"},next:{title:"\u5bb9\u5668\u9002\u914d\u5668",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u5bb9\u5668\u9002\u914d\u5668"}},d={},k=[{value:"\u4e00\u3001\u6784\u9020 string \u7684\u5176\u4ed6\u65b9\u6cd5",id:"\u4e00\u6784\u9020-string-\u7684\u5176\u4ed6\u65b9\u6cd5",level:2},{value:"\u4e8c\u3001\u83b7\u53d6\u5b50\u5b57\u7b26\u4e32",id:"\u4e8c\u83b7\u53d6\u5b50\u5b57\u7b26\u4e32",level:2},{value:"\u4e09\u3001\u4fee\u6539 string",id:"\u4e09\u4fee\u6539-string",level:2},{value:"\u56db\u3001string \u641c\u7d22",id:"\u56dbstring-\u641c\u7d22",level:2},{value:"\u4e94\u3001string \u6bd4\u8f83",id:"\u4e94string-\u6bd4\u8f83",level:2},{value:"\u516d\u3001\u6570\u503c\u8f6c\u6362",id:"\u516d\u6570\u503c\u8f6c\u6362",level:2},{value:"\u4e03\u3001\u8f93\u5165\u8f93\u51fa",id:"\u4e03\u8f93\u5165\u8f93\u51fa",level:2},{value:"\u516b\u3001\u5b57\u7b26\u4e32\u8fde\u63a5",id:"\u516b\u5b57\u7b26\u4e32\u8fde\u63a5",level:2},{value:"\u4e5d\u3001\u4e0e\u65e7\u4ee3\u7801\u7684\u63a5\u53e3",id:"\u4e5d\u4e0e\u65e7\u4ee3\u7801\u7684\u63a5\u53e3",level:2}],m={toc:k},o="wrapper";function N(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u6784\u9020-string-\u7684\u5176\u4ed6\u65b9\u6cd5"},"\u4e00\u3001\u6784\u9020 string \u7684\u5176\u4ed6\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"len2"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"pos2"),"\u90fd\u662f\u65e0\u7b26\u53f7\u503c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string s(cp)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"cp"),"\u6307\u5411\u7684 C \u98ce\u683c\u5b57\u7b26\u4e32\u4e2d\u4e0d\u5305\u542b\u672b\u5c3e\u7a7a\u5b57\u7b26\u7684\u62f7\u8d1d\u3002\u975e",(0,l.kt)("inlineCode",{parentName:"td"},"explicit"),"\uff0c\u6545\u53ef\u62f7\u8d1d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string s(cp, n)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"cp"),"\u6307\u5411\u7684\u6570\u7ec4\u4e2d\u524d",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u5b57\u7b26\u7684\u62f7\u8d1d\u3002",(0,l.kt)("br",null),"\u6b64\u6570\u7ec4\u81f3\u5c11\u5e94\u8be5\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string s(s2, pos2)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"string s2"),"\u4ece\u4e0b\u6807",(0,l.kt)("inlineCode",{parentName:"td"},"pos2"),"\u5f00\u59cb\u7684\u5b57\u7b26\u7684\u62f7\u8d1d\u3002",(0,l.kt)("br",null),"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"pos2>s2.size()"),"\uff0c\u6784\u9020\u51fd\u6570\u7684\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string s(s2, pos2, len2)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"string s2"),"\u4ece\u4e0b\u6807",(0,l.kt)("inlineCode",{parentName:"td"},"pos2"),"\u5f00\u59cb",(0,l.kt)("inlineCode",{parentName:"td"},"len2"),"\u4e2a\u5b57\u7b26\u7684\u62f7\u8d1d\u3002",(0,l.kt)("br",null),"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"pos2>s2.size()"),"\uff0c\u6784\u9020\u51fd\u6570\u7684\u884c\u4e3a\u672a\u5b9a\u4e49\u3002",(0,l.kt)("br",null),"\u4e0d\u7ba1",(0,l.kt)("inlineCode",{parentName:"td"},"len2"),"\u7684\u503c\u662f\u591a\u5c11\uff0c\u6784\u9020\u51fd\u6570\u81f3\u591a\u62f7\u8d1d",(0,l.kt)("inlineCode",{parentName:"td"},"s2.size()-pos2"),"\u4e2a\u5b57\u7b26")))),(0,l.kt)("h2",{id:"\u4e8c\u83b7\u53d6\u5b50\u5b57\u7b26\u4e32"},"\u4e8c\u3001\u83b7\u53d6\u5b50\u5b57\u7b26\u4e32"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.substr(pos, n)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"\uff0c\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u4ece",(0,l.kt)("inlineCode",{parentName:"td"},"pos"),"\u5f00\u59cb\u76f4\u5230",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7ed3\u675f\u7684\u5b57\u7b26\u7684\u62f7\u8d1d\u3002",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"pos"),"\u7684\u9ed8\u8ba4\u503c\u4e3a 0\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u7684\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"s.size()-pos"),"\uff0c\u6545\u6709\u4e09\u79cd\u8c03\u7528\u65b9\u5f0f\u3002",(0,l.kt)("br",null),"\u6ce8\uff1a\u5982\u679c\u5f00\u59cb\u4f4d\u7f6e\u8d85\u8fc7\u4e86",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"\u7684\u5927\u5c0f\uff0c\u5219",(0,l.kt)("inlineCode",{parentName:"td"},"substr"),"\u51fd\u6570\u629b\u51fa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"td"},"out_of_range"),"\u5f02\u5e38")))),(0,l.kt)("h2",{id:"\u4e09\u4fee\u6539-string"},"\u4e09\u3001\u4fee\u6539 string"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.insert(pos, args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"pos"),"\u4e4b\u524d\u63d2\u5165",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u6307\u5b9a\u7684\u5b57\u7b26\u3002",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"pos"),"\u53ef\u4ee5\u662f\u4e00\u4e2a\u4e0b\u6807\u6216\u4e00\u4e2a\u8fed\u4ee3\u5668\u3002",(0,l.kt)("br",null),"\u63a5\u53d7\u4e0b\u6807\u7684\u7248\u672c\u8fd4\u56de\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u5f15\u7528\uff1b\u63a5\u53d7\u8fed\u4ee3\u5668\u7684\u7248\u672c\u8fd4\u56de\u6307\u5411\u7b2c\u4e00\u4e2a\u63d2\u5165\u5b57\u7b26\u7684\u8fed\u4ee3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.erase(pos, len)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u4ece\u4f4d\u7f6e",(0,l.kt)("inlineCode",{parentName:"td"},"pos"),"\u5f00\u59cb\u7684\u7b2c",(0,l.kt)("inlineCode",{parentName:"td"},"len"),"\u4e2a\u5b57\u7b26\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"td"},"len"),"\u88ab\u7701\u7565\uff0c\u5219\u5220\u9664\u4ece",(0,l.kt)("inlineCode",{parentName:"td"},"pos"),"\u5f00\u59cb\u76f4\u81f3",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u672b\u5c3e\u7684\u6240\u6709\u5b57\u7b26\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u5f15\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.assign(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u7684\u5b57\u7b26\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u6307\u5b9a\u7684\u5b57\u7b26\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u5f15\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.append(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u8ffd\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u5f15\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.replace(range, args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"td"},"range"),"\u5185\u7684\u5b57\u7b26\uff0c\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u6307\u5b9a\u7684\u5b57\u7b26\u3002",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"range"),"\u53ef\u4ee5\u662f\u4e00\u4e2a\u4e0b\u6807+\u4e00\u4e2a\u957f\u5ea6\uff0c\u6216\u8005\u662f\u4e00\u5bf9\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u8fed\u4ee3\u5668\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u5f15\u7528")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"append"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"assign"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"args"),"\u53ef\u4ee5\u662f\u4e0b\u5217\u4efb\u4f55\u5f62\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),"\uff1a\u5b57\u7b26\u4e32",(0,l.kt)("inlineCode",{parentName:"li"},"str"),"\uff0c\u4e0d\u80fd\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"len"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"str"),"\u4e2d\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u5f00\u59cb\u6700\u591a",(0,l.kt)("inlineCode",{parentName:"li"},"len"),"\u4e2a\u5b57"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"len"),"\uff1a\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684\u5b57\u7b26\u6570\u7ec4\u7684\u524d\uff08\u6700\u591a\uff09",(0,l.kt)("inlineCode",{parentName:"li"},"len"),"\u4e2a\u5b57\u7b26"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684\u4ee5\u7a7a\u5b57\u7b26\u7ed3\u5c3e\u7684\u5b57\u7b26\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"c"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"n"),"\u4e2a\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"li"},"c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"e"),"\uff1a\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"li"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"e"),"\u6307\u5b9a\u7684\u8303\u56f4\u5185\u7684\u5b57\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u5217\u8868\uff1a\u82b1\u62ec\u53f7\u5305\u56f4\u7684\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u5217\u8868"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"replace"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"args"),"\u7684\u60c5\u51b5\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"args"),"\u53ef\u4ee5\u662f"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"replace(pos, len, args)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"replace(b, e, args)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"insert(pos, args)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"insert(iter, args)")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str, pos, len")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cp, len")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n, c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b2, e2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")))))),(0,l.kt)("h2",{id:"\u56dbstring-\u641c\u7d22"},"\u56db\u3001string \u641c\u7d22"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u641c\u7d22\u64cd\u4f5c\u7edf\u4e00\u8fd4\u56de\u6307\u5b9a\u5b57\u7b26\u51fa\u73b0\u7684\u4e0b\u6807\uff0c\u5982\u679c\u672a\u627e\u5230\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"npos")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.find(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.rfind(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.find_first_of(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u4e2d\u4efb\u4f55\u4e00\u4e2a\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.find_last_of(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u4e2d\u4efb\u4f55\u4e00\u4e2a\u5b57\u7b26\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.find_first_not_of(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u67e5\u627e\u7b2c\u4e00\u4e2a\u4e0d\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u4e2d\u7684\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.find_last_not_of(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u67e5\u627e\u6700\u540e\u4e00\u4e2a\u4e0d\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u4e2d\u7684\u5b57\u7b26")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"args"),"\u5fc5\u987b\u662f\u4ee5\u4e0b\u5f62\u5f0f\u4e4b\u4e00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"c, pos"),"\uff1a\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d\u4f4d\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u5f00\u59cb\u67e5\u627e\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"li"},"c"),"\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u9ed8\u8ba4\u4e3a 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2, pos"),"\uff1a\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d\u4f4d\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u5f00\u59cb\u67e5\u627e\u5b57\u7b26\u4e32",(0,l.kt)("inlineCode",{parentName:"li"},"s2"),"\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u9ed8\u8ba4\u4e3a 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp, pos"),"\uff1a\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d\u4f4d\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u5f00\u59cb\u67e5\u627e\u6307\u9488",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684 C \u98ce\u683c\u5b57\u7b26\u4e32\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u9ed8\u8ba4\u4e3a 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp, pos, n"),"\uff1a\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d\u4f4d\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u5f00\u59cb\u67e5\u627e\u6307\u9488",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684\u6570\u7ec4\u7684\u524d",(0,l.kt)("inlineCode",{parentName:"li"},"n"),"\u4e2a\u5b57\u7b26\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"pos"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"n"),"\u65e0\u9ed8\u8ba4\u503c")))),(0,l.kt)("h2",{id:"\u4e94string-\u6bd4\u8f83"},"\u4e94\u3001string \u6bd4\u8f83"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s.compare(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83.",(0,l.kt)("br",null),"\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u662f\u7b49\u4e8e\u3001\u5927\u4e8e\u8fd8\u662f\u5c0f\u4e8e\u53c2\u6570\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de 0\u3001\u6574\u6570\u6216\u8d1f\u6570")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"args"),"\u7684\u51e0\u79cd\u53c2\u6570\u5f62\u5f0f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s2"),"\uff1a\u6bd4\u8f83",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"s2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pos1, n1, s2"),"\uff1a\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"pos1"),"\u5f00\u59cb\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"n1"),"\u4e2a\u5b57\u7b26\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"s2"),"\u8fdb\u884c\u6bd4\u8f83"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pos1, n1, s2, pos2, n2"),"\uff1a\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"pos1"),"\u5f00\u59cb\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"n1"),"\u4e2a\u5b57\u7b26\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"s2"),"\u4e2d\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"pos2"),"\u5f00\u59cb\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"n2"),"\u4e2a\u5b57\u7b26\u8fdb\u884c\u6bd4\u8f83"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\uff1a\u6bd4\u8f83",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684 C \u98ce\u683c\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pos1, n1, cp"),"\uff1a\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"pos1"),"\u5f00\u59cb\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"n1"),"\u4e2a\u5b57\u7b26\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684 C \u98ce\u683c\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pos1, n1, cp, n2"),"\uff1a\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u4e2d\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"pos1"),"\u5f00\u59cb\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"n1"),"\u4e2a\u5b57\u7b26\u4e0e\u6307\u9488",(0,l.kt)("inlineCode",{parentName:"li"},"cp"),"\u6307\u5411\u7684\u5730\u5740\u5f00\u59cb\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"n2"),"\u4e2a\u5b57\u7b26\u8fdb\u884c\u6bd4\u8f83")))),(0,l.kt)("h2",{id:"\u516d\u6570\u503c\u8f6c\u6362"},"\u516d\u3001\u6570\u503c\u8f6c\u6362"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"to_string(val)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u7ec4\u91cd\u8f7d\u51fd\u6570\uff0c\u8fd4\u56de\u6570\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"val"),"\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"\u8868\u793a\u3002",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"val"),"\u53ef\u4ee5\u662f\u4efb\u4f55\u7b97\u6570\u7c7b\u578b\u3002\u5bf9\u6bcf\u4e2a\u6d6e\u70b9\u7c7b\u578b\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"int"),"\u6216\u66f4\u5927\u7684\u6574\u578b\uff0c\u90fd\u6709\u76f8\u5e94\u7248\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"to_string"),".",(0,l.kt)("br",null),"\u4e0e\u5f80\u5e38\u4e00\u6837\uff0c\u5c0f\u6574\u578b\u4f1a\u88ab\u63d0\u5347")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stoi(s, p, b)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"stol(s, p, b)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"stoul(s, p, b)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"stoll(s, p, b)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"stoull(s, p, b)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u8d77\u59cb\u5b50\u4e32\uff08\u8868\u793a\u6574\u6570\u5185\u5bb9\uff09\u7684\u6570\u503c",(0,l.kt)("br",null),"\u8fd4\u56de\u503c\u7c7b\u578b\u5206\u522b\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"int"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"long"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"unsigned long"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"long long"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"unsigned long long"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u8868\u793a\u8f6c\u6362\u6240\u7528\u7684\u57fa\u6570\uff08\u8fdb\u5236\uff09\uff0c\u9ed8\u8ba4\u503c\u662f 10\u3002",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"size_t"),"\u6307\u9488\uff0c\u7528\u6765\u4fdd\u5b58",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u7b2c\u4e00\u4e2a\u975e\u6570\u503c\u5b57\u7b26\u7684\u4e0b\u6807\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u9ed8\u8ba4\u4e3a 0\uff0c\u5373\u51fd\u6570\u4e0d\u4fdd\u5b58\u4e0b\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stof(s, p)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"stod(s, p)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"stold(s, p)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u8d77\u59cb\u5b50\u4e32\uff08\u8868\u793a\u6d6e\u70b9\u6570\u5185\u5bb9\uff09\u7684\u6570\u503c\uff0c",(0,l.kt)("br",null),"\u8fd4\u56de\u503c\u7c7b\u578b\u5206\u522b\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"float"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"double"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"long double"),(0,l.kt)("br",null),"\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u7684\u4f5c\u7528\u4e0e\u6574\u6570\u8f6c\u6362\u51fd\u6570\u4e2d\u4e00\u6837\u3002")))),(0,l.kt)("h2",{id:"\u4e03\u8f93\u5165\u8f93\u51fa"},"\u4e03\u3001\u8f93\u5165\u8f93\u51fa"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"os << str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"str"),"\u5199\u5165\u5230\u8f93\u51fa\u6d41",(0,l.kt)("inlineCode",{parentName:"td"},"os"),"\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is >> str")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u8f93\u5165\u6d41",(0,l.kt)("inlineCode",{parentName:"td"},"is"),"\u4e2d\u5c06\u5185\u5bb9\u5199\u5165",(0,l.kt)("inlineCode",{parentName:"td"},"str"),"\u4e2d\uff0c\u4ece\u7b2c\u4e00\u4e2a\u975e\u7a7a\u767d\u7b26\u5f00\u59cb\u5230\u7a7a\u767d\u7b26\u7ed3\u675f\uff0c\u4e0d\u5305\u62ec\u6700\u540e\u9047\u5230\u7684\u7a7a\u767d\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getline(is, str)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u8f93\u5165\u6d41",(0,l.kt)("inlineCode",{parentName:"td"},"is"),"\u8bfb\u53d6\u4e00\u884c\u5185\u5bb9\u5230",(0,l.kt)("inlineCode",{parentName:"td"},"str"),"\u4e2d\uff0c\u4e0d\u5305\u542b\u6362\u884c\u7b26")))),(0,l.kt)("h2",{id:"\u516b\u5b57\u7b26\u4e32\u8fde\u63a5"},"\u516b\u3001\u5b57\u7b26\u4e32\u8fde\u63a5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str1 + str2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"str1"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"str2"),"\u8fde\u63a5\u540e\u7684\u7ed3\u679c")))),(0,l.kt)("admonition",{title:"string \u5bf9\u8c61\u4e0e\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u6df7\u5408\u76f8\u52a0",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u4e00\u4e2a\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u7684\u5730\u65b9\u5982\u679c\u4f7f\u7528\u5b57\u7b26\u4e32\u5b57\u9762\u503c\uff0c\u8be5\u5b57\u9762\u503c\u53ef\u4ee5\u81ea\u52a8\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u3002\u6545\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u4e0e\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u6df7\u5408\u76f8\u52a0\u65f6\uff0c\u9700\u8981\u8003\u8651",(0,l.kt)("inlineCode",{parentName:"p"},"+"),"\u64cd\u4f5c\u7b26\u7684\u7ed3\u5408\u5f8b\u3002\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"+"),"\u4ece\u5de6\u5f80\u53f3\u8fdb\u884c\u8ba1\u7b97\uff0c\u6240\u4ee5\u4e0d\u80fd\u5c06\u4e24\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u653e\u5728\u6574\u4e2a\u52a0\u6cd5\u7684\u6700\u524d\u9762\uff0c\u56e0\u4e3a\u6ca1\u6709\u8bed\u6cd5\u5141\u8bb8\u4e24\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u7684\u52a0\u6cd5\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'string s1 = "hello", s2 = "world";\nstring s3 = s1 + ", " + s2 + "!\\n";         // \u6b63\u786e\nstring s4 = s1 + ", " + "world" + "!\\n";    // \u6b63\u786e\n// error-next-line\nstring s5 = "hello" + ", " + s2 + "!\\n";    // \u9519\u8bef\n'))),(0,l.kt)("h2",{id:"\u4e5d\u4e0e\u65e7\u4ee3\u7801\u7684\u63a5\u53e3"},"\u4e5d\u3001\u4e0e\u65e7\u4ee3\u7801\u7684\u63a5\u53e3"),(0,l.kt)("p",null,"\u5982\u679c\u7a0b\u5e8f\u67d0\u5904\u9700\u8981\u4e00\u4e2a C \u98ce\u683c\u5b57\u7b26\u4e32\uff0c\u4f46\u6211\u4eec\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u65f6\uff0c\u4e0d\u80fd\u50cf\u4f7f\u7528 C \u98ce\u683c\u5b57\u7b26\u4e32\u4ee3\u66ff",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\uff08\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u521d\u59cb\u5316\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u52a0\u6cd5\u7b49\uff09\u4e00\u6837\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u66ff\u4ee3 C \u98ce\u683c\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u4f46",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u7c7b\u63d0\u4f9b\u4e86\u4e00\u4e2a\u64cd\u4f5c\u53ef\u4ee5\u83b7\u53d6\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u5bf9\u5e94\u7684 C \u98ce\u683c\u5b57\u7b26\u4e32\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str.c_str()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"const char*"),"\u7c7b\u578b\u7684\u503c\uff0c\u8be5\u6307\u9488\u6307\u5411\u7684 C \u98ce\u683c\u5b57\u7b26\u4e32\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"str"),"\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"\u5bf9\u8c61\u4fdd\u5b58\u4e86\u76f8\u540c\u7684\u5b57\u7b26\u4e32")))),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u8fd4\u56de\u7684\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"const char*"),"\u7c7b\u578b\u7684\u6307\u9488\uff0c\u6240\u4ee5\u4e0d\u80fd\u901a\u8fc7\u8fd9\u4e2a\u6307\u9488\u4fee\u6539\u539f\u672c\u7684\u5b57\u7b26\u4e32\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u867d\u7136\u8be5\u51fd\u6570\u7684\u5b9e\u73b0\u5e76\u4e0d\u6e05\u695a\uff0c\u4f46\u5f53\u6211\u4eec\u901a\u8fc7\u539f\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u5bf9\u8c61\u4fee\u6539\u4e86\u5b57\u7b26\u4e32\u7684\u5185\u5bb9\u540e\uff0c\u6240\u8fd4\u56de\u7684\u8fd9\u4e2a C \u98ce\u683c\u5b57\u7b26\u4e32\u901a\u5e38\u5c06\u4f1a\u5931\u6548\u3002"))}N.isMDXComponent=!0}}]);