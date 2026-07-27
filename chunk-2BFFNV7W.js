import{o as b,p as Q}from"./chunk-GFGD3QHA.js";import{Ab as x,Bb as S,Kb as N,Za as C,ia as V,nb as Y,w as L}from"./chunk-JDAUXJR5.js";import"./chunk-PUSYLN2N.js";import{$a as y,Fa as p,Ga as i,Ha as t,I as D,Ia as n,J as P,M as g,Nb as h,P as k,Pa as w,Q as q,Qa as c,Wa as A,Xa as M,Ya as j,cb as v,db as e,dd as J,fb as f,fd as W,hd as H,ia as d,na as B,pa as s,qa as T,qb as z,rb as X,sb as E}from"./chunk-A2WYYMKN.js";import{a as R}from"./chunk-NCEQPEJE.js";var me=()=>({property:"name",required:!0,showRequired:!0}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&n(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,le,X(1,me)))},dependencies:[C],encapsulation:2})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),i(4,"a",2),c("click",function(){return r.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-dynamic-form-basic"),t(),n(23,"hr")),a&2&&(d(5),v("po-icon "+r.sampleCodeButtonIcon),d(),f(" ",r.sampleCodeButtonLabel),d(),p("ngClass",E(4,pe,r.hideSampleCodeTabs)))},dependencies:[h,b,x,S,G],encapsulation:2})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(m){let a={property:"cpf",visible:!0},r={property:"cnpj",visible:!0};return{fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=g(V);registerService=g(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:N.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=R(R({},r[l]),a),this.fields=[...r])}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&A(ce,7),a&2){let l;M(l=j())&&(r.dynamicForm=l.first)}},standalone:!1,features:[z([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=w();n(0,"po-dynamic-form",1,0)(2,"br"),i(3,"div",2)(4,"po-button",3),c("p-click",function(){k(l);let I=y(1);return r.poNotification.success("Data saved successfully!"),q(I.form.reset())}),t()()}if(a&2){let l=y(1);p("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),d(4),p("p-disabled",l==null?null:l.form.invalid)}},dependencies:[L,C],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),i(4,"a",2),c("click",function(){return r.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoDynamicFormComponent
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];
  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    setTimeout(() => {
      const options = this.registerService.getCity(changedValue.value.state);
      this.updateDynamicFormField('city', { options, loading: false });
    }, 500);
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          disabled: false,
          loading: true
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }

  private updateDynamicFormField(property: string, updates: Partial<PoDynamicFormField>): void {
    const currentFields = this.dynamicForm?.fields ?? this.fields;
    const index = currentFields.findIndex(field => field.property === property);
    if (index >= 0) {
      currentFields[index] = { ...currentFields[index], ...updates };
      this.fields = [...currentFields];
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-dynamic-form-register"),t(),n(27,"hr")),a&2&&(d(5),v("po-icon "+r.sampleCodeButtonIcon),d(),f(" ",r.sampleCodeButtonLabel),d(),p("ngClass",E(4,Ee,r.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(m){let a={property:"cpf",visible:!0},r={property:"cnpj",visible:!0};return{fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=g(V);registerService=g(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:N.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name)}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(m){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:!1}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m)}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&A(Se,7),a&2){let l;M(l=j())&&(r.dynamicForm=l.first)}},standalone:!1,features:[z([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=w();n(0,"po-dynamic-form",1,0)(2,"br"),i(3,"div",2)(4,"po-button",3),c("p-click",function(){k(l);let I=y(1);return r.poNotification.success("Data saved successfully!"),q(I.form.reset())}),t()()}if(a&2){let l=y(1);p("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),d(4),p("p-disabled",l==null?null:l.form.invalid)}},dependencies:[L,C],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),i(4,"a",2),c("click",function(){return r.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-dynamic-form-container"),t(),n(27,"hr")),a&2&&(d(5),v("po-icon "+r.sampleCodeButtonIcon),d(),f(" ",r.sampleCodeButtonLabel),d(),p("ngClass",E(4,ge,r.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ie],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2),i(5,"h3",3),e(6,"Componente"),t(),i(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),i(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),i(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),i(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),i(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),i(20,"h4",9),e(21,"Propriedades"),t(),i(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),i(26,"th",12),e(27,"Tipo"),t(),i(28,"th",12),e(29,"Padr\xE3o"),t(),i(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),i(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),n(37,"br"),t()()(),i(38,"td",17)(39,"code",18),e(40,"string"),t()(),i(41,"td",19),e(42,"-"),t(),i(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),i(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),i(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),i(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),n(57,"br"),t()()(),i(58,"td",17)(59,"code",18),e(60,"string"),t()(),i(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),i(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),i(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),i(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),i(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),n(94,"br"),t()()(),i(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),i(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),i(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),i(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),i(108,"blockquote")(109,"p"),e(110,"Ex: "),i(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),i(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),i(115,"ul")(116,"li"),e(117,"Caso o "),i(118,"em"),e(119,"type"),t(),e(120," informado seja "),i(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),i(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),i(127,"li"),e(128,"Caso o "),i(129,"em"),e(130,"type"),t(),e(131," informado seja "),i(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),i(135,"em"),e(136,"mask"),t(),e(137," ou "),i(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),i(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),i(144,"em"),e(145,"mask"),t(),e(146," ou "),i(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),i(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),i(153,"li"),e(154,"Caso o "),i(155,"em"),e(156,"type"),t(),e(157," informado seja "),i(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),i(161,"em"),e(162,"mask"),t(),e(163," ou "),i(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),i(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),i(170,"em"),e(171,"mask"),t(),e(172," ou "),i(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),i(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),i(179,"li"),e(180,"Caso a lista possua a propriedade "),i(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),i(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),i(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),i(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),i(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),i(195,"code"),e(196,"po-select"),t(),e(197," ou, "),i(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),i(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),i(204,"li"),e(205,"Caso o "),i(206,"em"),e(207,"type"),t(),e(208," informado seja "),i(209,"em"),e(210,"date"),t(),e(211," ou "),i(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),i(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),i(218,"li"),e(219,"Caso seja informado a propriedade "),i(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),i(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),i(226,"li"),e(227,"Caso o "),i(228,"em"),e(229,"type"),t(),e(230," informado seja "),i(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),i(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),i(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),i(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),i(243,"li"),e(244,"Caso a lista possua a propriedade "),i(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),i(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),i(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),i(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),i(257,"li"),e(258,"Caso seja informada a propriedade "),i(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),i(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),i(265,"li"),e(266,"Caso o "),i(267,"em"),e(268,"type"),t(),e(269," informado seja "),i(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),i(273,"code"),e(274,"po-input"),t(),e(275,"."),i(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),i(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),i(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),i(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),n(290,"br"),t()()(),i(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),i(294,"td",19),e(295,"-"),t(),i(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),i(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),i(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),i(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),i(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),i(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),i(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),i(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),i(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),i(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),i(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),i(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),i(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),n(338,"br"),t()()(),i(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),i(342,"td",19),e(343,"-"),t(),i(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),i(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),i(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),i(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),n(361,"br"),t()()(),i(362,"td",17)(363,"code",18),e(364,"string "),t(),i(365,"code",29),e(366," Function"),t()(),i(367,"td",19),e(368,"-"),t(),i(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),i(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),i(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),i(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),i(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),i(385,"code"),e(386,"POST"),t(),e(387,"."),t(),i(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),i(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),i(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),i(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),i(402,"p"),e(403,"Por exemplo:"),t(),i(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),i(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),i(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),i(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),n(420,"br"),t()()(),i(421,"td",17)(422,"code",18),e(423,"string "),t(),i(424,"code",29),e(425," Function"),t()(),i(426,"td",19),e(427,"-"),t(),i(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),i(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),i(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),i(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),i(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),i(447,"code"),e(448,"POST"),t(),e(449,"."),t(),i(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),i(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),i(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),i(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),i(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),i(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),i(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),i(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),i(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),i(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),i(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),n(488,"br"),t()()(),i(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),i(492,"td",19),e(493,"-"),t(),i(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),i(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),i(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),n(505,"br"),t()()(),i(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),i(509,"td",19),e(510,"-"),t(),i(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),i(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),i(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),i(519,"ul")(520,"li"),e(521,"po-input"),t(),i(522,"li"),e(523,"po-number"),t(),i(524,"li"),e(525,"po-decimal"),t(),i(526,"li"),e(527,"po-textarea"),t(),i(528,"li"),e(529,"po-password"),t()(),i(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),i(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),i(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),n(540,"br"),t()()(),i(541,"td",17)(542,"code",33),e(543,"any"),t()(),i(544,"td",19),e(545,"-"),t(),i(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),i(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),i(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),i(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),i(557,"blockquote")(558,"p"),e(559,"Ex: "),i(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),i(562,"h3",9),e(563,"M\xE9todos"),t(),i(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),i(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),i(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),i(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),i(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),i(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),i(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),i(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),i(593,"th",12),e(594,"Tipo"),t(),i(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),i(597,"tr",13)(598,"td",14),e(599," property"),t(),i(600,"td",17)(601,"code",37),e(602," string "),t()(),i(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),i(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),n(609,"br"),i(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),i(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),i(621,"code"),e(622,"p-helper"),t(),e(623," ou executa a a\xE7\xE3o definida em "),i(624,"code"),e(625,"p-helper{eventOnClick}"),t(),e(626," ou em "),i(627,"code"),e(628,"p-additionalHelp"),t(),e(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(630,"code"),e(631,"keydown"),t(),e(632,"."),t(),i(633,"pre")(634,"code"),e(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),i(636,"h5")(637,"b"),e(638,"Par\xE2metros"),t()(),i(639,"table",10)(640,"tr",11)(641,"th",12),e(642,"Nome"),t(),i(643,"th",12),e(644,"Tipo"),t(),i(645,"th",12),e(646,"Descri\xE7\xE3o"),t()(),i(647,"tr",13)(648,"td",14),e(649," property"),t(),i(650,"td",17)(651,"code",37),e(652," string "),t()(),i(653,"td",20)(654,"p"),e(655,"Identificador da coluna."),t()()()(),n(656,"br"),i(657,"h3"),e(658,"Interfaces"),t(),i(659,"h4",38)(660,"code",5),e(661,"PoDynamicFormField"),t()(),i(662,"div",2)(663,"p"),e(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),i(665,"h4",9),e(666,"Propriedades"),t(),i(667,"table",10)(668,"tr",11)(669,"th",12),e(670,"Nome"),t(),i(671,"th",12),e(672,"Tipo"),t(),i(673,"th",12),e(674,"Descri\xE7\xE3o"),t()(),i(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),e(679," additionalHelp"),n(680,"br"),t()()(),i(681,"td",17)(682,"code",29),e(683,"Function"),t()(),i(684,"td",20)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),i(688,"p"),e(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(690,"blockquote")(691,"p"),e(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),e(697," additionalHelpTooltip"),n(698,"br"),t()()(),i(699,"td",17)(700,"code",18),e(701,"string"),t()(),i(702,"td",20)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),i(706,"p"),e(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(708,"code"),e(709,"po-helper"),t(),e(710,`.
`),i(711,"strong"),e(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(713,"blockquote")(714,"p"),e(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),e(720," advancedFilters"),n(721,"br"),t()()(),i(722,"td",17)(723,"code",39),e(724,"Array<PoLookupAdvancedFilter>"),t()(),i(725,"td",20)(726,"em")(727,"strong"),e(728,"(opcional)"),t()(),i(729,"p"),e(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(731,"blockquote")(732,"p"),e(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(734,"p"),e(735,"Exemplo de URL com busca avan\xE7ada:"),t(),i(736,"p")(737,"code"),e(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(739,"p"),e(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(741,"p")(742,"code"),e(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),e(748," appendBox"),n(749,"br"),t()()(),i(750,"td",17)(751,"code",28),e(752,"boolean"),t()(),i(753,"td",20)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,"Define que o "),i(759,"code"),e(760,"listbox"),t(),e(761," e/ou popover ("),i(762,"code"),e(763,"p-helper"),t(),e(764," e/ou "),i(765,"code"),e(766,"p-error-limit"),t(),e(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(768,"blockquote")(769,"p"),e(770,"Quando utilizado com "),i(771,"code"),e(772,"p-helper"),t(),e(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),e(778," autoHeight"),n(779,"br"),t()()(),i(780,"td",17)(781,"code",28),e(782,"boolean"),t()(),i(783,"td",20)(784,"em")(785,"strong"),e(786,"(opcional)"),t()(),i(787,"p"),e(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(789,"p")(790,"strong"),e(791,"Componentes compat\xEDveis:"),t(),i(792,"code"),e(793,"po-multiselect"),t(),e(794,", "),i(795,"code"),e(796,"po-lookup"),t(),e(797,"."),t()()(),i(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),e(802," autoUpload"),n(803,"br"),t()()(),i(804,"td",17)(805,"code",28),e(806,"boolean"),t()(),i(807,"td",20)(808,"em")(809,"strong"),e(810,"(opcional)"),t()(),i(811,"p"),e(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(813,"p")(814,"strong"),e(815,"Componente compat\xEDvel"),t(),e(816,": "),i(817,"code"),e(818,"po-upload"),t()()()(),i(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),e(823," booleanFalse"),n(824,"br"),t()()(),i(825,"td",17)(826,"code",18),e(827,"string"),t()(),i(828,"td",20)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Texto exibido quando o valor do componente for "),i(834,"em"),e(835,"false"),t(),e(836,"."),t()()(),i(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),e(841," booleanTrue"),n(842,"br"),t()()(),i(843,"td",17)(844,"code",18),e(845,"string"),t()(),i(846,"td",20)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),i(850,"p"),e(851,"Texto exibido quando o valor do componente for "),i(852,"em"),e(853,"true"),t(),e(854,"."),t()()(),i(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),e(859," changeOnEnter"),n(860,"br"),t()()(),i(861,"td",17)(862,"code",28),e(863,"boolean"),t()(),i(864,"td",20)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),i(868,"p"),e(869,"Indica que o evento "),i(870,"code"),e(871,"p-change"),t(),e(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(873,"code"),e(874,"po-combo"),t(),e(875,"."),t()()(),i(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),e(880," changeVisibleColumns"),n(881,"br"),t()()(),i(882,"td",17)(883,"code",29),e(884,"Function"),t()(),i(885,"td",20)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),i(889,"p"),e(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(891,"p"),e(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(893,"p")(894,"strong"),e(895,"Componente compat\xEDvel"),t(),e(896,": "),i(897,"code"),e(898,"po-lookup"),t()()()(),i(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),e(903," clean"),n(904,"br"),t()()(),i(905,"td",17)(906,"code",28),e(907,"boolean"),t()(),i(908,"td",20)(909,"em")(910,"strong"),e(911,"(opcional)"),t()(),i(912,"p"),e(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(914,"p")(915,"strong"),e(916,"Componentes compat\xEDveis:"),t(),i(917,"code"),e(918,"po-datepicker"),t(),e(919,", "),i(920,"code"),e(921,"po-datepicker-range"),t(),e(922,", "),i(923,"code"),e(924,"po-input"),t(),e(925,", "),i(926,"code"),e(927,"po-number"),t(),e(928,", "),i(929,"code"),e(930,"po-decimal"),t(),e(931,`,
`),i(932,"code"),e(933,"po-combo"),t(),e(934,", "),i(935,"code"),e(936,"po-lookup"),t(),e(937,", "),i(938,"code"),e(939,"po-password"),t(),e(940,", "),i(941,"code"),e(942,"po-timepicker"),t(),e(943,"."),t()()(),i(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),e(948," columnRestoreManager"),n(949,"br"),t()()(),i(950,"td",17)(951,"code",29),e(952,"Function"),t()(),i(953,"td",20)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),i(957,"p"),e(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(959,"p"),e(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(961,"p")(962,"strong"),e(963,"Componente compat\xEDvel"),t(),e(964,": "),i(965,"code"),e(966,"po-lookup"),t()()()(),i(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),e(971," columns"),n(972,"br"),t()()(),i(973,"td",17)(974,"code",40),e(975,"Array<PoLookupColumn> "),t(),i(976,"code",41),e(977," number"),t()(),i(978,"td",20)(979,"em")(980,"strong"),e(981,"(opcional)"),t()(),i(982,"p"),e(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(984,"code"),e(985,"searchService"),t(),e(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(987,"a",42)(988,"code"),e(989,"PoLookupColumn"),t()(),e(990,"."),t(),i(991,"blockquote")(992,"p"),e(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(994,"em"),e(995,"label"),t(),e(996," e "),i(997,"em"),e(998,"value"),t(),e(999,` para valores
de tela e do model respectivamente.`),t()(),i(1e3,"p")(1001,"strong"),e(1002,"Componentes compat\xEDveis:"),t(),i(1003,"code"),e(1004,"po-radio-group"),t(),e(1005,", "),i(1006,"code"),e(1007,"po-lookup"),t(),e(1008,", "),i(1009,"code"),e(1010,"po-checkbox-group"),t(),e(1011,"."),t()()(),i(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),e(1016," compactLabel"),n(1017,"br"),t()()(),i(1018,"td",17)(1019,"code",28),e(1020,"boolean"),t()(),i(1021,"td",20)(1022,"em")(1023,"strong"),e(1024,"(opcional)"),t()(),i(1025,"p"),e(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(1027,"p"),e(1028,"Quando habilitado ("),i(1029,"code"),e(1030,"true"),t(),e(1031,"), o modo compacto afeta o conjunto composto por:"),t(),i(1032,"ul")(1033,"li")(1034,"code"),e(1035,"po-label"),t()(),i(1036,"li")(1037,"code"),e(1038,"p-requirement (showRequired)"),t()(),i(1039,"li")(1040,"code"),e(1041,"po-helper"),t()()(),i(1042,"p"),e(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(1044,"p"),e(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(1046,"ul")(1047,"li")(1048,"code"),e(1049,"--field-container-title-justify"),t()(),i(1050,"li")(1051,"code"),e(1052,"--field-container-title-flex"),t()()(),i(1053,"p"),e(1054,"Exemplo:"),t(),i(1055,"pre")(1056,"code"),e(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(1058,"p"),e(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),e(1064," container"),n(1065,"br"),t()()(),i(1066,"td",17)(1067,"code",18),e(1068,"string"),t()(),i(1069,"td",20)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),i(1073,"p"),e(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1075,"p"),e(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),e(1081," customAction"),n(1082,"br"),t()()(),i(1083,"td",17)(1084,"code",43),e(1085,"PoProgressAction"),t()(),i(1086,"td",20)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),i(1090,"p"),e(1091,"Define uma a\xE7\xE3o personalizada no componente "),i(1092,"code"),e(1093,"po-upload"),t(),e(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1095,"p")(1096,"strong"),e(1097,"Componente compat\xEDvel"),t(),e(1098,": "),i(1099,"code"),e(1100,"po-upload"),t(),e(1101,","),t(),i(1102,"p")(1103,"strong"),e(1104,"Exemplo de configura\xE7\xE3o"),t(),e(1105,":"),t(),i(1106,"pre")(1107,"code",44),e(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),e(1113," customActionClick"),n(1114,"br"),t()()(),i(1115,"td",17)(1116,"code",45),e(1117,"(file: PoUploadFile) => void"),t()(),i(1118,"td",20)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),t()(),i(1122,"p"),e(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1124,"code"),e(1125,"p-custom-action"),t(),e(1126,"."),t(),i(1127,"p")(1128,"strong"),e(1129,"Componente compat\xEDvel"),t(),e(1130,": "),i(1131,"code"),e(1132,"po-upload"),t(),e(1133,","),t(),i(1134,"p"),e(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1136,"p")(1137,"strong"),e(1138,"Par\xE2metro do evento"),t(),e(1139,":"),t(),i(1140,"ul")(1141,"li")(1142,"code"),e(1143,"file"),t(),e(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1145,"code"),e(1146,"PoUploadFile"),t(),e(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1148,"p")(1149,"strong"),e(1150,"Exemplo de uso"),t(),e(1151,":"),t(),i(1152,"pre")(1153,"code",44),e(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),e(1159," debounceTime"),n(1160,"br"),t()()(),i(1161,"td",17)(1162,"code",41),e(1163,"number"),t()(),i(1164,"td",20)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),t()(),i(1168,"p"),e(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1170,"code"),e(1171,"p-filter-service"),t(),e(1172,")."),t(),i(1173,"p")(1174,"strong"),e(1175,"Componentes compat\xEDveis:"),t(),i(1176,"code"),e(1177,"po-combo"),t(),e(1178,", "),i(1179,"code"),e(1180,"po-multiselect"),t(),e(1181,"."),t()()(),i(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),e(1186," decimalsLength"),n(1187,"br"),t()()(),i(1188,"td",17)(1189,"code",41),e(1190,"number"),t()(),i(1191,"td",20)(1192,"em")(1193,"strong"),e(1194,"(opcional)"),t()(),i(1195,"p"),e(1196,"Quantidade m\xE1xima de casas decimais."),t(),i(1197,"blockquote")(1198,"p"),e(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1200,"code"),e(1201,"type"),t(),e(1202," for "),i(1203,"em"),e(1204,"currency"),t(),e(1205," ou "),i(1206,"em"),e(1207,"decimal"),t(),e(1208,"."),t()()()(),i(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),e(1213," directory"),n(1214,"br"),t()()(),i(1215,"td",17)(1216,"code",28),e(1217,"boolean"),t()(),i(1218,"td",20)(1219,"em")(1220,"strong"),e(1221,"(opcional)"),t()(),i(1222,"p"),e(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1224,"blockquote")(1225,"p"),e(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1227,"blockquote")(1228,"p"),e(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1230,"strong"),e(1231,"Internet Explorer"),t(),e(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1233,"p")(1234,"strong"),e(1235,"Componente compat\xEDvel"),t(),e(1236,": "),i(1237,"code"),e(1238,"po-upload"),t()()()(),i(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),e(1243," disabled"),n(1244,"br"),t()()(),i(1245,"td",17)(1246,"code",28),e(1247,"boolean"),t()(),i(1248,"td",20)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),i(1252,"p"),e(1253,"Desabilita o campo caso informar o valor "),i(1254,"em"),e(1255,"true"),t(),e(1256,"."),t()()(),i(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),e(1261," disabledInitFilter"),n(1262,"br"),t()()(),i(1263,"td",17)(1264,"code",28),e(1265,"boolean"),t()(),i(1266,"td",20)(1267,"em")(1268,"strong"),e(1269,"(opcional)"),t()(),i(1270,"p"),e(1271,"Desabilita o filtro inicial no servi\xE7o do "),i(1272,"code"),e(1273,"po-combo"),t(),e(1274,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),e(1279," disabledTabFilter"),n(1280,"br"),t()()(),i(1281,"td",17)(1282,"code",28),e(1283,"boolean"),t()(),i(1284,"td",20)(1285,"em")(1286,"strong"),e(1287,"(opcional)"),t()(),i(1288,"p"),e(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1290,"code"),e(1291,"po-combo"),t(),e(1292,"."),t()()(),i(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),e(1297," divider"),n(1298,"br"),t()()(),i(1299,"td",17)(1300,"code",18),e(1301,"string"),t()(),i(1302,"td",20)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),i(1306,"p"),e(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),e(1312," dragDrop"),n(1313,"br"),t()()(),i(1314,"td",17)(1315,"code",28),e(1316,"boolean"),t()(),i(1317,"td",20)(1318,"em")(1319,"strong"),e(1320,"(opcional)"),t()(),i(1321,"p"),e(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(1323,"blockquote")(1324,"p"),e(1325,"Recomendamos utilizar apenas um "),i(1326,"code"),e(1327,"po-upload"),t(),e(1328," com esta funcionalidade por tela."),t()(),i(1329,"p")(1330,"strong"),e(1331,"Componente compat\xEDvel"),t(),e(1332,": "),i(1333,"code"),e(1334,"po-upload"),t()()()(),i(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),e(1339," dragDropHeight"),n(1340,"br"),t()()(),i(1341,"td",17)(1342,"code",41),e(1343,"number"),t()(),i(1344,"td",20)(1345,"em")(1346,"strong"),e(1347,"(opcional)"),t()(),i(1348,"p"),e(1349,"Define em "),i(1350,"em"),e(1351,"pixels"),t(),e(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(1353,"code"),e(1354,"160px"),t(),e(1355,"."),t(),i(1356,"blockquote")(1357,"p"),e(1358,"Esta propriedade funciona somente se a propriedade "),i(1359,"code"),e(1360,"p-drag-drop"),t(),e(1361," estiver habilitada."),t()(),i(1362,"p")(1363,"strong"),e(1364,"Componente compat\xEDvel"),t(),e(1365,": "),i(1366,"code"),e(1367,"po-upload"),t()()()(),i(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),e(1372," errorAsyncFunction"),n(1373,"br"),t()()(),i(1374,"td",17)(1375,"code",46),e(1376,"(value) => Observable<boolean>"),t()(),i(1377,"td",20)(1378,"em")(1379,"strong"),e(1380,"(opcional)"),t()(),i(1381,"p"),e(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(1383,"code"),e(1384,"change"),t(),e(1385," ou "),i(1386,"code"),e(1387,"change-model"),t(),e(1388,", dependendo do valor da propriedade "),i(1389,"code"),e(1390,"triggerMode"),t(),e(1391,"."),t(),i(1392,"blockquote")(1393,"p"),e(1394,"Retorna "),i(1395,"code"),e(1396,"Observable com o valor true"),t(),e(1397," para sinalizar o erro "),i(1398,"code"),e(1399,"false"),t(),e(1400," para indicar que n\xE3o h\xE1 erro."),t()(),i(1401,"p")(1402,"strong"),e(1403,"Componente compat\xEDvel"),t(),e(1404,": "),i(1405,"code"),e(1406,"po-datepicker"),t()()()(),i(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),e(1411," errorAsyncProperties"),n(1412,"br"),t()()(),i(1413,"td",17)(1414,"code",47),e(1415,"ErrorAsyncProperties"),t()(),i(1416,"td",20)(1417,"em")(1418,"strong"),e(1419,"(opcional)"),t()(),i(1420,"p"),e(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(1422,"p")(1423,"strong"),e(1424,"Componentes compat\xEDveis:"),t(),i(1425,"code"),e(1426,"po-input"),t(),e(1427,", "),i(1428,"code"),e(1429,"po-number"),t(),e(1430,", "),i(1431,"code"),e(1432,"po-decimal"),t(),e(1433,", "),i(1434,"code"),e(1435,"po-password"),t(),e(1436,"."),t()()(),i(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),e(1441," errorLimit"),n(1442,"br"),t()()(),i(1443,"td",17)(1444,"code",28),e(1445,"boolean"),t()(),i(1446,"td",20)(1447,"em")(1448,"strong"),e(1449,"(opcional)"),t()(),i(1450,"p"),e(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(1452,"blockquote")(1453,"p"),e(1454,"Caso essa propriedade seja definida como "),i(1455,"code"),e(1456,"true"),t(),e(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(1458,"p")(1459,"strong"),e(1460,"Componentes compat\xEDveis:"),t(),i(1461,"code"),e(1462,"po-checkbox-group"),t(),e(1463,", "),i(1464,"code"),e(1465,"po-combo"),t(),e(1466,", "),i(1467,"code"),e(1468,"po-datepicker"),t(),e(1469,", "),i(1470,"code"),e(1471,"po-datepicker-range"),t(),e(1472,", "),i(1473,"code"),e(1474,"po-decimal"),t(),e(1475,", "),i(1476,"code"),e(1477,"po-input"),t(),e(1478,", "),i(1479,"code"),e(1480,"po-lookup"),t(),e(1481,", "),i(1482,"code"),e(1483,"po-multiselect"),t(),e(1484,", "),i(1485,"code"),e(1486,"po-number"),t(),e(1487,", "),i(1488,"code"),e(1489,"po-password"),t(),e(1490,", "),i(1491,"code"),e(1492,"po-radio-group"),t(),e(1493,", "),i(1494,"code"),e(1495,"po-select"),t(),e(1496,`,
`),i(1497,"code"),e(1498,"po-switch"),t(),e(1499,", "),i(1500,"code"),e(1501,"po-textarea"),t(),e(1502,", "),i(1503,"code"),e(1504,"po-timepicker"),t(),e(1505,"."),t()()(),i(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),e(1510," errorMessage"),n(1511,"br"),t()()(),i(1512,"td",17)(1513,"code",18),e(1514,"string"),t()(),i(1515,"td",20)(1516,"em")(1517,"strong"),e(1518,"(opcional)"),t()(),i(1519,"p"),e(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(1521,"p"),e(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(1523,"ul")(1524,"li"),e(1525,"pattern;"),t(),i(1526,"li"),e(1527,"minValue;"),t(),i(1528,"li"),e(1529,"maxValue;"),t(),i(1530,"li"),e(1531,"required;"),t()(),i(1532,"blockquote")(1533,"p"),e(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(1535,"code"),e(1536,"po-datepicker"),t(),e(1537,", "),i(1538,"code"),e(1539,"po-input"),t(),e(1540,", "),i(1541,"code"),e(1542,"po-number"),t(),e(1543,", "),i(1544,"code"),e(1545,"po-decimal"),t(),e(1546,", "),i(1547,"code"),e(1548,"po-password"),t(),e(1549,", "),i(1550,"code"),e(1551,"po-timepicker"),t(),e(1552,`, \xE9 necess\xE1rio que a propriedade
`),i(1553,"code"),e(1554,"requiredFieldErrorMessage"),t(),e(1555," esteja como "),i(1556,"code"),e(1557,"true"),t(),e(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(1559,"code"),e(1560,"po-datepicker-range"),t(),e(1561,", "),i(1562,"code"),e(1563,"po-select"),t(),e(1564,", "),i(1565,"code"),e(1566,"po-checkbox-group"),t(),e(1567,", "),i(1568,"code"),e(1569,"po-radio-group"),t(),e(1570,", "),i(1571,"code"),e(1572,"po-multiselect"),t(),e(1573,", "),i(1574,"code"),e(1575,"po-combo"),t(),e(1576,`,
`),i(1577,"code"),e(1578,"po-lookup"),t(),e(1579," e "),i(1580,"code"),e(1581,"po-textarea"),t(),e(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(1583,"code"),e(1584,"requiredFieldErrorMessage"),t(),e(1585,"."),t()(),i(1586,"p")(1587,"strong"),e(1588,"Componentes compat\xEDveis:"),t(),i(1589,"code"),e(1590,"po-checkbox-group"),t(),e(1591,", "),i(1592,"code"),e(1593,"po-combo"),t(),e(1594,", "),i(1595,"code"),e(1596,"po-datepicker"),t(),e(1597,", "),i(1598,"code"),e(1599,"po-datepicker-range"),t(),e(1600,", "),i(1601,"code"),e(1602,"po-decimal"),t(),e(1603,", "),i(1604,"code"),e(1605,"po-input"),t(),e(1606,", "),i(1607,"code"),e(1608,"po-lookup"),t(),e(1609,", "),i(1610,"code"),e(1611,"po-multiselect"),t(),e(1612,", "),i(1613,"code"),e(1614,"po-number"),t(),e(1615,", "),i(1616,"code"),e(1617,"po-password"),t(),e(1618,", "),i(1619,"code"),e(1620,"po-radio-group"),t(),e(1621,", "),i(1622,"code"),e(1623,"po-select"),t(),e(1624,`,
`),i(1625,"code"),e(1626,"po-switch"),t(),e(1627,", "),i(1628,"code"),e(1629,"po-textarea"),t(),e(1630,", "),i(1631,"code"),e(1632,"po-timepicker"),t(),e(1633,"."),t()()(),i(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),e(1638," fieldLabel"),n(1639,"br"),t()()(),i(1640,"td",17)(1641,"code",18),e(1642,"string"),t()(),i(1643,"td",20)(1644,"em")(1645,"strong"),e(1646,"(opcional)"),t()(),i(1647,"p"),e(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(1649,"p"),e(1650,"O valor padr\xE3o \xE9: "),i(1651,"code"),e(1652,"label"),t(),e(1653,"."),t(),i(1654,"blockquote")(1655,"p"),e(1656,"Esta propriedade pode ser utilizada em conjunto com: "),i(1657,"code"),e(1658,"options"),t(),e(1659,", "),i(1660,"code"),e(1661,"optionsService"),t(),e(1662," e "),i(1663,"code"),e(1664,"searchService"),t(),e(1665,"."),t()()()(),i(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),e(1670," fieldValue"),n(1671,"br"),t()()(),i(1672,"td",17)(1673,"code",18),e(1674,"string"),t()(),i(1675,"td",20)(1676,"em")(1677,"strong"),e(1678,"(opcional)"),t()(),i(1679,"p"),e(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(1681,"p"),e(1682,"O valor padr\xE3o \xE9: "),i(1683,"code"),e(1684,"value"),t(),e(1685,"."),t(),i(1686,"blockquote")(1687,"p"),e(1688,"Esta propriedade pode ser utilizada em conjunto com: "),i(1689,"code"),e(1690,"options"),t(),e(1691,", "),i(1692,"code"),e(1693,"optionsService"),t(),e(1694," e "),i(1695,"code"),e(1696,"searchService"),t(),e(1697,"."),t()()()(),i(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),e(1702," filterMinlength"),n(1703,"br"),t()()(),i(1704,"td",17)(1705,"code",41),e(1706,"number"),t()(),i(1707,"td",20)(1708,"em")(1709,"strong"),e(1710,"(opcional)"),t()(),i(1711,"p"),e(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(1713,"code"),e(1714,"po-combo"),t(),e(1715,"."),t()()(),i(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),e(1720," filterMode"),n(1721,"br"),t()()(),i(1722,"td",17)(1723,"code",48),e(1724,"PoMultiselectFilterMode"),t()(),i(1725,"td",20)(1726,"em")(1727,"strong"),e(1728,"(opcional)"),t()(),i(1729,"p"),e(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(1731,"code"),e(1732,"startsWith"),t(),e(1733,", "),i(1734,"code"),e(1735,"contains"),t(),e(1736," ou "),i(1737,"code"),e(1738,"endsWith"),t(),e(1739,"."),t(),i(1740,"blockquote")(1741,"p"),e(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(1743,"p")(1744,"strong"),e(1745,"Componente compat\xEDvel:"),t(),i(1746,"code"),e(1747,"po-multiselect"),t(),e(1748,"."),t()()(),i(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),e(1753," forceBooleanComponentType"),n(1754,"br"),t()()(),i(1755,"td",17)(1756,"code",49),e(1757,"ForceBooleanComponentEnum"),t()(),i(1758,"td",20)(1759,"em")(1760,"strong"),e(1761,"(opcional)"),t()(),i(1762,"p"),e(1763,"Valores aceitos:"),t(),i(1764,"ul")(1765,"li"),e(1766,"ForceBooleanComponentEnum.switch"),t(),i(1767,"li"),e(1768,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),e(1773," forceOptionsComponentType"),n(1774,"br"),t()()(),i(1775,"td",17)(1776,"code",50),e(1777,"ForceOptionComponentEnum"),t()(),i(1778,"td",20)(1779,"em")(1780,"strong"),e(1781,"(opcional)"),t()(),i(1782,"p"),e(1783,"pode ser utilizada em conjunto com a propriedade "),i(1784,"code"),e(1785,"options"),t(),e(1786," for\xE7ando o componente a renderizar um "),i(1787,"code"),e(1788,"po-select"),t(),e(1789," ou "),i(1790,"code"),e(1791,"po-radio-group"),t(),e(1792,"."),t(),i(1793,"p"),e(1794,"Valores aceitos:"),t(),i(1795,"ul")(1796,"li"),e(1797,"ForceOptionComponentEnum.radioGroup"),t(),i(1798,"li"),e(1799,"ForceOptionComponentEnum.select"),t()(),i(1800,"blockquote")(1801,"p"),e(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(1803,"code"),e(1804,"optionsMulti"),t(),e(1805," e "),i(1806,"code"),e(1807,"optionsService"),t(),e(1808,"."),t()()()(),i(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),e(1813," formField"),n(1814,"br"),t()()(),i(1815,"td",17)(1816,"code",18),e(1817,"string"),t()(),i(1818,"td",20)(1819,"em")(1820,"strong"),e(1821,"(opcional)"),t()(),i(1822,"p"),e(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(1824,"code"),e(1825,"url"),t(),e(1826,"."),t(),i(1827,"blockquote")(1828,"p"),e(1829,"O valor default \xE9 "),i(1830,"code"),e(1831,"files"),t()()(),i(1832,"p")(1833,"strong"),e(1834,"Componente compat\xEDvel"),t(),e(1835,": "),i(1836,"code"),e(1837,"po-upload"),t()()()(),i(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),e(1842," format"),n(1843,"br"),t()()(),i(1844,"td",17)(1845,"code",18),e(1846,"string "),t(),i(1847,"code",32),e(1848," Array<string>"),t()(),i(1849,"td",20)(1850,"em")(1851,"strong"),e(1852,"(opcional)"),t()(),i(1853,"p"),e(1854,"Formato de exibi\xE7\xE3o no campo."),t(),i(1855,"p"),e(1856,"Ao utilizar esta propriedade com o "),i(1857,"code"),e(1858,"type"),t(),i(1859,"em"),e(1860,"PoDynamicFieldType.Date"),t(),e(1861," ou "),i(1862,"em"),e(1863,"PoDynamicFieldType.DateTime"),t(),e(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(1865,"p"),e(1866,"Valores v\xE1lidos:"),t(),i(1867,"ul")(1868,"li"),e(1869,"dd/mm/yyyy"),t(),i(1870,"li"),e(1871,"mm/dd/yyyy"),t(),i(1872,"li"),e(1873,"yyyy/mm/dd"),t()(),i(1874,"p"),e(1875,"Ao utilizar com o "),i(1876,"code"),e(1877,"type"),t(),i(1878,"em"),e(1879,"PoDynamicFieldType.Time"),t(),e(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),t(),i(1881,"p"),e(1882,"Valores v\xE1lidos:"),t(),i(1883,"ul")(1884,"li")(1885,"code"),e(1886,"24"),t(),e(1887,": formato de 24 horas (padr\xE3o)"),t(),i(1888,"li")(1889,"code"),e(1890,"12"),t(),e(1891,": formato de 12 horas com indicador AM/PM"),t()(),i(1892,"p"),e(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),i(1894,"code"),e(1895,"searchService"),t(),e(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t(),i(1897,"p")(1898,"strong"),e(1899,"Componentes compat\xEDveis:"),t(),i(1900,"code"),e(1901,"po-datepicker"),t(),e(1902,", "),i(1903,"code"),e(1904,"po-datetimepicker"),t(),e(1905,", "),i(1906,"code"),e(1907,"po-timepicker"),t(),e(1908,", "),i(1909,"code"),e(1910,"po-lookup"),t(),e(1911,"."),t()()(),i(1912,"tr",13)(1913,"td",14)(1914,"div",15)(1915,"span",16),e(1916," formatModel"),n(1917,"br"),t()()(),i(1918,"td",17)(1919,"code",28),e(1920,"boolean"),t()(),i(1921,"td",20)(1922,"em")(1923,"strong"),e(1924,"(opcional)"),t()(),i(1925,"p"),e(1926,"Indica se o "),i(1927,"code"),e(1928,"model"),t(),e(1929," receber\xE1 o valor formatado pelas propriedades "),i(1930,"code"),e(1931,"p-label-on"),t(),e(1932," e "),i(1933,"code"),e(1934,"p-label-off"),t(),e(1935,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(1936,"p"),e(1937,"O valor padr\xE3o \xE9: "),i(1938,"code"),e(1939,"false"),t(),e(1940,"."),t(),i(1941,"blockquote")(1942,"p"),e(1943,"Esta propriedade est\xE1 disponivel apenas para o "),i(1944,"code"),e(1945,"swicth"),t(),e(1946,"."),t()()()(),i(1947,"tr",13)(1948,"td",14)(1949,"div",15)(1950,"span",16),e(1951," formatTime"),n(1952,"br"),t()()(),i(1953,"td",17)(1954,"code",18),e(1955,"string"),t()(),i(1956,"td",20)(1957,"em")(1958,"strong"),e(1959,"(opcional)"),t()(),i(1960,"p"),e(1961,"Define o formato de exibi\xE7\xE3o do timer ("),i(1962,"code"),e(1963,"'12'"),t(),e(1964," ou "),i(1965,"code"),e(1966,"'24'"),t(),e(1967,")."),t(),i(1968,"p")(1969,"strong"),e(1970,"Componente compat\xEDvel:"),t(),i(1971,"code"),e(1972,"po-datetimepicker"),t()()()(),i(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),e(1977," gridColumns"),n(1978,"br"),t()()(),i(1979,"td",17)(1980,"code",41),e(1981,"number"),t()(),i(1982,"td",20)(1983,"em")(1984,"strong"),e(1985,"(opcional)"),t()(),i(1986,"p"),e(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(1988,"p"),e(1989,"Deve ser usado o sistema de "),i(1990,"strong"),e(1991,"grid"),t(),e(1992," do PO (1 ... 12 colunas)."),t(),i(1993,"blockquote")(1994,"p"),e(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),e(2e3," gridLgColumns"),n(2001,"br"),t()()(),i(2002,"td",17)(2003,"code",41),e(2004,"number"),t()(),i(2005,"td",20)(2006,"em")(2007,"strong"),e(2008,"(opcional)"),t()(),i(2009,"p"),e(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2011,"p"),e(2012,"Deve ser usado o sistema de "),i(2013,"strong"),e(2014,"grid"),t(),e(2015," do PO (1 ... 12 colunas)."),t(),i(2016,"blockquote")(2017,"p"),e(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2019,"code"),e(2020,"gridColumns"),t(),e(2021,"."),t()()()(),i(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),e(2026," gridLgPull"),n(2027,"br"),t()()(),i(2028,"td",17)(2029,"code",41),e(2030,"number"),t()(),i(2031,"td",20)(2032,"em")(2033,"strong"),e(2034,"(opcional)"),t()(),i(2035,"p"),e(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2037,"p"),e(2038,"Deve ser usado o sistema de "),i(2039,"strong"),e(2040,"grid"),t(),e(2041," do PO (1 ... 11 colunas)."),t(),i(2042,"blockquote")(2043,"p"),e(2044,"Esta propriedade n\xE3o funciona com a propriedade "),i(2045,"code"),e(2046,"gridColumns"),t(),e(2047,". Deve-se especificar o tamanho da tela."),t()()()(),i(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),e(2052," gridMdColumns"),n(2053,"br"),t()()(),i(2054,"td",17)(2055,"code",41),e(2056,"number"),t()(),i(2057,"td",20)(2058,"em")(2059,"strong"),e(2060,"(opcional)"),t()(),i(2061,"p"),e(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2063,"p"),e(2064,"Deve ser usado o sistema de "),i(2065,"strong"),e(2066,"grid"),t(),e(2067," do PO (1 ... 12 colunas)."),t(),i(2068,"blockquote")(2069,"p"),e(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2071,"code"),e(2072,"gridColumns"),t(),e(2073,"."),t()()()(),i(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),e(2078," gridMdPull"),n(2079,"br"),t()()(),i(2080,"td",17)(2081,"code",41),e(2082,"number"),t()(),i(2083,"td",20)(2084,"em")(2085,"strong"),e(2086,"(opcional)"),t()(),i(2087,"p"),e(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2089,"p"),e(2090,"Deve ser usado o sistema de "),i(2091,"strong"),e(2092,"grid"),t(),e(2093," do PO (1 ... 11 colunas)."),t(),i(2094,"blockquote")(2095,"p"),e(2096,"Esta propriedade n\xE3o funciona com a propriedade "),i(2097,"code"),e(2098,"gridColumns"),t(),e(2099,". Deve-se especificar o tamanho da tela."),t()()()(),i(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),e(2104," gridSmColumns"),n(2105,"br"),t()()(),i(2106,"td",17)(2107,"code",41),e(2108,"number"),t()(),i(2109,"td",20)(2110,"em")(2111,"strong"),e(2112,"(opcional)"),t()(),i(2113,"p"),e(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2115,"p"),e(2116,"Deve ser usado o sistema de "),i(2117,"strong"),e(2118,"grid"),t(),e(2119," do PO (1 ... 12 colunas)."),t(),i(2120,"blockquote")(2121,"p"),e(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2123,"code"),e(2124,"gridColumns"),t(),e(2125,"."),t()()()(),i(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),e(2130," gridSmPull"),n(2131,"br"),t()()(),i(2132,"td",17)(2133,"code",41),e(2134,"number"),t()(),i(2135,"td",20)(2136,"em")(2137,"strong"),e(2138,"(opcional)"),t()(),i(2139,"p"),e(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2141,"p"),e(2142,"Deve ser usado o sistema de "),i(2143,"strong"),e(2144,"grid"),t(),e(2145," do PO (1 ... 11 colunas)."),t(),i(2146,"blockquote")(2147,"p"),e(2148,"Esta propriedade n\xE3o funciona com a propriedade "),i(2149,"code"),e(2150,"gridColumns"),t(),e(2151,". Deve-se especificar o tamanho da tela."),t()()()(),i(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),e(2156," gridXlColumns"),n(2157,"br"),t()()(),i(2158,"td",17)(2159,"code",41),e(2160,"number"),t()(),i(2161,"td",20)(2162,"em")(2163,"strong"),e(2164,"(opcional)"),t()(),i(2165,"p"),e(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2167,"p"),e(2168,"Deve ser usado o sistema de "),i(2169,"strong"),e(2170,"grid"),t(),e(2171," do PO (1 ... 12 colunas)."),t(),i(2172,"blockquote")(2173,"p"),e(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2175,"code"),e(2176,"gridColumns"),t(),e(2177,"."),t()()()(),i(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),e(2182," gridXlPull"),n(2183,"br"),t()()(),i(2184,"td",17)(2185,"code",41),e(2186,"number"),t()(),i(2187,"td",20)(2188,"em")(2189,"strong"),e(2190,"(opcional)"),t()(),i(2191,"p"),e(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2193,"p"),e(2194,"Deve ser usado o sistema de "),i(2195,"strong"),e(2196,"grid"),t(),e(2197," do PO (1 ... 11 colunas)."),t(),i(2198,"blockquote")(2199,"p"),e(2200,"Esta propriedade n\xE3o funciona com a propriedade "),i(2201,"code"),e(2202,"gridColumns"),t(),e(2203,". Deve-se especificar o tamanho da tela."),t()()()(),i(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),e(2208," headers"),n(2209,"br"),t()()(),i(2210,"td",17)(2211,"code",51),e(2212,"{ [name: string]: string "),t(),i(2213,"code",52),e(2214,` Array<string>;
}`),t()(),i(2215,"td",20)(2216,"em")(2217,"strong"),e(2218,"(opcional)"),t()(),i(2219,"p"),e(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2221,"p")(2222,"strong"),e(2223,"Componente compat\xEDvel"),t(),e(2224,": "),i(2225,"code"),e(2226,"po-upload"),t()()()(),i(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),e(2231," help"),n(2232,"br"),t()()(),i(2233,"td",17)(2234,"code",18),e(2235,"string"),t()(),i(2236,"td",20)(2237,"em")(2238,"strong"),e(2239,"(opcional)"),t()(),i(2240,"p"),e(2241,"Texto de ajuda."),t()()(),i(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),e(2246," helper"),n(2247,"br"),t()()(),i(2248,"td",17)(2249,"code",18),e(2250,"string "),t(),i(2251,"code",53),e(2252," PoHelperOptions"),t()(),i(2253,"td",20)(2254,"em")(2255,"strong"),e(2256,"(opcional)"),t()(),i(2257,"p"),e(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),i(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),e(2263," hideLabelStatus"),n(2264,"br"),t()()(),i(2265,"td",17)(2266,"code",28),e(2267,"boolean"),t()(),i(2268,"td",20)(2269,"em")(2270,"strong"),e(2271,"(opcional)"),t()(),i(2272,"p"),e(2273,"Indica se o status do "),i(2274,"code"),e(2275,"model"),t(),e(2276," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),e(2281," hidePasswordPeek"),n(2282,"br"),t()()(),i(2283,"td",17)(2284,"code",28),e(2285,"boolean"),t()(),i(2286,"td",20)(2287,"em")(2288,"strong"),e(2289,"(opcional)"),t()(),i(2290,"p"),e(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2292,"code"),e(2293,"po-password"),t(),e(2294,"."),t()()(),i(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),e(2299," hideRestrictionsInfo"),n(2300,"br"),t()()(),i(2301,"td",17)(2302,"code",28),e(2303,"boolean"),t()(),i(2304,"td",20)(2305,"em")(2306,"strong"),e(2307,"(opcional)"),t()(),i(2308,"p"),e(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2310,"p")(2311,"strong"),e(2312,"Componente compat\xEDvel"),t(),e(2313,": "),i(2314,"code"),e(2315,"po-upload"),t()()()(),i(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),e(2320," hideSearch"),n(2321,"br"),t()()(),i(2322,"td",17)(2323,"code",28),e(2324,"boolean"),t()(),i(2325,"td",20)(2326,"em")(2327,"strong"),e(2328,"(opcional)"),t()(),i(2329,"p"),e(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2331,"code"),e(2332,"po-multiselect"),t(),e(2333,"."),t()()(),i(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),e(2338," hideSelectAll"),n(2339,"br"),t()()(),i(2340,"td",17)(2341,"code",28),e(2342,"boolean"),t()(),i(2343,"td",20)(2344,"em")(2345,"strong"),e(2346,"(opcional)"),t()(),i(2347,"p"),e(2348,'Indica se o campo "Selecionar todos" do '),i(2349,"code"),e(2350,"po-multiselect"),t(),e(2351," ser\xE1 escondido."),t()()(),i(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),e(2356," hideSelectButton"),n(2357,"br"),t()()(),i(2358,"td",17)(2359,"code",28),e(2360,"boolean"),t()(),i(2361,"td",20)(2362,"em")(2363,"strong"),e(2364,"(opcional)"),t()(),i(2365,"p"),e(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2367,"blockquote")(2368,"p"),e(2369,"Caso o valor definido seja "),i(2370,"code"),e(2371,"true"),t(),e(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2373,"code"),e(2374,"selectFiles()"),t(),e(2375," para sele\xE7\xE3o de arquivos."),t()(),i(2376,"p")(2377,"strong"),e(2378,"Componente compat\xEDvel"),t(),e(2379,": "),i(2380,"code"),e(2381,"po-upload"),t()()()(),i(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),e(2386," hideSendButton"),n(2387,"br"),t()()(),i(2388,"td",17)(2389,"code",28),e(2390,"boolean"),t()(),i(2391,"td",20)(2392,"em")(2393,"strong"),e(2394,"(opcional)"),t()(),i(2395,"p"),e(2396,"Omite o bot\xE3o de envio de arquivos."),t(),i(2397,"blockquote")(2398,"p"),e(2399,"Caso o valor definido seja "),i(2400,"code"),e(2401,"true"),t(),e(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2403,"code"),e(2404,"sendFiles()"),t(),e(2405," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(2406,"p")(2407,"strong"),e(2408,"Componente compat\xEDvel"),t(),e(2409,": "),i(2410,"code"),e(2411,"po-upload"),t()()()(),i(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),e(2416," icon"),n(2417,"br"),t()()(),i(2418,"td",17)(2419,"code",18),e(2420,"string "),t(),i(2421,"code",54),e(2422," TemplateRef<void>"),t()(),i(2423,"td",20)(2424,"em")(2425,"strong"),e(2426,"(opcional)"),t()(),i(2427,"p"),e(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(2429,"blockquote")(2430,"p"),e(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(2432,"ul")(2433,"li"),e(2434,"Input;"),t(),i(2435,"li"),e(2436,"Number;"),t(),i(2437,"li"),e(2438,"Decimal;"),t(),i(2439,"li"),e(2440,"Combo;"),t(),i(2441,"li"),e(2442,"Password;"),t()(),i(2443,"blockquote")(2444,"p"),e(2445,"Veja a disponibilidade de \xEDcones em "),i(2446,"a",55),e(2447,"biblioteca de \xEDcones"),t(),e(2448,"."),t()()()(),i(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),e(2453," infiniteScroll"),n(2454,"br"),t()()(),i(2455,"td",17)(2456,"code",28),e(2457,"boolean"),t()(),i(2458,"td",20)(2459,"em")(2460,"strong"),e(2461,"(opcional)"),t()(),i(2462,"p"),e(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(2464,"p")(2465,"strong"),e(2466,"Componentes compat\xEDveis:"),t(),i(2467,"code"),e(2468,"po-combo"),t(),e(2469,", "),i(2470,"code"),e(2471,"po-lookup"),t(),e(2472,"."),t()()(),i(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),e(2477," infiniteScrollDistance"),n(2478,"br"),t()()(),i(2479,"td",17)(2480,"code",41),e(2481,"number"),t()(),i(2482,"td",20)(2483,"em")(2484,"strong"),e(2485,"(opcional)"),t()(),i(2486,"p"),e(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(2488,"strong"),e(2489,"Exemplos"),t(),i(2490,"code"),e(2491,"{ infiniteScrollDistance: 80 }"),t(),e(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(2493,"p")(2494,"strong"),e(2495,"Componente compat\xEDvel:"),t(),i(2496,"code"),e(2497,"po-combo"),t(),e(2498,"."),t()()(),i(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),e(2503," invalidValue"),n(2504,"br"),t()()(),i(2505,"td",17)(2506,"code",28),e(2507,"boolean"),t()(),i(2508,"td",20)(2509,"em")(2510,"strong"),e(2511,"(opcional)"),t()(),i(2512,"p"),e(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(2514,"code"),e(2515,"p-field-error-message"),t(),e(2516,"."),t(),i(2517,"blockquote")(2518,"p"),e(2519,"Caso essa propriedade seja definida como "),i(2520,"code"),e(2521,"true"),t(),e(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(2523,"p")(2524,"strong"),e(2525,"Componente compat\xEDvel"),t(),e(2526,": "),i(2527,"code"),e(2528,"po-switch"),t()()()(),i(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),e(2533," isoFormat"),n(2534,"br"),t()()(),i(2535,"td",17)(2536,"code",56),e(2537,"PoDatepickerIsoFormat"),t()(),i(2538,"td",20)(2539,"em")(2540,"strong"),e(2541,"(opcional)"),t()(),i(2542,"p"),e(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(2544,"blockquote")(2545,"p"),e(2546,"Veja os valores v\xE1lidos no "),i(2547,"code"),e(2548,"PoDatepickerIsoFormat"),t(),e(2549,"."),t()(),i(2550,"p")(2551,"strong"),e(2552,"Componente compat\xEDvel:"),t(),i(2553,"code"),e(2554,"po-datepicker"),t()()()(),i(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),e(2559," key"),n(2560,"br"),t()()(),i(2561,"td",17)(2562,"code",28),e(2563,"boolean"),t()(),i(2564,"td",20)(2565,"em")(2566,"strong"),e(2567,"(opcional)"),t()(),i(2568,"p"),e(2569,"Identificador"),t()()(),i(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),e(2574," keydown"),n(2575,"br"),t()()(),i(2576,"td",17)(2577,"code",29),e(2578,"Function"),t()(),i(2579,"td",20)(2580,"em")(2581,"strong"),e(2582,"(opcional)"),t()(),i(2583,"p"),e(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(2585,"code"),e(2586,"KeyboardEvent"),t(),e(2587," com informa\xE7\xF5es sobre a tecla."),t()()(),i(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),e(2592," label"),n(2593,"br"),t()()(),i(2594,"td",17)(2595,"code",18),e(2596,"string"),t()(),i(2597,"td",20)(2598,"em")(2599,"strong"),e(2600,"(opcional)"),t()(),i(2601,"p"),e(2602,"R\xF3tulo do campo exibido."),t(),i(2603,"p"),e(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(2605,"code"),e(2606,"label"),t(),e(2607," o valor da propriedade "),i(2608,"code"),e(2609,"property"),t(),e(2610," com a primeira letra em mai\xFAsculo."),t()()(),i(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),e(2615," labelPosition"),n(2616,"br"),t()()(),i(2617,"td",17)(2618,"code",57),e(2619,"PoSwitchLabelPosition"),t()(),i(2620,"td",20)(2621,"em")(2622,"strong"),e(2623,"(opcional)"),t()(),i(2624,"p"),e(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(2626,"blockquote")(2627,"p"),e(2628,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),e(2633," listboxControlPosition"),n(2634,"br"),t()()(),i(2635,"td",17)(2636,"code",58),e(2637,"'top' "),t(),i(2638,"code",59),e(2639," 'bottom'"),t()(),i(2640,"td",20)(2641,"em")(2642,"strong"),e(2643,"(opcional)"),t()(),i(2644,"p"),e(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(2646,"code"),e(2647,"listbox"),t(),e(2648," em rela\xE7\xE3o ao campo ("),i(2649,"code"),e(2650,"top"),t(),e(2651," ou "),i(2652,"code"),e(2653,"bottom"),t(),e(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(2655,"p")(2656,"strong"),e(2657,"Componentes compat\xEDveis:"),t(),i(2658,"code"),e(2659,"po-multiselect"),t(),e(2660,", "),i(2661,"code"),e(2662,"po-combo"),t(),e(2663,"."),t()()(),i(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),e(2668," literals"),n(2669,"br"),t()()(),i(2670,"td",17)(2671,"code",60),e(2672,"PoLookupLiterals "),t(),i(2673,"code",61),e(2674," PoMultiselectLiterals "),t(),i(2675,"code",62),e(2676," PoComboLiterals "),t(),i(2677,"code",63),e(2678," PoDatepickerRangeLiterals "),t(),i(2679,"code",64),e(2680," PoUploadLiterals"),t()(),i(2681,"td",20)(2682,"em")(2683,"strong"),e(2684,"(opcional)"),t()(),i(2685,"p"),e(2686,"Objeto com as literais usadas para os seguintes componentes: "),i(2687,"code"),e(2688,"po-lookup"),t(),e(2689,", "),i(2690,"code"),e(2691,"po-multiselect"),t(),e(2692,", "),i(2693,"code"),e(2694,"po-combo"),t(),e(2695," e "),i(2696,"code"),e(2697,"po-datepicker-range"),t(),e(2698,"."),t(),i(2699,"blockquote")(2700,"p"),e(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(2702,"p")(2703,"strong"),e(2704,"Componentes compat\xEDveis:"),t(),i(2705,"code"),e(2706,"po-lookup"),t(),e(2707,", "),i(2708,"code"),e(2709,"po-multiselect"),t(),e(2710,", "),i(2711,"code"),e(2712,"po-combo"),t(),e(2713,", "),i(2714,"code"),e(2715,"po-datepicker-range"),t()()()(),i(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),e(2720," loading"),n(2721,"br"),t()()(),i(2722,"td",17)(2723,"code",28),e(2724,"boolean"),t()(),i(2725,"td",20)(2726,"em")(2727,"strong"),e(2728,"(opcional)"),t()(),i(2729,"p"),e(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),t(),i(2731,"blockquote")(2732,"p"),e(2733,"Por padr\xE3o \xE9 "),i(2734,"code"),e(2735,"false"),t(),e(2736,"."),t()(),i(2737,"p")(2738,"strong"),e(2739,"Componentes compat\xEDveis:"),t(),i(2740,"code"),e(2741,"po-datepicker"),t(),e(2742,", "),i(2743,"code"),e(2744,"po-datepicker-range"),t(),e(2745,", "),i(2746,"code"),e(2747,"po-number"),t(),e(2748,", "),i(2749,"code"),e(2750,"po-decimal"),t(),e(2751,`,
`),i(2752,"code"),e(2753,"po-input"),t(),e(2754,", "),i(2755,"code"),e(2756,"po-select"),t(),e(2757,", "),i(2758,"code"),e(2759,"po-switch"),t(),e(2760,", "),i(2761,"code"),e(2762,"po-combo"),t(),e(2763,", "),i(2764,"code"),e(2765,"po-lookup"),t(),e(2766,", "),i(2767,"code"),e(2768,"po-multiselect"),t(),e(2769,`,
`),i(2770,"code"),e(2771,"po-textarea"),t(),e(2772,", "),i(2773,"code"),e(2774,"po-password"),t(),e(2775,", "),i(2776,"code"),e(2777,"po-upload"),t(),e(2778,"."),t()()(),i(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),e(2783," locale"),n(2784,"br"),t()()(),i(2785,"td",17)(2786,"code",18),e(2787,"string"),t()(),i(2788,"td",20)(2789,"em")(2790,"strong"),e(2791,"(opcional)"),t()(),i(2792,"p"),e(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(2794,"a",65)(2795,"code"),e(2796,"I18n"),t()()(),i(2797,"p"),e(2798,"Exemplo de utiliza\xE7\xE3o:"),t(),i(2799,"pre")(2800,"code"),e(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(2802,"blockquote")(2803,"p"),e(2804,"Para ver quais linguagens suportadas acesse "),i(2805,"a",65)(2806,"code"),e(2807,"I18n"),t()()()(),i(2808,"p")(2809,"strong"),e(2810,"Componentes compat\xEDveis:"),t(),i(2811,"code"),e(2812,"po-datepicker"),t(),e(2813,", "),i(2814,"code"),e(2815,"po-decimal"),t(),e(2816,", "),i(2817,"code"),e(2818,"po-timepicker"),t(),e(2819,"."),t()()(),i(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),e(2824," mask"),n(2825,"br"),t()()(),i(2826,"td",17)(2827,"code",18),e(2828,"string"),t()(),i(2829,"td",20)(2830,"em")(2831,"strong"),e(2832,"(opcional)"),t()(),i(2833,"p"),e(2834,"M\xE1scara para o campo."),t(),i(2835,"p")(2836,"strong"),e(2837,"Componente compat\xEDvel:"),t(),i(2838,"code"),e(2839,"po-input"),t(),e(2840,"."),t(),i(2841,"blockquote")(2842,"p"),e(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(2844,"code"),e(2845,"type: time"),t(),e(2846,"."),t()()()(),i(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),e(2851," maskFormatModel"),n(2852,"br"),t()()(),i(2853,"td",17)(2854,"code",28),e(2855,"boolean"),t()(),i(2856,"td",20)(2857,"em")(2858,"strong"),e(2859,"(opcional)"),t()(),i(2860,"p"),e(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(2862,"code"),e(2863,"false"),t(),e(2864,"."),t(),i(2865,"p")(2866,"strong"),e(2867,"Componente compat\xEDvel:"),t(),i(2868,"code"),e(2869,"po-input"),t(),e(2870,"."),t(),i(2871,"blockquote")(2872,"p"),e(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(2874,"code"),e(2875,"type: time"),t(),e(2876,"."),t()()()(),i(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),e(2881," maskNoLengthValidation"),n(2882,"br"),t()()(),i(2883,"td",17)(2884,"code",28),e(2885,"boolean"),t()(),i(2886,"td",20)(2887,"em")(2888,"strong"),e(2889,"(opcional)"),t()(),i(2890,"p"),e(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),i(2892,"code"),e(2893,"minLength"),t(),e(2894,") e m\xE1ximo ("),i(2895,"code"),e(2896,"maxLength"),t(),e(2897,") quando h\xE1 uma m\xE1scara ("),i(2898,"code"),e(2899,"p-mask"),t(),e(2900,") definida."),t(),i(2901,"ul")(2902,"li"),e(2903,"Quando "),i(2904,"code"),e(2905,"true"),t(),e(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),i(2907,"li"),e(2908,"Quando "),i(2909,"code"),e(2910,"false"),t(),e(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),i(2912,"p")(2913,"strong"),e(2914,"Componentes compat\xEDveis:"),t(),i(2915,"code"),e(2916,"po-input"),t(),e(2917,", "),i(2918,"code"),e(2919,"po-decimal"),t(),e(2920,"."),t(),i(2921,"blockquote")(2922,"p"),e(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),i(2924,"code"),e(2925,"p-mask-format-model"),t(),e(2926,"."),t()(),i(2927,"p"),e(2928,"Exemplo:"),t(),i(2929,"pre")(2930,"code"),e(2931,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),t()(),i(2932,"ul")(2933,"li"),e(2934,"Entrada: "),i(2935,"code"),e(2936,"11.111.111/1111-11"),t(),e(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),t()()()(),i(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),e(2942," maxLength"),n(2943,"br"),t()()(),i(2944,"td",17)(2945,"code",41),e(2946,"number"),t()(),i(2947,"td",20)(2948,"em")(2949,"strong"),e(2950,"(opcional)"),t()(),i(2951,"p"),e(2952,"Tamanho m\xE1ximo de caracteres."),t(),i(2953,"p")(2954,"strong"),e(2955,"Componentes compat\xEDveis:"),t(),i(2956,"code"),e(2957,"po-input"),t(),e(2958,", "),i(2959,"code"),e(2960,"po-number"),t(),e(2961,", "),i(2962,"code"),e(2963,"po-decimal"),t(),e(2964,", "),i(2965,"code"),e(2966,"po-textarea"),t(),e(2967,", "),i(2968,"code"),e(2969,"po-password"),t(),e(2970,"."),t()()(),i(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),e(2975," maxTime"),n(2976,"br"),t()()(),i(2977,"td",17)(2978,"code",18),e(2979,"string"),t()(),i(2980,"td",20)(2981,"em")(2982,"strong"),e(2983,"(opcional)"),t()(),i(2984,"p"),e(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),i(2986,"code"),e(2987,"HH:mm"),t(),e(2988," ou "),i(2989,"code"),e(2990,"HH:mm:ss"),t(),e(2991,"."),t(),i(2992,"p")(2993,"strong"),e(2994,"Componente compat\xEDvel:"),t(),i(2995,"code"),e(2996,"po-datetimepicker"),t(),e(2997,", "),i(2998,"code"),e(2999,"po-timepicker"),t()()()(),i(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),e(3004," maxValue"),n(3005,"br"),t()()(),i(3006,"td",17)(3007,"code",18),e(3008,"string "),t(),i(3009,"code",41),e(3010," number"),t()(),i(3011,"td",20)(3012,"em")(3013,"strong"),e(3014,"(opcional)"),t()(),i(3015,"p"),e(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3017,"em"),e(3018,"number"),t(),e(3019,", "),i(3020,"em"),e(3021,"date"),t(),e(3022,", "),i(3023,"em"),e(3024,"dateTime"),t(),e(3025," ou "),i(3026,"em"),e(3027,"time"),t(),e(3028,"."),t(),i(3029,"blockquote")(3030,"p"),e(3031,"Para "),i(3032,"code"),e(3033,"po-timepicker"),t(),e(3034,", o valor deve estar no formato "),i(3035,"code"),e(3036,"HH:mm"),t(),e(3037," ou "),i(3038,"code"),e(3039,"HH:mm:ss"),t(),e(3040,"."),t()(),i(3041,"p")(3042,"strong"),e(3043,"Componentes compat\xEDveis:"),t(),i(3044,"code"),e(3045,"po-datepicker"),t(),e(3046,", "),i(3047,"code"),e(3048,"po-datepicker-range"),t(),e(3049,", "),i(3050,"code"),e(3051,"po-number"),t(),e(3052,", "),i(3053,"code"),e(3054,"po-decimal"),t(),e(3055,", "),i(3056,"code"),e(3057,"po-timepicker"),t()()()(),i(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),e(3062," minLength"),n(3063,"br"),t()()(),i(3064,"td",17)(3065,"code",41),e(3066,"number"),t()(),i(3067,"td",20)(3068,"em")(3069,"strong"),e(3070,"(opcional)"),t()(),i(3071,"p"),e(3072,"Tamanho m\xEDnimo de caracteres."),t(),i(3073,"p")(3074,"strong"),e(3075,"Componentes compat\xEDveis:"),t(),i(3076,"code"),e(3077,"po-input"),t(),e(3078,", "),i(3079,"code"),e(3080,"po-number"),t(),e(3081,", "),i(3082,"code"),e(3083,"po-decimal"),t(),e(3084,", "),i(3085,"code"),e(3086,"po-textarea"),t(),e(3087,", "),i(3088,"code"),e(3089,"po-password"),t(),e(3090,"."),t()()(),i(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),e(3095," minTime"),n(3096,"br"),t()()(),i(3097,"td",17)(3098,"code",18),e(3099,"string"),t()(),i(3100,"td",20)(3101,"em")(3102,"strong"),e(3103,"(opcional)"),t()(),i(3104,"p"),e(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),i(3106,"code"),e(3107,"HH:mm"),t(),e(3108," ou "),i(3109,"code"),e(3110,"HH:mm:ss"),t(),e(3111,"."),t(),i(3112,"p")(3113,"strong"),e(3114,"Componente compat\xEDvel:"),t(),i(3115,"code"),e(3116,"po-datetimepicker"),t(),e(3117,", "),i(3118,"code"),e(3119,"po-timepicker"),t()()()(),i(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),e(3124," minValue"),n(3125,"br"),t()()(),i(3126,"td",17)(3127,"code",18),e(3128,"string "),t(),i(3129,"code",41),e(3130," number"),t()(),i(3131,"td",20)(3132,"em")(3133,"strong"),e(3134,"(opcional)"),t()(),i(3135,"p"),e(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3137,"em"),e(3138,"number"),t(),e(3139,", "),i(3140,"em"),e(3141,"date"),t(),e(3142,", "),i(3143,"em"),e(3144,"dateTime"),t(),e(3145," ou "),i(3146,"em"),e(3147,"time"),t(),e(3148,"."),t(),i(3149,"blockquote")(3150,"p"),e(3151,"Para "),i(3152,"code"),e(3153,"po-timepicker"),t(),e(3154,", o valor deve estar no formato "),i(3155,"code"),e(3156,"HH:mm"),t(),e(3157," ou "),i(3158,"code"),e(3159,"HH:mm:ss"),t(),e(3160,"."),t()(),i(3161,"p")(3162,"strong"),e(3163,"Componentes compat\xEDveis:"),t(),i(3164,"code"),e(3165,"po-datepicker"),t(),e(3166,", "),i(3167,"code"),e(3168,"po-datepicker-range"),t(),e(3169,", "),i(3170,"code"),e(3171,"po-number"),t(),e(3172,", "),i(3173,"code"),e(3174,"po-decimal"),t(),e(3175,", "),i(3176,"code"),e(3177,"po-timepicker"),t()()()(),i(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),e(3182," minuteInterval"),n(3183,"br"),t()()(),i(3184,"td",17)(3185,"code",41),e(3186,"number"),t()(),i(3187,"td",20)(3188,"em")(3189,"strong"),e(3190,"(opcional)"),t()(),i(3191,"p"),e(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),t()()(),i(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),e(3197," mode"),n(3198,"br"),t()()(),i(3199,"td",17)(3200,"code",66),e(3201,"'month-year' "),t(),i(3202,"code",67),e(3203," 'year'"),t()(),i(3204,"td",20)(3205,"em")(3206,"strong"),e(3207,"(opcional)"),t()(),i(3208,"p"),e(3209,"Define o modo de sele\xE7\xE3o do "),i(3210,"code"),e(3211,"po-datepicker"),t(),e(3212,"."),t(),i(3213,"p"),e(3214,"Valores aceitos:"),t(),i(3215,"ul")(3216,"li")(3217,"code"),e(3218,"'month-year'"),t(),e(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),i(3220,"code"),e(3221,"MM/YYYY"),t(),e(3222,")"),t(),i(3223,"li")(3224,"code"),e(3225,"'year'"),t(),e(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),i(3227,"code"),e(3228,"YYYY"),t(),e(3229,")"),t()(),i(3230,"p")(3231,"strong"),e(3232,"Componente compat\xEDvel:"),t(),i(3233,"code"),e(3234,"po-datepicker"),t()()()(),i(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),e(3239," modelFormat"),n(3240,"br"),t()()(),i(3241,"td",17)(3242,"code",68),e(3243,"PoTimepickerModelFormat"),t()(),i(3244,"td",20)(3245,"em")(3246,"strong"),e(3247,"(opcional)"),t()(),i(3248,"p"),e(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),i(3250,"code"),e(3251,"po-timepicker"),t(),e(3252,"."),t(),i(3253,"blockquote")(3254,"p"),e(3255,"Veja os valores v\xE1lidos no "),i(3256,"code"),e(3257,"PoTimepickerModelFormat"),t(),e(3258,"."),t()(),i(3259,"p")(3260,"strong"),e(3261,"Componente compat\xEDvel:"),t(),i(3262,"code"),e(3263,"po-timepicker"),t()()()(),i(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),e(3268," multiple"),n(3269,"br"),t()()(),i(3270,"td",17)(3271,"code",28),e(3272,"boolean"),t()(),i(3273,"td",20)(3274,"em")(3275,"strong"),e(3276,"(opcional)"),t()(),i(3277,"p"),e(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3279,"p")(3280,"strong"),e(3281,"Componentes compat\xEDveis:"),t(),i(3282,"code"),e(3283,"po-lookup"),t(),e(3284,", "),i(3285,"code"),e(3286,"po-upload"),t()()()(),i(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),e(3291," noAutocomplete"),n(3292,"br"),t()()(),i(3293,"td",17)(3294,"code",28),e(3295,"boolean"),t()(),i(3296,"td",20)(3297,"em")(3298,"strong"),e(3299,"(opcional)"),t()(),i(3300,"p"),e(3301,"Define a propriedade nativa "),i(3302,"code"),e(3303,"autocomplete"),t(),e(3304," do campo como off."),t(),i(3305,"p")(3306,"strong"),e(3307,"Componentes compat\xEDveis:"),t(),i(3308,"code"),e(3309,"po-datepicker"),t(),e(3310,", "),i(3311,"code"),e(3312,"po-datepicker-range"),t(),e(3313,", "),i(3314,"code"),e(3315,"po-input"),t(),e(3316,", "),i(3317,"code"),e(3318,"po-number"),t(),e(3319,", "),i(3320,"code"),e(3321,"po-decimal"),t(),e(3322,`,
`),i(3323,"code"),e(3324,"po-lookup"),t(),e(3325,", "),i(3326,"code"),e(3327,"po-password"),t(),e(3328,", "),i(3329,"code"),e(3330,"po-timepicker"),t(),e(3331,"."),t()()(),i(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),e(3336," offsetColumns"),n(3337,"br"),t()()(),i(3338,"td",17)(3339,"code",41),e(3340,"number"),t()(),i(3341,"td",20)(3342,"em")(3343,"strong"),e(3344,"(opcional)"),t()(),i(3345,"p"),e(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3347,"p"),e(3348,"Deve ser usado o sistema de "),i(3349,"strong"),e(3350,"grid"),t(),e(3351," do PO (1 ... 12 colunas)."),t(),i(3352,"blockquote")(3353,"p"),e(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),e(3359," offsetLgColumns"),n(3360,"br"),t()()(),i(3361,"td",17)(3362,"code",41),e(3363,"number"),t()(),i(3364,"td",20)(3365,"em")(3366,"strong"),e(3367,"(opcional)"),t()(),i(3368,"p"),e(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3370,"p"),e(3371,"Deve ser usado o sistema de "),i(3372,"strong"),e(3373,"grid"),t(),e(3374," do PO (1 ... 12 colunas)."),t(),i(3375,"blockquote")(3376,"p"),e(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3378,"code"),e(3379,"offsetColumns"),t(),e(3380,"."),t()()()(),i(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),e(3385," offsetMdColumns"),n(3386,"br"),t()()(),i(3387,"td",17)(3388,"code",41),e(3389,"number"),t()(),i(3390,"td",20)(3391,"em")(3392,"strong"),e(3393,"(opcional)"),t()(),i(3394,"p"),e(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3396,"p"),e(3397,"Deve ser usado o sistema de "),i(3398,"strong"),e(3399,"grid"),t(),e(3400," do PO (1 ... 12 colunas)."),t(),i(3401,"blockquote")(3402,"p"),e(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3404,"code"),e(3405,"offsetColumns"),t(),e(3406,"."),t()()()(),i(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),e(3411," offsetSmColumns"),n(3412,"br"),t()()(),i(3413,"td",17)(3414,"code",41),e(3415,"number"),t()(),i(3416,"td",20)(3417,"em")(3418,"strong"),e(3419,"(opcional)"),t()(),i(3420,"p"),e(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3422,"p"),e(3423,"Deve ser usado o sistema de "),i(3424,"strong"),e(3425,"grid"),t(),e(3426," do PO (1 ... 12 colunas)."),t(),i(3427,"blockquote")(3428,"p"),e(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3430,"code"),e(3431,"offsetColumns"),t(),e(3432,"."),t()()()(),i(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),e(3437," offsetXlColumns"),n(3438,"br"),t()()(),i(3439,"td",17)(3440,"code",41),e(3441,"number"),t()(),i(3442,"td",20)(3443,"em")(3444,"strong"),e(3445,"(opcional)"),t()(),i(3446,"p"),e(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3448,"p"),e(3449,"Deve ser usado o sistema de "),i(3450,"strong"),e(3451,"grid"),t(),e(3452," do PO (1 ... 12 colunas)."),t(),i(3453,"blockquote")(3454,"p"),e(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3456,"code"),e(3457,"offsetColumns"),t(),e(3458,"."),t()()()(),i(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),e(3463," onError"),n(3464,"br"),t()()(),i(3465,"td",17)(3466,"code",29),e(3467,"Function"),t()(),i(3468,"td",20)(3469,"em")(3470,"strong"),e(3471,"(opcional)"),t()(),i(3472,"p"),e(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3474,"blockquote")(3475,"p"),e(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3477,"code"),e(3478,"HttpErrorResponse"),t(),e(3479,"."),t()(),i(3480,"p")(3481,"strong"),e(3482,"Componente compat\xEDvel"),t(),e(3483,": "),i(3484,"code"),e(3485,"po-upload"),t()()()(),i(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),e(3490," onSuccess"),n(3491,"br"),t()()(),i(3492,"td",17)(3493,"code",29),e(3494,"Function"),t()(),i(3495,"td",20)(3496,"em")(3497,"strong"),e(3498,"(opcional)"),t()(),i(3499,"p"),e(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3501,"blockquote")(3502,"p"),e(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3504,"code"),e(3505,"HttpResponse"),t(),e(3506,"."),t()(),i(3507,"p")(3508,"strong"),e(3509,"Componente compat\xEDvel"),t(),e(3510,": "),i(3511,"code"),e(3512,"po-upload"),t()()()(),i(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),e(3517," onUpload"),n(3518,"br"),t()()(),i(3519,"td",17)(3520,"code",29),e(3521,"Function"),t()(),i(3522,"td",20)(3523,"em")(3524,"strong"),e(3525,"(opcional)"),t()(),i(3526,"p"),e(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3528,"pre")(3529,"code"),e(3530,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3531,"p")(3532,"strong"),e(3533,"Componente compat\xEDvel"),t(),e(3534,": "),i(3535,"code"),e(3536,"po-upload"),t()()()(),i(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),e(3541," optional"),n(3542,"br"),t()()(),i(3543,"td",17)(3544,"code",28),e(3545,"boolean"),t()(),i(3546,"td",20)(3547,"em")(3548,"strong"),e(3549,"(opcional)"),t()(),i(3550,"p"),e(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3552,"blockquote")(3553,"p"),e(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3555,"ul")(3556,"li"),e(3557,"O campo for "),i(3558,"code"),e(3559,"required"),t(),e(3560,", ou;"),t(),i(3561,"li"),e(3562,"N\xE3o possuir "),i(3563,"code"),e(3564,"help"),t(),e(3565," e "),i(3566,"code"),e(3567,"label"),t(),e(3568,"."),t()(),i(3569,"p")(3570,"strong"),e(3571,"Componentes compat\xEDveis:"),t(),i(3572,"code"),e(3573,"po-datepicker"),t(),e(3574,", "),i(3575,"code"),e(3576,"po-datepicker-range"),t(),e(3577,", "),i(3578,"code"),e(3579,"po-timepicker"),t(),e(3580,", "),i(3581,"code"),e(3582,"po-input"),t(),e(3583,", "),i(3584,"code"),e(3585,"po-number"),t(),e(3586,`,
`),i(3587,"code"),e(3588,"po-decimal"),t(),e(3589,", "),i(3590,"code"),e(3591,"po-select"),t(),e(3592,", "),i(3593,"code"),e(3594,"po-radio-group"),t(),e(3595,", "),i(3596,"code"),e(3597,"po-combo"),t(),e(3598,", "),i(3599,"code"),e(3600,"po-lookup"),t(),e(3601,", "),i(3602,"code"),e(3603,"po-checkbox-group"),t(),e(3604,", "),i(3605,"code"),e(3606,"po-multiselect"),t(),e(3607,`,
`),i(3608,"code"),e(3609,"po-textarea"),t(),e(3610,", "),i(3611,"code"),e(3612,"po-password"),t(),e(3613,"."),t()()(),i(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),e(3618," options"),n(3619,"br"),t()()(),i(3620,"td",17)(3621,"code",32),e(3622,"Array<string> "),t(),i(3623,"code",69),e(3624," Array<PoSelectOption> "),t(),i(3625,"code",70),e(3626," Array<PoMultiselectOption> "),t(),i(3627,"code",71),e(3628," Array<PoCheckboxGroupOption> "),t(),i(3629,"code",72),e(3630," Array<any>"),t()(),i(3631,"td",20)(3632,"em")(3633,"strong"),e(3634,"(opcional)"),t()(),i(3635,"p"),e(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3637,"p")(3638,"strong"),e(3639,"Componentes compat\xEDveis:"),t(),i(3640,"code"),e(3641,"po-select"),t(),e(3642,", "),i(3643,"code"),e(3644,"po-radio-group"),t(),e(3645,", "),i(3646,"code"),e(3647,"po-checkbox-group"),t(),e(3648,", "),i(3649,"code"),e(3650,"po-multiselect"),t(),e(3651,"."),t()()(),i(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),e(3656," optionsMulti"),n(3657,"br"),t()()(),i(3658,"td",17)(3659,"code",28),e(3660,"boolean"),t()(),i(3661,"td",20)(3662,"em")(3663,"strong"),e(3664,"(opcional)"),t()(),i(3665,"p"),e(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),e(3671," optionsService"),n(3672,"br"),t()()(),i(3673,"td",17)(3674,"code",18),e(3675,"string "),t(),i(3676,"code",73),e(3677," PoComboFilter "),t(),i(3678,"code",74),e(3679," PoMultiselectFilter"),t()(),i(3680,"td",20)(3681,"em")(3682,"strong"),e(3683,"(opcional)"),t()(),i(3684,"p"),e(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3686,"strong"),e(3687,"Importante"),t()(),i(3688,"blockquote")(3689,"p"),e(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3691,"a",75),e(3692,"guia de API do PO UI"),t(),e(3693,"."),t()()()(),i(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),e(3698," order"),n(3699,"br"),t()()(),i(3700,"td",17)(3701,"code",41),e(3702,"number"),t()(),i(3703,"td",20)(3704,"em")(3705,"strong"),e(3706,"(opcional)"),t()(),i(3707,"p"),e(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3709,"p"),e(3710,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3711,"p")(3712,"code"),e(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3714,"p"),e(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3716,"code"),e(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3718,"p"),e(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3720,"p"),e(3721,"Campos sem "),i(3722,"code"),e(3723,"order"),t(),e(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),e(3729," params"),n(3730,"br"),t()()(),i(3731,"td",17)(3732,"code",33),e(3733,"any"),t()(),i(3734,"td",20)(3735,"em")(3736,"strong"),e(3737,"(opcional)"),t()(),i(3738,"p"),e(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3740,"code"),e(3741,"po-lookup"),t(),e(3742,` e
`),i(3743,"code"),e(3744,"po-combo"),t(),e(3745,"."),t(),i(3746,"p"),e(3747,"Por exemplo, para o par\xE2metro "),i(3748,"code"),e(3749,"{ age: 23 }"),t(),e(3750," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3751,"p")(3752,"code"),e(3753,"url + ?age=23&filter=Peter"),t()()()(),i(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),e(3758," pattern"),n(3759,"br"),t()()(),i(3760,"td",17)(3761,"code",18),e(3762,"string"),t()(),i(3763,"td",20)(3764,"em")(3765,"strong"),e(3766,"(opcional)"),t()(),i(3767,"p"),e(3768,"Regex para valida\xE7\xE3o do campo."),t(),i(3769,"p")(3770,"strong"),e(3771,"Componentes compat\xEDveis:"),t(),i(3772,"code"),e(3773,"po-input"),t(),e(3774,", "),i(3775,"code"),e(3776,"po-password"),t(),e(3777,"."),t()()(),i(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),e(3782," placeholder"),n(3783,"br"),t()()(),i(3784,"td",17)(3785,"code",18),e(3786,"string"),t()(),i(3787,"td",20)(3788,"em")(3789,"strong"),e(3790,"(opcional)"),t()(),i(3791,"p"),e(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t(),i(3793,"p")(3794,"strong"),e(3795,"Componentes compat\xEDveis:"),t(),i(3796,"code"),e(3797,"po-datepicker"),t(),e(3798,", "),i(3799,"code"),e(3800,"po-datepicker-range"),t(),e(3801,", "),i(3802,"code"),e(3803,"po-timepicker"),t(),e(3804,", "),i(3805,"code"),e(3806,"po-input"),t(),e(3807,", "),i(3808,"code"),e(3809,"po-number"),t(),e(3810,", "),i(3811,"code"),e(3812,"po-decimal"),t(),e(3813,", "),i(3814,"code"),e(3815,"po-select"),t(),e(3816,", "),i(3817,"code"),e(3818,"po-combo"),t(),e(3819,", "),i(3820,"code"),e(3821,"po-lookup"),t(),e(3822,", "),i(3823,"code"),e(3824,"po-multiselect"),t(),e(3825,", "),i(3826,"code"),e(3827,"po-textarea"),t(),e(3828,", "),i(3829,"code"),e(3830,"po-password"),t(),e(3831,"."),t()()(),i(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),e(3836," placeholderSearch"),n(3837,"br"),t()()(),i(3838,"td",17)(3839,"code",18),e(3840,"string"),t()(),i(3841,"td",20)(3842,"em")(3843,"strong"),e(3844,"(opcional)"),t()(),i(3845,"p"),e(3846,"Placeholder do campo de pesquisa do "),i(3847,"code"),e(3848,"po-multiselect"),t(),e(3849,"."),t(),i(3850,"blockquote")(3851,"p"),e(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),e(3857," property"),n(3858,"br"),t()()(),i(3859,"td",17)(3860,"code",18),e(3861,"string"),t()(),i(3862,"td",20)(3863,"p"),e(3864,"Nome de refer\xEAncia do campo."),t()()(),i(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),e(3869," range"),n(3870,"br"),t()()(),i(3871,"td",17)(3872,"code",28),e(3873,"boolean"),t()(),i(3874,"td",20)(3875,"em")(3876,"strong"),e(3877,"(opcional)"),t()(),i(3878,"p"),e(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(3880,"blockquote")(3881,"p"),e(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),e(3887," rangePresetOptions"),n(3888,"br"),t()()(),i(3889,"td",17)(3890,"code",76),e(3891,"Array<PoCalendarRangePreset>"),t()(),i(3892,"td",20)(3893,"em")(3894,"strong"),e(3895,"(opcional)"),t()(),i(3896,"p"),e(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),t(),i(3898,"p"),e(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),i(3900,"code"),e(3901,"PoCalendarRangePreset"),t(),e(3902,"."),t(),i(3903,"p")(3904,"strong"),e(3905,"Componente compat\xEDvel:"),t(),i(3906,"code"),e(3907,"po-datepicker-range"),t()()()(),i(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),e(3912," rangePresets"),n(3913,"br"),t()()(),i(3914,"td",17)(3915,"code",28),e(3916,"boolean "),t(),i(3917,"code",32),e(3918," Array<string>"),t()(),i(3919,"td",20)(3920,"em")(3921,"strong"),e(3922,"(opcional)"),t()(),i(3923,"p"),e(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),t(),i(3925,"p"),e(3926,"Aceita os seguintes valores:"),t(),i(3927,"ul")(3928,"li")(3929,"code"),e(3930,"true"),t(),e(3931,": exibe todos os presets padr\xE3o."),t(),i(3932,"li")(3933,"code"),e(3934,"false"),t(),e(3935,": n\xE3o exibe os presets padr\xE3o."),t(),i(3936,"li")(3937,"code"),e(3938,"Array<string>"),t(),e(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),t()(),i(3940,"p")(3941,"strong"),e(3942,"Componente compat\xEDvel:"),t(),i(3943,"code"),e(3944,"po-datepicker-range"),t()()()(),i(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),e(3949," rangePresetsOrder"),n(3950,"br"),t()()(),i(3951,"td",17)(3952,"code",77),e(3953,"'asc' "),t(),i(3954,"code",78),e(3955," 'desc'"),t()(),i(3956,"td",20)(3957,"em")(3958,"strong"),e(3959,"(opcional)"),t()(),i(3960,"p"),e(3961,"Define a ordena\xE7\xE3o dos presets na lista."),t(),i(3962,"p"),e(3963,"Valores aceitos:"),t(),i(3964,"ul")(3965,"li")(3966,"code"),e(3967,"'asc'"),t(),e(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),t(),i(3969,"li")(3970,"code"),e(3971,"'desc'"),t(),e(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),t()(),i(3973,"p")(3974,"strong"),e(3975,"Componente compat\xEDvel:"),t(),i(3976,"code"),e(3977,"po-datepicker-range"),t()()()(),i(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),e(3982," readonly"),n(3983,"br"),t()()(),i(3984,"td",17)(3985,"code",28),e(3986,"boolean"),t()(),i(3987,"td",20)(3988,"em")(3989,"strong"),e(3990,"(opcional)"),t()(),i(3991,"p"),e(3992,"Indica que o campo ser\xE1 somente leitura."),t(),i(3993,"p")(3994,"strong"),e(3995,"Componentes compat\xEDveis:"),t(),i(3996,"code"),e(3997,"po-datepicker"),t(),e(3998,", "),i(3999,"code"),e(4e3,"po-datepicker-range"),t(),e(4001,", "),i(4002,"code"),e(4003,"po-timepicker"),t(),e(4004,", "),i(4005,"code"),e(4006,"po-input"),t(),e(4007,", "),i(4008,"code"),e(4009,"po-number"),t(),e(4010,`,
`),i(4011,"code"),e(4012,"po-decimal"),t(),e(4013,", "),i(4014,"code"),e(4015,"po-select"),t(),e(4016,", "),i(4017,"code"),e(4018,"po-textarea"),t(),e(4019,", "),i(4020,"code"),e(4021,"po-password"),t(),e(4022,"."),t()()(),i(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),e(4027," removeInitialFilter"),n(4028,"br"),t()()(),i(4029,"td",17)(4030,"code",28),e(4031,"boolean"),t()(),i(4032,"td",20)(4033,"em")(4034,"strong"),e(4035,"(opcional)"),t()(),i(4036,"p"),e(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4038,"blockquote")(4039,"p"),e(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4041,"p")(4042,"strong"),e(4043,"Componente compat\xEDvel"),t(),e(4044,": "),i(4045,"code"),e(4046,"po-combo"),t()()()(),i(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),e(4051," required"),n(4052,"br"),t()()(),i(4053,"td",17)(4054,"code",28),e(4055,"boolean"),t()(),i(4056,"td",20)(4057,"em")(4058,"strong"),e(4059,"(opcional)"),t()(),i(4060,"p"),e(4061,"Define a obrigatoriedade do campo."),t(),i(4062,"p")(4063,"strong"),e(4064,"Componentes compat\xEDveis:"),t(),i(4065,"code"),e(4066,"po-datepicker"),t(),e(4067,", "),i(4068,"code"),e(4069,"po-datepicker-range"),t(),e(4070,", "),i(4071,"code"),e(4072,"po-timepicker"),t(),e(4073,", "),i(4074,"code"),e(4075,"po-input"),t(),e(4076,", "),i(4077,"code"),e(4078,"po-number"),t(),e(4079,`,
`),i(4080,"code"),e(4081,"po-decimal"),t(),e(4082,", "),i(4083,"code"),e(4084,"po-select"),t(),e(4085,", "),i(4086,"code"),e(4087,"po-radio-group"),t(),e(4088,", "),i(4089,"code"),e(4090,"po-combo"),t(),e(4091,", "),i(4092,"code"),e(4093,"po-lookup"),t(),e(4094,", "),i(4095,"code"),e(4096,"po-checkbox-group"),t(),e(4097,", "),i(4098,"code"),e(4099,"po-multiselect"),t(),e(4100,`,
`),i(4101,"code"),e(4102,"po-textarea"),t(),e(4103,", "),i(4104,"code"),e(4105,"po-password``, "),t(),e(4106,"po-upload`."),t()()(),i(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),e(4111," requiredFieldErrorMessage"),n(4112,"br"),t()()(),i(4113,"td",17)(4114,"code",28),e(4115,"boolean"),t()(),i(4116,"td",20)(4117,"em")(4118,"strong"),e(4119,"(opcional)"),t()(),i(4120,"p"),e(4121,"Exibe a mensagem setada na propriedade "),i(4122,"code"),e(4123,"errorMessage"),t(),e(4124," se o campo estiver vazio e for requerido."),t(),i(4125,"blockquote")(4126,"p"),e(4127,"Necess\xE1rio que a propriedade "),i(4128,"code"),e(4129,"required"),t(),e(4130," esteja habilitada."),t()(),i(4131,"p")(4132,"strong"),e(4133,"Componentes compat\xEDveis:"),t(),i(4134,"code"),e(4135,"po-datepicker"),t(),e(4136,", "),i(4137,"code"),e(4138,"po-timepicker"),t(),e(4139,", "),i(4140,"code"),e(4141,"po-input"),t(),e(4142,", "),i(4143,"code"),e(4144,"po-number"),t(),e(4145,", "),i(4146,"code"),e(4147,"po-decimal"),t(),e(4148,", "),i(4149,"code"),e(4150,"po-password"),t(),e(4151,"."),t()()(),i(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),e(4156," restrictions"),n(4157,"br"),t()()(),i(4158,"td",17)(4159,"code",79),e(4160,"PoUploadFileRestrictions"),t()(),i(4161,"td",20)(4162,"em")(4163,"strong"),e(4164,"(opcional)"),t()(),i(4165,"p"),e(4166,"Objeto que segue a defini\xE7\xE3o da interface "),i(4167,"code"),e(4168,"PoUploadFileRestrictions"),t(),e(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4170,"p")(4171,"strong"),e(4172,"Componente compat\xEDvel"),t(),e(4173,": "),i(4174,"code"),e(4175,"po-upload"),t()()()(),i(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),e(4180," rows"),n(4181,"br"),t()()(),i(4182,"td",17)(4183,"code",41),e(4184,"number"),t()(),i(4185,"td",20)(4186,"em")(4187,"strong"),e(4188,"(opcional)"),t()(),i(4189,"p"),e(4190,"Quantidade de linhas exibidas no "),i(4191,"code"),e(4192,"po-textarea"),t(),e(4193,"."),t()()(),i(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),e(4198," searchService"),n(4199,"br"),t()()(),i(4200,"td",17)(4201,"code",18),e(4202,"string "),t(),i(4203,"code",80),e(4204," PoLookupFilter"),t()(),i(4205,"td",20)(4206,"em")(4207,"strong"),e(4208,"(opcional)"),t()(),i(4209,"p"),e(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4211,"code"),e(4212,"columns"),t(),e(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4214,"strong"),e(4215,"Importante:"),t()(),i(4216,"blockquote")(4217,"p"),e(4218,"Caso utilizar a propriedade "),i(4219,"code"),e(4220,"optionsService"),t(),e(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4222,"a",75),e(4223,"guia de API do PO UI"),t(),e(4224,"."),t()()()(),i(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),e(4229," secondInterval"),n(4230,"br"),t()()(),i(4231,"td",17)(4232,"code",41),e(4233,"number"),t()(),i(4234,"td",20)(4235,"em")(4236,"strong"),e(4237,"(opcional)"),t()(),i(4238,"p"),e(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),t()()(),i(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),e(4244," secret"),n(4245,"br"),t()()(),i(4246,"td",17)(4247,"code",28),e(4248,"boolean"),t()(),i(4249,"td",20)(4250,"em")(4251,"strong"),e(4252,"(opcional)"),t()(),i(4253,"p"),e(4254,"Esconde a informa\xE7\xE3o estilo "),i(4255,"em"),e(4256,"password"),t(),e(4257,", pode ser utilizado quando o tipo de dado for "),i(4258,"em"),e(4259,"string"),t(),e(4260,"."),t()()(),i(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),e(4265," showRequired"),n(4266,"br"),t()()(),i(4267,"td",17)(4268,"code",28),e(4269,"boolean"),t()(),i(4270,"td",20)(4271,"em")(4272,"strong"),e(4273,"(opcional)"),t()(),i(4274,"p"),e(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4276,"blockquote")(4277,"p"),e(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4279,"ul")(4280,"li"),e(4281,"N\xE3o possuir "),i(4282,"code"),e(4283,"p-help"),t(),e(4284," e/ou "),i(4285,"code"),e(4286,"p-label"),t(),e(4287,"."),t()(),i(4288,"p")(4289,"strong"),e(4290,"Componentes compat\xEDveis:"),t(),i(4291,"code"),e(4292,"po-datepicker"),t(),e(4293,", "),i(4294,"code"),e(4295,"po-datepicker-range"),t(),e(4296,", "),i(4297,"code"),e(4298,"po-timepicker"),t(),e(4299,", "),i(4300,"code"),e(4301,"po-input"),t(),e(4302,", "),i(4303,"code"),e(4304,"po-number"),t(),e(4305,`,
`),i(4306,"code"),e(4307,"po-decimal"),t(),e(4308,", "),i(4309,"code"),e(4310,"po-select"),t(),e(4311,", "),i(4312,"code"),e(4313,"po-radio-group"),t(),e(4314,", "),i(4315,"code"),e(4316,"po-combo"),t(),e(4317,", "),i(4318,"code"),e(4319,"po-lookup"),t(),e(4320,", "),i(4321,"code"),e(4322,"po-checkbox-group"),t(),e(4323,", "),i(4324,"code"),e(4325,"po-multiselect"),t(),e(4326,`,
`),i(4327,"code"),e(4328,"po-textarea"),t(),e(4329,", "),i(4330,"code"),e(4331,"po-password"),t(),e(4332,", "),i(4333,"code"),e(4334,"po-upload"),t(),e(4335,"."),t()()(),i(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),e(4340," showSeconds"),n(4341,"br"),t()()(),i(4342,"td",17)(4343,"code",28),e(4344,"boolean"),t()(),i(4345,"td",20)(4346,"em")(4347,"strong"),e(4348,"(opcional)"),t()(),i(4349,"p"),e(4350,"Exibe a coluna de segundos no painel do timepicker."),t()()(),i(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),e(4355," showThumbnail"),n(4356,"br"),t()()(),i(4357,"td",17)(4358,"code",28),e(4359,"boolean"),t()(),i(4360,"td",20)(4361,"em")(4362,"strong"),e(4363,"(opcional)"),t()(),i(4364,"p"),e(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),i(4366,"blockquote")(4367,"p"),e(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),i(4369,"code"),e(4370,".png"),t(),e(4371,", "),i(4372,"code"),e(4373,".jpg"),t(),e(4374,", "),i(4375,"code"),e(4376,".jpeg"),t(),e(4377," e "),i(4378,"code"),e(4379,".gif"),t(),e(4380,")."),t()(),i(4381,"p")(4382,"strong"),e(4383,"Componente compat\xEDvel"),t(),e(4384,": "),i(4385,"code"),e(4386,"po-upload"),t()()()(),i(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),e(4391," size"),n(4392,"br"),t()()(),i(4393,"td",17)(4394,"code",18),e(4395,"string"),t()(),i(4396,"td",20)(4397,"em")(4398,"strong"),e(4399,"(opcional)"),t()(),i(4400,"p"),e(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4402,"ul")(4403,"li")(4404,"code"),e(4405,"small"),t(),e(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4407,"li")(4408,"code"),e(4409,"medium"),t(),e(4410,": aplica a medida medium de cada componente."),t(),i(4411,"li")(4412,"code"),e(4413,"large"),t(),e(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4415,"code"),e(4416,"po-checkbox"),t(),e(4417," e "),i(4418,"code"),e(4419,"po-radio-group"),t(),e(4420,")."),i(4421,"blockquote")(4422,"p"),e(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4424,"code"),e(4425,"medium"),t(),e(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4427,"a",21),e(4428,"po-theme"),t(),e(4429,"."),t()()()()()(),i(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),e(4434," sort"),n(4435,"br"),t()()(),i(4436,"td",17)(4437,"code",28),e(4438,"boolean"),t()(),i(4439,"td",20)(4440,"em")(4441,"strong"),e(4442,"(opcional)"),t()(),i(4443,"p"),e(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4445,"p")(4446,"strong"),e(4447,"Componentes compat\xEDveis:"),t(),i(4448,"code"),e(4449,"po-combo"),t(),e(4450,", po-multiselect"),t()()(),i(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),e(4455," step"),n(4456,"br"),t()()(),i(4457,"td",17)(4458,"code",41),e(4459,"number"),t()(),i(4460,"td",20)(4461,"em")(4462,"strong"),e(4463,"(opcional)"),t()(),i(4464,"p"),e(4465,"Intervalo utilizado no "),i(4466,"code"),e(4467,"po-number"),t(),e(4468,"."),t()()(),i(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),e(4473," thousandMaxlength"),n(4474,"br"),t()()(),i(4475,"td",17)(4476,"code",41),e(4477,"number"),t()(),i(4478,"td",20)(4479,"em")(4480,"strong"),e(4481,"(opcional)"),t()(),i(4482,"p"),e(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4484,"blockquote")(4485,"p"),e(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4487,"code"),e(4488,"type"),t(),e(4489," for "),i(4490,"em"),e(4491,"currency"),t(),e(4492," ou "),i(4493,"em"),e(4494,"decimal"),t(),e(4495,"."),t()()()(),i(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),e(4500," type"),n(4501,"br"),t()()(),i(4502,"td",17)(4503,"code",18),e(4504,"string "),t(),i(4505,"code",81),e(4506," PoDynamicFieldType"),t()(),i(4507,"td",20)(4508,"em")(4509,"strong"),e(4510,"(opcional)"),t()(),i(4511,"p"),e(4512,"Tipo do valor campo."),t(),i(4513,"p"),e(4514,"Valores v\xE1lidos:"),t(),i(4515,"ul")(4516,"li")(4517,"code"),e(4518,"boolean"),t(),e(4519,": Valores "),i(4520,"em"),e(4521,"booleanos"),t(),e(4522,"."),t(),i(4523,"li")(4524,"code"),e(4525,"currency"),t(),e(4526,": Valores monet\xE1rios."),t(),i(4527,"li")(4528,"code"),e(4529,"decimal"),t(),e(4530,": Valores decimais."),t(),i(4531,"li")(4532,"code"),e(4533,"date"),t(),e(4534,": Valores de datas."),i(4535,"ul")(4536,"li"),e(4537,"Aceita os tipos "),i(4538,"strong"),e(4539,"string"),t(),e(4540," e "),i(4541,"strong"),e(4542,"Date"),t(),e(4543,` padr\xE3o do Javascript,
por exemplo: `),i(4544,"code"),e(4545,"'2017-11-28'"),t(),e(4546," ou "),i(4547,"code"),e(4548,"new Date(2017, 10, 28)"),t(),e(4549,"."),t()()(),i(4550,"li")(4551,"code"),e(4552,"dateTime"),t(),e(4553,": Valor de data com hor\xE1rio."),i(4554,"ul")(4555,"li"),e(4556,"Aceita o tipo "),i(4557,"em"),e(4558,"string"),t(),e(4559," no formato "),i(4560,"strong"),e(4561,"ISO-8601"),t(),e(4562," extendido "),i(4563,"strong"),e(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4565,`
e o tipo `),i(4566,"strong"),e(4567,"Date"),t(),e(4568," padr\xE3o do Javascript, por exemplo: "),i(4569,"code"),e(4570,"'2017-11-28T00:00:00-02:00'"),t(),e(4571," ou "),i(4572,"code"),e(4573,"new Date(2017, 10, 28)"),t(),e(4574,"."),t()()(),i(4575,"li")(4576,"code"),e(4577,"number"),t(),e(4578,": Valores num\xE9ricos."),t(),i(4579,"li")(4580,"code"),e(4581,"string"),t(),e(4582,": Textos."),t(),i(4583,"li")(4584,"code"),e(4585,"time"),t(),e(4586,": Valor do hor\xE1rio."),i(4587,"ul")(4588,"li"),e(4589,"Aceita o tipo "),i(4590,"strong"),e(4591,"string"),t(),e(4592," nos formatos "),i(4593,"strong"),e(4594,"'HH:mm:ss'"),t(),e(4595," ou "),i(4596,"strong"),e(4597,"'HH:mm:ss.ffffff'"),t(),e(4598,", por exemplo: "),i(4599,"code"),e(4600,"'23:12:45'"),t(),e(4601,"."),t()()()()()(),i(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),e(4606," url"),n(4607,"br"),t()()(),i(4608,"td",17)(4609,"code",18),e(4610,"string"),t()(),i(4611,"td",20)(4612,"em")(4613,"strong"),e(4614,"(opcional)"),t()(),i(4615,"p"),e(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4617,"p")(4618,"strong"),e(4619,"Componente compat\xEDvel"),t(),e(4620,": "),i(4621,"code"),e(4622,"po-upload"),t()()()(),i(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),e(4627," validate"),n(4628,"br"),t()()(),i(4629,"td",17)(4630,"code",18),e(4631,"string "),t(),i(4632,"code",29),e(4633," Function"),t()(),i(4634,"td",20)(4635,"em")(4636,"strong"),e(4637,"(opcional)"),t()(),i(4638,"p"),e(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4640,"strong"),e(4641,"mudan\xE7as do campo"),t(),e(4642,"."),t(),i(4643,"ul")(4644,"li"),e(4645,"A propriedade aceita os seguintes tipos:"),t()(),i(4646,"ul")(4647,"li")(4648,"strong"),e(4649,"String"),t(),e(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4651,"code"),e(4652,"POST"),t(),e(4653,"."),t(),i(4654,"li")(4655,"strong"),e(4656,"Function"),t(),e(4657,": M\xE9todo que ser\xE1 executado."),t()(),i(4658,"p"),e(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4660,"code"),e(4661,"PoDynamicFormFieldChanged"),t(),e(4662,":"),t(),i(4663,"p")(4664,"code"),e(4665,"{ property: 'property name', value: 'new value' }"),t()(),i(4666,"p"),e(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4668,"a",82),e(4669,"PoDynamicFormFieldValidation"),t(),e(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4671,"pre")(4672,"code"),e(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4674,"p"),e(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4676,"code"),e(4677,"bind"),t(),e(4678,`, por exemplo:
`),i(4679,"code"),e(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),e(4685," visible"),n(4686,"br"),t()()(),i(4687,"td",17)(4688,"code",28),e(4689,"boolean"),t()(),i(4690,"td",20)(4691,"em")(4692,"strong"),e(4693,"(opcional)"),t()(),i(4694,"p"),e(4695,"Indica se o campo ser\xE1 vis\xEDvel."),t()()(),i(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),e(4700," yearRangeLimit"),n(4701,"br"),t()()(),i(4702,"td",17)(4703,"code",41),e(4704,"number"),t()(),i(4705,"td",20)(4706,"em")(4707,"strong"),e(4708,"(opcional)"),t()(),i(4709,"p"),e(4710,"Define o limite de anos exibidos na lista de anos do "),i(4711,"code"),e(4712,"po-datepicker"),t(),e(4713," nos modos "),i(4714,"code"),e(4715,"month-year"),t(),e(4716," e "),i(4717,"code"),e(4718,"year"),t(),e(4719,"."),t()()()(),i(4720,"h4",38)(4721,"code",5),e(4722,"PoDynamicFormLoad"),t()(),i(4723,"div",2)(4724,"p"),n(4725,"a",83),t(),i(4726,"p"),e(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),i(4728,"h4",9),e(4729,"Propriedades"),t(),i(4730,"table",10)(4731,"tr",11)(4732,"th",12),e(4733,"Nome"),t(),i(4734,"th",12),e(4735,"Tipo"),t(),i(4736,"th",12),e(4737,"Descri\xE7\xE3o"),t()(),i(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),e(4742," fields"),n(4743,"br"),t()()(),i(4744,"td",17)(4745,"code",22),e(4746,"Array<PoDynamicFormField>"),t()(),i(4747,"td",20)(4748,"em")(4749,"strong"),e(4750,"(opcional)"),t()(),i(4751,"p"),e(4752,"Lista com as novas defini\xE7\xF5es dos campos."),t(),i(4753,"blockquote")(4754,"p"),e(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),i(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),e(4760," focus"),n(4761,"br"),t()()(),i(4762,"td",17)(4763,"code",18),e(4764,"string"),t()(),i(4765,"td",20)(4766,"em")(4767,"strong"),e(4768,"(opcional)"),t()(),i(4769,"p"),e(4770,"Nome do campo que receber\xE1 o foco."),t(),i(4771,"p"),e(4772,"Exemplo:"),t(),i(4773,"pre")(4774,"code"),e(4775,`focus: 'name'
`),t()()()(),i(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),e(4780," value"),n(4781,"br"),t()()(),i(4782,"td",17)(4783,"code",33),e(4784,"any"),t()(),i(4785,"td",20)(4786,"em")(4787,"strong"),e(4788,"(opcional)"),t()(),i(4789,"p"),e(4790,"Objeto contendo os novos valores."),t(),i(4791,"p"),e(4792,"Exemplo:"),t(),i(4793,"pre")(4794,"code"),e(4795,`{
  name: 'new name',
  age: 10
}
`),t()(),i(4796,"blockquote")(4797,"p"),e(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),i(4799,"h4",38)(4800,"code",5),e(4801,"PoDynamicFormFieldChanged"),t()(),i(4802,"div",2)(4803,"p"),e(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),i(4805,"h4",9),e(4806,"Propriedades"),t(),i(4807,"table",10)(4808,"tr",11)(4809,"th",12),e(4810,"Nome"),t(),i(4811,"th",12),e(4812,"Tipo"),t(),i(4813,"th",12),e(4814,"Descri\xE7\xE3o"),t()(),i(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),e(4819," property"),n(4820,"br"),t()()(),i(4821,"td",17)(4822,"code",18),e(4823,"string"),t()(),i(4824,"td",20)(4825,"p"),e(4826,"Valor da propriedade do campo."),t()()(),i(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),e(4831," value"),n(4832,"br"),t()()(),i(4833,"td",17)(4834,"code",33),e(4835,"any"),t()(),i(4836,"td",20)(4837,"p"),e(4838,"Novo valor do campo."),t()()()(),i(4839,"h4",38)(4840,"code",5),e(4841,"PoDynamicFormFieldValidation"),t()(),i(4842,"div",2)(4843,"p"),n(4844,"a",84),t(),i(4845,"p"),e(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),i(4847,"h4",9),e(4848,"Propriedades"),t(),i(4849,"table",10)(4850,"tr",11)(4851,"th",12),e(4852,"Nome"),t(),i(4853,"th",12),e(4854,"Tipo"),t(),i(4855,"th",12),e(4856,"Descri\xE7\xE3o"),t()(),i(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),e(4861," field"),n(4862,"br"),t()()(),i(4863,"td",17)(4864,"code",85),e(4865,"PoDynamicFormField"),t()(),i(4866,"td",20)(4867,"em")(4868,"strong"),e(4869,"(opcional)"),t()(),i(4870,"p"),e(4871,"Novas defini\xE7\xF5es das propriedades do campo."),t(),i(4872,"blockquote")(4873,"p"),e(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),i(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),e(4879," focus"),n(4880,"br"),t()()(),i(4881,"td",17)(4882,"code",28),e(4883,"boolean"),t()(),i(4884,"td",20)(4885,"em")(4886,"strong"),e(4887,"(opcional)"),t()(),i(4888,"p"),e(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),i(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),e(4894," value"),n(4895,"br"),t()()(),i(4896,"td",17)(4897,"code",33),e(4898,"any"),t()(),i(4899,"td",20)(4900,"em")(4901,"strong"),e(4902,"(opcional)"),t()(),i(4903,"p"),e(4904,"Novo valor do campo"),t()()()(),i(4905,"h4",38)(4906,"code",5),e(4907,"PoDynamicFormValidation"),t()(),i(4908,"div",2)(4909,"p"),n(4910,"a",86),t(),i(4911,"p"),e(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),i(4913,"h4",9),e(4914,"Propriedades"),t(),i(4915,"table",10)(4916,"tr",11)(4917,"th",12),e(4918,"Nome"),t(),i(4919,"th",12),e(4920,"Tipo"),t(),i(4921,"th",12),e(4922,"Descri\xE7\xE3o"),t()(),i(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),e(4927," fields"),n(4928,"br"),t()()(),i(4929,"td",17)(4930,"code",22),e(4931,"Array<PoDynamicFormField>"),t()(),i(4932,"td",20)(4933,"em")(4934,"strong"),e(4935,"(opcional)"),t()(),i(4936,"p"),e(4937,"Lista com as novas defini\xE7\xF5es dos campos."),t(),i(4938,"blockquote")(4939,"p"),e(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),i(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),e(4945," focus"),n(4946,"br"),t()()(),i(4947,"td",17)(4948,"code",18),e(4949,"string"),t()(),i(4950,"td",20)(4951,"em")(4952,"strong"),e(4953,"(opcional)"),t()(),i(4954,"p"),e(4955,"Nome do campo que receber\xE1 o foco."),t(),i(4956,"p"),e(4957,"Exemplo:"),t(),i(4958,"pre")(4959,"code"),e(4960,`focus: 'name'
`),t()()()(),i(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),e(4965," value"),n(4966,"br"),t()()(),i(4967,"td",17)(4968,"code",33),e(4969,"any"),t()(),i(4970,"td",20)(4971,"em")(4972,"strong"),e(4973,"(opcional)"),t()(),i(4974,"p"),e(4975,"Objeto contendo os novos valores."),t(),i(4976,"p"),e(4977,"Exemplo:"),t(),i(4978,"pre")(4979,"code"),e(4980,`{
  name: 'new name',
  age: 10
}
`),t()(),i(4981,"blockquote")(4982,"p"),e(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),i(4984,"h4",38)(4985,"code",5),e(4986,"ErrorAsyncProperties"),t()(),i(4987,"div",2)(4988,"p"),e(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),i(4990,"h4",9),e(4991,"Propriedades"),t(),i(4992,"table",10)(4993,"tr",11)(4994,"th",12),e(4995,"Nome"),t(),i(4996,"th",12),e(4997,"Tipo"),t(),i(4998,"th",12),e(4999,"Descri\xE7\xE3o"),t()(),i(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),e(5004," errorAsync"),n(5005,"br"),t()()(),i(5006,"td",17)(5007,"code",46),e(5008,"(value) => Observable<boolean>"),t()(),i(5009,"td",20)(5010,"p"),e(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(5012,"code"),e(5013,"change"),t(),e(5014," ou "),i(5015,"code"),e(5016,"change-model"),t(),e(5017,", dependendo do valor da propriedade "),i(5018,"code"),e(5019,"triggerMode"),t(),e(5020,"."),t()()(),i(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),e(5025," triggerMode"),n(5026,"br"),t()()(),i(5027,"td",17)(5028,"code",87),e(5029,"'change' "),t(),i(5030,"code",88),e(5031," 'changeModel'"),t()(),i(5032,"td",20)(5033,"em")(5034,"strong"),e(5035,"(opcional)"),t()(),i(5036,"p"),e(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),i(5038,"code"),e(5039,"change"),t(),e(5040," ou "),i(5041,"code"),e(5042,"change-model"),t(),e(5043,"."),t()()()(),i(5044,"h3"),e(5045,"Enums"),t(),i(5046,"h4",4)(5047,"code",5),e(5048,"ForceBooleanComponentEnum"),t()(),i(5049,"div",2)(5050,"p"),e(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),i(5052,"h4",9),e(5053,"Propriedades"),t(),i(5054,"table",10)(5055,"tr",11)(5056,"th",12),e(5057,"Nome"),t(),i(5058,"th",12),e(5059,"Descri\xE7\xE3o"),t()(),i(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),e(5064," switch"),n(5065,"br"),t()()(),i(5066,"td",20)(5067,"p"),e(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),i(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),e(5073," checkbox"),n(5074,"br"),t()()(),i(5075,"td",20)(5076,"p"),e(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),i(5078,"h4",4)(5079,"code",5),e(5080,"ForceOptionComponentEnum"),t()(),i(5081,"div",2)(5082,"p"),e(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),i(5084,"h4",9),e(5085,"Propriedades"),t(),i(5086,"table",10)(5087,"tr",11)(5088,"th",12),e(5089,"Nome"),t(),i(5090,"th",12),e(5091,"Descri\xE7\xE3o"),t()(),i(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),e(5096," radioGroup"),n(5097,"br"),t()()(),i(5098,"td",20)(5099,"p"),e(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),i(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),e(5105," select"),n(5106,"br"),t()()(),i(5107,"td",20)(5108,"p"),e(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),i(5110,"h4",4)(5111,"code",5),e(5112,"PoDynamicFieldType"),t()(),i(5113,"div",2)(5114,"p"),e(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),i(5116,"h4",9),e(5117,"Propriedades"),t(),i(5118,"table",10)(5119,"tr",11)(5120,"th",12),e(5121,"Nome"),t(),i(5122,"th",12),e(5123,"Descri\xE7\xE3o"),t()(),i(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),e(5128," Boolean"),n(5129,"br"),t()()(),i(5130,"td",20)(5131,"p"),e(5132,"Valor booleano."),t()()(),i(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),e(5137," Currency"),n(5138,"br"),t()()(),i(5139,"td",20)(5140,"p"),e(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),i(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),e(5146," Decimal"),n(5147,"br"),t()()(),i(5148,"td",20)(5149,"p"),e(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),i(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),e(5155," Date"),n(5156,"br"),t()()(),i(5157,"td",20)(5158,"p"),e(5159,"Valor para data."),t()()(),i(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),e(5164," DateTime"),n(5165,"br"),t()()(),i(5166,"td",20)(5167,"p"),e(5168,"Valor para data e hora."),t()()(),i(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),e(5173," Time"),n(5174,"br"),t()()(),i(5175,"td",20)(5176,"p"),e(5177,"Utilizado para informar/exibir hora."),t()()(),i(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),e(5182," Number"),n(5183,"br"),t()()(),i(5184,"td",20)(5185,"p"),e(5186,"Valor num\xE9rico."),t()()(),i(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),e(5191," String"),n(5192,"br"),t()()(),i(5193,"td",20)(5194,"p"),e(5195,"Texto."),t()()(),i(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),e(5200," Upload"),n(5201,"br"),t()()(),i(5202,"td",20)(5203,"p"),e(5204,"Utilizado para fazer uploads de arquivos."),t()()()(),i(5205,"h4",4)(5206,"code",5),e(5207,"PoTimepickerModelFormat"),t()(),i(5208,"div",2)(5209,"p")(5210,"em"),e(5211,"Enum"),t(),e(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),t()(),i(5213,"h4",9),e(5214,"Propriedades"),t(),i(5215,"table",10)(5216,"tr",11)(5217,"th",12),e(5218,"Nome"),t(),i(5219,"th",12),e(5220,"Descri\xE7\xE3o"),t()(),i(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),e(5225," HourMinute"),n(5226,"br"),t()()(),i(5227,"td",20)(5228,"p"),e(5229,"Formato b\xE1sico "),i(5230,"code"),e(5231,"HH:mm"),t(),e(5232," (ex: "),i(5233,"code"),e(5234,"14:30"),t(),e(5235,")."),t()()(),i(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),e(5240," HourMinuteSecond"),n(5241,"br"),t()()(),i(5242,"td",20)(5243,"p"),e(5244,"Formato com segundos "),i(5245,"code"),e(5246,"HH:mm:ss"),t(),e(5247," (ex: "),i(5248,"code"),e(5249,"14:30:00"),t(),e(5250,")."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(B(J),B(W))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return r.changeTab("doc")}),n(3,"sample-po-dynamic-form-doc"),t(),i(4,"po-tab",3),c("p-click",function(){return r.changeTab("web")}),n(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",r.actions),d(2),p("p-active",r.activeTab==="doc"),d(2),p("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"))},dependencies:[Y,x,S,$,te,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[H.forChild(fe),H]})}return o})();var ot=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[Q,re]})}return o})();export{ot as DocPoDynamicFormModule};
