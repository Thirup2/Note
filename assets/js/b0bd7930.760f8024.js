"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[8730],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>C});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),k=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(p.Provider,{value:e},t.children)},N="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=k(n),u=l,C=N["".concat(p,".").concat(u)]||N[u]||o[u]||r;return n?a.createElement(C,i(i({ref:e},m),{},{components:n})):a.createElement(C,i({ref:e},m))}));function C(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[N]="string"==typeof t?t:l,i[1]=d;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8419:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const r={},i=void 0,d={unversionedId:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/list",id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/list",title:"list",description:"\u4e00\u3001\u7c7b\u578b\u522b\u540d",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/02-STL/02-\u5bb9\u5668/01-\u987a\u5e8f\u5bb9\u5668/03-list.mdx",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/02-STL/02-\u5bb9\u5668/01-\u987a\u5e8f\u5bb9\u5668",slug:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/list",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/list",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"CPP_Language",previous:{title:"deque",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/deque"},next:{title:"forward_list",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/forward_list"}},p={},k=[{value:"\u4e00\u3001\u7c7b\u578b\u522b\u540d",id:"\u4e00\u7c7b\u578b\u522b\u540d",level:2},{value:"\u4e8c\u3001\u6784\u9020\u51fd\u6570",id:"\u4e8c\u6784\u9020\u51fd\u6570",level:2},{value:"\u4e09\u3001\u5176\u4ed6\u64cd\u4f5c",id:"\u4e09\u5176\u4ed6\u64cd\u4f5c",level:2},{value:"1. \u8fed\u4ee3\u5668",id:"1-\u8fed\u4ee3\u5668",level:3},{value:"2. \u8d4b\u503c\u4e0e swap",id:"2-\u8d4b\u503c\u4e0e-swap",level:3},{value:"3. \u5bb9\u91cf\u4e0e\u5927\u5c0f",id:"3-\u5bb9\u91cf\u4e0e\u5927\u5c0f",level:3},{value:"4. \u589e\u5220\u64cd\u4f5c",id:"4-\u589e\u5220\u64cd\u4f5c",level:3},{value:"5. \u5173\u7cfb\u8fd0\u7b97",id:"5-\u5173\u7cfb\u8fd0\u7b97",level:3},{value:"6. \u5143\u7d20\u8bbf\u95ee",id:"6-\u5143\u7d20\u8bbf\u95ee",level:3},{value:"7. \u7279\u5b9a\u7b97\u6cd5\u7684\u5bb9\u5668\u7248\u672c",id:"7-\u7279\u5b9a\u7b97\u6cd5\u7684\u5bb9\u5668\u7248\u672c",level:3}],m={toc:k},N="wrapper";function o(t){let{components:e,...n}=t;return(0,l.kt)(N,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u7c7b\u578b\u522b\u540d"},"\u4e00\u3001\u7c7b\u578b\u522b\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u522b\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iterator")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u5bb9\u5668\u7c7b\u578b\u7684\u8fed\u4ee3\u5668\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"const_iterator")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u8bfb\u53d6\u5143\u7d20\uff0c\u4f46\u4e0d\u80fd\u4fee\u6539\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size_type")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u8db3\u591f\u4fdd\u5b58\u6b64\u79cd\u5bb9\u5668\u7c7b\u578b\u6700\u5927\u53ef\u80fd\u5bb9\u5668\u7684\u5927\u5c0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"difference_type")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e26\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u8db3\u591f\u4fdd\u5b58\u4e24\u4e2a\u8fed\u4ee3\u5668\u4e4b\u95f4\u7684\u8ddd\u79bb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value_type")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reference")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7684\u5de6\u503c\u7c7b\u578b\uff1b\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"value_type&"),"\u542b\u4e49\u76f8\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"const_reference")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"const"),"\u5de6\u503c\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reverse_iterator")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u8fed\u4ee3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"const_reverse_iterator")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e38\u91cf\u53cd\u5411\u8fed\u4ee3\u5668")))),(0,l.kt)("h2",{id:"\u4e8c\u6784\u9020\u51fd\u6570"},"\u4e8c\u3001\u6784\u9020\u51fd\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6784\u9020\u51fd\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"C c")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\uff0c\u6784\u9020\u7a7a\u5bb9\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"C c1(c2)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6784\u9020",(0,l.kt)("inlineCode",{parentName:"td"},"c2"),"\u7684\u62f7\u8d1d",(0,l.kt)("inlineCode",{parentName:"td"},"c1"),"\u3002\u975e",(0,l.kt)("inlineCode",{parentName:"td"},"explicit"),"\uff0c\u6545\u53ef\u62f7\u8d1d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"C c(b, e)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6784\u9020",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\uff0c\u5c06\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u6307\u5b9a\u7684\u8303\u56f4\u5185\u7684\u5143\u7d20\u62f7\u8d1d\u5230",(0,l.kt)("inlineCode",{parentName:"td"},"c"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"C c{a, b, c, ...}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u521d\u59cb\u5316",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u3002\u975e",(0,l.kt)("inlineCode",{parentName:"td"},"explicit"),"\uff0c\u6545\u53ef\u62f7\u8d1d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"C seq(n)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seq"),"\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u5143\u7d20\uff0c\u8fd9\u4e9b\u5143\u7d20\u8fdb\u884c\u4e86\u503c\u521d\u59cb\u5316\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"C seq(n, t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seq"),"\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u521d\u59cb\u5316\u4e3a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"t"),"\u7684\u5143\u7d20")))),(0,l.kt)("h2",{id:"\u4e09\u5176\u4ed6\u64cd\u4f5c"},"\u4e09\u3001\u5176\u4ed6\u64cd\u4f5c"),(0,l.kt)("h3",{id:"1-\u8fed\u4ee3\u5668"},"1. \u8fed\u4ee3\u5668"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.begin()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"c.end()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u9996\u5143\u7d20\u548c\u5c3e\u5143\u7d20\u4e4b\u540e\u4f4d\u7f6e\u7684\u8fed\u4ee3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.cbegin()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"c.cend()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"const_iterator"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.rbegin()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"c.rend()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u5c3e\u5143\u7d20\u548c\u9996\u5143\u7d20\u4e4b\u524d\u4f4d\u7f6e\u7684\u8fed\u4ee3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.crbegin()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"c.crend()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"const_reverse_iterator"))))),(0,l.kt)("h3",{id:"2-\u8d4b\u503c\u4e0e-swap"},"2. \u8d4b\u503c\u4e0e swap"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c1 = c2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"c1"),"\u4e2d\u7684\u5143\u7d20\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"c2"),"\u4e2d\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c1 = {a, b, c, ...}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"c1"),"\u4e2d\u7684\u5143\u7d20\u66ff\u6362\u4e3a\u5217\u8868\u4e2d\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a.swap(b)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6362",(0,l.kt)("inlineCode",{parentName:"td"},"a"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u7684\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swap(a, b)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"a.swap(b)"),"\u7b49\u4ef7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seq.assign(b, e)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"seq"),"\u4e2d\u7684\u5143\u7d20\u66ff\u6362\u4e3a\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u6240\u8868\u793a\u8303\u56f4\u5185\u7684\u5143\u7d20\u3002\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u4e0d\u80fd\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"seq"),"\u4e2d\u7684\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seq.assign(il)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"seq"),"\u4e2d\u7684\u5143\u7d20\u66ff\u6362\u4e3a\u521d\u59cb\u5316\u5217\u8868\uff08",(0,l.kt)("inlineCode",{parentName:"td"},"initializer_list"),"\uff09",(0,l.kt)("inlineCode",{parentName:"td"},"il"),"\u4e2d\u7684\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seq.assign(n, t)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,l.kt)("inlineCode",{parentName:"td"},"seq"),"\u4e2d\u7684\u5143\u7d20\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"t"),"\u7684\u5143\u7d20")))),(0,l.kt)("h3",{id:"3-\u5bb9\u91cf\u4e0e\u5927\u5c0f"},"3. \u5bb9\u91cf\u4e0e\u5927\u5c0f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.size()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u5143\u7d20\u7684\u6570\u76ee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.max_size()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u53ef\u4fdd\u5b58\u7684\u6700\u5927\u5143\u7d20\u6570\u76ee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.empty()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.resize(n)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u6574",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u5927\u5c0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u5143\u7d20\u3002",(0,l.kt)("br",null),"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"n<c.size()"),"\uff0c\u5219\u591a\u51fa\u7684\u5143\u7d20\u88ab\u4e22\u5f03\u3002\u82e5\u5fc5\u987b\u6dfb\u52a0\u65b0\u5143\u7d20\uff0c\u5bf9\u65b0\u5143\u7d20\u8fdb\u884c\u503c\u521d\u59cb\u5316")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.resize(n, t)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u6574",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u5927\u5c0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u5143\u7d20\u3002",(0,l.kt)("br",null),"\u4efb\u4f55\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u90fd\u521d\u59cb\u5316\u4e3a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"t"))))),(0,l.kt)("h3",{id:"4-\u589e\u5220\u64cd\u4f5c"},"4. \u589e\u5220\u64cd\u4f5c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.push_back(t)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"c.emplace_back(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u5c3e\u90e8\u521b\u5efa\u4e00\u4e2a\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"t"),"\u6216\u7531",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u521b\u5efa\u7684\u5143\u7d20\u3002\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.push_front(t)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"c.emplace_front(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u5934\u90e8\u521b\u5efa\u4e00\u4e2a\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"t"),"\u6216\u7531",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u521b\u5efa\u7684\u5143\u7d20\u3002\u8fd4\u8d26",(0,l.kt)("inlineCode",{parentName:"td"},"void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.insert(p, t)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"c.emplace(p, args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411\u7684\u5143\u7d20\u4e4b\u524d\u521b\u5efa\u4e00\u4e2a\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"t"),"\u6216\u7531",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u521b\u5efa\u7684\u5143\u7d20",(0,l.kt)("br",null),"\u8fd4\u56de\u6307\u5411\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u7684\u8fed\u4ee3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.insert(p, n, t)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411\u7684\u5143\u7d20\u4e4b\u524d\u63d2\u5165",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e2a\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"t"),"\u7684\u5143\u7d20\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u6307\u5411\u65b0\u6dfb\u52a0\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff1b\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u4e3a 0\uff0c\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"p"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.insert(p, b, e)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5143\u7d20\u63d2\u5165\u5230\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411\u7684\u5143\u7d20\u4e4b\u524d\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u4e0d\u80fd\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u7684\u5143\u7d20\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u6307\u5411\u65b0\u6dfb\u52a0\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff1b\u82e5\u8303\u56f4\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"p"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.insert(p, il)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"il"),"\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"td"},"initializer_list"),"\u7684\u5143\u7d20\u503c\u5217\u8868\u3002\u5c06\u8fd9\u4e9b\u7ed9\u5b9a\u503c\u63d2\u5165\u5230\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411\u7684\u5143\u7d20\u4e4b\u524d\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u6307\u5411\u65b0\u6dfb\u52a0\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff0c\u82e5\u5217\u8868\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"p"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.pop_back()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u5c3e\u5143\u7d20\u3002\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\uff0c\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49\u3002\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.pop_front()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u9996\u5143\u7d20\u3002\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\uff0c\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49\u3002\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.erase(p)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u6240\u6307\u5b9a\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u88ab\u5220\u5143\u7d20\u4e4b\u540e\u5143\u7d20\u7684\u8fed\u4ee3\u5668",(0,l.kt)("br",null),"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u6307\u5411\u5c3e\u5143\u7d20\uff0c\u5219\u8fd4\u56de\u5c3e\u540e\u8fed\u4ee3\u5668\u3002",(0,l.kt)("br",null),"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"p"),"\u662f\u5c3e\u5589\u8fed\u4ee3\u5668\uff0c\u5219\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.erase(b, e)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8fed\u4ee3\u5668",(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u6240\u6307\u8303\u56f4\u5185\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u6700\u540e\u4e00\u4e2a\u88ab\u5220\u5143\u7d20\u4e4b\u540e\u5143\u7d20\u7684\u8fed\u4ee3\u5668",(0,l.kt)("br",null),"\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"e"),"\u672c\u8eab\u5c31\u662f\u5c3e\u540e\u8fed\u4ee3\u5668\uff0c\u5219\u51fd\u6570\u4e5f\u8fd4\u56de\u5c3e\u540e\u8fed\u4ee3\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.clear()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u6240\u6709\u5143\u7d20\u3002\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"void"))))),(0,l.kt)("h3",{id:"5-\u5173\u7cfb\u8fd0\u7b97"},"5. \u5173\u7cfb\u8fd0\u7b97"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"=="),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u7b49\u6027\u5224\u65ad")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"<="),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},">"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u7cfb\u8fd0\u7b97\u7b26")))),(0,l.kt)("p",null,"\u6ce8\uff1a\u5bb9\u5668\u7684\u5173\u7cfb\u8fd0\u7b97\u7b26\u4f7f\u7528\u5143\u7d20\u7684\u5173\u7cfb\u8fd0\u7b97\u7b26\u5b8c\u6210\u6bd4\u8f83\u3002\u5143\u7d20\u81f3\u5c11\u9700\u8981\u5b9a\u4e49\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"=="),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"\u8fd0\u7b97\u7b26\u3002"),(0,l.kt)("h3",{id:"6-\u5143\u7d20\u8bbf\u95ee"},"6. \u5143\u7d20\u8bbf\u95ee"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.back()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u5c3e\u5143\u7d20\u7684\u5f15\u7528\u3002\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\uff0c\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c.front()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u9996\u5143\u7d20\u7684\u5f15\u7528\u3002\u82e5",(0,l.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\uff0c\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")))),(0,l.kt)("h3",{id:"7-\u7279\u5b9a\u7b97\u6cd5\u7684\u5bb9\u5668\u7248\u672c"},"7. \u7279\u5b9a\u7b97\u6cd5\u7684\u5bb9\u5668\u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lst.merge(lst2)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"lst.merge(lst2, comp)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6765\u81ea",(0,l.kt)("inlineCode",{parentName:"td"},"lst2"),"\u7684\u5143\u7d20\u5408\u5e76\u5982",(0,l.kt)("inlineCode",{parentName:"td"},"lst"),"\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"lst"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"lst2"),"\u90fd\u5fc5\u987b\u662f\u6709\u5e8f\u7684\u3002",(0,l.kt)("br",null),"\u5143\u7d20\u5c06\u4ece",(0,l.kt)("inlineCode",{parentName:"td"},"lst2"),"\u4e2d\u5220\u9664\u3002\u5728\u5408\u5e76\u4e4b\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"lst2"),"\u53d8\u4e3a\u7a7a\u3002",(0,l.kt)("br",null),"\u7b2c\u4e00\u4e2a\u7248\u672c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"<"),"\u8fd0\u7b97\u7b26\uff0c\u7b2c\u4e8c\u4e2a\u7248\u672c\u4f20\u5165\u81ea\u5b9a\u4e49\u6bd4\u8f83\u64cd\u4f5c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lst.remove(val)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"lst.remove_if(pred)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"erase"),"\u5220\u9664\u4e0e\u7ed9\u5b9a\u503c\u76f8\u7b49\u6216\u4ee4\u4e00\u5143\u8c13\u8bcd\u4e3a\u771f\u7684\u6bcf\u4e2a\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lst.reverse()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cd\u8f6c",(0,l.kt)("inlineCode",{parentName:"td"},"lst"),"\u4e2d\u5143\u7d20\u7684\u987a\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lst.sort()"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"lst.sort(comp)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"<"),"\u6216\u7ed9\u5b9a\u6bd4\u8f83\u64cd\u4f5c\u6392\u5e8f\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lst.unique()"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"lst.unique(pred)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"erase"),"\u5220\u9664\u540c\u4e00\u4e2a\u503c\u7684\u8fde\u7eed\u62f7\u8d1d\u3002",(0,l.kt)("br",null),"\u7b2c\u4e00\u4e2a\u7248\u672c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"=="),"\uff0c\u7b2c\u4e8c\u4e2a\u7248\u672c\u4f7f\u7528\u7ed9\u5b9a\u7684\u4e8c\u5143\u8c13\u8bcd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lst.splice(args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5177\u4f53\u6548\u679c\u89c1",(0,l.kt)("inlineCode",{parentName:"td"},"args"),"\u60c5\u51b5")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lst.splice(args)"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"args"),"\u53ef\u80fd\u7684\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p, lst2"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"\u662f\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u4e2d\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff0c\u51fd\u6570\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u4e2d\u7684\u6240\u6709\u5143\u7d20\u79fb\u52a8\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"\u4e4b\u524d\u7684\u4f4d\u7f6e\uff0c\u5e76\u5c06\u5143\u7d20\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u4e2d\u5220\u9664\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u7684\u7c7b\u578b\u5fc5\u987b\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u76f8\u540c\uff0c\u4e14\u4e0d\u80fd\u662f\u540c\u4e00\u4e2a\u94fe\u8868"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p, lst2, p2"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"p2"),"\u662f\u4e00\u4e2a\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u4e2d\u4f4d\u7f6e\u7684\u6709\u6548\u7684\u8fed\u4ee3\u5668\u3002\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"p2"),"\u6307\u5411\u7684\u5143\u7d20\u79fb\u52a8\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"\u6307\u5411\u4f4d\u7f6e\u4e4b\u524d\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u53ef\u4ee5\u662f\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u76f8\u540c\u7684\u94fe\u8868"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p, lst2, b, e"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"b"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"e"),"\u5fc5\u987b\u8868\u793a",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u4e2d\u7684\u5408\u6cd5\u8303\u56f4\u3002\u5c06\u7ed9\u5b9a\u8303\u56f4\u4e2d\u7684\u5143\u7d20\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u79fb\u52a8\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"\u6307\u5411\u4f4d\u7f6e\u4e4b\u524d\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"lst2"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"lst"),"\u53ef\u4ee5\u662f\u76f8\u540c\u7684\u94fe\u8868\uff0c\u4f46",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"\u4e0d\u80fd\u6307\u5411\u7ed9\u5b9a\u8303\u56f4\u4e2d\u5143\u7d20")))}o.isMDXComponent=!0}}]);