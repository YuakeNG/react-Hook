(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"5ZrT":function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("lFyj");function o(e,t){return d(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function s(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),u=i[0],m=i[1],s=Object(n["useState"])(!1),d=o(s,2),E=d[0],h=d[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},A63h:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("D2G6"),c=a("Il19"),o=a("zJrY"),i=a("5ZrT"),u=l.a.memo((e=>{var t=e.demos,a=t["uselocalstoragestate-demo1"].component,n=t["uselocalstoragestate-demo2"].component,u=t["uselocalstoragestate-demo3"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"uselocalstoragestate"},l.a.createElement(r["AnchorLink"],{to:"#uselocalstoragestate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useLocalStorageState"),l.a.createElement("p",null,"\u5c06\u72b6\u6001\u5b58\u50a8\u5728 localStorage \u4e2d\u7684 Hook \u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u5c06-state-\u5b58\u50a8\u5728-localstorage-\u4e2d"},l.a.createElement(r["AnchorLink"],{to:"#\u5c06-state-\u5b58\u50a8\u5728-localstorage-\u4e2d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c06 state \u5b58\u50a8\u5728 localStorage \u4e2d")),l.a.createElement(c["default"],t["uselocalstoragestate-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u5b58\u50a8\u590d\u6742\u7c7b\u578b\u6570\u636e"},l.a.createElement(r["AnchorLink"],{to:"#\u5b58\u50a8\u590d\u6742\u7c7b\u578b\u6570\u636e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b58\u50a8\u590d\u6742\u7c7b\u578b\u6570\u636e")),l.a.createElement(c["default"],t["uselocalstoragestate-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u51fd\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u51fd\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u51fd\u6570")),l.a.createElement(c["default"],t["uselocalstoragestate-demo3"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("p",null,"\u5982\u679c\u60f3\u4ece localStorage \u4e2d\u5220\u9664\u8fd9\u6761\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"setState()")," \u6216 ",l.a.createElement("code",null,"setState(undefined)")," \u3002"),l.a.createElement(o["a"],{code:"type SetState<S> = S | ((prevState?: S) => S);\n\ninterface Options<T> {\n  defaultValue?: T | (() => T);\n  serializer?: (value: T) => string;\n  deserializer?: (value: string) => T;\n  onError?: (error: unknown) => void;\n}\n\nconst [state, setState] = useLocalStorageState<T>(\n  key: string,\n  options: Options<T>\n): [T?, (value?: SetState<T>) => void];",lang:"typescript"}),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"state"),l.a.createElement("td",null,"\u672c\u5730 ",l.a.createElement("code",null,"localStorage")," \u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"T"))),l.a.createElement("tr",null,l.a.createElement("td",null,"setState"),l.a.createElement("td",null,"\u8bbe\u7f6e ",l.a.createElement("code",null,"localStorage")," \u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"(value?: SetState<T>) => void"))))),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"any | (() => any)")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"serializer"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u65b9\u6cd5"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: any) => string")),l.a.createElement("td",null,l.a.createElement("code",null,"JSON.stringify"))),l.a.createElement("tr",null,l.a.createElement("td",null,"deserializer"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u53cd\u5e8f\u5217\u5316\u65b9\u6cd5"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: string) => any")),l.a.createElement("td",null,l.a.createElement("code",null,"JSON.parse"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onError"),l.a.createElement("td",null,"\u9519\u8bef\u56de\u8c03\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"(error: unknown) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"(e) => ","{"," console.error(e) ","}"))))),l.a.createElement("h2",{id:"\u5907\u6ce8"},l.a.createElement(r["AnchorLink"],{to:"#\u5907\u6ce8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5907\u6ce8"),l.a.createElement("p",null,"useLocalStorageState \u5728\u5f80 localStorage \u5199\u5165\u6570\u636e\u524d\uff0c\u4f1a\u5148\u8c03\u7528\u4e00\u6b21 ",l.a.createElement("code",null,"serializer"),"\uff0c\u5728\u8bfb\u53d6\u6570\u636e\u4e4b\u540e\uff0c\u4f1a\u5148\u8c03\u7528\u4e00\u6b21 ",l.a.createElement("code",null,"deserializer"),"\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:a})}},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},lFyj:function(e,t,a){}}]);