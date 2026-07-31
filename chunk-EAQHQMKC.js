import{o as T,p as ce}from"./chunk-AW4276X3.js";import{Ab as A,Bb as y,Ga as me,Hb as L,La as se,U as re,da as B,ia as k,nb as pe,va as de,w as U}from"./chunk-5KGSWRT5.js";import"./chunk-PUSYLN2N.js";import{Da as W,Db as Z,Ea as j,Fa as s,Ga as n,Ha as t,Ia as o,J as I,Kb as $,Nb as M,Nc as ee,Oc as te,P as h,Pa as R,Pc as ne,Q as S,Qa as E,Qc as ie,Rc as oe,Sa as G,Wa as Q,Xa as J,Ya as K,cb as P,db as e,dd as ae,fb as _,fd as le,hb as b,hd as q,ia as m,ib as g,jb as x,na as v,pa as u,qa as D,rb as w,sb as H,tb as X,ua as z,vb as Y}from"./chunk-A2WYYMKN.js";import{a as F,b as V}from"./chunk-NCEQPEJE.js";var ue=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l}myAction(l){this.poNotification.success(`Action clicked: ${l}`)}static \u0275fac=function(r){return new(r||a)(v(k))};static \u0275cmp=u({type:a,selectors:[["sample-po-header-basic"]],standalone:!1,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&o(0,"po-header",0),r&2&&s("p-brand",i.headerBrand)("p-side-menu-only-action",!0)},dependencies:[L],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Header Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-header-basic/sample-po-header-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-header-basic"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel),m(),s("ngClass",H(4,ye,i.hideSampleCodeTabs)))},dependencies:[M,T,A,y,ue],encapsulation:2})}return a})();var we=()=>({label:"Positive",value:"positive"}),Pe=()=>({label:"Negative",value:"negative"}),_e=()=>({label:"Warning",value:"warning"}),He=()=>({label:"Disabled",value:"disabled"}),Me=(a,C,l,r)=>[a,C,l,r],Be=()=>({label:"Medium",value:"medium"}),ke=()=>({label:"Small",value:"small"}),Le=(a,C)=>[a,C],Se=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo=""}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent=""}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={}}addUser(){this.actionUser=F({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium"}static \u0275fac=function(r){return new(r||a)(v(k))};static \u0275cmp=u({type:a,selectors:[["sample-po-header-labs"]],standalone:!1,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=R();o(0,"po-header",1),n(1,"div",2)(2,"po-input",3),x("ngModelChange",function(d){return h(p),g(i.headerBrandTitle,d)||(i.headerBrandTitle=d),S(d)}),t(),n(3,"po-input",4),x("ngModelChange",function(d){return h(p),g(i.headerBrandLogo,d)||(i.headerBrandLogo=d),S(d)}),t(),n(4,"po-input",5),x("ngModelChange",function(d){return h(p),g(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),S(d)}),t(),n(5,"div",6)(6,"po-button",7),E("p-click",function(){return i.addBrand()}),t()()(),o(7,"hr"),n(8,"div",8)(9,"h3",9),e(10,"A\xE7\xF5es dos itens de menu"),t(),n(11,"po-input",10),x("ngModelChange",function(d){return h(p),g(i.menuActionEvent,d)||(i.menuActionEvent=d),S(d)}),t(),n(12,"po-input",11),x("ngModelChange",function(d){return h(p),g(i.menuActionLabel,d)||(i.menuActionLabel=d),S(d)}),t(),n(13,"po-button",12),E("p-click",function(){return i.addAction()}),t()(),o(14,"hr"),n(15,"h3",9),e(16,"A\xE7\xF5es das configura\xE7\xF5es"),t(),n(17,"form",8,0)(19,"po-input",13),x("ngModelChange",function(d){return h(p),g(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),S(d)}),t(),n(20,"po-input",14),x("ngModelChange",function(d){return h(p),g(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),S(d)}),t(),n(21,"po-number",15),x("ngModelChange",function(d){return h(p),g(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),S(d)}),t(),n(22,"po-switch",16),x("ngModelChange",function(d){return h(p),g(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),S(d)}),t(),n(23,"po-button",17),E("p-click",function(){return i.addTool(i.actionNewTool)}),t()(),o(24,"hr"),n(25,"h3",9),e(26,"A\xE7\xF5es do Usu\xE1rio"),t(),n(27,"form",8,0)(29,"po-input",18),x("ngModelChange",function(d){return h(p),g(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),S(d)}),t(),n(30,"po-input",19),x("ngModelChange",function(d){return h(p),g(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),S(d)}),t(),n(31,"po-radio-group",20),x("ngModelChange",function(d){return h(p),g(i.newActionUser.status,d)||(i.newActionUser.status=d),S(d)}),t(),n(32,"po-button",17),E("p-click",function(){return i.addUser()}),t(),o(33,"hr"),n(34,"h3",9),e(35,"Varia\xE7\xF5es de tamanho"),t(),n(36,"div",8)(37,"po-radio-group",21),x("ngModelChange",function(d){return h(p),g(i.size,d)||(i.size=d),S(d)}),t()(),o(38,"hr"),n(39,"po-button",22),E("p-click",function(){return i.reset()}),t()()}r&2&&(s("p-side-menu-only-action",!0)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),m(2),b("ngModel",i.headerBrandTitle),m(),b("ngModel",i.headerBrandLogo),m(),b("ngModel",i.headerBrandSmallLogo),m(7),b("ngModel",i.menuActionEvent),m(),b("ngModel",i.menuActionLabel),m(),s("p-disabled",!i.menuActionLabel),m(6),b("ngModel",i.actionNewTool.icon),m(),b("ngModel",i.actionNewTool.tooltip),m(),b("ngModel",i.actionNewTool.badge),m(),b("ngModel",i.actionNewToolEvent),m(),s("p-disabled",i.actionTools.length>2),m(6),b("ngModel",i.newActionUser.customerBrand),m(),b("ngModel",i.newActionUser.avatar),m(),b("ngModel",i.newActionUser.status),s("p-options",Y(28,Me,w(24,we),w(25,Pe),w(26,_e),w(27,He))),m(),s("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),m(5),b("ngModel",i.size),s("p-options",X(35,Le,w(33,Be),w(34,ke))))},dependencies:[oe,ee,te,ie,ne,U,me,se,re,de,L],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Header Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-header-labs/sample-po-header-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
  [p-size]="size"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>

  <hr />
  <h3 class="po-lg-12 po-mb-2">Varia\xE7\xF5es de tamanho</h3>
  <div class="po-row po-mt-2">
    <po-radio-group
      class="po-md-12 po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="[
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' }
      ]"
    >
    </po-radio-group>
  </div>

  <hr />

  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  size: string = 'medium';

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-header-labs"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel),m(),s("ngClass",H(4,Fe,i.hideSampleCodeTabs)))},dependencies:[M,T,A,y,Se],encapsulation:2})}return a})();var De=["meuTemplate"],Ue=(a,C)=>C.icon;function Ve(a,C){if(a&1&&o(0,"po-button",4),a&2){let l=C.$implicit;s("p-icon",l.icon)}}function qe(a,C){if(a&1&&(n(0,"div",2)(1,"p"),e(2,"Meus aplicativos"),t(),o(3,"br"),n(4,"div",3),W(5,Ve,1,1,"po-button",4,Ue),t()()),a&2){let l=G();m(5),j(l.systemApps)}}var ge=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate},onOpen:l=>this.onOpenTool(l),onClose:l=>this.onCloseTool(l)},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem,onOpen:l=>this.onOpenTool(l),onClose:l=>this.onCloseTool(l)}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",status:"positive",items:[{label:"Meu perfil",action:this.myAction.bind(this,"Meu perfil")},{label:"Configura\xE7\xF5es",action:this.myAction.bind(this,"Configura\xE7\xF5es")},{label:"Sair",action:this.myAction.bind(this,"Sair")}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?V(F({},l),{popover:V(F({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges()}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:B.Top})}onOpenTool(l){this.poNotification.information({message:`Opened: ${l} (p-actions-tools)`,orientation:B.Top})}onCloseTool(l){this.poNotification.warning({message:`Closed: ${l} (p-actions-tools)`,orientation:B.Top})}onOpenUser(){this.poNotification.information({message:"Opened: User menu (p-header-user)",orientation:B.Top})}onCloseUser(){this.poNotification.warning({message:"Closed: User menu (p-header-user)",orientation:B.Top})}static \u0275fac=function(r){return new(r||a)(v(k),v($))};static \u0275cmp=u({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&Q(De,5),r&2){let p;J(p=K())&&(i.meuTemplate=p.first)}},standalone:!1,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(o(0,"po-header",1),z(1,qe,7,0,"ng-template",null,0,Z)),r&2&&s("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",!0)},dependencies:[U,L],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-apps-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Header Apps"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-header-apps/sample-po-header-apps.component.html"),t(),n(13,"pre",7),e(14,`<po-header
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),t(),n(19,"pre",9),e(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  styles: \`
    .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    .custom-template {
      padding: 0.5rem;
    }

    .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;

  listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-chat-circle-dots',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      items: this.listItem,
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    }
  ];

  headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    status: 'positive',
    items: [
      { label: 'Meu perfil', action: this.myAction.bind(this, 'Meu perfil') },
      { label: 'Configura\xE7\xF5es', action: this.myAction.bind(this, 'Configura\xE7\xF5es') },
      { label: 'Sair', action: this.myAction.bind(this, 'Sair') }
    ],
    onOpen: () => this.onOpenUser(),
    onClose: () => this.onCloseUser()
  };

  systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.popover) {
        return {
          ...action,
          popover: {
            ...action.popover,
            content: this.meuTemplate
          }
        };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Top });
  }

  /** Callback de abertura para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onOpenTool(label?: string): void {
    this.poNotification.information({
      message: \`Opened: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onCloseTool(label?: string): void {
    this.poNotification.warning({
      message: \`Closed: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de abertura para o \`p-header-user\`. */
  onOpenUser(): void {
    this.poNotification.information({
      message: 'Opened: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para o \`p-header-user\`. */
  onCloseUser(): void {
    this.poNotification.warning({
      message: 'Closed: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-header-apps"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel),m(),s("ngClass",H(4,ze,i.hideSampleCodeTabs)))},dependencies:[M,T,A,y,ge],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-doc"]],standalone:!1,decls:1489,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","(label?:","string)","=>","void"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),n(7,"code"),e(8,"po-header"),t(),e(9,"."),t()(),n(10,"h3",3),e(11,"Componente"),t(),n(12,"h4",4)(13,"code",5),e(14,"PoHeaderComponent"),t()(),n(15,"div",2)(16,"p"),e(17,"O componente "),n(18,"code"),e(19,"po-header"),t(),e(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),n(21,"code"),e(22,"p-brand"),t(),e(23,", "),n(24,"code"),e(25,"p-menu-items"),t(),e(26,", "),n(27,"code"),e(28,"p-actions-tools"),t(),e(29," e "),n(30,"code"),e(31,"p-header-user"),t(),e(32,"."),t(),n(33,"ul")(34,"li")(35,"code"),e(36,"p-brand"),t(),e(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),t(),n(38,"li")(39,"code"),e(40,"p-menu-items"),t(),e(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),t(),n(42,"li")(43,"code"),e(44,"p-actions-tools"),t(),e(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),t(),n(46,"li")(47,"code"),e(48,"p-header-user"),t(),e(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),t()(),n(50,"p"),e(51,"O componente "),n(52,"code"),e(53,"po-header"),t(),e(54," pode ser usado de duas formas:"),t(),n(55,"p"),e(56,"Com "),n(57,"code"),e(58,"po-menu"),t(),e(59," definido pelo usu\xE1rio:"),t(),n(60,"pre")(61,"code"),e(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),t()(),n(63,"p"),e(64,"Passando os itens diretamente para o "),n(65,"code"),e(66,"po-header"),t(),e(67," pela propriedade "),n(68,"code"),e(69,"p-menus"),t(),e(70,":"),t(),n(71,"pre")(72,"code"),e(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),t()(),n(74,"h4"),e(75,"Tokens customiz\xE1veis"),t(),n(76,"p"),e(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(78,"blockquote")(79,"p"),e(80,"Para maiores informa\xE7\xF5es, acesse o guia "),n(81,"a",6),e(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(83,"."),t()(),n(84,"table")(85,"thead")(86,"tr")(87,"th"),e(88,"Propriedade"),t(),n(89,"th"),e(90,"Descri\xE7\xE3o"),t(),n(91,"th"),e(92,"Valor Padr\xE3o"),t()()(),n(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"--font-family"),t()(),n(98,"td"),e(99,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(100,"td")(101,"code"),e(102,"var(--font-family-theme)"),t()()(),n(103,"tr")(104,"td")(105,"code"),e(106,"--font-weight"),t()(),n(107,"td"),e(108,"Peso da fonte"),t(),n(109,"td")(110,"code"),e(111,"var(--font-weight-bold)"),t()()(),n(112,"tr")(113,"td")(114,"code"),e(115,"--text-color"),t()(),n(116,"td"),e(117,"Cor do texto"),t(),n(118,"td")(119,"code"),e(120,"var(--color-neutral-dark-70)"),t()()(),n(121,"tr")(122,"td")(123,"code"),e(124,"--outline-color-focused"),t()(),n(125,"td"),e(126,"Cor do outline dos itens de sub-menu e customer"),t(),n(127,"td")(128,"code"),e(129,"var(--color-neutral-dark-95)"),t()()(),n(130,"tr")(131,"td")(132,"code"),e(133,"--object-fit-brand"),t()(),n(134,"td"),e(135,"Valor do object-fit da imagem do logo"),t(),n(136,"td")(137,"code"),e(138,"contain"),t()()(),n(139,"tr")(140,"td")(141,"code"),e(142,"--object-fit-customer"),t()(),n(143,"td"),e(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),t(),n(145,"td")(146,"code"),e(147,"contain"),t()()(),n(148,"tr")(149,"td")(150,"code"),e(151,"--object-fit-customer-user"),t()(),n(152,"td"),e(153,"Valor do object-fit da imagem do avatar"),t(),n(154,"td")(155,"code"),e(156,"cover"),t()()(),n(157,"tr")(158,"td")(159,"strong"),e(160,"Header"),t()(),o(161,"td")(162,"td"),t(),n(163,"tr")(164,"td")(165,"code"),e(166,"--background-color"),t()(),n(167,"td"),e(168,"Cor de background do header"),t(),n(169,"td")(170,"code"),e(171,"var(--color-neutral-light-05)"),t()()(),n(172,"tr")(173,"td")(174,"code"),e(175,"--border-radius-bottom-left"),t()(),n(176,"td"),e(177,"Valor do radius do lado esquerdo do header"),t(),n(178,"td")(179,"code"),e(180,"var(--border-radius-md)"),t()()(),n(181,"tr")(182,"td")(183,"code"),e(184,"--border-radius-bottom-right"),t()(),n(185,"td"),e(186,"Valor do radius do lado direito do header"),t(),n(187,"td")(188,"code"),e(189,"var(--border-radius-md)"),t()()(),n(190,"tr")(191,"td")(192,"code"),e(193,"--base shadow"),t()(),n(194,"td"),e(195,"Cor da sombra do header"),t(),n(196,"td")(197,"code"),e(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),t()()(),n(199,"tr")(200,"td")(201,"code"),e(202,"--stroke-color"),t()(),n(203,"td"),e(204,"Cor da borda inferior do header"),t(),n(205,"td")(206,"code"),e(207,"var(--color-brand-01-base)"),t()()(),n(208,"tr")(209,"td")(210,"strong"),e(211,"Sub-menu"),t()(),o(212,"td")(213,"td"),t(),n(214,"tr")(215,"td")(216,"code"),e(217,"--border-radius"),t()(),n(218,"td"),e(219,"Valor do radius dos itens do sub-menu"),t(),n(220,"td")(221,"code"),e(222,"var(--border-radius-md);"),t()()(),n(223,"tr")(224,"td")(225,"code"),e(226,"--text-color-submenu"),t()(),n(227,"td"),e(228,"Cor do texto dos itens do sub-menu"),t(),n(229,"td")(230,"code"),e(231,"var(--color-brand-01-base)"),t()()(),n(232,"tr")(233,"td")(234,"code"),e(235,"--icon-color"),t()(),n(236,"td"),e(237,"Cor do \xEDcone do sub-menu com itens"),t(),n(238,"td")(239,"code"),e(240,"var(--color-brand-01-base)"),t()()(),n(241,"tr")(242,"td")(243,"code"),e(244,"--border-color"),t()(),n(245,"td"),e(246,"Cor da borda"),t(),n(247,"td")(248,"code"),e(249,"var(--color-transparent)"),t()()(),n(250,"tr")(251,"td")(252,"code"),e(253,"--shadow"),t()(),n(254,"td"),e(255,"Cont\xE9m o valor da sombra do elemento"),t(),n(256,"td")(257,"code"),e(258,"var(--shadow-none)"),t()()(),n(259,"tr")(260,"td")(261,"code"),e(262,"--font-family-submenu"),t()(),n(263,"td"),e(264,"Fonte do texto dos itens de sub-menu"),t(),n(265,"td")(266,"code"),e(267,"var(--font-family-theme)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--font-weight-submenu"),t()(),n(272,"td"),e(273,"Peso da fonte do texto dos itens de sub-menu"),t(),n(274,"td")(275,"code"),e(276,"var(--font-weight-bold)"),t()()(),n(277,"tr")(278,"td")(279,"strong"),e(280,"Sub-menu - Hover"),t()(),o(281,"td")(282,"td"),t(),n(283,"tr")(284,"td")(285,"code"),e(286,"--background-hover"),t()(),n(287,"td"),e(288,"Cor de background dos itens do sub-menu no estado hover"),t(),n(289,"td")(290,"code"),e(291,"var(--color-brand-01-lighter)"),t()()(),n(292,"tr")(293,"td")(294,"code"),e(295,"--icon-color-hover"),t()(),n(296,"td"),e(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),t(),n(298,"td")(299,"code"),e(300,"var(--color-brand-01-darkest)"),t()()(),n(301,"tr")(302,"td")(303,"code"),e(304,"--text-color-hover"),t()(),n(305,"td"),e(306,"Cor do texto dos itens de sub-menu no estado hover"),t(),n(307,"td")(308,"code"),e(309,"var(--color-brand-01-darkest)"),t()()(),n(310,"tr")(311,"td")(312,"strong"),e(313,"Sub-menu - pressed"),t()(),o(314,"td")(315,"td"),t(),n(316,"tr")(317,"td")(318,"code"),e(319,"--background-pressed"),t()(),n(320,"td"),e(321,"Cor de background dos itens do sub-menu no estado pressed"),t(),n(322,"td")(323,"code"),e(324,"var(--color-brand-01-light)"),t()()(),n(325,"tr")(326,"td")(327,"code"),e(328,"--icon-color-pressed"),t()(),n(329,"td"),e(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),t(),n(331,"td")(332,"code"),e(333,"var(--color-brand-01-darkest)"),t()()(),n(334,"tr")(335,"td")(336,"code"),e(337,"--text-color-pressed"),t()(),n(338,"td"),e(339,"Cor do texto dos itens de sub-menu no estado pressed"),t(),n(340,"td")(341,"code"),e(342,"var(--color-brand-01-darkest)"),t()()(),n(343,"tr")(344,"td")(345,"strong"),e(346,"Sub-menu - selected"),t()(),o(347,"td")(348,"td"),t(),n(349,"tr")(350,"td")(351,"code"),e(352,"--background-selected"),t()(),n(353,"td"),e(354,"Cor de background dos itens do sub-menu no estado selected"),t(),n(355,"td")(356,"code"),e(357,"var(--color-brand-01-light)"),t()()(),n(358,"tr")(359,"td")(360,"code"),e(361,"--icon-color-selected"),t()(),n(362,"td"),e(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),t(),n(364,"td")(365,"code"),e(366,"var(--color-neutral-dark-95)"),t()()(),n(367,"tr")(368,"td")(369,"code"),e(370,"--text-color-selected"),t()(),n(371,"td"),e(372,"Cor do texto dos itens de sub-menu no estado selected"),t(),n(373,"td")(374,"code"),e(375,"var(--color-brand-01-darkest)"),t()()(),n(376,"tr")(377,"td")(378,"strong"),e(379,"Customer"),t()(),o(380,"td")(381,"td"),t(),n(382,"tr")(383,"td")(384,"code"),e(385,"--background-color-customer"),t()(),n(386,"td"),e(387,"Cor do background da se\xE7\xE3o customer"),t(),n(388,"td")(389,"code"),e(390,"var(--color-neutral-light-00)"),t()()(),n(391,"tr")(392,"td")(393,"code"),e(394,"--border-color"),t()(),n(395,"td"),e(396,"Cor da borda da se\xE7\xE3o customer"),t(),n(397,"td")(398,"code"),e(399,"var(--color-neutral-light-10)"),t()()(),n(400,"tr")(401,"td")(402,"code"),e(403,"--border-style"),t()(),n(404,"td"),e(405,"Estilo da borda da se\xE7\xE3o customer"),t(),n(406,"td")(407,"code"),e(408,"solid"),t()()(),n(409,"tr")(410,"td")(411,"code"),e(412,"--border-width"),t()(),n(413,"td"),e(414,"Largura da borda da se\xE7\xE3o customer"),t(),n(415,"td")(416,"code"),e(417,"var(--border-width-sm)"),t()()(),n(418,"tr")(419,"td")(420,"strong"),e(421,"Customer - hover"),t()(),o(422,"td")(423,"td"),t(),n(424,"tr")(425,"td")(426,"code"),e(427,"--background-color-customer-hover"),t()(),n(428,"td"),e(429,"Cor do background da se\xE7\xE3o customer no estado hover"),t(),n(430,"td")(431,"code"),e(432,"var(--color-brand-01-lighter)"),t()()(),n(433,"tr")(434,"td")(435,"strong"),e(436,"Customer - pressed"),t()(),o(437,"td")(438,"td"),t(),n(439,"tr")(440,"td")(441,"code"),e(442,"--background-color-customer-pressed"),t()(),n(443,"td"),e(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),t(),n(445,"td")(446,"code"),e(447,"var(--color-brand-01-light)"),t()()(),n(448,"tr")(449,"td")(450,"code"),e(451,"--border-width-pressed"),t()(),n(452,"td"),e(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),t(),n(454,"td")(455,"code"),e(456,"var(--border-width-md)"),t()()()()()(),n(457,"div",7)(458,"h4",8),e(459,"Seletor"),t(),n(460,"pre",9),e(461,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>"
    p-size="string" >
</po-header>
`),t()(),n(462,"h4",10),e(463,"Propriedades"),t(),n(464,"table",11)(465,"tr",12)(466,"th",13),e(467,"Nome"),t(),n(468,"th",13),e(469,"Tipo"),t(),n(470,"th",13),e(471,"Padr\xE3o"),t(),n(472,"th",13),e(473,"Descri\xE7\xE3o"),t()(),n(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),e(478," p-actions-tools"),o(479,"br"),t()()(),n(480,"td",18)(481,"code",19),e(482,"Array<PoHeaderActionTool>"),t()(),n(483,"td",20),e(484,"-"),t(),n(485,"td",21)(486,"em")(487,"strong"),e(488,"(opcional)"),t()(),n(489,"p"),e(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),n(491,"code"),e(492,"po-header"),t()(),n(493,"blockquote")(494,"p"),e(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),t()()()(),n(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),e(500," p-amount-more"),o(501,"br"),t()()(),n(502,"td",18)(503,"code",22),e(504,"number"),t()(),n(505,"td",20),e(506,"-"),t(),n(507,"td",21)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),t(),n(513,"blockquote")(514,"p"),e(515,"Ao utilizar essa propriedade o "),n(516,"code"),e(517,"po-header"),t(),e(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),t()()()(),n(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),e(523," p-brand"),o(524,"br"),t()()(),n(525,"td",18)(526,"code",23),e(527,"PoHeaderBrand "),t(),n(528,"code",24),e(529," string"),t()(),n(530,"td",20),e(531,"-"),t(),n(532,"td",21)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),n(536,"p"),e(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),n(538,"code"),e(539,"po-header"),t()(),n(540,"p"),e(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),t()()(),n(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),e(546," (p-colapsed-menu)"),o(547,"br"),t()()(),n(548,"td",18)(549,"code",27),e(550,"EventEmitter"),t()(),n(551,"td",20),e(552,"-"),t(),n(553,"td",21)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),n(557,"p"),e(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),t()()(),n(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),e(563," p-filter-menu"),o(564,"br"),t()()(),n(565,"td",18)(566,"code",28),e(567,"boolean"),t()(),n(568,"td",20),e(569,"-"),t(),n(570,"td",21)(571,"em")(572,"strong"),e(573,"(opcional)"),t()(),n(574,"p"),e(575,"Habilita campo para filtrar itens no menu"),t()()(),n(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),e(580," p-header-template"),o(581,"br"),t()()(),n(582,"td",18)(583,"code",29),e(584,"TemplateRef<any>"),t()(),n(585,"td",20),e(586,"-"),t(),n(587,"td",21)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),n(591,"p"),e(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),n(593,"code"),e(594,"p-menu-items"),t()()()(),n(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),e(599," p-header-user"),o(600,"br"),t()()(),n(601,"td",18)(602,"code",30),e(603,"PoHeaderUser"),t()(),n(604,"td",20),e(605,"-"),t(),n(606,"td",21)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),n(610,"p"),e(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),n(612,"code"),e(613,"po-header"),t()()()(),n(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),e(618," p-hide-button-menu"),o(619,"br"),t()()(),n(620,"td",18)(621,"code",28),e(622,"boolean"),t()(),n(623,"td",20),e(624,"-"),t(),n(625,"td",21)(626,"em")(627,"strong"),e(628,"(opcional)"),t()(),n(629,"p"),e(630,"Esconde o bot\xE3o de menu colapsado."),t()()(),n(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),e(635," p-literals"),o(636,"br"),t()()(),n(637,"td",18)(638,"code",31),e(639,"PoHeaderLiterals"),t()(),n(640,"td",20),e(641,"-"),t(),n(642,"td",21)(643,"em")(644,"strong"),e(645,"(opcional)"),t()(),n(646,"p"),e(647,"Objeto com a literal usada na propriedade "),n(648,"code"),e(649,"p-literals"),t(),e(650,"."),t(),n(651,"p"),e(652,"Para customizar a literal, basta declarar um objeto do tipo "),n(653,"code"),e(654,"PoHeaderLiterals"),t(),e(655," conforme exemplo abaixo:"),t(),n(656,"pre")(657,"code"),e(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),t()(),n(659,"p"),e(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(661,"pre")(662,"code"),e(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),t()(),n(664,"blockquote")(665,"p"),e(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(667,"a",32)(668,"code"),e(669,"PoI18nService"),t()(),e(670," ou do browser."),t()()()(),n(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),e(675," p-menus"),o(676,"br"),t()()(),n(677,"td",18)(678,"code",33),e(679,"Array<PoMenuItem>"),t()(),n(680,"td",20),e(681,"-"),t(),n(682,"td",21)(683,"em")(684,"strong"),e(685,"(opcional)"),t()(),n(686,"p"),e(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),t(),n(688,"blockquote")(689,"p"),e(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),t()()()(),n(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),e(695," p-menu-items"),o(696,"br"),t()()(),n(697,"td",18)(698,"code",34),e(699,"Array<PoHeaderActions>"),t()(),n(700,"td",20),e(701,"-"),t(),n(702,"td",21)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),n(706,"p"),e(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),n(708,"code"),e(709,"po-header"),t(),e(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),t(),n(711,"blockquote")(712,"p"),e(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),t()()()(),n(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),e(718," p-size"),o(719,"br"),t()()(),n(720,"td",18)(721,"code",24),e(722,"string"),t()(),n(723,"td",20)(724,"p")(725,"code"),e(726,"medium"),t()()(),n(727,"td",21)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),n(731,"p"),e(732,"Define o tamanho do componente:"),t(),n(733,"ul")(734,"li")(735,"code"),e(736,"small"),t(),e(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(738,"li")(739,"code"),e(740,"medium"),t(),e(741,": altura de 56px."),t()(),n(742,"blockquote")(743,"p"),e(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(745,"code"),e(746,"medium"),t(),e(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(748,"a",35),e(749,"po-theme"),t(),e(750,"."),t()()()()(),n(751,"h3"),e(752,"Interfaces"),t(),n(753,"h4",36)(754,"code",5),e(755,"PoHeaderActionTool"),t()(),n(756,"div",2)(757,"p")(758,"em"),e(759,"Interface"),t(),e(760," que define a se\xE7\xE3o de Actions do header."),t(),n(761,"p"),e(762,"Indica\xE7\xE3o de uso:"),t(),n(763,"ul")(764,"li"),e(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),t(),n(766,"li"),e(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),t(),n(768,"li"),e(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),t()(),n(770,"blockquote")(771,"p"),e(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),t()()(),n(773,"h4",10),e(774,"Propriedades"),t(),n(775,"table",11)(776,"tr",12)(777,"th",13),e(778,"Nome"),t(),n(779,"th",13),e(780,"Tipo"),t(),n(781,"th",13),e(782,"Descri\xE7\xE3o"),t()(),n(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),e(787," action"),o(788,"br"),t()()(),n(789,"td",18)(790,"code",37),e(791,"Function"),t()(),n(792,"td",21)(793,"em")(794,"strong"),e(795,"(opcional)"),t()(),n(796,"p"),e(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),t(),n(798,"p"),e(799,"Exemplo: "),n(800,"code"),e(801,"action: this.myFunction.bind(this)"),t()()()(),n(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),e(806," badge"),o(807,"br"),t()()(),n(808,"td",18)(809,"code",22),e(810,"number"),t()(),n(811,"td",21)(812,"em")(813,"strong"),e(814,"(opcional)"),t()(),n(815,"p"),e(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),t()()(),n(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),e(821," icon"),o(822,"br"),t()()(),n(823,"td",18)(824,"code",24),e(825,"string"),t()(),n(826,"td",21)(827,"em")(828,"strong"),e(829,"(opcional)"),t()(),n(830,"p"),e(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),t()()(),n(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),e(836," items"),o(837,"br"),t()()(),n(838,"td",18)(839,"code",38),e(840,"Array<PoHeaderActionToolItem>"),t()(),n(841,"td",21)(842,"em")(843,"strong"),e(844,"(opcional)"),t()(),n(845,"p"),e(846,"Itens de a\xE7\xF5es"),t()()(),n(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),e(851," label"),o(852,"br"),t()()(),n(853,"td",18)(854,"code",24),e(855,"string"),t()(),n(856,"td",21)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),n(860,"p"),e(861,"T\xEDtulo da a\xE7\xE3o"),t()()(),n(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),e(866," link"),o(867,"br"),t()()(),n(868,"td",18)(869,"code",24),e(870,"string"),t()(),n(871,"td",21)(872,"em")(873,"strong"),e(874,"(opcional)"),t()(),n(875,"p"),e(876,"link utilizado no redirecionamento das p\xE1ginas."),t()()(),n(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),e(881," onClose"),o(882,"br"),t()()(),n(883,"td",18)(884,"code",39),e(885,"(label?: string) => void"),t()(),n(886,"td",21)(887,"em")(888,"strong"),e(889,"(opcional)"),t()(),n(890,"p"),e(891,"Fun\xE7\xE3o executada quando o popup ou popover da a\xE7\xE3o \xE9 fechado."),t(),n(892,"p"),e(893,"Esse evento \xE9 disparado toda vez que o popup (quando h\xE1 "),n(894,"code"),e(895,"items"),t(),e(896,") ou o popover (quando h\xE1 "),n(897,"code"),e(898,"popover"),t(),e(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),t(),n(900,"p"),e(901,"O callback recebe como par\xE2metro o "),n(902,"code"),e(903,"label"),t(),e(904," da a\xE7\xE3o que disparou o evento."),t(),n(905,"p"),e(906,"Exemplo: "),n(907,"code"),e(908,"onClose: (label) => console.log('Fechado:', label)"),t()()()(),n(909,"tr",14)(910,"td",15)(911,"div",16)(912,"span",17),e(913," onOpen"),o(914,"br"),t()()(),n(915,"td",18)(916,"code",39),e(917,"(label?: string) => void"),t()(),n(918,"td",21)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),n(922,"p"),e(923,"Fun\xE7\xE3o executada quando o popup ou popover da a\xE7\xE3o \xE9 aberto."),t(),n(924,"p"),e(925,"Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da a\xE7\xE3o e o popup (quando h\xE1 "),n(926,"code"),e(927,"items"),t(),e(928,`)
ou o popover (quando h\xE1 `),n(929,"code"),e(930,"popover"),t(),e(931,") \xE9 exibido."),t(),n(932,"p"),e(933,"O callback recebe como par\xE2metro o "),n(934,"code"),e(935,"label"),t(),e(936," da a\xE7\xE3o que disparou o evento."),t(),n(937,"p"),e(938,"Exemplo: "),n(939,"code"),e(940,"onOpen: (label) => console.log('Aberto:', label)"),t()()()(),n(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),e(945," popover"),o(946,"br"),t()()(),n(947,"td",18)(948,"code",40),e(949,"PoHeaderActionPopoverAction"),t()(),n(950,"td",21)(951,"em")(952,"strong"),e(953,"(opcional)"),t()(),n(954,"p"),e(955,"Template que ser\xE1 utilizado na a\xE7\xE3o"),t()()(),n(956,"tr",14)(957,"td",15)(958,"div",16)(959,"span",17),e(960," tooltip"),o(961,"br"),t()()(),n(962,"td",18)(963,"code",24),e(964,"string"),t()(),n(965,"td",21)(966,"em")(967,"strong"),e(968,"(opcional)"),t()(),n(969,"p"),e(970,"Texto que ser\xE1 apresentado na tooltip"),t()()()(),n(971,"h4",36)(972,"code",5),e(973,"PoHeaderActionPopoverAction"),t()(),n(974,"div",2)(975,"p")(976,"em"),e(977,"Interface"),t(),e(978," que define um template para uma a\xE7\xE3o."),t()(),n(979,"h4",10),e(980,"Propriedades"),t(),n(981,"table",11)(982,"tr",12)(983,"th",13),e(984,"Nome"),t(),n(985,"th",13),e(986,"Tipo"),t(),n(987,"th",13),e(988,"Descri\xE7\xE3o"),t()(),n(989,"tr",14)(990,"td",15)(991,"div",16)(992,"span",17),e(993," content"),o(994,"br"),t()()(),n(995,"td",18)(996,"code",29),e(997,"TemplateRef<any>"),t()(),n(998,"td",21)(999,"p"),e(1e3,"Template que ser\xE1 renderizado dentro do popover."),t()()(),n(1001,"tr",14)(1002,"td",15)(1003,"div",16)(1004,"span",17),e(1005," width"),o(1006,"br"),t()()(),n(1007,"td",18)(1008,"code",22),e(1009,"number"),t()(),n(1010,"td",21)(1011,"em")(1012,"strong"),e(1013,"(opcional)"),t()(),n(1014,"p"),e(1015,"Largura, em pixels, do template renderizado dentro do popover."),t(),n(1016,"p"),e(1017,"Valores permitidos: de 240 a 800."),t()()()(),n(1018,"h4",36)(1019,"code",5),e(1020,"PoHeaderActionToolItem"),t()(),n(1021,"div",2)(1022,"p")(1023,"em"),e(1024,"Interface"),t(),e(1025," que define uma lista de a\xE7\xF5es."),t()(),n(1026,"h4",10),e(1027,"Propriedades"),t(),n(1028,"table",11)(1029,"tr",12)(1030,"th",13),e(1031,"Nome"),t(),n(1032,"th",13),e(1033,"Tipo"),t(),n(1034,"th",13),e(1035,"Descri\xE7\xE3o"),t()(),n(1036,"tr",14)(1037,"td",15)(1038,"div",16)(1039,"span",17),e(1040," action"),o(1041,"br"),t()()(),n(1042,"td",18)(1043,"code",37),e(1044,"Function"),t()(),n(1045,"td",21)(1046,"p"),e(1047,"Evento emitido ao clicar em uma a\xE7\xE3o"),t(),n(1048,"p"),e(1049,"Exemplo: "),n(1050,"code"),e(1051,"action: this.myFunction.bind(this)"),t()()()(),n(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),e(1056," label"),o(1057,"br"),t()()(),n(1058,"td",18)(1059,"code",24),e(1060,"string"),t()(),n(1061,"td",21)(1062,"p"),e(1063,"Label da a\xE7\xE3o"),t()()()(),n(1064,"h4",36)(1065,"code",5),e(1066,"PoHeaderActions"),t()(),n(1067,"div",2)(1068,"p")(1069,"em"),e(1070,"Interface"),t(),e(1071," que define uma lista de a\xE7\xF5es no sub-menu."),t()(),n(1072,"h4",10),e(1073,"Propriedades"),t(),n(1074,"table",11)(1075,"tr",12)(1076,"th",13),e(1077,"Nome"),t(),n(1078,"th",13),e(1079,"Tipo"),t(),n(1080,"th",13),e(1081,"Descri\xE7\xE3o"),t()(),n(1082,"tr",14)(1083,"td",15)(1084,"div",16)(1085,"span",17),e(1086," action"),o(1087,"br"),t()()(),n(1088,"td",18)(1089,"code",37),e(1090,"Function"),t()(),n(1091,"td",21)(1092,"em")(1093,"strong"),e(1094,"(opcional)"),t()(),n(1095,"p"),e(1096,"Evento da a\xE7\xE3o"),t(),n(1097,"p"),e(1098," Exemplo: "),n(1099,"code"),e(1100,"action: this.myFunction.bind(this)"),t()()()(),n(1101,"tr",14)(1102,"td",15)(1103,"div",16)(1104,"span",17),e(1105," id"),o(1106,"br"),t()()(),n(1107,"td",18)(1108,"code",24),e(1109,"string"),t()(),n(1110,"td",21)(1111,"em")(1112,"strong"),e(1113,"(opcional)"),t()(),n(1114,"p"),e(1115,"Identificador da a\xE7\xE3o"),t()()(),n(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),e(1120," label"),o(1121,"br"),t()()(),n(1122,"td",18)(1123,"code",24),e(1124,"string"),t()(),n(1125,"td",21)(1126,"p"),e(1127,"Label da a\xE7\xE3o"),t()()(),n(1128,"tr",14)(1129,"td",15)(1130,"div",16)(1131,"span",17),e(1132," link"),o(1133,"br"),t()()(),n(1134,"td",18)(1135,"code",24),e(1136,"string"),t()(),n(1137,"td",21)(1138,"em")(1139,"strong"),e(1140,"(opcional)"),t()(),n(1141,"p"),e(1142,"link utilizado no redirecionamento das p\xE1ginas."),t()()()(),n(1143,"h4",36)(1144,"code",5),e(1145,"PoHeaderBrand"),t()(),n(1146,"div",2)(1147,"p")(1148,"em"),e(1149,"Interface"),t(),e(1150," que define a se\xE7\xE3o de brand."),t()(),n(1151,"h4",10),e(1152,"Propriedades"),t(),n(1153,"table",11)(1154,"tr",12)(1155,"th",13),e(1156,"Nome"),t(),n(1157,"th",13),e(1158,"Tipo"),t(),n(1159,"th",13),e(1160,"Descri\xE7\xE3o"),t()(),n(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),e(1165," action"),o(1166,"br"),t()()(),n(1167,"td",18)(1168,"code",37),e(1169,"Function"),t()(),n(1170,"td",21)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),n(1174,"p"),e(1175,"Evento da a\xE7\xE3o"),t(),n(1176,"p"),e(1177," Exemplo: "),n(1178,"code"),e(1179,"action: this.myFunction.bind(this)"),t()()()(),n(1180,"tr",14)(1181,"td",15)(1182,"div",16)(1183,"span",17),e(1184," link"),o(1185,"br"),t()()(),n(1186,"td",18)(1187,"code",24),e(1188,"string"),t()(),n(1189,"td",21)(1190,"em")(1191,"strong"),e(1192,"(opcional)"),t()(),n(1193,"p"),e(1194,"link utilizado no redirecionamento das p\xE1ginas."),t()()(),n(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),e(1199," logo"),o(1200,"br"),t()()(),n(1201,"td",18)(1202,"code",24),e(1203,"string"),t()(),n(1204,"td",21)(1205,"em")(1206,"strong"),e(1207,"(opcional)"),t()(),n(1208,"p"),e(1209,"Imagem da marca"),t()()(),n(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),e(1214," smallLogo"),o(1215,"br"),t()()(),n(1216,"td",18)(1217,"code",24),e(1218,"string"),t()(),n(1219,"td",21)(1220,"em")(1221,"strong"),e(1222,"(opcional)"),t()(),n(1223,"p"),e(1224,"Imagem da marca quando a tela \xE9 menor que 960px"),t()()(),n(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),e(1229," title"),o(1230,"br"),t()()(),n(1231,"td",18)(1232,"code",24),e(1233,"string"),t()(),n(1234,"td",21)(1235,"em")(1236,"strong"),e(1237,"(opcional)"),t()(),n(1238,"p"),e(1239,"T\xEDtulo da marca"),t()()()(),n(1240,"h4",36)(1241,"code",5),e(1242,"PoHeaderLiterals"),t()(),n(1243,"div",2)(1244,"p"),e(1245,"Interface para defini\xE7\xE3o das literais usadas no "),n(1246,"code"),e(1247,"po-header"),t(),e(1248,"."),t()(),n(1249,"h4",10),e(1250,"Propriedades"),t(),n(1251,"table",11)(1252,"tr",12)(1253,"th",13),e(1254,"Nome"),t(),n(1255,"th",13),e(1256,"Tipo"),t(),n(1257,"th",13),e(1258,"Descri\xE7\xE3o"),t()(),n(1259,"tr",14)(1260,"td",15)(1261,"div",16)(1262,"span",17),e(1263," headerLinks"),o(1264,"br"),t()()(),n(1265,"td",18)(1266,"code",24),e(1267,"string"),t()(),n(1268,"td",21)(1269,"em")(1270,"strong"),e(1271,"(opcional)"),t()(),n(1272,"p"),e(1273,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),t()()(),n(1274,"tr",14)(1275,"td",15)(1276,"div",16)(1277,"span",17),e(1278," notifications"),o(1279,"br"),t()()(),n(1280,"td",18)(1281,"code",24),e(1282,"string"),t()(),n(1283,"td",21)(1284,"em")(1285,"strong"),e(1286,"(opcional)"),t()(),n(1287,"p"),e(1288,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),n(1289,"code"),e(1290,"badge"),t()()()()(),n(1291,"h4",36)(1292,"code",5),e(1293,"PoHeaderUser"),t()(),n(1294,"div",2)(1295,"p")(1296,"em"),e(1297,"Interface"),t(),e(1298," que define a se\xE7\xE3o de Customer do header."),t()(),n(1299,"h4",10),e(1300,"Propriedades"),t(),n(1301,"table",11)(1302,"tr",12)(1303,"th",13),e(1304,"Nome"),t(),n(1305,"th",13),e(1306,"Tipo"),t(),n(1307,"th",13),e(1308,"Descri\xE7\xE3o"),t()(),n(1309,"tr",14)(1310,"td",15)(1311,"div",16)(1312,"span",17),e(1313," action"),o(1314,"br"),t()()(),n(1315,"td",18)(1316,"code",37),e(1317,"Function"),t()(),n(1318,"td",21)(1319,"em")(1320,"strong"),e(1321,"(opcional)"),t()(),n(1322,"p"),e(1323,"Evento emitido ao clicar na se\xE7\xE3o"),t(),n(1324,"p"),e(1325,"Exemplo: "),n(1326,"code"),e(1327,"action: this.myFunction.bind(this)"),t()()()(),n(1328,"tr",14)(1329,"td",15)(1330,"div",16)(1331,"span",17),e(1332," avatar"),o(1333,"br"),t()()(),n(1334,"td",18)(1335,"code",24),e(1336,"string"),t()(),n(1337,"td",21)(1338,"p"),e(1339,"Logo representando o perfil"),t()()(),n(1340,"tr",14)(1341,"td",15)(1342,"div",16)(1343,"span",17),e(1344," customerBrand"),o(1345,"br"),t()()(),n(1346,"td",18)(1347,"code",24),e(1348,"string"),t()(),n(1349,"td",21)(1350,"p"),e(1351,"Imagem da marca"),t()()(),n(1352,"tr",14)(1353,"td",15)(1354,"div",16)(1355,"span",17),e(1356," items"),o(1357,"br"),t()()(),n(1358,"td",18)(1359,"code",38),e(1360,"Array<PoHeaderActionToolItem>"),t()(),n(1361,"td",21)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),n(1365,"p"),e(1366,"Itens de a\xE7\xF5es"),t(),n(1367,"blockquote")(1368,"p"),e(1369,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),t()()()(),n(1370,"tr",14)(1371,"td",15)(1372,"div",16)(1373,"span",17),e(1374," onClose"),o(1375,"br"),t()()(),n(1376,"td",18)(1377,"code",37),e(1378,"Function"),t()(),n(1379,"td",21)(1380,"em")(1381,"strong"),e(1382,"(opcional)"),t()(),n(1383,"p"),e(1384,"Fun\xE7\xE3o executada quando o popup ou popover da se\xE7\xE3o de Customer \xE9 fechado."),t(),n(1385,"p"),e(1386,"Esse evento \xE9 disparado toda vez que o popup (quando h\xE1 "),n(1387,"code"),e(1388,"items"),t(),e(1389,") ou o popover (quando h\xE1 "),n(1390,"code"),e(1391,"popover"),t(),e(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),t(),n(1393,"p"),e(1394,"Exemplo: "),n(1395,"code"),e(1396,"onClose: this.onCloseNotifications.bind(this)"),t()()()(),n(1397,"tr",14)(1398,"td",15)(1399,"div",16)(1400,"span",17),e(1401," onOpen"),o(1402,"br"),t()()(),n(1403,"td",18)(1404,"code",37),e(1405,"Function"),t()(),n(1406,"td",21)(1407,"em")(1408,"strong"),e(1409,"(opcional)"),t()(),n(1410,"p"),e(1411,"Fun\xE7\xE3o executada quando o popup ou popover da se\xE7\xE3o de Customer \xE9 aberto."),t(),n(1412,"p"),e(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),n(1414,"code"),e(1415,"items"),t(),e(1416,") ou o popover (quando h\xE1 "),n(1417,"code"),e(1418,"popover"),t(),e(1419,") \xE9 exibido."),t(),n(1420,"p"),e(1421,"Exemplo: "),n(1422,"code"),e(1423,"onOpen: this.onOpenNotifications.bind(this)"),t()()()(),n(1424,"tr",14)(1425,"td",15)(1426,"div",16)(1427,"span",17),e(1428," popover"),o(1429,"br"),t()()(),n(1430,"td",18)(1431,"code",40),e(1432,"PoHeaderActionPopoverAction"),t()(),n(1433,"td",21)(1434,"em")(1435,"strong"),e(1436,"(opcional)"),t()(),n(1437,"p"),e(1438,"Template que ser\xE1 utilizado na a\xE7\xE3o"),t()()(),n(1439,"tr",14)(1440,"td",15)(1441,"div",16)(1442,"span",17),e(1443," status"),o(1444,"br"),t()()(),n(1445,"td",18)(1446,"code",41),e(1447,"'positive' "),t(),n(1448,"code",42),e(1449," 'negative' "),t(),n(1450,"code",43),e(1451," 'warning' "),t(),n(1452,"code",44),e(1453," 'disabled'"),t()(),n(1454,"td",21)(1455,"em")(1456,"strong"),e(1457,"(opcional)"),t()(),n(1458,"p"),e(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),t(),n(1460,"ul")(1461,"li")(1462,"code"),e(1463,"positive"),t(),e(1464,": Define a cor do "),n(1465,"code"),e(1466,"status"),t(),e(1467," com a cor de feedback positivo."),t(),n(1468,"li")(1469,"code"),e(1470,"negative"),t(),e(1471,": Define a cor do "),n(1472,"code"),e(1473,"status"),t(),e(1474," com a cor de feedback negative."),t(),n(1475,"li")(1476,"code"),e(1477,"warning"),t(),e(1478,": Define a cor do "),n(1479,"code"),e(1480,"status"),t(),e(1481," com a cor de feedback warning."),t(),n(1482,"li")(1483,"code"),e(1484,"disabled"),t(),e(1485,": Define a cor do "),n(1486,"code"),e(1487,"status"),t(),e(1488," com a cor de feedback disabled"),t()()()()()())},dependencies:[T],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(v(ae),v(le))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-header-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),t()()()),r&2&&(s("p-actions",i.actions),m(2),s("p-active",i.activeTab==="doc"),m(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[pe,A,y,he,be,xe,ve],encapsulation:2})}return a})();var Re=[{path:"",component:fe}],Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[q.forChild(Re),q]})}return a})();var xt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[ce,Ce]})}return a})();export{xt as DocPoHeaderModule};
