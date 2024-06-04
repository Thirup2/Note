"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[1155],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},o="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=m(n),u=r,c=o["".concat(p,".").concat(u)]||o[u]||N[u]||l;return n?a.createElement(c,i(i({ref:e},k),{},{components:n})):a.createElement(c,i({ref:e},k))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[o]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8182:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,d={unversionedId:"\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/array",id:"\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/array",title:"array",description:"\u4e00\u3001\u7c7b\u578b\u522b\u540d",source:"@site/docs/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/03-STL/02-\u5bb9\u5668/01-\u987a\u5e8f\u5bb9\u5668/05-array.mdx",sourceDirName:"\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/03-STL/02-\u5bb9\u5668/01-\u987a\u5e8f\u5bb9\u5668",slug:"/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/array",permalink:"/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/array",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"CPP_Language",previous:{title:"forward_list",permalink:"/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/forward_list"},next:{title:"string",permalink:"/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u5bb9\u5668/\u987a\u5e8f\u5bb9\u5668/string"}},p={},m=[{value:"\u4e00\u3001\u7c7b\u578b\u522b\u540d",id:"\u4e00\u7c7b\u578b\u522b\u540d",level:2},{value:"\u4e8c\u3001\u6784\u9020\u51fd\u6570",id:"\u4e8c\u6784\u9020\u51fd\u6570",level:2},{value:"\u4e09\u3001\u5176\u4ed6\u64cd\u4f5c",id:"\u4e09\u5176\u4ed6\u64cd\u4f5c",level:2},{value:"1. \u8fed\u4ee3\u5668",id:"1-\u8fed\u4ee3\u5668",level:3},{value:"2. \u8d4b\u503c\u4e0e swap",id:"2-\u8d4b\u503c\u4e0e-swap",level:3},{value:"3. \u5bb9\u91cf\u4e0e\u5927\u5c0f",id:"3-\u5bb9\u91cf\u4e0e\u5927\u5c0f",level:3},{value:"4. \u5173\u7cfb\u8fd0\u7b97",id:"4-\u5173\u7cfb\u8fd0\u7b97",level:3},{value:"5. \u5143\u7d20\u8bbf\u95ee",id:"5-\u5143\u7d20\u8bbf\u95ee",level:3}],k={toc:m},o="wrapper";function N(t){let{components:e,...n}=t;return(0,r.kt)(o,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u7c7b\u578b\u522b\u540d"},"\u4e00\u3001\u7c7b\u578b\u522b\u540d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u522b\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iterator")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u5bb9\u5668\u7c7b\u578b\u7684\u8fed\u4ee3\u5668\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"const_iterator")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u8bfb\u53d6\u5143\u7d20\uff0c\u4f46\u4e0d\u80fd\u4fee\u6539\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size_type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u8db3\u591f\u4fdd\u5b58\u6b64\u79cd\u5bb9\u5668\u7c7b\u578b\u6700\u5927\u53ef\u80fd\u5bb9\u5668\u7684\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"difference_type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u8db3\u591f\u4fdd\u5b58\u4e24\u4e2a\u8fed\u4ee3\u5668\u4e4b\u95f4\u7684\u8ddd\u79bb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reference")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7684\u5de6\u503c\u7c7b\u578b\uff1b\u4e0e",(0,r.kt)("inlineCode",{parentName:"td"},"value_type&"),"\u542b\u4e49\u76f8\u540c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"const_reference")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"const"),"\u5de6\u503c\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reverse_iterator")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u8fed\u4ee3\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"const_reverse_iterator")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e38\u91cf\u53cd\u5411\u8fed\u4ee3\u5668")))),(0,r.kt)("h2",{id:"\u4e8c\u6784\u9020\u51fd\u6570"},"\u4e8c\u3001\u6784\u9020\u51fd\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6784\u9020\u51fd\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C c")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\uff0c\u6784\u9020\u7a7a\u5bb9\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C c1(c2)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6784\u9020",(0,r.kt)("inlineCode",{parentName:"td"},"c2"),"\u7684\u62f7\u8d1d",(0,r.kt)("inlineCode",{parentName:"td"},"c1"),"\u3002\u975e",(0,r.kt)("inlineCode",{parentName:"td"},"explicit"),"\uff0c\u6545\u53ef\u62f7\u8d1d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C c{a, b, c, ...}")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u3002\u975e",(0,r.kt)("inlineCode",{parentName:"td"},"explicit"),"\uff0c\u6545\u53ef\u62f7\u8d1d")))),(0,r.kt)("p",null,"\u6ce8\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"array"),"\u7c7b\u578b\u7684\u5b9e\u4f8b\u5316\u9700\u8981\u989d\u5916\u63d0\u4f9b\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u6570\u7ec4\u5927\u5c0f\uff0c\u8fd9\u4e5f\u662f\u7c7b\u578b\u7684\u4e00\u90e8\u5206\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"array<int, 42> ivec;            // \u4fdd\u5b58 42 \u4e2a int \u7684\u6570\u7ec4\narray<int, 42>::size_type i;    // \u4f7f\u7528\u8be5\u7c7b\u578b\u65f6\u5fc5\u987b\u5305\u542b\u6570\u7ec4\u5927\u5c0f\n")),(0,r.kt)("h2",{id:"\u4e09\u5176\u4ed6\u64cd\u4f5c"},"\u4e09\u3001\u5176\u4ed6\u64cd\u4f5c"),(0,r.kt)("h3",{id:"1-\u8fed\u4ee3\u5668"},"1. \u8fed\u4ee3\u5668"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.begin()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"c.end()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u9996\u5143\u7d20\u548c\u5c3e\u5143\u7d20\u4e4b\u540e\u4f4d\u7f6e\u7684\u8fed\u4ee3\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.cbegin()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"c.cend()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"const_iterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.rbegin()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"c.rend()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u7684\u5c3e\u5143\u7d20\u548c\u9996\u5143\u7d20\u4e4b\u524d\u4f4d\u7f6e\u7684\u8fed\u4ee3\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.crbegin()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"c.crend()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"const_reverse_iterator"))))),(0,r.kt)("h3",{id:"2-\u8d4b\u503c\u4e0e-swap"},"2. \u8d4b\u503c\u4e0e swap"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c1 = c2")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06",(0,r.kt)("inlineCode",{parentName:"td"},"c1"),"\u4e2d\u7684\u5143\u7d20\u66ff\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"c2"),"\u4e2d\u5143\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a.swap(b)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6362",(0,r.kt)("inlineCode",{parentName:"td"},"a"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"td"},"b"),"\u7684\u5143\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"swap(a, b)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e",(0,r.kt)("inlineCode",{parentName:"td"},"a.swap(b)"),"\u7b49\u4ef7")))),(0,r.kt)("h3",{id:"3-\u5bb9\u91cf\u4e0e\u5927\u5c0f"},"3. \u5bb9\u91cf\u4e0e\u5927\u5c0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.size()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u5143\u7d20\u7684\u6570\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.max_size()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u53ef\u4fdd\u5b58\u7684\u6700\u5927\u5143\u7d20\u6570\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.empty()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"4-\u5173\u7cfb\u8fd0\u7b97"},"4. \u5173\u7cfb\u8fd0\u7b97"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"=="),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u7b49\u6027\u5224\u65ad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"<="),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},">"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5173\u7cfb\u8fd0\u7b97\u7b26")))),(0,r.kt)("p",null,"\u6ce8\uff1a\u5bb9\u5668\u7684\u5173\u7cfb\u8fd0\u7b97\u7b26\u4f7f\u7528\u5143\u7d20\u7684\u5173\u7cfb\u8fd0\u7b97\u7b26\u5b8c\u6210\u6bd4\u8f83\u3002\u5143\u7d20\u81f3\u5c11\u9700\u8981\u5b9a\u4e49\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"=="),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"<"),"\u8fd0\u7b97\u7b26\u3002"),(0,r.kt)("h3",{id:"5-\u5143\u7d20\u8bbf\u95ee"},"5. \u5143\u7d20\u8bbf\u95ee"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.back()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u5c3e\u5143\u7d20\u7684\u5f15\u7528\u3002\u82e5",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\uff0c\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.front()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u9996\u5143\u7d20\u7684\u5f15\u7528\u3002\u82e5",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e3a\u7a7a\uff0c\u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c[n]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"c"),"\u4e2d\u4e0b\u6807\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"n"),"\u7684\u5143\u7d20\u7684\u5f15\u7528\u3002\u4e0b\u6807\u8d8a\u754c\u65f6\u884c\u4e3a\u672a\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c.at(n)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e0b\u6807\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"n"),"\u7684\u5143\u7d20\u7684\u5f15\u7528\u3002\u4e0b\u6807\u8d8a\u754c\u65f6\uff0c\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"td"},"out_of_range"),"\u5f02\u5e38")))))}N.isMDXComponent=!0}}]);