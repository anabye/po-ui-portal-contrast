import{o as y,p as Me}from"./chunk-SZYRYMUF.js";import{Ab as k,Bb as C,Ca as ne,Ga as Fe,Ia as q,M as ee,Ra as R,S as Le,Sa as we,U as te,Wa as W,a as j,ia as ie,k as Pe,nb as qe,w as B}from"./chunk-EE3MJEPH.js";import{$a as Se,A as ce,Aa as Ee,Fa as c,Ga as i,Ha as t,I as O,Ia as n,J as K,Kc as re,M as g,Nb as w,Nc as D,Oc as H,P as h,Pa as $,Pc as Z,Q as f,Qa as E,Qc as _,Rc as N,Sa as xe,Uc as he,Vc as fe,Yb as ve,Zc as ke,cb as P,db as e,dd as Ce,fb as L,fd as ye,g as J,hb as x,hd as me,ia as d,ib as S,jb as b,l as oe,na as ae,nc as z,ob as le,pa as u,qa as X,qb as T,rb as U,sb as F,w as Y,yb as be,za as ue,zb as ge}from"./chunk-A2WYYMKN.js";import{a as Q,c as se}from"./chunk-NCEQPEJE.js";var De=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,Ke,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,De],encapsulation:2})}return a})();var A=(()=>{class a{httpClient=g(z);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,s=se(m,["filterParams","advancedFilters"]),p=Q(Q(Q({},s),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var _e=(()=>{class a{sampleFilterService=g(A);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Pe.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[T([A])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let s=$();i(0,"po-lookup",1),b("ngModelChange",function(m){return h(s),S(o.lookup,m)||(o.lookup=m),f(m)}),E("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),t(),n(1,"po-divider"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"po-divider"),i(7,"form",null,0)(9,"po-input",6),b("ngModelChange",function(m){return h(s),S(o.label,m)||(o.label=m),f(m)}),t(),i(10,"po-checkbox-group",7),b("ngModelChange",function(m){return h(s),S(o.columnsName,m)||(o.columnsName=m),f(m)}),E("p-change",function(){return o.updateColumns()}),t(),i(11,"po-select",8),b("ngModelChange",function(m){return h(s),S(o.fieldLabel,m)||(o.fieldLabel=m),f(m)}),t(),i(12,"po-select",9),b("ngModelChange",function(m){return h(s),S(o.fieldValue,m)||(o.fieldValue=m),f(m)}),t(),i(13,"po-input",10),b("ngModelChange",function(m){return h(s),S(o.filterService,m)||(o.filterService=m),f(m)}),t(),i(14,"po-input",11),b("ngModelChange",function(m){return h(s),S(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),f(m)}),t(),i(15,"po-input",12),b("ngModelChange",function(m){return h(s),S(o.help,m)||(o.help=m),f(m)}),t(),i(16,"po-input",13),b("ngModelChange",function(m){return h(s),S(o.helperText,m)||(o.helperText=m),f(m)}),t(),i(17,"po-input",14),b("ngModelChange",function(m){return h(s),S(o.placeholder,m)||(o.placeholder=m),f(m)}),t(),i(18,"po-input",15),b("ngModelChange",function(m){return h(s),S(o.literals,m)||(o.literals=m),f(m)}),E("p-change",function(){return o.changeLiterals()}),t(),i(19,"po-input",16),b("ngModelChange",function(m){return h(s),S(o.formatField,m)||(o.formatField=m),f(m)}),E("p-change",function(m){return o.onFieldFormatChange(m)}),t(),i(20,"po-checkbox-group",17),b("ngModelChange",function(m){return h(s),S(o.properties,m)||(o.properties=m),f(m)}),t(),i(21,"po-radio-group",18),b("ngModelChange",function(m){return h(s),S(o.spacing,m)||(o.spacing=m),f(m)}),t(),i(22,"po-radio-group",19),b("ngModelChange",function(m){return h(s),S(o.size,m)||(o.size=m),f(m)}),t(),i(23,"po-textarea",20),b("ngModelChange",function(m){return h(s),S(o.advancedFilters,m)||(o.advancedFilters=m),f(m)}),E("p-change",function(){return o.changeAdvancedFilters()}),t(),i(24,"div",3)(25,"po-button",21),E("p-click",function(){return o.restore()}),t()()()}l&2&&(x("ngModel",o.lookup),c("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),d(4),c("p-value",o.lookup),d(),c("p-value",o.event),d(4),x("ngModel",o.label),d(),x("ngModel",o.columnsName),c("p-options",o.columnsOptions),d(),x("ngModel",o.fieldLabel),c("p-options",o.fieldLabelOptions),d(),x("ngModel",o.fieldValue),c("p-options",o.fieldValueOptions),d(),x("ngModel",o.filterService),d(),x("ngModel",o.fieldErrorMessage),d(),x("ngModel",o.help),d(),x("ngModel",o.helperText),d(),x("ngModel",o.placeholder),d(),x("ngModel",o.literals),d(),x("ngModel",o.formatField),d(),x("ngModel",o.properties),c("p-options",o.propertiesOptions),d(),x("ngModel",o.spacing),c("p-options",o.typeSpacing),d(),x("ngModel",o.size),c("p-options",o.sizeOptions),d(),x("ngModel",o.advancedFilters))},dependencies:[N,D,H,_,Z,B,ee,j,Le,Fe,q,te,R,we,W],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

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

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,Ze,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,_e],encapsulation:2})}return a})();var tt=()=>({modalTitle:"Heroes available for mission"}),Oe=(()=>{class a{service=g(A);notification=g(ie);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[T([A])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let s=$();i(0,"div",1),n(1,"po-info",2),t(),n(2,"po-divider"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),b("ngModelChange",function(m){return h(s),S(o.hero,m)||(o.hero=m),f(m)}),t(),i(7,"po-select",4),b("ngModelChange",function(m){return h(s),S(o.vehicle,m)||(o.vehicle=m),f(m)}),t()(),i(8,"div",1)(9,"po-button",5),E("p-click",function(){return o.startMission()}),t()()()}if(l&2){let s=Se(4);d(6),x("ngModel",o.hero),c("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,tt)),d(),x("ngModel",o.vehicle),c("p-options",o.vehicles),d(2),c("p-disabled",s.form.invalid||s.form.pending)}},dependencies:[N,D,H,_,Z,B,j,q,R,W],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,nt,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,Oe],encapsulation:2})}return a})();var at=()=>["nickname","label"],lt=()=>({modalTitle:"Heroes available for mission"}),Ie=(()=>{class a{service=g(A);notification=g(ie);formBuilder=g(ke);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,re.required],vehicle:[null,re.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[T([A])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"po-divider"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),E("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),c("formGroup",o.formMission),d(2),c("p-columns",o.columns)("p-field-format",U(7,at))("p-filter-service",o.service)("p-literals",U(8,lt)),d(),c("p-options",o.vehicles),d(2),c("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[N,D,H,fe,he,B,j,q,R,W],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,mt,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,Ie],encapsulation:2})}return a})();var de=(()=>{class a{http=g(z);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(oe(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(oe(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function pt(a,kt){if(a&1&&(i(0,"div",0),n(1,"po-table",3),t()),a&2){let r=xe();d(),c("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var ze=(()=>{class a{filterService=g(de);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[T([de])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),b("ngModelChange",function(p){return S(o.filterParams,p)||(o.filterParams=p),p}),t()(),n(2,"po-divider"),i(3,"div",0)(4,"po-lookup",2),be(5,"titlecase"),b("ngModelChange",function(p){return S(o.entity,p)||(o.entity=p),p}),E("p-selected",function(p){return o.onSelected(p)}),t()(),ue(6,pt,2,4,"div",0)),l&2&&(d(),x("ngModel",o.filterParams),c("p-options",o.entities),d(3),c("p-help",le("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",le("",ge(5,12,o.entityLabel)," of Star Wars")),x("ngModel",o.entity),c("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),Ee(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[D,_,j,q,te,ne,ve],encapsulation:2})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,ct,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,ze],encapsulation:2})}return a})();var Ne=(()=>{class a{http=g(z);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(ce("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Be=(()=>{class a{service=g(Ne);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),b("ngModelChange",function(p){return S(o.multiLookup,p)||(o.multiLookup=p),p}),E("p-change",function(p){return o.changeOptions(p)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),x("ngModel",o.multiLookup),c("p-multiple",!0),d(2),c("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[D,_,ee,q,ne],encapsulation:2})}return a})();var xt=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,xt,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,Be],encapsulation:2})}return a})();var pe=(()=>{class a{items=[{value:1,name:"Maria Silva",cpf:"12345678901",phone:"11999887766",cep:"89201000",plate:"ABC1D23"},{value:2,name:"Jo\xE3o Santos",cpf:"98765432100",phone:"21988776655",cep:"01310100",plate:"XYZ4E56"},{value:3,name:"Ana Oliveira",cpf:"11122233344",phone:"47912345678",cep:"80010000",plate:"MNO7F89"},{value:4,name:"Carlos Souza",cpf:"55566677788",phone:"41987654321",cep:"88010000",plate:"QRS2G01"},{value:5,name:"Fernanda Lima",cpf:"99988877766",phone:"48991234567",cep:"89010000",plate:"DEF3H45"}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():"",o=l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items];return J({items:o,hasNext:!1}).pipe(Y(200))}getObjectByValue(r){return Array.isArray(r)?J(this.items.filter(l=>r.includes(l.value))).pipe(Y(200)):J(this.items.find(l=>String(l.value)===String(r))).pipe(Y(200))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac})}return a})();var We=(()=>{class a{service=g(pe);person;columns=[{property:"name",label:"Nome"},{property:"cpf",label:"CPF",mask:"999.999.999-99"},{property:"phone",label:"Telefone",mask:"(99) 99999-9999"},{property:"cep",label:"CEP",mask:"99999-999"},{property:"plate",label:"Placa",mask:"@@@ 9w99"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-mask"]],standalone:!1,features:[T([pe])],decls:2,vars:4,consts:[[1,"po-row"],["name","person","p-field-label","name","p-field-value","value","p-label","Pessoa","p-help","Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-filter-service","p-hide-columns-manager"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),b("ngModelChange",function(p){return S(o.person,p)||(o.person=p),p}),t()()),l&2&&(d(),x("ngModel",o.person),c("p-columns",o.columns)("p-filter-service",o.service)("p-hide-columns-manager",!0))},dependencies:[D,_,q],encapsulation:2})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-mask-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Mask"),t(),i(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-mask/sample-po-lookup-mask.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    name="person"
    class="po-md-12"
    [(ngModel)]="person"
    p-field-label="name"
    p-field-value="value"
    p-label="Pessoa"
    p-help="Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas"
    [p-columns]="columns"
    [p-filter-service]="service"
    [p-hide-columns-manager]="true"
  >
  </po-lookup>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-mask/sample-po-lookup-mask.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn } from '@po-ui/ng-components';

import { SamplePoLookupMaskService } from './sample-po-lookup-mask.service';

@Component({
  selector: 'sample-po-lookup-mask',
  templateUrl: './sample-po-lookup-mask.component.html',
  providers: [SamplePoLookupMaskService],
  standalone: false
})
export class SamplePoLookupMaskComponent {
  service = inject(SamplePoLookupMaskService);

  person: string;

  readonly columns: Array<PoLookupColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99' },
    { property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' },
    { property: 'cep', label: 'CEP', mask: '99999-999' },
    { property: 'plate', label: 'Placa', mask: '@@@ 9w99' }
  ];
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-mask/sample-po-lookup-mask.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PoLookupFilter, PoLookupFilteredItemsParams, PoLookupResponseApi } from '@po-ui/ng-components';

@Injectable()
export class SamplePoLookupMaskService implements PoLookupFilter {
  private readonly items = [
    { value: 1, name: 'Maria Silva', cpf: '12345678901', phone: '11999887766', cep: '89201000', plate: 'ABC1D23' },
    { value: 2, name: 'Jo\xE3o Santos', cpf: '98765432100', phone: '21988776655', cep: '01310100', plate: 'XYZ4E56' },
    { value: 3, name: 'Ana Oliveira', cpf: '11122233344', phone: '47912345678', cep: '80010000', plate: 'MNO7F89' },
    { value: 4, name: 'Carlos Souza', cpf: '55566677788', phone: '41987654321', cep: '88010000', plate: 'QRS2G01' },
    { value: 5, name: 'Fernanda Lima', cpf: '99988877766', phone: '48991234567', cep: '89010000', plate: 'DEF3H45' }
  ];

  getFilteredItems(params: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const filter = params.filter ? params.filter.toLowerCase() : '';

    const filtered = filter
      ? this.items.filter(
          item =>
            item.name.toLowerCase().includes(filter) ||
            item.cpf.includes(filter) ||
            item.phone.includes(filter) ||
            item.cep.includes(filter) ||
            item.plate.toLowerCase().includes(filter)
        )
      : [...this.items];

    return of({ items: filtered, hasNext: false }).pipe(delay(200));
  }

  getObjectByValue(value: string | Array<any>): Observable<any> {
    if (Array.isArray(value)) {
      return of(this.items.filter(item => value.includes(item.value))).pipe(delay(200));
    }
    return of(this.items.find(item => String(item.value) === String(value))).pipe(delay(200));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-mask"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),c("ngClass",F(4,gt,o.hideSampleCodeTabs)))},dependencies:[w,y,k,C,We],encapsulation:2})}return a})();var Ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:6326,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload, po-url e po-search-ai.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-brand-01-dark)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-loading="boolean"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()(),i(293,"div",20),e(294,"Deprecated"),t()(),i(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),i(298,"td",23),e(299,"-"),t(),i(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(306,"blockquote")(307,"p"),e(308,"Essa propriedade est\xE1 "),i(309,"strong"),e(310,"depreciada"),t(),e(311," e ser\xE1 removida na vers\xE3o "),i(312,"code"),e(313,"23.x.x"),t(),e(314,". Recomendamos utilizar a propriedade "),i(315,"code"),e(316,"p-helper"),t(),e(317," que oferece mais recursos e flexibilidade."),t()()()(),i(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),e(322," p-additional-help-tooltip"),n(323,"br"),t()(),i(324,"div",20),e(325,"Deprecated"),t()(),i(326,"td",21)(327,"code",27),e(328,"string"),t()(),i(329,"td",23),e(330,"-"),t(),i(331,"td",24)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),i(335,"p"),e(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(337,"code"),e(338,"po-helper"),t(),e(339,`.
`),i(340,"strong"),e(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(342,"blockquote")(343,"p"),e(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(345,"blockquote")(346,"p"),e(347,"Essa propriedade est\xE1 "),i(348,"strong"),e(349,"depreciada"),t(),e(350," e ser\xE1 removida na vers\xE3o "),i(351,"code"),e(352,"23.x.x"),t(),e(353,". Recomendamos utilizar a propriedade "),i(354,"code"),e(355,"p-helper"),t(),e(356," que oferece mais recursos e flexibilidade."),t()()()(),i(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),e(361," p-advanced-filters"),n(362,"br"),t()()(),i(363,"td",21)(364,"code",28),e(365,"Array<PoLookupAdvancedFilter>"),t()(),i(366,"td",23),e(367,"-"),t(),i(368,"td",24)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),i(372,"p"),e(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(374,"blockquote")(375,"p"),e(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(377,"p"),e(378,"Exemplo de URL com busca avan\xE7ada:"),t(),i(379,"pre")(380,"code"),e(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(382,"p"),e(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(384,"pre")(385,"code"),e(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),e(391," p-append-in-body"),n(392,"br"),t()()(),i(393,"td",21)(394,"code",29),e(395,"boolean"),t()(),i(396,"td",23)(397,"p")(398,"code"),e(399,"false"),t()()(),i(400,"td",24)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),i(404,"p"),e(405,"Define que o popover ("),i(406,"code"),e(407,"p-helper"),t(),e(408," e/ou "),i(409,"code"),e(410,"p-error-limit"),t(),e(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(412,"blockquote")(413,"p"),e(414,"Quando utilizado com "),i(415,"code"),e(416,"p-helper"),t(),e(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),e(422," p-auto-focus"),n(423,"br"),t()()(),i(424,"td",21)(425,"code",29),e(426,"boolean"),t()(),i(427,"td",23)(428,"p")(429,"code"),e(430,"false"),t()()(),i(431,"td",24)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),i(435,"p"),e(436,"Aplica foco no elemento ao ser iniciado."),t(),i(437,"blockquote")(438,"p"),e(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),e(444," p-auto-height"),n(445,"br"),t()()(),i(446,"td",21)(447,"code",29),e(448,"boolean"),t()(),i(449,"td",23)(450,"p")(451,"code"),e(452,"false"),t()()(),i(453,"td",24)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),i(457,"p"),e(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),e(463," (p-change)"),n(464,"br"),t()()(),i(465,"td",21)(466,"code",22),e(467,"EventEmitter"),t()(),i(468,"td",23),e(469,"-"),t(),i(470,"td",24)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),e(480," (p-change-visible-columns)"),n(481,"br"),t()()(),i(482,"td",21)(483,"code",22),e(484,"EventEmitter"),t()(),i(485,"td",23),e(486,"-"),t(),i(487,"td",24)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),i(491,"p"),e(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(493,"p"),e(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),e(499," p-clean"),n(500,"br"),t()()(),i(501,"td",21)(502,"code",29),e(503,"boolean"),t()(),i(504,"td",23),e(505,"-"),t(),i(506,"td",24)(507,"p"),e(508,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513," (p-restore-column-manager)"),n(514,"br"),t()()(),i(515,"td",21)(516,"code",22),e(517,"EventEmitter"),t()(),i(518,"td",23),e(519,"-"),t(),i(520,"td",24)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),i(524,"p"),e(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(526,"p"),e(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),e(532," p-columns"),n(533,"br"),t()()(),i(534,"td",21)(535,"code",30),e(536,"Array<PoLookupColumn>"),t()(),i(537,"td",23),e(538,"-"),t(),i(539,"td",24)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),i(543,"p"),e(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),e(549," p-compact-label"),n(550,"br"),t()()(),i(551,"td",21)(552,"code",29),e(553,"boolean"),t()(),i(554,"td",23)(555,"p")(556,"code"),e(557,"false"),t()()(),i(558,"td",24)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),i(562,"p"),e(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(564,"p"),e(565,"Quando habilitado ("),i(566,"code"),e(567,"true"),t(),e(568,"), o modo compacto afeta o conjunto composto por:"),t(),i(569,"ul")(570,"li")(571,"code"),e(572,"po-label"),t()(),i(573,"li")(574,"code"),e(575,"p-requirement (showRequired)"),t()(),i(576,"li")(577,"code"),e(578,"po-helper"),t()()(),i(579,"p"),e(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(581,"p"),e(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(583,"ul")(584,"li")(585,"code"),e(586,"--field-container-title-justify"),t()(),i(587,"li")(588,"code"),e(589,"--field-container-title-flex"),t()()(),i(590,"p"),e(591,"Exemplo:"),t(),i(592,"pre")(593,"code"),e(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(595,"p"),e(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),e(601," p-disabled"),n(602,"br"),t()()(),i(603,"td",21)(604,"code",29),e(605,"boolean"),t()(),i(606,"td",23)(607,"p"),e(608,"false"),t()(),i(609,"td",24)(610,"em")(611,"strong"),e(612,"(opcional)"),t()(),i(613,"p"),e(614,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),e(619," p-error-limit"),n(620,"br"),t()()(),i(621,"td",21)(622,"code",29),e(623,"boolean"),t()(),i(624,"td",23)(625,"p")(626,"code"),e(627,"false"),t()()(),i(628,"td",24)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),i(632,"p"),e(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(634,"blockquote")(635,"p"),e(636,"Caso essa propriedade seja definida como "),i(637,"code"),e(638,"true"),t(),e(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),e(644," p-field-error-message"),n(645,"br"),t()()(),i(646,"td",21)(647,"code",27),e(648,"string"),t()(),i(649,"td",23),e(650,"-"),t(),i(651,"td",24)(652,"em")(653,"strong"),e(654,"(opcional)"),t()(),i(655,"p"),e(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(657,"blockquote")(658,"p"),e(659,"Necess\xE1rio que a propriedade "),i(660,"code"),e(661,"p-required"),t(),e(662," esteja habilitada."),t()()()(),i(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),e(667," p-field-format"),n(668,"br"),t()()(),i(669,"td",21)(670,"code",31),e(671,"((value) => string) "),t(),i(672,"code",32),e(673," Array<string>"),t()(),i(674,"td",23),e(675,"-"),t(),i(676,"td",24)(677,"em")(678,"strong"),e(679,"(opcional)"),t()(),i(680,"p"),e(681,"Formato de exibi\xE7\xE3o do campo."),t(),i(682,"p"),e(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(684,"em"),e(685,"string"),t(),e(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(687,"pre")(688,"code"),e(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(690,"blockquote")(691,"p"),e(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(693,"code"),e(694,"p-field-label"),t(),e(695," na descri\xE7\xE3o do campo."),t()(),i(696,"p"),e(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(698,"pre")(699,"code"),e(700,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),i(701,"blockquote")(702,"p"),e(703,"Ser\xE1 utilizado "),i(704,"code"),e(705,"-"),t(),e(706," como separador."),t()()()(),i(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),e(711," p-field-label"),n(712,"br"),t()()(),i(713,"td",21)(714,"code",27),e(715,"string"),t()(),i(716,"td",23),e(717,"-"),t(),i(718,"td",24)(719,"p"),e(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),e(725," p-field-value"),n(726,"br"),t()()(),i(727,"td",21)(728,"code",27),e(729,"string"),t()(),i(730,"td",23),e(731,"-"),t(),i(732,"td",24)(733,"p"),e(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(735,"blockquote")(736,"p"),e(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),e(742," p-filter-params"),n(743,"br"),t()()(),i(744,"td",21)(745,"code",33),e(746,"any"),t()(),i(747,"td",23),e(748,"-"),t(),i(749,"td",24)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),i(753,"p"),e(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(755,"code"),e(756,"PoLookupFilter"),t(),e(757,"."),t()()(),i(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),e(762," p-filter-service"),n(763,"br"),t()()(),i(764,"td",21)(765,"code",27),e(766,"string "),t(),i(767,"code",34),e(768," PoLookupFilter"),t()(),i(769,"td",23),e(770,"-"),t(),i(771,"td",24)(772,"p"),e(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(774,"code"),e(775,"PoLookupFilter"),t(),e(776," ou uma URL."),t(),i(777,"p"),e(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(779,"pre")(780,"code"),e(781,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(782,"p"),e(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(784,"code"),e(785,"order"),t(),e(786,", por exemplo:"),t(),i(787,"ul")(788,"li")(789,"p"),e(790,"Coluna decrescente:"),t(),i(791,"pre")(792,"code"),e(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(794,"li")(795,"p"),e(796,"Coluna ascendente:"),t(),i(797,"pre")(798,"code"),e(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(800,"p"),e(801,"Se for definido a propriedade "),i(802,"code"),e(803,"p-filter-params"),t(),e(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(805,"code"),e(806,"{ age: 23 }"),t(),e(807," a URL ficaria:"),t(),i(808,"pre")(809,"code"),e(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(811,"p"),e(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(813,"pre")(814,"code"),e(815,`model = 1234;

GET url/1234
`),t()(),i(816,"p"),e(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(818,"pre")(819,"code"),e(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(821,"blockquote")(822,"p"),e(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(824,"a",7),e(825,"API do PO UI"),t(),e(826,` e utiliza os valores
definidos nas propriedades `),i(827,"code"),e(828,"p-field-label"),t(),e(829," e "),i(830,"code"),e(831,"p-field-value"),t(),e(832," para a constru\xE7\xE3o do "),i(833,"code"),e(834,"po-lookup"),t(),e(835,"."),t()(),i(836,"p"),e(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(838,"em"),e(839,"TAB"),t(),e(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(841,"a",35),e(842,"encodeURIComponent"),t(),e(843,`
e concatenado na URL da seguinte forma:`),t(),i(844,"pre")(845,"code"),e(846,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(847,"blockquote")(848,"p"),e(849,"Quando informado um servi\xE7o que implemente a interface "),i(850,"code"),e(851,"PoLookupFilter"),t(),e(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),e(857," p-help"),n(858,"br"),t()()(),i(859,"td",21)(860,"code",27),e(861,"string"),t()(),i(862,"td",23),e(863,"-"),t(),i(864,"td",24)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),i(868,"p"),e(869,"Texto de apoio do campo."),t()()(),i(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),e(874," p-hide-columns-manager"),n(875,"br"),t()()(),i(876,"td",21)(877,"code",29),e(878,"boolean"),t()(),i(879,"td",23)(880,"p")(881,"code"),e(882,"false"),t()()(),i(883,"td",24)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),i(887,"p"),e(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),e(893," p-infinite-scroll"),n(894,"br"),t()()(),i(895,"td",21)(896,"code",29),e(897,"boolean"),t()(),i(898,"td",23)(899,"p")(900,"code"),e(901,"false"),t()()(),i(902,"td",24)(903,"em")(904,"strong"),e(905,"(opcional)"),t()(),i(906,"p"),e(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),e(912," (p-keydown)"),n(913,"br"),t()()(),i(914,"td",21)(915,"code",22),e(916,"EventEmitter"),t()(),i(917,"td",23),e(918,"-"),t(),i(919,"td",24)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(925,"code"),e(926,"KeyboardEvent"),t(),e(927," com informa\xE7\xF5es sobre a tecla."),t()()(),i(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),e(932," p-label"),n(933,"br"),t()()(),i(934,"td",21)(935,"code",27),e(936,"string"),t()(),i(937,"td",23),e(938,"-"),t(),i(939,"td",24)(940,"em")(941,"strong"),e(942,"(opcional)"),t()(),i(943,"p"),e(944,"Label do campo."),t(),i(945,"blockquote")(946,"p"),e(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(948,"code"),e(949,"modalTitle"),t(),e(950," na propriedade "),i(951,"code"),e(952,"p-literals"),t(),e(953,"."),t()()()(),i(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),e(958," p-label-text-wrap"),n(959,"br"),t()()(),i(960,"td",21)(961,"code",29),e(962,"boolean"),t()(),i(963,"td",23)(964,"p")(965,"code"),e(966,"false"),t()()(),i(967,"td",24)(968,"em")(969,"strong"),e(970,"(opcional)"),t()(),i(971,"p"),e(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(973,"code"),e(974,"p-label"),t(),e(975,". Quando "),i(976,"code"),e(977,"p-label-text-wrap"),t(),e(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),e(983," p-literals"),n(984,"br"),t()()(),i(985,"td",21)(986,"code",36),e(987,"PoLookupLiterals"),t()(),i(988,"td",23),e(989,"-"),t(),i(990,"td",24)(991,"p"),e(992,"Objeto com as literais usadas no "),i(993,"code"),e(994,"po-lookup"),t(),e(995,"."),t(),i(996,"p"),e(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(998,"pre")(999,"code"),e(1e3,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),i(1001,"p"),e(1002,"Ou passando apenas as literais que deseja customizar:"),t(),i(1003,"pre")(1004,"code"),e(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(1006,"p"),e(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(1008,"pre")(1009,"code"),e(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(1011,"blockquote")(1012,"p"),e(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(1014,"a",37)(1015,"code"),e(1016,"PoI18nService"),t()(),e(1017," ou do browser."),t()()()(),i(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),e(1022," p-loading"),n(1023,"br"),t()()(),i(1024,"td",21)(1025,"code",29),e(1026,"boolean"),t()(),i(1027,"td",23)(1028,"p")(1029,"code"),e(1030,"false"),t()()(),i(1031,"td",24)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),i(1035,"p"),e(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),e(1041," p-multiple"),n(1042,"br"),t()()(),i(1043,"td",21)(1044,"code",29),e(1045,"boolean"),t()(),i(1046,"td",23)(1047,"p")(1048,"code"),e(1049,"false"),t()()(),i(1050,"td",24)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(1056,"blockquote")(1057,"p"),e(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(1059,"code"),e(1060,"[ 12345, 67890 ]"),t()()()()(),i(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),e(1065," name"),n(1066,"br"),t()()(),i(1067,"td",21)(1068,"code",27),e(1069,"string"),t()(),i(1070,"td",23),e(1071,"-"),t(),i(1072,"td",24)(1073,"p"),e(1074,"Nome e Id do componente."),t()()(),i(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),e(1079," p-no-autocomplete"),n(1080,"br"),t()()(),i(1081,"td",21)(1082,"code",29),e(1083,"boolean"),t()(),i(1084,"td",23)(1085,"p")(1086,"code"),e(1087,"false"),t()()(),i(1088,"td",24)(1089,"em")(1090,"strong"),e(1091,"(opcional)"),t()(),i(1092,"p"),e(1093,"Define a propriedade nativa "),i(1094,"code"),e(1095,"autocomplete"),t(),e(1096," do campo como "),i(1097,"code"),e(1098,"off"),t(),e(1099,"."),t()()(),i(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),e(1104," (p-error)"),n(1105,"br"),t()()(),i(1106,"td",21)(1107,"code",22),e(1108,"EventEmitter"),t()(),i(1109,"td",23),e(1110,"-"),t(),i(1111,"td",24)(1112,"p"),e(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),e(1118," p-optional"),n(1119,"br"),t()()(),i(1120,"td",21)(1121,"code",29),e(1122,"boolean"),t()(),i(1123,"td",23)(1124,"p")(1125,"code"),e(1126,"false"),t()()(),i(1127,"td",24)(1128,"em")(1129,"strong"),e(1130,"(opcional)"),t()(),i(1131,"p"),e(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1133,"blockquote")(1134,"p"),e(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1136,"ul")(1137,"li"),e(1138,"O campo conter "),i(1139,"code"),e(1140,"p-required"),t(),e(1141,";"),t(),i(1142,"li"),e(1143,"N\xE3o possuir "),i(1144,"code"),e(1145,"p-help"),t(),e(1146," e/ou "),i(1147,"code"),e(1148,"p-label"),t(),e(1149,"."),t()()()(),i(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),e(1154," p-placeholder"),n(1155,"br"),t()()(),i(1156,"td",21)(1157,"code",27),e(1158,"string"),t()(),i(1159,"td",23),e(1160,"-"),t(),i(1161,"td",24)(1162,"p"),e(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),e(1168," p-helper"),n(1169,"br"),t()()(),i(1170,"td",21)(1171,"code",38),e(1172,"PoHelperOptions "),t(),i(1173,"code",27),e(1174," string"),t()(),i(1175,"td",23),e(1176,"-"),t(),i(1177,"td",24)(1178,"em")(1179,"strong"),e(1180,"(opcional)"),t()(),i(1181,"p"),e(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),i(1183,"code"),e(1184,"p-label"),t(),e(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),i(1186,"code"),e(1187,"p-label"),t(),e(1188,"."),t(),i(1189,"blockquote")(1190,"p"),e(1191,"Para mais informa\xE7\xF5es acesse: "),i(1192,"a",39),e(1193,"https://po-ui.io/documentation/po-helper"),t(),e(1194,"."),t()(),i(1195,"blockquote")(1196,"p"),e(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(1198,"code"),e(1199,"p-additional-help-tooltip"),t(),e(1200," e "),i(1201,"code"),e(1202,"p-additional-help"),t(),e(1203,") ser\xE1 ignorado."),t()()()(),i(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),e(1208," p-required"),n(1209,"br"),t()()(),i(1210,"td",21)(1211,"code",29),e(1212,"boolean"),t()(),i(1213,"td",23)(1214,"p")(1215,"code"),e(1216,"false"),t()()(),i(1217,"td",24)(1218,"em")(1219,"strong"),e(1220,"(opcional)"),t()(),i(1221,"p"),e(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1223,"blockquote")(1224,"p"),e(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1226,"code"),e(1227,"(p-disabled)"),t(),e(1228,"."),t()()()(),i(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),e(1233," (p-selected)"),n(1234,"br"),t()()(),i(1235,"td",21)(1236,"code",22),e(1237,"EventEmitter"),t()(),i(1238,"td",23),e(1239,"-"),t(),i(1240,"td",24)(1241,"em")(1242,"strong"),e(1243,"(opcional)"),t()(),i(1244,"p"),e(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),e(1250," p-show-required"),n(1251,"br"),t()()(),i(1252,"td",21)(1253,"code",29),e(1254,"boolean"),t()(),i(1255,"td",23),e(1256,"-"),t(),i(1257,"td",24)(1258,"p"),e(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1260,"blockquote")(1261,"p"),e(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1263,"ul")(1264,"li"),e(1265,"N\xE3o possuir "),i(1266,"code"),e(1267,"p-help"),t(),e(1268," e/ou "),i(1269,"code"),e(1270,"p-label"),t(),e(1271,"."),t()()()(),i(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),e(1276," p-size"),n(1277,"br"),t()()(),i(1278,"td",21)(1279,"code",27),e(1280,"string"),t()(),i(1281,"td",23)(1282,"p")(1283,"code"),e(1284,"medium"),t()()(),i(1285,"td",24)(1286,"em")(1287,"strong"),e(1288,"(opcional)"),t()(),i(1289,"p"),e(1290,"Define o tamanho do componente:"),t(),i(1291,"ul")(1292,"li")(1293,"code"),e(1294,"small"),t(),e(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1296,"li")(1297,"code"),e(1298,"medium"),t(),e(1299,": altura do input como 44px."),t()(),i(1300,"blockquote")(1301,"p"),e(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1303,"code"),e(1304,"medium"),t(),e(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1306,"a",40),e(1307,"po-theme"),t(),e(1308,"."),t()()()(),i(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),e(1313," p-spacing"),n(1314,"br"),t()()(),i(1315,"td",21)(1316,"code",27),e(1317,"string"),t()(),i(1318,"td",23)(1319,"p")(1320,"code"),e(1321,"medium"),t()()(),i(1322,"td",24)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),i(1326,"p"),e(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),i(1328,"strong"),e(1329,"PoTableColumnSpacing"),t(),e(1330,"."),t(),i(1331,"blockquote")(1332,"p"),e(1333,"Em n\xEDvel de acessibilidade "),i(1334,"strong"),e(1335,"AA"),t(),e(1336,", caso o valor de "),i(1337,"code"),e(1338,"p-spacing"),t(),e(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1340,"code"),e(1341,"extraSmall"),t(),e(1342,`
nos seguintes cen\xE1rios:`),t(),i(1343,"ul")(1344,"li"),e(1345,"Quando o valor de "),i(1346,"code"),e(1347,"p-size"),t(),e(1348," for "),i(1349,"code"),e(1350,"small"),t(),e(1351,";"),t(),i(1352,"li"),e(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1354,"code"),e(1355,"small"),t(),e(1356,` no
`),i(1357,"a",40),e(1358,"servi\xE7o de tema"),t(),e(1359,"."),t()()()()(),i(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),e(1364," p-text-wrap"),n(1365,"br"),t()()(),i(1366,"td",21)(1367,"code",29),e(1368,"boolean"),t()(),i(1369,"td",23)(1370,"p")(1371,"code"),e(1372,"false"),t()()(),i(1373,"td",24)(1374,"em")(1375,"strong"),e(1376,"(opcional)"),t()(),i(1377,"p"),e(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1379,"p"),e(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1381,"blockquote")(1382,"p"),e(1383,"Incompat\xEDvel com "),i(1384,"code"),e(1385,"virtual-scroll"),t(),e(1386,", que requer altura fixa nas linhas."),t()()()(),i(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),e(1391," p-virtual-scroll"),n(1392,"br"),t()()(),i(1393,"td",21)(1394,"code",29),e(1395,"boolean"),t()(),i(1396,"td",23)(1397,"p")(1398,"code"),e(1399,"true"),t()()(),i(1400,"td",24)(1401,"em")(1402,"strong"),e(1403,"(opcional)"),t()(),i(1404,"p"),e(1405,"Habilita o "),i(1406,"code"),e(1407,"virtual-scroll"),t(),e(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1409,"code"),e(1410,"virtual-scroll"),t(),e(1411," ser\xE1 ativado automaticamente."),t(),i(1412,"blockquote")(1413,"p"),e(1414,"Incompat\xEDvel com "),i(1415,"code"),e(1416,"p-text-wrap"),t(),e(1417," e "),i(1418,"code"),e(1419,"master-detail"),t(),e(1420,", pois o "),i(1421,"code"),e(1422,"virtual-scroll"),t(),e(1423," exige altura fixa nas linhas."),t()()()()(),i(1424,"h3",12),e(1425,"M\xE9todos"),t(),i(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),e(1432," focus "),t()()()()(),i(1433,"tr",24)(1434,"td",24)(1435,"p"),e(1436,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1437,"p"),e(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1439,"pre")(1440,"code"),e(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1442,"br"),i(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),e(1449," showAdditionalHelp "),t()()()()(),i(1450,"tr",24)(1451,"td",24)(1452,"p"),e(1453,"M\xE9todo que exibe "),i(1454,"code"),e(1455,"p-helper"),t(),e(1456," ou executa a a\xE7\xE3o definida em "),i(1457,"code"),e(1458,"p-helper{eventOnClick}"),t(),e(1459," ou em "),i(1460,"code"),e(1461,"p-additionalHelp"),t(),e(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1463,"code"),e(1464,"p-keydown"),t(),e(1465,"."),t(),i(1466,"blockquote")(1467,"p"),e(1468,"Exibe ou oculta o conte\xFAdo do componente "),i(1469,"code"),e(1470,"po-helper"),t(),e(1471," quando o componente estiver com foco."),t()(),i(1472,"pre")(1473,"code"),e(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1475,"pre")(1476,"code"),e(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1478,"br"),i(1479,"h3"),e(1480,"Interfaces"),t(),i(1481,"h4",43)(1482,"code",5),e(1483,"PoLookupAdvancedFilter"),t()(),i(1484,"div",2)(1485,"p"),e(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1487,"h4",12),e(1488,"Propriedades"),t(),i(1489,"table",13)(1490,"tr",14)(1491,"th",15),e(1492,"Nome"),t(),i(1493,"th",15),e(1494,"Tipo"),t(),i(1495,"th",15),e(1496,"Descri\xE7\xE3o"),t()(),i(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),e(1501," additionalHelp"),n(1502,"br"),t()()(),i(1503,"td",21)(1504,"code",44),e(1505,"Function"),t()(),i(1506,"td",24)(1507,"em")(1508,"strong"),e(1509,"(opcional)"),t()(),i(1510,"p"),e(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(1512,"blockquote")(1513,"p"),e(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),e(1519," additionalHelpTooltip"),n(1520,"br"),t()()(),i(1521,"td",21)(1522,"code",27),e(1523,"string"),t()(),i(1524,"td",24)(1525,"em")(1526,"strong"),e(1527,"(opcional)"),t()(),i(1528,"p"),e(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(1530,"code"),e(1531,"po-helper"),t(),e(1532,`.
`),i(1533,"strong"),e(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(1535,"blockquote")(1536,"p"),e(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),e(1542," advancedFilters"),n(1543,"br"),t()()(),i(1544,"td",21)(1545,"code",28),e(1546,"Array<PoLookupAdvancedFilter>"),t()(),i(1547,"td",24)(1548,"em")(1549,"strong"),e(1550,"(opcional)"),t()(),i(1551,"p"),e(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1553,"blockquote")(1554,"p"),e(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1556,"p"),e(1557,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1558,"p")(1559,"code"),e(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1561,"p"),e(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1563,"p")(1564,"code"),e(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),e(1570," appendBox"),n(1571,"br"),t()()(),i(1572,"td",21)(1573,"code",29),e(1574,"boolean"),t()(),i(1575,"td",24)(1576,"em")(1577,"strong"),e(1578,"(opcional)"),t()(),i(1579,"p"),e(1580,"Define que o "),i(1581,"code"),e(1582,"listbox"),t(),e(1583," e/ou popover ("),i(1584,"code"),e(1585,"p-helper"),t(),e(1586," e/ou "),i(1587,"code"),e(1588,"p-error-limit"),t(),e(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1590,"blockquote")(1591,"p"),e(1592,"Quando utilizado com "),i(1593,"code"),e(1594,"p-helper"),t(),e(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),e(1600," autoHeight"),n(1601,"br"),t()()(),i(1602,"td",21)(1603,"code",29),e(1604,"boolean"),t()(),i(1605,"td",24)(1606,"em")(1607,"strong"),e(1608,"(opcional)"),t()(),i(1609,"p"),e(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1611,"p")(1612,"strong"),e(1613,"Componentes compat\xEDveis:"),t(),i(1614,"code"),e(1615,"po-multiselect"),t(),e(1616,", "),i(1617,"code"),e(1618,"po-lookup"),t(),e(1619,"."),t()()(),i(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),e(1624," autoUpload"),n(1625,"br"),t()()(),i(1626,"td",21)(1627,"code",29),e(1628,"boolean"),t()(),i(1629,"td",24)(1630,"em")(1631,"strong"),e(1632,"(opcional)"),t()(),i(1633,"p"),e(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1635,"p")(1636,"strong"),e(1637,"Componente compat\xEDvel"),t(),e(1638,": "),i(1639,"code"),e(1640,"po-upload"),t()()()(),i(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),e(1645," booleanFalse"),n(1646,"br"),t()()(),i(1647,"td",21)(1648,"code",27),e(1649,"string"),t()(),i(1650,"td",24)(1651,"em")(1652,"strong"),e(1653,"(opcional)"),t()(),i(1654,"p"),e(1655,"Texto exibido quando o valor do componente for "),i(1656,"em"),e(1657,"false"),t(),e(1658,"."),t()()(),i(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),e(1663," booleanTrue"),n(1664,"br"),t()()(),i(1665,"td",21)(1666,"code",27),e(1667,"string"),t()(),i(1668,"td",24)(1669,"em")(1670,"strong"),e(1671,"(opcional)"),t()(),i(1672,"p"),e(1673,"Texto exibido quando o valor do componente for "),i(1674,"em"),e(1675,"true"),t(),e(1676,"."),t()()(),i(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),e(1681," changeOnEnter"),n(1682,"br"),t()()(),i(1683,"td",21)(1684,"code",29),e(1685,"boolean"),t()(),i(1686,"td",24)(1687,"em")(1688,"strong"),e(1689,"(opcional)"),t()(),i(1690,"p"),e(1691,"Indica que o evento "),i(1692,"code"),e(1693,"p-change"),t(),e(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1695,"code"),e(1696,"po-combo"),t(),e(1697,"."),t()()(),i(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),e(1702," changeVisibleColumns"),n(1703,"br"),t()()(),i(1704,"td",21)(1705,"code",44),e(1706,"Function"),t()(),i(1707,"td",24)(1708,"em")(1709,"strong"),e(1710,"(opcional)"),t()(),i(1711,"p"),e(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1713,"p"),e(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1715,"p")(1716,"strong"),e(1717,"Componente compat\xEDvel"),t(),e(1718,": "),i(1719,"code"),e(1720,"po-lookup"),t()()()(),i(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),e(1725," clean"),n(1726,"br"),t()()(),i(1727,"td",21)(1728,"code",29),e(1729,"boolean"),t()(),i(1730,"td",24)(1731,"em")(1732,"strong"),e(1733,"(opcional)"),t()(),i(1734,"p"),e(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1736,"p")(1737,"strong"),e(1738,"Componentes compat\xEDveis:"),t(),i(1739,"code"),e(1740,"po-datepicker"),t(),e(1741,", "),i(1742,"code"),e(1743,"po-datepicker-range"),t(),e(1744,", "),i(1745,"code"),e(1746,"po-input"),t(),e(1747,", "),i(1748,"code"),e(1749,"po-number"),t(),e(1750,", "),i(1751,"code"),e(1752,"po-decimal"),t(),e(1753,`,
`),i(1754,"code"),e(1755,"po-combo"),t(),e(1756,", "),i(1757,"code"),e(1758,"po-lookup"),t(),e(1759,", "),i(1760,"code"),e(1761,"po-password"),t(),e(1762,", "),i(1763,"code"),e(1764,"po-timepicker"),t(),e(1765,"."),t()()(),i(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),e(1770," columnRestoreManager"),n(1771,"br"),t()()(),i(1772,"td",21)(1773,"code",44),e(1774,"Function"),t()(),i(1775,"td",24)(1776,"em")(1777,"strong"),e(1778,"(opcional)"),t()(),i(1779,"p"),e(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1781,"p"),e(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1783,"p")(1784,"strong"),e(1785,"Componente compat\xEDvel"),t(),e(1786,": "),i(1787,"code"),e(1788,"po-lookup"),t()()()(),i(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),e(1793," columns"),n(1794,"br"),t()()(),i(1795,"td",21)(1796,"code",30),e(1797,"Array<PoLookupColumn> "),t(),i(1798,"code",45),e(1799," number"),t()(),i(1800,"td",24)(1801,"em")(1802,"strong"),e(1803,"(opcional)"),t()(),i(1804,"p"),e(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1806,"code"),e(1807,"searchService"),t(),e(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1809,"a",46)(1810,"code"),e(1811,"PoLookupColumn"),t()(),e(1812,"."),t(),i(1813,"blockquote")(1814,"p"),e(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1816,"em"),e(1817,"label"),t(),e(1818," e "),i(1819,"em"),e(1820,"value"),t(),e(1821,` para valores
de tela e do model respectivamente.`),t()(),i(1822,"p")(1823,"strong"),e(1824,"Componentes compat\xEDveis:"),t(),i(1825,"code"),e(1826,"po-radio-group"),t(),e(1827,", "),i(1828,"code"),e(1829,"po-lookup"),t(),e(1830,", "),i(1831,"code"),e(1832,"po-checkbox-group"),t(),e(1833,"."),t()()(),i(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),e(1838," compactLabel"),n(1839,"br"),t()()(),i(1840,"td",21)(1841,"code",29),e(1842,"boolean"),t()(),i(1843,"td",24)(1844,"em")(1845,"strong"),e(1846,"(opcional)"),t()(),i(1847,"p"),e(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(1849,"p"),e(1850,"Quando habilitado ("),i(1851,"code"),e(1852,"true"),t(),e(1853,"), o modo compacto afeta o conjunto composto por:"),t(),i(1854,"ul")(1855,"li")(1856,"code"),e(1857,"po-label"),t()(),i(1858,"li")(1859,"code"),e(1860,"p-requirement (showRequired)"),t()(),i(1861,"li")(1862,"code"),e(1863,"po-helper"),t()()(),i(1864,"p"),e(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(1866,"p"),e(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(1868,"ul")(1869,"li")(1870,"code"),e(1871,"--field-container-title-justify"),t()(),i(1872,"li")(1873,"code"),e(1874,"--field-container-title-flex"),t()()(),i(1875,"p"),e(1876,"Exemplo:"),t(),i(1877,"pre")(1878,"code"),e(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(1880,"p"),e(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),e(1886," container"),n(1887,"br"),t()()(),i(1888,"td",21)(1889,"code",27),e(1890,"string"),t()(),i(1891,"td",24)(1892,"em")(1893,"strong"),e(1894,"(opcional)"),t()(),i(1895,"p"),e(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1897,"p"),e(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),e(1903," customAction"),n(1904,"br"),t()()(),i(1905,"td",21)(1906,"code",47),e(1907,"PoProgressAction"),t()(),i(1908,"td",24)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),t()(),i(1912,"p"),e(1913,"Define uma a\xE7\xE3o personalizada no componente "),i(1914,"code"),e(1915,"po-upload"),t(),e(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1917,"p")(1918,"strong"),e(1919,"Componente compat\xEDvel"),t(),e(1920,": "),i(1921,"code"),e(1922,"po-upload"),t(),e(1923,","),t(),i(1924,"p")(1925,"strong"),e(1926,"Exemplo de configura\xE7\xE3o"),t(),e(1927,":"),t(),i(1928,"pre")(1929,"code",48),e(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),e(1935," customActionClick"),n(1936,"br"),t()()(),i(1937,"td",21)(1938,"code",49),e(1939,"(file: PoUploadFile) => void"),t()(),i(1940,"td",24)(1941,"em")(1942,"strong"),e(1943,"(opcional)"),t()(),i(1944,"p"),e(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1946,"code"),e(1947,"p-custom-action"),t(),e(1948,"."),t(),i(1949,"p")(1950,"strong"),e(1951,"Componente compat\xEDvel"),t(),e(1952,": "),i(1953,"code"),e(1954,"po-upload"),t(),e(1955,","),t(),i(1956,"p"),e(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1958,"p")(1959,"strong"),e(1960,"Par\xE2metro do evento"),t(),e(1961,":"),t(),i(1962,"ul")(1963,"li")(1964,"code"),e(1965,"file"),t(),e(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1967,"code"),e(1968,"PoUploadFile"),t(),e(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1970,"p")(1971,"strong"),e(1972,"Exemplo de uso"),t(),e(1973,":"),t(),i(1974,"pre")(1975,"code",48),e(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),e(1981," debounceTime"),n(1982,"br"),t()()(),i(1983,"td",21)(1984,"code",45),e(1985,"number"),t()(),i(1986,"td",24)(1987,"em")(1988,"strong"),e(1989,"(opcional)"),t()(),i(1990,"p"),e(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1992,"code"),e(1993,"p-filter-service"),t(),e(1994,")."),t(),i(1995,"p")(1996,"strong"),e(1997,"Componentes compat\xEDveis:"),t(),i(1998,"code"),e(1999,"po-combo"),t(),e(2e3,", "),i(2001,"code"),e(2002,"po-multiselect"),t(),e(2003,"."),t()()(),i(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),e(2008," decimalsLength"),n(2009,"br"),t()()(),i(2010,"td",21)(2011,"code",45),e(2012,"number"),t()(),i(2013,"td",24)(2014,"em")(2015,"strong"),e(2016,"(opcional)"),t()(),i(2017,"p"),e(2018,"Quantidade m\xE1xima de casas decimais."),t(),i(2019,"blockquote")(2020,"p"),e(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(2022,"code"),e(2023,"type"),t(),e(2024," for "),i(2025,"em"),e(2026,"currency"),t(),e(2027," ou "),i(2028,"em"),e(2029,"decimal"),t(),e(2030,"."),t()()()(),i(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),e(2035," directory"),n(2036,"br"),t()()(),i(2037,"td",21)(2038,"code",29),e(2039,"boolean"),t()(),i(2040,"td",24)(2041,"em")(2042,"strong"),e(2043,"(opcional)"),t()(),i(2044,"p"),e(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(2046,"blockquote")(2047,"p"),e(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(2049,"blockquote")(2050,"p"),e(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(2052,"strong"),e(2053,"Internet Explorer"),t(),e(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(2055,"p")(2056,"strong"),e(2057,"Componente compat\xEDvel"),t(),e(2058,": "),i(2059,"code"),e(2060,"po-upload"),t()()()(),i(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),e(2065," disabled"),n(2066,"br"),t()()(),i(2067,"td",21)(2068,"code",29),e(2069,"boolean"),t()(),i(2070,"td",24)(2071,"em")(2072,"strong"),e(2073,"(opcional)"),t()(),i(2074,"p"),e(2075,"Desabilita o campo caso informar o valor "),i(2076,"em"),e(2077,"true"),t(),e(2078,"."),t()()(),i(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),e(2083," disabledInitFilter"),n(2084,"br"),t()()(),i(2085,"td",21)(2086,"code",29),e(2087,"boolean"),t()(),i(2088,"td",24)(2089,"em")(2090,"strong"),e(2091,"(opcional)"),t()(),i(2092,"p"),e(2093,"Desabilita o filtro inicial no servi\xE7o do "),i(2094,"code"),e(2095,"po-combo"),t(),e(2096,", que \xE9 executado no primeiro clique no campo."),t()()(),i(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),e(2101," disabledTabFilter"),n(2102,"br"),t()()(),i(2103,"td",21)(2104,"code",29),e(2105,"boolean"),t()(),i(2106,"td",24)(2107,"em")(2108,"strong"),e(2109,"(opcional)"),t()(),i(2110,"p"),e(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(2112,"code"),e(2113,"po-combo"),t(),e(2114,"."),t()()(),i(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),e(2119," divider"),n(2120,"br"),t()()(),i(2121,"td",21)(2122,"code",27),e(2123,"string"),t()(),i(2124,"td",24)(2125,"em")(2126,"strong"),e(2127,"(opcional)"),t()(),i(2128,"p"),e(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),e(2134," dragDrop"),n(2135,"br"),t()()(),i(2136,"td",21)(2137,"code",29),e(2138,"boolean"),t()(),i(2139,"td",24)(2140,"em")(2141,"strong"),e(2142,"(opcional)"),t()(),i(2143,"p"),e(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(2145,"blockquote")(2146,"p"),e(2147,"Recomendamos utilizar apenas um "),i(2148,"code"),e(2149,"po-upload"),t(),e(2150," com esta funcionalidade por tela."),t()(),i(2151,"p")(2152,"strong"),e(2153,"Componente compat\xEDvel"),t(),e(2154,": "),i(2155,"code"),e(2156,"po-upload"),t()()()(),i(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),e(2161," dragDropHeight"),n(2162,"br"),t()()(),i(2163,"td",21)(2164,"code",45),e(2165,"number"),t()(),i(2166,"td",24)(2167,"em")(2168,"strong"),e(2169,"(opcional)"),t()(),i(2170,"p"),e(2171,"Define em "),i(2172,"em"),e(2173,"pixels"),t(),e(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(2175,"code"),e(2176,"160px"),t(),e(2177,"."),t(),i(2178,"blockquote")(2179,"p"),e(2180,"Esta propriedade funciona somente se a propriedade "),i(2181,"code"),e(2182,"p-drag-drop"),t(),e(2183," estiver habilitada."),t()(),i(2184,"p")(2185,"strong"),e(2186,"Componente compat\xEDvel"),t(),e(2187,": "),i(2188,"code"),e(2189,"po-upload"),t()()()(),i(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),e(2194," errorAsyncFunction"),n(2195,"br"),t()()(),i(2196,"td",21)(2197,"code",50),e(2198,"(value) => Observable<boolean>"),t()(),i(2199,"td",24)(2200,"em")(2201,"strong"),e(2202,"(opcional)"),t()(),i(2203,"p"),e(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(2205,"code"),e(2206,"change"),t(),e(2207," ou "),i(2208,"code"),e(2209,"change-model"),t(),e(2210,", dependendo do valor da propriedade "),i(2211,"code"),e(2212,"triggerMode"),t(),e(2213,"."),t(),i(2214,"blockquote")(2215,"p"),e(2216,"Retorna "),i(2217,"code"),e(2218,"Observable com o valor true"),t(),e(2219," para sinalizar o erro "),i(2220,"code"),e(2221,"false"),t(),e(2222," para indicar que n\xE3o h\xE1 erro."),t()(),i(2223,"p")(2224,"strong"),e(2225,"Componente compat\xEDvel"),t(),e(2226,": "),i(2227,"code"),e(2228,"po-datepicker"),t()()()(),i(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),e(2233," errorAsyncProperties"),n(2234,"br"),t()()(),i(2235,"td",21)(2236,"code",51),e(2237,"ErrorAsyncProperties"),t()(),i(2238,"td",24)(2239,"em")(2240,"strong"),e(2241,"(opcional)"),t()(),i(2242,"p"),e(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(2244,"p")(2245,"strong"),e(2246,"Componentes compat\xEDveis:"),t(),i(2247,"code"),e(2248,"po-input"),t(),e(2249,", "),i(2250,"code"),e(2251,"po-number"),t(),e(2252,", "),i(2253,"code"),e(2254,"po-decimal"),t(),e(2255,", "),i(2256,"code"),e(2257,"po-password"),t(),e(2258,"."),t()()(),i(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),e(2263," errorLimit"),n(2264,"br"),t()()(),i(2265,"td",21)(2266,"code",29),e(2267,"boolean"),t()(),i(2268,"td",24)(2269,"em")(2270,"strong"),e(2271,"(opcional)"),t()(),i(2272,"p"),e(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2274,"blockquote")(2275,"p"),e(2276,"Caso essa propriedade seja definida como "),i(2277,"code"),e(2278,"true"),t(),e(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2280,"p")(2281,"strong"),e(2282,"Componentes compat\xEDveis:"),t(),i(2283,"code"),e(2284,"po-checkbox-group"),t(),e(2285,", "),i(2286,"code"),e(2287,"po-combo"),t(),e(2288,", "),i(2289,"code"),e(2290,"po-datepicker"),t(),e(2291,", "),i(2292,"code"),e(2293,"po-datepicker-range"),t(),e(2294,", "),i(2295,"code"),e(2296,"po-decimal"),t(),e(2297,", "),i(2298,"code"),e(2299,"po-input"),t(),e(2300,", "),i(2301,"code"),e(2302,"po-lookup"),t(),e(2303,", "),i(2304,"code"),e(2305,"po-multiselect"),t(),e(2306,", "),i(2307,"code"),e(2308,"po-number"),t(),e(2309,", "),i(2310,"code"),e(2311,"po-password"),t(),e(2312,", "),i(2313,"code"),e(2314,"po-radio-group"),t(),e(2315,", "),i(2316,"code"),e(2317,"po-select"),t(),e(2318,`,
`),i(2319,"code"),e(2320,"po-switch"),t(),e(2321,", "),i(2322,"code"),e(2323,"po-textarea"),t(),e(2324,", "),i(2325,"code"),e(2326,"po-timepicker"),t(),e(2327,"."),t()()(),i(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),e(2332," errorMessage"),n(2333,"br"),t()()(),i(2334,"td",21)(2335,"code",27),e(2336,"string"),t()(),i(2337,"td",24)(2338,"em")(2339,"strong"),e(2340,"(opcional)"),t()(),i(2341,"p"),e(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2343,"p"),e(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2345,"ul")(2346,"li"),e(2347,"pattern;"),t(),i(2348,"li"),e(2349,"minValue;"),t(),i(2350,"li"),e(2351,"maxValue;"),t(),i(2352,"li"),e(2353,"required;"),t()(),i(2354,"blockquote")(2355,"p"),e(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2357,"code"),e(2358,"po-datepicker"),t(),e(2359,", "),i(2360,"code"),e(2361,"po-input"),t(),e(2362,", "),i(2363,"code"),e(2364,"po-number"),t(),e(2365,", "),i(2366,"code"),e(2367,"po-decimal"),t(),e(2368,", "),i(2369,"code"),e(2370,"po-password"),t(),e(2371,", "),i(2372,"code"),e(2373,"po-timepicker"),t(),e(2374,`, \xE9 necess\xE1rio que a propriedade
`),i(2375,"code"),e(2376,"requiredFieldErrorMessage"),t(),e(2377," esteja como "),i(2378,"code"),e(2379,"true"),t(),e(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2381,"code"),e(2382,"po-datepicker-range"),t(),e(2383,", "),i(2384,"code"),e(2385,"po-select"),t(),e(2386,", "),i(2387,"code"),e(2388,"po-checkbox-group"),t(),e(2389,", "),i(2390,"code"),e(2391,"po-radio-group"),t(),e(2392,", "),i(2393,"code"),e(2394,"po-multiselect"),t(),e(2395,", "),i(2396,"code"),e(2397,"po-combo"),t(),e(2398,`,
`),i(2399,"code"),e(2400,"po-lookup"),t(),e(2401," e "),i(2402,"code"),e(2403,"po-textarea"),t(),e(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2405,"code"),e(2406,"requiredFieldErrorMessage"),t(),e(2407,"."),t()(),i(2408,"p")(2409,"strong"),e(2410,"Componentes compat\xEDveis:"),t(),i(2411,"code"),e(2412,"po-checkbox-group"),t(),e(2413,", "),i(2414,"code"),e(2415,"po-combo"),t(),e(2416,", "),i(2417,"code"),e(2418,"po-datepicker"),t(),e(2419,", "),i(2420,"code"),e(2421,"po-datepicker-range"),t(),e(2422,", "),i(2423,"code"),e(2424,"po-decimal"),t(),e(2425,", "),i(2426,"code"),e(2427,"po-input"),t(),e(2428,", "),i(2429,"code"),e(2430,"po-lookup"),t(),e(2431,", "),i(2432,"code"),e(2433,"po-multiselect"),t(),e(2434,", "),i(2435,"code"),e(2436,"po-number"),t(),e(2437,", "),i(2438,"code"),e(2439,"po-password"),t(),e(2440,", "),i(2441,"code"),e(2442,"po-radio-group"),t(),e(2443,", "),i(2444,"code"),e(2445,"po-select"),t(),e(2446,`,
`),i(2447,"code"),e(2448,"po-switch"),t(),e(2449,", "),i(2450,"code"),e(2451,"po-textarea"),t(),e(2452,", "),i(2453,"code"),e(2454,"po-timepicker"),t(),e(2455,"."),t()()(),i(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),e(2460," fieldLabel"),n(2461,"br"),t()()(),i(2462,"td",21)(2463,"code",27),e(2464,"string"),t()(),i(2465,"td",24)(2466,"em")(2467,"strong"),e(2468,"(opcional)"),t()(),i(2469,"p"),e(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2471,"p"),e(2472,"O valor padr\xE3o \xE9: "),i(2473,"code"),e(2474,"label"),t(),e(2475,"."),t(),i(2476,"blockquote")(2477,"p"),e(2478,"Esta propriedade pode ser utilizada em conjunto com: "),i(2479,"code"),e(2480,"options"),t(),e(2481,", "),i(2482,"code"),e(2483,"optionsService"),t(),e(2484," e "),i(2485,"code"),e(2486,"searchService"),t(),e(2487,"."),t()()()(),i(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),e(2492," fieldValue"),n(2493,"br"),t()()(),i(2494,"td",21)(2495,"code",27),e(2496,"string"),t()(),i(2497,"td",24)(2498,"em")(2499,"strong"),e(2500,"(opcional)"),t()(),i(2501,"p"),e(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2503,"p"),e(2504,"O valor padr\xE3o \xE9: "),i(2505,"code"),e(2506,"value"),t(),e(2507,"."),t(),i(2508,"blockquote")(2509,"p"),e(2510,"Esta propriedade pode ser utilizada em conjunto com: "),i(2511,"code"),e(2512,"options"),t(),e(2513,", "),i(2514,"code"),e(2515,"optionsService"),t(),e(2516," e "),i(2517,"code"),e(2518,"searchService"),t(),e(2519,"."),t()()()(),i(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),e(2524," filterMinlength"),n(2525,"br"),t()()(),i(2526,"td",21)(2527,"code",45),e(2528,"number"),t()(),i(2529,"td",24)(2530,"em")(2531,"strong"),e(2532,"(opcional)"),t()(),i(2533,"p"),e(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2535,"code"),e(2536,"po-combo"),t(),e(2537,"."),t()()(),i(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),e(2542," filterMode"),n(2543,"br"),t()()(),i(2544,"td",21)(2545,"code",52),e(2546,"PoMultiselectFilterMode"),t()(),i(2547,"td",24)(2548,"em")(2549,"strong"),e(2550,"(opcional)"),t()(),i(2551,"p"),e(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2553,"code"),e(2554,"startsWith"),t(),e(2555,", "),i(2556,"code"),e(2557,"contains"),t(),e(2558," ou "),i(2559,"code"),e(2560,"endsWith"),t(),e(2561,"."),t(),i(2562,"blockquote")(2563,"p"),e(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2565,"p")(2566,"strong"),e(2567,"Componente compat\xEDvel:"),t(),i(2568,"code"),e(2569,"po-multiselect"),t(),e(2570,"."),t()()(),i(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),e(2575," forceBooleanComponentType"),n(2576,"br"),t()()(),i(2577,"td",21)(2578,"code",53),e(2579,"ForceBooleanComponentEnum"),t()(),i(2580,"td",24)(2581,"em")(2582,"strong"),e(2583,"(opcional)"),t()(),i(2584,"p"),e(2585,"Valores aceitos:"),t(),i(2586,"ul")(2587,"li"),e(2588,"ForceBooleanComponentEnum.switch"),t(),i(2589,"li"),e(2590,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),e(2595," forceOptionsComponentType"),n(2596,"br"),t()()(),i(2597,"td",21)(2598,"code",54),e(2599,"ForceOptionComponentEnum"),t()(),i(2600,"td",24)(2601,"em")(2602,"strong"),e(2603,"(opcional)"),t()(),i(2604,"p"),e(2605,"pode ser utilizada em conjunto com a propriedade "),i(2606,"code"),e(2607,"options"),t(),e(2608," for\xE7ando o componente a renderizar um "),i(2609,"code"),e(2610,"po-select"),t(),e(2611," ou "),i(2612,"code"),e(2613,"po-radio-group"),t(),e(2614,"."),t(),i(2615,"p"),e(2616,"Valores aceitos:"),t(),i(2617,"ul")(2618,"li"),e(2619,"ForceOptionComponentEnum.radioGroup"),t(),i(2620,"li"),e(2621,"ForceOptionComponentEnum.select"),t()(),i(2622,"blockquote")(2623,"p"),e(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2625,"code"),e(2626,"optionsMulti"),t(),e(2627," e "),i(2628,"code"),e(2629,"optionsService"),t(),e(2630,"."),t()()()(),i(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),e(2635," formField"),n(2636,"br"),t()()(),i(2637,"td",21)(2638,"code",27),e(2639,"string"),t()(),i(2640,"td",24)(2641,"em")(2642,"strong"),e(2643,"(opcional)"),t()(),i(2644,"p"),e(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2646,"code"),e(2647,"url"),t(),e(2648,"."),t(),i(2649,"blockquote")(2650,"p"),e(2651,"O valor default \xE9 "),i(2652,"code"),e(2653,"files"),t()()(),i(2654,"p")(2655,"strong"),e(2656,"Componente compat\xEDvel"),t(),e(2657,": "),i(2658,"code"),e(2659,"po-upload"),t()()()(),i(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),e(2664," format"),n(2665,"br"),t()()(),i(2666,"td",21)(2667,"code",27),e(2668,"string "),t(),i(2669,"code",32),e(2670," Array<string>"),t()(),i(2671,"td",24)(2672,"em")(2673,"strong"),e(2674,"(opcional)"),t()(),i(2675,"p"),e(2676,"Formato de exibi\xE7\xE3o no campo."),t(),i(2677,"p"),e(2678,"Ao utilizar esta propriedade com o "),i(2679,"code"),e(2680,"type"),t(),i(2681,"em"),e(2682,"PoDynamicFieldType.Date"),t(),e(2683," ou "),i(2684,"em"),e(2685,"PoDynamicFieldType.DateTime"),t(),e(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2687,"p"),e(2688,"Valores v\xE1lidos:"),t(),i(2689,"ul")(2690,"li"),e(2691,"dd/mm/yyyy"),t(),i(2692,"li"),e(2693,"mm/dd/yyyy"),t(),i(2694,"li"),e(2695,"yyyy/mm/dd"),t()(),i(2696,"p"),e(2697,"Ao utilizar com o "),i(2698,"code"),e(2699,"type"),t(),i(2700,"em"),e(2701,"PoDynamicFieldType.Time"),t(),e(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),t(),i(2703,"p"),e(2704,"Valores v\xE1lidos:"),t(),i(2705,"ul")(2706,"li")(2707,"code"),e(2708,"24"),t(),e(2709,": formato de 24 horas (padr\xE3o)"),t(),i(2710,"li")(2711,"code"),e(2712,"12"),t(),e(2713,": formato de 12 horas com indicador AM/PM"),t()(),i(2714,"p"),e(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2716,"code"),e(2717,"searchService"),t(),e(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t(),i(2719,"p")(2720,"strong"),e(2721,"Componentes compat\xEDveis:"),t(),i(2722,"code"),e(2723,"po-datepicker"),t(),e(2724,", "),i(2725,"code"),e(2726,"po-datetimepicker"),t(),e(2727,", "),i(2728,"code"),e(2729,"po-timepicker"),t(),e(2730,", "),i(2731,"code"),e(2732,"po-lookup"),t(),e(2733,"."),t()()(),i(2734,"tr",16)(2735,"td",17)(2736,"div",25)(2737,"span",26),e(2738," formatModel"),n(2739,"br"),t()()(),i(2740,"td",21)(2741,"code",29),e(2742,"boolean"),t()(),i(2743,"td",24)(2744,"em")(2745,"strong"),e(2746,"(opcional)"),t()(),i(2747,"p"),e(2748,"Indica se o "),i(2749,"code"),e(2750,"model"),t(),e(2751," receber\xE1 o valor formatado pelas propriedades "),i(2752,"code"),e(2753,"p-label-on"),t(),e(2754," e "),i(2755,"code"),e(2756,"p-label-off"),t(),e(2757,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2758,"p"),e(2759,"O valor padr\xE3o \xE9: "),i(2760,"code"),e(2761,"false"),t(),e(2762,"."),t(),i(2763,"blockquote")(2764,"p"),e(2765,"Esta propriedade est\xE1 disponivel apenas para o "),i(2766,"code"),e(2767,"swicth"),t(),e(2768,"."),t()()()(),i(2769,"tr",16)(2770,"td",17)(2771,"div",25)(2772,"span",26),e(2773," formatTime"),n(2774,"br"),t()()(),i(2775,"td",21)(2776,"code",27),e(2777,"string"),t()(),i(2778,"td",24)(2779,"em")(2780,"strong"),e(2781,"(opcional)"),t()(),i(2782,"p"),e(2783,"Define o formato de exibi\xE7\xE3o do timer ("),i(2784,"code"),e(2785,"'12'"),t(),e(2786," ou "),i(2787,"code"),e(2788,"'24'"),t(),e(2789,")."),t(),i(2790,"p")(2791,"strong"),e(2792,"Componente compat\xEDvel:"),t(),i(2793,"code"),e(2794,"po-datetimepicker"),t()()()(),i(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),e(2799," gridColumns"),n(2800,"br"),t()()(),i(2801,"td",21)(2802,"code",45),e(2803,"number"),t()(),i(2804,"td",24)(2805,"em")(2806,"strong"),e(2807,"(opcional)"),t()(),i(2808,"p"),e(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2810,"p"),e(2811,"Deve ser usado o sistema de "),i(2812,"strong"),e(2813,"grid"),t(),e(2814," do PO (1 ... 12 colunas)."),t(),i(2815,"blockquote")(2816,"p"),e(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),e(2822," gridLgColumns"),n(2823,"br"),t()()(),i(2824,"td",21)(2825,"code",45),e(2826,"number"),t()(),i(2827,"td",24)(2828,"em")(2829,"strong"),e(2830,"(opcional)"),t()(),i(2831,"p"),e(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2833,"p"),e(2834,"Deve ser usado o sistema de "),i(2835,"strong"),e(2836,"grid"),t(),e(2837," do PO (1 ... 12 colunas)."),t(),i(2838,"blockquote")(2839,"p"),e(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2841,"code"),e(2842,"gridColumns"),t(),e(2843,"."),t()()()(),i(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),e(2848," gridLgPull"),n(2849,"br"),t()()(),i(2850,"td",21)(2851,"code",45),e(2852,"number"),t()(),i(2853,"td",24)(2854,"em")(2855,"strong"),e(2856,"(opcional)"),t()(),i(2857,"p"),e(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2859,"p"),e(2860,"Deve ser usado o sistema de "),i(2861,"strong"),e(2862,"grid"),t(),e(2863," do PO (1 ... 11 colunas)."),t(),i(2864,"blockquote")(2865,"p"),e(2866,"Esta propriedade n\xE3o funciona com a propriedade "),i(2867,"code"),e(2868,"gridColumns"),t(),e(2869,". Deve-se especificar o tamanho da tela."),t()()()(),i(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),e(2874," gridMdColumns"),n(2875,"br"),t()()(),i(2876,"td",21)(2877,"code",45),e(2878,"number"),t()(),i(2879,"td",24)(2880,"em")(2881,"strong"),e(2882,"(opcional)"),t()(),i(2883,"p"),e(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2885,"p"),e(2886,"Deve ser usado o sistema de "),i(2887,"strong"),e(2888,"grid"),t(),e(2889," do PO (1 ... 12 colunas)."),t(),i(2890,"blockquote")(2891,"p"),e(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2893,"code"),e(2894,"gridColumns"),t(),e(2895,"."),t()()()(),i(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),e(2900," gridMdPull"),n(2901,"br"),t()()(),i(2902,"td",21)(2903,"code",45),e(2904,"number"),t()(),i(2905,"td",24)(2906,"em")(2907,"strong"),e(2908,"(opcional)"),t()(),i(2909,"p"),e(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2911,"p"),e(2912,"Deve ser usado o sistema de "),i(2913,"strong"),e(2914,"grid"),t(),e(2915," do PO (1 ... 11 colunas)."),t(),i(2916,"blockquote")(2917,"p"),e(2918,"Esta propriedade n\xE3o funciona com a propriedade "),i(2919,"code"),e(2920,"gridColumns"),t(),e(2921,". Deve-se especificar o tamanho da tela."),t()()()(),i(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),e(2926," gridSmColumns"),n(2927,"br"),t()()(),i(2928,"td",21)(2929,"code",45),e(2930,"number"),t()(),i(2931,"td",24)(2932,"em")(2933,"strong"),e(2934,"(opcional)"),t()(),i(2935,"p"),e(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2937,"p"),e(2938,"Deve ser usado o sistema de "),i(2939,"strong"),e(2940,"grid"),t(),e(2941," do PO (1 ... 12 colunas)."),t(),i(2942,"blockquote")(2943,"p"),e(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2945,"code"),e(2946,"gridColumns"),t(),e(2947,"."),t()()()(),i(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),e(2952," gridSmPull"),n(2953,"br"),t()()(),i(2954,"td",21)(2955,"code",45),e(2956,"number"),t()(),i(2957,"td",24)(2958,"em")(2959,"strong"),e(2960,"(opcional)"),t()(),i(2961,"p"),e(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2963,"p"),e(2964,"Deve ser usado o sistema de "),i(2965,"strong"),e(2966,"grid"),t(),e(2967," do PO (1 ... 11 colunas)."),t(),i(2968,"blockquote")(2969,"p"),e(2970,"Esta propriedade n\xE3o funciona com a propriedade "),i(2971,"code"),e(2972,"gridColumns"),t(),e(2973,". Deve-se especificar o tamanho da tela."),t()()()(),i(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),e(2978," gridXlColumns"),n(2979,"br"),t()()(),i(2980,"td",21)(2981,"code",45),e(2982,"number"),t()(),i(2983,"td",24)(2984,"em")(2985,"strong"),e(2986,"(opcional)"),t()(),i(2987,"p"),e(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2989,"p"),e(2990,"Deve ser usado o sistema de "),i(2991,"strong"),e(2992,"grid"),t(),e(2993," do PO (1 ... 12 colunas)."),t(),i(2994,"blockquote")(2995,"p"),e(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2997,"code"),e(2998,"gridColumns"),t(),e(2999,"."),t()()()(),i(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),e(3004," gridXlPull"),n(3005,"br"),t()()(),i(3006,"td",21)(3007,"code",45),e(3008,"number"),t()(),i(3009,"td",24)(3010,"em")(3011,"strong"),e(3012,"(opcional)"),t()(),i(3013,"p"),e(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(3015,"p"),e(3016,"Deve ser usado o sistema de "),i(3017,"strong"),e(3018,"grid"),t(),e(3019," do PO (1 ... 11 colunas)."),t(),i(3020,"blockquote")(3021,"p"),e(3022,"Esta propriedade n\xE3o funciona com a propriedade "),i(3023,"code"),e(3024,"gridColumns"),t(),e(3025,". Deve-se especificar o tamanho da tela."),t()()()(),i(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),e(3030," headers"),n(3031,"br"),t()()(),i(3032,"td",21)(3033,"code",55),e(3034,"{ [name: string]: string "),t(),i(3035,"code",56),e(3036,` Array<string>;
}`),t()(),i(3037,"td",24)(3038,"em")(3039,"strong"),e(3040,"(opcional)"),t()(),i(3041,"p"),e(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(3043,"p")(3044,"strong"),e(3045,"Componente compat\xEDvel"),t(),e(3046,": "),i(3047,"code"),e(3048,"po-upload"),t()()()(),i(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),e(3053," help"),n(3054,"br"),t()()(),i(3055,"td",21)(3056,"code",27),e(3057,"string"),t()(),i(3058,"td",24)(3059,"em")(3060,"strong"),e(3061,"(opcional)"),t()(),i(3062,"p"),e(3063,"Texto de ajuda."),t()()(),i(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),e(3068," helper"),n(3069,"br"),t()()(),i(3070,"td",21)(3071,"code",27),e(3072,"string "),t(),i(3073,"code",38),e(3074," PoHelperOptions"),t()(),i(3075,"td",24)(3076,"em")(3077,"strong"),e(3078,"(opcional)"),t()(),i(3079,"p"),e(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),i(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),e(3085," hideLabelStatus"),n(3086,"br"),t()()(),i(3087,"td",21)(3088,"code",29),e(3089,"boolean"),t()(),i(3090,"td",24)(3091,"em")(3092,"strong"),e(3093,"(opcional)"),t()(),i(3094,"p"),e(3095,"Indica se o status do "),i(3096,"code"),e(3097,"model"),t(),e(3098," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),e(3103," hidePasswordPeek"),n(3104,"br"),t()()(),i(3105,"td",21)(3106,"code",29),e(3107,"boolean"),t()(),i(3108,"td",24)(3109,"em")(3110,"strong"),e(3111,"(opcional)"),t()(),i(3112,"p"),e(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(3114,"code"),e(3115,"po-password"),t(),e(3116,"."),t()()(),i(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),e(3121," hideRestrictionsInfo"),n(3122,"br"),t()()(),i(3123,"td",21)(3124,"code",29),e(3125,"boolean"),t()(),i(3126,"td",24)(3127,"em")(3128,"strong"),e(3129,"(opcional)"),t()(),i(3130,"p"),e(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(3132,"p")(3133,"strong"),e(3134,"Componente compat\xEDvel"),t(),e(3135,": "),i(3136,"code"),e(3137,"po-upload"),t()()()(),i(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),e(3142," hideSearch"),n(3143,"br"),t()()(),i(3144,"td",21)(3145,"code",29),e(3146,"boolean"),t()(),i(3147,"td",24)(3148,"em")(3149,"strong"),e(3150,"(opcional)"),t()(),i(3151,"p"),e(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(3153,"code"),e(3154,"po-multiselect"),t(),e(3155,"."),t()()(),i(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),e(3160," hideSelectAll"),n(3161,"br"),t()()(),i(3162,"td",21)(3163,"code",29),e(3164,"boolean"),t()(),i(3165,"td",24)(3166,"em")(3167,"strong"),e(3168,"(opcional)"),t()(),i(3169,"p"),e(3170,'Indica se o campo "Selecionar todos" do '),i(3171,"code"),e(3172,"po-multiselect"),t(),e(3173," ser\xE1 escondido."),t()()(),i(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),e(3178," hideSelectButton"),n(3179,"br"),t()()(),i(3180,"td",21)(3181,"code",29),e(3182,"boolean"),t()(),i(3183,"td",24)(3184,"em")(3185,"strong"),e(3186,"(opcional)"),t()(),i(3187,"p"),e(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(3189,"blockquote")(3190,"p"),e(3191,"Caso o valor definido seja "),i(3192,"code"),e(3193,"true"),t(),e(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3195,"code"),e(3196,"selectFiles()"),t(),e(3197," para sele\xE7\xE3o de arquivos."),t()(),i(3198,"p")(3199,"strong"),e(3200,"Componente compat\xEDvel"),t(),e(3201,": "),i(3202,"code"),e(3203,"po-upload"),t()()()(),i(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),e(3208," hideSendButton"),n(3209,"br"),t()()(),i(3210,"td",21)(3211,"code",29),e(3212,"boolean"),t()(),i(3213,"td",24)(3214,"em")(3215,"strong"),e(3216,"(opcional)"),t()(),i(3217,"p"),e(3218,"Omite o bot\xE3o de envio de arquivos."),t(),i(3219,"blockquote")(3220,"p"),e(3221,"Caso o valor definido seja "),i(3222,"code"),e(3223,"true"),t(),e(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3225,"code"),e(3226,"sendFiles()"),t(),e(3227," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(3228,"p")(3229,"strong"),e(3230,"Componente compat\xEDvel"),t(),e(3231,": "),i(3232,"code"),e(3233,"po-upload"),t()()()(),i(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),e(3238," icon"),n(3239,"br"),t()()(),i(3240,"td",21)(3241,"code",27),e(3242,"string "),t(),i(3243,"code",57),e(3244," TemplateRef<void>"),t()(),i(3245,"td",24)(3246,"em")(3247,"strong"),e(3248,"(opcional)"),t()(),i(3249,"p"),e(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(3251,"blockquote")(3252,"p"),e(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(3254,"ul")(3255,"li"),e(3256,"Input;"),t(),i(3257,"li"),e(3258,"Number;"),t(),i(3259,"li"),e(3260,"Decimal;"),t(),i(3261,"li"),e(3262,"Combo;"),t(),i(3263,"li"),e(3264,"Password;"),t()(),i(3265,"blockquote")(3266,"p"),e(3267,"Veja a disponibilidade de \xEDcones em "),i(3268,"a",58),e(3269,"biblioteca de \xEDcones"),t(),e(3270,"."),t()()()(),i(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),e(3275," infiniteScroll"),n(3276,"br"),t()()(),i(3277,"td",21)(3278,"code",29),e(3279,"boolean"),t()(),i(3280,"td",24)(3281,"em")(3282,"strong"),e(3283,"(opcional)"),t()(),i(3284,"p"),e(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(3286,"p")(3287,"strong"),e(3288,"Componentes compat\xEDveis:"),t(),i(3289,"code"),e(3290,"po-combo"),t(),e(3291,", "),i(3292,"code"),e(3293,"po-lookup"),t(),e(3294,"."),t()()(),i(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),e(3299," infiniteScrollDistance"),n(3300,"br"),t()()(),i(3301,"td",21)(3302,"code",45),e(3303,"number"),t()(),i(3304,"td",24)(3305,"em")(3306,"strong"),e(3307,"(opcional)"),t()(),i(3308,"p"),e(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(3310,"strong"),e(3311,"Exemplos"),t(),i(3312,"code"),e(3313,"{ infiniteScrollDistance: 80 }"),t(),e(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(3315,"p")(3316,"strong"),e(3317,"Componente compat\xEDvel:"),t(),i(3318,"code"),e(3319,"po-combo"),t(),e(3320,"."),t()()(),i(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),e(3325," invalidValue"),n(3326,"br"),t()()(),i(3327,"td",21)(3328,"code",29),e(3329,"boolean"),t()(),i(3330,"td",24)(3331,"em")(3332,"strong"),e(3333,"(opcional)"),t()(),i(3334,"p"),e(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(3336,"code"),e(3337,"p-field-error-message"),t(),e(3338,"."),t(),i(3339,"blockquote")(3340,"p"),e(3341,"Caso essa propriedade seja definida como "),i(3342,"code"),e(3343,"true"),t(),e(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(3345,"p")(3346,"strong"),e(3347,"Componente compat\xEDvel"),t(),e(3348,": "),i(3349,"code"),e(3350,"po-switch"),t()()()(),i(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),e(3355," isoFormat"),n(3356,"br"),t()()(),i(3357,"td",21)(3358,"code",59),e(3359,"PoDatepickerIsoFormat"),t()(),i(3360,"td",24)(3361,"em")(3362,"strong"),e(3363,"(opcional)"),t()(),i(3364,"p"),e(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(3366,"blockquote")(3367,"p"),e(3368,"Veja os valores v\xE1lidos no "),i(3369,"code"),e(3370,"PoDatepickerIsoFormat"),t(),e(3371,"."),t()(),i(3372,"p")(3373,"strong"),e(3374,"Componente compat\xEDvel:"),t(),i(3375,"code"),e(3376,"po-datepicker"),t()()()(),i(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),e(3381," key"),n(3382,"br"),t()()(),i(3383,"td",21)(3384,"code",29),e(3385,"boolean"),t()(),i(3386,"td",24)(3387,"em")(3388,"strong"),e(3389,"(opcional)"),t()(),i(3390,"p"),e(3391,"Identificador"),t()()(),i(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),e(3396," keydown"),n(3397,"br"),t()()(),i(3398,"td",21)(3399,"code",44),e(3400,"Function"),t()(),i(3401,"td",24)(3402,"em")(3403,"strong"),e(3404,"(opcional)"),t()(),i(3405,"p"),e(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3407,"code"),e(3408,"KeyboardEvent"),t(),e(3409," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),e(3414," label"),n(3415,"br"),t()()(),i(3416,"td",21)(3417,"code",27),e(3418,"string"),t()(),i(3419,"td",24)(3420,"em")(3421,"strong"),e(3422,"(opcional)"),t()(),i(3423,"p"),e(3424,"R\xF3tulo do campo exibido."),t(),i(3425,"p"),e(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3427,"code"),e(3428,"label"),t(),e(3429," o valor da propriedade "),i(3430,"code"),e(3431,"property"),t(),e(3432," com a primeira letra em mai\xFAsculo."),t()()(),i(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),e(3437," labelPosition"),n(3438,"br"),t()()(),i(3439,"td",21)(3440,"code",60),e(3441,"PoSwitchLabelPosition"),t()(),i(3442,"td",24)(3443,"em")(3444,"strong"),e(3445,"(opcional)"),t()(),i(3446,"p"),e(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3448,"blockquote")(3449,"p"),e(3450,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),e(3455," listboxControlPosition"),n(3456,"br"),t()()(),i(3457,"td",21)(3458,"code",61),e(3459,"'top' "),t(),i(3460,"code",62),e(3461," 'bottom'"),t()(),i(3462,"td",24)(3463,"em")(3464,"strong"),e(3465,"(opcional)"),t()(),i(3466,"p"),e(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(3468,"code"),e(3469,"listbox"),t(),e(3470," em rela\xE7\xE3o ao campo ("),i(3471,"code"),e(3472,"top"),t(),e(3473," ou "),i(3474,"code"),e(3475,"bottom"),t(),e(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(3477,"p")(3478,"strong"),e(3479,"Componentes compat\xEDveis:"),t(),i(3480,"code"),e(3481,"po-multiselect"),t(),e(3482,", "),i(3483,"code"),e(3484,"po-combo"),t(),e(3485,"."),t()()(),i(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),e(3490," literals"),n(3491,"br"),t()()(),i(3492,"td",21)(3493,"code",36),e(3494,"PoLookupLiterals "),t(),i(3495,"code",63),e(3496," PoMultiselectLiterals "),t(),i(3497,"code",64),e(3498," PoComboLiterals "),t(),i(3499,"code",65),e(3500," PoDatepickerRangeLiterals "),t(),i(3501,"code",66),e(3502," PoUploadLiterals"),t()(),i(3503,"td",24)(3504,"em")(3505,"strong"),e(3506,"(opcional)"),t()(),i(3507,"p"),e(3508,"Objeto com as literais usadas para os seguintes componentes: "),i(3509,"code"),e(3510,"po-lookup"),t(),e(3511,", "),i(3512,"code"),e(3513,"po-multiselect"),t(),e(3514,", "),i(3515,"code"),e(3516,"po-combo"),t(),e(3517," e "),i(3518,"code"),e(3519,"po-datepicker-range"),t(),e(3520,"."),t(),i(3521,"blockquote")(3522,"p"),e(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3524,"p")(3525,"strong"),e(3526,"Componentes compat\xEDveis:"),t(),i(3527,"code"),e(3528,"po-lookup"),t(),e(3529,", "),i(3530,"code"),e(3531,"po-multiselect"),t(),e(3532,", "),i(3533,"code"),e(3534,"po-combo"),t(),e(3535,", "),i(3536,"code"),e(3537,"po-datepicker-range"),t()()()(),i(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),e(3542," loading"),n(3543,"br"),t()()(),i(3544,"td",21)(3545,"code",29),e(3546,"boolean"),t()(),i(3547,"td",24)(3548,"em")(3549,"strong"),e(3550,"(opcional)"),t()(),i(3551,"p"),e(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),t(),i(3553,"blockquote")(3554,"p"),e(3555,"Por padr\xE3o \xE9 "),i(3556,"code"),e(3557,"false"),t(),e(3558,"."),t()(),i(3559,"p")(3560,"strong"),e(3561,"Componentes compat\xEDveis:"),t(),i(3562,"code"),e(3563,"po-datepicker"),t(),e(3564,", "),i(3565,"code"),e(3566,"po-datepicker-range"),t(),e(3567,", "),i(3568,"code"),e(3569,"po-number"),t(),e(3570,", "),i(3571,"code"),e(3572,"po-decimal"),t(),e(3573,`,
`),i(3574,"code"),e(3575,"po-input"),t(),e(3576,", "),i(3577,"code"),e(3578,"po-select"),t(),e(3579,", "),i(3580,"code"),e(3581,"po-switch"),t(),e(3582,", "),i(3583,"code"),e(3584,"po-combo"),t(),e(3585,", "),i(3586,"code"),e(3587,"po-lookup"),t(),e(3588,", "),i(3589,"code"),e(3590,"po-multiselect"),t(),e(3591,`,
`),i(3592,"code"),e(3593,"po-textarea"),t(),e(3594,", "),i(3595,"code"),e(3596,"po-password"),t(),e(3597,", "),i(3598,"code"),e(3599,"po-upload"),t(),e(3600,"."),t()()(),i(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),e(3605," locale"),n(3606,"br"),t()()(),i(3607,"td",21)(3608,"code",27),e(3609,"string"),t()(),i(3610,"td",24)(3611,"em")(3612,"strong"),e(3613,"(opcional)"),t()(),i(3614,"p"),e(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3616,"a",67)(3617,"code"),e(3618,"I18n"),t()()(),i(3619,"p"),e(3620,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3621,"pre")(3622,"code"),e(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(3624,"blockquote")(3625,"p"),e(3626,"Para ver quais linguagens suportadas acesse "),i(3627,"a",67)(3628,"code"),e(3629,"I18n"),t()()()(),i(3630,"p")(3631,"strong"),e(3632,"Componentes compat\xEDveis:"),t(),i(3633,"code"),e(3634,"po-datepicker"),t(),e(3635,", "),i(3636,"code"),e(3637,"po-decimal"),t(),e(3638,", "),i(3639,"code"),e(3640,"po-timepicker"),t(),e(3641,"."),t()()(),i(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),e(3646," mask"),n(3647,"br"),t()()(),i(3648,"td",21)(3649,"code",27),e(3650,"string"),t()(),i(3651,"td",24)(3652,"em")(3653,"strong"),e(3654,"(opcional)"),t()(),i(3655,"p"),e(3656,"M\xE1scara para o campo."),t(),i(3657,"p")(3658,"strong"),e(3659,"Componente compat\xEDvel:"),t(),i(3660,"code"),e(3661,"po-input"),t(),e(3662,"."),t(),i(3663,"blockquote")(3664,"p"),e(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3666,"code"),e(3667,"type: time"),t(),e(3668,"."),t()()()(),i(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),e(3673," maskFormatModel"),n(3674,"br"),t()()(),i(3675,"td",21)(3676,"code",29),e(3677,"boolean"),t()(),i(3678,"td",24)(3679,"em")(3680,"strong"),e(3681,"(opcional)"),t()(),i(3682,"p"),e(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3684,"code"),e(3685,"false"),t(),e(3686,"."),t(),i(3687,"p")(3688,"strong"),e(3689,"Componente compat\xEDvel:"),t(),i(3690,"code"),e(3691,"po-input"),t(),e(3692,"."),t(),i(3693,"blockquote")(3694,"p"),e(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3696,"code"),e(3697,"type: time"),t(),e(3698,"."),t()()()(),i(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),e(3703," maskNoLengthValidation"),n(3704,"br"),t()()(),i(3705,"td",21)(3706,"code",29),e(3707,"boolean"),t()(),i(3708,"td",24)(3709,"em")(3710,"strong"),e(3711,"(opcional)"),t()(),i(3712,"p"),e(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),i(3714,"code"),e(3715,"minLength"),t(),e(3716,") e m\xE1ximo ("),i(3717,"code"),e(3718,"maxLength"),t(),e(3719,") quando h\xE1 uma m\xE1scara ("),i(3720,"code"),e(3721,"p-mask"),t(),e(3722,") definida."),t(),i(3723,"ul")(3724,"li"),e(3725,"Quando "),i(3726,"code"),e(3727,"true"),t(),e(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),i(3729,"li"),e(3730,"Quando "),i(3731,"code"),e(3732,"false"),t(),e(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),i(3734,"p")(3735,"strong"),e(3736,"Componentes compat\xEDveis:"),t(),i(3737,"code"),e(3738,"po-input"),t(),e(3739,", "),i(3740,"code"),e(3741,"po-decimal"),t(),e(3742,"."),t(),i(3743,"blockquote")(3744,"p"),e(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),i(3746,"code"),e(3747,"p-mask-format-model"),t(),e(3748,"."),t()(),i(3749,"p"),e(3750,"Exemplo:"),t(),i(3751,"pre")(3752,"code"),e(3753,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),t()(),i(3754,"ul")(3755,"li"),e(3756,"Entrada: "),i(3757,"code"),e(3758,"11.111.111/1111-11"),t(),e(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),t()()()(),i(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),e(3764," maxLength"),n(3765,"br"),t()()(),i(3766,"td",21)(3767,"code",45),e(3768,"number"),t()(),i(3769,"td",24)(3770,"em")(3771,"strong"),e(3772,"(opcional)"),t()(),i(3773,"p"),e(3774,"Tamanho m\xE1ximo de caracteres."),t(),i(3775,"p")(3776,"strong"),e(3777,"Componentes compat\xEDveis:"),t(),i(3778,"code"),e(3779,"po-input"),t(),e(3780,", "),i(3781,"code"),e(3782,"po-number"),t(),e(3783,", "),i(3784,"code"),e(3785,"po-decimal"),t(),e(3786,", "),i(3787,"code"),e(3788,"po-textarea"),t(),e(3789,", "),i(3790,"code"),e(3791,"po-password"),t(),e(3792,"."),t()()(),i(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),e(3797," maxTime"),n(3798,"br"),t()()(),i(3799,"td",21)(3800,"code",27),e(3801,"string"),t()(),i(3802,"td",24)(3803,"em")(3804,"strong"),e(3805,"(opcional)"),t()(),i(3806,"p"),e(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),i(3808,"code"),e(3809,"HH:mm"),t(),e(3810," ou "),i(3811,"code"),e(3812,"HH:mm:ss"),t(),e(3813,"."),t(),i(3814,"p")(3815,"strong"),e(3816,"Componente compat\xEDvel:"),t(),i(3817,"code"),e(3818,"po-datetimepicker"),t(),e(3819,", "),i(3820,"code"),e(3821,"po-timepicker"),t()()()(),i(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),e(3826," maxValue"),n(3827,"br"),t()()(),i(3828,"td",21)(3829,"code",27),e(3830,"string "),t(),i(3831,"code",45),e(3832," number"),t()(),i(3833,"td",24)(3834,"em")(3835,"strong"),e(3836,"(opcional)"),t()(),i(3837,"p"),e(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3839,"em"),e(3840,"number"),t(),e(3841,", "),i(3842,"em"),e(3843,"date"),t(),e(3844,", "),i(3845,"em"),e(3846,"dateTime"),t(),e(3847," ou "),i(3848,"em"),e(3849,"time"),t(),e(3850,"."),t(),i(3851,"blockquote")(3852,"p"),e(3853,"Para "),i(3854,"code"),e(3855,"po-timepicker"),t(),e(3856,", o valor deve estar no formato "),i(3857,"code"),e(3858,"HH:mm"),t(),e(3859," ou "),i(3860,"code"),e(3861,"HH:mm:ss"),t(),e(3862,"."),t()(),i(3863,"p")(3864,"strong"),e(3865,"Componentes compat\xEDveis:"),t(),i(3866,"code"),e(3867,"po-datepicker"),t(),e(3868,", "),i(3869,"code"),e(3870,"po-datepicker-range"),t(),e(3871,", "),i(3872,"code"),e(3873,"po-number"),t(),e(3874,", "),i(3875,"code"),e(3876,"po-decimal"),t(),e(3877,", "),i(3878,"code"),e(3879,"po-timepicker"),t()()()(),i(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),e(3884," minLength"),n(3885,"br"),t()()(),i(3886,"td",21)(3887,"code",45),e(3888,"number"),t()(),i(3889,"td",24)(3890,"em")(3891,"strong"),e(3892,"(opcional)"),t()(),i(3893,"p"),e(3894,"Tamanho m\xEDnimo de caracteres."),t(),i(3895,"p")(3896,"strong"),e(3897,"Componentes compat\xEDveis:"),t(),i(3898,"code"),e(3899,"po-input"),t(),e(3900,", "),i(3901,"code"),e(3902,"po-number"),t(),e(3903,", "),i(3904,"code"),e(3905,"po-decimal"),t(),e(3906,", "),i(3907,"code"),e(3908,"po-textarea"),t(),e(3909,", "),i(3910,"code"),e(3911,"po-password"),t(),e(3912,"."),t()()(),i(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),e(3917," minTime"),n(3918,"br"),t()()(),i(3919,"td",21)(3920,"code",27),e(3921,"string"),t()(),i(3922,"td",24)(3923,"em")(3924,"strong"),e(3925,"(opcional)"),t()(),i(3926,"p"),e(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),i(3928,"code"),e(3929,"HH:mm"),t(),e(3930," ou "),i(3931,"code"),e(3932,"HH:mm:ss"),t(),e(3933,"."),t(),i(3934,"p")(3935,"strong"),e(3936,"Componente compat\xEDvel:"),t(),i(3937,"code"),e(3938,"po-datetimepicker"),t(),e(3939,", "),i(3940,"code"),e(3941,"po-timepicker"),t()()()(),i(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),e(3946," minValue"),n(3947,"br"),t()()(),i(3948,"td",21)(3949,"code",27),e(3950,"string "),t(),i(3951,"code",45),e(3952," number"),t()(),i(3953,"td",24)(3954,"em")(3955,"strong"),e(3956,"(opcional)"),t()(),i(3957,"p"),e(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3959,"em"),e(3960,"number"),t(),e(3961,", "),i(3962,"em"),e(3963,"date"),t(),e(3964,", "),i(3965,"em"),e(3966,"dateTime"),t(),e(3967," ou "),i(3968,"em"),e(3969,"time"),t(),e(3970,"."),t(),i(3971,"blockquote")(3972,"p"),e(3973,"Para "),i(3974,"code"),e(3975,"po-timepicker"),t(),e(3976,", o valor deve estar no formato "),i(3977,"code"),e(3978,"HH:mm"),t(),e(3979," ou "),i(3980,"code"),e(3981,"HH:mm:ss"),t(),e(3982,"."),t()(),i(3983,"p")(3984,"strong"),e(3985,"Componentes compat\xEDveis:"),t(),i(3986,"code"),e(3987,"po-datepicker"),t(),e(3988,", "),i(3989,"code"),e(3990,"po-datepicker-range"),t(),e(3991,", "),i(3992,"code"),e(3993,"po-number"),t(),e(3994,", "),i(3995,"code"),e(3996,"po-decimal"),t(),e(3997,", "),i(3998,"code"),e(3999,"po-timepicker"),t()()()(),i(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),e(4004," minuteInterval"),n(4005,"br"),t()()(),i(4006,"td",21)(4007,"code",45),e(4008,"number"),t()(),i(4009,"td",24)(4010,"em")(4011,"strong"),e(4012,"(opcional)"),t()(),i(4013,"p"),e(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),t()()(),i(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),e(4019," mode"),n(4020,"br"),t()()(),i(4021,"td",21)(4022,"code",68),e(4023,"'month-year' "),t(),i(4024,"code",69),e(4025," 'year'"),t()(),i(4026,"td",24)(4027,"em")(4028,"strong"),e(4029,"(opcional)"),t()(),i(4030,"p"),e(4031,"Define o modo de sele\xE7\xE3o do "),i(4032,"code"),e(4033,"po-datepicker"),t(),e(4034,"."),t(),i(4035,"p"),e(4036,"Valores aceitos:"),t(),i(4037,"ul")(4038,"li")(4039,"code"),e(4040,"'month-year'"),t(),e(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),i(4042,"code"),e(4043,"MM/YYYY"),t(),e(4044,")"),t(),i(4045,"li")(4046,"code"),e(4047,"'year'"),t(),e(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),i(4049,"code"),e(4050,"YYYY"),t(),e(4051,")"),t()(),i(4052,"p")(4053,"strong"),e(4054,"Componente compat\xEDvel:"),t(),i(4055,"code"),e(4056,"po-datepicker"),t()()()(),i(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),e(4061," modelFormat"),n(4062,"br"),t()()(),i(4063,"td",21)(4064,"code",70),e(4065,"PoTimepickerModelFormat"),t()(),i(4066,"td",24)(4067,"em")(4068,"strong"),e(4069,"(opcional)"),t()(),i(4070,"p"),e(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),i(4072,"code"),e(4073,"po-timepicker"),t(),e(4074,"."),t(),i(4075,"blockquote")(4076,"p"),e(4077,"Veja os valores v\xE1lidos no "),i(4078,"code"),e(4079,"PoTimepickerModelFormat"),t(),e(4080,"."),t()(),i(4081,"p")(4082,"strong"),e(4083,"Componente compat\xEDvel:"),t(),i(4084,"code"),e(4085,"po-timepicker"),t()()()(),i(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),e(4090," multiple"),n(4091,"br"),t()()(),i(4092,"td",21)(4093,"code",29),e(4094,"boolean"),t()(),i(4095,"td",24)(4096,"em")(4097,"strong"),e(4098,"(opcional)"),t()(),i(4099,"p"),e(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(4101,"p")(4102,"strong"),e(4103,"Componentes compat\xEDveis:"),t(),i(4104,"code"),e(4105,"po-lookup"),t(),e(4106,", "),i(4107,"code"),e(4108,"po-upload"),t()()()(),i(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),e(4113," noAutocomplete"),n(4114,"br"),t()()(),i(4115,"td",21)(4116,"code",29),e(4117,"boolean"),t()(),i(4118,"td",24)(4119,"em")(4120,"strong"),e(4121,"(opcional)"),t()(),i(4122,"p"),e(4123,"Define a propriedade nativa "),i(4124,"code"),e(4125,"autocomplete"),t(),e(4126," do campo como off."),t(),i(4127,"p")(4128,"strong"),e(4129,"Componentes compat\xEDveis:"),t(),i(4130,"code"),e(4131,"po-datepicker"),t(),e(4132,", "),i(4133,"code"),e(4134,"po-datepicker-range"),t(),e(4135,", "),i(4136,"code"),e(4137,"po-input"),t(),e(4138,", "),i(4139,"code"),e(4140,"po-number"),t(),e(4141,", "),i(4142,"code"),e(4143,"po-decimal"),t(),e(4144,`,
`),i(4145,"code"),e(4146,"po-lookup"),t(),e(4147,", "),i(4148,"code"),e(4149,"po-password"),t(),e(4150,", "),i(4151,"code"),e(4152,"po-timepicker"),t(),e(4153,"."),t()()(),i(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),e(4158," offsetColumns"),n(4159,"br"),t()()(),i(4160,"td",21)(4161,"code",45),e(4162,"number"),t()(),i(4163,"td",24)(4164,"em")(4165,"strong"),e(4166,"(opcional)"),t()(),i(4167,"p"),e(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(4169,"p"),e(4170,"Deve ser usado o sistema de "),i(4171,"strong"),e(4172,"grid"),t(),e(4173," do PO (1 ... 12 colunas)."),t(),i(4174,"blockquote")(4175,"p"),e(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),e(4181," offsetLgColumns"),n(4182,"br"),t()()(),i(4183,"td",21)(4184,"code",45),e(4185,"number"),t()(),i(4186,"td",24)(4187,"em")(4188,"strong"),e(4189,"(opcional)"),t()(),i(4190,"p"),e(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(4192,"p"),e(4193,"Deve ser usado o sistema de "),i(4194,"strong"),e(4195,"grid"),t(),e(4196," do PO (1 ... 12 colunas)."),t(),i(4197,"blockquote")(4198,"p"),e(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4200,"code"),e(4201,"offsetColumns"),t(),e(4202,"."),t()()()(),i(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),e(4207," offsetMdColumns"),n(4208,"br"),t()()(),i(4209,"td",21)(4210,"code",45),e(4211,"number"),t()(),i(4212,"td",24)(4213,"em")(4214,"strong"),e(4215,"(opcional)"),t()(),i(4216,"p"),e(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(4218,"p"),e(4219,"Deve ser usado o sistema de "),i(4220,"strong"),e(4221,"grid"),t(),e(4222," do PO (1 ... 12 colunas)."),t(),i(4223,"blockquote")(4224,"p"),e(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4226,"code"),e(4227,"offsetColumns"),t(),e(4228,"."),t()()()(),i(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),e(4233," offsetSmColumns"),n(4234,"br"),t()()(),i(4235,"td",21)(4236,"code",45),e(4237,"number"),t()(),i(4238,"td",24)(4239,"em")(4240,"strong"),e(4241,"(opcional)"),t()(),i(4242,"p"),e(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(4244,"p"),e(4245,"Deve ser usado o sistema de "),i(4246,"strong"),e(4247,"grid"),t(),e(4248," do PO (1 ... 12 colunas)."),t(),i(4249,"blockquote")(4250,"p"),e(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4252,"code"),e(4253,"offsetColumns"),t(),e(4254,"."),t()()()(),i(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),e(4259," offsetXlColumns"),n(4260,"br"),t()()(),i(4261,"td",21)(4262,"code",45),e(4263,"number"),t()(),i(4264,"td",24)(4265,"em")(4266,"strong"),e(4267,"(opcional)"),t()(),i(4268,"p"),e(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(4270,"p"),e(4271,"Deve ser usado o sistema de "),i(4272,"strong"),e(4273,"grid"),t(),e(4274," do PO (1 ... 12 colunas)."),t(),i(4275,"blockquote")(4276,"p"),e(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4278,"code"),e(4279,"offsetColumns"),t(),e(4280,"."),t()()()(),i(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),e(4285," onError"),n(4286,"br"),t()()(),i(4287,"td",21)(4288,"code",44),e(4289,"Function"),t()(),i(4290,"td",24)(4291,"em")(4292,"strong"),e(4293,"(opcional)"),t()(),i(4294,"p"),e(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(4296,"blockquote")(4297,"p"),e(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(4299,"code"),e(4300,"HttpErrorResponse"),t(),e(4301,"."),t()(),i(4302,"p")(4303,"strong"),e(4304,"Componente compat\xEDvel"),t(),e(4305,": "),i(4306,"code"),e(4307,"po-upload"),t()()()(),i(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),e(4312," onSuccess"),n(4313,"br"),t()()(),i(4314,"td",21)(4315,"code",44),e(4316,"Function"),t()(),i(4317,"td",24)(4318,"em")(4319,"strong"),e(4320,"(opcional)"),t()(),i(4321,"p"),e(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(4323,"blockquote")(4324,"p"),e(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(4326,"code"),e(4327,"HttpResponse"),t(),e(4328,"."),t()(),i(4329,"p")(4330,"strong"),e(4331,"Componente compat\xEDvel"),t(),e(4332,": "),i(4333,"code"),e(4334,"po-upload"),t()()()(),i(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),e(4339," onUpload"),n(4340,"br"),t()()(),i(4341,"td",21)(4342,"code",44),e(4343,"Function"),t()(),i(4344,"td",24)(4345,"em")(4346,"strong"),e(4347,"(opcional)"),t()(),i(4348,"p"),e(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(4350,"pre")(4351,"code"),e(4352,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(4353,"p")(4354,"strong"),e(4355,"Componente compat\xEDvel"),t(),e(4356,": "),i(4357,"code"),e(4358,"po-upload"),t()()()(),i(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),e(4363," optional"),n(4364,"br"),t()()(),i(4365,"td",21)(4366,"code",29),e(4367,"boolean"),t()(),i(4368,"td",24)(4369,"em")(4370,"strong"),e(4371,"(opcional)"),t()(),i(4372,"p"),e(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(4374,"blockquote")(4375,"p"),e(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(4377,"ul")(4378,"li"),e(4379,"O campo for "),i(4380,"code"),e(4381,"required"),t(),e(4382,", ou;"),t(),i(4383,"li"),e(4384,"N\xE3o possuir "),i(4385,"code"),e(4386,"help"),t(),e(4387," e "),i(4388,"code"),e(4389,"label"),t(),e(4390,"."),t()(),i(4391,"p")(4392,"strong"),e(4393,"Componentes compat\xEDveis:"),t(),i(4394,"code"),e(4395,"po-datepicker"),t(),e(4396,", "),i(4397,"code"),e(4398,"po-datepicker-range"),t(),e(4399,", "),i(4400,"code"),e(4401,"po-timepicker"),t(),e(4402,", "),i(4403,"code"),e(4404,"po-input"),t(),e(4405,", "),i(4406,"code"),e(4407,"po-number"),t(),e(4408,`,
`),i(4409,"code"),e(4410,"po-decimal"),t(),e(4411,", "),i(4412,"code"),e(4413,"po-select"),t(),e(4414,", "),i(4415,"code"),e(4416,"po-radio-group"),t(),e(4417,", "),i(4418,"code"),e(4419,"po-combo"),t(),e(4420,", "),i(4421,"code"),e(4422,"po-lookup"),t(),e(4423,", "),i(4424,"code"),e(4425,"po-checkbox-group"),t(),e(4426,", "),i(4427,"code"),e(4428,"po-multiselect"),t(),e(4429,`,
`),i(4430,"code"),e(4431,"po-textarea"),t(),e(4432,", "),i(4433,"code"),e(4434,"po-password"),t(),e(4435,"."),t()()(),i(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),e(4440," options"),n(4441,"br"),t()()(),i(4442,"td",21)(4443,"code",32),e(4444,"Array<string> "),t(),i(4445,"code",71),e(4446," Array<PoSelectOption> "),t(),i(4447,"code",72),e(4448," Array<PoMultiselectOption> "),t(),i(4449,"code",73),e(4450," Array<PoCheckboxGroupOption> "),t(),i(4451,"code",74),e(4452," Array<any>"),t()(),i(4453,"td",24)(4454,"em")(4455,"strong"),e(4456,"(opcional)"),t()(),i(4457,"p"),e(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(4459,"p")(4460,"strong"),e(4461,"Componentes compat\xEDveis:"),t(),i(4462,"code"),e(4463,"po-select"),t(),e(4464,", "),i(4465,"code"),e(4466,"po-radio-group"),t(),e(4467,", "),i(4468,"code"),e(4469,"po-checkbox-group"),t(),e(4470,", "),i(4471,"code"),e(4472,"po-multiselect"),t(),e(4473,"."),t()()(),i(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),e(4478," optionsMulti"),n(4479,"br"),t()()(),i(4480,"td",21)(4481,"code",29),e(4482,"boolean"),t()(),i(4483,"td",24)(4484,"em")(4485,"strong"),e(4486,"(opcional)"),t()(),i(4487,"p"),e(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),e(4493," optionsService"),n(4494,"br"),t()()(),i(4495,"td",21)(4496,"code",27),e(4497,"string "),t(),i(4498,"code",75),e(4499," PoComboFilter "),t(),i(4500,"code",76),e(4501," PoMultiselectFilter"),t()(),i(4502,"td",24)(4503,"em")(4504,"strong"),e(4505,"(opcional)"),t()(),i(4506,"p"),e(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(4508,"strong"),e(4509,"Importante"),t()(),i(4510,"blockquote")(4511,"p"),e(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(4513,"a",7),e(4514,"guia de API do PO UI"),t(),e(4515,"."),t()()()(),i(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),e(4520," order"),n(4521,"br"),t()()(),i(4522,"td",21)(4523,"code",45),e(4524,"number"),t()(),i(4525,"td",24)(4526,"em")(4527,"strong"),e(4528,"(opcional)"),t()(),i(4529,"p"),e(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(4531,"p"),e(4532,"Exemplo de utiliza\xE7\xE3o:"),t(),i(4533,"p")(4534,"code"),e(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(4536,"p"),e(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(4538,"code"),e(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(4540,"p"),e(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(4542,"p"),e(4543,"Campos sem "),i(4544,"code"),e(4545,"order"),t(),e(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),e(4551," params"),n(4552,"br"),t()()(),i(4553,"td",21)(4554,"code",33),e(4555,"any"),t()(),i(4556,"td",24)(4557,"em")(4558,"strong"),e(4559,"(opcional)"),t()(),i(4560,"p"),e(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(4562,"code"),e(4563,"po-lookup"),t(),e(4564,` e
`),i(4565,"code"),e(4566,"po-combo"),t(),e(4567,"."),t(),i(4568,"p"),e(4569,"Por exemplo, para o par\xE2metro "),i(4570,"code"),e(4571,"{ age: 23 }"),t(),e(4572," a URL da requisi\xE7\xE3o ficaria:"),t(),i(4573,"p")(4574,"code"),e(4575,"url + ?age=23&filter=Peter"),t()()()(),i(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),e(4580," pattern"),n(4581,"br"),t()()(),i(4582,"td",21)(4583,"code",27),e(4584,"string"),t()(),i(4585,"td",24)(4586,"em")(4587,"strong"),e(4588,"(opcional)"),t()(),i(4589,"p"),e(4590,"Regex para valida\xE7\xE3o do campo."),t(),i(4591,"p")(4592,"strong"),e(4593,"Componentes compat\xEDveis:"),t(),i(4594,"code"),e(4595,"po-input"),t(),e(4596,", "),i(4597,"code"),e(4598,"po-password"),t(),e(4599,"."),t()()(),i(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),e(4604," placeholder"),n(4605,"br"),t()()(),i(4606,"td",21)(4607,"code",27),e(4608,"string"),t()(),i(4609,"td",24)(4610,"em")(4611,"strong"),e(4612,"(opcional)"),t()(),i(4613,"p"),e(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t(),i(4615,"p")(4616,"strong"),e(4617,"Componentes compat\xEDveis:"),t(),i(4618,"code"),e(4619,"po-datepicker"),t(),e(4620,", "),i(4621,"code"),e(4622,"po-datepicker-range"),t(),e(4623,", "),i(4624,"code"),e(4625,"po-timepicker"),t(),e(4626,", "),i(4627,"code"),e(4628,"po-input"),t(),e(4629,", "),i(4630,"code"),e(4631,"po-number"),t(),e(4632,", "),i(4633,"code"),e(4634,"po-decimal"),t(),e(4635,", "),i(4636,"code"),e(4637,"po-select"),t(),e(4638,", "),i(4639,"code"),e(4640,"po-combo"),t(),e(4641,", "),i(4642,"code"),e(4643,"po-lookup"),t(),e(4644,", "),i(4645,"code"),e(4646,"po-multiselect"),t(),e(4647,", "),i(4648,"code"),e(4649,"po-textarea"),t(),e(4650,", "),i(4651,"code"),e(4652,"po-password"),t(),e(4653,"."),t()()(),i(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),e(4658," placeholderSearch"),n(4659,"br"),t()()(),i(4660,"td",21)(4661,"code",27),e(4662,"string"),t()(),i(4663,"td",24)(4664,"em")(4665,"strong"),e(4666,"(opcional)"),t()(),i(4667,"p"),e(4668,"Placeholder do campo de pesquisa do "),i(4669,"code"),e(4670,"po-multiselect"),t(),e(4671,"."),t(),i(4672,"blockquote")(4673,"p"),e(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),e(4679," property"),n(4680,"br"),t()()(),i(4681,"td",21)(4682,"code",27),e(4683,"string"),t()(),i(4684,"td",24)(4685,"p"),e(4686,"Nome de refer\xEAncia do campo."),t()()(),i(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),e(4691," range"),n(4692,"br"),t()()(),i(4693,"td",21)(4694,"code",29),e(4695,"boolean"),t()(),i(4696,"td",24)(4697,"em")(4698,"strong"),e(4699,"(opcional)"),t()(),i(4700,"p"),e(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4702,"blockquote")(4703,"p"),e(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),e(4709," rangePresetOptions"),n(4710,"br"),t()()(),i(4711,"td",21)(4712,"code",77),e(4713,"Array<PoCalendarRangePreset>"),t()(),i(4714,"td",24)(4715,"em")(4716,"strong"),e(4717,"(opcional)"),t()(),i(4718,"p"),e(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),t(),i(4720,"p"),e(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),i(4722,"code"),e(4723,"PoCalendarRangePreset"),t(),e(4724,"."),t(),i(4725,"p")(4726,"strong"),e(4727,"Componente compat\xEDvel:"),t(),i(4728,"code"),e(4729,"po-datepicker-range"),t()()()(),i(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),e(4734," rangePresets"),n(4735,"br"),t()()(),i(4736,"td",21)(4737,"code",29),e(4738,"boolean "),t(),i(4739,"code",32),e(4740," Array<string>"),t()(),i(4741,"td",24)(4742,"em")(4743,"strong"),e(4744,"(opcional)"),t()(),i(4745,"p"),e(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),t(),i(4747,"p"),e(4748,"Aceita os seguintes valores:"),t(),i(4749,"ul")(4750,"li")(4751,"code"),e(4752,"true"),t(),e(4753,": exibe todos os presets padr\xE3o."),t(),i(4754,"li")(4755,"code"),e(4756,"false"),t(),e(4757,": n\xE3o exibe os presets padr\xE3o."),t(),i(4758,"li")(4759,"code"),e(4760,"Array<string>"),t(),e(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),t()(),i(4762,"p")(4763,"strong"),e(4764,"Componente compat\xEDvel:"),t(),i(4765,"code"),e(4766,"po-datepicker-range"),t()()()(),i(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),e(4771," rangePresetsOrder"),n(4772,"br"),t()()(),i(4773,"td",21)(4774,"code",78),e(4775,"'asc' "),t(),i(4776,"code",79),e(4777," 'desc'"),t()(),i(4778,"td",24)(4779,"em")(4780,"strong"),e(4781,"(opcional)"),t()(),i(4782,"p"),e(4783,"Define a ordena\xE7\xE3o dos presets na lista."),t(),i(4784,"p"),e(4785,"Valores aceitos:"),t(),i(4786,"ul")(4787,"li")(4788,"code"),e(4789,"'asc'"),t(),e(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),t(),i(4791,"li")(4792,"code"),e(4793,"'desc'"),t(),e(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),t()(),i(4795,"p")(4796,"strong"),e(4797,"Componente compat\xEDvel:"),t(),i(4798,"code"),e(4799,"po-datepicker-range"),t()()()(),i(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),e(4804," readonly"),n(4805,"br"),t()()(),i(4806,"td",21)(4807,"code",29),e(4808,"boolean"),t()(),i(4809,"td",24)(4810,"em")(4811,"strong"),e(4812,"(opcional)"),t()(),i(4813,"p"),e(4814,"Indica que o campo ser\xE1 somente leitura."),t(),i(4815,"p")(4816,"strong"),e(4817,"Componentes compat\xEDveis:"),t(),i(4818,"code"),e(4819,"po-datepicker"),t(),e(4820,", "),i(4821,"code"),e(4822,"po-datepicker-range"),t(),e(4823,", "),i(4824,"code"),e(4825,"po-timepicker"),t(),e(4826,", "),i(4827,"code"),e(4828,"po-input"),t(),e(4829,", "),i(4830,"code"),e(4831,"po-number"),t(),e(4832,`,
`),i(4833,"code"),e(4834,"po-decimal"),t(),e(4835,", "),i(4836,"code"),e(4837,"po-select"),t(),e(4838,", "),i(4839,"code"),e(4840,"po-textarea"),t(),e(4841,", "),i(4842,"code"),e(4843,"po-password"),t(),e(4844,"."),t()()(),i(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),e(4849," removeInitialFilter"),n(4850,"br"),t()()(),i(4851,"td",21)(4852,"code",29),e(4853,"boolean"),t()(),i(4854,"td",24)(4855,"em")(4856,"strong"),e(4857,"(opcional)"),t()(),i(4858,"p"),e(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4860,"blockquote")(4861,"p"),e(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4863,"p")(4864,"strong"),e(4865,"Componente compat\xEDvel"),t(),e(4866,": "),i(4867,"code"),e(4868,"po-combo"),t()()()(),i(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),e(4873," required"),n(4874,"br"),t()()(),i(4875,"td",21)(4876,"code",29),e(4877,"boolean"),t()(),i(4878,"td",24)(4879,"em")(4880,"strong"),e(4881,"(opcional)"),t()(),i(4882,"p"),e(4883,"Define a obrigatoriedade do campo."),t(),i(4884,"p")(4885,"strong"),e(4886,"Componentes compat\xEDveis:"),t(),i(4887,"code"),e(4888,"po-datepicker"),t(),e(4889,", "),i(4890,"code"),e(4891,"po-datepicker-range"),t(),e(4892,", "),i(4893,"code"),e(4894,"po-timepicker"),t(),e(4895,", "),i(4896,"code"),e(4897,"po-input"),t(),e(4898,", "),i(4899,"code"),e(4900,"po-number"),t(),e(4901,`,
`),i(4902,"code"),e(4903,"po-decimal"),t(),e(4904,", "),i(4905,"code"),e(4906,"po-select"),t(),e(4907,", "),i(4908,"code"),e(4909,"po-radio-group"),t(),e(4910,", "),i(4911,"code"),e(4912,"po-combo"),t(),e(4913,", "),i(4914,"code"),e(4915,"po-lookup"),t(),e(4916,", "),i(4917,"code"),e(4918,"po-checkbox-group"),t(),e(4919,", "),i(4920,"code"),e(4921,"po-multiselect"),t(),e(4922,`,
`),i(4923,"code"),e(4924,"po-textarea"),t(),e(4925,", "),i(4926,"code"),e(4927,"po-password``, "),t(),e(4928,"po-upload`."),t()()(),i(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),e(4933," requiredFieldErrorMessage"),n(4934,"br"),t()()(),i(4935,"td",21)(4936,"code",29),e(4937,"boolean"),t()(),i(4938,"td",24)(4939,"em")(4940,"strong"),e(4941,"(opcional)"),t()(),i(4942,"p"),e(4943,"Exibe a mensagem setada na propriedade "),i(4944,"code"),e(4945,"errorMessage"),t(),e(4946," se o campo estiver vazio e for requerido."),t(),i(4947,"blockquote")(4948,"p"),e(4949,"Necess\xE1rio que a propriedade "),i(4950,"code"),e(4951,"required"),t(),e(4952," esteja habilitada."),t()(),i(4953,"p")(4954,"strong"),e(4955,"Componentes compat\xEDveis:"),t(),i(4956,"code"),e(4957,"po-datepicker"),t(),e(4958,", "),i(4959,"code"),e(4960,"po-timepicker"),t(),e(4961,", "),i(4962,"code"),e(4963,"po-input"),t(),e(4964,", "),i(4965,"code"),e(4966,"po-number"),t(),e(4967,", "),i(4968,"code"),e(4969,"po-decimal"),t(),e(4970,", "),i(4971,"code"),e(4972,"po-password"),t(),e(4973,"."),t()()(),i(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),e(4978," restrictions"),n(4979,"br"),t()()(),i(4980,"td",21)(4981,"code",80),e(4982,"PoUploadFileRestrictions"),t()(),i(4983,"td",24)(4984,"em")(4985,"strong"),e(4986,"(opcional)"),t()(),i(4987,"p"),e(4988,"Objeto que segue a defini\xE7\xE3o da interface "),i(4989,"code"),e(4990,"PoUploadFileRestrictions"),t(),e(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4992,"p")(4993,"strong"),e(4994,"Componente compat\xEDvel"),t(),e(4995,": "),i(4996,"code"),e(4997,"po-upload"),t()()()(),i(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),e(5002," rows"),n(5003,"br"),t()()(),i(5004,"td",21)(5005,"code",45),e(5006,"number"),t()(),i(5007,"td",24)(5008,"em")(5009,"strong"),e(5010,"(opcional)"),t()(),i(5011,"p"),e(5012,"Quantidade de linhas exibidas no "),i(5013,"code"),e(5014,"po-textarea"),t(),e(5015,"."),t()()(),i(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),e(5020," searchService"),n(5021,"br"),t()()(),i(5022,"td",21)(5023,"code",27),e(5024,"string "),t(),i(5025,"code",34),e(5026," PoLookupFilter"),t()(),i(5027,"td",24)(5028,"em")(5029,"strong"),e(5030,"(opcional)"),t()(),i(5031,"p"),e(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(5033,"code"),e(5034,"columns"),t(),e(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(5036,"strong"),e(5037,"Importante:"),t()(),i(5038,"blockquote")(5039,"p"),e(5040,"Caso utilizar a propriedade "),i(5041,"code"),e(5042,"optionsService"),t(),e(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(5044,"a",7),e(5045,"guia de API do PO UI"),t(),e(5046,"."),t()()()(),i(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),e(5051," secondInterval"),n(5052,"br"),t()()(),i(5053,"td",21)(5054,"code",45),e(5055,"number"),t()(),i(5056,"td",24)(5057,"em")(5058,"strong"),e(5059,"(opcional)"),t()(),i(5060,"p"),e(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),t()()(),i(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),e(5066," secret"),n(5067,"br"),t()()(),i(5068,"td",21)(5069,"code",29),e(5070,"boolean"),t()(),i(5071,"td",24)(5072,"em")(5073,"strong"),e(5074,"(opcional)"),t()(),i(5075,"p"),e(5076,"Esconde a informa\xE7\xE3o estilo "),i(5077,"em"),e(5078,"password"),t(),e(5079,", pode ser utilizado quando o tipo de dado for "),i(5080,"em"),e(5081,"string"),t(),e(5082,"."),t()()(),i(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),e(5087," showRequired"),n(5088,"br"),t()()(),i(5089,"td",21)(5090,"code",29),e(5091,"boolean"),t()(),i(5092,"td",24)(5093,"em")(5094,"strong"),e(5095,"(opcional)"),t()(),i(5096,"p"),e(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(5098,"blockquote")(5099,"p"),e(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(5101,"ul")(5102,"li"),e(5103,"N\xE3o possuir "),i(5104,"code"),e(5105,"p-help"),t(),e(5106," e/ou "),i(5107,"code"),e(5108,"p-label"),t(),e(5109,"."),t()(),i(5110,"p")(5111,"strong"),e(5112,"Componentes compat\xEDveis:"),t(),i(5113,"code"),e(5114,"po-datepicker"),t(),e(5115,", "),i(5116,"code"),e(5117,"po-datepicker-range"),t(),e(5118,", "),i(5119,"code"),e(5120,"po-timepicker"),t(),e(5121,", "),i(5122,"code"),e(5123,"po-input"),t(),e(5124,", "),i(5125,"code"),e(5126,"po-number"),t(),e(5127,`,
`),i(5128,"code"),e(5129,"po-decimal"),t(),e(5130,", "),i(5131,"code"),e(5132,"po-select"),t(),e(5133,", "),i(5134,"code"),e(5135,"po-radio-group"),t(),e(5136,", "),i(5137,"code"),e(5138,"po-combo"),t(),e(5139,", "),i(5140,"code"),e(5141,"po-lookup"),t(),e(5142,", "),i(5143,"code"),e(5144,"po-checkbox-group"),t(),e(5145,", "),i(5146,"code"),e(5147,"po-multiselect"),t(),e(5148,`,
`),i(5149,"code"),e(5150,"po-textarea"),t(),e(5151,", "),i(5152,"code"),e(5153,"po-password"),t(),e(5154,", "),i(5155,"code"),e(5156,"po-upload"),t(),e(5157,"."),t()()(),i(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),e(5162," showSeconds"),n(5163,"br"),t()()(),i(5164,"td",21)(5165,"code",29),e(5166,"boolean"),t()(),i(5167,"td",24)(5168,"em")(5169,"strong"),e(5170,"(opcional)"),t()(),i(5171,"p"),e(5172,"Exibe a coluna de segundos no painel do timepicker."),t()()(),i(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),e(5177," showThumbnail"),n(5178,"br"),t()()(),i(5179,"td",21)(5180,"code",29),e(5181,"boolean"),t()(),i(5182,"td",24)(5183,"em")(5184,"strong"),e(5185,"(opcional)"),t()(),i(5186,"p"),e(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),i(5188,"blockquote")(5189,"p"),e(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),i(5191,"code"),e(5192,".png"),t(),e(5193,", "),i(5194,"code"),e(5195,".jpg"),t(),e(5196,", "),i(5197,"code"),e(5198,".jpeg"),t(),e(5199," e "),i(5200,"code"),e(5201,".gif"),t(),e(5202,")."),t()(),i(5203,"p")(5204,"strong"),e(5205,"Componente compat\xEDvel"),t(),e(5206,": "),i(5207,"code"),e(5208,"po-upload"),t()()()(),i(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),e(5213," size"),n(5214,"br"),t()()(),i(5215,"td",21)(5216,"code",27),e(5217,"string"),t()(),i(5218,"td",24)(5219,"em")(5220,"strong"),e(5221,"(opcional)"),t()(),i(5222,"p"),e(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(5224,"ul")(5225,"li")(5226,"code"),e(5227,"small"),t(),e(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(5229,"li")(5230,"code"),e(5231,"medium"),t(),e(5232,": aplica a medida medium de cada componente."),t(),i(5233,"li")(5234,"code"),e(5235,"large"),t(),e(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),i(5237,"code"),e(5238,"po-checkbox"),t(),e(5239," e "),i(5240,"code"),e(5241,"po-radio-group"),t(),e(5242,")."),i(5243,"blockquote")(5244,"p"),e(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(5246,"code"),e(5247,"medium"),t(),e(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(5249,"a",40),e(5250,"po-theme"),t(),e(5251,"."),t()()()()()(),i(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),e(5256," sort"),n(5257,"br"),t()()(),i(5258,"td",21)(5259,"code",29),e(5260,"boolean"),t()(),i(5261,"td",24)(5262,"em")(5263,"strong"),e(5264,"(opcional)"),t()(),i(5265,"p"),e(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(5267,"p")(5268,"strong"),e(5269,"Componentes compat\xEDveis:"),t(),i(5270,"code"),e(5271,"po-combo"),t(),e(5272,", po-multiselect"),t()()(),i(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),e(5277," step"),n(5278,"br"),t()()(),i(5279,"td",21)(5280,"code",45),e(5281,"number"),t()(),i(5282,"td",24)(5283,"em")(5284,"strong"),e(5285,"(opcional)"),t()(),i(5286,"p"),e(5287,"Intervalo utilizado no "),i(5288,"code"),e(5289,"po-number"),t(),e(5290,"."),t()()(),i(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),e(5295," thousandMaxlength"),n(5296,"br"),t()()(),i(5297,"td",21)(5298,"code",45),e(5299,"number"),t()(),i(5300,"td",24)(5301,"em")(5302,"strong"),e(5303,"(opcional)"),t()(),i(5304,"p"),e(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(5306,"blockquote")(5307,"p"),e(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(5309,"code"),e(5310,"type"),t(),e(5311," for "),i(5312,"em"),e(5313,"currency"),t(),e(5314," ou "),i(5315,"em"),e(5316,"decimal"),t(),e(5317,"."),t()()()(),i(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),e(5322," type"),n(5323,"br"),t()()(),i(5324,"td",21)(5325,"code",27),e(5326,"string "),t(),i(5327,"code",81),e(5328," PoDynamicFieldType"),t()(),i(5329,"td",24)(5330,"em")(5331,"strong"),e(5332,"(opcional)"),t()(),i(5333,"p"),e(5334,"Tipo do valor campo."),t(),i(5335,"p"),e(5336,"Valores v\xE1lidos:"),t(),i(5337,"ul")(5338,"li")(5339,"code"),e(5340,"boolean"),t(),e(5341,": Valores "),i(5342,"em"),e(5343,"booleanos"),t(),e(5344,"."),t(),i(5345,"li")(5346,"code"),e(5347,"currency"),t(),e(5348,": Valores monet\xE1rios."),t(),i(5349,"li")(5350,"code"),e(5351,"decimal"),t(),e(5352,": Valores decimais."),t(),i(5353,"li")(5354,"code"),e(5355,"date"),t(),e(5356,": Valores de datas."),i(5357,"ul")(5358,"li"),e(5359,"Aceita os tipos "),i(5360,"strong"),e(5361,"string"),t(),e(5362," e "),i(5363,"strong"),e(5364,"Date"),t(),e(5365,` padr\xE3o do Javascript,
por exemplo: `),i(5366,"code"),e(5367,"'2017-11-28'"),t(),e(5368," ou "),i(5369,"code"),e(5370,"new Date(2017, 10, 28)"),t(),e(5371,"."),t()()(),i(5372,"li")(5373,"code"),e(5374,"dateTime"),t(),e(5375,": Valor de data com hor\xE1rio."),i(5376,"ul")(5377,"li"),e(5378,"Aceita o tipo "),i(5379,"em"),e(5380,"string"),t(),e(5381," no formato "),i(5382,"strong"),e(5383,"ISO-8601"),t(),e(5384," extendido "),i(5385,"strong"),e(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(5387,`
e o tipo `),i(5388,"strong"),e(5389,"Date"),t(),e(5390," padr\xE3o do Javascript, por exemplo: "),i(5391,"code"),e(5392,"'2017-11-28T00:00:00-02:00'"),t(),e(5393," ou "),i(5394,"code"),e(5395,"new Date(2017, 10, 28)"),t(),e(5396,"."),t()()(),i(5397,"li")(5398,"code"),e(5399,"number"),t(),e(5400,": Valores num\xE9ricos."),t(),i(5401,"li")(5402,"code"),e(5403,"string"),t(),e(5404,": Textos."),t(),i(5405,"li")(5406,"code"),e(5407,"time"),t(),e(5408,": Valor do hor\xE1rio."),i(5409,"ul")(5410,"li"),e(5411,"Aceita o tipo "),i(5412,"strong"),e(5413,"string"),t(),e(5414," nos formatos "),i(5415,"strong"),e(5416,"'HH:mm:ss'"),t(),e(5417," ou "),i(5418,"strong"),e(5419,"'HH:mm:ss.ffffff'"),t(),e(5420,", por exemplo: "),i(5421,"code"),e(5422,"'23:12:45'"),t(),e(5423,"."),t()()()()()(),i(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),e(5428," url"),n(5429,"br"),t()()(),i(5430,"td",21)(5431,"code",27),e(5432,"string"),t()(),i(5433,"td",24)(5434,"em")(5435,"strong"),e(5436,"(opcional)"),t()(),i(5437,"p"),e(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(5439,"p")(5440,"strong"),e(5441,"Componente compat\xEDvel"),t(),e(5442,": "),i(5443,"code"),e(5444,"po-upload"),t()()()(),i(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),e(5449," validate"),n(5450,"br"),t()()(),i(5451,"td",21)(5452,"code",27),e(5453,"string "),t(),i(5454,"code",44),e(5455," Function"),t()(),i(5456,"td",24)(5457,"em")(5458,"strong"),e(5459,"(opcional)"),t()(),i(5460,"p"),e(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(5462,"strong"),e(5463,"mudan\xE7as do campo"),t(),e(5464,"."),t(),i(5465,"ul")(5466,"li"),e(5467,"A propriedade aceita os seguintes tipos:"),t()(),i(5468,"ul")(5469,"li")(5470,"strong"),e(5471,"String"),t(),e(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(5473,"code"),e(5474,"POST"),t(),e(5475,"."),t(),i(5476,"li")(5477,"strong"),e(5478,"Function"),t(),e(5479,": M\xE9todo que ser\xE1 executado."),t()(),i(5480,"p"),e(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(5482,"code"),e(5483,"PoDynamicFormFieldChanged"),t(),e(5484,":"),t(),i(5485,"p")(5486,"code"),e(5487,"{ property: 'property name', value: 'new value' }"),t()(),i(5488,"p"),e(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(5490,"a",82),e(5491,"PoDynamicFormFieldValidation"),t(),e(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(5493,"pre")(5494,"code"),e(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(5496,"p"),e(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(5498,"code"),e(5499,"bind"),t(),e(5500,`, por exemplo:
`),i(5501,"code"),e(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),e(5507," visible"),n(5508,"br"),t()()(),i(5509,"td",21)(5510,"code",29),e(5511,"boolean"),t()(),i(5512,"td",24)(5513,"em")(5514,"strong"),e(5515,"(opcional)"),t()(),i(5516,"p"),e(5517,"Indica se o campo ser\xE1 vis\xEDvel."),t()()(),i(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),e(5522," yearRangeLimit"),n(5523,"br"),t()()(),i(5524,"td",21)(5525,"code",45),e(5526,"number"),t()(),i(5527,"td",24)(5528,"em")(5529,"strong"),e(5530,"(opcional)"),t()(),i(5531,"p"),e(5532,"Define o limite de anos exibidos na lista de anos do "),i(5533,"code"),e(5534,"po-datepicker"),t(),e(5535," nos modos "),i(5536,"code"),e(5537,"month-year"),t(),e(5538," e "),i(5539,"code"),e(5540,"year"),t(),e(5541,"."),t()()()(),i(5542,"h4",43)(5543,"code",5),e(5544,"PoLookupColumn"),t()(),i(5545,"div",2)(5546,"p"),e(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(5548,"h4",12),e(5549,"Propriedades"),t(),i(5550,"table",13)(5551,"tr",14)(5552,"th",15),e(5553,"Nome"),t(),i(5554,"th",15),e(5555,"Tipo"),t(),i(5556,"th",15),e(5557,"Descri\xE7\xE3o"),t()(),i(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),e(5562," fieldLabel"),n(5563,"br"),t()()(),i(5564,"td",21)(5565,"code",29),e(5566,"boolean"),t()(),i(5567,"td",24)(5568,"em")(5569,"strong"),e(5570,"(opcional)"),t()(),i(5571,"p"),e(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(5573,"p"),e(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(5575,"p"),e(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(5577,"code"),e(5578,"p-field-format"),t(),e(5579," ou "),i(5580,"code"),e(5581,"p-field-label"),t(),e(5582," forem configurados no componente."),t()()(),i(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),e(5587," format"),n(5588,"br"),t()()(),i(5589,"td",21)(5590,"code",27),e(5591,"string"),t()(),i(5592,"td",24)(5593,"em")(5594,"strong"),e(5595,"(opcional)"),t()(),i(5596,"p"),e(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(5598,"ul")(5599,"li"),e(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(5601,"li"),e(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),e(5607," label"),n(5608,"br"),t()()(),i(5609,"td",21)(5610,"code",27),e(5611,"string"),t()(),i(5612,"td",24)(5613,"em")(5614,"strong"),e(5615,"(opcional)"),t()(),i(5616,"p"),e(5617,"Texto para t\xEDtulo da coluna."),t(),i(5618,"p"),e(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(5620,"em"),e(5621,"label"),t(),e(5622," o valor da propriedade "),i(5623,"em"),e(5624,"property"),t(),e(5625," com a primeira letra em mai\xFAsculo."),t()()(),i(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),e(5630," mask"),n(5631,"br"),t()()(),i(5632,"td",21)(5633,"code",27),e(5634,"string"),t()(),i(5635,"td",24)(5636,"em")(5637,"strong"),e(5638,"(opcional)"),t()(),i(5639,"p"),e(5640,"Define uma m\xE1scara para formata\xE7\xE3o do valor exibido na coluna."),t(),i(5641,"p"),e(5642,"A m\xE1scara \xE9 aplicada somente para "),i(5643,"strong"),e(5644,"exibi\xE7\xE3o"),t(),e(5645,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),t(),i(5646,"p"),e(5647,"Caracteres v\xE1lidos para a m\xE1scara:"),t(),i(5648,"ul")(5649,"li")(5650,"code"),e(5651,"9"),t(),e(5652," : aceita um d\xEDgito num\xE9rico (0-9)."),t(),i(5653,"li")(5654,"code"),e(5655,"@"),t(),e(5656," : aceita um caractere alfab\xE9tico (a-z, A-Z)."),t(),i(5657,"li")(5658,"code"),e(5659,"w"),t(),e(5660," : aceita um caractere alfanum\xE9rico (a-z, A-Z, 0-9)."),t(),i(5661,"li"),e(5662,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),i(5663,"code"),e(5664,"."),t(),e(5665,", "),i(5666,"code"),e(5667,"-"),t(),e(5668,", "),i(5669,"code"),e(5670,"/"),t(),e(5671,", "),i(5672,"code"),e(5673,"("),t(),e(5674,", "),i(5675,"code"),e(5676,")"),t(),e(5677,", "),i(5678,"code"),e(5679,"+"),t(),e(5680,", "),n(5681,"code"),e(5682,")."),t()(),i(5683,"p"),e(5684,"Exemplos de uso:"),t(),i(5685,"pre")(5686,"code"),e(5687,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),t()(),i(5688,"blockquote")(5689,"p"),e(5690,"Esta propriedade \xE9 utilizada apenas para colunas do tipo "),i(5691,"code"),e(5692,"string"),t(),e(5693,` (padr\xE3o).
Caso a coluna possua um `),i(5694,"code"),e(5695,"type"),t(),e(5696," diferente de "),i(5697,"code"),e(5698,"string"),t(),e(5699,", a m\xE1scara ser\xE1 ignorada."),t()()()(),i(5700,"tr",16)(5701,"td",17)(5702,"div",25)(5703,"span",26),e(5704," property"),n(5705,"br"),t()()(),i(5706,"td",21)(5707,"code",27),e(5708,"string"),t()(),i(5709,"td",24)(5710,"em")(5711,"strong"),e(5712,"(opcional)"),t()(),i(5713,"p"),e(5714,"Nome identificador da coluna."),t()()(),i(5715,"tr",16)(5716,"td",17)(5717,"div",25)(5718,"span",26),e(5719," type"),n(5720,"br"),t()()(),i(5721,"td",21)(5722,"code",27),e(5723,"string"),t()(),i(5724,"td",24)(5725,"em")(5726,"strong"),e(5727,"(opcional)"),t()(),i(5728,"p"),e(5729,"Tipo da coluna:"),t(),i(5730,"ul")(5731,"li"),e(5732,"string (padr\xE3o): textos"),t(),i(5733,"li"),e(5734,"number: valores num\xE9ricos"),t(),i(5735,"li"),e(5736,"date: data"),t(),i(5737,"li"),e(5738,"currency: valores monet\xE1rios"),t(),i(5739,"li"),e(5740,"dateTime: data e hora"),t()()()(),i(5741,"tr",16)(5742,"td",17)(5743,"div",25)(5744,"span",26),e(5745," width"),n(5746,"br"),t()()(),i(5747,"td",21)(5748,"code",27),e(5749,"string"),t()(),i(5750,"td",24)(5751,"em")(5752,"strong"),e(5753,"(opcional)"),t()(),i(5754,"p"),e(5755,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(5756,"h4",43)(5757,"code",5),e(5758,"PoLookupFilter"),t()(),i(5759,"div",2)(5760,"p"),e(5761,"Define o tipo de busca utilizado no po-lookup."),t()(),i(5762,"h4",12),e(5763,"M\xE9todos"),t(),i(5764,"table",41)(5765,"tr",16)(5766,"th",42)(5767,"div",25)(5768,"h4")(5769,"span",26),e(5770," getFilteredItems "),t()()()()(),i(5771,"tr",24)(5772,"td",24)(5773,"p"),e(5774,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(5775,"em"),e(5776,"Observable"),t(),e(5777," com a resposta da API no formato da interface "),i(5778,"code"),e(5779,"PoLookupResponseApi"),t(),e(5780,"."),t()()()(),i(5781,"h5")(5782,"b"),e(5783,"Par\xE2metros"),t()(),i(5784,"table",13)(5785,"tr",14)(5786,"th",15),e(5787,"Nome"),t(),i(5788,"th",15),e(5789,"Tipo"),t(),i(5790,"th",15),e(5791,"Descri\xE7\xE3o"),t()(),i(5792,"tr",16)(5793,"td",17),e(5794," params"),t(),i(5795,"td",21)(5796,"code",83),e(5797," PoLookupFilteredItemsParams "),t()(),i(5798,"td",24)(5799,"p"),e(5800,"Objeto enviado por par\xE2metro que implementa a interface "),i(5801,"code"),e(5802,"PoLookupFilteredItemsParams"),t(),e(5803,"."),t()()()(),n(5804,"br"),i(5805,"table",41)(5806,"tr",16)(5807,"th",42)(5808,"div",25)(5809,"h4")(5810,"span",26),e(5811," getObjectByValue "),t()()()()(),i(5812,"tr",24)(5813,"td",24)(5814,"p"),e(5815,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(5816,"p"),e(5817,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(5818,"h5")(5819,"b"),e(5820,"Par\xE2metros"),t()(),i(5821,"table",13)(5822,"tr",14)(5823,"th",15),e(5824,"Nome"),t(),i(5825,"th",15),e(5826,"Tipo"),t(),i(5827,"th",15),e(5828,"Descri\xE7\xE3o"),t()(),i(5829,"tr",16)(5830,"td",17),e(5831," value"),t(),i(5832,"td",21)(5833,"code",27),e(5834," string "),t(),i(5835,"code",74),e(5836," Array<any> "),t()(),i(5837,"td",24)(5838,"p"),e(5839,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(5840,"tr",16)(5841,"td",17),e(5842," filterParams"),t(),i(5843,"td",21)(5844,"code",83),e(5845," any "),t()(),i(5846,"td",24)(5847,"p"),e(5848,"Valor informado atrav\xE9s da propriedade "),i(5849,"code"),e(5850,"p-filter-params"),t(),e(5851,"."),t()()()(),n(5852,"br"),i(5853,"h4",43)(5854,"code",5),e(5855,"PoLookupFilteredItemsParams"),t()(),i(5856,"div",2)(5857,"p"),e(5858,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(5859,"code"),e(5860,"getFilteredItems"),t(),e(5861,"."),t()(),i(5862,"h4",12),e(5863,"Propriedades"),t(),i(5864,"table",13)(5865,"tr",14)(5866,"th",15),e(5867,"Nome"),t(),i(5868,"th",15),e(5869,"Tipo"),t(),i(5870,"th",15),e(5871,"Descri\xE7\xE3o"),t()(),i(5872,"tr",16)(5873,"td",17)(5874,"div",25)(5875,"span",26),e(5876," advancedFilters"),n(5877,"br"),t()()(),i(5878,"td",21)(5879,"code",84),e(5880,`{ [key: string]: any;
}`),t()(),i(5881,"td",24)(5882,"em")(5883,"strong"),e(5884,"(opcional)"),t()(),i(5885,"p"),e(5886,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(5887,"tr",16)(5888,"td",17)(5889,"div",25)(5890,"span",26),e(5891," filter"),n(5892,"br"),t()()(),i(5893,"td",21)(5894,"code",27),e(5895,"string"),t()(),i(5896,"td",24)(5897,"em")(5898,"strong"),e(5899,"(opcional)"),t()(),i(5900,"p"),e(5901,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(5902,"tr",16)(5903,"td",17)(5904,"div",25)(5905,"span",26),e(5906," filterParams"),n(5907,"br"),t()()(),i(5908,"td",21)(5909,"code",33),e(5910,"any"),t()(),i(5911,"td",24)(5912,"em")(5913,"strong"),e(5914,"(opcional)"),t()(),i(5915,"p"),e(5916,"Valor informado atrav\xE9s da propriedade "),i(5917,"code"),e(5918,"p-filter-params"),t(),e(5919,"."),t()()(),i(5920,"tr",16)(5921,"td",17)(5922,"div",25)(5923,"span",26),e(5924," order"),n(5925,"br"),t()()(),i(5926,"td",21)(5927,"code",27),e(5928,"string"),t()(),i(5929,"td",24)(5930,"em")(5931,"strong"),e(5932,"(opcional)"),t()(),i(5933,"p"),e(5934,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(5935,"ul")(5936,"li"),e(5937,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(5938,"code"),e(5939,"-<colunaOrdenada>"),t(),e(5940,", por exemplo "),i(5941,"code"),e(5942,"-name"),t(),e(5943,"."),t(),i(5944,"li"),e(5945,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(5946,"code"),e(5947,"<colunaOrdenada>"),t(),e(5948,", por exemplo "),i(5949,"code"),e(5950,"name"),t(),e(5951,"."),t()()()(),i(5952,"tr",16)(5953,"td",17)(5954,"div",25)(5955,"span",26),e(5956," page"),n(5957,"br"),t()()(),i(5958,"td",21)(5959,"code",45),e(5960,"number"),t()(),i(5961,"td",24)(5962,"em")(5963,"strong"),e(5964,"(opcional)"),t()(),i(5965,"p"),e(5966,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(5967,"tr",16)(5968,"td",17)(5969,"div",25)(5970,"span",26),e(5971," pageSize"),n(5972,"br"),t()()(),i(5973,"td",21)(5974,"code",45),e(5975,"number"),t()(),i(5976,"td",24)(5977,"em")(5978,"strong"),e(5979,"(opcional)"),t()(),i(5980,"p"),e(5981,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(5982,"h4",43)(5983,"code",5),e(5984,"PoLookupLiterals"),t()(),i(5985,"div",2)(5986,"p"),e(5987,"Interface para defini\xE7\xE3o das literais usadas no "),i(5988,"code"),e(5989,"po-lookup"),t(),e(5990,"."),t()(),i(5991,"h4",12),e(5992,"Propriedades"),t(),i(5993,"table",13)(5994,"tr",14)(5995,"th",15),e(5996,"Nome"),t(),i(5997,"th",15),e(5998,"Tipo"),t(),i(5999,"th",15),e(6e3,"Descri\xE7\xE3o"),t()(),i(6001,"tr",16)(6002,"td",17)(6003,"div",25)(6004,"span",26),e(6005," clean"),n(6006,"br"),t()()(),i(6007,"td",21)(6008,"code",27),e(6009,"string"),t()(),i(6010,"td",24)(6011,"em")(6012,"strong"),e(6013,"(opcional)"),t()(),i(6014,"p"),e(6015,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(6016,"tr",16)(6017,"td",17)(6018,"div",25)(6019,"span",26),e(6020," modalAdvancedSearch"),n(6021,"br"),t()()(),i(6022,"td",21)(6023,"code",27),e(6024,"string"),t()(),i(6025,"td",24)(6026,"em")(6027,"strong"),e(6028,"(opcional)"),t()(),i(6029,"p"),e(6030,"Texto do link de busca avan\xE7ada."),t(),i(6031,"p"),e(6032,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(6033,"tr",16)(6034,"td",17)(6035,"div",25)(6036,"span",26),e(6037," modalAdvancedSearchPrimaryActionLabel"),n(6038,"br"),t()()(),i(6039,"td",21)(6040,"code",27),e(6041,"string"),t()(),i(6042,"td",24)(6043,"em")(6044,"strong"),e(6045,"(opcional)"),t()(),i(6046,"p"),e(6047,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(6048,"tr",16)(6049,"td",17)(6050,"div",25)(6051,"span",26),e(6052," modalAdvancedSearchSecondaryActionLabel"),n(6053,"br"),t()()(),i(6054,"td",21)(6055,"code",27),e(6056,"string"),t()(),i(6057,"td",24)(6058,"em")(6059,"strong"),e(6060,"(opcional)"),t()(),i(6061,"p"),e(6062,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(6063,"tr",16)(6064,"td",17)(6065,"div",25)(6066,"span",26),e(6067," modalAdvancedSearchTitle"),n(6068,"br"),t()()(),i(6069,"td",21)(6070,"code",27),e(6071,"string"),t()(),i(6072,"td",24)(6073,"em")(6074,"strong"),e(6075,"(opcional)"),t()(),i(6076,"p"),e(6077,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(6078,"tr",16)(6079,"td",17)(6080,"div",25)(6081,"span",26),e(6082," modalDisclaimerGroupTitle"),n(6083,"br"),t()()(),i(6084,"td",21)(6085,"code",27),e(6086,"string"),t()(),i(6087,"td",24)(6088,"em")(6089,"strong"),e(6090,"(opcional)"),t()(),i(6091,"p"),e(6092,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(6093,"tr",16)(6094,"td",17)(6095,"div",25)(6096,"span",26),e(6097," modalPlaceholder"),n(6098,"br"),t()()(),i(6099,"td",21)(6100,"code",27),e(6101,"string"),t()(),i(6102,"td",24)(6103,"em")(6104,"strong"),e(6105,"(opcional)"),t()(),i(6106,"p"),e(6107,"Texto exibido no placeholder do input da modal."),t()()(),i(6108,"tr",16)(6109,"td",17)(6110,"div",25)(6111,"span",26),e(6112," modalPrimaryActionLabel"),n(6113,"br"),t()()(),i(6114,"td",21)(6115,"code",27),e(6116,"string"),t()(),i(6117,"td",24)(6118,"em")(6119,"strong"),e(6120,"(opcional)"),t()(),i(6121,"p"),e(6122,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(6123,"tr",16)(6124,"td",17)(6125,"div",25)(6126,"span",26),e(6127," modalSecondaryActionLabel"),n(6128,"br"),t()()(),i(6129,"td",21)(6130,"code",27),e(6131,"string"),t()(),i(6132,"td",24)(6133,"em")(6134,"strong"),e(6135,"(opcional)"),t()(),i(6136,"p"),e(6137,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(6138,"tr",16)(6139,"td",17)(6140,"div",25)(6141,"span",26),e(6142," modalTableLoadMoreData"),n(6143,"br"),t()()(),i(6144,"td",21)(6145,"code",27),e(6146,"string"),t()(),i(6147,"td",24)(6148,"em")(6149,"strong"),e(6150,"(opcional)"),t()(),i(6151,"p"),e(6152,"Label do "),i(6153,"code"),e(6154,"button"),t(),e(6155," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(6156,"tr",16)(6157,"td",17)(6158,"div",25)(6159,"span",26),e(6160," modalTableLoadingData"),n(6161,"br"),t()()(),i(6162,"td",21)(6163,"code",27),e(6164,"string"),t()(),i(6165,"td",24)(6166,"em")(6167,"strong"),e(6168,"(opcional)"),t()(),i(6169,"p"),e(6170,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(6171,"tr",16)(6172,"td",17)(6173,"div",25)(6174,"span",26),e(6175," modalTableNoColumns"),n(6176,"br"),t()()(),i(6177,"td",21)(6178,"code",27),e(6179,"string"),t()(),i(6180,"td",24)(6181,"em")(6182,"strong"),e(6183,"(opcional)"),t()(),i(6184,"p"),e(6185,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(6186,"tr",16)(6187,"td",17)(6188,"div",25)(6189,"span",26),e(6190," modalTableNoData"),n(6191,"br"),t()()(),i(6192,"td",21)(6193,"code",27),e(6194,"string"),t()(),i(6195,"td",24)(6196,"em")(6197,"strong"),e(6198,"(opcional)"),t()(),i(6199,"p"),e(6200,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(6201,"tr",16)(6202,"td",17)(6203,"div",25)(6204,"span",26),e(6205," modalTitle"),n(6206,"br"),t()()(),i(6207,"td",21)(6208,"code",27),e(6209,"string"),t()(),i(6210,"td",24)(6211,"em")(6212,"strong"),e(6213,"(opcional)"),t()(),i(6214,"p"),e(6215,"Texto exibido no t\xEDtulo da modal."),t()()(),i(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),e(6220," search"),n(6221,"br"),t()()(),i(6222,"td",21)(6223,"code",27),e(6224,"string"),t()(),i(6225,"td",24)(6226,"em")(6227,"strong"),e(6228,"(opcional)"),t()(),i(6229,"p"),e(6230,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(6231,"h4",43)(6232,"code",5),e(6233,"PoLookupResponseApi"),t()(),i(6234,"div",2)(6235,"p"),e(6236,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(6237,"h4",12),e(6238,"Propriedades"),t(),i(6239,"table",13)(6240,"tr",14)(6241,"th",15),e(6242,"Nome"),t(),i(6243,"th",15),e(6244,"Tipo"),t(),i(6245,"th",15),e(6246,"Descri\xE7\xE3o"),t()(),i(6247,"tr",16)(6248,"td",17)(6249,"div",25)(6250,"span",26),e(6251," hasNext"),n(6252,"br"),t()()(),i(6253,"td",21)(6254,"code",29),e(6255,"boolean"),t()(),i(6256,"td",24)(6257,"p"),e(6258,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(6259,"tr",16)(6260,"td",17)(6261,"div",25)(6262,"span",26),e(6263," items"),n(6264,"br"),t()()(),i(6265,"td",21)(6266,"code",85),e(6267,"Array<object>"),t()(),i(6268,"td",24)(6269,"p"),e(6270,"Lista de itens retornados."),t()()()(),i(6271,"h3"),e(6272,"Enums"),t(),i(6273,"h4",4)(6274,"code",5),e(6275,"PoTableColumnSpacing"),t()(),i(6276,"div",2)(6277,"p"),e(6278,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(6279,"strong"),e(6280,"p-spacing"),t(),e(6281,") do po-table."),t()(),i(6282,"h4",12),e(6283,"Propriedades"),t(),i(6284,"table",13)(6285,"tr",14)(6286,"th",15),e(6287,"Nome"),t(),i(6288,"th",15),e(6289,"Descri\xE7\xE3o"),t()(),i(6290,"tr",16)(6291,"td",17)(6292,"div",25)(6293,"span",26),e(6294," ExtraSmall"),n(6295,"br"),t()()(),i(6296,"td",24)(6297,"p"),e(6298,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(6299,"tr",16)(6300,"td",17)(6301,"div",25)(6302,"span",26),e(6303," Small"),n(6304,"br"),t()()(),i(6305,"td",24)(6306,"p"),e(6307,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(6308,"tr",16)(6309,"td",17)(6310,"div",25)(6311,"span",26),e(6312," Medium"),n(6313,"br"),t()()(),i(6314,"td",24)(6315,"p"),e(6316,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(6317,"tr",16)(6318,"td",17)(6319,"div",25)(6320,"span",26),e(6321," Large"),n(6322,"br"),t()()(),i(6323,"td",24)(6324,"p"),e(6325,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Qe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ae(Ce),ae(ye))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),E("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view")(11,"sample-po-lookup-mask-view"),t()()()),l&2&&(c("p-actions",o.actions),d(2),c("p-active",o.activeTab==="doc"),d(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[qe,k,C,Te,Ae,je,Ve,He,Re,Ue,Ge],encapsulation:2})}return a})();var ft=[{path:"",component:Qe}],Je=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[me.forChild(ft),me]})}return a})();var Ji=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[Me,Je]})}return a})();export{Ji as DocPoLookupModule};
