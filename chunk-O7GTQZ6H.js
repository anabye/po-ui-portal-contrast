import{o as y,p as ce}from"./chunk-7OLT6NYH.js";import{$ as ae,Ea as oe,Jb as x,Kb as v,La as re,Pa as le,S as O,Ta as se,U as ie,Z as ne,_a as me,a as ee,db as de,ra as W,w as te,wb as pe,zb as A}from"./chunk-QHAIKAWB.js";import{$a as T,Fa as g,Ga as i,Ha as t,I as Y,Ia as o,Ic as Z,J as F,M as C,Nb as M,Nc as H,Oc as j,P as c,Pa as B,Pc as V,Q as u,Qa as S,Qc as q,Rc as G,Wa as K,Xa as N,Ya as z,cb as L,db as e,dd as $,fb as w,fd as I,hb as b,hd as J,ia as m,ib as h,jb as E,na as R,pa as f,qa as k,qb as X,sb as _}from"./chunk-A2WYYMKN.js";import"./chunk-NCEQPEJE.js";var ue=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&o(0,"po-page-list",0)},dependencies:[A],encapsulation:2})}return s})();var Le=s=>({"docs-sample-code-tabs":s}),be=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Basic"),t(),i(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-basic"),t(),o(23,"hr")),r&2&&(m(5),L("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),g("ngClass",_(4,Le,n.hideSampleCodeTabs)))},dependencies:[M,y,x,v,ue],encapsulation:2})}return s})();var he=(()=>{class s{poNotification=C(W);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs"]],standalone:!1,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",6),o(1,"po-divider")(2,"po-info",7),t(),o(3,"po-divider"),i(4,"form",null,0)(6,"div",8)(7,"po-input",9),E("ngModelChange",function(a){return c(d),h(n.action.action,a)||(n.action.action=a),u(a)}),t(),i(8,"po-input",10),E("ngModelChange",function(a){return c(d),h(n.action.label,a)||(n.action.label=a),u(a)}),t(),i(9,"po-input",11),E("ngModelChange",function(a){return c(d),h(n.action.url,a)||(n.action.url=a),u(a)}),t(),i(10,"po-select",12),E("ngModelChange",function(a){return c(d),h(n.action.type,a)||(n.action.type=a),u(a)}),t(),i(11,"po-select",13),E("ngModelChange",function(a){return c(d),h(n.action.icon,a)||(n.action.icon=a),u(a)}),t(),i(12,"po-checkbox-group",14),E("ngModelChange",function(a){return c(d),h(n.action,a)||(n.action=a),u(a)}),t()(),i(13,"div",8)(14,"po-button",15),S("p-click",function(){return n.addAction(n.action)}),t()()(),o(15,"po-divider"),i(16,"form",null,1)(18,"div",8)(19,"po-input",16),E("ngModelChange",function(a){return c(d),h(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),u(a)}),t()()(),i(20,"form",null,2)(22,"div",8)(23,"po-input",17),E("ngModelChange",function(a){return c(d),h(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),u(a)}),t(),i(24,"po-input",18),E("ngModelChange",function(a){return c(d),h(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),u(a)}),t()(),i(25,"div",8)(26,"po-button",19),S("p-click",function(){return n.addBreadcrumbItem()}),t()()(),o(27,"po-divider"),i(28,"form",null,3)(30,"div",8)(31,"po-input",20),E("ngModelChange",function(a){return c(d),h(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),u(a)}),t(),i(32,"po-input",21),E("ngModelChange",function(a){return c(d),h(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),u(a)}),t()(),i(33,"div",8)(34,"po-button",22),S("p-click",function(){return n.addBreadcrumbParam()}),t()()(),o(35,"po-divider"),i(36,"div",8)(37,"po-input",23),E("ngModelChange",function(a){return c(d),h(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),u(a)}),S("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),t(),i(38,"po-switch",24),E("ngModelChange",function(a){return c(d),h(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),u(a)}),S("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),t()(),i(39,"form",null,4)(41,"div",8)(42,"po-input",25),E("ngModelChange",function(a){return c(d),h(n.disclaimerLabel,a)||(n.disclaimerLabel=a),u(a)}),t(),i(43,"po-input",26),E("ngModelChange",function(a){return c(d),h(n.disclaimerProperty,a)||(n.disclaimerProperty=a),u(a)}),t()(),i(44,"div",8)(45,"po-input",27),E("ngModelChange",function(a){return c(d),h(n.disclaimerValue,a)||(n.disclaimerValue=a),u(a)}),t(),i(46,"po-switch",28),E("ngModelChange",function(a){return c(d),h(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),u(a)}),t()(),i(47,"div",8)(48,"po-button",29),S("p-click",function(){return n.addDisclaimer()}),t()()(),o(49,"po-divider"),i(50,"form",null,5)(52,"po-input",30),E("ngModelChange",function(a){return c(d),h(n.title,a)||(n.title=a),u(a)}),t(),i(53,"po-input",31),E("ngModelChange",function(a){return c(d),h(n.subtitle,a)||(n.subtitle=a),u(a)}),t(),i(54,"po-input",32),E("ngModelChange",function(a){return c(d),h(n.filter.placeholder,a)||(n.filter.placeholder=a),u(a)}),t(),i(55,"po-input",33),E("ngModelChange",function(a){return c(d),h(n.filter.width,a)||(n.filter.width=a),u(a)}),t(),i(56,"po-input",34),E("ngModelChange",function(a){return c(d),h(n.literals,a)||(n.literals=a),u(a)}),S("p-change",function(){return n.changeLiterals()}),t(),i(57,"po-radio-group",35),E("ngModelChange",function(a){return c(d),h(n.componentsSize,a)||(n.componentsSize=a),u(a)}),t(),i(58,"div",8)(59,"po-button",36),S("p-click",function(){return n.restore()}),t()()()}if(r&2){let d=T(5),p=T(21),a=T(29),ye=T(40);g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),g("p-value",n.filterModel),m(5),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(),b("ngModel",n.action.type),g("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),g("p-options",n.iconOptions),m(),b("ngModel",n.action),g("p-options",n.actionOptions),m(2),g("p-disabled",d.form.invalid),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),g("p-disabled",p.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),g("p-disabled",a.invalid),m(3),b("ngModel",n.disclaimerGroupTitle),m(),b("ngModel",n.disclaimerGroupHideRemoveAll),m(4),b("ngModel",n.disclaimerLabel),m(),b("ngModel",n.disclaimerProperty),m(2),b("ngModel",n.disclaimerValue),m(),b("ngModel",n.disclaimerHideClose),m(2),g("p-disabled",ye.invalid),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.filter.placeholder),m(),b("ngModel",n.filter.width),m(),b("ngModel",n.literals),m(),b("ngModel",n.componentsSize),g("p-options",n.componentsSizeOptions)}},dependencies:[G,Z,H,j,q,V,te,ee,O,le,ie,me,oe,de,A],encapsulation:2})}return s})();var Ae=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Labs"),t(),i(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
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
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider />

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
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
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
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

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

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-labs"),t(),o(23,"hr")),r&2&&(m(5),L("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),g("ngClass",_(4,Ae,n.hideSampleCodeTabs)))},dependencies:[M,y,x,v,he],encapsulation:2})}return s})();var Q=(()=>{class s{getColumns(){return[{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return[{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return[{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=Y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Te=["advancedFilterModal"],Fe=["poPageList"],Se=(()=>{class s{sampleHiringProcessesService=C(Q);poNotification=C(W);poDialog=C(ae);router=C(I);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case"progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"])}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&K(Te,7)(Fe,7),r&2){let d;N(d=z())&&(n.advancedFilterModal=d.first),N(d=z())&&(n.poPageList=d.first)}},standalone:!1,features:[X([Q])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",3,0),o(2,"po-table",4),t(),i(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),E("ngModelChange",function(a){return c(d),h(n.jobDescription,a)||(n.jobDescription=a),u(a)}),t(),i(8,"po-checkbox-group",7),E("ngModelChange",function(a){return c(d),h(n.status,a)||(n.status=a),u(a)}),t()()()}r&2&&(g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),m(2),g("p-selectable",!0)("p-single-select",!0)("p-sort",!0)("p-striped",!0)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),m(),g("p-primary-action",n.advancedFilterPrimaryAction),m(4),b("ngModel",n.jobDescription),g("p-options",n.jobDescriptionOptions),m(),b("ngModel",n.status),g("p-options",n.statusOptions))},dependencies:[G,H,j,q,V,O,se,ne,A,re],encapsulation:2})}return s})();var Be=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List - Hiring Processes"),t(),i(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  p-subtitle="Manage <b>active</b> and <i>pending</i> processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),t()()()()(),i(25,"div",10),o(26,"sample-po-page-list-hiring-processes"),t(),o(27,"hr")),r&2&&(m(5),L("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),g("ngClass",_(4,Be,n.hideSampleCodeTabs)))},dependencies:[M,y,x,v,Se],encapsulation:2})}return s})();var Pe=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-doc"]],standalone:!1,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),i(7,"code"),e(8,"po-page-default"),t(),e(9,", "),i(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
`),i(13,"code"),e(14,"po-page-edit"),t(),e(15,", "),i(16,"code"),e(17,"po-page-list"),t(),e(18," e "),i(19,"code"),e(20,"po-page-slide"),t(),e(21,"."),t()(),i(22,"h3",3),e(23,"Componente"),t(),i(24,"h4",4)(25,"code",5),e(26,"PoPageListComponent"),t()(),i(27,"div",2)(28,"p"),e(29,"O componente "),i(30,"code"),e(31,"po-page-list"),t(),e(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),t(),i(33,"p"),e(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),i(35,"em"),e(36,"click"),t(),e(37," do \xEDcone "),i(38,"a",6),e(39,"an-magnifying-glass"),t(),e(40,`
quanto ao pressionar da tecla `),i(41,"em"),e(42,"ENTER"),t(),e(43," quando o foco estiver no campo de pesquisa."),t(),i(44,"p"),e(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),i(46,"a",7)(47,"code"),e(48,"po-disclaimer-group"),t()(),e(49,"."),t(),i(50,"h4"),e(51,"Tokens customiz\xE1veis"),t(),i(52,"blockquote")(53,"p"),e(54,"Para maiores informa\xE7\xF5es, acesse o guia "),i(55,"a",8),e(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(57,"."),t()(),i(58,"table")(59,"thead")(60,"tr")(61,"th"),e(62,"Propriedade"),t(),i(63,"th"),e(64,"Descri\xE7\xE3o"),t(),i(65,"th"),e(66,"Valor Padr\xE3o"),t()()(),i(67,"tbody")(68,"tr")(69,"td")(70,"strong"),e(71,"Header"),t()(),o(72,"td")(73,"td"),t(),i(74,"tr")(75,"td")(76,"code"),e(77,"--padding"),t()(),i(78,"td"),e(79,"Espa\xE7amento do header"),t(),i(80,"td")(81,"code"),e(82,"var(--spacing-xs) var(--spacing-md)"),t()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"--gap"),t()(),i(87,"td"),e(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(89,"td")(90,"code"),e(91,"var(--spacing-md)"),t()()(),i(92,"tr")(93,"td")(94,"code"),e(95,"--gap-actions"),t()(),i(96,"td"),e(97,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(98,"td")(99,"code"),e(100,"var(--spacing-xs)"),t()()(),i(101,"tr")(102,"td")(103,"code"),e(104,"--font-family"),t()(),i(105,"td"),e(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(107,"td")(108,"code"),e(109,"var(--font-family-theme)"),t()()(),i(110,"tr")(111,"td")(112,"strong"),e(113,"Content"),t()(),o(114,"td")(115,"td"),t(),i(116,"tr")(117,"td")(118,"code"),e(119,"--padding-content"),t()(),i(120,"td"),e(121,"Espa\xE7amento do conte\xFAdo"),t(),i(122,"td")(123,"code"),e(124,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),i(125,"div",9)(126,"h4",10),e(127,"Seletor"),t(),i(128,"pre",11),e(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),t()(),i(130,"h4",12),e(131,"Propriedades"),t(),i(132,"table",13)(133,"tr",14)(134,"th",15),e(135,"Nome"),t(),i(136,"th",15),e(137,"Tipo"),t(),i(138,"th",15),e(139,"Padr\xE3o"),t(),i(140,"th",15),e(141,"Descri\xE7\xE3o"),t()(),i(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),e(146," p-actions"),o(147,"br"),t()()(),i(148,"td",20)(149,"code",21),e(150,"Array<PoPageAction>"),t()(),i(151,"td",22),e(152,"-"),t(),i(153,"td",23)(154,"em")(155,"strong"),e(156,"(opcional)"),t()(),i(157,"p"),e(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),i(159,"code"),e(160,"PoPageAction"),t(),e(161,"."),t()()(),i(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),e(166," p-breadcrumb"),o(167,"br"),t()()(),i(168,"td",20)(169,"code",24),e(170,"PoBreadcrumb"),t()(),i(171,"td",22),e(172,"-"),t(),i(173,"td",23)(174,"em")(175,"strong"),e(176,"(opcional)"),t()(),i(177,"p"),e(178,"Objeto que implementa as propriedades da interface "),i(179,"code"),e(180,"PoBreadcrumb"),t(),e(181,"."),t()()(),i(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),e(186," p-components-size"),o(187,"br"),t()()(),i(188,"td",20)(189,"code",25),e(190,"string"),t()(),i(191,"td",22)(192,"p")(193,"code"),e(194,"medium"),t()()(),i(195,"td",23)(196,"em")(197,"strong"),e(198,"(opcional)"),t()(),i(199,"p"),e(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(201,"ul")(202,"li")(203,"code"),e(204,"small"),t(),e(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(206,"li")(207,"code"),e(208,"medium"),t(),e(209,": aplica a medida medium de cada componente."),t()(),i(210,"blockquote")(211,"p"),e(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(213,"code"),e(214,"medium"),t(),e(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(216,"a",26),e(217,"po-theme"),t(),e(218,"."),t()()()(),i(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),e(223," p-disclaimer-group"),o(224,"br"),t()()(),i(225,"td",20)(226,"code",27),e(227,"PoDisclaimerGroup"),t()(),i(228,"td",22),e(229,"-"),t(),i(230,"td",23)(231,"em")(232,"strong"),e(233,"(opcional)"),t()(),i(234,"p"),e(235,"Objeto que implementa as propriedades da interface "),i(236,"code"),e(237,"PoDisclaimerGroup"),t(),e(238,"."),t()()(),i(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),e(243," p-filter"),o(244,"br"),t()()(),i(245,"td",20)(246,"code",28),e(247,"PoPageFilter"),t()(),i(248,"td",22),e(249,"-"),t(),i(250,"td",23)(251,"p"),e(252,"Objeto que implementa as propriedades da interface "),i(253,"code"),e(254,"PoPageFilter"),t(),e(255,"."),t()()(),i(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),e(260," p-literals"),o(261,"br"),t()()(),i(262,"td",20)(263,"code",29),e(264,"PoPageListLiterals"),t()(),i(265,"td",22),e(266,"-"),t(),i(267,"td",23)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),i(271,"p"),e(272,"Objeto com as literais usadas no "),i(273,"code"),e(274,"po-page-list"),t(),e(275,"."),t(),i(276,"p"),e(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(278,"pre")(279,"code"),e(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),t()(),i(281,"p"),e(282,"Ou passando apenas as literais que deseja customizar:"),t(),i(283,"pre")(284,"code"),e(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),t()(),i(286,"p"),e(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(288,"pre")(289,"code"),e(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),t()(),i(291,"blockquote")(292,"p"),e(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(294,"a",30)(295,"code"),e(296,"PoI18nService"),t()(),e(297," ou "),i(298,"em"),e(299,"browser"),t(),e(300,"."),t()()()(),i(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),e(305," p-quick-search-value"),o(306,"br"),t()()(),i(307,"td",20)(308,"code",25),e(309,"string"),t()(),i(310,"td",22),e(311,"-"),t(),i(312,"td",23)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),i(316,"p"),e(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),t()()(),i(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),e(322," p-subtitle"),o(323,"br"),t()()(),i(324,"td",20)(325,"code",25),e(326,"string"),t()(),i(327,"td",22),e(328,"-"),t(),i(329,"td",23)(330,"em")(331,"strong"),e(332,"(opcional)"),t()(),i(333,"p"),e(334,"Subtitulo do Header da p\xE1gina."),t(),i(335,"p"),e(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),i(337,"code"),e(338,"<b>"),t(),e(339," (negrito), "),i(340,"code"),e(341,"<strong>"),t(),e(342," (negrito), "),i(343,"code"),e(344,"<i>"),t(),e(345," (it\xE1lico), "),i(346,"code"),e(347,"<em>"),t(),e(348,` (it\xE1lico) e
`),i(349,"code"),e(350,"<u>"),t(),e(351," (sublinhado)."),t(),i(352,"p"),e(353,"Exemplo:"),t(),i(354,"pre")(355,"code",31),e(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),t()(),i(357,"blockquote")(358,"p"),e(359,"Requer que "),i(360,"code"),e(361,"p-title"),t(),e(362," esteja definido."),t()()()(),i(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),e(367," p-title"),o(368,"br"),t()()(),i(369,"td",20)(370,"code",25),e(371,"string"),t()(),i(372,"td",22),e(373,"-"),t(),i(374,"td",23)(375,"p"),e(376,"T\xEDtulo da p\xE1gina."),t()()()(),i(377,"h3",12),e(378,"M\xE9todos"),t(),i(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),e(385," clearInputSearch "),t()()()()(),i(386,"tr",23)(387,"td",23)(388,"p"),e(389,"Limpa o campo de pesquisa."),t()()()(),o(390,"br"),i(391,"h3"),e(392,"Interfaces"),t(),i(393,"h4",34)(394,"code",5),e(395,"PoBreadcrumbItem"),t()(),i(396,"div",2)(397,"p"),e(398,"Interface que define cada item do componente "),i(399,"strong"),e(400,"po-breadcrumb"),t(),e(401,"."),t()(),i(402,"h4",12),e(403,"Propriedades"),t(),i(404,"table",13)(405,"tr",14)(406,"th",15),e(407,"Nome"),t(),i(408,"th",15),e(409,"Tipo"),t(),i(410,"th",15),e(411,"Descri\xE7\xE3o"),t()(),i(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),e(416," action"),o(417,"br"),t()()(),i(418,"td",20)(419,"code",35),e(420,"Function"),t()(),i(421,"td",23)(422,"em")(423,"strong"),e(424,"(opcional)"),t()(),i(425,"p"),e(426,"A\xE7\xE3o executada ao clicar no item."),t(),i(427,"blockquote")(428,"p"),e(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(430,"em"),e(431,"label"),t(),e(432," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),e(437," label"),o(438,"br"),t()()(),i(439,"td",20)(440,"code",25),e(441,"string"),t()(),i(442,"td",23)(443,"p"),e(444,"R\xF3tulo do item."),t()()(),i(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),e(449," link"),o(450,"br"),t()()(),i(451,"td",20)(452,"code",25),e(453,"string"),t()(),i(454,"td",23)(455,"em")(456,"strong"),e(457,"(opcional)"),t()(),i(458,"p"),e(459,"Url do item."),t(),i(460,"blockquote")(461,"p"),e(462,"Caso o item tamb\xE9m contenha uma "),i(463,"em"),e(464,"action"),t(),e(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(466,"em"),e(467,"link"),t(),e(468,"."),t()(),i(469,"blockquote")(470,"p"),e(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(472,"strong")(473,"a",36),e(474,"Veja um exemplo de como criar rotas aqui"),t()(),e(475,"."),t()(),i(476,"blockquote")(477,"p"),e(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(479,"code"),e(480,"p-favorite-service"),t(),e(481," consiga favoritar ou desfavoritar."),t()()()()(),i(482,"h4",34)(483,"code",5),e(484,"PoBreadcrumb"),t()(),i(485,"div",2)(486,"p"),e(487,"Interface que define o "),i(488,"code"),e(489,"po-breadcrumb"),t(),e(490,"."),t()(),i(491,"h4",12),e(492,"Propriedades"),t(),i(493,"table",13)(494,"tr",14)(495,"th",15),e(496,"Nome"),t(),i(497,"th",15),e(498,"Tipo"),t(),i(499,"th",15),e(500,"Descri\xE7\xE3o"),t()(),i(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),e(505," favorite"),o(506,"br"),t()()(),i(507,"td",20)(508,"code",25),e(509,"string"),t()(),i(510,"td",23)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),i(514,"p"),e(515,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(516,"blockquote")(517,"p"),e(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(519,"code"),e(520,"p-favorite-service"),t(),e(521," do componente "),i(522,"code"),e(523,"po-breadcrumb"),t(),e(524,"."),t()()()(),i(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),e(529," items"),o(530,"br"),t()()(),i(531,"td",20)(532,"code",37),e(533,"Array<PoBreadcrumbItem>"),t()(),i(534,"td",23)(535,"p"),e(536,"Lista de itens do "),i(537,"em"),e(538,"breadcrumb"),t(),e(539,"."),t(),i(540,"p")(541,"strong"),e(542,"Exemplo:"),t()(),i(543,"pre")(544,"code"),e(545,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),e(550," params"),o(551,"br"),t()()(),i(552,"td",20)(553,"code",38),e(554,"object"),t()(),i(555,"td",23)(556,"em")(557,"strong"),e(558,"(opcional)"),t()(),i(559,"p"),e(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(561,"h4",34)(562,"code",5),e(563,"PoDisclaimer"),t()(),i(564,"div",2)(565,"p"),e(566,"Interface que representa o objeto "),i(567,"code"),e(568,"po-disclaimer"),t(),e(569,"."),t()(),i(570,"h4",12),e(571,"Propriedades"),t(),i(572,"table",13)(573,"tr",14)(574,"th",15),e(575,"Nome"),t(),i(576,"th",15),e(577,"Tipo"),t(),i(578,"th",15),e(579,"Descri\xE7\xE3o"),t()(),i(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),e(584," hideClose"),o(585,"br"),t()()(),i(586,"td",20)(587,"code",39),e(588,"boolean"),t()(),i(589,"td",23)(590,"em")(591,"strong"),e(592,"(opcional)"),t()(),i(593,"p"),e(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(595,"em"),e(596,"disclaimer"),t(),e(597,"."),t()()(),i(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),e(602," label"),o(603,"br"),t()()(),i(604,"td",20)(605,"code",25),e(606,"string"),t()(),i(607,"td",23)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),i(611,"p"),e(612,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),e(617," property"),o(618,"br"),t()()(),i(619,"td",20)(620,"code",25),e(621,"string"),t()(),i(622,"td",23)(623,"em")(624,"strong"),e(625,"(opcional)"),t()(),i(626,"p"),e(627,"Nome da propriedade vinculada ao objeto "),i(628,"em"),e(629,"disclaimer"),t(),e(630,"."),t()()(),i(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),e(635," value"),o(636,"br"),t()()(),i(637,"td",20)(638,"code",40),e(639,"any"),t()(),i(640,"td",23)(641,"p"),e(642,"Valor do objeto."),t()()()(),i(643,"h4",34)(644,"code",5),e(645,"PoDisclaimerGroupRemoveAction"),t()(),i(646,"div",2)(647,"p"),e(648,"Estrutura do objeto representando o estado dos "),i(649,"em"),e(650,"disclaimers"),t(),e(651," ap\xF3s a remo\xE7\xE3o."),t()(),i(652,"h4",12),e(653,"Propriedades"),t(),i(654,"table",13)(655,"tr",14)(656,"th",15),e(657,"Nome"),t(),i(658,"th",15),e(659,"Tipo"),t(),i(660,"th",15),e(661,"Descri\xE7\xE3o"),t()(),i(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),e(666," currentDisclaimers"),o(667,"br"),t()()(),i(668,"td",20)(669,"code",41),e(670,"Array<PoDisclaimer>"),t()(),i(671,"td",23)(672,"p"),e(673,"Lista com os "),i(674,"em"),e(675,"disclaimers"),t(),e(676," atuais (restantes)."),t()()(),i(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),e(681," removedDisclaimer"),o(682,"br"),t()()(),i(683,"td",20)(684,"code",42),e(685,"PoDisclaimer"),t()(),i(686,"td",23)(687,"p")(688,"em"),e(689,"Disclaimer"),t(),e(690," que foi removido."),t()()()(),i(691,"h4",34)(692,"code",5),e(693,"PoDisclaimerGroup"),t()(),i(694,"div",2)(695,"p"),e(696,"Interface que representa o objeto "),i(697,"code"),e(698,"po-disclaimer-group"),t(),e(699,"."),t()(),i(700,"h4",12),e(701,"Propriedades"),t(),i(702,"table",13)(703,"tr",14)(704,"th",15),e(705,"Nome"),t(),i(706,"th",15),e(707,"Tipo"),t(),i(708,"th",15),e(709,"Descri\xE7\xE3o"),t()(),i(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),e(714," change"),o(715,"br"),t()()(),i(716,"td",20)(717,"code",35),e(718,"Function"),t()(),i(719,"td",23)(720,"em")(721,"strong"),e(722,"(opcional)"),t()(),i(723,"p"),e(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(725,"em"),e(726,"disclaimers"),t(),e(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),i(728,"em"),e(729,"disclaimers"),t(),e(730,"."),t()()(),i(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),e(735," disclaimers"),o(736,"br"),t()()(),i(737,"td",20)(738,"code",41),e(739,"Array<PoDisclaimer>"),t()(),i(740,"td",23)(741,"p"),e(742,"Lista de "),i(743,"em"),e(744,"disclaimers"),t(),e(745,"."),t(),i(746,"p"),e(747,"Exemplo:"),t(),i(748,"pre")(749,"code"),e(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),t()(),i(751,"p"),e(752,"Para que a lista de "),i(753,"em"),e(754,"disclaimers"),t(),e(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(756,"code"),e(757,"PoDisclaimer"),t(),e(758,"."),t(),i(759,"p"),e(760,"Exemplo:"),t(),i(761,"pre")(762,"code"),e(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),t()()()(),i(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),e(768," hideRemoveAll"),o(769,"br"),t()()(),i(770,"td",20)(771,"code",39),e(772,"boolean"),t()(),i(773,"td",23)(774,"em")(775,"strong"),e(776,"(opcional)"),t()(),i(777,"p"),e(778,"Oculta o bot\xE3o para remover todos os "),i(779,"em"),e(780,"disclaimers"),t(),e(781," do grupo."),t(),i(782,"blockquote")(783,"p"),e(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(785,"em"),e(786,"disclaimers"),t(),e(787," com a op\xE7\xE3o "),i(788,"code"),e(789,"hideClose"),t(),e(790," habilitada."),t()()()(),i(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),e(795," remove"),o(796,"br"),t()()(),i(797,"td",20)(798,"code",35),e(799,"Function"),t()(),i(800,"td",23)(801,"em")(802,"strong"),e(803,"(opcional)"),t()(),i(804,"p"),e(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(806,"em"),e(807,"disclaimer"),t(),e(808,` for removido da lista de
`),i(809,"em"),e(810,"disclaimers"),t(),e(811," pelo usu\xE1rio."),t(),i(812,"p"),e(813,"Recebe como par\xE2metro um objeto conforme a interface "),i(814,"code"),e(815,"PoDisclaimerGroupRemoveAction"),t(),e(816,"."),t()()(),i(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),e(821," removeAll"),o(822,"br"),t()()(),i(823,"td",20)(824,"code",35),e(825,"Function"),t()(),i(826,"td",23)(827,"em")(828,"strong"),e(829,"(opcional)"),t()(),i(830,"p"),e(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(832,"em"),e(833,"disclaimers"),t(),e(834," forem removidos da lista de "),i(835,"em"),e(836,"disclaimers"),t(),e(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(838,"p"),e(839,"Recebe como par\xE2metro uma lista contendo todos os "),i(840,"code"),e(841,"disclaimers"),t(),e(842," removidos."),t()()(),i(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),e(847," title"),o(848,"br"),t()()(),i(849,"td",20)(850,"code",25),e(851,"string"),t()(),i(852,"td",23)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),i(856,"p"),e(857,"T\xEDtulo do grupo de "),i(858,"em"),e(859,"disclaimers"),t(),e(860,"."),t()()()(),i(861,"h4",34)(862,"code",5),e(863,"PoPageAction"),t()(),i(864,"div",2)(865,"p"),e(866,"Interface para as a\xE7\xF5es dos componentes "),i(867,"code"),e(868,"po-page-default"),t(),e(869," e "),i(870,"code"),e(871,"po-page-list"),t(),e(872,"."),t(),i(873,"p"),e(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),i(875,"em"),e(876,"dropdown"),t(),e(877,`,
conforme o `),i(878,"code"),e(879,"PoPageActionsLayout"),t(),e(880," e o tamanho da tela."),t(),i(881,"blockquote")(882,"p"),e(883,"As propriedades "),i(884,"code"),e(885,"separator"),t(),e(886,", "),i(887,"code"),e(888,"selected"),t(),e(889," e "),i(890,"code"),e(891,"subItems"),t(),e(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),i(893,"em"),e(894,"dropdown"),t(),e(895,"."),t()()(),i(896,"h4",12),e(897,"Propriedades"),t(),i(898,"table",13)(899,"tr",14)(900,"th",15),e(901,"Nome"),t(),i(902,"th",15),e(903,"Tipo"),t(),i(904,"th",15),e(905,"Descri\xE7\xE3o"),t()(),i(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),e(910," action"),o(911,"br"),t()()(),i(912,"td",20)(913,"code",35),e(914,"Function"),t()(),i(915,"td",23)(916,"em")(917,"strong"),e(918,"(opcional)"),t()(),i(919,"p"),e(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(921,"p"),e(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),i(923,"code"),e(924,"subItems"),t(),e(925,"."),t(),i(926,"blockquote")(927,"p"),e(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),i(929,"em"),e(930,"bind"),t(),e(931,`:
`),i(932,"code"),e(933,"action: this.myFunction.bind(this)"),t()()()()(),i(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),e(938," disabled"),o(939,"br"),t()()(),i(940,"td",20)(941,"code",39),e(942,"boolean "),t(),i(943,"code",35),e(944," Function"),t()(),i(945,"td",23)(946,"em")(947,"strong"),e(948,"(opcional)"),t()(),i(949,"p"),e(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),i(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),e(955," icon"),o(956,"br"),t()()(),i(957,"td",20)(958,"code",25),e(959,"string "),t(),i(960,"code",43),e(961," TemplateRef<void>"),t()(),i(962,"td",23)(963,"em")(964,"strong"),e(965,"(opcional)"),t()(),i(966,"p"),e(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),i(968,"p"),e(969,"Aceita \xEDcones da "),i(970,"a",6),e(971,"Biblioteca de \xEDcones"),t(),e(972,`, fontes externas (ex: Font Awesome)
ou um `),i(973,"code"),e(974,"TemplateRef"),t(),e(975," para \xEDcones customizados."),t(),i(976,"pre")(977,"code"),e(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),i(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),e(983," kind"),o(984,"br"),t()()(),i(985,"td",20)(986,"code",25),e(987,"string"),t()(),i(988,"td",23)(989,"em")(990,"strong"),e(991,"(opcional)"),t()(),i(992,"p"),e(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),i(994,"em"),e(995,"dropdown"),t(),e(996,"."),t(),i(997,"p"),e(998,"Valores permitidos:"),t(),i(999,"ul")(1e3,"li")(1001,"code"),e(1002,"primary"),t(),e(1003,": bot\xE3o com maior destaque visual."),t(),i(1004,"li")(1005,"code"),e(1006,"secondary"),t(),e(1007,": estilo padr\xE3o."),t()(),i(1008,"blockquote")(1009,"p"),e(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),t()(),i(1011,"blockquote")(1012,"p"),e(1013,"Somente uma a\xE7\xE3o pode ter "),i(1014,"code"),e(1015,"kind"),t(),e(1016," igual a "),i(1017,"code"),e(1018,"primary"),t(),e(1019,". Caso mais de uma defina "),i(1020,"code"),e(1021,"primary"),t(),e(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),i(1023,"code"),e(1024,"secondary"),t(),e(1025,"."),t()(),i(1026,"blockquote")(1027,"p"),e(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),i(1029,"code"),e(1030,"PoPageActionsLayout"),t(),e(1031,"."),t()()()(),i(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),e(1036," label"),o(1037,"br"),t()()(),i(1038,"td",20)(1039,"code",25),e(1040,"string"),t()(),i(1041,"td",23)(1042,"p"),e(1043,"R\xF3tulo da a\xE7\xE3o."),t(),i(1044,"p"),e(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),i(1046,"code"),e(1047,"subItems"),t(),e(1048,"."),t()()(),i(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),e(1053," selected"),o(1054,"br"),t()()(),i(1055,"td",20)(1056,"code",39),e(1057,"boolean"),t()(),i(1058,"td",23)(1059,"em")(1060,"strong"),e(1061,"(opcional)"),t()(),i(1062,"p"),e(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),e(1068," separator"),o(1069,"br"),t()()(),i(1070,"td",20)(1071,"code",39),e(1072,"boolean"),t()(),i(1073,"td",23)(1074,"em")(1075,"strong"),e(1076,"(opcional)"),t()(),i(1077,"p"),e(1078,"Atribui uma linha separadora acima do item."),t()()(),i(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),e(1083," subItems"),o(1084,"br"),t()()(),i(1085,"td",20)(1086,"code",44),e(1087,"Array<PoPopupAction>"),t()(),i(1088,"td",23)(1089,"em")(1090,"strong"),e(1091,"(opcional)"),t()(),i(1092,"p"),e(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),i(1094,"p"),e(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),i(1096,"blockquote")(1097,"p"),e(1098,"As propriedades "),i(1099,"code"),e(1100,"disabled"),t(),e(1101,", "),i(1102,"code"),e(1103,"type"),t(),e(1104," e "),i(1105,"code"),e(1106,"visible"),t(),e(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),i(1108,"blockquote")(1109,"p"),e(1110,"Quando "),i(1111,"code"),e(1112,"url"),t(),e(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),i(1114,"blockquote")(1115,"p"),e(1116,"Em subn\xEDveis aninhados, o "),i(1117,"code"),e(1118,"icon"),t(),e(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),i(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),e(1124," type"),o(1125,"br"),t()()(),i(1126,"td",20)(1127,"code",25),e(1128,"string"),t()(),i(1129,"td",23)(1130,"em")(1131,"strong"),e(1132,"(opcional)"),t()(),i(1133,"p"),e(1134,"Define a cor do item."),t(),i(1135,"p"),e(1136,"Valores v\xE1lidos:"),t(),i(1137,"ul")(1138,"li")(1139,"code"),e(1140,"default"),t()(),i(1141,"li")(1142,"code"),e(1143,"danger"),t()()()()(),i(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),e(1148," url"),o(1149,"br"),t()()(),i(1150,"td",20)(1151,"code",25),e(1152,"string"),t()(),i(1153,"td",23)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),i(1157,"p"),e(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),i(1159,"p"),e(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(1161,"code"),e(1162,"url"),t(),e(1163," \xE9 informada em um agrupador, o clique "),i(1164,"strong"),e(1165,"n\xE3o abrir\xE1 os subitens"),t(),e(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),i(1167,"blockquote")(1168,"p"),e(1169,"Quando informada, tem prioridade sobre a propriedade "),i(1170,"code"),e(1171,"action"),t(),e(1172,"."),t()()()(),i(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),e(1177," visible"),o(1178,"br"),t()()(),i(1179,"td",20)(1180,"code",39),e(1181,"boolean "),t(),i(1182,"code",35),e(1183," Function"),t()(),i(1184,"td",23)(1185,"em")(1186,"strong"),e(1187,"(opcional)"),t()(),i(1188,"p"),e(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()(),i(1190,"h4",34)(1191,"code",5),e(1192,"PoPageFilter"),t()(),i(1193,"div",2)(1194,"p"),e(1195,"Interface para o atributo "),i(1196,"code"),e(1197,"filter"),t(),e(1198," do componente "),i(1199,"code"),e(1200,"po-page-list"),t(),e(1201,"."),t()(),i(1202,"h4",12),e(1203,"Propriedades"),t(),i(1204,"table",13)(1205,"tr",14)(1206,"th",15),e(1207,"Nome"),t(),i(1208,"th",15),e(1209,"Tipo"),t(),i(1210,"th",15),e(1211,"Descri\xE7\xE3o"),t()(),i(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),e(1216," action"),o(1217,"br"),t()()(),i(1218,"td",20)(1219,"code",35),e(1220,"Function"),t()(),i(1221,"td",23)(1222,"em")(1223,"strong"),e(1224,"(opcional)"),t()(),i(1225,"p"),e(1226,"A\xE7\xE3o a ser executada."),t()()(),i(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),e(1231," advancedAction"),o(1232,"br"),t()()(),i(1233,"td",20)(1234,"code",35),e(1235,"Function"),t()(),i(1236,"td",23)(1237,"em")(1238,"strong"),e(1239,"(opcional)"),t()(),i(1240,"p"),e(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),i(1242,"em"),e(1243,"click"),t(),e(1244," atrav\xE9s do r\xF3tulo "),i(1245,"strong"),e(1246,"Busca Avan\xE7ada"),t(),e(1247,"."),t()()(),i(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),e(1252," placeholder"),o(1253,"br"),t()()(),i(1254,"td",20)(1255,"code",25),e(1256,"string"),t()(),i(1257,"td",23)(1258,"em")(1259,"strong"),e(1260,"(opcional)"),t()(),i(1261,"p"),e(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),t()()(),i(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),e(1267," width"),o(1268,"br"),t()()(),i(1269,"td",20)(1270,"code",45),e(1271,"number"),t()(),i(1272,"td",23)(1273,"em")(1274,"strong"),e(1275,"(opcional)"),t()(),i(1276,"p"),e(1277,"Tamanho do filtro em tela, utilizando o "),i(1278,"em"),e(1279,"Grid System"),t(),e(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),t()()()(),i(1281,"h4",34)(1282,"code",5),e(1283,"PoPageListLiterals"),t()(),i(1284,"div",2)(1285,"p"),e(1286,"Interface para defini\xE7\xE3o das literais usadas no "),i(1287,"code"),e(1288,"po-page-list"),t(),e(1289,"."),t()(),i(1290,"h4",12),e(1291,"Propriedades"),t(),i(1292,"table",13)(1293,"tr",14)(1294,"th",15),e(1295,"Nome"),t(),i(1296,"th",15),e(1297,"Tipo"),t(),i(1298,"th",15),e(1299,"Descri\xE7\xE3o"),t()(),i(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),e(1304," otherActions"),o(1305,"br"),t()()(),i(1306,"td",20)(1307,"code",25),e(1308,"string"),t()(),i(1309,"td",23)(1310,"em")(1311,"strong"),e(1312,"(opcional)"),t()(),i(1313,"p"),e(1314,"Legenda do "),i(1315,"code"),e(1316,"po-dropdown"),t(),e(1317," de a\xE7\xF5es."),t()()()()())},dependencies:[y],encapsulation:2})}return s})();var xe=(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||s)(R($),R(I))};static \u0275cmp=f({type:s,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-list-doc"),t(),i(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),t()()()),r&2&&(g("p-actions",n.actions),m(2),g("p-active",n.activeTab==="doc"),m(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[pe,x,v,be,Ee,fe,Pe],encapsulation:2})}return s})();var Ve=[{path:"",component:xe}],ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[J.forChild(Ve),J]})}return s})();var St=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[ce,ve]})}return s})();export{St as DocPoPageListModule};
