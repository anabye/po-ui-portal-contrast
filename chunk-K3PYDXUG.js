import{o as C,p as ge}from"./chunk-7OLT6NYH.js";import{A as de,Jb as P,Kb as y,La as se,Oa as ce,Ob as R,Pa as ue,S as pe,U as me,Z as z,_a as be,a as N,ra as j,w as re,wb as v}from"./chunk-QHAIKAWB.js";import{$a as O,Aa as U,Fa as c,Ga as n,Ha as t,I as te,Ia as a,J as F,M as L,Nb as A,Nc as I,Oc as q,P as b,Pa as _,Pc as H,Q as g,Qa as u,Qc as V,Rc as W,Sa as w,Wa as ne,Xa as J,Ya as K,cb as D,db as e,dd as oe,fb as M,fd as le,hb as E,hd as X,ia as p,ib as h,jb as S,na as G,pa as f,qa as B,qb as ie,rb as ae,sb as T,za as Q}from"./chunk-A2WYYMKN.js";import{a as $,b as ee}from"./chunk-NCEQPEJE.js";var Ee=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&a(0,"po-page-default",0)},dependencies:[v],encapsulation:2})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-default-basic"),t(),a(23,"hr")),r&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel),p(),c("ngClass",T(4,Me,i.hideSampleCodeTabs)))},dependencies:[A,C,P,y,Ee],encapsulation:2})}return l})();var ke=()=>({});function Le(l,_e){if(l&1){let d=_();n(0,"po-input",36),S("ngModelChange",function(i){b(d);let m=w(2);return h(m.helperFooterLabel,i)||(m.helperFooterLabel=i),g(i)}),t()}if(l&2){let d=w(2);E("ngModel",d.helperFooterLabel)}}function Fe(l,_e){if(l&1){let d=_();n(0,"po-widget",10)(1,"div",6)(2,"po-input",32),S("ngModelChange",function(i){b(d);let m=w();return h(m.helperTitle,i)||(m.helperTitle=i),g(i)}),t(),n(3,"po-input",33),S("ngModelChange",function(i){b(d);let m=w();return h(m.helperContent,i)||(m.helperContent=i),g(i)}),t()(),n(4,"div",6)(5,"po-radio-group",34),u("ngModelChange",function(i){b(d);let m=w();return g(m.helperType=i)}),t()(),n(6,"div",6),Q(7,Le,1,1,"po-input",35),t()()}if(l&2){let d=w();p(2),E("ngModel",d.helperTitle),p(),E("ngModel",d.helperContent),p(2),c("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),p(2),U(d.helperType==="help"?7:-1)}}var fe=(()=>{class l{poNotification=L(j);action={label:"",visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=!1;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(d){let r=ee($({},d),{visible:d.visible!==void 0?d.visible:!0,disabled:d.disabled!==void 0?d.disabled:!1});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}onBack(){this.poNotification.information("Back button clicked (p-back event)")}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=!1,this.subtitle="",this.title="PO Page Default",this.restoreActionForm()}restoreActionForm(){this.action={label:"",visible:!0,disabled:!1}}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=_();n(0,"po-page-default",5),u("p-back",function(){return i.onBack()}),t(),a(1,"po-divider"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),S("ngModelChange",function(o){return b(m),h(i.title,o)||(i.title=o),g(o)}),t(),n(6,"po-input",8),S("ngModelChange",function(o){return b(m),h(i.subtitle,o)||(i.subtitle=o),g(o)}),t(),n(7,"po-checkbox",9),S("ngModelChange",function(o){return b(m),h(i.showHelper,o)||(i.showHelper=o),g(o)}),t(),Q(8,Fe,8,6,"po-widget",10),n(9,"po-select",11),u("ngModelChange",function(o){return i.pageHeaderType=o}),t(),n(10,"po-select",12),u("ngModelChange",function(o){return i.pageActionsLayout=o}),t(),n(11,"po-input",13),S("ngModelChange",function(o){return b(m),h(i.literals,o)||(i.literals=o),g(o)}),u("p-change",function(){return i.changeLiterals()}),t(),n(12,"po-radio-group",14),S("ngModelChange",function(o){return b(m),h(i.componentsSize,o)||(i.componentsSize=o),g(o)}),t()()(),a(13,"po-divider"),n(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),S("ngModelChange",function(o){return b(m),h(i.action.label,o)||(i.action.label=o),g(o)}),t(),n(19,"po-input",17),S("ngModelChange",function(o){return b(m),h(i.action.action,o)||(i.action.action=o),g(o)}),t(),n(20,"po-input",18),S("ngModelChange",function(o){return b(m),h(i.action.url,o)||(i.action.url=o),g(o)}),t(),n(21,"po-select",19),u("ngModelChange",function(o){return i.action.type=o}),t(),n(22,"po-select",20),u("ngModelChange",function(o){return i.action.icon=o}),t(),n(23,"po-select",21),u("ngModelChange",function(o){return i.action.kind=o}),t(),n(24,"po-checkbox-group",22),u("ngModelChange",function(o){return i.action=o}),t()(),n(25,"div",6)(26,"po-button",23),u("p-click",function(){return i.addAction(i.action)}),t()()()(),a(27,"po-divider"),n(28,"form",null,2)(30,"div",6)(31,"po-input",24),S("ngModelChange",function(o){return b(m),h(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),g(o)}),t()()(),n(32,"form",null,3)(34,"div",6)(35,"po-input",25),S("ngModelChange",function(o){return b(m),h(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),g(o)}),t(),n(36,"po-input",26),S("ngModelChange",function(o){return b(m),h(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),g(o)}),t()(),n(37,"div",6)(38,"po-button",27),u("p-click",function(){return i.addBreadcrumbItem()}),t()()(),a(39,"po-divider"),n(40,"form",null,4)(42,"div",6)(43,"po-input",28),S("ngModelChange",function(o){return b(m),h(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),g(o)}),t(),n(44,"po-input",29),S("ngModelChange",function(o){return b(m),h(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),g(o)}),t()(),n(45,"div",6)(46,"po-button",30),u("p-click",function(){return i.addBreadcrumbParam()}),t()()(),a(47,"po-divider"),n(48,"div",6)(49,"po-button",31),u("p-click",function(){return i.restore()}),t()()}if(r&2){let m=O(16),s=O(33),o=O(41);c("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??ae(42,ke))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),p(5),E("ngModel",i.title),p(),E("ngModel",i.subtitle),p(),E("ngModel",i.showHelper),p(),U(i.showHelper?8:-1),p(),c("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),p(),c("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),p(),E("ngModel",i.literals),p(),E("ngModel",i.componentsSize),c("p-columns",4)("p-options",i.componentsSizeOptions),p(6),E("ngModel",i.action.label),p(),E("ngModel",i.action.action),p(),E("ngModel",i.action.url),p(),c("ngModel",i.action.type)("p-options",i.typeOptions),p(),c("ngModel",i.action.icon)("p-options",i.iconOptions),p(),c("ngModel",i.action.kind)("p-options",i.actionKindOptions),p(),c("ngModel",i.action)("p-columns",4)("p-indeterminate",!0)("p-options",i.actionOptions),p(2),c("p-disabled",m.form.invalid),p(5),E("ngModel",i.breadcrumb.favorite),p(4),E("ngModel",i.breadcrumbItem.label),p(),E("ngModel",i.breadcrumbItem.link),p(2),c("p-disabled",s.invalid??!1),p(5),E("ngModel",i.breadcrumbParams.property),p(),E("ngModel",i.breadcrumbParams.value),p(2),c("p-disabled",o.invalid??!1)}},dependencies:[W,I,q,V,H,re,N,pe,de,ue,me,be,v,R],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-helper]="helper || ''"
  [p-literals]="customLiterals ?? {}"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
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

    <po-checkbox class="po-md-12 po-pt-2 po-pb-2" name="showHelper" [(ngModel)]="showHelper" p-label="Helper">
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
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-default-labs"),t(),a(23,"hr")),r&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel),p(),c("ngClass",T(4,Oe,i.hideSampleCodeTabs)))},dependencies:[A,C,P,y,fe],encapsulation:2})}return l})();var Z=(()=>{class l{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=te({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var qe=["formShare"],ve=(()=>{class l{poNotification=L(j);sampleDashboardService=L(Z);formShare;poModal;columns;email="";isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&ne(qe,7)(z,7),r&2){let m;J(m=K())&&(i.formShare=m.first),J(m=K())&&(i.poModal=m.first)}},standalone:!1,features:[ie([Z])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=_();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),e(4,"540"),t(),n(5,"div",5),e(6,"www.po.com.br"),t()(),n(7,"po-widget",6)(8,"div",4),e(9,"300 views"),t(),n(10,"div",5),e(11,"https://po-ui.io"),t()(),n(12,"po-widget",7)(13,"div",4),e(14,"Online"),t(),n(15,"div",5),e(16,"28 days"),t()(),n(17,"po-widget",8)(18,"div",4),e(19,"266"),t(),n(20,"div",5),e(21,"@po-ui/ng-components - 1.10.1"),t()(),n(22,"po-widget",9)(23,"div",4),e(24,"800 questions"),t(),n(25,"div",5),e(26,"https://devforum.po.com.br"),t()(),n(27,"po-widget",10)(28,"div",4),e(29,"AngularJS - Angular 6"),t(),n(30,"div",5),e(31,"Angular 6 most downloaded"),t()()(),a(32,"po-divider")(33,"po-table",11),t(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),S("ngModelChange",function(o){return b(m),h(i.email,o)||(i.email=o),g(o)}),t()()()}r&2&&(c("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),p(33),c("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),p(),c("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),p(3),E("ngModel",i.email))},dependencies:[W,I,q,V,H,N,ce,z,v,se,R],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default - Dashboard"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default
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
`),t()()()()(),n(31,"div",12),a(32,"sample-po-page-default-dashboard"),t(),a(33,"hr")),r&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel),p(),c("ngClass",T(4,Ve,i.hideSampleCodeTabs)))},dependencies:[A,C,P,y,ve],encapsulation:2})}return l})();var ye=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),n(7,"code"),e(8,"po-page-default"),t(),e(9,", "),n(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
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
exibir\xE3o apenas o \xEDcone.`),t()()()(),n(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),e(391," p-page-header-type"),a(392,"br"),t()()(),n(393,"td",18)(394,"code",26),e(395,"string"),t()(),n(396,"td",20)(397,"p")(398,"code"),e(399,"primary"),t()()(),n(400,"td",21)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),t(),n(406,"p"),e(407,"Aceita valores do enum "),n(408,"code"),e(409,"PoPageHeaderType"),t(),e(410,"."),t()()(),n(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),e(415," p-subtitle"),a(416,"br"),t()()(),n(417,"td",18)(418,"code",26),e(419,"string"),t()(),n(420,"td",20),e(421,"-"),t(),n(422,"td",21)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),n(426,"p"),e(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),t(),n(428,"p"),e(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),n(430,"code"),e(431,"<b>"),t(),e(432," (negrito), "),n(433,"code"),e(434,"<strong>"),t(),e(435," (negrito), "),n(436,"code"),e(437,"<i>"),t(),e(438," (it\xE1lico), "),n(439,"code"),e(440,"<em>"),t(),e(441,` (it\xE1lico) e
`),n(442,"code"),e(443,"<u>"),t(),e(444," (sublinhado)."),t(),n(445,"p"),e(446,"Exemplo:"),t(),n(447,"pre")(448,"code",31),e(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),t()(),n(450,"blockquote")(451,"p"),e(452,"Requer que "),n(453,"code"),e(454,"p-title"),t(),e(455," esteja definido."),t()()()(),n(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),e(460," p-title"),a(461,"br"),t()()(),n(462,"td",18)(463,"code",26),e(464,"string"),t()(),n(465,"td",20),e(466,"-"),t(),n(467,"td",21)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),n(471,"p"),e(472,"Define o t\xEDtulo principal da p\xE1gina."),t()()()(),n(473,"h3"),e(474,"Interfaces"),t(),n(475,"h4",33)(476,"code",5),e(477,"PoBreadcrumbItem"),t()(),n(478,"div",2)(479,"p"),e(480,"Interface que define cada item do componente "),n(481,"strong"),e(482,"po-breadcrumb"),t(),e(483,"."),t()(),n(484,"h4",10),e(485,"Propriedades"),t(),n(486,"table",11)(487,"tr",12)(488,"th",13),e(489,"Nome"),t(),n(490,"th",13),e(491,"Tipo"),t(),n(492,"th",13),e(493,"Descri\xE7\xE3o"),t()(),n(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),e(498," action"),a(499,"br"),t()()(),n(500,"td",18)(501,"code",34),e(502,"Function"),t()(),n(503,"td",21)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),n(507,"p"),e(508,"A\xE7\xE3o executada ao clicar no item."),t(),n(509,"blockquote")(510,"p"),e(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(512,"em"),e(513,"label"),t(),e(514," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),n(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),e(519," label"),a(520,"br"),t()()(),n(521,"td",18)(522,"code",26),e(523,"string"),t()(),n(524,"td",21)(525,"p"),e(526,"R\xF3tulo do item."),t()()(),n(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),e(531," link"),a(532,"br"),t()()(),n(533,"td",18)(534,"code",26),e(535,"string"),t()(),n(536,"td",21)(537,"em")(538,"strong"),e(539,"(opcional)"),t()(),n(540,"p"),e(541,"Url do item."),t(),n(542,"blockquote")(543,"p"),e(544,"Caso o item tamb\xE9m contenha uma "),n(545,"em"),e(546,"action"),t(),e(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(548,"em"),e(549,"link"),t(),e(550,"."),t()(),n(551,"blockquote")(552,"p"),e(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(554,"strong")(555,"a",35),e(556,"Veja um exemplo de como criar rotas aqui"),t()(),e(557,"."),t()(),n(558,"blockquote")(559,"p"),e(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(561,"code"),e(562,"p-favorite-service"),t(),e(563," consiga favoritar ou desfavoritar."),t()()()()(),n(564,"h4",33)(565,"code",5),e(566,"PoBreadcrumb"),t()(),n(567,"div",2)(568,"p"),e(569,"Interface que define o "),n(570,"code"),e(571,"po-breadcrumb"),t(),e(572,"."),t()(),n(573,"h4",10),e(574,"Propriedades"),t(),n(575,"table",11)(576,"tr",12)(577,"th",13),e(578,"Nome"),t(),n(579,"th",13),e(580,"Tipo"),t(),n(581,"th",13),e(582,"Descri\xE7\xE3o"),t()(),n(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),e(587," favorite"),a(588,"br"),t()()(),n(589,"td",18)(590,"code",26),e(591,"string"),t()(),n(592,"td",21)(593,"em")(594,"strong"),e(595,"(opcional)"),t()(),n(596,"p"),e(597,"Permite definir uma URL para favoritar ou desfavoritar."),t(),n(598,"blockquote")(599,"p"),e(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(601,"code"),e(602,"p-favorite-service"),t(),e(603," do componente "),n(604,"code"),e(605,"po-breadcrumb"),t(),e(606,"."),t()()()(),n(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),e(611," items"),a(612,"br"),t()()(),n(613,"td",18)(614,"code",36),e(615,"Array<PoBreadcrumbItem>"),t()(),n(616,"td",21)(617,"p"),e(618,"Lista de itens do "),n(619,"em"),e(620,"breadcrumb"),t(),e(621,"."),t(),n(622,"p")(623,"strong"),e(624,"Exemplo:"),t()(),n(625,"pre")(626,"code"),e(627,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),n(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),e(632," params"),a(633,"br"),t()()(),n(634,"td",18)(635,"code",37),e(636,"object"),t()(),n(637,"td",21)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),n(641,"p"),e(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),n(643,"h4",33)(644,"code",5),e(645,"PoHelperOptions"),t()(),n(646,"div",2)(647,"p"),e(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),n(649,"em"),e(650,"helper"),t(),e(651,")."),t()(),n(652,"h4",10),e(653,"Propriedades"),t(),n(654,"table",11)(655,"tr",12)(656,"th",13),e(657,"Nome"),t(),n(658,"th",13),e(659,"Tipo"),t(),n(660,"th",13),e(661,"Descri\xE7\xE3o"),t()(),n(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),e(666," content"),a(667,"br"),t()()(),n(668,"td",18)(669,"code",26),e(670,"string"),t()(),n(671,"td",21)(672,"em")(673,"strong"),e(674,"(opcional)"),t()(),n(675,"p"),e(676,"Texto explicativo exibido no popover."),t(),n(677,"p"),e(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),n(679,"code"),e(680,"<b>"),t(),e(681," (negrito), "),n(682,"code"),e(683,"<strong>"),t(),e(684," (negrito), "),n(685,"code"),e(686,"<i>"),t(),e(687," (it\xE1lico), "),n(688,"code"),e(689,"<em>"),t(),e(690,` (it\xE1lico) e
`),n(691,"code"),e(692,"<u>"),t(),e(693," (sublinhado)."),t(),n(694,"p"),e(695,"Exemplo:"),t(),n(696,"pre")(697,"code",31),e(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),t()()()(),n(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),e(703," eventOnClick"),a(704,"br"),t()()(),n(705,"td",18)(706,"code",34),e(707,"Function"),t()(),n(708,"td",21)(709,"em")(710,"strong"),e(711,"(opcional)"),t()(),n(712,"p"),e(713,"Evento disparado ao clicar no \xEDcone do helper."),t(),n(714,"p"),e(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),t(),n(716,"p"),e(717,"Pode ser uma fun\xE7\xE3o ou um "),n(718,"code"),e(719,"EventEmitter"),t(),e(720,"."),t(),n(721,"p"),e(722,"Exemplo:"),t(),n(723,"pre")(724,"code"),e(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),t()()()(),n(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),e(730," footerAction"),a(731,"br"),t()()(),n(732,"td",18)(733,"code",38),e(734,`{ label: string; action: Function;
}`),t()(),n(735,"td",21)(736,"em")(737,"strong"),e(738,"(opcional)"),t()(),n(739,"p"),e(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),n(741,"code"),e(742,"help"),t(),e(743," e desconsiderada quando o type for "),n(744,"code"),e(745,"info"),t(),e(746,"."),t(),n(747,"p"),e(748,"Deve ser um objeto com as propriedades:"),t(),n(749,"ul")(750,"li")(751,"code"),e(752,"label"),t(),e(753,": Texto do bot\xE3o."),t(),n(754,"li")(755,"code"),e(756,"action"),t(),e(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),t()(),n(758,"p"),e(759,"Exemplo:"),t(),n(760,"pre")(761,"code",31),e(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),t()()()(),n(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),e(767," title"),a(768,"br"),t()()(),n(769,"td",18)(770,"code",26),e(771,"string"),t()(),n(772,"td",21)(773,"em")(774,"strong"),e(775,"(opcional)"),t()(),n(776,"p"),e(777,"T\xEDtulo do helper exibido no popover."),t()()(),n(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),e(782," type"),a(783,"br"),t()()(),n(784,"td",18)(785,"code",39),e(786,"'info' "),t(),n(787,"code",40),e(788," 'help'"),t()(),n(789,"td",21)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),n(793,"p"),e(794,"Tipo do \xEDcone exibido: "),n(795,"code"),e(796,"info"),t(),e(797," ou "),n(798,"code"),e(799,"help"),t(),e(800,"."),t(),n(801,"p"),e(802,"Quando o valor \xE9 "),n(803,"code"),e(804,"info"),t(),e(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),t(),n(806,"p"),e(807,"Quando o valor \xE9 "),n(808,"code"),e(809,"help"),t(),e(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),t()()()(),n(811,"h4",33)(812,"code",5),e(813,"PoPageAction"),t()(),n(814,"div",2)(815,"p"),e(816,"Interface para as a\xE7\xF5es dos componentes "),n(817,"code"),e(818,"po-page-default"),t(),e(819," e "),n(820,"code"),e(821,"po-page-list"),t(),e(822,"."),t(),n(823,"p"),e(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),n(825,"em"),e(826,"dropdown"),t(),e(827,`,
conforme o `),n(828,"code"),e(829,"PoPageActionsLayout"),t(),e(830," e o tamanho da tela."),t(),n(831,"blockquote")(832,"p"),e(833,"As propriedades "),n(834,"code"),e(835,"separator"),t(),e(836,", "),n(837,"code"),e(838,"selected"),t(),e(839," e "),n(840,"code"),e(841,"subItems"),t(),e(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),n(843,"em"),e(844,"dropdown"),t(),e(845,"."),t()()(),n(846,"h4",10),e(847,"Propriedades"),t(),n(848,"table",11)(849,"tr",12)(850,"th",13),e(851,"Nome"),t(),n(852,"th",13),e(853,"Tipo"),t(),n(854,"th",13),e(855,"Descri\xE7\xE3o"),t()(),n(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),e(860," action"),a(861,"br"),t()()(),n(862,"td",18)(863,"code",34),e(864,"Function"),t()(),n(865,"td",21)(866,"em")(867,"strong"),e(868,"(opcional)"),t()(),n(869,"p"),e(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),n(871,"p"),e(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),n(873,"code"),e(874,"subItems"),t(),e(875,"."),t(),n(876,"blockquote")(877,"p"),e(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),n(879,"em"),e(880,"bind"),t(),e(881,`:
`),n(882,"code"),e(883,"action: this.myFunction.bind(this)"),t()()()()(),n(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),e(888," disabled"),a(889,"br"),t()()(),n(890,"td",18)(891,"code",41),e(892,"boolean "),t(),n(893,"code",34),e(894," Function"),t()(),n(895,"td",21)(896,"em")(897,"strong"),e(898,"(opcional)"),t()(),n(899,"p"),e(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),n(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),e(905," icon"),a(906,"br"),t()()(),n(907,"td",18)(908,"code",26),e(909,"string "),t(),n(910,"code",42),e(911," TemplateRef<void>"),t()(),n(912,"td",21)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),n(916,"p"),e(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),n(918,"p"),e(919,"Aceita \xEDcones da "),n(920,"a",43),e(921,"Biblioteca de \xEDcones"),t(),e(922,`, fontes externas (ex: Font Awesome)
ou um `),n(923,"code"),e(924,"TemplateRef"),t(),e(925," para \xEDcones customizados."),t(),n(926,"pre")(927,"code"),e(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),n(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),e(933," kind"),a(934,"br"),t()()(),n(935,"td",18)(936,"code",26),e(937,"string"),t()(),n(938,"td",21)(939,"em")(940,"strong"),e(941,"(opcional)"),t()(),n(942,"p"),e(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),n(944,"em"),e(945,"dropdown"),t(),e(946,"."),t(),n(947,"p"),e(948,"Valores permitidos:"),t(),n(949,"ul")(950,"li")(951,"code"),e(952,"primary"),t(),e(953,": bot\xE3o com maior destaque visual."),t(),n(954,"li")(955,"code"),e(956,"secondary"),t(),e(957,": estilo padr\xE3o."),t()(),n(958,"blockquote")(959,"p"),e(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),t()(),n(961,"blockquote")(962,"p"),e(963,"Somente uma a\xE7\xE3o pode ter "),n(964,"code"),e(965,"kind"),t(),e(966," igual a "),n(967,"code"),e(968,"primary"),t(),e(969,". Caso mais de uma defina "),n(970,"code"),e(971,"primary"),t(),e(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),n(973,"code"),e(974,"secondary"),t(),e(975,"."),t()(),n(976,"blockquote")(977,"p"),e(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),n(979,"code"),e(980,"PoPageActionsLayout"),t(),e(981,"."),t()()()(),n(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),e(986," label"),a(987,"br"),t()()(),n(988,"td",18)(989,"code",26),e(990,"string"),t()(),n(991,"td",21)(992,"p"),e(993,"R\xF3tulo da a\xE7\xE3o."),t(),n(994,"p"),e(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),n(996,"code"),e(997,"subItems"),t(),e(998,"."),t()()(),n(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),e(1003," selected"),a(1004,"br"),t()()(),n(1005,"td",18)(1006,"code",41),e(1007,"boolean"),t()(),n(1008,"td",21)(1009,"em")(1010,"strong"),e(1011,"(opcional)"),t()(),n(1012,"p"),e(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),n(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),e(1018," separator"),a(1019,"br"),t()()(),n(1020,"td",18)(1021,"code",41),e(1022,"boolean"),t()(),n(1023,"td",21)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),t()(),n(1027,"p"),e(1028,"Atribui uma linha separadora acima do item."),t()()(),n(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),e(1033," subItems"),a(1034,"br"),t()()(),n(1035,"td",18)(1036,"code",44),e(1037,"Array<PoPopupAction>"),t()(),n(1038,"td",21)(1039,"em")(1040,"strong"),e(1041,"(opcional)"),t()(),n(1042,"p"),e(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),n(1044,"p"),e(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),n(1046,"blockquote")(1047,"p"),e(1048,"As propriedades "),n(1049,"code"),e(1050,"disabled"),t(),e(1051,", "),n(1052,"code"),e(1053,"type"),t(),e(1054," e "),n(1055,"code"),e(1056,"visible"),t(),e(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),n(1058,"blockquote")(1059,"p"),e(1060,"Quando "),n(1061,"code"),e(1062,"url"),t(),e(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),n(1064,"blockquote")(1065,"p"),e(1066,"Em subn\xEDveis aninhados, o "),n(1067,"code"),e(1068,"icon"),t(),e(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),n(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),e(1074," type"),a(1075,"br"),t()()(),n(1076,"td",18)(1077,"code",26),e(1078,"string"),t()(),n(1079,"td",21)(1080,"em")(1081,"strong"),e(1082,"(opcional)"),t()(),n(1083,"p"),e(1084,"Define a cor do item."),t(),n(1085,"p"),e(1086,"Valores v\xE1lidos:"),t(),n(1087,"ul")(1088,"li")(1089,"code"),e(1090,"default"),t()(),n(1091,"li")(1092,"code"),e(1093,"danger"),t()()()()(),n(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),e(1098," url"),a(1099,"br"),t()()(),n(1100,"td",18)(1101,"code",26),e(1102,"string"),t()(),n(1103,"td",21)(1104,"em")(1105,"strong"),e(1106,"(opcional)"),t()(),n(1107,"p"),e(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),n(1109,"p"),e(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),n(1111,"code"),e(1112,"url"),t(),e(1113," \xE9 informada em um agrupador, o clique "),n(1114,"strong"),e(1115,"n\xE3o abrir\xE1 os subitens"),t(),e(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),n(1117,"blockquote")(1118,"p"),e(1119,"Quando informada, tem prioridade sobre a propriedade "),n(1120,"code"),e(1121,"action"),t(),e(1122,"."),t()()()(),n(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),e(1127," visible"),a(1128,"br"),t()()(),n(1129,"td",18)(1130,"code",41),e(1131,"boolean "),t(),n(1132,"code",34),e(1133," Function"),t()(),n(1134,"td",21)(1135,"em")(1136,"strong"),e(1137,"(opcional)"),t()(),n(1138,"p"),e(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()(),n(1140,"h4",33)(1141,"code",5),e(1142,"PoPageDefaultLiterals"),t()(),n(1143,"div",2)(1144,"p"),e(1145,"Interface para defini\xE7\xE3o das literais usadas no "),n(1146,"code"),e(1147,"po-page-default"),t(),e(1148,"."),t()(),n(1149,"h4",10),e(1150,"Propriedades"),t(),n(1151,"table",11)(1152,"tr",12)(1153,"th",13),e(1154,"Nome"),t(),n(1155,"th",13),e(1156,"Tipo"),t(),n(1157,"th",13),e(1158,"Descri\xE7\xE3o"),t()(),n(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),e(1163," otherActions"),a(1164,"br"),t()()(),n(1165,"td",18)(1166,"code",26),e(1167,"string"),t()(),n(1168,"td",21)(1169,"em")(1170,"strong"),e(1171,"(opcional)"),t()(),n(1172,"p"),e(1173,"Legenda do "),n(1174,"code"),e(1175,"po-dropdown"),t(),e(1176," de a\xE7\xF5es."),t()()()(),n(1177,"h3"),e(1178,"Enums"),t(),n(1179,"h4",4)(1180,"code",5),e(1181,"PoPageActionsLayout"),t()(),n(1182,"div",2)(1183,"p"),e(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),n(1185,"code"),e(1186,"po-page-default"),t(),e(1187,"."),t(),n(1188,"blockquote")(1189,"p"),e(1190,"Compat\xEDvel com todos os valores de "),n(1191,"code"),e(1192,"PoPageHeaderType"),t(),e(1193,"."),t()()(),n(1194,"h4",10),e(1195,"Propriedades"),t(),n(1196,"table",11)(1197,"tr",12)(1198,"th",13),e(1199,"Nome"),t(),n(1200,"th",13),e(1201,"Descri\xE7\xE3o"),t()(),n(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),e(1206," default"),a(1207,"br"),t()()(),n(1208,"td",21)(1209,"p"),e(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),n(1211,"em"),e(1212,"dropdown"),t(),e(1213,"."),t(),n(1214,"p"),e(1215,"Quando "),n(1216,"code"),e(1217,"PoPageAction.kind"),t(),e(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),n(1219,"code"),e(1220,"primary"),t(),e(1221,`
e as demais recebem `),n(1222,"code"),e(1223,"secondary"),t(),e(1224,"."),t()()(),n(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),e(1229," dropdown"),a(1230,"br"),t()()(),n(1231,"td",21)(1232,"p"),e(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),n(1234,"em"),e(1235,"dropdown"),t(),e(1236,"."),t()()(),n(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),e(1241," mixed"),a(1242,"br"),t()()(),n(1243,"td",21)(1244,"p"),e(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),n(1246,"em"),e(1247,"dropdown"),t(),e(1248,"."),t()()()(),n(1249,"h4",4)(1250,"code",5),e(1251,"PoPageHeaderType"),t()(),n(1252,"div",2)(1253,"p"),e(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),n(1255,"code"),e(1256,"po-page-default"),t(),e(1257,"."),t()(),n(1258,"h4",10),e(1259,"Propriedades"),t(),n(1260,"table",11)(1261,"tr",12)(1262,"th",13),e(1263,"Nome"),t(),n(1264,"th",13),e(1265,"Descri\xE7\xE3o"),t()(),n(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),e(1270," primary"),a(1271,"br"),t()()(),n(1272,"td",21)(1273,"p"),e(1274,"Layout padr\xE3o com suporte a "),n(1275,"code"),e(1276,"p-breadcrumb"),t(),e(1277,"."),t()()(),n(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),e(1282," secondary"),a(1283,"br"),t()()(),n(1284,"td",21)(1285,"p"),e(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),t(),n(1287,"blockquote")(1288,"p"),e(1289,"Incompat\xEDvel com "),n(1290,"code"),e(1291,"p-breadcrumb"),t(),e(1292,"."),t()()()(),n(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),e(1297," tertiary"),a(1298,"br"),t()()(),n(1299,"td",21)(1300,"p"),e(1301,"Layout simplificado sem bot\xE3o de retorno."),t(),n(1302,"blockquote")(1303,"p"),e(1304,"Incompat\xEDvel com "),n(1305,"code"),e(1306,"p-breadcrumb"),t(),e(1307,"."),t()()()()()())},dependencies:[C],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(G(oe),G(le))};static \u0275cmp=f({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-page-default-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),t()()()),r&2&&(c("p-actions",i.actions),p(2),c("p-active",i.activeTab==="doc"),p(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[v,P,y,Se,xe,Pe,ye],encapsulation:2})}return l})();var ze=[{path:"",component:Ce}],we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=B({type:l});static \u0275inj=F({imports:[X.forChild(ze),X]})}return l})();var Pt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=B({type:l});static \u0275inj=F({imports:[ge,we]})}return l})();export{Pt as DocPoPageDefaultModule};
