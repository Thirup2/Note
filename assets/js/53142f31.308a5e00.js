"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[5597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(n),u=i,s=k["".concat(o,".").concat(u)]||k[u]||N[u]||l;return n?a.createElement(s,r(r({ref:t},d),{},{components:n})):a.createElement(s,r({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:i,r[1]=p;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>C,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const l={title:"IO \u5e93"},r=void 0,p={unversionedId:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/IO\u5e93/index",id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/IO\u5e93/index",title:"IO \u5e93",description:"\u4e00\u3001IO \u7c7b",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/04-IO\u5e93/index.mdx",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/04-\u6807\u51c6\u5e93/04-IO\u5e93",slug:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/IO\u5e93/",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/IO\u5e93/",draft:!1,tags:[],version:"current",frontMatter:{title:"IO \u5e93"},sidebar:"CPP_Language",previous:{title:"\u6cdb\u578b\u7b97\u6cd5\u7ed3\u6784",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/STL/\u6cdb\u578b\u7b97\u6cd5/\u6cdb\u578b\u7b97\u6cd5\u7ed3\u6784"},next:{title:"\u6587\u4ef6 IO",permalink:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u6807\u51c6\u5e93/IO\u5e93/\u6587\u4ef6 IO"}},o={},m=[{value:"\u4e00\u3001IO \u7c7b",id:"\u4e00io-\u7c7b",level:2},{value:"\u4e8c\u3001\u901a\u7528\u64cd\u4f5c",id:"\u4e8c\u901a\u7528\u64cd\u4f5c",level:2},{value:"IO \u5bf9\u8c61\u4e0d\u5141\u8bb8\u62f7\u8d1d\u6216\u8d4b\u503c",id:"io-\u5bf9\u8c61\u4e0d\u5141\u8bb8\u62f7\u8d1d\u6216\u8d4b\u503c",level:3},{value:"\u6761\u4ef6\u72b6\u6001",id:"\u6761\u4ef6\u72b6\u6001",level:3},{value:"\u7ba1\u7406\u8f93\u51fa\u7f13\u51b2",id:"\u7ba1\u7406\u8f93\u51fa\u7f13\u51b2",level:3},{value:"\u4e09\u3001\u7c7b\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",id:"\u4e09\u7c7b\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},k=d("Tabs"),N=d("TabItem"),u={toc:m},s="wrapper";function C(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e00io-\u7c7b"},"\u4e00\u3001IO \u7c7b"),(0,i.kt)("p",null,"IO \u7c7b\u4e0d\u4ec5\u5b9a\u4e49\u4e86\u5f88\u591a\u7c7b\u578b\uff0c\u8fd8\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\u7c7b\u4e00\u6837\u5b9a\u4e49\u4e86\u51e0\u4e2a\u73b0\u6709\u7684\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"IO \u7c7b\u6839\u636e\u6d41\u7684\u7c7b\u578b\u4e0d\u540c\uff0c\u53ef\u4ee5\u5206\u4e3a\u4e09\u7c7b\uff1a\u6807\u51c6 IO\u3001\u6587\u4ef6 IO\u3001\u5b57\u7b26\u4e32 IO"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(N,{value:"iostream",label:"\u6807\u51c6 IO",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u5934\u6587\u4ef6\n#include <iostream>\n// \u7c7b\u578b\nusing std::istream;\nusing std::ostream;\nusing std::iostream;\nusing std::wistream;\nusing std::wostream;\nusing std::wiostream;\n// \u5bf9\u8c61\nusing std::cin;\nusing std::cout;\nusing std::cerr;\nusing std::clog;\nusing std::wcin;\nusing std::wcout;\nusing std::wcerr;\nusing std::wclog;\n"))),(0,i.kt)(N,{value:"fstream",label:"\u6587\u4ef6 IO",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u5934\u6587\u4ef6\n#include <fstream>\n// \u7c7b\u578b\nusing std::ifstream;\nusing std::ofstream;\nusing std::fstream;\nusing std::wifstream;\nusing std::wofstream;\nusing std::wfstream;\n"))),(0,i.kt)(N,{value:"sstream",label:"\u5b57\u7b26\u4e32 IO",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u5934\u6587\u4ef6\n#include <sstream>\n// \u7c7b\u578b\nusing istringstream;\nusing ostringstream;\nusing stringstream;\nusing wistringstream;\nusing wostringstream;\nusing wstringstream;\n")))),(0,i.kt)("admonition",{title:"IO \u7c7b\u578b\u95f4\u7684\u5173\u7cfb",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ifstream"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"istringstream"),"\u90fd\u7ee7\u627f\u81ea",(0,i.kt)("inlineCode",{parentName:"p"},"istream"),"\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"ofstream"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"ostringstream"),"\u90fd\u7ee7\u627f\u81ea",(0,i.kt)("inlineCode",{parentName:"p"},"ostream"),"\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u662f\u5982\u4f55\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"cin"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"cout"),"\u8fd9\u4e9b\u5bf9\u8c61\u7684\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u76f8\u540c\u7684\u65b9\u6cd5\u5e94\u7528\u5728\u5176\u4ed6\u7c7b\u578b\u7684\u5bf9\u8c61\u4e0a\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u552f\u4e00\u7684\u533a\u522b\u662f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"iostream"),"\u7684\u5bf9\u8c61\u90fd\u662f\u65e2\u5b9a\u7684\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"fstream"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"stringstream"),"\u7c7b\u578b\u7684\u5bf9\u8c61\u5219\u9700\u8981\u81ea\u5df1\u521b\u5efa\u5e76\u521d\u59cb\u5316\uff0c\u4ee5\u53ca\u5bf9\u8fd9\u4e9b\u5bf9\u8c61\u8fdb\u884c IO \u64cd\u4f5c\u4e4b\u540e\u7684\u7ed3\u679c\u80af\u5b9a\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"iostream"),"\u6709\u6240\u533a\u522b\u3002\u6240\u4ee5\u9700\u8981\u638c\u63e1\u7684\u4e1c\u897f\u603b\u7ed3\u4e0b\u6765\u5c31\u662f\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u7528\u7684\u64cd\u4f5c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fstream"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"stringstream"),"\u7684\u5bf9\u8c61\u521b\u5efa\u53ca\u521d\u59cb\u5316\u64cd\u4f5c"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u4ef6 IO \u548c\u5b57\u7b26\u4e32 IO \u64cd\u4f5c\u7684\u7ed3\u679c"))),(0,i.kt)("h2",{id:"\u4e8c\u901a\u7528\u64cd\u4f5c"},"\u4e8c\u3001\u901a\u7528\u64cd\u4f5c"),(0,i.kt)("p",null,"IO \u7c7b\u578b\u6700\u5e38\u7528\u7684\u901a\u7528\u64cd\u4f5c\u5b9e\u9645\u4e0a\u5c31\u4e24\u4e2a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operator<<"),"\uff1a\u5bf9",(0,i.kt)("inlineCode",{parentName:"li"},"<<"),"\u8fd0\u7b97\u7b26\u7684\u91cd\u8f7d\uff0c\u7528\u6765\u5411\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"ostream"),"\u5bf9\u8c61\u5199\u5165\u8f93\u51fa\u6570\u636e\u3002\u6570\u636e\u5148\u5199\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"ostream"),"\u5bf9\u8c61\uff0c\u7136\u540e\u5237\u65b0\u5230\u5c4f\u5e55\u4e0a\uff0c\u6700\u540e\u8fd4\u56de\u5de6\u4fa7\u8fd0\u7b97\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operator>>"),"\uff1a\u5bf9",(0,i.kt)("inlineCode",{parentName:"li"},">>"),"\u8fd0\u7b97\u7b26\u7684\u91cd\u8f7d\uff0c\u7528\u6765\u4ece\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"istream"),"\u5bf9\u8c61\u8bfb\u53d6\u8f93\u5165\u6570\u636e\u3002\u6570\u636e\u5148\u4ece\u7cfb\u7edf\u8f93\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"istream"),"\u5bf9\u8c61\uff0c\u7136\u540e\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"istream"),"\u5bf9\u8c61\u8bfb\u53d6\u5230\u8fd0\u7b97\u7b26\u53f3\u4fa7\u8fd0\u7b97\u5bf9\u8c61\uff0c\u6700\u540e\u8fd4\u56de\u5de6\u4fa7\u8fd0\u7b97\u5bf9\u8c61\u3002")),(0,i.kt)("h3",{id:"io-\u5bf9\u8c61\u4e0d\u5141\u8bb8\u62f7\u8d1d\u6216\u8d4b\u503c"},"IO \u5bf9\u8c61\u4e0d\u5141\u8bb8\u62f7\u8d1d\u6216\u8d4b\u503c"),(0,i.kt)("p",null,"\u6211\u4eec\u4e0d\u80fd\u62f7\u8d1d\u6216\u5bf9 IO \u5bf9\u8c61\u8d4b\u503c\uff0c\u56e0\u6b64\u6211\u4eec\u4e5f\u4e0d\u80fd\u5c06\u5f62\u53c2\u6216\u8fd4\u56de\u7c7b\u578b\u8bbe\u7f6e\u4e3a\u6d41\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u8fdb\u884c IO \u64cd\u4f5c\u7684\u51fd\u6570\u901a\u5e38\u4ee5",(0,i.kt)("strong",{parentName:"p"},"\u5f15\u7528\u65b9\u5f0f"),"\u4f20\u9012\u548c\u8fd4\u56de\u6d41\uff0c\u8bfb\u5199\u4e00\u4e2a IO \u5bf9\u8c61\u4f1a\u6539\u53d8\u5176\u72b6\u6001\uff0c\u56e0\u6b64\u4f20\u9012\u548c\u8fd4\u56de\u7684\u5f15\u7528",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u662f const")," \u7684\u3002"),(0,i.kt)("h3",{id:"\u6761\u4ef6\u72b6\u6001"},"\u6761\u4ef6\u72b6\u6001"),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u6bd4\u8f83\u901a\u7528\u7684\u662f IO \u7c7b\u7684\u6761\u4ef6\u72b6\u6001\uff0c\u6bcf\u4e00\u6b21 IO \u64cd\u4f5c\uff0c\u8fdb\u884c\u8be5\u64cd\u4f5c\u7684 IO \u5bf9\u8c61\u7684\u72b6\u6001\u90fd\u53ef\u80fd\u4f1a\u53d1\u751f\u6539\u53d8\uff0c\u53ef\u4ee5\u6839\u636e\u8fd9\u4e9b\u72b6\u6001\u786e\u5b9a\u5176\u662f\u5426\u53d1\u751f\u4e86\u9519\u8bef\u3002"),(0,i.kt)("p",null,"IO \u7c7b\u7684\u6761\u4ef6\u72b6\u6001\u5305\u62ec 1 \u4e2a\u7c7b\u578b\u3001\u4e00\u4e9b\u51fd\u6570\u548c\u6807\u5fd7\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strm::iostate"),"\uff08",(0,i.kt)("inlineCode",{parentName:"td"},"strm"),"\u662f\u4e00\u79cd IO \u7c7b\u578b\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iostate"),"\u662f\u4e00\u79cd\u673a\u5668\u76f8\u5173\u7684\u7c7b\u578b\uff0c\u63d0\u4f9b\u4e86\u8868\u8fbe\u6761\u4ef6\u72b6\u6001\u7684\u5b8c\u6574\u529f\u80fd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strm::badbit")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u7279\u5b9a\u4f4d\u6a21\u5f0f\uff0c\u6307\u51fa\u6d41\u5df2\u5d29\u6e83")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strm::failbit")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u7279\u5b9a\u4f4d\u6a21\u5f0f\uff0c\u6307\u51fa\u4e00\u4e2a IO \u64cd\u4f5c\u5931\u8d25\u4e86")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strm::eofbit")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u7279\u5b9a\u4f4d\u6a21\u5f0f\uff0c\u6307\u51fa\u6d41\u5230\u8fbe\u4e86\u6587\u4ef6\u7ed3\u675f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strm::goodbit")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u7279\u5b9a\u4f4d\u6a21\u5f0f\uff0c\u6307\u51fa\u6d41\u672a\u5904\u4e8e\u9519\u8bef\u72b6\u6001\u3002\u6b64\u503c\u4fdd\u8bc1\u4e3a 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.eof()"),"\uff08",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u662f\u4e00\u4e2a IO \u5bf9\u8c61\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u7684",(0,i.kt)("inlineCode",{parentName:"td"},"eofbit"),"\u7f6e\u4f4d\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.fail()")),(0,i.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u7684",(0,i.kt)("inlineCode",{parentName:"td"},"failbit"),"\u6216",(0,i.kt)("inlineCode",{parentName:"td"},"badbit"),"\u7f6e\u4f4d\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.bad()")),(0,i.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u7684",(0,i.kt)("inlineCode",{parentName:"td"},"badbit"),"\u7f6e\u4f4d\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.good()")),(0,i.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u5904\u4e8e\u6709\u6548\u72b6\u6001\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.clear()")),(0,i.kt)("td",{parentName:"tr",align:null},"\u82e5",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u6240\u6709\u6761\u4ef6\u72b6\u6001\u4f4d\u590d\u4f4d\uff0c\u5c06\u6d41\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a\u6709\u6548\u3002",(0,i.kt)("br",null),"\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.clear(flags)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u7ed9\u5b9a\u7684",(0,i.kt)("inlineCode",{parentName:"td"},"flags"),"\u6807\u5fd7\u4f4d\uff0c\u5c06\u6d41",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u5bf9\u5e94\u6761\u4ef6\u72b6\u6001\u4f4d\u590d\u4f4d\u3002",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"flags"),"\u7684\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"td"},"strm::iostate"),"\u3002\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.setstate(flags)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u7ed9\u5b9a\u7684",(0,i.kt)("inlineCode",{parentName:"td"},"flags"),"\u6807\u5fd7\u4f4d\uff0c\u5c06\u6d41",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u4e2d\u5bf9\u5e94\u6761\u4ef6\u72b6\u6001\u4f4d\u7f6e\u4f4d\u3002",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"flags"),"\u7684\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"td"},"strm::iostate"),"\u3002\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s.rdstate()")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6d41",(0,i.kt)("inlineCode",{parentName:"td"},"s"),"\u7684\u5f53\u524d\u6761\u4ef6\u72b6\u6001\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"td"},"strm::iostate"))))),(0,i.kt)("admonition",{title:"\u6761\u4ef6\u72b6\u6001\u7684\u5de5\u4f5c\u539f\u7406",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7c7b\u578b\u4e0e\u6807\u5fd7"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"iostate"),"\u662f\u6bcf\u79cd IO \u7c7b\u578b\u5185\u90fd\u5185\u7f6e\u7684\u4e00\u79cd\u7c7b\u578b\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5c06\u8fd9\u79cd\u7c7b\u578b\u770b\u6210\u4e00\u4e2a\u4f4d\u5e8f\u5217\uff0c\u6240\u4ee5\u5f88\u5927\u53ef\u80fd\u8fd9\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u6574\u578b\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u4e2a IO \u7c7b\u578b\u8fd8\u5b9a\u4e49\u4e86 4 \u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"iostate"),"\u7c7b\u578b\u7684\u5e38\u91cf\u503c\uff0c\u5373 4 \u79cd\u7279\u5b9a\u7684\u4f4d\u6a21\u5f0f\u3002\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"goodbit"),"\u72b6\u6001\u662f\u6ca1\u6709\u4efb\u4f55\u9519\u8bef\u7684\u72b6\u6001\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u7528 3 \u4e2a\u4f4d\u6765\u5b9e\u73b0\u8fd9\u6837\u7684\u529f\u80fd\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"goodbit"),"\u7684\u4f4d\u6a21\u5f0f\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"000"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"badbit"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"001"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"failbit"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"010"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"eofbit"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"\u3002\u5f53\u7136\uff0c\u8fd9\u53ea\u662f\u6211\u4eec\u7684\u6a21\u62df\u5b9e\u73b0\uff0c\u5b9e\u9645\u4e0a\u7684\u5b9e\u73b0\u65b9\u5f0f\u6216\u8bb8\u4f1a\u6709\u5dee\u5f02\u3002"))),(0,i.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u7684\u7c7b\u578b\u4ee5\u53ca\u6807\u5fd7\u90fd\u662f\u5c5e\u4e8e\u7c7b\u7684\uff0c\u800c\u5e76\u4e0d\u5c5e\u4e8e\u6bcf\u4e00\u4e2a\u5177\u4f53\u7684\u5bf9\u8c61\uff0c\u6240\u4ee5\u6211\u4eec\u901a\u5e38\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"strm::"),"\u7684\u683c\u5f0f\u6765\u8bbf\u95ee\u8fd9\u4e9b\u7c7b\u578b\u548c\u6807\u5fd7\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u5e76\u4e0d\u901a\u8fc7\u8fd9\u4e9b\u5185\u5bb9\u6765\u5224\u65ad\u4e00\u4e2a IO \u5bf9\u8c61\u51fa\u4e86\u4ec0\u4e48\u9519\u8bef\uff0c\u800c\u662f\u901a\u8fc7\u540e\u9762\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5224\u5b9a\u51fd\u6570"),(0,i.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u4e2a IO \u5bf9\u8c61\u4e2d\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u8be5\u7c7b\u578b\u6240\u5c5e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"iostate"),"\u7c7b\u578b\u7684\u6570\u636e\u6210\u5458\uff08\u59d1\u4e14\u79f0\u5176\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"iobit"),"\uff09\uff0c\u5176\u521d\u59cb\u503c\u5e94\u8be5\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"goodbit"),"\u76f8\u540c\uff0c\u6bcf\u5bf9\u8be5\u5bf9\u8c61\u8fdb\u884c\u4e00\u6b21 IO \u64cd\u4f5c\uff0c\u8be5\u5bf9\u8c61\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"iobit"),"\u6210\u5458\u90fd\u53ef\u80fd\u4f1a\u53d1\u751f\u76f8\u5e94\u7684\u6539\u53d8\uff0c\u4f8b\u5982\u5f53\u4e00\u4e2a IO \u64cd\u4f5c\u5931\u8d25\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u8ba9\u5176\u8868\u73b0\u51fa IO \u64cd\u4f5c\u5931\u8d25\u548c\u6d41\u5df2\u5d29\u6e83\u4e24\u79cd\u72b6\u6001\uff0c\u6240\u4ee5\u5f53 IO \u64cd\u4f5c\u68c0\u6d4b\u5230 IO \u64cd\u4f5c\u5931\u8d25\u65f6\uff0c\u5c31\u53ef\u80fd\u6267\u884c\u8fd9\u6837\u7684\u64cd\u4f5c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"iobit = iobit | badbit | failbit"),"\uff0c\u8fd9\u6837",(0,i.kt)("inlineCode",{parentName:"p"},"iobit"),"\u4e2d\u7684\u4e24\u4e2a\u4f4d\u5c31\u88ab\u7f6e\u4f4d\u4e86\uff0c\u4ece\u800c\u6839\u636e\u8fd9\u4e2a\u6570\u636e\u6210\u5458\u6211\u4eec\u5c31\u53ef\u4ee5\u4e86\u89e3\u5230\u8fd9\u4e2a IO \u5bf9\u8c61\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5f53\u7136\uff0c\u5982\u679c\u5148\u83b7\u53d6\u4e00\u4e2a IO \u5bf9\u8c61\u7684\u6761\u4ef6\u72b6\u6001\uff0c\u518d\u5c06\u5176\u4e0e\u7c7b\u5b9a\u4e49\u7684\u5e38\u91cf\u6807\u5fd7\u4f4d\u8fdb\u884c\u6bd4\u8f83\u8fd9\u6837\u7684\u64cd\u4f5c\u6bd4\u8f83\u9ebb\u70e6\uff0c\u6240\u4ee5\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"fail()"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"bad()"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"eof()"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"good()"),"\u8fd9\u4e00\u7ec4\u64cd\u4f5c\u6765\u5feb\u901f\u5730\u5224\u65ad\u5f53\u524d IO \u5bf9\u8c61\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5b9e\u9645\u4e0a\uff0c\u65e0\u8bba IO \u5bf9\u8c61\u53d1\u751f\u4e86\u4f55\u79cd\u9519\u8bef\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"failbit"),"\u90fd\u4f1a\u88ab\u7f6e\u4f4d\uff0c\u6240\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"fail()"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"good()"),"\u4e24\u4e2a\u51fd\u6570\u6211\u4eec\u5c31\u80fd\u638c\u63e1 IO \u5bf9\u8c61\u7684\u603b\u4f53\u72b6\u6001\u4e86\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"bad()"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"eof()"),"\u53ea\u662f\u4e3a\u4e86\u5224\u65ad\u5177\u4f53\u7684\u9519\u8bef\u7c7b\u578b\u3002\u6240\u4ee5\u901a\u5e38",(0,i.kt)("inlineCode",{parentName:"p"},"good() == !fail()"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u652f\u6301\u524d\u8ff0\u7684\u90a3\u79cd\u6bd4\u8f83\u9ebb\u70e6\u7684\u64cd\u4f5c\uff0c\u59d1\u4e14\u8fd8\u662f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u64cd\u4f5c\u7528\u6765\u83b7\u53d6 IO \u5bf9\u8c61\u7684\u6761\u4ef6\u72b6\u6001\uff0c\u5373\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"rdstate()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7f6e\u4f4d\u4e0e\u590d\u4f4d\u64cd\u4f5c"),(0,i.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u89e3\u51b3 IO \u9519\u8bef\u7684\u4ee3\u7801\uff08\u4f8b\u5982\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"try"),"\u4ee3\u7801\u5757\u6765\u5904\u7406 IO \u9519\u8bef\uff09\uff0c\u4e5f\u63d0\u4f9b\u4e86\u4e00\u7ec4\u51fd\u6570\u6765\u66f4\u6539\u5f53\u524d IO \u5bf9\u8c61\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982\u5f53\u6211\u4eec\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"catch"),"\u5b50\u53e5\u4e2d\u89e3\u51b3\u4e86 IO \u9519\u8bef\u4e4b\u540e\uff0c\u53ef\u4ee5\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"clear()"),"\u6765\u5c06\u8be5 IO \u5bf9\u8c61\u8fdb\u884c\u590d\u4f4d\uff0c\u8be5\u51fd\u6570\u5c06\u9ed8\u8ba4\u590d\u4f4d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"goodbit"),"\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",{parentName:"li"},"\u53e6\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e24\u4e2a\u51fd\u6570\u53ef\u4ee5\u5c06 IO \u5bf9\u8c61\u7684\u72b6\u6001\u8fdb\u884c\u9009\u62e9\u6027\u7684\u590d\u4f4d\u548c\u7f6e\u4f4d\u3002")))),(0,i.kt)("h3",{id:"\u7ba1\u7406\u8f93\u51fa\u7f13\u51b2"},"\u7ba1\u7406\u8f93\u51fa\u7f13\u51b2"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u8f93\u51fa\u6d41\u90fd\u7ba1\u7406\u4e00\u4e2a\u7f13\u51b2\u533a\uff0c\u7528\u6765\u4fdd\u5b58\u7a0b\u5e8f\u8bfb\u5199\u7684\u6570\u636e\u3002\u5f53\u6211\u4eec\u6267\u884c\u4e0b\u9762\u7684\u64cd\u4f5c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'os << "please enter a value: ";\n')),(0,i.kt)("p",null,"\u6587\u672c\u4e32\u53ef\u80fd\u7acb\u5373\u6253\u5370\u51fa\u6765\uff0c\u4f46\u4e5f\u6709\u53ef\u80fd\u88ab\u64cd\u4f5c\u7cfb\u7edf\u4fdd\u5b58\u5728\u7f13\u51b2\u533a\u4e2d\uff0c\u968f\u540e\u518d\u6253\u5370\u3002"),(0,i.kt)("p",null,"\u6709\u4e86\u7f13\u51b2\u673a\u5236\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5c31\u53ef\u4ee5\u5c06\u7a0b\u5e8f\u7684\u591a\u4e2a\u8f93\u51fa\u64cd\u4f5c\u5408\u6210\u5355\u4e00\u7684\u7cfb\u7edf\u7ea7\u5199\u64cd\u4f5c\u3002\u7531\u4e8e\u8bbe\u5907\u7684\u5199\u64cd\u4f5c\u53ef\u80fd\u5f88\u8017\u65f6\uff0c\u5141\u8bb8\u64cd\u4f5c\u7cfb\u7edf\u5c06\u591a\u4e2a\u8f93\u51fa\u64cd\u4f5c\u5408\u4e3a\u5355\u4e00\u7684\u8bbe\u5907\u5199\u64cd\u4f5c\u53ef\u4ee5\u5e26\u6765\u5f88\u5927\u7684\u6027\u80fd\u63d0\u5347\u3002\u4f46\u8fd9\u6837\u7684\u673a\u5236\u4e5f\u53ef\u80fd\u5bfc\u81f4\u4e00\u4e9b\u9519\u8bef\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7f13\u51b2\u533a\u5237\u65b0\u7684\u539f\u56e0"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u6b63\u5e38\u7ed3\u675f\uff0c\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"main"),"\u51fd\u6570\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"return"),"\u64cd\u4f5c\u7684\u4e00\u90e8\u5206\uff0c\u7f13\u51b2\u5237\u65b0\u88ab\u6267\u884c\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u7f13\u51b2\u533a\u6ee1\u65f6\uff0c\u9700\u8981\u5237\u65b0\u7f13\u51b2\uff0c\u800c\u540e\u65b0\u7684\u6570\u636e\u624d\u80fd\u7ee7\u7eed\u5199\u5165\u7f13\u51b2\u533a\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u4f7f\u7528\u64cd\u7eb5\u7b26\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"endl"),"\u7b49\u6765\u663e\u5f0f\u5237\u65b0\u7f13\u51b2\u533a"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6bcf\u4e2a\u8f93\u51fa\u64cd\u4f5c\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u64cd\u7eb5\u7b26",(0,i.kt)("inlineCode",{parentName:"li"},"unitbuf"),"\u8bbe\u7f6e\u6d41\u7684\u5185\u90e8\u72b6\u6001\uff0c\u6765\u6e05\u7a7a\u7f13\u51b2\u533a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9",(0,i.kt)("inlineCode",{parentName:"li"},"cerr"),"\u662f\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"unitbuf"),"\u7684\uff0c\u56e0\u6b64\u5199\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"cerr"),"\u7684\u5185\u5bb9\u90fd\u662f\u7acb\u5373\u5237\u65b0\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8f93\u51fa\u6d41\u53ef\u80fd\u88ab\u5173\u8054\u5230\u53e6\u4e00\u4e2a\u6d41\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f53\u8bfb\u5199\u5230\u88ab\u5173\u8054\u7684\u6d41\u65f6\uff0c\u5173\u8054\u5230\u7684\u6d41\u7684\u7f13\u51b2\u533a\u4f1a\u88ab\u5237\u65b0\u3002\u4f8b\u5982\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"cin"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"cerr"),"\u90fd\u5173\u8054\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"cout"),"\u3002\u56e0\u6b64\uff0c\u8bfb",(0,i.kt)("inlineCode",{parentName:"li"},"cin"),"\u6216\u5199",(0,i.kt)("inlineCode",{parentName:"li"},"cerr"),"\u90fd\u4f1a\u5bfc\u81f4",(0,i.kt)("inlineCode",{parentName:"li"},"cout"),"\u7684\u7f13\u51b2\u533a\u88ab\u5237\u65b0\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u5bfc\u81f4\u7684\u95ee\u9898"),"\uff1a"),(0,i.kt)("p",null,"\u7f13\u51b2\u673a\u5236\u53ef\u80fd\u5bfc\u81f4\u7684\u95ee\u9898\u662f\u5f53\u7a0b\u5e8f\u5f02\u5e38\u7ec8\u6b62\u65f6\uff0c\u8f93\u51fa\u7f13\u51b2\u533a\u53ef\u80fd\u4e0d\u4f1a\u5237\u65b0\u3002\u5b83\u6240\u8f93\u51fa\u7684\u6570\u636e\u53ef\u80fd\u505c\u7559\u5728\u7f13\u51b2\u8f93\u51fa\u533a\u4e2d\u7b49\u5f85\u6253\u5370\u3002"),(0,i.kt)("p",null,"\u7279\u522b\u662f\u5f53\u6211\u4eec\u5728\u8c03\u8bd5\u4e00\u4e2a\u5df2\u7ecf\u5d29\u6e83\u7684\u7a0b\u5e8f\u65f6\uff0c\u9700\u8981\u786e\u8ba4\u90a3\u4e9b\u6211\u4eec\u8ba4\u4e3a\u5df2\u7ecf\u8f93\u51fa\u7684\u6570\u636e\u786e\u5b9e\u5df2\u7ecf\u5237\u65b0\u4e86\u3002\u5426\u5219\uff0c\u53ef\u80fd\u5c06\u5927\u91cf\u65f6\u95f4\u6d6a\u8d39\u5728\u8ffd\u8e2a\u4ee3\u7801\u4e3a\u4ec0\u4e48\u6ca1\u6709\u6267\u884c\u4e0a\uff0c\u800c\u5b9e\u9645\u4e0a\u4ee3\u7801\u5df2\u7ecf\u6267\u884c\u4e86\uff0c\u53ea\u662f\u7a0b\u5e8f\u5d29\u6e83\u540e\u7f13\u51b2\u533a\u6ca1\u6709\u88ab\u5237\u65b0\uff0c\u8f93\u51fa\u6570\u636e\u88ab\u6302\u8d77\u6ca1\u6709\u6253\u5370\u800c\u5df2\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6240\u4ee5\u6709\u4e86\u4ee5\u4e0b\u7684\u663e\u5f0f\u5237\u65b0\u7f13\u51b2\u533a\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u663e\u5f0f\u5237\u65b0\u65b9\u6cd5"),"\uff1a"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"endl"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"flush"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ends"),"\u8fd9\u51e0\u4e2a\u64cd\u7eb5\u7b26\u6765\u663e\u5f0f\u5237\u65b0\u7f13\u51b2\u533a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endl"),"\uff1a\u5411\u7f13\u51b2\u533a\u63d2\u5165\u6362\u884c\u7b26\u5e76\u5237\u65b0\u7f13\u51b2\u533a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flush"),"\uff1a\u5237\u65b0\u7f13\u51b2\u533a\u4f46\u4e0d\u8f93\u51fa\u4efb\u4f55\u989d\u5916\u5b57\u7b26"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ends"),"\uff1a\u5411\u7f13\u51b2\u533a\u63d2\u5165\u7a7a\u5b57\u7b26\u5e76\u5237\u65b0\u7f13\u51b2\u533a")),(0,i.kt)("p",null,"\u8fd8\u6709\u4e24\u4e2a\u64cd\u7eb5\u7b26\u53ef\u4ee5\u76f4\u63a5\u8bbe\u5b9a\u6d41\u7684\u72b6\u6001\u800c\u4e0d\u662f\u6307\u793a\u6d41\u7684\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unitbuf"),"\uff1a\u5c06\u6d41\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"unitbuf"),"\u72b6\u6001\uff0c\u8fd9\u6837\u7684\u6d41\u5728\u63a5\u4e0b\u6765\u7684\u6bcf\u6b21\u64cd\u4f5c\u4e4b\u540e\u90fd\u8fdb\u884c\u4e00\u6b21",(0,i.kt)("inlineCode",{parentName:"li"},"flush"),"\u64cd\u4f5c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nounitbuf"),"\uff1a\u5c06\u6d41\u91cd\u7f6e\u4e3a\u6b63\u5e38\u7684\u7cfb\u7edf\u7ba1\u7406\u7684\u7f13\u51b2\u533a\u5237\u65b0\u673a\u5236")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5173\u8054\u8f93\u5165\u548c\u8f93\u51fa\u6d41"),"\uff1a"),(0,i.kt)("p",null,"\u6807\u51c6 IO \u7684\u5bf9\u8c61\u5df2\u7ecf\u9ed8\u8ba4\u5b9a\u4e49\u597d\u4e86\u76f8\u4e92\u7684\u5173\u8054\u6027\u3002\u800c\u5176\u4ed6 IO \u7684\u5bf9\u8c61\u5219\u9700\u8981\u7528\u6237\u81ea\u5df1\u8fdb\u884c\u5173\u8054\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u64cd\u4f5c\u6765\u5173\u8054\u6216\u89e3\u5173\u8054\u6d41\u5bf9\u8c61\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tie()"),"\uff1a\u8fd4\u56de\u6307\u5411\u8f93\u51fa\u6d41\u7684\u6307\u9488\u3002\u5982\u679c\u8c03\u7528\u8be5\u51fd\u6570\u7684\u5bf9\u8c61\u5f53\u524d\u5173\u8054\u5230\u4e00\u4e2a\u8f93\u51fa\u6d41\uff0c\u5219\u8fd4\u56de\u7684\u5c31\u662f\u6307\u5411\u8fd9\u4e2a\u6d41\u7684\u6307\u9488\uff0c\u5982\u679c\u5bf9\u8c61\u672a\u5173\u8054\u5230\u6d41\uff0c\u5219\u8fd4\u56de\u7a7a\u6307\u9488\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tie(ostream *)"),"\uff1a\u63d0\u4f9b\u4e00\u4e2a\u6307\u5411",(0,i.kt)("inlineCode",{parentName:"li"},"ostream"),"\u7684\u6307\u9488\uff0c\u5c06\u8c03\u7528\u8be5\u51fd\u6570\u7684 IO \u5bf9\u8c61\u5173\u8054\u5230\u8fd9\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"ostream"),"\u3002\u5f53\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u7a7a\u6307\u9488\u65f6\uff0c\u8c03\u7528\u8be5\u51fd\u6570\u7684 IO \u5bf9\u8c61\u5c06\u4e0d\u518d\u5173\u8054\u5230\u4efb\u4f55\u5bf9\u8c61")),(0,i.kt)("p",null,"\u6bcf\u4e2a\u6d41\u540c\u65f6\u6700\u591a\u5173\u8054\u5230\u4e00\u4e2a\u8f93\u51fa\u6d41\uff0c\u4f46\u591a\u4e2a\u6d41\u53ef\u4ee5\u540c\u65f6\u5173\u8054\u5230\u540c\u4e00\u4e2a\u8f93\u51fa\u6d41\u3002"),(0,i.kt)("h2",{id:"\u4e09\u7c7b\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"},"\u4e09\u3001\u7c7b\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"),(0,i.kt)("p",null,"IO \u7c7b\u5b9a\u4e49\u4e86\u4e00\u79cd\u9690\u5f0f\u8f6c\u6362\uff1a\u5373 IO \u5bf9\u8c61\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"\u503c\u7684\u8f6c\u6362\u3002"),(0,i.kt)("p",null,"\u8be5\u8f6c\u6362\u6839\u636e IO \u5bf9\u8c61\u7684\u6761\u4ef6\u72b6\u6001\u8fdb\u884c\uff0c\u5f53 IO \u5bf9\u8c61\u7684\u6761\u4ef6\u72b6\u6001\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"goodbit"),"\u65f6\uff0c\u8f6c\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff1b\u5426\u5219\uff0c\u8f6c\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"))}C.isMDXComponent=!0}}]);