(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{57897:function(t){!function(){"use strict";t.exports=".tags-modal .ant-modal-body{background:#f5f5f5}.tags-modal .ant-modal-body .flex-between{display:flex;justify-content:space-between;align-items:center}.tags-modal .ant-modal-body .tag-items{background:#fff;border:1px solid #d9d9d9;overflow:auto;max-height:66vh}.tags-modal .ant-modal-body .tag-items .tag-item{padding:8px 12px;border-bottom:1px solid #d9d9d9;cursor:pointer}.tags-modal .ant-modal-body .tag-items .tag-item .actions{display:none}.tags-modal .ant-modal-body .tag-items .tag-item:hover{background:#f0f5ff}.tags-modal .ant-modal-body .tag-items .tag-item:hover .actions{display:block}.tags-modal .ant-modal-body .tag-items .tag-item:last-child{border-bottom:none}"}()},61958:function(t){!function(){"use strict";t.exports=".product-export{overflow:visible !important}.product-export .ant-table-wrapper .ant-table-header{padding-right:0}.product-export .ant-table-wrapper .ant-table-body .ant-table-row{cursor:pointer}.export-table-container .ant-table-body .box-input-number-wrapper .ant-input-number-input-wrap{padding:3px 0px !important}"}()},43831:function(t,e,n){"use strict";var r,o=n(56697),a=n(28140),i=n(51024),s=n(65400),c=n(74047),l=n(52700),u=n(4706),p=n(33814),d=n(44102),f=n(20775),h=n(26265),g=n(67294),m=n(49101),v=n(92104),x=n(91816),y=n(63258),_=n(8212),b=n(73171),Z=n(95642),S=n(87217),w=n(31731),T=n(57897),k=n.n(T),E=n(14104),D=g.createElement;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){(0,h.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,f.Z)(t);if(e){var o=(0,f.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,d.Z)(this,n)}}var R=(0,S.Z)()(r=function(t){(0,p.Z)(n,t);var e=P(n);function n(t){var r;return(0,c.Z)(this,n),r=e.call(this,t),(0,h.Z)((0,u.Z)(r),"renderModalContent",(function(){var t=r.props,e=t.tags,n=t.t,o=r.state.action;return D("div",null,D("div",{className:"flex-between",style:{marginBottom:16,fontWeight:500}},D("div",null,n("pages.shop.actionTools.totalTags"),": ",e.length),D(s.default,{icon:D(m.Z,null),type:"primary",onClick:function(){return r.handleAction("create")},disabled:"create"==o},n("components.productCategory.create"))),"create"==o&&r.renderUpdateItem(),(null===e||void 0===e?void 0:e.length)>0&&D("div",{className:"tag-items"},e.map(r.renderTagItem)))})),(0,h.Z)((0,u.Z)(r),"onNameChange",(function(t){var e=r.state.selectTag;e.name=t.target.value,r.setState({selectTag:e})})),(0,h.Z)((0,u.Z)(r),"handleAction",(function(t,e){var n={name:""};"create"!=t&&(n.id=e.id,n.name=e.name,n.description=e.description),"delete"==t&&(n.is_removed=!0),"delete"!=t&&setTimeout((function(){var t;return null===(t=r.input)||void 0===t?void 0:t.focus()})),r.setState({selectTag:n,action:t})})),(0,h.Z)((0,u.Z)(r),"handleSave",(function(){var t=r.props,e=t.t,n=t.deleteData,o=t.createData,a=t.updateData,i=r.state,s=i.selectTag,c=i.isLoading,l=i.action;if(!s.name)return message.warning(e("components.productCategory.nameTagNotEmpty"));c||(r.setState({isLoading:!0}),"create"!=l?"update"!=l?"delete"!=l||n&&n(s).then((function(t){r.setState({selectTag:{},isLoading:!1,action:""})})):a&&a(s).then((function(t){r.setState({selectTag:{},isLoading:!1,action:""})})):o&&o(s).then((function(t){r.setState({selectTag:{},isLoading:!1,action:""})})))})),(0,h.Z)((0,u.Z)(r),"renderUpdateItem",(function(){var t=r.state,e=t.selectTag,n=t.isLoading,o=t.action,a=r.props,c=a.t,l=a.showDescription;if(!e)return"";return D("div",null,D("div",{className:l?"":"flex-between",style:I({padding:"8px 12px",background:"#F0F5FF"},"create"==o?{border:"1px solid #ADC6FF",marginBottom:16,borderRadius:2}:{borderBottom:"1px solid #d9d9d9"})},D(i.default,{value:e.name,onChange:r.onNameChange,placeholder:"Nh\u1eadp t\xean th\u1ebb",style:{width:"100%",marginRight:12},ref:function(t){return r.input=t}}),l&&D("div",{style:{marginTop:10}},D("div",{style:{fontWeight:500}},c("crm.description")),D(E.default,{style:{marginTop:5},onChange:function(t){e.description=t.target.value,r.setState({selectTag:e})},value:null===e||void 0===e?void 0:e.description,rows:2,placeholder:c("crm.addDescription")})),D("div",{style:l?{display:"flex",justifyContent:"end",marginTop:10}:{display:"flex"}},D(s.default,{onClick:function(t){t.stopPropagation(),r.setState({selectTag:{},action:""})},style:{marginRight:12},disabled:n},c("cancel")),D(s.default,{loading:n,icon:D(v.Z,null),onClick:r.handleSave,type:"primary"},c("pages.shop.setting.application.save")))))})),(0,h.Z)((0,u.Z)(r),"handleClickItem",(function(t,e){e=e.includes(t.id)?e.filter((function(e){return e!=t.id})):[].concat((0,a.Z)(e),[t.id]),r.setState({openingDescriptionIds:e})})),(0,h.Z)((0,u.Z)(r),"handleEdit",(function(t,e,n){t.stopPropagation(),r.handleAction(e,n)})),(0,h.Z)((0,u.Z)(r),"renderTagItem",(function(t,e){var n=r.state,o=n.action,a=n.selectTag,i=n.isLoading,c=n.openingDescriptionIds,l=r.props,u=l.t,p=l.showDescription,d=t.id==a.id;if("update"==o&&d)return r.renderUpdateItem();var f={};"delete"==o&&d&&(f={background:"#FFF1F0"});var h=p&&c.includes(t.id);return D("div",{className:"tag-item",key:e,style:f},D("div",{onClick:function(){return p&&r.handleClickItem(t,c)}},D("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"}},D("div",null,p&&D("span",null,D(h?x.Z:y.Z,{style:{fontSize:14,marginRight:5}})),t.name),!o&&D("div",{className:"actions"},D(_.Z,{style:{marginRight:10},onClick:function(e){return r.handleEdit(e,"update",t)}}),D(b.Z,{onClick:function(){return r.handleAction("delete",t)}}))),h&&D("div",null,D("span",{style:{fontWeight:500}},u("crm.description"),": "),t.description||u("pages.shop.customer.notYet"))),"delete"==o&&d&&D("div",{className:"flex-between",style:{borderTop:"1px solid #FFA39E",paddingTop:8,marginTop:8}},D("div",null,D("div",null,"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a ?")),D("div",null,D(s.default,{onClick:function(t){t.stopPropagation(),r.setState({selectTag:{},action:""})},style:{marginRight:12}},u("cancel")),D(s.default,{onClick:r.handleSave,icon:D(b.Z,null),type:"danger",loading:i},u("delete")))))})),r.state={visible:!1,action:"",selectTag:{},isLoading:!1,openingDescriptionIds:[]},r}return(0,l.Z)(n,[{key:"render",value:function(){var t=this,e=this.state.visible,n=this.props,r=n.title,a=n.isButton;return D("div",null,D(w.Z,{icon:D(Z.Z,null),title:r,onClick:function(){return t.setState({visible:!0})},isButton:a}),D(o.Z,{visible:e,title:r,onCancel:function(){t.setState({visible:!1,action:"",selectTag:{}})},width:900,footer:!1,className:"tags-modal"},this.renderModalContent()),D("style",{dangerouslySetInnerHTML:{__html:k()}}))}}]),n}(g.Component))||r;e.Z=R},40876:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Et}});var r,o=n(11187),a=n(65400),i=n(59361),s=n(94055),c=n(809),l=n.n(c),u=n(92447),p=n(74047),d=n(4706),f=n(52700),h=n(33814),g=n(44102),m=n(20775),v=n(26265),x=n(56697),y=n(51024),_=n(64713),b=n(18446),Z=n.n(b),S=n(50361),w=n.n(S),T=n(65988),k=n(67294),E=n(14494),D=n(92902),C=n(61958),I=n.n(C),P=n(83049),R=n(31731),O=n(7085),z=n(90631),N=n(84189),j=n(7945),F=n(76570),A=n(50161),B=n(95642),L=n(49101),K=n(25592),M=n(65644),q=n(24814),H=n(2307),U=n(97705),V=n(87217),Y=n(9669),W=n.n(Y),$=n(95213),J=k.createElement;function X(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,m.Z)(t);if(e){var o=(0,m.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,g.Z)(this,n)}}var G=(0,V.Z)()(r=function(t){(0,h.Z)(n,t);var e=X(n);function n(t){var r;return(0,p.Z)(this,n),r=e.call(this,t),(0,v.Z)((0,d.Z)(r),"columns",[{title:r.props.t("warehouse"),dataIndex:"warehouse",width:"15%",ellipsis:!0},{title:"ID",dataIndex:"export_display_id",width:"13%",ellipsis:!0},{title:r.props.t("pages.shop.product.export.exportAt"),dataIndex:"insertedAt",width:"22%",align:"right",ellipsis:!0},{title:r.props.t("components.exportProductDetail.totalPrice"),dataIndex:"total_price",width:"20%",align:"right",ellipsis:!0},{title:r.props.t("components.orderExportExcel.quantity"),dataIndex:"quantity",width:"15%",align:"right",ellipsis:!0},{title:r.props.t("note"),dataIndex:"note",width:"15%",align:"right",ellipsis:!0}]),(0,v.Z)((0,d.Z)(r),"handleSelectItem",(function(t){var e=r.props,n=e.accessToken,o=e.shopId,a=e.warehouses,i=e.timezone,c=e.currentShop,l=r.state.searchResult,u="".concat((0,$.LpH)(),"/shops/").concat(o,"/export/").concat(t,"/export_history?access_token=").concat(n);W().get(u).then((function(e){if(e.data.success){var n=e.data.data.filter((function(t){return t.status<2})).map((function(e,n){var r=a.find((function(t){return t.id==e.warehouse_id})),o=e.export_items.filter((function(e){return e.variation_id==t}));return{key:n,export_display_id:e.display_id,warehouse:r?J(s.default,{title:r.name},r.name):"Kho \u0111\xe3 b\u1ecb xo\xe1",insertedAt:(0,$.o0x)(i||7,e.inserted_at),total_price:(0,$.ufS)(o.reduce((function(t,e){return t+((null===e||void 0===e?void 0:e.imported_price)||0)*e.quantity}),0),c.currency),quantity:(0,$.oH6)(o.reduce((function(t,e){return t+e.quantity}),0),c.currency),note:e.note||""}}));r.setState({dataSource:n,variation:l.find((function(e){return e.id==t}))})}}))})),r.state={visible:!1,searchResult:[],dataSource:[],variation:null},r}return(0,f.Z)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.visible,r=e.searchResult,o=e.dataSource,a=e.variation,s=this.props,c=s.accessToken,l=s.shopId,u=s.t,p=s.isButton;return J("div",{style:{display:"inline"}},J(R.Z,{icon:J(F.Z,null),title:u("components.exportProductDetail.exportHistory"),onClick:function(){return t.setState({visible:!0})},isButton:p}),n&&J(x.Z,{visible:n,footer:null,onCancel:function(){return t.setState({visible:!1})},width:"70%",closable:!1},J(U.Z,{accessToken:c,shopId:l,searchResult:r,callback:function(e){return t.setState({searchResult:e})},onSelect:this.handleSelectItem}),J(H.Z,{size:"small",title:function(){return J("span",{style:{fontSize:14}},a?J("div",null,J(i.default,{color:"green"},a.product.custom_id||(0,$.pyT)(a.product.display_id,0)),J(i.default,{color:"red"},a.custom_id||(0,$.pyT)(a.display_id,0))," ",a.product.name):u("components.exportProductDetail.selectVariationToViewHistory"))},columns:this.columns,dataSource:o,scroll:{y:300,x:"80%"},pagination:!1})))}}]),n}(k.Component))||r,Q=(0,E.$j)((function(t){return{currentShop:t.shop.currentShop,warehouses:t.warehouse.warehouses,timezone:t.navigation.user.timezone}}))(G),tt=n(54320),et=n(62391),nt=n(31432),rt=n(50916),ot=n(20920),at=n(36934),it=n(21037),st=n(20051),ct=n(97177),lt=n(74018),ut=n(48519),pt=n(43745),dt=n(24781),ft=n(45812),ht=n(41850),gt=n(43831),mt=k.createElement;function vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(n),!0).forEach((function(e){(0,v.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function yt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,m.Z)(t);if(e){var o=(0,m.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,g.Z)(this,n)}}var _t=["30","50","100"],bt={page:1,page_size:30,status:"-1",type:0},Zt=_.default.Group,St=_.default.Button,wt=y.default.TextArea,Tt=x.Z.confirm,kt=function(t){(0,h.Z)(n,t);var e=yt(n);function n(t){var r;return(0,p.Z)(this,n),r=e.call(this,t),(0,v.Z)((0,d.Z)(r),"fetchExport",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt(xt({},bt),{},{page_size:r.state.pageSize,type:r.state.exportType}),e=r.props,n=e.accessToken,o=e.shopId;r.setState({params:t,isLoading:!0}),r.props.fetchExport(n,o,t).then((function(){return r.setState({isLoading:!1})})),r.props.fetchCountStatusExport(n,o,t)})),(0,v.Z)((0,d.Z)(r),"columns",(function(){var t=r.props.currentShop,e=t?(0,ut.zE)(t.role):{},n=[{title:"ID",dataIndex:"id",width:"4%",ellipsis:!0},{title:r.props.t("pages.shop.product.export.creator"),dataIndex:"creator",ellipsis:!0},{title:r.props.t("warehouse"),dataIndex:"warehouse",width:"10%",align:"right",ellipsis:!0},{title:r.props.t("note"),dataIndex:"note",width:"11%",align:"right",ellipsis:!0},{title:r.props.t("pages.shop.product.management.tag"),dataIndex:"tags",width:"10%",align:"right",ellipsis:!0},{title:r.props.t("pages.shop.product.export.supplier"),dataIndex:"supplierProductsName",width:"10%",align:"right",ellipsis:!0},{title:r.props.t("pages.shop.product.export.totalQuantity"),dataIndex:"total",width:"11%",align:"right",ellipsis:!0},{title:r.props.t("pages.shop.product.export.totalPrice"),dataIndex:"totalPrice",width:"11%",align:"right",ellipsis:!0},{title:r.props.t("pages.shop.product.export.exportAt"),dataIndex:"exportAt",width:"10%",align:"right",ellipsis:!0},{title:"",dataIndex:"action",width:"150px",align:"center",fixed:"right",ellipsis:!0,render:function(t){return mt("span",{onClick:function(t){return t.stopPropagation()}},mt(ct.Z,{accessToken:r.props.accessToken,shopId:r.props.shopId,exportList:t}))}}];return e.view_imported_price||n.splice(7,1),n})),(0,v.Z)((0,d.Z)(r),"handleCancelExport",(function(t,e){e.stopPropagation();var n=r.props,o=n.cancelExport,a=n.accessToken,i=n.shopId,s=n.user,c=n.currentShop,l=n.t,u=r.state.note;if(c.cancel_product_condition){if(!u)return r.setState({noteModalVisible:!0});r.setState({noteModalVisible:!1,note:"",visible:!1});var p=u+"\n- "+s.name;t.note?t.note="".concat(t.note,"---").concat(l("components.productDeleteMutil.reason"),": ").concat(p):t.note="".concat(l("components.productDeleteMutil.reason"),": ").concat(p)}o(a,i,t.id,t.note)})),(0,v.Z)((0,d.Z)(r),"canCancel",(function(t){if(t.export_items&&t.export_items.length>0)return 1==t.status&&t.warehouse&&!t.warehouse.is_hide&&-1==t.export_items.findIndex((function(t){return t.remain_quantity!=t.quantity}))})),(0,v.Z)((0,d.Z)(r),"getNameSupplierProducts",(function(t){var e=r.props.supplier_products;if(e&&e.length>0&&t)return e.filter((function(e){return e.id==t})).length>0?e.filter((function(e){return e.id==t}))[0].name:void 0})),(0,v.Z)((0,d.Z)(r),"renderCreatorName",(function(t){var e=r.props,n=e.apiKeys,o=e.t,a=t.user_id&&n.find((function(e){return e.user_id==t.user_id}))?"Api":null;return t.user?t.user.name:a||o("pages.admin.system")})),(0,v.Z)((0,d.Z)(r),"getTagsExport",(function(t){var e=(r.props.tags_export||[]).filter((function(e){return t.includes(e.id)})).map((function(t){return t.name})).join("; ");return mt(s.default,{title:e},e)})),(0,v.Z)((0,d.Z)(r),"getData",(function(){var t=r.props.currentShop.currency,e=w()(r.props.export_list);return e.data&&e.data.map((function(e){var n=e.total?(0,$.oH6)(e.total,t):e.export_items&&e.export_items.length>0?(0,$.oH6)(e.export_items.reduce((function(t,e){return t+e.quantity}),0),t):0,o=e.total_price?(0,$.ufS)(e.total_price,t):e.export_items&&e.export_items.length>0?(0,$.ufS)(e.export_items.reduce((function(t,e){return t+e.quantity*((null===e||void 0===e?void 0:e.imported_price)||0)}),0),t):0;return{key:e.display_id,id:mt(s.default,{title:(0,$.pyT)(e.display_id,0)},(0,$.pyT)(e.display_id,0)),creator:mt(rt.Z,{seed:(e.user||{}).id,avatar_url:e.user?e.user.avatar_url:null,id:e.user?e.user.fb_id:e.user_id||null,size:[20,20],style:{marginRight:5,float:"left"},name:r.renderCreatorName(e),showName:!0}),warehouse:mt(s.default,{title:e.warehouse.name},e.warehouse.name),note:mt(s.default,{title:e.note},e.note),supplierProductsName:mt(s.default,{title:r.getNameSupplierProducts(e.supplier_products_id)},r.getNameSupplierProducts(e.supplier_products_id)),total:n,totalPrice:o,exportAt:(0,$.o0x)(r.props.timezone||7,e.inserted_at),action:xt({},e),tags:r.getTagsExport(e.tags||[])}}))})),(0,v.Z)((0,d.Z)(r),"handleRowClick",(function(t){var e=t.action;r.setState({visible:!0,selectedExport:e})})),(0,v.Z)((0,d.Z)(r),"handleTableChange",(function(t){var e=r.state.params;e.page=t.current,r.setState({pageSize:t.pageSize},(function(){localStorage.setItem("exportPageSize",t.pageSize),e.page_size=t.pageSize,r.fetchExport(e)})),document.querySelector(".ant-table-body").scrollTop=0})),(0,v.Z)((0,d.Z)(r),"renderDateTag",(function(t){var e=r.props,n=e.timezone,o=e.t,a=(0,$.o0x)(n,t.startDate||"",!1,"DD/MM/YYYY"),i=(0,$.o0x)(n,t.endDate||"",!1,"DD/MM/YYYY");return"".concat(o("pages.shop.product.purchase.from")," ").concat(a," - ").concat(o("pages.shop.product.purchase.to")," ").concat(i)})),(0,v.Z)((0,d.Z)(r),"renderFilter",(function(t,e){var n,o,a;if(!["search"].includes(t.key)){var s,c,l=r.props,u=l.supplier_products,p=l.t,d=l.users,f=l.warehouses,h=l.tags_export;switch(t.key){case"supplier_products_id":c=mt("strong",null,p("pages.shop.product.variation.supplierProducts")),s=mt("strong",null,null===u||void 0===u||null===(n=u.find((function(e){return e.id==t.value})))||void 0===n?void 0:n.name);break;case"inserted_at":c=mt("strong",null,p("pages.shop.debt.insertedAt")),s=r.renderDateTag(t.value);break;case"creator_id":c=mt("strong",null,p("pages.shop.debt.creator")),s="created_by_system"==t.value?p("pages.shop.product.purchase.createdBySystem"):"created_by_user"==t.value?p("pages.shop.product.purchase.createdByUser"):null===(o=d.find((function(e){return e.user_id==t.value})))||void 0===o?void 0:o.user.name;break;case"warehouse_id":var g=f&&f.length>0&&(null===(a=f.find((function(e){return e.id==t.value}))||{})||void 0===a?void 0:a.name);c=p("pages.shop.setting.conditionWarehouse"),s=mt("b",null,"\xa0",g);break;case"variation_id":c=p("pages.shop.statistic.variation"),s=mt("b",null,"\xa0",t.value);break;case"product_id":c=p("products.title"),s=mt("b",null,"\xa0",t.value);break;case"tags":"no_tag"==t.value?s=p("crm.notTag"):(c=p("components.orderAdvanceFilter.tag"),s=((h||[]).find((function(e){return e.id==t.value}))||{}).name)}return mt(i.default,{key:e,closable:!0,onClose:function(){return r.handleCloseTag(e)}},!c&&mt("div",null,s),c&&mt("div",null,c,": ",s))}})),(0,v.Z)((0,d.Z)(r),"handleCloseTag",(function(t){var e=w()(r.state.filters);e.splice(t,1),r.handleAdvanceFilter(e)})),(0,v.Z)((0,d.Z)(r),"handleAdvanceFilter",(function(t){var e=r.state,n=e.filterExcludeSupplier,o=e.filterExcludeTag,a=e.isFilterTagByOr,i=w()(r.state.params),s={};Object.keys(bt).map((function(t){s=xt(xt({},s),{},(0,v.Z)({},t,i[t]))}));var c=["variation_id","product_id"];t.length&&t.map((function(t){if("inserted_at"==t.key)s.start_date=t.value.startDate.unix(),s.end_date=t.value.endDate.unix();else{if(["supplier_products_id","tags"].includes(t.key)){if(s[t.key])-1==s[t.key].findIndex((function(e){return e==t.value}))&&s[t.key].push(t.value);else s[t.key]=[t.value];switch(t.key){case"supplier_products_id":n&&(s.filter_exclude_supplier=n);break;case"tags":o&&(s.filter_exclude_tag=o),a&&(s.is_filter_tag_by_or=a)}}else s[t.key]=t.value;c.includes(t.key)&&(s[t.key]=t.id)}})),r.setState({filters:t}),r.fetchExport(s)})),(0,v.Z)((0,d.Z)(r),"handleDeleteFilter",(function(){var t=r.state,e=t.params,n=t.pageSize,o=t.exportType;Z()(e,bt)||r.setState({params:xt(xt({},bt),{},{page_size:n,type:o}),filters:[]},(function(){r.fetchExport(r.state.params)}))})),(0,v.Z)((0,d.Z)(r),"setSelectExport",(function(){var t=r.props,e=t.shopId,n=t.t,o=r.state.exportType,a=JSON.parse(localStorage.getItem("draft_export_shop_".concat(e,"_").concat(o)))||null;localStorage["draft_export_shop_".concat(e,"_").concat(o)]?Tt({title:n("pages.shop.product.purchase.alert"),content:n("pages.shop.product.export.contentExport"),okText:n("pages.shop.product.export.yes"),cancelText:n("pages.shop.product.export.delete"),onOk:function(){return r.setState({selectedExport:a,visible:!0})},onCancel:function(){r.setState({selectedExport:null,visible:!0}),localStorage.removeItem("draft_export_shop_".concat(e,"_").concat(o))}}):r.setState({selectedExport:null,visible:!0})})),(0,v.Z)((0,d.Z)(r),"handleOnChangeStatus",(function(t){var e=w()(r.state.params);e.status=t,r.fetchExport(e)})),(0,v.Z)((0,d.Z)(r),"onChangeFilterType",(function(t){var e=Number.parseInt(t.target.value),n=r.state.params;r.setState({exportType:e},(function(){n.page=1,n.type=e,r.fetchExport(n)}))})),(0,v.Z)((0,d.Z)(r),"renderStatus",(function(){var t=r.props,e=t.export_list,n=t.t,o=r.state,a=o.isLoading,s=o.params,c=o.exportType,l=e.counters,u=function(t){var e;return"-1"==t?(l||[]).reduce((function(t,e){return t+e.count}),0):(null===(e=(l||[]).find((function(e){return e.status==t})))||void 0===e?void 0:e.count)||0},p=[{text:n("commons.all"),value:"-1",count:u("-1")}];return 0==c?Object.keys((0,ot.xw)()).map((function(t){p.push({text:(0,ot.xw)()[t].text,value:t,count:u(t)})})):(0,ot.Dn)().map((function(t){p.push({text:t.text,value:t.id,count:u(t.id)})})),mt("div",{className:"status-dropdown"},mt(Zt,{value:s.status},p.map((function(t){return mt(St,{key:t.value,value:t.value,onChange:function(t){return r.handleOnChangeStatus(t.target.value)}},t.text,mt(i.default,{key:t.value},a&&s.status==t.value?mt(O.Z,null):t.count))}))))})),(0,v.Z)((0,d.Z)(r),"onSelectRow",(function(){var t=r.props,e=t.shopId,n=t.accessToken,o=r.state.params,a="".concat((0,$.LpH)(),"/shops/").concat(e,"/export?access_token=").concat(n);r.setState({loadingData:!0});(function t(e){return W().get(a,{params:e}).then((function(n){var o=r.state,a=o.loadingData,i=o.selectedRowKeys,s=n.data.data,c=s.map((function(t){return t.display_id})),l=i.filter((function(t){return!c.includes(t)})).concat(c);return a&&r.onChangeSelect(l,s),(l||[]).length>=n.data.total_entries||0==s.length||!a?void 0:(e.page+=1,t(e))}))})(xt(xt({},o),{},{page:1})).then((function(t){return r.setState({loadingData:!1})}))})),(0,v.Z)((0,d.Z)(r),"onChangeSelect",(function(t,e){var n=r.props.export_list,o=e&&e.length>0?e:n.data,a=r.state,i=a.selectedRowKeys,s=a.selectedExports.concat(t.filter((function(t){return!i.includes(t)})).map((function(t){return o.find((function(e){return e.display_id==t}))}))).filter((function(e){return t.includes(e.display_id)}));r.setState({selectedRowKeys:t,selectedExports:s})})),(0,v.Z)((0,d.Z)(r),"renderTableExport",(function(){var t=r.props.export_list.total_entries,e=r.state,n=e.selectedRowKeys,o=e.isLoading,a=e.pageSize,i=e.params.page,s=e.filters,c={selectedRowKeys:n,onChange:function(t){return r.onChangeSelect(t)},preserveSelectedRowKeys:!0,isSelection:!0,onSelectRow:r.onSelectRow};return mt("div",null,r.renderStatus(),mt(ht.Z,{size:"small",className:"export-table",dataSource:r.getData(),columns:r.columns(),loading:o,pagination:{size:"small",pageSize:a,total:t,current:i,pageSizeOptions:_t,showSizeChanger:!0},scroll:{x:1100,y:s&&s.length>0?"calc(100vh - 250px)":"calc(100vh - 212px)"},onRow:function(t){return{onClick:function(e){return r.handleRowClick(t)}}},onChange:r.handleTableChange,rowSelection:c}))})),(0,v.Z)((0,d.Z)(r),"exportTableHeighStyle",(function(t){return t?mt(T.default,{id:"2110777564"},[".export-table .ant-table-body,.export-table .ant-table-body-inner{min-height:calc(100vh - 250px);}"]):mt(T.default,{id:"3856779841"},[".export-table .ant-table-body,.export-table .ant-table-body-inner{min-height:calc(100vh - 212px);}"])})),(0,v.Z)((0,d.Z)(r),"handleCreateTagExport",(function(t){var e=r.props;return(0,e.createTagsExport)(e.accessToken,e.shopId,t=xt(xt({},t),{},{name:t.name}))})),(0,v.Z)((0,d.Z)(r),"handleUpdateTagExport",(function(t,e){var n=r.props;return(0,n.updateTagsExport)(n.accessToken,n.shopId,t=xt(xt({},t),{},{name:t.name}),e)})),(0,v.Z)((0,d.Z)(r),"getListActionTools",(function(){var t=r.props,e=t.accessToken,n=t.shopId,o=t.t,a=t.dispatch,i=t.currentShop,s=t.tags_export,c=r.state,l=c.selectedRowKeys,u=c.selectedExports,p=c.exportType,d=i?(0,ut.zE)(i.role):{},f=[{icon:mt(z.Z,null),title:o("pages.shop.statistic.inventory.exportExcel"),key:"expor_excel",content:function(t){return mt(et.Z,{shopId:n,accessToken:e,selectedExports:u,selectedRowKeys:l,dispatch:a,isButton:t,title:o("pages.shop.statistic.inventory.exportExcel"),type:"product",params:r.state.params})}},{icon:mt(N.Z,null),title:o("pages.shop.actionTools.importExcel"),key:"import_excel",content:function(t){return mt(it.Z,{accessToken:e,shopId:n,isButton:t,title:o("pages.shop.actionTools.importExcel"),type:0})}},{icon:mt(j.Z,null),title:o("printProductDeliveryNotes"),key:"print_export",content:function(t){return mt(tt.Z,{accessToken:e,shopId:n,isButton:t,selectedRowKeys:l,selectedData:u,keys:"product"})}},{icon:mt(F.Z,null),title:o("components.exportProductDetail.exportHistory"),key:"export_history",content:function(t){return mt(Q,{accessToken:e,shopId:n,isButton:t})}},{icon:mt(A.Z,null),title:o("pages.shop.actionTools.quickUpdate"),key:"update_status_transfer",content:function(t){if(2!=p)return mt(pt.Z,{shopId:n,accessToken:e,selectedRowKeys:l,selectedData:u,clearSelectedKeys:function(){return r.setState({selectedRowKeys:[],selectedExports:[]})},handleCallbackFetchData:function(){return r.fetchExport()},name:"export_list",isButton:t,title:o("pages.shop.actionTools.quickUpdate")})}},{icon:mt(B.Z,null),title:o("pages.shop.actionTools.productTag.productTag"),key:"product_tag",content:function(t){return mt(gt.Z,{keyView:"product",isButton:t,tags:s.map((function(t){return{name:t.name,id:t.id}})),title:o("pages.shop.product.export.exportTag"),deleteData:function(t){return r.handleUpdateTagExport(t,!0)},updateData:r.handleUpdateTagExport,createData:r.handleCreateTagExport})}}];if(!d.ql_nhaphang){var h=f.findIndex((function(t){return"import_excel"==t.key}));h>-1&&f.splice(h,1)}return f})),r.state={isLoading:!1,params:xt({},bt),visible:!1,selectedExport:null,selectedRowKeys:[],noteModalVisible:!1,note:"",filters:[],pageSize:parseInt(localStorage.getItem("exportPageSize")||30),exportType:0,loadingData:!1,selectedExports:[],filterExcludeSupplier:!1,filterExcludeTag:!1,isFilterTagByOr:!0},r}return(0,f.Z)(n,null,[{key:"getInitialProps",value:function(){var t=(0,u.Z)(l().mark((function t(e,n){var r,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store.dispatch,o=e.query.shopId,!e.isServer){t.next=10;break}return t.next=4,r((0,at.wvz)(n,o,bt));case 4:return t.next=6,r((0,at.j0i)(n,o));case 6:return t.next=8,r((0,at.P3w)(n,o,!1));case 8:t.next=16;break;case 10:return t.next=12,r((0,at.wvz)(n,o,bt));case 12:return t.next=14,r((0,at.j0i)(n,o));case 14:return t.next=16,r((0,at.P3w)(n,o,!1));case 16:return t.next=18,r((0,at.wyD)(n,o));case 18:return t.next=20,r((0,at.A56)(n,o));case 20:return t.abrupt("return",{});case 21:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}]),(0,f.Z)(n,[{key:"componentDidMount",value:function(){var t=this.state,e=t.params,n=t.pageSize;e.page_size=n,this.fetchExport(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.accessToken,r=e.shopId,i=e.t,s=e.currentShop,c=e.export_list.total_entries,l=e.supplier_products,u=this.state,p=u.visible,d=u.selectedExport,f=u.selectedRowKeys,h=u.note,g=u.noteModalVisible,m=u.params,v=u.loadingData,y=u.filters,_=u.exportType,b=u.filterExcludeSupplier,Z=u.filterExcludeTag,S=u.isFilterTagByOr,w=s?(0,ut.zE)(s.role):{};return mt(M.Z,{className:"product-export"},mt("div",{className:"tools-container"},w.ql_nhaphang&&mt(P.Z,{icon:mt(L.Z,null),color:"#096DD9",title:i("components.createExportProduct"),onClick:function(){return t.setSelectExport()}}),mt(R.Z,{icon:mt(K.Z,null),title:i("pages.shop.orderControlInfo.sync"),onClick:function(){return t.fetchExport(m)},isButton:!0}),mt(dt.Z,{listActionTools:this.getListActionTools(),defaultActiveKeys:this.getListActionTools().map((function(t){return t.key})),keyView:"export",width:"40%"}),mt(ft.Z,{selectedLength:f.length,loadingData:v,total:c,onClick:function(){return t.setState({loadingData:!1,selectedRowKeys:[],selectedExports:[]})}}),mt("div",{className:"filter"},mt(lt.Z,{params:m,shopId:r,accessToken:n,fetch:function(e){return t.setState({params:e},(function(){return t.fetchExport(e)}))}}),mt("div",{style:{display:"flex"}},mt(Zt,{style:{marginRight:10},onChange:this.onChangeFilterType,value:_},mt(St,{value:0},i("components.exportProductDetail.default")),mt(St,{value:2},i("components.exportProductDetail.consigment"))),y&&y.length>0&&mt(a.default,{className:"delete",danger:!0,onClick:function(){return t.handleDeleteFilter()}},i("pages.shop.debt.deleteFilter")),mt(st.Z,{accessToken:n,shopId:r,filterExcludeSupplier:b,filterExcludeTag:Z,isFilterTagByOr:S,fetch:function(e,n){n?t.setState(n,(function(){return t.handleAdvanceFilter(e)})):t.handleAdvanceFilter(e)},filters:y,params:m,supplier_products:l||[]}))),y&&y.length>0&&mt("div",{className:"show-filter"},y.map((function(e,n){return t.renderFilter(e,n)})))),this.renderTableExport(),!g&&mt(q.Z,{visible:p,close:function(){return t.setState({visible:!1})},export_list:d,accessToken:n,shopId:r,supplier_products:l||[],type:_,showHistories:!0,isServer:this.props.isServer}),mt(x.Z,{visible:g,okText:i("components.productDeleteMutil.agree"),okType:"danger",onOk:function(e){return h?t.handleCancelExport(d,e):o.default.warning(i("components.orderActionButton.enterReason"))},cancelText:i("components.productDeleteMutil.disagree"),onCancel:function(){return t.setState({note:"",noteModalVisible:!1,visible:!1})}},mt("div",{style:{paddingBottom:10,fontWeight:600,fontSize:16}},i("components.productDeleteMutil.reason")),mt(wt,{placeholder:i("components.productDeleteMutil.enterReason"),value:h,onChange:function(e){return t.setState({note:e.target.value})}})),this.exportTableHeighStyle(y&&y.length>0))}}]),n}(k.Component);(0,v.Z)(kt,"pageInfo",{title:"pages.shop.product.export.export",sassStyle:I()});var Et=(0,E.$j)((function(t){var e,n,r=t.shop.currentShop,o=t.navigation.user,a=t.user.users,i=(0,$.nkB)(null===(e=t.product)||void 0===e||null===(n=e.supplier_products)||void 0===n?void 0:n.data,null===r||void 0===r?void 0:r.shop_departments,o,a);return xt(xt({timezone:t.navigation.user.timezone,currentShop:r,user:o,users:a,printExports:(0,nt.kE)(t),warehouses:(0,nt.op)(t)},(0,nt.CZ)(t)),{},{apiKeys:t.user.apiKeys,tags_export:t.product.tags_export,supplier_products:i})}),{fetchExport:at.xC7,fetchDefectExport:at.Ev4,cancelExport:at.Lpm,updateExport:at.$W2,fetchCountStatusExport:at.wvz,fetchPrintExports:at.j0i,fetchPrintBarcodes:at.P3w,fetchMaterials:at.A56,getExportProduct:at.IFJ,fetchTagsExport:at.wyD,createTagsExport:at.t7k,updateTagsExport:at.hz9})((0,D.Z)(kt))},47590:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/product/export",function(){return n(40876)}])}},function(t){t.O(0,[5460,2902,4517,2653,3745,2391,4560,9774,2888,179],(function(){return e=47590,t(t.s=e);var e}));var e=t.O();_N_E=e}]);