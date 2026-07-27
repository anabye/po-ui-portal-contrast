import{o as P,p as Ee}from"./chunk-GFGD3QHA.js";import{Ab as y,Bb as _,Ea as pe,Ga as me,La as de,M as D,S as ae,U as re,Wa as se,a as ie,bb as ce,ia as le,nb as ue,w as oe,wa as C}from"./chunk-JDAUXJR5.js";import"./chunk-PUSYLN2N.js";import{$a as K,Aa as k,Ca as W,Da as H,Ea as j,Fa as c,Ga as n,Ha as t,Ia as r,J as R,Nb as q,Nc as X,Oc as Y,P as h,Pa as N,Pc as Z,Q as x,Qa as S,Qc as $,Rc as ee,Sa as A,Wa as G,Xa as U,Ya as Q,cb as T,db as e,dd as te,eb as J,fb as u,fd as ne,hb as g,hd as z,ia as p,ib as b,jb as f,na as L,pa as E,qa as O,sb as w,za as M}from"./chunk-A2WYYMKN.js";import"./chunk-NCEQPEJE.js";var Se=(()=>{class o{columns=[{property:"name",label:"Nome",type:"string"},{property:"age",label:"Idade",type:"number"},{property:"city",label:"Cidade",type:"string"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","searchAi","p-label","PO Search A.I."]],template:function(l,i){l&1&&r(0,"po-search-ai",0)},dependencies:[C],encapsulation:2})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO AI Search Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-ai-basic/sample-po-search-ai-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSearchAiColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-basic',
  templateUrl: './sample-po-search-ai-basic.component.html',
  standalone: false
})
export class SamplePoSearchAiBasicComponent {
  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-ai-basic"),t(),r(23,"hr")),l&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),u(" ",i.sampleCodeButtonLabel),p(),c("ngClass",w(4,Te,i.hideSampleCodeTabs)))},dependencies:[q,P,y,_,Se],encapsulation:2})}return o})();function qe(o,F){if(o&1&&(n(0,"po-container",4)(1,"p")(2,"strong"),e(3,"Query:"),t(),e(4),t(),n(5,"p")(6,"strong"),e(7,"Filtro:"),t(),e(8),t(),n(9,"p")(10,"strong"),e(11,"Descri\xE7\xE3o:"),t(),e(12),t(),n(13,"p")(14,"strong"),e(15,"Confian\xE7a:"),t(),e(16),t()()),o&2){let a=A();p(4),u(" ",a.result.query),p(4),u(" ",a.result.filter),p(4),u(" ",a.result.description),p(4),u(" ",a.result.confidence)}}var xe=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:"name",label:"Nome",type:"string"},{property:"age",label:"Idade",type:"number"},{property:"city",label:"Cidade",type:"string"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"compactLabel",label:"Compact Label"},{value:"disabled",label:"Disabled"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event="p-result"}onClear(){this.result=void 0,this.event="p-clear"}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label="Busca inteligente",this.minConfidence=.5,this.placeholder="Descreva o que procura em linguagem natural",this.properties=["clean"],this.size="medium",this.timeout=1e4,this.url="https://po-sample-api.onrender.com/v1/ai/filter"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-labs"]],standalone:!1,decls:20,vars:35,consts:[["f","ngForm"],["name","searchAi",3,"p-blur","p-clear","p-enter","p-error","p-keydown","p-low-confidence","p-result","p-columns","p-clean","p-compact-label","p-disabled","p-error-pattern","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-min-confidence","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-show-required","p-size","p-timeout","p-url"],[1,"po-row"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-no-padding","",1,"po-mt-2"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","timeout","p-clean","","p-label","Timeout (ms)",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minConfidence","p-clean","","p-label","Min Confidence","p-help","Valor entre 0 e 1",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-decimals-length"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=N();n(0,"po-search-ai",1),S("p-blur",function(){return i.changeEvent("p-blur")})("p-clear",function(){return i.onClear()})("p-enter",function(){return i.changeEvent("p-enter")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-low-confidence",function(){return i.changeEvent("p-low-confidence")})("p-result",function(m){return i.onResult(m)}),t(),r(1,"po-divider"),n(2,"div",2),r(3,"po-info",3),t(),M(4,qe,17,4,"po-container",4),r(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),f("ngModelChange",function(m){return h(d),b(i.label,m)||(i.label=m),x(m)}),t(),n(9,"po-input",6),f("ngModelChange",function(m){return h(d),b(i.help,m)||(i.help=m),x(m)}),t(),n(10,"po-input",7),f("ngModelChange",function(m){return h(d),b(i.helperText,m)||(i.helperText=m),x(m)}),t(),n(11,"po-input",8),f("ngModelChange",function(m){return h(d),b(i.placeholder,m)||(i.placeholder=m),x(m)}),t(),n(12,"po-input",9),f("ngModelChange",function(m){return h(d),b(i.errorPattern,m)||(i.errorPattern=m),x(m)}),t(),n(13,"po-input",10),f("ngModelChange",function(m){return h(d),b(i.url,m)||(i.url=m),x(m)}),t(),n(14,"po-number",11),f("ngModelChange",function(m){return h(d),b(i.timeout,m)||(i.timeout=m),x(m)}),t(),n(15,"po-decimal",12),f("ngModelChange",function(m){return h(d),b(i.minConfidence,m)||(i.minConfidence=m),x(m)}),t(),n(16,"po-checkbox-group",13),f("ngModelChange",function(m){return h(d),b(i.properties,m)||(i.properties=m),x(m)}),t(),n(17,"po-radio-group",14),f("ngModelChange",function(m){return h(d),b(i.size,m)||(i.size=m),x(m)}),t(),n(18,"div",2)(19,"po-button",15),S("p-click",function(){return h(d),K(7).reset(),x(i.restore())}),t()()()}l&2&&(c("p-columns",i.columns)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-min-confidence",i.minConfidence)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-required",i.properties==null?null:i.properties.includes("required"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-size",i.size)("p-timeout",i.timeout)("p-url",i.url),p(3),c("p-value",i.event),p(),k(i.result?4:-1),p(4),g("ngModel",i.label),p(),g("ngModel",i.help),p(),g("ngModel",i.helperText),p(),g("ngModel",i.placeholder),p(),g("ngModel",i.errorPattern),p(),g("ngModel",i.url),p(),g("ngModel",i.timeout),p(),g("ngModel",i.minConfidence),c("p-decimals-length",2),p(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),p(),g("ngModel",i.size),c("p-options",i.sizeOptions))},dependencies:[ee,X,Y,$,Z,oe,D,ie,ae,pe,me,C,de,re,se],encapsulation:2})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO AI Search Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-ai-labs/sample-po-search-ai-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-search-ai
  name="searchAi"
  [p-columns]="columns"
  [p-clean]="properties?.includes('clean')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties?.includes('loading')"
  [p-min-confidence]="minConfidence"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties?.includes('readonly')"
  [p-required]="properties?.includes('required')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-size]="size"
  [p-timeout]="timeout"
  [p-url]="url"
  (p-blur)="changeEvent('p-blur')"
  (p-clear)="onClear()"
  (p-enter)="changeEvent('p-enter')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-low-confidence)="changeEvent('p-low-confidence')"
  (p-result)="onResult($event)"
>
</po-search-ai>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

@if (result) {
  <po-container class="po-mt-2" p-no-padding>
    <p><strong>Query:</strong> { { result.query }}</p>
    <p><strong>Filtro:</strong> { { result.filter }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { result.description }}</p>
    <p><strong>Confian\xE7a:</strong> { { result.confidence }}</p>
  </po-container>
}

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-label="URL"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="timeout" [(ngModel)]="timeout" p-clean p-label="Timeout (ms)"> </po-number>

  <po-decimal
    class="po-md-6 po-lg-3"
    name="minConfidence"
    [(ngModel)]="minConfidence"
    p-clean
    p-label="Min Confidence"
    [p-decimals-length]="2"
    p-help="Valor entre 0 e 1"
  >
  </po-decimal>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSearchAiColumn, PoSearchAiResult, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-labs',
  templateUrl: './sample-po-search-ai-labs.component.html',
  standalone: false
})
export class SamplePoSearchAiLabsComponent implements OnInit {
  compactLabel: boolean;
  errorPattern: string;
  event: string;
  result: PoSearchAiResult;
  help: string;
  helperText: string;
  label: string;
  labelTextWrap: boolean;
  loading: boolean;
  minConfidence: number;
  noAutocomplete: boolean;
  placeholder: string;
  properties: Array<string>;
  size: string;
  timeout: number;
  url: string;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  onResult(result: PoSearchAiResult) {
    this.result = result;
    this.event = 'p-result';
  }

  onClear() {
    this.result = undefined;
    this.event = 'p-clear';
  }

  restore() {
    this.errorPattern = undefined;
    this.event = undefined;
    this.result = undefined;
    this.help = undefined;
    this.helperText = undefined;
    this.label = 'Busca inteligente';
    this.minConfidence = 0.5;
    this.placeholder = 'Descreva o que procura em linguagem natural';
    this.properties = ['clean'];
    this.size = 'medium';
    this.timeout = 10000;
    this.url = 'https://po-sample-api.onrender.com/v1/ai/filter';
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-ai-labs"),t(),r(23,"hr")),l&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),u(" ",i.sampleCodeButtonLabel),p(),c("ngClass",w(4,Me,i.hideSampleCodeTabs)))},dependencies:[q,P,y,_,xe],encapsulation:2})}return o})();function De(o,F){if(o&1&&(n(0,"po-container",1)(1,"p")(2,"strong"),e(3,"Query:"),t(),e(4),t(),n(5,"p")(6,"strong"),e(7,"Filtro:"),t(),e(8),t(),n(9,"p")(10,"strong"),e(11,"Descri\xE7\xE3o:"),t(),e(12),t(),n(13,"p")(14,"strong"),e(15,"Confian\xE7a:"),t(),e(16),t()()),o&2){let a=A();p(4),u(" ",a.result.query),p(4),u(" ",a.result.filter),p(4),u(" ",a.result.description),p(4),u(" ",a.result.confidence)}}var be=(()=>{class o{result;columns=[{property:"name",label:"Nome",type:"string"},{property:"age",label:"Idade",type:"number"},{property:"city",label:"Cidade",type:"string"}];onResult(a){this.result=a}onClear(){this.result=void 0}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-result"]],standalone:!1,decls:2,vars:2,consts:[["name","searchAi","p-label","Busca inteligente","p-help","Descreva o que procura em linguagem natural e pressione Enter","p-placeholder","Ex: clientes de SP com idade acima de 30","p-url","https://po-sample-api.onrender.com/v1/ai/filter","p-clean","",3,"p-result","p-clear","p-columns"],["p-no-padding","",1,"po-mt-2"]],template:function(l,i){l&1&&(n(0,"po-search-ai",0),S("p-result",function(s){return i.onResult(s)})("p-clear",function(){return i.onClear()}),t(),M(1,De,17,4,"po-container",1)),l&2&&(c("p-columns",i.columns),p(),k(i.result?1:-1))},dependencies:[D,C],encapsulation:2})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-result-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO AI Search - Result"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-ai-result/sample-po-search-ai-result.component.html"),t(),n(13,"pre",7),e(14,`<po-search-ai
  name="searchAi"
  p-label="Busca inteligente"
  p-help="Descreva o que procura em linguagem natural e pressione Enter"
  p-placeholder="Ex: clientes de SP com idade acima de 30"
  p-url="https://po-sample-api.onrender.com/v1/ai/filter"
  p-clean
  [p-columns]="columns"
  (p-result)="onResult($event)"
  (p-clear)="onClear()"
>
</po-search-ai>

@if (result) {
  <po-container class="po-mt-2" p-no-padding>
    <p><strong>Query:</strong> { { result.query }}</p>
    <p><strong>Filtro:</strong> { { result.filter }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { result.description }}</p>
    <p><strong>Confian\xE7a:</strong> { { result.confidence }}</p>
  </po-container>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-ai-result/sample-po-search-ai-result.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSearchAiColumn, PoSearchAiResult } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-result',
  templateUrl: './sample-po-search-ai-result.component.html',
  standalone: false
})
export class SamplePoSearchAiResultComponent {
  result: PoSearchAiResult;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];

  onResult(result: PoSearchAiResult) {
    this.result = result;
  }

  onClear() {
    this.result = undefined;
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-ai-result"),t(),r(23,"hr")),l&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),u(" ",i.sampleCodeButtonLabel),p(),c("ngClass",w(4,Fe,i.hideSampleCodeTabs)))},dependencies:[q,P,y,_,be],encapsulation:2})}return o})();function Oe(o,F){if(o&1){let a=N();n(0,"po-filter-chip",10),S("p-selected-change",function(i){let d=h(a).$implicit,s=A();return x(s.onSuggestionChange(d,i))}),t()}if(o&2){let a=F.$implicit,l=A();c("p-label",a)("p-selected",l.selectedSuggestion===a)("p-disabled",l.suggestionsLocked&&l.selectedSuggestion!==a)}}function Ne(o,F){if(o&1&&(n(0,"po-container",9)(1,"p",11),e(2,"Filtro OData gerado"),t(),n(3,"p")(4,"strong"),e(5,"Consulta:"),t(),e(6),t(),n(7,"p")(8,"strong"),e(9,"Descri\xE7\xE3o:"),t(),e(10),t(),n(11,"p")(12,"strong"),e(13,"Confian\xE7a:"),t(),e(14),t(),n(15,"pre",12),e(16),t()()),o&2){let a=A();p(6),u(" ",a.query),p(4),u(" ",a.description),p(4),u(" ",a.confidence),p(2),J(a.filter)}}var ve=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:"name",label:"Nome",type:"string"},{property:"age",label:"Idade",type:"number"},{property:"city",label:"Cidade",type:"string"},{property:"department",label:"Departamento",type:"string"},{property:"salary",label:"Sal\xE1rio",type:"number"}];examples=["funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000","departamento Engenharia","com menos de 30 anos","sal\xE1rio entre 8000 e 12000","sal\xE1rio acima de 15000","funcion\xE1rios de Curitiba","de S\xE3o Paulo com sal\xE1rio abaixo de 15000","departamento Design"];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static \u0275fac=function(l){return new(l||o)(L(le))};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-filter"]],viewQuery:function(l,i){if(l&1&&G(C,5),l&2){let d;U(d=Q())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[["p-no-border","",1,"po-mb-2"],[1,"po-font-text-large-bold","po-mb-1"],[1,"po-font-text",2,"color","var(--color-neutral-dark-70)"],[1,"po-font-text","po-mt-1",2,"color","var(--color-neutral-dark-70)"],["href","https://po-ui.io/documentation/po-table","target","_blank"],["name","searchAi","p-label","Gerar filtro com IA","p-help","Descreva o que procura e pressione Enter para gerar um filtro OData","p-placeholder","Ex: funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000","p-url","https://po-sample-api.onrender.com/v1/ai/filter","p-clean","",3,"p-result","p-low-confidence","p-error","p-clear","p-columns"],[1,"po-font-text-small","po-mt-2","po-mb-1",2,"color","var(--color-neutral-mid-tone)"],[1,"po-mb-1",2,"display","flex","flex-wrap","wrap","gap","0.5rem"],[3,"p-label","p-selected","p-disabled"],["p-no-padding","",1,"po-mt-2"],[3,"p-selected-change","p-label","p-selected","p-disabled"],[1,"po-font-text-large-bold"],[1,"po-font-text",2,"background","var(--color-neutral-light-10)","padding","8px","border-radius","4px"]],template:function(l,i){l&1&&(n(0,"po-container",0)(1,"p",1),e(2,"Gere um filtro com IA"),t(),n(3,"p",2),e(4," Este exemplo usa o "),n(5,"code"),e(6,"po-search-ai"),t(),e(7," de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutiliz\xE1vel, que voc\xEA pode aplicar em qualquer fonte de dados. "),t(),n(8,"p",3),e(9," Quer aplicar o filtro automaticamente em uma tabela? O "),n(10,"a",4),e(11,"po-table"),t(),e(12," j\xE1 integra o "),n(13,"code"),e(14,"po-search-ai"),t(),e(15," de forma inteligente atrav\xE9s da propriedade "),n(16,"code"),e(17,"p-search-ai-field"),t(),e(18,", experimente tamb\xE9m! "),t()(),n(19,"po-search-ai",5),S("p-result",function(s){return i.onResult(s)})("p-low-confidence",function(s){return i.onLowConfidence(s)})("p-error",function(s){return i.onError(s)})("p-clear",function(){return i.onClear()}),t(),n(20,"p",6),e(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),t(),n(22,"div",7),H(23,Oe,1,3,"po-filter-chip",8,W),t(),M(25,Ne,17,4,"po-container",9)),l&2&&(p(19),c("p-columns",i.columns),p(4),j(i.examples),p(2),k(i.filter?25:-1))},dependencies:[D,C,ce],encapsulation:2})}return o})();var ze=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-filter-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO AI Search - Filter"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-ai-filter/sample-po-search-ai-filter.component.html"),t(),n(13,"pre",7),e(14,`<po-container class="po-mb-2" p-no-border>
  <p class="po-font-text-large-bold po-mb-1">Gere um filtro com IA</p>
  <p class="po-font-text" style="color: var(--color-neutral-dark-70)">
    Este exemplo usa o <code>po-search-ai</code> de forma isolada para transformar uma frase em linguagem natural em um
    filtro OData reutiliz\xE1vel, que voc\xEA pode aplicar em qualquer fonte de dados.
  </p>
  <p class="po-font-text po-mt-1" style="color: var(--color-neutral-dark-70)">
    Quer aplicar o filtro automaticamente em uma tabela? O
    <a href="https://po-ui.io/documentation/po-table" target="_blank">po-table</a>
    j\xE1 integra o <code>po-search-ai</code> de forma inteligente atrav\xE9s da propriedade <code>p-search-ai-field</code>,
    experimente tamb\xE9m!
  </p>
</po-container>

<po-search-ai
  name="searchAi"
  p-label="Gerar filtro com IA"
  p-help="Descreva o que procura e pressione Enter para gerar um filtro OData"
  p-placeholder="Ex: funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000"
  p-url="https://po-sample-api.onrender.com/v1/ai/filter"
  p-clean
  [p-columns]="columns"
  (p-result)="onResult($event)"
  (p-low-confidence)="onLowConfidence($event)"
  (p-error)="onError($event)"
  (p-clear)="onClear()"
>
</po-search-ai>

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

@if (filter) {
  <po-container class="po-mt-2" p-no-padding>
    <p class="po-font-text-large-bold">Filtro OData gerado</p>
    <p><strong>Consulta:</strong> { { query }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { description }}</p>
    <p><strong>Confian\xE7a:</strong> { { confidence }}</p>
    <pre class="po-font-text" style="background: var(--color-neutral-light-10); padding: 8px; border-radius: 4px">{ {
      filter
    }}</pre>
  </po-container>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import {
  PoFilterChipSelectedChange,
  PoNotificationService,
  PoSearchAiColumn,
  PoSearchAiComponent,
  PoSearchAiError,
  PoSearchAiResult
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-filter',
  templateUrl: './sample-po-search-ai-filter.component.html',
  standalone: false
})
export class SamplePoSearchAiFilterComponent {
  @ViewChild(PoSearchAiComponent) searchAi: PoSearchAiComponent;

  confidence: number;
  description: string;
  filter: string;
  query: string;

  selectedSuggestion: string;
  suggestionsLocked = false;

  private readonly SUGGESTION_LOCK_TIME = 3000;
  private lockTimeout: ReturnType<typeof setTimeout>;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' },
    { property: 'department', label: 'Departamento', type: 'string' },
    { property: 'salary', label: 'Sal\xE1rio', type: 'number' }
  ];

  readonly examples: Array<string> = [
    'funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000',
    'departamento Engenharia',
    'com menos de 30 anos',
    'sal\xE1rio entre 8000 e 12000',
    'sal\xE1rio acima de 15000',
    'funcion\xE1rios de Curitiba',
    'de S\xE3o Paulo com sal\xE1rio abaixo de 15000',
    'departamento Design'
  ];

  constructor(private readonly poNotification: PoNotificationService) {}

  applySuggestion(query: string): void {
    if (!this.searchAi) {
      return;
    }

    this.searchAi.writeValueModel(query);
    this.searchAi.search();
  }

  onSuggestionChange(query: string, event: PoFilterChipSelectedChange): void {
    // Considera apenas o evento de sele\xE7\xE3o; emiss\xF5es de desele\xE7\xE3o vindas da
    // sincroniza\xE7\xE3o do input \`p-selected\` (single-select) s\xE3o ignoradas.
    if (!event.selected || this.suggestionsLocked) {
      return;
    }

    this.selectedSuggestion = query;
    this.applySuggestion(query);
    this.lockSuggestions();
  }

  onResult(result: PoSearchAiResult) {
    this.query = result.query;
    this.filter = result.filter;
    this.description = result.description;
    this.confidence = result.confidence;
  }

  onLowConfidence(result: PoSearchAiResult) {
    this.poNotification.warning(
      \`N\xE3o tenho certeza do que voc\xEA quis dizer com "\${result.query}". Tente reformular a busca.\`
    );
  }

  onError(error: PoSearchAiError) {
    this.poNotification.error(\`Erro ao consultar a IA: \${error.message}\`);
  }

  onClear() {
    this.confidence = undefined;
    this.description = undefined;
    this.filter = undefined;
    this.query = undefined;
    this.selectedSuggestion = undefined;
  }

  private lockSuggestions(): void {
    this.suggestionsLocked = true;
    clearTimeout(this.lockTimeout);
    this.lockTimeout = setTimeout(() => {
      this.suggestionsLocked = false;
    }, this.SUGGESTION_LOCK_TIME);
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-ai-filter"),t(),r(23,"hr")),l&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),u(" ",i.sampleCodeButtonLabel),p(),c("ngClass",w(4,ze,i.hideSampleCodeTabs)))},dependencies:[q,P,y,_,ve],encapsulation:2})}return o})();var ye=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-search-ai-doc"]],standalone:!1,decls:1267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table"],[1,"language-json"],["href","https://po-sample-api.onrender.com/api#/ai"],["href","https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","Array<PoSearchAiColumn>"],["pan","",1,"docs-api-property-type","PoSearchAiLiterals"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Record<string,","any>"],["pan","",1,"docs-api-property-type","PoSearchAiResponseType"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload, po-url e po-search-ai.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoSearchAiComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-search-ai"),t(),e(26," \xE9 um componente de "),n(27,"strong"),e(28,"busca em linguagem natural"),t(),e(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),n(30,"em"),e(31,'"clientes de SP com saldo acima de R$ 500"'),t(),e(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),n(33,"a",6)(34,"code"),e(35,"po-table"),t()(),e(36,"."),t(),n(37,"blockquote")(38,"p")(39,"strong"),e(40,"Componente experimental:"),t(),e(41," o "),n(42,"code"),e(43,"po-search-ai"),t(),e(44,` est\xE1 em fase experimental. Sua API
(propriedades, eventos e contrato com o backend) pode sofrer altera\xE7\xF5es
entre vers\xF5es. Utilize com cautela em ambientes de produ\xE7\xE3o.`),t()(),n(45,"p"),e(46,"O componente \xE9 "),n(47,"strong"),e(48,"agn\xF3stico ao provedor de IA"),t(),e(49,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),n(50,"code"),e(51,"p-url"),t(),e(52,", que recebe "),n(53,"code"),e(54,"{ query, columns }"),t(),e(55,` e deve retornar
`),n(56,"code"),e(57,"{ filter, description, confidence }"),t(),e(58,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),t(),n(59,"p"),e(60,"Por herdar de "),n(61,"code"),e(62,"po-input"),t(),e(63,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),n(64,"code"),e(65,"template-driven"),t(),e(66," e "),n(67,"code"),e(68,"reactive"),t(),e(69,"."),t(),n(70,"h4"),e(71,"Endpoint de IA (backend)"),t(),n(72,"p"),e(73,"O componente "),n(74,"strong"),e(75,"n\xE3o conversa diretamente com a LLM"),t(),e(76,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),n(77,"code"),e(78,"p-url"),t(),e(79,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),t(),n(80,"p"),e(81,"O contrato \xE9 simples. O componente faz um "),n(82,"code"),e(83,"POST"),t(),e(84," enviando:"),t(),n(85,"pre")(86,"code",7),e(87,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),t()(),n(88,"p"),e(89,"E o endpoint deve responder com:"),t(),n(90,"pre")(91,"code",7),e(92,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),t()(),n(93,"p"),e(94,"Onde "),n(95,"code"),e(96,"filter"),t(),e(97," \xE9 o filtro estruturado gerado pela IA (normalmente OData), "),n(98,"code"),e(99,"description"),t(),e(100,` \xE9 um
resumo leg\xEDvel e `),n(101,"code"),e(102,"confidence"),t(),e(103," ("),n(104,"code"),e(105,"0.0"),t(),e(106," a "),n(107,"code"),e(108,"1.0"),t(),e(109,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),n(110,"code"),e(111,"p-min-confidence"),t(),e(112," para decidir entre os eventos "),n(113,"code"),e(114,"p-result"),t(),e(115," e "),n(116,"code"),e(117,"p-low-confidence"),t(),e(118,"."),t(),n(119,"blockquote")(120,"p")(121,"strong"),e(122,"Exemplo de implementa\xE7\xE3o:"),t(),e(123,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),t(),n(124,"ul")(125,"li"),e(126,"Endpoint p\xFAblico: "),n(127,"a",8)(128,"code"),e(129,"/v1/ai/filter"),t()()(),n(130,"li"),e(131,"C\xF3digo-fonte: "),n(132,"a",9),e(133,"po-sample-api/src/ai/ai.service.ts"),t()()()(),n(134,"h4"),e(135,"Estados de comportamento"),t(),n(136,"ul")(137,"li")(138,"strong"),e(139,"Idle:"),t(),e(140," aguardando a digita\xE7\xE3o da consulta."),t(),n(141,"li")(142,"strong"),e(143,"Loading:"),t(),e(144," consulta em andamento (\xEDcone de carregamento ativo)."),t(),n(145,"li")(146,"strong"),e(147,"Aplicado:"),t(),e(148,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),t(),n(149,"li")(150,"strong"),e(151,"Baixa confian\xE7a:"),t(),e(152," quando "),n(153,"code"),e(154,"confidence"),t(),e(155," for menor que "),n(156,"code"),e(157,"p-min-confidence"),t(),e(158,`, emite
`),n(159,"code"),e(160,"p-low-confidence"),t(),e(161," e n\xE3o aplica o filtro automaticamente."),t(),n(162,"li")(163,"strong"),e(164,"Erro:"),t(),e(165," quando a chamada falha, emite "),n(166,"code"),e(167,"p-error"),t(),e(168,"."),t()(),n(169,"h4"),e(170,"Tokens customiz\xE1veis"),t(),n(171,"p"),e(172,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(173,"blockquote")(174,"p"),e(175,"Para maiores informa\xE7\xF5es, acesse o guia "),n(176,"a",10),e(177,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(178,"."),t()(),n(179,"table")(180,"thead")(181,"tr")(182,"th"),e(183,"Propriedade"),t(),n(184,"th"),e(185,"Descri\xE7\xE3o"),t(),n(186,"th"),e(187,"Valor Padr\xE3o"),t()()(),n(188,"tbody")(189,"tr")(190,"td")(191,"strong"),e(192,"Default"),t()(),r(193,"td")(194,"td"),t(),n(195,"tr")(196,"td")(197,"code"),e(198,"--font-family"),t()(),n(199,"td"),e(200,"Fam\xEDlia tipogr\xE1fica do campo"),t(),n(201,"td")(202,"code"),e(203,"var(--font-family-theme)"),t()()(),n(204,"tr")(205,"td")(206,"code"),e(207,"--font-size"),t()(),n(208,"td"),e(209,"Tamanho da fonte do campo"),t(),n(210,"td")(211,"code"),e(212,"var(--font-size)"),t()()(),n(213,"tr")(214,"td")(215,"code"),e(216,"--text-color"),t()(),n(217,"td"),e(218,"Cor do texto digitado"),t(),n(219,"td")(220,"code"),e(221,"var(--color-neutral-dark-90)"),t()()(),n(222,"tr")(223,"td")(224,"code"),e(225,"--text-color-placeholder"),t()(),n(226,"td"),e(227,"Cor do texto do placeholder"),t(),n(228,"td")(229,"code"),e(230,"var(--color-neutral-light-30)"),t()()(),n(231,"tr")(232,"td")(233,"code"),e(234,"--color"),t()(),n(235,"td"),e(236,"Cor da borda do campo"),t(),n(237,"td")(238,"code"),e(239,"var(--color-neutral-dark-70)"),t()()(),n(240,"tr")(241,"td")(242,"code"),e(243,"--background"),t()(),n(244,"td"),e(245,"Cor de fundo do campo"),t(),n(246,"td")(247,"code"),e(248,"var(--color-neutral-light-05)"),t()()(),n(249,"tr")(250,"td")(251,"code"),e(252,"--border-radius"),t()(),n(253,"td"),e(254,"Raio da borda do campo"),t(),n(255,"td")(256,"code"),e(257,"var(--border-radius-md)"),t()()(),n(258,"tr")(259,"td")(260,"strong"),e(261,"\xCDcones e divis\xF3ria"),t()(),r(262,"td")(263,"td"),t(),n(264,"tr")(265,"td")(266,"code"),e(267,"--color-icon-read"),t()(),n(268,"td"),e(269,"Cor do \xEDcone de busca por IA"),t(),n(270,"td")(271,"code"),e(272,"var(--color-neutral-dark-70)"),t()()(),n(273,"tr")(274,"td")(275,"code"),e(276,"--color-divider"),t()(),n(277,"td"),e(278,"Cor da divis\xF3ria vertical entre o campo e o bot\xE3o de busca"),t(),n(279,"td")(280,"code"),e(281,"var(--color-neutral-mid-40)"),t()()(),n(282,"tr")(283,"td")(284,"code"),e(285,"--color-icon-processing"),t()(),n(286,"td"),e(287,"Cor do \xEDcone exibido enquanto a consulta est\xE1 sendo processada"),t(),n(288,"td")(289,"code"),e(290,"var(--color-action-default)"),t()()(),n(291,"tr")(292,"td")(293,"strong"),e(294,"Hover"),t()(),r(295,"td")(296,"td"),t(),n(297,"tr")(298,"td")(299,"code"),e(300,"--color-hover"),t()(),n(301,"td"),e(302,"Cor da borda no estado hover"),t(),n(303,"td")(304,"code"),e(305,"var(--color-brand-01-dark)"),t()()(),n(306,"tr")(307,"td")(308,"code"),e(309,"--background-hover"),t()(),n(310,"td"),e(311,"Cor de fundo no estado hover"),t(),n(312,"td")(313,"code"),e(314,"var(--color-brand-01-lightest)"),t()()(),n(315,"tr")(316,"td")(317,"strong"),e(318,"Focused"),t()(),r(319,"td")(320,"td"),t(),n(321,"tr")(322,"td")(323,"code"),e(324,"--color-focused"),t()(),n(325,"td"),e(326,"Cor da borda no estado de foco"),t(),n(327,"td")(328,"code"),e(329,"var(--color-action-default)"),t()()(),n(330,"tr")(331,"td")(332,"code"),e(333,"--outline-color-focused"),t()(),n(334,"td"),e(335,"Cor do outline no estado de foco"),t(),n(336,"td")(337,"code"),e(338,"var(--color-action-focus)"),t()()(),n(339,"tr")(340,"td")(341,"strong"),e(342,"Disabled"),t()(),r(343,"td")(344,"td"),t(),n(345,"tr")(346,"td")(347,"code"),e(348,"--color-disabled"),t()(),n(349,"td"),e(350,"Cor da borda no estado desabilitado"),t(),n(351,"td")(352,"code"),e(353,"var(--color-neutral-light-30)"),t()()(),n(354,"tr")(355,"td")(356,"code"),e(357,"--background-disabled"),t()(),n(358,"td"),e(359,"Cor de fundo no estado desabilitado"),t(),n(360,"td")(361,"code"),e(362,"var(--color-neutral-light-20)"),t()()()()()(),n(363,"div",11)(364,"h4",12),e(365,"Seletor"),t(),n(366,"pre",13),e(367,`<po-search-ai
    (p-clear)="EventEmitter"
    p-columns="Array<PoSearchAiColumn>"
    (p-error)="EventEmitter"
    p-literals="PoSearchAiLiterals"
    (p-low-confidence)="EventEmitter"
    p-min-confidence="number"
    (p-result)="EventEmitter"
    p-timeout="number"
    p-url="string" >
</po-search-ai>
`),t()(),n(368,"h4",14),e(369,"Propriedades"),t(),n(370,"table",15)(371,"tr",16)(372,"th",17),e(373,"Nome"),t(),n(374,"th",17),e(375,"Tipo"),t(),n(376,"th",17),e(377,"Padr\xE3o"),t(),n(378,"th",17),e(379,"Descri\xE7\xE3o"),t()(),n(380,"tr",18)(381,"td",19)(382,"div",20)(383,"span",21),e(384," (p-clear)"),r(385,"br"),t()()(),n(386,"td",22)(387,"code",23),e(388,"EventEmitter"),t()(),n(389,"td",24),e(390,"-"),t(),n(391,"td",25)(392,"em")(393,"strong"),e(394,"(opcional)"),t()(),n(395,"p"),e(396,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),t()()(),n(397,"tr",18)(398,"td",19)(399,"div",26)(400,"span",27),e(401," p-columns"),r(402,"br"),t()()(),n(403,"td",22)(404,"code",28),e(405,"Array<PoSearchAiColumn>"),t()(),n(406,"td",24)(407,"p")(408,"code"),e(409,"[]"),t()()(),n(410,"td",25)(411,"em")(412,"strong"),e(413,"(opcional)"),t()(),n(414,"p"),e(415,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),n(416,"code"),e(417,"p-url"),t(),e(418,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),t()()(),n(419,"tr",18)(420,"td",19)(421,"div",20)(422,"span",21),e(423," (p-error)"),r(424,"br"),t()()(),n(425,"td",22)(426,"code",23),e(427,"EventEmitter"),t()(),n(428,"td",24),e(429,"-"),t(),n(430,"td",25)(431,"em")(432,"strong"),e(433,"(opcional)"),t()(),n(434,"p"),e(435,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),n(436,"code"),e(437,"PoSearchAiError"),t(),e(438,"."),t()()(),n(439,"tr",18)(440,"td",19)(441,"div",26)(442,"span",27),e(443," p-literals"),r(444,"br"),t()()(),n(445,"td",22)(446,"code",29),e(447,"PoSearchAiLiterals"),t()(),n(448,"td",24),e(449,"-"),t(),n(450,"td",25)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),n(454,"p"),e(455,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),t()()(),n(456,"tr",18)(457,"td",19)(458,"div",20)(459,"span",21),e(460," (p-low-confidence)"),r(461,"br"),t()()(),n(462,"td",22)(463,"code",23),e(464,"EventEmitter"),t()(),n(465,"td",24),e(466,"-"),t(),n(467,"td",25)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),n(471,"p"),e(472,"Evento disparado quando a confian\xE7a da resposta da IA \xE9 menor que "),n(473,"code"),e(474,"p-min-confidence"),t(),e(475,`.
Emite um objeto `),n(476,"code"),e(477,"PoSearchAiResult"),t(),e(478,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),t()()(),n(479,"tr",18)(480,"td",19)(481,"div",26)(482,"span",27),e(483," p-min-confidence"),r(484,"br"),t()()(),n(485,"td",22)(486,"code",30),e(487,"number"),t()(),n(488,"td",24)(489,"p")(490,"code"),e(491,"0.5"),t()()(),n(492,"td",25)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),n(496,"p"),e(497,"N\xEDvel m\xEDnimo de confian\xE7a ("),n(498,"code"),e(499,"0.0"),t(),e(500," a "),n(501,"code"),e(502,"1.0"),t(),e(503,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),n(504,"code"),e(505,"p-low-confidence"),t(),e(506,` \xE9
emitido em vez de `),n(507,"code"),e(508,"p-result"),t(),e(509,"."),t()()(),n(510,"tr",18)(511,"td",19)(512,"div",20)(513,"span",21),e(514," (p-result)"),r(515,"br"),t()()(),n(516,"td",22)(517,"code",23),e(518,"EventEmitter"),t()(),n(519,"td",24),e(520,"-"),t(),n(521,"td",25)(522,"em")(523,"strong"),e(524,"(opcional)"),t()(),n(525,"p"),e(526,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),n(527,"code"),e(528,"p-min-confidence"),t(),e(529,". Emite um objeto "),n(530,"code"),e(531,"PoSearchAiResult"),t(),e(532,"."),t(),n(533,"p"),e(534,"O campo "),n(535,"code"),e(536,"type"),t(),e(537," do resultado indica como o consumidor deve interpretar a resposta:"),t(),n(538,"ul")(539,"li")(540,"p")(541,"strong")(542,"code"),e(543,"filter"),t()(),n(544,"em"),e(545,"(padr\xE3o)"),t(),e(546,": a IA retornou um filtro estruturado (ex: OData). Use "),n(547,"code"),e(548,"result.filter"),t(),e(549,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),n(550,"code"),e(551,"po-table"),t(),e(552," via "),n(553,"code"),e(554,"p-filter"),t(),e(555,"."),t()(),n(556,"li")(557,"p")(558,"strong")(559,"code"),e(560,"chat"),t()(),e(561,": a IA retornou uma resposta conversacional. Use "),n(562,"code"),e(563,"result.data"),t(),e(564,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),t()(),n(565,"li")(566,"p")(567,"strong")(568,"code"),e(569,"custom"),t()(),e(570,": a IA retornou um payload gen\xE9rico definido pelo backend. Use "),n(571,"code"),e(572,"result.data"),t(),e(573,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),t()()()()(),n(574,"tr",18)(575,"td",19)(576,"div",26)(577,"span",27),e(578," p-timeout"),r(579,"br"),t()()(),n(580,"td",22)(581,"code",30),e(582,"number"),t()(),n(583,"td",24)(584,"p")(585,"code"),e(586,"10000"),t()()(),n(587,"td",25)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),n(591,"p"),e(592,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),n(593,"code"),e(594,"p-error"),t(),e(595," com "),n(596,"code"),e(597,"statusCode 408"),t(),e(598,"."),t()()(),n(599,"tr",18)(600,"td",19)(601,"div",26)(602,"span",27),e(603," p-url"),r(604,"br"),t()()(),n(605,"td",22)(606,"code",31),e(607,"string"),t()(),n(608,"td",24),e(609,"-"),t(),n(610,"td",25)(611,"em")(612,"strong"),e(613,"(opcional)"),t()(),n(614,"p"),e(615,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),n(616,"code"),e(617,"{ query, columns }"),t(),e(618," via "),n(619,"code"),e(620,"POST"),t(),e(621," e deve retornar "),n(622,"code"),e(623,"{ filter, description, confidence }"),t(),e(624,"."),t(),n(625,"blockquote")(626,"p"),e(627,"A integra\xE7\xE3o com a LLM e a guarda de chaves devem ocorrer "),n(628,"strong"),e(629,"no backend"),t(),e(630,", nunca no client-side."),t()()()()(),n(631,"h3",14),e(632,"M\xE9todos"),t(),n(633,"table",32)(634,"tr",18)(635,"th",33)(636,"div",26)(637,"h4")(638,"span",27),e(639," search "),t()()()()(),n(640,"tr",25)(641,"td",25)(642,"p"),e(643,"Envia a consulta atual (valor do campo) para o endpoint de IA configurado em "),n(644,"code"),e(645,"p-url"),t(),e(646,"."),t(),n(647,"p"),e(648,"Caso a consulta esteja vazia ou "),n(649,"code"),e(650,"p-url"),t(),e(651,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),n(652,"code"),e(653,"p-result"),t(),e(654," (ou "),n(655,"code"),e(656,"p-low-confidence"),t(),e(657,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),n(658,"code"),e(659,"p-error"),t(),e(660,"."),t()()()(),r(661,"br"),n(662,"table",32)(663,"tr",18)(664,"th",33)(665,"div",26)(666,"h4")(667,"span",27),e(668," clearSearch "),t()()()()(),n(669,"tr",25)(670,"td",25)(671,"p"),e(672,"Limpa o filtro aplicado via IA, esvazia o campo e emite o evento "),n(673,"code"),e(674,"p-clear"),t(),e(675,"."),t()()()(),r(676,"br"),n(677,"table",32)(678,"tr",18)(679,"th",33)(680,"div",26)(681,"h4")(682,"span",27),e(683," onSearchKeydown "),t()()()()(),n(684,"tr",25)(685,"td",25)(686,"p"),e(687,"Manipula a tecla pressionada no campo: dispara a busca ao pressionar "),n(688,"code"),e(689,"Enter"),t(),e(690,"."),t()()()(),n(691,"h5")(692,"b"),e(693,"Par\xE2metros"),t()(),n(694,"table",15)(695,"tr",16)(696,"th",17),e(697,"Nome"),t(),n(698,"th",17),e(699,"Tipo"),t(),n(700,"th",17),e(701,"Descri\xE7\xE3o"),t()(),n(702,"tr",18)(703,"td",19),e(704," event"),t(),r(705,"td",22),n(706,"td",25)(707,"p"),e(708,"Evento de teclado."),t()()()(),r(709,"br"),n(710,"h3"),e(711,"Interfaces"),t(),n(712,"h4",34)(713,"code",5),e(714,"PoSearchAiColumn"),t()(),n(715,"div",2)(716,"p"),e(717,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),t(),n(718,"p"),e(719,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),t()(),n(720,"h4",14),e(721,"Propriedades"),t(),n(722,"table",15)(723,"tr",16)(724,"th",17),e(725,"Nome"),t(),n(726,"th",17),e(727,"Tipo"),t(),n(728,"th",17),e(729,"Descri\xE7\xE3o"),t()(),n(730,"tr",18)(731,"td",19)(732,"div",26)(733,"span",27),e(734," label"),r(735,"br"),t()()(),n(736,"td",22)(737,"code",31),e(738,"string"),t()(),n(739,"td",25)(740,"p"),e(741,"R\xF3tulo leg\xEDvel exibido ao usu\xE1rio (ex: "),n(742,"code"),e(743,"Nome"),t(),e(744,", "),n(745,"code"),e(746,"Idade"),t(),e(747,", "),n(748,"code"),e(749,"Cidade"),t(),e(750,")."),t()()(),n(751,"tr",18)(752,"td",19)(753,"div",26)(754,"span",27),e(755," property"),r(756,"br"),t()()(),n(757,"td",22)(758,"code",31),e(759,"string"),t()(),n(760,"td",25)(761,"p"),e(762,"Nome da propriedade do campo (ex: "),n(763,"code"),e(764,"name"),t(),e(765,", "),n(766,"code"),e(767,"age"),t(),e(768,", "),n(769,"code"),e(770,"city"),t(),e(771,")."),t()()(),n(772,"tr",18)(773,"td",19)(774,"div",26)(775,"span",27),e(776," type"),r(777,"br"),t()()(),n(778,"td",22)(779,"code",31),e(780,"string"),t()(),n(781,"td",25)(782,"em")(783,"strong"),e(784,"(opcional)"),t()(),n(785,"p"),e(786,"Tipo do campo, utilizado pela IA para gerar compara\xE7\xF5es adequadas."),t(),n(787,"p"),e(788,"Valores comuns: "),n(789,"code"),e(790,"string"),t(),e(791,", "),n(792,"code"),e(793,"number"),t(),e(794,", "),n(795,"code"),e(796,"date"),t(),e(797,", "),n(798,"code"),e(799,"currency"),t(),e(800,", "),n(801,"code"),e(802,"boolean"),t(),e(803,"."),t()()()(),n(804,"h4",34)(805,"code",5),e(806,"PoSearchAiLiterals"),t()(),n(807,"div",2)(808,"p"),e(809,"Interface para defini\xE7\xE3o das literais usadas no "),n(810,"code"),e(811,"po-search-ai"),t(),e(812,"."),t()(),n(813,"h4",14),e(814,"Propriedades"),t(),n(815,"table",15)(816,"tr",16)(817,"th",17),e(818,"Nome"),t(),n(819,"th",17),e(820,"Tipo"),t(),n(821,"th",17),e(822,"Descri\xE7\xE3o"),t()(),n(823,"tr",18)(824,"td",19)(825,"div",26)(826,"span",27),e(827," clean"),r(828,"br"),t()()(),n(829,"td",22)(830,"code",31),e(831,"string"),t()(),n(832,"td",25)(833,"em")(834,"strong"),e(835,"(opcional)"),t()(),n(836,"p"),e(837,"Texto de acessibilidade do bot\xE3o de limpar o campo."),t()()(),n(838,"tr",18)(839,"td",19)(840,"div",26)(841,"span",27),e(842," errorMessage"),r(843,"br"),t()()(),n(844,"td",22)(845,"code",31),e(846,"string"),t()(),n(847,"td",25)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),n(851,"p"),e(852,"Mensagem exibida quando a busca com IA falha."),t()()()(),n(853,"h4",34)(854,"code",5),e(855,"PoSearchAiRequest"),t()(),n(856,"div",2)(857,"p"),e(858,"Interface que define o payload enviado ao endpoint de IA configurado via "),n(859,"code"),e(860,"p-url"),t(),e(861,"."),t(),n(862,"p"),e(863,"O componente \xE9 "),n(864,"strong"),e(865,"agn\xF3stico ao provedor de IA"),t(),e(866,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),n(867,"code"),e(868,"PoSearchAiResponse"),t(),e(869,"."),t()(),n(870,"h4",14),e(871,"Propriedades"),t(),n(872,"table",15)(873,"tr",16)(874,"th",17),e(875,"Nome"),t(),n(876,"th",17),e(877,"Tipo"),t(),n(878,"th",17),e(879,"Descri\xE7\xE3o"),t()(),n(880,"tr",18)(881,"td",19)(882,"div",26)(883,"span",27),e(884," columns"),r(885,"br"),t()()(),n(886,"td",22)(887,"code",28),e(888,"Array<PoSearchAiColumn>"),t()(),n(889,"td",25)(890,"p"),e(891,"Metadados dos campos dispon\xEDveis para a busca (ver "),n(892,"code"),e(893,"PoSearchAiColumn"),t(),e(894,")."),t()()(),n(895,"tr",18)(896,"td",19)(897,"div",26)(898,"span",27),e(899," query"),r(900,"br"),t()()(),n(901,"td",22)(902,"code",31),e(903,"string"),t()(),n(904,"td",25)(905,"p"),e(906,"Texto em linguagem natural digitado pelo usu\xE1rio."),t()()()(),n(907,"h4",34)(908,"code",5),e(909,"PoSearchAiResponse"),t()(),n(910,"div",2)(911,"p"),e(912,"Interface que define a resposta esperada do endpoint de IA configurado via "),n(913,"code"),e(914,"p-url"),t(),e(915,"."),t()(),n(916,"h4",14),e(917,"Propriedades"),t(),n(918,"table",15)(919,"tr",16)(920,"th",17),e(921,"Nome"),t(),n(922,"th",17),e(923,"Tipo"),t(),n(924,"th",17),e(925,"Descri\xE7\xE3o"),t()(),n(926,"tr",18)(927,"td",19)(928,"div",26)(929,"span",27),e(930," confidence"),r(931,"br"),t()()(),n(932,"td",22)(933,"code",30),e(934,"number"),t()(),n(935,"td",25)(936,"em")(937,"strong"),e(938,"(opcional)"),t()(),n(939,"p"),e(940,"N\xEDvel de confian\xE7a da interpreta\xE7\xE3o da IA, em um intervalo de "),n(941,"code"),e(942,"0.0"),t(),e(943," a "),n(944,"code"),e(945,"1.0"),t(),e(946,"."),t(),n(947,"p"),e(948,"Utilizado em conjunto com "),n(949,"code"),e(950,"p-min-confidence"),t(),e(951," para decidir se o resultado \xE9 confi\xE1vel."),t()()(),n(952,"tr",18)(953,"td",19)(954,"div",26)(955,"span",27),e(956," data"),r(957,"br"),t()()(),n(958,"td",22)(959,"code",35),e(960,"Record<string, any>"),t()(),n(961,"td",25)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),n(965,"p"),e(966,"Payload gen\xE9rico da resposta da IA (mensagem de chat, a\xE7\xF5es, dados customizados, etc.)."),t(),n(967,"p"),e(968,"Utilizado quando "),n(969,"code"),e(970,"type"),t(),e(971," \xE9 "),n(972,"code"),e(973,"'chat'"),t(),e(974," ou "),n(975,"code"),e(976,"'custom'"),t(),e(977,"."),t()()(),n(978,"tr",18)(979,"td",19)(980,"div",26)(981,"span",27),e(982," description"),r(983,"br"),t()()(),n(984,"td",22)(985,"code",31),e(986,"string"),t()(),n(987,"td",25)(988,"em")(989,"strong"),e(990,"(opcional)"),t()(),n(991,"p"),e(992,"Descri\xE7\xE3o leg\xEDvel, em linguagem natural, da resposta."),t()()(),n(993,"tr",18)(994,"td",19)(995,"div",26)(996,"span",27),e(997," filter"),r(998,"br"),t()()(),n(999,"td",22)(1e3,"code",31),e(1001,"string"),t()(),n(1002,"td",25)(1003,"em")(1004,"strong"),e(1005,"(opcional)"),t()(),n(1006,"p"),e(1007,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),n(1008,"code"),e(1009,"age gt 30 and city eq 'S\xE3o Paulo'"),t(),e(1010,")."),t(),n(1011,"p"),e(1012,"Utilizado quando "),n(1013,"code"),e(1014,"type"),t(),e(1015," \xE9 "),n(1016,"code"),e(1017,"'filter'"),t(),e(1018,"."),t()()(),n(1019,"tr",18)(1020,"td",19)(1021,"div",26)(1022,"span",27),e(1023," type"),r(1024,"br"),t()()(),n(1025,"td",22)(1026,"code",36),e(1027,"PoSearchAiResponseType"),t()(),n(1028,"td",25)(1029,"em")(1030,"strong"),e(1031,"(opcional)"),t()(),n(1032,"p"),e(1033,"Tipo da resposta retornada pela IA."),t(),n(1034,"p"),e(1035,"Quando omitido, o componente infere "),n(1036,"code"),e(1037,"'filter'"),t(),e(1038," se "),n(1039,"code"),e(1040,"filter"),t(),e(1041,` estiver presente,
caso contr\xE1rio assume `),n(1042,"code"),e(1043,"'custom'"),t(),e(1044,"."),t()()()(),n(1045,"h4",34)(1046,"code",5),e(1047,"PoSearchAiResult"),t()(),n(1048,"div",2)(1049,"p"),e(1050,"Interface que define o objeto emitido pelos eventos "),n(1051,"code"),e(1052,"p-result"),t(),e(1053," e "),n(1054,"code"),e(1055,"p-low-confidence"),t(),e(1056,"."),t()(),n(1057,"h4",14),e(1058,"Propriedades"),t(),n(1059,"table",15)(1060,"tr",16)(1061,"th",17),e(1062,"Nome"),t(),n(1063,"th",17),e(1064,"Tipo"),t(),n(1065,"th",17),e(1066,"Descri\xE7\xE3o"),t()(),n(1067,"tr",18)(1068,"td",19)(1069,"div",26)(1070,"span",27),e(1071," confidence"),r(1072,"br"),t()()(),n(1073,"td",22)(1074,"code",30),e(1075,"number"),t()(),n(1076,"td",25)(1077,"em")(1078,"strong"),e(1079,"(opcional)"),t()(),n(1080,"p"),e(1081,"N\xEDvel de confian\xE7a da interpreta\xE7\xE3o ("),n(1082,"code"),e(1083,"0.0"),t(),e(1084," a "),n(1085,"code"),e(1086,"1.0"),t(),e(1087,")."),t()()(),n(1088,"tr",18)(1089,"td",19)(1090,"div",26)(1091,"span",27),e(1092," data"),r(1093,"br"),t()()(),n(1094,"td",22)(1095,"code",35),e(1096,"Record<string, any>"),t()(),n(1097,"td",25)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),n(1101,"p"),e(1102,"Payload gen\xE9rico da resposta (chat, a\xE7\xF5es, dados customizados, etc.)."),t()()(),n(1103,"tr",18)(1104,"td",19)(1105,"div",26)(1106,"span",27),e(1107," description"),r(1108,"br"),t()()(),n(1109,"td",22)(1110,"code",31),e(1111,"string"),t()(),n(1112,"td",25)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),n(1116,"p"),e(1117,"Descri\xE7\xE3o leg\xEDvel da resposta."),t()()(),n(1118,"tr",18)(1119,"td",19)(1120,"div",26)(1121,"span",27),e(1122," filter"),r(1123,"br"),t()()(),n(1124,"td",22)(1125,"code",31),e(1126,"string"),t()(),n(1127,"td",25)(1128,"em")(1129,"strong"),e(1130,"(opcional)"),t()(),n(1131,"p"),e(1132,"Filtro retornado pela IA (ex: filtro OData). Presente quando "),n(1133,"code"),e(1134,"type"),t(),e(1135," \xE9 "),n(1136,"code"),e(1137,"'filter'"),t(),e(1138,"."),t()()(),n(1139,"tr",18)(1140,"td",19)(1141,"div",26)(1142,"span",27),e(1143," query"),r(1144,"br"),t()()(),n(1145,"td",22)(1146,"code",31),e(1147,"string"),t()(),n(1148,"td",25)(1149,"p"),e(1150,"Texto original digitado pelo usu\xE1rio."),t()()(),n(1151,"tr",18)(1152,"td",19)(1153,"div",26)(1154,"span",27),e(1155," type"),r(1156,"br"),t()()(),n(1157,"td",22)(1158,"code",36),e(1159,"PoSearchAiResponseType"),t()(),n(1160,"td",25)(1161,"p"),e(1162,"Tipo da resposta retornada pela IA."),t()()()(),n(1163,"h4",34)(1164,"code",5),e(1165,"PoSearchAiError"),t()(),n(1166,"div",2)(1167,"p"),e(1168,"Interface que define o objeto emitido pelo evento "),n(1169,"code"),e(1170,"p-error"),t(),e(1171,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),t()(),n(1172,"h4",14),e(1173,"Propriedades"),t(),n(1174,"table",15)(1175,"tr",16)(1176,"th",17),e(1177,"Nome"),t(),n(1178,"th",17),e(1179,"Tipo"),t(),n(1180,"th",17),e(1181,"Descri\xE7\xE3o"),t()(),n(1182,"tr",18)(1183,"td",19)(1184,"div",26)(1185,"span",27),e(1186," message"),r(1187,"br"),t()()(),n(1188,"td",22)(1189,"code",31),e(1190,"string"),t()(),n(1191,"td",25)(1192,"p"),e(1193,"Mensagem de erro."),t()()(),n(1194,"tr",18)(1195,"td",19)(1196,"div",26)(1197,"span",27),e(1198," query"),r(1199,"br"),t()()(),n(1200,"td",22)(1201,"code",31),e(1202,"string"),t()(),n(1203,"td",25)(1204,"p"),e(1205,"Texto original digitado pelo usu\xE1rio."),t()()(),n(1206,"tr",18)(1207,"td",19)(1208,"div",26)(1209,"span",27),e(1210," statusCode"),r(1211,"br"),t()()(),n(1212,"td",22)(1213,"code",30),e(1214,"number"),t()(),n(1215,"td",25)(1216,"p"),e(1217,"C\xF3digo HTTP do erro (ex: "),n(1218,"code"),e(1219,"500"),t(),e(1220,", "),n(1221,"code"),e(1222,"408"),t(),e(1223," para timeout)."),t()()()(),n(1224,"h3"),e(1225,"Enums"),t(),n(1226,"h4",4)(1227,"code",5),e(1228,"PoSearchAiResponseType"),t()(),n(1229,"div",2)(1230,"p"),e(1231,"Enum que define os tipos de resposta suportados pelo endpoint de IA."),t()(),n(1232,"h4",14),e(1233,"Propriedades"),t(),n(1234,"table",15)(1235,"tr",16)(1236,"th",17),e(1237,"Nome"),t(),n(1238,"th",17),e(1239,"Descri\xE7\xE3o"),t()(),n(1240,"tr",18)(1241,"td",19)(1242,"div",26)(1243,"span",27),e(1244," filter"),r(1245,"br"),t()()(),n(1246,"td",25)(1247,"p"),e(1248,"Resposta contendo um filtro estruturado (ex: OData)."),t()()(),n(1249,"tr",18)(1250,"td",19)(1251,"div",26)(1252,"span",27),e(1253," chat"),r(1254,"br"),t()()(),n(1255,"td",25)(1256,"p"),e(1257,"Resposta conversacional em linguagem natural."),t()()(),n(1258,"tr",18)(1259,"td",19)(1260,"div",26)(1261,"span",27),e(1262," custom"),r(1263,"br"),t()()(),n(1264,"td",25)(1265,"p"),e(1266,"Payload gen\xE9rico definido pelo consumidor."),t()()()()())},dependencies:[P],encapsulation:2})}return o})();var _e=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(L(te),L(ne))};static \u0275cmp=E({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Search Ai",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-search-ai-doc"),t(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-search-ai-basic-view")(6,"sample-po-search-ai-labs-view")(7,"sample-po-search-ai-result-view")(8,"sample-po-search-ai-filter-view"),t()()()),l&2&&(c("p-actions",i.actions),p(2),c("p-active",i.activeTab==="doc"),p(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,y,_,he,ge,fe,Ce,ye],encapsulation:2})}return o})();var He=[{path:"",component:_e}],Pe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=O({type:o});static \u0275inj=R({imports:[z.forChild(He),z]})}return o})();var bt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=O({type:o});static \u0275inj=R({imports:[Ee,Pe]})}return o})();export{bt as DocPoSearchAiModule};
