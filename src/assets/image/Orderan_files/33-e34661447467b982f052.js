(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{60938:function(e,t,n){"use strict";var r=n(20862),l=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67154)),o=r(n(67294)),i=l(n(27712)),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n},u={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},d=o.forwardRef((function(e,t){var n=e.style,r=e.noStyle,l=e.disabled,d=c(e,["style","noStyle","disabled"]),s={};return r||(s=(0,a.default)({},u)),l&&(s.pointerEvents="none"),s=(0,a.default)((0,a.default)({},s),n),o.createElement("div",(0,a.default)({role:"button",tabIndex:0,ref:t},d,{onKeyDown:function(e){e.keyCode===i.default.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===i.default.ENTER&&r&&r()},style:s}))}));t.default=d},92633:function(e,t,n){"use strict";var r=n(20862),l=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.OmitProps=void 0;var a=l(n(59713)),o=l(n(34575)),i=l(n(93913)),c=l(n(2205)),u=l(n(99842)),d=l(n(67154)),s=l(n(50008)),f=r(n(67294)),m=l(n(94184)),h=n(66764),v=l(n(69843)),p=l(n(89537)),y=(0,h.tuple)("handleFilter","handleClear","checkedKeys");function g(e){if(!e)return null;var t={pageSize:10};return"object"===(0,s.default)(e)?(0,d.default)((0,d.default)({},t),e):t}t.OmitProps=y;var S=function(e){(0,c.default)(n,e);var t=(0,u.default)(n);function n(){var e;return(0,o.default)(this,n),(e=t.apply(this,arguments)).state={current:1},e.onItemSelect=function(t){var n=e.props,r=n.onItemSelect,l=n.selectedKeys.indexOf(t.key)>=0;r(t.key,!l)},e.onItemRemove=function(t){var n=e.props.onItemRemove;null===n||void 0===n||n([t.key])},e.onPageChange=function(t){e.setState({current:t})},e.getItems=function(){var t=e.state.current,n=e.props,r=n.pagination,l=n.filteredRenderItems,a=g(r),o=l;return a&&(o=l.slice((t-1)*a.pageSize,t*a.pageSize)),o},e}return(0,i.default)(n,[{key:"render",value:function(){var e=this,t=this.state.current,n=this.props,r=n.prefixCls,l=n.onScroll,o=n.filteredRenderItems,i=n.selectedKeys,c=n.disabled,u=n.showRemove,d=g(n.pagination),s=null;return d&&(s=f.createElement(v.default,{simple:!0,size:"small",disabled:c,className:"".concat(r,"-pagination"),total:o.length,pageSize:d.pageSize,current:t,onChange:this.onPageChange})),f.createElement(f.Fragment,null,f.createElement("ul",{className:(0,m.default)("".concat(r,"-content"),(0,a.default)({},"".concat(r,"-content-show-remove"),u)),onScroll:l},this.getItems().map((function(t){var n=t.renderedEl,l=t.renderedText,a=t.item,o=a.disabled,d=i.indexOf(a.key)>=0;return f.createElement(p.default,{disabled:c||o,key:a.key,item:a,renderedText:l,renderedEl:n,checked:d,prefixCls:r,onClick:e.onItemSelect,onRemove:e.onItemRemove,showRemove:u})}))),s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.filteredRenderItems,r=e.pagination,l=t.current,a=g(r);if(a){var o=Math.ceil(n.length/a.pageSize);if(l>o)return{current:o}}return null}}]),n}(f.Component);t.default=S},89537:function(e,t,n){"use strict";var r=n(20862),l=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(59713)),o=r(n(67294)),i=l(n(94184)),c=l(n(77949)),u=l(n(56350)),d=l(n(31059)),s=l(n(60938)),f=l(n(73625)),m=function(e){var t,n,r=e.renderedText,l=e.renderedEl,m=e.item,h=e.checked,v=e.disabled,p=e.prefixCls,y=e.onClick,g=e.onRemove,S=e.showRemove,b=(0,i.default)((t={},(0,a.default)(t,"".concat(p,"-content-item"),!0),(0,a.default)(t,"".concat(p,"-content-item-disabled"),v||m.disabled),(0,a.default)(t,"".concat(p,"-content-item-checked"),h),t));return"string"!==typeof r&&"number"!==typeof r||(n=String(r)),o.createElement(f.default,{componentName:"Transfer",defaultLocale:u.default.Transfer},(function(e){var t={className:b,title:n},r=o.createElement("span",{className:"".concat(p,"-content-item-text")},l);return S?o.createElement("li",t,r,o.createElement(s.default,{disabled:v||m.disabled,className:"".concat(p,"-content-item-remove"),"aria-label":e.remove,onClick:function(){null===g||void 0===g||g(m)}},o.createElement(c.default,null))):(t.onClick=v||m.disabled?void 0:function(){return y(m)},o.createElement("li",t,o.createElement(d.default,{checked:h,disabled:v||m.disabled}),r))}))},h=o.memo(m);t.default=h},26712:function(e,t,n){"use strict";var r=n(20862),l=n(95318);t.Z=void 0;var a=l(n(59713)),o=l(n(319)),i=l(n(67154)),c=l(n(34575)),u=l(n(93913)),d=l(n(2205)),s=l(n(99842)),f=r(n(67294)),m=l(n(94184)),h=l(n(24081)),v=l(n(82907)),p=l(n(62874)),y=l(n(73625)),g=l(n(56350)),S=n(31929),b=l(n(72454)),E=function(e){(0,d.default)(n,e);var t=(0,s.default)(n);function n(e){var r;(0,c.default)(this,n),(r=t.call(this,e)).separatedDataSource=null,r.setStateKeys=function(e,t){"left"===e?r.setState((function(e){var n=e.sourceSelectedKeys;return{sourceSelectedKeys:"function"===typeof t?t(n||[]):t}})):r.setState((function(e){var n=e.targetSelectedKeys;return{targetSelectedKeys:"function"===typeof t?t(n||[]):t}}))},r.getLocale=function(e,t){return(0,i.default)((0,i.default)((0,i.default)({},e),{notFoundContent:t("Transfer")}),r.props.locale)},r.moveTo=function(e){var t=r.props,n=t.targetKeys,l=void 0===n?[]:n,a=t.dataSource,o=void 0===a?[]:a,i=t.onChange,c=r.state,u=c.sourceSelectedKeys,d=c.targetSelectedKeys,s=("right"===e?u:d).filter((function(e){return!o.some((function(t){return!(e!==t.key||!t.disabled)}))})),f="right"===e?s.concat(l):l.filter((function(e){return-1===s.indexOf(e)})),m="right"===e?"left":"right";r.setStateKeys(m,[]),r.handleSelectChange(m,[]),i&&i(f,e,s)},r.moveToLeft=function(){return r.moveTo("left")},r.moveToRight=function(){return r.moveTo("right")},r.onItemSelectAll=function(e,t,n){r.setStateKeys(e,(function(l){var a=[];return a=n?Array.from(new Set([].concat((0,o.default)(l),(0,o.default)(t)))):l.filter((function(e){return-1===t.indexOf(e)})),r.handleSelectChange(e,a),a}))},r.onLeftItemSelectAll=function(e,t){return r.onItemSelectAll("left",e,t)},r.onRightItemSelectAll=function(e,t){return r.onItemSelectAll("right",e,t)},r.handleFilter=function(e,t){var n=r.props.onSearch,l=t.target.value;n&&n(e,l)},r.handleLeftFilter=function(e){return r.handleFilter("left",e)},r.handleRightFilter=function(e){return r.handleFilter("right",e)},r.handleClear=function(e){var t=r.props.onSearch;t&&t(e,"")},r.handleLeftClear=function(){return r.handleClear("left")},r.handleRightClear=function(){return r.handleClear("right")},r.onItemSelect=function(e,t,n){var l=r.state,a=l.sourceSelectedKeys,i=l.targetSelectedKeys,c="left"===e?(0,o.default)(a):(0,o.default)(i),u=c.indexOf(t);u>-1&&c.splice(u,1),n&&c.push(t),r.handleSelectChange(e,c),r.props.selectedKeys||r.setStateKeys(e,c)},r.onLeftItemSelect=function(e,t){return r.onItemSelect("left",e,t)},r.onRightItemSelect=function(e,t){return r.onItemSelect("right",e,t)},r.onRightItemRemove=function(e){var t=r.props,n=t.targetKeys,l=void 0===n?[]:n,a=t.onChange;r.setStateKeys("right",[]),a&&a(l.filter((function(t){return!e.includes(t)})),"left",(0,o.default)(e))},r.handleScroll=function(e,t){var n=r.props.onScroll;n&&n(e,t)},r.handleLeftScroll=function(e){return r.handleScroll("left",e)},r.handleRightScroll=function(e){return r.handleScroll("right",e)},r.handleListStyle=function(e,t){return"function"===typeof e?e({direction:t}):e},r.renderTransfer=function(e){return f.createElement(S.ConfigConsumer,null,(function(t){var n,l=t.getPrefixCls,o=t.renderEmpty,c=t.direction,u=r.props,d=u.prefixCls,s=u.className,p=u.disabled,y=u.operations,g=void 0===y?[]:y,S=u.showSearch,b=u.footer,E=u.style,C=u.listStyle,k=u.operationStyle,I=u.filterOption,w=u.render,R=u.children,O=u.showSelectAll,L=u.oneWay,x=u.pagination,T=l("transfer",d),K=r.getLocale(e,o),N=r.state,A=N.sourceSelectedKeys,F=N.targetSelectedKeys,P=!R&&x,D=r.separateDataSource(),_=D.leftDataSource,j=D.rightDataSource,z=F.length>0,B=A.length>0,M=(0,m.default)(T,(n={},(0,a.default)(n,"".concat(T,"-disabled"),p),(0,a.default)(n,"".concat(T,"-customize-list"),!!R),(0,a.default)(n,"".concat(T,"-rtl"),"rtl"===c),n),s),U=r.getTitles(K),V=r.props.selectAllLabels||[];return f.createElement("div",{className:M,style:E},f.createElement(h.default,(0,i.default)({prefixCls:"".concat(T,"-list"),titleText:U[0],dataSource:_,filterOption:I,style:r.handleListStyle(C,"left"),checkedKeys:A,handleFilter:r.handleLeftFilter,handleClear:r.handleLeftClear,onItemSelect:r.onLeftItemSelect,onItemSelectAll:r.onLeftItemSelectAll,render:w,showSearch:S,renderList:R,footer:b,onScroll:r.handleLeftScroll,disabled:p,direction:"left",showSelectAll:O,selectAllLabel:V[0],pagination:P},K)),f.createElement(v.default,{className:"".concat(T,"-operation"),rightActive:B,rightArrowText:g[0],moveToRight:r.moveToRight,leftActive:z,leftArrowText:g[1],moveToLeft:r.moveToLeft,style:k,disabled:p,direction:c,oneWay:L}),f.createElement(h.default,(0,i.default)({prefixCls:"".concat(T,"-list"),titleText:U[1],dataSource:j,filterOption:I,style:r.handleListStyle(C,"right"),checkedKeys:F,handleFilter:r.handleRightFilter,handleClear:r.handleRightClear,onItemSelect:r.onRightItemSelect,onItemSelectAll:r.onRightItemSelectAll,onItemRemove:r.onRightItemRemove,render:w,showSearch:S,renderList:R,footer:b,onScroll:r.handleRightScroll,disabled:p,direction:"right",showSelectAll:O,selectAllLabel:V[1],showRemove:L,pagination:P},K)))}))};var l=e.selectedKeys,u=void 0===l?[]:l,d=e.targetKeys,s=void 0===d?[]:d;return r.state={sourceSelectedKeys:u.filter((function(e){return-1===s.indexOf(e)})),targetSelectedKeys:u.filter((function(e){return s.indexOf(e)>-1}))},r}return(0,u.default)(n,[{key:"getTitles",value:function(e){var t=this.props.titles;return t||e.titles}},{key:"handleSelectChange",value:function(e,t){var n=this.state,r=n.sourceSelectedKeys,l=n.targetSelectedKeys,a=this.props.onSelectChange;a&&("left"===e?a(t,l):a(r,t))}},{key:"separateDataSource",value:function(){var e=this.props,t=e.dataSource,n=e.rowKey,r=e.targetKeys,l=void 0===r?[]:r,a=[],o=new Array(l.length);return t.forEach((function(e){n&&(e=(0,i.default)((0,i.default)({},e),{key:n(e)}));var t=l.indexOf(e.key);-1!==t?o[t]=e:a.push(e)})),{leftDataSource:a,rightDataSource:o}}},{key:"render",value:function(){return f.createElement(y.default,{componentName:"Transfer",defaultLocale:g.default.Transfer},this.renderTransfer)}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.selectedKeys,n=e.targetKeys,r=e.pagination,l=e.children;if(t){var a=n||[];return{sourceSelectedKeys:t.filter((function(e){return!a.includes(e)})),targetSelectedKeys:t.filter((function(e){return a.includes(e)}))}}return(0,b.default)(!r||!l,"Transfer","`pagination` not support customize render list."),null}}]),n}(f.Component);E.List=h.default,E.Operation=v.default,E.Search=p.default,E.defaultProps={dataSource:[],locale:{},showSearch:!1,listStyle:function(){}};var C=E;t.Z=C},24081:function(e,t,n){"use strict";var r=n(20862),l=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(59713)),o=l(n(67154)),i=l(n(34575)),c=l(n(93913)),u=l(n(2205)),d=l(n(99842)),s=r(n(67294)),f=l(n(18475)),m=l(n(94184)),h=l(n(5085)),v=l(n(31059)),p=l(n(12386)),y=l(n(82891)),g=l(n(62874)),S=r(n(92633)),b=n(47419),E=function(){return null};function C(e){return e.filter((function(e){return!e.disabled})).map((function(e){return e.key}))}var k=function(e){(0,u.default)(n,e);var t=(0,d.default)(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).defaultListBodyRef=s.createRef(),r.handleFilter=function(e){var t=r.props.handleFilter,n=e.target.value;r.setState({filterValue:n}),t(e)},r.handleClear=function(){var e=r.props.handleClear;r.setState({filterValue:""}),e()},r.matchFilter=function(e,t){var n=r.state.filterValue,l=r.props.filterOption;return l?l(n,t):e.indexOf(n)>=0},r.getCurrentPageItems=function(){},r.renderListBody=function(e,t){var n=e?e(t):null,l=!!n;return l||(n=s.createElement(S.default,(0,o.default)({ref:r.defaultListBodyRef},t))),{customize:l,bodyContent:n}},r.renderItem=function(e){var t,n=r.props.render,l=(void 0===n?E:n)(e),a=(t=l)&&!(0,b.isValidElement)(t)&&"[object Object]"===Object.prototype.toString.call(t);return{renderedText:a?l.value:l,renderedEl:a?l.label:l,item:e}},r.getSelectAllLabel=function(e,t){var n=r.props,l=n.itemsUnit,a=n.itemUnit,o=n.selectAllLabel;if(o)return"function"===typeof o?o({selectedCount:e,totalCount:t}):o;var i=t>1?l:a;return s.createElement(s.Fragment,null,(e>0?"".concat(e,"/"):"")+t," ",i)},r.state={filterValue:""},r}return(0,c.default)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.triggerScrollTimer)}},{key:"getCheckStatus",value:function(e){var t=this.props.checkedKeys;return 0===t.length?"none":e.every((function(e){return t.indexOf(e.key)>=0||!!e.disabled}))?"all":"part"}},{key:"getFilteredItems",value:function(e,t){var n=this,r=[],l=[];return e.forEach((function(e){var a=n.renderItem(e),o=a.renderedText;if(t&&!n.matchFilter(o,e))return null;r.push(e),l.push(a)})),{filteredItems:r,filteredRenderItems:l}}},{key:"getListBody",value:function(e,t,n,r,l,a,i,c,u,d){var h,v=u?s.createElement("div",{className:"".concat(e,"-body-search-wrapper")},s.createElement(g.default,{prefixCls:"".concat(e,"-search"),onChange:this.handleFilter,handleClear:this.handleClear,placeholder:t,value:n,disabled:d})):null,p=this.renderListBody(c,(0,o.default)((0,o.default)({},(0,f.default)(this.props,S.OmitProps)),{filteredItems:r,filteredRenderItems:a,selectedKeys:i})),y=p.bodyContent;return h=p.customize?s.createElement("div",{className:"".concat(e,"-body-customize-wrapper")},y):r.length?y:s.createElement("div",{className:"".concat(e,"-body-not-found")},l),s.createElement("div",{className:(0,m.default)(u?"".concat(e,"-body ").concat(e,"-body-with-search"):"".concat(e,"-body"))},v,h)}},{key:"getCheckBox",value:function(e,t,n,r){var l=this.getCheckStatus(e),a="all"===l;return!1!==n&&s.createElement(v.default,{disabled:r,checked:a,indeterminate:"part"===l,onChange:function(){t(e.filter((function(e){return!e.disabled})).map((function(e){return e.key})),!a)}})}},{key:"render",value:function(){var e,t=this,n=this.state.filterValue,r=this.props,l=r.prefixCls,o=r.dataSource,i=r.titleText,c=r.checkedKeys,u=r.disabled,d=r.footer,f=r.showSearch,v=r.style,g=r.searchPlaceholder,S=r.notFoundContent,b=r.selectAll,E=r.selectCurrent,k=r.selectInvert,I=r.removeAll,w=r.removeCurrent,R=r.renderList,O=r.onItemSelectAll,L=r.onItemRemove,x=r.showSelectAll,T=r.showRemove,K=r.pagination,N=d&&d(this.props),A=(0,m.default)(l,(e={},(0,a.default)(e,"".concat(l,"-with-pagination"),K),(0,a.default)(e,"".concat(l,"-with-footer"),N),e)),F=this.getFilteredItems(o,n),P=F.filteredItems,D=F.filteredRenderItems,_=this.getListBody(l,g,n,P,S,D,c,R,f,u),j=N?s.createElement("div",{className:"".concat(l,"-footer")},N):null,z=!T&&!K&&this.getCheckBox(P,O,x,u),B=null;B=T?s.createElement(p.default,null,K&&s.createElement(p.default.Item,{onClick:function(){var e,n=C(((null===(e=t.defaultListBodyRef.current)||void 0===e?void 0:e.getItems())||[]).map((function(e){return e.item})));null===L||void 0===L||L(n)}},w),s.createElement(p.default.Item,{onClick:function(){null===L||void 0===L||L(C(P))}},I)):s.createElement(p.default,null,s.createElement(p.default.Item,{onClick:function(){var e=C(P);O(e,e.length!==c.length)}},b),K&&s.createElement(p.default.Item,{onClick:function(){var e,n=(null===(e=t.defaultListBodyRef.current)||void 0===e?void 0:e.getItems())||[];O(C(n.map((function(e){return e.item}))),!0)}},E),s.createElement(p.default.Item,{onClick:function(){var e,n;n=C(K?((null===(e=t.defaultListBodyRef.current)||void 0===e?void 0:e.getItems())||[]).map((function(e){return e.item})):P);var r=new Set(c),l=[],a=[];n.forEach((function(e){r.has(e)?a.push(e):l.push(e)})),O(l,!0),O(a,!1)}},k));var M=s.createElement(y.default,{className:"".concat(l,"-header-dropdown"),overlay:B,disabled:u},s.createElement(h.default,null));return s.createElement("div",{className:A,style:v},s.createElement("div",{className:"".concat(l,"-header")},z,M,s.createElement("span",{className:"".concat(l,"-header-selected")},this.getSelectAllLabel(c.length,P.length)),s.createElement("span",{className:"".concat(l,"-header-title")},i)),_,j)}}]),n}(s.PureComponent);t.default=k,k.defaultProps={dataSource:[],titleText:"",showSearch:!1}},82907:function(e,t,n){"use strict";var r=n(95318),l=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),o=r(n(68229)),i=r(n(67638)),c=r(n(65400)),u=function(e){var t=e.disabled,n=e.moveToLeft,r=e.moveToRight,l=e.leftArrowText,u=void 0===l?"":l,d=e.rightArrowText,s=void 0===d?"":d,f=e.leftActive,m=e.rightActive,h=e.className,v=e.style,p=e.direction,y=e.oneWay;return a.createElement("div",{className:h,style:v},a.createElement(c.default,{type:"primary",size:"small",disabled:t||!m,onClick:r,icon:"rtl"!==p?a.createElement(i.default,null):a.createElement(o.default,null)},s),!y&&a.createElement(c.default,{type:"primary",size:"small",disabled:t||!f,onClick:n,icon:"rtl"!==p?a.createElement(o.default,null):a.createElement(i.default,null)},u))};t.default=u},62874:function(e,t,n){"use strict";var r=n(95318),l=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.placeholder,n=void 0===t?"":t,r=e.value,l=e.prefixCls,u=e.disabled,d=e.onChange,s=e.handleClear,f=a.useCallback((function(e){null===d||void 0===d||d(e)}),[d]);return a.createElement(a.Fragment,null,a.createElement(c.default,{placeholder:n,className:l,value:r,onChange:f,disabled:u}),r&&r.length>0?a.createElement("a",{className:"".concat(l,"-action"),onClick:function(e){e.preventDefault(),!u&&s&&s(e)}},a.createElement(o.default,null)):a.createElement("span",{className:"".concat(l,"-action")},a.createElement(i.default,null)))};var a=l(n(67294)),o=r(n(42547)),i=r(n(49153)),c=r(n(51024))},78598:function(e,t,n){var r,l=l||function(e){"use strict";if(!("undefined"===typeof e||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),l="download"in r,a=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),i=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},c=function(e){setTimeout((function(){"string"===typeof e?n().revokeObjectURL(e):e.remove()}),4e4)},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},d=function(t,d,s){s||(t=u(t));var f,m=this,h="application/octet-stream"===t.type,v=function(){!function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var l=e["on"+t[r]];if("function"===typeof l)try{l.call(e,n||e)}catch(a){i(a)}}}(m,"writestart progress write writeend".split(" "))};if(m.readyState=m.INIT,l)return f=n().createObjectURL(t),void setTimeout((function(){r.href=f,r.download=d,function(e){var t=new MouseEvent("click");e.dispatchEvent(t)}(r),v(),c(f),m.readyState=m.DONE}));!function(){if((o||h&&a)&&e.FileReader){var r=new FileReader;return r.onloadend=function(){var t=o?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,m.readyState=m.DONE,v()},r.readAsDataURL(t),void(m.readyState=m.INIT)}(f||(f=n().createObjectURL(t)),h)?e.location.href=f:e.open(f,"_blank")||(e.location.href=f);m.readyState=m.DONE,v(),c(f)}()},s=d.prototype;return"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(s.abort=function(){},s.readyState=s.INIT=0,s.WRITING=1,s.DONE=2,s.error=s.onwritestart=s.onprogress=s.onwrite=s.onabort=s.onerror=s.onwriteend=null,function(e,t,n){return new d(e,t||e.name||"download",n)})}}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||this.content);e.exports?e.exports.saveAs=l:null!==n.amdD&&null!==n.amdO&&(void 0===(r=function(){return l}.call(t,n,t,e))||(e.exports=r))}}]);