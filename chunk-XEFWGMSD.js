import{j as O,k as L,l as P,o as S,p as H}from"./chunk-AW4276X3.js";import{$a as I,Ab as E,Bb as b,Ca as A,Fb as N,Za as z,nb as M}from"./chunk-5KGSWRT5.js";import"./chunk-PUSYLN2N.js";import{Fa as m,Ga as n,Ha as t,Ia as a,J as C,Nb as f,P as T,Pa as J,Q as F,Qa as s,Sa as g,cb as h,db as e,dd as V,fb as x,fd as B,hd as j,ia as d,na as k,pa as p,qa as y,sb as v,ua as q}from"./chunk-A2WYYMKN.js";import"./chunk-NCEQPEJE.js";var G=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:!1,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,l){o&1&&a(0,"po-page-job-scheduler",0),o&2&&m("p-breadcrumb",l.breadcrumb)},dependencies:[P],encapsulation:2})}return i})();var ne=i=>({"docs-sample-code-tabs":i}),W=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Background Process"),t(),n(4,"a",2),s("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-background-process"),t(),a(23,"hr")),o&2&&(d(5),h("po-icon "+l.sampleCodeButtonIcon),d(),x(" ",l.sampleCodeButtonLabel),d(),m("ngClass",v(4,ne,l.hideSampleCodeTabs)))},dependencies:[f,S,E,b,G],encapsulation:2})}return i})();function oe(i,_){if(i&1){let r=J();n(0,"h1"),e(1,"Etapa 1"),t(),n(2,"po-dynamic-form",4),s("p-form",function(l){T(r);let u=g();return F(u.getFormExample(l))}),t()}if(i&2){let r=g();d(2),m("p-fields",r.parametersForm)}}function ae(i,_){if(i&1){let r=J();n(0,"po-table",5),s("p-selected",function(l){T(r);let u=g();return F(u.selectedItem(l))}),t()}if(i&2){let r=g();m("p-items",r.items)("p-selectable",!0)}}function re(i,_){if(i&1&&(n(0,"po-widget",6),a(1,"po-dynamic-view",7),t()),i&2){let r=g();d(),m("p-fields",r.fieldsSummary)("p-value",r.valueSummary)}}var U=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:!0,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:!1,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,l){o&1&&(n(0,"po-page-job-scheduler",0),q(1,oe,3,1,"ng-template",1)(2,ae,1,2,"ng-template",2)(3,re,2,2,"ng-template",3),t()),o&2&&(m("p-step-execution-last",!0),d(),m("p-disable-advance",l.dynamicForm==null?null:l.dynamicForm.form.invalid)("p-execution-parameter",l.dynamicForm==null?null:l.dynamicForm.form.value),d(),m("p-disable-advance",!l.selectedValue.select.length)("p-execution-parameter",l.selectedValue))},dependencies:[z,I,A,N,P,O,L],encapsulation:2})}return i})();var me=i=>({"docs-sample-code-tabs":i}),Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Directives"),t(),n(4,"a",2),s("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-directives"),t(),a(23,"hr")),o&2&&(d(5),h("po-icon "+l.sampleCodeButtonIcon),d(),x(" ",l.sampleCodeButtonLabel),d(),m("ngClass",v(4,me,l.hideSampleCodeTabs)))},dependencies:[f,S,E,b,U],encapsulation:2})}return i})();var $=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Navega\xE7\xE3o Flex\xEDvel"}]};parameters=[{property:"server",label:"Servidor",required:!0,gridLgColumns:6,gridXlColumns:6},{property:"port",label:"Porta",type:"number",gridLgColumns:6,gridXlColumns:6},{property:"environment",label:"Ambiente",options:["Desenvolvimento","Homologa\xE7\xE3o","Produ\xE7\xE3o"],gridLgColumns:6,gridXlColumns:6},{property:"notify",label:"Notificar por e-mail",type:"boolean",booleanTrue:"Sim",booleanFalse:"N\xE3o",gridLgColumns:6,gridXlColumns:6}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-flexible-navigation"]],standalone:!1,decls:1,vars:3,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Navega\xE7\xE3o Flex\xEDvel no Agendamento",3,"p-allow-direct-navigation","p-breadcrumb","p-parameters"]],template:function(o,l){o&1&&a(0,"po-page-job-scheduler",0),o&2&&m("p-allow-direct-navigation",!0)("p-breadcrumb",l.breadcrumb)("p-parameters",l.parameters)},dependencies:[P],encapsulation:2})}return i})();var se=i=>({"docs-sample-code-tabs":i}),K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-flexible-navigation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Navega\xE7\xE3o Flex\xEDvel"),t(),n(4,"a",2),s("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-flexible-navigation',
  templateUrl: './sample-po-page-job-scheduler-flexible-navigation.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerFlexibleNavigationComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Navega\xE7\xE3o Flex\xEDvel' }]
  };

  parameters: Array<PoDynamicFormField> = [
    {
      property: 'server',
      label: 'Servidor',
      required: true,
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'port',
      label: 'Porta',
      type: 'number',
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'environment',
      label: 'Ambiente',
      options: ['Desenvolvimento', 'Homologa\xE7\xE3o', 'Produ\xE7\xE3o'],
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'notify',
      label: 'Notificar por e-mail',
      type: 'boolean',
      booleanTrue: 'Sim',
      booleanFalse: 'N\xE3o',
      gridLgColumns: 6,
      gridXlColumns: 6
    }
  ];
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-flexible-navigation"),t(),a(23,"hr")),o&2&&(d(5),h("po-icon "+l.sampleCodeButtonIcon),d(),x(" ",l.sampleCodeButtonLabel),d(),m("ngClass",v(4,se,l.hideSampleCodeTabs)))},dependencies:[f,S,E,b,$],encapsulation:2})}return i})();var Y=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:!1,decls:650,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","unknown"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),t()(),a(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoPageJobSchedulerComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"O "),n(13,"code"),e(14,"po-page-job-scheduler"),t(),e(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),t(),n(16,"p"),e(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),t(),n(18,"p"),e(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),n(20,"a",6),e(21,"Guia de implementa\xE7\xE3o de APIs"),t(),e(22,"."),t(),n(23,"h4"),e(24,"Tokens customiz\xE1veis"),t(),n(25,"blockquote")(26,"p"),e(27,"Para maiores informa\xE7\xF5es, acesse o guia "),n(28,"a",7),e(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(30,"."),t()(),n(31,"table")(32,"thead")(33,"tr")(34,"th"),e(35,"Propriedade"),t(),n(36,"th"),e(37,"Descri\xE7\xE3o"),t(),n(38,"th"),e(39,"Valor Padr\xE3o"),t()()(),n(40,"tbody")(41,"tr")(42,"td")(43,"strong"),e(44,"Header"),t()(),a(45,"td")(46,"td"),t(),n(47,"tr")(48,"td")(49,"code"),e(50,"--padding"),t()(),n(51,"td"),e(52,"Espa\xE7amento do header"),t(),n(53,"td")(54,"code"),e(55,"var(--spacing-xs) var(--spacing-md)"),t()()(),n(56,"tr")(57,"td")(58,"code"),e(59,"--gap"),t()(),n(60,"td"),e(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),n(62,"td")(63,"code"),e(64,"var(--spacing-md)"),t()()(),n(65,"tr")(66,"td")(67,"code"),e(68,"--gap-actions"),t()(),n(69,"td"),e(70,"Espa\xE7amento entre as a\xE7\xF5es"),t(),n(71,"td")(72,"code"),e(73,"var(--spacing-xs)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-family"),t()(),n(78,"td"),e(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),n(80,"td")(81,"code"),e(82,"var(--font-family-theme)"),t()()(),n(83,"tr")(84,"td")(85,"strong"),e(86,"Content"),t()(),a(87,"td")(88,"td"),t(),n(89,"tr")(90,"td")(91,"code"),e(92,"--padding-content"),t()(),n(93,"td"),e(94,"Espa\xE7amento do conte\xFAdo"),t(),n(95,"td")(96,"code"),e(97,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),n(98,"div",8)(99,"h4",9),e(100,"Seletor"),t(),n(101,"pre",10),e(102,`<po-page-job-scheduler
    p-allow-direct-navigation="boolean"
    p-before-send="unknown"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),t()(),n(103,"h4",11),e(104,"Propriedades"),t(),n(105,"table",12)(106,"tr",13)(107,"th",14),e(108,"Nome"),t(),n(109,"th",14),e(110,"Tipo"),t(),n(111,"th",14),e(112,"Padr\xE3o"),t(),n(113,"th",14),e(114,"Descri\xE7\xE3o"),t()(),n(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),e(119," p-allow-direct-navigation"),a(120,"br"),t()()(),n(121,"td",19)(122,"code",20),e(123,"boolean"),t()(),n(124,"td",21)(125,"p")(126,"code"),e(127,"false"),t()()(),n(128,"td",22)(129,"em")(130,"strong"),e(131,"(opcional)"),t()(),n(132,"p"),e(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),t(),n(134,"p"),e(135,"Quando habilitado ("),n(136,"code"),e(137,"true"),t(),e(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),t(),n(139,"blockquote")(140,"p"),e(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),t()()()(),n(142,"tr",15)(143,"td",16)(144,"div",17)(145,"span",18),e(146," p-before-send"),a(147,"br"),t()()(),n(148,"td",19)(149,"code",23),e(150,"unknown"),t()(),n(151,"td",21),e(152,"-"),t(),n(153,"td",22)(154,"em")(155,"strong"),e(156,"(opcional)"),t()(),n(157,"p"),e(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),t(),n(159,"blockquote")(160,"p"),e(161,"Deve retornar um objeto do tipo "),n(162,"code"),e(163,"PoPageJobScheduler"),t(),e(164," para ser adicionado ao model do PoPageJobScheduler."),t()(),n(165,"blockquote")(166,"p"),e(167,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),n(168,"code"),e(169,"PoJobSchedulerInternal"),t(),e(170,"."),t()(),n(171,"p"),e(172,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),n(173,"code"),e(174,"PoPageJobScheduler"),t(),e(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),n(176,"code"),e(177,"bind"),t(),e(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),n(179,"code"),e(180,"beforeSend"),t(),e(181,":"),t(),n(182,"pre")(183,"code"),e(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),t()()()(),n(185,"tr",15)(186,"td",16)(187,"div",17)(188,"span",18),e(189," p-breadcrumb"),a(190,"br"),t()()(),n(191,"td",19)(192,"code",24),e(193,"PoBreadcrumb"),t()(),n(194,"td",21),e(195,"-"),t(),n(196,"td",22)(197,"em")(198,"strong"),e(199,"(opcional)"),t()(),n(200,"p"),e(201,"Objeto com as propriedades do breadcrumb."),t()()(),n(202,"tr",15)(203,"td",16)(204,"div",17)(205,"span",18),e(206," p-components-size"),a(207,"br"),t()()(),n(208,"td",19)(209,"code",25),e(210,"string"),t()(),n(211,"td",21)(212,"p")(213,"code"),e(214,"medium"),t()()(),n(215,"td",22)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),n(219,"p"),e(220,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(221,"ul")(222,"li")(223,"code"),e(224,"small"),t(),e(225,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(226,"li")(227,"code"),e(228,"medium"),t(),e(229,": aplica a medida medium de cada componente."),t()(),n(230,"blockquote")(231,"p"),e(232,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(233,"code"),e(234,"medium"),t(),e(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(236,"a",26),e(237,"po-theme"),t(),e(238,"."),t()()()(),n(239,"tr",15)(240,"td",16)(241,"div",27)(242,"span",28),e(243," (p-error)"),a(244,"br"),t()()(),n(245,"td",19)(246,"code",29),e(247,"EventEmitter"),t()(),n(248,"td",21),e(249,"-"),t(),n(250,"td",22)(251,"em")(252,"strong"),e(253,"(opcional)"),t()(),n(254,"p"),e(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),t()()(),n(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),e(260," p-parameters"),a(261,"br"),t()()(),n(262,"td",19)(263,"code",30),e(264,"Array<PoDynamicFormField>"),t()(),n(265,"td",21),e(266,"-"),t(),n(267,"td",22)(268,"p"),e(269,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(270,"p"),e(271,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),t()()(),n(272,"tr",15)(273,"td",16)(274,"div",17)(275,"span",18),e(276," p-service-api"),a(277,"br"),t()()(),n(278,"td",19)(279,"code",25),e(280,"string"),t()(),n(281,"td",21),e(282,"-"),t(),n(283,"td",22)(284,"p"),e(285,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(286,"h4"),e(287,"Processos"),t(),n(288,"p"),e(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),n(290,"code"),e(291,"GET"),t(),e(292," para o endpoint "),n(293,"code"),e(294,"{service-api}/processes"),t(),e(295,`, para buscar
essa lista de processos.`),t(),n(296,"p"),e(297,"Este endpoint "),n(298,"code"),e(299,"{service-api}/processes"),t(),e(300," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),t(),n(301,"pre")(302,"code"),e(303,`GET {service-api}/processes
`),t()(),n(304,"pre")(305,"code"),e(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),t()(),n(307,"p"),e(308,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),t(),n(309,"p"),e(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),n(311,"code"),e(312,"search"),t(),e(313,". Da seguinte forma:"),t(),n(314,"pre")(315,"code"),e(316,`GET {service-api}/processes?search=relatorio
`),t()(),n(317,"blockquote")(318,"p"),e(319,"Veja mais sobre pagina\xE7\xE3o e filtros no "),n(320,"a",6),e(321,"Guia de implementa\xE7\xE3o de APIs"),t(),e(322,`.
Caso seja informada a propriedade `),n(323,"code"),e(324,"p-parameters"),t(),e(325," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),t()(),n(326,"p"),e(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),n(328,"code"),e(329,"{service-api}/processes"),t(),e(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),n(331,"strong"),e(332,"identificador do processo - "),n(333,"code"),e(334,"processID"),t()(),e(335," e ao salvar ser\xE1 enviado um "),n(336,"code"),e(337,"POST"),t(),e(338," para o endpoint difinido "),n(339,"code"),e(340,"serviceApi"),t(),e(341," conforme abaixo:"),t(),n(342,"pre")(343,"code"),e(344,`POST {service-api}
`),t()(),n(345,"p")(346,"em"),e(347,"Request payload"),t(),e(348," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(349,"code"),e(350,"PoJobScheduler"),t(),e(351,":"),t(),n(352,"pre")(353,"code"),e(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),t()(),n(355,"p"),e(356,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),n(357,"code"),e(358,"GET"),t(),e(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),n(360,"a",31),e(361,"PoDynamicFormField"),t(),e(362,". Por\xE9m, caso utilizar a propriedade "),n(363,"code"),e(364,"p-parameters"),t(),e(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),t(),n(366,"pre")(367,"code"),e(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),t()(),n(369,"h4"),e(370,"Salvar e Atualizar"),t(),n(371,"p"),e(372,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),n(373,"em"),e(374,"payload"),t(),e(375,`.
Abaixo uma requisi\xE7\xE3o `),n(376,"code"),e(377,"POST"),t(),e(378," disparada, onde as propriedades do "),n(379,"em"),e(380,"Job Scheduler"),t(),e(381," foram preenchidas:"),t(),n(382,"pre")(383,"code"),e(384,`POST {service-api}
`),t()(),n(385,"p")(386,"em"),e(387,"Request payload"),t(),e(388," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(389,"code"),e(390,"PoJobScheduler"),t(),e(391,":"),t(),n(392,"pre")(393,"code"),e(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()(),n(395,"p"),e(396,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),n(397,"code"),e(398,"id"),t(),e(399,"."),t(),n(400,"p"),e(401,"Exemplo de configura\xE7\xE3o de rota:"),t(),n(402,"pre")(403,"code"),e(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),t()(),n(405,"p"),e(406,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),n(407,"pre")(408,"code"),e(409,`GET {service-api}/{id}
`),t()(),n(410,"p"),e(411,"Ao atualizar o agendamento, ser\xE1 disparado um "),n(412,"code"),e(413,"PUT"),t(),e(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),n(415,"code"),e(416,"PUT"),t(),e(417," disparada, onde a propriedade "),n(418,"em"),e(419,"recurrent"),t(),e(420," e "),n(421,"em"),e(422,"daily"),t(),e(423," foram atualizadas:"),t(),n(424,"pre")(425,"code"),e(426,`PUT {service-api}/{id}
`),t()(),n(427,"p")(428,"em"),e(429,"Request payload"),t(),e(430," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(431,"code"),e(432,"PoJobScheduler"),t(),e(433,":"),t(),n(434,"pre")(435,"code"),e(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()()()(),n(437,"tr",15)(438,"td",16)(439,"div",17)(440,"span",18),e(441," p-step-execution-last"),a(442,"br"),t()()(),n(443,"td",19)(444,"code",20),e(445,"boolean"),t()(),n(446,"td",21),e(447,"-"),t(),n(448,"td",22)(449,"em")(450,"strong"),e(451,"(opcional)"),t()(),n(452,"p"),e(453,"Define se o step "),n(454,"code"),e(455,"Agendamento"),t(),e(456," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),t(),n(457,"blockquote")(458,"p"),e(459,"Aplic\xE1vel apenas quando utilizado "),n(460,"code"),e(461,"PoJobSchedulerParametersTemplateDirective"),t()()()()(),n(462,"tr",15)(463,"td",16)(464,"div",17)(465,"span",18),e(466," p-orientation"),a(467,"br"),t()()(),n(468,"td",19)(469,"code",32),e(470,"PoStepperOrientation"),t()(),n(471,"td",21),e(472,"-"),t(),n(473,"td",22)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),n(477,"p"),e(478,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),n(479,"code"),e(480,"po-stepper"),t(),e(481,"."),t(),n(482,"blockquote")(483,"p"),e(484,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),t()(),n(485,"blockquote")(486,"p"),e(487,"Veja os valores v\xE1lidos no "),n(488,"em"),e(489,"enum"),t(),n(490,"a",33),e(491,"PoStepperOrientation"),t(),e(492,"."),t()()()(),n(493,"tr",15)(494,"td",16)(495,"div",27)(496,"span",28),e(497," (p-success)"),a(498,"br"),t()()(),n(499,"td",19)(500,"code",29),e(501,"EventEmitter"),t()(),n(502,"td",21),e(503,"-"),t(),n(504,"td",22)(505,"em")(506,"strong"),e(507,"(opcional)"),t()(),n(508,"p"),e(509,"Evento disparado ao concluir o processo de agendamento com sucesso."),t()()(),n(510,"tr",15)(511,"td",16)(512,"div",17)(513,"span",18),e(514," p-title"),a(515,"br"),t()()(),n(516,"td",19)(517,"code",25),e(518,"string"),t()(),n(519,"td",21),e(520,"-"),t(),n(521,"td",22)(522,"p"),e(523,"T\xEDtulo da p\xE1gina."),t()()()(),n(524,"h3"),e(525,"Interfaces"),t(),n(526,"h4",34)(527,"code",5),e(528,"PoJobScheduler"),t()(),n(529,"div",2)(530,"p"),e(531,"Estrutura do "),n(532,"em"),e(533,"payload"),t(),e(534," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),n(535,"em"),e(536,"Job Scheduler"),t(),e(537,"."),t()(),n(538,"h4",11),e(539,"Propriedades"),t(),n(540,"table",12)(541,"tr",13)(542,"th",14),e(543,"Nome"),t(),n(544,"th",14),e(545,"Tipo"),t(),n(546,"th",14),e(547,"Descri\xE7\xE3o"),t()(),n(548,"tr",15)(549,"td",16)(550,"div",17)(551,"span",18),e(552," daily"),a(553,"br"),t()()(),n(554,"td",19)(555,"code",35),e(556,`{ hour: number; minute: number;
}`),t()(),n(557,"td",22)(558,"em")(559,"strong"),e(560,"(opcional)"),t()(),n(561,"p"),e(562,"Define uma repeti\xE7\xE3o di\xE1ria."),t()()(),n(563,"tr",15)(564,"td",16)(565,"div",17)(566,"span",18),e(567," executionParameter"),a(568,"br"),t()()(),n(569,"td",19)(570,"code",36),e(571,"object"),t()(),n(572,"td",22)(573,"em")(574,"strong"),e(575,"(opcional)"),t()(),n(576,"p"),e(577,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),t()()(),n(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),e(582," firstExecution"),a(583,"br"),t()()(),n(584,"td",19)(585,"code",25),e(586,"string"),t()(),n(587,"td",22)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),n(591,"p"),e(592,"Data da primeira execu\xE7\xE3o."),t()()(),n(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),e(597," monthly"),a(598,"br"),t()()(),n(599,"td",19)(600,"code",37),e(601,`{ day: number; hour: number; minute: number;
}`),t()(),n(602,"td",22)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),n(606,"p"),e(607,"Define uma repeti\xE7\xE3o mensal."),t()()(),n(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),e(612," processID"),a(613,"br"),t()()(),n(614,"td",19)(615,"code",25),e(616,"string"),t()(),n(617,"td",22)(618,"p"),e(619,"Identificador do processo."),t()()(),n(620,"tr",15)(621,"td",16)(622,"div",17)(623,"span",18),e(624," recurrent"),a(625,"br"),t()()(),n(626,"td",19)(627,"code",20),e(628,"boolean"),t()(),n(629,"td",22)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),n(633,"p"),e(634,"Permite uma execu\xE7\xE3o recorrente."),t()()(),n(635,"tr",15)(636,"td",16)(637,"div",17)(638,"span",18),e(639," weekly"),a(640,"br"),t()()(),n(641,"td",19)(642,"code",38),e(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),t()(),n(644,"td",22)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),n(648,"p"),e(649,"Define uma repeti\xE7\xE3o semanal."),t()()()()())},dependencies:[S],encapsulation:2})}return i})();var Z=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||i)(k(V),k(B))};static \u0275cmp=p({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return l.changeTab("doc")}),a(3,"sample-po-page-job-scheduler-doc"),t(),n(4,"po-tab",3),s("p-click",function(){return l.changeTab("web")}),a(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view")(7,"sample-po-page-job-scheduler-flexible-navigation-view"),t()()()),o&2&&(m("p-actions",l.actions),d(2),m("p-active",l.activeTab==="doc"),d(2),m("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[M,E,b,W,Q,K,Y],encapsulation:2})}return i})();var Ee=[{path:"",component:Z}],ee=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=y({type:i});static \u0275inj=C({imports:[j.forChild(Ee),j]})}return i})();var Ie=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=y({type:i});static \u0275inj=C({imports:[H,ee]})}return i})();export{Ie as DocPoPageJobSchedulerModule};
