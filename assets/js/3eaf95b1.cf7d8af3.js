"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),p=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function s(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!s({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,u]=k({queryString:n,groupId:a}),[c,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=p??c;return s({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!s({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),N(e)}),[u,N,l]),tabValues:l}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:p,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),p(a))},s=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:s,onClick:m},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={sidebar_position:1,hide_title:!1,slug:"/Basic_C++/Syntax/Data/Type/Basic_type"},p=void 0,u={unversionedId:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C_C++/C++/\u57fa\u672c\u8bed\u6cd5/\u6570\u636e/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u5185\u7f6e\u7c7b\u578b",id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C_C++/C++/\u57fa\u672c\u8bed\u6cd5/\u6570\u636e/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u5185\u7f6e\u7c7b\u578b",title:"\u57fa\u672c\u5185\u7f6e\u7c7b\u578b",description:"C++ \u7684\u57fa\u672c\u5185\u7f6e\u7c7b\u578b\u53ea\u6709\u4e24\u7c7b\uff1a\u7b97\u672f\u7c7b\u578b\uff08arithmetic type\uff09\u548c\u7a7a\u7c7b\u578b\uff08void\uff09\u3002\u5176\u4ed6\u7684\u5185\u7f6e\u7c7b\u578b\u5982\u6570\u7ec4\u3001\u6307\u9488\u4ee5\u53ca\u5f15\u7528\u90fd\u662f\u590d\u5408\u7c7b\u578b\u3002",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C_C++/C++/\u57fa\u672c\u8bed\u6cd5/\u6570\u636e/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u5185\u7f6e\u7c7b\u578b.mdx",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C_C++/C++/\u57fa\u672c\u8bed\u6cd5/\u6570\u636e/\u6570\u636e\u7c7b\u578b",slug:"/Basic_C++/Syntax/Data/Type/Basic_type",permalink:"/Basic_C++/Syntax/Data/Type/Basic_type",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_title:!1,slug:"/Basic_C++/Syntax/Data/Type/Basic_type"},sidebar:"CPP_Summary",previous:{title:"C++ \u57fa\u7840",permalink:"/Basic_C++/intro"}},d={},c=[{value:"\u4e00\u3001\u7a7a\u7c7b\u578b",id:"\u4e00\u7a7a\u7c7b\u578b",level:2},{value:"\u4e8c\u3001\u7b97\u672f\u7c7b\u578b",id:"\u4e8c\u7b97\u672f\u7c7b\u578b",level:2},{value:"1. \u5e03\u5c14\u7c7b\u578b",id:"1-\u5e03\u5c14\u7c7b\u578b",level:3},{value:"2. \u5b57\u7b26\u7c7b\u578b",id:"2-\u5b57\u7b26\u7c7b\u578b",level:3}],m={toc:c},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"C++ \u7684\u57fa\u672c\u5185\u7f6e\u7c7b\u578b\u53ea\u6709\u4e24\u7c7b\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7b97\u672f\u7c7b\u578b"),"\uff08arithmetic type\uff09\u548c",(0,r.kt)("strong",{parentName:"p"},"\u7a7a\u7c7b\u578b"),"\uff08void\uff09\u3002\u5176\u4ed6\u7684\u5185\u7f6e\u7c7b\u578b\u5982\u6570\u7ec4\u3001\u6307\u9488\u4ee5\u53ca\u5f15\u7528\u90fd\u662f\u590d\u5408\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"\u4e00\u7a7a\u7c7b\u578b"},"\u4e00\u3001\u7a7a\u7c7b\u578b"),(0,r.kt)("p",null,"\u7a7a\u7c7b\u578b\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7c7b\u578b\uff0c\u5b83\u4e0d\u5bf9\u5e94\u5177\u4f53\u7684\u503c\uff0c\u4e00\u822c\u7528\u4e8e\u5728\u8bed\u6cd5\u4e0a\u9700\u8981\u4e00\u4e2a\u503c\u4f46\u5b9e\u9645\u4e0a\u4e0d\u9700\u8981\u7684\u5730\u65b9\uff0c\u6bd4\u5982\u6700\u5e38\u89c1\u7684\u662f\uff0c\u5f53\u51fd\u6570\u4e0d\u8fd4\u56de\u4efb\u4f55\u503c\u65f6\u4f7f\u7528\u7a7a\u7c7b\u578b\u4f5c\u4e3a\u8fd4\u56de\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u7b97\u672f\u7c7b\u578b"},"\u4e8c\u3001\u7b97\u672f\u7c7b\u578b"),(0,r.kt)("p",null,"\u7b97\u672f\u7c7b\u578b\u7684\u542b\u4e49\u4e3b\u8981\u662f\u8868\u793a\u53ea\u8981\u5c5e\u4e8e\u7b97\u672f\u7c7b\u578b\u4e0b\u7684\u67d0\u4e2a\u5177\u4f53\u7c7b\u578b\uff0c\u5b83\u7684\u503c\u90fd\u662f\u53ef\u4ee5\u5728\u8868\u8fbe\u5f0f\u91cc\u76f4\u63a5\u53c2\u4e0e\u8fd0\u7b97\u7684\u3002"),(0,r.kt)("p",null,"\u7b97\u672f\u7c7b\u578b\u5206\u4e3a\u4e24\u7c7b\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u6574\u578b"),"\uff08integral type\uff09\u548c",(0,r.kt)("strong",{parentName:"p"},"\u6d6e\u70b9\u578b"),"\uff08float type\uff09\u3002\u5176\u5206\u7c7b\u4f9d\u636e\u4e3b\u8981\u5728\u4e8e\u6574\u578b\u6570\u548c\u6d6e\u70b9\u6570\u5728\u5b58\u50a8\u65f6\u7684\u7f16\u7801\u4e0d\u540c\uff0c\u5728\u6574\u578b\u4e2d\u65e0\u8bba\u662f\u5b57\u7b26\u578b\u8fd8\u662f\u5e03\u5c14\u7c7b\u578b\u90fd\u548c\u4e00\u822c\u6574\u578b\u4f7f\u7528\u7684\u662f\u76f8\u540c\u7684\u7f16\u7801\uff0c\u53ea\u662f\u89e3\u91ca\u5230\u8bed\u8a00\u5c42\u9762\u4e4b\u540e\u4ea7\u751f\u4e86\u533a\u522b\u3002\u800c\u6d6e\u70b9\u6570\u7684\u7f16\u7801\u5219\u548c\u6574\u578b\u6570\u7684\u7f16\u7801\u6709\u76f4\u63a5\u7684\u533a\u522b\uff0c\u5b83\u4f1a\u5c06\u4e8c\u8fdb\u5236\u4f4d\u62c6\u6210\u51e0\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u8868\u793a\u6d6e\u70b9\u90e8\u5206\u3001\u6307\u6570\u90e8\u5206\u548c\u7b26\u53f7\u90e8\u5206\uff0c\u6240\u4ee5\u6574\u578b\u503c\u548c\u6d6e\u70b9\u578b\u6570\u503c\u5728\u5e95\u5c42\u9700\u8981\u8fdb\u884c\u8f6c\u6362\u3002\u867d\u7136\u770b\u4e0a\u53bb\u4e0d\u540c\u7684\u6574\u578b\u503c\u4e4b\u95f4\u4e5f\u9700\u8981\u8fdb\u884c\u8f6c\u6362\uff0c\u4f46\u5b9e\u9645\u4e0a\u5b83\u4eec\u7684\u7f16\u7801\u5e76\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u3002\uff08\u5f53\u7136\u6bd4\u8f83\u7279\u6b8a\u7684\u4e00\u4e2a\u662f\u5e03\u5c14\u7c7b\u578b\uff0c\u5f53\u5176\u4ed6\u6574\u578b\u8f6c\u6362\u4e3a\u5e03\u5c14\u7c7b\u578b\u65f6\uff0c\u65e0\u8bba\u4e4b\u524d\u662f\u4ec0\u4e48\u503c\uff0c\u4f46\u6700\u540e\u90fd\u4f1a\u53d8\u6210 0 \u6216 1\u3002\u4e3b\u8981\u662f\u56e0\u4e3a\u5728\u903b\u8f91\u4e0a\u5e03\u5c14\u7c7b\u578b\u53ea\u6709\u4e00\u4e2a\u4e8c\u8fdb\u5236\u4f4d\uff0c\u800c\u4e14\u5176\u5b9a\u4e49\u548c\u5176\u4ed6\u6574\u578b\u6709\u6240\u533a\u522b\uff0c\u6240\u4ee5\u6d89\u53ca\u5230\u5176\u4ed6\u6574\u578b\u8f6c\u6362\u4e3a\u5e03\u5c14\u7c7b\u578b\u65f6\u7f16\u7801\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u8f6c\u6362\uff0c\u4f46\u8fd9\u662f\u7531\u4e8e C++ \u8bed\u8a00\u5c42\u9762\u7684\u5b9a\u4e49\u533a\u522b\u5bfc\u81f4\u7684\u8f6c\u6362\uff0c\u5e76\u975e\u786c\u4ef6\u5c42\u9762\u9700\u8981\u7684\u8f6c\u6362\uff0c\u6240\u4ee5\u5e03\u5c14\u7c7b\u578b\u4ecd\u7136\u5c5e\u4e8e\u6574\u578b\uff09\u3002"),(0,r.kt)("p",null,"\u7b97\u672f\u7c7b\u578b\u7684\u5c3a\u5bf8\u5728\u4e0d\u540c\u673a\u5668\u4e0a\u6709\u6240\u5dee\u522b\uff0cC++ \u6807\u51c6\u53ea\u89c4\u5b9a\u4e86\u5b83\u4eec\u7684\u6700\u5c0f\u503c\uff0c\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0f\u5c3a\u5bf8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"8 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wchar_t")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bbd\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"16 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char16_t")),(0,r.kt)("td",{parentName:"tr",align:null},"Unicode \u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"16 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char32_t")),(0,r.kt)("td",{parentName:"tr",align:null},"Unicode \u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"32 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short")),(0,r.kt)("td",{parentName:"tr",align:null},"\u77ed\u6574\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"16 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6574\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"16 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u6574\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"32 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long long")),(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u6574\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"64 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u4f4d\u6709\u6548\u6570\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"10 \u4f4d\u6709\u6548\u6570\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long double")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u7cbe\u5ea6\u6d6e\u70b9\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"10 \u4f4d\u6709\u6548\u6570\u5b57")))),(0,r.kt)("h3",{id:"1-\u5e03\u5c14\u7c7b\u578b"},"1. \u5e03\u5c14\u7c7b\u578b"),(0,r.kt)("p",null,"\u5e03\u5c14\u7c7b\u578b\u7528\u6765\u8868\u793a\u903b\u8f91\u8fd0\u7b97\u6216\u5173\u7cfb\u8fd0\u7b97\u7684\u7ed3\u679c\uff0c\u5176\u7ed3\u679c\u53ea\u6709\u4e24\u4e2a\u5206\u522b\u662f",(0,r.kt)("strong",{parentName:"p"},"\u771f"),"\uff08true\uff09\u4e0e",(0,r.kt)("strong",{parentName:"p"},"\u5047"),"\uff08false\uff09\u3002"),(0,r.kt)("h3",{id:"2-\u5b57\u7b26\u7c7b\u578b"},"2. \u5b57\u7b26\u7c7b\u578b"),(0,r.kt)("p",null,"C++ \u63d0\u4f9b\u4e86\u51e0\u79cd\u5b57\u7b26\u7c7b\u578b\uff0c\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u4e4b\u5916\uff0c\u5176\u4ed6\u51e0\u79cd\u5b57\u7b26\u7c7b\u578b\u90fd\u662f\u4e3a\u4e86\u652f\u6301\u56fd\u9645\u5316\u800c\u5b58\u5728\u7684\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"char",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u6700\u57fa\u672c\u7684\u5b57\u7b26\u7c7b\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\uff0c\u5b83\u4f7f\u7528 ASCII \u7f16\u7801\u6765\u6620\u5c04\u5b57\u7b26\u4e0e\u6574\u6570\u503c\u4e4b\u95f4\u7684\u5173\u7cfb\u3002ASCII \u7801\u4e00\u5171 127 \u4e2a\uff0c\u52a0\u4e0a\u8868\u793a\u7a7a\u5b57\u7b26\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"'\\0'"),"\uff0c\u4e00\u5171 128 \u4e2a\u5b57\u7b26\uff0c\u7531\u4e8e\u6700\u5927\u503c\u662f 127\uff0c\u6240\u4ee5\u53ea\u9700\u8981 7 \u4e2a\u4e8c\u8fdb\u5236\u4f4d\u5c31\u8db3\u4ee5\u8868\u793a\u6240\u6709 ASCII \u7801\u3002\u800c\u4e4b\u6240\u4ee5\u4f7f\u7528 8 \u4e2a\u4e8c\u8fdb\u5236\u4f4d\u8868\u793a\uff0c\u662f\u56e0\u4e3a\u5927\u591a\u6570\u8ba1\u7b97\u673a\u90fd\u4ee5 2 \u7684\u6574\u6570\u6b21\u5e42\u4e2a\u4e8c\u8fdb\u5236\u4f4d\u4f5c\u4e3a\u5757\u6765\u5904\u7406\u5185\u5b58\uff0c\u53ef\u5bfb\u5740\u7684\u6700\u5c0f\u5185\u5b58\u5757\u79f0\u4e3a \u201c\u5b57\u8282\uff08byte\uff09\u201d\uff0c\u5927\u591a\u6570\u673a\u5668\u7684\u5b57\u8282\u7531 8 \u4e2a\u4e8c\u8fdb\u5236\u4f4d\u7ec4\u6210\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u548c\u4e00\u822c\u6574\u578b\u7684\u53ef\u8f6c\u6362\u6027\uff0c\u4f60\u53ef\u4ee5\u5c06\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u5f53\u4f5c\u6bd4",(0,r.kt)("inlineCode",{parentName:"p"},"short"),"\u8fd8\u77ed\u7684\u6574\u578b\u4f7f\u7528\uff0c\u4f46\u5b9e\u9645\u60c5\u51b5\u4e0b\u5e76\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\u3002"),(0,r.kt)("admonition",{title:"\u8bf7\u8c28\u614e\u4f7f\u7528 char \u7c7b\u578b\u8868\u793a\u6574\u6570",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u822c\u6574\u578b\u90fd\u6709\u4e24\u7c7b\uff0c\u5206\u522b\u662f\u6709\u7b26\u53f7\u6574\u578b\u548c\u65e0\u7b26\u53f7\u6574\u578b\uff0c\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"short"),"\u7b49\u4e00\u822c\u6574\u578b\u90fd\u662f\u6709\u7b26\u53f7\u7c7b\u578b\u7684\u6570\uff0c\u8fd9\u8868\u793a\u5b83\u4eec\u6709\u4e00\u4e2a\u4e8c\u8fdb\u5236\u4f4d\u5c06\u7528\u6765\u8868\u793a\u6570\u636e\u7684\u7b26\u53f7\uff0c\u4e8e\u662f\u5b83\u4eec\u867d\u7136\u5c3a\u5bf8\u76f8\u540c\uff0c\u4f46\u8868\u793a\u7684\u6570\u636e\u8303\u56f4\u5374\u4e0d\u76f8\u540c\u4e86\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u7684\u9ed8\u8ba4\u7b26\u53f7\u6027\u5e76\u672a\u660e\u786e\u5b9a\u4e49\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd9\u53d6\u51b3\u4e8e\u7f16\u8bd1\u5668\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u5c06\u53ef\u80fd\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"signed char"),"\uff0c\u4e5f\u53ef\u80fd\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"unsigned char"),"\u7c7b\u578b\u3002\u8fd9\u8868\u793a\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u8868\u793a\u6574\u6570\uff0c\u4f46\u4e3a\u4e86\u7a0b\u5e8f\u7684\u517c\u5bb9\u6027\u4ee5\u53ca\u5b89\u5168\u6027\uff0c\u5728\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u65f6\uff0c\u6700\u597d\u4fdd\u8bc1\u5b83\u6240\u4fdd\u5b58\u7684\u503c\u5728 0 - 127 \u4e4b\u95f4\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u597d\u7684\u505a\u6cd5\u662f\u4f7f\u7528\u663e\u5f0f\u58f0\u660e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"signed char"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"unsigned char"),"\u7c7b\u578b\u4fdd\u5b58\u6574\u6570\u3002"))),(0,r.kt)(i.Z,{value:"wchar_t",label:"\u5bbd\u5b57\u7b26\u7c7b\u578b",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wchar_t"),"\u7c7b\u578b\u8868\u793a\u5bbd\u5b57\u7b26\uff0c\u8fd9\u662f\u6700\u521d\u7528\u6765\u652f\u6301\u56fd\u9645\u5316\u7684\u5b57\u7b26\u7c7b\u578b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"wchar_t"),"\u5e76\u672a\u8868\u660e\u81ea\u5df1\u4f7f\u7528\u7684\u662f\u54ea\u4e00\u79cd\u7f16\u7801\uff0c\u6bd4\u8f83\u5e38\u89c1\u7684\u4e24\u79cd\u662f\u591a\u5b57\u8282\u7f16\u7801\u548c Unicode \u7f16\u7801\u3002\u5176\u4e2d\u591a\u5b57\u8282\u7f16\u7801\u5e76\u975e\u6bcf\u4e2a\u5b57\u7b26\u90fd\u662f\u56fa\u5b9a\u7684\u957f\u5ea6\u6bd4\u5982 UTF-8 \u7f16\u7801\u3001GBK \u7f16\u7801\u7b49\uff0c\u7531\u4e8e\u8fd9\u79cd\u7f16\u7801\u5904\u7406\u8d77\u6765\u53ef\u80fd\u4f1a\u4ea7\u751f\u95ee\u9898\uff0c\u6240\u4ee5\u4e00\u822c\u90fd\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"wchar_t"),"\u4fdd\u5b58 Unicode \u7f16\u7801\u3002Unicode \u7f16\u7801\u662f\u56fa\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u7f16\u7801\uff0c\u5305\u62ec UTF-16 \u548c UTF-32\uff0c\u5b83\u4eec\u7684\u6bcf\u4e2a\u5b57\u7b26\u5206\u522b\u7528 2 \u4e2a\u5b57\u8282\u6216 4 \u4e2a\u5b57\u8282\u8868\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"char16_t"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"char32_t"),"\u5219\u4f3c\u4e4e\u660e\u786e\u5730\u8bf4\u660e\u4e86\u4f60\u5e94\u8be5\u5c06 UTF-16 \u548c UTF-32 \u7684\u7f16\u7801\u4fdd\u5b58\u5728\u8fd9\u4e24\u79cd\u7c7b\u578b\u4e2d\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528\u8fc7 Windows \u8fdb\u884c\u7f16\u7a0b\u5e76\u5904\u7406\u8fc7\u4e2d\u6587\u5b57\u7b26\uff0c\u76f8\u4fe1\u4f60\u5e94\u8be5\u591a\u591a\u5c11\u5c11\u9047\u5230\u8fc7\u4e71\u7801\u95ee\u9898\u3002\u8fd9\u91cc\u8bf4\u660e\u51e0\u4e2a\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\u7684\u5173\u952e\u70b9\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u4f60\u5728\u7a0b\u5e8f\u4e2d\u58f0\u660e\u5b57\u7b26\u6216\u5b57\u7b26\u4e32\u5e38\u91cf\u65f6\uff0c\u5b83\u4eec\u4f1a\u88ab\u4fdd\u5b58\u4e3a\u4ec0\u4e48\u7f16\u7801\u53d6\u51b3\u4e8e\u4f60\u7684\u6587\u4ef6\u4f7f\u7528\u7684\u7f16\u7801\u800c\u4e0d\u5728\u4e8e\u4f60\u4f7f\u7528\u7684\u5b57\u7b26\u7c7b\u578b\uff0c\u6240\u4ee5\u5373\u4f7f\u4f60\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"wchar_t"),"\u751a\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"char16_t"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"char32_t"),"\u8fd9\u79cd\u660e\u786e\u4e86\u4fdd\u5b58\u5b57\u7b26\u7f16\u7801\u7684\u7c7b\u578b\uff0c\u5b83\u4eec\u6240\u4fdd\u5b58\u7684\u4ecd\u7136\u662f\u4f60\u7684\u6587\u4ef6\u5bf9\u5e94\u7684\u5b57\u7b26\u7f16\u7801\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5343\u4e07\u4e0d\u8981\u56e0\u4e3a\u4e0a\u4e00\u70b9\u6240\u8bf4\u7684\u539f\u56e0\u5c31\u5c06\u6587\u4ef6\u7684\u7f16\u7801\u6539\u4e3a UTF-16 \u7136\u540e\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"char16_t"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"wchar_t"),"\u7c7b\u578b\uff08UTF-32 \u548c",(0,r.kt)("inlineCode",{parentName:"p"},"char32_t"),"\u540c\u7406\uff09\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u6700\u7ec8\u8f93\u51fa\u662f\u5426\u4e71\u7801\u8fd8\u53d6\u51b3\u4e8e\u4f60\u7ec8\u7aef\u7684\u5b57\u7b26\u96c6\u3002\u4e2d\u56fd\u5730\u533a\u7684 Windows \u51e0\u4e4e\u90fd\u662f GBK \u7f16\u7801\uff0c\u5c06\u4f7f\u7528 UTF-16 \u4fdd\u5b58\u7684\u7f16\u7801\u901a\u8fc7 GBK \u7f16\u7801\u7684\u7ec8\u7aef\u89e3\u91ca\u6beb\u65e0\u7591\u95ee\u8fd8\u662f\u4f1a\u4ea7\u751f\u4e71\u7801\u3002"),(0,r.kt)("p",{parentName:"li"},"\u800c\u4e14\u7531\u4e8e GBK \u662f\u4e00\u79cd\u591a\u5b57\u8282\u7f16\u7801\uff0c\u6240\u6709\u7684\u591a\u5b57\u8282\u7f16\u7801\u57fa\u672c\u4e0a\u90fd\u6709\u4e00\u4e2a\u7279\u70b9\u5c31\u662f\u4ece 0 - 127 \u7684\u8fd9\u4e9b\u5b57\u7b26\u548c ASCII \u7f16\u7801\u5b8c\u5168\u76f8\u540c\u3002\u800c UTF-16 \u662f\u56fa\u5b9a 2 \u5b57\u8282\u7f16\u7801\uff0c\u5728 ASCII \u7801\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u5728 UTF-16 \u4e2d\u7684\u8868\u793a\u90fd\u4e0d\u76f8\u540c\uff0c\u8fd9\u5c06\u5bfc\u81f4\u7a0b\u5e8f\u5728\u7f16\u8bd1\u9636\u6bb5\uff0c\u7f16\u8bd1\u5668\u8bfb\u53d6\u6587\u4ef6\u7684\u65f6\u5019\u5c31\u4f1a\u51fa\u9519\uff0c\u56e0\u4e3a\u4ee3\u7801\u57fa\u672c\u4e0a\u90fd\u662f\u7528 ASCII \u7801\u4e2d\u7684\u5b57\u7b26\u5199\u7684\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u4e0d\u8981\u56e0\u4e3a\u7b2c 2 \u70b9\u6240\u8bf4\u7684\u539f\u56e0\u5c31\u53bb\u4fee\u6539\u7ec8\u7aef\u7684\u7f16\u7801\u73af\u5883\u3002\u9996\u5148\uff0c\u8fd9\u662f\u4e00\u79cd\u5f88\u4e0d\u597d\u7684\u884c\u4e3a\uff0c\u6211\u4eec\u5e94\u8be5\u6c38\u8fdc\u4fee\u6539\u7a0b\u5e8f\u672c\u8eab\u800c\u4e0d\u662f\u73af\u5883\uff0c\u56e0\u4e3a\u5373\u4f7f\u4fee\u6539\u73af\u5883\u8ba9\u7a0b\u5e8f\u6b63\u786e\u8fd0\u884c\u4e86\uff0c\u4e5f\u65e0\u6cd5\u4fdd\u8bc1\u5b83\u53ef\u4ee5\u5728\u5176\u4ed6\u7535\u8111\u4e0a\u8fd0\u884c\uff0c\u96be\u9053\u8ba9\u6bcf\u4e2a\u8fd0\u884c\u7a0b\u5e8f\u7684\u7528\u6237\u90fd\u53bb\u4fee\u6539\u81ea\u5df1\u7684\u7ec8\u7aef\u73af\u5883\uff1f"),(0,r.kt)("p",{parentName:"li"},"\u5176\u6b21\uff0cUTF-16 \u548c UTF-32 \u7531\u4e8e\u91c7\u7528\u4e86\u6bcf\u4e2a\u5b57\u7b26\u90fd\u56fa\u5b9a\u7f16\u7801\u957f\u5ea6\u7684\u8868\u793a\u65b9\u6cd5\uff0c\u6240\u4ee5\u5b83\u4eec\u6bd4\u8d77\u591a\u5b57\u8282\u7f16\u7801\u6765\u8bf4\u80af\u5b9a\u4f1a\u591a\u5360\u7528\u5f88\u591a\u7a7a\u95f4\uff0c\u5bfc\u81f4\u7a7a\u95f4\u7684\u6d6a\u8d39\uff0c\u6240\u4ee5\u73b0\u5728\u6700\u5e38\u7528\u7684\u8fd8\u662f\u5c06\u6587\u4ef6\u4fdd\u5b58\u4e3a UTF-8 \u7f16\u7801\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53e6\u5916\uff0c\u5c31\u7b97\u65e0\u8bba\u5982\u4f55\u4f60\u90fd\u8fd8\u662f\u51b3\u5b9a\u5c06\u7ec8\u7aef\u7f16\u7801\u73af\u5883\u6539\u6210 UTF-16 \u6216 UTF-32\uff0c\u5982\u679c\u6587\u4ef6\u7f16\u7801\u4f7f\u7528 UTF16 \u6216 UTF-32\uff0c\u90a3\u4e48\u80af\u5b9a\u53ef\u4ee5\u9884\u6d4b\u7684\u662f\u4f60\u65e0\u6cd5\u518d\u5728\u4f60\u7684\u7a0b\u5e8f\u91cc\u4f7f\u7528\u666e\u901a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\uff0c\u8fd9\u4e24\u79cd\u7f16\u7801\u7684\u5927\u90e8\u5206\u5b57\u7b26\u5f88\u6709\u53ef\u80fd\u542b\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"'\\0'"),"\u5b57\u8282\uff0c\u8fd9\u6807\u8bb0\u7740\u666e\u901a",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u3002")))),(0,r.kt)("admonition",{title:"\u5982\u4f55\u907f\u514d\u4e71\u7801\u540c\u65f6\u5904\u7406 Unicode \u5b57\u7b26",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u4e0a\u9762\u6240\u8bf4\u7684\u4e09\u4e2a\u539f\u56e0\uff0c\u6240\u4ee5\u770b\u4e0a\u53bb\u4f3c\u4e4e\u6ca1\u6709\u4e00\u4e2a\u5f88\u597d\u7684\u89e3\u51b3\u529e\u6cd5\u3002\u4f46\u5b9e\u9645\u4e0a\u662f\u6709\u7684\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u5728\u7f16\u8bd1\u524d\u5c06\u6587\u4ef6\u7f16\u7801\u8f6c\u6362\u6210\u7ec8\u7aef\u7f16\u7801\uff0c\u8fd9\u6837\u57fa\u672c\u4e0a\u7a0b\u5e8f\u53ef\u4ee5\u907f\u514d\u4e71\u7801\u95ee\u9898\u3002\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u65b9\u6cd5\u4e5f\u5e76\u4e0d\u7b97\u597d\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f60\u5c31\u6ca1\u6709\u9009\u62e9\u7684\u4f59\u5730\uff0c\u5728\u7a0b\u5e8f\u4e2d\u4f60\u5c31\u53ea\u80fd\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"wchar_t"),"\u4fdd\u5b58 GBK \u7f16\u7801\uff08\u5176\u4ed6\u5730\u533a\u5219\u662f\u5176\u4ed6\u4ee3\u7801\u9875\uff09\uff0c\u5e76\u4e14\u5904\u7406 GBK \u7f16\u7801\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9047\u5230\u4efb\u4f55\u5b57\u7b26\u4e32\u7684\u65f6\u5019\u90fd\u5c06\u7f16\u7801\u8fdb\u884c\u8f6c\u6362\u3002\u6bd4\u5982\uff0c\u5982\u679c\u4f60\u8981\u58f0\u660e\u5e76\u4fdd\u5b58\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e38\u91cf\uff0c\u4f60\u53ef\u4ee5\u5148\u5c06\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5e38\u91cf\u4ece\u6587\u4ef6\u7f16\u7801\u8f6c\u6362\u4e3a\u4f60\u8981\u5904\u7406\u7684\u7f16\u7801\uff1b\u5f53\u4f60\u8981\u5904\u7406\u8f93\u5165\u8f93\u51fa\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u4ee5\u5c06\u5f85\u8f93\u51fa\u5b57\u7b26\u4e32\u5148\u8f6c\u6362\u4e3a\u7ec8\u7aef\u7f16\u7801\u518d\u8fdb\u884c\u8f93\u51fa\uff0c\u5c06\u5f85\u8f93\u5165\u5b57\u7b26\u4e32\u5148\u8f6c\u6362\u4e3a\u4f60\u8981\u5904\u7406\u7684\u7f16\u7801\u518d\u8fdb\u884c\u4fdd\u5b58\u3002\u8fd9\u79cd\u65b9\u6cd5\u770b\u4e0a\u53bb\u8fc7\u7a0b\u6bd4\u8f83\u7e41\u7410\uff0c\u4f46\u5b9e\u9645\u4e0a C++ \u6807\u51c6\u5e93\u5c31\u63d0\u4f9b\u4e86\u7f16\u7801\u8f6c\u6362\u7684\u51fd\u6570\uff0c\u5982\u679c\u4f60\u8fdb\u884c Windows \u7f16\u7a0b\uff0cWin32 API \u4e2d\u4e5f\u6709\u9488\u5bf9\u7f16\u7801\u8f6c\u6362\u7684\u51fd\u6570\u3002"))))))}k.isMDXComponent=!0}}]);