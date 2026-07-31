import{o as S,p as ne}from"./chunk-AW4276X3.js";import{A as K,Ab as E,Bb as b,Ga as ee,K as X,L as Y,M as Z,U as $,a as Q,nb as te,w as J,z as C}from"./chunk-5KGSWRT5.js";import"./chunk-PUSYLN2N.js";import{Aa as V,Fa as m,Ga as n,Ha as t,Ia as a,J as _,Nb as v,Nc as W,P as k,Pa as R,Q as A,Qa as c,Qc as N,Sa as M,cb as f,db as e,dd as G,fb as x,fd as U,hb as D,hd as z,ia as r,ib as O,jb as F,na as L,pa as s,qa as w,rb as H,sb as g,tb as B,za as j}from"./chunk-A2WYYMKN.js";import{a as y,b as T}from"./chunk-NCEQPEJE.js";var oe=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&a(0,"po-helper",0),l&2&&m("p-helper",i.poHelper)},dependencies:[C],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Basic"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.'
  };
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-helper-basic"),t(),a(23,"hr")),l&2&&(r(5),f("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel),r(),m("ngClass",g(4,Ee,i.hideSampleCodeTabs)))},dependencies:[v,S,E,b,oe],encapsulation:2})}return o})();var Se=()=>({label:"Help",value:"help"}),fe=()=>({label:"Info",value:"info"}),ae=(o,I)=>[o,I],xe=()=>({label:"Medium",value:"medium"}),ge=()=>({label:"Small",value:"small"});function ve(o,I){if(o&1){let p=R();n(0,"po-input",9),F("ngModelChange",function(i){k(p);let d=M();return O(d.footerTitle,i)||(d.footerTitle=i),A(i)}),c("ngModelChange",function(i){k(p);let d=M();return A(d.setFooterTitle(i))}),t()}if(o&2){let p=M();D("ngModel",p.footerTitle)}}var pe=(()=>{class o{helperDisabled=!1;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked")}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=T(y({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(p){this.helperOptions=T(y({},this.helperOptions),{type:p})}reset(){this.helperDisabled=!1,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle=""}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-labs"]],standalone:!1,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(a(0,"po-helper",0)(1,"po-divider"),n(2,"div",1)(3,"po-input",2),c("ngModelChange",function(u){return i.helperOptions=T(y({},i.helperOptions),{title:u})}),t(),n(4,"po-input",3),c("ngModelChange",function(u){return i.helperOptions=T(y({},i.helperOptions),{content:u})}),t()(),n(5,"div",1),j(6,ve,1,1,"po-input",4),t(),n(7,"div",1)(8,"po-radio-group",5),c("ngModelChange",function(u){return i.updateHelperType(u)}),t()(),n(9,"div",1)(10,"po-radio-group",6),F("ngModelChange",function(u){return O(i.helperSize,u)||(i.helperSize=u),u}),t()(),n(11,"div",1)(12,"po-checkbox",7),F("ngModelChange",function(u){return O(i.helperDisabled,u)||(i.helperDisabled=u),u}),t()(),a(13,"po-divider"),n(14,"div",1)(15,"po-button",8),c("p-click",function(){return i.reset()}),t()()),l&2&&(m("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),r(3),m("ngModel",i.helperOptions.title),r(),m("ngModel",i.helperOptions.content),r(2),V(i.helperOptions.type==="help"?6:-1),r(2),m("p-columns",4)("ngModel",i.helperOptions.type)("p-options",B(15,ae,H(13,Se),H(14,fe))),r(2),D("ngModel",i.helperSize),m("p-columns",4)("p-options",B(20,ae,H(18,xe),H(19,ge))),r(2),D("ngModel",i.helperDisabled))},dependencies:[W,N,J,Q,K,ee,$,C],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Labs"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

<po-divider></po-divider>

<div class="po-row">
  <po-input
    class="po-md-6"
    name="title"
    [ngModel]="helperOptions.title"
    (ngModelChange)="helperOptions = { ...helperOptions, title: $event }"
    p-clean
    p-label="Title"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="content"
    [ngModel]="helperOptions.content"
    (ngModelChange)="helperOptions = { ...helperOptions, content: $event }"
    p-clean
    p-label="Content"
    p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
  >
  </po-input>
</div>

<div class="po-row">
  @if (helperOptions.type === 'help') {
    <po-input
      class="po-md-6"
      name="footerTitle"
      [(ngModel)]="footerTitle"
      (ngModelChange)="setFooterTitle($event)"
      p-clean
      p-label="Footer Action"
    >
    </po-input>
  }
</div>

<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12"
    [p-columns]="4"
    p-label="Type"
    [ngModel]="helperOptions.type"
    (ngModelChange)="updateHelperType($event)"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="helperSize"
    [p-columns]="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-checkbox class="po-md-12" name="disabled" [(ngModel)]="helperDisabled" p-label="Disabled"> </po-checkbox>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="reset()"></po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperDisabled: boolean = false;
  helperSize: string = 'medium';

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help'
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  setFooterTitle(title: string) {
    this.footerTitle = title;
    if (title.length === 0) {
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions = {
        ...this.helperOptions,
        footerAction: {
          label: this.footerTitle,
          action: this.footerAction.bind(this)
        }
      };
    }
  }

  updateHelperType(type: string) {
    this.helperOptions = {
      ...this.helperOptions,
      type: type as 'help' | 'info'
    };
  }

  reset() {
    this.helperDisabled = false;
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help'
    };
    this.helperSize = 'medium';
    this.footerTitle = '';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-helper-labs"),t(),a(23,"hr")),l&2&&(r(5),f("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel),r(),m("ngClass",g(4,Pe,i.hideSampleCodeTabs)))},dependencies:[v,S,E,b,pe],encapsulation:2})}return o})();var me=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=X.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:!1,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(n(0,"po-container")(1,"div",0)(2,"div",1),e(3,"Sales Performance"),t(),a(4,"po-helper",2),t(),n(5,"div",3)(6,"div",4),a(7,"po-chart",5),t()()()),l&2&&(r(4),m("p-helper",i.helperOptions),r(3),m("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover))},dependencies:[Y,Z,C],encapsulation:2})}return o})();var He=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Sales Performance"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row po-mb-3">
    <div class="po-font-title">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.',
    type: 'info'
  };

  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-helper-sales-performance"),t(),a(23,"hr")),l&2&&(r(5),f("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel),r(),m("ngClass",g(4,He,i.hideSampleCodeTabs)))},dependencies:[v,S,E,b,me],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-helper-doc"]],standalone:!1,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHelperModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-helper"),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoHelperComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-helper"),t(),e(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),t(),n(18,"p"),e(19,"Principais funcionalidades:"),t(),n(20,"ul")(21,"li"),e(22,"Exibe \xEDcone de ajuda ("),n(23,"code"),e(24,"help"),t(),e(25,") ou informa\xE7\xE3o ("),n(26,"code"),e(27,"info"),t(),e(28,") conforme configura\xE7\xE3o."),t(),n(29,"li"),e(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),n(31,"code"),e(32,"p-helper"),t(),e(33,"."),t(),n(34,"li"),e(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),t(),n(36,"li"),e(37,"Controle do tamanho do componente via propriedade "),n(38,"code"),e(39,"p-size"),t(),e(40," ("),n(41,"code"),e(42,"small"),t(),e(43," ou "),n(44,"code"),e(45,"medium"),t(),e(46,")."),t(),n(47,"li"),e(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),t()(),n(49,"p"),e(50,"Exemplo de uso:"),t(),n(51,"pre")(52,"code",6),e(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),t()(),n(54,"p"),e(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),t(),n(56,"pre")(57,"code",6),e(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),t()(),n(59,"p"),e(60,"A propriedade "),n(61,"code"),e(62,"p-helper"),t(),e(63," aceita um objeto do tipo "),n(64,"code"),e(65,"PoHelperOptions"),t(),e(66,":"),t(),n(67,"pre")(68,"code",7),e(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),t()(),n(70,"blockquote")(71,"p")(72,"strong"),e(73,"Importante:"),t(),e(74," A propriedade "),n(75,"code"),e(76,"footerAction"),t(),e(77," n\xE3o pode ser utilizada quando o tipo do helper for "),n(78,"code"),e(79,"info"),t(),e(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),t()(),n(81,"h4"),e(82,"Tokens customiz\xE1veis"),t(),n(83,"p"),e(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(85,"blockquote")(86,"p"),e(87,"Para maiores informa\xE7\xF5es, acesse o guia "),n(88,"a",8),e(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(90,"."),t()(),n(91,"table")(92,"thead")(93,"tr")(94,"th"),e(95,"Propriedade"),t(),n(96,"th"),e(97,"Descri\xE7\xE3o"),t(),n(98,"th"),e(99,"Valor Padr\xE3o"),t()()(),n(100,"tbody")(101,"tr")(102,"td")(103,"code"),e(104,"--color"),t()(),n(105,"td"),e(106,"Cor principal do \xEDcone"),t(),n(107,"td")(108,"code"),e(109,"var(--color-action-default)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--border-color-hover"),t()(),n(114,"td"),e(115,"Cor da borda no estado hover"),t(),n(116,"td")(117,"code"),e(118,"var(--color-brand-01-darkest)"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--background-pressed"),t()(),n(123,"td"),e(124,"Cor de background no estado de pressionado\xA0"),t(),n(125,"td")(126,"code"),e(127,"var(--color-brand-01-light)"),t()()(),n(128,"tr")(129,"td")(130,"code"),e(131,"--color-disabled"),t()(),n(132,"td"),e(133,"Cor principal no estado disabled"),t(),n(134,"td")(135,"code"),e(136,"var(--color-action-disabled)"),t()()()()()(),n(137,"div",9)(138,"h4",10),e(139,"Seletor"),t(),n(140,"pre",11),e(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),t()(),n(142,"h4",12),e(143,"Propriedades"),t(),n(144,"table",13)(145,"tr",14)(146,"th",15),e(147,"Nome"),t(),n(148,"th",15),e(149,"Tipo"),t(),n(150,"th",15),e(151,"Padr\xE3o"),t(),n(152,"th",15),e(153,"Descri\xE7\xE3o"),t()(),n(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),e(158," p-append-in-body"),a(159,"br"),t()()(),n(160,"td",20)(161,"code",21),e(162,"boolean"),t()(),n(163,"td",22),e(164,"-"),t(),n(165,"td",23)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),n(169,"p"),e(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),n(171,"code"),e(172,"p-target"),t(),e(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),t()()(),n(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),e(178," p-disabled"),a(179,"br"),t()()(),n(180,"td",20)(181,"code",21),e(182,"boolean"),t()(),n(183,"td",22)(184,"p")(185,"code"),e(186,"false"),t()()(),n(187,"td",23)(188,"em")(189,"strong"),e(190,"(opcional)"),t()(),n(191,"p"),e(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),t()()(),n(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),e(197," p-helper"),a(198,"br"),t()()(),n(199,"td",20)(200,"code",24),e(201,"PoHelperOptions "),t(),n(202,"code",25),e(203," string"),t()(),n(204,"td",22),e(205,"-"),t(),n(206,"td",23)(207,"em")(208,"strong"),e(209,"(opcional)"),t()(),n(210,"p"),e(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),t(),n(212,"p"),e(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),n(214,"code"),e(215,"PoHelperOptions"),t(),e(216," para configura\xE7\xE3o avan\xE7ada:"),t(),n(217,"ul")(218,"li")(219,"code"),e(220,"title"),t(),e(221,": T\xEDtulo do popover."),t(),n(222,"li")(223,"code"),e(224,"content"),t(),e(225,": Conte\xFAdo explicativo exibido no popover."),t(),n(226,"li")(227,"code"),e(228,"type"),t(),e(229,": Tipo do \xEDcone ("),n(230,"code"),e(231,"help"),t(),e(232," ou "),n(233,"code"),e(234,"info"),t(),e(235,")."),t(),n(236,"li")(237,"code"),e(238,"eventOnClick"),t(),e(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),t(),n(240,"li")(241,"code"),e(242,"footerAction"),t(),e(243,": Objeto com "),n(244,"code"),e(245,"label"),t(),e(246," e "),n(247,"code"),e(248,"action"),t(),e(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),t()(),n(250,"p"),e(251,"Exemplo de uso:"),t(),n(252,"pre")(253,"code",6),e(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),t()()()(),n(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),e(259," p-size"),a(260,"br"),t()()(),n(261,"td",20)(262,"code",25),e(263,"string"),t()(),n(264,"td",22)(265,"p")(266,"code"),e(267,"medium"),t()()(),n(268,"td",23)(269,"em")(270,"strong"),e(271,"(opcional)"),t()(),n(272,"p"),e(273,"Define o tamanho do componente:"),t(),n(274,"ul")(275,"li")(276,"code"),e(277,"small"),t(),e(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(279,"li")(280,"code"),e(281,"medium"),t(),e(282,": altura do \xEDcone com seu valor de 24px."),t()(),n(283,"blockquote")(284,"p"),e(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(286,"code"),e(287,"medium"),t(),e(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(289,"a",26),e(290,"po-theme"),t(),e(291,"."),t()()()()(),n(292,"h3"),e(293,"Interfaces"),t(),n(294,"h4",27)(295,"code",5),e(296,"PoHelperOptions"),t()(),n(297,"div",2)(298,"p"),e(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),n(300,"em"),e(301,"helper"),t(),e(302,")."),t()(),n(303,"h4",12),e(304,"Propriedades"),t(),n(305,"table",13)(306,"tr",14)(307,"th",15),e(308,"Nome"),t(),n(309,"th",15),e(310,"Tipo"),t(),n(311,"th",15),e(312,"Descri\xE7\xE3o"),t()(),n(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),e(317," content"),a(318,"br"),t()()(),n(319,"td",20)(320,"code",25),e(321,"string"),t()(),n(322,"td",23)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),n(326,"p"),e(327,"Texto explicativo exibido no popover."),t(),n(328,"p"),e(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),n(330,"code"),e(331,"<b>"),t(),e(332," (negrito), "),n(333,"code"),e(334,"<strong>"),t(),e(335," (negrito), "),n(336,"code"),e(337,"<i>"),t(),e(338," (it\xE1lico), "),n(339,"code"),e(340,"<em>"),t(),e(341,` (it\xE1lico) e
`),n(342,"code"),e(343,"<u>"),t(),e(344," (sublinhado)."),t(),n(345,"p"),e(346,"Exemplo:"),t(),n(347,"pre")(348,"code",7),e(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),t()()()(),n(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),e(354," eventOnClick"),a(355,"br"),t()()(),n(356,"td",20)(357,"code",28),e(358,"Function"),t()(),n(359,"td",23)(360,"em")(361,"strong"),e(362,"(opcional)"),t()(),n(363,"p"),e(364,"Evento disparado ao clicar no \xEDcone do helper."),t(),n(365,"p"),e(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),t(),n(367,"p"),e(368,"Pode ser uma fun\xE7\xE3o ou um "),n(369,"code"),e(370,"EventEmitter"),t(),e(371,"."),t(),n(372,"p"),e(373,"Exemplo:"),t(),n(374,"pre")(375,"code"),e(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),t()()()(),n(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),e(381," footerAction"),a(382,"br"),t()()(),n(383,"td",20)(384,"code",29),e(385,`{ label: string; action: Function;
}`),t()(),n(386,"td",23)(387,"em")(388,"strong"),e(389,"(opcional)"),t()(),n(390,"p"),e(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),n(392,"code"),e(393,"help"),t(),e(394," e desconsiderada quando o type for "),n(395,"code"),e(396,"info"),t(),e(397,"."),t(),n(398,"p"),e(399,"Deve ser um objeto com as propriedades:"),t(),n(400,"ul")(401,"li")(402,"code"),e(403,"label"),t(),e(404,": Texto do bot\xE3o."),t(),n(405,"li")(406,"code"),e(407,"action"),t(),e(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),t()(),n(409,"p"),e(410,"Exemplo:"),t(),n(411,"pre")(412,"code",7),e(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),t()()()(),n(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),e(418," title"),a(419,"br"),t()()(),n(420,"td",20)(421,"code",25),e(422,"string"),t()(),n(423,"td",23)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),n(427,"p"),e(428,"T\xEDtulo do helper exibido no popover."),t()()(),n(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),e(433," type"),a(434,"br"),t()()(),n(435,"td",20)(436,"code",30),e(437,"'info' "),t(),n(438,"code",31),e(439," 'help'"),t()(),n(440,"td",23)(441,"em")(442,"strong"),e(443,"(opcional)"),t()(),n(444,"p"),e(445,"Tipo do \xEDcone exibido: "),n(446,"code"),e(447,"info"),t(),e(448," ou "),n(449,"code"),e(450,"help"),t(),e(451,"."),t(),n(452,"p"),e(453,"Quando o valor \xE9 "),n(454,"code"),e(455,"info"),t(),e(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),t(),n(457,"p"),e(458,"Quando o valor \xE9 "),n(459,"code"),e(460,"help"),t(),e(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),t()()()()())},dependencies:[S],encapsulation:2})}return o})();var ce=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(L(G),L(U))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-helper-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),t()()()),l&2&&(m("p-actions",i.actions),r(2),m("p-active",i.activeTab==="doc"),r(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[te,E,b,le,re,se,de],encapsulation:2})}return o})();var Me=[{path:"",component:ce}],ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=w({type:o});static \u0275inj=_({imports:[z.forChild(Me),z]})}return o})();var nt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=w({type:o});static \u0275inj=_({imports:[ne,ue]})}return o})();export{nt as DocPoHelperModule};
