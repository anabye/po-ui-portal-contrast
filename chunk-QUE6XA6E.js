import{o as y,p as me}from"./chunk-SZYRYMUF.js";import{$ as te,Ab as v,Bb as C,Ga as H,La as oe,Ra as ae,S as Y,U as $,W as ee,Wa as le,a as X,ia as ne,la as _,na as ie,nb as re,w as B}from"./chunk-EE3MJEPH.js";import{$a as K,Fa as c,Ga as n,Ha as t,Ia as a,J as O,M as A,Nb as M,Nc as T,Oc as V,P as E,Pa as W,Pc as I,Q as h,Qa as f,Qc as L,Rc as F,Wa as G,Xa as U,Ya as Q,cb as k,db as e,dd as J,fb as D,fd as Z,hb as u,hd as R,ia as m,ib as g,jb as S,na as N,pa as b,qa as q,sb as w}from"./chunk-A2WYYMKN.js";import"./chunk-NCEQPEJE.js";var pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&a(0,"po-datetimepicker",0)},dependencies:[_],encapsulation:2})}return l})();var Ce=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datetimepicker Basic"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datetimepicker-basic"),t(),a(23,"hr")),r&2&&(m(5),k("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,Ce,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,pe],encapsulation:2})}return l})();var ce=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:!1,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=W();n(0,"po-datetimepicker",1),S("ngModelChange",function(o){return E(d),g(i.datetimepicker,o)||(i.datetimepicker=o),h(o)}),f("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),a(1,"po-divider"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(o){return E(d),g(i.label,o)||(i.label=o),h(o)}),t(),n(9,"po-input",6),S("ngModelChange",function(o){return E(d),g(i.help,o)||(i.help=o),h(o)}),t(),n(10,"po-input",7),S("ngModelChange",function(o){return E(d),g(i.helperText,o)||(i.helperText=o),h(o)}),t(),n(11,"po-input",8),S("ngModelChange",function(o){return E(d),g(i.placeholder,o)||(i.placeholder=o),h(o)}),t(),n(12,"po-input",9),S("ngModelChange",function(o){return E(d),g(i.errorPattern,o)||(i.errorPattern=o),h(o)}),t(),n(13,"po-number",10),S("ngModelChange",function(o){return E(d),g(i.minuteInterval,o)||(i.minuteInterval=o),h(o)}),t(),n(14,"po-number",11),S("ngModelChange",function(o){return E(d),g(i.secondInterval,o)||(i.secondInterval=o),h(o)}),t(),n(15,"po-timepicker",12),S("ngModelChange",function(o){return E(d),g(i.minTime,o)||(i.minTime=o),h(o)}),t(),n(16,"po-timepicker",13),S("ngModelChange",function(o){return E(d),g(i.maxTime,o)||(i.maxTime=o),h(o)}),t(),n(17,"po-datepicker",14),S("ngModelChange",function(o){return E(d),g(i.minDate,o)||(i.minDate=o),h(o)}),t(),n(18,"po-datepicker",15),S("ngModelChange",function(o){return E(d),g(i.maxDate,o)||(i.maxDate=o),h(o)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(o){return E(d),g(i.properties,o)||(i.properties=o),h(o)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(o){return E(d),g(i.locale,o)||(i.locale=o),h(o)}),t(),n(21,"po-radio-group",18),S("ngModelChange",function(o){return E(d),g(i.formatDate,o)||(i.formatDate=o),h(o)}),t(),n(22,"po-radio-group",19),S("ngModelChange",function(o){return E(d),g(i.formatTime,o)||(i.formatTime=o),h(o)}),t(),n(23,"po-radio-group",20),S("ngModelChange",function(o){return E(d),g(i.size,o)||(i.size=o),h(o)}),t(),n(24,"div",2)(25,"po-button",21),f("p-click",function(){return i.restore()}),t()()()}r&2&&(u("ngModel",i.datetimepicker),c("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),m(3),c("p-value",i.datetimepicker),m(),c("p-value",i.event),m(4),u("ngModel",i.label),m(),u("ngModel",i.help),m(),u("ngModel",i.helperText),m(),u("ngModel",i.placeholder),m(),u("ngModel",i.errorPattern),m(),u("ngModel",i.minuteInterval),m(),u("ngModel",i.secondInterval),m(),u("ngModel",i.minTime),m(),u("ngModel",i.maxTime),m(),u("ngModel",i.minDate),c("p-max-date",i.maxDate),m(),u("ngModel",i.maxDate),c("p-min-date",i.minDate),m(),u("ngModel",i.properties),c("p-options",i.propertiesOptions),m(),u("ngModel",i.locale),c("p-options",i.localeOptions),m(),u("ngModel",i.formatDate),c("p-options",i.formatDateOptions),m(),u("ngModel",i.formatTime),c("p-options",i.formatTimeOptions),m(),u("ngModel",i.size),c("p-options",i.sizeOptions))},dependencies:[F,T,V,L,I,B,X,Y,ee,_,H,oe,$,ie,le],encapsulation:2})}return l})();var De=l=>({"docs-sample-code-tabs":l}),ue=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datetimepicker Labs"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-datetimepicker
  class="po-sm-12"
  name="datetimepicker"
  [(ngModel)]="datetimepicker"
  [p-clean]="properties.includes('clean')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-error-pattern]="errorPattern"
  [p-format-date]="formatDate"
  [p-format-time]="formatTime"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-max-date]="maxDate"
  [p-max-time]="maxTime"
  [p-min-date]="minDate"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-second-interval]="secondInterval"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-datetimepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datetimepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
  </po-number>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min Date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max Date" [p-min-date]="minDate">
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="formatDate"
    [(ngModel)]="formatDate"
    p-columns="4"
    p-label="Format Date"
    [p-options]="formatDateOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="formatTime"
    [(ngModel)]="formatTime"
    p-columns="4"
    p-label="Format Time"
    [p-options]="formatTimeOptions"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-labs',
  templateUrl: './sample-po-datetimepicker-labs.component.html',
  standalone: false
})
export class SamplePoDatetimepickerLabsComponent implements OnInit {
  datetimepicker: string;
  errorPattern: string;
  event: string;
  formatDate: string;
  formatTime: string;
  help: string;
  helperText: string;
  label: string;
  locale: string;
  maxDate: string | Date;
  maxTime: string;
  minDate: string | Date;
  minTime: string;
  minuteInterval: number;
  placeholder: string;
  properties: Array<string>;
  secondInterval: number;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatDateOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly formatTimeOptions: Array<PoRadioGroupOption> = [
    { label: '24h', value: '24' },
    { label: '12h (AM/PM)', value: '12' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.datetimepicker = undefined;
    this.errorPattern = undefined;
    this.event = undefined;
    this.formatDate = undefined;
    this.formatTime = undefined;
    this.help = undefined;
    this.helperText = '';
    this.label = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.maxTime = undefined;
    this.minDate = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.secondInterval = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datetimepicker-labs"),t(),a(23,"hr")),r&2&&(m(5),k("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,De,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ce],encapsulation:2})}return l})();var ge=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:!1,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(n(0,"po-datetimepicker",0),S("ngModelChange",function(s){return g(i.datetime,s)||(i.datetime=s),s}),t()),r&2&&u("ngModel",i.datetime)},dependencies:[T,L,_],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datetimepicker - 12h with Seconds"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),t(),n(13,"pre",7),e(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datetimepicker-12h-seconds"),t(),a(23,"hr")),r&2&&(m(5),k("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,_e,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ge],encapsulation:2})}return l})();var Te=["formScheduling"],Ee=(()=>{class l{poDialog=A(te);poNotification=A(ne);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning("Agendamento cancelado.")}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&G(Te,7),r&2){let d;U(d=Q())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=W();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),S("ngModelChange",function(o){return E(d),g(i.patient,o)||(i.patient=o),h(o)}),t(),n(4,"po-input",3),S("ngModelChange",function(o){return E(d),g(i.doctor,o)||(i.doctor=o),h(o)}),t()(),n(5,"div",1)(6,"po-select",4),S("ngModelChange",function(o){return E(d),g(i.specialty,o)||(i.specialty=o),h(o)}),t(),n(7,"po-datetimepicker",5),S("ngModelChange",function(o){return E(d),g(i.appointment,o)||(i.appointment=o),h(o)}),t()(),n(8,"div",1)(9,"po-button",6),f("p-click",function(){return i.confirm()}),t()()()}if(r&2){let d=K(1);m(3),u("ngModel",i.patient),m(),u("ngModel",i.doctor),m(2),u("ngModel",i.specialty),c("p-options",i.specialtyOptions),m(),u("ngModel",i.appointment),m(2),c("p-disabled",d.invalid)}},dependencies:[F,T,V,L,I,B,_,H,ae],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datetimepicker - Scheduling"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),t(),n(13,"pre",7),e(14,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="patient"
      [(ngModel)]="patient"
      p-label="Paciente"
      p-placeholder="Nome do paciente"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="doctor"
      [(ngModel)]="doctor"
      p-label="M\xE9dico"
      p-placeholder="Nome do m\xE9dico"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="specialty"
      [(ngModel)]="specialty"
      p-label="Especialidade"
      p-required
      [p-options]="specialtyOptions"
    >
    </po-select>

    <po-datetimepicker
      class="po-md-6"
      name="appointment"
      [(ngModel)]="appointment"
      p-clean
      p-label="Data e Hora da Consulta"
      p-min-time="08:00"
      p-max-time="18:00"
      p-minute-interval="15"
      p-required
    >
    </po-datetimepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="confirmButton"
      p-label="Agendar Consulta"
      [p-disabled]="formScheduling.invalid"
      (p-click)="confirm()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),t(),n(19,"pre",9),e(20,`import { UntypedFormControl } from '@angular/forms';
import { Component, ViewChild, inject } from '@angular/core';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-scheduling',
  templateUrl: './sample-po-datetimepicker-scheduling.component.html',
  standalone: false
})
export class SamplePoDatetimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  appointment: string;
  doctor: string;
  patient: string;
  specialty: string;

  public readonly specialtyOptions: Array<PoSelectOption> = [
    { value: 'general', label: 'Cl\xEDnico Geral' },
    { value: 'cardiology', label: 'Cardiologia' },
    { value: 'dermatology', label: 'Dermatologia' },
    { value: 'orthopedics', label: 'Ortopedia' },
    { value: 'neurology', label: 'Neurologia' }
  ];

  confirm() {
    const dateFormatted = this.appointment ? this.appointment.slice(0, 16) : '';

    const message =
      \`Confirmar agendamento de consulta?\\n\\n\` +
      \`Paciente: \${this.patient}\\n\` +
      \`M\xE9dico: \${this.doctor}\\n\` +
      \`Especialidade: \${this.getSpecialtyLabel()}\\n\` +
      \`Data/Hora: \${dateFormatted}\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Consulta agendada com sucesso!');
        this.formScheduling.reset();
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getSpecialtyLabel(): string {
    const option = this.specialtyOptions.find(o => o.value === this.specialty);
    return option ? option.label : '';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datetimepicker-scheduling"),t(),a(23,"hr")),r&2&&(m(5),k("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,Oe,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,Ee],encapsulation:2})}return l})();var be=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:!1,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload, po-url e po-search-ai.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDatetimepickerComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-datetimepicker"),t(),e(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),t(),n(27,"p"),e(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),n(29,"code"),e(30,"p-format-date"),t(),e(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),n(32,"code"),e(33,"p-format-time"),t(),e(34,"."),t(),n(35,"p"),e(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),n(37,"code"),e(38,"p-locale"),t(),e(39,"."),t(),n(40,"p"),e(41,"O componente aceita os seguintes formatos de entrada:"),t(),n(42,"ul")(43,"li"),e(44,"ISO 8601 com timezone: "),n(45,"code"),e(46,"'2026-05-12T14:30:00-03:00'"),t()(),n(47,"li"),e(48,"ISO 8601 UTC: "),n(49,"code"),e(50,"'2026-05-12T14:30:00Z'"),t()(),n(51,"li"),e(52,"ISO 8601 sem timezone: "),n(53,"code"),e(54,"'2026-05-12T14:30:00'"),t()(),n(55,"li"),e(56,"ISO 8601 apenas data: "),n(57,"code"),e(58,"'2026-05-12'"),t()(),n(59,"li"),e(60,"JavaScript Date Object: "),n(61,"code"),e(62,"new Date(2026, 4, 12, 14, 30)"),t()()(),n(63,"p"),e(64,"O formato de sa\xEDda do "),n(65,"em"),e(66,"model"),t(),e(67," \xE9 sempre ISO 8601 com timezone local: "),n(68,"code"),e(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),t(),e(70,`
(ou `),n(71,"code"),e(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),t(),e(73," quando "),n(74,"code"),e(75,"p-show-seconds"),t(),e(76," est\xE1 ativo)."),t(),n(77,"p")(78,"strong"),e(79,"Importante:"),t()(),n(80,"ul")(81,"li"),e(82,"O valor emitido no model inclui o offset do timezone local do navegador."),t(),n(83,"li"),e(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),t(),n(85,"li"),e(86,"Caso a data/hora esteja inv\xE1lida, o "),n(87,"code"),e(88,"model"),t(),e(89," receber\xE1 a mensagem de erro localizada."),t(),n(90,"li"),e(91,"Caso o "),n(92,"code"),e(93,"input"),t(),e(94," esteja passando um "),n(95,"code"),e(96,"[(ngModel)]"),t(),e(97,", mas n\xE3o tenha um "),n(98,"code"),e(99,"name"),t(),e(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(101,"code"),e(102,'[ngModelOptions]="{standalone: true}"'),t(),e(103,")."),t()(),n(104,"p"),e(105,"Exemplo:"),t(),n(106,"pre")(107,"code"),e(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),t()(),n(109,"blockquote")(110,"p"),e(111,"N\xE3o esque\xE7a de importar o "),n(112,"code"),e(113,"FormsModule"),t(),e(114," em seu m\xF3dulo, tal como para utilizar o "),n(115,"code"),e(116,"input default"),t(),e(117,"."),t()(),n(118,"h4"),e(119,"Tokens customiz\xE1veis"),t(),n(120,"p"),e(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(122,"br"),e(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(124,"code"),e(125,".po-input"),t()(),n(126,"blockquote")(127,"p"),e(128,"Para maiores informa\xE7\xF5es, acesse o guia "),n(129,"a",6),e(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(131,"."),t()(),n(132,"table")(133,"thead")(134,"tr")(135,"th"),e(136,"Propriedade"),t(),n(137,"th"),e(138,"Descri\xE7\xE3o"),t(),n(139,"th"),e(140,"Valor Padr\xE3o"),t()()(),n(141,"tbody")(142,"tr")(143,"td")(144,"strong"),e(145,"Default Values"),t()(),a(146,"td")(147,"td"),t(),n(148,"tr")(149,"td")(150,"code"),e(151,"--font-family"),t()(),n(152,"td"),e(153,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(154,"td")(155,"code"),e(156,"var(--font-family-theme)"),t()()(),n(157,"tr")(158,"td")(159,"code"),e(160,"--font-size"),t()(),n(161,"td"),e(162,"Tamanho da fonte"),t(),n(163,"td")(164,"code"),e(165,"var(--font-size-default)"),t()()(),n(166,"tr")(167,"td")(168,"code"),e(169,"--text-color-placeholder"),t(),e(170," \xA0"),t(),n(171,"td"),e(172,"Cor principal do texto do placeholder"),t(),n(173,"td")(174,"code"),e(175,"var(--color-neutral-light-30)"),t()()(),n(176,"tr")(177,"td")(178,"code"),e(179,"--color"),t()(),n(180,"td"),e(181,"Cor principal do datetimepicker"),t(),n(182,"td")(183,"code"),e(184,"var(--color-neutral-dark-70)"),t()()(),n(185,"tr")(186,"td")(187,"code"),e(188,"--background"),t()(),n(189,"td"),e(190,"Cor de background"),t(),n(191,"td")(192,"code"),e(193,"var(--color-neutral-light-05)"),t()()(),n(194,"tr")(195,"td")(196,"code"),e(197,"--padding"),t()(),n(198,"td"),e(199,"Preenchimento"),t(),n(200,"td")(201,"code"),e(202,"0 0.5rem"),t()()(),n(203,"tr")(204,"td")(205,"code"),e(206,"--text-color"),t()(),n(207,"td"),e(208,"Cor do texto"),t(),n(209,"td")(210,"code"),e(211,"var(--color-neutral-dark-90)"),t()()(),n(212,"tr")(213,"td")(214,"code"),e(215,"--field-container-title-justify"),t()(),n(216,"td"),e(217,"Alinhamento horizontal do t\xEDtulo ("),n(218,"code"),e(219,"justify-content"),t(),e(220,")"),t(),n(221,"td")(222,"code"),e(223,"space-between"),t()()(),n(224,"tr")(225,"td")(226,"code"),e(227,"--field-container-title-flex"),t()(),n(228,"td"),e(229,"Flex do t\xEDtulo ("),n(230,"code"),e(231,"flex"),t(),e(232,")"),t(),n(233,"td")(234,"code"),e(235,"1 auto"),t()()(),n(236,"tr")(237,"td")(238,"strong"),e(239,"Hover"),t()(),a(240,"td")(241,"td"),t(),n(242,"tr")(243,"td")(244,"code"),e(245,"--color-hover"),t()(),n(246,"td"),e(247,"Cor principal no estado hover"),t(),n(248,"td")(249,"code"),e(250,"var(--color-brand-01-dark)"),t()()(),n(251,"tr")(252,"td")(253,"code"),e(254,"--background-hover"),t()(),n(255,"td"),e(256,"Cor de background no estado hover"),t(),n(257,"td")(258,"code"),e(259,"var(--color-brand-01-lightest)"),t()()(),n(260,"tr")(261,"td")(262,"strong"),e(263,"Focused"),t()(),a(264,"td")(265,"td"),t(),n(266,"tr")(267,"td")(268,"code"),e(269,"--color-focused"),t()(),n(270,"td"),e(271,"Cor principal no estado de focus"),t(),n(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),n(275,"tr")(276,"td")(277,"code"),e(278,"--outline-color-focused"),t()(),n(279,"td"),e(280,"Cor do outline do estado de focus"),t(),n(281,"td")(282,"code"),e(283,"var(--color-action-focus)"),t()()(),n(284,"tr")(285,"td")(286,"strong"),e(287,"Disabled"),t()(),a(288,"td")(289,"td"),t(),n(290,"tr")(291,"td")(292,"code"),e(293,"--color-disabled"),t()(),n(294,"td"),e(295,"Cor principal no estado disabled"),t(),n(296,"td")(297,"code"),e(298,"var(--color-neutral-light-30)"),t()()(),n(299,"tr")(300,"td")(301,"code"),e(302,"--background-disabled"),t()(),n(303,"td"),e(304,"Cor de background no estado disabled \xA0"),t(),n(305,"td")(306,"code"),e(307,"var(--color-neutral-light-20)"),t()()(),n(308,"tr")(309,"td")(310,"code"),e(311,"--text-color-disabled"),t()(),n(312,"td"),e(313,"Cor do texto no estado disabled"),t(),n(314,"td")(315,"code"),e(316,"var(--color-neutral-dark-70)"),t()()()()()(),n(317,"div",7)(318,"h4",8),e(319,"Seletor"),t(),n(320,"pre",9),e(321,`<po-datetimepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean | string"
    p-compact-label="boolean"
    p-format-date="string"
    p-disabled="boolean | string"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean | string"
    p-locale="string"
    p-max-date="string | Date"
    p-max-time="string"
    p-min-date="string | Date"
    p-min-time="string"
    p-minute-interval="number"
    name="string"
    p-no-autocomplete="boolean | string"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean | string"
    p-required="boolean | string"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string"
    p-format-time="PoTimerFormat" >
</po-datetimepicker>
`),t()(),n(322,"h4",10),e(323,"Propriedades"),t(),n(324,"table",11)(325,"tr",12)(326,"th",13),e(327,"Nome"),t(),n(328,"th",13),e(329,"Tipo"),t(),n(330,"th",13),e(331,"Padr\xE3o"),t(),n(332,"th",13),e(333,"Descri\xE7\xE3o"),t()(),n(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),e(338," p-append-in-body"),a(339,"br"),t()()(),n(340,"td",18)(341,"code",19),e(342,"boolean"),t()(),n(343,"td",20)(344,"p")(345,"code"),e(346,"false"),t()()(),n(347,"td",21)(348,"em")(349,"strong"),e(350,"(opcional)"),t()(),n(351,"p"),e(352,"Define que o "),n(353,"code"),e(354,"calendar"),t(),e(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),t()()(),n(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),e(360," p-auto-focus"),a(361,"br"),t()()(),n(362,"td",18)(363,"code",19),e(364,"boolean"),t()(),n(365,"td",20)(366,"p")(367,"code"),e(368,"false"),t()()(),n(369,"td",21)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Aplica foco no elemento ao ser iniciado."),t()()(),n(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),e(379," p-clean"),a(380,"br"),t()()(),n(381,"td",18)(382,"code",19),e(383,"boolean "),t(),n(384,"code",22),e(385," string"),t()(),n(386,"td",20)(387,"p")(388,"code"),e(389,"false"),t()()(),n(390,"td",21)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),n(394,"p"),e(395,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),n(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),e(400," p-compact-label"),a(401,"br"),t()()(),n(402,"td",18)(403,"code",19),e(404,"boolean"),t()(),n(405,"td",20)(406,"p")(407,"code"),e(408,"false"),t()()(),n(409,"td",21)(410,"em")(411,"strong"),e(412,"(opcional)"),t()(),n(413,"p"),e(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t()()(),n(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),e(419," p-format-date"),a(420,"br"),t()()(),n(421,"td",18)(422,"code",22),e(423,"string"),t()(),n(424,"td",20)(425,"p"),e(426,"Determinado pelo locale"),t()(),n(427,"td",21)(428,"em")(429,"strong"),e(430,"(opcional)"),t()(),n(431,"p"),e(432,"Define o formato de exibi\xE7\xE3o da data."),t(),n(433,"p"),e(434,"Valores v\xE1lidos:"),t(),n(435,"ul")(436,"li")(437,"code"),e(438,"dd/mm/yyyy"),t()(),n(439,"li")(440,"code"),e(441,"mm/dd/yyyy"),t()(),n(442,"li")(443,"code"),e(444,"yyyy/mm/dd"),t()()(),n(445,"p"),e(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),t(),n(447,"ul")(448,"li")(449,"code"),e(450,"en"),t(),e(451," \u2192 "),n(452,"code"),e(453,"mm/dd/yyyy"),t()(),n(454,"li")(455,"code"),e(456,"pt"),t(),e(457,", "),n(458,"code"),e(459,"es"),t(),e(460,", "),n(461,"code"),e(462,"ru"),t(),e(463," \u2192 "),n(464,"code"),e(465,"dd/mm/yyyy"),t()()()()(),n(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),e(470," p-disabled"),a(471,"br"),t()()(),n(472,"td",18)(473,"code",19),e(474,"boolean "),t(),n(475,"code",22),e(476," string"),t()(),n(477,"td",20)(478,"p")(479,"code"),e(480,"false"),t()()(),n(481,"td",21)(482,"em")(483,"strong"),e(484,"(opcional)"),t()(),n(485,"p"),e(486,"Desabilita o campo."),t()()(),n(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),e(491," p-error-limit"),a(492,"br"),t()()(),n(493,"td",18)(494,"code",19),e(495,"boolean"),t()(),n(496,"td",20)(497,"p")(498,"code"),e(499,"false"),t()()(),n(500,"td",21)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t()()(),n(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),e(510," p-error-pattern"),a(511,"br"),t()()(),n(512,"td",18)(513,"code",22),e(514,"string"),t()(),n(515,"td",20),e(516,"-"),t(),n(517,"td",21)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),n(521,"p"),e(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),t()()(),n(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),e(527," p-help"),a(528,"br"),t()()(),n(529,"td",18)(530,"code",22),e(531,"string"),t()(),n(532,"td",20),e(533,"-"),t(),n(534,"td",21)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),n(538,"p"),e(539,"Texto de apoio do campo."),t()()(),n(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),e(544," (p-keydown)"),a(545,"br"),t()()(),n(546,"td",18)(547,"code",25),e(548,"EventEmitter"),t()(),n(549,"td",20),e(550,"-"),t(),n(551,"td",21)(552,"em")(553,"strong"),e(554,"(opcional)"),t()(),n(555,"p"),e(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),t()()(),n(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),e(561," p-label"),a(562,"br"),t()()(),n(563,"td",18)(564,"code",22),e(565,"string"),t()(),n(566,"td",20),e(567,"-"),t(),n(568,"td",21)(569,"em")(570,"strong"),e(571,"(opcional)"),t()(),n(572,"p"),e(573,"R\xF3tulo do campo."),t()()(),n(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),e(578," p-label-text-wrap"),a(579,"br"),t()()(),n(580,"td",18)(581,"code",19),e(582,"boolean"),t()(),n(583,"td",20)(584,"p")(585,"code"),e(586,"false"),t()()(),n(587,"td",21)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),n(591,"p"),e(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(593,"code"),e(594,"p-label"),t(),e(595,"."),t()()(),n(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),e(600," p-loading"),a(601,"br"),t()()(),n(602,"td",18)(603,"code",19),e(604,"boolean "),t(),n(605,"code",22),e(606," string"),t()(),n(607,"td",20)(608,"p")(609,"code"),e(610,"false"),t()()(),n(611,"td",21)(612,"em")(613,"strong"),e(614,"(opcional)"),t()(),n(615,"p"),e(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),t()()(),n(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),e(621," p-locale"),a(622,"br"),t()()(),n(623,"td",18)(624,"code",22),e(625,"string"),t()(),n(626,"td",20),e(627,"-"),t(),n(628,"td",21)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),n(632,"p"),e(633,"Idioma do componente."),t(),n(634,"blockquote")(635,"p"),e(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),n(637,"a",26)(638,"code"),e(639,"PoI18nService"),t()(),e(640," ou "),n(641,"em"),e(642,"browser"),t(),e(643,"."),t()()()(),n(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),e(648," p-max-date"),a(649,"br"),t()()(),n(650,"td",18)(651,"code",22),e(652,"string "),t(),n(653,"code",27),e(654," Date"),t()(),n(655,"td",20),e(656,"-"),t(),n(657,"td",21)(658,"em")(659,"strong"),e(660,"(opcional)"),t()(),n(661,"p"),e(662,"Define uma data m\xE1xima para o "),n(663,"code"),e(664,"po-datetimepicker"),t(),e(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),t(),n(666,"p"),e(667,"Aceita os formatos:"),t(),n(668,"ul")(669,"li")(670,"code"),e(671,"Date"),t(),e(672," object: "),n(673,"code"),e(674,"new Date(2026, 4, 31)"),t()(),n(675,"li"),e(676,"ISO string: "),n(677,"code"),e(678,"'2026-05-31'"),t()(),n(679,"li"),e(680,"ISO com hora: "),n(681,"code"),e(682,"'2026-05-31T23:59:59-03:00'"),t()()()()(),n(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),e(687," p-max-time"),a(688,"br"),t()()(),n(689,"td",18)(690,"code",22),e(691,"string"),t()(),n(692,"td",20),e(693,"-"),t(),n(694,"td",21)(695,"em")(696,"strong"),e(697,"(opcional)"),t()(),n(698,"p"),e(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),t(),n(700,"p"),e(701,"Formato aceito: "),n(702,"code"),e(703,"HH:mm"),t(),e(704," ou "),n(705,"code"),e(706,"HH:mm:ss"),t(),e(707,"."),t()()(),n(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),e(712," p-min-date"),a(713,"br"),t()()(),n(714,"td",18)(715,"code",22),e(716,"string "),t(),n(717,"code",27),e(718," Date"),t()(),n(719,"td",20),e(720,"-"),t(),n(721,"td",21)(722,"em")(723,"strong"),e(724,"(opcional)"),t()(),n(725,"p"),e(726,"Define uma data m\xEDnima para o "),n(727,"code"),e(728,"po-datetimepicker"),t(),e(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),t(),n(730,"p"),e(731,"Aceita os formatos:"),t(),n(732,"ul")(733,"li")(734,"code"),e(735,"Date"),t(),e(736," object: "),n(737,"code"),e(738,"new Date(2026, 0, 1)"),t()(),n(739,"li"),e(740,"ISO string: "),n(741,"code"),e(742,"'2026-01-01'"),t()(),n(743,"li"),e(744,"ISO com hora: "),n(745,"code"),e(746,"'2026-01-01T00:00:00-03:00'"),t()()()()(),n(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),e(751," p-min-time"),a(752,"br"),t()()(),n(753,"td",18)(754,"code",22),e(755,"string"),t()(),n(756,"td",20),e(757,"-"),t(),n(758,"td",21)(759,"em")(760,"strong"),e(761,"(opcional)"),t()(),n(762,"p"),e(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),t(),n(764,"p"),e(765,"Formato aceito: "),n(766,"code"),e(767,"HH:mm"),t(),e(768," ou "),n(769,"code"),e(770,"HH:mm:ss"),t(),e(771,"."),t()()(),n(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),e(776," p-minute-interval"),a(777,"br"),t()()(),n(778,"td",18)(779,"code",28),e(780,"number"),t()(),n(781,"td",20)(782,"p")(783,"code"),e(784,"5"),t()()(),n(785,"td",21)(786,"em")(787,"strong"),e(788,"(opcional)"),t()(),n(789,"p"),e(790,"Define o intervalo entre os minutos exibidos no painel do timer."),t()()(),n(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),e(795," name"),a(796,"br"),t()()(),n(797,"td",18)(798,"code",22),e(799,"string"),t()(),n(800,"td",20),e(801,"-"),t(),n(802,"td",21)(803,"em")(804,"strong"),e(805,"(opcional)"),t()(),n(806,"p"),e(807,"Nome do componente."),t()()(),n(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),e(812," p-no-autocomplete"),a(813,"br"),t()()(),n(814,"td",18)(815,"code",19),e(816,"boolean "),t(),n(817,"code",22),e(818," string"),t()(),n(819,"td",20)(820,"p")(821,"code"),e(822,"false"),t()()(),n(823,"td",21)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Define a propriedade nativa "),n(829,"code"),e(830,"autocomplete"),t(),e(831," do campo como "),n(832,"code"),e(833,"off"),t(),e(834,"."),t()()(),n(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),e(839," (p-blur)"),a(840,"br"),t()()(),n(841,"td",18)(842,"code",25),e(843,"EventEmitter"),t()(),n(844,"td",20),e(845,"-"),t(),n(846,"td",21)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),n(850,"p"),e(851,"Evento disparado ao sair do campo (blur)."),t()()(),n(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),e(856," (p-change)"),a(857,"br"),t()()(),n(858,"td",18)(859,"code",25),e(860,"EventEmitter"),t()(),n(861,"td",20),e(862,"-"),t(),n(863,"td",21)(864,"em")(865,"strong"),e(866,"(opcional)"),t()(),n(867,"p"),e(868,"Evento disparado ao alterar valor do campo."),t()()(),n(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),e(873," p-optional"),a(874,"br"),t()()(),n(875,"td",18)(876,"code",19),e(877,"boolean"),t()(),n(878,"td",20)(879,"p")(880,"code"),e(881,"false"),t()()(),n(882,"td",21)(883,"em")(884,"strong"),e(885,"(opcional)"),t()(),n(886,"p"),e(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t()()(),n(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),e(892," p-placeholder"),a(893,"br"),t()()(),n(894,"td",18)(895,"code",22),e(896,"string"),t()(),n(897,"td",20),e(898,"-"),t(),n(899,"td",21)(900,"em")(901,"strong"),e(902,"(opcional)"),t()(),n(903,"p"),e(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),e(909," p-helper"),a(910,"br"),t()()(),n(911,"td",18)(912,"code",29),e(913,"PoHelperOptions "),t(),n(914,"code",22),e(915," string"),t()(),n(916,"td",20),e(917,"-"),t(),n(918,"td",21)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),n(922,"p"),e(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),t(),n(924,"blockquote")(925,"p"),e(926,"Para mais informa\xE7\xF5es acesse: "),n(927,"a",30),e(928,"https://po-ui.io/documentation/po-helper"),t(),e(929,"."),t()()()(),n(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),e(934," p-readonly"),a(935,"br"),t()()(),n(936,"td",18)(937,"code",19),e(938,"boolean "),t(),n(939,"code",22),e(940," string"),t()(),n(941,"td",20)(942,"p")(943,"code"),e(944,"false"),t()()(),n(945,"td",21)(946,"em")(947,"strong"),e(948,"(opcional)"),t()(),n(949,"p"),e(950,"Torna o componente somente leitura."),t()()(),n(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),e(955," p-required"),a(956,"br"),t()()(),n(957,"td",18)(958,"code",19),e(959,"boolean "),t(),n(960,"code",22),e(961," string"),t()(),n(962,"td",20)(963,"p")(964,"code"),e(965,"false"),t()()(),n(966,"td",21)(967,"em")(968,"strong"),e(969,"(opcional)"),t()(),n(970,"p"),e(971,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),e(976," p-second-interval"),a(977,"br"),t()()(),n(978,"td",18)(979,"code",28),e(980,"number"),t()(),n(981,"td",20)(982,"p")(983,"code"),e(984,"1"),t()()(),n(985,"td",21)(986,"em")(987,"strong"),e(988,"(opcional)"),t()(),n(989,"p"),e(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),n(991,"code"),e(992,"p-show-seconds"),t(),e(993," est\xE1 ativo."),t()()(),n(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),e(998," p-required-field-error-message"),a(999,"br"),t()()(),n(1e3,"td",18)(1001,"code",19),e(1002,"boolean"),t()(),n(1003,"td",20)(1004,"p")(1005,"code"),e(1006,"false"),t()()(),n(1007,"td",21)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),n(1011,"p"),e(1012,"Exibe a mensagem setada na propriedade "),n(1013,"code"),e(1014,"p-error-pattern"),t(),e(1015," se o campo estiver vazio e for requerido."),t(),n(1016,"blockquote")(1017,"p"),e(1018,"Necess\xE1rio que a propriedade "),n(1019,"code"),e(1020,"p-required"),t(),e(1021," esteja habilitada."),t()()()(),n(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),e(1026," p-show-required"),a(1027,"br"),t()()(),n(1028,"td",18)(1029,"code",19),e(1030,"boolean"),t()(),n(1031,"td",20)(1032,"p")(1033,"code"),e(1034,"false"),t()()(),n(1035,"td",21)(1036,"em")(1037,"strong"),e(1038,"(opcional)"),t()(),n(1039,"p"),e(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t()()(),n(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),e(1045," p-show-seconds"),a(1046,"br"),t()()(),n(1047,"td",18)(1048,"code",19),e(1049,"boolean"),t()(),n(1050,"td",20)(1051,"p")(1052,"code"),e(1053,"false"),t()()(),n(1054,"td",21)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),n(1058,"p"),e(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),t()()(),n(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),e(1064," p-size"),a(1065,"br"),t()()(),n(1066,"td",18)(1067,"code",22),e(1068,"string"),t()(),n(1069,"td",20)(1070,"p")(1071,"code"),e(1072,"medium"),t()()(),n(1073,"td",21)(1074,"em")(1075,"strong"),e(1076,"(opcional)"),t()(),n(1077,"p"),e(1078,"Define o tamanho do componente:"),t(),n(1079,"ul")(1080,"li")(1081,"code"),e(1082,"small"),t(),e(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1084,"li")(1085,"code"),e(1086,"medium"),t(),e(1087,": altura do input como 44px."),t()()()(),n(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),e(1092," p-format-time"),a(1093,"br"),t()()(),n(1094,"td",18)(1095,"code",31),e(1096,"PoTimerFormat"),t()(),n(1097,"td",20)(1098,"p"),e(1099,"Determinado pelo locale"),t()(),n(1100,"td",21)(1101,"em")(1102,"strong"),e(1103,"(opcional)"),t()(),n(1104,"p"),e(1105,"Define o formato de exibi\xE7\xE3o do timer."),t(),n(1106,"p"),e(1107,"Valores v\xE1lidos:"),t(),n(1108,"ul")(1109,"li")(1110,"code"),e(1111,"24"),t(),e(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),t(),n(1113,"li")(1114,"code"),e(1115,"12"),t(),e(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),t()(),n(1117,"p"),e(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),t(),n(1119,"ul")(1120,"li")(1121,"code"),e(1122,"en"),t(),e(1123," \u2192 12h (AM/PM)"),t(),n(1124,"li")(1125,"code"),e(1126,"pt"),t(),e(1127,", "),n(1128,"code"),e(1129,"es"),t(),e(1130,", "),n(1131,"code"),e(1132,"ru"),t(),e(1133," \u2192 24h"),t()()()()(),n(1134,"h3",10),e(1135,"M\xE9todos"),t(),n(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),e(1142," showAdditionalHelp "),t()()()()(),n(1143,"tr",21)(1144,"td",21)(1145,"p"),e(1146,"M\xE9todo que exibe "),n(1147,"code"),e(1148,"p-helper"),t(),e(1149," ou executa a a\xE7\xE3o definida em "),n(1150,"code"),e(1151,"p-helper{eventOnClick}"),t(),e(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1153,"code"),e(1154,"p-keydown"),t(),e(1155,"."),t(),n(1156,"blockquote")(1157,"p"),e(1158,"Exibe ou oculta o conte\xFAdo do componente "),n(1159,"code"),e(1160,"po-helper"),t(),e(1161," quando o componente estiver com foco."),t()(),n(1162,"pre")(1163,"code"),e(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),t()(),n(1165,"pre")(1166,"code"),e(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1168,"br"),t())},dependencies:[y],encapsulation:2})}return l})();var fe=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(N(J),N(Z))};static \u0275cmp=b({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datetimepicker-doc"),t(),n(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),t()()()),r&2&&(c("p-actions",i.actions),m(2),c("p-active",i.activeTab==="doc"),m(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[re,v,C,de,ue,Se,he,be],encapsulation:2})}return l})();var Ve=[{path:"",component:fe}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=q({type:l});static \u0275inj=O({imports:[R.forChild(Ve),R]})}return l})();var ut=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=q({type:l});static \u0275inj=O({imports:[me,xe]})}return l})();export{ut as DocPoDatetimepickerModule};
