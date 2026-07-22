import{o as _,p as re}from"./chunk-7OLT6NYH.js";import{$ as ee,Jb as v,Kb as C,Oa as ie,Pa as z,S as Y,U as Z,Ua as ne,W as $,a as K,db as ae,ra as te,w as X,wb as oe,yb as B}from"./chunk-QHAIKAWB.js";import{$a as k,Fa as h,Ga as t,Ha as e,Ia as l,J as L,M as D,Nb as M,Nc as V,Oc as W,P as c,Pa as I,Pc as O,Q as u,Qa as S,Qc as q,Rc as F,Wa as H,Xa as G,Ya as J,cb as y,db as i,dd as Q,fb as w,fd as U,hb as b,hd as A,ia as m,ib as g,jb as E,na as j,pa as f,qa as N,sb as x}from"./chunk-A2WYYMKN.js";import"./chunk-NCEQPEJE.js";var le=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,n){r&1&&l(0,"po-page-edit",0)},dependencies:[B],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-basic"),e(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),h("ngClass",x(4,Se,n.hideSampleCodeTabs)))},dependencies:[M,_,v,C,le],encapsulation:2})}return o})();var de=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action="Cancel"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle=""}save(){this.action="Save"}saveNew(){this.action="Save and new"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:!1,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=I();t(0,"po-page-edit",3),S("p-cancel",function(){return n.cancel()})("p-save",function(){return n.save()})("p-save-new",function(){return n.saveNew()}),t(1,"div",4),l(2,"po-info",5),e(),l(3,"po-divider"),t(4,"form")(5,"div",4)(6,"po-input",6),E("ngModelChange",function(a){return c(p),g(n.title,a)||(n.title=a),u(a)}),e(),t(7,"po-input",7),E("ngModelChange",function(a){return c(p),g(n.subtitle,a)||(n.subtitle=a),u(a)}),e(),t(8,"po-checkbox-group",8),E("ngModelChange",function(a){return c(p),g(n.properties,a)||(n.properties=a),u(a)}),e(),t(9,"po-radio-group",9),E("ngModelChange",function(a){return c(p),g(n.componentsSize,a)||(n.componentsSize=a),u(a)}),e()(),l(10,"po-divider"),t(11,"form",null,0)(13,"div",4)(14,"po-input",10),E("ngModelChange",function(a){return c(p),g(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),u(a)}),e()()(),t(15,"form",null,1)(17,"div",4)(18,"po-input",11),E("ngModelChange",function(a){return c(p),g(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),u(a)}),e(),t(19,"po-input",12),E("ngModelChange",function(a){return c(p),g(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),u(a)}),e()(),t(20,"div",4)(21,"po-button",13),S("p-click",function(){return n.addBreadcrumbItem()}),e()()(),l(22,"po-divider"),t(23,"form",null,2)(25,"div",4)(26,"po-input",14),E("ngModelChange",function(a){return c(p),g(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),u(a)}),e(),t(27,"po-input",15),E("ngModelChange",function(a){return c(p),g(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),u(a)}),e()(),t(28,"div",4)(29,"po-button",16),S("p-click",function(){return n.addBreadcrumbParam()}),e()()(),t(30,"div",4)(31,"po-input",17),E("ngModelChange",function(a){return c(p),g(n.literals,a)||(n.literals=a),u(a)}),S("p-change",function(){return n.changeLiterals()}),e()(),t(32,"div",4)(33,"po-button",18),S("p-click",function(){return n.restore()}),e()()()()}if(r&2){let p=k(16),s=k(24);h("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disable-submit",n.properties.includes("disableSubmit"))("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),h("p-value",n.action),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.properties),h("p-options",n.propertiesOptions),m(),b("ngModel",n.componentsSize),h("p-options",n.componentsSizeOptions),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),h("p-disabled",p.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),h("p-disabled",s.invalid),m(2),b("ngModel",n.literals)}},dependencies:[F,V,W,q,O,X,K,Y,z,Z,ae,B],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
        [(ngModel)]="componentsSize"
        p-columns="4"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>
    </div>

    <po-divider />

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
          class="po-md-6 po-lg-3"
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
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
  ];

  ngOnInit() {
    this.restore();
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-labs"),e(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),h("ngClass",x(4,Ce,n.hideSampleCodeTabs)))},dependencies:[M,_,v,C,de],encapsulation:2})}return o})();var ye=["formEditUser"],ce=(()=>{class o{route=D(U);poDialog=D(ee);poNotification=D(te);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635}save(){this.poNotification.success("Save successfully")}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])})}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,n){if(r&1&&H(ye,7),r&2){let p;G(p=J())&&(n.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit","p-subtitle","Fields marked with <b>*</b> are <u>required</u>",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let p=I();t(0,"po-page-edit",1),S("p-cancel",function(){return n.cancel()})("p-save",function(){return n.save()}),t(1,"form",null,0)(3,"div",2)(4,"po-number",3),E("ngModelChange",function(a){return c(p),g(n.userId,a)||(n.userId=a),u(a)}),e(),t(5,"po-email",4),E("ngModelChange",function(a){return c(p),g(n.email,a)||(n.email=a),u(a)}),e(),t(6,"po-input",5),E("ngModelChange",function(a){return c(p),g(n.name,a)||(n.name=a),u(a)}),e()(),t(7,"div",2)(8,"po-input",6),E("ngModelChange",function(a){return c(p),g(n.nickname,a)||(n.nickname=a),u(a)}),e(),t(9,"po-datepicker",7),E("ngModelChange",function(a){return c(p),g(n.birthDate,a)||(n.birthDate=a),u(a)}),e(),t(10,"po-input",8),E("ngModelChange",function(a){return c(p),g(n.genre,a)||(n.genre=a),u(a)}),e()(),t(11,"div",2)(12,"po-input",9),E("ngModelChange",function(a){return c(p),g(n.nationality,a)||(n.nationality=a),u(a)}),e(),t(13,"po-input",10),E("ngModelChange",function(a){return c(p),g(n.placeOfBirth,a)||(n.placeOfBirth=a),u(a)}),e(),t(14,"po-input",11),E("ngModelChange",function(a){return c(p),g(n.graduation,a)||(n.graduation=a),u(a)}),e()(),t(15,"div",2)(16,"po-input",12),E("ngModelChange",function(a){return c(p),g(n.fathersName,a)||(n.fathersName=a),u(a)}),e(),t(17,"po-input",13),E("ngModelChange",function(a){return c(p),g(n.mothersName,a)||(n.mothersName=a),u(a)}),e()()()()}if(r&2){let p=k(2);h("p-breadcrumb",n.breadcrumb)("p-disable-submit",p.invalid),m(4),b("ngModel",n.userId),m(),b("ngModel",n.email),m(),b("ngModel",n.name),m(2),b("ngModel",n.nickname),m(),b("ngModel",n.birthDate),m(),b("ngModel",n.genre),m(2),b("ngModel",n.nationality),m(),b("ngModel",n.placeOfBirth),m(),b("ngModel",n.graduation),m(2),b("ngModel",n.fathersName),m(),b("ngModel",n.mothersName)}},dependencies:[F,V,W,q,O,$,ie,z,ne,B],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit - User"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit
  p-title="User Edit"
  p-subtitle="Fields marked with <b>*</b> are <u>required</u>"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-user"),e(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),h("ngClass",x(4,xe,n.hideSampleCodeTabs)))},dependencies:[M,_,v,C,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:!1,decls:605,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),t(7,"code"),i(8,"po-page-default"),e(),i(9,", "),t(10,"code"),i(11,"po-page-detail"),e(),i(12,`,
`),t(13,"code"),i(14,"po-page-edit"),e(),i(15,", "),t(16,"code"),i(17,"po-page-list"),e(),i(18," e "),t(19,"code"),i(20,"po-page-slide"),e(),i(21,"."),e()(),t(22,"h3",3),i(23,"Componente"),e(),t(24,"h4",4)(25,"code",5),i(26,"PoPageEditComponent"),e()(),t(27,"div",2)(28,"p"),i(29,"O componente "),t(30,"strong"),i(31,"po-page-edit"),e(),i(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),e(),t(33,"p"),i(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),t(35,"code"),i(36,"p-disable-submit"),e(),i(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),e(),t(38,"h4"),i(39,"Tokens customiz\xE1veis"),e(),t(40,"blockquote")(41,"p"),i(42,"Para maiores informa\xE7\xF5es, acesse o guia "),t(43,"a",6),i(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(45,"."),e()(),t(46,"table")(47,"thead")(48,"tr")(49,"th"),i(50,"Propriedade"),e(),t(51,"th"),i(52,"Descri\xE7\xE3o"),e(),t(53,"th"),i(54,"Valor Padr\xE3o"),e()()(),t(55,"tbody")(56,"tr")(57,"td")(58,"strong"),i(59,"Header"),e()(),l(60,"td")(61,"td"),e(),t(62,"tr")(63,"td")(64,"code"),i(65,"--padding"),e()(),t(66,"td"),i(67,"Espa\xE7amento do header"),e(),t(68,"td")(69,"code"),i(70,"var(--spacing-xs) var(--spacing-md)"),e()()(),t(71,"tr")(72,"td")(73,"code"),i(74,"--gap"),e()(),t(75,"td"),i(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(77,"td")(78,"code"),i(79,"var(--spacing-md)"),e()()(),t(80,"tr")(81,"td")(82,"code"),i(83,"--gap-actions"),e()(),t(84,"td"),i(85,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(86,"td")(87,"code"),i(88,"var(--spacing-xs)"),e()()(),t(89,"tr")(90,"td")(91,"code"),i(92,"--font-family"),e()(),t(93,"td"),i(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(95,"td")(96,"code"),i(97,"var(--font-family-theme)"),e()()(),t(98,"tr")(99,"td")(100,"strong"),i(101,"Content"),e()(),l(102,"td")(103,"td"),e(),t(104,"tr")(105,"td")(106,"code"),i(107,"--padding-content"),e()(),t(108,"td"),i(109,"Espa\xE7amento do conte\xFAdo"),e(),t(110,"td")(111,"code"),i(112,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),t(113,"div",7)(114,"h4",8),i(115,"Seletor"),e(),t(116,"pre",9),i(117,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),e()(),t(118,"h4",10),i(119,"Propriedades"),e(),t(120,"table",11)(121,"tr",12)(122,"th",13),i(123,"Nome"),e(),t(124,"th",13),i(125,"Tipo"),e(),t(126,"th",13),i(127,"Padr\xE3o"),e(),t(128,"th",13),i(129,"Descri\xE7\xE3o"),e()(),t(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),i(134," p-breadcrumb"),l(135,"br"),e()()(),t(136,"td",18)(137,"code",19),i(138,"PoBreadcrumb"),e()(),t(139,"td",20),i(140,"-"),e(),t(141,"td",21)(142,"em")(143,"strong"),i(144,"(opcional)"),e()(),t(145,"p"),i(146,"Objeto com propriedades do breadcrumb."),e()()(),t(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),i(151," (p-cancel)"),l(152,"br"),e()()(),t(153,"td",18)(154,"code",24),i(155,"EventEmitter"),e()(),t(156,"td",20),i(157,"-"),e(),t(158,"td",21)(159,"p"),i(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),e(),t(161,"pre")(162,"code"),i(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),e()(),t(164,"blockquote")(165,"p"),i(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),e()()()(),t(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),i(171," p-components-size"),l(172,"br"),e()()(),t(173,"td",18)(174,"code",25),i(175,"string"),e()(),t(176,"td",20)(177,"p")(178,"code"),i(179,"medium"),e()()(),t(180,"td",21)(181,"em")(182,"strong"),i(183,"(opcional)"),e()(),t(184,"p"),i(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(186,"ul")(187,"li")(188,"code"),i(189,"small"),e(),i(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(191,"li")(192,"code"),i(193,"medium"),e(),i(194,": aplica a medida medium de cada componente."),e()(),t(195,"blockquote")(196,"p"),i(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(198,"code"),i(199,"medium"),e(),i(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(201,"a",26),i(202,"po-theme"),e(),i(203,"."),e()()()(),t(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),i(208," p-disable-submit"),l(209,"br"),e()()(),t(210,"td",18)(211,"code",27),i(212,"boolean"),e()(),t(213,"td",20),i(214,"-"),e(),t(215,"td",21)(216,"em")(217,"strong"),i(218,"(opcional)"),e()(),t(219,"p"),i(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),e()()(),t(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),i(225," p-literals"),l(226,"br"),e()()(),t(227,"td",18)(228,"code",28),i(229,"PoPageEditLiterals"),e()(),t(230,"td",20),i(231,"-"),e(),t(232,"td",21)(233,"em")(234,"strong"),i(235,"(opcional)"),e()(),t(236,"p"),i(237,"Objeto com as literais usadas no "),t(238,"code"),i(239,"po-page-edit"),e(),i(240,"."),e(),t(241,"p"),i(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(243,"pre")(244,"code"),i(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),e()(),t(246,"p"),i(247,"Ou passando apenas as literais que deseja customizar:"),e(),t(248,"pre")(249,"code"),i(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),e()(),t(251,"p"),i(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(253,"pre")(254,"code"),i(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),e()(),t(256,"blockquote")(257,"p"),i(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(259,"a",29)(260,"code"),i(261,"PoI18nService"),e()(),i(262," ou do browser."),e()()()(),t(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),i(267," (p-save)"),l(268,"br"),e()()(),t(269,"td",18)(270,"code",24),i(271,"EventEmitter"),e()(),t(272,"td",20),i(273,"-"),e(),t(274,"td",21)(275,"p"),i(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),e(),t(277,"pre")(278,"code"),i(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),e()(),t(280,"blockquote")(281,"p"),i(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),e()()()(),t(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),i(287," (p-save-new)"),l(288,"br"),e()()(),t(289,"td",18)(290,"code",24),i(291,"EventEmitter"),e()(),t(292,"td",20),i(293,"-"),e(),t(294,"td",21)(295,"p"),i(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),e(),t(297,"pre")(298,"code"),i(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),e()(),t(300,"blockquote")(301,"p"),i(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),e()()()(),t(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),i(307," p-subtitle"),l(308,"br"),e()()(),t(309,"td",18)(310,"code",25),i(311,"string"),e()(),t(312,"td",20),i(313,"-"),e(),t(314,"td",21)(315,"em")(316,"strong"),i(317,"(opcional)"),e()(),t(318,"p"),i(319,"Subtitulo do Header da p\xE1gina."),e(),t(320,"p"),i(321,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),t(322,"code"),i(323,"<b>"),e(),i(324," (negrito), "),t(325,"code"),i(326,"<strong>"),e(),i(327," (negrito), "),t(328,"code"),i(329,"<i>"),e(),i(330," (it\xE1lico), "),t(331,"code"),i(332,"<em>"),e(),i(333,` (it\xE1lico) e
`),t(334,"code"),i(335,"<u>"),e(),i(336," (sublinhado)."),e(),t(337,"p"),i(338,"Exemplo:"),e(),t(339,"pre")(340,"code",30),i(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),e()(),t(342,"blockquote")(343,"p"),i(344,"Requer que "),t(345,"code"),i(346,"p-title"),e(),i(347," esteja definido."),e()()()(),t(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),i(352," p-title"),l(353,"br"),e()()(),t(354,"td",18)(355,"code",25),i(356,"string"),e()(),t(357,"td",20),i(358,"-"),e(),t(359,"td",21)(360,"p"),i(361,"T\xEDtulo da p\xE1gina."),e()()()(),t(362,"h3"),i(363,"Interfaces"),e(),t(364,"h4",31)(365,"code",5),i(366,"PoBreadcrumbItem"),e()(),t(367,"div",2)(368,"p"),i(369,"Interface que define cada item do componente "),t(370,"strong"),i(371,"po-breadcrumb"),e(),i(372,"."),e()(),t(373,"h4",10),i(374,"Propriedades"),e(),t(375,"table",11)(376,"tr",12)(377,"th",13),i(378,"Nome"),e(),t(379,"th",13),i(380,"Tipo"),e(),t(381,"th",13),i(382,"Descri\xE7\xE3o"),e()(),t(383,"tr",14)(384,"td",15)(385,"div",16)(386,"span",17),i(387," action"),l(388,"br"),e()()(),t(389,"td",18)(390,"code",32),i(391,"Function"),e()(),t(392,"td",21)(393,"em")(394,"strong"),i(395,"(opcional)"),e()(),t(396,"p"),i(397,"A\xE7\xE3o executada ao clicar no item."),e(),t(398,"blockquote")(399,"p"),i(400,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(401,"em"),i(402,"label"),e(),i(403," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),i(408," label"),l(409,"br"),e()()(),t(410,"td",18)(411,"code",25),i(412,"string"),e()(),t(413,"td",21)(414,"p"),i(415,"R\xF3tulo do item."),e()()(),t(416,"tr",14)(417,"td",15)(418,"div",16)(419,"span",17),i(420," link"),l(421,"br"),e()()(),t(422,"td",18)(423,"code",25),i(424,"string"),e()(),t(425,"td",21)(426,"em")(427,"strong"),i(428,"(opcional)"),e()(),t(429,"p"),i(430,"Url do item."),e(),t(431,"blockquote")(432,"p"),i(433,"Caso o item tamb\xE9m contenha uma "),t(434,"em"),i(435,"action"),e(),i(436," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(437,"em"),i(438,"link"),e(),i(439,"."),e()(),t(440,"blockquote")(441,"p"),i(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(443,"strong")(444,"a",33),i(445,"Veja um exemplo de como criar rotas aqui"),e()(),i(446,"."),e()(),t(447,"blockquote")(448,"p"),i(449,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(450,"code"),i(451,"p-favorite-service"),e(),i(452," consiga favoritar ou desfavoritar."),e()()()()(),t(453,"h4",31)(454,"code",5),i(455,"PoBreadcrumb"),e()(),t(456,"div",2)(457,"p"),i(458,"Interface que define o "),t(459,"code"),i(460,"po-breadcrumb"),e(),i(461,"."),e()(),t(462,"h4",10),i(463,"Propriedades"),e(),t(464,"table",11)(465,"tr",12)(466,"th",13),i(467,"Nome"),e(),t(468,"th",13),i(469,"Tipo"),e(),t(470,"th",13),i(471,"Descri\xE7\xE3o"),e()(),t(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),i(476," favorite"),l(477,"br"),e()()(),t(478,"td",18)(479,"code",25),i(480,"string"),e()(),t(481,"td",21)(482,"em")(483,"strong"),i(484,"(opcional)"),e()(),t(485,"p"),i(486,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(487,"blockquote")(488,"p"),i(489,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(490,"code"),i(491,"p-favorite-service"),e(),i(492," do componente "),t(493,"code"),i(494,"po-breadcrumb"),e(),i(495,"."),e()()()(),t(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),i(500," items"),l(501,"br"),e()()(),t(502,"td",18)(503,"code",34),i(504,"Array<PoBreadcrumbItem>"),e()(),t(505,"td",21)(506,"p"),i(507,"Lista de itens do "),t(508,"em"),i(509,"breadcrumb"),e(),i(510,"."),e(),t(511,"p")(512,"strong"),i(513,"Exemplo:"),e()(),t(514,"pre")(515,"code"),i(516,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(517,"tr",14)(518,"td",15)(519,"div",16)(520,"span",17),i(521," params"),l(522,"br"),e()()(),t(523,"td",18)(524,"code",35),i(525,"object"),e()(),t(526,"td",21)(527,"em")(528,"strong"),i(529,"(opcional)"),e()(),t(530,"p"),i(531,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(532,"h4",31)(533,"code",5),i(534,"PoPageEditLiterals"),e()(),t(535,"div",2)(536,"p"),i(537,"Interface para defini\xE7\xE3o das literais usadas no "),t(538,"code"),i(539,"po-page-edit"),e(),i(540,"."),e()(),t(541,"h4",10),i(542,"Propriedades"),e(),t(543,"table",11)(544,"tr",12)(545,"th",13),i(546,"Nome"),e(),t(547,"th",13),i(548,"Tipo"),e(),t(549,"th",13),i(550,"Descri\xE7\xE3o"),e()(),t(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),i(555," cancel"),l(556,"br"),e()()(),t(557,"td",18)(558,"code",25),i(559,"string"),e()(),t(560,"td",21)(561,"em")(562,"strong"),i(563,"(opcional)"),e()(),t(564,"p"),i(565,"Label da a\xE7\xE3o "),t(566,"code"),i(567,"cancel"),e(),i(568,"."),e()()(),t(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),i(573," save"),l(574,"br"),e()()(),t(575,"td",18)(576,"code",25),i(577,"string"),e()(),t(578,"td",21)(579,"em")(580,"strong"),i(581,"(opcional)"),e()(),t(582,"p"),i(583,"Label da a\xE7\xE3o "),t(584,"code"),i(585,"save"),e(),i(586,"."),e()()(),t(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),i(591," saveNew"),l(592,"br"),e()()(),t(593,"td",18)(594,"code",25),i(595,"string"),e()(),t(596,"td",21)(597,"em")(598,"strong"),i(599,"(opcional)"),e()(),t(600,"p"),i(601,"Label da a\xE7\xE3o "),t(602,"code"),i(603,"saveNew"),e(),i(604,"."),e()()()()())},dependencies:[_],encapsulation:2})}return o})();var ge=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(j(Q),j(U))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-page-edit-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),e()()()),r&2&&(h("p-actions",n.actions),m(2),h("p-active",n.activeTab==="doc"),m(2),h("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[oe,v,C,pe,se,ue,be],encapsulation:2})}return o})();var Te=[{path:"",component:ge}],Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=N({type:o});static \u0275inj=L({imports:[A.forChild(Te),A]})}return o})();var ot=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=N({type:o});static \u0275inj=L({imports:[re,Ee]})}return o})();export{ot as DocPoPageEditModule};
