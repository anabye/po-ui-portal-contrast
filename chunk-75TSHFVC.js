import{o as C,p as he}from"./chunk-AW4276X3.js";import{A as me,Ab as y,Bb as P,Ca as G,Fa as ue,Fb as J,Ga as be,Ra as ge,S as se,U as ce,Z as U,a as Q,ia as L,nb as v,w as de}from"./chunk-5KGSWRT5.js";import"./chunk-PUSYLN2N.js";import{$a as V,Aa as Y,Fa as s,Ga as n,Ha as t,I as ie,Ia as a,J as O,M as I,Nb as M,Nc as N,Oc as W,P as b,Pa as A,Pc as R,Q as g,Qa as u,Qc as z,Rc as j,Sa as k,Wa as ae,Xa as Z,Ya as $,cb as w,db as e,dd as re,fb as D,fd as pe,hb as E,hd as ee,ia as d,ib as f,jb as S,na as q,pa as h,qa as H,qb as oe,rb as le,sb as _,za as X}from"./chunk-A2WYYMKN.js";import{a as B,b as F}from"./chunk-NCEQPEJE.js";var Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&a(0,"po-page-default",0)},dependencies:[v],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-default-basic"),t(),a(23,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,ke,i.hideSampleCodeTabs)))},dependencies:[M,C,y,P,Ee],encapsulation:2})}return o})();var Ie=()=>({});function qe(o,Me){if(o&1){let p=A();n(0,"po-input",37),S("ngModelChange",function(i){b(p);let m=k(2);return f(m.helperFooterLabel,i)||(m.helperFooterLabel=i),g(i)}),t()}if(o&2){let p=k(2);E("ngModel",p.helperFooterLabel)}}function Be(o,Me){if(o&1){let p=A();n(0,"po-widget",11)(1,"div",6)(2,"po-input",33),S("ngModelChange",function(i){b(p);let m=k();return f(m.helperTitle,i)||(m.helperTitle=i),g(i)}),t(),n(3,"po-input",34),S("ngModelChange",function(i){b(p);let m=k();return f(m.helperContent,i)||(m.helperContent=i),g(i)}),t()(),n(4,"div",6)(5,"po-radio-group",35),u("ngModelChange",function(i){b(p);let m=k();return g(m.helperType=i)}),t()(),n(6,"div",6),X(7,qe,1,1,"po-input",36),t()()}if(o&2){let p=k();d(2),E("ngModel",p.helperTitle),d(),E("ngModel",p.helperContent),d(2),s("p-columns",4)("ngModel",p.helperType)("p-options",p.helperTypeOptions),d(2),Y(p.helperType==="help"?7:-1)}}var Se=(()=>{class o{poNotification=I(L);action={label:"",visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let p={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(p.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),p}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(p){let r=F(B({},p),{visible:p.visible!==void 0?p.visible:!0,disabled:p.disabled!==void 0?p.disabled:!1});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}onBack(){this.poNotification.information("Back button clicked (p-back event)")}onRefresh=()=>{this.poNotification.success("Page refreshed (p-refresh event)")};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=!1,this.showRefresh=!1,this.subtitle="",this.title="PO Page Default",this.restoreActionForm()}restoreActionForm(){this.action={label:"",visible:!0,disabled:!1}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:51,vars:45,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-refresh","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-6","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["name","showRefresh","p-label","Refresh",1,"po-md-6","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=A();n(0,"po-page-default",5),u("p-back",function(){return i.onBack()}),t(),a(1,"po-divider"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),S("ngModelChange",function(l){return b(m),f(i.title,l)||(i.title=l),g(l)}),t(),n(6,"po-input",8),S("ngModelChange",function(l){return b(m),f(i.subtitle,l)||(i.subtitle=l),g(l)}),t(),n(7,"po-checkbox",9),S("ngModelChange",function(l){return b(m),f(i.showHelper,l)||(i.showHelper=l),g(l)}),t(),n(8,"po-checkbox",10),S("ngModelChange",function(l){return b(m),f(i.showRefresh,l)||(i.showRefresh=l),g(l)}),t(),X(9,Be,8,6,"po-widget",11),n(10,"po-select",12),u("ngModelChange",function(l){return i.pageHeaderType=l}),t(),n(11,"po-select",13),u("ngModelChange",function(l){return i.pageActionsLayout=l}),t(),n(12,"po-input",14),S("ngModelChange",function(l){return b(m),f(i.literals,l)||(i.literals=l),g(l)}),u("p-change",function(){return i.changeLiterals()}),t(),n(13,"po-radio-group",15),S("ngModelChange",function(l){return b(m),f(i.componentsSize,l)||(i.componentsSize=l),g(l)}),t()()(),a(14,"po-divider"),n(15,"po-widget",16)(16,"form",null,1)(18,"div",6)(19,"po-input",17),S("ngModelChange",function(l){return b(m),f(i.action.label,l)||(i.action.label=l),g(l)}),t(),n(20,"po-input",18),S("ngModelChange",function(l){return b(m),f(i.action.action,l)||(i.action.action=l),g(l)}),t(),n(21,"po-input",19),S("ngModelChange",function(l){return b(m),f(i.action.url,l)||(i.action.url=l),g(l)}),t(),n(22,"po-select",20),u("ngModelChange",function(l){return i.action.type=l}),t(),n(23,"po-select",21),u("ngModelChange",function(l){return i.action.icon=l}),t(),n(24,"po-select",22),u("ngModelChange",function(l){return i.action.kind=l}),t(),n(25,"po-checkbox-group",23),u("ngModelChange",function(l){return i.action=l}),t()(),n(26,"div",6)(27,"po-button",24),u("p-click",function(){return i.addAction(i.action)}),t()()()(),a(28,"po-divider"),n(29,"form",null,2)(31,"div",6)(32,"po-input",25),S("ngModelChange",function(l){return b(m),f(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),g(l)}),t()()(),n(33,"form",null,3)(35,"div",6)(36,"po-input",26),S("ngModelChange",function(l){return b(m),f(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),g(l)}),t(),n(37,"po-input",27),S("ngModelChange",function(l){return b(m),f(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),g(l)}),t()(),n(38,"div",6)(39,"po-button",28),u("p-click",function(){return i.addBreadcrumbItem()}),t()()(),a(40,"po-divider"),n(41,"form",null,4)(43,"div",6)(44,"po-input",29),S("ngModelChange",function(l){return b(m),f(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),g(l)}),t(),n(45,"po-input",30),S("ngModelChange",function(l){return b(m),f(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),g(l)}),t()(),n(46,"div",6)(47,"po-button",31),u("p-click",function(){return i.addBreadcrumbParam()}),t()()(),a(48,"po-divider"),n(49,"div",6)(50,"po-button",32),u("p-click",function(){return i.restore()}),t()()}if(r&2){let m=V(17),c=V(34),l=V(42);s("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??le(44,Ie))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-refresh",i.showRefresh?i.onRefresh:null)("p-title",i.title)("p-subtitle",i.subtitle),d(5),E("ngModel",i.title),d(),E("ngModel",i.subtitle),d(),E("ngModel",i.showHelper),d(),E("ngModel",i.showRefresh),d(),Y(i.showHelper?9:-1),d(),s("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),d(),s("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),d(),E("ngModel",i.literals),d(),E("ngModel",i.componentsSize),s("p-columns",4)("p-options",i.componentsSizeOptions),d(6),E("ngModel",i.action.label),d(),E("ngModel",i.action.action),d(),E("ngModel",i.action.url),d(),s("ngModel",i.action.type)("p-options",i.typeOptions),d(),s("ngModel",i.action.icon)("p-options",i.iconOptions),d(),s("ngModel",i.action.kind)("p-options",i.actionKindOptions),d(),s("ngModel",i.action)("p-columns",4)("p-indeterminate",!0)("p-options",i.actionOptions),d(2),s("p-disabled",m.form.invalid),d(5),E("ngModel",i.breadcrumb.favorite),d(4),E("ngModel",i.breadcrumbItem.label),d(),E("ngModel",i.breadcrumbItem.link),d(2),s("p-disabled",c.invalid??!1),d(5),E("ngModel",i.breadcrumbParams.property),d(),E("ngModel",i.breadcrumbParams.value),d(2),s("p-disabled",l.invalid??!1)}},dependencies:[j,N,W,z,R,de,Q,se,me,be,ce,ge,v,J],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-helper]="helper || ''"
  [p-literals]="customLiterals ?? {}"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
  [p-refresh]="showRefresh ? onRefresh : null"
  [p-title]="title"
  [p-subtitle]="subtitle"
  (p-back)="onBack()"
>
</po-page-default>

<po-divider></po-divider>

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-checkbox class="po-md-6 po-pt-2 po-pb-2" name="showHelper" [(ngModel)]="showHelper" p-label="Helper">
    </po-checkbox>

    <po-checkbox class="po-md-6 po-pt-2 po-pb-2" name="showRefresh" [(ngModel)]="showRefresh" p-label="Refresh">
    </po-checkbox>

    @if (showHelper) {
      <po-widget class="po-md-12 po-pb-3" p-title="Helper">
        <div class="po-row">
          <po-input class="po-md-6" name="helperTitle" [(ngModel)]="helperTitle" p-clean p-label="Title"> </po-input>

          <po-input
            class="po-md-6"
            name="helperContent"
            [(ngModel)]="helperContent"
            p-clean
            p-label="Content"
            p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
          >
          </po-input>
        </div>

        <div class="po-row">
          <po-radio-group
            name="helperType"
            class="po-md-12"
            [p-columns]="4"
            p-label="Type"
            [ngModel]="helperType"
            (ngModelChange)="helperType = $event"
            [p-options]="helperTypeOptions"
          >
          </po-radio-group>
        </div>

        <div class="po-row">
          @if (helperType === 'help') {
            <po-input
              class="po-md-6"
              name="helperFooterLabel"
              [(ngModel)]="helperFooterLabel"
              p-clean
              p-label="Footer Action"
            >
            </po-input>
          }
        </div>
      </po-widget>
    }

    <po-select
      class="po-lg-3 po-md-6"
      name="pageHeaderType"
      [ngModel]="pageHeaderType"
      (ngModelChange)="pageHeaderType = $event"
      p-label="Page Header Type"
      [p-options]="pageHeaderTypeOptions"
    >
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageActionsLayout"
      [ngModel]="pageActionsLayout"
      (ngModelChange)="pageActionsLayout = $event"
      p-label="Page Actions Layout"
      [p-options]="pageActionsLayoutOptions"
    >
    </po-select>

    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      [p-columns]="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>
</form>

<po-divider></po-divider>

<po-widget p-title="Action">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-lg-3 po-md-6"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="kind"
        [ngModel]="action.kind"
        (ngModelChange)="action.kind = $event"
        p-label="Kind"
        [p-options]="actionKindOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [ngModel]="action"
        (ngModelChange)="action = $event"
        [p-columns]="4"
        [p-indeterminate]="true"
        p-label="Properties"
        [p-options]="actionOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-2 po-md-4"
        p-label="Add Action"
        [p-disabled]="formAction.form.invalid"
        (p-click)="addAction(action)"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-divider></po-divider>

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid ?? false"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid ?? false"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoHelperOptions,
  PoNotificationService,
  PoPageAction,
  PoPageDefaultLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

interface EditableAction extends PoPageAction {
  visible: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: EditableAction = { label: '', visible: true, disabled: false };
  actions: Array<EditableAction> = [];
  breadcrumb: PoBreadcrumb = { items: [] };
  breadcrumbItem: PoBreadcrumbItem = { label: '', link: undefined };
  breadcrumbParams: { property?: string; value?: string } = {};
  componentsSize: string = 'medium';
  customLiterals: PoPageDefaultLiterals | undefined;
  literals: string = '';
  pageActionsLayout: string = 'default';
  pageHeaderType: string = 'primary';
  subtitle: string = '';
  title: string = 'PO Page Default';

  helperContent: string = '';
  helperFooterLabel: string = '';
  helperTitle: string = '';
  helperType: 'help' | 'info' = 'info';
  showHelper: boolean = false;
  showRefresh: boolean = false;

  public readonly helperTypeOptions: Array<PoSelectOption> = [
    { label: 'help', value: 'help' },
    { label: 'info', value: 'info' }
  ];

  get helper(): PoHelperOptions | undefined {
    if (!this.showHelper || !this.helperContent) {
      return undefined;
    }
    const options: PoHelperOptions = {
      title: this.helperTitle,
      content: this.helperContent,
      type: this.helperType
    };
    if (this.helperType === 'help' && this.helperFooterLabel) {
      options.footerAction = {
        label: this.helperFooterLabel,
        action: () => this.poNotification.information('Footer action clicked')
      };
    }
    return options;
  }

  public readonly actionKindOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly pageActionsLayoutOptions: Array<PoSelectOption> = [
    { label: 'default', value: 'default' },
    { label: 'dropdown', value: 'dropdown' },
    { label: 'mixed', value: 'mixed' }
  ];

  public readonly pageHeaderTypeOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: EditableAction) {
    const newAction: EditableAction = {
      ...action,
      visible: action.visible !== undefined ? action.visible : true,
      disabled: action.disabled !== undefined ? action.disabled : false
    };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: '', link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {
      [this.breadcrumbParams.property || '']: this.breadcrumbParams.value
    };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onBack() {
    this.poNotification.information('Back button clicked (p-back event)');
  }

  onRefresh = (): void => {
    this.poNotification.success('Page refreshed (p-refresh event)');
  };

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: '', link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.helperContent = '';
    this.helperFooterLabel = '';
    this.helperTitle = '';
    this.helperType = 'info';
    this.literals = '';
    this.pageActionsLayout = 'default';
    this.pageHeaderType = 'primary';
    this.showHelper = false;
    this.showRefresh = false;
    this.subtitle = '';
    this.title = 'PO Page Default';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: '',
      visible: true,
      disabled: false
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-default-labs"),t(),a(23,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,Oe,i.hideSampleCodeTabs)))},dependencies:[M,C,y,P,Se],encapsulation:2})}return o})();var ne=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||o)};static \u0275prov=ie({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ve=["formShare"],ve=(()=>{class o{poNotification=I(L);sampleDashboardService=I(ne);formShare;poModal;columns;email="";isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&ae(Ve,7)(U,7),r&2){let m;Z(m=$())&&(i.formShare=m.first),Z(m=$())&&(i.poModal=m.first)}},standalone:!1,features:[oe([ne])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=A();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),e(4,"540"),t(),n(5,"div",5),e(6,"www.po.com.br"),t()(),n(7,"po-widget",6)(8,"div",4),e(9,"300 views"),t(),n(10,"div",5),e(11,"https://po-ui.io"),t()(),n(12,"po-widget",7)(13,"div",4),e(14,"Online"),t(),n(15,"div",5),e(16,"28 days"),t()(),n(17,"po-widget",8)(18,"div",4),e(19,"266"),t(),n(20,"div",5),e(21,"@po-ui/ng-components - 1.10.1"),t()(),n(22,"po-widget",9)(23,"div",4),e(24,"800 questions"),t(),n(25,"div",5),e(26,"https://devforum.po.com.br"),t()(),n(27,"po-widget",10)(28,"div",4),e(29,"AngularJS - Angular 6"),t(),n(30,"div",5),e(31,"Angular 6 most downloaded"),t()()(),a(32,"po-divider")(33,"po-table",11),t(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),S("ngModelChange",function(l){return b(m),f(i.email,l)||(i.email=l),g(l)}),t()()()}r&2&&(s("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),d(33),s("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),d(),s("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),d(3),E("ngModel",i.email))},dependencies:[j,N,W,z,R,Q,ue,U,v,G,J],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return o})();var We=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default - Dashboard"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default
  p-title="Dashboard"
  p-subtitle="Website analytics overview"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-helper]="helper"
>
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoHelperOptions,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styleUrls: ['./sample-po-page-default-dashboard.component.css'],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  columns!: Array<PoTableColumn>;
  email: string = '';
  isSubscribed: boolean = false;
  items!: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    {
      label: 'Disable notification',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly helper: PoHelperOptions = {
    title: 'Dashboard Info',
    content: 'View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.',
    type: 'info'
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),t()()(),n(25,"po-tab",10)(26,"div")(27,"label",6),e(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),t(),n(29,"pre",11),e(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),t()()()()(),n(31,"div",12),a(32,"sample-po-page-default-dashboard"),t(),a(33,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,We,i.hideSampleCodeTabs)))},dependencies:[M,C,y,P,ve],encapsulation:2})}return o})();var Pe=(()=>{class o{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:"Notebook Pro",quantity:12,price:4599.9,status:"Available"},{id:2,product:"Wireless Mouse",quantity:85,price:129.9,status:"Available"},{id:3,product:"Mechanical Keyboard",quantity:34,price:459.9,status:"Available"},{id:4,product:'Monitor 27"',quantity:7,price:2199.9,status:"Low stock"},{id:5,product:"USB-C Hub",quantity:0,price:249.9,status:"Out of stock"},{id:6,product:"Webcam HD",quantity:23,price:349.9,status:"Available"},{id:7,product:"Headset Bluetooth",quantity:41,price:599.9,status:"Available"},{id:8,product:"External SSD 1TB",quantity:3,price:689.9,status:"Low stock"}];constructor(p){this.poNotification=p}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success("Inventory data refreshed successfully.")},1e3)};getColumns(){return[{property:"id",label:"ID",width:"60px"},{property:"product",label:"Product"},{property:"quantity",label:"Quantity",width:"100px"},{property:"price",label:"Price",type:"currency",format:"BRL",width:"140px"},{property:"status",label:"Status",type:"label",width:"130px",labels:[{value:"Available",color:"color-10",label:"Available"},{value:"Low stock",color:"color-08",label:"Low stock"},{value:"Out of stock",color:"color-07",label:"Out of stock"}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(p=>F(B({},p),{quantity:p.quantity+Math.floor(Math.random()*10),status:this.getStatus(p.quantity+Math.floor(Math.random()*10))}))}getStatus(p){return p===0?"Out of stock":p<=5?"Low stock":"Available"}static \u0275fac=function(r){return new(r||o)(q(L))};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-refresh"]],standalone:!1,decls:2,vars:4,consts:[["p-title","Inventory","p-subtitle","Product stock management",3,"p-refresh"],["p-striped","",3,"p-columns","p-items","p-loading"]],template:function(r,i){r&1&&(n(0,"po-page-default",0),a(1,"po-table",1),t()),r&2&&(s("p-refresh",i.onRefresh),d(),s("p-columns",i.columns)("p-items",i.items)("p-loading",i.loading))},dependencies:[v,G],encapsulation:2})}return o})();var je=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-refresh-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default - Refresh"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-refresh/sample-po-page-default-refresh.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-refresh',
  templateUrl: './sample-po-page-default-refresh.component.html',
  standalone: false
})
export class SamplePoPageDefaultRefreshComponent implements OnInit {
  columns: Array<PoTableColumn> = [];
  items: Array<any> = [];
  loading: boolean = false;

  private readonly allItems: Array<any> = [
    { id: 1, product: 'Notebook Pro', quantity: 12, price: 4599.9, status: 'Available' },
    { id: 2, product: 'Wireless Mouse', quantity: 85, price: 129.9, status: 'Available' },
    { id: 3, product: 'Mechanical Keyboard', quantity: 34, price: 459.9, status: 'Available' },
    { id: 4, product: 'Monitor 27"', quantity: 7, price: 2199.9, status: 'Low stock' },
    { id: 5, product: 'USB-C Hub', quantity: 0, price: 249.9, status: 'Out of stock' },
    { id: 6, product: 'Webcam HD', quantity: 23, price: 349.9, status: 'Available' },
    { id: 7, product: 'Headset Bluetooth', quantity: 41, price: 599.9, status: 'Available' },
    { id: 8, product: 'External SSD 1TB', quantity: 3, price: 689.9, status: 'Low stock' }
  ];

  constructor(private readonly poNotification: PoNotificationService) {}

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.loadItems();
  }

  onRefresh = (): void => {
    this.loading = true;

    setTimeout(() => {
      this.refreshItems();
      this.loading = false;
      this.poNotification.success('Inventory data refreshed successfully.');
    }, 1000);
  };

  private getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'ID', width: '60px' },
      { property: 'product', label: 'Product' },
      { property: 'quantity', label: 'Quantity', width: '100px' },
      { property: 'price', label: 'Price', type: 'currency', format: 'BRL', width: '140px' },
      {
        property: 'status',
        label: 'Status',
        type: 'label',
        width: '130px',
        labels: [
          { value: 'Available', color: 'color-10', label: 'Available' },
          { value: 'Low stock', color: 'color-08', label: 'Low stock' },
          { value: 'Out of stock', color: 'color-07', label: 'Out of stock' }
        ]
      }
    ];
  }

  private loadItems(): void {
    this.items = [...this.allItems];
  }

  private refreshItems(): void {
    this.items = this.allItems.map(item => ({
      ...item,
      quantity: item.quantity + Math.floor(Math.random() * 10),
      status: this.getStatus(item.quantity + Math.floor(Math.random() * 10))
    }));
  }

  private getStatus(quantity: number): string {
    if (quantity === 0) {
      return 'Out of stock';
    }
    return quantity <= 5 ? 'Low stock' : 'Available';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-default-refresh"),t(),a(23,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,je,i.hideSampleCodeTabs)))},dependencies:[M,C,y,P,Pe],encapsulation:2})}return o})();var we=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-h4","docs-api-class-name"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),n(7,"code"),e(8,"po-page-default"),t(),e(9,", "),n(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
`),n(13,"code"),e(14,"po-page-edit"),t(),e(15,", "),n(16,"code"),e(17,"po-page-list"),t(),e(18," e "),n(19,"code"),e(20,"po-page-slide"),t(),e(21,"."),t()(),n(22,"h3",3),e(23,"Componente"),t(),n(24,"h4",4)(25,"code",5),e(26,"PoPageDefaultComponent"),t()(),n(27,"div",2)(28,"p"),e(29,"O "),n(30,"code"),e(31,"po-page-default"),t(),e(32," \xE9 utilizado como container principal para telas sem um template definido."),t(),n(33,"p"),e(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),n(35,"code"),e(36,"p-page-header-type"),t(),e(37,", navega\xE7\xE3o por "),n(38,"em"),e(39,"breadcrumb"),t(),e(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),n(41,"code"),e(42,"p-page-actions-layout"),t(),e(43,"."),t(),n(44,"h4"),e(45,"Tokens customiz\xE1veis"),t(),n(46,"blockquote")(47,"p"),e(48,"Para maiores informa\xE7\xF5es, acesse o guia "),n(49,"a",6),e(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(51,"."),t()(),n(52,"table")(53,"thead")(54,"tr")(55,"th"),e(56,"Propriedade"),t(),n(57,"th"),e(58,"Descri\xE7\xE3o"),t(),n(59,"th"),e(60,"Valor Padr\xE3o"),t()()(),n(61,"tbody")(62,"tr")(63,"td")(64,"strong"),e(65,"P\xE1gina (po-page-default)"),t()(),a(66,"td")(67,"td"),t(),n(68,"tr")(69,"td")(70,"code"),e(71,"--background"),t()(),n(72,"td"),e(73,"Background da p\xE1gina (header e body)"),t(),n(74,"td")(75,"code"),e(76,"var(--color-page-background-color-page)"),t()()(),n(77,"tr")(78,"td")(79,"strong"),e(80,"Header (po-page-header)"),t()(),a(81,"td")(82,"td"),t(),n(83,"tr")(84,"td")(85,"code"),e(86,"--padding"),t()(),n(87,"td"),e(88,"Espa\xE7amento do header"),t(),n(89,"td")(90,"code"),e(91,"var(--spacing-xs) var(--spacing-md)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--gap"),t()(),n(96,"td"),e(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),n(98,"td")(99,"code"),e(100,"var(--spacing-md)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--gap-actions"),t()(),n(105,"td"),e(106,"Espa\xE7amento entre as a\xE7\xF5es"),t(),n(107,"td")(108,"code"),e(109,"var(--spacing-xs)"),t()()(),n(110,"tr")(111,"td")(112,"strong"),e(113,"Header (po-page-header .po-page-header-title)"),t()(),a(114,"td")(115,"td"),t(),n(116,"tr")(117,"td")(118,"code"),e(119,"--font-family"),t()(),n(120,"td"),e(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),n(122,"td")(123,"code"),e(124,"var(--font-family-theme)"),t()()(),n(125,"tr")(126,"td")(127,"strong"),e(128,"Content (po-page-content)"),t()(),a(129,"td")(130,"td"),t(),n(131,"tr")(132,"td")(133,"code"),e(134,"--padding-content"),t()(),n(135,"td"),e(136,"Espa\xE7amento do conte\xFAdo"),t(),n(137,"td")(138,"code"),e(139,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),n(140,"div",7)(141,"h4",8),e(142,"Seletor"),t(),n(143,"pre",9),e(144,`<po-page-default
    p-actions="Array<PoPageAction>"
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-helper="PoHelperOptions | string"
    p-literals="PoPageDefaultLiterals"
    p-page-actions-layout="string"
    p-page-header-type="string"
    p-refresh="Function"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),t()(),n(145,"h4",10),e(146,"Propriedades"),t(),n(147,"table",11)(148,"tr",12)(149,"th",13),e(150,"Nome"),t(),n(151,"th",13),e(152,"Tipo"),t(),n(153,"th",13),e(154,"Padr\xE3o"),t(),n(155,"th",13),e(156,"Descri\xE7\xE3o"),t()(),n(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),e(161," p-actions"),a(162,"br"),t()()(),n(163,"td",18)(164,"code",19),e(165,"Array<PoPageAction>"),t()(),n(166,"td",20)(167,"p")(168,"code"),e(169,"[]"),t()()(),n(170,"td",21)(171,"em")(172,"strong"),e(173,"(opcional)"),t()(),n(174,"p"),e(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),t(),n(176,"p"),e(177,"Recebe um array de objetos que implementam a interface "),n(178,"code"),e(179,"PoPageAction"),t(),e(180,"."),t(),n(181,"blockquote")(182,"p"),e(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),n(184,"code"),e(185,"p-page-actions-layout"),t(),e(186,"."),t()()()(),n(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),e(191," (p-back)"),a(192,"br"),t()()(),n(193,"td",18)(194,"code",24),e(195,"EventEmitter"),t()(),n(196,"td",20),e(197,"-"),t(),n(198,"td",21)(199,"em")(200,"strong"),e(201,"(opcional)"),t()(),n(202,"p"),e(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),t(),n(204,"blockquote")(205,"p"),e(206,"Bot\xE3o exibido apenas quando a propriedade "),n(207,"code"),e(208,"p-page-header-type"),t(),e(209," est\xE1 configurada como "),n(210,"code"),e(211,"secondary"),t(),e(212,"."),t()()()(),n(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),e(217," p-breadcrumb"),a(218,"br"),t()()(),n(219,"td",18)(220,"code",25),e(221,"PoBreadcrumb"),t()(),n(222,"td",20),e(223,"-"),t(),n(224,"td",21)(225,"em")(226,"strong"),e(227,"(opcional)"),t()(),n(228,"p"),e(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),t(),n(230,"p"),e(231,"Recebe um objeto que implementa a interface "),n(232,"code"),e(233,"PoBreadcrumb"),t(),e(234,"."),t(),n(235,"blockquote")(236,"p"),e(237,"Compat\xEDvel com o cabe\xE7alho ("),n(238,"code"),e(239,"p-page-header-type"),t(),e(240,") do tipo "),n(241,"code"),e(242,"primary"),t(),e(243,"."),t()()()(),n(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),e(248," p-components-size"),a(249,"br"),t()()(),n(250,"td",18)(251,"code",26),e(252,"string"),t()(),n(253,"td",20)(254,"p")(255,"code"),e(256,"medium"),t()()(),n(257,"td",21)(258,"em")(259,"strong"),e(260,"(opcional)"),t()(),n(261,"p"),e(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(263,"ul")(264,"li")(265,"code"),e(266,"small"),t(),e(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(268,"li")(269,"code"),e(270,"medium"),t(),e(271,": aplica a medida medium de cada componente."),t()(),n(272,"blockquote")(273,"p"),e(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(275,"code"),e(276,"medium"),t(),e(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(278,"a",27),e(279,"po-theme"),t(),e(280,"."),t()()()(),n(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),e(285," p-helper"),a(286,"br"),t()()(),n(287,"td",18)(288,"code",28),e(289,"PoHelperOptions "),t(),n(290,"code",26),e(291," string"),t()(),n(292,"td",20)(293,"p")(294,"code"),e(295,"info"),t()()(),n(296,"td",21)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),t(),n(302,"p"),e(303,"Quando n\xE3o houver subt\xEDtulo ("),n(304,"code"),e(305,"p-subtitle"),t(),e(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),t(),n(307,"p"),e(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),n(309,"code"),e(310,"PoHelperOptions"),t(),e(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),t(),n(312,"p"),e(313,"Exemplo de uso:"),t(),n(314,"pre")(315,"code",29),e(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),t()()()(),n(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),e(321," p-literals"),a(322,"br"),t()()(),n(323,"td",18)(324,"code",30),e(325,"PoPageDefaultLiterals"),t()(),n(326,"td",20),e(327,"-"),t(),n(328,"td",21)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),t(),n(334,"p"),e(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),n(336,"code"),e(337,"PoPageDefaultLiterals"),t(),e(338,"."),t(),n(339,"p"),e(340,"Exemplo de uso:"),t(),n(341,"pre")(342,"code",29),e(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),t()(),n(344,"pre")(345,"code",31),e(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),t()(),n(347,"blockquote")(348,"p"),e(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),n(350,"a",32)(351,"code"),e(352,"PoI18nService"),t()(),e(353," ou navegador."),t()()()(),n(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),e(358," p-page-actions-layout"),a(359,"br"),t()()(),n(360,"td",18)(361,"code",26),e(362,"string"),t()(),n(363,"td",20)(364,"p")(365,"code"),e(366,"default"),t()()(),n(367,"td",21)(368,"em")(369,"strong"),e(370,"(opcional)"),t()(),n(371,"p"),e(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),t(),n(373,"p"),e(374,"Aceita valores do enum "),n(375,"code"),e(376,"PoPageActionsLayout"),t(),e(377,"."),t(),n(378,"blockquote")(379,"p"),e(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),n(381,"em"),e(382,"dropdown"),t(),e(383," que possuam a propriedade "),n(384,"code"),e(385,"PoPageAction.icon"),t(),e(386,` definida
exibir\xE3o apenas o \xEDcone.`),t()()()(),n(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),e(391," p-page-header-type"),a(392,"br"),t()()(),n(393,"td",18)(394,"code",26),e(395,"string"),t()(),n(396,"td",20)(397,"p")(398,"code"),e(399,"primary"),t()()(),n(400,"td",21)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),t(),n(406,"p"),e(407,"Aceita valores do enum "),n(408,"code"),e(409,"PoPageHeaderType"),t(),e(410,"."),t()()(),n(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),e(415," p-refresh"),a(416,"br"),t()()(),n(417,"td",18)(418,"code",33),e(419,"Function"),t()(),n(420,"td",20),e(421,"-"),t(),n(422,"td",21)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),n(426,"p"),e(427,"Define a fun\xE7\xE3o de callback executada ao clicar no bot\xE3o de atualiza\xE7\xE3o (refresh) ao lado do subt\xEDtulo da p\xE1gina."),t(),n(428,"p"),e(429,"Quando n\xE3o houver subt\xEDtulo ("),n(430,"code"),e(431,"p-subtitle"),t(),e(432,"), o refresh ser\xE1 exibido logo abaixo do t\xEDtulo."),t(),n(433,"blockquote")(434,"p"),e(435,"Esta propriedade possui preced\xEAncia sobre a configura\xE7\xE3o de "),n(436,"code"),e(437,"p-helper"),t(),e(438,"."),t()(),n(439,"p"),e(440,"Exemplo de uso:"),t(),n(441,"pre")(442,"code",29),e(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),t()()()(),n(444,"tr",14)(445,"td",15)(446,"div",16)(447,"span",17),e(448," p-subtitle"),a(449,"br"),t()()(),n(450,"td",18)(451,"code",26),e(452,"string"),t()(),n(453,"td",20),e(454,"-"),t(),n(455,"td",21)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),t(),n(461,"p"),e(462,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),n(463,"code"),e(464,"<b>"),t(),e(465," (negrito), "),n(466,"code"),e(467,"<strong>"),t(),e(468," (negrito), "),n(469,"code"),e(470,"<i>"),t(),e(471," (it\xE1lico), "),n(472,"code"),e(473,"<em>"),t(),e(474,` (it\xE1lico) e
`),n(475,"code"),e(476,"<u>"),t(),e(477," (sublinhado)."),t(),n(478,"p"),e(479,"Exemplo:"),t(),n(480,"pre")(481,"code",31),e(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),t()(),n(483,"blockquote")(484,"p"),e(485,"Requer que "),n(486,"code"),e(487,"p-title"),t(),e(488," esteja definido."),t()()()(),n(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),e(493," p-title"),a(494,"br"),t()()(),n(495,"td",18)(496,"code",26),e(497,"string"),t()(),n(498,"td",20),e(499,"-"),t(),n(500,"td",21)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"Define o t\xEDtulo principal da p\xE1gina."),t()()()(),n(506,"h3"),e(507,"Interfaces"),t(),n(508,"h4",34)(509,"code",5),e(510,"PoBreadcrumbItem"),t()(),n(511,"div",2)(512,"p"),e(513,"Interface que define cada item do componente "),n(514,"strong"),e(515,"po-breadcrumb"),t(),e(516,"."),t()(),n(517,"h4",10),e(518,"Propriedades"),t(),n(519,"table",11)(520,"tr",12)(521,"th",13),e(522,"Nome"),t(),n(523,"th",13),e(524,"Tipo"),t(),n(525,"th",13),e(526,"Descri\xE7\xE3o"),t()(),n(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),e(531," action"),a(532,"br"),t()()(),n(533,"td",18)(534,"code",33),e(535,"Function"),t()(),n(536,"td",21)(537,"em")(538,"strong"),e(539,"(opcional)"),t()(),n(540,"p"),e(541,"A\xE7\xE3o executada ao clicar no item."),t(),n(542,"blockquote")(543,"p"),e(544,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(545,"em"),e(546,"label"),t(),e(547," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),n(548,"tr",14)(549,"td",15)(550,"div",16)(551,"span",17),e(552," label"),a(553,"br"),t()()(),n(554,"td",18)(555,"code",26),e(556,"string"),t()(),n(557,"td",21)(558,"p"),e(559,"R\xF3tulo do item."),t()()(),n(560,"tr",14)(561,"td",15)(562,"div",16)(563,"span",17),e(564," link"),a(565,"br"),t()()(),n(566,"td",18)(567,"code",26),e(568,"string"),t()(),n(569,"td",21)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),n(573,"p"),e(574,"Url do item."),t(),n(575,"blockquote")(576,"p"),e(577,"Caso o item tamb\xE9m contenha uma "),n(578,"em"),e(579,"action"),t(),e(580," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(581,"em"),e(582,"link"),t(),e(583,"."),t()(),n(584,"blockquote")(585,"p"),e(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(587,"strong")(588,"a",35),e(589,"Veja um exemplo de como criar rotas aqui"),t()(),e(590,"."),t()(),n(591,"blockquote")(592,"p"),e(593,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(594,"code"),e(595,"p-favorite-service"),t(),e(596," consiga favoritar ou desfavoritar."),t()()()()(),n(597,"h4",34)(598,"code",5),e(599,"PoBreadcrumb"),t()(),n(600,"div",2)(601,"p"),e(602,"Interface que define o "),n(603,"code"),e(604,"po-breadcrumb"),t(),e(605,"."),t()(),n(606,"h4",10),e(607,"Propriedades"),t(),n(608,"table",11)(609,"tr",12)(610,"th",13),e(611,"Nome"),t(),n(612,"th",13),e(613,"Tipo"),t(),n(614,"th",13),e(615,"Descri\xE7\xE3o"),t()(),n(616,"tr",14)(617,"td",15)(618,"div",16)(619,"span",17),e(620," favorite"),a(621,"br"),t()()(),n(622,"td",18)(623,"code",26),e(624,"string"),t()(),n(625,"td",21)(626,"em")(627,"strong"),e(628,"(opcional)"),t()(),n(629,"p"),e(630,"Permite definir uma URL para favoritar ou desfavoritar."),t(),n(631,"blockquote")(632,"p"),e(633,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(634,"code"),e(635,"p-favorite-service"),t(),e(636," do componente "),n(637,"code"),e(638,"po-breadcrumb"),t(),e(639,"."),t()()()(),n(640,"tr",14)(641,"td",15)(642,"div",16)(643,"span",17),e(644," items"),a(645,"br"),t()()(),n(646,"td",18)(647,"code",36),e(648,"Array<PoBreadcrumbItem>"),t()(),n(649,"td",21)(650,"p"),e(651,"Lista de itens do "),n(652,"em"),e(653,"breadcrumb"),t(),e(654,"."),t(),n(655,"p")(656,"strong"),e(657,"Exemplo:"),t()(),n(658,"pre")(659,"code"),e(660,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),n(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),e(665," params"),a(666,"br"),t()()(),n(667,"td",18)(668,"code",37),e(669,"object"),t()(),n(670,"td",21)(671,"em")(672,"strong"),e(673,"(opcional)"),t()(),n(674,"p"),e(675,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),n(676,"h4",34)(677,"code",5),e(678,"PoHelperOptions"),t()(),n(679,"div",2)(680,"p"),e(681,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),n(682,"em"),e(683,"helper"),t(),e(684,")."),t()(),n(685,"h4",10),e(686,"Propriedades"),t(),n(687,"table",11)(688,"tr",12)(689,"th",13),e(690,"Nome"),t(),n(691,"th",13),e(692,"Tipo"),t(),n(693,"th",13),e(694,"Descri\xE7\xE3o"),t()(),n(695,"tr",14)(696,"td",15)(697,"div",16)(698,"span",17),e(699," content"),a(700,"br"),t()()(),n(701,"td",18)(702,"code",26),e(703,"string"),t()(),n(704,"td",21)(705,"em")(706,"strong"),e(707,"(opcional)"),t()(),n(708,"p"),e(709,"Texto explicativo exibido no popover."),t(),n(710,"p"),e(711,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),n(712,"code"),e(713,"<b>"),t(),e(714," (negrito), "),n(715,"code"),e(716,"<strong>"),t(),e(717," (negrito), "),n(718,"code"),e(719,"<i>"),t(),e(720," (it\xE1lico), "),n(721,"code"),e(722,"<em>"),t(),e(723,` (it\xE1lico) e
`),n(724,"code"),e(725,"<u>"),t(),e(726," (sublinhado)."),t(),n(727,"p"),e(728,"Exemplo:"),t(),n(729,"pre")(730,"code",31),e(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),t()()()(),n(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),e(736," eventOnClick"),a(737,"br"),t()()(),n(738,"td",18)(739,"code",33),e(740,"Function"),t()(),n(741,"td",21)(742,"em")(743,"strong"),e(744,"(opcional)"),t()(),n(745,"p"),e(746,"Evento disparado ao clicar no \xEDcone do helper."),t(),n(747,"p"),e(748,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),t(),n(749,"p"),e(750,"Pode ser uma fun\xE7\xE3o ou um "),n(751,"code"),e(752,"EventEmitter"),t(),e(753,"."),t(),n(754,"p"),e(755,"Exemplo:"),t(),n(756,"pre")(757,"code"),e(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),t()()()(),n(759,"tr",14)(760,"td",15)(761,"div",16)(762,"span",17),e(763," footerAction"),a(764,"br"),t()()(),n(765,"td",18)(766,"code",38),e(767,`{ label: string; action: Function;
}`),t()(),n(768,"td",21)(769,"em")(770,"strong"),e(771,"(opcional)"),t()(),n(772,"p"),e(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),n(774,"code"),e(775,"help"),t(),e(776," e desconsiderada quando o type for "),n(777,"code"),e(778,"info"),t(),e(779,"."),t(),n(780,"p"),e(781,"Deve ser um objeto com as propriedades:"),t(),n(782,"ul")(783,"li")(784,"code"),e(785,"label"),t(),e(786,": Texto do bot\xE3o."),t(),n(787,"li")(788,"code"),e(789,"action"),t(),e(790,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),t()(),n(791,"p"),e(792,"Exemplo:"),t(),n(793,"pre")(794,"code",31),e(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),t()()()(),n(796,"tr",14)(797,"td",15)(798,"div",16)(799,"span",17),e(800," title"),a(801,"br"),t()()(),n(802,"td",18)(803,"code",26),e(804,"string"),t()(),n(805,"td",21)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"T\xEDtulo do helper exibido no popover."),t()()(),n(811,"tr",14)(812,"td",15)(813,"div",16)(814,"span",17),e(815," type"),a(816,"br"),t()()(),n(817,"td",18)(818,"code",39),e(819,"'info' "),t(),n(820,"code",40),e(821," 'help'"),t()(),n(822,"td",21)(823,"em")(824,"strong"),e(825,"(opcional)"),t()(),n(826,"p"),e(827,"Tipo do \xEDcone exibido: "),n(828,"code"),e(829,"info"),t(),e(830," ou "),n(831,"code"),e(832,"help"),t(),e(833,"."),t(),n(834,"p"),e(835,"Quando o valor \xE9 "),n(836,"code"),e(837,"info"),t(),e(838,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),t(),n(839,"p"),e(840,"Quando o valor \xE9 "),n(841,"code"),e(842,"help"),t(),e(843,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),t()()()(),n(844,"h4",34)(845,"code",5),e(846,"PoPageAction"),t()(),n(847,"div",2)(848,"p"),e(849,"Interface para as a\xE7\xF5es dos componentes "),n(850,"code"),e(851,"po-page-default"),t(),e(852," e "),n(853,"code"),e(854,"po-page-list"),t(),e(855,"."),t(),n(856,"p"),e(857,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),n(858,"em"),e(859,"dropdown"),t(),e(860,`,
conforme o `),n(861,"code"),e(862,"PoPageActionsLayout"),t(),e(863," e o tamanho da tela."),t(),n(864,"blockquote")(865,"p"),e(866,"As propriedades "),n(867,"code"),e(868,"separator"),t(),e(869,", "),n(870,"code"),e(871,"selected"),t(),e(872," e "),n(873,"code"),e(874,"subItems"),t(),e(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),n(876,"em"),e(877,"dropdown"),t(),e(878,"."),t()()(),n(879,"h4",10),e(880,"Propriedades"),t(),n(881,"table",11)(882,"tr",12)(883,"th",13),e(884,"Nome"),t(),n(885,"th",13),e(886,"Tipo"),t(),n(887,"th",13),e(888,"Descri\xE7\xE3o"),t()(),n(889,"tr",14)(890,"td",15)(891,"div",16)(892,"span",17),e(893," action"),a(894,"br"),t()()(),n(895,"td",18)(896,"code",33),e(897,"Function"),t()(),n(898,"td",21)(899,"em")(900,"strong"),e(901,"(opcional)"),t()(),n(902,"p"),e(903,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),n(904,"p"),e(905,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),n(906,"code"),e(907,"subItems"),t(),e(908,"."),t(),n(909,"blockquote")(910,"p"),e(911,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),n(912,"em"),e(913,"bind"),t(),e(914,`:
`),n(915,"code"),e(916,"action: this.myFunction.bind(this)"),t()()()()(),n(917,"tr",14)(918,"td",15)(919,"div",16)(920,"span",17),e(921," disabled"),a(922,"br"),t()()(),n(923,"td",18)(924,"code",41),e(925,"boolean "),t(),n(926,"code",33),e(927," Function"),t()(),n(928,"td",21)(929,"em")(930,"strong"),e(931,"(opcional)"),t()(),n(932,"p"),e(933,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),n(934,"tr",14)(935,"td",15)(936,"div",16)(937,"span",17),e(938," icon"),a(939,"br"),t()()(),n(940,"td",18)(941,"code",26),e(942,"string "),t(),n(943,"code",42),e(944," TemplateRef<void>"),t()(),n(945,"td",21)(946,"em")(947,"strong"),e(948,"(opcional)"),t()(),n(949,"p"),e(950,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),n(951,"p"),e(952,"Aceita \xEDcones da "),n(953,"a",43),e(954,"Biblioteca de \xEDcones"),t(),e(955,`, fontes externas (ex: Font Awesome)
ou um `),n(956,"code"),e(957,"TemplateRef"),t(),e(958," para \xEDcones customizados."),t(),n(959,"pre")(960,"code"),e(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),n(962,"tr",14)(963,"td",15)(964,"div",16)(965,"span",17),e(966," kind"),a(967,"br"),t()()(),n(968,"td",18)(969,"code",26),e(970,"string"),t()(),n(971,"td",21)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),n(975,"p"),e(976,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),n(977,"em"),e(978,"dropdown"),t(),e(979,"."),t(),n(980,"p"),e(981,"Valores permitidos:"),t(),n(982,"ul")(983,"li")(984,"code"),e(985,"primary"),t(),e(986,": bot\xE3o com maior destaque visual."),t(),n(987,"li")(988,"code"),e(989,"secondary"),t(),e(990,": estilo padr\xE3o."),t()(),n(991,"blockquote")(992,"p"),e(993,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),t()(),n(994,"blockquote")(995,"p"),e(996,"Somente uma a\xE7\xE3o pode ter "),n(997,"code"),e(998,"kind"),t(),e(999," igual a "),n(1e3,"code"),e(1001,"primary"),t(),e(1002,". Caso mais de uma defina "),n(1003,"code"),e(1004,"primary"),t(),e(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),n(1006,"code"),e(1007,"secondary"),t(),e(1008,"."),t()(),n(1009,"blockquote")(1010,"p"),e(1011,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),n(1012,"code"),e(1013,"PoPageActionsLayout"),t(),e(1014,"."),t()()()(),n(1015,"tr",14)(1016,"td",15)(1017,"div",16)(1018,"span",17),e(1019," label"),a(1020,"br"),t()()(),n(1021,"td",18)(1022,"code",26),e(1023,"string"),t()(),n(1024,"td",21)(1025,"p"),e(1026,"R\xF3tulo da a\xE7\xE3o."),t(),n(1027,"p"),e(1028,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),n(1029,"code"),e(1030,"subItems"),t(),e(1031,"."),t()()(),n(1032,"tr",14)(1033,"td",15)(1034,"div",16)(1035,"span",17),e(1036," selected"),a(1037,"br"),t()()(),n(1038,"td",18)(1039,"code",41),e(1040,"boolean"),t()(),n(1041,"td",21)(1042,"em")(1043,"strong"),e(1044,"(opcional)"),t()(),n(1045,"p"),e(1046,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),n(1047,"tr",14)(1048,"td",15)(1049,"div",16)(1050,"span",17),e(1051," separator"),a(1052,"br"),t()()(),n(1053,"td",18)(1054,"code",41),e(1055,"boolean"),t()(),n(1056,"td",21)(1057,"em")(1058,"strong"),e(1059,"(opcional)"),t()(),n(1060,"p"),e(1061,"Atribui uma linha separadora acima do item."),t()()(),n(1062,"tr",14)(1063,"td",15)(1064,"div",16)(1065,"span",17),e(1066," subItems"),a(1067,"br"),t()()(),n(1068,"td",18)(1069,"code",44),e(1070,"Array<PoPopupAction>"),t()(),n(1071,"td",21)(1072,"em")(1073,"strong"),e(1074,"(opcional)"),t()(),n(1075,"p"),e(1076,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),n(1077,"p"),e(1078,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),n(1079,"blockquote")(1080,"p"),e(1081,"As propriedades "),n(1082,"code"),e(1083,"disabled"),t(),e(1084,", "),n(1085,"code"),e(1086,"type"),t(),e(1087," e "),n(1088,"code"),e(1089,"visible"),t(),e(1090," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),n(1091,"blockquote")(1092,"p"),e(1093,"Quando "),n(1094,"code"),e(1095,"url"),t(),e(1096," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),n(1097,"blockquote")(1098,"p"),e(1099,"Em subn\xEDveis aninhados, o "),n(1100,"code"),e(1101,"icon"),t(),e(1102," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),n(1103,"tr",14)(1104,"td",15)(1105,"div",16)(1106,"span",17),e(1107," type"),a(1108,"br"),t()()(),n(1109,"td",18)(1110,"code",26),e(1111,"string"),t()(),n(1112,"td",21)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),n(1116,"p"),e(1117,"Define a cor do item."),t(),n(1118,"p"),e(1119,"Valores v\xE1lidos:"),t(),n(1120,"ul")(1121,"li")(1122,"code"),e(1123,"default"),t()(),n(1124,"li")(1125,"code"),e(1126,"danger"),t()()()()(),n(1127,"tr",14)(1128,"td",15)(1129,"div",16)(1130,"span",17),e(1131," url"),a(1132,"br"),t()()(),n(1133,"td",18)(1134,"code",26),e(1135,"string"),t()(),n(1136,"td",21)(1137,"em")(1138,"strong"),e(1139,"(opcional)"),t()(),n(1140,"p"),e(1141,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),n(1142,"p"),e(1143,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),n(1144,"code"),e(1145,"url"),t(),e(1146," \xE9 informada em um agrupador, o clique "),n(1147,"strong"),e(1148,"n\xE3o abrir\xE1 os subitens"),t(),e(1149,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),n(1150,"blockquote")(1151,"p"),e(1152,"Quando informada, tem prioridade sobre a propriedade "),n(1153,"code"),e(1154,"action"),t(),e(1155,"."),t()()()(),n(1156,"tr",14)(1157,"td",15)(1158,"div",16)(1159,"span",17),e(1160," visible"),a(1161,"br"),t()()(),n(1162,"td",18)(1163,"code",41),e(1164,"boolean "),t(),n(1165,"code",33),e(1166," Function"),t()(),n(1167,"td",21)(1168,"em")(1169,"strong"),e(1170,"(opcional)"),t()(),n(1171,"p"),e(1172,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()(),n(1173,"h4",34)(1174,"code",5),e(1175,"PoPageDefaultLiterals"),t()(),n(1176,"div",2)(1177,"p"),e(1178,"Interface para defini\xE7\xE3o das literais usadas no "),n(1179,"code"),e(1180,"po-page-default"),t(),e(1181,"."),t()(),n(1182,"h4",10),e(1183,"Propriedades"),t(),n(1184,"table",11)(1185,"tr",12)(1186,"th",13),e(1187,"Nome"),t(),n(1188,"th",13),e(1189,"Tipo"),t(),n(1190,"th",13),e(1191,"Descri\xE7\xE3o"),t()(),n(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),e(1196," otherActions"),a(1197,"br"),t()()(),n(1198,"td",18)(1199,"code",26),e(1200,"string"),t()(),n(1201,"td",21)(1202,"em")(1203,"strong"),e(1204,"(opcional)"),t()(),n(1205,"p"),e(1206,"Legenda do "),n(1207,"code"),e(1208,"po-dropdown"),t(),e(1209," de a\xE7\xF5es."),t()()()(),n(1210,"h3"),e(1211,"Enums"),t(),n(1212,"h4",4)(1213,"code",5),e(1214,"PoPageActionsLayout"),t()(),n(1215,"div",2)(1216,"p"),e(1217,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),n(1218,"code"),e(1219,"po-page-default"),t(),e(1220,"."),t(),n(1221,"blockquote")(1222,"p"),e(1223,"Compat\xEDvel com todos os valores de "),n(1224,"code"),e(1225,"PoPageHeaderType"),t(),e(1226,"."),t()()(),n(1227,"h4",10),e(1228,"Propriedades"),t(),n(1229,"table",11)(1230,"tr",12)(1231,"th",13),e(1232,"Nome"),t(),n(1233,"th",13),e(1234,"Descri\xE7\xE3o"),t()(),n(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),e(1239," default"),a(1240,"br"),t()()(),n(1241,"td",21)(1242,"p"),e(1243,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),n(1244,"em"),e(1245,"dropdown"),t(),e(1246,"."),t(),n(1247,"p"),e(1248,"Quando "),n(1249,"code"),e(1250,"PoPageAction.kind"),t(),e(1251," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),n(1252,"code"),e(1253,"primary"),t(),e(1254,`
e as demais recebem `),n(1255,"code"),e(1256,"secondary"),t(),e(1257,"."),t()()(),n(1258,"tr",14)(1259,"td",15)(1260,"div",16)(1261,"span",17),e(1262," dropdown"),a(1263,"br"),t()()(),n(1264,"td",21)(1265,"p"),e(1266,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),n(1267,"em"),e(1268,"dropdown"),t(),e(1269,"."),t()()(),n(1270,"tr",14)(1271,"td",15)(1272,"div",16)(1273,"span",17),e(1274," mixed"),a(1275,"br"),t()()(),n(1276,"td",21)(1277,"p"),e(1278,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),n(1279,"em"),e(1280,"dropdown"),t(),e(1281,"."),t()()()(),n(1282,"h4",4)(1283,"code",5),e(1284,"PoPageHeaderType"),t()(),n(1285,"div",2)(1286,"p"),e(1287,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),n(1288,"code"),e(1289,"po-page-default"),t(),e(1290,"."),t()(),n(1291,"h4",10),e(1292,"Propriedades"),t(),n(1293,"table",11)(1294,"tr",12)(1295,"th",13),e(1296,"Nome"),t(),n(1297,"th",13),e(1298,"Descri\xE7\xE3o"),t()(),n(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),e(1303," primary"),a(1304,"br"),t()()(),n(1305,"td",21)(1306,"p"),e(1307,"Layout padr\xE3o com suporte a "),n(1308,"code"),e(1309,"p-breadcrumb"),t(),e(1310,"."),t()()(),n(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),e(1315," secondary"),a(1316,"br"),t()()(),n(1317,"td",21)(1318,"p"),e(1319,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),t(),n(1320,"blockquote")(1321,"p"),e(1322,"Incompat\xEDvel com "),n(1323,"code"),e(1324,"p-breadcrumb"),t(),e(1325,"."),t()()()(),n(1326,"tr",14)(1327,"td",15)(1328,"div",16)(1329,"span",17),e(1330," tertiary"),a(1331,"br"),t()()(),n(1332,"td",21)(1333,"p"),e(1334,"Layout simplificado sem bot\xE3o de retorno."),t(),n(1335,"blockquote")(1336,"p"),e(1337,"Incompat\xEDvel com "),n(1338,"code"),e(1339,"p-breadcrumb"),t(),e(1340,"."),t()()()()()())},dependencies:[C],encapsulation:2})}return o})();var De=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(q(re),q(pe))};static \u0275cmp=h({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-page-default-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view")(8,"sample-po-page-default-refresh-view"),t()()()),r&2&&(s("p-actions",i.actions),d(2),s("p-active",i.activeTab==="doc"),d(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[v,y,P,fe,xe,ye,Ce,we],encapsulation:2})}return o})();var Ge=[{path:"",component:De}],_e=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=H({type:o});static \u0275inj=O({imports:[ee.forChild(Ge),ee]})}return o})();var Lt=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=H({type:o});static \u0275inj=O({imports:[he,_e]})}return o})();export{Lt as DocPoPageDefaultModule};
