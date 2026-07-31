import{o as w,p as Ue}from"./chunk-AW4276X3.js";import{$ as de,Aa as Re,Ab as T,Bb as P,Ca as g,Fb as We,Ga as pe,La as Ne,Q as Fe,Ra as Ve,S as Oe,Sa as ze,U as qe,Wa as Q,Z as O,a as B,bb as He,ia as se,k as ge,nb as je,va as Le,w as U,xa as X,ya as K,za as Be}from"./chunk-5KGSWRT5.js";import"./chunk-PUSYLN2N.js";import{A as fe,Ab as Pe,Ca as te,Da as ne,Ea as ie,Fa as c,Ga as t,Ha as n,I as q,Ia as i,J as Z,L as ye,Nb as A,Nc as j,Oc as Ae,P as S,Pa as V,Pc as ke,Q as x,Qa as u,Qc as W,Rc as Ie,Sa as J,Wa as F,Xa as I,Ya as M,Zb as we,bc as _e,cb as C,db as e,dd as Me,eb as xe,fb as D,fd as me,hb as v,hd as he,ia as d,ib as f,jb as y,na as _,nb as Ce,nc as De,ob as ae,pa as E,pb as oe,qa as Y,qb as L,rb as le,sb as h,ua as ee,yb as re,zb as Te}from"./chunk-A2WYYMKN.js";import{a as G,b as $}from"./chunk-NCEQPEJE.js";var Et=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Qe=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,a){l&1&&i(0,"po-table",0),l&2&&c("p-items",h(2,bt,le(1,Et)))},dependencies:[g],encapsulation:2})}return r})();var xt=r=>({"docs-sample-code-tabs":r}),Ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Basic"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-basic/sample-po-table-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-basic"),n(),i(23,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,xt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Qe],encapsulation:2})}return r})();var ce=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:"https://po-ui.io/",number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],a=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59),m=o<10?"0"+o.toString():o.toString(),p=l<10?"0"+l.toString():l.toString(),s=a<10?"0"+a.toString():a.toString();return`${m}:${p}:${s}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=q({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Je=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=ge.Medium;filterType=X.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:!0},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:!0},{label:"Single select",value:"singleSelect",disabled:!0}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:X.startsWith},{label:"Contains",value:X.contains},{label:"Ends With",value:X.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=ge.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static \u0275fac=function(l){return new(l||r)(_(ce))};static \u0275cmp=E({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,a){if(l&1&&F(O,7),l&2){let m;I(m=M())&&(a.poModal=m.first)}},standalone:!1,features:[L([ce])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,a){if(l&1){let m=V();t(0,"po-table",1),u("p-all-selected",function(){return a.changeEvent("p-all-selected")})("p-all-unselected",function(){return a.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return a.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return a.changeEvent("p-collapsed")})("p-expanded",function(){return a.changeEvent("p-expanded")})("p-selected",function(){return a.changeEvent("p-selected")})("p-show-more",function(){return a.showMore()})("p-unselected",function(){return a.changeEvent("p-unselected")})("p-delete-items",function(s){return a.deleteItems(s)}),n(),i(1,"po-divider"),t(2,"div",2),i(3,"po-info",3),n(),i(4,"po-divider"),t(5,"div",2)(6,"po-button",4),u("p-click",function(){return a.addItem()}),n()(),i(7,"po-divider"),t(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),y("ngModelChange",function(s){return S(m),f(a.columnsName,s)||(a.columnsName=s),x(s)}),u("p-change",function(){return a.updateColumns()}),n()(),t(12,"div",2)(13,"po-radio-group",6),y("ngModelChange",function(s){return S(m),f(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),x(s)}),n(),t(14,"po-switch",7),y("ngModelChange",function(s){return S(m),f(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),x(s)}),n()(),t(15,"div",2)(16,"po-checkbox-group",8),y("ngModelChange",function(s){return S(m),f(a.properties,s)||(a.properties=s),x(s)}),n()(),t(17,"div",2)(18,"po-checkbox-group",9),y("ngModelChange",function(s){return S(m),f(a.actionsDefinition,s)||(a.actionsDefinition=s),x(s)}),u("p-change",function(){return a.changeActionOptions()}),n()(),t(19,"div",2)(20,"po-radio-group",10),y("ngModelChange",function(s){return S(m),f(a.spacing,s)||(a.spacing=s),x(s)}),n()(),t(21,"div",2)(22,"po-checkbox-group",11),y("ngModelChange",function(s){return S(m),f(a.selection,s)||(a.selection=s),x(s)}),u("p-change",function(){return a.changeSelectionOptions()}),n(),t(23,"po-radio-group",12),y("ngModelChange",function(s){return S(m),f(a.filterType,s)||(a.filterType=s),x(s)}),n(),t(24,"po-radio-group",13),y("ngModelChange",function(s){return S(m),f(a.componentsSize,s)||(a.componentsSize=s),x(s)}),n()(),t(25,"div",2)(26,"po-input",14),y("ngModelChange",function(s){return S(m),f(a.literals,s)||(a.literals=s),x(s)}),u("p-change",function(){return a.changeLiterals()}),n(),t(27,"po-input",15),y("ngModelChange",function(s){return S(m),f(a.filteredColumns,s)||(a.filteredColumns=s),x(s)}),u("p-change",function(){return a.changeFilteredColumns()}),n(),t(28,"po-number",16),y("ngModelChange",function(s){return S(m),f(a.height,s)||(a.height=s),x(s)}),n(),t(29,"po-number",17),y("ngModelChange",function(s){return S(m),f(a.maxColumns,s)||(a.maxColumns=s),x(s)}),n()(),t(30,"div",2)(31,"po-button",18),u("p-click",function(){return a.restore()}),n()()(),t(32,"po-modal",19),i(33,"po-info",20),n()}l&2&&(c("p-actions",a.actions)("p-actions-right",a.properties.includes("actionsRight"))("p-columns",a.columns)("p-container",a.container)("p-height",a.height)("p-filter-type",a.filterType)("p-components-size",a.componentsSize)("p-hide-detail",a.properties.includes("hideDetail"))("p-hide-columns-manager",a.properties.includes("hideColumnsManager"))("p-hide-batch-actions",a.properties.includes("hideBatchActions"))("p-hide-table-search",a.properties.includes("hideTableSearch"))("p-hide-select-all",a.selection.includes("hideSelectAll"))("p-items",a.items)("p-literals",a.customLiterals)("p-filtered-columns",a.filteredColumns)("p-loading",a.properties.includes("loading"))("p-max-columns",a.maxColumns)("p-selectable",a.selection.includes("selectable"))("p-spacing",a.spacing)("p-loading-show-more",a.properties.includes("loadingShowMore"))("p-show-more-disabled",a.properties.includes("showMoreDisabled"))("p-single-select",a.selection.includes("singleSelect"))("p-sort",a.properties.includes("sort"))("p-striped",a.properties.includes("striped"))("p-virtual-scroll",a.properties.includes("virtualScroll"))("p-auto-collapse",a.properties.includes("autoCollapse"))("p-draggable",a.properties.includes("draggable"))("p-hide-action-fixed-columns",a.properties.includes("fixed")),d(3),c("p-value",a.event),d(8),v("ngModel",a.columnsName),c("p-options",a.columnsOptions),d(2),v("ngModel",a.columnsDefinition.detail.detail.typeHeader),c("p-options",a.typeHeaderOptions),d(),v("ngModel",a.columnsDefinition.detail.detail.hideSelect),d(2),v("ngModel",a.properties),c("p-options",a.propertiesOptions),d(2),v("ngModel",a.actionsDefinition),c("p-options",a.actionsDefinitionOptions),d(2),v("ngModel",a.spacing),c("p-options",a.typeSpacing),d(2),v("ngModel",a.selection),c("p-options",a.selectionOptions),d(),v("ngModel",a.filterType),c("p-options",a.filterModeOptions),d(),v("ngModel",a.componentsSize),c("p-options",a.componentsSizeOptions),d(2),v("ngModel",a.literals),d(),v("ngModel",a.filteredColumns),d(),v("ngModel",a.height),d(),v("ngModel",a.maxColumns),d(4),c("p-value",a.currentItem))},dependencies:[Ie,j,Ae,W,ke,U,B,Oe,pe,Ne,qe,Le,Q,O,g],encapsulation:2})}return r})();var ft=r=>({"docs-sample-code-tabs":r}),Xe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Labs"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-labs/sample-po-table-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-change-fixed-columns)="changeEvent('p-change-fixed-columns')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12',
    'caption-tag-01',
    'caption-tag-03',
    'caption-tag-06',
    'caption-tag-08',
    'caption-tag-11',
    'caption-tag-13',
    'caption-tag-16',
    'caption-tag-18',
    'caption-tag-21',
    'caption-tag-23',
    'caption-tag-26',
    'caption-tag-28',
    'caption-tag-31',
    'caption-tag-33'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' },
          { value: 'caption-tag-01', color: 'caption-tag-01', label: 'Caption 01' },
          { value: 'caption-tag-03', color: 'caption-tag-03', label: 'Caption 03' },
          { value: 'caption-tag-06', color: 'caption-tag-06', label: 'Caption 06' },
          { value: 'caption-tag-08', color: 'caption-tag-08', label: 'Caption 08' },
          { value: 'caption-tag-11', color: 'caption-tag-11', label: 'Caption 11' },
          { value: 'caption-tag-13', color: 'caption-tag-13', label: 'Caption 13' },
          { value: 'caption-tag-16', color: 'caption-tag-16', label: 'Caption 16' },
          { value: 'caption-tag-18', color: 'caption-tag-18', label: 'Caption 18' },
          { value: 'caption-tag-21', color: 'caption-tag-21', label: 'Caption 21' },
          { value: 'caption-tag-23', color: 'caption-tag-23', label: 'Caption 23' },
          { value: 'caption-tag-26', color: 'caption-tag-26', label: 'Caption 26' },
          { value: 'caption-tag-28', color: 'caption-tag-28', label: 'Caption 28' },
          { value: 'caption-tag-31', color: 'caption-tag-31', label: 'Caption 31' },
          { value: 'caption-tag-33', color: 'caption-tag-33', label: 'Caption 33' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'caption-tag-08' : 'caption-tag-13';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-labs"),n(),i(27,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,ft,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Je],encapsulation:2})}return r})();var Ct=["table"],Ke=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=$(G({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,a){if(l&1&&F(Ct,5),l&2){let m;I(m=M())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,a){if(l&1){let m=V();t(0,"div",1)(1,"po-input",2),y("ngModelChange",function(s){return S(m),f(a.service,s)||(a.service=s),x(s)}),u("p-change",function(){return a.changeService(a.service)}),n()(),t(2,"div",1),i(3,"po-divider",3),t(4,"po-textarea",4),y("ngModelChange",function(s){return S(m),f(a.stringColumns,s)||(a.stringColumns=s),x(s)}),u("p-change",function(s){return a.onChangeColumns(s)}),n()(),t(5,"div",1),i(6,"po-divider",5),t(7,"po-input",6),y("ngModelChange",function(s){return S(m),f(a.key,s)||(a.key=s),x(s)}),n(),t(8,"po-input",7),y("ngModelChange",function(s){return S(m),f(a.value,s)||(a.value=s),x(s)}),n()(),t(9,"div",1)(10,"po-button",8),u("p-click",function(){return a.addFilter(a.key,a.value)}),n()(),t(11,"div",1)(12,"po-disclaimer-group",9),u("p-remove",function(s){return a.removeItem(s)})("p-remove-all",function(){return a.removeAllItems()}),n()(),t(13,"div",1),i(14,"po-table",10,0),n()}l&2&&(d(),v("ngModel",a.service),d(3),v("ngModel",a.stringColumns),c("p-rows",5),d(3),v("ngModel",a.key),d(),v("ngModel",a.value),d(2),c("p-disabled",!a.key||!a.value),d(2),c("p-disclaimers",a.filters),d(2),c("p-columns",a.columns)("p-service-api",a.sampleService)("p-height",300)("p-hide-table-search",!1)("p-infinite-scroll",!0))},dependencies:[j,W,U,Fe,B,pe,ze,g],encapsulation:2})}return r})();var Pt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table using API"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-with-api"),n(),i(23,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,Pt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Ke],encapsulation:2})}return r})();var ue=(()=>{class r{getColumns(){return[{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:!1},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:!1},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:!1},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return[{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),a=o<10?"0"+o.toString():o.toString(),m=l<10?"0"+l.toString():l.toString();return`00:${a}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=q({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Dt(r,H){if(r&1){let o=V();t(0,"po-widget",2)(1,"div",3)(2,"po-select",4),y("ngModelChange",function(a){let m=S(o).$implicit;return f(m.status,a)||(m.status=a),x(a)}),n()(),t(3,"div",3),i(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),n()()}if(r&2){let o=H.$implicit,l=J();c("p-title",ae("Transport detail ",o.code)),d(2),v("ngModel",o.status),c("p-options",l.statusOptions),d(2),c("p-value",o.batch_product),d(),c("p-value",o.driver),d(),c("p-value",o.license_plate)}}var Ye=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(_(ue))};static \u0275cmp=E({type:r,selectors:[["sample-po-table-transport"]],standalone:!1,features:[L([ue])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,a){l&1&&(t(0,"po-table",0),ee(1,Dt,7,7,"ng-template",1),n()),l&2&&(c("p-auto-collapse",!0)("p-columns",a.columns)("p-hide-columns-manager",!0)("p-hide-table-search",!1)("p-items",a.items)("p-sort",!0)("p-striped",!0),d(),c("p-table-row-template-arrow-direction","right")("p-table-row-template-show",a.isUndelivered))},dependencies:[j,W,Ve,Q,g,Re,We],encapsulation:2})}return r})();var kt=r=>({"docs-sample-code-tabs":r}),et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-transport-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Transport"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-transport/sample-po-table-transport.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'caption-tag-23', label: 'Delivered' },
          { value: 'transport', color: 'caption-tag-14', label: 'Transport' },
          { value: 'production', color: 'caption-tag-03', label: 'Production' },
          { value: 'stock', color: 'caption-tag-33', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-transport"),n(),i(27,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,kt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Ye],encapsulation:2})}return r})();var Ee=(()=>{class r{getColumns(){return[{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=q({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var tt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(a=>$(G({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem("initial-columns").split(","),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case"available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case"reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case"closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=$(G({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem("initial-columns",o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static \u0275fac=function(l){return new(l||r)(_(Ee),_(se),_(de))};static \u0275cmp=E({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,a){if(l&1&&F(O,7)(g,7),l&2){let m;I(m=M())&&(a.poModal=m.first),I(m=M())&&(a.poTable=m.first)}},standalone:!1,features:[L([Ee,de])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,a){l&1&&(t(0,"div",0),e(1,"Choose one or more promotional airfares"),n(),i(2,"po-divider"),t(3,"po-table",1),u("p-collapsed",function(){return a.onCollapseDetail()})("p-expanded",function(){return a.onExpandDetail()})("p-selected",function(p){return a.sumTotal(p)})("p-unselected",function(p){return a.decreaseTotal(p)})("p-change-visible-columns",function(p){return a.changeColumnVisible(p)})("p-restore-column-manager",function(){return a.restoreColumn()})("p-delete-items",function(p){return a.deleteItems(p)}),n(),i(4,"po-divider")(5,"po-info",2),re(6,"currency"),i(7,"po-info",3),t(8,"div",4)(9,"po-button",5),u("p-click",function(){return a.addToCart()}),n(),t(10,"po-button",6),u("p-click",function(){return a.expandAll()}),n(),t(11,"po-button",7),u("p-click",function(){return a.collapseAll()}),n()(),t(12,"po-modal",8),i(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),n()),l&2&&(d(3),c("p-container",!0)("p-height",400)("p-hide-batch-actions",!1)("p-hide-table-search",!1)("p-selectable",!0)("p-sort",!0)("p-striped",!0)("p-actions",a.actions)("p-columns",a.columns)("p-items",a.items)("p-max-columns",7)("p-virtual-scroll",!1),d(2),c("p-value",Ce(Pe(6,21,a.total,"USD"))),d(2),c("p-value",a.totalExpanded),d(5),c("p-title",oe("",a.detail==null?null:a.detail.destination," - ",a.detail==null?null:a.detail.country)),d(),c("p-value",a.detail==null?null:a.detail.airline),d(),c("p-value",a.detail==null?null:a.detail.initials),d(),c("p-value",a.detail==null?null:a.detail.class))},dependencies:[U,B,Q,O,g,_e],encapsulation:2})}return r})();var Ot=r=>({"docs-sample-code-tabs":r}),nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Airfare"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'caption-tag-13', label: 'Available' },
          { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
          { value: 'closed', color: 'caption-tag-03', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-airfare"),n(),i(27,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,Ot,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,tt],encapsulation:2})}return r})();var z=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(z||{});var be=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(".").length>1){let s=m.split(".")[0],ve=m.split(".")[1];return o[s][ve]<l[s][ve]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}else return o[m]<l[m]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=q({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Rt(r,H){if(r&1&&(t(0,"div"),e(1),re(2,"uppercase"),n()),r&2){let o=H.$implicit;C(ae("badge ",o)),d(),xe(Te(2,4,o))}}function Nt(r,H){if(r&1&&(t(0,"ul")(1,"li",4),e(2),n(),i(3,"po-divider"),n()),r&2){let o=H.$implicit;d(2),xe(o)}}var it=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:z.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:z.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:z.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===z.Experimental?"caption-tag-08":"caption-tag-13"}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==z.Stable}canShowExtras(o){return o?.component?.status!==z.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(_(be),_(me))};static \u0275cmp=E({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,a){if(l&1&&F(O,7),l&2){let m;I(m=M())&&(a.poModal=m.first)}},standalone:!1,features:[L([be])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,a){l&1&&(t(0,"div",0),e(1,"PO UI Library"),n(),i(2,"po-divider"),t(3,"po-table",1),u("p-show-more",function(p){return a.showMore(p)})("p-sort-by",function(p){return a.sort(p)}),ee(4,Rt,3,6,"ng-template",2),n(),t(5,"po-modal",3),ne(6,Nt,4,1,"ul",null,te),n()),l&2&&(d(3),c("p-loading-show-more",a.isLoading)("p-columns",a.columns)("p-items",a.items)("p-show-more-disabled",a.showMoreDisabled)("p-sort",!0),d(),c("p-property","component.type"),d(),c("p-title",oe("",a.title," - ",a.extraInformation==null?null:a.extraInformation.component)),d(),ie(a.extraInformation==null?null:a.extraInformation.extras))},dependencies:[B,O,g,Be,we],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"]})}return r})();var zt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-components-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Po Field Components"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-components/sample-po-table-components.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<po-divider />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  @for (extra of extraInformation?.extras; track extra) {
    <ul>
      <li class="po-font-text">{ { extra }}</li>
      <po-divider />
    </ul>
  }
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-components/sample-po-table-components.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'caption-tag-13',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'caption-tag-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'caption-tag-03',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10%',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'caption-tag-08' : 'caption-tag-13';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'caption-tag-08' : 'caption-tag-13';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-components/sample-po-table-components.enum.ts"),n(),t(23,"pre",9),e(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),n(),t(25,"label",6),e(26,"sample-po-table-components/sample-po-table-components.service.ts"),n(),t(27,"pre",9),e(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),n()()(),t(29,"po-tab",10)(30,"div")(31,"label",6),e(32,"sample-po-table-components/sample-po-table-components.component.css"),n(),t(33,"pre",11),e(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),n()()()()(),t(35,"div",12),i(36,"sample-po-table-components"),n(),i(37,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,zt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,it],encapsulation:2})}return r})();var Se=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(fe("items"))}static \u0275fac=function(l){return new(l||r)(ye(De))};static \u0275prov=q({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Wt=["POItemsOri"],Ut=["POItemsSelected"],ot=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l==="new")this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static \u0275fac=function(l){return new(l||r)(_(Se))};static \u0275cmp=E({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,a){if(l&1&&F(Wt,7)(Ut,7),l&2){let m;I(m=M())&&(a.poItemsOri=m.first),I(m=M())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[L([Se])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,a){l&1&&(t(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Choose one or more heroes for your team"),n(),t(4,"po-table",5,0),u("p-selected",function(p){return a.changeOptions(p,"new")})("p-unselected",function(p){return a.changeOptions(p,"change")})("p-delete-items",function(p){return a.deleteItems(p)}),n()(),t(6,"div",3)(7,"div",4),e(8,"Here your chosen heroes"),n(),i(9,"po-table",6,1),n()()),l&2&&(d(4),c("p-columns",a.columns)("p-infinite-scroll",!0)("p-hide-select-all",!0)("p-hide-table-search",!1)("p-items",a.items)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1),d(5),c("p-columns",a.columns)("p-hide-table-search",!1)("p-striped",!0)("p-infinite-scroll",!0)("p-items",a.itemsSelected)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1))},dependencies:[g],encapsulation:2})}return r})();var Gt=r=>({"docs-sample-code-tabs":r}),lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Heroes"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-heroes"),n(),i(27,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,Gt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,ot],encapsulation:2})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),Xt=r=>[r],rt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-draggable"]],standalone:!1,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,a){l&1&&(t(0,"div",0),e(1,` Choose one column and drag to another horizontal position in the table and drop
`),n(),i(2,"po-divider")(3,"po-table",1)),l&2&&(d(3),c("p-items",h(5,Xt,le(4,Jt)))("p-draggable",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[B,g],encapsulation:2})}return r})();var Zt=r=>({"docs-sample-code-tabs":r}),mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Drag and Drop"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-draggable"),n(),i(23,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,Zt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,rt],encapsulation:2})}return r})();function en(r,H){if(r&1){let o=V();t(0,"po-filter-chip",6),u("p-selected-change",function(a){let m=S(o).$implicit,p=J();return x(p.onSuggestionChange(m,a))}),n()}if(r&2){let o=H.$implicit,l=J();c("p-label",o)("p-selected",l.selectedSuggestion===o)("p-disabled",l.suggestionsLocked&&l.selectedSuggestion!==o)}}var dt=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=["sal\xE1rio acima de 15000","funcion\xE1rios de Curitiba","departamento Engenharia com sal\xE1rio acima de 10000","admitidos depois de 2020","com menos de 30 anos","de S\xE3o Paulo com sal\xE1rio abaixo de 15000","departamento Design","sal\xE1rio entre 8000 e 12000"];AI_URL="https://po-sample-api.onrender.com/v1/ai/filter";columns=[{property:"name",label:"Nome"},{property:"age",label:"Idade",type:"number"},{property:"city",label:"Cidade"},{property:"department",label:"Departamento"},{property:"salary",label:"Sal\xE1rio",type:"currency",format:"BRL"},{property:"hireDate",label:"Admiss\xE3o",type:"date"}];items=[{name:"Tony Stark",age:34,city:"S\xE3o Paulo",department:"Engenharia",salary:12e3,hireDate:"2019-03-15"},{name:"Rachel Green",age:28,city:"Curitiba",department:"Design",salary:8500,hireDate:"2021-07-01"},{name:"Michael Scott",age:42,city:"S\xE3o Paulo",department:"Gest\xE3o",salary:18e3,hireDate:"2015-11-20"},{name:"Hermione Granger",age:25,city:"Recife",department:"Engenharia",salary:7200,hireDate:"2023-01-10"},{name:"Walter White",age:30,city:"Belo Horizonte",department:"Design",salary:9500,hireDate:"2020-05-18"},{name:"Monica Geller",age:38,city:"Rio de Janeiro",department:"Gest\xE3o",salary:15e3,hireDate:"2017-09-03"},{name:"Peter Parker",age:27,city:"S\xE3o Paulo",department:"Engenharia",salary:1e4,hireDate:"2022-04-12"},{name:"Daenerys Targaryen",age:45,city:"Curitiba",department:"Engenharia",salary:21e3,hireDate:"2012-06-30"}];searchAiField={url:this.AI_URL,placeholder:"Ex: engenheiros de S\xE3o Paulo com sal\xE1rio acima de 10000"};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static \u0275fac=function(l){return new(l||r)(_(se))};static \u0275cmp=E({type:r,selectors:[["sample-po-table-search-ai"]],viewQuery:function(l,a){if(l&1&&F(g,5),l&2){let m;I(m=M())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,"po-font-text-large-bold","po-mt-2","po-mb-1"],[1,"po-font-text-small","po-mb-2",2,"color","var(--color-neutral-mid-tone)"],[1,"po-font-text-small","po-mt-2","po-mb-1",2,"color","var(--color-neutral-mid-tone)"],[1,"po-mb-1",2,"display","flex","flex-wrap","wrap","gap","0.5rem"],[3,"p-label","p-selected","p-disabled"],[3,"p-search-ai-result","p-search-ai-low-confidence","p-search-ai-error","p-columns","p-items","p-search-ai-field"],[3,"p-selected-change","p-label","p-selected","p-disabled"]],template:function(l,a){l&1&&(t(0,"p",0),e(1,"PO Search A.I."),n(),t(2,"p",1),e(3," O "),t(4,"strong"),e(5,"PO Search A.I."),n(),e(6," \xE9 um recurso de busca inteligente integrado ao "),t(7,"code"),e(8,"po-table"),n(),e(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),n(),t(10,"p",2),e(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),n(),t(12,"div",3),ne(13,en,1,3,"po-filter-chip",4,te),n(),t(15,"po-table",5),u("p-search-ai-result",function(p){return a.onAiResult(p)})("p-search-ai-low-confidence",function(p){return a.onAiLowConfidence(p)})("p-search-ai-error",function(p){return a.onAiError(p)}),n()),l&2&&(d(13),ie(a.examples),d(2),c("p-columns",a.columns)("p-items",a.items)("p-search-ai-field",a.searchAiField))},dependencies:[He,g],encapsulation:2})}return r})();var nn=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-search-ai-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Search A.I. (EXPERIMENTAL)"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-search-ai/sample-po-table-search-ai.component.html"),n(),t(13,"pre",7),e(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
<p class="po-font-text-small po-mb-2" style="color: var(--color-neutral-mid-tone)">
  O <strong>PO Search A.I.</strong> \xE9 um recurso de busca inteligente integrado ao <code>po-table</code> que utiliza
  intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve
  o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa
  inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
</p>
<p class="po-font-text-small po-mt-2 po-mb-1" style="color: var(--color-neutral-mid-tone)">
  Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
</p>
<div class="po-mb-1" style="display: flex; flex-wrap: wrap; gap: 0.5rem">
  @for (ex of examples; track ex) {
    <po-filter-chip
      [p-label]="ex"
      [p-selected]="selectedSuggestion === ex"
      [p-disabled]="suggestionsLocked && selectedSuggestion !== ex"
      (p-selected-change)="onSuggestionChange(ex, $event)"
    ></po-filter-chip>
  }
</div>
<po-table
  [p-columns]="columns"
  [p-items]="items"
  [p-search-ai-field]="searchAiField"
  (p-search-ai-result)="onAiResult($event)"
  (p-search-ai-low-confidence)="onAiLowConfidence($event)"
  (p-search-ai-error)="onAiError($event)"
>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-search-ai/sample-po-table-search-ai.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import {
  PoFilterChipSelectedChange,
  PoNotificationService,
  PoSearchAiError,
  PoSearchAiResult,
  PoTableColumn,
  PoTableComponent,
  PoTableSearchAiField
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-search-ai',
  templateUrl: './sample-po-table-search-ai.component.html',
  standalone: false
})
export class SamplePoTableSearchAiComponent {
  @ViewChild(PoTableComponent) table: PoTableComponent;

  selectedSuggestion: string;
  suggestionsLocked = false;

  readonly examples: Array<string> = [
    'sal\xE1rio acima de 15000',
    'funcion\xE1rios de Curitiba',
    'departamento Engenharia com sal\xE1rio acima de 10000',
    'admitidos depois de 2020',
    'com menos de 30 anos',
    'de S\xE3o Paulo com sal\xE1rio abaixo de 15000',
    'departamento Design',
    'sal\xE1rio entre 8000 e 12000'
  ];

  AI_URL = 'https://po-sample-api.onrender.com/v1/ai/filter';
  readonly columns: Array<PoTableColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade' },
    { property: 'department', label: 'Departamento' },
    { property: 'salary', label: 'Sal\xE1rio', type: 'currency', format: 'BRL' },
    { property: 'hireDate', label: 'Admiss\xE3o', type: 'date' }
  ];

  readonly items: Array<any> = [
    { name: 'Tony Stark', age: 34, city: 'S\xE3o Paulo', department: 'Engenharia', salary: 12000, hireDate: '2019-03-15' },
    { name: 'Rachel Green', age: 28, city: 'Curitiba', department: 'Design', salary: 8500, hireDate: '2021-07-01' },
    { name: 'Michael Scott', age: 42, city: 'S\xE3o Paulo', department: 'Gest\xE3o', salary: 18000, hireDate: '2015-11-20' },
    {
      name: 'Hermione Granger',
      age: 25,
      city: 'Recife',
      department: 'Engenharia',
      salary: 7200,
      hireDate: '2023-01-10'
    },
    {
      name: 'Walter White',
      age: 30,
      city: 'Belo Horizonte',
      department: 'Design',
      salary: 9500,
      hireDate: '2020-05-18'
    },
    {
      name: 'Monica Geller',
      age: 38,
      city: 'Rio de Janeiro',
      department: 'Gest\xE3o',
      salary: 15000,
      hireDate: '2017-09-03'
    },
    {
      name: 'Peter Parker',
      age: 27,
      city: 'S\xE3o Paulo',
      department: 'Engenharia',
      salary: 10000,
      hireDate: '2022-04-12'
    },
    {
      name: 'Daenerys Targaryen',
      age: 45,
      city: 'Curitiba',
      department: 'Engenharia',
      salary: 21000,
      hireDate: '2012-06-30'
    }
  ];

  readonly searchAiField: PoTableSearchAiField = {
    url: this.AI_URL,
    placeholder: 'Ex: engenheiros de S\xE3o Paulo com sal\xE1rio acima de 10000'
  };

  private readonly SUGGESTION_LOCK_TIME = 3000;
  private lockTimeout: ReturnType<typeof setTimeout>;

  constructor(private poNotification: PoNotificationService) {}

  applySuggestion(query: string): void {
    this.table.updateSearchAIQuery(query, true);
  }

  onSuggestionChange(query: string, event: PoFilterChipSelectedChange): void {
    if (!event.selected || this.suggestionsLocked) {
      return;
    }

    this.selectedSuggestion = query;
    this.applySuggestion(query);
    this.lockSuggestions();
  }

  onAiResult(result: PoSearchAiResult): void {
    this.poNotification.success(\`Busca conclu\xEDda para "\${result.query}".\`);
  }

  onAiLowConfidence(result: PoSearchAiResult): void {
    this.poNotification.warning(
      \`Baixa confian\xE7a (\${Math.round((result.confidence ?? 0) * 100)}%): verifique se o resultado reflete a busca por "\${result.query}".\`
    );
  }

  onAiError(error: PoSearchAiError): void {
    this.poNotification.error(\`Erro \${error.statusCode}: \${error.message}\`);
  }

  private lockSuggestions(): void {
    this.suggestionsLocked = true;
    clearTimeout(this.lockTimeout);
    this.lockTimeout = setTimeout(() => {
      this.suggestionsLocked = false;
    }, this.SUGGESTION_LOCK_TIME);
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-search-ai"),n(),i(23,"hr")),l&2&&(d(5),C("po-icon "+a.sampleCodeButtonIcon),d(),D(" ",a.sampleCodeButtonLabel),d(),c("ngClass",h(4,nn,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,dt],encapsulation:2})}return r})();var pt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=E({type:r,selectors:[["sample-po-table-doc"]],standalone:!1,decls:5451,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTableSearchAiField"],["href","https://github.com/po-ui/po-sample-api"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["pan","",1,"docs-api-property-type","'auto'"],["pan","",1,"docs-api-property-type","'parser'"],["pan","",1,"docs-api-property-type","'server'"],["pan","",1,"docs-api-property-type","'none'"],["pan","",1,"docs-api-property-type","((result:","PoSearchAiResult)","=>","void)"],["pan","",1,"docs-api-property-type","Array<PoSearchAiColumn>"],["pan","",1,"docs-api-property-type","PoSearchAiLiterals"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoTableComponent"),n()(),t(12,"div",2)(13,"p"),e(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),n(),t(15,"p"),e(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),t(17,"strong"),e(18,"Carregar mais resultados"),n(),e(19,"."),n(),t(20,"blockquote")(21,"p"),e(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),t(23,"a",6)(24,"code"),e(25,"p-table-row-template"),n()(),e(26,"."),n()(),t(27,"blockquote")(28,"p"),e(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),t(30,"a",7)(31,"code"),e(32,"p-table-column-template"),n()(),e(33,`
e `),t(34,"a",8)(35,"code"),e(36,"p-table-cell-template"),n()(),e(37,"."),n()(),t(38,"p"),e(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),n(),t(40,"p"),e(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),t(42,"em"),e(43,"scroll"),n(),e(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),n(),t(45,"h4"),e(46,"Tokens customiz\xE1veis"),n(),t(47,"p"),e(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(49,"blockquote")(50,"p"),e(51,"Para maiores informa\xE7\xF5es, acesse o guia "),t(52,"a",9),e(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(54,"."),n()(),t(55,"table")(56,"thead")(57,"tr")(58,"th"),e(59,"Propriedade"),n(),t(60,"th"),e(61,"Descri\xE7\xE3o"),n(),t(62,"th"),e(63,"Valor Padr\xE3o"),n()()(),t(64,"tbody")(65,"tr")(66,"td")(67,"strong"),e(68,"Default Values"),n()(),i(69,"td")(70,"td"),n(),t(71,"tr")(72,"td")(73,"code"),e(74,"--font-family"),n()(),t(75,"td"),e(76,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(77,"td")(78,"code"),e(79,"var(--font-family-theme)"),n()()(),t(80,"tr")(81,"td")(82,"code"),e(83,"--background-color"),n()(),t(84,"td"),e(85,"Cor de background"),n(),t(86,"td")(87,"code"),e(88,"var(--color-neutral-light-00)"),n()()(),t(89,"tr")(90,"td")(91,"code"),e(92,"--color"),n()(),t(93,"td"),e(94,"Cor principal da table"),n(),t(95,"td")(96,"code"),e(97,"var(--color-neutral-dark-95)"),n()()(),t(98,"tr")(99,"td")(100,"code"),e(101,"--background-striped-color"),n()(),t(102,"td"),e(103,"Cor do background quando striped"),n(),t(104,"td")(105,"code"),e(106,"var(--color-neutral-light-05)"),n()()(),t(107,"tr")(108,"td")(109,"code"),e(110,"--color-line"),n()(),t(111,"td"),e(112,"Cor das linhas"),n(),t(113,"td")(114,"code"),e(115,"var(--color-neutral-mid-40)"),n()()(),t(116,"tr")(117,"td")(118,"strong"),e(119,"Hover"),n()(),i(120,"td")(121,"td"),n(),t(122,"tr")(123,"td")(124,"code"),e(125,"--color-hover"),n()(),t(126,"td"),e(127,"Cor principal no estado hover"),n(),t(128,"td")(129,"code"),e(130,"var(--color-action-hover)"),n()()(),t(131,"tr")(132,"td")(133,"code"),e(134,"--background-color-hover"),n()(),t(135,"td"),e(136,"Cor de background no estado hover"),n(),t(137,"td")(138,"code"),e(139,"var(--color-brand-01-lighter)"),n()()(),t(140,"tr")(141,"td")(142,"strong"),e(143,"Focused"),n()(),i(144,"td")(145,"td"),n(),t(146,"tr")(147,"td")(148,"code"),e(149,"--outline-color-focused"),n()(),t(150,"td"),e(151,"Cor do outline do estado de focus"),n(),t(152,"td")(153,"code"),e(154,"var(--color-action-focus)"),n()()(),t(155,"tr")(156,"td")(157,"strong"),e(158,"Disabled"),n()(),i(159,"td")(160,"td"),n(),t(161,"tr")(162,"td")(163,"code"),e(164,"--color-disabled"),n()(),t(165,"td"),e(166,"Cor principal no estado disabled"),n(),t(167,"td")(168,"code"),e(169,"var(--color-neutral-mid-40)"),n()()(),t(170,"tr")(171,"td")(172,"strong"),e(173,"Headline"),n()(),i(174,"td")(175,"td"),n(),t(176,"tr")(177,"td")(178,"code"),e(179,"--background-color-headline"),n(),e(180," \xA0"),n(),t(181,"td"),e(182,"Cor do cabe\xE7alho"),n(),t(183,"td")(184,"code"),e(185,"var(--color-neutral-light-10)"),n()()(),t(186,"tr")(187,"td")(188,"code"),e(189,"--font-weight-headline"),n()(),t(190,"td"),e(191,"Peso da fonte do cabe\xE7alho"),n(),t(192,"td")(193,"code"),e(194,"var(--font-weight-bold)"),n()()(),t(195,"tr")(196,"td")(197,"strong"),e(198,"Selected"),n()(),i(199,"td")(200,"td"),n(),t(201,"tr")(202,"td")(203,"code"),e(204,"--background-color-selected"),n(),e(205,"\xA0"),n(),t(206,"td"),e(207,"Cor de background no estado de selecionado"),n(),t(208,"td")(209,"code"),e(210,"var(--color-brand-01-lightest)"),n()()(),t(211,"tr")(212,"td")(213,"strong"),e(214,"Actived"),n()(),i(215,"td")(216,"td"),n(),t(217,"tr")(218,"td")(219,"code"),e(220,"--color-actived"),n()(),t(221,"td"),e(222,"Cor do texto no estado de selecionado"),n(),t(223,"td")(224,"code"),e(225,"var(--color-neutral-dark-90)"),n()()(),t(226,"tr")(227,"td")(228,"code"),e(229,"--background-color-actived"),n()(),t(230,"td"),e(231,"Cor de background no estado de selecionado"),n(),t(232,"td")(233,"code"),e(234,"var(--color-brand-01-light)"),n()()()()()(),t(235,"div",10)(236,"h4",11),e(237,"Seletor"),n(),t(238,"pre",12),e(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-fixed-columns)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    (p-search-ai-error)="EventEmitter"
    p-search-ai-field="PoTableSearchAiField"
    (p-search-ai-low-confidence)="EventEmitter"
    (p-search-ai-result)="EventEmitter"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="string"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),n()(),t(240,"h4",13),e(241,"Propriedades"),n(),t(242,"table",14)(243,"tr",15)(244,"th",16),e(245,"Nome"),n(),t(246,"th",16),e(247,"Tipo"),n(),t(248,"th",16),e(249,"Padr\xE3o"),n(),t(250,"th",16),e(251,"Descri\xE7\xE3o"),n()(),t(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),e(256," p-actions-right"),i(257,"br"),n()()(),t(258,"td",21)(259,"code",22),e(260,"boolean"),n()(),t(261,"td",23)(262,"p")(263,"code"),e(264,"false"),n()()(),t(265,"td",24)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),n()()(),t(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),e(275," p-actions"),i(276,"br"),n()()(),t(277,"td",21)(278,"code",25),e(279,"PoTableAction[]"),n()(),t(280,"td",23),e(281,"-"),n(),t(282,"td",24)(283,"em")(284,"strong"),e(285,"(opcional)"),n()(),t(286,"p"),e(287,"Define uma lista de a\xE7\xF5es."),n(),t(288,"p"),e(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),t(290,"a",26)(291,"strong"),e(292,"an an-dots-three"),n()(),e(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),n(),t(294,"p")(295,"strong"),e(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),n()(),t(297,"ul")(298,"li"),e(299,"a lista conter valores inv\xE1lidos ou indefinidos."),n(),t(300,"li"),e(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),n()()()(),t(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),e(306," (p-all-selected)"),i(307,"br"),n()()(),t(308,"td",21)(309,"code",29),e(310,"EventEmitter"),n()(),t(311,"td",23),e(312,"-"),n(),t(313,"td",24)(314,"em")(315,"strong"),e(316,"(opcional)"),n()(),t(317,"p"),e(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),t(319,"em"),e(320,"checkbox"),n(),e(321," que seleciona todas as linhas."),n()()(),t(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),e(326," (p-all-unselected)"),i(327,"br"),n()()(),t(328,"td",21)(329,"code",29),e(330,"EventEmitter"),n()(),t(331,"td",23),e(332,"-"),n(),t(333,"td",24)(334,"em")(335,"strong"),e(336,"(opcional)"),n()(),t(337,"p"),e(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),t(339,"em"),e(340,"checkbox"),n(),e(341," que seleciona todas as linhas."),n()()(),t(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),e(346," p-auto-collapse"),i(347,"br"),n()()(),t(348,"td",21)(349,"code",22),e(350,"boolean"),n()(),t(351,"td",23)(352,"p")(353,"code"),e(354,"false"),n()()(),t(355,"td",24)(356,"em")(357,"strong"),e(358,"(opcional)"),n()(),t(359,"p"),e(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),n()()(),t(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),e(365," (p-change-fixed-columns)"),i(366,"br"),n()()(),t(367,"td",21)(368,"code",29),e(369,"EventEmitter"),n()(),t(370,"td",23),e(371,"-"),n(),t(372,"td",24)(373,"em")(374,"strong"),e(375,"(opcional)"),n()(),t(376,"p"),e(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),n(),t(378,"p"),e(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),n(),t(380,"blockquote")(381,"p"),e(382,"Incompat\xEDvel com "),t(383,"code"),e(384,"p-hide-action-fixed-columns"),n(),e(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),n()()()(),t(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),e(390," (p-change-visible-columns)"),i(391,"br"),n()()(),t(392,"td",21)(393,"code",29),e(394,"EventEmitter"),n()(),t(395,"td",23),e(396,"-"),n(),t(397,"td",24)(398,"em")(399,"strong"),e(400,"(opcional)"),n()(),t(401,"p"),e(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),n(),t(403,"p"),e(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),e(409," (p-collapsed)"),i(410,"br"),n()()(),t(411,"td",21)(412,"code",29),e(413,"EventEmitter"),n()(),t(414,"td",23),e(415,"-"),n(),t(416,"td",24)(417,"em")(418,"strong"),e(419,"(opcional)"),n()(),t(420,"p"),e(421,"Evento executado ao colapsar uma linha do "),t(422,"code"),e(423,"po-table"),n(),e(424,"."),n(),t(425,"blockquote")(426,"p"),e(427,"Como par\xE2metro o componente envia o item colapsado."),n()()()(),t(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),e(432," (p-restore-column-manager)"),i(433,"br"),n()()(),t(434,"td",21)(435,"code",29),e(436,"EventEmitter"),n()(),t(437,"td",23),e(438,"-"),n(),t(439,"td",24)(440,"em")(441,"strong"),e(442,"(opcional)"),n()(),t(443,"p"),e(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),n(),t(445,"p"),e(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),e(451," p-columns"),i(452,"br"),n()()(),t(453,"td",21)(454,"code",30),e(455,"PoTableColumn[]"),n()(),t(456,"td",23),e(457,"-"),n(),t(458,"td",24)(459,"em")(460,"strong"),e(461,"(opcional)"),n()(),t(462,"p"),e(463,"Lista das colunas da tabela, deve receber um "),t(464,"em"),e(465,"array"),n(),e(466," de objetos que implementam a interface "),t(467,"code"),e(468,"PoTableColumn"),n(),e(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),n(),t(470,"blockquote")(471,"p"),e(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),n()()()(),t(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),e(477," p-components-size"),i(478,"br"),n()()(),t(479,"td",21)(480,"code",31),e(481,"string"),n()(),t(482,"td",23)(483,"p")(484,"code"),e(485,"medium"),n()()(),t(486,"td",24)(487,"em")(488,"strong"),e(489,"(opcional)"),n()(),t(490,"p"),e(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),n(),t(492,"ul")(493,"li")(494,"code"),e(495,"small"),n(),e(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(497,"li")(498,"code"),e(499,"medium"),n(),e(500,": aplica a medida medium de cada componente."),n()(),t(501,"blockquote")(502,"p"),e(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(504,"code"),e(505,"medium"),n(),e(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(507,"a",32),e(508,"po-theme"),n(),e(509,"."),n()()()(),t(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),e(514," p-container"),i(515,"br"),n()()(),t(516,"td",21)(517,"code",31),e(518,"string"),n()(),t(519,"td",23)(520,"p")(521,"code"),e(522,"border"),n()()(),t(523,"td",24)(524,"em")(525,"strong"),e(526,"(opcional)"),n()(),t(527,"p"),e(528,"Adiciona um contorno arredondado ao "),t(529,"code"),e(530,"po-table"),n(),e(531,", as op\xE7\xF5es s\xE3o:"),n(),t(532,"ul")(533,"li")(534,"code"),e(535,"border"),n(),e(536,": com bordas/linhas."),n(),t(537,"li")(538,"code"),e(539,"shadow"),n(),e(540,": com sombras."),n()()()(),t(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),e(545," p-draggable"),i(546,"br"),n()()(),t(547,"td",21)(548,"code",22),e(549,"boolean"),n()(),t(550,"td",23)(551,"p")(552,"code"),e(553,"false"),n()()(),t(554,"td",24)(555,"em")(556,"strong"),e(557,"(opcional)"),n()(),t(558,"p"),e(559,"Habilita o modo drag and drop para as colunas da tabela."),n()()(),t(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),e(564," (p-delete-items)"),i(565,"br"),n()()(),t(566,"td",21)(567,"code",29),e(568,"EventEmitter"),n()(),t(569,"td",23),e(570,"-"),n(),t(571,"td",24)(572,"em")(573,"strong"),e(574,"(opcional)"),n()(),t(575,"p"),e(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),n(),t(577,"pre")(578,"code"),e(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()(),t(580,"blockquote")(581,"p"),e(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),n()()()(),t(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),e(587," (p-expanded)"),i(588,"br"),n()()(),t(589,"td",21)(590,"code",29),e(591,"EventEmitter"),n()(),t(592,"td",23),e(593,"-"),n(),t(594,"td",24)(595,"em")(596,"strong"),e(597,"(opcional)"),n()(),t(598,"p"),e(599,"Evento executado ao expandir uma linha do "),t(600,"code"),e(601,"po-table"),n(),e(602,"."),n(),t(603,"blockquote")(604,"p"),e(605,"Como par\xE2metro o componente envia o item expandido."),n()()()(),t(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),e(610," p-filter-type"),i(611,"br"),n()()(),t(612,"td",21)(613,"code",33),e(614,"PoSearchFilterMode"),n()(),t(615,"td",23)(616,"p")(617,"code"),e(618,"startsWith"),n()()(),t(619,"td",24)(620,"em")(621,"strong"),e(622,"(opcional)"),n()(),t(623,"p"),e(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),n(),t(625,"blockquote")(626,"p"),e(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),n()()()(),t(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),e(632," p-filtered-columns"),i(633,"br"),n()()(),t(634,"td",21)(635,"code",34),e(636,"Array<string>"),n()(),t(637,"td",23),e(638,"-"),n(),t(639,"td",24)(640,"em")(641,"strong"),e(642,"(opcional)"),n()(),t(643,"p"),e(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),n()()(),t(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),e(649," p-height"),i(650,"br"),n()()(),t(651,"td",21)(652,"code",35),e(653,"number"),n()(),t(654,"td",23),e(655,"-"),n(),t(656,"td",24)(657,"em")(658,"strong"),e(659,"(opcional)"),n()(),t(660,"p"),e(661,"Define a altura da tabela em "),t(662,"em"),e(663,"pixels"),n(),e(664," e fixa o cabe\xE7alho."),n(),t(665,"p"),e(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),t(667,"code"),e(668,"virtual-scroll"),n(),e(669," na tabela melhorando a performance."),n()()(),t(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),e(674," p-hide-action-fixed-columns"),i(675,"br"),n()()(),t(676,"td",21)(677,"code",22),e(678,"boolean"),n()(),t(679,"td",23)(680,"p")(681,"code"),e(682,"false"),n()()(),t(683,"td",24)(684,"em")(685,"strong"),e(686,"(opcional)"),n()(),t(687,"p"),e(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),n()()(),t(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),e(693," p-hide-batch-actions"),i(694,"br"),n()()(),t(695,"td",21)(696,"code",22),e(697,"boolean"),n()(),t(698,"td",23)(699,"p")(700,"code"),e(701,"true"),n()()(),t(702,"td",24)(703,"em")(704,"strong"),e(705,"(opcional)"),n()(),t(706,"p"),e(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),n()()(),t(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),e(712," p-hide-columns-manager"),i(713,"br"),n()()(),t(714,"td",21)(715,"code",22),e(716,"boolean"),n()(),t(717,"td",23)(718,"p")(719,"code"),e(720,"false"),n()()(),t(721,"td",24)(722,"em")(723,"strong"),e(724,"(opcional)"),n()(),t(725,"p"),e(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),n()()(),t(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),e(731," p-hide-detail"),i(732,"br"),n()()(),t(733,"td",21)(734,"code",22),e(735,"boolean"),n()(),t(736,"td",23)(737,"p")(738,"code"),e(739,"false"),n()()(),t(740,"td",24)(741,"em")(742,"strong"),e(743,"(opcional)"),n()(),t(744,"p"),e(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),n()()(),t(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),e(750," p-hide-select-all"),i(751,"br"),n()()(),t(752,"td",21)(753,"code",22),e(754,"boolean"),n()(),t(755,"td",23)(756,"p")(757,"code"),e(758,"false"),n()()(),t(759,"td",24)(760,"p"),e(761,"Esconde o "),t(762,"em"),e(763,"checkbox"),n(),e(764," para sele\xE7\xE3o de todas as linhas."),n(),t(765,"blockquote")(766,"p"),e(767,"Sempre receber\xE1 "),t(768,"em"),e(769,"true"),n(),e(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),n()()()(),t(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),e(775," p-hide-table-search"),i(776,"br"),n()()(),t(777,"td",21)(778,"code",22),e(779,"boolean"),n()(),t(780,"td",23)(781,"p")(782,"code"),e(783,"true"),n()()(),t(784,"td",24)(785,"em")(786,"strong"),e(787,"(opcional)"),n()(),t(788,"p"),e(789,"Permite que o campo de pesquisa seja escondido."),n()()(),t(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),e(794," p-infinite-scroll"),i(795,"br"),n()()(),t(796,"td",21)(797,"code",22),e(798,"boolean"),n()(),t(799,"td",23)(800,"p")(801,"code"),e(802,"false"),n()()(),t(803,"td",24)(804,"em")(805,"strong"),e(806,"(opcional)"),n()(),t(807,"p"),e(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),t(809,"code"),e(810,"p-show-more"),n(),e(811,"."),n(),t(812,"p")(813,"strong"),e(814,"Regras de utiliza\xE7\xE3o:"),n()(),t(815,"ul")(816,"li"),e(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),t(818,"code"),e(819,"p-height"),n(),e(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),n()()()(),t(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),e(825," p-infinite-scroll-distance"),i(826,"br"),n()()(),t(827,"td",21)(828,"code",35),e(829,"number"),n()(),t(830,"td",23),e(831,"-"),n(),t(832,"td",24)(833,"em")(834,"strong"),e(835,"(opcional)"),n()(),t(836,"p"),e(837,"Define o percentual necess\xE1rio para disparar o evento "),t(838,"code"),e(839,"p-show-more"),n(),e(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),n(),t(841,"p")(842,"strong"),e(843,"Exemplos:"),n()(),t(844,"ul")(845,"li"),e(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),t(847,"code"),e(848,"p-show-more"),n(),e(849," ser\xE1 disparado."),n()()()(),t(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),e(854," p-items"),i(855,"br"),n()()(),t(856,"td",21)(857,"code",36),e(858,"any[]"),n()(),t(859,"td",23),e(860,"-"),n(),t(861,"td",24)(862,"p"),e(863,"Lista de itens da tabela."),n(),t(864,"blockquote")(865,"p"),e(866,"Se falso, ser\xE1 inicializado como um "),t(867,"em"),e(868,"array"),n(),e(869," vazio."),n()()()(),t(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),e(874," p-literals"),i(875,"br"),n()()(),t(876,"td",21)(877,"code",37),e(878,"PoTableLiterals"),n()(),t(879,"td",23),e(880,"-"),n(),t(881,"td",24)(882,"em")(883,"strong"),e(884,"(opcional)"),n()(),t(885,"p"),e(886,"Objeto com as literais usadas no "),t(887,"code"),e(888,"po-table"),n(),e(889,"."),n(),t(890,"p"),e(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(892,"pre")(893,"code"),e(894,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),n()(),t(895,"p"),e(896,"Ou passando apenas as literais que deseja customizar:"),n(),t(897,"pre")(898,"code"),e(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),n()(),t(900,"p"),e(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(902,"pre")(903,"code"),e(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),n()(),t(905,"blockquote")(906,"p"),e(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(908,"a",38)(909,"code"),e(910,"PoI18nService"),n()(),e(911," ou do browser."),n()()()(),t(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),e(916," p-loading"),i(917,"br"),n()()(),t(918,"td",21)(919,"code",22),e(920,"boolean"),n()(),t(921,"td",23)(922,"p")(923,"code"),e(924,"false"),n()()(),t(925,"td",24)(926,"em")(927,"strong"),e(928,"(opcional)"),n()(),t(929,"p"),e(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),t(931,"em"),e(932,"table"),n(),e(933,"."),n()()(),t(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),e(938," p-loading-show-more"),i(939,"br"),n()()(),t(940,"td",21)(941,"code",22),e(942,"boolean"),n()(),t(943,"td",23)(944,"p")(945,"code"),e(946,"false"),n()()(),t(947,"td",24)(948,"em")(949,"strong"),e(950,"(opcional)"),n()(),t(951,"p"),e(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),n()()(),t(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),e(957," p-max-columns"),i(958,"br"),n()()(),t(959,"td",21)(960,"code",35),e(961,"number"),n()(),t(962,"td",23),e(963,"-"),n(),t(964,"td",24)(965,"em")(966,"strong"),e(967,"(opcional)"),n()(),t(968,"p"),e(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),n(),t(970,"p"),e(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),n()()(),t(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),e(976," p-param-delete-api"),i(977,"br"),n()()(),t(978,"td",21)(979,"code",31),e(980,"string"),n()(),t(981,"td",23)(982,"p")(983,"code"),e(984,"id"),n()()(),t(985,"td",24)(986,"em")(987,"strong"),e(988,"(opcional)"),n()(),t(989,"p"),e(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),n(),t(991,"p"),e(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),t(993,"code"),e(994,"p-service-delete"),n(),e(995," em conjunto."),n()()(),t(996,"tr",17)(997,"td",18)(998,"div",27)(999,"span",28),e(1e3," (p-search-ai-error)"),i(1001,"br"),n()()(),t(1002,"td",21)(1003,"code",29),e(1004,"EventEmitter"),n()(),t(1005,"td",23),e(1006,"-"),n(),t(1007,"td",24)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),n()(),t(1011,"p"),e(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),t(1013,"code"),e(1014,"p-search-ai-field"),n(),e(1015,"."),n(),t(1016,"p"),e(1017,"O par\xE2metro enviado \xE9 um objeto "),t(1018,"code"),e(1019,"PoSearchAiError"),n(),e(1020," contendo:"),n(),t(1021,"ul")(1022,"li")(1023,"code"),e(1024,"statusCode"),n(),e(1025,": c\xF3digo HTTP do erro (ex: "),t(1026,"code"),e(1027,"408"),n(),e(1028," para timeout, "),t(1029,"code"),e(1030,"500"),n(),e(1031," para erro interno)."),n(),t(1032,"li")(1033,"code"),e(1034,"message"),n(),e(1035,": mensagem descritiva do erro."),n()()()(),t(1036,"tr",17)(1037,"td",18)(1038,"div",19)(1039,"span",20),e(1040," p-search-ai-field"),i(1041,"br"),n()()(),t(1042,"td",21)(1043,"code",39),e(1044,"PoTableSearchAiField"),n()(),t(1045,"td",23),e(1046,"-"),n(),t(1047,"td",24)(1048,"em")(1049,"strong"),e(1050,"(opcional)"),n()(),t(1051,"p"),e(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),t(1053,"code"),e(1054,"po-search"),n(),e(1055,") pelo componente "),t(1056,"code"),e(1057,"po-search-ai"),n(),e(1058," na barra de a\xE7\xF5es."),n(),t(1059,"p"),e(1060,"Recebe um objeto do tipo "),t(1061,"code"),e(1062,"PoTableSearchAiField"),n(),e(1063," com as configura\xE7\xF5es necess\xE1rias:"),n(),t(1064,"ul")(1065,"li")(1066,"code"),e(1067,"url"),n(),t(1068,"em"),e(1069,"(obrigat\xF3rio)"),n(),e(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),t(1071,"a",40)(1072,"code"),e(1073,"po-sample-api"),n()(),e(1074,"."),n(),t(1075,"li")(1076,"code"),e(1077,"columns"),n(),e(1078,": lista de colunas enviadas \xE0 IA; quando omitida, s\xE3o derivadas de "),t(1079,"code"),e(1080,"p-columns"),n(),e(1081,"."),n(),t(1082,"li")(1083,"code"),e(1084,"minConfidence"),n(),e(1085,": confian\xE7a m\xEDnima para aplica\xE7\xE3o autom\xE1tica do filtro (padr\xE3o "),t(1086,"code"),e(1087,"0.5"),n(),e(1088,")."),n(),t(1089,"li")(1090,"code"),e(1091,"timeout"),n(),e(1092,": tempo m\xE1ximo de espera pela resposta da IA em ms (padr\xE3o "),t(1093,"code"),e(1094,"10000"),n(),e(1095,")."),n(),t(1096,"li")(1097,"code"),e(1098,"placeholder"),n(),e(1099,": texto exibido como placeholder no campo."),n(),t(1100,"li")(1101,"code"),e(1102,"literals"),n(),e(1103,": literais customizadas do "),t(1104,"code"),e(1105,"po-search-ai"),n(),e(1106,"."),n(),t(1107,"li")(1108,"code"),e(1109,"apply"),n(),e(1110,": estrat\xE9gia de aplica\xE7\xE3o do filtro \u2014 "),t(1111,"code"),e(1112,"'auto'"),n(),e(1113," (padr\xE3o), "),t(1114,"code"),e(1115,"'parser'"),n(),e(1116,", "),t(1117,"code"),e(1118,"'server'"),n(),e(1119,", "),t(1120,"code"),e(1121,"'none'"),n(),e(1122,`
ou uma fun\xE7\xE3o `),t(1123,"code"),e(1124,"(result: PoSearchAiResult) => void"),n(),e(1125,"."),n()(),t(1126,"p"),e(1127,"Quando esta propriedade est\xE1 definida, os eventos "),t(1128,"code"),e(1129,"p-search-ai-result"),n(),e(1130,", "),t(1131,"code"),e(1132,"p-search-ai-low-confidence"),n(),e(1133,`
e `),t(1134,"code"),e(1135,"p-search-ai-error"),n(),e(1136," ficam dispon\xEDveis para tratamento customizado."),n()()(),t(1137,"tr",17)(1138,"td",18)(1139,"div",27)(1140,"span",28),e(1141," (p-search-ai-low-confidence)"),i(1142,"br"),n()()(),t(1143,"td",21)(1144,"code",29),e(1145,"EventEmitter"),n()(),t(1146,"td",23),e(1147,"-"),n(),t(1148,"td",24)(1149,"em")(1150,"strong"),e(1151,"(opcional)"),n()(),t(1152,"p"),e(1153,"Evento emitido quando o "),t(1154,"code"),e(1155,"po-search-ai"),n(),e(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),t(1157,"code"),e(1158,"minConfidence"),n(),e(1159," configurado em "),t(1160,"code"),e(1161,"p-search-ai-field"),n(),e(1162,". Nesse caso, o filtro "),t(1163,"strong"),e(1164,"n\xE3o"),n(),e(1165,` \xE9 aplicado
automaticamente.`),n(),t(1166,"p"),e(1167,"O par\xE2metro enviado \xE9 um objeto "),t(1168,"code"),e(1169,"PoSearchAiResult"),n(),e(1170," com os mesmos campos de "),t(1171,"code"),e(1172,"p-search-ai-result"),n(),e(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),n()()(),t(1174,"tr",17)(1175,"td",18)(1176,"div",27)(1177,"span",28),e(1178," (p-search-ai-result)"),i(1179,"br"),n()()(),t(1180,"td",21)(1181,"code",29),e(1182,"EventEmitter"),n()(),t(1183,"td",23),e(1184,"-"),n(),t(1185,"td",24)(1186,"em")(1187,"strong"),e(1188,"(opcional)"),n()(),t(1189,"p"),e(1190,"Evento emitido quando o "),t(1191,"code"),e(1192,"po-search-ai"),n(),e(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),t(1194,"code"),e(1195,"minConfidence"),n(),e(1196," configurado em "),t(1197,"code"),e(1198,"p-search-ai-field"),n(),e(1199,"."),n(),t(1200,"p"),e(1201,"O par\xE2metro enviado \xE9 um objeto "),t(1202,"code"),e(1203,"PoSearchAiResult"),n(),e(1204," contendo:"),n(),t(1205,"ul")(1206,"li")(1207,"code"),e(1208,"filter"),n(),e(1209,": string de filtro OData v4 gerada pela IA (ex: "),t(1210,"code"),e(1211,`"city eq 'SP' and salary gt 5000"`),n(),e(1212,")."),n(),t(1213,"li")(1214,"code"),e(1215,"description"),n(),e(1216,": descri\xE7\xE3o em linguagem natural do filtro aplicado."),n(),t(1217,"li")(1218,"code"),e(1219,"confidence"),n(),e(1220,": n\xEDvel de confian\xE7a da resposta (0.0 a 1.0)."),n()(),t(1221,"blockquote")(1222,"p"),e(1223,"Quando "),t(1224,"code"),e(1225,"apply"),n(),e(1226," for diferente de "),t(1227,"code"),e(1228,"'none'"),n(),e(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),n()()()(),t(1230,"tr",17)(1231,"td",18)(1232,"div",19)(1233,"span",20),e(1234," p-selectable"),i(1235,"br"),n()()(),t(1236,"td",21)(1237,"code",22),e(1238,"boolean"),n()(),t(1239,"td",23)(1240,"p")(1241,"code"),e(1242,"false"),n()()(),t(1243,"td",24)(1244,"em")(1245,"strong"),e(1246,"(opcional)"),n()(),t(1247,"p"),e(1248,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),t(1249,"code"),e(1250,"p-single-select"),n(),e(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),n(),t(1252,"p")(1253,"strong"),e(1254,"Importante:"),n()(),t(1255,"ul")(1256,"li"),e(1257,"As linhas de detalhe definidas em "),t(1258,"code"),e(1259,"PoTableDetail"),n(),e(1260," possuem comportamento independente da linha mestre;"),n(),t(1261,"li"),e(1262,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),t(1263,"code"),e(1264,"$selected"),n(),e(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),t(1266,"code"),e(1267,"item.$selected"),n(),e(1268," ou "),t(1269,"code"),e(1270,"item['$selected']"),n(),e(1271,"."),n()()()(),t(1272,"tr",17)(1273,"td",18)(1274,"div",19)(1275,"span",20),e(1276," p-selectable-entire-line"),i(1277,"br"),n()()(),t(1278,"td",21)(1279,"code",22),e(1280,"boolean"),n()(),t(1281,"td",23)(1282,"p")(1283,"code"),e(1284,"true"),n()()(),t(1285,"td",24)(1286,"p"),e(1287,"Permite selecionar um item da tabela clicando na linha."),n(),t(1288,"blockquote")(1289,"p"),e(1290,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),t(1291,"code"),e(1292,"false"),n(),e(1293,"."),n()()()(),t(1294,"tr",17)(1295,"td",18)(1296,"div",27)(1297,"span",28),e(1298," (p-selected)"),i(1299,"br"),n()()(),t(1300,"td",21)(1301,"code",29),e(1302,"EventEmitter"),n()(),t(1303,"td",23),e(1304,"-"),n(),t(1305,"td",24)(1306,"em")(1307,"strong"),e(1308,"(opcional)"),n()(),t(1309,"p"),e(1310,"Evento executado ao selecionar uma linha do "),t(1311,"code"),e(1312,"po-table"),n(),e(1313,"."),n()()(),t(1314,"tr",17)(1315,"td",18)(1316,"div",19)(1317,"span",20),e(1318," p-service-api"),i(1319,"br"),n()()(),t(1320,"td",21)(1321,"code",31),e(1322,"string"),n()(),t(1323,"td",23),e(1324,"-"),n(),t(1325,"td",24)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),n()(),t(1329,"p"),e(1330,"URL da API respons\xE1vel por retornar os registros."),n(),t(1331,"p"),e(1332,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),t(1333,"code"),e(1334,"page"),n(),e(1335," e "),t(1336,"code"),e(1337,"pageSize"),n(),e(1338,", conforme abaixo:"),n(),t(1339,"pre")(1340,"code"),e(1341,`url + ?page=1&pageSize=10
`),n()(),t(1342,"p"),e(1343,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),t(1344,"code"),e(1345,"order"),n(),e(1346,", por exemplo:"),n(),t(1347,"ul")(1348,"li")(1349,"p"),e(1350,"Coluna decrescente:"),n(),t(1351,"pre")(1352,"code"),e(1353,`url + ?page=1&pageSize=10&order=-name
`),n()()(),t(1354,"li")(1355,"p"),e(1356,"Coluna ascendente:"),n(),t(1357,"pre")(1358,"code"),e(1359,`url + ?page=1&pageSize=10&order=name
`),n()()()(),t(1360,"blockquote")(1361,"p"),e(1362,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1363,"a",41),e(1364,"API do PO UI"),n(),e(1365,"."),n()()()(),t(1366,"tr",17)(1367,"td",18)(1368,"div",19)(1369,"span",20),e(1370," p-service-delete"),i(1371,"br"),n()()(),t(1372,"td",21)(1373,"code",31),e(1374,"string"),n()(),t(1375,"td",23),e(1376,"-"),n(),t(1377,"td",24)(1378,"em")(1379,"strong"),e(1380,"(opcional)"),n()(),t(1381,"p"),e(1382,"URL da API respons\xE1vel por excluir os registros."),n(),t(1383,"p"),e(1384,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),t(1385,"code"),e(1386,"p-param-delete-api"),n(),e(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),t(1388,"code"),e(1389,"id"),n(),e(1390,"."),n(),t(1391,"blockquote")(1392,"p"),e(1393,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1394,"a",41),e(1395,"API do PO UI"),n(),e(1396,"."),n()()()(),t(1397,"tr",17)(1398,"td",18)(1399,"div",27)(1400,"span",28),e(1401," (p-show-more)"),i(1402,"br"),n()()(),t(1403,"td",21)(1404,"code",29),e(1405,"EventEmitter"),n()(),t(1406,"td",23),e(1407,"-"),n(),t(1408,"td",24)(1409,"em")(1410,"strong"),e(1411,"(opcional)"),n()(),t(1412,"p"),e(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),n(),t(1414,"p"),e(1415,"Recebe um objeto "),t(1416,"code"),e(1417,"{ column, type }"),n(),e(1418," onde:"),n(),t(1419,"ul")(1420,"li"),e(1421,"column ("),t(1422,"code"),e(1423,"PoTableColumn"),n(),e(1424,"): objeto da coluna que est\xE1 ordenada."),n(),t(1425,"li"),e(1426,"type ("),t(1427,"code"),e(1428,"PoTableColumnSortType"),n(),e(1429,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1430,"tr",17)(1431,"td",18)(1432,"div",19)(1433,"span",20),e(1434," p-show-more-disabled"),i(1435,"br"),n()()(),t(1436,"td",21)(1437,"code",22),e(1438,"boolean"),n()(),t(1439,"td",23)(1440,"p")(1441,"code"),e(1442,"false"),n()()(),t(1443,"td",24)(1444,"p"),e(1445,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),n()()(),t(1446,"tr",17)(1447,"td",18)(1448,"div",19)(1449,"span",20),e(1450," p-single-select"),i(1451,"br"),n()()(),t(1452,"td",21)(1453,"code",22),e(1454,"boolean"),n()(),t(1455,"td",23),e(1456,"-"),n(),t(1457,"td",24)(1458,"p"),e(1459,"Define que somente uma linha da tabela pode ser selecionada."),n(),t(1460,"blockquote")(1461,"p"),e(1462,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),n()()()(),t(1463,"tr",17)(1464,"td",18)(1465,"div",19)(1466,"span",20),e(1467," p-sort"),i(1468,"br"),n()()(),t(1469,"td",21)(1470,"code",22),e(1471,"boolean"),n()(),t(1472,"td",23)(1473,"p")(1474,"code"),e(1475,"false"),n()()(),t(1476,"td",24)(1477,"em")(1478,"strong"),e(1479,"(opcional)"),n()(),t(1480,"p"),e(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),n()()(),t(1482,"tr",17)(1483,"td",18)(1484,"div",27)(1485,"span",28),e(1486," (p-sort-by)"),i(1487,"br"),n()()(),t(1488,"td",21)(1489,"code",29),e(1490,"EventEmitter"),n()(),t(1491,"td",23),e(1492,"-"),n(),t(1493,"td",24)(1494,"em")(1495,"strong"),e(1496,"(opcional)"),n()(),t(1497,"p"),e(1498,"Evento executado ao ordenar colunas da tabela."),n(),t(1499,"p"),e(1500,"Recebe um objeto "),t(1501,"code"),e(1502,"{ column, type }"),n(),e(1503," onde:"),n(),t(1504,"ul")(1505,"li"),e(1506,"column ("),t(1507,"code"),e(1508,"PoTableColumn"),n(),e(1509,"): objeto da coluna que foi clicada/ordenada."),n(),t(1510,"li"),e(1511,"type ("),t(1512,"code"),e(1513,"PoTableColumnSortType"),n(),e(1514,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1515,"tr",17)(1516,"td",18)(1517,"div",19)(1518,"span",20),e(1519," p-spacing"),i(1520,"br"),n()()(),t(1521,"td",21)(1522,"code",31),e(1523,"string"),n()(),t(1524,"td",23)(1525,"p")(1526,"code"),e(1527,"medium"),n()()(),t(1528,"td",24)(1529,"em")(1530,"strong"),e(1531,"(opcional)"),n()(),t(1532,"p"),e(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),t(1534,"strong"),e(1535,"PoTableColumnSpacing"),n(),e(1536,"."),n(),t(1537,"blockquote")(1538,"p"),e(1539,"Em n\xEDvel de acessibilidade "),t(1540,"strong"),e(1541,"AA"),n(),e(1542,", caso o valor de "),t(1543,"code"),e(1544,"p-spacing"),n(),e(1545," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),t(1546,"code"),e(1547,"extraSmall"),n(),e(1548,`
nos seguintes cen\xE1rios:`),n(),t(1549,"ul")(1550,"li"),e(1551,"Quando o valor de "),t(1552,"code"),e(1553,"p-components-size"),n(),e(1554," for "),t(1555,"code"),e(1556,"small"),n(),e(1557,";"),n(),t(1558,"li"),e(1559,"Quando o valor padr\xE3o dos componentes for configurado como "),t(1560,"code"),e(1561,"small"),n(),e(1562,` no
`),t(1563,"a",32),e(1564,"servi\xE7o de tema"),n(),e(1565,"."),n()()()()(),t(1566,"tr",17)(1567,"td",18)(1568,"div",19)(1569,"span",20),e(1570," p-striped"),i(1571,"br"),n()()(),t(1572,"td",21)(1573,"code",22),e(1574,"boolean"),n()(),t(1575,"td",23)(1576,"p")(1577,"code"),e(1578,"false"),n()()(),t(1579,"td",24)(1580,"p"),e(1581,"Habilita ou desabilita o estilo listrado da tabela ("),t(1582,"code"),e(1583,"striped"),n(),e(1584,")."),n(),t(1585,"blockquote")(1586,"p"),e(1587,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),n()()()(),t(1588,"tr",17)(1589,"td",18)(1590,"div",19)(1591,"span",20),e(1592," p-text-wrap"),i(1593,"br"),n()()(),t(1594,"td",21)(1595,"code",22),e(1596,"boolean"),n()(),t(1597,"td",23)(1598,"p")(1599,"code"),e(1600,"false"),n()()(),t(1601,"td",24)(1602,"em")(1603,"strong"),e(1604,"(opcional)"),n()(),t(1605,"p"),e(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n(),t(1607,"blockquote")(1608,"p"),e(1609,"Incompat\xEDvel com "),t(1610,"code"),e(1611,"virtual-scroll"),n(),e(1612,", que requer altura fixa nas linhas."),n()()()(),t(1613,"tr",17)(1614,"td",18)(1615,"div",27)(1616,"span",28),e(1617," (p-unselected)"),i(1618,"br"),n()()(),t(1619,"td",21)(1620,"code",29),e(1621,"EventEmitter"),n()(),t(1622,"td",23),e(1623,"-"),n(),t(1624,"td",24)(1625,"em")(1626,"strong"),e(1627,"(opcional)"),n()(),t(1628,"p"),e(1629,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),t(1630,"code"),e(1631,"po-table"),n(),e(1632,"."),n()()(),t(1633,"tr",17)(1634,"td",18)(1635,"div",19)(1636,"span",20),e(1637," p-virtual-scroll"),i(1638,"br"),n()()(),t(1639,"td",21)(1640,"code",22),e(1641,"boolean"),n()(),t(1642,"td",23)(1643,"p")(1644,"code"),e(1645,"true"),n()()(),t(1646,"td",24)(1647,"em")(1648,"strong"),e(1649,"(opcional)"),n()(),t(1650,"p"),e(1651,"Habilita o "),t(1652,"code"),e(1653,"virtual-scroll"),n(),e(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),t(1655,"code"),e(1656,"p-height"),n(),e(1657,") para funcionar corretamente."),n(),t(1658,"blockquote")(1659,"p"),e(1660,"Incompat\xEDvel com "),t(1661,"code"),e(1662,"p-text-wrap"),n(),e(1663," e "),t(1664,"code"),e(1665,"master-detail"),n(),e(1666,", pois o "),t(1667,"code"),e(1668,"virtual-scroll"),n(),e(1669," exige altura fixa nas linhas."),n()()()()(),t(1670,"h3",13),e(1671,"M\xE9todos"),n(),t(1672,"table",42)(1673,"tr",17)(1674,"th",43)(1675,"div",19)(1676,"h4")(1677,"span",20),e(1678," applyFilters "),n()()()()(),t(1679,"tr",24)(1680,"td",24)(1681,"p"),e(1682,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),n(),t(1683,"p"),e(1684,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),n(),t(1685,"pre")(1686,"code"),e(1687,`url + ?page=1&pageSize=10
`),n()(),t(1688,"blockquote")(1689,"p"),e(1690,"Obs: os par\xE2metros "),t(1691,"code"),e(1692,"page"),n(),e(1693," e "),t(1694,"code"),e(1695,"pageSize"),n(),e(1696," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),n()(),t(1697,"p"),e(1698,"Caso sejam informados os par\xE2metros "),t(1699,"code"),e(1700,"{ name: 'JOHN', age: '23' }"),n(),e(1701,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),n(),t(1702,"pre")(1703,"code"),e(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),n()()()()(),t(1705,"h5")(1706,"b"),e(1707,"Par\xE2metros"),n()(),t(1708,"table",14)(1709,"tr",15)(1710,"th",16),e(1711,"Nome"),n(),t(1712,"th",16),e(1713,"Tipo"),n(),t(1714,"th",16),e(1715,"Descri\xE7\xE3o"),n()(),t(1716,"tr",17)(1717,"td",18),e(1718," queryParams"),n(),t(1719,"td",21)(1720,"code",44),e(1721," { key: value } "),n()(),t(1722,"td",24)(1723,"p"),e(1724,"Formato do objeto a ser enviado."),n(),t(1725,"blockquote")(1726,"p"),e(1727,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),n()()()()(),i(1728,"br"),t(1729,"table",42)(1730,"tr",17)(1731,"th",43)(1732,"div",19)(1733,"h4")(1734,"span",20),e(1735," applyFixedColumns "),n()()()()(),t(1736,"tr",24)(1737,"td",24)(1738,"p"),e(1739,"Verifica se columns possuem a propriedade width."),n()()()(),i(1740,"br"),t(1741,"table",42)(1742,"tr",17)(1743,"th",43)(1744,"div",19)(1745,"h4")(1746,"span",20),e(1747," collapse "),n()()()()(),t(1748,"tr",24)(1749,"td",24)(1750,"p"),e(1751,"M\xE9todo que colapsa uma linha com detalhe quando executada."),n()()()(),t(1752,"h5")(1753,"b"),e(1754,"Par\xE2metros"),n()(),t(1755,"table",14)(1756,"tr",15)(1757,"th",16),e(1758,"Nome"),n(),t(1759,"th",16),e(1760,"Tipo"),n(),t(1761,"th",16),e(1762,"Descri\xE7\xE3o"),n()(),t(1763,"tr",17)(1764,"td",18),e(1765," rowIndex"),n(),t(1766,"td",21)(1767,"code",45),e(1768," number "),n()(),t(1769,"td",24)(1770,"p"),e(1771,"\xCDndice da linha que ser\xE1 colapsada."),n(),t(1772,"blockquote")(1773,"p"),e(1774,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1775,"br"),t(1776,"table",42)(1777,"tr",17)(1778,"th",43)(1779,"div",19)(1780,"h4")(1781,"span",20),e(1782," expand "),n()()()()(),t(1783,"tr",24)(1784,"td",24)(1785,"p"),e(1786,"M\xE9todo que expande uma linha com detalhe quando executada."),n()()()(),t(1787,"h5")(1788,"b"),e(1789,"Par\xE2metros"),n()(),t(1790,"table",14)(1791,"tr",15)(1792,"th",16),e(1793,"Nome"),n(),t(1794,"th",16),e(1795,"Tipo"),n(),t(1796,"th",16),e(1797,"Descri\xE7\xE3o"),n()(),t(1798,"tr",17)(1799,"td",18),e(1800," rowIndex"),n(),t(1801,"td",21)(1802,"code",45),e(1803," number "),n()(),t(1804,"td",24)(1805,"p"),e(1806,"\xCDndice da linha que ser\xE1 expandida."),n(),t(1807,"blockquote")(1808,"p"),e(1809,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1810,"br"),t(1811,"table",42)(1812,"tr",17)(1813,"th",43)(1814,"div",19)(1815,"h4")(1816,"span",20),e(1817," getSelectedRows "),n()()()()(),t(1818,"tr",24)(1819,"td",24)(1820,"p"),e(1821,"Retorna as linhas do "),t(1822,"code"),e(1823,"po-table"),n(),e(1824," que est\xE3o selecionadas."),n()()()(),i(1825,"br"),t(1826,"table",42)(1827,"tr",17)(1828,"th",43)(1829,"div",19)(1830,"h4")(1831,"span",20),e(1832," getUnselectedRows "),n()()()()(),t(1833,"tr",24)(1834,"td",24)(1835,"p"),e(1836,"Retorna as linhas do "),t(1837,"code"),e(1838,"po-table"),n(),e(1839," que n\xE3o est\xE3o selecionadas."),n()()()(),i(1840,"br"),t(1841,"table",42)(1842,"tr",17)(1843,"th",43)(1844,"div",19)(1845,"h4")(1846,"span",20),e(1847," unselectRows "),n()()()()(),t(1848,"tr",24)(1849,"td",24)(1850,"p"),e(1851,"Desmarca as linhas que est\xE3o selecionadas."),n()()()(),i(1852,"br"),t(1853,"table",42)(1854,"tr",17)(1855,"th",43)(1856,"div",19)(1857,"h4")(1858,"span",20),e(1859," unselectRowItem "),n()()()()(),t(1860,"tr",24)(1861,"td",24)(1862,"p"),e(1863,"Desmarca uma linha que est\xE1 selecionada."),n()()()(),i(1864,"br"),t(1865,"table",42)(1866,"tr",17)(1867,"th",43)(1868,"div",19)(1869,"h4")(1870,"span",20),e(1871," selectRowItem "),n()()()()(),t(1872,"tr",24)(1873,"td",24)(1874,"p"),e(1875,"Seleciona uma linha do 'po-table'."),n()()()(),i(1876,"br"),t(1877,"table",42)(1878,"tr",17)(1879,"th",43)(1880,"div",19)(1881,"h4")(1882,"span",20),e(1883," deleteItems "),n()()()()(),t(1884,"tr",24)(1885,"td",24)(1886,"p"),e(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),t(1888,"code"),e(1889,"p-service-delete"),n(),e(1890,", ser\xE1 necess\xE1rio excluir 1 item por vez."),n(),t(1891,"p"),e(1892,"Ao utilizar "),t(1893,"code"),e(1894,"p-service-delete"),n(),e(1895," mas sem a propriedade "),t(1896,"code"),e(1897,"p-service-api"),n(),e(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),n(),t(1899,"p"),e(1900,"Caso a tabela utilize "),t(1901,"code"),e(1902,"p-height"),n(),e(1903," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),t(1904,"code"),e(1905,"(p-delete-items)"),n(),e(1906,", por exemplo:"),n(),t(1907,"pre")(1908,"code"),e(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()()()()(),i(1910,"br"),t(1911,"table",42)(1912,"tr",17)(1913,"th",43)(1914,"div",19)(1915,"h4")(1916,"span",20),e(1917," updateSearchAIQuery "),n()()()()(),t(1918,"tr",24)(1919,"td",24)(1920,"p"),e(1921,"Atualiza programaticamente o valor do campo de busca por IA ("),t(1922,"code"),e(1923,"po-search-ai"),n(),e(1924,`) integrado \xE0 tabela
via `),t(1925,"code"),e(1926,"p-search-ai-field"),n(),e(1927,"."),n(),t(1928,"p"),e(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),n(),t(1930,"blockquote")(1931,"p"),e(1932,"S\xF3 tem efeito quando a propriedade "),t(1933,"code"),e(1934,"p-search-ai-field"),n(),e(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),n()()()()(),t(1936,"h5")(1937,"b"),e(1938,"Par\xE2metros"),n()(),t(1939,"table",14)(1940,"tr",15)(1941,"th",16),e(1942,"Nome"),n(),t(1943,"th",16),e(1944,"Tipo"),n(),t(1945,"th",16),e(1946,"Descri\xE7\xE3o"),n()(),t(1947,"tr",17)(1948,"td",18),e(1949," value"),n(),t(1950,"td",21)(1951,"code",45),e(1952," string "),n()(),t(1953,"td",24)(1954,"p"),e(1955,"Texto da consulta a ser inserido no campo de busca por IA."),n()()(),t(1956,"tr",17)(1957,"td",18),e(1958," triggerSearch"),n(),t(1959,"td",21)(1960,"code",45),e(1961," boolean "),n()(),t(1962,"td",24)(1963,"p"),e(1964,"Quando "),t(1965,"code"),e(1966,"true"),n(),e(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),t(1968,"code"),e(1969,"false"),n(),t(1970,"em"),e(1971,"(padr\xE3o)"),n(),e(1972,", apenas preenche o campo."),n()()()(),i(1973,"br"),t(1974,"table",42)(1975,"tr",17)(1976,"th",43)(1977,"div",19)(1978,"h4")(1979,"span",20),e(1980," removeItem "),n()()()()(),t(1981,"tr",24)(1982,"td",24)(1983,"p"),e(1984,"M\xE9todo que remove um item da tabela."),n()()()(),t(1985,"h5")(1986,"b"),e(1987,"Par\xE2metros"),n()(),t(1988,"table",14)(1989,"tr",15)(1990,"th",16),e(1991,"Nome"),n(),t(1992,"th",16),e(1993,"Tipo"),n(),t(1994,"th",16),e(1995,"Descri\xE7\xE3o"),n()(),t(1996,"tr",17)(1997,"td",18),e(1998," item"),n(),t(1999,"td",21)(2e3,"code",35),e(2001," number "),n(),t(2002,"code",44),e(2003," { key: value } "),n()(),t(2004,"td",24)(2005,"p"),e(2006,"\xCDndice da linha ou o item que ser\xE1 removido."),n(),t(2007,"blockquote")(2008,"p"),e(2009,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),n()()()()(),i(2010,"br"),t(2011,"table",42)(2012,"tr",17)(2013,"th",43)(2014,"div",19)(2015,"h4")(2016,"span",20),e(2017," updateItem "),n()()()()(),t(2018,"tr",24)(2019,"td",24)(2020,"p"),e(2021,"M\xE9todo que atualiza um item da tabela."),n()()()(),t(2022,"h5")(2023,"b"),e(2024,"Par\xE2metros"),n()(),t(2025,"table",14)(2026,"tr",15)(2027,"th",16),e(2028,"Nome"),n(),t(2029,"th",16),e(2030,"Tipo"),n(),t(2031,"th",16),e(2032,"Descri\xE7\xE3o"),n()(),t(2033,"tr",17)(2034,"td",18),e(2035," item"),n(),t(2036,"td",21)(2037,"code",35),e(2038," number "),n(),t(2039,"code",44),e(2040," { key: value } "),n()(),t(2041,"td",24)(2042,"p"),e(2043,"\xCDndice da linha ou o item que ser\xE1 atualizado."),n()()(),t(2044,"tr",17)(2045,"td",18),e(2046," updatedItem"),n(),t(2047,"td",21)(2048,"code",44),e(2049," { key: value } "),n()(),t(2050,"td",24)(2051,"p"),e(2052,"Item que foi atualizado."),n(),t(2053,"blockquote")(2054,"p"),e(2055,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),n()()()()(),i(2056,"br"),t(2057,"h3"),e(2058,"Interfaces"),n(),t(2059,"h4",46)(2060,"code",5),e(2061,"PoTableAction"),n()(),t(2062,"div",2)(2063,"p"),e(2064,"Interface para lista de a\xE7\xF5es do componente. "),n()(),t(2065,"h4",13),e(2066,"Propriedades"),n(),t(2067,"table",14)(2068,"tr",15)(2069,"th",16),e(2070,"Nome"),n(),t(2071,"th",16),e(2072,"Tipo"),n(),t(2073,"th",16),e(2074,"Descri\xE7\xE3o"),n()(),t(2075,"tr",17)(2076,"td",18)(2077,"div",19)(2078,"span",20),e(2079," action"),i(2080,"br"),n()()(),t(2081,"td",21)(2082,"code",47),e(2083,"Function"),n()(),t(2084,"td",24)(2085,"em")(2086,"strong"),e(2087,"(opcional)"),n()(),t(2088,"p"),e(2089,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),n(),t(2090,"p"),e(2091,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),t(2092,"code"),e(2093,"subItems"),n(),e(2094,"."),n(),t(2095,"blockquote")(2096,"p"),e(2097,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),t(2098,"em"),e(2099,"bind"),n(),e(2100,`:
`),t(2101,"code"),e(2102,"action: this.myFunction.bind(this)"),n()()()()(),t(2103,"tr",17)(2104,"td",18)(2105,"div",19)(2106,"span",20),e(2107," disabled"),i(2108,"br"),n()()(),t(2109,"td",21)(2110,"code",22),e(2111,"boolean "),n(),t(2112,"code",47),e(2113," Function"),n()(),t(2114,"td",24)(2115,"em")(2116,"strong"),e(2117,"(opcional)"),n()(),t(2118,"p"),e(2119,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),n()()(),t(2120,"tr",17)(2121,"td",18)(2122,"div",19)(2123,"span",20),e(2124," icon"),i(2125,"br"),n()()(),t(2126,"td",21)(2127,"code",31),e(2128,"string "),n(),t(2129,"code",48),e(2130," TemplateRef<void>"),n()(),t(2131,"td",24)(2132,"em")(2133,"strong"),e(2134,"(opcional)"),n()(),t(2135,"p"),e(2136,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),n(),t(2137,"p"),e(2138,"Aceita \xEDcones da "),t(2139,"a",26),e(2140,"Biblioteca de \xEDcones"),n(),e(2141,`, fontes externas (ex: Font Awesome)
ou um `),t(2142,"code"),e(2143,"TemplateRef"),n(),e(2144," para \xEDcones customizados."),n(),t(2145,"pre")(2146,"code"),e(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),n()()()(),t(2148,"tr",17)(2149,"td",18)(2150,"div",19)(2151,"span",20),e(2152," label"),i(2153,"br"),n()()(),t(2154,"td",21)(2155,"code",31),e(2156,"string"),n()(),t(2157,"td",24)(2158,"p"),e(2159,"R\xF3tulo da a\xE7\xE3o."),n(),t(2160,"p"),e(2161,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),t(2162,"code"),e(2163,"subItems"),n(),e(2164,"."),n()()(),t(2165,"tr",17)(2166,"td",18)(2167,"div",19)(2168,"span",20),e(2169," selected"),i(2170,"br"),n()()(),t(2171,"td",21)(2172,"code",22),e(2173,"boolean"),n()(),t(2174,"td",24)(2175,"em")(2176,"strong"),e(2177,"(opcional)"),n()(),t(2178,"p"),e(2179,"Define se a a\xE7\xE3o est\xE1 selecionada."),n()()(),t(2180,"tr",17)(2181,"td",18)(2182,"div",19)(2183,"span",20),e(2184," separator"),i(2185,"br"),n()()(),t(2186,"td",21)(2187,"code",22),e(2188,"boolean"),n()(),t(2189,"td",24)(2190,"em")(2191,"strong"),e(2192,"(opcional)"),n()(),t(2193,"p"),e(2194,"Atribui uma linha separadora acima do item."),n()()(),t(2195,"tr",17)(2196,"td",18)(2197,"div",19)(2198,"span",20),e(2199," subItems"),i(2200,"br"),n()()(),t(2201,"td",21)(2202,"code",49),e(2203,"Array<PoPopupAction>"),n()(),t(2204,"td",24)(2205,"em")(2206,"strong"),e(2207,"(opcional)"),n()(),t(2208,"p"),e(2209,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),n(),t(2210,"p"),e(2211,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),n(),t(2212,"blockquote")(2213,"p"),e(2214,"As propriedades "),t(2215,"code"),e(2216,"disabled"),n(),e(2217,", "),t(2218,"code"),e(2219,"type"),n(),e(2220," e "),t(2221,"code"),e(2222,"visible"),n(),e(2223," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),n()(),t(2224,"blockquote")(2225,"p"),e(2226,"Quando "),t(2227,"code"),e(2228,"url"),n(),e(2229," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),n()(),t(2230,"blockquote")(2231,"p"),e(2232,"Em subn\xEDveis aninhados, o "),t(2233,"code"),e(2234,"icon"),n(),e(2235," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),n()()()(),t(2236,"tr",17)(2237,"td",18)(2238,"div",19)(2239,"span",20),e(2240," type"),i(2241,"br"),n()()(),t(2242,"td",21)(2243,"code",31),e(2244,"string"),n()(),t(2245,"td",24)(2246,"em")(2247,"strong"),e(2248,"(opcional)"),n()(),t(2249,"p"),e(2250,"Define a cor do item."),n(),t(2251,"p"),e(2252,"Valores v\xE1lidos:"),n(),t(2253,"ul")(2254,"li")(2255,"code"),e(2256,"default"),n()(),t(2257,"li")(2258,"code"),e(2259,"danger"),n()()()()(),t(2260,"tr",17)(2261,"td",18)(2262,"div",19)(2263,"span",20),e(2264," url"),i(2265,"br"),n()()(),t(2266,"td",21)(2267,"code",31),e(2268,"string"),n()(),t(2269,"td",24)(2270,"em")(2271,"strong"),e(2272,"(opcional)"),n()(),t(2273,"p"),e(2274,"URL para redirecionamento. Aceita rotas internas e links externos."),n(),t(2275,"p"),e(2276,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),t(2277,"code"),e(2278,"url"),n(),e(2279," \xE9 informada em um agrupador, o clique "),t(2280,"strong"),e(2281,"n\xE3o abrir\xE1 os subitens"),n(),e(2282,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),n(),t(2283,"blockquote")(2284,"p"),e(2285,"Quando informada, tem prioridade sobre a propriedade "),t(2286,"code"),e(2287,"action"),n(),e(2288,"."),n()()()(),t(2289,"tr",17)(2290,"td",18)(2291,"div",19)(2292,"span",20),e(2293," visible"),i(2294,"br"),n()()(),t(2295,"td",21)(2296,"code",22),e(2297,"boolean "),n(),t(2298,"code",47),e(2299," Function"),n()(),t(2300,"td",24)(2301,"em")(2302,"strong"),e(2303,"(opcional)"),n()(),t(2304,"p"),e(2305,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),n()()()(),t(2306,"h4",46)(2307,"code",5),e(2308,"PoTableBoolean"),n()(),t(2309,"div",2)(2310,"p"),e(2311,"Interface que define as colunas booleanas do "),t(2312,"code"),e(2313,"po-table"),n(),e(2314,"."),n()(),t(2315,"h4",13),e(2316,"Propriedades"),n(),t(2317,"table",14)(2318,"tr",15)(2319,"th",16),e(2320,"Nome"),n(),t(2321,"th",16),e(2322,"Tipo"),n(),t(2323,"th",16),e(2324,"Descri\xE7\xE3o"),n()(),t(2325,"tr",17)(2326,"td",18)(2327,"div",19)(2328,"span",20),e(2329," falseLabel"),i(2330,"br"),n()()(),t(2331,"td",21)(2332,"code",31),e(2333,"string"),n()(),t(2334,"td",24)(2335,"em")(2336,"strong"),e(2337,"(opcional)"),n()(),t(2338,"p"),e(2339,"Define o r\xF3tulo para valores "),t(2340,"code"),e(2341,"false"),n(),e(2342,"."),n()()(),t(2343,"tr",17)(2344,"td",18)(2345,"div",19)(2346,"span",20),e(2347," trueLabel"),i(2348,"br"),n()()(),t(2349,"td",21)(2350,"code",31),e(2351,"string"),n()(),t(2352,"td",24)(2353,"em")(2354,"strong"),e(2355,"(opcional)"),n()(),t(2356,"p"),e(2357,"Define o r\xF3tulo para valores "),t(2358,"code"),e(2359,"true"),n(),e(2360,"."),n()()()(),t(2361,"h4",46)(2362,"code",5),e(2363,"PoTableColumnSort"),n()(),t(2364,"div",2)(2365,"p"),e(2366,"Interface para ordena\xE7\xE3o das colunas do componente table."),n()(),t(2367,"h4",13),e(2368,"Propriedades"),n(),t(2369,"table",14)(2370,"tr",15)(2371,"th",16),e(2372,"Nome"),n(),t(2373,"th",16),e(2374,"Tipo"),n(),t(2375,"th",16),e(2376,"Descri\xE7\xE3o"),n()(),t(2377,"tr",17)(2378,"td",18)(2379,"div",19)(2380,"span",20),e(2381," column"),i(2382,"br"),n()()(),t(2383,"td",21)(2384,"code",50),e(2385,"PoTableColumn"),n()(),t(2386,"td",24)(2387,"em")(2388,"strong"),e(2389,"(opcional)"),n()(),t(2390,"p"),e(2391,"Coluna pela qual a tabela est\xE1 ordenada."),n()()(),t(2392,"tr",17)(2393,"td",18)(2394,"div",19)(2395,"span",20),e(2396," type"),i(2397,"br"),n()()(),t(2398,"td",21)(2399,"code",51),e(2400,"PoTableColumnSortType"),n()(),t(2401,"td",24)(2402,"p"),e(2403,"Tipo da ordena\xE7\xE3o."),n()()()(),t(2404,"h4",46)(2405,"code",5),e(2406,"PoTableColumn"),n()(),t(2407,"div",2)(2408,"p"),e(2409,"Interface para configura\xE7\xE3o das colunas do "),t(2410,"code"),e(2411,"po-table"),n(),e(2412,"."),n(),t(2413,"p"),e(2414,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),n()(),t(2415,"h4",13),e(2416,"Propriedades"),n(),t(2417,"table",14)(2418,"tr",15)(2419,"th",16),e(2420,"Nome"),n(),t(2421,"th",16),e(2422,"Tipo"),n(),t(2423,"th",16),e(2424,"Descri\xE7\xE3o"),n()(),t(2425,"tr",17)(2426,"td",18)(2427,"div",19)(2428,"span",20),e(2429," action"),i(2430,"br"),n()()(),t(2431,"td",21)(2432,"code",47),e(2433,"Function"),n()(),t(2434,"td",24)(2435,"em")(2436,"strong"),e(2437,"(opcional)"),n()(),t(2438,"p"),e(2439,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),t(2440,"code"),e(2441,"link"),n(),e(2442," ou "),t(2443,"code"),e(2444,"icon"),n(),e(2445,"."),n(),t(2446,"blockquote")(2447,"p"),e(2448,"Quando for do tipo "),t(2449,"code"),e(2450,"link"),n(),e(2451,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),n()(),t(2452,"blockquote")(2453,"p"),e(2454,"Quando for do tipo "),t(2455,"code"),e(2456,"icon"),n(),e(2457," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),n()()()(),t(2458,"tr",17)(2459,"td",18)(2460,"div",19)(2461,"span",20),e(2462," boolean"),i(2463,"br"),n()()(),t(2464,"td",21)(2465,"code",52),e(2466,"PoTableBoolean"),n()(),t(2467,"td",24)(2468,"em")(2469,"strong"),e(2470,"(opcional)"),n()(),t(2471,"p"),e(2472,"Define um objeto do tipo "),t(2473,"code"),e(2474,"PoTableBoolean"),n(),e(2475," para as colunas do tipo "),t(2476,"em"),e(2477,"boolean"),n(),e(2478,". Por exemplo:"),n(),t(2479,"pre")(2480,"code"),e(2481,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),n()(),t(2482,"blockquote")(2483,"p"),e(2484,"Caso n\xE3o seja definido um objeto para colunas do tipo "),t(2485,"em"),e(2486,"boolean"),n(),e(2487,`,
esta exibir\xE1 por padr\xE3o `),t(2488,"code"),e(2489,"Sim"),n(),e(2490," e "),t(2491,"code"),e(2492,"N\xE3o"),n(),e(2493," de acordo com os valores "),t(2494,"em"),e(2495,"booleanos"),n(),e(2496,"."),n()()()(),t(2497,"tr",17)(2498,"td",18)(2499,"div",19)(2500,"span",20),e(2501," color"),i(2502,"br"),n()()(),t(2503,"td",21)(2504,"code",31),e(2505,"string "),n(),t(2506,"code",47),e(2507," Function"),n()(),t(2508,"td",24)(2509,"em")(2510,"strong"),e(2511,"(opcional)"),n()(),t(2512,"p"),e(2513,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),n(),t(2514,"p"),e(2515,"Valores v\xE1lidos:"),n(),t(2516,"ul")(2517,"li"),i(2518,"span",53),t(2519,"code"),e(2520,"color-01"),n()(),t(2521,"li"),i(2522,"span",54),t(2523,"code"),e(2524,"color-02"),n()(),t(2525,"li"),i(2526,"span",55),t(2527,"code"),e(2528,"color-03"),n()(),t(2529,"li"),i(2530,"span",56),t(2531,"code"),e(2532,"color-04"),n()(),t(2533,"li"),i(2534,"span",57),t(2535,"code"),e(2536,"color-05"),n()(),t(2537,"li"),i(2538,"span",58),t(2539,"code"),e(2540,"color-06"),n()(),t(2541,"li"),i(2542,"span",59),t(2543,"code"),e(2544,"color-07"),n()(),t(2545,"li"),i(2546,"span",60),t(2547,"code"),e(2548,"color-08"),n()(),t(2549,"li"),i(2550,"span",61),t(2551,"code"),e(2552,"color-09"),n()(),t(2553,"li"),i(2554,"span",62),t(2555,"code"),e(2556,"color-10"),n()(),t(2557,"li"),i(2558,"span",63),t(2559,"code"),e(2560,"color-11"),n()(),t(2561,"li"),i(2562,"span",64),t(2563,"code"),e(2564,"color-12"),n()()(),t(2565,"blockquote")(2566,"p"),e(2567,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(2568,"strong"),e(2569,"Caption Tag Colors"),n(),e(2570,":"),n()(),t(2571,"ul")(2572,"li"),i(2573,"span",65),t(2574,"code"),e(2575,"caption-tag-01"),n(),i(2576,"span",66),t(2577,"code"),e(2578,"caption-tag-02"),n(),i(2579,"span",67),t(2580,"code"),e(2581,"caption-tag-03"),n(),i(2582,"span",68),t(2583,"code"),e(2584,"caption-tag-04"),n(),i(2585,"span",69),t(2586,"code"),e(2587,"caption-tag-05"),n()(),t(2588,"li"),i(2589,"span",70),t(2590,"code"),e(2591,"caption-tag-06"),n(),i(2592,"span",71),t(2593,"code"),e(2594,"caption-tag-07"),n(),i(2595,"span",72),t(2596,"code"),e(2597,"caption-tag-08"),n(),i(2598,"span",73),t(2599,"code"),e(2600,"caption-tag-09"),n(),i(2601,"span",74),t(2602,"code"),e(2603,"caption-tag-10"),n()(),t(2604,"li"),i(2605,"span",75),t(2606,"code"),e(2607,"caption-tag-11"),n(),i(2608,"span",76),t(2609,"code"),e(2610,"caption-tag-12"),n(),i(2611,"span",77),t(2612,"code"),e(2613,"caption-tag-13"),n(),i(2614,"span",78),t(2615,"code"),e(2616,"caption-tag-14"),n(),i(2617,"span",79),t(2618,"code"),e(2619,"caption-tag-15"),n()(),t(2620,"li"),i(2621,"span",80),t(2622,"code"),e(2623,"caption-tag-16"),n(),i(2624,"span",81),t(2625,"code"),e(2626,"caption-tag-17"),n(),i(2627,"span",82),t(2628,"code"),e(2629,"caption-tag-18"),n(),i(2630,"span",83),t(2631,"code"),e(2632,"caption-tag-19"),n(),i(2633,"span",84),t(2634,"code"),e(2635,"caption-tag-20"),n()(),t(2636,"li"),i(2637,"span",85),t(2638,"code"),e(2639,"caption-tag-21"),n(),i(2640,"span",86),t(2641,"code"),e(2642,"caption-tag-22"),n(),i(2643,"span",87),t(2644,"code"),e(2645,"caption-tag-23"),n(),i(2646,"span",88),t(2647,"code"),e(2648,"caption-tag-24"),n(),i(2649,"span",89),t(2650,"code"),e(2651,"caption-tag-25"),n()(),t(2652,"li"),i(2653,"span",90),t(2654,"code"),e(2655,"caption-tag-26"),n(),i(2656,"span",91),t(2657,"code"),e(2658,"caption-tag-27"),n(),i(2659,"span",92),t(2660,"code"),e(2661,"caption-tag-28"),n(),i(2662,"span",93),t(2663,"code"),e(2664,"caption-tag-29"),n(),i(2665,"span",94),t(2666,"code"),e(2667,"caption-tag-30"),n()(),t(2668,"li"),i(2669,"span",95),t(2670,"code"),e(2671,"caption-tag-31"),n(),i(2672,"span",96),t(2673,"code"),e(2674,"caption-tag-32"),n(),i(2675,"span",97),t(2676,"code"),e(2677,"caption-tag-33"),n(),i(2678,"span",98),t(2679,"code"),e(2680,"caption-tag-34"),n(),i(2681,"span",99),t(2682,"code"),e(2683,"caption-tag-35"),n()()(),t(2684,"blockquote")(2685,"p"),e(2686,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),n()(),t(2687,"pre")(2688,"code"),e(2689,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),n()(),t(2690,"blockquote")(2691,"p"),e(2692,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),t(2693,"code"),e(2694,"icons"),n(),e(2695,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),n()(),t(2696,"pre")(2697,"code"),e(2698,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),n()()()(),t(2699,"tr",17)(2700,"td",18)(2701,"div",19)(2702,"span",20),e(2703," detail"),i(2704,"br"),n()()(),t(2705,"td",21)(2706,"code",100),e(2707,"PoTableDetail"),n()(),t(2708,"td",24)(2709,"em")(2710,"strong"),e(2711,"(opcional)"),n()(),t(2712,"p"),e(2713,"Define um objeto que segue a interface "),t(2714,"code"),e(2715,"PoTableDetail"),n(),e(2716,", para as colunas de detalhes. Por exemplo:"),n(),t(2717,"pre")(2718,"code"),e(2719,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),n()()()(),t(2720,"tr",17)(2721,"td",18)(2722,"div",19)(2723,"span",20),e(2724," disabled"),i(2725,"br"),n()()(),t(2726,"td",21)(2727,"code",47),e(2728,"Function"),n()(),t(2729,"td",24)(2730,"em")(2731,"strong"),e(2732,"(opcional)"),n()(),t(2733,"p"),e(2734,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),t(2735,"em"),e(2736,"link"),n(),e(2737," e sua a\xE7\xE3o."),n(),t(2738,"blockquote")(2739,"p"),e(2740,"Propriedade dispon\xEDvel nas colunas do tipo "),t(2741,"code"),e(2742,"link"),n(),e(2743,"."),n()()()(),t(2744,"tr",17)(2745,"td",18)(2746,"div",19)(2747,"span",20),e(2748," format"),i(2749,"br"),n()()(),t(2750,"td",21)(2751,"code",31),e(2752,"string"),n()(),t(2753,"td",24)(2754,"em")(2755,"strong"),e(2756,"(opcional)"),n()(),t(2757,"p"),e(2758,"Formato de exibi\xE7\xE3o do valor da coluna."),n(),t(2759,"table")(2760,"thead")(2761,"tr")(2762,"th"),e(2763,"Formata\xE7\xE3o"),n(),t(2764,"th"),e(2765,"Type da Coluna"),n(),t(2766,"th"),e(2767,"Descri\xE7\xE3o"),n(),t(2768,"th"),e(2769,"Exemplos"),n()()(),t(2770,"tbody")(2771,"tr")(2772,"td"),e(2773,"Monet\xE1rio"),n(),t(2774,"td")(2775,"code"),e(2776,"currency"),n()(),t(2777,"td"),e(2778,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),n(),t(2779,"td")(2780,"code"),e(2781,"'BRL'"),n(),e(2782,", "),t(2783,"code"),e(2784,"'USD'"),n(),e(2785,", "),t(2786,"code"),e(2787,"'EUR'"),n(),e(2788,", "),t(2789,"code"),e(2790,"'RUB'"),n()()(),t(2791,"tr")(2792,"td"),e(2793,"Data"),n(),t(2794,"td")(2795,"code"),e(2796,"date"),n()(),t(2797,"td"),e(2798,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),n(),t(2799,"td")(2800,"code"),e(2801,"'dd/MM/yyyy'"),n(),e(2802,", "),t(2803,"code"),e(2804,"'dd-MM-yy'"),n(),e(2805,", "),t(2806,"code"),e(2807,"'mm/dd/yyyy'"),n()()(),t(2808,"tr")(2809,"td"),e(2810,"Data/Hora"),n(),t(2811,"td")(2812,"code"),e(2813,"dateTime"),n()(),t(2814,"td"),e(2815,"Aceita os caracteres de dia(dd), m\xEAs(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e per\xEDodo(a para AM/PM). Caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy HH:mm:ss'"),n(),t(2816,"td")(2817,"code"),e(2818,"'dd/MM/yyyy HH:mm'"),n(),e(2819,", "),t(2820,"code"),e(2821,"'dd/MM/yyyy HH:mm:ss'"),n(),e(2822,", "),t(2823,"code"),e(2824,"'dd/MM/yyyy HH:mm:ss.SSS'"),n(),e(2825,", "),t(2826,"code"),e(2827,"'MM/dd/yyyy hh:mm a'"),n(),e(2828,", "),t(2829,"code"),e(2830,"'yyyy-MM-dd HH:mm'"),n(),e(2831,", "),t(2832,"code"),e(2833,"'short'"),n(),e(2834,", "),t(2835,"code"),e(2836,"'medium'"),n()()(),t(2837,"tr")(2838,"td"),e(2839,"Hora"),n(),t(2840,"td")(2841,"code"),e(2842,"time"),n()(),t(2843,"td"),e(2844,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),n(),t(2845,"td")(2846,"code"),e(2847,"'HH:mm'"),n(),e(2848,", "),t(2849,"code"),e(2850,"'HH:mm:ss.ffffff'"),n(),e(2851,", "),t(2852,"code"),e(2853,"'HH:mm:ss.ff'"),n(),e(2854,", "),t(2855,"code"),e(2856,"'mm:ss.fff'"),n()()(),t(2857,"tr")(2858,"td"),e(2859,"N\xFAmero"),n(),t(2860,"td")(2861,"code"),e(2862,"number"),n()(),t(2863,"td"),e(2864,"Aceita um valor seguindo o padr\xE3o "),t(2865,"a",101)(2866,"strong"),e(2867,"DecimalPipe"),n()(),e(2868," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),n(),t(2869,"td")(2870,"code"),e(2871,"'1.2-5'"),n(),e(2872," (ex.: "),t(2873,"code"),e(2874,"50"),n(),e(2875," \u2192 "),t(2876,"code"),e(2877,"50.00"),n(),e(2878,")"),n()()()(),t(2879,"p"),e(2880,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),n()()(),t(2881,"tr",17)(2882,"td",18)(2883,"div",19)(2884,"span",20),e(2885," icons"),i(2886,"br"),n()()(),t(2887,"td",21)(2888,"code",102),e(2889,"Array<PoTableColumnIcon>"),n()(),t(2890,"td",24)(2891,"em")(2892,"strong"),e(2893,"(opcional)"),n()(),t(2894,"p"),e(2895,"Define um "),t(2896,"em"),e(2897,"array"),n(),e(2898," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),t(2899,"code"),e(2900,"action"),n(),e(2901," e "),t(2902,"code"),e(2903,"color"),n(),e(2904,`
definidos na coluna, \xE0 partir do `),t(2905,"em"),e(2906,"value"),n(),e(2907," da "),t(2908,"a",103)(2909,"code"),e(2910,"PoTableColumnIcon"),n()(),e(2911,", por exemplo:"),n(),t(2912,"pre")(2913,"code"),e(2914,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),n()(),t(2915,"pre")(2916,"code"),e(2917,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),n()()()(),t(2918,"tr",17)(2919,"td",18)(2920,"div",19)(2921,"span",20),e(2922," label"),i(2923,"br"),n()()(),t(2924,"td",21)(2925,"code",31),e(2926,"string"),n()(),t(2927,"td",24)(2928,"em")(2929,"strong"),e(2930,"(opcional)"),n()(),t(2931,"p"),e(2932,"Texto para t\xEDtulo da coluna."),n(),t(2933,"p"),e(2934,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(2935,"em"),e(2936,"label"),n(),e(2937," o valor da propriedade "),t(2938,"em"),e(2939,"property"),n(),e(2940," com a primeira letra em mai\xFAsculo."),n()()(),t(2941,"tr",17)(2942,"td",18)(2943,"div",19)(2944,"span",20),e(2945," labels"),i(2946,"br"),n()()(),t(2947,"td",21)(2948,"code",104),e(2949,"Array<PoTableColumnLabel>"),n()(),t(2950,"td",24)(2951,"em")(2952,"strong"),e(2953,"(opcional)"),n()(),t(2954,"p"),e(2955,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),t(2956,"code"),e(2957,"PoTableColumnLabel"),n(),e(2958," na qual devem ser definidas os labels. Por exemplo:"),n(),t(2959,"pre")(2960,"code"),e(2961,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),n()()()(),t(2962,"tr",17)(2963,"td",18)(2964,"div",19)(2965,"span",20),e(2966," link"),i(2967,"br"),n()()(),t(2968,"td",21)(2969,"code",31),e(2970,"string"),n()(),t(2971,"td",24)(2972,"em")(2973,"strong"),e(2974,"(opcional)"),n()(),t(2975,"p"),e(2976,"Define o nome da propriedade que conter\xE1 o "),t(2977,"code"),e(2978,"link"),n(),e(2979," a ser redirecionado."),n()()(),t(2980,"tr",17)(2981,"td",18)(2982,"div",19)(2983,"span",20),e(2984," mask"),i(2985,"br"),n()()(),t(2986,"td",21)(2987,"code",31),e(2988,"string"),n()(),t(2989,"td",24)(2990,"em")(2991,"strong"),e(2992,"(opcional)"),n()(),t(2993,"p"),e(2994,"Define uma m\xE1scara para formata\xE7\xE3o do valor exibido na coluna."),n(),t(2995,"p"),e(2996,"A m\xE1scara \xE9 aplicada somente para "),t(2997,"strong"),e(2998,"exibi\xE7\xE3o"),n(),e(2999,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),n(),t(3e3,"p"),e(3001,"Caracteres v\xE1lidos para a m\xE1scara:"),n(),t(3002,"ul")(3003,"li")(3004,"code"),e(3005,"9"),n(),e(3006," : aceita um d\xEDgito num\xE9rico (0-9)."),n(),t(3007,"li")(3008,"code"),e(3009,"@"),n(),e(3010," : aceita um caractere alfab\xE9tico (a-z, A-Z)."),n(),t(3011,"li")(3012,"code"),e(3013,"w"),n(),e(3014," : aceita um caractere alfanum\xE9rico (a-z, A-Z, 0-9)."),n(),t(3015,"li"),e(3016,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),t(3017,"code"),e(3018,"."),n(),e(3019,", "),t(3020,"code"),e(3021,"-"),n(),e(3022,", "),t(3023,"code"),e(3024,"/"),n(),e(3025,", "),t(3026,"code"),e(3027,"("),n(),e(3028,", "),t(3029,"code"),e(3030,")"),n(),e(3031,", "),t(3032,"code"),e(3033,"+"),n(),e(3034,", "),i(3035,"code"),e(3036,")."),n()(),t(3037,"p"),e(3038,"Exemplos de uso:"),n(),t(3039,"pre")(3040,"code"),e(3041,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),n()(),t(3042,"blockquote")(3043,"p"),e(3044,"Esta propriedade \xE9 utilizada apenas para colunas do tipo "),t(3045,"code"),e(3046,"string"),n(),e(3047,` (padr\xE3o).
Caso a coluna possua um `),t(3048,"code"),e(3049,"type"),n(),e(3050," diferente de "),t(3051,"code"),e(3052,"string"),n(),e(3053,", a m\xE1scara ser\xE1 ignorada."),n()()()(),t(3054,"tr",17)(3055,"td",18)(3056,"div",19)(3057,"span",20),e(3058," property"),i(3059,"br"),n()()(),t(3060,"td",21)(3061,"code",31),e(3062,"string"),n()(),t(3063,"td",24)(3064,"em")(3065,"strong"),e(3066,"(opcional)"),n()(),t(3067,"p"),e(3068,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),n(),t(3069,"pre")(3070,"code"),e(3071,`{ property: 'address.street', label: 'Rua' }
`),n()()()(),t(3072,"tr",17)(3073,"td",18)(3074,"div",19)(3075,"span",20),e(3076," searchAiIgnore"),i(3077,"br"),n()()(),t(3078,"td",21)(3079,"code",22),e(3080,"boolean"),n()(),t(3081,"td",24)(3082,"em")(3083,"strong"),e(3084,"(opcional)"),n()(),t(3085,"p"),e(3086,"Quando "),t(3087,"code"),e(3088,"true"),n(),e(3089,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),t(3090,"code"),e(3091,"p-search-ai-field"),n(),e(3092,", independentemente de estar vis\xEDvel na tabela."),n(),t(3093,"p"),e(3094,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),n()()(),t(3095,"tr",17)(3096,"td",18)(3097,"div",19)(3098,"span",20),e(3099," sortable"),i(3100,"br"),n()()(),t(3101,"td",21)(3102,"code",22),e(3103,"boolean"),n()(),t(3104,"td",24)(3105,"em")(3106,"strong"),e(3107,"(opcional)"),n()(),t(3108,"p"),e(3109,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),n()()(),t(3110,"tr",17)(3111,"td",18)(3112,"div",19)(3113,"span",20),e(3114," subtitles"),i(3115,"br"),n()()(),t(3116,"td",21)(3117,"code",105),e(3118,"Array<PoTableSubtitleColumn>"),n()(),t(3119,"td",24)(3120,"em")(3121,"strong"),e(3122,"(opcional)"),n()(),t(3123,"p"),e(3124,"Define um array de objetos para as colunas de legenda. Onde, "),t(3125,"code"),e(3126,"subtitles"),n(),e(3127,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),n(),t(3128,"pre")(3129,"code"),e(3130,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),n()(),t(3131,"p"),e(3132,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),n()()(),t(3133,"tr",17)(3134,"td",18)(3135,"div",19)(3136,"span",20),e(3137," tooltip"),i(3138,"br"),n()()(),t(3139,"td",21)(3140,"code",31),e(3141,"string"),n()(),t(3142,"td",24)(3143,"em")(3144,"strong"),e(3145,"(opcional)"),n()(),t(3146,"p"),e(3147,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3148,"em"),e(3149,"mouse"),n(),e(3150," sobre um texto."),n(),t(3151,"blockquote")(3152,"p"),e(3153,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),t(3154,"em"),e(3155,"link"),n(),e(3156,"."),n()(),t(3157,"blockquote")(3158,"p"),e(3159,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),t(3160,"em"),e(3161,"tooltip"),n(),e(3162," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),n()()()(),t(3163,"tr",17)(3164,"td",18)(3165,"div",19)(3166,"span",20),e(3167," type"),i(3168,"br"),n()()(),t(3169,"td",21)(3170,"code",31),e(3171,"string"),n()(),t(3172,"td",24)(3173,"em")(3174,"strong"),e(3175,"(opcional)"),n()(),t(3176,"p"),e(3177,"Tipo da coluna."),n(),t(3178,"p"),e(3179,"Valores v\xE1lidos:"),n(),t(3180,"ul")(3181,"li")(3182,"p")(3183,"code"),e(3184,"boolean"),n(),e(3185,": Exibir\xE1 por padr\xE3o "),t(3186,"code"),e(3187,"Sim"),n(),e(3188," e "),t(3189,"code"),e(3190,"N\xE3o"),n(),e(3191," de acordo com os valores "),t(3192,"em"),e(3193,"booleanos"),n(),e(3194,"."),n(),t(3195,"blockquote")(3196,"p"),e(3197,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),t(3198,"code"),e(3199,"boolean"),n(),e(3200," desta interface."),n()()(),t(3201,"li")(3202,"p")(3203,"code"),e(3204,"currency"),n(),e(3205,": valores monet\xE1rios."),n()(),t(3206,"li")(3207,"p")(3208,"code"),e(3209,"date"),n(),e(3210,": valor de datas."),n(),t(3211,"ul")(3212,"li"),e(3213,"Aceita os tipos "),t(3214,"em"),e(3215,"string"),n(),e(3216," e "),t(3217,"em"),e(3218,"Date"),n(),e(3219,` padr\xE3o do Javascript,
por exemplo: `),t(3220,"code"),e(3221,"'2017-11-28'"),n(),e(3222," ou "),t(3223,"code"),e(3224,"new Date(2017, 10, 28)"),n(),e(3225,"."),n()()(),t(3226,"li")(3227,"p")(3228,"code"),e(3229,"dateTime"),n(),e(3230,": valor de data com hor\xE1rio."),n(),t(3231,"ul")(3232,"li"),e(3233,"Aceita o tipo "),t(3234,"em"),e(3235,"string"),n(),e(3236," no formato "),t(3237,"strong"),e(3238,"ISO-8601"),n(),e(3239," extendido "),t(3240,"strong"),e(3241,"'yyyy-mm-ddTHH:mm:ss+|-hh:mm'"),n(),e(3242,`
ou `),t(3243,"strong"),e(3244,"'yyyy-mm-ddTHH:mm+|-hh:mm'"),n(),e(3245,` (sem segundos),
e o tipo `),t(3246,"em"),e(3247,"Date"),n(),e(3248," padr\xE3o do Javascript, por exemplo: "),t(3249,"code"),e(3250,"'2017-11-28T00:00:00-02:00'"),n(),e(3251,", "),t(3252,"code"),e(3253,"'2017-11-28T14:30-02:00'"),n(),e(3254," ou "),t(3255,"code"),e(3256,"new Date(2017, 10, 28)"),n(),e(3257,"."),n(),t(3258,"li"),e(3259,"A formata\xE7\xE3o de exibi\xE7\xE3o pode ser configurada pela propriedade "),t(3260,"code"),e(3261,"format"),n(),e(3262,"."),n()()(),t(3263,"li")(3264,"p")(3265,"code"),e(3266,"detail"),n(),e(3267,": array de objetos para o master-detail."),n(),t(3268,"ul")(3269,"li"),e(3270,"Incompat\xEDvel com "),t(3271,"code"),e(3272,"virtual-scroll"),n(),e(3273,", que requer altura fixa nas linhas."),n()()(),t(3274,"li")(3275,"p")(3276,"code"),e(3277,"icon"),n(),e(3278,": "),t(3279,"em"),e(3280,"array"),n(),e(3281," de "),t(3282,"em"),e(3283,"string"),n(),e(3284," ou objetos para a coluna de \xEDcones."),n()(),t(3285,"li")(3286,"p")(3287,"code"),e(3288,"label"),n(),e(3289,": texto com destaque."),n()(),t(3290,"li")(3291,"p")(3292,"code"),e(3293,"link"),n(),e(3294,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),n()(),t(3295,"li")(3296,"p")(3297,"code"),e(3298,"number"),n(),e(3299,": valores num\xE9ricos."),n()(),t(3300,"li")(3301,"p")(3302,"code"),e(3303,"string"),n(),e(3304,": textos."),n()(),t(3305,"li")(3306,"p")(3307,"code"),e(3308,"subtitle"),n(),e(3309,": array de objetos para a coluna de legenda."),n()(),t(3310,"li")(3311,"p")(3312,"code"),e(3313,"time"),n(),e(3314,": valor de hor\xE1rio."),n(),t(3315,"ul")(3316,"li"),e(3317,"Aceita o tipo "),t(3318,"em"),e(3319,"string"),n(),e(3320," nos formatos "),t(3321,"strong"),e(3322,"'HH:mm:ss'"),n(),e(3323," ou "),t(3324,"strong"),e(3325,"'HH:mm:ss.ffffff'"),n(),e(3326,", por exemplo: "),t(3327,"code"),e(3328,"'23:12:45'"),n(),e(3329,"."),n()()(),t(3330,"li")(3331,"p")(3332,"code"),e(3333,"cellTemplate"),n(),e(3334,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(3335,"a",8),e(3336,"PoTableCellTemplate"),n(),e(3337,"."),n()(),t(3338,"li")(3339,"p")(3340,"code"),e(3341,"columnTemplate"),n(),e(3342,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(3343,"a",7),e(3344,"PoTableColumnTemplate"),n(),e(3345,"."),n()()()()(),t(3346,"tr",17)(3347,"td",18)(3348,"div",19)(3349,"span",20),e(3350," visible"),i(3351,"br"),n()()(),t(3352,"td",21)(3353,"code",22),e(3354,"boolean"),n()(),t(3355,"td",24)(3356,"em")(3357,"strong"),e(3358,"(opcional)"),n()(),t(3359,"p"),e(3360,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),t(3361,"strong"),e(3362,"gerenciador de colunas"),n(),e(3363,"."),n(),t(3364,"blockquote")(3365,"p"),e(3366,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),t(3367,"code"),e(3368,"p-max-columns"),n(),e(3369,"."),n()()()(),t(3370,"tr",17)(3371,"td",18)(3372,"div",19)(3373,"span",20),e(3374," width"),i(3375,"br"),n()()(),t(3376,"td",21)(3377,"code",31),e(3378,"string"),n()(),t(3379,"td",24)(3380,"em")(3381,"strong"),e(3382,"(opcional)"),n()(),t(3383,"p"),e(3384,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),n(),t(3385,"ul")(3386,"li"),e(3387,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),n(),t(3388,"li"),e(3389,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),n()()()()(),t(3390,"h4",46)(3391,"code",5),e(3392,"PoTableLiterals"),n()(),t(3393,"div",2)(3394,"p"),e(3395,"Interface para defini\xE7\xE3o das literais usadas no "),t(3396,"code"),e(3397,"po-table"),n(),e(3398,"."),n()(),t(3399,"h4",13),e(3400,"Propriedades"),n(),t(3401,"table",14)(3402,"tr",15)(3403,"th",16),e(3404,"Nome"),n(),t(3405,"th",16),e(3406,"Tipo"),n(),t(3407,"th",16),e(3408,"Descri\xE7\xE3o"),n()(),t(3409,"tr",17)(3410,"td",18)(3411,"div",19)(3412,"span",20),e(3413," bodyDelete"),i(3414,"br"),n()()(),t(3415,"td",21)(3416,"code",31),e(3417,"string"),n()(),t(3418,"td",24)(3419,"em")(3420,"strong"),e(3421,"(opcional)"),n()(),t(3422,"p"),e(3423,"Texto no corpo do Modal de exclus\xE3o"),n()()(),t(3424,"tr",17)(3425,"td",18)(3426,"div",19)(3427,"span",20),e(3428," cancel"),i(3429,"br"),n()()(),t(3430,"td",21)(3431,"code",31),e(3432,"string"),n()(),t(3433,"td",24)(3434,"em")(3435,"strong"),e(3436,"(opcional)"),n()(),t(3437,"p"),e(3438,"Texto no Modal para cancelar a exclus\xE3o"),n()()(),t(3439,"tr",17)(3440,"td",18)(3441,"div",19)(3442,"span",20),e(3443," columnsManager"),i(3444,"br"),n()()(),t(3445,"td",21)(3446,"code",31),e(3447,"string"),n()(),t(3448,"td",24)(3449,"em")(3450,"strong"),e(3451,"(opcional)"),n()(),t(3452,"p"),e(3453,"Texto do "),t(3454,"strong"),e(3455,"Gerenciador de colunas"),n(),e(3456," localizado no canto superior direito da tabela."),n()()(),t(3457,"tr",17)(3458,"td",18)(3459,"div",19)(3460,"span",20),e(3461," completeSubtitle"),i(3462,"br"),n()()(),t(3463,"td",21)(3464,"code",31),e(3465,"string"),n()(),t(3466,"td",24)(3467,"em")(3468,"strong"),e(3469,"(opcional)"),n()(),t(3470,"p"),e(3471,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),n()()(),t(3472,"tr",17)(3473,"td",18)(3474,"div",19)(3475,"span",20),e(3476," delete"),i(3477,"br"),n()()(),t(3478,"td",21)(3479,"code",31),e(3480,"string"),n()(),t(3481,"td",24)(3482,"em")(3483,"strong"),e(3484,"(opcional)"),n()(),t(3485,"p"),e(3486,"Texto no Modal para confirmar a exclus\xE3o"),n()()(),t(3487,"tr",17)(3488,"td",18)(3489,"div",19)(3490,"span",20),e(3491," deleteApiError"),i(3492,"br"),n()()(),t(3493,"td",21)(3494,"code",31),e(3495,"string"),n()(),t(3496,"td",24)(3497,"em")(3498,"strong"),e(3499,"(opcional)"),n()(),t(3500,"p"),e(3501,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),n()()(),t(3502,"tr",17)(3503,"td",18)(3504,"div",19)(3505,"span",20),e(3506," deleteSuccessful"),i(3507,"br"),n()()(),t(3508,"td",21)(3509,"code",31),e(3510,"string"),n()(),t(3511,"td",24)(3512,"em")(3513,"strong"),e(3514,"(opcional)"),n()(),t(3515,"p"),e(3516,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),n()()(),t(3517,"tr",17)(3518,"td",18)(3519,"div",19)(3520,"span",20),e(3521," loadMoreData"),i(3522,"br"),n()()(),t(3523,"td",21)(3524,"code",31),e(3525,"string"),n()(),t(3526,"td",24)(3527,"em")(3528,"strong"),e(3529,"(opcional)"),n()(),t(3530,"p"),e(3531,"Texto do bot\xE3o de "),t(3532,"strong"),e(3533,"Carregar mais resultados"),n(),e(3534," localizado no rodap\xE9 da tabela."),n()()(),t(3535,"tr",17)(3536,"td",18)(3537,"div",19)(3538,"span",20),e(3539," loadingData"),i(3540,"br"),n()()(),t(3541,"td",21)(3542,"code",31),e(3543,"string"),n()(),t(3544,"td",24)(3545,"em")(3546,"strong"),e(3547,"(opcional)"),n()(),t(3548,"p"),e(3549,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),n()()(),t(3550,"tr",17)(3551,"td",18)(3552,"div",19)(3553,"span",20),e(3554," multipleItems"),i(3555,"br"),n()()(),t(3556,"td",21)(3557,"code",31),e(3558,"string"),n()(),t(3559,"td",24)(3560,"em")(3561,"strong"),e(3562,"(opcional)"),n()(),t(3563,"p"),e(3564,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(3565,"tr",17)(3566,"td",18)(3567,"div",19)(3568,"span",20),e(3569," noColumns"),i(3570,"br"),n()()(),t(3571,"td",21)(3572,"code",31),e(3573,"string"),n()(),t(3574,"td",24)(3575,"em")(3576,"strong"),e(3577,"(opcional)"),n()(),t(3578,"p"),e(3579,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),n()()(),t(3580,"tr",17)(3581,"td",18)(3582,"div",19)(3583,"span",20),e(3584," noData"),i(3585,"br"),n()()(),t(3586,"td",21)(3587,"code",31),e(3588,"string"),n()(),t(3589,"td",24)(3590,"em")(3591,"strong"),e(3592,"(opcional)"),n()(),t(3593,"p"),e(3594,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),n()()(),t(3595,"tr",17)(3596,"td",18)(3597,"div",19)(3598,"span",20),e(3599," noItem"),i(3600,"br"),n()()(),t(3601,"td",21)(3602,"code",31),e(3603,"string"),n()(),t(3604,"td",24)(3605,"em")(3606,"strong"),e(3607,"(opcional)"),n()(),t(3608,"p"),e(3609,"Texto exibido quando nenhum item for selecionado no checkbox."),n()()(),t(3610,"tr",17)(3611,"td",18)(3612,"div",19)(3613,"span",20),e(3614," noVisibleColumn"),i(3615,"br"),n()()(),t(3616,"td",21)(3617,"code",31),e(3618,"string"),n()(),t(3619,"td",24)(3620,"em")(3621,"strong"),e(3622,"(opcional)"),n()(),t(3623,"p"),e(3624,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),n()()(),t(3625,"tr",17)(3626,"td",18)(3627,"div",19)(3628,"span",20),e(3629," oneItem"),i(3630,"br"),n()()(),t(3631,"td",21)(3632,"code",31),e(3633,"string"),n()(),t(3634,"td",24)(3635,"em")(3636,"strong"),e(3637,"(opcional)"),n()(),t(3638,"p"),e(3639,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(3640,"tr",17)(3641,"td",18)(3642,"div",19)(3643,"span",20),e(3644," searchAiPlaceholder"),i(3645,"br"),n()()(),t(3646,"td",21)(3647,"code",31),e(3648,"string"),n()(),t(3649,"td",24)(3650,"em")(3651,"strong"),e(3652,"(opcional)"),n()(),t(3653,"p"),e(3654,"Texto exibido como placeholder padr\xE3o no campo de busca por IA ("),t(3655,"code"),e(3656,"p-search-ai-field"),n(),e(3657,") quando nenhum "),t(3658,"code"),e(3659,"placeholder"),n(),e(3660," \xE9 informado."),n()()(),t(3661,"tr",17)(3662,"td",18)(3663,"div",19)(3664,"span",20),e(3665," seeCompleteSubtitle"),i(3666,"br"),n()()(),t(3667,"td",21)(3668,"code",31),e(3669,"string"),n()(),t(3670,"td",24)(3671,"em")(3672,"strong"),e(3673,"(opcional)"),n()(),t(3674,"p"),e(3675,"Texto do bot\xE3o "),t(3676,"strong"),e(3677,"Ver legenda completa"),n(),e(3678," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),n()()()(),t(3679,"h4",46)(3680,"code",5),e(3681,"PoTableSearchAiField"),n()(),t(3682,"div",2)(3683,"p"),e(3684,"Interface de configura\xE7\xE3o da busca por IA integrada ao "),t(3685,"code"),e(3686,"po-table"),n(),e(3687,`, utilizada pela
propriedade `),t(3688,"code"),e(3689,"p-search-ai-field"),n(),e(3690,"."),n(),t(3691,"p"),e(3692,"Quando configurada, a tabela renderiza um campo "),t(3693,"code"),e(3694,"po-search-ai"),n(),e(3695,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),t(3696,"code"),e(3697,"po-search"),n(),e(3698,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),t(3699,"code"),e(3700,"apply"),n(),e(3701,"."),n(),t(3702,"h4"),e(3703,"Endpoint de IA ("),t(3704,"code"),e(3705,"url"),n(),e(3706,")"),n(),t(3707,"p"),e(3708,"O campo "),t(3709,"code"),e(3710,"url"),n(),e(3711,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),t(3712,"code"),e(3713,"po-search-ai"),n(),e(3714,": recebe "),t(3715,"code"),e(3716,"{ query, columns }"),n(),e(3717," via "),t(3718,"code"),e(3719,"POST"),n(),e(3720,` e responde com
`),t(3721,"code"),e(3722,"{ filter, description, confidence }"),n(),e(3723,"."),n(),t(3724,"blockquote")(3725,"p"),e(3726,"A integra\xE7\xE3o com a LLM e a guarda de chaves devem ocorrer "),t(3727,"strong"),e(3728,"no backend"),n(),e(3729,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),t(3730,"a",40)(3731,"code"),e(3732,"po-sample-api"),n()(),e(3733,"."),n()(),t(3734,"h4"),e(3735,"Colunas enviadas \xE0 IA"),n(),t(3736,"p"),e(3737,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),t(3738,"code"),e(3739,"p-columns"),n(),e(3740,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),t(3741,"code"),e(3742,"searchAiIgnore: true"),n(),e(3743,". O campo "),t(3744,"code"),e(3745,"columns"),n(),e(3746," permite sobrescrever esse comportamento."),n(),t(3747,"h4"),e(3748,"Estrat\xE9gia de aplica\xE7\xE3o do filtro ("),t(3749,"code"),e(3750,"apply"),n(),e(3751,")"),n(),t(3752,"table")(3753,"thead")(3754,"tr")(3755,"th"),e(3756,"Valor"),n(),t(3757,"th"),e(3758,"Comportamento"),n()()(),t(3759,"tbody")(3760,"tr")(3761,"td")(3762,"code"),e(3763,"'auto'"),n(),e(3764," (padr\xE3o)"),n(),t(3765,"td"),e(3766,"Modo servi\xE7o: envia "),t(3767,"code"),e(3768,"$filter"),n(),e(3769," ao "),t(3770,"code"),e(3771,"p-service-api"),n(),e(3772,"; modo local: aplica o parser OData interno sobre "),t(3773,"code"),e(3774,"p-items"),n(),e(3775,"."),n()(),t(3776,"tr")(3777,"td")(3778,"code"),e(3779,"'parser'"),n()(),t(3780,"td"),e(3781,"Sempre usa o parser OData interno. No modo servi\xE7o, busca todos os dados e filtra localmente."),n()(),t(3782,"tr")(3783,"td")(3784,"code"),e(3785,"'server'"),n()(),t(3786,"td"),e(3787,"Sempre delega o filtro ao "),t(3788,"code"),e(3789,"p-service-api"),n(),e(3790," via "),t(3791,"code"),e(3792,"$filter"),n(),e(3793,"."),n()(),t(3794,"tr")(3795,"td")(3796,"code"),e(3797,"'none'"),n()(),t(3798,"td"),e(3799,"N\xE3o aplica o filtro; apenas emite "),t(3800,"code"),e(3801,"p-search-ai-result"),n(),e(3802," para o desenvolvedor tratar."),n()(),t(3803,"tr")(3804,"td")(3805,"code"),e(3806,"(result) => void"),n()(),t(3807,"td"),e(3808,"Override total: o desenvolvedor recebe o resultado e assume o controle."),n()()()()(),t(3809,"h4",13),e(3810,"Propriedades"),n(),t(3811,"table",14)(3812,"tr",15)(3813,"th",16),e(3814,"Nome"),n(),t(3815,"th",16),e(3816,"Tipo"),n(),t(3817,"th",16),e(3818,"Descri\xE7\xE3o"),n()(),t(3819,"tr",17)(3820,"td",18)(3821,"div",19)(3822,"span",20),e(3823," apply"),i(3824,"br"),n()()(),t(3825,"td",21)(3826,"code",106),e(3827,"'auto' "),n(),t(3828,"code",107),e(3829," 'parser' "),n(),t(3830,"code",108),e(3831," 'server' "),n(),t(3832,"code",109),e(3833," 'none' "),n(),t(3834,"code",110),e(3835," ((result: PoSearchAiResult) => void)"),n()(),t(3836,"td",24)(3837,"em")(3838,"strong"),e(3839,"(opcional)"),n()(),t(3840,"p"),e(3841,"Define como o filtro OData retornado pela IA \xE9 aplicado \xE0 tabela."),n(),t(3842,"ul")(3843,"li")(3844,"code"),e(3845,"'auto'"),n(),t(3846,"em"),e(3847,"(padr\xE3o)"),n(),e(3848,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),t(3849,"code"),e(3850,"$filter"),n(),e(3851," ao "),t(3852,"code"),e(3853,"p-service-api"),n(),e(3854,`; modo local usa o parser
OData interno sobre `),t(3855,"code"),e(3856,"p-items"),n(),e(3857,"."),n(),t(3858,"li")(3859,"code"),e(3860,"'parser'"),n(),e(3861,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),n(),t(3862,"li")(3863,"code"),e(3864,"'server'"),n(),e(3865,": sempre envia "),t(3866,"code"),e(3867,"$filter"),n(),e(3868," ao "),t(3869,"code"),e(3870,"p-service-api"),n(),e(3871,`, independentemente
do modo da tabela.`),n(),t(3872,"li")(3873,"code"),e(3874,"'none'"),n(),e(3875,": n\xE3o aplica o filtro; apenas emite "),t(3876,"code"),e(3877,"p-search-ai-result"),n(),e(3878,"."),n(),t(3879,"li")(3880,"code"),e(3881,"(result: PoSearchAiResult) => void"),n(),e(3882,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),n()()()(),t(3883,"tr",17)(3884,"td",18)(3885,"div",19)(3886,"span",20),e(3887," columns"),i(3888,"br"),n()()(),t(3889,"td",21)(3890,"code",111),e(3891,"Array<PoSearchAiColumn>"),n()(),t(3892,"td",24)(3893,"em")(3894,"strong"),e(3895,"(opcional)"),n()(),t(3896,"p"),e(3897,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),t(3898,"code"),e(3899,"p-columns"),n(),e(3900,` da tabela, excluindo colunas com
`),t(3901,"code"),e(3902,"visible: false"),n(),e(3903," ou "),t(3904,"code"),e(3905,"searchAiIgnore: true"),n(),e(3906,"."),n()()(),t(3907,"tr",17)(3908,"td",18)(3909,"div",19)(3910,"span",20),e(3911," literals"),i(3912,"br"),n()()(),t(3913,"td",21)(3914,"code",112),e(3915,"PoSearchAiLiterals"),n()(),t(3916,"td",24)(3917,"em")(3918,"strong"),e(3919,"(opcional)"),n()(),t(3920,"p"),e(3921,"Objeto com os literais usados pelo "),t(3922,"code"),e(3923,"po-search-ai"),n(),e(3924,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),n()()(),t(3925,"tr",17)(3926,"td",18)(3927,"div",19)(3928,"span",20),e(3929," minConfidence"),i(3930,"br"),n()()(),t(3931,"td",21)(3932,"code",35),e(3933,"number"),n()(),t(3934,"td",24)(3935,"em")(3936,"strong"),e(3937,"(opcional)"),n()(),t(3938,"p"),e(3939,"N\xEDvel m\xEDnimo de confian\xE7a ("),t(3940,"code"),e(3941,"0.0"),n(),e(3942," a "),t(3943,"code"),e(3944,"1.0"),n(),e(3945,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),t(3946,"code"),e(3947,"p-search-ai-low-confidence"),n(),e(3948," \xE9 emitido em vez de "),t(3949,"code"),e(3950,"p-search-ai-result"),n(),e(3951,"."),n()()(),t(3952,"tr",17)(3953,"td",18)(3954,"div",19)(3955,"span",20),e(3956," placeholder"),i(3957,"br"),n()()(),t(3958,"td",21)(3959,"code",31),e(3960,"string"),n()(),t(3961,"td",24)(3962,"em")(3963,"strong"),e(3964,"(opcional)"),n()(),t(3965,"p"),e(3966,"Texto exibido como placeholder no campo de busca por IA."),n()()(),t(3967,"tr",17)(3968,"td",18)(3969,"div",19)(3970,"span",20),e(3971," timeout"),i(3972,"br"),n()()(),t(3973,"td",21)(3974,"code",35),e(3975,"number"),n()(),t(3976,"td",24)(3977,"em")(3978,"strong"),e(3979,"(opcional)"),n()(),t(3980,"p"),e(3981,"Tempo m\xE1ximo de espera (em milissegundos) pela resposta do endpoint de IA."),n()()(),t(3982,"tr",17)(3983,"td",18)(3984,"div",19)(3985,"span",20),e(3986," url"),i(3987,"br"),n()()(),t(3988,"td",21)(3989,"code",31),e(3990,"string"),n()(),t(3991,"td",24)(3992,"p"),e(3993,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),t(3994,"code"),e(3995,"po-search-ai"),n(),e(3996," via "),t(3997,"code"),e(3998,"p-url"),n(),e(3999,"."),n(),t(4e3,"p"),e(4001,"O endpoint deve seguir o contrato do backend de refer\xEAncia ("),t(4002,"code"),e(4003,"po-sample-api"),n(),e(4004,"):"),n(),t(4005,"ul")(4006,"li"),e(4007,"Recebe: "),t(4008,"code"),e(4009,"POST { query: string, columns: PoSearchAiColumn[] }"),n()(),t(4010,"li"),e(4011,"Responde: "),t(4012,"code"),e(4013,"{ filter: string, description: string, confidence: number }"),n()()()()()(),t(4014,"h4",46)(4015,"code",5),e(4016,"PoTableColumnIcon"),n()(),t(4017,"div",2)(4018,"p"),i(4019,"a",113),n(),t(4020,"p"),e(4021,"Interface que define a coluna com \xEDcone(s) do "),t(4022,"code"),e(4023,"po-table"),n(),e(4024,"."),n()(),t(4025,"h4",13),e(4026,"Propriedades"),n(),t(4027,"table",14)(4028,"tr",15)(4029,"th",16),e(4030,"Nome"),n(),t(4031,"th",16),e(4032,"Tipo"),n(),t(4033,"th",16),e(4034,"Descri\xE7\xE3o"),n()(),t(4035,"tr",17)(4036,"td",18)(4037,"div",19)(4038,"span",20),e(4039," action"),i(4040,"br"),n()()(),t(4041,"td",21)(4042,"code",47),e(4043,"Function"),n()(),t(4044,"td",24)(4045,"em")(4046,"strong"),e(4047,"(opcional)"),n()(),t(4048,"p"),e(4049,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),n()()(),t(4050,"tr",17)(4051,"td",18)(4052,"div",19)(4053,"span",20),e(4054," color"),i(4055,"br"),n()()(),t(4056,"td",21)(4057,"code",31),e(4058,"string "),n(),t(4059,"code",47),e(4060," Function"),n()(),t(4061,"td",24)(4062,"em")(4063,"strong"),e(4064,"(opcional)"),n()(),t(4065,"p"),e(4066,"Define a cor do \xEDcone."),n(),t(4067,"p"),e(4068,"Valores v\xE1lidos:"),n(),t(4069,"ul")(4070,"li"),i(4071,"span",53),t(4072,"code"),e(4073,"color-01"),n()(),t(4074,"li"),i(4075,"span",54),t(4076,"code"),e(4077,"color-02"),n()(),t(4078,"li"),i(4079,"span",55),t(4080,"code"),e(4081,"color-03"),n()(),t(4082,"li"),i(4083,"span",56),t(4084,"code"),e(4085,"color-04"),n()(),t(4086,"li"),i(4087,"span",57),t(4088,"code"),e(4089,"color-05"),n()(),t(4090,"li"),i(4091,"span",58),t(4092,"code"),e(4093,"color-06"),n()(),t(4094,"li"),i(4095,"span",59),t(4096,"code"),e(4097,"color-07"),n()(),t(4098,"li"),i(4099,"span",60),t(4100,"code"),e(4101,"color-08"),n()(),t(4102,"li"),i(4103,"span",61),t(4104,"code"),e(4105,"color-09"),n()(),t(4106,"li"),i(4107,"span",62),t(4108,"code"),e(4109,"color-10"),n()(),t(4110,"li"),i(4111,"span",63),t(4112,"code"),e(4113,"color-11"),n()(),t(4114,"li"),i(4115,"span",64),t(4116,"code"),e(4117,"color-12"),n()()(),t(4118,"blockquote")(4119,"p"),e(4120,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(4121,"strong"),e(4122,"Caption Tag Colors"),n(),e(4123,":"),n()(),t(4124,"ul")(4125,"li"),i(4126,"span",65),t(4127,"code"),e(4128,"caption-tag-01"),n(),i(4129,"span",66),t(4130,"code"),e(4131,"caption-tag-02"),n(),i(4132,"span",67),t(4133,"code"),e(4134,"caption-tag-03"),n(),i(4135,"span",68),t(4136,"code"),e(4137,"caption-tag-04"),n(),i(4138,"span",69),t(4139,"code"),e(4140,"caption-tag-05"),n()(),t(4141,"li"),i(4142,"span",70),t(4143,"code"),e(4144,"caption-tag-06"),n(),i(4145,"span",71),t(4146,"code"),e(4147,"caption-tag-07"),n(),i(4148,"span",72),t(4149,"code"),e(4150,"caption-tag-08"),n(),i(4151,"span",73),t(4152,"code"),e(4153,"caption-tag-09"),n(),i(4154,"span",74),t(4155,"code"),e(4156,"caption-tag-10"),n()(),t(4157,"li"),i(4158,"span",75),t(4159,"code"),e(4160,"caption-tag-11"),n(),i(4161,"span",76),t(4162,"code"),e(4163,"caption-tag-12"),n(),i(4164,"span",77),t(4165,"code"),e(4166,"caption-tag-13"),n(),i(4167,"span",78),t(4168,"code"),e(4169,"caption-tag-14"),n(),i(4170,"span",79),t(4171,"code"),e(4172,"caption-tag-15"),n()(),t(4173,"li"),i(4174,"span",80),t(4175,"code"),e(4176,"caption-tag-16"),n(),i(4177,"span",81),t(4178,"code"),e(4179,"caption-tag-17"),n(),i(4180,"span",82),t(4181,"code"),e(4182,"caption-tag-18"),n(),i(4183,"span",83),t(4184,"code"),e(4185,"caption-tag-19"),n(),i(4186,"span",84),t(4187,"code"),e(4188,"caption-tag-20"),n()(),t(4189,"li"),i(4190,"span",85),t(4191,"code"),e(4192,"caption-tag-21"),n(),i(4193,"span",86),t(4194,"code"),e(4195,"caption-tag-22"),n(),i(4196,"span",87),t(4197,"code"),e(4198,"caption-tag-23"),n(),i(4199,"span",88),t(4200,"code"),e(4201,"caption-tag-24"),n(),i(4202,"span",89),t(4203,"code"),e(4204,"caption-tag-25"),n()(),t(4205,"li"),i(4206,"span",90),t(4207,"code"),e(4208,"caption-tag-26"),n(),i(4209,"span",91),t(4210,"code"),e(4211,"caption-tag-27"),n(),i(4212,"span",92),t(4213,"code"),e(4214,"caption-tag-28"),n(),i(4215,"span",93),t(4216,"code"),e(4217,"caption-tag-29"),n(),i(4218,"span",94),t(4219,"code"),e(4220,"caption-tag-30"),n()(),t(4221,"li"),i(4222,"span",95),t(4223,"code"),e(4224,"caption-tag-31"),n(),i(4225,"span",96),t(4226,"code"),e(4227,"caption-tag-32"),n(),i(4228,"span",97),t(4229,"code"),e(4230,"caption-tag-33"),n(),i(4231,"span",98),t(4232,"code"),e(4233,"caption-tag-34"),n(),i(4234,"span",99),t(4235,"code"),e(4236,"caption-tag-35"),n()()()()(),t(4237,"tr",17)(4238,"td",18)(4239,"div",19)(4240,"span",20),e(4241," disabled"),i(4242,"br"),n()()(),t(4243,"td",21)(4244,"code",47),e(4245,"Function"),n()(),t(4246,"td",24)(4247,"em")(4248,"strong"),e(4249,"(opcional)"),n()(),t(4250,"p"),e(4251,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),n()()(),t(4252,"tr",17)(4253,"td",18)(4254,"div",19)(4255,"span",20),e(4256," icon"),i(4257,"br"),n()()(),t(4258,"td",21)(4259,"code",31),e(4260,"string "),n(),t(4261,"code",48),e(4262," TemplateRef<void>"),n()(),t(4263,"td",24)(4264,"em")(4265,"strong"),e(4266,"(opcional)"),n()(),t(4267,"p"),e(4268,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(4269,"a",26),e(4270,"Biblioteca de \xEDcones"),n(),e(4271,". conforme exemplo abaixo:"),n(),t(4272,"pre")(4273,"code"),e(4274,`[ { icon: 'an an-plus' } ]
`),n()(),t(4275,"p"),e(4276,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(4277,"pre")(4278,"code"),e(4279,`[ {  icon: 'fas fa-plus' } ]
`),n()(),t(4280,"p"),e(4281,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(4282,"code"),e(4283,"TemplateRef"),n(),e(4284,`, conforme exemplo abaixo:
`),t(4285,"code"),e(4286,"component.html"),n(),e(4287,":"),n(),t(4288,"pre")(4289,"code"),e(4290,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),n()(),t(4291,"p")(4292,"code"),e(4293,"component.ts"),n(),e(4294,":"),n(),t(4295,"pre")(4296,"code"),e(4297,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),n()(),t(4298,"blockquote")(4299,"p"),e(4300,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),t(4301,"code"),e(4302,"value"),n(),e(4303,"."),n()()()(),t(4304,"tr",17)(4305,"td",18)(4306,"div",19)(4307,"span",20),e(4308," tooltip"),i(4309,"br"),n()()(),t(4310,"td",21)(4311,"code",31),e(4312,"string"),n()(),t(4313,"td",24)(4314,"em")(4315,"strong"),e(4316,"(opcional)"),n()(),t(4317,"p"),e(4318,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(4319,"em"),e(4320,"mouse"),n(),e(4321," em cima do \xEDcone."),n()()(),t(4322,"tr",17)(4323,"td",18)(4324,"div",19)(4325,"span",20),e(4326," value"),i(4327,"br"),n()()(),t(4328,"td",21)(4329,"code",31),e(4330,"string"),n()(),t(4331,"td",24)(4332,"p"),e(4333,"Define o valor do \xEDcone que ser\xE1 exibido."),n()()()(),t(4334,"h4",46)(4335,"code",5),e(4336,"PoTableColumnLabel"),n()(),t(4337,"div",2)(4338,"p"),e(4339,"Interface para configura\xE7\xE3o das colunas de labels do "),t(4340,"code"),e(4341,"po-table"),n(),e(4342,"."),n()(),t(4343,"h4",13),e(4344,"Propriedades"),n(),t(4345,"table",14)(4346,"tr",15)(4347,"th",16),e(4348,"Nome"),n(),t(4349,"th",16),e(4350,"Tipo"),n(),t(4351,"th",16),e(4352,"Descri\xE7\xE3o"),n()(),t(4353,"tr",17)(4354,"td",18)(4355,"div",19)(4356,"span",20),e(4357," color"),i(4358,"br"),n()()(),t(4359,"td",21)(4360,"code",31),e(4361,"string"),n()(),t(4362,"td",24)(4363,"em")(4364,"strong"),e(4365,"(opcional)"),n()(),t(4366,"p"),e(4367,"Define a cor do label."),n(),t(4368,"p"),e(4369,"Valores v\xE1lidos:"),n(),t(4370,"ul")(4371,"li"),i(4372,"span",53),t(4373,"code"),e(4374,"color-01"),n()(),t(4375,"li"),i(4376,"span",54),t(4377,"code"),e(4378,"color-02"),n()(),t(4379,"li"),i(4380,"span",55),t(4381,"code"),e(4382,"color-03"),n()(),t(4383,"li"),i(4384,"span",56),t(4385,"code"),e(4386,"color-04"),n()(),t(4387,"li"),i(4388,"span",57),t(4389,"code"),e(4390,"color-05"),n()(),t(4391,"li"),i(4392,"span",58),t(4393,"code"),e(4394,"color-06"),n()(),t(4395,"li"),i(4396,"span",59),t(4397,"code"),e(4398,"color-07"),n()(),t(4399,"li"),i(4400,"span",60),t(4401,"code"),e(4402,"color-08"),n()(),t(4403,"li"),i(4404,"span",61),t(4405,"code"),e(4406,"color-09"),n()(),t(4407,"li"),i(4408,"span",62),t(4409,"code"),e(4410,"color-10"),n()(),t(4411,"li"),i(4412,"span",63),t(4413,"code"),e(4414,"color-11"),n()(),t(4415,"li"),i(4416,"span",64),t(4417,"code"),e(4418,"color-12"),n()()(),t(4419,"blockquote")(4420,"p"),e(4421,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(4422,"strong"),e(4423,"Caption Tag Colors"),n(),e(4424,":"),n()(),t(4425,"ul")(4426,"li"),i(4427,"span",65),t(4428,"code"),e(4429,"caption-tag-01"),n(),i(4430,"span",66),t(4431,"code"),e(4432,"caption-tag-02"),n(),i(4433,"span",67),t(4434,"code"),e(4435,"caption-tag-03"),n(),i(4436,"span",68),t(4437,"code"),e(4438,"caption-tag-04"),n(),i(4439,"span",69),t(4440,"code"),e(4441,"caption-tag-05"),n()(),t(4442,"li"),i(4443,"span",70),t(4444,"code"),e(4445,"caption-tag-06"),n(),i(4446,"span",71),t(4447,"code"),e(4448,"caption-tag-07"),n(),i(4449,"span",72),t(4450,"code"),e(4451,"caption-tag-08"),n(),i(4452,"span",73),t(4453,"code"),e(4454,"caption-tag-09"),n(),i(4455,"span",74),t(4456,"code"),e(4457,"caption-tag-10"),n()(),t(4458,"li"),i(4459,"span",75),t(4460,"code"),e(4461,"caption-tag-11"),n(),i(4462,"span",76),t(4463,"code"),e(4464,"caption-tag-12"),n(),i(4465,"span",77),t(4466,"code"),e(4467,"caption-tag-13"),n(),i(4468,"span",78),t(4469,"code"),e(4470,"caption-tag-14"),n(),i(4471,"span",79),t(4472,"code"),e(4473,"caption-tag-15"),n()(),t(4474,"li"),i(4475,"span",80),t(4476,"code"),e(4477,"caption-tag-16"),n(),i(4478,"span",81),t(4479,"code"),e(4480,"caption-tag-17"),n(),i(4481,"span",82),t(4482,"code"),e(4483,"caption-tag-18"),n(),i(4484,"span",83),t(4485,"code"),e(4486,"caption-tag-19"),n(),i(4487,"span",84),t(4488,"code"),e(4489,"caption-tag-20"),n()(),t(4490,"li"),i(4491,"span",85),t(4492,"code"),e(4493,"caption-tag-21"),n(),i(4494,"span",86),t(4495,"code"),e(4496,"caption-tag-22"),n(),i(4497,"span",87),t(4498,"code"),e(4499,"caption-tag-23"),n(),i(4500,"span",88),t(4501,"code"),e(4502,"caption-tag-24"),n(),i(4503,"span",89),t(4504,"code"),e(4505,"caption-tag-25"),n()(),t(4506,"li"),i(4507,"span",90),t(4508,"code"),e(4509,"caption-tag-26"),n(),i(4510,"span",91),t(4511,"code"),e(4512,"caption-tag-27"),n(),i(4513,"span",92),t(4514,"code"),e(4515,"caption-tag-28"),n(),i(4516,"span",93),t(4517,"code"),e(4518,"caption-tag-29"),n(),i(4519,"span",94),t(4520,"code"),e(4521,"caption-tag-30"),n()(),t(4522,"li"),i(4523,"span",95),t(4524,"code"),e(4525,"caption-tag-31"),n(),i(4526,"span",96),t(4527,"code"),e(4528,"caption-tag-32"),n(),i(4529,"span",97),t(4530,"code"),e(4531,"caption-tag-33"),n(),i(4532,"span",98),t(4533,"code"),e(4534,"caption-tag-34"),n(),i(4535,"span",99),t(4536,"code"),e(4537,"caption-tag-35"),n()()(),t(4538,"p"),e(4539,"Exemplo de uso:"),n(),t(4540,"pre")(4541,"code"),e(4542,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),n()()()(),t(4543,"tr",17)(4544,"td",18)(4545,"div",19)(4546,"span",20),e(4547," icon"),i(4548,"br"),n()()(),t(4549,"td",21)(4550,"code",22),e(4551,"boolean "),n(),t(4552,"code",31),e(4553," string "),n(),t(4554,"code",48),e(4555," TemplateRef<void>"),n()(),t(4556,"td",24)(4557,"em")(4558,"strong"),e(4559,"(opcional)"),n()(),t(4560,"p"),e(4561,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),t(4562,"em"),e(4563,"tag"),n(),e(4564,"."),n(),t(4565,"p"),e(4566,"Quando "),t(4567,"code"),e(4568,"p-type"),n(),e(4569," estiver definida, basta informar um valor igual a "),t(4570,"code"),e(4571,"true"),n(),e(4572," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),t(4573,"ul")(4574,"li"),i(4575,"span",114),e(4576," - "),t(4577,"code"),e(4578,"success"),n()(),t(4579,"li"),i(4580,"span",115),e(4581," - "),t(4582,"code"),e(4583,"warning"),n()(),t(4584,"li"),i(4585,"span",116),e(4586," - "),t(4587,"code"),e(4588,"danger"),n()(),t(4589,"li"),i(4590,"span",117),e(4591," - "),t(4592,"code"),e(4593,"info"),n()()(),t(4594,"p"),e(4595,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(4596,"a",26),e(4597,"Biblioteca de \xEDcones"),n(),e(4598,". conforme exemplo abaixo:"),n(),t(4599,"pre")(4600,"code"),e(4601,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),t(4602,"p"),e(4603,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(4604,"em"),e(4605,"Font Awesome"),n(),e(4606,", da seguinte forma:"),n(),t(4607,"pre")(4608,"code"),e(4609,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),t(4610,"p"),e(4611,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(4612,"code"),e(4613,"TemplateRef"),n(),e(4614,", conforme exemplo abaixo:"),n(),t(4615,"pre")(4616,"code"),e(4617,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),t(4618,"blockquote")(4619,"p"),e(4620,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(4621,"code"),e(4622,"font-size: inherit"),n(),e(4623," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),t(4624,"tr",17)(4625,"td",18)(4626,"div",19)(4627,"span",20),e(4628," label"),i(4629,"br"),n()()(),t(4630,"td",21)(4631,"code",31),e(4632,"string"),n()(),t(4633,"td",24)(4634,"p"),e(4635,"Texto que ser\xE1 exibido na coluna."),n()()(),t(4636,"tr",17)(4637,"td",18)(4638,"div",19)(4639,"span",20),e(4640," textColor"),i(4641,"br"),n()()(),t(4642,"td",21)(4643,"code",31),e(4644,"string"),n()(),t(4645,"td",24)(4646,"em")(4647,"strong"),e(4648,"(opcional)"),n()(),t(4649,"p"),e(4650,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),t(4651,"ul")(4652,"li")(4653,"p"),e(4654,"Hexadeximal, por exemplo "),t(4655,"code"),e(4656,"#c64840"),n(),e(4657,";"),n()(),t(4658,"li")(4659,"p"),e(4660,"RGB, como "),t(4661,"code"),e(4662,"rgb(0, 0, 165)"),n(),e(4663,";"),n()(),t(4664,"li")(4665,"p"),e(4666,"O nome da cor, por exemplo "),t(4667,"code"),e(4668,"blue"),n(),e(4669,";"),n()(),t(4670,"li")(4671,"p"),e(4672,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),t(4673,"ul")(4674,"li"),i(4675,"span",53),t(4676,"code"),e(4677,"color-01"),n()(),t(4678,"li"),i(4679,"span",54),t(4680,"code"),e(4681,"color-02"),n()(),t(4682,"li"),i(4683,"span",55),t(4684,"code"),e(4685,"color-03"),n()(),t(4686,"li"),i(4687,"span",56),t(4688,"code"),e(4689,"color-04"),n()(),t(4690,"li"),i(4691,"span",57),t(4692,"code"),e(4693,"color-05"),n()(),t(4694,"li"),i(4695,"span",58),t(4696,"code"),e(4697,"color-06"),n()(),t(4698,"li"),i(4699,"span",59),t(4700,"code"),e(4701,"color-07"),n()(),t(4702,"li"),i(4703,"span",60),t(4704,"code"),e(4705,"color-08"),n()(),t(4706,"li"),i(4707,"span",61),t(4708,"code"),e(4709,"color-09"),n()(),t(4710,"li"),i(4711,"span",62),t(4712,"code"),e(4713,"color-10"),n()(),t(4714,"li"),i(4715,"span",63),t(4716,"code"),e(4717,"color-11"),n()(),t(4718,"li"),i(4719,"span",64),t(4720,"code"),e(4721,"color-12"),n()()()(),t(4722,"li")(4723,"p"),e(4724,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),t(4725,"blockquote")(4726,"p")(4727,"strong"),e(4728,"Aten\xE7\xE3o:"),n(),e(4729," A propriedade "),t(4730,"code"),e(4731,"p-type"),n(),e(4732," sobrep\xF5e esta defini\xE7\xE3o."),n()(),t(4733,"blockquote")(4734,"p")(4735,"strong"),e(4736,"Aten\xE7\xE3o:"),n(),e(4737," As cores da paleta "),t(4738,"strong"),e(4739,"Caption Tag Colors"),n(),e(4740," ("),t(4741,"code"),e(4742,"caption-tag-01"),n(),e(4743," a "),t(4744,"code"),e(4745,"caption-tag-35"),n(),e(4746,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),n()()()(),t(4747,"tr",17)(4748,"td",18)(4749,"div",19)(4750,"span",20),e(4751," tooltip"),i(4752,"br"),n()()(),t(4753,"td",21)(4754,"code",31),e(4755,"string"),n()(),t(4756,"td",24)(4757,"em")(4758,"strong"),e(4759,"(opcional)"),n()(),t(4760,"p"),e(4761,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(4762,"em"),e(4763,"mouse"),n(),e(4764," em cima do "),t(4765,"em"),e(4766,"label"),n(),e(4767,"."),n(),t(4768,"blockquote")(4769,"p"),e(4770,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),n()()()(),t(4771,"tr",17)(4772,"td",18)(4773,"div",19)(4774,"span",20),e(4775," type"),i(4776,"br"),n()()(),t(4777,"td",21)(4778,"code",118),e(4779,"PoTagType"),n()(),t(4780,"td",24)(4781,"em")(4782,"strong"),e(4783,"(opcional)"),n()(),t(4784,"p"),e(4785,"Define o tipo da "),t(4786,"em"),e(4787,"tag"),n(),e(4788,"."),n(),t(4789,"p"),e(4790,"Valores v\xE1lidos:"),n(),t(4791,"ul")(4792,"li")(4793,"code"),e(4794,"success"),n(),e(4795,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),t(4796,"li")(4797,"code"),e(4798,"warning"),n(),e(4799,": cor amarela que representa aviso ou advert\xEAncia."),n(),t(4800,"li")(4801,"code"),e(4802,"danger"),n(),e(4803,": cor vermelha para erro ou aviso cr\xEDtico."),n(),t(4804,"li")(4805,"code"),e(4806,"info"),n(),e(4807,": cor cinza escuro que caracteriza conte\xFAdo informativo."),n()(),t(4808,"blockquote")(4809,"p"),e(4810,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),t(4811,"code"),e(4812,"p-color"),n(),e(4813," e "),t(4814,"code"),e(4815,"p-icon"),n(),e(4816," somente ser\xE1 exibido caso seja "),t(4817,"code"),e(4818,"true"),n(),e(4819,"."),n()()()(),t(4820,"tr",17)(4821,"td",18)(4822,"div",19)(4823,"span",20),e(4824," value"),i(4825,"br"),n()()(),t(4826,"td",21)(4827,"code",31),e(4828,"string "),n(),t(4829,"code",35),e(4830," number"),n()(),t(4831,"td",24)(4832,"p"),e(4833,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(4834,"h4",46)(4835,"code",5),e(4836,"PoTableDetailColumn"),n()(),t(4837,"div",2)(4838,"p"),e(4839,"Interface para configura\xE7\xE3o das colunas do "),t(4840,"code"),e(4841,"po-table-detail"),n(),e(4842,"."),n()(),t(4843,"h4",13),e(4844,"Propriedades"),n(),t(4845,"table",14)(4846,"tr",15)(4847,"th",16),e(4848,"Nome"),n(),t(4849,"th",16),e(4850,"Tipo"),n(),t(4851,"th",16),e(4852,"Descri\xE7\xE3o"),n()(),t(4853,"tr",17)(4854,"td",18)(4855,"div",19)(4856,"span",20),e(4857," format"),i(4858,"br"),n()()(),t(4859,"td",21)(4860,"code",31),e(4861,"string"),n()(),t(4862,"td",24)(4863,"em")(4864,"strong"),e(4865,"(opcional)"),n()(),t(4866,"p"),e(4867,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(4868,"ul")(4869,"li")(4870,"p"),e(4871,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n()(),t(4872,"li")(4873,"p"),e(4874,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n()(),t(4875,"li")(4876,"p"),e(4877,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n()(),t(4878,"li")(4879,"p"),e(4880,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(4881,"a",119)(4882,"strong"),e(4883,"DecimalPipe"),n()(),e(4884," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),n(),t(4885,"ul")(4886,"li"),e(4887,"Valor de entrada: "),t(4888,"code"),e(4889,"50"),n(),e(4890," e valor para formata\xE7\xE3o: "),t(4891,"code"),e(4892,"'1.2-5'"),n(),e(4893," o resultado ser\xE1: "),t(4894,"code"),e(4895,"50.00"),n()()()()()()(),t(4896,"tr",17)(4897,"td",18)(4898,"div",19)(4899,"span",20),e(4900," label"),i(4901,"br"),n()()(),t(4902,"td",21)(4903,"code",31),e(4904,"string"),n()(),t(4905,"td",24)(4906,"em")(4907,"strong"),e(4908,"(opcional)"),n()(),t(4909,"p"),e(4910,"Texto para t\xEDtulo da coluna."),n()()(),t(4911,"tr",17)(4912,"td",18)(4913,"div",19)(4914,"span",20),e(4915," property"),i(4916,"br"),n()()(),t(4917,"td",21)(4918,"code",31),e(4919,"string"),n()(),t(4920,"td",24)(4921,"em")(4922,"strong"),e(4923,"(opcional)"),n()(),t(4924,"p"),e(4925,"Nome identificador da coluna."),n()()(),t(4926,"tr",17)(4927,"td",18)(4928,"div",19)(4929,"span",20),e(4930," type"),i(4931,"br"),n()()(),t(4932,"td",21)(4933,"code",31),e(4934,"string"),n()(),t(4935,"td",24)(4936,"em")(4937,"strong"),e(4938,"(opcional)"),n()(),t(4939,"p"),e(4940,"Tipo da coluna."),n(),t(4941,"p"),e(4942,"Valores v\xE1lidos:"),n(),t(4943,"ul")(4944,"li")(4945,"p")(4946,"code"),e(4947,"currency"),n(),e(4948,": valores monet\xE1rios."),n()(),t(4949,"li")(4950,"p")(4951,"code"),e(4952,"date"),n(),e(4953,": valor de datas."),n(),t(4954,"ul")(4955,"li"),e(4956,"Aceita os tipos "),t(4957,"em"),e(4958,"string"),n(),e(4959," e "),t(4960,"em"),e(4961,"Date"),n(),e(4962,` padr\xE3o do Javascript,
por exemplo: `),t(4963,"code"),e(4964,"'2017-11-28'"),n(),e(4965," ou "),t(4966,"code"),e(4967,"new Date(2017, 10, 28)"),n(),e(4968,"."),n()()(),t(4969,"li")(4970,"p")(4971,"code"),e(4972,"time"),n(),e(4973,": valor de hor\xE1rio."),n()(),t(4974,"li")(4975,"p")(4976,"code"),e(4977,"number"),n(),e(4978,": valores num\xE9ricos."),n()(),t(4979,"li")(4980,"p")(4981,"code"),e(4982,"dateTime"),n(),e(4983,": valor de data com hor\xE1rio."),n(),t(4984,"ul")(4985,"li"),e(4986,"Aceita o tipo "),t(4987,"em"),e(4988,"string"),n(),e(4989," no formato "),t(4990,"strong"),e(4991,"ISO-8601"),n(),e(4992," extendido "),t(4993,"strong"),e(4994,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(4995,`
e o tipo `),t(4996,"em"),e(4997,"Date"),n(),e(4998," padr\xE3o do Javascript, por exemplo: "),t(4999,"code"),e(5e3,"'2017-11-28T00:00:00-02:00'"),n(),e(5001," ou "),t(5002,"code"),e(5003,"new Date(2017, 10, 28)"),n(),e(5004,"."),n(),t(5005,"li"),e(5006,"Aceita o tipo "),t(5007,"em"),e(5008,"string"),n(),e(5009," nos formatos "),t(5010,"strong"),e(5011,"'HH:mm:ss'"),n(),e(5012," ou "),t(5013,"strong"),e(5014,"'HH:mm:ss.ffffff'"),n(),e(5015,", por exemplo: "),t(5016,"code"),e(5017,"'23:12:45'"),n(),e(5018,"."),n()()()()()()(),t(5019,"h4",46)(5020,"code",5),e(5021,"PoTableDetail"),n()(),t(5022,"div",2)(5023,"p"),e(5024,"Interface para configura\xE7\xE3o do "),t(5025,"em"),e(5026,"detail"),n(),e(5027," do componente "),t(5028,"code"),e(5029,"po-table"),n(),e(5030,"."),n()(),t(5031,"h4",13),e(5032,"Propriedades"),n(),t(5033,"table",14)(5034,"tr",15)(5035,"th",16),e(5036,"Nome"),n(),t(5037,"th",16),e(5038,"Tipo"),n(),t(5039,"th",16),e(5040,"Descri\xE7\xE3o"),n()(),t(5041,"tr",17)(5042,"td",18)(5043,"div",19)(5044,"span",20),e(5045," columns"),i(5046,"br"),n()()(),t(5047,"td",21)(5048,"code",120),e(5049,"Array<PoTableDetailColumn>"),n()(),t(5050,"td",24)(5051,"p"),e(5052,"Define uma lista do tipo "),t(5053,"code"),e(5054,"PoTableDetailColumn"),n(),e(5055," para as colunas do objet "),t(5056,"em"),e(5057,"detail"),n(),e(5058,". Por exemplo:"),n(),t(5059,"pre")(5060,"code"),e(5061,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),n()()()(),t(5062,"tr",17)(5063,"td",18)(5064,"div",19)(5065,"span",20),e(5066," hideSelect"),i(5067,"br"),n()()(),t(5068,"td",21)(5069,"code",22),e(5070,"boolean"),n()(),t(5071,"td",24)(5072,"em")(5073,"strong"),e(5074,"(opcional)"),n()(),t(5075,"p"),e(5076,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),n()()(),t(5077,"tr",17)(5078,"td",18)(5079,"div",19)(5080,"span",20),e(5081," typeHeader"),i(5082,"br"),n()()(),t(5083,"td",21)(5084,"code",31),e(5085,"string"),n()(),t(5086,"td",24)(5087,"em")(5088,"strong"),e(5089,"(opcional)"),n()(),t(5090,"p"),e(5091,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),t(5092,"em"),e(5093,"detail"),n(),e(5094," ."),n(),t(5095,"p"),e(5096,"Valores v\xE1lidos:"),n(),t(5097,"ul")(5098,"li")(5099,"code"),e(5100,"inline"),n(),e(5101,": Atribui o cabe\xE7alho na mesma linha do "),t(5102,"em"),e(5103,"detail"),n(),e(5104,"."),n(),t(5105,"li")(5106,"code"),e(5107,"top"),n(),e(5108,": Atribui o cabe\xE7alho acima do "),t(5109,"em"),e(5110,"detail"),n(),e(5111,", id\xEAntico ao "),t(5112,"code"),e(5113,"po-table"),n(),e(5114,"."),n(),t(5115,"li")(5116,"code"),e(5117,"none"),n(),e(5118,": Remove o cabe\xE7alho do "),t(5119,"em"),e(5120,"detail"),n(),e(5121,"."),n()()()()(),t(5122,"h4",46)(5123,"code",5),e(5124,"PoTableSubtitleColumn"),n()(),t(5125,"div",2)(5126,"p"),e(5127,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),n()(),t(5128,"h4",13),e(5129,"Propriedades"),n(),t(5130,"table",14)(5131,"tr",15)(5132,"th",16),e(5133,"Nome"),n(),t(5134,"th",16),e(5135,"Tipo"),n(),t(5136,"th",16),e(5137,"Descri\xE7\xE3o"),n()(),t(5138,"tr",17)(5139,"td",18)(5140,"div",19)(5141,"span",20),e(5142," color"),i(5143,"br"),n()()(),t(5144,"td",21)(5145,"code",31),e(5146,"string"),n()(),t(5147,"td",24)(5148,"em")(5149,"strong"),e(5150,"(opcional)"),n()(),t(5151,"p"),e(5152,"Define a cor do "),t(5153,"em"),e(5154,"status"),n(),e(5155,"."),n(),t(5156,"p"),e(5157,"Valores v\xE1lidos:"),n(),t(5158,"ul")(5159,"li"),i(5160,"span",53),t(5161,"code"),e(5162,"color-01"),n()(),t(5163,"li"),i(5164,"span",54),t(5165,"code"),e(5166,"color-02"),n()(),t(5167,"li"),i(5168,"span",55),t(5169,"code"),e(5170,"color-03"),n()(),t(5171,"li"),i(5172,"span",56),t(5173,"code"),e(5174,"color-04"),n()(),t(5175,"li"),i(5176,"span",57),t(5177,"code"),e(5178,"color-05"),n()(),t(5179,"li"),i(5180,"span",58),t(5181,"code"),e(5182,"color-06"),n()(),t(5183,"li"),i(5184,"span",59),t(5185,"code"),e(5186,"color-07"),n()(),t(5187,"li"),i(5188,"span",60),t(5189,"code"),e(5190,"color-08"),n()(),t(5191,"li"),i(5192,"span",61),t(5193,"code"),e(5194,"color-09"),n()(),t(5195,"li"),i(5196,"span",62),t(5197,"code"),e(5198,"color-10"),n()(),t(5199,"li"),i(5200,"span",63),t(5201,"code"),e(5202,"color-11"),n()(),t(5203,"li"),i(5204,"span",64),t(5205,"code"),e(5206,"color-12"),n()()(),t(5207,"blockquote")(5208,"p"),e(5209,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(5210,"strong"),e(5211,"Caption Tag Colors"),n(),e(5212,":"),n()(),t(5213,"ul")(5214,"li"),i(5215,"span",65),t(5216,"code"),e(5217,"caption-tag-01"),n(),i(5218,"span",66),t(5219,"code"),e(5220,"caption-tag-02"),n(),i(5221,"span",67),t(5222,"code"),e(5223,"caption-tag-03"),n(),i(5224,"span",68),t(5225,"code"),e(5226,"caption-tag-04"),n(),i(5227,"span",69),t(5228,"code"),e(5229,"caption-tag-05"),n()(),t(5230,"li"),i(5231,"span",70),t(5232,"code"),e(5233,"caption-tag-06"),n(),i(5234,"span",71),t(5235,"code"),e(5236,"caption-tag-07"),n(),i(5237,"span",72),t(5238,"code"),e(5239,"caption-tag-08"),n(),i(5240,"span",73),t(5241,"code"),e(5242,"caption-tag-09"),n(),i(5243,"span",74),t(5244,"code"),e(5245,"caption-tag-10"),n()(),t(5246,"li"),i(5247,"span",75),t(5248,"code"),e(5249,"caption-tag-11"),n(),i(5250,"span",76),t(5251,"code"),e(5252,"caption-tag-12"),n(),i(5253,"span",77),t(5254,"code"),e(5255,"caption-tag-13"),n(),i(5256,"span",78),t(5257,"code"),e(5258,"caption-tag-14"),n(),i(5259,"span",79),t(5260,"code"),e(5261,"caption-tag-15"),n()(),t(5262,"li"),i(5263,"span",80),t(5264,"code"),e(5265,"caption-tag-16"),n(),i(5266,"span",81),t(5267,"code"),e(5268,"caption-tag-17"),n(),i(5269,"span",82),t(5270,"code"),e(5271,"caption-tag-18"),n(),i(5272,"span",83),t(5273,"code"),e(5274,"caption-tag-19"),n(),i(5275,"span",84),t(5276,"code"),e(5277,"caption-tag-20"),n()(),t(5278,"li"),i(5279,"span",85),t(5280,"code"),e(5281,"caption-tag-21"),n(),i(5282,"span",86),t(5283,"code"),e(5284,"caption-tag-22"),n(),i(5285,"span",87),t(5286,"code"),e(5287,"caption-tag-23"),n(),i(5288,"span",88),t(5289,"code"),e(5290,"caption-tag-24"),n(),i(5291,"span",89),t(5292,"code"),e(5293,"caption-tag-25"),n()(),t(5294,"li"),i(5295,"span",90),t(5296,"code"),e(5297,"caption-tag-26"),n(),i(5298,"span",91),t(5299,"code"),e(5300,"caption-tag-27"),n(),i(5301,"span",92),t(5302,"code"),e(5303,"caption-tag-28"),n(),i(5304,"span",93),t(5305,"code"),e(5306,"caption-tag-29"),n(),i(5307,"span",94),t(5308,"code"),e(5309,"caption-tag-30"),n()(),t(5310,"li"),i(5311,"span",95),t(5312,"code"),e(5313,"caption-tag-31"),n(),i(5314,"span",96),t(5315,"code"),e(5316,"caption-tag-32"),n(),i(5317,"span",97),t(5318,"code"),e(5319,"caption-tag-33"),n(),i(5320,"span",98),t(5321,"code"),e(5322,"caption-tag-34"),n(),i(5323,"span",99),t(5324,"code"),e(5325,"caption-tag-35"),n()()()()(),t(5326,"tr",17)(5327,"td",18)(5328,"div",19)(5329,"span",20),e(5330," content"),i(5331,"br"),n()()(),t(5332,"td",21)(5333,"code",31),e(5334,"string"),n()(),t(5335,"td",24)(5336,"p"),e(5337,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),n()()(),t(5338,"tr",17)(5339,"td",18)(5340,"div",19)(5341,"span",20),e(5342," label"),i(5343,"br"),n()()(),t(5344,"td",21)(5345,"code",31),e(5346,"string"),n()(),t(5347,"td",24)(5348,"p"),e(5349,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),n()()(),t(5350,"tr",17)(5351,"td",18)(5352,"div",19)(5353,"span",20),e(5354," value"),i(5355,"br"),n()()(),t(5356,"td",21)(5357,"code",31),e(5358,"string "),n(),t(5359,"code",35),e(5360," number"),n()(),t(5361,"td",24)(5362,"p"),e(5363,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(5364,"h3"),e(5365,"Enums"),n(),t(5366,"h4",4)(5367,"code",5),e(5368,"PoTableColumnSortType"),n()(),t(5369,"div",2)(5370,"p"),e(5371,"Tipos de ordena\xE7\xE3o das colunas da tabela."),n()(),t(5372,"h4",13),e(5373,"Propriedades"),n(),t(5374,"table",14)(5375,"tr",15)(5376,"th",16),e(5377,"Nome"),n(),t(5378,"th",16),e(5379,"Descri\xE7\xE3o"),n()(),t(5380,"tr",17)(5381,"td",18)(5382,"div",19)(5383,"span",20),e(5384," Ascending"),i(5385,"br"),n()()(),t(5386,"td",24)(5387,"p"),e(5388,"Ordena\xE7\xE3o ascendente"),n()()(),t(5389,"tr",17)(5390,"td",18)(5391,"div",19)(5392,"span",20),e(5393," Descending"),i(5394,"br"),n()()(),t(5395,"td",24)(5396,"p"),e(5397,"Ordena\xE7\xE3o descendente"),n()()()(),t(5398,"h4",4)(5399,"code",5),e(5400,"PoTableColumnSpacing"),n()(),t(5401,"div",2)(5402,"p"),e(5403,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),t(5404,"strong"),e(5405,"p-spacing"),n(),e(5406,") do po-table."),n()(),t(5407,"h4",13),e(5408,"Propriedades"),n(),t(5409,"table",14)(5410,"tr",15)(5411,"th",16),e(5412,"Nome"),n(),t(5413,"th",16),e(5414,"Descri\xE7\xE3o"),n()(),t(5415,"tr",17)(5416,"td",18)(5417,"div",19)(5418,"span",20),e(5419," ExtraSmall"),i(5420,"br"),n()()(),t(5421,"td",24)(5422,"p"),e(5423,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),n()()(),t(5424,"tr",17)(5425,"td",18)(5426,"div",19)(5427,"span",20),e(5428," Small"),i(5429,"br"),n()()(),t(5430,"td",24)(5431,"p"),e(5432,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),n()()(),t(5433,"tr",17)(5434,"td",18)(5435,"div",19)(5436,"span",20),e(5437," Medium"),i(5438,"br"),n()()(),t(5439,"td",24)(5440,"p"),e(5441,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),n()()(),t(5442,"tr",17)(5443,"td",18)(5444,"div",19)(5445,"span",20),e(5446," Large"),i(5447,"br"),n()()(),t(5448,"td",24)(5449,"p"),e(5450,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),n()()()()())},dependencies:[w],encapsulation:2})}return r})();var ct=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(_(Me),_(me))};static \u0275cmp=E({type:r,selectors:[["ng-component"]],standalone:!1,decls:14,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-table-doc"),n(),t(4,"po-tab",3),u("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view")(13,"sample-po-table-search-ai-view"),n()()()),l&2&&(c("p-actions",a.actions),d(2),c("p-active",a.activeTab==="doc"),d(2),c("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[je,T,P,Ge,Xe,Ze,et,nt,at,lt,mt,st,pt],encapsulation:2})}return r})();var ln=[{path:"",component:ct}],ut=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Y({type:r});static \u0275inj=Z({imports:[he.forChild(ln),he]})}return r})();var bi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Y({type:r});static \u0275inj=Z({imports:[Ue,ut]})}return r})();export{bi as DocPoTableModule};
