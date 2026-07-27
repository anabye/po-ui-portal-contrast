import{o as C,p as Y}from"./chunk-GFGD3QHA.js";import{Ab as P,Bb as x,Ga as Q,U as K,Wa as q,a as I,nb as X,ob as k,w as J}from"./chunk-JDAUXJR5.js";import"./chunk-PUSYLN2N.js";import{$a as F,Fa as p,Ga as i,Ha as t,Ia as o,J as T,M as N,Nb as w,Nc as W,Oc as j,P as g,Pa as A,Pc as R,Q as E,Qa as u,Qc as U,Rc as H,cb as D,db as e,dd as G,fb as y,fd as L,hb as S,hd as z,ia as r,ib as h,jb as v,na as V,pa as b,qa as B,sb as _}from"./chunk-A2WYYMKN.js";import"./chunk-NCEQPEJE.js";var Z=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&o(0,"po-page-detail",0)},dependencies:[k],encapsulation:2})}return a})();var pe=a=>({"docs-sample-code-tabs":a}),ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Detail Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-detail-basic"),t(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel),r(),p("ngClass",_(4,pe,n.hideSampleCodeTabs)))},dependencies:[w,C,P,x,Z],encapsulation:2})}return a})();var te=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action="back"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}edit(){this.action="edit"}remove(){this.action="remove"}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle=""}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:!1,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=A();i(0,"po-page-detail",4),u("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),i(1,"div",5),o(2,"po-info",6),t(),o(3,"po-divider"),i(4,"form",null,0)(6,"po-input",7),v("ngModelChange",function(m){return g(s),h(n.title,m)||(n.title=m),E(m)}),t(),i(7,"po-input",8),v("ngModelChange",function(m){return g(s),h(n.subtitle,m)||(n.subtitle=m),E(m)}),t(),i(8,"po-radio-group",9),v("ngModelChange",function(m){return g(s),h(n.componentsSize,m)||(n.componentsSize=m),E(m)}),t(),o(9,"po-divider"),i(10,"form",null,1)(12,"div",5)(13,"po-input",10),v("ngModelChange",function(m){return g(s),h(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),E(m)}),t()()(),i(14,"form",null,2)(16,"div",5)(17,"po-input",11),v("ngModelChange",function(m){return g(s),h(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),E(m)}),t(),i(18,"po-input",12),v("ngModelChange",function(m){return g(s),h(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),E(m)}),t()(),i(19,"div",5)(20,"po-button",13),u("p-click",function(){return n.addBreadcrumbItem()}),t()()(),o(21,"po-divider"),i(22,"form",null,3)(24,"div",5)(25,"po-input",14),v("ngModelChange",function(m){return g(s),h(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),E(m)}),t(),i(26,"po-input",15),v("ngModelChange",function(m){return g(s),h(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),E(m)}),t()(),i(27,"div",5)(28,"po-button",16),u("p-click",function(){return n.addBreadcrumbParam()}),t()()(),i(29,"div",5)(30,"po-input",17),v("ngModelChange",function(m){return g(s),h(n.literals,m)||(n.literals=m),E(m)}),u("p-change",function(){return n.changeLiterals()}),t()(),i(31,"div",5)(32,"po-button",18),u("p-click",function(){return n.restore()}),t()()()()}if(l&2){let s=F(15),c=F(23);p("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),r(2),p("p-value",n.action),r(4),S("ngModel",n.title),r(),S("ngModel",n.subtitle),r(),S("ngModel",n.componentsSize),p("p-options",n.componentsSizeOptions),r(5),S("ngModel",n.breadcrumb.favorite),r(4),S("ngModel",n.breadcrumbItem.label),r(),S("ngModel",n.breadcrumbItem.link),r(2),p("p-disabled",s.invalid),r(5),S("ngModel",n.breadcrumbParams.property),r(),S("ngModel",n.breadcrumbParams.value),r(2),p("p-disabled",c.invalid),r(2),S("ngModel",n.literals)}},dependencies:[H,W,j,U,R,J,I,Q,K,q,k],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Detail Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-detail-labs"),t(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel),r(),p("ngClass",_(4,ce,n.hideSampleCodeTabs)))},dependencies:[w,C,P,x,te],encapsulation:2})}return a})();var ne=(()=>{class a{router=N(L);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-user"]],standalone:!1,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(i(0,"po-page-detail",0),u("p-edit",function(){return n.edit()}),i(1,"div",1),o(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),i(6,"div",1),o(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),t(),o(10,"po-divider"),i(11,"div",1),o(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),t(),o(15,"po-divider"),i(16,"div",1),o(17,"po-info",11)(18,"po-info",12),t()()),l&2&&(p("p-breadcrumb",n.breadcrumb),r(2),p("p-value",n.userId),r(),p("p-value",n.email),r(),p("p-value",n.name),r(3),p("p-value",n.nickname),r(),p("p-value",n.birthDate),r(),p("p-value",n.genre),r(3),p("p-value",n.nationality),r(),p("p-value",n.placeOfBirth),r(),p("p-value",n.graduation),r(3),p("p-value",n.fathersName),r(),p("p-value",n.mothersName))},dependencies:[I,q,k],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Detail - User"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),t(),i(13,"pre",7),e(14,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-detail-user"),t(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel),r(),p("ngClass",_(4,ge,n.hideSampleCodeTabs)))},dependencies:[w,C,P,x,ne],encapsulation:2})}return a})();var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:!1,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),i(7,"code"),e(8,"po-page-default"),t(),e(9,", "),i(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
`),i(13,"code"),e(14,"po-page-edit"),t(),e(15,", "),i(16,"code"),e(17,"po-page-list"),t(),e(18," e "),i(19,"code"),e(20,"po-page-slide"),t(),e(21,"."),t()(),i(22,"h3",3),e(23,"Componente"),t(),i(24,"h4",4)(25,"code",5),e(26,"PoPageDetailComponent"),t()(),i(27,"div",2)(28,"p"),e(29,"O componente "),i(30,"strong"),e(31,"po-page-detail"),t(),e(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),t(),i(33,"h4"),e(34,"Tokens customiz\xE1veis"),t(),i(35,"blockquote")(36,"p"),e(37,"Para maiores informa\xE7\xF5es, acesse o guia "),i(38,"a",6),e(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(40,"."),t()(),i(41,"table")(42,"thead")(43,"tr")(44,"th"),e(45,"Propriedade"),t(),i(46,"th"),e(47,"Descri\xE7\xE3o"),t(),i(48,"th"),e(49,"Valor Padr\xE3o"),t()()(),i(50,"tbody")(51,"tr")(52,"td")(53,"strong"),e(54,"Header"),t()(),o(55,"td")(56,"td"),t(),i(57,"tr")(58,"td")(59,"code"),e(60,"--padding"),t()(),i(61,"td"),e(62,"Espa\xE7amento do header"),t(),i(63,"td")(64,"code"),e(65,"var(--spacing-xs) var(--spacing-md)"),t()()(),i(66,"tr")(67,"td")(68,"code"),e(69,"--gap"),t()(),i(70,"td"),e(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(72,"td")(73,"code"),e(74,"var(--spacing-md)"),t()()(),i(75,"tr")(76,"td")(77,"code"),e(78,"--gap-actions"),t()(),i(79,"td"),e(80,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(81,"td")(82,"code"),e(83,"var(--spacing-xs)"),t()()(),i(84,"tr")(85,"td")(86,"code"),e(87,"--font-family"),t()(),i(88,"td"),e(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(90,"td")(91,"code"),e(92,"var(--font-family-theme)"),t()()(),i(93,"tr")(94,"td")(95,"strong"),e(96,"Content"),t()(),o(97,"td")(98,"td"),t(),i(99,"tr")(100,"td")(101,"code"),e(102,"--padding-content"),t()(),i(103,"td"),e(104,"Espa\xE7amento do conte\xFAdo"),t(),i(105,"td")(106,"code"),e(107,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),i(108,"div",7)(109,"h4",8),e(110,"Seletor"),t(),i(111,"pre",9),e(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),t()(),i(113,"h4",10),e(114,"Propriedades"),t(),i(115,"table",11)(116,"tr",12)(117,"th",13),e(118,"Nome"),t(),i(119,"th",13),e(120,"Tipo"),t(),i(121,"th",13),e(122,"Padr\xE3o"),t(),i(123,"th",13),e(124,"Descri\xE7\xE3o"),t()(),i(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),e(129," (p-back)"),o(130,"br"),t()()(),i(131,"td",18)(132,"code",19),e(133,"EventEmitter"),t()(),i(134,"td",20),e(135,"-"),t(),i(136,"td",21)(137,"p"),e(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),t(),i(139,"pre")(140,"code"),e(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),t()(),i(142,"blockquote")(143,"p"),e(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),t()()()(),i(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),e(149," p-breadcrumb"),o(150,"br"),t()()(),i(151,"td",18)(152,"code",24),e(153,"PoBreadcrumb"),t()(),i(154,"td",20),e(155,"-"),t(),i(156,"td",21)(157,"p"),e(158,"Objeto com propriedades do breadcrumb."),t()()(),i(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),e(163," p-components-size"),o(164,"br"),t()()(),i(165,"td",18)(166,"code",25),e(167,"string"),t()(),i(168,"td",20)(169,"p")(170,"code"),e(171,"medium"),t()()(),i(172,"td",21)(173,"em")(174,"strong"),e(175,"(opcional)"),t()(),i(176,"p"),e(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(178,"ul")(179,"li")(180,"code"),e(181,"small"),t(),e(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(183,"li")(184,"code"),e(185,"medium"),t(),e(186,": aplica a medida medium de cada componente."),t()(),i(187,"blockquote")(188,"p"),e(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(190,"code"),e(191,"medium"),t(),e(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(193,"a",26),e(194,"po-theme"),t(),e(195,"."),t()()()(),i(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),e(200," (p-edit)"),o(201,"br"),t()()(),i(202,"td",18)(203,"code",19),e(204,"EventEmitter"),t()(),i(205,"td",20),e(206,"-"),t(),i(207,"td",21)(208,"p"),e(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),t(),i(210,"pre")(211,"code"),e(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),t()(),i(213,"blockquote")(214,"p"),e(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),t()()()(),i(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),e(220," p-literals"),o(221,"br"),t()()(),i(222,"td",18)(223,"code",27),e(224,"PoPageDetailLiterals"),t()(),i(225,"td",20),e(226,"-"),t(),i(227,"td",21)(228,"em")(229,"strong"),e(230,"(opcional)"),t()(),i(231,"p"),e(232,"Objeto com as literais usadas no "),i(233,"code"),e(234,"po-page-detail"),t(),e(235,"."),t(),i(236,"p"),e(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(238,"pre")(239,"code"),e(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),t()(),i(241,"p"),e(242,"Ou passando apenas as literais que deseja customizar:"),t(),i(243,"pre")(244,"code"),e(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),t()(),i(246,"p"),e(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(248,"pre")(249,"code"),e(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),t()(),i(251,"blockquote")(252,"p"),e(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(254,"a",28)(255,"code"),e(256,"PoI18nService"),t()(),e(257," ou do browser."),t()()()(),i(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),e(262," (p-remove)"),o(263,"br"),t()()(),i(264,"td",18)(265,"code",19),e(266,"EventEmitter"),t()(),i(267,"td",20),e(268,"-"),t(),i(269,"td",21)(270,"p"),e(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),t(),i(272,"pre")(273,"code"),e(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),t()(),i(275,"blockquote")(276,"p"),e(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),t()()()(),i(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),e(282," p-subtitle"),o(283,"br"),t()()(),i(284,"td",18)(285,"code",25),e(286,"string"),t()(),i(287,"td",20),e(288,"-"),t(),i(289,"td",21)(290,"em")(291,"strong"),e(292,"(opcional)"),t()(),i(293,"p"),e(294,"Subtitulo do Header da p\xE1gina."),t(),i(295,"p"),e(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),i(297,"code"),e(298,"<b>"),t(),e(299," (negrito), "),i(300,"code"),e(301,"<strong>"),t(),e(302," (negrito), "),i(303,"code"),e(304,"<i>"),t(),e(305," (it\xE1lico), "),i(306,"code"),e(307,"<em>"),t(),e(308,` (it\xE1lico) e
`),i(309,"code"),e(310,"<u>"),t(),e(311," (sublinhado)."),t(),i(312,"p"),e(313,"Exemplo:"),t(),i(314,"pre")(315,"code",29),e(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),t()(),i(317,"blockquote")(318,"p"),e(319,"Requer que "),i(320,"code"),e(321,"p-title"),t(),e(322," esteja definido."),t()()()(),i(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),e(327," p-title"),o(328,"br"),t()()(),i(329,"td",18)(330,"code",25),e(331,"string"),t()(),i(332,"td",20),e(333,"-"),t(),i(334,"td",21)(335,"p"),e(336,"T\xEDtulo da p\xE1gina."),t()()()(),i(337,"h3"),e(338,"Interfaces"),t(),i(339,"h4",30)(340,"code",5),e(341,"PoBreadcrumbItem"),t()(),i(342,"div",2)(343,"p"),e(344,"Interface que define cada item do componente "),i(345,"strong"),e(346,"po-breadcrumb"),t(),e(347,"."),t()(),i(348,"h4",10),e(349,"Propriedades"),t(),i(350,"table",11)(351,"tr",12)(352,"th",13),e(353,"Nome"),t(),i(354,"th",13),e(355,"Tipo"),t(),i(356,"th",13),e(357,"Descri\xE7\xE3o"),t()(),i(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),e(362," action"),o(363,"br"),t()()(),i(364,"td",18)(365,"code",31),e(366,"Function"),t()(),i(367,"td",21)(368,"em")(369,"strong"),e(370,"(opcional)"),t()(),i(371,"p"),e(372,"A\xE7\xE3o executada ao clicar no item."),t(),i(373,"blockquote")(374,"p"),e(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(376,"em"),e(377,"label"),t(),e(378," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),e(383," label"),o(384,"br"),t()()(),i(385,"td",18)(386,"code",25),e(387,"string"),t()(),i(388,"td",21)(389,"p"),e(390,"R\xF3tulo do item."),t()()(),i(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),e(395," link"),o(396,"br"),t()()(),i(397,"td",18)(398,"code",25),e(399,"string"),t()(),i(400,"td",21)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),i(404,"p"),e(405,"Url do item."),t(),i(406,"blockquote")(407,"p"),e(408,"Caso o item tamb\xE9m contenha uma "),i(409,"em"),e(410,"action"),t(),e(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(412,"em"),e(413,"link"),t(),e(414,"."),t()(),i(415,"blockquote")(416,"p"),e(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(418,"strong")(419,"a",32),e(420,"Veja um exemplo de como criar rotas aqui"),t()(),e(421,"."),t()(),i(422,"blockquote")(423,"p"),e(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(425,"code"),e(426,"p-favorite-service"),t(),e(427," consiga favoritar ou desfavoritar."),t()()()()(),i(428,"h4",30)(429,"code",5),e(430,"PoBreadcrumb"),t()(),i(431,"div",2)(432,"p"),e(433,"Interface que define o "),i(434,"code"),e(435,"po-breadcrumb"),t(),e(436,"."),t()(),i(437,"h4",10),e(438,"Propriedades"),t(),i(439,"table",11)(440,"tr",12)(441,"th",13),e(442,"Nome"),t(),i(443,"th",13),e(444,"Tipo"),t(),i(445,"th",13),e(446,"Descri\xE7\xE3o"),t()(),i(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),e(451," favorite"),o(452,"br"),t()()(),i(453,"td",18)(454,"code",25),e(455,"string"),t()(),i(456,"td",21)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),i(460,"p"),e(461,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(462,"blockquote")(463,"p"),e(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(465,"code"),e(466,"p-favorite-service"),t(),e(467," do componente "),i(468,"code"),e(469,"po-breadcrumb"),t(),e(470,"."),t()()()(),i(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),e(475," items"),o(476,"br"),t()()(),i(477,"td",18)(478,"code",33),e(479,"Array<PoBreadcrumbItem>"),t()(),i(480,"td",21)(481,"p"),e(482,"Lista de itens do "),i(483,"em"),e(484,"breadcrumb"),t(),e(485,"."),t(),i(486,"p")(487,"strong"),e(488,"Exemplo:"),t()(),i(489,"pre")(490,"code"),e(491,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),e(496," params"),o(497,"br"),t()()(),i(498,"td",18)(499,"code",34),e(500,"object"),t()(),i(501,"td",21)(502,"em")(503,"strong"),e(504,"(opcional)"),t()(),i(505,"p"),e(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(507,"h4",30)(508,"code",5),e(509,"PoPageDetailLiterals"),t()(),i(510,"div",2)(511,"p"),e(512,"Interface para defini\xE7\xE3o das literais usadas no "),i(513,"code"),e(514,"po-page-detail"),t(),e(515,"."),t()(),i(516,"h4",10),e(517,"Propriedades"),t(),i(518,"table",11)(519,"tr",12)(520,"th",13),e(521,"Nome"),t(),i(522,"th",13),e(523,"Tipo"),t(),i(524,"th",13),e(525,"Descri\xE7\xE3o"),t()(),i(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),e(530," back"),o(531,"br"),t()()(),i(532,"td",18)(533,"code",25),e(534,"string"),t()(),i(535,"td",21)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),i(539,"p"),e(540,"Label da a\xE7\xE3o "),i(541,"code"),e(542,"back"),t(),e(543,"."),t()()(),i(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),e(548," edit"),o(549,"br"),t()()(),i(550,"td",18)(551,"code",25),e(552,"string"),t()(),i(553,"td",21)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),i(557,"p"),e(558,"Label da a\xE7\xE3o "),i(559,"code"),e(560,"edit"),t(),e(561,"."),t()()(),i(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),e(566," remove"),o(567,"br"),t()()(),i(568,"td",18)(569,"code",25),e(570,"string"),t()(),i(571,"td",21)(572,"em")(573,"strong"),e(574,"(opcional)"),t()(),i(575,"p"),e(576,"Label da a\xE7\xE3o "),i(577,"code"),e(578,"remove"),t(),e(579,"."),t()()()()())},dependencies:[C],encapsulation:2})}return a})();var le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(V(G),V(L))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-detail-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),t()()()),l&2&&(p("p-actions",n.actions),r(2),p("p-active",n.activeTab==="doc"),r(2),p("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[X,P,x,ee,ie,ae,oe],encapsulation:2})}return a})();var he=[{path:"",component:le}],re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=B({type:a});static \u0275inj=T({imports:[z.forChild(he),z]})}return a})();var Ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=B({type:a});static \u0275inj=T({imports:[Y,re]})}return a})();export{Ge as DocPoPageDetailModule};
