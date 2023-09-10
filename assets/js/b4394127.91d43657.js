"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",C={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,d=m["".concat(p,".").concat(s)]||m[s]||C[s]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"C++",slug:"/CPP_Language/Intro",keywords:["C++","\u7b80\u4ecb","\u603b\u7ed3"],description:"\u5173\u4e8e C++ \u7684\u603b\u7ed3\u6587\u6863\u7684\u7b80\u4ecb\uff0c\u4e3b\u8981\u5305\u62ec\u6574\u4e2a\u6587\u6863\u7684\u7b80\u4ecb\u4ee5\u53ca C++ \u6807\u51c6\u8fd8\u6709\u53c2\u8003\u8d44\u6599"},l=void 0,i={unversionedId:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/CPP_Language/index",id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/CPP_Language/index",title:"C++",description:"\u5173\u4e8e C++ \u7684\u603b\u7ed3\u6587\u6863\u7684\u7b80\u4ecb\uff0c\u4e3b\u8981\u5305\u62ec\u6574\u4e2a\u6587\u6863\u7684\u7b80\u4ecb\u4ee5\u53ca C++ \u6807\u51c6\u8fd8\u6709\u53c2\u8003\u8d44\u6599",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/CPP_Language/01-index.mdx",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/CPP_Language",slug:"/CPP_Language/Intro",permalink:"/CPP_Language/Intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"C++",slug:"/CPP_Language/Intro",keywords:["C++","\u7b80\u4ecb","\u603b\u7ed3"],description:"\u5173\u4e8e C++ \u7684\u603b\u7ed3\u6587\u6863\u7684\u7b80\u4ecb\uff0c\u4e3b\u8981\u5305\u62ec\u6574\u4e2a\u6587\u6863\u7684\u7b80\u4ecb\u4ee5\u53ca C++ \u6807\u51c6\u8fd8\u6709\u53c2\u8003\u8d44\u6599"},sidebar:"CPP_Language",next:{title:"\u57fa\u672c\u5185\u7f6e\u7c7b\u578b",permalink:"/CPP_Language/Data/Data_Type/Basic_Type"}},p={},u=[{value:"\u6587\u6863\u7b80\u4ecb",id:"intro_of_doc",level:2},{value:"C++ \u6807\u51c6",id:"CPP_STD",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"reference",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("Tabs"),C=c("TabItem"),s={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro_of_doc"},"\u6587\u6863\u7b80\u4ecb"),(0,a.kt)("p",null,"\u6b64\u6587\u6863\u8f83\u4e3a\u5168\u9762\u5730\u603b\u7ed3\u4e86 C++ \u7684\u76f8\u5173\u5185\u5bb9\uff0c\u603b\u4f53\u5185\u5bb9\u57fa\u672c\u5305\u62ec 4 \u4e2a\u65b9\u9762\u3002\u9996\u5148\u662f\u57fa\u672c\u8bed\u6cd5\u90e8\u5206\uff0c\u5305\u62ec\u6570\u636e\u3001\u8868\u8fbe\u5f0f\u3001\u8bed\u53e5\u3001\u51fd\u6570\u8fd9 4 \u4e2a\u65b9\u9762\uff0c\u8fd9 4 \u4e2a\u65b9\u9762\u51e0\u4e4e\u662f\u6bcf\u95e8\u7f16\u7a0b\u8bed\u8a00\u90fd\u5177\u5907\u7684\u8bed\u6cd5\u8981\u7d20\uff1b\u5176\u6b21\u662f C++ \u7c7b\u7684\u76f8\u5173\u5185\u5bb9\uff0c\u7b97\u662f C++ \u9762\u5411\u5bf9\u8c61\u7279\u6027\u91cc\u7684\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u7ec4\u6210\u90e8\u5206\uff1b\u7b2c\u4e09\u662f C++ \u6807\u51c6\u5e93\uff0c\u5927\u90e8\u5206\u8bed\u8a00\u90fd\u4f1a\u6709\u81ea\u5df1\u7684\u6807\u51c6\u5e93\uff0c\u800c C++ \u7684\u6807\u51c6\u5e93\u5219\u662f\u51fa\u4e86\u540d\u7684\u590d\u6742\uff1b\u6700\u540e\u4e00\u90e8\u5206\u5c31\u57fa\u672c\u4e0a\u662f\u6a21\u677f\u4e0e\u6cdb\u578b\u7f16\u7a0b\u76f8\u5173\u7684\u5185\u5bb9\u4e86\uff0c\u6a21\u677f\u7684\u4f7f\u7528\u53ef\u4ee5\u5927\u5927\u63d0\u9ad8\u7c7b\u7684\u53ef\u91cd\u7528\u6027\uff0c\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a\u6bd4\u8f83\u96be\u7684\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u672c\u6587\u6863\u4e3b\u8981\u6309\u7167\u77e5\u8bc6\u4f53\u7cfb\u7684\u7ec4\u7ec7\u65b9\u5f0f\u8fdb\u884c\u7f16\u5199\uff0c\u800c\u4e0d\u662f\u6309\u7167\u4ece\u5df2\u77e5\u5230\u672a\u77e5\u7684\u7ec4\u7ec7\u65b9\u5f0f\u8fdb\u884c\u7f16\u5199\uff0c\u6545\u672c\u6587\u6863\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4\u5e76\u4e0d\u662f\u4e00\u4e2a\u6559\u7a0b\u7c7b\u6587\u6863\uff0c\u800c\u662f\u4e00\u4e2a C++ \u7684\u7f16\u7a0b\u53c2\u8003\u3002\u5982\u679c\u4f60\u662f\u5728\u5bfb\u627e\u4e00\u4e2a C++ \u6559\u7a0b\uff0c\u90a3\u6211\u5e76\u4e0d\u5efa\u8bae\u4f60\u76f4\u63a5\u770b\u672c\u6587\u6863\uff0c\u4f46\u6211\u63a8\u8350\u4f60\u9605\u8bfb\u672c\u6587\u6863\u7684",(0,a.kt)("a",{parentName:"p",href:"#reference"},"\u53c2\u8003\u4e66\u7c4d"),"\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4e3a\u4f5c\u8005\u7eaf\u624b\u6253\uff0c\u53ea\u6709\u6211 1 \u4e2a\u4eba\u7684\u53c2\u4e0e\u96be\u514d\u4f1a\u6709\u758f\u6f0f\u548c\u7406\u89e3\u4e0d\u5230\u4f4d\u7684\u5730\u65b9\uff0c\u5982\u679c\u5bf9\u672c\u6587\u6863\u6709\u4efb\u4f55\u7684\u7591\u95ee\u6216\u8005\u5efa\u8bae\uff0c\u53ef\u4ee5\u901a\u8fc7\u9875\u811a\u7684\u8054\u7cfb\u65b9\u5f0f\u6765\u8054\u7cfb\u6211\uff0c\u975e\u5e38\u611f\u8c22\u6765\u81ea\u4efb\u4f55\u4eba\u7684\u4efb\u4f55\u53cd\u9988\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u63d0\u4e00\u5634\u5173\u4e8e C++ \u7684\u5b66\u4e60\u65b9\u6cd5\u3002\u76f8\u4fe1\u5f88\u591a\u4eba\u548c\u6211\u4e00\u6837\u90fd\u662f\u5148\u5b66\u4e86 C \u8bed\u8a00\u7136\u540e\u518d\u5b66\u7684 C++\u3002C++ \u5728\u8bed\u6cd5\u5c42\u9762\u4e0a\u548c C \u8bed\u8a00\u6781\u5176\u76f8\u4f3c\u8fd9\u662f\u6beb\u65e0\u7591\u95ee\u7684\uff0c\u4f46\u6211\u7684\u5efa\u8bae\u662f\u5728\u5b66\u4e60 C++ \u7684\u65f6\u5019\u6700\u597d\u6682\u65f6\u5fd8\u8bb0 C \u8bed\u8a00\uff0c\u56e0\u4e3a\u4f60\u4f1a\u53d1\u73b0\u5b83\u4eec\u5b9e\u9645\u4e0a\u5728\u67d0\u4e9b\u65b9\u9762\u8fd8\u662f\u5b58\u5728\u533a\u522b\u7684\uff0c\u6bd4\u5982 C++ \u7684\u7c7b\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),"\u5173\u952e\u5b57\uff0c\u800c C \u8bed\u8a00\u7684\u7ed3\u6784\u4e5f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),"\u5173\u952e\u5b57\uff0c\u4f46\u8981\u662f\u4f60\u4e00\u76f4\u7528 C \u8bed\u8a00\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),"\u8bed\u6cd5\u53bb\u7406\u89e3 C++ \u7684\u7c7b\uff0c\u4f60\u4f1a\u53d1\u73b0\u7406\u89e3\u8d77\u6765\u53cd\u800c\u66f4\u96be\u4e86\u3002\u5f53\u7136\uff0c\u5728\u5f88\u591a\u5730\u65b9\u8fd8\u662f\u53ef\u4ee5\u7528 C \u8bed\u8a00\u4f5c\u4e3a\u53c2\u8003\u53bb\u7406\u89e3 C++ \u7684\uff0c\u5c06\u591a\u4e2a\u8bed\u8a00\u8fdb\u884c\u5bf9\u6bd4\u5b66\u4e60\u4e5f\u975e\u5e38\u6709\u5229\u4e8e\u7406\u89e3 \u201d\u7f16\u7a0b\u8bed\u8a00\u201c \u672c\u8eab\uff0c\u4f46\u5177\u4f53\u5728\u4ec0\u4e48\u65f6\u5019\u53c2\u8003 C \u8bed\u8a00\uff0c\u800c\u4ec0\u4e48\u65f6\u5019\u4e0d\u5e94\u8be5\u53c2\u8003 C \u8bed\u8a00\u6211\u60f3\u8fd9\u5c31\u9700\u8981\u4f60\u5728\u5b66\u4e60\u7684\u8fc7\u7a0b\u4e2d\u81ea\u5df1\u53bb\u5224\u65ad\u4e86\u3002"),(0,a.kt)("h2",{id:"CPP_STD"},"C++ \u6807\u51c6"),(0,a.kt)("p",null,"\u5728\u672c\u6587\u6863\u5f00\u59cb\u7f16\u5199\u65f6\uff0cC++ \u7684 ISO \u6807\u51c6\u8fd8\u4ec5\u4ec5\u53ea\u662f C++20\uff0c\u800c\u5b9e\u9645\u4e0a\u6709\u4e00\u90e8\u5206\u7f16\u8bd1\u5668\u652f\u6301\u7684\u6807\u51c6\u5df2\u7ecf\u5230 C++23 \u4e86\u3002"),(0,a.kt)("p",null,"\u867d\u7136\u5982\u6b64\uff0c\u4f46\u672c\u6587\u6863\u5728\u7f16\u5199\u8fc7\u7a0b\u4e2d\u4ecd\u5c06\u4ee5 ISO \u6807\u51c6\u4e3a\u51c6\uff0c\u800c\u7531\u4e8e C++11 \u8f83\u4e4b\u524d\u7684\u6807\u51c6\u53d8\u52a8\u8f83\u5927\uff0c\u6545\u4ee5 C++11 \u7684 ISO \u6807\u51c6\u4e3a\u57fa\u672c\u6807\u51c6\uff0c\u540e\u7eed\u7684\u6240\u6709\u6807\u51c6\u4e2d\u66f4\u65b0\u4e86\u7684\u5185\u5bb9\u5c06\u989d\u5916\u7ed9\u51fa\uff08\u5177\u4f53\u6837\u5f0f\u5982\u4e0b\uff09\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u53ef\u4ee5\u5728\u672c\u6587\u6863\u4e2d\u770b\u5230\u5927\u90e8\u5206\u4e0d\u662f\u7279\u522b\u5217\u51fa\u7684\u7684 \u201cC++ \u5c31\u662f\u2026\u2026\u201d\u3001\u201cC++ \u53ef\u4ee5\u2026\u2026\u201d \u7b49\u8bed\u53e5\u90fd\u5e94\u8be5\u8f6c\u6362\u4e3a \u201cC++11 \u5c31\u662f\u2026\u2026\u201d\u3001\u201cC++11 \u53ef\u4ee5\u2026\u2026\u201d \u7b49\u7b49\u3002\u8fd9\u8868\u793a\u5982\u679c\u4f60\u4f7f\u7528 C++11 \u4e4b\u524d\u7684 C++ \u7248\u672c\u6216\u8bb8\u5c06\u4e0e\u672c\u6587\u6863\u5185\u5bb9\u4ea7\u751f\u51b2\u7a81\u3002"),(0,a.kt)("admonition",{title:"C++ \u6807\u51c6\u95f4\u533a\u522b\u6837\u5f0f\u793a\u4f8b",type:"info"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(C,{value:"C++ 14",default:!0,mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u662f C++14 \u6807\u51c6\u4e0e C++11 \u6807\u51c6\u7684\u4e0d\u540c\u70b9")),(0,a.kt)(C,{value:"C++ 17",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u662f C++17 \u6807\u51c6\u4e0e C++11 \u6807\u51c6\u7684\u4e0d\u540c\u70b9")),(0,a.kt)(C,{value:"C++ 20",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u662f C++20 \u6807\u51c6\u4e0e C++11 \u6807\u51c6\u7684\u4e0d\u540c\u70b9")))),(0,a.kt)("h2",{id:"reference"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u7684\u53c2\u8003\u6750\u6599\u4e3b\u8981\u7531\u4e09\u90e8\u5206\u7ec4\u6210\uff0c\u5206\u522b\u662f\u4e66\u7c4d\u3001ISO \u6807\u51c6\u6587\u6863\u4ee5\u53ca\u7f51\u7edc\u8d44\u6599\uff0c\u4e3b\u8981\u53c2\u8003\u6750\u6599\u5982\u4e0b\uff1a"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(C,{value:"Books",label:"\u4e66\u7c4d",default:!0,mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u300aC++ Primer\u300b\uff08\u7b2c 5 \u7248\uff0c\u4e2d\u6587\u7248\uff09\u2014\u2014 Stanley B. Lippman, Josee Lajoie, Barbara E. Moo \u8457"))),(0,a.kt)(C,{value:"ISO",label:"ISO \u6807\u51c6\u6587\u6863",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.iso.org/standard/50372.html"},"ISO/IEC 14882:2011 Information technology \u2014 Programming languages \u2014 C++")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.iso.org/standard/64029.html"},"ISO/IEC 14882:2014 Information technology \u2014 Programming languages \u2014 C++")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.iso.org/standard/68564.html"},"ISO/IEC 14882:2017 Programming languages \u2014 C++")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.iso.org/standard/79358.html"},"ISO/IEC 14882:2020 Programming languages \u2014 C++")))),(0,a.kt)(C,{value:"Web",label:"\u7f51\u7ad9",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/"},"cppreference.com"),"\uff08",(0,a.kt)("a",{parentName:"li",href:"https://zh.cppreference.com/w/%E9%A6%96%E9%A1%B5"},"\u4e2d\u6587\u7248"),"\uff09")))))}f.isMDXComponent=!0}}]);